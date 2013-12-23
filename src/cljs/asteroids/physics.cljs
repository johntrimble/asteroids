(ns asteroids.physics
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            ;; NOTE: ClojureScript doesn't support :refer :all *sadface*
            [asteroids.core :refer [position
                                    acceleration
                                    velocity
                                    max-velocity
                                    rotation
                                    angular-acceleration
                                    angular-velocity
                                    aabb
                                    mass
                                    renderable
                                    player
                                    input
                                    identifier
                                    has-components?
                                    has-component?
                                    get-component
                                    assoc-component
                                    entity
                                    get-entity
                                    assoc-entity
                                    assoc-entities
                                    get-entities
                                    get-id
                                    get-velocity
                                    get-acceleration
                                    get-position
                                    get-angular-velocity
                                    get-angular-acceleration
                                    get-rotation
                                    get-aabb
                                    get-mass
                                    dissoc-entity]]
            [asteroids.math :as math]))

(defn impulse [j]
  {:name :impulse, :magnitude j})

(defn moment-inertia [tensor]
  {:name :moment-inertia :tensor tensor})

(defn get-moment-of-inertia [entity]
  (-> entity
      (get-component :moment-inertia)
      (:tensor math/infinity)))

(defn get-vel-point
  "Returns the velocity of a given world point on the entity. The value of
  this function is undefined for world points not on the entity."
  [entity point]
  (let [pos (get-position entity)
        v (get-velocity entity)
        w (get-angular-velocity entity)]
    (vector/add v
                (vector/scale w
                              (vector/perp (vector/sub point pos))))))

(defn collidable
  ([] (collidable []))
  ([entity-ids]
   {:name :collidable, :entity-ids entity-ids}))

(defn half-weld-joint
  ([a-id b-id]
   {:name :half-weld-joint, :a-id a-id, :b-id b-id}))

(defn update-acceleration [entity]
  entity)

(defn update-velocity [entity]
  (if (get-component entity :velocity)
    (let [acc (or (get-acceleration entity)
                  [0 0])
          v (get-velocity entity)
          m (or (:magnitude (get-component entity
                                           :max-velocity))
                math/infinity)
          m (max (if v
                   (vector/length v)
                   0)
                 m)
          nv (vector/add v acc)
          nv (if (> (vector/length nv) m)
               (vector/scale m
                             (vector/normalize nv))
               nv)]
      (assoc-component entity
                       (velocity nv)))
    entity))

(defn update-position [entity]
  (let [velocity (or (get-velocity entity)
                     [0 0])
        current-pos (get-position entity)
        new-pos (vector/add velocity current-pos)
        new-pos [(mod (nth new-pos 0) 800)
                 (mod (nth new-pos 1) 800)]]
    (assoc-component entity (position new-pos))))

(defn update-angular-acceleration [entity]
  entity)

;; TODO: This looks almost identical to update-velocity... perhaps there
;; should be a little code reuse here.
(defn update-angular-velocity [entity]
  (if (get-component entity :angular-velocity)
    (let [acc (or (get-angular-acceleration entity)
                  0)
          v (get-angular-velocity entity)
          m (or (:magnitude (get-component entity
                                           :max-angular-velocity))
                math/infinity)
          nv (+ v acc)
          s (math/abs nv)
          nv (if (> s m)
               (* (/ nv s) m)
               nv)]
      (assoc-component entity
                       (angular-velocity nv)))
    entity))

(defn update-rotation [entity]
  (if (get-component entity :rotation)
    (let [v (or (get-angular-velocity entity)
                0)
          current-rotation (get-rotation entity)
          new-rotation (+ v current-rotation)]
      (assoc-component entity (rotation new-rotation)))
    entity))


(defn midpoint [[x1 y1] [x2 y2]]
  [(/ (+ x1 x2) 2) (/ (+ y1 y2) 2)])

(defn update-aabb [entity]
  (if (get-component entity :aabb)
    (let [pos (get-position entity)
          [pmin pmax] (-> entity (get-component :aabb) :vector)
          mid (midpoint pmin pmax)
          delta (vector/sub pos mid)
          pmin (vector/add pmin delta)
          pmax (vector/add pmax delta)]
      (assoc-component entity
                       (aabb pmin pmax)))
  entity))

(defn boxes-overlap? [[[xmin1 ymin1] [xmax1 ymax1]]
                      [[xmin2 ymin2] [xmax2 ymax2]]]
  (and (< ymin1 ymax2)
       (< xmin1 xmax2)
       (< ymin2 ymax1)
       (< xmin2 xmax1)))

(defn all-pairs [coll]
  (let [coll (vec coll)
        s (count coll)]
    (for [i (range s) j (range i)]
      [(nth coll i) (nth coll j)])))

(defn- pair [a b]
  [a b]
  (if (< 0 (compare a b))
         [a b]
         [b a]))

