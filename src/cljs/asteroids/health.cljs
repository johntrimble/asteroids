(ns asteroids.health
  (:require [asteroids.core :as core]
            [asteroids.physics :as physics])
  (:require-macros [asteroids.core :refer [transform-entities]]))

(def health-bar-color 0x555555)
(def health-color 0x00FF00)
(def damage-color 0xFF0000)

;; Components
(defn health
  ([health] {:name :health, :max health, :current health})
  ([health remaining] {:name :health, :max health, :current remaining}))

(defn health-bar [entity-id width height]
  {:name :health-bar,
   :entity-id entity-id,
   :width width,
   :height height})

(defn damage [damage]
  {:name :damage, :damage damage})

(defn get-damage [entity]
  (-> entity (health/get-component :damage) :damage))

;; impulse damage system
(defn impulse-damage-system [world]
  (transform-entities
   {:components [:health :impulse :player]}
   (fn [world entity]
     (let [impulse (-> entity (core/get-component :impulse) :magnitude)
           current-damage (-> entity (core/get-component :damage) (:damage 0))
           impulse-damage (- impulse 300)]
       (if (> impulse-damage 0)
         (core/assoc-component entity
                               (damage (+ current-damage impulse-damage)))
         entity)))
   world))

;; damage resolution system
(defn damage-resolution-system [world]
  (transform-entities
   {:components [:damage :health]}
   (fn [_ entity]
     (let [current (get-in entity [:health :current])
           max-health (get-in entity [:health :max])
           damage (get-in entity [:damage :damage])
           current (- current damage)]
       (core/assoc-component (dissoc entity :damage)
                             (health max-health current))))
   world))

(defn health-bar-system [world]
  (transform-entities
   {:components [:health-bar :display-object :position]}
   (fn [world entity]
     (let [disp (:obj (core/get-component entity :display-object))
           health-bar-comp (core/get-component entity :health-bar)
           target-id (:entity-id health-bar-comp)
           target (core/get-entity world target-id)
           target-health-comp (core/get-component target :health)
           max-health (:max target-health-comp)
           remaining-health (:current target-health-comp)
           percentage (max 0 (/ remaining-health max-health))
           width (:width health-bar-comp)
           height (:height health-bar-comp)
           [x y] (core/get-position entity)
           margin 2
           double-margin 4
           health-width (- width double-margin)
           health-height (- height double-margin)]
       (doto disp
         (.clear)
         (.beginFill health-bar-color)
         (.drawRect 0 0 width height)
         (.endFill)
         (.beginFill damage-color)
         (.drawRect margin
                    margin
                    health-width
                    health-height)
         (.endFill)
         (.beginFill health-color)
         (.drawRect margin
                    margin
                    (* percentage health-width)
                    health-height)
         (.endFill))))
   world))
