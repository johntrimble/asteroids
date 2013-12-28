(ns asteroids.core)

(defmacro transform-entities [{:keys [components]} f world]
    `(let [world# ~world
           f# ~f]
       (loop [entities# (asteroids.core/get-entities world#)
              output# (transient (:entities world#))]
         (if (seq entities#)
           (let [entity# (first entities#)]
             (if (asteroids.core/has-components? entity# ~@components)
               (let [result# (f# world# entity#)]
                 (recur (next entities#)
                        (assoc! output#
                                (asteroids.core/get-id result#)
                                result#)))
               (recur (next entities#) output#)))
           (assoc world# :entities (persistent! output#))))))
