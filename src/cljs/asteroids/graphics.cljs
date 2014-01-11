(ns asteroids.graphics
  (:require [clojure.set :as set]
            [goog.object]
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

(defn camera [fov]
  {:name :camera, :fov fov})

(defn create-update-stage-system
  "Creates an update-stage-system!. This system only needs to be executed to
  update the view."
  []
  (let [prev-state (atom {:world nil
                          :prev-ids nil})]
    (fn [world layers]
      (let [layer-map (into {} (map (juxt :level :display-object)
                                    layers))
            old-state @prev-state
            prev-world (:world old-state)
            prev-ids (:prev-ids old-state)
            ids (js-obj)]

        ;; Populate set of active entities and add update display objects
        (loop [entities (get-entities world)]
          (when (seq entities)
            (let [e (first entities)
                  disp (:obj (get-component e :display-object))]
              (when-not (nil? disp)
                (aset ids (get-id e) true)
                (when (nil? (.-parent disp))
                  (let [n (get-layer e)
                        l (get layer-map n)]
                    (.addChild l disp)))
                (let [[x y] (get-position e)
                      rotation (or (get-rotation e) 0)
                      disp-pos (.-position disp)]
                  (set! (.-x disp-pos) x)
                  (set! (.-y disp-pos) y)
                  (set! (.-rotation disp) rotation))))
            (recur (next entities))))

        ;; Remove defunct display objects
        (if-not (nil? prev-ids)
          (goog.object/forEach prev-ids
                               (fn [v k _]
                                 (if (and (not (true? (aget ids k)))
                                          (true? v))
                                   (let [e (get-entity prev-world k)
                                         disp (:obj (get-component e :display-object))
                                         n (get-layer e)
                                         l (get layer-map n)]
                                     (.removeChild l disp))))))

        (reset! prev-state {:world world, :prev-ids ids})
        world))))
