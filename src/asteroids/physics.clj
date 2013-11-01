(ns asteroids.physics
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.core :refer :all])
  (:import [javax.swing JFrame JPanel Timer JButton]
           [java.awt Font Color Graphics Graphics2D BorderLayout Dimension Polygon]
           [java.awt.geom AffineTransform]
           [java.awt.color ColorSpace]
           [java.awt.font FontRenderContext]
           [java.awt.event ActionListener]))

(defn update-acceleration [entity]
  entity)

(defn update-velocity [entity]
  (let [acc (or (get-acceleration entity)
                [0 0])
        v (get-velocity entity)]
    (assoc-component entity
                     (velocity (vector/add v acc)))))

(deftest update-velocity-test
  (let [something (entity (velocity [2 1])
                          (acceleration [1 0.5]))]
    (is [3 1.5]
        (get-in (update-velocity something)
                [:velocity :vector]))))

(defn update-position [entity]
  (let [velocity (or (get-velocity entity)
                     [0 0])
        current-pos (get-position entity)
        new-pos (->> current-pos
                     (vector/add velocity)
                     (map int)
                     (map #(mod % 800))
                     (vec))]
    (assoc-component entity (position new-pos))))

(deftest update-position-test
  (let [something (entity (velocity [0.35 1.6])
                          (position [5 5]))]
    (is [6 7]
        (get-in (update-position (update-position something))
                [:position :vector]))))

(defn midpoint [[x1 y1] [x2 y2]]
  [(/ (+ x1 x2) 2) (/ (+ y1 y2) 2)])

(defn update-bounding-box [entity]
  (let [pos (get-position entity)
        [pmin pmax] (-> entity (get-component :bounding-box) :vector)
        mid (midpoint pmin pmax)
        delta (vector/sub pos mid)
        pmin (mapv int (vector/add pmin delta))
        pmax (mapv int (vector/add pmax delta))]
    (assoc-component entity
                     (bounding-box pmin pmax))))


(deftest update-bounding-box-test
  (let [something (entity (position [4 5]) (bounding-box [0 0] [2 2]))]
    (is [[3 4] [5 6]]
        (get-in (update-bounding-box something) [:bounding-box :vector]))))


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

(deftest find-all-bounding-box-collisions
  (let [a [(uuid) (test-entity [4 5] 4)]
        b [(uuid) (test-entity [7 8] 4)]
        c [(uuid) (test-entity [9 9] 2)]
        world {:entities (into {} [a b c])}
        collisions (find-bounding-box-collisions world)]
    (is #{#{(first a) (first b)}}
        collisions)))

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

#_(run-tests)

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

(deftest translate-points-to-desired-offset-test
  (is (== 5.0
          (->> (translate-points-to-desired-offset [3 4]
                                                   [5 6]
                                                   [-1 -1]
                                                   [1 1]
                                                   5)
               (apply vector/sub)
               (vector/length))))
  ;; check that v2 is halved in the off chance that both objects have the same velocity
  (is (== [[497.1963120067104 356.6355744080525] [503.5981560033552 364.3177872040262]]
          (translate-points-to-desired-offset [510 372]
                                    [510 372]
                                    [5 6]
                                    [5 6]
                                    10))))

(defn find-post-collision-velocities [v1 v2 m1 m2]
  (let [nv1 (/ (+ (* v1 (- m1 m2))
                  (* 2 m2 v2))
               (+ m1 m2))
        nv2 (/ (+ (* m1 v1)
                  (* m2 v2)
                  (* -1 m1 nv1))
               m2)]
    [nv1 nv2]))


#_(find-post-collision-velocities 5 -5 10 10)

#_(find-post-collision-velocities 5 -5 10 5)

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
                                                        (* Math/PI (* r1 r1))
                                                        (* Math/PI (* r2 r2)))
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
      (when (and (every? #(Double/isNaN %) new-v1)
                 (every? (comp not #(Double/isNaN %)) v1))
        (println "v:" v1 "->" new-v1)
        (println "pos1:" pos1 "->" npos1)
        (println "pos2:" pos2 "->" npos2)
        (println "r1:" r1)
        (println "r2:" r2)
        (println "v1:" v1)
        (println "v2:" v2)
        (println "nv1:" nv1)
        (println "nv2:" nv2)
        (println "cv1:" cv1)
        (println "collision-plane:" collision-plane)
        (println "normal-plane:" normal-plane))
      (-> world
          (assoc-entity entity1)
          (assoc-entity entity2)))))

(defn handle-collisions [world pairs]
  (if (seq pairs)
    (let [[eid1 eid2] (seq (first pairs))
          world (handle-collision world (get-entity world eid1) (get-entity world eid2))]
      (recur world (rest pairs)))
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
