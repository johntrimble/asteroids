(ns asteroids.game
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.core :refer :all]
            [asteroids.view :refer [swing-view render-circle]]
            [asteroids.physics :refer [update-physics update-collisions]])
  (:import [javax.swing JFrame JPanel JButton]
           [java.awt Font Color Graphics Graphics2D BorderLayout Dimension Polygon]
           [java.awt.geom AffineTransform]
           [java.awt.color ColorSpace]
           [java.awt.font FontRenderContext]
           [java.awt.event ActionListener]
           [java.util Timer TimerTask]))

(defn generate-asteroid []
  (let [x (rand-nth (range 800))
        y (rand-nth (range 800))
        r (rand-nth (range 5 50))
        xmin (int (- x r))
        xmax (int (+ x r))
        ymin (int (- y r))
        ymax (int (+ y r))
        vx (rand-nth (range -10 10))
        vy (rand-nth (range -10 10))]
    (entity (position [x y])
            (velocity [vx vy])
            (bounding-box [xmin ymin] [xmax ymax])
            (renderable (partial render-circle Color/BLACK r)))))

(defn generate-world []
  (->> (range 2)
       (map (fn [_] (generate-asteroid)))
       (reduce assoc-entity {})))

(def world (atom {}))

(swap! world (fn [_] (generate-world)))

#_(-> @world :entities keys sort)

(swing-view world)

(defn next-world [world]
  (-> world
      update-physics
      update-collisions))

(def update-world-task (proxy [TimerTask] []
                         (run [] (swap! world next-world))))

(def timer (Timer.))

(doto timer
  (.schedule update-world-task 0 16))
