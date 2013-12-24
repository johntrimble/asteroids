(ns asteroids.main
  (:require [goog.Timer :as timer]
            [goog.events :as events]
            [clojure.set :as set]
            [dommy.utils :as utils]
            [dommy.core :as dommy]
            [asteroids.jsutil :refer [make-js-map]]
            [asteroids.levels :as levels]
            [asteroids.vector :as vector]
            [asteroids.core :as core]
            [asteroids.math :as math]
            [asteroids.physics :as physics]
            [asteroids.graphics :as graphics]
            [asteroids.keyboard :as keyboard]
            [asteroids.intents :as intents])
  (:require-macros [dommy.macros :refer [sel1]]))

(def stats (atom {}))

(def stats-disp (js/PIXI.Text. "some fancy text"
                               (make-js-map {:fill "green"
                                             :font "Arial 8px"})))
(def update-world-interval 16)

(def renderer (js/PIXI.autoDetectRenderer 800 800 nil false true))

(def stage (js/PIXI.Stage. 0x000000))

(def update-stage-system! (graphics/create-update-stage-system))

(dommy/replace-contents! (sel1 :#content)
                         (.-view renderer))

(defn generate-world []
  (core/assoc-entity {}
                (core/entity (core/position [20 20])
                        (core/mass (* math/pi 20 20))
                        (core/velocity [5 5])
                        (graphics/display-object (doto (js/PIXI.Graphics.)
                                                   (.beginFill 0xFF3300)
                                                   (.drawCircle 0 0 5)
                                                   (.endFill)))
                        (core/aabb [15 15] [25 25]))))

(def world (atom {}))

(swap! world (fn [_] (levels/spawn-ship (levels/random-asteroid-field))))

(set! *print-fn* #(.log js/console %))

(defn next-world [world]
  ;; strange use of let-expression is to make watch-selection easier.
  (let [world (keyboard/keyboard-system world)
        world (intents/intent-system world)
        world (intents/rotation-system world)
        world (intents/thrust-system world)
        world (physics/physics-system world)
        world (physics/collision-detection-system world)
        world (physics/collision-physics-system world)]
    world))

(defn update-stats-disp [disp stats]
  (.setText disp
            (reduce (fn [acc x] (str acc "\n" x))
                    (map (fn [[k v]] (str k "    " v)) stats))))

(defn animationLoop []
  (update-stage-system! @world stage)
  (.render renderer stage)
  (js/requestAnimFrame animationLoop))

(.addChild stage stats-disp)

(defn update-game-state []
  (swap! world next-world)
  (swap! stats (fn [s] (update-stats-disp stats-disp s) {})))

(let [timer (goog.Timer. update-world-interval)]
  (. timer (start))
  (events/listen timer goog.Timer/TICK update-game-state))

(js/requestAnimFrame animationLoop)
