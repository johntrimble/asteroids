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

(deftest update-aabb-test
  (let [something (entity (position [4 5]) (aabb [0 0] [2 2]))]
    (is [[3 4] [5 6]]
        (get-in (update-aabb something) [:aabb :vector]))))

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

(deftest find-aabb-collisions-test
  (let [a (entity (aabb [2 2] [10 10])
                  (collidable))
        b (entity (aabb [5 8] [7 20])
                  (collidable))
        c (entity (aabb [20 10] [30 20])
                  (collidable))
        world (reduce assoc-entity {} [a b c])
        collisions (find-aabb-collisions world)]
    (is (contains? (into #{} collisions)
                   #{(get-id a) (get-id b)}))
    (is (not (contains? (into #{} (flatten collisions))
                        (get-id c))))))

(deftest circles-collide-test
  (is (not (circles-collide? [3 3] 3 [8 8] 3)))
  (is (circles-collide? [3 3] 3 [8 8] 20)))

(deftest find-collisions-test
  (let [a (entity (position [3 3])
                  (aabb [0 0] [6 6])
                  (collidable))
        b (entity (position [8 8])
                  (aabb [-12 -12] [28 28])
                  (collidable))
        c (entity (position [30 10])
                  (aabb [29 9] [31 11])
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

(deftest calculate-collision-manifold-test
  (testing "standard case "
    (let [a (entity (collidable)
                    (mass 1)
                    (velocity [5 0])
                    (position [-1 0])
                    (aabb [-3 -2] [1 2]))
          b (entity (collidable)
                    (mass 1)
                    (velocity [-5 0])
                    (position [1 0])
                    (aabb [-1 -2] [3 2]))
          world (reduce assoc-entity {} [a b])
          manifold (calc-collision-manifold world a b)
          contacts (:contacts manifold)
          contact (first contacts)]
      (is (= 1 (count (:contacts manifold))))
      (is (= (get-id a) (:a-id manifold)))
      (is (= (get-id b) (:b-id manifold)))
      (is (vector/vec== [1 0]
                        (:normal contact)))
      (is (vector/vec== [1 0]
                        (:position contact)))
      (is (== 2 (:penetration contact)))))

  (testing "edge case: directly on top of each other"
    (let [a (entity (collidable)
                    (mass 1)
                    (velocity [5 0])
                    (position [0 0])
                    (aabb [-1 -1] [1 1]))
          b (entity (collidable)
                    (mass 1)
                    (velocity [5 0])
                    (position [0 0])
                    (aabb [-1 -1] [1 1]))
          world (reduce assoc-entity {} [a b])
          manifold (calc-collision-manifold world a b)
          contact (first (:contacts manifold))]
      (is (vector/vec== [1 0] (:normal contact)))))
  (testing "edge case: no collision"
    (let [a (entity (collidable)
                    (mass 1)
                    (velocity [5 0])
                    (position [0 0])
                    (aabb [-1 -1] [1 1]))
          b (entity (collidable)
                    (mass 1)
                    (velocity [5 0])
                    (position [20 20])
                    (aabb [19 19] [21 21]))
          world (reduce assoc-entity {} [a b])
          manifold (calc-collision-manifold world a b)
          contacts (:contacts manifold)]
      (is (empty? contacts)))))

(deftest get-vel-point-test
  (let [a (entity (collidable)
                  (mass 1)
                  (velocity [0 0])
                  (position [0 0])
                  (aabb [-2 -2] [2 2])
                  (angular-velocity 0.5))
        b (assoc-component a (velocity [1 1]))
        upper-right (vector/scale 2 (vector/normalize [2 2]))]
    (testing "non-translating rotating circle"
      (testing "velocity at origin"
        (is (= [0.0 0.0]
               (get-vel-point a [0 0]))))
      (testing "velocity at perimeter"
        (is (= [-1.0 0.0]
               (get-vel-point a [0 2])))
        (is (= [0.0 -1.0]
               (get-vel-point a [-2 0])))
        (is (= [-0.7071067811865475 0.7071067811865475]
               (get-vel-point a upper-right))))
      (testing "velocity at internal points"
        (is (= [-0.5 0.0]
               (get-vel-point a [0 1])))))
    (testing "translating rotating circle"
      (testing "velocity at origin"
        (is (= [1.0 1.0]
               (get-vel-point b [0 0]))))
      (testing "velocity at permiter"
        (is (= [0.0 1.0]
               (get-vel-point b [0 2]))))
      (testing "velocity at internal points"
        (is (= [0.5 1.0]
               (get-vel-point b [0 1])))))))
