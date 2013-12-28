(ns asteroids.core
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.math :refer [uuid]]))

(defrecord Position [name vector])
(defrecord Acceleration [name vector])
(defrecord Velocity [name vector])
(defrecord MaxVelocity [name magnitude])
(defrecord Rotation [name angle])
(defrecord AngularAcceleration [name angle])
(defrecord AngularVelocity [name angle])
(defrecord MaxAngularVelocity [name magnitude])

(defrecord Movement [name
                     acceleration
                     velocity
                     max-velocity
                     angular-acceleration
                     angular-velocity
                     max-angular-velocity])

;; basic components
(defn position [p]
  (Position. :position p))

(defn acceleration [a]
  (Acceleration. :acceleration a))

(defn velocity [v]
  (Velocity. :velocity v))

(defn max-velocity [magnitude]
  (MaxVelocity. :max-velocity magnitude))

(defn rotation [theta]
  (Rotation. :rotation theta))

(defn angular-acceleration [theta]
  (AngularAcceleration. :angular-acceleration theta))

(defn angular-velocity [theta]
  (AngularVelocity. :angular-velocity theta))

(defn max-angular-velocity [theta]
  (MaxAngularVelocity. :max-angular-velocity theta))

(defn ttl
  ([duration] (ttl duration duration))
  ([duration remaining]
   (array-map :name :ttl, :duration duration, :remaining remaining)))

;; TODO: This is nice when sweeping across the world looking for intersecting
;; AABBs, but wouldn't it make more sense to define this using the body's
;; coordinate space for an anchor and then a length and width?
(defn aabb
  "Defines an AABB in terms of world coordinates using the coordinate with
  minium values for x and y (pmin) and the coordinate with maximum values for
  x and y (pmax)."
  [pmin pmax]
  (array-map :name :aabb, :vector [pmin pmax]))

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

(defn has-component? [entity name]
  (get entity name))

(defn has-components?
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
  (let [c (get-component entity :velocity)]
    (if c
      (.-vector c)
      [0 0])))

(defn get-acceleration [entity]
  (let [c (get-component entity :acceleration)]
    (if c
      (.-vector c)
      [0 0])))

(defn get-position [entity]
  (let [c (get-component entity :position)]
    (when c
      (.-vector c))))

(defn get-angular-velocity [entity]
  (let [c (get-component entity :agnular-velocity)]
    (if c
      (.-angle c)
      0)))

(defn get-angular-acceleration [entity]
  (let [c (get-component entity :angular-acceleration)]
    (when c
      (.-angle c))))

(defn get-rotation [entity]
  (-> entity (get-component :rotation) :angle))

(defn get-aabb [entity]
  (-> entity (get-component :aabb) :vector))

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
