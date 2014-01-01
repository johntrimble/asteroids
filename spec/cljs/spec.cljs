(ns asteroids.core-spec
  (:require-macros [specljs.core :refer [describe
                                         it
                                         should==
                                         should=
                                         should-not==
                                         should-not=
                                         should-not
                                         should
                                         should-not-contain
                                         should-contain]])
  (:require [specljs.core]
            [asteroids.core]
            [asteroids.core :as core]
            [asteroids.physics :as physics]
            [asteroids.keyboard :as keyboard]
            [asteroids.health :as health]
            [asteroids.jsutil :refer [make-js-map]]
            [asteroids.asteroids :as asteroids]
            [asteroids.math :as math]))

(defn setofy [collisions]
  (->> collisions
       (map #(into #{} %))
       (into #{})))

(let [a (-> (core/entity)
            (core/assoc-components
             [{:name :a}
              {:name :b}
              {:name :c}
              {:name :d}]))]
  (describe "has-components?"
            (it "should handle checking for 1 component"
                (should (core/has-components? a :a))
                (should-not (core/has-components? a :z)))
            (it "should handle checking for 2 components"
                (should (core/has-components? a :a :b))
                (should-not (core/has-components? a :a :z)))
            (it "should handle checking for 3 components"
                (should (core/has-components? a :a :b :c))
                (should-not (core/has-components? a :a :b :z)))
            (it "should handle checking for n components"
                (should (core/has-components? a :a :b :c :d))
                (should-not (core/has-components? a :a :b :c :d :z)))))

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

(let [a (core/entity (core/movement [1 0.5]
                                    [2 1]
                                    math/infinity
                                    0
                                    0
                                    math/infinity)
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
            (it "should provide a valid value for rotation"
                (should-not (js/isNaN (core/get-rotation a-new))))
            (it "should provide a valid value for angular components"
                (should-not (js/isNaN (core/get-angular-velocity a-new)))
                (should-not (js/isNaN (core/get-angular-acceleration a-new))))
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

(describe "update-pressed-keys!"
          (it "should disable active keys on keyup events"
              (let [active-keys (atom #{:up})]
                (keyboard/update-pressed-keys! active-keys
                                               [[:keyup :up]])
                (should-not-contain :up @active-keys)))
          (it "should make keys active on keydown events"
              (let [active-keys (atom #{})]
                (keyboard/update-pressed-keys! active-keys
                                               [[:keydown :up]])
                (should-contain :up @active-keys)))
          (it "should handle multiple events"
              (let [active-keys (atom #{})]
                (keyboard/update-pressed-keys! active-keys
                                               [[:keydown :up]
                                                [:keydown :down]])
                (should-contain :up @active-keys)
                (should-contain :down @active-keys)
                (should= 2 (count @active-keys))))
          (it "should process events in order"
              (let [active-keys (atom #{})]
                (keyboard/update-pressed-keys! active-keys
                                               [[:keyup :up]
                                                [:keydown :up]])
                (should-contain :up @active-keys)
                (reset! active-keys #{})
                (keyboard/update-pressed-keys! active-keys
                                               [[:keydown :up]
                                                [:keyup :up]])
                (should-not-contain :up @active-keys)
                (should= 0 (count @active-keys)))))

(describe "damage-resolution-system"
          (it "should apply damage"
              (let [e (core/entity (health/health 100 50)
                                   (health/damage 10))
                    world (core/assoc-entity {} e)
                    world (health/damage-resolution-system world)
                    remaining (-> world
                                  (core/get-entity (core/get-id e))
                                  (core/get-component :health)
                                  :current)]
                (should== 40 remaining))))

(let [e (-> (asteroids/create-asteroid {})
            (core/assoc-component (health/health 10 0)))
      world (core/assoc-entity {} e)
      world (asteroids/asteroid-death-system world)
      entity-count (->> world core/get-entities count)]
  (describe "asteroid-death-system"
            (it "should break up asteroids when their health is zero"
                (should (> entity-count 1)))
            (it "should remove asteroids with 0 health"
                (should-not (core/get-entity world (core/get-id e))))))
