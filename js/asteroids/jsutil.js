// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.jsutil');
goog.require('cljs.core');
/**
* makes a javascript map from a clojure one
*/
asteroids.jsutil.make_js_map = (function make_js_map(cljmap){var out = (function (){var obj5183 = {};return obj5183;
})();return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5179_SHARP_){return (out[cljs.core.name(cljs.core.first(p1__5179_SHARP_))] = cljs.core.second(p1__5179_SHARP_));
}),cljmap));
});
