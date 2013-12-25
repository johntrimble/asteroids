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
                                    keyboard-input-system
                                    keyboard-input]]
            [asteroids.physics :refer [physics-system
                                       collidable
                                       collision-detection-system
                                       collision-physics-system
                                       moment-inertia
                                       get-vel-point]]
            [asteroids.math :as math])
  (:import [java.awt Graphics Graphics2D Color]
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

#_(defn ttl
  ([duration] (ttl duration duration))
  ([duration remaining]
   {:name :ttl, :duration duration, :remaining remaining}))

(defn health-bar [entity-id]
  {:name :health-bar, :entity-id entity-id, :percentage 1})

(defn thrust-intent []
  {:name :thrust-intent})

(defn rotate-right-intent []
  {:name :rotate-right-intent})

(defn rotate-left-intent []
  {:name :rotate-left-intent})

(defn fire-intent []
  {:name :fire-intent})

(defn thrust [acc]
  {:name :thrust, :vector acc})

(defn asteroid-explosive-death []
  {:name :asteroid-explosive-death})

(defn projectile []
  {:name :projectile})

(defn weapon
  ([cooldown] (weapon cooldown 0))
  ([cooldown cooldown-remaining]
   {:name :weapon,
    :cooldown cooldown,
    :cooldown-remaining cooldown-remaining}))

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
        vy (rand-nth (range -5 5))
        av (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))
        ap (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))]
    (entity (position [x y])
            (collidable)
            (rotation ap)
            (health (* 0.5 (* math/pi (* r r))))
            (asteroid-explosive-death)
            (velocity [vx vy])
            (moment-inertia (* 0.25 math/pi (math/pow r 4)))
            (angular-velocity av)
            (mass (* math/pi (* r r)))
            (aabb [xmin ymin] [xmax ymax])
            (renderable (partial render-circle
                                 (Color. 135 108 46)
                                 r)))))

(defn asteroid [{m :mass
                 v :velocity
                 w :angular-velocity
                 pos :position}]
  (let [[x y] pos
        r (math/sqrt (/ m math/pi))
        rot (- (rand (* 4 math/pi)) (* 2 math/pi))
        ast (entity (position pos)
                    (mass m)
                    (velocity v)
                    (health (max 100 (* 0.5 (* math/pi (* r r)))))
                    (asteroid-explosive-death)
                    (angular-velocity w)
                    (position pos)
                    (rotation rot)
                    (aabb [(- x r) (- y r)]
                          [(+ x r) (+ y r)])
                    (renderable (partial render-circle
                                         (Color. 135 108 46)
                                         r)))]
    (if (< m 50)
      (-> ast
          (assoc-component (ttl 100))
          (assoc-component (fadeout 100)))
      (assoc-component ast (collidable)))))

(defn add-ship [world]
  (let [ship (entity (position [400 400])
                     (velocity [0 0])
                     (acceleration [0 0])
                     (rotation 0)
                     (weapon 10)
                     (collidable)
                     (player)
                     (health 10000)
                     (aabb [390 390] [410 410])
                     (mass (* math/pi (* 10 10)))
                     (max-velocity 10)
                     (moment-inertia (* 0.25 math/pi (math/pow 10 4)))
                     (keyboard-input)
                     (renderable render-ship))
        health-bar (health-bar-entity (get-id ship))]
    (reduce assoc-entity world [ship health-bar])))

;; World Generation

(defn add-asteroids [world]
  (->> (range 20)
       (map (fn [_] (generate-asteroid)))
       (reduce assoc-entity world)))

(defn generate-world []
  (let [ast (assoc-component (asteroid {:mass 400
                                        :velocity [5 5]
                                        :angular-velocity 0.1
                                        :position [300 300]})
                             (health 1000))]
    (-> {}
        (add-ship)
        (add-asteroids))))


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

#_(defn update-ttl [entity]
  (let [component (get-component entity :ttl)
        duration (:duration component)
        remaining (- (:remaining component) 1)]
    (assoc-component entity
                     (ttl duration remaining))))

#_(defn ttl-system [world]
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
       (filter #(has-components? % :health :impulse :player))
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


;; intent system

(defn clear-intents [world]
  (->> world
       (get-entities)
       (map #(reduce dissoc % [:rotate-right-intent
                               :rotate-left-intent
                               :thrust-intent
                               :fire-intent]))
       (reduce assoc-entity world)))

(defn intent-system [world]
  (let [key->intent {:right-arrow rotate-right-intent
                     :left-arrow rotate-left-intent
                     :up-arrow thrust-intent
                     :space fire-intent}
        world (clear-intents world)]
    (->> world
         get-entities
         (filter #(has-component? % :keyboard-input))
         (map (fn [{:keys [keyboard-input] :as entity}]
                (->> keyboard-input
                     :keys-pressed
                     (map key->intent)
                     (filter identity)
                     (map (fn [c] (c)))
                     (reduce assoc-component entity))))
         (filter identity)
         (reduce assoc-entity world))))


;; thrust system
(defn apply-thrust [entity]
  (let [rotation (-> entity (get-component :rotation) (:angle 0))
        direction-vec (vector/rotate rotation
                                     [1 0])
        intent-vec (if (has-component? entity :thrust-intent)
                     (vector/scale 0.05 direction-vec)
                     [0 0])
        thrust-vec (-> entity
                       (get-component :thrust)
                       (:vector [0 0]))
        acc-vec (-> entity (get-component :acceleration) (:vector [0 0]))
        nacc-vec (-> (vector/add acc-vec (vector/sub intent-vec thrust-vec)))]
    (-> entity
        (dissoc :thrust-intent)
        (assoc-component (acceleration nacc-vec))
        (assoc-component (thrust intent-vec)))))

(defn thrust-system [world]
  (->> world
       (get-entities)
       (filter #(or (has-component? % :thrust-intent)
                    (has-component? % :thrust)))
       (map apply-thrust)
       (reduce assoc-entity world)))


