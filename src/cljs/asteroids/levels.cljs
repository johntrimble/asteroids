(ns asteroids.levels
  (:require [asteroids.physics :as physics]
            [asteroids.core :as core]
            [asteroids.graphics :as graphics]
            [asteroids.math :as math]))

(def asteroid-props-default {:position [0 0]
                             :velocity [0 0]
                             :angular-velocity 0
                             :rotation 0
                             :radius 15})

(defn create-asteroid [props]
  (let [props (merge asteroid-props-default props)
        r (:radius props)
        mass (* math/pi (* r r))
        [x y] (:position props)
        h (* 0.5 (* math/pi (* r r)))]
    (core/entity (core/position [x y])
                 (core/rotation (:rotation props))
                 (core/velocity (:velocity props))
                 (core/angular-velocity (:angular-velocity props))
                 (core/mass mass)
                 (physics/moment-inertia (* 0.25 math/pi (math/pow r 4)))
                 (core/aabb [(- x r) (- y r)]
                            [(+ x r) (+ y r)])
                 (physics/collidable)
                 (graphics/display-object (doto (js/PIXI.Graphics.)
                                            (.beginFill 0x876C2E)
                                            (.drawCircle 0 0 r)
                                            (.endFill))))))

(defn create-rand-asteroid [width height]
  (let [x (rand-nth (range width))
        y (rand-nth (range height))
        r (rand-nth (range 10 25))
        vx (rand-nth (range -5 5))
        vy (rand-nth (range -5 5))
        av (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))
        ap (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))]
    (create-asteroid {:position [x y]
                      :velocity [vx vy]
                      :angular-velocity av
                      :rotation ap
                      :radius r})))

(defn random-asteroid-field []
    (->> (range 20)
         (map (fn [_] (create-rand-asteroid 800 800)))
         (reduce core/assoc-entity {})))
