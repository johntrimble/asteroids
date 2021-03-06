(ns asteroids.performance-checks
  (:require [asteroids.physics :as physics]
            [asteroids.levels :as levels]
            [asteroids.performance :as perf]
            [asteroids.core :as core])
  (:require-macros [asteroids.performance.macros :refer [measurements sample samples]]
                   [asteroids.core :refer [transform-entities]])
  (:refer-clojure :exclude (set-print-fn!)))

(defn ^:export set-print-fn! [f]
  (set! cljs.core.*print-fn* f))

(defn fake-map-filter-that-processes-most-entities-system [world]
  (->> world
       core/get-entities
       (filter #(core/has-component? % :health))
       (map identity)
       (core/assoc-entities world)))

(defn fake-map-filter-that-processes-few-entities-system [world]
  (->> world
       core/get-entities
       (filter #(core/has-component? % :no-one-has-this))
       (map identity)
       (core/assoc-entities world)))

(defn fake-for-that-processes-most-entities-system [world]
  (core/assoc-entities world
                       (for [e (core/get-entities world)
                             :when (core/has-component? e :health)]
                         (identity e))))

(defn fake-for-that-processes-few-entities-system [world]
  (core/assoc-entities world
                       (for [e (core/get-entities world)
                             :when (core/has-component? e :no-one-has-this)]
                         (identity e))))

(defn fake-loop-with-transient-processes-most-entities-system [world]
  (core/assoc-entities world
                       (loop [entities (core/get-entities world), coll (transient [])]
                         (if (seq entities)
                           (let [e (first entities)]
                             (if (core/has-component? e :health)
                               (recur (rest entities) (conj! coll (identity e)))
                               (recur (rest entities) coll)))
                           (persistent! coll)))))

(defn fake-loop-with-transient-processes-few-entities-system [world]
  (core/assoc-entities world
                       (loop [entities (core/get-entities world), coll (transient [])]
                         (if (seq entities)
                           (let [e (first entities)]
                             (if (core/has-component? e :no-one-has-this)
                               (recur (rest entities) (conj! coll (identity e)))
                               (recur (rest entities) coll)))
                           (persistent! coll)))))

(defn fake-transform-entities-most-entities-system [world]
  (transform-entities {:components [:health]}
                      (fn [_ entity]
                        (identity entity))
                      world))

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
               (perf/report))))

  (measurements
   (let [l (doall (range 10000))]
     (samples 1000 :map-performance
              (doall (map #(* 2 %) l)))
     (samples 1000 :mapv-performance
              (mapv #(* 2 %) l)))

   (dorun (map (fn [[k v]]
                 (println (str k " average " v " ms")))
               (perf/report))))

  (measurements
   (let [world (levels/random-asteroid-field 1000)]
     (samples 100 :system-using-map-filter-to-process-many
              (fake-map-filter-that-processes-most-entities-system world))
     (samples 100 :system-using-for-to-process-many
              (fake-for-that-processes-most-entities-system world))
     (samples 100 :system-using-loop-to-process-many
              (fake-loop-with-transient-processes-most-entities-system world))
     (samples 100 :system-transform-entities-process-many
              (fake-transform-entities-most-entities-system world)))
   (dorun (map (fn [[k v]]
                 (println (str k " average " v " ms")))
               (perf/report))))

  (measurements
   (let [world (levels/random-asteroid-field 1000)]
     (samples 100 :system-using-map-filter-to-process-few
              (fake-map-filter-that-processes-few-entities-system world))
     (samples 100 :system-using-for-to-process-few
              (fake-for-that-processes-few-entities-system world))
     (samples 100 :system-using-loop-to-process-few
              (fake-loop-with-transient-processes-few-entities-system world)))
   (dorun (map (fn [[k v]]
                 (println (str k " average " v " ms")))
               (perf/report))))

  (measurements
   (let [world (levels/random-asteroid-field 100)
         e (first (core/get-entities world))]
     (samples 1000 :get-velocity-with-component
              (:vector (core/get-component e :velocity) [0 0]))
     (samples 1000 :get-velocity-with-get-in
              (get-in e [:velocity :vector] [0 0]))
     (samples 1000 :get-velocity-with-or
              (or (:vector (core/get-component e :velocity)) [0 0])))
   (dorun (map (fn [[k v]]
                 (println (str k " average " v " ms")))
               (perf/report))))

  (measurements
   ;cljs.core.PersistentArrayMap/EMPTY
   (let [m-arr (into cljs.core.PersistentArrayMap/EMPTY
                     [["a" 1] ["b" 2] ["c" 3] ["d" 4]])
         m-hash (into cljs.core.PersistentHashMap/EMPTY
                      [["a" 1] ["b" 2] ["c" 3] ["d" 4]])
         m-obj (into cljs.core.ObjMap/EMPTY
                     [["a" 1] ["b" 2] ["c" 3] ["d" 4]])]
     (samples 1 :get-from-array-map
              (dotimes [_ 500000] (get m-arr "b")))
     (samples 1 :get-from-hash-map
              (dotimes [_ 500000] (get m-hash "b")))
          (samples 1 :get-from-obj-map
              (dotimes [_ 500000] (get m-obj "b"))))
   (dorun (map (fn [[k v]]
                 (println (str k " average " v " ms")))
               (perf/report)))))
