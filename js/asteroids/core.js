// Compiled by ClojureScript 0.0-2138
goog.provide('asteroids.core');
goog.require('cljs.core');
goog.require('asteroids.math');
goog.require('clojure.string');
goog.require('asteroids.math');
goog.require('asteroids.vector');
goog.require('asteroids.vector');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('clojure.string');

/**
* @constructor
* @param {*} name
* @param {*} vector
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
asteroids.core.Position = (function (name,vector,__meta,__extmap){
this.name = name;
this.vector = vector;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
asteroids.core.Position.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4006__auto__){var self__ = this;
var this__4006__auto____$1 = this;var h__3842__auto__ = self__.__hash;if(!((h__3842__auto__ == null)))
{return h__3842__auto__;
} else
{var h__3842__auto____$1 = cljs.core.hash_imap(this__4006__auto____$1);self__.__hash = h__3842__auto____$1;
return h__3842__auto____$1;
}
});
asteroids.core.Position.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4011__auto__,k__4012__auto__){var self__ = this;
var this__4011__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4011__auto____$1,k__4012__auto__,null);
});
asteroids.core.Position.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4013__auto__,k4968,else__4014__auto__){var self__ = this;
var this__4013__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k4968,cljs.core.constant$keyword$17))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_(k4968,cljs.core.constant$keyword$18))
{return self__.vector;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4968,else__4014__auto__);
} else
{return null;
}
}
}
});
asteroids.core.Position.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4018__auto__,k__4019__auto__,G__4967){var self__ = this;
var this__4018__auto____$1 = this;var pred__4970 = cljs.core.keyword_identical_QMARK_;var expr__4971 = k__4019__auto__;if(cljs.core.truth_((pred__4970.cljs$core$IFn$_invoke$arity$2 ? pred__4970.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__4971) : pred__4970.call(null,cljs.core.constant$keyword$17,expr__4971))))
{return (new asteroids.core.Position(G__4967,self__.vector,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4970.cljs$core$IFn$_invoke$arity$2 ? pred__4970.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18,expr__4971) : pred__4970.call(null,cljs.core.constant$keyword$18,expr__4971))))
{return (new asteroids.core.Position(self__.name,G__4967,self__.__meta,self__.__extmap,null));
} else
{return (new asteroids.core.Position(self__.name,self__.vector,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4019__auto__,G__4967),null));
}
}
});
asteroids.core.Position.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4025__auto__,writer__4026__auto__,opts__4027__auto__){var self__ = this;
var this__4025__auto____$1 = this;var pr_pair__4028__auto__ = (function (keyval__4029__auto__){return cljs.core.pr_sequential_writer(writer__4026__auto__,cljs.core.pr_writer,""," ","",opts__4027__auto__,keyval__4029__auto__);
});return cljs.core.pr_sequential_writer(writer__4026__auto__,pr_pair__4028__auto__,"#asteroids.core.Position{",", ","}",opts__4027__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.vector],null))], null),self__.__extmap));
});
asteroids.core.Position.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4016__auto__,entry__4017__auto__){var self__ = this;
var this__4016__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4017__auto__))
{return cljs.core._assoc(this__4016__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4016__auto____$1,entry__4017__auto__);
}
});
asteroids.core.Position.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.vector],null))], null),self__.__extmap));
});
asteroids.core.Position.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
asteroids.core.Position.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4007__auto__,other__4008__auto__){var self__ = this;
var this__4007__auto____$1 = this;if(cljs.core.truth_((function (){var and__3419__auto__ = other__4008__auto__;if(cljs.core.truth_(and__3419__auto__))
{return ((this__4007__auto____$1.constructor === other__4008__auto__.constructor)) && (cljs.core.equiv_map(this__4007__auto____$1,other__4008__auto__));
} else
{return and__3419__auto__;
}
})()))
{return true;
} else
{return false;
}
});
asteroids.core.Position.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4010__auto__,G__4967){var self__ = this;
var this__4010__auto____$1 = this;return (new asteroids.core.Position(self__.name,self__.vector,G__4967,self__.__extmap,self__.__hash));
});
asteroids.core.Position.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4009__auto__){var self__ = this;
var this__4009__auto____$1 = this;return self__.__meta;
});
asteroids.core.Position.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4020__auto__,k__4021__auto__){var self__ = this;
var this__4020__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$18,null,cljs.core.constant$keyword$17,null], null), null),k__4021__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4020__auto____$1),self__.__meta),k__4021__auto__);
} else
{return (new asteroids.core.Position(self__.name,self__.vector,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4021__auto__)),null));
}
});
asteroids.core.Position.cljs$lang$type = true;
asteroids.core.Position.cljs$lang$ctorPrSeq = (function (this__4045__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"asteroids.core/Position");
});
asteroids.core.Position.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__){return cljs.core._write(writer__4046__auto__,"asteroids.core/Position");
});
asteroids.core.__GT_Position = (function __GT_Position(name,vector){return (new asteroids.core.Position(name,vector));
});
asteroids.core.map__GT_Position = (function map__GT_Position(G__4969){return (new asteroids.core.Position(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__4969),cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(G__4969),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4969,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$18], 0))));
});

/**
* @constructor
* @param {*} name
* @param {*} angle
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
asteroids.core.Rotation = (function (name,angle,__meta,__extmap){
this.name = name;
this.angle = angle;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
asteroids.core.Rotation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4006__auto__){var self__ = this;
var this__4006__auto____$1 = this;var h__3842__auto__ = self__.__hash;if(!((h__3842__auto__ == null)))
{return h__3842__auto__;
} else
{var h__3842__auto____$1 = cljs.core.hash_imap(this__4006__auto____$1);self__.__hash = h__3842__auto____$1;
return h__3842__auto____$1;
}
});
asteroids.core.Rotation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4011__auto__,k__4012__auto__){var self__ = this;
var this__4011__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4011__auto____$1,k__4012__auto__,null);
});
asteroids.core.Rotation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4013__auto__,k4974,else__4014__auto__){var self__ = this;
var this__4013__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k4974,cljs.core.constant$keyword$17))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_(k4974,cljs.core.constant$keyword$19))
{return self__.angle;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4974,else__4014__auto__);
} else
{return null;
}
}
}
});
asteroids.core.Rotation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4018__auto__,k__4019__auto__,G__4973){var self__ = this;
var this__4018__auto____$1 = this;var pred__4976 = cljs.core.keyword_identical_QMARK_;var expr__4977 = k__4019__auto__;if(cljs.core.truth_((pred__4976.cljs$core$IFn$_invoke$arity$2 ? pred__4976.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__4977) : pred__4976.call(null,cljs.core.constant$keyword$17,expr__4977))))
{return (new asteroids.core.Rotation(G__4973,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4976.cljs$core$IFn$_invoke$arity$2 ? pred__4976.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19,expr__4977) : pred__4976.call(null,cljs.core.constant$keyword$19,expr__4977))))
{return (new asteroids.core.Rotation(self__.name,G__4973,self__.__meta,self__.__extmap,null));
} else
{return (new asteroids.core.Rotation(self__.name,self__.angle,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4019__auto__,G__4973),null));
}
}
});
asteroids.core.Rotation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4025__auto__,writer__4026__auto__,opts__4027__auto__){var self__ = this;
var this__4025__auto____$1 = this;var pr_pair__4028__auto__ = (function (keyval__4029__auto__){return cljs.core.pr_sequential_writer(writer__4026__auto__,cljs.core.pr_writer,""," ","",opts__4027__auto__,keyval__4029__auto__);
});return cljs.core.pr_sequential_writer(writer__4026__auto__,pr_pair__4028__auto__,"#asteroids.core.Rotation{",", ","}",opts__4027__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.angle],null))], null),self__.__extmap));
});
asteroids.core.Rotation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4016__auto__,entry__4017__auto__){var self__ = this;
var this__4016__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4017__auto__))
{return cljs.core._assoc(this__4016__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4016__auto____$1,entry__4017__auto__);
}
});
asteroids.core.Rotation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.angle],null))], null),self__.__extmap));
});
asteroids.core.Rotation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
asteroids.core.Rotation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4007__auto__,other__4008__auto__){var self__ = this;
var this__4007__auto____$1 = this;if(cljs.core.truth_((function (){var and__3419__auto__ = other__4008__auto__;if(cljs.core.truth_(and__3419__auto__))
{return ((this__4007__auto____$1.constructor === other__4008__auto__.constructor)) && (cljs.core.equiv_map(this__4007__auto____$1,other__4008__auto__));
} else
{return and__3419__auto__;
}
})()))
{return true;
} else
{return false;
}
});
asteroids.core.Rotation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4010__auto__,G__4973){var self__ = this;
var this__4010__auto____$1 = this;return (new asteroids.core.Rotation(self__.name,self__.angle,G__4973,self__.__extmap,self__.__hash));
});
asteroids.core.Rotation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4009__auto__){var self__ = this;
var this__4009__auto____$1 = this;return self__.__meta;
});
asteroids.core.Rotation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4020__auto__,k__4021__auto__){var self__ = this;
var this__4020__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,null,cljs.core.constant$keyword$19,null], null), null),k__4021__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4020__auto____$1),self__.__meta),k__4021__auto__);
} else
{return (new asteroids.core.Rotation(self__.name,self__.angle,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4021__auto__)),null));
}
});
asteroids.core.Rotation.cljs$lang$type = true;
asteroids.core.Rotation.cljs$lang$ctorPrSeq = (function (this__4045__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"asteroids.core/Rotation");
});
asteroids.core.Rotation.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__){return cljs.core._write(writer__4046__auto__,"asteroids.core/Rotation");
});
asteroids.core.__GT_Rotation = (function __GT_Rotation(name,angle){return (new asteroids.core.Rotation(name,angle));
});
asteroids.core.map__GT_Rotation = (function map__GT_Rotation(G__4975){return (new asteroids.core.Rotation(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__4975),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__4975),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4975,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$19], 0))));
});

/**
* @constructor
* @param {*} name
* @param {*} acceleration
* @param {*} velocity
* @param {*} max_velocity
* @param {*} angular_acceleration
* @param {*} angular_velocity
* @param {*} max_angular_velocity
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
asteroids.core.Movement = (function (name,acceleration,velocity,max_velocity,angular_acceleration,angular_velocity,max_angular_velocity,__meta,__extmap){
this.name = name;
this.acceleration = acceleration;
this.velocity = velocity;
this.max_velocity = max_velocity;
this.angular_acceleration = angular_acceleration;
this.angular_velocity = angular_velocity;
this.max_angular_velocity = max_angular_velocity;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
asteroids.core.Movement.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4006__auto__){var self__ = this;
var this__4006__auto____$1 = this;var h__3842__auto__ = self__.__hash;if(!((h__3842__auto__ == null)))
{return h__3842__auto__;
} else
{var h__3842__auto____$1 = cljs.core.hash_imap(this__4006__auto____$1);self__.__hash = h__3842__auto____$1;
return h__3842__auto____$1;
}
});
asteroids.core.Movement.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4011__auto__,k__4012__auto__){var self__ = this;
var this__4011__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4011__auto____$1,k__4012__auto__,null);
});
asteroids.core.Movement.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4013__auto__,k4980,else__4014__auto__){var self__ = this;
var this__4013__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$17))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$20))
{return self__.acceleration;
} else
{if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$21))
{return self__.velocity;
} else
{if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$22))
{return self__.max_velocity;
} else
{if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$23))
{return self__.angular_acceleration;
} else
{if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$24))
{return self__.angular_velocity;
} else
{if(cljs.core.keyword_identical_QMARK_(k4980,cljs.core.constant$keyword$25))
{return self__.max_angular_velocity;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4980,else__4014__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
asteroids.core.Movement.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4018__auto__,k__4019__auto__,G__4979){var self__ = this;
var this__4018__auto____$1 = this;var pred__4982 = cljs.core.keyword_identical_QMARK_;var expr__4983 = k__4019__auto__;if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$17,expr__4983))))
{return (new asteroids.core.Movement(G__4979,self__.acceleration,self__.velocity,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$20,expr__4983))))
{return (new asteroids.core.Movement(self__.name,G__4979,self__.velocity,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$21,expr__4983))))
{return (new asteroids.core.Movement(self__.name,self__.acceleration,G__4979,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$22,expr__4983))))
{return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,G__4979,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$23,expr__4983))))
{return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,self__.max_velocity,G__4979,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$24,expr__4983))))
{return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,self__.max_velocity,self__.angular_acceleration,G__4979,self__.max_angular_velocity,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4982.cljs$core$IFn$_invoke$arity$2 ? pred__4982.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$25,expr__4983) : pred__4982.call(null,cljs.core.constant$keyword$25,expr__4983))))
{return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,G__4979,self__.__meta,self__.__extmap,null));
} else
{return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4019__auto__,G__4979),null));
}
}
}
}
}
}
}
});
asteroids.core.Movement.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4025__auto__,writer__4026__auto__,opts__4027__auto__){var self__ = this;
var this__4025__auto____$1 = this;var pr_pair__4028__auto__ = (function (keyval__4029__auto__){return cljs.core.pr_sequential_writer(writer__4026__auto__,cljs.core.pr_writer,""," ","",opts__4027__auto__,keyval__4029__auto__);
});return cljs.core.pr_sequential_writer(writer__4026__auto__,pr_pair__4028__auto__,"#asteroids.core.Movement{",", ","}",opts__4027__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.acceleration],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.max_velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.angular_acceleration],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.angular_velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.max_angular_velocity],null))], null),self__.__extmap));
});
asteroids.core.Movement.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4016__auto__,entry__4017__auto__){var self__ = this;
var this__4016__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4017__auto__))
{return cljs.core._assoc(this__4016__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4016__auto____$1,entry__4017__auto__);
}
});
asteroids.core.Movement.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.acceleration],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.max_velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.angular_acceleration],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.angular_velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.max_angular_velocity],null))], null),self__.__extmap));
});
asteroids.core.Movement.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (7 + cljs.core.count(self__.__extmap));
});
asteroids.core.Movement.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4007__auto__,other__4008__auto__){var self__ = this;
var this__4007__auto____$1 = this;if(cljs.core.truth_((function (){var and__3419__auto__ = other__4008__auto__;if(cljs.core.truth_(and__3419__auto__))
{return ((this__4007__auto____$1.constructor === other__4008__auto__.constructor)) && (cljs.core.equiv_map(this__4007__auto____$1,other__4008__auto__));
} else
{return and__3419__auto__;
}
})()))
{return true;
} else
{return false;
}
});
asteroids.core.Movement.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4010__auto__,G__4979){var self__ = this;
var this__4010__auto____$1 = this;return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,G__4979,self__.__extmap,self__.__hash));
});
asteroids.core.Movement.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4009__auto__){var self__ = this;
var this__4009__auto____$1 = this;return self__.__meta;
});
asteroids.core.Movement.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4020__auto__,k__4021__auto__){var self__ = this;
var this__4020__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$17,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$20,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$22,null], null), null),k__4021__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4020__auto____$1),self__.__meta),k__4021__auto__);
} else
{return (new asteroids.core.Movement(self__.name,self__.acceleration,self__.velocity,self__.max_velocity,self__.angular_acceleration,self__.angular_velocity,self__.max_angular_velocity,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4021__auto__)),null));
}
});
asteroids.core.Movement.cljs$lang$type = true;
asteroids.core.Movement.cljs$lang$ctorPrSeq = (function (this__4045__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"asteroids.core/Movement");
});
asteroids.core.Movement.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__){return cljs.core._write(writer__4046__auto__,"asteroids.core/Movement");
});
asteroids.core.__GT_Movement = (function __GT_Movement(name,acceleration,velocity,max_velocity,angular_acceleration,angular_velocity,max_angular_velocity){return (new asteroids.core.Movement(name,acceleration,velocity,max_velocity,angular_acceleration,angular_velocity,max_angular_velocity));
});
asteroids.core.map__GT_Movement = (function map__GT_Movement(G__4981){return (new asteroids.core.Movement(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__4981),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__4981),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__4981),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__4981),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__4981),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__4981),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__4981),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4981,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$20,cljs.core.constant$keyword$21,cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25], 0))));
});

/**
* @constructor
* @param {*} name
* @param {*} xmin
* @param {*} ymin
* @param {*} xmax
* @param {*} ymax
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
asteroids.core.AABB = (function (name,xmin,ymin,xmax,ymax,__meta,__extmap){
this.name = name;
this.xmin = xmin;
this.ymin = ymin;
this.xmax = xmax;
this.ymax = ymax;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
asteroids.core.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4006__auto__){var self__ = this;
var this__4006__auto____$1 = this;var h__3842__auto__ = self__.__hash;if(!((h__3842__auto__ == null)))
{return h__3842__auto__;
} else
{var h__3842__auto____$1 = cljs.core.hash_imap(this__4006__auto____$1);self__.__hash = h__3842__auto____$1;
return h__3842__auto____$1;
}
});
asteroids.core.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4011__auto__,k__4012__auto__){var self__ = this;
var this__4011__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4011__auto____$1,k__4012__auto__,null);
});
asteroids.core.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4013__auto__,k4986,else__4014__auto__){var self__ = this;
var this__4013__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k4986,cljs.core.constant$keyword$17))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_(k4986,cljs.core.constant$keyword$26))
{return self__.xmin;
} else
{if(cljs.core.keyword_identical_QMARK_(k4986,cljs.core.constant$keyword$27))
{return self__.ymin;
} else
{if(cljs.core.keyword_identical_QMARK_(k4986,cljs.core.constant$keyword$28))
{return self__.xmax;
} else
{if(cljs.core.keyword_identical_QMARK_(k4986,cljs.core.constant$keyword$29))
{return self__.ymax;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4986,else__4014__auto__);
} else
{return null;
}
}
}
}
}
}
});
asteroids.core.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4018__auto__,k__4019__auto__,G__4985){var self__ = this;
var this__4018__auto____$1 = this;var pred__4988 = cljs.core.keyword_identical_QMARK_;var expr__4989 = k__4019__auto__;if(cljs.core.truth_((pred__4988.cljs$core$IFn$_invoke$arity$2 ? pred__4988.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__4989) : pred__4988.call(null,cljs.core.constant$keyword$17,expr__4989))))
{return (new asteroids.core.AABB(G__4985,self__.xmin,self__.ymin,self__.xmax,self__.ymax,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4988.cljs$core$IFn$_invoke$arity$2 ? pred__4988.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$26,expr__4989) : pred__4988.call(null,cljs.core.constant$keyword$26,expr__4989))))
{return (new asteroids.core.AABB(self__.name,G__4985,self__.ymin,self__.xmax,self__.ymax,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4988.cljs$core$IFn$_invoke$arity$2 ? pred__4988.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27,expr__4989) : pred__4988.call(null,cljs.core.constant$keyword$27,expr__4989))))
{return (new asteroids.core.AABB(self__.name,self__.xmin,G__4985,self__.xmax,self__.ymax,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4988.cljs$core$IFn$_invoke$arity$2 ? pred__4988.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,expr__4989) : pred__4988.call(null,cljs.core.constant$keyword$28,expr__4989))))
{return (new asteroids.core.AABB(self__.name,self__.xmin,self__.ymin,G__4985,self__.ymax,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4988.cljs$core$IFn$_invoke$arity$2 ? pred__4988.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,expr__4989) : pred__4988.call(null,cljs.core.constant$keyword$29,expr__4989))))
{return (new asteroids.core.AABB(self__.name,self__.xmin,self__.ymin,self__.xmax,G__4985,self__.__meta,self__.__extmap,null));
} else
{return (new asteroids.core.AABB(self__.name,self__.xmin,self__.ymin,self__.xmax,self__.ymax,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4019__auto__,G__4985),null));
}
}
}
}
}
});
asteroids.core.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4025__auto__,writer__4026__auto__,opts__4027__auto__){var self__ = this;
var this__4025__auto____$1 = this;var pr_pair__4028__auto__ = (function (keyval__4029__auto__){return cljs.core.pr_sequential_writer(writer__4026__auto__,cljs.core.pr_writer,""," ","",opts__4027__auto__,keyval__4029__auto__);
});return cljs.core.pr_sequential_writer(writer__4026__auto__,pr_pair__4028__auto__,"#asteroids.core.AABB{",", ","}",opts__4027__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.xmin],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.ymin],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.xmax],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$29,self__.ymax],null))], null),self__.__extmap));
});
asteroids.core.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4016__auto__,entry__4017__auto__){var self__ = this;
var this__4016__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4017__auto__))
{return cljs.core._assoc(this__4016__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4017__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4016__auto____$1,entry__4017__auto__);
}
});
asteroids.core.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.xmin],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.ymin],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.xmax],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$29,self__.ymax],null))], null),self__.__extmap));
});
asteroids.core.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4015__auto__){var self__ = this;
var this__4015__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
asteroids.core.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4007__auto__,other__4008__auto__){var self__ = this;
var this__4007__auto____$1 = this;if(cljs.core.truth_((function (){var and__3419__auto__ = other__4008__auto__;if(cljs.core.truth_(and__3419__auto__))
{return ((this__4007__auto____$1.constructor === other__4008__auto__.constructor)) && (cljs.core.equiv_map(this__4007__auto____$1,other__4008__auto__));
} else
{return and__3419__auto__;
}
})()))
{return true;
} else
{return false;
}
});
asteroids.core.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4010__auto__,G__4985){var self__ = this;
var this__4010__auto____$1 = this;return (new asteroids.core.AABB(self__.name,self__.xmin,self__.ymin,self__.xmax,self__.ymax,G__4985,self__.__extmap,self__.__hash));
});
asteroids.core.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4009__auto__){var self__ = this;
var this__4009__auto____$1 = this;return self__.__meta;
});
asteroids.core.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4020__auto__,k__4021__auto__){var self__ = this;
var this__4020__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$17,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$29,null], null), null),k__4021__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4020__auto____$1),self__.__meta),k__4021__auto__);
} else
{return (new asteroids.core.AABB(self__.name,self__.xmin,self__.ymin,self__.xmax,self__.ymax,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4021__auto__)),null));
}
});
asteroids.core.AABB.cljs$lang$type = true;
asteroids.core.AABB.cljs$lang$ctorPrSeq = (function (this__4045__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"asteroids.core/AABB");
});
asteroids.core.AABB.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__){return cljs.core._write(writer__4046__auto__,"asteroids.core/AABB");
});
asteroids.core.__GT_AABB = (function __GT_AABB(name,xmin,ymin,xmax,ymax){return (new asteroids.core.AABB(name,xmin,ymin,xmax,ymax));
});
asteroids.core.map__GT_AABB = (function map__GT_AABB(G__4987){return (new asteroids.core.AABB(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__4987),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__4987),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(G__4987),cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(G__4987),cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(G__4987),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4987,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29], 0))));
});
asteroids.core.movement = (function movement(acc,vel,max_vel,ang_acc,ang_vel,max_ang_vel){return (new asteroids.core.Movement(cljs.core.constant$keyword$30,acc,vel,max_vel,ang_acc,ang_vel,max_ang_vel));
});
asteroids.core.position = (function position(p){return (new asteroids.core.Position(cljs.core.constant$keyword$31,p));
});
asteroids.core.rotation = (function rotation(theta){return (new asteroids.core.Rotation(cljs.core.constant$keyword$32,theta));
});
asteroids.core.ttl = (function() {
var ttl = null;
var ttl__1 = (function (duration){return ttl.cljs$core$IFn$_invoke$arity$2(duration,duration);
});
var ttl__2 = (function (duration,remaining){return (new cljs.core.PersistentArrayMap(null,3,[cljs.core.constant$keyword$17,cljs.core.constant$keyword$35,cljs.core.constant$keyword$33,duration,cljs.core.constant$keyword$34,remaining],null));
});
ttl = function(duration,remaining){
switch(arguments.length){
case 1:
return ttl__1.call(this,duration);
case 2:
return ttl__2.call(this,duration,remaining);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ttl.cljs$core$IFn$_invoke$arity$1 = ttl__1;
ttl.cljs$core$IFn$_invoke$arity$2 = ttl__2;
return ttl;
})()
;
asteroids.core.aabb = (function() {
var aabb = null;
var aabb__2 = (function (p__4991,p__4992){var vec__4995 = p__4991;var xmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4995,0,null);var ymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4995,1,null);var vec__4996 = p__4992;var xmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4996,0,null);var ymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4996,1,null);return aabb.cljs$core$IFn$_invoke$arity$4(xmin,ymin,xmax,ymax);
});
var aabb__4 = (function (xmin,ymin,xmax,ymax){return (new asteroids.core.AABB(cljs.core.constant$keyword$36,xmin,ymin,xmax,ymax));
});
aabb = function(xmin,ymin,xmax,ymax){
switch(arguments.length){
case 2:
return aabb__2.call(this,xmin,ymin);
case 4:
return aabb__4.call(this,xmin,ymin,xmax,ymax);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aabb.cljs$core$IFn$_invoke$arity$2 = aabb__2;
aabb.cljs$core$IFn$_invoke$arity$4 = aabb__4;
return aabb;
})()
;
asteroids.core.mass = (function mass(m){return (new cljs.core.PersistentArrayMap(null,2,[cljs.core.constant$keyword$17,cljs.core.constant$keyword$37,cljs.core.constant$keyword$37,m],null));
});
asteroids.core.renderable = (function renderable(f){return (new cljs.core.PersistentArrayMap(null,2,[cljs.core.constant$keyword$17,cljs.core.constant$keyword$39,cljs.core.constant$keyword$38,f],null));
});
asteroids.core.player = (function player(){return (new cljs.core.PersistentArrayMap(null,1,[cljs.core.constant$keyword$17,cljs.core.constant$keyword$40],null));
});
asteroids.core.input = (function input(t){return (new cljs.core.PersistentArrayMap(null,2,[cljs.core.constant$keyword$17,cljs.core.constant$keyword$42,cljs.core.constant$keyword$41,t],null));
});
asteroids.core.identifier = (function() {
var identifier = null;
var identifier__0 = (function (){return identifier.cljs$core$IFn$_invoke$arity$1(asteroids.math.uuid());
});
var identifier__1 = (function (id){return (new cljs.core.PersistentArrayMap(null,2,[cljs.core.constant$keyword$17,cljs.core.constant$keyword$44,cljs.core.constant$keyword$43,id],null));
});
identifier = function(id){
switch(arguments.length){
case 0:
return identifier__0.call(this);
case 1:
return identifier__1.call(this,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
identifier.cljs$core$IFn$_invoke$arity$0 = identifier__0;
identifier.cljs$core$IFn$_invoke$arity$1 = identifier__1;
return identifier;
})()
;
asteroids.core.has_component_QMARK_ = (function has_component_QMARK_(entity,name){return cljs.core.contains_QMARK_(entity,name);
});
/**
* @param {...*} var_args
*/
asteroids.core.has_components_QMARK_ = (function() {
var has_components_QMARK_ = null;
var has_components_QMARK___2 = (function (entity,name){return asteroids.core.has_component_QMARK_(entity,name);
});
var has_components_QMARK___3 = (function (entity,name1,name2){return (asteroids.core.has_component_QMARK_(entity,name1)) && (asteroids.core.has_component_QMARK_(entity,name2));
});
var has_components_QMARK___4 = (function (entity,name1,name2,name3){return (asteroids.core.has_component_QMARK_(entity,name1)) && (asteroids.core.has_component_QMARK_(entity,name2)) && (asteroids.core.has_component_QMARK_(entity,name3));
});
var has_components_QMARK___5 = (function() { 
var G__4999__delegate = function (entity,name1,name2,name3,more){var and__3419__auto__ = has_components_QMARK_.cljs$core$IFn$_invoke$arity$4(entity,name1,name2,name3);if(and__3419__auto__)
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__4997_SHARP_,p2__4998_SHARP_){var and__3419__auto____$1 = p1__4997_SHARP_;if(cljs.core.truth_(and__3419__auto____$1))
{return p2__4998_SHARP_;
} else
{return and__3419__auto____$1;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(asteroids.core.has_component_QMARK_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(entity),more));
} else
{return and__3419__auto__;
}
};
var G__4999 = function (entity,name1,name2,name3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__4999__delegate.call(this,entity,name1,name2,name3,more);};
G__4999.cljs$lang$maxFixedArity = 4;
G__4999.cljs$lang$applyTo = (function (arglist__5000){
var entity = cljs.core.first(arglist__5000);
arglist__5000 = cljs.core.next(arglist__5000);
var name1 = cljs.core.first(arglist__5000);
arglist__5000 = cljs.core.next(arglist__5000);
var name2 = cljs.core.first(arglist__5000);
arglist__5000 = cljs.core.next(arglist__5000);
var name3 = cljs.core.first(arglist__5000);
var more = cljs.core.rest(arglist__5000);
return G__4999__delegate(entity,name1,name2,name3,more);
});
G__4999.cljs$core$IFn$_invoke$arity$variadic = G__4999__delegate;
return G__4999;
})()
;
has_components_QMARK_ = function(entity,name1,name2,name3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return has_components_QMARK___2.call(this,entity,name1);
case 3:
return has_components_QMARK___3.call(this,entity,name1,name2);
case 4:
return has_components_QMARK___4.call(this,entity,name1,name2,name3);
default:
return has_components_QMARK___5.cljs$core$IFn$_invoke$arity$variadic(entity,name1,name2,name3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
has_components_QMARK_.cljs$lang$maxFixedArity = 4;
has_components_QMARK_.cljs$lang$applyTo = has_components_QMARK___5.cljs$lang$applyTo;
has_components_QMARK_.cljs$core$IFn$_invoke$arity$2 = has_components_QMARK___2;
has_components_QMARK_.cljs$core$IFn$_invoke$arity$3 = has_components_QMARK___3;
has_components_QMARK_.cljs$core$IFn$_invoke$arity$4 = has_components_QMARK___4;
has_components_QMARK_.cljs$core$IFn$_invoke$arity$variadic = has_components_QMARK___5.cljs$core$IFn$_invoke$arity$variadic;
return has_components_QMARK_;
})()
;
asteroids.core.get_component = (function get_component(entity,comp){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,comp);
});
asteroids.core.assoc_component = (function assoc_component(entity,comp){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(comp),comp);
});
asteroids.core.assoc_components = (function assoc_components(entity,components){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__5001_SHARP_,p2__5002_SHARP_){return cljs.core.assoc_BANG_(p1__5001_SHARP_,cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(p2__5002_SHARP_),p2__5002_SHARP_);
}),cljs.core.transient$(entity),components));
});
/**
* @param {...*} var_args
*/
asteroids.core.entity = (function() { 
var entity__delegate = function (comps){var entity__$1 = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__5003_SHARP_,p2__5004_SHARP_){return cljs.core.assoc_BANG_(p1__5003_SHARP_,cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(p2__5004_SHARP_),p2__5004_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),comps));if(cljs.core.contains_QMARK_(entity__$1,cljs.core.constant$keyword$44))
{return entity__$1;
} else
{return asteroids.core.assoc_component(entity__$1,asteroids.core.identifier.cljs$core$IFn$_invoke$arity$0());
}
};
var entity = function (var_args){
var comps = null;if (arguments.length > 0) {
  comps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return entity__delegate.call(this,comps);};
entity.cljs$lang$maxFixedArity = 0;
entity.cljs$lang$applyTo = (function (arglist__5005){
var comps = cljs.core.seq(arglist__5005);
return entity__delegate(comps);
});
entity.cljs$core$IFn$_invoke$arity$variadic = entity__delegate;
return entity;
})()
;
asteroids.core.get_entity = (function get_entity(world,id){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45,id], null));
});
asteroids.core.assoc_entity = (function assoc_entity(world,entity){var id = cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity,cljs.core.constant$keyword$44));return cljs.core.assoc_in(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45,id], null),entity);
});
asteroids.core.get_entities = (function get_entities(world){return cljs.core.vals(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world));
});
asteroids.core.get_width = (function get_width(world){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$47], null),800);
});
asteroids.core.get_height = (function get_height(world){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$48], null),500);
});
asteroids.core.get_id = (function get_id(entity){return cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity,cljs.core.constant$keyword$44));
});
asteroids.core.get_velocity = (function get_velocity(entity){var c = asteroids.core.get_component(entity,cljs.core.constant$keyword$30);return c.velocity;
});
asteroids.core.get_acceleration = (function get_acceleration(entity){var c = asteroids.core.get_component(entity,cljs.core.constant$keyword$30);return c.vector;
});
asteroids.core.get_position = (function get_position(entity){var c = asteroids.core.get_component(entity,cljs.core.constant$keyword$31);if(cljs.core.truth_(c))
{return c.vector;
} else
{return null;
}
});
asteroids.core.get_angular_velocity = (function get_angular_velocity(entity){var c = asteroids.core.get_component(entity,cljs.core.constant$keyword$30);return c.angular_velocity;
});
asteroids.core.get_angular_acceleration = (function get_angular_acceleration(entity){var c = asteroids.core.get_component(entity,cljs.core.constant$keyword$30);return c.angular_acceleration;
});
asteroids.core.get_rotation = (function get_rotation(entity){return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity,cljs.core.constant$keyword$32));
});
asteroids.core.get_aabb = (function get_aabb(entity){return asteroids.core.get_component(entity,cljs.core.constant$keyword$36);
});
asteroids.core.get_mass = (function get_mass(entity){return cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(asteroids.core.get_component(entity,cljs.core.constant$keyword$37));
});
asteroids.core.assoc_entities = (function assoc_entities(world,entities){var entity_map = cljs.core.transient$((function (){var or__3431__auto__ = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__5006_SHARP_,p2__5007_SHARP_){return cljs.core.assoc_BANG_(p1__5006_SHARP_,asteroids.core.get_id(p2__5007_SHARP_),p2__5007_SHARP_);
}),entity_map,entities)));
});
asteroids.core.dissoc_entity = (function dissoc_entity(world,entity){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world),asteroids.core.get_id(entity)));
});
asteroids.core.dissoc_entities = (function dissoc_entities(world,entities){var entity_map = cljs.core.transient$((function (){var or__3431__auto__ = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world);if(cljs.core.truth_(or__3431__auto__))
{return or__3431__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__5008_SHARP_,p2__5009_SHARP_){return cljs.core.dissoc_BANG_(p1__5008_SHARP_,asteroids.core.get_id(p2__5009_SHARP_));
}),entity_map,entities)));
});
asteroids.core.update_ttl = (function update_ttl(entity){var component = asteroids.core.get_component(entity,cljs.core.constant$keyword$35);var duration = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(component);var remaining = (cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(component) - 1);return asteroids.core.assoc_component(entity,asteroids.core.ttl.cljs$core$IFn$_invoke$arity$2(duration,remaining));
});
asteroids.core.ttl_system = (function ttl_system(world){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.constant$keyword$45,(function (){var entities = asteroids.core.get_entities(world);var entries = cljs.core.transient$(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(world));while(true){
if(cljs.core.seq(entities))
{var entity = cljs.core.first(entities);var ttl = asteroids.core.get_component(entity,cljs.core.constant$keyword$35);if(!((ttl == null)))
{if((cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(ttl) < 2))
{{
var G__5010 = cljs.core.next(entities);
var G__5011 = cljs.core.dissoc_BANG_(entries,asteroids.core.get_id(entity));
entities = G__5010;
entries = G__5011;
continue;
}
} else
{{
var G__5012 = cljs.core.next(entities);
var G__5013 = cljs.core.assoc_BANG_(entries,asteroids.core.get_id(entity),asteroids.core.update_ttl(entity));
entities = G__5012;
entries = G__5013;
continue;
}
}
} else
{{
var G__5014 = cljs.core.next(entities);
var G__5015 = entries;
entities = G__5014;
entries = G__5015;
continue;
}
}
} else
{return cljs.core.persistent_BANG_(entries);
}
break;
}
})());
});
