// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.projectile');
goog.require('cljs.core');
goog.require('asteroids.graphics');
goog.require('asteroids.physics');
goog.require('asteroids.health');
goog.require('asteroids.vector');
goog.require('asteroids.health');
goog.require('asteroids.physics');
goog.require('asteroids.graphics');
goog.require('asteroids.math');
goog.require('asteroids.core');
goog.require('asteroids.vector');
goog.require('asteroids.intents');
goog.require('asteroids.intents');
goog.require('asteroids.math');
goog.require('asteroids.core');
asteroids.projectile.projectile_color = 65280;
asteroids.projectile.projectile = (function projectile(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$103], null);
});
asteroids.projectile.weapon = (function() {
var weapon = null;
var weapon__1 = (function (cooldown){return weapon.cljs$core$IFn$_invoke$arity$2(cooldown,0);
});
var weapon__2 = (function (cooldown,cooldown_remaining){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$106,cljs.core.constant$keyword$104,cooldown,cljs.core.constant$keyword$105,cooldown_remaining], null);
});
weapon = function(cooldown,cooldown_remaining){
switch(arguments.length){
case 1:
return weapon__1.call(this,cooldown);
case 2:
return weapon__2.call(this,cooldown,cooldown_remaining);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
weapon.cljs$core$IFn$_invoke$arity$1 = weapon__1;
weapon.cljs$core$IFn$_invoke$arity$2 = weapon__2;
return weapon;
})()
;
asteroids.projectile.create_projectile = (function create_projectile(e){var r = 2;var rotation = asteroids.core.get_rotation(e);var aabb_comp = asteroids.core.get_aabb(e);var xmin = aabb_comp.xmin;var xmax = aabb_comp.xmax;var rotation_vector = asteroids.vector.rotate(rotation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null));var vec__5799 = asteroids.vector.add(asteroids.core.get_position(e),asteroids.vector.scale((xmax - xmin),rotation_vector));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,1,null);var v = asteroids.vector.scale(5,rotation_vector);return asteroids.core.entity.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.core.position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),asteroids.projectile.projectile(),asteroids.physics.collidable.cljs$core$IFn$_invoke$arity$0(),asteroids.core.movement(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),asteroids.vector.add(v,asteroids.core.get_velocity(e)),asteroids.math.infinity,0,0,asteroids.math.infinity),asteroids.core.ttl.cljs$core$IFn$_invoke$arity$1(60),asteroids.core.aabb.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - r),(y - r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + r),(y + r)], null)),asteroids.graphics.display_object((function (){var G__5800 = (new PIXI.Graphics());G__5800.beginFill(asteroids.projectile.projectile_color);
G__5800.drawCircle(0,0,r);
G__5800.endFill();
return G__5800;
})())], 0));
});
asteroids.projectile.firing_system = (function firing_system(world){var entities = asteroids.core.get_entities(world);var output = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world));while(true){
if(cljs.core.seq(entities))
{var entity = cljs.core.first(entities);var weapon_comp = asteroids.core.get_component(entity,cljs.core.constant$keyword$106);if(cljs.core.truth_((function (){var and__3419__auto__ = weapon_comp;if(cljs.core.truth_(and__3419__auto__))
{return ((0 === cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(weapon_comp))) && (asteroids.core.has_component_QMARK_(entity,cljs.core.constant$keyword$82));
} else
{return and__3419__auto__;
}
})()))
{var p = asteroids.projectile.create_projectile(entity);{
var G__5801 = cljs.core.next(entities);
var G__5802 = cljs.core.assoc_BANG_(cljs.core.assoc_BANG_(output,asteroids.core.get_id(p),p),asteroids.core.get_id(entity),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,cljs.core.constant$keyword$82));
entities = G__5801;
output = G__5802;
continue;
}
} else
{{
var G__5803 = cljs.core.next(entities);
var G__5804 = output;
entities = G__5803;
output = G__5804;
continue;
}
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(output));
}
break;
}
});
asteroids.projectile.cooldown_system = (function cooldown_system(world){var world__3315__auto__ = world;var f__3316__auto__ = ((function (world__3315__auto__){
return (function (_,entity){var weapon_component = asteroids.core.get_component(entity,cljs.core.constant$keyword$106);return asteroids.core.assoc_component(entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(weapon_component,cljs.core.constant$keyword$105,cljs.core.mod((cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(weapon_component) - 1),cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(weapon_component))));
});})(world__3315__auto__))
;var entities__3317__auto__ = asteroids.core.get_entities(world__3315__auto__);var output__3318__auto__ = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world__3315__auto__));while(true){
if(cljs.core.seq(entities__3317__auto__))
{var entity__3319__auto__ = cljs.core.first(entities__3317__auto__);if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$2(entity__3319__auto__,cljs.core.constant$keyword$106))
{var result__3320__auto__ = f__3316__auto__(world__3315__auto__,entity__3319__auto__);{
var G__5805 = cljs.core.next(entities__3317__auto__);
var G__5806 = cljs.core.assoc_BANG_(output__3318__auto__,asteroids.core.get_id(result__3320__auto__),result__3320__auto__);
entities__3317__auto__ = G__5805;
output__3318__auto__ = G__5806;
continue;
}
} else
{{
var G__5807 = cljs.core.next(entities__3317__auto__);
var G__5808 = output__3318__auto__;
entities__3317__auto__ = G__5807;
output__3318__auto__ = G__5808;
continue;
}
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world__3315__auto__,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(output__3318__auto__));
}
break;
}
});
asteroids.projectile.add_damage = (function add_damage(e,dmg){var current_dmg = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_component(e,cljs.core.constant$keyword$75),0);var dmg__$1 = (dmg + current_dmg);return asteroids.core.assoc_component(e,asteroids.health.damage(dmg__$1));
});
asteroids.projectile.projectile_collision_resolution_system = (function projectile_collision_resolution_system(world){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (entity_entries,entity){if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.constant$keyword$103,cljs.core.constant$keyword$64))
{var temp__4090__auto__ = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity,cljs.core.constant$keyword$64));if(cljs.core.truth_(temp__4090__auto__))
{var entity_ids = temp__4090__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (entity_entries__$1,hit_id){var temp__4090__auto____$1 = asteroids.core.get_entity(world,hit_id);if(cljs.core.truth_(temp__4090__auto____$1))
{var hit_entity = temp__4090__auto____$1;return cljs.core.assoc_BANG_(entity_entries__$1,hit_id,asteroids.projectile.add_damage(hit_entity,100));
} else
{return entity_entries__$1;
}
}),cljs.core.dissoc_BANG_(entity_entries,asteroids.core.get_id(entity)),entity_ids);
} else
{return entity_entries;
}
} else
{return entity_entries;
}
}),cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world)),asteroids.core.get_entities(world))));
});
