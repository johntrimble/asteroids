(ns asteroids.test.physics
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.core :refer :all]
            [asteroids.physics :refer :all]))

(deftest update-velocity-test
  (let [something (entity (velocity [2 1])
                          (acceleration [1 0.5]))]
    (is [3 1.5]
        (get-in (update-velocity something)
                [:velocity :vector]))))

(deftest update-position-test
  (let [something (entity (velocity [0.35 1.6])
                          (position [5 5]))]
    (is [6 7]
        (get-in (update-position (update-position something))
                [:position :vector]))))

(deftest midpoint-test
  (is (= [1 3]
         (midpoint [-1 2] [3 4]))))

(deftest update-bounding-box-test
  (let [something (entity (position [4 5]) (bounding-box [0 0] [2 2]))]
    (is [[3 4] [5 6]]
        (get-in (update-bounding-box something) [:bounding-box :vector]))))

(deftest boxes-overlap-test
  (testing "Overlapping corner"
    (is (boxes-overlap? [[1 1] [5 5]]
                        [[4 3] [6 7]])))
  (testing "Overlap side"
    (is (boxes-overlap? [[2 2] [10 10]]
                        [[5 8] [7 20]])))
  (testing "Contains rectangle"
    (is (boxes-overlap? [[2 2] [10 10]]
                        [[4 4] [8 8]])))
  (testing "Does not overlap"
    (is (not (boxes-overlap? [[1 1] [3 4]]
                             [[3 5] [6 7]])))))

(deftest find-bounding-box-collisions-test
  (let [a (entity (bounding-box [2 2] [10 10])
                  (collidable))
        b (entity (bounding-box [5 8] [7 20])
                  (collidable))
        c (entity (bounding-box [20 10] [30 20])
                  (collidable))
        world (reduce assoc-entity {} [a b c])
        collisions (find-bounding-box-collisions world)]
    (is (contains? (into #{} collisions)
                   #{(get-id a) (get-id b)}))
    (is (not (contains? (into #{} (flatten collisions))
                        (get-id c))))))

(deftest circles-collide-test
  (is (not (circles-collide? [3 3] 3 [8 8] 3)))
  (is (circles-collide? [3 3] 3 [8 8] 20)))

(deftest find-collisions-test
  (let [a (entity (position [3 3])
                  (bounding-box [0 0] [6 6])
                  (collidable))
        b (entity (position [8 8])
                  (bounding-box [-12 -12] [28 28])
                  (collidable))
        c (entity (position [30 10])
                  (bounding-box [29 9] [31 11])
                  (collidable))
        world (reduce assoc-entity {} [a b c])
        collisions (find-collisions world
                                    [#{(get-id a) (get-id b)}
                                     #{(get-id a) (get-id c)}
                                     #{(get-id b) (get-id c)}])]
    (is (some #{#{(get-id a) (get-id b)}}
              collisions))
    (is (not (some #{#{(get-id a) (get-id c)}
                     #{(get-id b) (get-id c)}}
                   collisions)))))

(deftest quadratic-test
  ;; we have floats here, so give a little wiggle room
  (every? #(< -0.001 % 0.001)
          (map -
               (sort [(+ -1 (Math/sqrt 3))
                      (- -1 (Math/sqrt 3))])
               (sort (quadratic 2 4 -4)))))

(deftest translate-points-to-desired-offset-test2
  (is (== 5.0
          (->> (translate-points-to-desired-offset [3 4]
                                                   [5 6]
                                                   [-1 -1]
                                                   [1 1]
                                                   5)
               (apply vector/sub)
               (vector/length))))
  ;; check that v2 is halved in the off chance that both objects have the same velocity
  (is (= [[497.1963120067104 356.6355744080525] [503.5981560033552 364.3177872040262]]
         (translate-points-to-desired-offset [510 372]
                                             [510 372]
                                             [5 6]
                                             [5 6]
                                             10)))
  ;; check that v2 is set to [1 1] if neither object are moving
  (is (= (translate-points-to-desired-offset [510 372]
                                              [510 372]
                                              [0 0]
                                              [1 1]
                                              10)
          (translate-points-to-desired-offset [510 372]
                                              [510 372]
                                              [0 0]
                                              [0 0]
                                              10)))
  ;; when no solution, return NaN... this should probably be something with
  ;; less stupid.
  (is (every? #(Double/isNaN %)
              (flatten (translate-points-to-desired-offset [165 754]
                                                           [155.91217058837705 837.1614228898975]
                                                           [-22.528487853611708 16.34399692875587]
                                                           [0.36242946221211125 2.1241789294117304]
                                                           (+ 8 7.912170588377052))))))

(deftest find-post-collision-velocities-test
  (is (= [-5 5]
         (find-post-collision-velocities 5 -5 10 10)))
  (is (= [-5/3 25/3]
         (find-post-collision-velocities 5 -5 10 5))))


#_(handle-collision nil
                  (entity (position [3 3])
                          (bounding-box [0 0] [6 6])
                          (velocity [7 10]))
                  (entity (position [8 8])
                          (bounding-box [-12 -12] [28 28])
                          (velocity [-6 15])))

(deftest handle-collision-test
  (let [a (entity (position [3 3])
                  (collidable)
                  (bounding-box [0 0] [6 6])
                  (mass (* Math/PI (* 3 3)))
                  (velocity [7 10]))
        b (entity (position [8 8])
                  (collidable)
                  (bounding-box [-12 -12] [28 28])
                  (mass (* Math/PI (* 20 20)))
                  (velocity [-6 15]))
        world nil
        [na nb] (handle-collision world a b)]
    (is (= [-6 -10]
           (map int (get-position na))))
    (is (= [-19 12]
           (map int (get-velocity na))))
    (is (= [16 -12]
           (map int (get-position nb)))
        (= [-5 14]
           (map int (get-velocity nb))))))
