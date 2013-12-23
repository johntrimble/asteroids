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

(def target-path (.getCanonicalPath (File. "target")))

(defn handler [request]
  (if (= "/" (:uri request))
    (response/redirect "/index.html")
    (if (.startsWith (:uri request) "/_sources")
      (response/header (response/file-response (get-in request
                                                       [:query-params "file"]))
                       "Content-Type" "text/plain"))))

(defn wrap-rewrite-source-maps [handler]
  (fn [request]
    (let [{:keys [body status] :as resp} (handler request)]
      (if (and (.endsWith (:uri request) ".js.map")
               body
               (< 199 status 300))
        (response/header (response/response
                           (json/write-str (update-in (json/read-str (request/body-string resp))
                                                      ["sources"]
                                                      (fn [sources]
                                                        (map #(str/replace-first % target-path "")
                                                             sources)))))
                         "Content-Type" "application/json")
        resp))))

(def app
  (-> handler
      (file/wrap-file "target")
      (resources/wrap-resource "public")
      (wrap-rewrite-source-maps)
      (content-types/wrap-content-type)
      (params/wrap-params)))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))
