(ns asteroids.keyboard
  (:require [clojure.set :as set]
            [dommy.utils :as utils]
            [dommy.core :as dommy])
  (:require-macros [dommy.macros :refer [sel1]]))


(def key-map {38 :up
              40 :down
              37 :left
              39 :right
              32 :space})

(def captured-keys (into #{} (keys key-map)))

(def key-events (atom []))

(def pressed-keys (atom #{}))

(defn key-code [e] (.-keyCode e))

(defn key-handler [event-type e]
  (let [c (key-code e)]
    (when (contains? captured-keys c)
      (.preventDefault e)
      (swap! key-events conj [event-type (key-map c)]))))

(defn update-pressed-keys! [active-keys key-events]
  (swap! pressed-keys
         (fn [pressed]
           (reduce (fn [active [t k]]
                     (if (= t :keydown)
                       (conj pressed k)
                       (disj pressed k)))
                   pressed
                   key-events))))

(defn keyboard-system [world]
  ;; active keys = previously active + keys pressed
  ;; TODO: should we count keys active previously but released this iteration?
  (let [active (set/union @pressed-keys
                          (->> @key-events
                               (map (fn [[t k]]
                                      (when (= :keydown t)
                                        k)))
                               (filter identity)
                               (into #{})))]
    (update-pressed-keys! pressed-keys @key-events)
    (reset! key-events [])
    (assoc world :active-keys active)))

(dommy/listen! js/document
               :keydown
               #(key-handler :keydown %))

(dommy/listen! js/document
               :keyup
               #(key-handler :keyup %))
