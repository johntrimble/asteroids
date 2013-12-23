(ns asteroids.performance.macros)

(defmacro measurements [& body]
  `(binding [asteroids.performance/*measurements* (atom {})]
     ~@body))

(defmacro sample [k & body]
  `(let [start# (.now js/Date)
         result# (do ~@body)
         end# (.now js/Date)]
     (swap! asteroids.performance/*measurements*
            #(update-in % [~k] conj (- end# start#)))
     result#))

(defmacro samples [t k & body]
  `(let [start# (.now js/Date)
         _# (dotimes [_# ~t] ~@body)
         end# (.now js/Date)]
     (swap! asteroids.performance/*measurements*
            #(update-in % [~k] conj (/ (- end# start#) ~t)))))
