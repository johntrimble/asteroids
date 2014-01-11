// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7272 = {};return obj7272;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3419__auto__ = this$;if(and__3419__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3419__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4052__auto__ = (((this$ == null))?null:this$);return (function (){var or__3431__auto__ = (dommy.template._elem[goog.typeOf(x__4052__auto__)]);if(or__3431__auto__)
{return or__3431__auto__;
} else
{var or__3431__auto____$1 = (dommy.template._elem["_"]);if(or__3431__auto____$1)
{return or__3431__auto____$1;
} else
{throw cljs.core.missing_protocol("PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$6)?node_str:null)));var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_7275 = node_str.substring(base_idx);while(true){
var next_idx_7276 = dommy.template.next_css_index(str_7275,1);var frag_7277 = (((next_idx_7276 >= 0))?str_7275.substring(0,next_idx_7276):str_7275);var G__7274_7278 = frag_7277.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__7274_7278))
{node.setAttribute("id",frag_7277.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__7274_7278))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_7277.substring(1));
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_7277.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_7276 >= 0))
{{
var G__7279 = str_7275.substring(next_idx_7276);
str_7275 = G__7279;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node_data], 0)))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.cljs$core$IFn$_invoke$arity$2(document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7285 = data;if(G__7285)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7285.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7285.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7285);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7285);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__7286_7290 = cljs.core.seq(data);var chunk__7287_7291 = null;var count__7288_7292 = 0;var i__7289_7293 = 0;while(true){
if((i__7289_7293 < count__7288_7292))
{var child_7294 = chunk__7287_7291.cljs$core$IIndexed$_nth$arity$2(null,i__7289_7293);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_7294);
{
var G__7295 = seq__7286_7290;
var G__7296 = chunk__7287_7291;
var G__7297 = count__7288_7292;
var G__7298 = (i__7289_7293 + 1);
seq__7286_7290 = G__7295;
chunk__7287_7291 = G__7296;
count__7288_7292 = G__7297;
i__7289_7293 = G__7298;
continue;
}
} else
{var temp__4092__auto___7299 = cljs.core.seq(seq__7286_7290);if(temp__4092__auto___7299)
{var seq__7286_7300__$1 = temp__4092__auto___7299;if(cljs.core.chunked_seq_QMARK_(seq__7286_7300__$1))
{var c__4173__auto___7301 = cljs.core.chunk_first(seq__7286_7300__$1);{
var G__7302 = cljs.core.chunk_rest(seq__7286_7300__$1);
var G__7303 = c__4173__auto___7301;
var G__7304 = cljs.core.count(c__4173__auto___7301);
var G__7305 = 0;
seq__7286_7290 = G__7302;
chunk__7287_7291 = G__7303;
count__7288_7292 = G__7304;
i__7289_7293 = G__7305;
continue;
}
} else
{var child_7306 = cljs.core.first(seq__7286_7300__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_7306);
{
var G__7307 = cljs.core.next(seq__7286_7300__$1);
var G__7308 = null;
var G__7309 = 0;
var G__7310 = 0;
seq__7286_7290 = G__7307;
chunk__7287_7291 = G__7308;
count__7288_7292 = G__7309;
i__7289_7293 = G__7310;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(cljs.core.constant$keyword$6)
{return dommy.template.throw_unable_to_make_node(data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7312 = data;if(G__7312)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7312.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7312.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7312);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7312);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__7313){var vec__7333 = p__7313;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7333,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7333,1,null);var children = cljs.core.nthnext(vec__7333,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__7335 = maybe_attrs;if(G__7335)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7335.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7335.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7335);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7335);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__7336_7352 = cljs.core.seq(attrs);var chunk__7337_7353 = null;var count__7338_7354 = 0;var i__7339_7355 = 0;while(true){
if((i__7339_7355 < count__7338_7354))
{var vec__7340_7356 = chunk__7337_7353.cljs$core$IIndexed$_nth$arity$2(null,i__7339_7355);var k_7357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7340_7356,0,null);var v_7358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7340_7356,1,null);var G__7341_7359 = k_7357;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__7341_7359))
{var seq__7342_7360 = cljs.core.seq(v_7358);var chunk__7343_7361 = null;var count__7344_7362 = 0;var i__7345_7363 = 0;while(true){
if((i__7345_7363 < count__7344_7362))
{var c_7364 = chunk__7343_7361.cljs$core$IIndexed$_nth$arity$2(null,i__7345_7363);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7364);
{
var G__7365 = seq__7342_7360;
var G__7366 = chunk__7343_7361;
var G__7367 = count__7344_7362;
var G__7368 = (i__7345_7363 + 1);
seq__7342_7360 = G__7365;
chunk__7343_7361 = G__7366;
count__7344_7362 = G__7367;
i__7345_7363 = G__7368;
continue;
}
} else
{var temp__4092__auto___7369 = cljs.core.seq(seq__7342_7360);if(temp__4092__auto___7369)
{var seq__7342_7370__$1 = temp__4092__auto___7369;if(cljs.core.chunked_seq_QMARK_(seq__7342_7370__$1))
{var c__4173__auto___7371 = cljs.core.chunk_first(seq__7342_7370__$1);{
var G__7372 = cljs.core.chunk_rest(seq__7342_7370__$1);
var G__7373 = c__4173__auto___7371;
var G__7374 = cljs.core.count(c__4173__auto___7371);
var G__7375 = 0;
seq__7342_7360 = G__7372;
chunk__7343_7361 = G__7373;
count__7344_7362 = G__7374;
i__7345_7363 = G__7375;
continue;
}
} else
{var c_7376 = cljs.core.first(seq__7342_7370__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7376);
{
var G__7377 = cljs.core.next(seq__7342_7370__$1);
var G__7378 = null;
var G__7379 = 0;
var G__7380 = 0;
seq__7342_7360 = G__7377;
chunk__7343_7361 = G__7378;
count__7344_7362 = G__7379;
i__7345_7363 = G__7380;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,G__7341_7359))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_7358);
} else
{if(cljs.core.constant$keyword$6)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_7357,v_7358);
} else
{}
}
}
{
var G__7381 = seq__7336_7352;
var G__7382 = chunk__7337_7353;
var G__7383 = count__7338_7354;
var G__7384 = (i__7339_7355 + 1);
seq__7336_7352 = G__7381;
chunk__7337_7353 = G__7382;
count__7338_7354 = G__7383;
i__7339_7355 = G__7384;
continue;
}
} else
{var temp__4092__auto___7385 = cljs.core.seq(seq__7336_7352);if(temp__4092__auto___7385)
{var seq__7336_7386__$1 = temp__4092__auto___7385;if(cljs.core.chunked_seq_QMARK_(seq__7336_7386__$1))
{var c__4173__auto___7387 = cljs.core.chunk_first(seq__7336_7386__$1);{
var G__7388 = cljs.core.chunk_rest(seq__7336_7386__$1);
var G__7389 = c__4173__auto___7387;
var G__7390 = cljs.core.count(c__4173__auto___7387);
var G__7391 = 0;
seq__7336_7352 = G__7388;
chunk__7337_7353 = G__7389;
count__7338_7354 = G__7390;
i__7339_7355 = G__7391;
continue;
}
} else
{var vec__7346_7392 = cljs.core.first(seq__7336_7386__$1);var k_7393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346_7392,0,null);var v_7394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346_7392,1,null);var G__7347_7395 = k_7393;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__7347_7395))
{var seq__7348_7396 = cljs.core.seq(v_7394);var chunk__7349_7397 = null;var count__7350_7398 = 0;var i__7351_7399 = 0;while(true){
if((i__7351_7399 < count__7350_7398))
{var c_7400 = chunk__7349_7397.cljs$core$IIndexed$_nth$arity$2(null,i__7351_7399);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7400);
{
var G__7401 = seq__7348_7396;
var G__7402 = chunk__7349_7397;
var G__7403 = count__7350_7398;
var G__7404 = (i__7351_7399 + 1);
seq__7348_7396 = G__7401;
chunk__7349_7397 = G__7402;
count__7350_7398 = G__7403;
i__7351_7399 = G__7404;
continue;
}
} else
{var temp__4092__auto___7405__$1 = cljs.core.seq(seq__7348_7396);if(temp__4092__auto___7405__$1)
{var seq__7348_7406__$1 = temp__4092__auto___7405__$1;if(cljs.core.chunked_seq_QMARK_(seq__7348_7406__$1))
{var c__4173__auto___7407 = cljs.core.chunk_first(seq__7348_7406__$1);{
var G__7408 = cljs.core.chunk_rest(seq__7348_7406__$1);
var G__7409 = c__4173__auto___7407;
var G__7410 = cljs.core.count(c__4173__auto___7407);
var G__7411 = 0;
seq__7348_7396 = G__7408;
chunk__7349_7397 = G__7409;
count__7350_7398 = G__7410;
i__7351_7399 = G__7411;
continue;
}
} else
{var c_7412 = cljs.core.first(seq__7348_7406__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7412);
{
var G__7413 = cljs.core.next(seq__7348_7406__$1);
var G__7414 = null;
var G__7415 = 0;
var G__7416 = 0;
seq__7348_7396 = G__7413;
chunk__7349_7397 = G__7414;
count__7350_7398 = G__7415;
i__7351_7399 = G__7416;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,G__7347_7395))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_7394);
} else
{if(cljs.core.constant$keyword$6)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_7393,v_7394);
} else
{}
}
}
{
var G__7417 = cljs.core.next(seq__7336_7386__$1);
var G__7418 = null;
var G__7419 = 0;
var G__7420 = 0;
seq__7336_7352 = G__7417;
chunk__7337_7353 = G__7418;
count__7338_7354 = G__7419;
i__7339_7355 = G__7420;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like(children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element(this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element(this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e7421){if((e7421 instanceof ReferenceError))
{var __7422 = e7421;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$6)
{throw e7421;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7424 = data;if(G__7424)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7424.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7424.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7424);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7424);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});
