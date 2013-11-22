(ns asteroids.vector
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]))

(defn add [a b]
  (mapv + a b))

(defn sub [a b]
  (mapv - a b))

(defn length [[x y]]
  (Math/sqrt (+ (Math/pow x 2)
                (Math/pow y 2))))

(defn scale [s v]
  (mapv (partial * s) v))

(defn dot [a b]
  (->> (interleave a b)
       (partition 2)
       (map (fn [[a b]] (* a b)))
       (reduce +)))

(defn perp [v]
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

(deftest vector-test
  (is (= [3 5]
         (add [1 2] [2 3])))
  (is (= [-1 -1]
         (sub [1 2] [2 3])))
  (is (== 5.0
          (length [3 4]))))
