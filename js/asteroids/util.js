// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.util');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('goog.color');
asteroids.util.rand_varied_color = (function rand_varied_color(color,factor){var r = ((color & 16711680) >> 16);var g = ((color & 65280) >> 8);var b = (color & 255);var hsl_arr = goog.color.rgbToHsl(r,g,b);var h = (hsl_arr[0]);var s = (hsl_arr[1]);var l = (hsl_arr[2]);var vh = (cljs.core.rand_int((factor * 360)) - ((0.5 * factor) * 360));var vs = (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(factor) - (0.5 * factor));var vl = (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(factor) - (0.5 * factor));var nh = (h + vh);var ns = (function (){var x__3745__auto__ = 1;var y__3746__auto__ = (function (){var x__3738__auto__ = 0;var y__3739__auto__ = (s + vs);return ((x__3738__auto__ > y__3739__auto__) ? x__3738__auto__ : y__3739__auto__);
})();return ((x__3745__auto__ < y__3746__auto__) ? x__3745__auto__ : y__3746__auto__);
})();var nl = (function (){var x__3745__auto__ = 1;var y__3746__auto__ = (function (){var x__3738__auto__ = 0;var y__3739__auto__ = (l + vl);return ((x__3738__auto__ > y__3739__auto__) ? x__3738__auto__ : y__3739__auto__);
})();return ((x__3745__auto__ < y__3746__auto__) ? x__3745__auto__ : y__3746__auto__);
})();var nh__$1 = cljs.core.mod(nh,360);var ns__$1 = cljs.core.mod(ns,1);var nl__$1 = cljs.core.mod(nl,1);var rgb_arr = goog.color.hslToRgb(nh__$1,ns__$1,nl__$1);var r__$1 = (rgb_arr[0]);var g__$1 = (rgb_arr[1]);var b__$1 = (rgb_arr[2]);var rgb = (((r__$1 << 16) + (g__$1 << 8)) + b__$1);return rgb;
});
