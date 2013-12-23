(ns asteroids.math)

(def pi Math/PI)

(def infinity Integer/MAX_VALUE)

(defn abs [n] (Math/abs n))

(defn pow [n p] (Math/pow n p))

(defn sqrt [n] (Math/sqrt n))

(defn cos [theta] (Math/cos theta))

(defn sin [theta] (Math/sin theta))

(defn uuid [] (str (java.util.UUID/randomUUID)))
