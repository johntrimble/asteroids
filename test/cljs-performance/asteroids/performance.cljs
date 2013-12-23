(ns asteroids.performance)

(def ^:dynamic *measurements* nil)

(defn report []
  (into {}
        (for [[k v] @*measurements*]
          [k (/ (reduce + 0 v) (count v))])))
