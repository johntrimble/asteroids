(ns asteroids.projectile
  (:require [asteroids.core :as core]
            [asteroids.vector :as vector]
            [asteroids.physics :as physics]
            [asteroids.graphics :as graphics]
            [asteroids.intents :as intents]
            [asteroids.health :as health]))

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

(defn update-cooldowns [entity]
  (->> [:weapon]
       (map #(core/get-component entity %))
       (map #(assoc % :cooldown-remaining (mod (dec (:cooldown-remaining %))
                                               (:cooldown %))))
       (reduce core/assoc-component entity)))

(defn firing-system [world]
  (let [entities (->> world
                      core/get-entities
                      (filter #(core/has-components? % :fire-intent :weapon))
                      (filter #(== 0 (:cooldown-remaining (core/get-component % :weapon)))))
        projectiles (map create-projectile entities)
        entities (map #(dissoc % :fire-intent) entities)]
    (-> world
        (core/assoc-entities projectiles)
        (core/assoc-entities entities))))

(defn cooldown-system [world]
  (->> world
       core/get-entities
       (filter #(core/has-components? % :weapon))
       (map update-cooldowns)
       (core/assoc-entities world)))


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
