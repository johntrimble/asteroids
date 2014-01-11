// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.main');
goog.require('cljs.core');
goog.require('asteroids.jsutil');
goog.require('asteroids.graphics');
goog.require('goog.Timer');
goog.require('asteroids.physics');
goog.require('asteroids.keyboard');
goog.require('goog.events');
goog.require('asteroids.asteroids');
goog.require('asteroids.health');
goog.require('asteroids.projectile');
goog.require('asteroids.vector');
goog.require('asteroids.asteroids');
goog.require('asteroids.health');
goog.require('asteroids.physics');
goog.require('goog.Timer');
goog.require('asteroids.graphics');
goog.require('asteroids.jsutil');
goog.require('clojure.set');
goog.require('asteroids.math');
goog.require('asteroids.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('asteroids.keyboard');
goog.require('asteroids.vector');
goog.require('clojure.set');
goog.require('asteroids.intents');
goog.require('asteroids.intents');
goog.require('dommy.core');
goog.require('asteroids.projectile');
goog.require('asteroids.levels');
goog.require('goog.events');
goog.require('asteroids.math');
goog.require('asteroids.levels');
goog.require('dommy.core');
goog.require('asteroids.core');
cljs.core._STAR_print_fn_STAR_ = (function (p1__5658_SHARP_){return console.log(p1__5658_SHARP_);
});
asteroids.main.world = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(asteroids.main.world,(function (_){return asteroids.levels.spawn_ship(asteroids.levels.random_asteroid_field.cljs$core$IFn$_invoke$arity$0());
}));
asteroids.main.update_world_interval = 16;
asteroids.main.aspect_fit = (function aspect_fit(aspect_ratio,width,height){var proposed_aspect = (width / height);if((aspect_ratio > proposed_aspect))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,(width / aspect_ratio)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(aspect_ratio * height),height], null);
}
});
asteroids.main.view = (function view(window,aspect_ratio,sel){var renderer = PIXI.autoDetectRenderer(1,1,null,false,true);var stage = (new PIXI.Stage(0));var layers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$56,0,cljs.core.constant$keyword$17,cljs.core.constant$keyword$105,cljs.core.constant$keyword$50,(new PIXI.DisplayObjectContainer())], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$56,1,cljs.core.constant$keyword$17,cljs.core.constant$keyword$106,cljs.core.constant$keyword$50,(new PIXI.DisplayObjectContainer())], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$56,2,cljs.core.constant$keyword$17,cljs.core.constant$keyword$108,cljs.core.constant$keyword$107,true,cljs.core.constant$keyword$50,(new PIXI.DisplayObjectContainer())], null)], null);cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5659_SHARP_){return stage.addChild(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(p1__5659_SHARP_));
}),layers));
dommy.core.replace_contents_BANG_(sel,renderer.view);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,layers,cljs.core.constant$keyword$110,renderer,cljs.core.constant$keyword$111,stage,cljs.core.constant$keyword$112,window,cljs.core.constant$keyword$113,aspect_ratio], null);
});
asteroids.main.is_size_QMARK_ = (function is_size_QMARK_(renderer,width,height){return ((renderer.width === width)) && ((renderer.height === height));
});
asteroids.main.renderer = asteroids.main.view(window,(asteroids.core.get_width(cljs.core.deref(asteroids.main.world)) / asteroids.core.get_height(cljs.core.deref(asteroids.main.world))),document.getElementById("content"));
asteroids.main.update_stage_system_BANG_ = asteroids.graphics.create_update_stage_system();
asteroids.main.find_with_comp = (function find_with_comp(world,component){var entities = asteroids.core.get_entities(world);while(true){
if(cljs.core.seq(entities))
{var entity = cljs.core.first(entities);if(asteroids.core.has_component_QMARK_(entity,component))
{return entity;
} else
{{
var G__5660 = cljs.core.next(entities);
entities = G__5660;
continue;
}
}
} else
{return null;
}
break;
}
});
asteroids.main.render_BANG_ = (function render_BANG_(p__5661,world){var map__5668 = p__5661;var map__5668__$1 = ((cljs.core.seq_QMARK_(map__5668))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5668):map__5668);var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5668__$1,cljs.core.constant$keyword$111);var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5668__$1,cljs.core.constant$keyword$109);var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5668__$1,cljs.core.constant$keyword$113);var window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5668__$1,cljs.core.constant$keyword$112);var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5668__$1,cljs.core.constant$keyword$110);var vec__5669 = asteroids.main.aspect_fit(aspect_ratio,window.innerWidth,window.innerHeight);var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5669,0,null);var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5669,1,null);(asteroids.main.update_stage_system_BANG_.cljs$core$IFn$_invoke$arity$2 ? asteroids.main.update_stage_system_BANG_.cljs$core$IFn$_invoke$arity$2(world,layers) : asteroids.main.update_stage_system_BANG_.call(null,world,layers));
if(asteroids.main.is_size_QMARK_(renderer,width,height))
{} else
{console.log("resizing");
var vec__5670_5674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null);var new_width_5675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5670_5674,0,null);var new_height_5676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5670_5674,1,null);renderer.resize(width,height);
}
var camera_entity_5677 = asteroids.main.find_with_comp(world,cljs.core.constant$keyword$53);var vec__5671_5678 = (function (){var or__3431__auto__ = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(camera_entity_5677,cljs.core.constant$keyword$53));if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asteroids.core.get_width(world),asteroids.core.get_height(world)], null);
}
})();var camera_width_5679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5671_5678,0,null);var camera_height_5680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5671_5678,1,null);var vec__5672_5681 = (function (){var or__3431__auto__ = asteroids.core.get_position(camera_entity_5677);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(camera_width_5679 / 2),(camera_height_5680 / 2)], null);
}
})();var camera_x_5682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5672_5681,0,null);var camera_y_5683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5672_5681,1,null);var rotation_5684 = (function (){var or__3431__auto__ = asteroids.core.get_rotation(camera_entity_5677);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return 0;
}
})();var scale_factor_5685 = (width / camera_width_5679);var layers_5686__$1 = layers;while(true){
if(cljs.core.seq(layers_5686__$1))
{var map__5673_5687 = cljs.core.first(layers_5686__$1);var map__5673_5688__$1 = ((cljs.core.seq_QMARK_(map__5673_5687))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5673_5687):map__5673_5687);var fixed_5689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5673_5688__$1,cljs.core.constant$keyword$107);var display_object_5690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5673_5688__$1,cljs.core.constant$keyword$50);var scale_obj_5691 = display_object_5690.scale;var pos_obj_5692 = display_object_5690.position;var pivot_obj_5693 = display_object_5690.pivot;scale_obj_5691.x = scale_factor_5685;
scale_obj_5691.y = scale_factor_5685;
if(cljs.core.truth_(fixed_5689))
{} else
{pos_obj_5692.x = (scale_factor_5685 * (camera_width_5679 / 2));
pos_obj_5692.y = (scale_factor_5685 * (camera_height_5680 / 2));
pivot_obj_5693.x = camera_x_5682;
pivot_obj_5693.y = camera_y_5683;
display_object_5690.rotation = (- rotation_5684);
}
{
var G__5694 = cljs.core.next(layers_5686__$1);
layers_5686__$1 = G__5694;
continue;
}
} else
{}
break;
}
return renderer.render(stage);
});
asteroids.main.generate_world = (function generate_world(){return asteroids.core.assoc_entity(cljs.core.PersistentArrayMap.EMPTY,asteroids.core.entity.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([asteroids.core.position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20,20], null)),asteroids.core.mass(((asteroids.math.pi * 20) * 20)),asteroids.core.movement(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,5], null),asteroids.math.infinity,0,0,asteroids.math.infinity),asteroids.graphics.display_object((function (){var G__5696 = (new PIXI.Graphics());G__5696.beginFill(16724736);
G__5696.drawCircle(0,0,5);
G__5696.endFill();
return G__5696;
})()),asteroids.core.aabb.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [15,15], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [25,25], null))], 0)));
});
asteroids.main.debug_world = (function debug_world(world){var ec_5698 = cljs.core.count(asteroids.core.get_entities(world));var cc_5699 = cljs.core.count(cljs.core.filter(((function (ec_5698){
return (function (p1__5697_SHARP_){return asteroids.core.has_component_QMARK_(p1__5697_SHARP_,cljs.core.constant$keyword$62);
});})(ec_5698))
,asteroids.core.get_entities(world)));cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entity count: ",ec_5698], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["collidable count: ",cc_5699], 0));
return world;
});
asteroids.main.next_world = (function next_world(world){var world__$1 = asteroids.projectile.cooldown_system(world);var world__$2 = asteroids.keyboard.keyboard_system(world__$1);var world__$3 = asteroids.intents.intent_system(world__$2);var world__$4 = asteroids.intents.rotation_system(world__$3);var world__$5 = asteroids.intents.thrust_system(world__$4);var world__$6 = asteroids.projectile.firing_system(world__$5);var world__$7 = asteroids.physics.physics_system(world__$6);var world__$8 = asteroids.physics.collision_detection_system(world__$7);var world__$9 = asteroids.projectile.projectile_collision_resolution_system(world__$8);var world__$10 = asteroids.physics.collision_physics_system(world__$9);var world__$11 = asteroids.health.impulse_damage_system(world__$10);var world__$12 = asteroids.health.damage_resolution_system(world__$11);var world__$13 = asteroids.asteroids.asteroid_death_system(world__$12);var world__$14 = asteroids.health.health_bar_system(world__$13);var world__$15 = asteroids.core.ttl_system(world__$14);return world__$15;
});
asteroids.main.animationLoop = (function animationLoop(){asteroids.main.render_BANG_(asteroids.main.renderer,cljs.core.deref(asteroids.main.world));
return requestAnimFrame(animationLoop);
});
asteroids.main.update_game_state = (function update_game_state(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(asteroids.main.world,goog.Timer.callOnce(asteroids.main.next_world));
});
var timer_5700 = (new goog.Timer(asteroids.main.update_world_interval));timer_5700.start();
goog.events.listen(timer_5700,goog.Timer.TICK,asteroids.main.update_game_state);
requestAnimFrame(asteroids.main.animationLoop);
