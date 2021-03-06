(ns asteroids.vector
  (:require [clojure.string :refer [split-lines lower-case join]]
            [asteroids.math :as math]))

(defn add [a b]
  [(+ (nth a 0) (nth b 0))
   (+ (nth a 1) (nth b 1))])

(defn sub [a b]
  [(- (nth a 0) (nth b 0))
   (- (nth a 1) (nth b 1))])

(defn length [v]
  (math/sqrt (+ (math/pow (nth v 0) 2)
                (math/pow (nth v 1) 2))))

(defn scale [s v]
  [(* s (nth v 0))
   (* s (nth v 1))])

(defn dot [a b]
  (+ (* (nth a 0) (nth b 0))
     (* (nth a 1) (nth b 1))))

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
    [(/ (nth v 0) l)
     (/ (nth v 1) l)]))

(defn project [a b]
  (let [ub (normalize b)]
    (scale (dot a ub)
           ub)))

(defn vec== [a b]
  (reduce #(and %1 %2)
          true
          (map == a b)))

(defn zero-vector? [a]
  (== 0 (nth a 0) (nth a 1)))
