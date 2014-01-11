(ns asteroids.core
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.math :refer [uuid]]))

(defrecord Position [name vector])
(defrecord Rotation [name angle])

;; Velocity and acceleration properties are grouped together in a single
;; component for performance reasons.
(defrecord Movement [name
                     acceleration
                     velocity
                     max-velocity
                     angular-acceleration
                     angular-velocity
                     max-angular-velocity])

(defrecord AABB [name xmin ymin xmax ymax])

;; basic components
(defn movement [acc vel max-vel ang-acc ang-vel max-ang-vel]
  (Movement. :movement acc vel max-vel ang-acc ang-vel max-ang-vel))

(defn position [p]
  (Position. :position p))

(defn rotation [theta]
  (Rotation. :rotation theta))

(defn ttl
  ([duration] (ttl duration duration))
  ([duration remaining]
   (array-map :name :ttl, :duration duration, :remaining remaining)))

;; TODO: This is nice when sweeping across the world looking for intersecting
;; AABBs, but wouldn't it make more sense to define this using the body's
;; coordinate space for an anchor and then a length and width?
(defn aabb
  ([xmin ymin xmax ymax]
   (AABB. :aabb xmin ymin xmax ymax))
  ([[xmin ymin] [xmax ymax]]
   (aabb xmin ymin xmax ymax)))

(defn mass [m]
  (array-map :name :mass, :mass m))

(defn renderable [f]
  (array-map :name :renderable, :fn f))

(defn player []
  (array-map :name :player))

(defn input [t]
  (array-map :name :input, :type t))

(defn identifier
  ([] (identifier (uuid)))
  ([id] (array-map :name :identifier, :id id)))

;; utility functions for components

(defn ^boolean has-component? [entity name]
  (contains? entity name))

(defn ^boolean  has-components?
  ([entity name]
   (has-component? entity name))
  ([entity name1 name2]
   (and (has-component? entity name1)
        (has-component? entity name2)))
  ([entity name1 name2 name3]
   (and (has-component? entity name1)
        (has-component? entity name2)
        (has-component? entity name3)))
  ([entity name1 name2 name3 & more]
   (and (has-components? entity name1 name2 name3)
        (->> more
             (map has-component? (repeat entity))
             (reduce #(and %1 %2))))))

(defn get-component [entity comp]
  (get entity comp))

(defn assoc-component [entity comp]
  (assoc entity (:name comp) comp))

(defn assoc-components [entity components]
  (persistent! (reduce #(assoc! %1 (:name %2) %2)
                       (transient entity)
                       components)))

;; entity functions

(defn entity [& comps]
  (let [entity (persistent! (reduce #(assoc! %1 (:name %2) %2)
                                    (transient cljs.core.PersistentArrayMap/EMPTY)
                                    comps))]
    (if (contains? entity :identifier)
      entity
      (assoc-component entity (identifier)))))

(defn get-entity [world id]
  (get-in world [:entities id]))

(defn assoc-entity [world entity]
  (let [id (-> entity (get-component :identifier) :id)]
    (assoc-in world [:entities id] entity)))

(defn get-entities [world]
  (vals (:entities world)))


;; convenience functions for getting basic component properties from entities

(defn get-width [world]
  (get-in world [:geometry :width] 800))

(defn get-height [world]
  (get-in world [:geometry :height] 500))

(defn get-id [entity]
  (-> entity (get-component :identifier) :id))

(defn get-velocity [entity]
  (let [c (get-component entity :movement)]
    (.-velocity c)))

(defn get-acceleration [entity]
  (let [c (get-component entity :movement)]
    (.-vector c)))

(defn get-position [entity]
  (let [c (get-component entity :position)]
    (when c
      (.-vector c))))

(defn get-angular-velocity [entity]
  (let [c (get-component entity :movement)]
    (.-angular_velocity c)))

(defn get-angular-acceleration [entity]
  (let [c (get-component entity :movement)]
    (.-angular_acceleration c)))

(defn get-rotation [entity]
  (-> entity (get-component :rotation) :angle))

(defn get-aabb [entity]
  (get-component entity :aabb))

(defn get-mass [entity]
  (-> entity (get-component :mass) :mass))

(defn assoc-entities [world entities]
  (let [entity-map (transient (or (:entities world) {}))]
    (->> entities
         (reduce #(assoc! %1 (get-id %2) %2) entity-map)
         (persistent!)
         (assoc world :entities))))

(defn dissoc-entity [world entity]
  (assoc world :entities (dissoc (:entities world)
                                 (get-id entity))))

(defn dissoc-entities [world entities]
  (let [entity-map (transient (or (:entities world) {}))]
    (->> entities
         (reduce #(dissoc! %1 (get-id %2)) entity-map)
         (persistent!)
         (assoc world :entities))))

;; time-to-live system
(defn update-ttl [entity]
  (let [component (get-component entity :ttl)
        duration (:duration component)
        remaining (- (:remaining component) 1)]
    (assoc-component entity
                     (ttl duration remaining))))

(defn ttl-system [world]
  (assoc world
    :entities
    (loop [entities (get-entities world)
           entries (transient (:entities world))]
      (if (seq entities)
        (let [entity (first entities)
              ttl (get-component entity :ttl)]
          (if-not (nil? ttl)
            (if (< (:remaining ttl) 2)
              ;; Time to remove the entity.
              (recur (next entities)
                     (dissoc! entries (get-id entity)))
              ;; Entity will remain, but decrement ttl.
              (recur (next entities)
                     (assoc! entries (get-id entity) (update-ttl entity))))
            (recur (next entities) entries)))
        (persistent! entries)))))
