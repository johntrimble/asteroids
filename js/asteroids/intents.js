// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.intents');
goog.require('cljs.core');
goog.require('asteroids.math');
goog.require('asteroids.math');
goog.require('asteroids.vector');
goog.require('asteroids.vector');
goog.require('asteroids.core');
goog.require('asteroids.core');
asteroids.intents.thrust_intent = (function thrust_intent(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$79], null);
});
asteroids.intents.rotate_right_intent = (function rotate_right_intent(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$80], null);
});
asteroids.intents.rotate_left_intent = (function rotate_left_intent(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$81], null);
});
asteroids.intents.fire_intent = (function fire_intent(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$82], null);
});
asteroids.intents.thrust = (function thrust(acc){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$83,cljs.core.constant$keyword$18,acc], null);
});
asteroids.intents.key__GT_intent = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$84,asteroids.intents.rotate_right_intent,cljs.core.constant$keyword$85,asteroids.intents.rotate_left_intent,cljs.core.constant$keyword$86,asteroids.intents.thrust_intent,cljs.core.constant$keyword$87,asteroids.intents.fire_intent], null);
asteroids.intents.intent_system = (function intent_system(world){var world__3315__auto__ = world;var f__3316__auto__ = ((function (world__3315__auto__){
return (function (world__$1,entity){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (world__3315__auto__){
return (function (p1__5163_SHARP_,p2__5162_SHARP_){if(cljs.core.truth_(p2__5162_SHARP_))
{return asteroids.core.assoc_component(p1__5163_SHARP_,p2__5162_SHARP_);
} else
{return p1__5163_SHARP_;
}
});})(world__3315__auto__))
,entity,(function (){var iter__4142__auto__ = ((function (world__3315__auto__){
return (function iter__5168(s__5169){return (new cljs.core.LazySeq(null,((function (world__3315__auto__){
return (function (){var s__5169__$1 = s__5169;while(true){
var temp__4092__auto__ = cljs.core.seq(s__5169__$1);if(temp__4092__auto__)
{var s__5169__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__5169__$2))
{var c__4140__auto__ = cljs.core.chunk_first(s__5169__$2);var size__4141__auto__ = cljs.core.count(c__4140__auto__);var b__5171 = cljs.core.chunk_buffer(size__4141__auto__);if((function (){var i__5170 = 0;while(true){
if((i__5170 < size__4141__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4140__auto__,i__5170);cljs.core.chunk_append(b__5171,(function (){var intent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(asteroids.intents.key__GT_intent,k);if(cljs.core.truth_(intent))
{return (intent.cljs$core$IFn$_invoke$arity$0 ? intent.cljs$core$IFn$_invoke$arity$0() : intent.call(null));
} else
{return null;
}
})());
{
var G__5172 = (i__5170 + 1);
i__5170 = G__5172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5171),iter__5168(cljs.core.chunk_rest(s__5169__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5171),null);
}
} else
{var k = cljs.core.first(s__5169__$2);return cljs.core.cons((function (){var intent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(asteroids.intents.key__GT_intent,k);if(cljs.core.truth_(intent))
{return (intent.cljs$core$IFn$_invoke$arity$0 ? intent.cljs$core$IFn$_invoke$arity$0() : intent.call(null));
} else
{return null;
}
})(),iter__5168(cljs.core.rest(s__5169__$2)));
}
} else
{return null;
}
break;
}
});})(world__3315__auto__))
,null,null));
});})(world__3315__auto__))
;return iter__4142__auto__(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(world__$1));
})());
});})(world__3315__auto__))
;var entities__3317__auto__ = asteroids.core.get_entities(world__3315__auto__);var output__3318__auto__ = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world__3315__auto__));while(true){
if(cljs.core.seq(entities__3317__auto__))
{var entity__3319__auto__ = cljs.core.first(entities__3317__auto__);if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$2(entity__3319__auto__,cljs.core.constant$keyword$40))
{var result__3320__auto__ = f__3316__auto__(world__3315__auto__,entity__3319__auto__);{
var G__5173 = cljs.core.next(entities__3317__auto__);
var G__5174 = cljs.core.assoc_BANG_(output__3318__auto__,asteroids.core.get_id(result__3320__auto__),result__3320__auto__);
entities__3317__auto__ = G__5173;
output__3318__auto__ = G__5174;
continue;
}
} else
{{
var G__5175 = cljs.core.next(entities__3317__auto__);
var G__5176 = output__3318__auto__;
entities__3317__auto__ = G__5175;
output__3318__auto__ = G__5176;
continue;
}
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world__3315__auto__,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(output__3318__auto__));
}
break;
}
});
asteroids.intents.apply_thrust = (function apply_thrust(e){var mov = asteroids.core.get_component(e,cljs.core.constant$keyword$30);var rotation = (function (){var or__3431__auto__ = asteroids.core.get_rotation(e);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return 0;
}
})();var direction = asteroids.vector.rotate(rotation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null));var intent_vec = ((asteroids.core.has_component_QMARK_(e,cljs.core.constant$keyword$79))?asteroids.vector.scale(0.1,direction):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));var thrust_vec = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_component(e,cljs.core.constant$keyword$83),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));var acc = mov.acceleration;var nacc = asteroids.vector.add(acc,asteroids.vector.sub(intent_vec,thrust_vec));return asteroids.core.assoc_component(asteroids.core.assoc_component(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(e,cljs.core.constant$keyword$79),asteroids.core.movement(nacc,mov.velocity,mov.max_velocity,mov.angular_acceleration,mov.angular_velocity,mov.max_angular_velocity)),asteroids.intents.thrust(intent_vec));
});
/**
* This system takes takes thrust-intent components and updates the associated
* entities' acceleration accordingly.
*/
asteroids.intents.thrust_system = (function thrust_system(world){return asteroids.core.assoc_entities(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2(asteroids.intents.apply_thrust,cljs.core.filter((function (p1__5177_SHARP_){return (asteroids.core.has_component_QMARK_(p1__5177_SHARP_,cljs.core.constant$keyword$79)) || (asteroids.core.has_component_QMARK_(p1__5177_SHARP_,cljs.core.constant$keyword$83));
}),asteroids.core.get_entities(world))));
});
asteroids.intents.update_rotation = (function update_rotation(entity){var angle = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_component(entity,cljs.core.constant$keyword$32),0);var delta = (0.01 * (2 * asteroids.math.pi));var delta__$1 = (cljs.core.truth_(asteroids.core.get_component(entity,cljs.core.constant$keyword$81))?(-1 * delta):delta);var rotate = (angle + delta__$1);return asteroids.core.assoc_component(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,cljs.core.constant$keyword$81),cljs.core.constant$keyword$80),asteroids.core.rotation(rotate));
});
/**
* This system takes the rotate-left-intent and rotate-right-intent components
* and updates the associated entities' rotation accordingly.
*/
asteroids.intents.rotation_system = (function rotation_system(world){return asteroids.core.assoc_entities(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2(asteroids.intents.update_rotation,cljs.core.filter((function (p1__5178_SHARP_){return (asteroids.core.has_component_QMARK_(p1__5178_SHARP_,cljs.core.constant$keyword$81)) || (asteroids.core.has_component_QMARK_(p1__5178_SHARP_,cljs.core.constant$keyword$80));
}),asteroids.core.get_entities(world))));
});
