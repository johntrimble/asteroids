(ns asteroids.math
  (:require [cljs-uuid-utils]))

(def pi js/Math.PI)

(def infinity js/Number.MAX_VALUE)

(def abs js/Math.abs)

(def pow js/Math.pow)

(def sqrt js/Math.sqrt)

(def cos js/Math.cos)

(def sin js/Math.sin)

(defn uuid []
  (cljs-uuid-utils/uuid-string (cljs-uuid-utils/make-random-uuid)))
