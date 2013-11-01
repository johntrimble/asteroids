(ns asteroids.view
  (:require [clojure.string :refer [split-lines lower-case join]]
            [clojure.walk :refer [macroexpand-all]]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [asteroids.vector :as vector]
            [asteroids.core :refer :all])
  (:import [javax.swing JFrame JPanel Timer JButton]
           [java.awt Font Color Graphics Graphics2D BorderLayout Dimension Polygon]
           [java.awt.geom AffineTransform]
           [java.awt.color ColorSpace]
           [java.awt.font FontRenderContext]
           [java.awt.event ActionListener WindowListener]))


(defn transform [tran point]
  (let [dest (double-array 2)]
    (.transform tran
                (double-array point)
                0
                dest
                0
                1)
    (vec dest)))


(defn render-ship [^Graphics g ship]
  (let [pos (get-in ship [:position :vector])
        rotation (get-in ship [:rotation :vector])
        x (nth pos 0)
        y (nth pos 1)
        trans (java.awt.geom.AffineTransform/getRotateInstance
               (nth rotation 0)
               (nth rotation 1)
               x
               y)
        points (map (partial transform trans)
                    [[x (+ y 10)]
                     [(- x 6) (- y 6)]
                     [(+ x 6) (- y 6)]])
        ship-poly (doto (Polygon.))]
    (dorun (map #(.addPoint ship-poly (% 0) (% 1)) points))
    (.setColor g Color/BLUE)
    (.fillPolygon g ship-poly)))


(defn render-circle [^Color color radius ^Graphics g entity]
  (let [[x y] (get-in entity [:position :vector])
        radius (int radius)]
    (.setColor g color)
    (.fillOval g (- x radius) (- y radius) (* 2 radius) (* 2 radius))))

(defn render-entity [^Graphics g entity]
  (let [render (-> entity (get-component :renderable) :fn)]
    (render g entity)))

(defn draw-world [^Graphics g world]
  (dorun (->> world
              (:entities)
              (vals)
              (filter #(contains? % :renderable))
              (map (partial render-entity g)))))

(defn swing-view [world-ref]
  (System/setProperty "sun.java2d.opengl" "True")
  (let [panel (proxy [JPanel] []
                (paintComponent [^Graphics2D g]
                                (doto g
                                  (.setRenderingHint java.awt.RenderingHints/KEY_ANTIALIASING
                                                     java.awt.RenderingHints/VALUE_ANTIALIAS_ON)
                                  (.setRenderingHint java.awt.RenderingHints/KEY_RENDERING
                                                     java.awt.RenderingHints/VALUE_RENDER_QUALITY))
                                (proxy-super paintComponent g)
                                (draw-world g (deref world-ref))
                                (.dispose g)))
        panel (doto panel
                (.setPreferredSize (Dimension. 800 800)))
        update-handler (proxy [ActionListener] []
                         (actionPerformed [e] (.repaint panel)))
        update-timer (Timer. 16 update-handler)
        window-listener (doto (proxy [WindowListener] []
                                (windowActivated [e] nil)
                                (windowClosed [e]
                                              (.stop update-timer)
                                              (.dispose (.getWindow e)))
                                (windowClosing [e] nil)
                                (windowDeactivated [e] nil)
                                (windowDeiconified [e]
                                                   (.start update-timer))
                                (windowIconified [e]
                                                 (.stop update-timer))
                                (windowOpened [e] nil)))
        frame (doto (JFrame.)
                (.setTitle "Space Thingies")
                (.add panel BorderLayout/CENTER)
                (.pack)
                (.setVisible true)
                (.addWindowListener window-listener))]
        (.start update-timer)))
