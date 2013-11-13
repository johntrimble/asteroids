(ns asteroids.core
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]))

(defn uuid [] (str (java.util.UUID/randomUUID)))

;; basic components
(defn position [p]
  {:name :position, :vector p})

(defn velocity [v]
  {:name :velocity, :vector v})

(defn max-velocity [magnitude]
  {:name :max-velocity, :magnitude magnitude})

(defn rotation [r]
  {:name :rotation, :vector r})

;; TODO: This is nice when sweeping across the world looking for intersecting
;; AABBs, but wouldn't it make more sense to define this using the body's
;; coordinate space for an anchor and then a length and width?
(defn aabb
  "Defines an AABB in terms of world coordinates using the coordinate with
  minium values for x and y (pmin) and the coordinate with maximum values for
  x and y (pmax)."
  [pmin pmax]
  {:name :aabb, :vector [pmin pmax]})

(defn acceleration [a]
  {:name :acceleration, :vector a})

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

(defn has-components? [entity name & more]
  (->> (concat [name] more)
       (map has-component? (repeat entity))
       (reduce #(and %1 %2))))

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
  (-> entity (get-component :velocity) :vector))

(defn get-acceleration [entity]
  (-> entity (get-component :acceleration) :vector))

(defn get-position [entity]
  (-> entity (get-component :position) :vector))

(defn get-aabb [entity]
  (-> entity (get-component :aabb) :vector))

(defn get-mass [entity]
  (-> entity (get-component :mass) :mass))


(defn dissoc-entity [world entity]
  (assoc world :entities (dissoc (:entities world)
                                 (get-id entity))))
