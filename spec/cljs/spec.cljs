(ns asteroids.core-spec
  (:require-macros [specljs.core :refer [describe
                                         it
                                         should==
                                         should=
                                         should-not==
                                         should-not=
                                         should
                                         should-not-contain
                                         should-contain]])
  (:require [specljs.core]
            [asteroids.core]
            [asteroids.core :as core]
            [asteroids.physics :as physics]
            [asteroids.keyboard :as keyboard]
            [asteroids.jsutil :refer [make-js-map]]))

(defn setofy [collisions]
  (->> collisions
       (map #(into #{} %))
       (into #{})))

(let [a (core/entity (core/aabb [0 0] [6 6])
                     (physics/collidable))
      b (core/entity (core/aabb [1 1] [3 3])
                     (physics/collidable))
      c (core/entity (core/aabb [5 5] [7 7])
                     (physics/collidable))
      d (core/entity (core/aabb [5 2] [10 4])
                     (physics/collidable))]
  (describe "find-aabb-collisions"
            (it "should find collisions when one aabb fully contains another"
                (let [world (reduce core/assoc-entity {} [a b])
                      collisions (-> world
                                     physics/find-aabb-collisions
                                     setofy)]
                  (should-contain #{(core/get-id a) (core/get-id b)}
                                  collisions)
                  (should= 1 (count collisions))))

            (it "should find collisions when one aabb contains a corner of another"
                (let [world (reduce core/assoc-entity {} [c a])
                      collisions (-> world
                                     physics/find-aabb-collisions
                                     setofy)]
                  (should-contain #{(core/get-id c) (core/get-id a)}
                                  collisions)
                  (should= 1 (count collisions))))

            (it "should find collisions when one aabb contains two corners of another"
                (let [world (reduce core/assoc-entity {} [a d])
                      collisions (-> world
                                     physics/find-aabb-collisions
                                     setofy)]
                  (should-contain #{(core/get-id a) (core/get-id d)}
                                  collisions)
                  (should= 1 (count collisions))))

            (it "should detect multiple simultaneous collisions"
                (let [world (reduce core/assoc-entity {} [a b c d])
                      collisions (->> world
                                      (physics/find-aabb-collisions)
                                      (setofy))]
                  (should-contain #{(core/get-id a) (core/get-id b)}
                                  collisions)
                  (should-contain #{(core/get-id c) (core/get-id a)}
                                  collisions)
                  (should-contain #{(core/get-id a) (core/get-id d)}
                                  collisions)
                  (should= 3 (count collisions))))))

(let [a (core/entity (core/velocity [2 1])
                     (core/acceleration [1 0.5])
                     (core/position [5 5])
                     (core/aabb [4 4] [6 6]))
      world (core/assoc-entity {} a)
      a (core/get-entity world (core/get-id a))
      world-new (physics/physics-system world)
      a-new (core/get-entity world-new (core/get-id a))]
  (describe "physics-system"
            (it "should update velocity by acceleration"
                (should= [3 1.5] (core/get-velocity a-new)))
            (it "should update velocity before updating position"
                (should-not= [7 6] (core/get-position a-new)))
            (it "should update the position"
                (should= [8 6.5] (core/get-position a-new)))
            #_(it "should update the aabb"
                (should= [[7 5.5] [9 7.5]] (core/get-aabb a)))))

(defn mock-key-event [c]
  (let [out (js-obj)]
    (aset out "keyCode" c)
    (aset out "preventDefault" (fn []))
    out))

(describe "keyboard-system"
          (it "should register pressed keys"
              (keyboard/key-handler :keydown (mock-key-event 32))
              (should-contain :space (:active-keys (keyboard/keyboard-system {})))
              (keyboard/key-handler :keyup (mock-key-event 32))
              (should-contain :space (:active-keys (keyboard/keyboard-system {})))
              (should-not-contain :space (:active-keys (keyboard/keyboard-system {})))))
