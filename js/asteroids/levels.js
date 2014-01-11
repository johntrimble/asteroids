// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.levels');
goog.require('cljs.core');
goog.require('asteroids.graphics');
goog.require('asteroids.physics');
goog.require('asteroids.asteroids');
goog.require('asteroids.health');
goog.require('asteroids.projectile');
goog.require('asteroids.util');
goog.require('asteroids.asteroids');
goog.require('asteroids.health');
goog.require('asteroids.physics');
goog.require('asteroids.graphics');
goog.require('asteroids.math');
goog.require('asteroids.core');
goog.require('asteroids.projectile');
goog.require('asteroids.util');
goog.require('asteroids.math');
goog.require('asteroids.core');
asteroids.levels.ship_color = 255;
asteroids.levels.create_rand_asteroid = (function create_rand_asteroid(width,height){var x = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));var y = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));var r = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(10,25));var vx = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(-5,5));var vy = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(-5,5));var av = (0.01 * (cljs.core.rand.cljs$core$IFn$_invoke$arity$1((4 * asteroids.math.pi)) - (2 * asteroids.math.pi)));var ap = (0.01 * (cljs.core.rand.cljs$core$IFn$_invoke$arity$1((4 * asteroids.math.pi)) - (2 * asteroids.math.pi)));return asteroids.asteroids.create_asteroid(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$76,asteroids.util.rand_varied_color(asteroids.asteroids.asteroid_color,0.1),cljs.core.constant$keyword$31,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null),cljs.core.constant$keyword$24,av,cljs.core.constant$keyword$32,ap,cljs.core.constant$keyword$75,r], null));
});
asteroids.levels.random_asteroid_field = (function() {
var random_asteroid_field = null;
var random_asteroid_field__0 = (function (){return random_asteroid_field.cljs$core$IFn$_invoke$arity$1(15);
});
var random_asteroid_field__1 = (function (n){var world = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$46,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,800,cljs.core.constant$keyword$48,500], null)], null);return asteroids.core.assoc_entity(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(asteroids.core.assoc_entity,world,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){return asteroids.levels.create_rand_asteroid(asteroids.core.get_width(world),asteroids.core.get_height(world));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))),asteroids.core.entity.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.core.position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,250], null)),asteroids.graphics.camera(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [800,500], null)),asteroids.core.rotation(0)], 0)));
});
random_asteroid_field = function(n){
switch(arguments.length){
case 0:
return random_asteroid_field__0.call(this);
case 1:
return random_asteroid_field__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_asteroid_field.cljs$core$IFn$_invoke$arity$0 = random_asteroid_field__0;
random_asteroid_field.cljs$core$IFn$_invoke$arity$1 = random_asteroid_field__1;
return random_asteroid_field;
})()
;
asteroids.levels.empty_world = (function empty_world(){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,cljs.core.PersistentArrayMap.EMPTY], null);
});
asteroids.levels.spawn_ship = (function spawn_ship(world){var x = (asteroids.core.get_width(world) / 2);var y = (asteroids.core.get_height(world) / 2);var ship = asteroids.core.entity.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.core.position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),asteroids.core.movement(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),10,0,0,asteroids.math.infinity),asteroids.core.rotation(0),asteroids.physics.collidable.cljs$core$IFn$_invoke$arity$0(),asteroids.health.health.cljs$core$IFn$_invoke$arity$1(10000),asteroids.core.player(),asteroids.core.aabb.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(asteroids.core.get_width(world) - 10),(asteroids.core.get_height(world) - 10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(asteroids.core.get_width(world) + 10),(asteroids.core.get_height(world) + 10)], null)),asteroids.core.mass((asteroids.math.pi * (10 * 10))),asteroids.projectile.weapon.cljs$core$IFn$_invoke$arity$1(10),asteroids.physics.moment_inertia(((0.25 * asteroids.math.pi) * (asteroids.math.pow.cljs$core$IFn$_invoke$arity$2 ? asteroids.math.pow.cljs$core$IFn$_invoke$arity$2(10,4) : asteroids.math.pow.call(null,10,4)))),asteroids.graphics.display_object((function (){var G__5657 = (new PIXI.Graphics());G__5657.beginFill(asteroids.levels.ship_color);
G__5657.moveTo(10,0);
G__5657.lineTo(-6,-6);
G__5657.lineTo(-6,6);
G__5657.endFill();
return G__5657;
})())], 0));var player_health_bar = asteroids.core.entity.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.core.position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(asteroids.core.get_height(world) - 30)], null)),asteroids.graphics.display_object((new PIXI.Graphics())),asteroids.graphics.layer(2),asteroids.health.health_bar(asteroids.core.get_id(ship),(asteroids.core.get_width(world) - 20),20)], 0));return asteroids.core.assoc_entity(asteroids.core.assoc_entity(world,ship),player_health_bar);
});
