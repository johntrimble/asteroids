(ns asteroids.health
  (:require [asteroids.core :as core]
            [asteroids.physics :as physics]))

;; Components
(defn health
  ([health] {:name :health, :max health, :current health})
  ([health remaining] {:name :health, :max health, :current remaining}))

(defn damage [damage]
  {:name :damage, :damage damage})

(defn get-damage [entity]
  (-> entity (health/get-component :damage) :damage))

;; impulse damage system
(defn- handle-impulse-damage [_ entity]
  (let [impulse (-> entity (core/get-component :impulse) :magnitude)
        current-damage (-> entity (core/get-component :damage) (:damage 0))
        impulse-damage (- impulse 300)]
    (if (> impulse-damage 0)
      (core/assoc-component entity
                       (damage (+ current-damage impulse-damage)))
      entity)))

(defn impulse-damage-system [world]
  (->> world
       core/get-entities
       (filter #(core/has-components? % :health :impulse :player))
       (map #(handle-impulse-damage world %))
       (core/assoc-entities world)))


;; damage resolution system
(defn apply-damage [entity]
  (let [current (get-in entity [:health :current])
        max-health (get-in entity [:health :max])
        damage (get-in entity [:damage :damage])
        current (- current damage)]
    (core/assoc-component (dissoc entity :damage)
                     (health max-health current))))

(defn damage-resolution-system [world]
  (let [entities (->> world
                      core/get-entities
                      (filter #(core/has-components? % :damage :health)))
        updated-health (map apply-damage entities)
        world (core/assoc-entities world updated-health)]
    world))
