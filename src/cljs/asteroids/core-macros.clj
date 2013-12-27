(ns asteroids.core)

#_(transform-entities {:components [:damage :health]}
                    world
                    [e]
                    (let [current (get-in e [:health :current])
                          max-health (get-in e [:health :max])
                          damage (get-in e [:damage :damage])
                          current (- current damage)]
                      (core/assoc-component (dissoc entity :damage)
                                            (health max-health current))))

#_(transform-entities {:components [:damage :health]}
                    (fn [_ e] (let [current (get-in e [:health :current])
                                    max-health (get-in e [:health :max])
                                    damage (get-in e [:damage :damage])
                                    current (- current damage)]
                                (core/assoc-component (dissoc entity :damage)
                                                      (health max-health current))))
                    world)

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

#_(defmacro transform-entities [{:keys [components]} world [entity-sym] & body]
    `(let [world# ~world]
       (loop [entities# (asteroids.core/get-entities world)
              output# (transient (:entities world))]
         (if (seq entities#)
           (let [entity# (first entities#)]
             (if (asteroids.core/has-components? entity ~@components)
               (let [~entity-sym entity#
                     result# (do ~@body)
                     output# (assoc! output#
                                     (asteroid.core/get-id result)
                                     result)]
                 (recur (next entities#) output#))
               (recur (next entities#) output#)))
           (assoc world# :entities (persistent! output#))))))

#_(loop [entities (core/get-entities world)
       output (transient (:entities world))]
  (if (seq entities)
    (let [entity (first entities)]
      (if (core/has-components? entity :damage :health)
        (let [e entity
              result (let [current (get-in e [:health :current])
                           max-health (get-in e [:health :max])
                           damage (get-in e [:damage :damage])
                           current (- current damage)]
                       (core/assoc-component (dissoc entity :damage)
                                             (health max-health current)))]
          (recur (next entities) (assoc! output (core/get-id result) e)))
        (recur (next entities) output)))
    (assoc world :entities (persistent! output))))
