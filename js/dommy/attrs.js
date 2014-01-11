// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3419__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3419__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3419__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__7423 = (i + class$.length);
start_from = G__7423;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.seq(classes__$1))
{var temp__4090__auto___7448 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7448))
{var class_list_7449 = temp__4090__auto___7448;var seq__7436_7450 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__7437_7451 = null;var count__7438_7452 = 0;var i__7439_7453 = 0;while(true){
if((i__7439_7453 < count__7438_7452))
{var class_7454 = chunk__7437_7451.cljs$core$IIndexed$_nth$arity$2(null,i__7439_7453);class_list_7449.add(class_7454);
{
var G__7455 = seq__7436_7450;
var G__7456 = chunk__7437_7451;
var G__7457 = count__7438_7452;
var G__7458 = (i__7439_7453 + 1);
seq__7436_7450 = G__7455;
chunk__7437_7451 = G__7456;
count__7438_7452 = G__7457;
i__7439_7453 = G__7458;
continue;
}
} else
{var temp__4092__auto___7459 = cljs.core.seq(seq__7436_7450);if(temp__4092__auto___7459)
{var seq__7436_7460__$1 = temp__4092__auto___7459;if(cljs.core.chunked_seq_QMARK_(seq__7436_7460__$1))
{var c__4173__auto___7461 = cljs.core.chunk_first(seq__7436_7460__$1);{
var G__7462 = cljs.core.chunk_rest(seq__7436_7460__$1);
var G__7463 = c__4173__auto___7461;
var G__7464 = cljs.core.count(c__4173__auto___7461);
var G__7465 = 0;
seq__7436_7450 = G__7462;
chunk__7437_7451 = G__7463;
count__7438_7452 = G__7464;
i__7439_7453 = G__7465;
continue;
}
} else
{var class_7466 = cljs.core.first(seq__7436_7460__$1);class_list_7449.add(class_7466);
{
var G__7467 = cljs.core.next(seq__7436_7460__$1);
var G__7468 = null;
var G__7469 = 0;
var G__7470 = 0;
seq__7436_7450 = G__7467;
chunk__7437_7451 = G__7468;
count__7438_7452 = G__7469;
i__7439_7453 = G__7470;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7471 = elem__$1.className;var seq__7440_7472 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__7441_7473 = null;var count__7442_7474 = 0;var i__7443_7475 = 0;while(true){
if((i__7443_7475 < count__7442_7474))
{var class_7476 = chunk__7441_7473.cljs$core$IIndexed$_nth$arity$2(null,i__7443_7475);if(cljs.core.truth_(dommy.attrs.class_index(class_name_7471,class_7476)))
{} else
{elem__$1.className = (((class_name_7471 === ""))?class_7476:[cljs.core.str(class_name_7471),cljs.core.str(" "),cljs.core.str(class_7476)].join(''));
}
{
var G__7477 = seq__7440_7472;
var G__7478 = chunk__7441_7473;
var G__7479 = count__7442_7474;
var G__7480 = (i__7443_7475 + 1);
seq__7440_7472 = G__7477;
chunk__7441_7473 = G__7478;
count__7442_7474 = G__7479;
i__7443_7475 = G__7480;
continue;
}
} else
{var temp__4092__auto___7481 = cljs.core.seq(seq__7440_7472);if(temp__4092__auto___7481)
{var seq__7440_7482__$1 = temp__4092__auto___7481;if(cljs.core.chunked_seq_QMARK_(seq__7440_7482__$1))
{var c__4173__auto___7483 = cljs.core.chunk_first(seq__7440_7482__$1);{
var G__7484 = cljs.core.chunk_rest(seq__7440_7482__$1);
var G__7485 = c__4173__auto___7483;
var G__7486 = cljs.core.count(c__4173__auto___7483);
var G__7487 = 0;
seq__7440_7472 = G__7484;
chunk__7441_7473 = G__7485;
count__7442_7474 = G__7486;
i__7443_7475 = G__7487;
continue;
}
} else
{var class_7488 = cljs.core.first(seq__7440_7482__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_7471,class_7488)))
{} else
{elem__$1.className = (((class_name_7471 === ""))?class_7488:[cljs.core.str(class_name_7471),cljs.core.str(" "),cljs.core.str(class_7488)].join(''));
}
{
var G__7489 = cljs.core.next(seq__7440_7482__$1);
var G__7490 = null;
var G__7491 = 0;
var G__7492 = 0;
seq__7440_7472 = G__7489;
chunk__7441_7473 = G__7490;
count__7442_7474 = G__7491;
i__7443_7475 = G__7492;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__7493__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7444_7494 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__7445_7495 = null;var count__7446_7496 = 0;var i__7447_7497 = 0;while(true){
if((i__7447_7497 < count__7446_7496))
{var c_7498 = chunk__7445_7495.cljs$core$IIndexed$_nth$arity$2(null,i__7447_7497);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_7498);
{
var G__7499 = seq__7444_7494;
var G__7500 = chunk__7445_7495;
var G__7501 = count__7446_7496;
var G__7502 = (i__7447_7497 + 1);
seq__7444_7494 = G__7499;
chunk__7445_7495 = G__7500;
count__7446_7496 = G__7501;
i__7447_7497 = G__7502;
continue;
}
} else
{var temp__4092__auto___7503 = cljs.core.seq(seq__7444_7494);if(temp__4092__auto___7503)
{var seq__7444_7504__$1 = temp__4092__auto___7503;if(cljs.core.chunked_seq_QMARK_(seq__7444_7504__$1))
{var c__4173__auto___7505 = cljs.core.chunk_first(seq__7444_7504__$1);{
var G__7506 = cljs.core.chunk_rest(seq__7444_7504__$1);
var G__7507 = c__4173__auto___7505;
var G__7508 = cljs.core.count(c__4173__auto___7505);
var G__7509 = 0;
seq__7444_7494 = G__7506;
chunk__7445_7495 = G__7507;
count__7446_7496 = G__7508;
i__7447_7497 = G__7509;
continue;
}
} else
{var c_7510 = cljs.core.first(seq__7444_7504__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_7510);
{
var G__7511 = cljs.core.next(seq__7444_7504__$1);
var G__7512 = null;
var G__7513 = 0;
var G__7514 = 0;
seq__7444_7494 = G__7511;
chunk__7445_7495 = G__7512;
count__7446_7496 = G__7513;
i__7447_7497 = G__7514;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7493 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7493__delegate.call(this,elem,classes,more_classes);};
G__7493.cljs$lang$maxFixedArity = 2;
G__7493.cljs$lang$applyTo = (function (arglist__7515){
var elem = cljs.core.first(arglist__7515);
arglist__7515 = cljs.core.next(arglist__7515);
var classes = cljs.core.first(arglist__7515);
var more_classes = cljs.core.rest(arglist__7515);
return G__7493__delegate(elem,classes,more_classes);
});
G__7493.cljs$core$IFn$_invoke$arity$variadic = G__7493__delegate;
return G__7493;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__7516 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__7516;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___7525 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7525))
{var class_list_7526 = temp__4090__auto___7525;class_list_7526.remove(class$__$1);
} else
{var class_name_7527 = elem__$1.className;var new_class_name_7528 = dommy.attrs.remove_class_str(class_name_7527,class$__$1);if((class_name_7527 === new_class_name_7528))
{} else
{elem__$1.className = new_class_name_7528;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7529__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7521 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__7522 = null;var count__7523 = 0;var i__7524 = 0;while(true){
if((i__7524 < count__7523))
{var c = chunk__7522.cljs$core$IIndexed$_nth$arity$2(null,i__7524);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__7530 = seq__7521;
var G__7531 = chunk__7522;
var G__7532 = count__7523;
var G__7533 = (i__7524 + 1);
seq__7521 = G__7530;
chunk__7522 = G__7531;
count__7523 = G__7532;
i__7524 = G__7533;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__7521);if(temp__4092__auto__)
{var seq__7521__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__7521__$1))
{var c__4173__auto__ = cljs.core.chunk_first(seq__7521__$1);{
var G__7534 = cljs.core.chunk_rest(seq__7521__$1);
var G__7535 = c__4173__auto__;
var G__7536 = cljs.core.count(c__4173__auto__);
var G__7537 = 0;
seq__7521 = G__7534;
chunk__7522 = G__7535;
count__7523 = G__7536;
i__7524 = G__7537;
continue;
}
} else
{var c = cljs.core.first(seq__7521__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__7538 = cljs.core.next(seq__7521__$1);
var G__7539 = null;
var G__7540 = 0;
var G__7541 = 0;
seq__7521 = G__7538;
chunk__7522 = G__7539;
count__7523 = G__7540;
i__7524 = G__7541;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__7529 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7529__delegate.call(this,elem,class$,classes);};
G__7529.cljs$lang$maxFixedArity = 2;
G__7529.cljs$lang$applyTo = (function (arglist__7542){
var elem = cljs.core.first(arglist__7542);
arglist__7542 = cljs.core.next(arglist__7542);
var class$ = cljs.core.first(arglist__7542);
var classes = cljs.core.rest(arglist__7542);
return G__7529__delegate(elem,class$,classes);
});
G__7529.cljs$core$IFn$_invoke$arity$variadic = G__7529__delegate;
return G__7529;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___7543 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7543))
{var class_list_7544 = temp__4090__auto___7543;class_list_7544.toggle(class$__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7547){var vec__7548 = p__7547;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7548,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7548,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__7555_7561 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__7556_7562 = null;var count__7557_7563 = 0;var i__7558_7564 = 0;while(true){
if((i__7558_7564 < count__7557_7563))
{var vec__7559_7565 = chunk__7556_7562.cljs$core$IIndexed$_nth$arity$2(null,i__7558_7564);var k_7566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7559_7565,0,null);var v_7567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7559_7565,1,null);(style[cljs.core.name(k_7566)] = v_7567);
{
var G__7568 = seq__7555_7561;
var G__7569 = chunk__7556_7562;
var G__7570 = count__7557_7563;
var G__7571 = (i__7558_7564 + 1);
seq__7555_7561 = G__7568;
chunk__7556_7562 = G__7569;
count__7557_7563 = G__7570;
i__7558_7564 = G__7571;
continue;
}
} else
{var temp__4092__auto___7572 = cljs.core.seq(seq__7555_7561);if(temp__4092__auto___7572)
{var seq__7555_7573__$1 = temp__4092__auto___7572;if(cljs.core.chunked_seq_QMARK_(seq__7555_7573__$1))
{var c__4173__auto___7574 = cljs.core.chunk_first(seq__7555_7573__$1);{
var G__7575 = cljs.core.chunk_rest(seq__7555_7573__$1);
var G__7576 = c__4173__auto___7574;
var G__7577 = cljs.core.count(c__4173__auto___7574);
var G__7578 = 0;
seq__7555_7561 = G__7575;
chunk__7556_7562 = G__7576;
count__7557_7563 = G__7577;
i__7558_7564 = G__7578;
continue;
}
} else
{var vec__7560_7579 = cljs.core.first(seq__7555_7573__$1);var k_7580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7560_7579,0,null);var v_7581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7560_7579,1,null);(style[cljs.core.name(k_7580)] = v_7581);
{
var G__7582 = cljs.core.next(seq__7555_7573__$1);
var G__7583 = null;
var G__7584 = 0;
var G__7585 = 0;
seq__7555_7561 = G__7582;
chunk__7556_7562 = G__7583;
count__7557_7563 = G__7584;
i__7558_7564 = G__7585;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7586){
var elem = cljs.core.first(arglist__7586);
var kvs = cljs.core.rest(arglist__7586);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"k","k",-1640531420,null)], 0)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7593_7599 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__7594_7600 = null;var count__7595_7601 = 0;var i__7596_7602 = 0;while(true){
if((i__7596_7602 < count__7595_7601))
{var vec__7597_7603 = chunk__7594_7600.cljs$core$IIndexed$_nth$arity$2(null,i__7596_7602);var k_7604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7597_7603,0,null);var v_7605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7597_7603,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_7604,[cljs.core.str(v_7605),cljs.core.str("px")].join('')], 0));
{
var G__7606 = seq__7593_7599;
var G__7607 = chunk__7594_7600;
var G__7608 = count__7595_7601;
var G__7609 = (i__7596_7602 + 1);
seq__7593_7599 = G__7606;
chunk__7594_7600 = G__7607;
count__7595_7601 = G__7608;
i__7596_7602 = G__7609;
continue;
}
} else
{var temp__4092__auto___7610 = cljs.core.seq(seq__7593_7599);if(temp__4092__auto___7610)
{var seq__7593_7611__$1 = temp__4092__auto___7610;if(cljs.core.chunked_seq_QMARK_(seq__7593_7611__$1))
{var c__4173__auto___7612 = cljs.core.chunk_first(seq__7593_7611__$1);{
var G__7613 = cljs.core.chunk_rest(seq__7593_7611__$1);
var G__7614 = c__4173__auto___7612;
var G__7615 = cljs.core.count(c__4173__auto___7612);
var G__7616 = 0;
seq__7593_7599 = G__7613;
chunk__7594_7600 = G__7614;
count__7595_7601 = G__7615;
i__7596_7602 = G__7616;
continue;
}
} else
{var vec__7598_7617 = cljs.core.first(seq__7593_7611__$1);var k_7618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7598_7617,0,null);var v_7619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7598_7617,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_7618,[cljs.core.str(v_7619),cljs.core.str("px")].join('')], 0));
{
var G__7620 = cljs.core.next(seq__7593_7611__$1);
var G__7621 = null;
var G__7622 = 0;
var G__7623 = 0;
seq__7593_7599 = G__7620;
chunk__7594_7600 = G__7621;
count__7595_7601 = G__7622;
i__7596_7602 = G__7623;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7624){
var elem = cljs.core.first(arglist__7624);
var kvs = cljs.core.rest(arglist__7624);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.seq(pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_(v))
{var G__7633 = dommy.template.__GT_node_like(elem);(G__7633[cljs.core.name(k)] = v);
return G__7633;
} else
{var G__7634 = dommy.template.__GT_node_like(elem);G__7634.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$87))?dommy.attrs.style_str(v):v));
return G__7634;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7641__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7635_7642 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__7636_7643 = null;var count__7637_7644 = 0;var i__7638_7645 = 0;while(true){
if((i__7638_7645 < count__7637_7644))
{var vec__7639_7646 = chunk__7636_7643.cljs$core$IIndexed$_nth$arity$2(null,i__7638_7645);var k_7647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7639_7646,0,null);var v_7648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7639_7646,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_7647__$1,v_7648__$1);
{
var G__7649 = seq__7635_7642;
var G__7650 = chunk__7636_7643;
var G__7651 = count__7637_7644;
var G__7652 = (i__7638_7645 + 1);
seq__7635_7642 = G__7649;
chunk__7636_7643 = G__7650;
count__7637_7644 = G__7651;
i__7638_7645 = G__7652;
continue;
}
} else
{var temp__4092__auto___7653 = cljs.core.seq(seq__7635_7642);if(temp__4092__auto___7653)
{var seq__7635_7654__$1 = temp__4092__auto___7653;if(cljs.core.chunked_seq_QMARK_(seq__7635_7654__$1))
{var c__4173__auto___7655 = cljs.core.chunk_first(seq__7635_7654__$1);{
var G__7656 = cljs.core.chunk_rest(seq__7635_7654__$1);
var G__7657 = c__4173__auto___7655;
var G__7658 = cljs.core.count(c__4173__auto___7655);
var G__7659 = 0;
seq__7635_7642 = G__7656;
chunk__7636_7643 = G__7657;
count__7637_7644 = G__7658;
i__7638_7645 = G__7659;
continue;
}
} else
{var vec__7640_7660 = cljs.core.first(seq__7635_7654__$1);var k_7661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7640_7660,0,null);var v_7662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7640_7660,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_7661__$1,v_7662__$1);
{
var G__7663 = cljs.core.next(seq__7635_7654__$1);
var G__7664 = null;
var G__7665 = 0;
var G__7666 = 0;
seq__7635_7642 = G__7663;
chunk__7636_7643 = G__7664;
count__7637_7644 = G__7665;
i__7638_7645 = G__7666;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7641 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7641__delegate.call(this,elem,k,v,kvs);};
G__7641.cljs$lang$maxFixedArity = 3;
G__7641.cljs$lang$applyTo = (function (arglist__7667){
var elem = cljs.core.first(arglist__7667);
arglist__7667 = cljs.core.next(arglist__7667);
var k = cljs.core.first(arglist__7667);
arglist__7667 = cljs.core.next(arglist__7667);
var v = cljs.core.first(arglist__7667);
var kvs = cljs.core.rest(arglist__7667);
return G__7641__delegate(elem,k,v,kvs);
});
G__7641.cljs$core$IFn$_invoke$arity$variadic = G__7641__delegate;
return G__7641;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$89,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7676__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7672_7677 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__7673_7678 = null;var count__7674_7679 = 0;var i__7675_7680 = 0;while(true){
if((i__7675_7680 < count__7674_7679))
{var k_7681__$1 = chunk__7673_7678.cljs$core$IIndexed$_nth$arity$2(null,i__7675_7680);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_7681__$1);
{
var G__7682 = seq__7672_7677;
var G__7683 = chunk__7673_7678;
var G__7684 = count__7674_7679;
var G__7685 = (i__7675_7680 + 1);
seq__7672_7677 = G__7682;
chunk__7673_7678 = G__7683;
count__7674_7679 = G__7684;
i__7675_7680 = G__7685;
continue;
}
} else
{var temp__4092__auto___7686 = cljs.core.seq(seq__7672_7677);if(temp__4092__auto___7686)
{var seq__7672_7687__$1 = temp__4092__auto___7686;if(cljs.core.chunked_seq_QMARK_(seq__7672_7687__$1))
{var c__4173__auto___7688 = cljs.core.chunk_first(seq__7672_7687__$1);{
var G__7689 = cljs.core.chunk_rest(seq__7672_7687__$1);
var G__7690 = c__4173__auto___7688;
var G__7691 = cljs.core.count(c__4173__auto___7688);
var G__7692 = 0;
seq__7672_7677 = G__7689;
chunk__7673_7678 = G__7690;
count__7674_7679 = G__7691;
i__7675_7680 = G__7692;
continue;
}
} else
{var k_7693__$1 = cljs.core.first(seq__7672_7687__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_7693__$1);
{
var G__7694 = cljs.core.next(seq__7672_7687__$1);
var G__7695 = null;
var G__7696 = 0;
var G__7697 = 0;
seq__7672_7677 = G__7694;
chunk__7673_7678 = G__7695;
count__7674_7679 = G__7696;
i__7675_7680 = G__7697;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7676 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7676__delegate.call(this,elem,k,ks);};
G__7676.cljs$lang$maxFixedArity = 2;
G__7676.cljs$lang$applyTo = (function (arglist__7698){
var elem = cljs.core.first(arglist__7698);
arglist__7698 = cljs.core.next(arglist__7698);
var k = cljs.core.first(arglist__7698);
var ks = cljs.core.rest(arglist__7698);
return G__7676__delegate(elem,k,ks);
});
G__7676.cljs$core$IFn$_invoke$arity$variadic = G__7676__delegate;
return G__7676;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like(elem).getAttribute(cljs.core.name(k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.attrs.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like(elem);toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7700 = dommy.template.__GT_node_like(elem);G__7700.style.display = ((show_QMARK_)?"":"none");
return G__7700;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7702 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__7702,false);
return G__7702;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7704 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__7704,true);
return G__7704;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__7706 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__7706["constructor"] = Object);
return G__7706;
})(),cljs.core.array_seq([cljs.core.constant$keyword$12,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
