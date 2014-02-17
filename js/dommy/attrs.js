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
var G__7425 = (i + class$.length);
start_from = G__7425;
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
{var temp__4090__auto___7450 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7450))
{var class_list_7451 = temp__4090__auto___7450;var seq__7438_7452 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__7439_7453 = null;var count__7440_7454 = 0;var i__7441_7455 = 0;while(true){
if((i__7441_7455 < count__7440_7454))
{var class_7456 = chunk__7439_7453.cljs$core$IIndexed$_nth$arity$2(null,i__7441_7455);class_list_7451.add(class_7456);
{
var G__7457 = seq__7438_7452;
var G__7458 = chunk__7439_7453;
var G__7459 = count__7440_7454;
var G__7460 = (i__7441_7455 + 1);
seq__7438_7452 = G__7457;
chunk__7439_7453 = G__7458;
count__7440_7454 = G__7459;
i__7441_7455 = G__7460;
continue;
}
} else
{var temp__4092__auto___7461 = cljs.core.seq(seq__7438_7452);if(temp__4092__auto___7461)
{var seq__7438_7462__$1 = temp__4092__auto___7461;if(cljs.core.chunked_seq_QMARK_(seq__7438_7462__$1))
{var c__4173__auto___7463 = cljs.core.chunk_first(seq__7438_7462__$1);{
var G__7464 = cljs.core.chunk_rest(seq__7438_7462__$1);
var G__7465 = c__4173__auto___7463;
var G__7466 = cljs.core.count(c__4173__auto___7463);
var G__7467 = 0;
seq__7438_7452 = G__7464;
chunk__7439_7453 = G__7465;
count__7440_7454 = G__7466;
i__7441_7455 = G__7467;
continue;
}
} else
{var class_7468 = cljs.core.first(seq__7438_7462__$1);class_list_7451.add(class_7468);
{
var G__7469 = cljs.core.next(seq__7438_7462__$1);
var G__7470 = null;
var G__7471 = 0;
var G__7472 = 0;
seq__7438_7452 = G__7469;
chunk__7439_7453 = G__7470;
count__7440_7454 = G__7471;
i__7441_7455 = G__7472;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7473 = elem__$1.className;var seq__7442_7474 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__7443_7475 = null;var count__7444_7476 = 0;var i__7445_7477 = 0;while(true){
if((i__7445_7477 < count__7444_7476))
{var class_7478 = chunk__7443_7475.cljs$core$IIndexed$_nth$arity$2(null,i__7445_7477);if(cljs.core.truth_(dommy.attrs.class_index(class_name_7473,class_7478)))
{} else
{elem__$1.className = (((class_name_7473 === ""))?class_7478:[cljs.core.str(class_name_7473),cljs.core.str(" "),cljs.core.str(class_7478)].join(''));
}
{
var G__7479 = seq__7442_7474;
var G__7480 = chunk__7443_7475;
var G__7481 = count__7444_7476;
var G__7482 = (i__7445_7477 + 1);
seq__7442_7474 = G__7479;
chunk__7443_7475 = G__7480;
count__7444_7476 = G__7481;
i__7445_7477 = G__7482;
continue;
}
} else
{var temp__4092__auto___7483 = cljs.core.seq(seq__7442_7474);if(temp__4092__auto___7483)
{var seq__7442_7484__$1 = temp__4092__auto___7483;if(cljs.core.chunked_seq_QMARK_(seq__7442_7484__$1))
{var c__4173__auto___7485 = cljs.core.chunk_first(seq__7442_7484__$1);{
var G__7486 = cljs.core.chunk_rest(seq__7442_7484__$1);
var G__7487 = c__4173__auto___7485;
var G__7488 = cljs.core.count(c__4173__auto___7485);
var G__7489 = 0;
seq__7442_7474 = G__7486;
chunk__7443_7475 = G__7487;
count__7444_7476 = G__7488;
i__7445_7477 = G__7489;
continue;
}
} else
{var class_7490 = cljs.core.first(seq__7442_7484__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_7473,class_7490)))
{} else
{elem__$1.className = (((class_name_7473 === ""))?class_7490:[cljs.core.str(class_name_7473),cljs.core.str(" "),cljs.core.str(class_7490)].join(''));
}
{
var G__7491 = cljs.core.next(seq__7442_7484__$1);
var G__7492 = null;
var G__7493 = 0;
var G__7494 = 0;
seq__7442_7474 = G__7491;
chunk__7443_7475 = G__7492;
count__7444_7476 = G__7493;
i__7445_7477 = G__7494;
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
var G__7495__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7446_7496 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__7447_7497 = null;var count__7448_7498 = 0;var i__7449_7499 = 0;while(true){
if((i__7449_7499 < count__7448_7498))
{var c_7500 = chunk__7447_7497.cljs$core$IIndexed$_nth$arity$2(null,i__7449_7499);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_7500);
{
var G__7501 = seq__7446_7496;
var G__7502 = chunk__7447_7497;
var G__7503 = count__7448_7498;
var G__7504 = (i__7449_7499 + 1);
seq__7446_7496 = G__7501;
chunk__7447_7497 = G__7502;
count__7448_7498 = G__7503;
i__7449_7499 = G__7504;
continue;
}
} else
{var temp__4092__auto___7505 = cljs.core.seq(seq__7446_7496);if(temp__4092__auto___7505)
{var seq__7446_7506__$1 = temp__4092__auto___7505;if(cljs.core.chunked_seq_QMARK_(seq__7446_7506__$1))
{var c__4173__auto___7507 = cljs.core.chunk_first(seq__7446_7506__$1);{
var G__7508 = cljs.core.chunk_rest(seq__7446_7506__$1);
var G__7509 = c__4173__auto___7507;
var G__7510 = cljs.core.count(c__4173__auto___7507);
var G__7511 = 0;
seq__7446_7496 = G__7508;
chunk__7447_7497 = G__7509;
count__7448_7498 = G__7510;
i__7449_7499 = G__7511;
continue;
}
} else
{var c_7512 = cljs.core.first(seq__7446_7506__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_7512);
{
var G__7513 = cljs.core.next(seq__7446_7506__$1);
var G__7514 = null;
var G__7515 = 0;
var G__7516 = 0;
seq__7446_7496 = G__7513;
chunk__7447_7497 = G__7514;
count__7448_7498 = G__7515;
i__7449_7499 = G__7516;
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
var G__7495 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7495__delegate.call(this,elem,classes,more_classes);};
G__7495.cljs$lang$maxFixedArity = 2;
G__7495.cljs$lang$applyTo = (function (arglist__7517){
var elem = cljs.core.first(arglist__7517);
arglist__7517 = cljs.core.next(arglist__7517);
var classes = cljs.core.first(arglist__7517);
var more_classes = cljs.core.rest(arglist__7517);
return G__7495__delegate(elem,classes,more_classes);
});
G__7495.cljs$core$IFn$_invoke$arity$variadic = G__7495__delegate;
return G__7495;
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
var G__7518 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__7518;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___7527 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7527))
{var class_list_7528 = temp__4090__auto___7527;class_list_7528.remove(class$__$1);
} else
{var class_name_7529 = elem__$1.className;var new_class_name_7530 = dommy.attrs.remove_class_str(class_name_7529,class$__$1);if((class_name_7529 === new_class_name_7530))
{} else
{elem__$1.className = new_class_name_7530;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7531__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7523 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__7524 = null;var count__7525 = 0;var i__7526 = 0;while(true){
if((i__7526 < count__7525))
{var c = chunk__7524.cljs$core$IIndexed$_nth$arity$2(null,i__7526);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__7532 = seq__7523;
var G__7533 = chunk__7524;
var G__7534 = count__7525;
var G__7535 = (i__7526 + 1);
seq__7523 = G__7532;
chunk__7524 = G__7533;
count__7525 = G__7534;
i__7526 = G__7535;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__7523);if(temp__4092__auto__)
{var seq__7523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__7523__$1))
{var c__4173__auto__ = cljs.core.chunk_first(seq__7523__$1);{
var G__7536 = cljs.core.chunk_rest(seq__7523__$1);
var G__7537 = c__4173__auto__;
var G__7538 = cljs.core.count(c__4173__auto__);
var G__7539 = 0;
seq__7523 = G__7536;
chunk__7524 = G__7537;
count__7525 = G__7538;
i__7526 = G__7539;
continue;
}
} else
{var c = cljs.core.first(seq__7523__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__7540 = cljs.core.next(seq__7523__$1);
var G__7541 = null;
var G__7542 = 0;
var G__7543 = 0;
seq__7523 = G__7540;
chunk__7524 = G__7541;
count__7525 = G__7542;
i__7526 = G__7543;
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
var G__7531 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7531__delegate.call(this,elem,class$,classes);};
G__7531.cljs$lang$maxFixedArity = 2;
G__7531.cljs$lang$applyTo = (function (arglist__7544){
var elem = cljs.core.first(arglist__7544);
arglist__7544 = cljs.core.next(arglist__7544);
var class$ = cljs.core.first(arglist__7544);
var classes = cljs.core.rest(arglist__7544);
return G__7531__delegate(elem,class$,classes);
});
G__7531.cljs$core$IFn$_invoke$arity$variadic = G__7531__delegate;
return G__7531;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___7545 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7545))
{var class_list_7546 = temp__4090__auto___7545;class_list_7546.toggle(class$__$1);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7549){var vec__7550 = p__7549;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7550,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7550,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__7557_7563 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__7558_7564 = null;var count__7559_7565 = 0;var i__7560_7566 = 0;while(true){
if((i__7560_7566 < count__7559_7565))
{var vec__7561_7567 = chunk__7558_7564.cljs$core$IIndexed$_nth$arity$2(null,i__7560_7566);var k_7568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7561_7567,0,null);var v_7569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7561_7567,1,null);(style[cljs.core.name(k_7568)] = v_7569);
{
var G__7570 = seq__7557_7563;
var G__7571 = chunk__7558_7564;
var G__7572 = count__7559_7565;
var G__7573 = (i__7560_7566 + 1);
seq__7557_7563 = G__7570;
chunk__7558_7564 = G__7571;
count__7559_7565 = G__7572;
i__7560_7566 = G__7573;
continue;
}
} else
{var temp__4092__auto___7574 = cljs.core.seq(seq__7557_7563);if(temp__4092__auto___7574)
{var seq__7557_7575__$1 = temp__4092__auto___7574;if(cljs.core.chunked_seq_QMARK_(seq__7557_7575__$1))
{var c__4173__auto___7576 = cljs.core.chunk_first(seq__7557_7575__$1);{
var G__7577 = cljs.core.chunk_rest(seq__7557_7575__$1);
var G__7578 = c__4173__auto___7576;
var G__7579 = cljs.core.count(c__4173__auto___7576);
var G__7580 = 0;
seq__7557_7563 = G__7577;
chunk__7558_7564 = G__7578;
count__7559_7565 = G__7579;
i__7560_7566 = G__7580;
continue;
}
} else
{var vec__7562_7581 = cljs.core.first(seq__7557_7575__$1);var k_7582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7562_7581,0,null);var v_7583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7562_7581,1,null);(style[cljs.core.name(k_7582)] = v_7583);
{
var G__7584 = cljs.core.next(seq__7557_7575__$1);
var G__7585 = null;
var G__7586 = 0;
var G__7587 = 0;
seq__7557_7563 = G__7584;
chunk__7558_7564 = G__7585;
count__7559_7565 = G__7586;
i__7560_7566 = G__7587;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7588){
var elem = cljs.core.first(arglist__7588);
var kvs = cljs.core.rest(arglist__7588);
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
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7595_7601 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__7596_7602 = null;var count__7597_7603 = 0;var i__7598_7604 = 0;while(true){
if((i__7598_7604 < count__7597_7603))
{var vec__7599_7605 = chunk__7596_7602.cljs$core$IIndexed$_nth$arity$2(null,i__7598_7604);var k_7606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7599_7605,0,null);var v_7607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7599_7605,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_7606,[cljs.core.str(v_7607),cljs.core.str("px")].join('')], 0));
{
var G__7608 = seq__7595_7601;
var G__7609 = chunk__7596_7602;
var G__7610 = count__7597_7603;
var G__7611 = (i__7598_7604 + 1);
seq__7595_7601 = G__7608;
chunk__7596_7602 = G__7609;
count__7597_7603 = G__7610;
i__7598_7604 = G__7611;
continue;
}
} else
{var temp__4092__auto___7612 = cljs.core.seq(seq__7595_7601);if(temp__4092__auto___7612)
{var seq__7595_7613__$1 = temp__4092__auto___7612;if(cljs.core.chunked_seq_QMARK_(seq__7595_7613__$1))
{var c__4173__auto___7614 = cljs.core.chunk_first(seq__7595_7613__$1);{
var G__7615 = cljs.core.chunk_rest(seq__7595_7613__$1);
var G__7616 = c__4173__auto___7614;
var G__7617 = cljs.core.count(c__4173__auto___7614);
var G__7618 = 0;
seq__7595_7601 = G__7615;
chunk__7596_7602 = G__7616;
count__7597_7603 = G__7617;
i__7598_7604 = G__7618;
continue;
}
} else
{var vec__7600_7619 = cljs.core.first(seq__7595_7613__$1);var k_7620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7600_7619,0,null);var v_7621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7600_7619,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_7620,[cljs.core.str(v_7621),cljs.core.str("px")].join('')], 0));
{
var G__7622 = cljs.core.next(seq__7595_7613__$1);
var G__7623 = null;
var G__7624 = 0;
var G__7625 = 0;
seq__7595_7601 = G__7622;
chunk__7596_7602 = G__7623;
count__7597_7603 = G__7624;
i__7598_7604 = G__7625;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7626){
var elem = cljs.core.first(arglist__7626);
var kvs = cljs.core.rest(arglist__7626);
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
{var G__7635 = dommy.template.__GT_node_like(elem);(G__7635[cljs.core.name(k)] = v);
return G__7635;
} else
{var G__7636 = dommy.template.__GT_node_like(elem);G__7636.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$89))?dommy.attrs.style_str(v):v));
return G__7636;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7643__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7637_7644 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__7638_7645 = null;var count__7639_7646 = 0;var i__7640_7647 = 0;while(true){
if((i__7640_7647 < count__7639_7646))
{var vec__7641_7648 = chunk__7638_7645.cljs$core$IIndexed$_nth$arity$2(null,i__7640_7647);var k_7649__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7641_7648,0,null);var v_7650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7641_7648,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_7649__$1,v_7650__$1);
{
var G__7651 = seq__7637_7644;
var G__7652 = chunk__7638_7645;
var G__7653 = count__7639_7646;
var G__7654 = (i__7640_7647 + 1);
seq__7637_7644 = G__7651;
chunk__7638_7645 = G__7652;
count__7639_7646 = G__7653;
i__7640_7647 = G__7654;
continue;
}
} else
{var temp__4092__auto___7655 = cljs.core.seq(seq__7637_7644);if(temp__4092__auto___7655)
{var seq__7637_7656__$1 = temp__4092__auto___7655;if(cljs.core.chunked_seq_QMARK_(seq__7637_7656__$1))
{var c__4173__auto___7657 = cljs.core.chunk_first(seq__7637_7656__$1);{
var G__7658 = cljs.core.chunk_rest(seq__7637_7656__$1);
var G__7659 = c__4173__auto___7657;
var G__7660 = cljs.core.count(c__4173__auto___7657);
var G__7661 = 0;
seq__7637_7644 = G__7658;
chunk__7638_7645 = G__7659;
count__7639_7646 = G__7660;
i__7640_7647 = G__7661;
continue;
}
} else
{var vec__7642_7662 = cljs.core.first(seq__7637_7656__$1);var k_7663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7642_7662,0,null);var v_7664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7642_7662,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_7663__$1,v_7664__$1);
{
var G__7665 = cljs.core.next(seq__7637_7656__$1);
var G__7666 = null;
var G__7667 = 0;
var G__7668 = 0;
seq__7637_7644 = G__7665;
chunk__7638_7645 = G__7666;
count__7639_7646 = G__7667;
i__7640_7647 = G__7668;
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
var G__7643 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7643__delegate.call(this,elem,k,v,kvs);};
G__7643.cljs$lang$maxFixedArity = 3;
G__7643.cljs$lang$applyTo = (function (arglist__7669){
var elem = cljs.core.first(arglist__7669);
arglist__7669 = cljs.core.next(arglist__7669);
var k = cljs.core.first(arglist__7669);
arglist__7669 = cljs.core.next(arglist__7669);
var v = cljs.core.first(arglist__7669);
var kvs = cljs.core.rest(arglist__7669);
return G__7643__delegate(elem,k,v,kvs);
});
G__7643.cljs$core$IFn$_invoke$arity$variadic = G__7643__delegate;
return G__7643;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$90,null,cljs.core.constant$keyword$91,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7678__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__7674_7679 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__7675_7680 = null;var count__7676_7681 = 0;var i__7677_7682 = 0;while(true){
if((i__7677_7682 < count__7676_7681))
{var k_7683__$1 = chunk__7675_7680.cljs$core$IIndexed$_nth$arity$2(null,i__7677_7682);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_7683__$1);
{
var G__7684 = seq__7674_7679;
var G__7685 = chunk__7675_7680;
var G__7686 = count__7676_7681;
var G__7687 = (i__7677_7682 + 1);
seq__7674_7679 = G__7684;
chunk__7675_7680 = G__7685;
count__7676_7681 = G__7686;
i__7677_7682 = G__7687;
continue;
}
} else
{var temp__4092__auto___7688 = cljs.core.seq(seq__7674_7679);if(temp__4092__auto___7688)
{var seq__7674_7689__$1 = temp__4092__auto___7688;if(cljs.core.chunked_seq_QMARK_(seq__7674_7689__$1))
{var c__4173__auto___7690 = cljs.core.chunk_first(seq__7674_7689__$1);{
var G__7691 = cljs.core.chunk_rest(seq__7674_7689__$1);
var G__7692 = c__4173__auto___7690;
var G__7693 = cljs.core.count(c__4173__auto___7690);
var G__7694 = 0;
seq__7674_7679 = G__7691;
chunk__7675_7680 = G__7692;
count__7676_7681 = G__7693;
i__7677_7682 = G__7694;
continue;
}
} else
{var k_7695__$1 = cljs.core.first(seq__7674_7689__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_7695__$1);
{
var G__7696 = cljs.core.next(seq__7674_7689__$1);
var G__7697 = null;
var G__7698 = 0;
var G__7699 = 0;
seq__7674_7679 = G__7696;
chunk__7675_7680 = G__7697;
count__7676_7681 = G__7698;
i__7677_7682 = G__7699;
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
var G__7678 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7678__delegate.call(this,elem,k,ks);};
G__7678.cljs$lang$maxFixedArity = 2;
G__7678.cljs$lang$applyTo = (function (arglist__7700){
var elem = cljs.core.first(arglist__7700);
arglist__7700 = cljs.core.next(arglist__7700);
var k = cljs.core.first(arglist__7700);
var ks = cljs.core.rest(arglist__7700);
return G__7678__delegate(elem,k,ks);
});
G__7678.cljs$core$IFn$_invoke$arity$variadic = G__7678__delegate;
return G__7678;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7702 = dommy.template.__GT_node_like(elem);G__7702.style.display = ((show_QMARK_)?"":"none");
return G__7702;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7704 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__7704,false);
return G__7704;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7706 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__7706,true);
return G__7706;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__7708 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__7708["constructor"] = Object);
return G__7708;
})(),cljs.core.array_seq([cljs.core.constant$keyword$12,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
