// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.asteroids');
goog.require('cljs.core');
goog.require('asteroids.graphics');
goog.require('asteroids.physics');
goog.require('asteroids.health');
goog.require('asteroids.util');
goog.require('asteroids.health');
goog.require('asteroids.physics');
goog.require('asteroids.graphics');
goog.require('asteroids.math');
goog.require('asteroids.core');
goog.require('asteroids.util');
goog.require('asteroids.math');
goog.require('asteroids.core');
asteroids.asteroids.asteroid_color = 8875054;
asteroids.asteroids.asteroid_explosive_death = (function asteroid_explosive_death(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$74], null);
});
asteroids.asteroids.asteroid_props_default = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$31,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),cljs.core.constant$keyword$24,0,cljs.core.constant$keyword$32,0,cljs.core.constant$keyword$75,15,cljs.core.constant$keyword$76,asteroids.asteroids.asteroid_color], null);
asteroids.asteroids.create_asteroid = (function create_asteroid(props){var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.asteroids.asteroid_props_default,props], 0));var r = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(props__$1);var mass = (asteroids.math.pi * (r * r));var vec__4948 = cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(props__$1);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4948,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4948,1,null);var color = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(props__$1);var h = (0.5 * (asteroids.math.pi * (r * r)));var ast = asteroids.core.entity.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.core.position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),asteroids.core.rotation(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(props__$1)),asteroids.core.movement(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(props__$1),asteroids.math.infinity,0,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(props__$1),asteroids.math.infinity),asteroids.core.mass(mass),asteroids.asteroids.asteroid_explosive_death(),asteroids.physics.moment_inertia(((0.25 * asteroids.math.pi) * (asteroids.math.pow.cljs$core$IFn$_invoke$arity$2 ? asteroids.math.pow.cljs$core$IFn$_invoke$arity$2(r,4) : asteroids.math.pow.call(null,r,4)))),asteroids.core.aabb.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - r),(y - r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + r),(y + r)], null)),asteroids.graphics.display_object((function (){var G__4949 = (new PIXI.Graphics());G__4949.beginFill(color);
G__4949.drawCircle(0,0,r);
G__4949.endFill();
return G__4949;
})())], 0));if((mass < 50))
{return asteroids.core.assoc_component(ast,asteroids.core.ttl.cljs$core$IFn$_invoke$arity$1(100));
} else
{return asteroids.core.assoc_component(asteroids.core.assoc_component(ast,asteroids.physics.collidable.cljs$core$IFn$_invoke$arity$0()),asteroids.health.health.cljs$core$IFn$_invoke$arity$1((0.5 * (asteroids.math.pi * (r * r)))));
}
});
asteroids.asteroids.partition_number = (function() {
var partition_number = null;
var partition_number__2 = (function (n,partition_count){return partition_number.cljs$core$IFn$_invoke$arity$3(n,partition_count,cljs.core.PersistentVector.EMPTY);
});
var partition_number__3 = (function (n,partition_count,acc){while(true){
if((partition_count < 1))
{return acc;
} else
{var p = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n);{
var G__4950 = (n - p);
var G__4951 = (partition_count - 1);
var G__4952 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
n = G__4950;
partition_count = G__4951;
acc = G__4952;
continue;
}
}
break;
}
});
partition_number = function(n,partition_count,acc){
switch(arguments.length){
case 2:
return partition_number__2.call(this,n,partition_count);
case 3:
return partition_number__3.call(this,n,partition_count,acc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_number.cljs$core$IFn$_invoke$arity$2 = partition_number__2;
partition_number.cljs$core$IFn$_invoke$arity$3 = partition_number__3;
return partition_number;
})()
;
asteroids.asteroids.do_explosive_death = (function do_explosive_death(world,entity){var aabb_comp = asteroids.core.get_component(entity,cljs.core.constant$keyword$36);var mass = asteroids.core.get_mass(entity);var lost_mass = (0 * mass);var mass__$1 = (mass - lost_mass);var c = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(2,5));var child_masses = asteroids.asteroids.partition_number.cljs$core$IFn$_invoke$arity$2(mass__$1,c);var vec__4959 = asteroids.core.get_position(entity);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4959,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4959,1,null);var child_positions = (function (){var iter__4142__auto__ = ((function (aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y){
return (function iter__4960(s__4961){return (new cljs.core.LazySeq(null,((function (aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y){
return (function (){var s__4961__$1 = s__4961;while(true){
var temp__4092__auto__ = cljs.core.seq(s__4961__$1);if(temp__4092__auto__)
{var s__4961__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__4961__$2))
{var c__4140__auto__ = cljs.core.chunk_first(s__4961__$2);var size__4141__auto__ = cljs.core.count(c__4140__auto__);var b__4963 = cljs.core.chunk_buffer(size__4141__auto__);if((function (){var i__4962 = 0;while(true){
if((i__4962 < size__4141__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4140__auto__,i__4962);cljs.core.chunk_append(b__4963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(aabb_comp.xmin,aabb_comp.xmax)),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(aabb_comp.ymin,aabb_comp.ymax))], null));
{
var G__4964 = (i__4962 + 1);
i__4962 = G__4964;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__4963),iter__4960(cljs.core.chunk_rest(s__4961__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__4963),null);
}
} else
{var i = cljs.core.first(s__4961__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(aabb_comp.xmin,aabb_comp.xmax)),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(aabb_comp.ymin,aabb_comp.ymax))], null),iter__4960(cljs.core.rest(s__4961__$2)));
}
} else
{return null;
}
break;
}
});})(aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y))
,null,null));
});})(aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y))
;return iter__4142__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
})();var child_velocities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y,child_positions){
return (function (p1__4953_SHARP_){return asteroids.physics.get_vel_point(entity,p1__4953_SHARP_);
});})(aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y,child_positions))
,child_positions);var asteroids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y,child_positions,child_velocities){
return (function (p,v,m){return asteroids.asteroids.create_asteroid(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$76,asteroids.util.rand_varied_color(asteroids.asteroids.asteroid_color,0.1),cljs.core.constant$keyword$21,v,cljs.core.constant$keyword$24,asteroids.core.get_angular_velocity(entity),cljs.core.constant$keyword$75,(asteroids.math.sqrt.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.sqrt.cljs$core$IFn$_invoke$arity$1((m / asteroids.math.pi)) : asteroids.math.sqrt.call(null,(m / asteroids.math.pi))),cljs.core.constant$keyword$31,p], null));
});})(aabb_comp,mass,lost_mass,mass__$1,c,child_masses,vec__4959,x,y,child_positions,child_velocities))
,child_positions,child_velocities,child_masses);var world__$1 = asteroids.core.dissoc_entity(world,entity);return asteroids.core.assoc_entities(world__$1,asteroids__$1);
});
asteroids.asteroids.asteroid_death_system = (function asteroid_death_system(world){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(asteroids.asteroids.do_explosive_death,world,cljs.core.filter((function (p1__4966_SHARP_){return (1 > cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(p1__4966_SHARP_,cljs.core.constant$keyword$70)));
}),cljs.core.filter((function (p1__4965_SHARP_){return asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$3(p1__4965_SHARP_,cljs.core.constant$keyword$74,cljs.core.constant$keyword$70);
}),asteroids.core.get_entities(world))));
});
