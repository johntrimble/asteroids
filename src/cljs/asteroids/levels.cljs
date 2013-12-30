(ns asteroids.levels
  (:require [asteroids.physics :as physics]
            [asteroids.core :as core]
            [asteroids.graphics :as graphics]
            [asteroids.math :as math]
            [asteroids.projectile :as projectile]
            [asteroids.health :as health]
            [asteroids.util :as util]
            [asteroids.asteroids :as asteroids]))

(def ship-color 0x0000FF)

(defn create-rand-asteroid [width height]
  (let [x (rand-nth (range width))
        y (rand-nth (range height))
        r (rand-nth (range 10 25))
        vx (rand-nth (range -5 5))
        vy (rand-nth (range -5 5))
        av (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))
        ap (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))]
    (asteroids/create-asteroid {:color (util/rand-varied-color asteroids/asteroid-color 0.1)
                                :position [x y]
                                :velocity [vx vy]
                                :angular-velocity av
                                :rotation ap
                                :radius r})))

(defn random-asteroid-field
  ([] (random-asteroid-field 15))
  ([n] (->> (range n)
            (map (fn [_] (create-rand-asteroid 800 800)))
            (reduce core/assoc-entity {}))))

(defn empty-world []
  {:entities {}})

(defn spawn-ship [world]
  (let [ship (core/entity (core/position [400 400])
                          (core/movement [0 0]
                                         [0 0]
                                         10
                                         0
                                         0
                                         math/infinity)
                          (core/rotation 0)
                          (physics/collidable)
                          (health/health 10000)
                          (core/player)
                          (core/aabb [390 390] [410 410])
                          (core/mass (* math/pi (* 10 10)))
                          (projectile/weapon 10)
                          (physics/moment-inertia (* 0.25 math/pi (math/pow 10 4)))
                          (graphics/display-object (doto (js/PIXI.Graphics.)
                                                     (.beginFill ship-color)
                                                     (.moveTo 10 0)
                                                     (.lineTo -6 -6)
                                                     (.lineTo -6 6)
                                                     (.endFill))))]
    (core/assoc-entity world ship)))


