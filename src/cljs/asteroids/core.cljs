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
#_(defn aabb
  "Defines an AABB in terms of world coordinates using the coordinate with
  minium values for x and y (pmin) and the coordinate with maximum values for
  x and y (pmax)."
  [pmin pmax]
  (array-map :name :aabb, :vector [pmin pmax]))

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
  ([entity name1 name2 & more]
   (and (has-components? entity name1 name2)
        (->> (concat [name] more)
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
  (let [ttl-entities (->> world
                          get-entities
                          (filter #(has-component? % :ttl))
                          (map update-ttl))
        entities-to-remove (->> ttl-entities
                                (filter #(> 0 (-> %
                                                  (get-component :ttl)
                                                  :remaining))))
        world (assoc-entities world ttl-entities)
        world (dissoc-entities world entities-to-remove)]
    world))
