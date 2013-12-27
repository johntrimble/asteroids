(ns asteroids.core
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.math :refer [uuid]]))

;; basic components
(defn position [p]
  {:name :position, :vector p})

(defn acceleration [a]
  {:name :acceleration, :vector a})

(defn velocity [v]
  {:name :velocity, :vector v})

(defn max-velocity [magnitude]
  {:name :max-velocity, :magnitude magnitude})

(defn rotation [theta]
  {:name :rotation, :angle theta})

(defn angular-acceleration [theta]
  {:name :angular-acceleration, :angle theta})

(defn angular-velocity [theta]
  {:name :angular-velocity, :angle theta})

(defn max-angular-velocity [theta]
  {:name :max-angular-acceleration, :magnitude theta})

(defn ttl
  ([duration] (ttl duration duration))
  ([duration remaining]
   {:name :ttl, :duration duration, :remaining remaining}))

;; TODO: This is nice when sweeping across the world looking for intersecting
;; AABBs, but wouldn't it make more sense to define this using the body's
;; coordinate space for an anchor and then a length and width?
(defn aabb
  "Defines an AABB in terms of world coordinates using the coordinate with
  minium values for x and y (pmin) and the coordinate with maximum values for
  x and y (pmax)."
  [pmin pmax]
  {:name :aabb, :vector [pmin pmax]})

(defn mass [m]
  {:name :mass, :mass m})

(defn renderable [f]
  {:name :renderable, :fn f})

(defn player []
  {:name :player})

(defn input [t]
  {:name :input, :type t})

(defn identifier
  ([] (identifier (uuid)))
  ([id] {:name :identifier, :id id}))

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


;; entity functions

(defn entity [& comps]
  (let [entity (->> comps
                    (map (juxt :name identity))
                    (into {}))]
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
  (-> entity (get-component :velocity) (:vector [0 0])))

(defn get-acceleration [entity]
  (-> entity (get-component :acceleration) :vector))

(defn get-position [entity]
  (-> entity (get-component :position) :vector))

(defn get-angular-velocity [entity]
  (-> entity (get-component :angular-velocity) (:angle 0)))

(defn get-angular-acceleration [entity]
  (-> entity (get-component :angular-acceleration) :angle))

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
