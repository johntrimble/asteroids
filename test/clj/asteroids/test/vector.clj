(ns asteroids.test.vector
  (:require [asteroids.vector :refer :all]
            [clojure.test :refer :all]))

(deftest vector-test
  (is (= [3 5]
         (add [1 2] [2 3])))
  (is (= [-1 -1]
         (sub [1 2] [2 3])))
  (is (== 5.0
          (length [3 4]))))
