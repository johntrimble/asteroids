(ns asteroids.vector
  (:require [clojure.string :refer [split-lines lower-case join]]
            [asteroids.math :as math]))

(defn add [a b]
  (mapv + a b))

(defn sub [a b]
  (mapv - a b))

(defn length [[x y]]
  (math/sqrt (+ (math/pow x 2)
                (math/pow y 2))))

(defn scale [s v]
  (mapv (partial * s) v))

(defn dot [a b]
  (->> (interleave a b)
       (partition 2)
       (map (fn [[a b]] (* a b)))
       (reduce +)))

(defn rotate [theta v]
  (let [x (nth v 0)
        y (nth v 1)]
    [(- (* x (math/cos theta))
        (* y (math/sin theta)))
     (+ (* x (math/sin theta))
        (* y (math/cos theta)))]))

(defn perp
  "Returns a vector with the same length as v but rotated counterclockwise
  by 90 degrees."
  [v]
  [(- (nth v 1))
   (nth v 0)])

(defn normalize [v]
  (let [l (length v)]
    (mapv #(/ % l) v)))

(defn project [a b]
  (let [ub (normalize b)]
    (scale (dot a ub)
           ub)))

(defn vec== [a b]
  (reduce #(and %1 %2)
          true
          (map == a b)))

(defn zero-vector? [a]
  (reduce #(and %1 %2)
          true
          (map == (repeat 0) a)))