(defn- find-collisions-along-axis
  "Finds collisions along an axis where min-field and max-field are the
  property names of the minimum and maximum coordinates along the axis. The
  mins-array and maxes-array are arrays of objects having the fields
  corresponding to the values of min-field and max-field, as well as an
  arbitrary id property (though it must be comparable). The arrays do not need
  to be sorted, and might be reordered by this function."
  [min-field max-field mins-array maxes-array]
  (let [aabbs-min (.sort mins-array #(- (aget %1 min-field) (aget %2 min-field)))
        aabbs-max (.sort maxes-array #(- (aget %1 max-field) (aget %2 max-field)))
        size (count aabbs-max )]
    (loop [i 0, j 0, active #{}, collisions (transient #{})]
      (if (and (< i size) (< j size))
        (let [a (aget aabbs-min i)
              b (aget aabbs-max j)
              a-id (aget a "id")
              b-id (aget b "id")]
          (cond
           ;; case 1: an aabb has become active
           (< (aget a min-field) (aget b max-field))
           (recur (inc i)
                  j
                  (conj active a-id)
                  (reduce #(conj! %1 (pair %2 a-id))
                          collisions
                          active))

           ;; case 2: an aabb has become inactive
           :default
           (recur i
                  (inc j)
                  (disj active b-id)
                  collisions)))
        (persistent! collisions)))))

;; Arrays used here for performance reasons.
(defn find-aabb-collisions [world]
  (let [aabbs (->> world
                   (get-entities)
                   (filter #(has-components? % :aabb :collidable))
                   (map (fn [e]
                          (let [id (get-id e)
                                [[xmin ymin] [xmax ymax]] (:vector (get-component e :aabb))
                                obj (js-obj)]
                            (aset obj "xmin" xmin)
                            (aset obj "ymin" ymin)
                            (aset obj "xmax" xmax)
                            (aset obj "ymax" ymax)
                            (aset obj "id" id)
                            obj)))
                   (to-array))
        aabbs-min aabbs
        aabbs-max (.slice aabbs 0)
        x-collided (find-collisions-along-axis "xmin" "xmax" aabbs-min aabbs-max)
        y-collided (find-collisions-along-axis "ymin" "ymax" aabbs-min aabbs-max)]
    (seq (set/intersection x-collided
                           y-collided))))

(defn circles-collide? [c1 r1 c2 r2]
  (> (+ r1 r2) (vector/length (vector/sub c1 c2))))

(defn find-collisions [world pairs]
  (let [to-circle (fn [entity]
                    (let [box (get-aabb entity)
                          [[xmin ymin] [xmax ymax]] box
                          [x y] (get-position entity)
                          r (math/abs (- xmax x))]
                      (assert (not (< r 0)) "The circle radius cannot be negative.")
                      [[x y] r]))]
    (->> pairs
         (filter #(apply circles-collide?
                         (concat (to-circle (get-entity world (first %)))
                                 (to-circle (get-entity world (second %)))))))))

(defn fmap [f m]
  (into {}
        (for [[k v] m] [k (f v)])))

(defn calc-collision-manifold [world entity1 entity2]
  (let [pos1 (get-position entity1)
        pos2 (get-position entity2)
        [[xmin1 _] [xmax1 _]] (get-aabb entity1)
        [[xmin2 _] [xmax2 _]] (get-aabb entity2)
        trans (vector/sub pos2 pos1)
        ;; TODO: there is not currently support for different shapes for rigid
        ;; bodies, so everything is just assumed to be a circle inscribed
        ;; inside the AABB.
        r1 (math/abs (- xmax1 (first pos1)))
        r2 (math/abs (- xmax2 (first pos2)))
        d (vector/length trans)]
    (cond
     ;; case 1: edge case where both objects are right on top of each other
     (vector/zero-vector? trans)
     {:a-id (get-id entity1)
      :b-id (get-id entity2)
      :contacts [{:penetration r1
                  :normal [1 0]
                  :position pos1}]}

     ;; case 2: edge case where there isn't actually a collision, this can
     ;; happen when AABBs overlap but the actual shapes contained within them
     ;; don't.
     (> d (+ r1 r2))
     {:a-id (get-id entity1)
      :b-id (get-id entity2)
      :contacts []}

     ;; case 3: general case
     :default
     (let [normal (vector/normalize trans)]
       {:a-id (get-id entity1)
        :b-id (get-id entity2)
        :contacts [{:penetration (- (+ r1 r2) d)
                    :normal normal
                    :position (vector/add (vector/scale r1 normal)
                                          pos1)}]}))))

(defn correct-positions [a b normal penetration]
  (if (and penetration (> penetration 0))
    (let [massa (get-mass a)
          massb (get-mass b)
          posa (get-position a)
          posb (get-position b)
          delta (vector/scale penetration normal)]
      [(-> a
           (assoc-component (position (vector/sub posa
                                                  (vector/scale (/ 1 massa)
                                                                delta)))))
       (-> b
           (assoc-component (position (vector/add posb
                                                  (vector/scale (/ 1 massb)
                                                                delta)))))])
      [a b]))

(defn resolve-collision [world {:keys [a-id b-id contacts]}]
  (if (seq contacts)
    (let [contact (first contacts)
          collison-point (:position contact)
          a (get-entity world a-id)
          b (get-entity world b-id)
          normal (:normal contact)
          va (get-vel-point a collison-point)
          vb (get-vel-point b collison-point)
          relv (vector/sub vb va)
          collision-relv (vector/dot relv normal)]
      (if (> collision-relv 0)
        ;; objects are moving apart
        []
        ;; objects are moving towards each other, resolve collision
        (let [penetration (:penetration contact)
              mass-a (get-mass a)
              mass-b (get-mass b)
              moment-inertia-a (get-moment-of-inertia a)
              moment-inertia-b (get-moment-of-inertia b)
              restitution 1.0 ;; perfectly elastic collisions
              ra (vector/dot (vector/perp (vector/sub collison-point
                                                      (get-position a)))
                             normal)
              rb (vector/dot (vector/perp (vector/sub collison-point
                                                      (get-position b)))
                             normal)
              impulse (/ (* (* -1 (+ restitution 1.0)) collision-relv)
                         (+ (/ 1 mass-a)
                            (/ 1 mass-b)
                            (/ (* ra ra) moment-inertia-a)
                            (/ (* rb rb) moment-inertia-b)))
              new-va (vector/sub (get-velocity a)
                                 (vector/scale (/ impulse mass-a)
                                               normal))
              new-vb (vector/add (get-velocity b)
                                 (vector/scale (/ impulse mass-b)
                                               normal))
              new-wa (+ (get-angular-velocity a) (/ (* ra impulse)
                                                    moment-inertia-a))
              new-wb (- (get-angular-velocity b) (/ (* rb impulse)
                                                    moment-inertia-b))
              pos-correction (vector/scale (* 0.5 penetration)
                                           normal)]
          (correct-positions (-> a
                                 (assoc-component (velocity new-va))
                                 (assoc-component (angular-velocity new-wa)))
                             (-> b
                                 (assoc-component (velocity new-vb))
                                 (assoc-component (angular-velocity new-wb)))
                             normal
                             penetration))))
    []))

(defn resolve-collisions [world manifolds]
  (->> manifolds
       (mapcat (partial resolve-collision world))
       (assoc-entities world)))

;; NOTE: This does not handle collisions involving more than 2 objects well.
;; What happens currently is that each pair of colliding entities is handled
;; independently and the updated entites are then merged back into the world.
;; If the same entity was updated twice, one of those updates gets lost.
(defn handle-collisions [world pairs]
  (if (seq pairs)
    (->> pairs
         (map (partial map (partial get-entity world)))
         ;; Some entities may have been removed from the world after the
         ;; collision was detected, so filter them out.
         (filter (partial every? identity))
         (map (partial apply calc-collision-manifold world))
         (resolve-collisions world))
    world))

(defn update-collisions [world]
  (let [box-collisions (find-aabb-collisions world)
        collisions (find-collisions world box-collisions)]
    (handle-collisions world collisions)))

(defn update-physics [world]
  (assoc world
    :entities
    (into {} (for [[id e] (:entities world)]
               [id (-> e
                       update-acceleration
                       update-angular-acceleration
                       update-velocity
                       update-angular-velocity
                       update-position
                       update-rotation
                       update-aabb)]))))

(defn clear-collisions [world]
  (->> world
       (get-entities)
       (filter #(has-component? % :collidable))
       (map #(assoc-component % (collidable)))
       (assoc-entities world)))

(defn physics-system [world]
  (-> world
      (update-physics)))

(defn collision-detection-system [world]
  (let [pairs (find-aabb-collisions world)
        pairs (find-collisions world pairs)
        collision-map (reduce (fn [acc p]
                                (let [p1 (first p)
                                      p2 (second p)]
                                  (-> acc
                                      (update-in [p1] #(conj % p2))
                                      (update-in [p2] #(conj % p1)))))
                              {}
                              pairs)
        ]
    (->> world
         get-entities
         (filter #(has-component? % :collidable))
         (map (fn [e]
                (assoc-component e
                                 (collidable (get collision-map (get-id e))))))
         (assoc-entities world))))

(defn update-with-impulse [old-world world]
  (let [has-mass-velocity? #(and (has-component? % :mass)
                                 (has-component? % :velocity))]
    (->> world
         get-entities
         (map #(vector % (get-entity old-world (get-id %))))
         (filter #(second %))
         (filter #(every? has-mass-velocity? %))

         (map (fn [[ne e]]
                (assoc-component ne
                                 (impulse (math/abs (* (get-mass ne) ; assume mass didn't change
                                                       (vector/length (vector/sub (get-velocity e)
                                                                                  (get-velocity ne)))))))))
         (assoc-entities world))))

(defn collision-physics-system [world]
  (->> world
       (get-entities)
       (filter #(has-component? % :collidable))
       (filter #(-> %
                    (get-component :collidable)
                    :entity-ids
                    seq))
       (mapcat (fn [e] (let [collides-with (-> e
                                               (get-component :collidable)
                                               :entity-ids)]
                         (map #(set [(get-id e) %])
                              collides-with))))
       (into #{})
       (handle-collisions world)
       (update-with-impulse world)))
