// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.math');
goog.require('cljs.core');
goog.require('cljs_uuid_utils');
asteroids.math.pi = Math.PI;
asteroids.math.infinity = Number.MAX_VALUE;
asteroids.math.abs = Math.abs;
asteroids.math.pow = Math.pow;
asteroids.math.sqrt = Math.sqrt;
asteroids.math.cos = Math.cos;
asteroids.math.sin = Math.sin;
asteroids.math.uuid = (function uuid(){return cljs_uuid_utils.uuid_string(cljs_uuid_utils.make_random_uuid());
});
