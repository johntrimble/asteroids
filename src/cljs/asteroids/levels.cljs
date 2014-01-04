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
  ([n] (let [world {:geometry {:width 800
                               :height 500}}]
         (->> (range n)
              (map (fn [_] (create-rand-asteroid (core/get-width world) (core/get-height world))))
              (reduce core/assoc-entity world)))))

(defn empty-world []
  {:entities {}})

(defn spawn-ship [world]
  (let [x (/ (core/get-width world) 2)
        y (/ (core/get-height world) 2)
        ship (core/entity (core/position [x y])
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
                          (core/aabb [(- (core/get-width world) 10) (- (core/get-height world) 10)]
                                     [(+ (core/get-width world) 10) (+ (core/get-height world) 10)])
                          (core/mass (* math/pi (* 10 10)))
                          (projectile/weapon 10)
                          (physics/moment-inertia (* 0.25 math/pi (math/pow 10 4)))
                          (graphics/display-object (doto (js/PIXI.Graphics.)
                                                     (.beginFill ship-color)
                                                     (.moveTo 10 0)
                                                     (.lineTo -6 -6)
                                                     (.lineTo -6 6)
                                                     (.endFill))))
        player-health-bar (core/entity (core/position [10 (- (core/get-height world) 30)])
                                       (graphics/display-object (js/PIXI.Graphics.))
                                       (graphics/layer 2)
                                       (health/health-bar (core/get-id ship)
                                                          (- (core/get-width world) 20)
                                                          20))]
    (-> world
        (core/assoc-entity ship)
        (core/assoc-entity player-health-bar))))


