(ns asteroids.graphics
  (:require [clojure.set :as set]
            [asteroids.core :refer [get-position
                                    get-component
                                    has-component?
                                    get-entities
                                    get-id
                                    get-component
                                    get-entity
                                    get-rotation]]))

(defn display-object [disp]
  {:name :display-object, :obj disp})

(defn layer [layer]
  {:name :layer, :layer layer})

(defn get-layer [e]
  (-> e
      (get-component :layer)
      (:layer 1)))

(defn update-display-object! [world entity]
  (let [[x y] (get-position entity)
        rotation (or (get-rotation entity) 0)
        disp (:obj (get-component entity :display-object))
        disp-pos (.-position disp)]
    (set! (.-x disp-pos) x)
    (set! (.-y disp-pos) y)
    (set! (.-rotation disp) rotation)
    world))

(defn create-update-stage-system
  "Creates an update-stage-system!. This system only needs to be executed to
  update the view."
  []
  (let [prev-state (atom {:world {}
                          :prev-ids #{}})]
    (fn [world layers]
      (let [layer-map (into {} (map (juxt :level :display-object)
                                    layers))
            old-state @prev-state
            prev-world (:world old-state)
            prev-ids (:prev-ids old-state)

            entities (->> world
                          get-entities
                          (filter #(has-component? % :display-object)))
            ids (into #{} (map get-id entities))]

        ;; Remove defunct display objects
        (dorun (->> (set/difference prev-ids ids)
                    (map #(get-entity prev-world %))
                    (map (fn [e]
                           (let [n (get-layer e)
                                 l (get layer-map n)
                                 disp (:obj (get-component e :display-object))]
                             (.removeChild l disp))))))

        ;; Add new display objects
        ;; TODO: What if someone swaps out the display object of an entity? With the current
        ;; logic, the old one won't get removed and the new one won't get put in.
        (dorun (->> (set/difference ids prev-ids)
                    (map (partial get-entity world))
                    (map (fn [e]
                           (let [n (get-layer e)
                                 l (get layer-map n)
                                 disp (:obj (get-component e :display-object))]
                             (.addChild l disp))))))

        ;; Update display objects
        (let [world (reduce update-display-object! world entities)]
          ;; update prev-state
          (reset! prev-state {:world world, :prev-ids ids})
          world)))))
