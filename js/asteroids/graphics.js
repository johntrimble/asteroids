// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.graphics');
goog.require('cljs.core');
goog.require('asteroids.core');
goog.require('asteroids.core');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.set');
asteroids.graphics.display_object = (function display_object(disp){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$50,cljs.core.constant$keyword$49,disp], null);
});
asteroids.graphics.layer = (function layer(layer__$1){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$51,cljs.core.constant$keyword$51,layer__$1], null);
});
asteroids.graphics.get_layer = (function get_layer(e){return cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$2(asteroids.core.get_component(e,cljs.core.constant$keyword$51),1);
});
asteroids.graphics.camera = (function camera(fov){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$53,cljs.core.constant$keyword$52,fov], null);
});
/**
* Creates an update-stage-system!. This system only needs to be executed to
* update the view.
*/
asteroids.graphics.create_update_stage_system = (function create_update_stage_system(){var prev_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,null,cljs.core.constant$keyword$55,null], null));return (function (world,layers){var layer_map = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,cljs.core.constant$keyword$50),layers));var old_state = cljs.core.deref(prev_state);var prev_world = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(old_state);var prev_ids = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(old_state);var ids = (function (){var obj5025 = {};return obj5025;
})();var seq__5026_5032 = cljs.core.seq(asteroids.core.get_entities(world));var chunk__5027_5033 = null;var count__5028_5034 = 0;var i__5029_5035 = 0;while(true){
if((i__5029_5035 < count__5028_5034))
{var e_5036 = chunk__5027_5033.cljs$core$IIndexed$_nth$arity$2(null,i__5029_5035);var disp_5037 = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(e_5036,cljs.core.constant$keyword$50));if((disp_5037 == null))
{} else
{(ids[asteroids.core.get_id(e_5036)] = true);
if((disp_5037.parent == null))
{var n_5038 = asteroids.graphics.get_layer(e_5036);var l_5039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layer_map,n_5038);l_5039.addChild(disp_5037);
} else
{}
var vec__5030_5040 = asteroids.core.get_position(e_5036);var x_5041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5030_5040,0,null);var y_5042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5030_5040,1,null);var rotation_5043 = (function (){var or__3431__auto__ = asteroids.core.get_rotation(e_5036);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return 0;
}
})();var disp_pos_5044 = disp_5037.position;disp_pos_5044.x = x_5041;
disp_pos_5044.y = y_5042;
disp_5037.rotation = rotation_5043;
}
{
var G__5045 = seq__5026_5032;
var G__5046 = chunk__5027_5033;
var G__5047 = count__5028_5034;
var G__5048 = (i__5029_5035 + 1);
seq__5026_5032 = G__5045;
chunk__5027_5033 = G__5046;
count__5028_5034 = G__5047;
i__5029_5035 = G__5048;
continue;
}
} else
{var temp__4092__auto___5049 = cljs.core.seq(seq__5026_5032);if(temp__4092__auto___5049)
{var seq__5026_5050__$1 = temp__4092__auto___5049;if(cljs.core.chunked_seq_QMARK_(seq__5026_5050__$1))
{var c__4173__auto___5051 = cljs.core.chunk_first(seq__5026_5050__$1);{
var G__5052 = cljs.core.chunk_rest(seq__5026_5050__$1);
var G__5053 = c__4173__auto___5051;
var G__5054 = cljs.core.count(c__4173__auto___5051);
var G__5055 = 0;
seq__5026_5032 = G__5052;
chunk__5027_5033 = G__5053;
count__5028_5034 = G__5054;
i__5029_5035 = G__5055;
continue;
}
} else
{var e_5056 = cljs.core.first(seq__5026_5050__$1);var disp_5057 = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(e_5056,cljs.core.constant$keyword$50));if((disp_5057 == null))
{} else
{(ids[asteroids.core.get_id(e_5056)] = true);
if((disp_5057.parent == null))
{var n_5058 = asteroids.graphics.get_layer(e_5056);var l_5059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layer_map,n_5058);l_5059.addChild(disp_5057);
} else
{}
var vec__5031_5060 = asteroids.core.get_position(e_5056);var x_5061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5031_5060,0,null);var y_5062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5031_5060,1,null);var rotation_5063 = (function (){var or__3431__auto__ = asteroids.core.get_rotation(e_5056);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return 0;
}
})();var disp_pos_5064 = disp_5057.position;disp_pos_5064.x = x_5061;
disp_pos_5064.y = y_5062;
disp_5057.rotation = rotation_5063;
}
{
var G__5065 = cljs.core.next(seq__5026_5050__$1);
var G__5066 = null;
var G__5067 = 0;
var G__5068 = 0;
seq__5026_5032 = G__5065;
chunk__5027_5033 = G__5066;
count__5028_5034 = G__5067;
i__5029_5035 = G__5068;
continue;
}
}
} else
{}
}
break;
}
if(!((prev_ids == null)))
{goog.object.forEach(prev_ids,(function (v,k,_){if((!((ids[k]) === true)) && (v === true))
{var e = asteroids.core.get_entity(prev_world,k);var disp = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(e,cljs.core.constant$keyword$50));var n = asteroids.graphics.get_layer(e);var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layer_map,n);return l.removeChild(disp);
} else
{return null;
}
}));
} else
{}
cljs.core.reset_BANG_(prev_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,world,cljs.core.constant$keyword$55,ids], null));
return world;
});
});