;; firing system

(defn create-projectile [e]
  (let [r 2
        rotation (get-rotation e)
        [[xmin _][xmax _]] (get-aabb e)
        rotation-vector (vector/rotate rotation [1 0])
        [x y] (vector/add (get-position e)
                          (vector/scale (- xmax xmin)
                                        rotation-vector))
        v (vector/scale 5 rotation-vector)]
    (entity (position [x y])
            (projectile)
            (collidable)
            (ttl 60)
            (velocity (vector/add v (get-velocity e)))
            (health 5)
            (aabb [(- x r) (- y r)]
                  [(+ x r) (+ y r)])
            (renderable (partial render-circle
                                 Color/GREEN
                                 r)))))

(defn firing-system [world]
  (->> world
       (get-entities)
       (filter #(has-components? % :fire-intent :weapon))
       (filter #(== 0 (:cooldown-remaining (get-component % :weapon))))
       (map create-projectile)
       (reduce assoc-entity world)))


;; projectile system

(defn add-damage [e dmg]
  (let [current-dmg (:damage (get-component e :damage) 0)
        dmg (+ dmg current-dmg)]
    (assoc-component e (damage dmg))))

(defn update-projectile [world e]
  (let [world (dissoc-entity world e)]
    (->> (get-component e :collidable)
         (:entity-ids)
         (map (partial get-entity world))
         (filter identity)
         (map #(add-damage % 100))
         (reduce assoc-entity world))))

(defn projectile-collision-resolution-system [world]
  (->> world
       (get-entities)
       (filter #(has-components? % :projectile :collidable))
       (filter #(seq (:entity-ids (get-component % :collidable))))
       (reduce update-projectile world)))


;; rotation system

(defn update-rotate [entity]
  (let [angle (-> entity
                    (get-component :rotation)
                    (:angle 0))
        delta (* 0.01 (* 2 math/pi))
        delta (if (get-component entity :rotate-left-intent)
                (* -1 delta)
                delta)
        rotate (+ angle delta)]
    (assoc-component entity (rotation rotate))))

(defn rotate-system [world]
  (->> (get-entities world)
       (filter #(or (has-component? % :rotate-left-intent)
                    (has-component? % :rotate-right-intent)))
       (map update-rotate)
       (reduce assoc-entity world)))

;; cooldown system
(defn update-cooldowns [entity]
  (->> [:weapon]
       (map (partial get-component entity))
       (map #(assoc % :cooldown-remaining (mod (dec (:cooldown-remaining %))
                                               (:cooldown %))))
       (reduce assoc-component entity)))

(defn cooldown-system [world]
  (->> world
       (get-entities)
       (filter #(has-components? % :weapon))
       (map update-cooldowns)
       (reduce assoc-entity world)))

;; asteroid explosive death
(defn partition-number
  ([n partition-count] (partition-number n partition-count []))
  ([n partition-count acc]
   (if (== partition-count 0)
     acc
     (let [p (rand n)]
       (recur (- n p) (- partition-count 1) (conj acc p))))))

(defn do-explosive-death [world entity]
  (let [[[xmin ymin] [xmax ymax]] (get-aabb entity)
        mass (get-mass entity)
        lost-mass (* 0 mass) ; no mass lost
        mass (- mass lost-mass)
        c (rand-nth (range 2 5))
        child-masses (partition-number mass c)
        [x y] (get-position entity)
        child-positions (for [i (range c)]
                          [(rand-nth (range xmin xmax))
                           (rand-nth (range ymin ymax))])
        child-velocities (map #(get-vel-point entity %)
                              child-positions)
        asteroids (map (fn [p v m]
                         (asteroid {:velocity v
                                    :angular-velocity (get-angular-velocity entity)
                                    :mass m
                                    :position p}))
                       child-positions child-velocities child-masses)
        world (dissoc-entity world entity)]
    (->> asteroids
        (reduce assoc-entity world))))

(defn asteroid-death-system [world]
  (->> world
       (get-entities)
       (filter #(has-components? % :asteroid-explosive-death :health))
       (filter #(> 1 (:current (get-component % :health))))
       (reduce do-explosive-death world)))

;; boot her up baby!

(def world (atom {}))

(swap! world (fn [_] (generate-world)))

(swing-view world)

(defn next-world [world]
  (-> world
      cooldown-system
      keyboard-input-system
      intent-system
      rotate-system
      thrust-system
      firing-system
      physics-system
      collision-detection-system
      projectile-collision-resolution-system
      collision-physics-system
      impulse-damage-system
      damage-resolution-system
      asteroid-death-system
      ttl-system
      fadeout-system
      health-bar-system))

(def update-world-task (proxy [TimerTask] []
                         (run [] (swap! world next-world))))

(def timer (Timer.))

(doto timer
  (.schedule update-world-task 0 16))
