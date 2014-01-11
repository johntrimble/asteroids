(ns asteroids.util
  (:require [goog.color :as color]))

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
