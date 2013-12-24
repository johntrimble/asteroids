(ns asteroids.levels
  (:require [asteroids.physics :as physics]
            [asteroids.core :as core]
            [asteroids.graphics :as graphics]
            [asteroids.math :as math]
            [goog.color :as color]))

(def ship-color 0x0000FF)
(def asteroid-color 0x876C2E)

(def asteroid-props-default {:position [0 0]
                             :velocity [0 0]
                             :angular-velocity 0
                             :rotation 0
                             :radius 15
                             :color asteroid-color})

(defn create-asteroid [props]
  (let [props (merge asteroid-props-default props)
        r (:radius props)
        mass (* math/pi (* r r))
        [x y] (:position props)
        color (:color props)
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
                                            (.beginFill color)
                                            (.drawCircle 0 0 r)
                                            (.endFill))))))

(defn rand-varied-color
  [color factor]
  (let [r (bit-shift-right (bit-and color 0xFF0000) 16)
        g (bit-shift-right (bit-and color 0x00FF00) 8)
        b (bit-and color 0x0000FF)
        hsl-arr (color/rgbToHsl r g b)
        h (aget hsl-arr 0)
        s (aget hsl-arr 1)
        l (aget hsl-arr 2)
        vh (- (rand-int (* factor 360)) (* 0.5 factor 360))
        vs (- (rand factor) (* 0.5 factor))
        vl (- (rand factor) (* 0.5 factor))
        nh (+ h vh)
        ns (min 1 (max 0 (+ s vs)))
        nl (min 1 (max 0 (+ l vl)))
        nh (mod nh 360)
        ns (mod ns 1)
        nl (mod nl 1)
        rgb-arr (color/hslToRgb nh ns nl)
        r (aget rgb-arr 0)
        g (aget rgb-arr 1)
        b (aget rgb-arr 2)
        rgb (+ (bit-shift-left r 16)
               (bit-shift-left g 8)
               b)]
    rgb))

(defn create-rand-asteroid [width height]
  (let [x (rand-nth (range width))
        y (rand-nth (range height))
        r (rand-nth (range 10 25))
        vx (rand-nth (range -5 5))
        vy (rand-nth (range -5 5))
        av (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))
        ap (* 0.01 (- (rand (* 4 math/pi)) (* 2 math/pi)))]
    (create-asteroid {:color (rand-varied-color asteroid-color 0.1)
                      :position [x y]
                      :velocity [vx vy]
                      :angular-velocity av
                      :rotation ap
                      :radius r})))

(defn random-asteroid-field []
    (->> (range 20)
         (map (fn [_] (create-rand-asteroid 800 800)))
         (reduce core/assoc-entity {})))

(defn empty-world []
  {:entities {}})

(defn spawn-ship [world]
  (let [ship (core/entity (core/position [400 400])
                          (core/velocity [0 0])
                          (core/acceleration [0 0])
                          (core/rotation 0)
                          (physics/collidable)
                          (core/player)
                          (core/aabb [390 390] [410 410])
                          (core/mass (* math/pi (* 10 10)))
                          (core/max-velocity 10)
                          (physics/moment-inertia (* 0.25 math/pi (math/pow 10 4)))
                          (graphics/display-object (doto (js/PIXI.Graphics.)
                                                     (.beginFill ship-color)
                                                     (.moveTo 10 0)
                                                     (.lineTo -6 -6)
                                                     (.lineTo -6 6)
                                                     (.endFill))))]
    (core/assoc-entity world ship)))
