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

(defn bounding-box [pmin pmax]
  {:name :bounding-box, :vector [pmin pmax]})

(defn acceleration [a]
  {:name :acceleration, :vector a})

(defn renderable [f]
  {:name :renderable, :fn f})

(defn identifier
  ([] (identifier (uuid)))
  ([id] {:name :identifier, :id id}))

;; utility functions for components

(defn has-component? [entity name]
  (get entity name))

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


;; convenience functions for getting basic component properties from entities

(defn get-id [entity]
  (-> entity (get-component :identifier) :id))

(defn get-velocity [entity]
  (-> entity (get-component :velocity) :vector))

(defn get-acceleration [entity]
  (-> entity (get-component :acceleration) :vector))

(defn get-position [entity]
  (-> entity (get-component :position) :vector))

(defn get-bounding-box [entity]
  (-> entity (get-component :bounding-box) :vector))
