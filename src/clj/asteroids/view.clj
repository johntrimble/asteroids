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
           [java.awt.event ActionListener WindowListener KeyEvent KeyListener]))

(def font (Font. Font/MONOSPACED Font/BOLD 14))

(defn get-int-position [entity]
  (mapv #(Math/round (float %)) (get-position entity)))

(def key-map (atom {}))

(def key-keyword-map (->> {#{KeyEvent/VK_UP KeyEvent/VK_KP_UP} :up-arrow
                           #{KeyEvent/VK_DOWN KeyEvent/VK_KP_DOWN} :down-arrow
                           #{KeyEvent/VK_RIGHT KeyEvent/VK_KP_RIGHT} :right-arrow
                           #{KeyEvent/VK_LEFT KeyEvent/VK_KP_LEFT} :left-arrow
                           #{KeyEvent/VK_SPACE} :space}
                          (map (fn [[k v]] [(if (coll? k) k #{k}) v]))
                          (mapcat (fn [[k v]] (map #(vector % v) k)))
                          (into {})))

(defn key-keyword [code]
  (key-keyword-map code))

(defn keyboard-input
  ([] (keyboard-input nil))
  ([keys-pressed] {:name :keyboard-input,
                   :keys-pressed keys-pressed}))

(def key-listener
  (proxy [KeyListener] []
    (keyPressed [e]
                (swap! key-map
                       conj
                       {(key-keyword (.getKeyCode e)) :on}))

    (keyReleased [e]
                 (swap! key-map
                        conj
                        {(key-keyword (.getKeyCode e)) nil}))
    (keyTyped [e] nil)))

(defn keyboard-input-system [world]
  (let [key-map @key-map
        keys-pressed (map first (filter second key-map))
        input-component (keyboard-input keys-pressed)]
    (->> world
         get-entities
         (filter #(has-component? % :keyboard-input))
         (map #(assoc-component % input-component))
         (reduce assoc-entity world))))

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
  (let [pos (get-int-position ship)
        rotation (get-in ship [:rotation :angle])
        x (nth pos 0)
        y (nth pos 1)
        trans (java.awt.geom.AffineTransform/getRotateInstance
               rotation
               x
               y)
        points (map (partial transform trans)
                    [[(+ x 10) y]
                     [(- x 6) (- y 6)]
                     [(- x 6) (+ y 6)]])
        ship-poly (doto (Polygon.))]
    (dorun (map #(.addPoint ship-poly (% 0) (% 1)) points))
    (.setColor g Color/BLUE)
    (.fillPolygon g ship-poly)))

(defn render-circle [^Color color radius ^Graphics g entity]
  (let [pos (get-int-position entity)
        x (nth pos 0)
        y (nth pos 1)
        radius (int radius)
        rotation (get-in entity [:rotation :angle] 0)
        trans (java.awt.geom.AffineTransform/getRotateInstance
               rotation
               x
               y)
        point (transform trans [x (+ y radius)])]
    (.setColor g color)
    (.fillOval g (- x radius) (- y radius) (* 2 radius) (* 2 radius))
    (.setColor g (.darker color))
    (.drawLine g x y (nth point 0) (nth point 1))))

(defn render-entity [^Graphics g entity]
  (let [render (-> entity (get-component :renderable) :fn)]
    (render g entity)))

(defn draw-world [^Graphics g world]
  (.setFont g font)
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
                (.setPreferredSize (Dimension. 800 800))
                (.setBackground Color/BLACK))
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
                (.addKeyListener key-listener)
                (.addWindowListener window-listener))]
        (.start update-timer)))
