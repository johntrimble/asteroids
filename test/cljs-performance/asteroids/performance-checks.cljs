(ns asteroids.performance-checks
  (:require [asteroids.physics :as physics]
            [asteroids.levels :as levels]
            [asteroids.performance :as perf]
            [asteroids.core :as core])
  (:require-macros [asteroids.performance.macros :refer [measurements sample samples]])
  (:refer-clojure :exclude (set-print-fn!)))

(defn ^:export set-print-fn! [f]
  (set! cljs.core.*print-fn* f))

(defn ^:export run-performance-check []
  (measurements
   (let [world (levels/random-asteroid-field)]
     (samples 50 :find-aabb-collisions
              (dorun (physics/find-aabb-collisions world)))
     (samples 50 :collision-detection-system
              (dorun (physics/collision-detection-system world)))
     (samples 50 :physics-system
              (dorun (physics/physics-system world)))
     (samples 100 :physics-and-collisions
              (dorun (-> world
                         physics/physics-system
                         physics/collision-detection-system
                         physics/collision-physics-system))))
   (let [entities (for [i (range 100)] (core/entity))]
     (samples 100 :add-100-entities-assoc-entity
              (reduce core/assoc-entity {:entities {}} entities))
     (samples 100 :add-100-entities-assoc-entities
              (core/assoc-entities {:entities {}} entities)))
   (dorun (map (fn [[k v]]
                 (println (str k " average " v " ms")))
               (perf/report)))))
