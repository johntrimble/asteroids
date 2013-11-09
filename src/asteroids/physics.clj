(ns asteroids.physics
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.core :refer :all]))

(defn impulse [j]
  {:name :impulse, :magnitude j})

(defn collidable
  ([] (collidable []))
  ([entity-ids]
   {:name :collidable, :entity-ids entity-ids}))

(defn update-acceleration [entity]
  entity)

(defn update-velocity [entity]
  (if (get-component entity :velocity)
    (let [acc (or (get-acceleration entity)
                  [0 0])
          v (get-velocity entity)
          m (or (:magnitude (get-component entity
                                           :max-velocity))
                Integer/MAX_VALUE)
          m (max (if v
                   (vector/length v)
                   0)
                 m)
          nv (vector/add v acc)
          nv (if (> (vector/length nv) m)
               (vector/scale m
                             (vector/normalize nv))
               nv)]
      (assert (not= nv nil))
      (assoc-component entity
                       (velocity nv)))
    entity))

(defn update-position [entity]
  (let [velocity (or (get-velocity entity)
                     [0 0])
        current-pos (get-position entity)
        new-pos (->> current-pos
                     (vector/add velocity)
                     (map #(mod % 800))
                     (vec))]
    (assoc-component entity (position new-pos))))

(defn midpoint [[x1 y1] [x2 y2]]
  [(/ (+ x1 x2) 2) (/ (+ y1 y2) 2)])

(defn update-bounding-box [entity]
  (if (get-component entity :bounding-box)
    (let [pos (get-position entity)
          [pmin pmax] (-> entity (get-component :bounding-box) :vector)
          mid (midpoint pmin pmax)
          delta (vector/sub pos mid)
          pmin (vector/add pmin delta)
          pmax (vector/add pmax delta)]
      (assoc-component entity
                       (bounding-box pmin pmax)))
  entity))


(defn test-entity [[x y] l]
  (let [offset (int (/ l 2))]
    (entity (position [x y])
            (bounding-box [(- x offset) (- y offset)]
                          [(+ x offset) (+ y offset)]))))

(defn boxes-overlap? [[[xmin1 ymin1] [xmax1 ymax1]]
                      [[xmin2 ymin2] [xmax2 ymax2]]]
  (and (< ymin1 ymax2)
       (< xmin1 xmax2)
       (< ymin2 ymax1)
       (< xmin2 xmax1)))

(defn find-bounding-box-collisions [world]
  (let [entities (->> world
                      :entities
                      vals
                      (filter #(has-component? % :bounding-box)))

        entity-box-m (->> entities
                          (map (juxt get-id
                                     (comp :vector
                                           #(get-component % :bounding-box))))
                          (into {}))
        ids (map get-id entities)
        pairs (into #{}
                    (for [id1 ids, id2 ids :when (not= id1 id2)] #{id1 id2}))]
    (->> pairs
         (filter (fn [pair]
                   (boxes-overlap? (get entity-box-m (first pair))
                                   (get entity-box-m (second pair)))))
         (distinct))))

(defn circles-collide? [c1 r1 c2 r2]
  (> (+ r1 r2) (vector/length (vector/sub c1 c2))))

(defn find-collisions [world pairs]
  (let [to-circle (fn [entity]
                    (let [box (get-bounding-box entity)
                          [[xmin ymin] [xmax ymax]] box
                          [x y] (get-position entity)
                          r (Math/abs (- xmax x))]
                      (assert (not (< r 0)) "The circle radius cannot be negative.")
                      [[x y] r]))]
    (->> pairs
         (filter #(apply circles-collide?
                         (concat (to-circle (get-entity world (first %)))
                                 (to-circle (get-entity world (second %)))))))))

(defn fmap [f m]
  (into {}
        (for [[k v] m] [k (f v)])))

(defn quadratic [a b c]
  [(/ (+ (* -1 b) (Math/sqrt (- (Math/pow b 2) (* 4 a c)))) (* 2 a))
   (/ (- (* -1 b) (Math/sqrt (- (Math/pow b 2) (* 4 a c)))) (* 2 a))])

(defn translate-points-to-desired-offset
  "Given two positions and two verticies, adjust the positions along their
  respective verticies until the distance between them is the desired offset."
  [pos1 pos2 v1 v2 desired-offset]
  (let [v2 (cond
            ;; odd case where two objects collide but aren't moving
            (reduce #(and %1 %2)
                    (map == v1 v2 [0 0]))
            [1 1]
            ;; odd case where two objects collide but have same velocity
            (reduce #(and %1 %2)
                    (map == v1 v2))
            (vector/scale 0.5 v2)
            ;; standard case
            :default v2)
        [px py] (vector/sub pos1 pos2)
        [vx vy] (vector/sub v1 v2)
        a (+ (Math/pow vx 2) (Math/pow vy 2))
        b (+ (* 2 vx px) (* 2 vy py))
        c (+ (Math/pow px 2)
             (Math/pow py 2)
             (* -1 (Math/pow desired-offset 2)))
        [t1 t2] (quadratic a b c)
        t (min t1 t2)
        npos1 (vector/add pos1 (vector/scale t v1))
        npos2 (vector/add pos2 (vector/scale t v2))]
    #_(println a b c)
    #_(println t1 t2)
    [npos1 npos2]))

#_(* 2 726.1973194943544)
#_(* 4 726.1973194943544 6745.213727653513)

#_(- (Math/pow -2781.138099405214 2) (* 4 726.1973194943544 6745.213727653513))

#_(quadratic 726.1973194943544 -2781.138099405214 6745.213727653513)

#_(vector/length (vector/sub [165 754] [155.91217058837705 837.1614228898975]))

#_(translate-points-to-desired-offset [165 754]
                                    [155.91217058837705 837.1614228898975]
                                    [-22.528487853611708 16.34399692875587]
                                    [0.36242946221211125 2.1241789294117304]
                                    (+ 8 7.912170588377052))

#_(circles-collide? [165 754] 8 [155.91217058837705 837.1614228898975] 7.912170588377052)


(defn find-post-collision-velocities [v1 v2 m1 m2]
  (let [nv1 (/ (+ (* v1 (- m1 m2))
                  (* 2 m2 v2))
               (+ m1 m2))
        nv2 (/ (+ (* m1 v1)
                  (* m2 v2)
                  (* -1 m1 nv1))
               m2)]
    [nv1 nv2]))

(defn handle-collision [world entity1 entity2]
  (let [pos1 (get-position entity1)
        pos2 (get-position entity2)
        [[xmin1 _] [xmax1 _]] (get-bounding-box entity1)
        [[xmin2 _] [xmax2 _]] (get-bounding-box entity2)
        r1 (Math/abs (- xmax1 (first pos1)))
        r2 (Math/abs (- xmax2 (first pos2)))
        v1 (get-velocity entity1)
        v2 (get-velocity entity2)]
    (assert (circles-collide? pos1 r1 pos2 r2) "Circles do not actually collide.")
    (let [[npos1 npos2] (translate-points-to-desired-offset pos1
                                                            pos2
                                                            v1
                                                            v2
                                                            (+ r1 r2))
          normal-plane (vector/normalize (vector/sub npos1 npos2))
          collision-plane [(* -1 (second normal-plane)) (first normal-plane)]
          nv1 (vector/dot normal-plane v1)
          cv1 (vector/dot collision-plane v1)
          nv2 (vector/dot normal-plane v2)
          cv2 (vector/dot collision-plane v2)
          [nv1sa nv2sa] (find-post-collision-velocities nv1
                                                        nv2
                                                        (get-mass entity1)
                                                        (get-mass entity2))
          new-v1 (vector/add (vector/scale nv1sa normal-plane)
                             (vector/scale cv1 collision-plane))
          new-v2 (vector/add (vector/scale nv2sa normal-plane)
                             (vector/scale cv2 collision-plane))
          entity1 (-> entity1
                      (assoc-component (position npos1))
                      (assoc-component (velocity new-v1)))
          entity2 (-> entity2
                      (assoc-component (position npos2))
                      (assoc-component (velocity new-v2)))]
      [entity1 entity2])))


;; NOTE: This does not handle collisions involving more than 2 objects well.
;; What happens currently is that each pair of colliding entities is handled
;; independently and the updated entites are then merged back into the world.
;; If the same entity was updated twice, one of those updates gets lost.
(defn handle-collisions [world pairs]
  (if (seq pairs)
    (->> pairs
         (map (partial map (partial get-entity world)))
         (mapcat (partial apply (partial handle-collision world)))
         (reduce assoc-entity world))
    world))

(defn update-collisions [world]
  (let [box-collisions (find-bounding-box-collisions world)
        collisions (find-collisions world box-collisions)]
    (handle-collisions world collisions)))

(defn update-physics [world]
  (->> world
       (:entities)
       (fmap update-acceleration)
       (fmap update-velocity)
       (fmap update-position)
       (fmap update-bounding-box)
       (assoc-in world [:entities])))

(defn clear-collisions [world]
  (->> world
       (get-entities)
       (filter #(has-component? % :collidable))
       (map #(assoc-component % (collidable)))
       (reduce assoc-entity world)))

(defn physics-system [world]
  (-> world
      (update-physics)))

(defn collision-detection-system [world]
  (let [pairs (find-bounding-box-collisions world)
        pairs (find-collisions world pairs)]
    (->> world
         get-entities
         (filter #(has-component? % :collidable))
         (map (fn [e]
                (assoc-component e
                                 (collidable (->> pairs
                                                  (filter #(contains? % (get-id e)))
                                                  (reduce set/union #{})
                                                  (filter (partial not= (get-id e))))))))
         (reduce assoc-entity world))))

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
                                 (impulse (Math/abs (* (get-mass ne) ; assume mass didn't change
                                                       (vector/length (vector/sub (get-velocity e)
                                                                                  (get-velocity ne)))))))))
         (reduce assoc-entity world))))

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
