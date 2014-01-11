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

(def world (atom {}))

(swap! world (fn [_]
               (-> (levels/random-asteroid-field)
                   (levels/spawn-ship))))

(def update-world-interval 16)

(defn aspect-fit [aspect-ratio width height]
  (let [proposed-aspect (/ width height)]
    (if (> aspect-ratio proposed-aspect)
      [width (/ width aspect-ratio)]
      [(* aspect-ratio height) height])))

(defn view [window aspect-ratio sel]
  (let [renderer (js/PIXI.autoDetectRenderer 1
                                             1
                                             nil
                                             false
                                             true)
        stage (js/PIXI.Stage. 0x000000)
        layers [{:level 0
                 :name :background-layer
                 :display-object (PIXI.DisplayObjectContainer.)}
                {:level 1
                 :name :main-layer
                 :display-object (PIXI.DisplayObjectContainer.)}
                {:level 2
                 :name :interface-layer
                 :fixed true
                 :display-object (PIXI.DisplayObjectContainer.)}]]
    ;; Add the layers to the stage
    (dorun (map #(.addChild stage (:display-object %)) layers))
    ;; Add the view to the DOM
    (dommy/replace-contents! sel (.-view renderer))
    {:layers layers
     :renderer renderer
     :stage stage
     :window window
     :aspect-ratio aspect-ratio}))

(defn ^boolean is-size? [renderer width height]
  (and (== (.-width renderer) width)
       (== (.-height renderer) height)))

(def renderer (view js/window
                    (/ (core/get-width @world)
                       (core/get-height @world))
                    (sel1 :#content)))

(def update-stage-system! (graphics/create-update-stage-system))

(defn find-with-comp [world component]
  (loop [entities (core/get-entities world)]
    (when (seq entities)
      (let [entity (first entities)]
        (if (core/has-component? entity component)
          entity
          (recur (next entities)))))))

(defn render! [{:keys [renderer window aspect-ratio layers stage]} world]
  (let [[width height] (aspect-fit aspect-ratio
                                   (.-innerWidth window)
                                   (.-innerHeight window))]

    ;; update the stage
    (update-stage-system! world layers)

    ;; resize view if necessary
    ;; TODO: it might be better to use a dirty flag set by a resize event
    ;; handler than to check this every time; however, having all the logic in
    ;; one place is appealing.
    (when-not (is-size? renderer width height)
      (.log js/console "resizing")
      (let [[new-width new-height] [width height]]
        (.resize renderer width height)))

      ;; scale the layers appropriately
      (let [camera-entity (find-with-comp world :camera)
            [camera-width camera-height] (or (:fov (core/get-component camera-entity :camera))
                                             [(core/get-width world) (core/get-height world)])
            [camera-x camera-y] (or (core/get-position camera-entity)
                                    [(/ camera-width 2) (/ camera-height 2)])
            rotation (or (core/get-rotation camera-entity)
                         0)
            scale-factor (/ width camera-width)]
        (loop [layers layers]
          (when (seq layers)
            (let [{:keys [display-object fixed]} (first layers)
                  scale-obj (.-scale display-object)
                  pos-obj (.-position display-object)
                  pivot-obj (.-pivot display-object)]
              (set! (.-x scale-obj) scale-factor)
              (set! (.-y scale-obj) scale-factor)
              (when-not fixed
                (set! (.-x pos-obj) (* scale-factor (/ camera-width 2)))
                (set! (.-y pos-obj) (* scale-factor (/ camera-height 2)))
                (set! (.-x pivot-obj) camera-x)
                (set! (.-y pivot-obj) camera-y)
                (set! (.-rotation display-object) (- rotation)))
              (recur (next layers))))))

    ;; now to actually render the thing
    (.render renderer stage)))

(defn generate-world []
  (core/assoc-entity {}
                     (core/entity (core/position [20 20])
                                  (core/mass (* math/pi 20 20))
                                  (core/movement [0 0]
                                                 [5 5]
                                                 math/infinity
                                                 0
                                                 0
                                                 math/infinity)
                                  (graphics/display-object (doto (js/PIXI.Graphics.)
                                                             (.beginFill 0xFF3300)
                                                             (.drawCircle 0 0 5)
                                                             (.endFill)))
                                  (core/aabb [15 15] [25 25]))))

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
        world (health/impulse-damage-system world)
        world (health/damage-resolution-system world)
        world (asteroids/asteroid-death-system world)
        world (health/health-bar-system world)
        world (core/ttl-system world)]
    world))

(defn animationLoop []
  (render! renderer @world)
  (js/requestAnimFrame animationLoop))

(defn update-game-state []
  (.callOnce goog.Timer #(swap! world next-world)))

(let [timer (goog.Timer. update-world-interval)]
  (. timer (start))
  (events/listen timer goog.Timer/TICK update-game-state))

(js/requestAnimFrame animationLoop)
