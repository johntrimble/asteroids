(ns asteroids.projectile
  (:require [asteroids.core :as core]
            [asteroids.vector :as vector]
            [asteroids.physics :as physics]
            [asteroids.graphics :as graphics]
            [asteroids.intents :as intents]
            [asteroids.health :as health]
            [asteroids.math :as math])
  (:require-macros [asteroids.core :refer [transform-entities]]))

(def projectile-color 0x00FF00)

(defn projectile []
  {:name :projectile})

(defn weapon
  ([cooldown] (weapon cooldown 0))
  ([cooldown cooldown-remaining]
   {:name :weapon,
    :cooldown cooldown,
    :cooldown-remaining cooldown-remaining}))

(defn create-projectile [e]
  (let [r 2
        rotation (core/get-rotation e)
        aabb-comp (core/get-aabb e)
        xmin (.-xmin aabb-comp)
        xmax (.-xmax aabb-comp)
        rotation-vector (vector/rotate rotation [1 0])
        [x y] (vector/add (core/get-position e)
                          (vector/scale (- xmax xmin)
                                        rotation-vector))
        v (vector/scale 5 rotation-vector)]
    (core/entity (core/position [x y])
                 (projectile)
                 (physics/collidable)
                 (core/movement [0 0]
                                (vector/add v (core/get-velocity e))
                                math/infinity
                                0
                                0
                                math/infinity)
                 (core/ttl 60)
                 (core/aabb [(- x r) (- y r)]
                            [(+ x r) (+ y r)])
                 (graphics/display-object (doto (js/PIXI.Graphics.)
                                            (.beginFill projectile-color)
                                            (.drawCircle 0 0 r)
                                            (.endFill))))))

(defn firing-system [world]
  (loop [entities (core/get-entities world)
         output (transient (:entities world))]
    (if (seq entities)
      (let [entity (first entities)
            weapon-comp (core/get-component entity :weapon)]
        (if (and weapon-comp
                 (== 0 (:cooldown-remaining weapon-comp))
                 (core/has-component? entity :fire-intent))
          (let [p (create-projectile entity)]
            (recur (next entities)
                   (-> output
                       (assoc! (core/get-id p) p)
                       (assoc! (core/get-id entity) (dissoc entity :fire-intent)))))
          (recur (next entities) output)))
      (assoc world :entities (persistent! output)))))

(defn cooldown-system [world]
  (transform-entities {:components [:weapon]}
                      (fn [_ entity]
                        (let [weapon-component (core/get-component entity :weapon)]
                          (core/assoc-component entity
                                                (assoc weapon-component
                                                  :cooldown-remaining
                                                  (mod (dec (:cooldown-remaining weapon-component))
                                                       (:cooldown weapon-component))))))
                      world))


;; projectile system
(defn add-damage [e dmg]
  (let [current-dmg (:damage (core/get-component e :damage) 0)
        dmg (+ dmg current-dmg)]
    (core/assoc-component e (health/damage dmg))))

(defn projectile-collision-resolution-system [world]
  (assoc world
    :entities
    (persistent! (reduce (fn [entity-entries entity]
                           (if (core/has-components? entity :projectile :collidable)
                             (if-let [entity-ids (-> entity (core/get-component :collidable) :entity-ids)]
                               (reduce (fn [entity-entries hit-id]
                                         (if-let [hit-entity (core/get-entity world hit-id)]
                                           (assoc! entity-entries
                                                   hit-id
                                                   (add-damage hit-entity 100))
                                           entity-entries))
                                         (dissoc! entity-entries (core/get-id entity))
                                         entity-ids)
                               entity-entries)
                             entity-entries))
                         (transient (:entities world))
                         (core/get-entities world)))))
