(defproject asteroids "0.1.0-SNAPSHOT"
  :description "Asteroids"
  ;  :jvm-opts ["-Xmx3g"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.2.1"]
                 [org.clojure/data.json "0.2.3"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [prismatic/dommy "0.1.2"]
                 [org.clojars.franks42/cljs-uuid-utils "0.1.3"]
                 [specljs "2.9.1"]]
  :plugins [[lein-cljsbuild "1.0.1"]
            [lein-ring "0.8.3"]
            [specljs "2.9.1"]]
  :source-paths ["src/clj"]
  :resource-paths ["resources"
                   "target/dev/resources"
                   "target/prod/resources"]
  :test-paths ["test/clj"]
  #_:hooks #_[leiningen.cljsbuild]
  :cljsbuild {:crossovers [asteroids.vector]

              :test-commands
              {"performance" ["phantomjs"
                              "phantom/performance.js"
                              "target/profile/js/performance.js"]
               "test" ["phantomjs"
                       "phantom/specljs_runner.js"
                       "resources/public/bower_components/pixi/bin/pixi.js"
                       "target/test/js/asteroids_spec.js"]}

              :builds
              {:dev
               {:crossover-jar true
                :source-paths ["src/cljs"]
                :compiler {:output-to "target/dev/resources/public/js/asteroids.js"
                           :source-map "target/dev/resources/public/js/asteroids.js.map"
                           :output-dir "target/dev/resources/public/js"
                           :optimizations :simple
                           :pretty-print true}
                :jar true}

               :prod
               {:source-paths ["src/cljs"]
                :compiler {:output-to "target/prod/resources/public/js/asteroids.js"
                           :source-map "target/prod/resources/public/js/asteroids.js.map"
                           :output-dir "target/prod/resources/public/js"
                           :optimizations :advanced
                           :externs ["resources/public/bower_components/pixi/bin/pixi.js"]}}

               :profile
               {:source-paths ["src/cljs", "test/clj" "test/cljs-performance"]
                 :notify-command ["phantomjs"
                                  "phantom/performance.js"
                                  "target/profile/js/performance.js"]
                 :compiler {:output-to "target/profile/js/performance.js"
                            :source-map "target/profile/js/performance.js.map"
                            :output-dir "target/profile/js"
                            :optimizations :simple
                            :pretty-print true}}
               :test
               {:source-paths ["src/cljs" "spec/cljs"]
                :notify-command ["phantomjs"
                                 "phantom/specljs_runner.js"
                                 "resources/public/bower_components/pixi/bin/pixi.js"
                                 "target/test/js/asteroids_spec.js"]
                :compiler {:output-to "target/test/js/asteroids_spec.js"
                           :source-map "target/test/js/asteroids_spec.js.map"
                           :output-dir "target/test/js"
                           :optimizations :simple
                           :pretty-print true}}}}
  :ring {:handler asteroids.util.server/app})
