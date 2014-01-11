// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.health');
goog.require('cljs.core');
goog.require('asteroids.physics');
goog.require('asteroids.physics');
goog.require('asteroids.core');
goog.require('asteroids.core');
asteroids.health.health_bar_color = 5592405;
asteroids.health.health_color = 65280;
asteroids.health.damage_color = 16711680;
asteroids.health.health = (function() {
var health = null;
var health__1 = (function (health__$1){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$70,cljs.core.constant$keyword$68,health__$1,cljs.core.constant$keyword$69,health__$1], null);
});
var health__2 = (function (health__$1,remaining){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$70,cljs.core.constant$keyword$68,health__$1,cljs.core.constant$keyword$69,remaining], null);
});
health = function(health__$1,remaining){
switch(arguments.length){
case 1:
return health__1.call(this,health__$1);
case 2:
return health__2.call(this,health__$1,remaining);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
health.cljs$core$IFn$_invoke$arity$1 = health__1;
health.cljs$core$IFn$_invoke$arity$2 = health__2;
return health;
})()
;
asteroids.health.health_bar = (function health_bar(entity_id,width,height){return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$72,cljs.core.constant$keyword$71,entity_id,cljs.core.constant$keyword$47,width,cljs.core.constant$keyword$48,height], null);
});
asteroids.health.damage = (function damage(damage__$1){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$73,cljs.core.constant$keyword$73,damage__$1], null);
});
asteroids.health.get_damage = (function get_damage(entity){return cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1((health.get_component.cljs$core$IFn$_invoke$arity$2 ? health.get_component.cljs$core$IFn$_invoke$arity$2(entity,cljs.core.constant$keyword$73) : health.get_component.call(null,entity,cljs.core.constant$keyword$73)));
});
asteroids.health.impulse_damage_system = (function impulse_damage_system(world){var world__3315__auto__ = world;var f__3316__auto__ = ((function (world__3315__auto__){
return (function (world__$1,entity){var impulse = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity,cljs.core.constant$keyword$58));var current_damage = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_component(entity,cljs.core.constant$keyword$73),0);var impulse_damage = (impulse - 300);if((impulse_damage > 0))
{return asteroids.core.assoc_component(entity,asteroids.health.damage((current_damage + impulse_damage)));
} else
{return entity;
}
});})(world__3315__auto__))
;var entities__3317__auto__ = asteroids.core.get_entities(world__3315__auto__);var output__3318__auto__ = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world__3315__auto__));while(true){
if(cljs.core.seq(entities__3317__auto__))
{var entity__3319__auto__ = cljs.core.first(entities__3317__auto__);if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$4(entity__3319__auto__,cljs.core.constant$keyword$70,cljs.core.constant$keyword$58,cljs.core.constant$keyword$40))
{var result__3320__auto__ = f__3316__auto__(world__3315__auto__,entity__3319__auto__);{
var G__5069 = cljs.core.next(entities__3317__auto__);
var G__5070 = cljs.core.assoc_BANG_(output__3318__auto__,asteroids.core.get_id(result__3320__auto__),result__3320__auto__);
entities__3317__auto__ = G__5069;
output__3318__auto__ = G__5070;
continue;
}
} else
{{
var G__5071 = cljs.core.next(entities__3317__auto__);
var G__5072 = output__3318__auto__;
entities__3317__auto__ = G__5071;
output__3318__auto__ = G__5072;
continue;
}
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world__3315__auto__,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(output__3318__auto__));
}
break;
}
});
asteroids.health.damage_resolution_system = (function damage_resolution_system(world){var world__3315__auto__ = world;var f__3316__auto__ = ((function (world__3315__auto__){
return (function (_,entity){var current = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$69], null));var max_health = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$68], null));var damage = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73,cljs.core.constant$keyword$73], null));var current__$1 = (current - damage);return asteroids.core.assoc_component(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,cljs.core.constant$keyword$73),asteroids.health.health.cljs$core$IFn$_invoke$arity$2(max_health,current__$1));
});})(world__3315__auto__))
;var entities__3317__auto__ = asteroids.core.get_entities(world__3315__auto__);var output__3318__auto__ = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world__3315__auto__));while(true){
if(cljs.core.seq(entities__3317__auto__))
{var entity__3319__auto__ = cljs.core.first(entities__3317__auto__);if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$3(entity__3319__auto__,cljs.core.constant$keyword$73,cljs.core.constant$keyword$70))
{var result__3320__auto__ = f__3316__auto__(world__3315__auto__,entity__3319__auto__);{
var G__5073 = cljs.core.next(entities__3317__auto__);
var G__5074 = cljs.core.assoc_BANG_(output__3318__auto__,asteroids.core.get_id(result__3320__auto__),result__3320__auto__);
entities__3317__auto__ = G__5073;
output__3318__auto__ = G__5074;
continue;
}
} else
{{
var G__5075 = cljs.core.next(entities__3317__auto__);
var G__5076 = output__3318__auto__;
entities__3317__auto__ = G__5075;
output__3318__auto__ = G__5076;
continue;
}
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world__3315__auto__,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(output__3318__auto__));
}
break;
}
});
asteroids.health.health_bar_system = (function health_bar_system(world){var seq__5087_5097 = cljs.core.seq(asteroids.core.get_entities(world));var chunk__5089_5098 = null;var count__5090_5099 = 0;var i__5091_5100 = 0;while(true){
if((i__5091_5100 < count__5090_5099))
{var entity_5101 = chunk__5089_5098.cljs$core$IIndexed$_nth$arity$2(null,i__5091_5100);if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$4(entity_5101,cljs.core.constant$keyword$72,cljs.core.constant$keyword$50,cljs.core.constant$keyword$31))
{var disp_5102 = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity_5101,cljs.core.constant$keyword$50));var health_bar_comp_5103 = asteroids.core.get_component(entity_5101,cljs.core.constant$keyword$72);var target_id_5104 = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(health_bar_comp_5103);var target_5105 = asteroids.core.get_entity(world,target_id_5104);var target_health_comp_5106 = asteroids.core.get_component(target_5105,cljs.core.constant$keyword$70);var max_health_5107 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(target_health_comp_5106);var remaining_health_5108 = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(target_health_comp_5106);var percentage_5109 = (function (){var x__3738__auto__ = 0;var y__3739__auto__ = (remaining_health_5108 / max_health_5107);return ((x__3738__auto__ > y__3739__auto__) ? x__3738__auto__ : y__3739__auto__);
})();var width_5110 = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(health_bar_comp_5103);var height_5111 = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(health_bar_comp_5103);var vec__5093_5112 = asteroids.core.get_position(entity_5101);var x_5113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5093_5112,0,null);var y_5114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5093_5112,1,null);var margin_5115 = 2;var double_margin_5116 = 4;var health_width_5117 = (width_5110 - double_margin_5116);var health_height_5118 = (height_5111 - double_margin_5116);var G__5094_5119 = disp_5102;G__5094_5119.clear();
G__5094_5119.beginFill(asteroids.health.health_bar_color);
G__5094_5119.drawRect(0,0,width_5110,height_5111);
G__5094_5119.endFill();
G__5094_5119.beginFill(asteroids.health.damage_color);
G__5094_5119.drawRect(margin_5115,margin_5115,health_width_5117,health_height_5118);
G__5094_5119.endFill();
G__5094_5119.beginFill(asteroids.health.health_color);
G__5094_5119.drawRect(margin_5115,margin_5115,(percentage_5109 * health_width_5117),health_height_5118);
G__5094_5119.endFill();
{
var G__5120 = seq__5087_5097;
var G__5121 = chunk__5089_5098;
var G__5122 = count__5090_5099;
var G__5123 = (i__5091_5100 + 1);
seq__5087_5097 = G__5120;
chunk__5089_5098 = G__5121;
count__5090_5099 = G__5122;
i__5091_5100 = G__5123;
continue;
}
} else
{{
var G__5124 = seq__5087_5097;
var G__5125 = chunk__5089_5098;
var G__5126 = count__5090_5099;
var G__5127 = (i__5091_5100 + 1);
seq__5087_5097 = G__5124;
chunk__5089_5098 = G__5125;
count__5090_5099 = G__5126;
i__5091_5100 = G__5127;
continue;
}
}
} else
{var temp__4092__auto___5128 = cljs.core.seq(seq__5087_5097);if(temp__4092__auto___5128)
{var seq__5087_5129__$1 = temp__4092__auto___5128;if(cljs.core.chunked_seq_QMARK_(seq__5087_5129__$1))
{var c__4173__auto___5130 = cljs.core.chunk_first(seq__5087_5129__$1);{
var G__5131 = cljs.core.chunk_rest(seq__5087_5129__$1);
var G__5132 = c__4173__auto___5130;
var G__5133 = cljs.core.count(c__4173__auto___5130);
var G__5134 = 0;
seq__5087_5097 = G__5131;
chunk__5089_5098 = G__5132;
count__5090_5099 = G__5133;
i__5091_5100 = G__5134;
continue;
}
} else
{var entity_5135 = cljs.core.first(seq__5087_5129__$1);if(asteroids.core.has_components_QMARK_.cljs$core$IFn$_invoke$arity$4(entity_5135,cljs.core.constant$keyword$72,cljs.core.constant$keyword$50,cljs.core.constant$keyword$31))
{var disp_5136 = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity_5135,cljs.core.constant$keyword$50));var health_bar_comp_5137 = asteroids.core.get_component(entity_5135,cljs.core.constant$keyword$72);var target_id_5138 = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(health_bar_comp_5137);var target_5139 = asteroids.core.get_entity(world,target_id_5138);var target_health_comp_5140 = asteroids.core.get_component(target_5139,cljs.core.constant$keyword$70);var max_health_5141 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(target_health_comp_5140);var remaining_health_5142 = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(target_health_comp_5140);var percentage_5143 = (function (){var x__3738__auto__ = 0;var y__3739__auto__ = (remaining_health_5142 / max_health_5141);return ((x__3738__auto__ > y__3739__auto__) ? x__3738__auto__ : y__3739__auto__);
})();var width_5144 = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(health_bar_comp_5137);var height_5145 = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(health_bar_comp_5137);var vec__5095_5146 = asteroids.core.get_position(entity_5135);var x_5147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5095_5146,0,null);var y_5148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5095_5146,1,null);var margin_5149 = 2;var double_margin_5150 = 4;var health_width_5151 = (width_5144 - double_margin_5150);var health_height_5152 = (height_5145 - double_margin_5150);var G__5096_5153 = disp_5136;G__5096_5153.clear();
G__5096_5153.beginFill(asteroids.health.health_bar_color);
G__5096_5153.drawRect(0,0,width_5144,height_5145);
G__5096_5153.endFill();
G__5096_5153.beginFill(asteroids.health.damage_color);
G__5096_5153.drawRect(margin_5149,margin_5149,health_width_5151,health_height_5152);
G__5096_5153.endFill();
G__5096_5153.beginFill(asteroids.health.health_color);
G__5096_5153.drawRect(margin_5149,margin_5149,(percentage_5143 * health_width_5151),health_height_5152);
G__5096_5153.endFill();
{
var G__5154 = cljs.core.next(seq__5087_5129__$1);
var G__5155 = null;
var G__5156 = 0;
var G__5157 = 0;
seq__5087_5097 = G__5154;
chunk__5089_5098 = G__5155;
count__5090_5099 = G__5156;
i__5091_5100 = G__5157;
continue;
}
} else
{{
var G__5158 = cljs.core.next(seq__5087_5129__$1);
var G__5159 = null;
var G__5160 = 0;
var G__5161 = 0;
seq__5087_5097 = G__5158;
chunk__5089_5098 = G__5159;
count__5090_5099 = G__5160;
i__5091_5100 = G__5161;
continue;
}
}
}
} else
{}
}
break;
}
return world;
});
