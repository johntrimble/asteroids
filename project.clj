(defproject asteroids "1.0.0-SNAPSHOT"
  :description "Asteroids"
  ;  :jvm-opts ["-Xmx3g"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.1.8"]
                 [org.clojure/clojurescript "0.0-2030"]
                 [prismatic/dommy "0.1.2"]]
  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-ring "0.8.3"]]
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:crossovers [asteroids.vector
                           asteroids.core]
              :builds
              [{:id "main"
                :crossover-jar true
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/asteroids.js"
                           :source-map "resources/public/js/asteroids.js.map"
                           :optimizations :none
                           :pretty-print true}
                :jar true}]}
  :ring {:handler asteroids.util.server/app})
