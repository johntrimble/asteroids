(ns asteroids.game
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.core :refer :all]
            [asteroids.view :refer [swing-view
                                    render-circle
                                    render-ship
                                    input-system
                                    thrust-system
                                    rotate-system]]
            [asteroids.physics :refer [physics-system
                                       collidable
                                       collision-detection-system
                                       collision-physics-system]])
  (:import [javax.swing JFrame JPanel JButton]
           [java.awt Font Color Graphics Graphics2D BorderLayout Dimension Polygon]
           [java.awt.geom AffineTransform]
           [java.awt.color ColorSpace]
           [java.awt.font FontRenderContext]
           [java.awt.event ActionListener]
           [java.util Timer TimerTask]))

;; Components
(defn health
  ([health] {:name :health, :max health, :current health})
  ([health remaining] {:name :health, :max health, :current remaining}))

(defn damage [damage]
  {:name :damage, :damage damage})

(defn fadeout
  ([duration] (fadeout duration duration))
  ([duration remaining]
   {:name :fadeout, :duration duration, :remaining remaining}))

(defn ttl
  ([duration] (ttl duration duration))
  ([duration remaining]
   {:name :ttl, :duration duration, :remaining remaining}))

(defn health-bar [entity-id]
  {:name :health-bar, :entity-id entity-id, :percentage 1})


;; component utility functions

(defn get-damage [entity]
  (-> entity (get-component :damage) :damage))


;; Entities

;; damage

(defn render-damage [amount ^Graphics2D g entity]
  (let [[x y] (get-position entity)
        opacity (* 255 (/ (get-in entity [:fadeout :remaining] 1)
                          (get-in entity [:fadeout :duration] 1)))
        color (Color. 255 0 0 (int opacity))]
    (.setColor g color)
    (.drawString g
                 (str "-" (int amount))
                 (int x)
                 (int y))))

(defn damage-entity [[x y] amount]
  (entity (position [x y])
          (velocity [0 -1.5])
          (fadeout 100)
          (ttl 100)
          (renderable (partial render-damage amount))))


(defn render-health-bar [^Graphics2D g entity]
  (let [len 740
        [x y] (get-position entity)
        percentage (get-in entity [:health-bar :percentage])
        fill-width (int (* percentage 778))]
    (doto g
      (.setColor Color/GRAY)
      (.fillRect (int x)
                 (int y)
                 len
                 16)
      (.setColor Color/GREEN)
      (.fillRect (int (+ x 1))
                 (int (+ y 1))
                 fill-width
                 14)
      (.setColor Color/RED)
      (.fillRect (int (+ (+ x 1) fill-width))
                 (int (+ y 1))
                 (- (- len 2) fill-width)
                 14))))

(defn health-bar-entity [entity-id]
  (entity (health-bar entity-id)
          (renderable render-health-bar)
          (position [30 780])))

(defn generate-asteroid []
  (let [x (rand-nth (range 800))
        y (rand-nth (range 800))
        r (rand-nth (range 2 25))
        xmin (int (- x r))
        xmax (int (+ x r))
        ymin (int (- y r))
        ymax (int (+ y r))
        vx (rand-nth (range -5 5))
        vy (rand-nth (range -5 5))]
    (entity (position [x y])
            (collidable)
            (velocity [vx vy])
            (mass (* Math/PI (* r r)))
            (bounding-box [xmin ymin] [xmax ymax])
            (renderable (partial render-circle
                                 (Color. 135 108 46)
                                 r)))))

(defn add-ship [world]
  (let [ship (entity (position [400 400])
                     (velocity [0 0])
                     (acceleration [0 0])
                     (rotation [1 0])
                     (collidable)
                     (player)
                     (health 10000)
                     (bounding-box [390 390] [410 410])
                     (mass (* Math/PI (* 10 10)))
                     (max-velocity 10)
                     (input :keyboard)
                     (renderable render-ship))
        health-bar (health-bar-entity (get-id ship))]
    (reduce assoc-entity world [ship health-bar])))

;; World Generation

