(ns asteroids.asteroids
  (:require [asteroids.core :as core]
            [asteroids.health :as health]
            [asteroids.physics :as physics]
            [asteroids.graphics :as graphics]
            [asteroids.math :as math]
            [asteroids.util :as util]))

(def asteroid-color 0x876C2E)

(defn asteroid-explosive-death []
  {:name :asteroid-explosive-death})

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
        h (* 0.5 (* math/pi (* r r)))
        ast (core/entity (core/position [x y])
                         (core/rotation (:rotation props))
                         (core/movement [0 0]
                                        (:velocity props)
                                        math/infinity
                                        0
                                        (:angular-velocity props)
                                        math/infinity)
                         (core/mass mass)
                         (asteroid-explosive-death)
                         (physics/moment-inertia (* 0.25 math/pi (math/pow r 4)))
                         (core/aabb [(- x r) (- y r)]
                                    [(+ x r) (+ y r)])
                         (graphics/display-object (doto (js/PIXI.Graphics.)
                                                    (.beginFill color)
                                                    (.drawCircle 0 0 r)
                                                    (.endFill))))]
    (if (< mass 50)
      (-> ast
          (core/assoc-component (core/ttl 100)))
      (-> ast
          (core/assoc-component (physics/collidable))
          (core/assoc-component (health/health (* 0.5 (* math/pi (* r r)))))))))

(defn partition-number
  ([n partition-count] (partition-number n partition-count []))
  ([n partition-count acc]
   (if (< partition-count 1)
     acc
     (let [p (rand n)]
       (recur (- n p) (- partition-count 1) (conj acc p))))))

(defn do-explosive-death [world entity]
  (let [aabb-comp (core/get-component entity :aabb)
        mass (core/get-mass entity)
        lost-mass (* 0 mass) ; no mass lost
        mass (- mass lost-mass)
        c (rand-nth (range 2 5))
        child-masses (partition-number mass c)
        [x y] (core/get-position entity)
        child-positions (for [i (range c)]
                          [(rand-nth (range (.-xmin aabb-comp) (.-xmax aabb-comp)))
                           (rand-nth (range (.-ymin aabb-comp) (.-ymax aabb-comp)))])
        child-velocities (map #(physics/get-vel-point entity %)
                              child-positions)
        asteroids (map (fn [p v m]
                         (create-asteroid {:color (util/rand-varied-color asteroid-color 0.1)
                                           :velocity v
                                           :angular-velocity (core/get-angular-velocity entity)
                                           :radius (math/sqrt (/ m math/pi))
                                           :position p}))
                       child-positions child-velocities child-masses)
        world (core/dissoc-entity world entity)]
    (->> asteroids
         (core/assoc-entities world))))

(defn asteroid-death-system [world]
  (->> world
       core/get-entities
       (filter #(core/has-components? % :asteroid-explosive-death :health))
       (filter #(> 1 (:current (core/get-component % :health))))
       (reduce do-explosive-death world)))
