// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like(elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3431__auto__ = elem.textContent;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like(elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6879 = dommy.template.__GT_node_like(parent);G__6879.appendChild(dommy.template.__GT_node_like(child));
return G__6879;
});
var append_BANG___3 = (function() { 
var G__6884__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__6880_6885 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__6881_6886 = null;var count__6882_6887 = 0;var i__6883_6888 = 0;while(true){
if((i__6883_6888 < count__6882_6887))
{var c_6889 = chunk__6881_6886.cljs$core$IIndexed$_nth$arity$2(null,i__6883_6888);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6889);
{
var G__6890 = seq__6880_6885;
var G__6891 = chunk__6881_6886;
var G__6892 = count__6882_6887;
var G__6893 = (i__6883_6888 + 1);
seq__6880_6885 = G__6890;
chunk__6881_6886 = G__6891;
count__6882_6887 = G__6892;
i__6883_6888 = G__6893;
continue;
}
} else
{var temp__4092__auto___6894 = cljs.core.seq(seq__6880_6885);if(temp__4092__auto___6894)
{var seq__6880_6895__$1 = temp__4092__auto___6894;if(cljs.core.chunked_seq_QMARK_(seq__6880_6895__$1))
{var c__4173__auto___6896 = cljs.core.chunk_first(seq__6880_6895__$1);{
var G__6897 = cljs.core.chunk_rest(seq__6880_6895__$1);
var G__6898 = c__4173__auto___6896;
var G__6899 = cljs.core.count(c__4173__auto___6896);
var G__6900 = 0;
seq__6880_6885 = G__6897;
chunk__6881_6886 = G__6898;
count__6882_6887 = G__6899;
i__6883_6888 = G__6900;
continue;
}
} else
{var c_6901 = cljs.core.first(seq__6880_6895__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6901);
{
var G__6902 = cljs.core.next(seq__6880_6895__$1);
var G__6903 = null;
var G__6904 = 0;
var G__6905 = 0;
seq__6880_6885 = G__6902;
chunk__6881_6886 = G__6903;
count__6882_6887 = G__6904;
i__6883_6888 = G__6905;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6884 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6884__delegate.call(this,parent,child,more_children);};
G__6884.cljs$lang$maxFixedArity = 2;
G__6884.cljs$lang$applyTo = (function (arglist__6906){
var parent = cljs.core.first(arglist__6906);
arglist__6906 = cljs.core.next(arglist__6906);
var child = cljs.core.first(arglist__6906);
var more_children = cljs.core.rest(arglist__6906);
return G__6884__delegate(parent,child,more_children);
});
G__6884.cljs$core$IFn$_invoke$arity$variadic = G__6884__delegate;
return G__6884;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like(parent);return parent__$1.insertBefore(dommy.template.__GT_node_like(child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__6915__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__6911_6916 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__6912_6917 = null;var count__6913_6918 = 0;var i__6914_6919 = 0;while(true){
if((i__6914_6919 < count__6913_6918))
{var c_6920 = chunk__6912_6917.cljs$core$IIndexed$_nth$arity$2(null,i__6914_6919);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6920);
{
var G__6921 = seq__6911_6916;
var G__6922 = chunk__6912_6917;
var G__6923 = count__6913_6918;
var G__6924 = (i__6914_6919 + 1);
seq__6911_6916 = G__6921;
chunk__6912_6917 = G__6922;
count__6913_6918 = G__6923;
i__6914_6919 = G__6924;
continue;
}
} else
{var temp__4092__auto___6925 = cljs.core.seq(seq__6911_6916);if(temp__4092__auto___6925)
{var seq__6911_6926__$1 = temp__4092__auto___6925;if(cljs.core.chunked_seq_QMARK_(seq__6911_6926__$1))
{var c__4173__auto___6927 = cljs.core.chunk_first(seq__6911_6926__$1);{
var G__6928 = cljs.core.chunk_rest(seq__6911_6926__$1);
var G__6929 = c__4173__auto___6927;
var G__6930 = cljs.core.count(c__4173__auto___6927);
var G__6931 = 0;
seq__6911_6916 = G__6928;
chunk__6912_6917 = G__6929;
count__6913_6918 = G__6930;
i__6914_6919 = G__6931;
continue;
}
} else
{var c_6932 = cljs.core.first(seq__6911_6926__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6932);
{
var G__6933 = cljs.core.next(seq__6911_6926__$1);
var G__6934 = null;
var G__6935 = 0;
var G__6936 = 0;
seq__6911_6916 = G__6933;
chunk__6912_6917 = G__6934;
count__6913_6918 = G__6935;
i__6914_6919 = G__6936;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6915 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6915__delegate.call(this,parent,child,more_children);};
G__6915.cljs$lang$maxFixedArity = 2;
G__6915.cljs$lang$applyTo = (function (arglist__6937){
var parent = cljs.core.first(arglist__6937);
arglist__6937 = cljs.core.next(arglist__6937);
var child = cljs.core.first(arglist__6937);
var more_children = cljs.core.rest(arglist__6937);
return G__6915__delegate(parent,child,more_children);
});
G__6915.cljs$core$IFn$_invoke$arity$variadic = G__6915__delegate;
return G__6915;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))], 0)))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___6938 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___6938))
{var next_6939 = temp__4090__auto___6938;parent.insertBefore(actual_node,next_6939);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like(new$);var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))], 0)))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6941 = dommy.template.__GT_node_like(parent);G__6941.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__6941,node_like);
return G__6941;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__6943 = elem__$1.parentNode;G__6943.removeChild(elem__$1);
return G__6943;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like(elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_(data))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name(data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like(template);if(!(cljs.core.contains_QMARK_(key_selectors_map,cljs.core.constant$keyword$91)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),cljs.core.constant$keyword$91))], 0)))].join('')));
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$91,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6949){var vec__6950 = p__6949;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6950,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6950,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t6951 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t6951 = (function (v,k,vec__6950,p__6949,container,key_selectors_map,template,selector_map,meta6952){
this.v = v;
this.k = k;
this.vec__6950 = vec__6950;
this.p__6949 = p__6949;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta6952 = meta6952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t6951.cljs$lang$type = true;
dommy.core.t6951.cljs$lang$ctorStr = "dommy.core/t6951";
dommy.core.t6951.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write(writer__3994__auto__,"dommy.core/t6951");
});
dommy.core.t6951.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t6951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6953){var self__ = this;
var _6953__$1 = this;return self__.meta6952;
});
dommy.core.t6951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6953,meta6952__$1){var self__ = this;
var _6953__$1 = this;return (new dommy.core.t6951(self__.v,self__.k,self__.vec__6950,self__.p__6949,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta6952__$1));
});
dommy.core.__GT_t6951 = (function __GT_t6951(v__$1,k__$1,vec__6950__$1,p__6949__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6952){return (new dommy.core.t6951(v__$1,k__$1,vec__6950__$1,p__6949__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6952));
});
}
return (new dommy.core.t6951(v,k,vec__6950,p__6949,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__6954_SHARP_){return p1__6954_SHARP_.parentNode;
}),dommy.template.__GT_node_like(elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(dommy.template.__GT_node_like(dommy.template.__GT_node_like(base)).querySelectorAll(dommy.core.selector(selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1(selector),dommy.core.ancestor_nodes(dommy.template.__GT_node_like(elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__6955_SHARP_){return !((p1__6955_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes(elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like(descendant);var ancestor__$1 = dommy.template.__GT_node_like(ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6956){var vec__6957 = p__6956;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6957,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6957,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3431__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3419__auto__ = related_target;if(cljs.core.truth_(and__3419__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3419__auto__;
}
})()))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$93,cljs.core.constant$keyword$95,cljs.core.constant$keyword$94,cljs.core.constant$keyword$96], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_((function (){var and__3419__auto__ = selected_target;if(cljs.core.truth_(and__3419__auto__))
{return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,cljs.core.constant$keyword$97) : dommy.core.attr.call(null,selected_target,cljs.core.constant$keyword$97)));
} else
{return and__3419__auto__;
}
})()))
{event.selectedTarget = selected_target;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3431__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like(elem);return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6958){
var elem = cljs.core.first(arglist__6958);
arglist__6958 = cljs.core.next(arglist__6958);
var f = cljs.core.first(arglist__6958);
var args = cljs.core.rest(arglist__6958);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__6959_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__6959_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like(elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__6983_7006 = dommy.core.elem_and_selector(elem_sel);var elem_7007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6983_7006,0,null);var selector_7008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6983_7006,1,null);var seq__6984_7009 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__6991_7010 = null;var count__6992_7011 = 0;var i__6993_7012 = 0;while(true){
if((i__6993_7012 < count__6992_7011))
{var vec__7000_7013 = chunk__6991_7010.cljs$core$IIndexed$_nth$arity$2(null,i__6993_7012);var orig_type_7014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7000_7013,0,null);var f_7015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7000_7013,1,null);var seq__6994_7016 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7014,new cljs.core.PersistentArrayMap.fromArray([orig_type_7014,cljs.core.identity], true, false)));var chunk__6996_7017 = null;var count__6997_7018 = 0;var i__6998_7019 = 0;while(true){
if((i__6998_7019 < count__6997_7018))
{var vec__7001_7020 = chunk__6996_7017.cljs$core$IIndexed$_nth$arity$2(null,i__6998_7019);var actual_type_7021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7001_7020,0,null);var factory_7022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7001_7020,1,null);var canonical_f_7023 = (cljs.core.truth_(selector_7008)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7007,selector_7008):cljs.core.identity).call(null,(factory_7022.cljs$core$IFn$_invoke$arity$1 ? factory_7022.cljs$core$IFn$_invoke$arity$1(f_7015) : factory_7022.call(null,f_7015)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7007,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7008,actual_type_7021,f_7015], null),canonical_f_7023], 0));
if(cljs.core.truth_(elem_7007.addEventListener))
{elem_7007.addEventListener(cljs.core.name(actual_type_7021),canonical_f_7023);
} else
{elem_7007.attachEvent(cljs.core.name(actual_type_7021),canonical_f_7023);
}
{
var G__7024 = seq__6994_7016;
var G__7025 = chunk__6996_7017;
var G__7026 = count__6997_7018;
var G__7027 = (i__6998_7019 + 1);
seq__6994_7016 = G__7024;
chunk__6996_7017 = G__7025;
count__6997_7018 = G__7026;
i__6998_7019 = G__7027;
continue;
}
} else
{var temp__4092__auto___7028 = cljs.core.seq(seq__6994_7016);if(temp__4092__auto___7028)
{var seq__6994_7029__$1 = temp__4092__auto___7028;if(cljs.core.chunked_seq_QMARK_(seq__6994_7029__$1))
{var c__4173__auto___7030 = cljs.core.chunk_first(seq__6994_7029__$1);{
var G__7031 = cljs.core.chunk_rest(seq__6994_7029__$1);
var G__7032 = c__4173__auto___7030;
var G__7033 = cljs.core.count(c__4173__auto___7030);
var G__7034 = 0;
seq__6994_7016 = G__7031;
chunk__6996_7017 = G__7032;
count__6997_7018 = G__7033;
i__6998_7019 = G__7034;
continue;
}
} else
{var vec__7002_7035 = cljs.core.first(seq__6994_7029__$1);var actual_type_7036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002_7035,0,null);var factory_7037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002_7035,1,null);var canonical_f_7038 = (cljs.core.truth_(selector_7008)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7007,selector_7008):cljs.core.identity).call(null,(factory_7037.cljs$core$IFn$_invoke$arity$1 ? factory_7037.cljs$core$IFn$_invoke$arity$1(f_7015) : factory_7037.call(null,f_7015)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7007,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7008,actual_type_7036,f_7015], null),canonical_f_7038], 0));
if(cljs.core.truth_(elem_7007.addEventListener))
{elem_7007.addEventListener(cljs.core.name(actual_type_7036),canonical_f_7038);
} else
{elem_7007.attachEvent(cljs.core.name(actual_type_7036),canonical_f_7038);
}
{
var G__7039 = cljs.core.next(seq__6994_7029__$1);
var G__7040 = null;
var G__7041 = 0;
var G__7042 = 0;
seq__6994_7016 = G__7039;
chunk__6996_7017 = G__7040;
count__6997_7018 = G__7041;
i__6998_7019 = G__7042;
continue;
}
}
} else
{}
}
break;
}
{
var G__7043 = seq__6984_7009;
var G__7044 = chunk__6991_7010;
var G__7045 = count__6992_7011;
var G__7046 = (i__6993_7012 + 1);
seq__6984_7009 = G__7043;
chunk__6991_7010 = G__7044;
count__6992_7011 = G__7045;
i__6993_7012 = G__7046;
continue;
}
} else
{var temp__4092__auto___7047 = cljs.core.seq(seq__6984_7009);if(temp__4092__auto___7047)
{var seq__6984_7048__$1 = temp__4092__auto___7047;if(cljs.core.chunked_seq_QMARK_(seq__6984_7048__$1))
{var c__4173__auto___7049 = cljs.core.chunk_first(seq__6984_7048__$1);{
var G__7050 = cljs.core.chunk_rest(seq__6984_7048__$1);
var G__7051 = c__4173__auto___7049;
var G__7052 = cljs.core.count(c__4173__auto___7049);
var G__7053 = 0;
seq__6984_7009 = G__7050;
chunk__6991_7010 = G__7051;
count__6992_7011 = G__7052;
i__6993_7012 = G__7053;
continue;
}
} else
{var vec__7003_7054 = cljs.core.first(seq__6984_7048__$1);var orig_type_7055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_7054,0,null);var f_7056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_7054,1,null);var seq__6985_7057 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7055,new cljs.core.PersistentArrayMap.fromArray([orig_type_7055,cljs.core.identity], true, false)));var chunk__6987_7058 = null;var count__6988_7059 = 0;var i__6989_7060 = 0;while(true){
if((i__6989_7060 < count__6988_7059))
{var vec__7004_7061 = chunk__6987_7058.cljs$core$IIndexed$_nth$arity$2(null,i__6989_7060);var actual_type_7062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004_7061,0,null);var factory_7063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004_7061,1,null);var canonical_f_7064 = (cljs.core.truth_(selector_7008)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7007,selector_7008):cljs.core.identity).call(null,(factory_7063.cljs$core$IFn$_invoke$arity$1 ? factory_7063.cljs$core$IFn$_invoke$arity$1(f_7056) : factory_7063.call(null,f_7056)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7007,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7008,actual_type_7062,f_7056], null),canonical_f_7064], 0));
if(cljs.core.truth_(elem_7007.addEventListener))
{elem_7007.addEventListener(cljs.core.name(actual_type_7062),canonical_f_7064);
} else
{elem_7007.attachEvent(cljs.core.name(actual_type_7062),canonical_f_7064);
}
{
var G__7065 = seq__6985_7057;
var G__7066 = chunk__6987_7058;
var G__7067 = count__6988_7059;
var G__7068 = (i__6989_7060 + 1);
seq__6985_7057 = G__7065;
chunk__6987_7058 = G__7066;
count__6988_7059 = G__7067;
i__6989_7060 = G__7068;
continue;
}
} else
{var temp__4092__auto___7069__$1 = cljs.core.seq(seq__6985_7057);if(temp__4092__auto___7069__$1)
{var seq__6985_7070__$1 = temp__4092__auto___7069__$1;if(cljs.core.chunked_seq_QMARK_(seq__6985_7070__$1))
{var c__4173__auto___7071 = cljs.core.chunk_first(seq__6985_7070__$1);{
var G__7072 = cljs.core.chunk_rest(seq__6985_7070__$1);
var G__7073 = c__4173__auto___7071;
var G__7074 = cljs.core.count(c__4173__auto___7071);
var G__7075 = 0;
seq__6985_7057 = G__7072;
chunk__6987_7058 = G__7073;
count__6988_7059 = G__7074;
i__6989_7060 = G__7075;
continue;
}
} else
{var vec__7005_7076 = cljs.core.first(seq__6985_7070__$1);var actual_type_7077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7005_7076,0,null);var factory_7078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7005_7076,1,null);var canonical_f_7079 = (cljs.core.truth_(selector_7008)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7007,selector_7008):cljs.core.identity).call(null,(factory_7078.cljs$core$IFn$_invoke$arity$1 ? factory_7078.cljs$core$IFn$_invoke$arity$1(f_7056) : factory_7078.call(null,f_7056)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7007,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7008,actual_type_7077,f_7056], null),canonical_f_7079], 0));
if(cljs.core.truth_(elem_7007.addEventListener))
{elem_7007.addEventListener(cljs.core.name(actual_type_7077),canonical_f_7079);
} else
{elem_7007.attachEvent(cljs.core.name(actual_type_7077),canonical_f_7079);
}
{
var G__7080 = cljs.core.next(seq__6985_7070__$1);
var G__7081 = null;
var G__7082 = 0;
var G__7083 = 0;
seq__6985_7057 = G__7080;
chunk__6987_7058 = G__7081;
count__6988_7059 = G__7082;
i__6989_7060 = G__7083;
continue;
}
}
} else
{}
}
break;
}
{
var G__7084 = cljs.core.next(seq__6984_7048__$1);
var G__7085 = null;
var G__7086 = 0;
var G__7087 = 0;
seq__6984_7009 = G__7084;
chunk__6991_7010 = G__7085;
count__6992_7011 = G__7086;
i__6993_7012 = G__7087;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__7088){
var elem_sel = cljs.core.first(arglist__7088);
var type_fs = cljs.core.rest(arglist__7088);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__7112_7135 = dommy.core.elem_and_selector(elem_sel);var elem_7136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7112_7135,0,null);var selector_7137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7112_7135,1,null);var seq__7113_7138 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__7120_7139 = null;var count__7121_7140 = 0;var i__7122_7141 = 0;while(true){
if((i__7122_7141 < count__7121_7140))
{var vec__7129_7142 = chunk__7120_7139.cljs$core$IIndexed$_nth$arity$2(null,i__7122_7141);var orig_type_7143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7129_7142,0,null);var f_7144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7129_7142,1,null);var seq__7123_7145 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7143,new cljs.core.PersistentArrayMap.fromArray([orig_type_7143,cljs.core.identity], true, false)));var chunk__7125_7146 = null;var count__7126_7147 = 0;var i__7127_7148 = 0;while(true){
if((i__7127_7148 < count__7126_7147))
{var vec__7130_7149 = chunk__7125_7146.cljs$core$IIndexed$_nth$arity$2(null,i__7127_7148);var actual_type_7150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7130_7149,0,null);var __7151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7130_7149,1,null);var keys_7152 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7137,actual_type_7150,f_7144], null);var canonical_f_7153 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7136),keys_7152);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7136,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7152], 0));
if(cljs.core.truth_(elem_7136.removeEventListener))
{elem_7136.removeEventListener(cljs.core.name(actual_type_7150),canonical_f_7153);
} else
{elem_7136.detachEvent(cljs.core.name(actual_type_7150),canonical_f_7153);
}
{
var G__7154 = seq__7123_7145;
var G__7155 = chunk__7125_7146;
var G__7156 = count__7126_7147;
var G__7157 = (i__7127_7148 + 1);
seq__7123_7145 = G__7154;
chunk__7125_7146 = G__7155;
count__7126_7147 = G__7156;
i__7127_7148 = G__7157;
continue;
}
} else
{var temp__4092__auto___7158 = cljs.core.seq(seq__7123_7145);if(temp__4092__auto___7158)
{var seq__7123_7159__$1 = temp__4092__auto___7158;if(cljs.core.chunked_seq_QMARK_(seq__7123_7159__$1))
{var c__4173__auto___7160 = cljs.core.chunk_first(seq__7123_7159__$1);{
var G__7161 = cljs.core.chunk_rest(seq__7123_7159__$1);
var G__7162 = c__4173__auto___7160;
var G__7163 = cljs.core.count(c__4173__auto___7160);
var G__7164 = 0;
seq__7123_7145 = G__7161;
chunk__7125_7146 = G__7162;
count__7126_7147 = G__7163;
i__7127_7148 = G__7164;
continue;
}
} else
{var vec__7131_7165 = cljs.core.first(seq__7123_7159__$1);var actual_type_7166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131_7165,0,null);var __7167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131_7165,1,null);var keys_7168 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7137,actual_type_7166,f_7144], null);var canonical_f_7169 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7136),keys_7168);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7136,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7168], 0));
if(cljs.core.truth_(elem_7136.removeEventListener))
{elem_7136.removeEventListener(cljs.core.name(actual_type_7166),canonical_f_7169);
} else
{elem_7136.detachEvent(cljs.core.name(actual_type_7166),canonical_f_7169);
}
{
var G__7170 = cljs.core.next(seq__7123_7159__$1);
var G__7171 = null;
var G__7172 = 0;
var G__7173 = 0;
seq__7123_7145 = G__7170;
chunk__7125_7146 = G__7171;
count__7126_7147 = G__7172;
i__7127_7148 = G__7173;
continue;
}
}
} else
{}
}
break;
}
{
var G__7174 = seq__7113_7138;
var G__7175 = chunk__7120_7139;
var G__7176 = count__7121_7140;
var G__7177 = (i__7122_7141 + 1);
seq__7113_7138 = G__7174;
chunk__7120_7139 = G__7175;
count__7121_7140 = G__7176;
i__7122_7141 = G__7177;
continue;
}
} else
{var temp__4092__auto___7178 = cljs.core.seq(seq__7113_7138);if(temp__4092__auto___7178)
{var seq__7113_7179__$1 = temp__4092__auto___7178;if(cljs.core.chunked_seq_QMARK_(seq__7113_7179__$1))
{var c__4173__auto___7180 = cljs.core.chunk_first(seq__7113_7179__$1);{
var G__7181 = cljs.core.chunk_rest(seq__7113_7179__$1);
var G__7182 = c__4173__auto___7180;
var G__7183 = cljs.core.count(c__4173__auto___7180);
var G__7184 = 0;
seq__7113_7138 = G__7181;
chunk__7120_7139 = G__7182;
count__7121_7140 = G__7183;
i__7122_7141 = G__7184;
continue;
}
} else
{var vec__7132_7185 = cljs.core.first(seq__7113_7179__$1);var orig_type_7186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132_7185,0,null);var f_7187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132_7185,1,null);var seq__7114_7188 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7186,new cljs.core.PersistentArrayMap.fromArray([orig_type_7186,cljs.core.identity], true, false)));var chunk__7116_7189 = null;var count__7117_7190 = 0;var i__7118_7191 = 0;while(true){
if((i__7118_7191 < count__7117_7190))
{var vec__7133_7192 = chunk__7116_7189.cljs$core$IIndexed$_nth$arity$2(null,i__7118_7191);var actual_type_7193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7133_7192,0,null);var __7194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7133_7192,1,null);var keys_7195 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7137,actual_type_7193,f_7187], null);var canonical_f_7196 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7136),keys_7195);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7136,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7195], 0));
if(cljs.core.truth_(elem_7136.removeEventListener))
{elem_7136.removeEventListener(cljs.core.name(actual_type_7193),canonical_f_7196);
} else
{elem_7136.detachEvent(cljs.core.name(actual_type_7193),canonical_f_7196);
}
{
var G__7197 = seq__7114_7188;
var G__7198 = chunk__7116_7189;
var G__7199 = count__7117_7190;
var G__7200 = (i__7118_7191 + 1);
seq__7114_7188 = G__7197;
chunk__7116_7189 = G__7198;
count__7117_7190 = G__7199;
i__7118_7191 = G__7200;
continue;
}
} else
{var temp__4092__auto___7201__$1 = cljs.core.seq(seq__7114_7188);if(temp__4092__auto___7201__$1)
{var seq__7114_7202__$1 = temp__4092__auto___7201__$1;if(cljs.core.chunked_seq_QMARK_(seq__7114_7202__$1))
{var c__4173__auto___7203 = cljs.core.chunk_first(seq__7114_7202__$1);{
var G__7204 = cljs.core.chunk_rest(seq__7114_7202__$1);
var G__7205 = c__4173__auto___7203;
var G__7206 = cljs.core.count(c__4173__auto___7203);
var G__7207 = 0;
seq__7114_7188 = G__7204;
chunk__7116_7189 = G__7205;
count__7117_7190 = G__7206;
i__7118_7191 = G__7207;
continue;
}
} else
{var vec__7134_7208 = cljs.core.first(seq__7114_7202__$1);var actual_type_7209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7134_7208,0,null);var __7210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7134_7208,1,null);var keys_7211 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7137,actual_type_7209,f_7187], null);var canonical_f_7212 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7136),keys_7211);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7136,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7211], 0));
if(cljs.core.truth_(elem_7136.removeEventListener))
{elem_7136.removeEventListener(cljs.core.name(actual_type_7209),canonical_f_7212);
} else
{elem_7136.detachEvent(cljs.core.name(actual_type_7209),canonical_f_7212);
}
{
var G__7213 = cljs.core.next(seq__7114_7202__$1);
var G__7214 = null;
var G__7215 = 0;
var G__7216 = 0;
seq__7114_7188 = G__7213;
chunk__7116_7189 = G__7214;
count__7117_7190 = G__7215;
i__7118_7191 = G__7216;
continue;
}
}
} else
{}
}
break;
}
{
var G__7217 = cljs.core.next(seq__7113_7179__$1);
var G__7218 = null;
var G__7219 = 0;
var G__7220 = 0;
seq__7113_7138 = G__7217;
chunk__7120_7139 = G__7218;
count__7121_7140 = G__7219;
i__7122_7141 = G__7220;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7221){
var elem_sel = cljs.core.first(arglist__7221);
var type_fs = cljs.core.rest(arglist__7221);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__7229_7236 = dommy.core.elem_and_selector(elem_sel);var elem_7237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7229_7236,0,null);var selector_7238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7229_7236,1,null);var seq__7230_7239 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__7231_7240 = null;var count__7232_7241 = 0;var i__7233_7242 = 0;while(true){
if((i__7233_7242 < count__7232_7241))
{var vec__7234_7243 = chunk__7231_7240.cljs$core$IIndexed$_nth$arity$2(null,i__7233_7242);var type_7244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7234_7243,0,null);var f_7245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7234_7243,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7244,((function (seq__7230_7239,chunk__7231_7240,count__7232_7241,i__7233_7242,vec__7234_7243,type_7244,f_7245){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7244,this_fn], 0));
return (f_7245.cljs$core$IFn$_invoke$arity$1 ? f_7245.cljs$core$IFn$_invoke$arity$1(e) : f_7245.call(null,e));
});})(seq__7230_7239,chunk__7231_7240,count__7232_7241,i__7233_7242,vec__7234_7243,type_7244,f_7245))
], 0));
{
var G__7246 = seq__7230_7239;
var G__7247 = chunk__7231_7240;
var G__7248 = count__7232_7241;
var G__7249 = (i__7233_7242 + 1);
seq__7230_7239 = G__7246;
chunk__7231_7240 = G__7247;
count__7232_7241 = G__7248;
i__7233_7242 = G__7249;
continue;
}
} else
{var temp__4092__auto___7250 = cljs.core.seq(seq__7230_7239);if(temp__4092__auto___7250)
{var seq__7230_7251__$1 = temp__4092__auto___7250;if(cljs.core.chunked_seq_QMARK_(seq__7230_7251__$1))
{var c__4173__auto___7252 = cljs.core.chunk_first(seq__7230_7251__$1);{
var G__7253 = cljs.core.chunk_rest(seq__7230_7251__$1);
var G__7254 = c__4173__auto___7252;
var G__7255 = cljs.core.count(c__4173__auto___7252);
var G__7256 = 0;
seq__7230_7239 = G__7253;
chunk__7231_7240 = G__7254;
count__7232_7241 = G__7255;
i__7233_7242 = G__7256;
continue;
}
} else
{var vec__7235_7257 = cljs.core.first(seq__7230_7251__$1);var type_7258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7235_7257,0,null);var f_7259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7235_7257,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7258,((function (seq__7230_7239,chunk__7231_7240,count__7232_7241,i__7233_7242,vec__7235_7257,type_7258,f_7259,seq__7230_7251__$1,temp__4092__auto___7250){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7258,this_fn], 0));
return (f_7259.cljs$core$IFn$_invoke$arity$1 ? f_7259.cljs$core$IFn$_invoke$arity$1(e) : f_7259.call(null,e));
});})(seq__7230_7239,chunk__7231_7240,count__7232_7241,i__7233_7242,vec__7235_7257,type_7258,f_7259,seq__7230_7251__$1,temp__4092__auto___7250))
], 0));
{
var G__7260 = cljs.core.next(seq__7230_7251__$1);
var G__7261 = null;
var G__7262 = 0;
var G__7263 = 0;
seq__7230_7239 = G__7260;
chunk__7231_7240 = G__7261;
count__7232_7241 = G__7262;
i__7233_7242 = G__7263;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7264){
var elem_sel = cljs.core.first(arglist__7264);
var type_fs = cljs.core.rest(arglist__7264);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__7265){var vec__7267 = p__7265;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7267,0,null);if(dommy.core.descendant_QMARK_(node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))], 0)))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3431__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name(event_type),true,true);
return node.dispatchEvent((update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(event) : update_event_BANG___$1.call(null,event)));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name(event_type))].join(''),(update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(document.createEventObject()) : update_event_BANG___$1.call(null,document.createEventObject())));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__7265 = null;if (arguments.length > 2) {
  p__7265 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__7265);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__7268){
var node = cljs.core.first(arglist__7268);
arglist__7268 = cljs.core.next(arglist__7268);
var event_type = cljs.core.first(arglist__7268);
var p__7265 = cljs.core.rest(arglist__7268);
return fire_BANG___delegate(node,event_type,p__7265);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
