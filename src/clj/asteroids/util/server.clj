(ns asteroids.util.server
  (:import java.net.URLEncoder java.io.File)
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.middleware.params :as params]
            [ring.middleware.file :as file]
            [ring.util.response :as response]
            [ring.util.request :as request]
            [ring.middleware.content-type :as content-types]
            [clojure.data.json :as json]
            [clojure.string :as str])
  (:gen-class))

(defn handler [request]
  (if (= "/" (:uri request))
    (response/redirect "/index.html")))

(def app
  (-> handler
      (file/wrap-file "target")
      (resources/wrap-resource "public")
      (content-types/wrap-content-type)
      (params/wrap-params)))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))
