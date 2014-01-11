// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.vector');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('asteroids.math');
goog.require('asteroids.math');
goog.require('clojure.string');
asteroids.vector.add = (function add(a,b){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,0) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,0)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,1) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,1))], null);
});
asteroids.vector.sub = (function sub(a,b){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,0) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,0)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,1) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,1))], null);
});
asteroids.vector.length = (function length(v){return (asteroids.math.sqrt.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.sqrt.cljs$core$IFn$_invoke$arity$1(((asteroids.math.pow.cljs$core$IFn$_invoke$arity$2 ? asteroids.math.pow.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0),2) : asteroids.math.pow.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0),2)) + (asteroids.math.pow.cljs$core$IFn$_invoke$arity$2 ? asteroids.math.pow.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1),2) : asteroids.math.pow.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1),2)))) : asteroids.math.sqrt.call(null,((asteroids.math.pow.cljs$core$IFn$_invoke$arity$2 ? asteroids.math.pow.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0),2) : asteroids.math.pow.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0),2)) + (asteroids.math.pow.cljs$core$IFn$_invoke$arity$2 ? asteroids.math.pow.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1),2) : asteroids.math.pow.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1),2)))));
});
asteroids.vector.scale = (function scale(s,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0)),(s * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1))], null);
});
asteroids.vector.dot = (function dot(a,b){return ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,0) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,0)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,1) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,1)));
});
asteroids.vector.rotate = (function rotate(theta,v){var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * (asteroids.math.cos.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.cos.cljs$core$IFn$_invoke$arity$1(theta) : asteroids.math.cos.call(null,theta))) - (y * (asteroids.math.sin.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.sin.cljs$core$IFn$_invoke$arity$1(theta) : asteroids.math.sin.call(null,theta)))),((x * (asteroids.math.sin.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.sin.cljs$core$IFn$_invoke$arity$1(theta) : asteroids.math.sin.call(null,theta))) + (y * (asteroids.math.cos.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.cos.cljs$core$IFn$_invoke$arity$1(theta) : asteroids.math.cos.call(null,theta))))], null);
});
/**
* Returns a vector with the same length as v but rotated counterclockwise
* by 90 degrees.
*/
asteroids.vector.perp = (function perp(v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0)], null);
});
asteroids.vector.normalize = (function normalize(v){var l = asteroids.vector.length(v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,0) / l),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,1) / l)], null);
});
asteroids.vector.project = (function project(a,b){var ub = asteroids.vector.normalize(b);return asteroids.vector.scale(asteroids.vector.dot(a,ub),ub);
});
asteroids.vector.vec_EQ__EQ_ = (function vec_EQ__EQ_(a,b){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__6841_SHARP_,p2__6842_SHARP_){var and__3419__auto__ = p1__6841_SHARP_;if(cljs.core.truth_(and__3419__auto__))
{return p2__6842_SHARP_;
} else
{return and__3419__auto__;
}
}),true,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,a,b));
});
asteroids.vector.zero_vector_QMARK_ = (function zero_vector_QMARK_(a){return ((0 === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,0))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,0) === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,1)));
});
