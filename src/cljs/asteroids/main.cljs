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
            [asteroids.intents :as intents]
            [asteroids.projectile :as projectile]
            [asteroids.asteroids :as asteroids]
            [asteroids.health :as health])
  (:require-macros [dommy.macros :refer [sel1]]))

(set! *print-fn* #(.log js/console %))

(def update-world-interval 16)

(def renderer (js/PIXI.autoDetectRenderer 800 800 nil false true))

(def stage (js/PIXI.Stage. 0x000000))

(defn add-layers [stage]
  (into {} (map (fn [i]
                  (let [cont (PIXI.DisplayObjectContainer.)]
                    (.addChild stage cont)
                    [i cont]))
                (range 3))))

(def layer-map (add-layers stage))

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

(defn debug-world [world]
  (let [ec (-> world
               core/get-entities
               count)
        cc (->> world
                core/get-entities
                (filter #(core/has-component? % :collidable))
                count)]
    (println "entity count: " ec)
    (println "collidable count: " cc))
  world)

(defn next-world [world]
  ;; strange use of let-expression is to make watch-selection easier.
  (let [world (projectile/cooldown-system world)
        world (keyboard/keyboard-system world)
        world (intents/intent-system world)
        world (intents/rotation-system world)
        world (intents/thrust-system world)
        world (projectile/firing-system world)
        world (physics/physics-system world)
        world (physics/collision-detection-system world)
        world (projectile/projectile-collision-resolution-system world)
        world (physics/collision-physics-system world)
        world (health/damage-resolution-system world)
        world (asteroids/asteroid-death-system world)
        world (core/ttl-system world)]
    world))

(defn animationLoop []
  (update-stage-system! @world layer-map)
  (.render renderer stage)
  (js/requestAnimFrame animationLoop))

(defn update-game-state []
  (swap! world next-world))

(let [timer (goog.Timer. update-world-interval)]
  (. timer (start))
  (events/listen timer goog.Timer/TICK update-game-state))

(js/requestAnimFrame animationLoop)
