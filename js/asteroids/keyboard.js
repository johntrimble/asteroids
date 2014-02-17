// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.keyboard');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.set');
goog.require('clojure.set');
asteroids.keyboard.key_map = new cljs.core.PersistentArrayMap(null, 5, [38,cljs.core.constant$keyword$86,40,cljs.core.constant$keyword$100,37,cljs.core.constant$keyword$85,39,cljs.core.constant$keyword$84,32,cljs.core.constant$keyword$87], null);
asteroids.keyboard.captured_keys = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(asteroids.keyboard.key_map));
asteroids.keyboard.key_events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
asteroids.keyboard.pressed_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
asteroids.keyboard.key_code = (function key_code(e){return e.keyCode;
});
asteroids.keyboard.prevent_default = (function prevent_default(e){if(cljs.core.truth_(e.preventDefault))
{return e.preventDefault();
} else
{return e.returnValue = false;
}
});
asteroids.keyboard.key_handler = (function key_handler(event_type,e){var c = asteroids.keyboard.key_code(e);if(cljs.core.contains_QMARK_(asteroids.keyboard.captured_keys,c))
{asteroids.keyboard.prevent_default(e);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(asteroids.keyboard.key_events,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,(asteroids.keyboard.key_map.cljs$core$IFn$_invoke$arity$1 ? asteroids.keyboard.key_map.cljs$core$IFn$_invoke$arity$1(c) : asteroids.keyboard.key_map.call(null,c))], null));
return false;
} else
{return null;
}
});
asteroids.keyboard.update_pressed_keys_BANG_ = (function update_pressed_keys_BANG_(active_keys,key_events){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active_keys,(function (pressed){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (active,p__5644){var vec__5645 = p__5644;var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5645,0,null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5645,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.constant$keyword$101))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active,k);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.constant$keyword$102))
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active,k);
} else
{if(cljs.core.constant$keyword$7)
{return active;
} else
{return null;
}
}
}
}),pressed,key_events);
}));
});
asteroids.keyboard.keyboard_system = (function keyboard_system(world){var active = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(asteroids.keyboard.pressed_keys),cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5648){var vec__5649 = p__5648;var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5649,0,null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5649,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$101,t))
{return k;
} else
{return null;
}
}),cljs.core.deref(asteroids.keyboard.key_events)))));asteroids.keyboard.update_pressed_keys_BANG_(asteroids.keyboard.pressed_keys,cljs.core.deref(asteroids.keyboard.key_events));
cljs.core.reset_BANG_(asteroids.keyboard.key_events,cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$88,active);
});
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([cljs.core.constant$keyword$102,(function (p1__5650_SHARP_){return asteroids.keyboard.key_handler(cljs.core.constant$keyword$102,p1__5650_SHARP_);
})], 0));
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([cljs.core.constant$keyword$101,(function (p1__5651_SHARP_){return asteroids.keyboard.key_handler(cljs.core.constant$keyword$101,p1__5651_SHARP_);
})], 0));
