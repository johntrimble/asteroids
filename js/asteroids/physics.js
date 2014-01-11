// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.physics');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('asteroids.core');
goog.require('asteroids.math');
goog.require('asteroids.math');
goog.require('asteroids.core');
goog.require('asteroids.vector');
goog.require('asteroids.vector');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('clojure.string');
asteroids.physics.impulse = (function impulse(j){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$58,cljs.core.constant$keyword$57,j], null);
});
asteroids.physics.moment_inertia = (function moment_inertia(tensor){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$60,cljs.core.constant$keyword$59,tensor], null);
});
asteroids.physics.get_moment_of_inertia = (function get_moment_of_inertia(entity){return cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_component(entity,cljs.core.constant$keyword$60),asteroids.math.infinity);
});
/**
* Returns the velocity of a given world point on the entity. The value of
* this function is undefined for world points not on the entity.
*/
asteroids.physics.get_vel_point = (function get_vel_point(entity,point){var pos = asteroids.core.get_position(entity);var v = asteroids.core.get_velocity(entity);var w = asteroids.core.get_angular_velocity(entity);return asteroids.vector.add(v,asteroids.vector.scale(w,asteroids.vector.perp(asteroids.vector.sub(point,pos))));
});
asteroids.physics.collidable = (function() {
var collidable = null;
var collidable__0 = (function (){return collidable.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
});
var collidable__1 = (function (entity_ids){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$62,cljs.core.constant$keyword$61,entity_ids], null);
});
collidable = function(entity_ids){
switch(arguments.length){
case 0:
return collidable__0.call(this);
case 1:
return collidable__1.call(this,entity_ids);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
collidable.cljs$core$IFn$_invoke$arity$0 = collidable__0;
collidable.cljs$core$IFn$_invoke$arity$1 = collidable__1;
return collidable;
})()
;
asteroids.physics.midpoint = (function midpoint(p__5701,p__5702){var vec__5705 = p__5701;var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5705,0,null);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5705,1,null);var vec__5706 = p__5702;var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5706,0,null);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5706,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x1 + x2) / 2),((y1 + y2) / 2)], null);
});
asteroids.physics.update_aabb = (function update_aabb(entity){var temp__4090__auto__ = asteroids.core.get_component(entity,cljs.core.constant$keyword$36);if(cljs.core.truth_(temp__4090__auto__))
{var aabb_comp = temp__4090__auto__;var vec__5708 = asteroids.core.get_position(entity);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5708,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5708,1,null);var xmin = aabb_comp.xmin;var ymin = aabb_comp.ymin;var xmax = aabb_comp.xmax;var ymax = aabb_comp.ymax;var deltax = (x - ((xmin + xmax) / 2));var deltay = (y - ((ymin + ymax) / 2));var nxmin = (xmin + deltax);var nxmax = (xmax + deltax);var nymin = (ymin + deltay);var nymax = (ymax + deltay);return asteroids.core.assoc_component(entity,asteroids.core.aabb.cljs$core$IFn$_invoke$arity$4(nxmin,nymin,nxmax,nymax));
} else
{return entity;
}
});
asteroids.physics.boxes_overlap_QMARK_ = (function boxes_overlap_QMARK_(p__5709,p__5710){var vec__5717 = p__5709;var vec__5718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5717,0,null);var xmin1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5718,0,null);var ymin1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5718,1,null);var vec__5719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5717,1,null);var xmax1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5719,0,null);var ymax1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5719,1,null);var vec__5720 = p__5710;var vec__5721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5720,0,null);var xmin2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5721,0,null);var ymin2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5721,1,null);var vec__5722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5720,1,null);var xmax2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5722,0,null);var ymax2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5722,1,null);return ((ymin1 < ymax2)) && ((xmin1 < xmax2)) && ((ymin2 < ymax1)) && ((xmin2 < xmax1));
});
asteroids.physics.all_pairs = (function all_pairs(coll){var coll__$1 = cljs.core.vec(coll);var s = cljs.core.count(coll__$1);var iter__4142__auto__ = (function iter__5729(s__5730){return (new cljs.core.LazySeq(null,(function (){var s__5730__$1 = s__5730;while(true){
var temp__4092__auto__ = cljs.core.seq(s__5730__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var i = cljs.core.first(xs__4579__auto__);var iterys__4138__auto__ = ((function (s__5730__$1,i,xs__4579__auto__,temp__4092__auto__){
return (function iter__5731(s__5732){return (new cljs.core.LazySeq(null,((function (s__5730__$1,i,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__5732__$1 = s__5732;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__5732__$1);if(temp__4092__auto____$1)
{var s__5732__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__5732__$2))
{var c__4140__auto__ = cljs.core.chunk_first(s__5732__$2);var size__4141__auto__ = cljs.core.count(c__4140__auto__);var b__5734 = cljs.core.chunk_buffer(size__4141__auto__);if((function (){var i__5733 = 0;while(true){
if((i__5733 < size__4141__auto__))
{var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4140__auto__,i__5733);cljs.core.chunk_append(b__5734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,j)], null));
{
var G__5735 = (i__5733 + 1);
i__5733 = G__5735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5734),iter__5731(cljs.core.chunk_rest(s__5732__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5734),null);
}
} else
{var j = cljs.core.first(s__5732__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,j)], null),iter__5731(cljs.core.rest(s__5732__$2)));
}
} else
{return null;
}
break;
}
});})(s__5730__$1,i,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__5730__$1,i,xs__4579__auto__,temp__4092__auto__))
;var fs__4139__auto__ = cljs.core.seq(iterys__4138__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)));if(fs__4139__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4139__auto__,iter__5729(cljs.core.rest(s__5730__$1)));
} else
{{
var G__5736 = cljs.core.rest(s__5730__$1);
s__5730__$1 = G__5736;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4142__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(s));
});
asteroids.physics.pair = (function pair(a,b){if((0 < cljs.core.compare(a,b)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
asteroids.physics.delta_xmin = (function delta_xmin(a,b){return (a.xmin - b.xmin);
});
asteroids.physics.delta_xmax = (function delta_xmax(a,b){return (a.xmax - b.xmax);
});
asteroids.physics.find_aabb_collisions_line_sweep_BANG_ = (function find_aabb_collisions_line_sweep_BANG_(aabbs){var aabbs_min = aabbs.sort(asteroids.physics.delta_xmin);var aabbs_max = aabbs.slice(0).sort(asteroids.physics.delta_xmax);var size = cljs.core.count(aabbs_max);var i = 0;var j = 0;var active = cljs.core.PersistentHashSet.EMPTY;var collisions = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if(((i < size)) && ((j < size)))
{var a = (aabbs_min[i]);var b = (aabbs_max[j]);var a_id = (a["id"]);var b_id = (b["id"]);if((a.xmin < b.xmax))
{{
var G__5737 = (i + 1);
var G__5738 = j;
var G__5739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active,a);
var G__5740 = (function (){var collisions__$1 = collisions;var active__$1 = active;while(true){
if(cljs.core.seq(active__$1))
{var aabb_active = cljs.core.first(active__$1);if(cljs.core.truth_(aabb_active))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"aabb-active","aabb-active",381724364,null)], 0)))].join('')));
}
if(((aabb_active.ymin < a.ymax)) && ((a.ymin < aabb_active.ymax)))
{{
var G__5741 = cljs.core.conj_BANG_(collisions__$1,asteroids.physics.pair((aabb_active["id"]),a_id));
var G__5742 = cljs.core.next(active__$1);
collisions__$1 = G__5741;
active__$1 = G__5742;
continue;
}
} else
{{
var G__5743 = collisions__$1;
var G__5744 = cljs.core.next(active__$1);
collisions__$1 = G__5743;
active__$1 = G__5744;
continue;
}
}
} else
{return collisions__$1;
}
break;
}
})();
i = G__5737;
j = G__5738;
active = G__5739;
collisions = G__5740;
continue;
}
} else
{if(cljs.core.constant$keyword$7)
{{
var G__5745 = i;
var G__5746 = (j + 1);
var G__5747 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active,b);
var G__5748 = collisions;
i = G__5745;
j = G__5746;
active = G__5747;
collisions = G__5748;
continue;
}
} else
{return null;
}
}
} else
{return cljs.core.persistent_BANG_(collisions);
}
break;
}
});
asteroids.physics.find_aabb_collisions = (function find_aabb_collisions(world){var aabbs = [];var entities_5749 = asteroids.core.get_entities(world);while(true){
if(cljs.core.seq(entities_5749))
{var entity_5750 = cljs.core.first(entities_5749);if(asteroids.core.has_component_QMARK_(entity_5750,cljs.core.constant$keyword$62))
{var aabb_comp_5751 = asteroids.core.get_component(entity_5750,cljs.core.constant$keyword$36);if((aabb_comp_5751 == null))
{} else
{(aabb_comp_5751["id"] = asteroids.core.get_id(entity_5750));
aabbs.push(aabb_comp_5751);
}
} else
{}
{
var G__5752 = cljs.core.next(entities_5749);
entities_5749 = G__5752;
continue;
}
} else
{}
break;
}
return asteroids.physics.find_aabb_collisions_line_sweep_BANG_(aabbs);
});
asteroids.physics.circles_collide_QMARK_ = (function circles_collide_QMARK_(c1,r1,c2,r2){return ((r1 + r2) > asteroids.vector.length(asteroids.vector.sub(c1,c2)));
});
asteroids.physics.find_collisions = (function find_collisions(world,pairs){var to_circle = (function (entity){var box = asteroids.core.get_aabb(entity);var xmax = box.xmax;var vec__5755 = asteroids.core.get_position(entity);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5755,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5755,1,null);var r = (asteroids.math.abs.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.abs.cljs$core$IFn$_invoke$arity$1((xmax - x)) : asteroids.math.abs.call(null,(xmax - x)));if(!((r < 0)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The circle radius cannot be negative."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"r","r",-1640531413,null),0))], 0)))].join('')));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),r], null);
});return cljs.core.filter((function (p1__5753_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(asteroids.physics.circles_collide_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(to_circle(asteroids.core.get_entity(world,cljs.core.first(p1__5753_SHARP_))),to_circle(asteroids.core.get_entity(world,cljs.core.second(p1__5753_SHARP_)))));
}),pairs);
});
asteroids.physics.fmap = (function fmap(f,m){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4142__auto__ = (function iter__5764(s__5765){return (new cljs.core.LazySeq(null,(function (){var s__5765__$1 = s__5765;while(true){
var temp__4092__auto__ = cljs.core.seq(s__5765__$1);if(temp__4092__auto__)
{var s__5765__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__5765__$2))
{var c__4140__auto__ = cljs.core.chunk_first(s__5765__$2);var size__4141__auto__ = cljs.core.count(c__4140__auto__);var b__5767 = cljs.core.chunk_buffer(size__4141__auto__);if((function (){var i__5766 = 0;while(true){
if((i__5766 < size__4141__auto__))
{var vec__5770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4140__auto__,i__5766);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5770,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5770,1,null);cljs.core.chunk_append(b__5767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));
{
var G__5772 = (i__5766 + 1);
i__5766 = G__5772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__5767),iter__5764(cljs.core.chunk_rest(s__5765__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__5767),null);
}
} else
{var vec__5771 = cljs.core.first(s__5765__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5771,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5771,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),iter__5764(cljs.core.rest(s__5765__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4142__auto__(m);
})());
});
asteroids.physics.calc_collision_manifold = (function calc_collision_manifold(world,entity1,entity2){var pos1 = asteroids.core.get_position(entity1);var pos2 = asteroids.core.get_position(entity2);var xmax1 = asteroids.core.get_aabb(entity1).xmax;var xmax2 = asteroids.core.get_aabb(entity2).xmax;var trans = asteroids.vector.sub(pos2,pos1);var r1 = (asteroids.math.abs.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.abs.cljs$core$IFn$_invoke$arity$1((xmax1 - cljs.core.first(pos1))) : asteroids.math.abs.call(null,(xmax1 - cljs.core.first(pos1))));var r2 = (asteroids.math.abs.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.abs.cljs$core$IFn$_invoke$arity$1((xmax2 - cljs.core.first(pos2))) : asteroids.math.abs.call(null,(xmax2 - cljs.core.first(pos2))));var d = asteroids.vector.length(trans);if(asteroids.vector.zero_vector_QMARK_(trans))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,asteroids.core.get_id(entity1),cljs.core.constant$keyword$64,asteroids.core.get_id(entity2),cljs.core.constant$keyword$65,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,r1,cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),cljs.core.constant$keyword$31,pos1], null)], null)], null);
} else
{if((d > (r1 + r2)))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,asteroids.core.get_id(entity1),cljs.core.constant$keyword$64,asteroids.core.get_id(entity2),cljs.core.constant$keyword$65,cljs.core.PersistentVector.EMPTY], null);
} else
{if(cljs.core.constant$keyword$7)
{var normal = asteroids.vector.normalize(trans);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,asteroids.core.get_id(entity1),cljs.core.constant$keyword$64,asteroids.core.get_id(entity2),cljs.core.constant$keyword$65,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,((r1 + r2) - d),cljs.core.constant$keyword$67,normal,cljs.core.constant$keyword$31,asteroids.vector.add(asteroids.vector.scale(r1,normal),pos1)], null)], null)], null);
} else
{return null;
}
}
}
});
asteroids.physics.correct_positions = (function correct_positions(a,b,normal,penetration){if(cljs.core.truth_((function (){var and__3419__auto__ = penetration;if(cljs.core.truth_(and__3419__auto__))
{return (penetration > 0);
} else
{return and__3419__auto__;
}
})()))
{var massa = asteroids.core.get_mass(a);var massb = asteroids.core.get_mass(b);var posa = asteroids.core.get_position(a);var posb = asteroids.core.get_position(b);var delta = asteroids.vector.scale(penetration,normal);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asteroids.core.assoc_component(a,asteroids.core.position(asteroids.vector.sub(posa,asteroids.vector.scale((1 / massa),delta)))),asteroids.core.assoc_component(b,asteroids.core.position(asteroids.vector.add(posb,asteroids.vector.scale((1 / massb),delta))))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
asteroids.physics.resolve_collision = (function resolve_collision(world,p__5773){var map__5775 = p__5773;var map__5775__$1 = ((cljs.core.seq_QMARK_(map__5775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5775):map__5775);var contacts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5775__$1,cljs.core.constant$keyword$65);var b_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5775__$1,cljs.core.constant$keyword$64);var a_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5775__$1,cljs.core.constant$keyword$63);if(cljs.core.seq(contacts))
{var contact = cljs.core.first(contacts);var collison_point = cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(contact);var a = asteroids.core.get_entity(world,a_id);var b = asteroids.core.get_entity(world,b_id);var normal = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(contact);var va = asteroids.physics.get_vel_point(a,collison_point);var vb = asteroids.physics.get_vel_point(b,collison_point);var relv = asteroids.vector.sub(vb,va);var collision_relv = asteroids.vector.dot(relv,normal);if((collision_relv > 0))
{return cljs.core.PersistentVector.EMPTY;
} else
{var penetration = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(contact);var mov_a = asteroids.core.get_component(a,cljs.core.constant$keyword$30);var mov_b = asteroids.core.get_component(b,cljs.core.constant$keyword$30);var mass_a = asteroids.core.get_mass(a);var mass_b = asteroids.core.get_mass(b);var moment_inertia_a = asteroids.physics.get_moment_of_inertia(a);var moment_inertia_b = asteroids.physics.get_moment_of_inertia(b);var restitution = 1.0;var ra = asteroids.vector.dot(asteroids.vector.perp(asteroids.vector.sub(collison_point,asteroids.core.get_position(a))),normal);var rb = asteroids.vector.dot(asteroids.vector.perp(asteroids.vector.sub(collison_point,asteroids.core.get_position(b))),normal);var impulse = (((-1 * (restitution + 1.0)) * collision_relv) / ((((1 / mass_a) + (1 / mass_b)) + ((ra * ra) / moment_inertia_a)) + ((rb * rb) / moment_inertia_b)));var new_va = asteroids.vector.sub(mov_a.velocity,asteroids.vector.scale((impulse / mass_a),normal));var new_vb = asteroids.vector.add(mov_b.velocity,asteroids.vector.scale((impulse / mass_b),normal));var new_wa = (mov_a.angular_velocity + ((ra * impulse) / moment_inertia_a));var new_wb = (mov_b.angular_velocity - ((rb * impulse) / moment_inertia_b));var pos_correction = asteroids.vector.scale((0.5 * penetration),normal);return asteroids.physics.correct_positions(asteroids.core.assoc_component(a,asteroids.core.movement(mov_a.acceleration,new_va,mov_a.max_velocity,mov_a.angular_acceleration,new_wa,mov_a.max_angular_velocity)),asteroids.core.assoc_component(b,asteroids.core.movement(mov_b.acceleration,new_vb,mov_b.max_velocity,mov_b.angular_acceleration,new_wb,mov_b.max_angular_velocity)),normal,penetration);
}
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
asteroids.physics.resolve_collisions = (function resolve_collisions(world,manifolds){return asteroids.core.assoc_entities(world,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__5776_SHARP_){return asteroids.physics.resolve_collision(world,p1__5776_SHARP_);
}),manifolds));
});
asteroids.physics.handle_collisions = (function handle_collisions(world,pairs){if(cljs.core.seq(pairs))
{return asteroids.physics.resolve_collisions(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,asteroids.physics.calc_collision_manifold,world),cljs.core.filter(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.identity),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_entity,world)),pairs))));
} else
{return world;
}
});
asteroids.physics.update_collisions = (function update_collisions(world){var box_collisions = asteroids.physics.find_aabb_collisions(world);var collisions = asteroids.physics.find_collisions(world,box_collisions);return asteroids.physics.handle_collisions(world,collisions);
});
asteroids.physics.clear_collisions = (function clear_collisions(world){return asteroids.core.assoc_entities(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5778_SHARP_){return asteroids.core.assoc_component(p1__5778_SHARP_,asteroids.physics.collidable.cljs$core$IFn$_invoke$arity$0());
}),cljs.core.filter((function (p1__5777_SHARP_){return asteroids.core.has_component_QMARK_(p1__5777_SHARP_,cljs.core.constant$keyword$62);
}),asteroids.core.get_entities(world))));
});
asteroids.physics.update_physics = (function update_physics(world,e){var mov = asteroids.core.get_component(e,cljs.core.constant$keyword$30);var pos = asteroids.core.get_position(e);var acc = mov.acceleration;var vel = mov.velocity;var max_vel = mov.max_velocity;var max_vel__$1 = (function (){var x__3738__auto__ = (cljs.core.truth_(vel)?asteroids.vector.length(vel):0);var y__3739__auto__ = max_vel;return ((x__3738__auto__ > y__3739__auto__) ? x__3738__auto__ : y__3739__auto__);
})();var ang_acc = mov.angular_acceleration;var ang_vel = mov.angular_velocity;var ang_max_vel = mov.max_angular_velocity;var rot = asteroids.core.get_rotation(e);var new_vel = asteroids.vector.add(vel,acc);var new_vel__$1 = (((asteroids.vector.length(new_vel) > max_vel__$1))?asteroids.vector.scale(max_vel__$1,asteroids.vector.normalize(new_vel)):new_vel);var new_ang_vel = (ang_vel + ang_acc);var ang_speed = (asteroids.math.abs.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.abs.cljs$core$IFn$_invoke$arity$1(new_ang_vel) : asteroids.math.abs.call(null,new_ang_vel));var new_ang_vel__$1 = (((ang_speed > ang_max_vel))?((new_ang_vel / ang_speed) * ang_max_vel):new_ang_vel);var new_pos = asteroids.vector.add(new_vel__$1,pos);var new_pos__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_pos,0),asteroids.core.get_width(world)),cljs.core.mod(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_pos,1),asteroids.core.get_height(world))], null);var new_rot = (new_ang_vel__$1 + rot);return asteroids.physics.update_aabb(asteroids.core.assoc_components(e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asteroids.core.movement(acc,new_vel__$1,mov.max_velocity,ang_acc,new_ang_vel__$1,mov.max_angular_velocity),asteroids.core.position(new_pos__$1),asteroids.core.rotation(new_rot)], null)));
});
asteroids.physics.physics_system = (function physics_system(world){var entities = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world);var output = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world));while(true){
if(cljs.core.seq(entities))
{var entity_entry = cljs.core.first(entities);var entity = cljs.core.second(entity_entry);if(asteroids.core.has_component_QMARK_(entity,cljs.core.constant$keyword$30))
{var entity__$1 = asteroids.physics.update_physics(world,entity);var id = cljs.core.first(entity_entry);{
var G__5779 = cljs.core.next(entities);
var G__5780 = cljs.core.assoc_BANG_(output,id,entity__$1);
entities = G__5779;
output = G__5780;
continue;
}
} else
{{
var G__5781 = cljs.core.next(entities);
var G__5782 = output;
entities = G__5781;
output = G__5782;
continue;
}
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(output));
}
break;
}
});
asteroids.physics.collision_detection_system = (function collision_detection_system(world){var pairs = asteroids.physics.find_aabb_collisions(world);var pairs__$1 = asteroids.physics.find_collisions(world,pairs);var collision_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs,pairs__$1){
return (function (acc,p){var p1 = cljs.core.first(p);var p2 = cljs.core.second(p);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1], null),((function (p1,p2,pairs,pairs__$1){
return (function (p1__5783_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__5783_SHARP_,p2);
});})(p1,p2,pairs,pairs__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2], null),((function (p1,p2,pairs,pairs__$1){
return (function (p1__5784_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__5784_SHARP_,p1);
});})(p1,p2,pairs,pairs__$1))
);
});})(pairs,pairs__$1))
,cljs.core.PersistentArrayMap.EMPTY,pairs__$1);return asteroids.core.assoc_entities(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){return asteroids.core.assoc_component(e,asteroids.physics.collidable.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(collision_map,asteroids.core.get_id(e))));
}),cljs.core.filter((function (p1__5785_SHARP_){return asteroids.core.has_component_QMARK_(p1__5785_SHARP_,cljs.core.constant$keyword$62);
}),asteroids.core.get_entities(world))));
});
asteroids.physics.update_with_impulse = (function update_with_impulse(old_world,world){var has_mass_velocity_QMARK_ = (function (p1__5786_SHARP_){return (asteroids.core.has_component_QMARK_(p1__5786_SHARP_,cljs.core.constant$keyword$37)) && (asteroids.core.has_component_QMARK_(p1__5786_SHARP_,cljs.core.constant$keyword$30));
});return asteroids.core.assoc_entities(world,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5792){var vec__5793 = p__5792;var ne = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5793,0,null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5793,1,null);return asteroids.core.assoc_component(ne,asteroids.physics.impulse((asteroids.math.abs.cljs$core$IFn$_invoke$arity$1 ? asteroids.math.abs.cljs$core$IFn$_invoke$arity$1((asteroids.core.get_mass(ne) * asteroids.vector.length(asteroids.vector.sub(asteroids.core.get_velocity(e),asteroids.core.get_velocity(ne))))) : asteroids.math.abs.call(null,(asteroids.core.get_mass(ne) * asteroids.vector.length(asteroids.vector.sub(asteroids.core.get_velocity(e),asteroids.core.get_velocity(ne))))))));
}),cljs.core.filter((function (p1__5789_SHARP_){return cljs.core.every_QMARK_(has_mass_velocity_QMARK_,p1__5789_SHARP_);
}),cljs.core.filter((function (p1__5788_SHARP_){return cljs.core.second(p1__5788_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5787_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__5787_SHARP_,asteroids.core.get_entity(old_world,asteroids.core.get_id(p1__5787_SHARP_))],null));
}),asteroids.core.get_entities(world))))));
});
asteroids.physics.collision_physics_system = (function collision_physics_system(world){return asteroids.physics.update_with_impulse(world,asteroids.physics.handle_collisions(world,cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (e){var collides_with = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(e,cljs.core.constant$keyword$62));return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5796_SHARP_){return cljs.core.set(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asteroids.core.get_id(e),p1__5796_SHARP_], null));
}),collides_with);
}),cljs.core.filter((function (p1__5795_SHARP_){return cljs.core.seq(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(p1__5795_SHARP_,cljs.core.constant$keyword$62)));
}),cljs.core.filter((function (p1__5794_SHARP_){return asteroids.core.has_component_QMARK_(p1__5794_SHARP_,cljs.core.constant$keyword$62);
}),asteroids.core.get_entities(world)))))));
});
