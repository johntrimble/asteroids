(ns asteroids.intents
  (:require [asteroids.core :as core]
            [asteroids.vector :as vector]
            [asteroids.math :as math])
  (:require-macros [asteroids.core :refer [transform-entities]]))

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

(def key->intent {:right rotate-right-intent
                  :left rotate-left-intent
                  :up thrust-intent
                  :space fire-intent})

(defn intent-system [world]
  (transform-entities {:components [:player]}
                      (fn [world entity]
                        (reduce #(if %2
                                   (core/assoc-component %1 %2)
                                   %1)
                                entity
                                (for [k (:active-keys world)]
                                  (let [intent (get key->intent k)]
                                    (when intent
                                      (intent))))))
                      world))

;; thrust system
(defn apply-thrust [e]
  (let [mov (core/get-component e :movement)
        rotation (or (core/get-rotation e) 0)
        direction (vector/rotate rotation [1 0])
        intent-vec (if (core/has-component? e :thrust-intent)
                     (vector/scale 0.1 direction)
                     [0 0])
        thrust-vec (-> e
                       (core/get-component :thrust)
                       (:vector [0 0]))
        acc (.-acceleration mov)
        nacc (vector/add acc (vector/sub intent-vec thrust-vec))]
    (-> e
        (dissoc :thrust-intent)
        (core/assoc-component (core/movement nacc
                                             (.-velocity mov)
                                             (.-max_velocity mov)
                                             (.-angular_acceleration mov)
                                             (.-angular_velocity mov)
                                             (.-max_angular_velocity mov)))
        (core/assoc-component (thrust intent-vec)))))

(defn thrust-system
  "This system takes takes thrust-intent components and updates the associated
  entities' acceleration accordingly."
  [world]
  (->> world
       core/get-entities
       (filter #(or (core/has-component? % :thrust-intent)
                    (core/has-component? % :thrust)))
       (map apply-thrust)
       (core/assoc-entities world)))


;; rotation system
(defn update-rotation [entity]
  (let [angle (-> entity
                  (core/get-component :rotation)
                  (:angle 0))
        delta (* 0.01 (* 2 math/pi))
        delta (if (core/get-component entity :rotate-left-intent)
                (* -1 delta)
                delta)
        rotate (+ angle delta)]
    (-> entity
        (dissoc :rotate-left-intent)
        (dissoc :rotate-right-intent)
        (core/assoc-component (core/rotation rotate)))))

(defn rotation-system
  "This system takes the rotate-left-intent and rotate-right-intent components
  and updates the associated entities' rotation accordingly."
  [world]
  (->> world
       core/get-entities
       (filter #(or (core/has-component? % :rotate-left-intent)
                    (core/has-component? % :rotate-right-intent)))
       (map update-rotation)
       (core/assoc-entities world)))
