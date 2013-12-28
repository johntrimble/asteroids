(ns asteroids.projectile
  (:require [asteroids.core :as core]
            [asteroids.vector :as vector]
            [asteroids.physics :as physics]
            [asteroids.graphics :as graphics]
            [asteroids.intents :as intents]
            [asteroids.health :as health])
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
        [[xmin _][xmax _]] (core/get-aabb e)
        rotation-vector (vector/rotate rotation [1 0])
        [x y] (vector/add (core/get-position e)
                          (vector/scale (- xmax xmin)
                                        rotation-vector))
        v (vector/scale 5 rotation-vector)]
    (core/entity (core/position [x y])
                 (projectile)
                 (physics/collidable)
                 (core/ttl 60)
                 (core/velocity (vector/add v (core/get-velocity e)))
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

(defn update-projectile [world e]
  (->> (core/get-component e :collidable)
       :entity-ids
       (map #(core/get-entity world %))
       (filter identity)
       (map #(add-damage % 100))
       (core/assoc-entities (core/dissoc-entity world e))))

(defn projectile-collision-resolution-system [world]
  (->> world
       core/get-entities
       (filter #(core/has-components? % :projectile :collidable))
       (filter #(seq (:entity-ids (core/get-component % :collidable))))
       (reduce update-projectile world)))
