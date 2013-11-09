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

(defn thrust-intent []
  {:name :thrust-intent})

(defn rotate-right-intent []
  {:name :rotate-right-intent})

(defn rotate-left-intent []
  {:name :rotate-left-intent})

(defn thrust [acc]
  {:name :thrust, :vector acc})

(def key-map (atom {}))

(def key-keyword-map (->> {#{KeyEvent/VK_UP KeyEvent/VK_KP_UP} :up-arrow
                           #{KeyEvent/VK_DOWN KeyEvent/VK_KP_DOWN} :down-arrow
                           #{KeyEvent/VK_RIGHT KeyEvent/VK_KP_RIGHT} :right-arrow
                           #{KeyEvent/VK_LEFT KeyEvent/VK_KP_LEFT} :left-arrow}
                          (map (fn [[k v]] [(if (coll? k) k #{k}) v]))
                          (mapcat (fn [[k v]] (map #(vector % v) k)))
                          (into {})))

(def key->intent {:up-arrow :rotate-right-intent
                  :left-arrow :rotate-left-intent
                  :up-arrow :thrust-intent})

(defn key-keyword [code]
  (key-keyword-map code))

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

(defn update-intents [entity]
  (let [key-map @key-map
        key->intent {:right-arrow [:rotate-right-intent rotate-right-intent]
                     :left-arrow [:rotate-left-intent rotate-left-intent]
                     :up-arrow [:thrust-intent thrust-intent]}
        intents (map (comp first second) key->intent)
        entity (reduce dissoc entity intents)
        active-intents (->> key->intent
                            (filter (fn [[k _]] (get key-map k)))
                            (map (comp second second)))]
      (reduce #(assoc-component %1 (%2))
              entity
              active-intents)))

(defn keyboard-input
  ([] (keyboard-input nil))
  ([keys-pressed] {:name :keyboard-input,
                   :keys-pressed keys-pressed}))

(defn keyboard-input-system [world]
  (let [key-map @key-map
        keys-pressed (map first (filter second key-map))
        input-component (keyboard-input keys-pressed)]
    (->> world
         get-entities
         (filter #(has-component? % :keyboard-input))
         (map #(assoc-component % input-component))
         (reduce assoc-entity world))))

(defn intents [intents]
  {:name :intents, :intents intents})


(defn intent-system [world]
  (let [key->intent {:right-arrow rotate-right-intent
                     :left-arrow rotate-left-intent
                     :up-arrow thrust-intent}]
    (->> world
         get-entities
         (filter #(has-component? % :keyboard-input))
         (map (fn [{:keys [keyboard-input] :as entity}]
                (->> keyboard-input
                     :keys-pressed
                     (map key->intent)
                     (filter identity)
                     (map (fn [c] (c)))
                     (map (partial assoc-component entity)))))
         (filter identity)
         (reduce assoc-entity world))))

(defn input-system [world]
  (let [key-ctrl-entities (->> (get-entities world)
                               (filter #(has-components? % :input))
                               (filter #(= :keyboard (-> %
                                                         (get-component :input)
                                                         :type))))]

    (->> key-ctrl-entities
         (map update-intents)
         (reduce assoc-entity world))))

(defn apply-thrust [entity]
  (let [rotation-vec (-> entity
                         (get-component :rotation)
                         (:vector [1 0]))
        intent-vec (if (get-component entity :thrust-intent)
                     (vector/scale 0.0125
                                   (vector/normalize rotation-vec))
                     [0 0])
        thrust-vec (-> entity
                       (get-component :thrust)
                       (:vector [0 0]))
        acc-vec (-> entity
                    (get-component :acceleration)
                    (:vector [0 0]))
        nacc-vec (-> (vector/add acc-vec
                                 (vector/sub intent-vec
                                             thrust-vec)))]
    (-> entity
        (dissoc :thrust-intent)
        (assoc-component (acceleration nacc-vec))
        (assoc-component (thrust intent-vec)))))

(defn thrust-system [world]
  (->> world
       (get-entities)
       (filter #(or (has-component? % :thrust-intent)
                   (has-component? % :thrust)))
       (map apply-thrust)
       (reduce assoc-entity world)))

(defn update-rotate [entity]
  (let [[rx ry] (-> entity
                    (get-component :rotation)
                    (:vector [1 0]))
        delta (* 0.01 (* 2 Math/PI))
        delta (if (get-component entity :rotate-left-intent)
                (* -1 delta)
                delta)
        rotate [(- (* rx
                       (Math/cos delta))
                    (* ry (Math/sin delta)))
                 (+ (* rx
                       (Math/sin delta))
                    (* ry
                       (Math/cos delta)))]]
    (assert (or (has-component? entity :rotate-left-intent)
                (has-component? entity :rotate-right-intent)))
    (assoc-component entity (rotation rotate))))

(defn rotate-system [world]
  (->> (get-entities world)
       (filter #(or (has-component? % :rotate-left-intent)
                    (has-component? % :rotate-right-intent)))
       (map update-rotate)
       (reduce assoc-entity world)))

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
        rotation (get-in ship [:rotation :vector])
        x (nth pos 0)
        y (nth pos 1)
        trans (java.awt.geom.AffineTransform/getRotateInstance
               (nth rotation 0)
               (nth rotation 1)
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
  (let [[x y] (get-int-position entity)
        radius (int radius)]
    (.setColor g color)
    (.fillOval g (- x radius) (- y radius) (* 2 radius) (* 2 radius))))

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
