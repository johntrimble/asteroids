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
var append_BANG___2 = (function (parent,child){var G__6881 = dommy.template.__GT_node_like(parent);G__6881.appendChild(dommy.template.__GT_node_like(child));
return G__6881;
});
var append_BANG___3 = (function() { 
var G__6886__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__6882_6887 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__6883_6888 = null;var count__6884_6889 = 0;var i__6885_6890 = 0;while(true){
if((i__6885_6890 < count__6884_6889))
{var c_6891 = chunk__6883_6888.cljs$core$IIndexed$_nth$arity$2(null,i__6885_6890);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6891);
{
var G__6892 = seq__6882_6887;
var G__6893 = chunk__6883_6888;
var G__6894 = count__6884_6889;
var G__6895 = (i__6885_6890 + 1);
seq__6882_6887 = G__6892;
chunk__6883_6888 = G__6893;
count__6884_6889 = G__6894;
i__6885_6890 = G__6895;
continue;
}
} else
{var temp__4092__auto___6896 = cljs.core.seq(seq__6882_6887);if(temp__4092__auto___6896)
{var seq__6882_6897__$1 = temp__4092__auto___6896;if(cljs.core.chunked_seq_QMARK_(seq__6882_6897__$1))
{var c__4173__auto___6898 = cljs.core.chunk_first(seq__6882_6897__$1);{
var G__6899 = cljs.core.chunk_rest(seq__6882_6897__$1);
var G__6900 = c__4173__auto___6898;
var G__6901 = cljs.core.count(c__4173__auto___6898);
var G__6902 = 0;
seq__6882_6887 = G__6899;
chunk__6883_6888 = G__6900;
count__6884_6889 = G__6901;
i__6885_6890 = G__6902;
continue;
}
} else
{var c_6903 = cljs.core.first(seq__6882_6897__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6903);
{
var G__6904 = cljs.core.next(seq__6882_6897__$1);
var G__6905 = null;
var G__6906 = 0;
var G__6907 = 0;
seq__6882_6887 = G__6904;
chunk__6883_6888 = G__6905;
count__6884_6889 = G__6906;
i__6885_6890 = G__6907;
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
var G__6886 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6886__delegate.call(this,parent,child,more_children);};
G__6886.cljs$lang$maxFixedArity = 2;
G__6886.cljs$lang$applyTo = (function (arglist__6908){
var parent = cljs.core.first(arglist__6908);
arglist__6908 = cljs.core.next(arglist__6908);
var child = cljs.core.first(arglist__6908);
var more_children = cljs.core.rest(arglist__6908);
return G__6886__delegate(parent,child,more_children);
});
G__6886.cljs$core$IFn$_invoke$arity$variadic = G__6886__delegate;
return G__6886;
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
var G__6917__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__6913_6918 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__6914_6919 = null;var count__6915_6920 = 0;var i__6916_6921 = 0;while(true){
if((i__6916_6921 < count__6915_6920))
{var c_6922 = chunk__6914_6919.cljs$core$IIndexed$_nth$arity$2(null,i__6916_6921);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6922);
{
var G__6923 = seq__6913_6918;
var G__6924 = chunk__6914_6919;
var G__6925 = count__6915_6920;
var G__6926 = (i__6916_6921 + 1);
seq__6913_6918 = G__6923;
chunk__6914_6919 = G__6924;
count__6915_6920 = G__6925;
i__6916_6921 = G__6926;
continue;
}
} else
{var temp__4092__auto___6927 = cljs.core.seq(seq__6913_6918);if(temp__4092__auto___6927)
{var seq__6913_6928__$1 = temp__4092__auto___6927;if(cljs.core.chunked_seq_QMARK_(seq__6913_6928__$1))
{var c__4173__auto___6929 = cljs.core.chunk_first(seq__6913_6928__$1);{
var G__6930 = cljs.core.chunk_rest(seq__6913_6928__$1);
var G__6931 = c__4173__auto___6929;
var G__6932 = cljs.core.count(c__4173__auto___6929);
var G__6933 = 0;
seq__6913_6918 = G__6930;
chunk__6914_6919 = G__6931;
count__6915_6920 = G__6932;
i__6916_6921 = G__6933;
continue;
}
} else
{var c_6934 = cljs.core.first(seq__6913_6928__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_6934);
{
var G__6935 = cljs.core.next(seq__6913_6928__$1);
var G__6936 = null;
var G__6937 = 0;
var G__6938 = 0;
seq__6913_6918 = G__6935;
chunk__6914_6919 = G__6936;
count__6915_6920 = G__6937;
i__6916_6921 = G__6938;
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
var G__6917 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6917__delegate.call(this,parent,child,more_children);};
G__6917.cljs$lang$maxFixedArity = 2;
G__6917.cljs$lang$applyTo = (function (arglist__6939){
var parent = cljs.core.first(arglist__6939);
arglist__6939 = cljs.core.next(arglist__6939);
var child = cljs.core.first(arglist__6939);
var more_children = cljs.core.rest(arglist__6939);
return G__6917__delegate(parent,child,more_children);
});
G__6917.cljs$core$IFn$_invoke$arity$variadic = G__6917__delegate;
return G__6917;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___6940 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___6940))
{var next_6941 = temp__4090__auto___6940;parent.insertBefore(actual_node,next_6941);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6943 = dommy.template.__GT_node_like(parent);G__6943.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__6943,node_like);
return G__6943;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__6945 = elem__$1.parentNode;G__6945.removeChild(elem__$1);
return G__6945;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$91,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6951){var vec__6952 = p__6951;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6952,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6952,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t6953 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t6953 = (function (v,k,vec__6952,p__6951,container,key_selectors_map,template,selector_map,meta6954){
this.v = v;
this.k = k;
this.vec__6952 = vec__6952;
this.p__6951 = p__6951;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta6954 = meta6954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t6953.cljs$lang$type = true;
dommy.core.t6953.cljs$lang$ctorStr = "dommy.core/t6953";
dommy.core.t6953.cljs$lang$ctorPrWriter = (function (this__3993__auto__,writer__3994__auto__,opt__3995__auto__){return cljs.core._write(writer__3994__auto__,"dommy.core/t6953");
});
dommy.core.t6953.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t6953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6955){var self__ = this;
var _6955__$1 = this;return self__.meta6954;
});
dommy.core.t6953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6955,meta6954__$1){var self__ = this;
var _6955__$1 = this;return (new dommy.core.t6953(self__.v,self__.k,self__.vec__6952,self__.p__6951,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta6954__$1));
});
dommy.core.__GT_t6953 = (function __GT_t6953(v__$1,k__$1,vec__6952__$1,p__6951__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6954){return (new dommy.core.t6953(v__$1,k__$1,vec__6952__$1,p__6951__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6954));
});
}
return (new dommy.core.t6953(v,k,vec__6952,p__6951,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__6956_SHARP_){return p1__6956_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__6957_SHARP_){return !((p1__6957_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6958){var vec__6959 = p__6958;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6959,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6959,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3431__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3431__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6960){
var elem = cljs.core.first(arglist__6960);
arglist__6960 = cljs.core.next(arglist__6960);
var f = cljs.core.first(arglist__6960);
var args = cljs.core.rest(arglist__6960);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__6961_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__6961_SHARP_));
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
var vec__6985_7008 = dommy.core.elem_and_selector(elem_sel);var elem_7009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6985_7008,0,null);var selector_7010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6985_7008,1,null);var seq__6986_7011 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__6993_7012 = null;var count__6994_7013 = 0;var i__6995_7014 = 0;while(true){
if((i__6995_7014 < count__6994_7013))
{var vec__7002_7015 = chunk__6993_7012.cljs$core$IIndexed$_nth$arity$2(null,i__6995_7014);var orig_type_7016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002_7015,0,null);var f_7017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002_7015,1,null);var seq__6996_7018 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7016,new cljs.core.PersistentArrayMap.fromArray([orig_type_7016,cljs.core.identity], true, false)));var chunk__6998_7019 = null;var count__6999_7020 = 0;var i__7000_7021 = 0;while(true){
if((i__7000_7021 < count__6999_7020))
{var vec__7003_7022 = chunk__6998_7019.cljs$core$IIndexed$_nth$arity$2(null,i__7000_7021);var actual_type_7023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_7022,0,null);var factory_7024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_7022,1,null);var canonical_f_7025 = (cljs.core.truth_(selector_7010)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7009,selector_7010):cljs.core.identity).call(null,(factory_7024.cljs$core$IFn$_invoke$arity$1 ? factory_7024.cljs$core$IFn$_invoke$arity$1(f_7017) : factory_7024.call(null,f_7017)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7009,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7010,actual_type_7023,f_7017], null),canonical_f_7025], 0));
if(cljs.core.truth_(elem_7009.addEventListener))
{elem_7009.addEventListener(cljs.core.name(actual_type_7023),canonical_f_7025);
} else
{elem_7009.attachEvent(cljs.core.name(actual_type_7023),canonical_f_7025);
}
{
var G__7026 = seq__6996_7018;
var G__7027 = chunk__6998_7019;
var G__7028 = count__6999_7020;
var G__7029 = (i__7000_7021 + 1);
seq__6996_7018 = G__7026;
chunk__6998_7019 = G__7027;
count__6999_7020 = G__7028;
i__7000_7021 = G__7029;
continue;
}
} else
{var temp__4092__auto___7030 = cljs.core.seq(seq__6996_7018);if(temp__4092__auto___7030)
{var seq__6996_7031__$1 = temp__4092__auto___7030;if(cljs.core.chunked_seq_QMARK_(seq__6996_7031__$1))
{var c__4173__auto___7032 = cljs.core.chunk_first(seq__6996_7031__$1);{
var G__7033 = cljs.core.chunk_rest(seq__6996_7031__$1);
var G__7034 = c__4173__auto___7032;
var G__7035 = cljs.core.count(c__4173__auto___7032);
var G__7036 = 0;
seq__6996_7018 = G__7033;
chunk__6998_7019 = G__7034;
count__6999_7020 = G__7035;
i__7000_7021 = G__7036;
continue;
}
} else
{var vec__7004_7037 = cljs.core.first(seq__6996_7031__$1);var actual_type_7038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004_7037,0,null);var factory_7039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004_7037,1,null);var canonical_f_7040 = (cljs.core.truth_(selector_7010)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7009,selector_7010):cljs.core.identity).call(null,(factory_7039.cljs$core$IFn$_invoke$arity$1 ? factory_7039.cljs$core$IFn$_invoke$arity$1(f_7017) : factory_7039.call(null,f_7017)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7009,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7010,actual_type_7038,f_7017], null),canonical_f_7040], 0));
if(cljs.core.truth_(elem_7009.addEventListener))
{elem_7009.addEventListener(cljs.core.name(actual_type_7038),canonical_f_7040);
} else
{elem_7009.attachEvent(cljs.core.name(actual_type_7038),canonical_f_7040);
}
{
var G__7041 = cljs.core.next(seq__6996_7031__$1);
var G__7042 = null;
var G__7043 = 0;
var G__7044 = 0;
seq__6996_7018 = G__7041;
chunk__6998_7019 = G__7042;
count__6999_7020 = G__7043;
i__7000_7021 = G__7044;
continue;
}
}
} else
{}
}
break;
}
{
var G__7045 = seq__6986_7011;
var G__7046 = chunk__6993_7012;
var G__7047 = count__6994_7013;
var G__7048 = (i__6995_7014 + 1);
seq__6986_7011 = G__7045;
chunk__6993_7012 = G__7046;
count__6994_7013 = G__7047;
i__6995_7014 = G__7048;
continue;
}
} else
{var temp__4092__auto___7049 = cljs.core.seq(seq__6986_7011);if(temp__4092__auto___7049)
{var seq__6986_7050__$1 = temp__4092__auto___7049;if(cljs.core.chunked_seq_QMARK_(seq__6986_7050__$1))
{var c__4173__auto___7051 = cljs.core.chunk_first(seq__6986_7050__$1);{
var G__7052 = cljs.core.chunk_rest(seq__6986_7050__$1);
var G__7053 = c__4173__auto___7051;
var G__7054 = cljs.core.count(c__4173__auto___7051);
var G__7055 = 0;
seq__6986_7011 = G__7052;
chunk__6993_7012 = G__7053;
count__6994_7013 = G__7054;
i__6995_7014 = G__7055;
continue;
}
} else
{var vec__7005_7056 = cljs.core.first(seq__6986_7050__$1);var orig_type_7057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7005_7056,0,null);var f_7058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7005_7056,1,null);var seq__6987_7059 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7057,new cljs.core.PersistentArrayMap.fromArray([orig_type_7057,cljs.core.identity], true, false)));var chunk__6989_7060 = null;var count__6990_7061 = 0;var i__6991_7062 = 0;while(true){
if((i__6991_7062 < count__6990_7061))
{var vec__7006_7063 = chunk__6989_7060.cljs$core$IIndexed$_nth$arity$2(null,i__6991_7062);var actual_type_7064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006_7063,0,null);var factory_7065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006_7063,1,null);var canonical_f_7066 = (cljs.core.truth_(selector_7010)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7009,selector_7010):cljs.core.identity).call(null,(factory_7065.cljs$core$IFn$_invoke$arity$1 ? factory_7065.cljs$core$IFn$_invoke$arity$1(f_7058) : factory_7065.call(null,f_7058)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7009,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7010,actual_type_7064,f_7058], null),canonical_f_7066], 0));
if(cljs.core.truth_(elem_7009.addEventListener))
{elem_7009.addEventListener(cljs.core.name(actual_type_7064),canonical_f_7066);
} else
{elem_7009.attachEvent(cljs.core.name(actual_type_7064),canonical_f_7066);
}
{
var G__7067 = seq__6987_7059;
var G__7068 = chunk__6989_7060;
var G__7069 = count__6990_7061;
var G__7070 = (i__6991_7062 + 1);
seq__6987_7059 = G__7067;
chunk__6989_7060 = G__7068;
count__6990_7061 = G__7069;
i__6991_7062 = G__7070;
continue;
}
} else
{var temp__4092__auto___7071__$1 = cljs.core.seq(seq__6987_7059);if(temp__4092__auto___7071__$1)
{var seq__6987_7072__$1 = temp__4092__auto___7071__$1;if(cljs.core.chunked_seq_QMARK_(seq__6987_7072__$1))
{var c__4173__auto___7073 = cljs.core.chunk_first(seq__6987_7072__$1);{
var G__7074 = cljs.core.chunk_rest(seq__6987_7072__$1);
var G__7075 = c__4173__auto___7073;
var G__7076 = cljs.core.count(c__4173__auto___7073);
var G__7077 = 0;
seq__6987_7059 = G__7074;
chunk__6989_7060 = G__7075;
count__6990_7061 = G__7076;
i__6991_7062 = G__7077;
continue;
}
} else
{var vec__7007_7078 = cljs.core.first(seq__6987_7072__$1);var actual_type_7079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7007_7078,0,null);var factory_7080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7007_7078,1,null);var canonical_f_7081 = (cljs.core.truth_(selector_7010)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_7009,selector_7010):cljs.core.identity).call(null,(factory_7080.cljs$core$IFn$_invoke$arity$1 ? factory_7080.cljs$core$IFn$_invoke$arity$1(f_7058) : factory_7080.call(null,f_7058)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7009,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7010,actual_type_7079,f_7058], null),canonical_f_7081], 0));
if(cljs.core.truth_(elem_7009.addEventListener))
{elem_7009.addEventListener(cljs.core.name(actual_type_7079),canonical_f_7081);
} else
{elem_7009.attachEvent(cljs.core.name(actual_type_7079),canonical_f_7081);
}
{
var G__7082 = cljs.core.next(seq__6987_7072__$1);
var G__7083 = null;
var G__7084 = 0;
var G__7085 = 0;
seq__6987_7059 = G__7082;
chunk__6989_7060 = G__7083;
count__6990_7061 = G__7084;
i__6991_7062 = G__7085;
continue;
}
}
} else
{}
}
break;
}
{
var G__7086 = cljs.core.next(seq__6986_7050__$1);
var G__7087 = null;
var G__7088 = 0;
var G__7089 = 0;
seq__6986_7011 = G__7086;
chunk__6993_7012 = G__7087;
count__6994_7013 = G__7088;
i__6995_7014 = G__7089;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__7090){
var elem_sel = cljs.core.first(arglist__7090);
var type_fs = cljs.core.rest(arglist__7090);
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
var vec__7114_7137 = dommy.core.elem_and_selector(elem_sel);var elem_7138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7114_7137,0,null);var selector_7139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7114_7137,1,null);var seq__7115_7140 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__7122_7141 = null;var count__7123_7142 = 0;var i__7124_7143 = 0;while(true){
if((i__7124_7143 < count__7123_7142))
{var vec__7131_7144 = chunk__7122_7141.cljs$core$IIndexed$_nth$arity$2(null,i__7124_7143);var orig_type_7145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131_7144,0,null);var f_7146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131_7144,1,null);var seq__7125_7147 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7145,new cljs.core.PersistentArrayMap.fromArray([orig_type_7145,cljs.core.identity], true, false)));var chunk__7127_7148 = null;var count__7128_7149 = 0;var i__7129_7150 = 0;while(true){
if((i__7129_7150 < count__7128_7149))
{var vec__7132_7151 = chunk__7127_7148.cljs$core$IIndexed$_nth$arity$2(null,i__7129_7150);var actual_type_7152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132_7151,0,null);var __7153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132_7151,1,null);var keys_7154 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7139,actual_type_7152,f_7146], null);var canonical_f_7155 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7138),keys_7154);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7138,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7154], 0));
if(cljs.core.truth_(elem_7138.removeEventListener))
{elem_7138.removeEventListener(cljs.core.name(actual_type_7152),canonical_f_7155);
} else
{elem_7138.detachEvent(cljs.core.name(actual_type_7152),canonical_f_7155);
}
{
var G__7156 = seq__7125_7147;
var G__7157 = chunk__7127_7148;
var G__7158 = count__7128_7149;
var G__7159 = (i__7129_7150 + 1);
seq__7125_7147 = G__7156;
chunk__7127_7148 = G__7157;
count__7128_7149 = G__7158;
i__7129_7150 = G__7159;
continue;
}
} else
{var temp__4092__auto___7160 = cljs.core.seq(seq__7125_7147);if(temp__4092__auto___7160)
{var seq__7125_7161__$1 = temp__4092__auto___7160;if(cljs.core.chunked_seq_QMARK_(seq__7125_7161__$1))
{var c__4173__auto___7162 = cljs.core.chunk_first(seq__7125_7161__$1);{
var G__7163 = cljs.core.chunk_rest(seq__7125_7161__$1);
var G__7164 = c__4173__auto___7162;
var G__7165 = cljs.core.count(c__4173__auto___7162);
var G__7166 = 0;
seq__7125_7147 = G__7163;
chunk__7127_7148 = G__7164;
count__7128_7149 = G__7165;
i__7129_7150 = G__7166;
continue;
}
} else
{var vec__7133_7167 = cljs.core.first(seq__7125_7161__$1);var actual_type_7168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7133_7167,0,null);var __7169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7133_7167,1,null);var keys_7170 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7139,actual_type_7168,f_7146], null);var canonical_f_7171 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7138),keys_7170);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7138,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7170], 0));
if(cljs.core.truth_(elem_7138.removeEventListener))
{elem_7138.removeEventListener(cljs.core.name(actual_type_7168),canonical_f_7171);
} else
{elem_7138.detachEvent(cljs.core.name(actual_type_7168),canonical_f_7171);
}
{
var G__7172 = cljs.core.next(seq__7125_7161__$1);
var G__7173 = null;
var G__7174 = 0;
var G__7175 = 0;
seq__7125_7147 = G__7172;
chunk__7127_7148 = G__7173;
count__7128_7149 = G__7174;
i__7129_7150 = G__7175;
continue;
}
}
} else
{}
}
break;
}
{
var G__7176 = seq__7115_7140;
var G__7177 = chunk__7122_7141;
var G__7178 = count__7123_7142;
var G__7179 = (i__7124_7143 + 1);
seq__7115_7140 = G__7176;
chunk__7122_7141 = G__7177;
count__7123_7142 = G__7178;
i__7124_7143 = G__7179;
continue;
}
} else
{var temp__4092__auto___7180 = cljs.core.seq(seq__7115_7140);if(temp__4092__auto___7180)
{var seq__7115_7181__$1 = temp__4092__auto___7180;if(cljs.core.chunked_seq_QMARK_(seq__7115_7181__$1))
{var c__4173__auto___7182 = cljs.core.chunk_first(seq__7115_7181__$1);{
var G__7183 = cljs.core.chunk_rest(seq__7115_7181__$1);
var G__7184 = c__4173__auto___7182;
var G__7185 = cljs.core.count(c__4173__auto___7182);
var G__7186 = 0;
seq__7115_7140 = G__7183;
chunk__7122_7141 = G__7184;
count__7123_7142 = G__7185;
i__7124_7143 = G__7186;
continue;
}
} else
{var vec__7134_7187 = cljs.core.first(seq__7115_7181__$1);var orig_type_7188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7134_7187,0,null);var f_7189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7134_7187,1,null);var seq__7116_7190 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_7188,new cljs.core.PersistentArrayMap.fromArray([orig_type_7188,cljs.core.identity], true, false)));var chunk__7118_7191 = null;var count__7119_7192 = 0;var i__7120_7193 = 0;while(true){
if((i__7120_7193 < count__7119_7192))
{var vec__7135_7194 = chunk__7118_7191.cljs$core$IIndexed$_nth$arity$2(null,i__7120_7193);var actual_type_7195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135_7194,0,null);var __7196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135_7194,1,null);var keys_7197 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7139,actual_type_7195,f_7189], null);var canonical_f_7198 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7138),keys_7197);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7138,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7197], 0));
if(cljs.core.truth_(elem_7138.removeEventListener))
{elem_7138.removeEventListener(cljs.core.name(actual_type_7195),canonical_f_7198);
} else
{elem_7138.detachEvent(cljs.core.name(actual_type_7195),canonical_f_7198);
}
{
var G__7199 = seq__7116_7190;
var G__7200 = chunk__7118_7191;
var G__7201 = count__7119_7192;
var G__7202 = (i__7120_7193 + 1);
seq__7116_7190 = G__7199;
chunk__7118_7191 = G__7200;
count__7119_7192 = G__7201;
i__7120_7193 = G__7202;
continue;
}
} else
{var temp__4092__auto___7203__$1 = cljs.core.seq(seq__7116_7190);if(temp__4092__auto___7203__$1)
{var seq__7116_7204__$1 = temp__4092__auto___7203__$1;if(cljs.core.chunked_seq_QMARK_(seq__7116_7204__$1))
{var c__4173__auto___7205 = cljs.core.chunk_first(seq__7116_7204__$1);{
var G__7206 = cljs.core.chunk_rest(seq__7116_7204__$1);
var G__7207 = c__4173__auto___7205;
var G__7208 = cljs.core.count(c__4173__auto___7205);
var G__7209 = 0;
seq__7116_7190 = G__7206;
chunk__7118_7191 = G__7207;
count__7119_7192 = G__7208;
i__7120_7193 = G__7209;
continue;
}
} else
{var vec__7136_7210 = cljs.core.first(seq__7116_7204__$1);var actual_type_7211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7136_7210,0,null);var __7212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7136_7210,1,null);var keys_7213 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7139,actual_type_7211,f_7189], null);var canonical_f_7214 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_7138),keys_7213);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_7138,dommy.utils.dissoc_in,cljs.core.array_seq([keys_7213], 0));
if(cljs.core.truth_(elem_7138.removeEventListener))
{elem_7138.removeEventListener(cljs.core.name(actual_type_7211),canonical_f_7214);
} else
{elem_7138.detachEvent(cljs.core.name(actual_type_7211),canonical_f_7214);
}
{
var G__7215 = cljs.core.next(seq__7116_7204__$1);
var G__7216 = null;
var G__7217 = 0;
var G__7218 = 0;
seq__7116_7190 = G__7215;
chunk__7118_7191 = G__7216;
count__7119_7192 = G__7217;
i__7120_7193 = G__7218;
continue;
}
}
} else
{}
}
break;
}
{
var G__7219 = cljs.core.next(seq__7115_7181__$1);
var G__7220 = null;
var G__7221 = 0;
var G__7222 = 0;
seq__7115_7140 = G__7219;
chunk__7122_7141 = G__7220;
count__7123_7142 = G__7221;
i__7124_7143 = G__7222;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7223){
var elem_sel = cljs.core.first(arglist__7223);
var type_fs = cljs.core.rest(arglist__7223);
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
var vec__7231_7238 = dommy.core.elem_and_selector(elem_sel);var elem_7239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7231_7238,0,null);var selector_7240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7231_7238,1,null);var seq__7232_7241 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__7233_7242 = null;var count__7234_7243 = 0;var i__7235_7244 = 0;while(true){
if((i__7235_7244 < count__7234_7243))
{var vec__7236_7245 = chunk__7233_7242.cljs$core$IIndexed$_nth$arity$2(null,i__7235_7244);var type_7246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7236_7245,0,null);var f_7247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7236_7245,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7246,((function (seq__7232_7241,chunk__7233_7242,count__7234_7243,i__7235_7244,vec__7236_7245,type_7246,f_7247){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7246,this_fn], 0));
return (f_7247.cljs$core$IFn$_invoke$arity$1 ? f_7247.cljs$core$IFn$_invoke$arity$1(e) : f_7247.call(null,e));
});})(seq__7232_7241,chunk__7233_7242,count__7234_7243,i__7235_7244,vec__7236_7245,type_7246,f_7247))
], 0));
{
var G__7248 = seq__7232_7241;
var G__7249 = chunk__7233_7242;
var G__7250 = count__7234_7243;
var G__7251 = (i__7235_7244 + 1);
seq__7232_7241 = G__7248;
chunk__7233_7242 = G__7249;
count__7234_7243 = G__7250;
i__7235_7244 = G__7251;
continue;
}
} else
{var temp__4092__auto___7252 = cljs.core.seq(seq__7232_7241);if(temp__4092__auto___7252)
{var seq__7232_7253__$1 = temp__4092__auto___7252;if(cljs.core.chunked_seq_QMARK_(seq__7232_7253__$1))
{var c__4173__auto___7254 = cljs.core.chunk_first(seq__7232_7253__$1);{
var G__7255 = cljs.core.chunk_rest(seq__7232_7253__$1);
var G__7256 = c__4173__auto___7254;
var G__7257 = cljs.core.count(c__4173__auto___7254);
var G__7258 = 0;
seq__7232_7241 = G__7255;
chunk__7233_7242 = G__7256;
count__7234_7243 = G__7257;
i__7235_7244 = G__7258;
continue;
}
} else
{var vec__7237_7259 = cljs.core.first(seq__7232_7253__$1);var type_7260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7237_7259,0,null);var f_7261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7237_7259,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7260,((function (seq__7232_7241,chunk__7233_7242,count__7234_7243,i__7235_7244,vec__7237_7259,type_7260,f_7261,seq__7232_7253__$1,temp__4092__auto___7252){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_7260,this_fn], 0));
return (f_7261.cljs$core$IFn$_invoke$arity$1 ? f_7261.cljs$core$IFn$_invoke$arity$1(e) : f_7261.call(null,e));
});})(seq__7232_7241,chunk__7233_7242,count__7234_7243,i__7235_7244,vec__7237_7259,type_7260,f_7261,seq__7232_7253__$1,temp__4092__auto___7252))
], 0));
{
var G__7262 = cljs.core.next(seq__7232_7253__$1);
var G__7263 = null;
var G__7264 = 0;
var G__7265 = 0;
seq__7232_7241 = G__7262;
chunk__7233_7242 = G__7263;
count__7234_7243 = G__7264;
i__7235_7244 = G__7265;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7266){
var elem_sel = cljs.core.first(arglist__7266);
var type_fs = cljs.core.rest(arglist__7266);
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
var fire_BANG___delegate = function (node,event_type,p__7267){var vec__7269 = p__7267;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7269,0,null);if(dommy.core.descendant_QMARK_(node,document.documentElement))
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
var p__7267 = null;if (arguments.length > 2) {
  p__7267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__7267);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__7270){
var node = cljs.core.first(arglist__7270);
arglist__7270 = cljs.core.next(arglist__7270);
var event_type = cljs.core.first(arglist__7270);
var p__7267 = cljs.core.rest(arglist__7270);
return fire_BANG___delegate(node,event_type,p__7267);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
