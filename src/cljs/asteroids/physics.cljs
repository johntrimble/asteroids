(ns asteroids.physics
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            ;; NOTE: ClojureScript doesn't support :refer :all *sadface*
            [asteroids.core :refer [position
                                    movement
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
                                    dissoc-entity
                                    assoc-components
                                    get-width
                                    get-height]]
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

(defn midpoint [[x1 y1] [x2 y2]]
  [(/ (+ x1 x2) 2) (/ (+ y1 y2) 2)])

(defn update-aabb [entity]
  (if-let [aabb-comp (get-component entity :aabb)]
    (let [[x y] (get-position entity)
          xmin (.-xmin aabb-comp)
          ymin (.-ymin aabb-comp)
          xmax (.-xmax aabb-comp)
          ymax (.-ymax aabb-comp)
          deltax (- x (/ (+ xmin xmax) 2))
          deltay (- y (/ (+ ymin ymax) 2))
          nxmin (+ xmin deltax)
          nxmax (+ xmax deltax)
          nymin (+ ymin deltay)
          nymax (+ ymax deltay)]
      (assoc-component entity
                       (aabb nxmin nymin nxmax nymax)))
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
  (if (< 0 (compare a b))
         [a b]
         [b a]))


;; These were anonymous functions, but they were not being optimized properly
(defn- delta-xmin [a b] (- (.-xmin a) (.-xmin b)))
(defn- delta-xmax [a b] (- (.-xmax a) (.-xmax b)))

(defn- find-aabb-collisions-line-sweep!
  [aabbs]
  (let [aabbs-min (.sort aabbs delta-xmin)
        aabbs-max (.sort (.slice aabbs 0) delta-xmax)
        size (count aabbs-max)]
    (loop [i 0, j 0, active #{}, collisions (transient #{})]
      (if (and (< i size) (< j size))
        (let [a (aget aabbs-min i)
              b (aget aabbs-max j)
              a-id (aget a "id")
              b-id (aget b "id")]
          (cond
           ;; case 1: an aabb has become active
           (< (.-xmin a) (.-xmax b))
           (recur (inc i)
                  j
                  (conj active a)
                  (loop [collisions collisions, active active]
                    (if (seq active)
                      (let [aabb-active (first active)]
                        (assert aabb-active)
                        (if (and (< (.-ymin aabb-active)
                                    (.-ymax a))
                                 (< (.-ymin a)
                                    (.-ymax aabb-active)))
                          (recur (conj! collisions (pair (aget aabb-active "id")
                                                         a-id))
                                 (next active))
                          (recur collisions (next active))))
                      collisions)))

           ;; case 2: an aabb has become inactive
           :default
           (recur i
                  (inc j)
                  (disj active b)
                  collisions)))
        (persistent! collisions)))))

;; Arrays used here for performance reasons.
(defn find-aabb-collisions [world]
  (let [aabbs (make-array 0)]
    (loop [entities (get-entities world)]
      (when (seq entities)
        (let [entity (first entities)]
          (when (has-component? entity :collidable)
            (let [aabb-comp (get-component entity :aabb)]
              (when-not (nil? aabb-comp)
                (aset aabb-comp "id" (get-id entity))
                (.push aabbs aabb-comp)))))
        (recur (next entities))))
    (find-aabb-collisions-line-sweep! aabbs)))

(defn ^boolean circles-collide? [c1 r1 c2 r2]
  (> (+ r1 r2) (vector/length (vector/sub c1 c2))))

(defn find-collisions [world pairs]
  (let [to-circle (fn [entity]
                    (let [box (get-aabb entity)
                          xmax (.-xmax box)
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
        xmax1 (.-xmax (get-aabb entity1))
        xmax2 (.-xmax (get-aabb entity2))
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
              mov-a (get-component a :movement)
              mov-b (get-component b :movement)
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
              new-va (vector/sub (.-velocity mov-a)
                                 (vector/scale (/ impulse mass-a)
                                               normal))
              new-vb (vector/add (.-velocity mov-b)
                                 (vector/scale (/ impulse mass-b)
                                               normal))
              new-wa (+ (.-angular-velocity mov-a) (/ (* ra impulse)
                                                      moment-inertia-a))
              new-wb (- (.-angular-velocity mov-b) (/ (* rb impulse)
                                                      moment-inertia-b))
              pos-correction (vector/scale (* 0.5 penetration)
                                           normal)]
          (correct-positions (-> a
                                 (assoc-component (movement (.-acceleration mov-a)
                                                            new-va
                                                            (.-max_velocity mov-a)
                                                            (.-angular_acceleration mov-a)
                                                            new-wa
                                                            (.-max_angular_velocity mov-a))))
                             (-> b
                                 (assoc-component (movement (.-acceleration mov-b)
                                                            new-vb
                                                            (.-max_velocity mov-b)
                                                            (.-angular_acceleration mov-b)
                                                            new-wb
                                                            (.-max_angular_velocity mov-b))))
                             normal
                             penetration))))
    []))

(defn resolve-collisions [world manifolds]
  (->> manifolds
       (mapcat #(resolve-collision world %))
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

(defn clear-collisions [world]
  (->> world
       (get-entities)
       (filter #(has-component? % :collidable))
       (map #(assoc-component % (collidable)))
       (assoc-entities world)))

(defn update-physics [world e]
  (let [mov (get-component e :movement)
        pos (get-position e)
        acc (.-acceleration mov)
        vel (.-velocity mov)
        max-vel (.-max_velocity mov)
        max-vel (max (if vel (vector/length vel) 0)
                     max-vel)
        ang-acc (.-angular_acceleration mov)
        ang-vel (.-angular_velocity mov)
        ang-max-vel (.-max_angular_velocity mov)
        rot (get-rotation e)
        new-vel (vector/add vel acc)
        new-vel (if (> (vector/length new-vel) max-vel)
                  (vector/scale max-vel (vector/normalize new-vel))
                  new-vel)
        new-ang-vel (+ ang-vel ang-acc)
        ang-speed (math/abs new-ang-vel)
        new-ang-vel (if (> ang-speed ang-max-vel)
                      (* (/ new-ang-vel ang-speed) ang-max-vel)
                      new-ang-vel)
        new-pos (vector/add new-vel pos)
        new-pos [(mod (nth new-pos 0) (get-width world))
                 (mod (nth new-pos 1) (get-height world))]
        new-rot (+ new-ang-vel rot)]
    (update-aabb (assoc-components e
                                   [(movement acc new-vel (.-max_velocity mov)
                                              ang-acc new-ang-vel (.-max_angular_velocity mov))
                                    (position new-pos)
                                    (rotation new-rot)]))))

(defn physics-system [world]
  (loop [entities (:entities world)
         output (transient (:entities world))]
    (if (seq entities)
      (let [entity-entry (first entities)
            entity (second entity-entry)]
        (if (has-component? entity :movement)
          (let [entity (update-physics world entity)
                id (first entity-entry)]
            (recur (next entities) (assoc! output id entity)))
          (recur (next entities) output)))
      (assoc world :entities (persistent! output)))))

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
                                 (has-component? % :movement))]
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