(defn add-asteroids [world]
  (->> (range 15)
       (map (fn [_] (generate-asteroid)))
       (reduce assoc-entity world)))

(defn generate-world []
  (-> {}
      (add-ship)
      (add-asteroids)))


;; Systems

;; fadeout system

(defn update-fadeout [entity]
  (let [component (get-component entity :fadeout)
        duration (:duration component)
        remaining (- (:remaining component) 1)]
    (if (> remaining -1)
      (assoc-component entity
                       (fadeout duration remaining))
      (dissoc entity :fadeout))))

(defn fadeout-system [world]
  (->> world
       get-entities
       (filter #(has-component? % :fadeout))
       (map update-fadeout)
       (reduce assoc-entity world)))


;; time-to-live system

(defn update-ttl [entity]
  (let [component (get-component entity :ttl)
        duration (:duration component)
        remaining (- (:remaining component) 1)]
    (assoc-component entity
                     (ttl duration remaining))))

(defn ttl-system [world]
  (let [ttl-entities (->> world
                          get-entities
                          (filter #(has-component? % :ttl))
                          (map update-ttl))
        entities-to-remove (->> ttl-entities
                                (filter #(> 0 (-> %
                                                  (get-component :ttl)
                                                  :remaining))))
        world (reduce assoc-entity world ttl-entities)
        world (reduce dissoc-entity world entities-to-remove)]
    world))


;; impulse damage system

(defn- handle-impulse-damage [_ entity]
  (let [impulse (-> entity (get-component :impulse) :magnitude)
        current-damage (-> entity (get-component :damage) (:damage 0))
        impulse-damage (- impulse 300)]
    (if (> impulse-damage 0)
      (assoc-component entity
                       (damage (+ current-damage impulse-damage)))
      entity)))

(defn impulse-damage-system [world]
  (->> world
       (get-entities)
       (filter #(has-components? % :health :impulse))
       (map (partial handle-impulse-damage world))
       (reduce assoc-entity world)))


;; damage resolution system

(defn apply-damage [entity]
  (let [current (get-in entity [:health :current])
        max-health (get-in entity [:health :max])
        damage (get-in entity [:damage :damage])
        current (- current damage)]
    (assoc-component (dissoc entity :damage)
                     (health max-health current))))

(defn damage-resolution-system [world]
  (let [entities (->> world get-entities (filter #(has-components? % :damage :health)))
        damage-entities (map #(damage-entity (get-position %) (get-damage %))
                             entities)
        updated-health (map apply-damage entities)
        world (reduce assoc-entity world damage-entities)
        world (reduce assoc-entity world updated-health)]
    world))
  #_(->> world
       get-entities
       (filter #(has-component? % :damage))
       (map #(damage-entity (get-position %) (get-damage %)))
       (reduce assoc-entity world)
       (get-entities)
       (map #(dissoc % :damage))
       (reduce assoc-entity world))

;; health bar system

(defn update-health-bar [world entity]
  (let [health-bar (get-component entity :health-bar)
        target-entity (get-entity world (:entity-id health-bar))
        current (get-in target-entity [:health :current] 1)
        max-health (get-in target-entity [:health :max] 1)]
    (assoc-component entity
                     (assoc health-bar :percentage (max 0
                                                        (/ current max-health))))))

(defn health-bar-system [world]
  (->> world
       get-entities
       (filter #(get-component % :health-bar))
       (map (partial update-health-bar world))
       (reduce assoc-entity world)))

;; boot her up baby!

(def world (atom {}))

(swap! world (fn [_] (generate-world)))

(swing-view world)

(defn next-world [world]
  (-> world
      input-system
      rotate-system
      thrust-system
      physics-system
      collision-detection-system
      collision-physics-system
      impulse-damage-system
      damage-resolution-system
      ttl-system
      fadeout-system
      health-bar-system))

(def update-world-task (proxy [TimerTask] []
                         (run [] (swap! world next-world))))

(def timer (Timer.))

(doto timer
  (.schedule update-world-task 0 16))
