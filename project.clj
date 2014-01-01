(defproject asteroids "1.0.0-SNAPSHOT"
  :description "Asteroids"
  ;  :jvm-opts ["-Xmx3g"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.2.1"]
                 [org.clojure/data.json "0.2.3"]
                 [org.clojure/clojurescript "0.0-2030"]
                 [prismatic/dommy "0.1.2"]
                 [org.clojars.franks42/cljs-uuid-utils "0.1.3"]
                 [specljs "2.9.1"]]
  :plugins [[lein-cljsbuild "1.0.1"]
            [lein-ring "0.8.3"]
            [specljs "2.9.1"]]
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:crossovers [asteroids.vector]

              :test-commands
              {"performance" ["phantomjs"
                              "phantom/performance.js"
                              "resources/private/js/performance.js"]
               "test" ["phantomjs"
                       "phantom/specljs_runner.js"
                       "resources/public/bower_components/pixi/bin/pixi.js"
                       "resources/private/js/asteroids_spec.js"]}

              :builds
              {:dev
               {:crossover-jar true
                 :source-paths ["src/cljs"]
                 :compiler {:output-to "resources/public/js/asteroids.js"
                            :source-map "resources/public/js/asteroids.js.map"
                            :optimizations :simple
                            :pretty-print true}
                 :jar true}
               :prod
               {:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/asteroids.js"
                           :source-map "resources/public/js/asteroids.js.map"
                           :optimizations :advanced
                           :externs ["resources/public/bower_components/pixi/bin/pixi.js"]}}
               :profile
                {:source-paths ["src/cljs", "test/clj" "test/cljs-performance"]
                 :notify-command ["phantomjs"
                                  "phantom/performance.js"
                                  "resources/private/js/performance.js"]
                 :compiler {:output-to "resources/private/js/performance.js",
                            :source-map "resources/private/js/performance.js.map"
                            :optimizations :simple
                            :pretty-print true}}
               :test
                {:source-paths ["src/cljs" "spec/cljs"]
                 :notify-command ["phantomjs"
                                  "phantom/specljs_runner.js"
                                  "resources/public/bower_components/pixi/bin/pixi.js"
                                  "resources/private/js/asteroids_spec.js"]
                 :compiler {:output-to "resources/private/js/asteroids_spec.js"
                            :source-map "resources/private/js/asteroids_spec.js.map"
                            :optimizations :simple
                            :pretty-print true}}}}
  :ring {:handler asteroids.util.server/app})
