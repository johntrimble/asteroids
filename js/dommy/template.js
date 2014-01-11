// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7270 = {};return obj7270;
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
{var str_7273 = node_str.substring(base_idx);while(true){
var next_idx_7274 = dommy.template.next_css_index(str_7273,1);var frag_7275 = (((next_idx_7274 >= 0))?str_7273.substring(0,next_idx_7274):str_7273);var G__7272_7276 = frag_7275.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__7272_7276))
{node.setAttribute("id",frag_7275.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__7272_7276))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_7275.substring(1));
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_7275.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_7274 >= 0))
{{
var G__7277 = str_7273.substring(next_idx_7274);
str_7273 = G__7277;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7283 = data;if(G__7283)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7283.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7283.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7283);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7283);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__7284_7288 = cljs.core.seq(data);var chunk__7285_7289 = null;var count__7286_7290 = 0;var i__7287_7291 = 0;while(true){
if((i__7287_7291 < count__7286_7290))
{var child_7292 = chunk__7285_7289.cljs$core$IIndexed$_nth$arity$2(null,i__7287_7291);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_7292);
{
var G__7293 = seq__7284_7288;
var G__7294 = chunk__7285_7289;
var G__7295 = count__7286_7290;
var G__7296 = (i__7287_7291 + 1);
seq__7284_7288 = G__7293;
chunk__7285_7289 = G__7294;
count__7286_7290 = G__7295;
i__7287_7291 = G__7296;
continue;
}
} else
{var temp__4092__auto___7297 = cljs.core.seq(seq__7284_7288);if(temp__4092__auto___7297)
{var seq__7284_7298__$1 = temp__4092__auto___7297;if(cljs.core.chunked_seq_QMARK_(seq__7284_7298__$1))
{var c__4173__auto___7299 = cljs.core.chunk_first(seq__7284_7298__$1);{
var G__7300 = cljs.core.chunk_rest(seq__7284_7298__$1);
var G__7301 = c__4173__auto___7299;
var G__7302 = cljs.core.count(c__4173__auto___7299);
var G__7303 = 0;
seq__7284_7288 = G__7300;
chunk__7285_7289 = G__7301;
count__7286_7290 = G__7302;
i__7287_7291 = G__7303;
continue;
}
} else
{var child_7304 = cljs.core.first(seq__7284_7298__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_7304);
{
var G__7305 = cljs.core.next(seq__7284_7298__$1);
var G__7306 = null;
var G__7307 = 0;
var G__7308 = 0;
seq__7284_7288 = G__7305;
chunk__7285_7289 = G__7306;
count__7286_7290 = G__7307;
i__7287_7291 = G__7308;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7310 = data;if(G__7310)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7310.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7310.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7310);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7310);
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
dommy.template.compound_element = (function compound_element(p__7311){var vec__7331 = p__7311;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7331,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7331,1,null);var children = cljs.core.nthnext(vec__7331,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__7333 = maybe_attrs;if(G__7333)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7333.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7333.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7333);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7333);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__7334_7350 = cljs.core.seq(attrs);var chunk__7335_7351 = null;var count__7336_7352 = 0;var i__7337_7353 = 0;while(true){
if((i__7337_7353 < count__7336_7352))
{var vec__7338_7354 = chunk__7335_7351.cljs$core$IIndexed$_nth$arity$2(null,i__7337_7353);var k_7355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7338_7354,0,null);var v_7356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7338_7354,1,null);var G__7339_7357 = k_7355;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__7339_7357))
{var seq__7340_7358 = cljs.core.seq(v_7356);var chunk__7341_7359 = null;var count__7342_7360 = 0;var i__7343_7361 = 0;while(true){
if((i__7343_7361 < count__7342_7360))
{var c_7362 = chunk__7341_7359.cljs$core$IIndexed$_nth$arity$2(null,i__7343_7361);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7362);
{
var G__7363 = seq__7340_7358;
var G__7364 = chunk__7341_7359;
var G__7365 = count__7342_7360;
var G__7366 = (i__7343_7361 + 1);
seq__7340_7358 = G__7363;
chunk__7341_7359 = G__7364;
count__7342_7360 = G__7365;
i__7343_7361 = G__7366;
continue;
}
} else
{var temp__4092__auto___7367 = cljs.core.seq(seq__7340_7358);if(temp__4092__auto___7367)
{var seq__7340_7368__$1 = temp__4092__auto___7367;if(cljs.core.chunked_seq_QMARK_(seq__7340_7368__$1))
{var c__4173__auto___7369 = cljs.core.chunk_first(seq__7340_7368__$1);{
var G__7370 = cljs.core.chunk_rest(seq__7340_7368__$1);
var G__7371 = c__4173__auto___7369;
var G__7372 = cljs.core.count(c__4173__auto___7369);
var G__7373 = 0;
seq__7340_7358 = G__7370;
chunk__7341_7359 = G__7371;
count__7342_7360 = G__7372;
i__7343_7361 = G__7373;
continue;
}
} else
{var c_7374 = cljs.core.first(seq__7340_7368__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7374);
{
var G__7375 = cljs.core.next(seq__7340_7368__$1);
var G__7376 = null;
var G__7377 = 0;
var G__7378 = 0;
seq__7340_7358 = G__7375;
chunk__7341_7359 = G__7376;
count__7342_7360 = G__7377;
i__7343_7361 = G__7378;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,G__7339_7357))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_7356);
} else
{if(cljs.core.constant$keyword$6)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_7355,v_7356);
} else
{}
}
}
{
var G__7379 = seq__7334_7350;
var G__7380 = chunk__7335_7351;
var G__7381 = count__7336_7352;
var G__7382 = (i__7337_7353 + 1);
seq__7334_7350 = G__7379;
chunk__7335_7351 = G__7380;
count__7336_7352 = G__7381;
i__7337_7353 = G__7382;
continue;
}
} else
{var temp__4092__auto___7383 = cljs.core.seq(seq__7334_7350);if(temp__4092__auto___7383)
{var seq__7334_7384__$1 = temp__4092__auto___7383;if(cljs.core.chunked_seq_QMARK_(seq__7334_7384__$1))
{var c__4173__auto___7385 = cljs.core.chunk_first(seq__7334_7384__$1);{
var G__7386 = cljs.core.chunk_rest(seq__7334_7384__$1);
var G__7387 = c__4173__auto___7385;
var G__7388 = cljs.core.count(c__4173__auto___7385);
var G__7389 = 0;
seq__7334_7350 = G__7386;
chunk__7335_7351 = G__7387;
count__7336_7352 = G__7388;
i__7337_7353 = G__7389;
continue;
}
} else
{var vec__7344_7390 = cljs.core.first(seq__7334_7384__$1);var k_7391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7344_7390,0,null);var v_7392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7344_7390,1,null);var G__7345_7393 = k_7391;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__7345_7393))
{var seq__7346_7394 = cljs.core.seq(v_7392);var chunk__7347_7395 = null;var count__7348_7396 = 0;var i__7349_7397 = 0;while(true){
if((i__7349_7397 < count__7348_7396))
{var c_7398 = chunk__7347_7395.cljs$core$IIndexed$_nth$arity$2(null,i__7349_7397);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7398);
{
var G__7399 = seq__7346_7394;
var G__7400 = chunk__7347_7395;
var G__7401 = count__7348_7396;
var G__7402 = (i__7349_7397 + 1);
seq__7346_7394 = G__7399;
chunk__7347_7395 = G__7400;
count__7348_7396 = G__7401;
i__7349_7397 = G__7402;
continue;
}
} else
{var temp__4092__auto___7403__$1 = cljs.core.seq(seq__7346_7394);if(temp__4092__auto___7403__$1)
{var seq__7346_7404__$1 = temp__4092__auto___7403__$1;if(cljs.core.chunked_seq_QMARK_(seq__7346_7404__$1))
{var c__4173__auto___7405 = cljs.core.chunk_first(seq__7346_7404__$1);{
var G__7406 = cljs.core.chunk_rest(seq__7346_7404__$1);
var G__7407 = c__4173__auto___7405;
var G__7408 = cljs.core.count(c__4173__auto___7405);
var G__7409 = 0;
seq__7346_7394 = G__7406;
chunk__7347_7395 = G__7407;
count__7348_7396 = G__7408;
i__7349_7397 = G__7409;
continue;
}
} else
{var c_7410 = cljs.core.first(seq__7346_7404__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_7410);
{
var G__7411 = cljs.core.next(seq__7346_7404__$1);
var G__7412 = null;
var G__7413 = 0;
var G__7414 = 0;
seq__7346_7394 = G__7411;
chunk__7347_7395 = G__7412;
count__7348_7396 = G__7413;
i__7349_7397 = G__7414;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,G__7345_7393))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_7392);
} else
{if(cljs.core.constant$keyword$6)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_7391,v_7392);
} else
{}
}
}
{
var G__7415 = cljs.core.next(seq__7334_7384__$1);
var G__7416 = null;
var G__7417 = 0;
var G__7418 = 0;
seq__7334_7350 = G__7415;
chunk__7335_7351 = G__7416;
count__7336_7352 = G__7417;
i__7337_7353 = G__7418;
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
}catch (e7419){if((e7419 instanceof ReferenceError))
{var __7420 = e7419;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$6)
{throw e7419;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7422 = data;if(G__7422)
{var bit__4075__auto__ = null;if(cljs.core.truth_((function (){var or__3431__auto__ = bit__4075__auto__;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return G__7422.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7422.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7422);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__7422);
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
