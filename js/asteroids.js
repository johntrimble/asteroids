;(function(){
var m, aa = this;
function t(c) {
  var d = typeof c;
  if ("object" == d) {
    if (c) {
      if (c instanceof Array) {
        return "array";
      }
      if (c instanceof Object) {
        return d;
      }
      var e = Object.prototype.toString.call(c);
      if ("[object Window]" == e) {
        return "object";
      }
      if ("[object Array]" == e || "number" == typeof c.length && "undefined" != typeof c.splice && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == e || "undefined" != typeof c.call && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == d && "undefined" == typeof c.call) {
      return "object";
    }
  }
  return d;
}
function ba(c) {
  return "string" == typeof c;
}
function ca(c) {
  return "function" == t(c);
}
function da(c) {
  return c[ea] || (c[ea] = ++ga);
}
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(c, d, e) {
  return c.call.apply(c.bind, arguments);
}
function ia(c, d, e) {
  if (!c) {
    throw Error();
  }
  if (2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, f);
      return c.apply(d, e);
    };
  }
  return function() {
    return c.apply(d, arguments);
  };
}
function ja(c, d, e) {
  ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
  return ja.apply(null, arguments);
}
var ka = Date.now || function() {
  return+new Date;
};
function la(c, d) {
  function e() {
  }
  e.prototype = d.prototype;
  c.nc = d.prototype;
  c.prototype = new e;
  c.prototype.constructor = c;
}
;function ma(c) {
  return c.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function na(c) {
  for (var d = 0, e = 0;e < c.length;++e) {
    d = 31 * d + c.charCodeAt(e), d %= 4294967296;
  }
  return d;
}
;var oa = Array.prototype, pa = oa.indexOf ? function(c, d, e) {
  return oa.indexOf.call(c, d, e);
} : function(c, d, e) {
  e = null == e ? 0 : 0 > e ? Math.max(0, c.length + e) : e;
  if (ba(c)) {
    return ba(d) && 1 == d.length ? c.indexOf(d, e) : -1;
  }
  for (;e < c.length;e++) {
    if (e in c && c[e] === d) {
      return e;
    }
  }
  return-1;
};
function ra(c, d) {
  for (var e in c) {
    d.call(void 0, c[e], e, c);
  }
}
var sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ta(c, d) {
  for (var e, f, h = 1;h < arguments.length;h++) {
    f = arguments[h];
    for (e in f) {
      c[e] = f[e];
    }
    for (var k = 0;k < sa.length;k++) {
      e = sa[k], Object.prototype.hasOwnProperty.call(f, e) && (c[e] = f[e]);
    }
  }
}
;function ua(c, d) {
  null != c && this.append.apply(this, arguments);
}
ua.prototype.Ra = "";
ua.prototype.append = function(c, d, e) {
  this.Ra += c;
  if (null != d) {
    for (var f = 1;f < arguments.length;f++) {
      this.Ra += arguments[f];
    }
  }
  return this;
};
ua.prototype.clear = function() {
  this.Ra = "";
};
ua.prototype.toString = function() {
  return this.Ra;
};
var va, wa = null;
function xa() {
  return new v(null, 5, [ya, !0, za, !0, Aa, !1, Ba, !1, Ca, null], null);
}
function w(c) {
  return null != c && !1 !== c;
}
function Da(c) {
  return w(c) ? !1 : !0;
}
function x(c, d) {
  return c[t(null == d ? null : d)] ? !0 : c._ ? !0 : y ? !1 : null;
}
function Ea(c) {
  return null == c ? null : c.constructor;
}
function z(c, d) {
  var e = Ea(d), e = w(w(e) ? e.Ub : e) ? e.Tb : t(d);
  return Error(["No protocol method ", c, " defined for type ", e, ": ", d].join(""));
}
function Fa(c) {
  var d = c.Tb;
  return w(d) ? d : "" + A(c);
}
function Ga(c) {
  for (var d = c.length, e = Array(d), f = 0;;) {
    if (f < d) {
      e[f] = c[f], f += 1;
    } else {
      break;
    }
  }
  return e;
}
var Ha = {}, Ia = {};
function Ja(c) {
  if (c ? c.Q : c) {
    return c.Q(c);
  }
  var d;
  d = Ja[t(null == c ? null : c)];
  if (!d && (d = Ja._, !d)) {
    throw z("ICounted.-count", c);
  }
  return d.call(null, c);
}
function Ka(c) {
  if (c ? c.U : c) {
    return c.U(c);
  }
  var d;
  d = Ka[t(null == c ? null : c)];
  if (!d && (d = Ka._, !d)) {
    throw z("IEmptyableCollection.-empty", c);
  }
  return d.call(null, c);
}
var La = {};
function Ma(c, d) {
  if (c ? c.K : c) {
    return c.K(c, d);
  }
  var e;
  e = Ma[t(null == c ? null : c)];
  if (!e && (e = Ma._, !e)) {
    throw z("ICollection.-conj", c);
  }
  return e.call(null, c, d);
}
var Na = {}, B = function() {
  function c(c, d, e) {
    if (c ? c.pa : c) {
      return c.pa(c, d, e);
    }
    var l;
    l = B[t(null == c ? null : c)];
    if (!l && (l = B._, !l)) {
      throw z("IIndexed.-nth", c);
    }
    return l.call(null, c, d, e);
  }
  function d(c, d) {
    if (c ? c.F : c) {
      return c.F(c, d);
    }
    var e;
    e = B[t(null == c ? null : c)];
    if (!e && (e = B._, !e)) {
      throw z("IIndexed.-nth", c);
    }
    return e.call(null, c, d);
  }
  var e = null, e = function(f, e, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, e);
      case 3:
        return c.call(this, f, e, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), Oa = {};
function Pa(c) {
  if (c ? c.W : c) {
    return c.W(c);
  }
  var d;
  d = Pa[t(null == c ? null : c)];
  if (!d && (d = Pa._, !d)) {
    throw z("ISeq.-first", c);
  }
  return d.call(null, c);
}
function Qa(c) {
  if (c ? c.ia : c) {
    return c.ia(c);
  }
  var d;
  d = Qa[t(null == c ? null : c)];
  if (!d && (d = Qa._, !d)) {
    throw z("ISeq.-rest", c);
  }
  return d.call(null, c);
}
var Ra = {}, Sa = {}, Ta = function() {
  function c(c, d, e) {
    if (c ? c.P : c) {
      return c.P(c, d, e);
    }
    var l;
    l = Ta[t(null == c ? null : c)];
    if (!l && (l = Ta._, !l)) {
      throw z("ILookup.-lookup", c);
    }
    return l.call(null, c, d, e);
  }
  function d(c, d) {
    if (c ? c.O : c) {
      return c.O(c, d);
    }
    var e;
    e = Ta[t(null == c ? null : c)];
    if (!e && (e = Ta._, !e)) {
      throw z("ILookup.-lookup", c);
    }
    return e.call(null, c, d);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}();
function Ua(c, d) {
  if (c ? c.nb : c) {
    return c.nb(c, d);
  }
  var e;
  e = Ua[t(null == c ? null : c)];
  if (!e && (e = Ua._, !e)) {
    throw z("IAssociative.-contains-key?", c);
  }
  return e.call(null, c, d);
}
function Va(c, d, e) {
  if (c ? c.ya : c) {
    return c.ya(c, d, e);
  }
  var f;
  f = Va[t(null == c ? null : c)];
  if (!f && (f = Va._, !f)) {
    throw z("IAssociative.-assoc", c);
  }
  return f.call(null, c, d, e);
}
var Wa = {};
function Xa(c, d) {
  if (c ? c.La : c) {
    return c.La(c, d);
  }
  var e;
  e = Xa[t(null == c ? null : c)];
  if (!e && (e = Xa._, !e)) {
    throw z("IMap.-dissoc", c);
  }
  return e.call(null, c, d);
}
var Ya = {};
function Za(c) {
  if (c ? c.Eb : c) {
    return c.Eb();
  }
  var d;
  d = Za[t(null == c ? null : c)];
  if (!d && (d = Za._, !d)) {
    throw z("IMapEntry.-key", c);
  }
  return d.call(null, c);
}
function $a(c) {
  if (c ? c.Fb : c) {
    return c.Fb();
  }
  var d;
  d = $a[t(null == c ? null : c)];
  if (!d && (d = $a._, !d)) {
    throw z("IMapEntry.-val", c);
  }
  return d.call(null, c);
}
var ab = {};
function cb(c, d) {
  if (c ? c.Pb : c) {
    return c.Pb(0, d);
  }
  var e;
  e = cb[t(null == c ? null : c)];
  if (!e && (e = cb._, !e)) {
    throw z("ISet.-disjoin", c);
  }
  return e.call(null, c, d);
}
var db = {};
function eb(c, d, e) {
  if (c ? c.Hb : c) {
    return c.Hb(c, d, e);
  }
  var f;
  f = eb[t(null == c ? null : c)];
  if (!f && (f = eb._, !f)) {
    throw z("IVector.-assoc-n", c);
  }
  return f.call(null, c, d, e);
}
function fb(c) {
  if (c ? c.dc : c) {
    return c.state;
  }
  var d;
  d = fb[t(null == c ? null : c)];
  if (!d && (d = fb._, !d)) {
    throw z("IDeref.-deref", c);
  }
  return d.call(null, c);
}
var gb = {};
function hb(c) {
  if (c ? c.L : c) {
    return c.L(c);
  }
  var d;
  d = hb[t(null == c ? null : c)];
  if (!d && (d = hb._, !d)) {
    throw z("IMeta.-meta", c);
  }
  return d.call(null, c);
}
var ib = {};
function jb(c, d) {
  if (c ? c.N : c) {
    return c.N(c, d);
  }
  var e;
  e = jb[t(null == c ? null : c)];
  if (!e && (e = jb._, !e)) {
    throw z("IWithMeta.-with-meta", c);
  }
  return e.call(null, c, d);
}
var kb = {}, lb = function() {
  function c(c, d, e) {
    if (c ? c.aa : c) {
      return c.aa(c, d, e);
    }
    var l;
    l = lb[t(null == c ? null : c)];
    if (!l && (l = lb._, !l)) {
      throw z("IReduce.-reduce", c);
    }
    return l.call(null, c, d, e);
  }
  function d(c, d) {
    if (c ? c.$ : c) {
      return c.$(c, d);
    }
    var e;
    e = lb[t(null == c ? null : c)];
    if (!e && (e = lb._, !e)) {
      throw z("IReduce.-reduce", c);
    }
    return e.call(null, c, d);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}();
function mb(c, d) {
  if (c ? c.D : c) {
    return c.D(c, d);
  }
  var e;
  e = mb[t(null == c ? null : c)];
  if (!e && (e = mb._, !e)) {
    throw z("IEquiv.-equiv", c);
  }
  return e.call(null, c, d);
}
function nb(c) {
  if (c ? c.H : c) {
    return c.H(c);
  }
  var d;
  d = nb[t(null == c ? null : c)];
  if (!d && (d = nb._, !d)) {
    throw z("IHash.-hash", c);
  }
  return d.call(null, c);
}
var ob = {};
function pb(c) {
  if (c ? c.M : c) {
    return c.M(c);
  }
  var d;
  d = pb[t(null == c ? null : c)];
  if (!d && (d = pb._, !d)) {
    throw z("ISeqable.-seq", c);
  }
  return d.call(null, c);
}
var qb = {};
function C(c, d) {
  if (c ? c.Sb : c) {
    return c.Sb(0, d);
  }
  var e;
  e = C[t(null == c ? null : c)];
  if (!e && (e = C._, !e)) {
    throw z("IWriter.-write", c);
  }
  return e.call(null, c, d);
}
var rb = {};
function sb(c, d, e) {
  if (c ? c.G : c) {
    return c.G(c, d, e);
  }
  var f;
  f = sb[t(null == c ? null : c)];
  if (!f && (f = sb._, !f)) {
    throw z("IPrintWithWriter.-pr-writer", c);
  }
  return f.call(null, c, d, e);
}
function tb(c, d, e) {
  if (c ? c.Rb : c) {
    return c.Rb(0, d, e);
  }
  var f;
  f = tb[t(null == c ? null : c)];
  if (!f && (f = tb._, !f)) {
    throw z("IWatchable.-notify-watches", c);
  }
  return f.call(null, c, d, e);
}
function ub(c) {
  if (c ? c.Va : c) {
    return c.Va(c);
  }
  var d;
  d = ub[t(null == c ? null : c)];
  if (!d && (d = ub._, !d)) {
    throw z("IEditableCollection.-as-transient", c);
  }
  return d.call(null, c);
}
function vb(c, d) {
  if (c ? c.Ma : c) {
    return c.Ma(c, d);
  }
  var e;
  e = vb[t(null == c ? null : c)];
  if (!e && (e = vb._, !e)) {
    throw z("ITransientCollection.-conj!", c);
  }
  return e.call(null, c, d);
}
function wb(c) {
  if (c ? c.Na : c) {
    return c.Na(c);
  }
  var d;
  d = wb[t(null == c ? null : c)];
  if (!d && (d = wb._, !d)) {
    throw z("ITransientCollection.-persistent!", c);
  }
  return d.call(null, c);
}
function xb(c, d, e) {
  if (c ? c.Xa : c) {
    return c.Xa(c, d, e);
  }
  var f;
  f = xb[t(null == c ? null : c)];
  if (!f && (f = xb._, !f)) {
    throw z("ITransientAssociative.-assoc!", c);
  }
  return f.call(null, c, d, e);
}
function yb(c, d) {
  if (c ? c.Gb : c) {
    return c.Gb(c, d);
  }
  var e;
  e = yb[t(null == c ? null : c)];
  if (!e && (e = yb._, !e)) {
    throw z("ITransientMap.-dissoc!", c);
  }
  return e.call(null, c, d);
}
function zb(c, d, e) {
  if (c ? c.Qb : c) {
    return c.Qb(0, d, e);
  }
  var f;
  f = zb[t(null == c ? null : c)];
  if (!f && (f = zb._, !f)) {
    throw z("ITransientVector.-assoc-n!", c);
  }
  return f.call(null, c, d, e);
}
function Ab(c) {
  if (c ? c.Mb : c) {
    return c.Mb();
  }
  var d;
  d = Ab[t(null == c ? null : c)];
  if (!d && (d = Ab._, !d)) {
    throw z("IChunk.-drop-first", c);
  }
  return d.call(null, c);
}
function Bb(c) {
  if (c ? c.pb : c) {
    return c.pb(c);
  }
  var d;
  d = Bb[t(null == c ? null : c)];
  if (!d && (d = Bb._, !d)) {
    throw z("IChunkedSeq.-chunked-first", c);
  }
  return d.call(null, c);
}
function Cb(c) {
  if (c ? c.qb : c) {
    return c.qb(c);
  }
  var d;
  d = Cb[t(null == c ? null : c)];
  if (!d && (d = Cb._, !d)) {
    throw z("IChunkedSeq.-chunked-rest", c);
  }
  return d.call(null, c);
}
function Db(c) {
  if (c ? c.ob : c) {
    return c.ob(c);
  }
  var d;
  d = Db[t(null == c ? null : c)];
  if (!d && (d = Db._, !d)) {
    throw z("IChunkedNext.-chunked-next", c);
  }
  return d.call(null, c);
}
function Eb(c) {
  this.lc = c;
  this.A = 0;
  this.l = 1073741824;
}
Eb.prototype.Sb = function(c, d) {
  return this.lc.append(d);
};
function Fb(c) {
  var d = new ua;
  c.G(null, new Eb(d), xa());
  return "" + A(d);
}
function Hb(c, d) {
  if (w(Ib.c ? Ib.c(c, d) : Ib.call(null, c, d))) {
    return 0;
  }
  var e = Da(c.ha);
  if (w(e ? d.ha : e)) {
    return-1;
  }
  if (w(c.ha)) {
    if (Da(d.ha)) {
      return 1;
    }
    e = Jb.c ? Jb.c(c.ha, d.ha) : Jb.call(null, c.ha, d.ha);
    return 0 === e ? Jb.c ? Jb.c(c.name, d.name) : Jb.call(null, c.name, d.name) : e;
  }
  return Kb ? Jb.c ? Jb.c(c.name, d.name) : Jb.call(null, c.name, d.name) : null;
}
function Lb(c, d, e, f, h) {
  this.ha = c;
  this.name = d;
  this.Ia = e;
  this.Ka = f;
  this.fa = h;
  this.l = 2154168321;
  this.A = 4096;
}
m = Lb.prototype;
m.G = function(c, d) {
  return C(d, this.Ia);
};
m.H = function() {
  var c = this.Ka;
  return null != c ? c : this.Ka = c = Mb.c ? Mb.c(E.e ? E.e(this.ha) : E.call(null, this.ha), E.e ? E.e(this.name) : E.call(null, this.name)) : Mb.call(null, E.e ? E.e(this.ha) : E.call(null, this.ha), E.e ? E.e(this.name) : E.call(null, this.name));
};
m.N = function(c, d) {
  return new Lb(this.ha, this.name, this.Ia, this.Ka, d);
};
m.L = function() {
  return this.fa;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Ta.d(e, this, null);
      case 3:
        return Ta.d(e, this, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return Ta.d(c, this, null);
};
m.c = function(c, d) {
  return Ta.d(c, this, d);
};
m.D = function(c, d) {
  return d instanceof Lb ? this.Ia === d.Ia : !1;
};
m.toString = function() {
  return this.Ia;
};
function G(c) {
  if (null == c) {
    return null;
  }
  if (c && (c.l & 8388608 || c.wc)) {
    return c.M(null);
  }
  if (c instanceof Array || "string" === typeof c) {
    return 0 === c.length ? null : new Nb(c, 0);
  }
  if (x(ob, c)) {
    return pb(c);
  }
  if (y) {
    throw Error([A(c), A("is not ISeqable")].join(""));
  }
  return null;
}
function H(c) {
  if (null == c) {
    return null;
  }
  if (c && (c.l & 64 || c.Wa)) {
    return c.W(null);
  }
  c = G(c);
  return null == c ? null : Pa(c);
}
function J(c) {
  return null != c ? c && (c.l & 64 || c.Wa) ? c.ia(null) : (c = G(c)) ? Qa(c) : K : K;
}
function L(c) {
  return null == c ? null : c && (c.l & 128 || c.fb) ? c.Z(null) : G(J(c));
}
var Ib = function() {
  function c(c, d) {
    return null == c ? null == d : c === d || mb(c, d);
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      for (;;) {
        if (d.c(c, f)) {
          if (L(h)) {
            c = f, f = H(h), h = L(h);
          } else {
            return d.c(f, H(h));
          }
        } else {
          return!1;
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.e = function() {
    return!0;
  };
  d.c = c;
  d.i = e.i;
  return d;
}();
Ia["null"] = !0;
Ja["null"] = function() {
  return 0;
};
Date.prototype.D = function(c, d) {
  return d instanceof Date && this.toString() === d.toString();
};
mb.number = function(c, d) {
  return c === d;
};
gb["function"] = !0;
hb["function"] = function() {
  return null;
};
Ha["function"] = !0;
nb._ = function(c) {
  return da(c);
};
var Ob = function() {
  function c(c, d, e, f) {
    for (var n = Ja(c);;) {
      if (f < n) {
        e = d.c ? d.c(e, B.c(c, f)) : d.call(null, e, B.c(c, f)), f += 1;
      } else {
        return e;
      }
    }
  }
  function d(c, d, e) {
    for (var f = Ja(c), n = 0;;) {
      if (n < f) {
        e = d.c ? d.c(e, B.c(c, n)) : d.call(null, e, B.c(c, n)), n += 1;
      } else {
        return e;
      }
    }
  }
  function e(c, d) {
    var e = Ja(c);
    if (0 === e) {
      return d.q ? d.q() : d.call(null);
    }
    for (var f = B.c(c, 0), n = 1;;) {
      if (n < e) {
        f = d.c ? d.c(f, B.c(c, n)) : d.call(null, f, B.c(c, n)), n += 1;
      } else {
        return f;
      }
    }
  }
  var f = null, f = function(f, k, l, p) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.o = c;
  return f;
}(), Pb = function() {
  function c(c, d, e, f) {
    for (var n = c.length;;) {
      if (f < n) {
        e = d.c ? d.c(e, c[f]) : d.call(null, e, c[f]), f += 1;
      } else {
        return e;
      }
    }
  }
  function d(c, d, e) {
    for (var f = c.length, n = 0;;) {
      if (n < f) {
        e = d.c ? d.c(e, c[n]) : d.call(null, e, c[n]), n += 1;
      } else {
        return e;
      }
    }
  }
  function e(c, d) {
    var e = c.length;
    if (0 === c.length) {
      return d.q ? d.q() : d.call(null);
    }
    for (var f = c[0], n = 1;;) {
      if (n < e) {
        f = d.c ? d.c(f, c[n]) : d.call(null, f, c[n]), n += 1;
      } else {
        return f;
      }
    }
  }
  var f = null, f = function(f, k, l, p) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.o = c;
  return f;
}();
function Qb(c) {
  return c ? c.l & 2 || c.cc ? !0 : c.l ? !1 : x(Ia, c) : x(Ia, c);
}
function Rb(c) {
  return c ? c.l & 16 || c.Nb ? !0 : c.l ? !1 : x(Na, c) : x(Na, c);
}
function Nb(c, d) {
  this.f = c;
  this.s = d;
  this.A = 0;
  this.l = 166199550;
}
m = Nb.prototype;
m.H = function() {
  return Sb.e ? Sb.e(this) : Sb.call(null, this);
};
m.Z = function() {
  return this.s + 1 < this.f.length ? new Nb(this.f, this.s + 1) : null;
};
m.K = function(c, d) {
  return N.c ? N.c(d, this) : N.call(null, d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return Pb.o(this.f, d, this.f[this.s], this.s + 1);
};
m.aa = function(c, d, e) {
  return Pb.o(this.f, d, e, this.s);
};
m.M = function() {
  return this;
};
m.Q = function() {
  return this.f.length - this.s;
};
m.W = function() {
  return this.f[this.s];
};
m.ia = function() {
  return this.s + 1 < this.f.length ? new Nb(this.f, this.s + 1) : K;
};
m.D = function(c, d) {
  return Tb.c ? Tb.c(this, d) : Tb.call(null, this, d);
};
m.F = function(c, d) {
  var e = d + this.s;
  return e < this.f.length ? this.f[e] : null;
};
m.pa = function(c, d, e) {
  c = d + this.s;
  return c < this.f.length ? this.f[c] : e;
};
m.U = function() {
  return K;
};
var Ub = function() {
  function c(c, d) {
    return d < c.length ? new Nb(c, d) : null;
  }
  function d(c) {
    return e.c(c, 0);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}(), M = function() {
  function c(c, d) {
    return Ub.c(c, d);
  }
  function d(c) {
    return Ub.c(c, 0);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
mb._ = function(c, d) {
  return c === d;
};
var Vb = function() {
  function c(c, d) {
    return null != c ? Ma(c, d) : Ma(K, d);
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      for (;;) {
        if (w(h)) {
          c = d.c(c, f), f = H(h), h = L(h);
        } else {
          return d.c(c, f);
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.c = c;
  d.i = e.i;
  return d;
}();
function O(c) {
  if (null != c) {
    if (c && (c.l & 2 || c.cc)) {
      c = c.Q(null);
    } else {
      if (c instanceof Array) {
        c = c.length;
      } else {
        if ("string" === typeof c) {
          c = c.length;
        } else {
          if (x(Ia, c)) {
            c = Ja(c);
          } else {
            if (y) {
              a: {
                c = G(c);
                for (var d = 0;;) {
                  if (Qb(c)) {
                    c = d + Ja(c);
                    break a;
                  }
                  c = L(c);
                  d += 1;
                }
                c = void 0;
              }
            } else {
              c = null;
            }
          }
        }
      }
    }
  } else {
    c = 0;
  }
  return c;
}
var Wb = function() {
  function c(c, d, e) {
    for (;;) {
      if (null == c) {
        return e;
      }
      if (0 === d) {
        return G(c) ? H(c) : e;
      }
      if (Rb(c)) {
        return B.d(c, d, e);
      }
      if (G(c)) {
        c = L(c), d -= 1;
      } else {
        return y ? e : null;
      }
    }
  }
  function d(c, d) {
    for (;;) {
      if (null == c) {
        throw Error("Index out of bounds");
      }
      if (0 === d) {
        if (G(c)) {
          return H(c);
        }
        throw Error("Index out of bounds");
      }
      if (Rb(c)) {
        return B.c(c, d);
      }
      if (G(c)) {
        var e = L(c), l = d - 1;
        c = e;
        d = l;
      } else {
        if (y) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), P = function() {
  function c(c, d, e) {
    if (null != c) {
      if (c && (c.l & 16 || c.Nb)) {
        return c.pa(null, d, e);
      }
      if (c instanceof Array || "string" === typeof c) {
        return d < c.length ? c[d] : e;
      }
      if (x(Na, c)) {
        return B.c(c, d);
      }
      if (y) {
        if (c ? c.l & 64 || c.Wa || (c.l ? 0 : x(Oa, c)) : x(Oa, c)) {
          return Wb.d(c, d, e);
        }
        throw Error([A("nth not supported on this type "), A(Fa(Ea(c)))].join(""));
      }
      return null;
    }
    return e;
  }
  function d(c, d) {
    if (null == c) {
      return null;
    }
    if (c && (c.l & 16 || c.Nb)) {
      return c.F(null, d);
    }
    if (c instanceof Array || "string" === typeof c) {
      return d < c.length ? c[d] : null;
    }
    if (x(Na, c)) {
      return B.c(c, d);
    }
    if (y) {
      if (c ? c.l & 64 || c.Wa || (c.l ? 0 : x(Oa, c)) : x(Oa, c)) {
        return Wb.c(c, d);
      }
      throw Error([A("nth not supported on this type "), A(Fa(Ea(c)))].join(""));
    }
    return null;
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), R = function() {
  function c(c, d, e) {
    return null != c ? c && (c.l & 256 || c.Ob) ? c.P(null, d, e) : c instanceof Array ? d < c.length ? c[d] : e : "string" === typeof c ? d < c.length ? c[d] : e : x(Sa, c) ? Ta.d(c, d, e) : y ? e : null : e;
  }
  function d(c, d) {
    return null == c ? null : c && (c.l & 256 || c.Ob) ? c.O(null, d) : c instanceof Array ? d < c.length ? c[d] : null : "string" === typeof c ? d < c.length ? c[d] : null : x(Sa, c) ? Ta.c(c, d) : null;
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), S = function() {
  function c(c, d, e) {
    return null != c ? Va(c, d, e) : Xb.c ? Xb.c([d], [e]) : Xb.call(null, [d], [e]);
  }
  var d = null, e = function() {
    function c(d, f, p, n) {
      var s = null;
      3 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, p, s);
    }
    function e(c, f, h, n) {
      for (;;) {
        if (c = d.d(c, f, h), w(n)) {
          f = H(n), h = H(L(n)), n = L(L(n));
        } else {
          return c;
        }
      }
    }
    c.m = 3;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var n = H(c);
      c = J(c);
      return e(d, f, n, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, k);
      default:
        return e.i(d, h, k, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 3;
  d.j = e.j;
  d.d = c;
  d.i = e.i;
  return d;
}(), Yb = function() {
  function c(c, d) {
    return null == c ? null : Xa(c, d);
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      for (;;) {
        if (null == c) {
          return null;
        }
        c = d.c(c, f);
        if (w(h)) {
          f = H(h), h = L(h);
        } else {
          return c;
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.e = function(c) {
    return c;
  };
  d.c = c;
  d.i = e.i;
  return d;
}();
function Zb(c) {
  var d = ca(c);
  return d ? d : c ? w(w(null) ? null : c.bc) ? !0 : c.Ib ? !1 : x(Ha, c) : x(Ha, c);
}
var ac = function $b(d, e) {
  return Zb(d) && !(d ? d.l & 262144 || d.Ac || (d.l ? 0 : x(ib, d)) : x(ib, d)) ? $b(function() {
    "undefined" === typeof va && (va = function(d, e, k, l) {
      this.meta = d;
      this.ab = e;
      this.qc = k;
      this.kc = l;
      this.A = 0;
      this.l = 393217;
    }, va.Ub = !0, va.Tb = "cljs.core/t5991", va.ic = function(d) {
      return C(d, "cljs.core/t5991");
    }, va.prototype.call = function() {
      function d(f, l) {
        f = this;
        var p = null;
        1 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 1), 0));
        return e.call(this, f, p);
      }
      function e(d, f) {
        return T.c ? T.c(d.ab, f) : T.call(null, d.ab, f);
      }
      d.m = 1;
      d.j = function(d) {
        var f = H(d);
        d = J(d);
        return e(f, d);
      };
      d.i = e;
      return d;
    }(), va.prototype.apply = function(d, e) {
      return this.call.apply(this, [this].concat(Ga(e)));
    }, va.prototype.c = function() {
      function d(f) {
        var l = null;
        0 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, l);
      }
      function e(d) {
        return T.c ? T.c(self__.ab, d) : T.call(null, self__.ab, d);
      }
      d.m = 0;
      d.j = function(d) {
        d = G(d);
        return e(d);
      };
      d.i = e;
      return d;
    }(), va.prototype.bc = !0, va.prototype.L = function() {
      return this.kc;
    }, va.prototype.N = function(d, e) {
      return new va(this.meta, this.ab, this.qc, e);
    });
    return new va(e, d, $b, null);
  }(), e) : null == d ? null : jb(d, e);
};
function bc(c) {
  var d = null != c;
  return(d ? c ? c.l & 131072 || c.fc || (c.l ? 0 : x(gb, c)) : x(gb, c) : d) ? hb(c) : null;
}
var cc = function() {
  function c(c, d) {
    return null == c ? null : cb(c, d);
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      for (;;) {
        if (null == c) {
          return null;
        }
        c = d.c(c, f);
        if (w(h)) {
          f = H(h), h = L(h);
        } else {
          return c;
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.e = function(c) {
    return c;
  };
  d.c = c;
  d.i = e.i;
  return d;
}(), dc = {}, ec = 0;
function E(c) {
  if (c && (c.l & 4194304 || c.uc)) {
    c = c.H(null);
  } else {
    if ("number" === typeof c) {
      c = Math.floor(c) % 2147483647;
    } else {
      if (!0 === c) {
        c = 1;
      } else {
        if (!1 === c) {
          c = 0;
        } else {
          if ("string" === typeof c) {
            255 < ec && (dc = {}, ec = 0);
            var d = dc[c];
            "number" !== typeof d && (d = na(c), dc[c] = d, ec += 1);
            c = d;
          } else {
            c = null == c ? 0 : y ? nb(c) : null;
          }
        }
      }
    }
  }
  return c;
}
function fc(c) {
  return c ? c.l & 16777216 || c.xc ? !0 : c.l ? !1 : x(qb, c) : x(qb, c);
}
function gc(c) {
  return null == c ? !1 : c ? c.l & 1024 || c.vc ? !0 : c.l ? !1 : x(Wa, c) : x(Wa, c);
}
function hc(c) {
  return c ? c.l & 16384 || c.zc ? !0 : c.l ? !1 : x(db, c) : x(db, c);
}
function ic(c) {
  return c ? c.A & 512 || c.rc ? !0 : !1 : !1;
}
function jc(c) {
  var d = [];
  ra(c, function(c, f) {
    return d.push(f);
  });
  return d;
}
function kc(c, d, e, f, h) {
  for (;0 !== h;) {
    e[f] = c[d], f += 1, h -= 1, d += 1;
  }
}
var lc = {};
function mc(c) {
  return null == c ? !1 : c ? c.l & 64 || c.Wa ? !0 : c.l ? !1 : x(Oa, c) : x(Oa, c);
}
function nc(c) {
  return w(c) ? !0 : !1;
}
function oc(c, d) {
  return R.d(c, d, lc) === lc ? !1 : !0;
}
function Jb(c, d) {
  if (c === d) {
    return 0;
  }
  if (null == c) {
    return-1;
  }
  if (null == d) {
    return 1;
  }
  if (Ea(c) === Ea(d)) {
    return c && (c.A & 2048 || c.cb) ? c.eb(null, d) : c > d ? 1 : c < d ? -1 : 0;
  }
  if (y) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var pc = function() {
  function c(c, d, e, l) {
    for (;;) {
      var p = Jb(P.c(c, l), P.c(d, l));
      if (0 === p && l + 1 < e) {
        l += 1;
      } else {
        return p;
      }
    }
  }
  function d(c, d) {
    var k = O(c), l = O(d);
    return k < l ? -1 : k > l ? 1 : y ? e.o(c, d, k, 0) : null;
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 4:
        return c.call(this, e, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.o = c;
  return e;
}(), qc = function() {
  function c(c, d, e) {
    for (e = G(e);;) {
      if (e) {
        d = c.c ? c.c(d, H(e)) : c.call(null, d, H(e)), e = L(e);
      } else {
        return d;
      }
    }
  }
  function d(c, d) {
    var e = G(d);
    return e ? U.d ? U.d(c, H(e), L(e)) : U.call(null, c, H(e), L(e)) : c.q ? c.q() : c.call(null);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), U = function() {
  function c(c, d, e) {
    return e && (e.l & 524288 || e.hc) ? e.aa(null, c, d) : e instanceof Array ? Pb.d(e, c, d) : "string" === typeof e ? Pb.d(e, c, d) : x(kb, e) ? lb.d(e, c, d) : y ? qc.d(c, d, e) : null;
  }
  function d(c, d) {
    return d && (d.l & 524288 || d.hc) ? d.$(null, c) : d instanceof Array ? Pb.c(d, c) : "string" === typeof d ? Pb.c(d, c) : x(kb, d) ? lb.c(d, c) : y ? qc.c(c, d) : null;
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}();
function rc(c) {
  return 0 <= c ? Math.floor.e ? Math.floor.e(c) : Math.floor.call(null, c) : Math.ceil.e ? Math.ceil.e(c) : Math.ceil.call(null, c);
}
function sc(c, d) {
  return(c % d + d) % d;
}
var tc = function() {
  function c(c) {
    return c * e.q();
  }
  function d() {
    return Math.random.q ? Math.random.q() : Math.random.call(null);
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.e = c;
  return e;
}();
function uc(c) {
  return rc(tc.e(c));
}
function vc(c) {
  c -= c >> 1 & 1431655765;
  c = (c & 858993459) + (c >> 2 & 858993459);
  return 16843009 * (c + (c >> 4) & 252645135) >> 24;
}
function wc(c, d) {
  for (var e = d, f = G(c);;) {
    if (f && 0 < e) {
      e -= 1, f = L(f);
    } else {
      return f;
    }
  }
}
var A = function() {
  function c(c) {
    return null == c ? "" : c.toString();
  }
  var d = null, e = function() {
    function c(d, f) {
      var p = null;
      1 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, d, p);
    }
    function e(c, f) {
      for (var h = new ua(d.e(c)), n = f;;) {
        if (w(n)) {
          h = h.append(d.e(H(n))), n = L(n);
        } else {
          return h.toString();
        }
      }
    }
    c.m = 1;
    c.j = function(c) {
      var d = H(c);
      c = J(c);
      return e(d, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return c.call(this, d);
      default:
        return e.i(d, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 1;
  d.j = e.j;
  d.q = function() {
    return "";
  };
  d.e = c;
  d.i = e.i;
  return d;
}();
function Tb(c, d) {
  return nc(fc(d) ? function() {
    for (var e = G(c), f = G(d);;) {
      if (null == e) {
        return null == f;
      }
      if (null == f) {
        return!1;
      }
      if (Ib.c(H(e), H(f))) {
        e = L(e), f = L(f);
      } else {
        return y ? !1 : null;
      }
    }
  }() : null);
}
function Mb(c, d) {
  return c ^ d + 2654435769 + (c << 6) + (c >> 2);
}
function Sb(c) {
  if (G(c)) {
    var d = E(H(c));
    for (c = L(c);;) {
      if (null == c) {
        return d;
      }
      d = Mb(d, E(H(c)));
      c = L(c);
    }
  } else {
    return 0;
  }
}
function xc(c) {
  var d = 0;
  for (c = G(c);;) {
    if (c) {
      var e = H(c), d = (d + (E(yc.e ? yc.e(e) : yc.call(null, e)) ^ E(zc.e ? zc.e(e) : zc.call(null, e)))) % 4503599627370496;
      c = L(c);
    } else {
      return d;
    }
  }
}
function Ac(c, d, e, f, h) {
  this.meta = c;
  this.first = d;
  this.Ba = e;
  this.count = f;
  this.n = h;
  this.A = 0;
  this.l = 65937646;
}
m = Ac.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.Z = function() {
  return 1 === this.count ? null : this.Ba;
};
m.K = function(c, d) {
  return new Ac(this.meta, d, this, this.count + 1, null);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.Q = function() {
  return this.count;
};
m.W = function() {
  return this.first;
};
m.ia = function() {
  return 1 === this.count ? K : this.Ba;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Ac(d, this.first, this.Ba, this.count, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return K;
};
function Bc(c) {
  this.meta = c;
  this.A = 0;
  this.l = 65937614;
}
m = Bc.prototype;
m.H = function() {
  return 0;
};
m.Z = function() {
  return null;
};
m.K = function(c, d) {
  return new Ac(this.meta, d, null, 1, null);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return null;
};
m.Q = function() {
  return 0;
};
m.W = function() {
  return null;
};
m.ia = function() {
  return K;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Bc(d);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return this;
};
var K = new Bc(null), Cc = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    var d;
    if (c instanceof Nb && 0 === c.s) {
      d = c.f;
    } else {
      a: {
        for (d = [];;) {
          if (null != c) {
            d.push(c.W(null)), c = c.Z(null);
          } else {
            break a;
          }
        }
        d = void 0;
      }
    }
    c = d.length;
    for (var h = K;;) {
      if (0 < c) {
        var k = c - 1, h = h.K(null, d[c - 1]);
        c = k;
      } else {
        return h;
      }
    }
  }
  c.m = 0;
  c.j = function(c) {
    c = G(c);
    return d(c);
  };
  c.i = d;
  return c;
}();
function Dc(c, d, e, f) {
  this.meta = c;
  this.first = d;
  this.Ba = e;
  this.n = f;
  this.A = 0;
  this.l = 65929452;
}
m = Dc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.Z = function() {
  return null == this.Ba ? null : G(this.Ba);
};
m.K = function(c, d) {
  return new Dc(null, d, this, this.n);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.first;
};
m.ia = function() {
  return null == this.Ba ? K : this.Ba;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Dc(d, this.first, this.Ba, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ac(K, this.meta);
};
function N(c, d) {
  var e = null == d;
  return(e ? e : d && (d.l & 64 || d.Wa)) ? new Dc(null, c, d, null) : new Dc(null, c, G(d), null);
}
function V(c, d, e, f) {
  this.ha = c;
  this.name = d;
  this.Fa = e;
  this.Ka = f;
  this.l = 2153775105;
  this.A = 4096;
}
m = V.prototype;
m.G = function(c, d) {
  return C(d, [A(":"), A(this.Fa)].join(""));
};
m.H = function() {
  null == this.Ka && (this.Ka = Mb(E(this.ha), E(this.name)) + 2654435769);
  return this.Ka;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return R.c(e, this);
      case 3:
        return R.d(e, this, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return R.c(c, this);
};
m.c = function(c, d) {
  return R.d(c, this, d);
};
m.D = function(c, d) {
  return d instanceof V ? this.Fa === d.Fa : !1;
};
m.toString = function() {
  return[A(":"), A(this.Fa)].join("");
};
function W(c, d) {
  return c === d ? !0 : c instanceof V && d instanceof V ? c.Fa === d.Fa : !1;
}
var Fc = function() {
  function c(c, d) {
    return new V(c, d, [A(w(c) ? [A(c), A("/")].join("") : null), A(d)].join(""), null);
  }
  function d(c) {
    if (c instanceof V) {
      return c;
    }
    if (c instanceof Lb) {
      var d;
      if (c && (c.A & 4096 || c.gc)) {
        d = c.ha;
      } else {
        throw Error([A("Doesn't support namespace: "), A(c)].join(""));
      }
      return new V(d, Ec.e ? Ec.e(c) : Ec.call(null, c), c.Ia, null);
    }
    return "string" === typeof c ? (d = c.split("/"), 2 === d.length ? new V(d[0], d[1], c, null) : new V(null, d[0], c, null)) : null;
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
function Gc(c, d, e, f) {
  this.meta = c;
  this.Ta = d;
  this.J = e;
  this.n = f;
  this.A = 0;
  this.l = 32374988;
}
m = Gc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.Z = function() {
  pb(this);
  return null == this.J ? null : L(this.J);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
function Hc(c) {
  null != c.Ta && (c.J = c.Ta.q ? c.Ta.q() : c.Ta.call(null), c.Ta = null);
  return c.J;
}
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  Hc(this);
  if (null == this.J) {
    return null;
  }
  for (var c = this.J;;) {
    if (c instanceof Gc) {
      c = Hc(c);
    } else {
      return this.J = c, G(this.J);
    }
  }
};
m.W = function() {
  pb(this);
  return null == this.J ? null : H(this.J);
};
m.ia = function() {
  pb(this);
  return null != this.J ? J(this.J) : K;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Gc(d, this.Ta, this.J, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ac(K, this.meta);
};
function Ic(c, d) {
  this.mb = c;
  this.end = d;
  this.A = 0;
  this.l = 2;
}
Ic.prototype.Q = function() {
  return this.end;
};
Ic.prototype.add = function(c) {
  this.mb[this.end] = c;
  return this.end += 1;
};
Ic.prototype.la = function() {
  var c = new Jc(this.mb, 0, this.end);
  this.mb = null;
  return c;
};
function Jc(c, d, e) {
  this.f = c;
  this.off = d;
  this.end = e;
  this.A = 0;
  this.l = 524306;
}
m = Jc.prototype;
m.$ = function(c, d) {
  return Pb.o(this.f, d, this.f[this.off], this.off + 1);
};
m.aa = function(c, d, e) {
  return Pb.o(this.f, d, e, this.off);
};
m.Mb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Jc(this.f, this.off + 1, this.end);
};
m.F = function(c, d) {
  return this.f[this.off + d];
};
m.pa = function(c, d, e) {
  return 0 <= d && d < this.end - this.off ? this.f[this.off + d] : e;
};
m.Q = function() {
  return this.end - this.off;
};
var Kc = function() {
  function c(c, d, e) {
    return new Jc(c, d, e);
  }
  function d(c, d) {
    return new Jc(c, d, c.length);
  }
  function e(c) {
    return new Jc(c, 0, c.length);
  }
  var f = null, f = function(f, k, l) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, k);
      case 3:
        return c.call(this, f, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.e = e;
  f.c = d;
  f.d = c;
  return f;
}();
function Lc(c, d, e, f) {
  this.la = c;
  this.wa = d;
  this.meta = e;
  this.n = f;
  this.l = 31850732;
  this.A = 1536;
}
m = Lc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.Z = function() {
  if (1 < Ja(this.la)) {
    return new Lc(Ab(this.la), this.wa, this.meta, null);
  }
  var c = pb(this.wa);
  return null == c ? null : c;
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return B.c(this.la, 0);
};
m.ia = function() {
  return 1 < Ja(this.la) ? new Lc(Ab(this.la), this.wa, this.meta, null) : null == this.wa ? K : this.wa;
};
m.ob = function() {
  return null == this.wa ? null : this.wa;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Lc(this.la, this.wa, d, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ac(K, this.meta);
};
m.pb = function() {
  return this.la;
};
m.qb = function() {
  return null == this.wa ? K : this.wa;
};
function Mc(c, d) {
  return 0 === Ja(c) ? d : new Lc(c, d, null, null);
}
function Nc(c) {
  for (var d = [];;) {
    if (G(c)) {
      d.push(H(c)), c = L(c);
    } else {
      return d;
    }
  }
}
function Oc(c, d) {
  if (Qb(c)) {
    return O(c);
  }
  for (var e = c, f = d, h = 0;;) {
    if (0 < f && G(e)) {
      e = L(e), f -= 1, h += 1;
    } else {
      return h;
    }
  }
}
var Qc = function Pc(d) {
  return null == d ? null : null == L(d) ? G(H(d)) : y ? N(H(d), Pc(L(d))) : null;
}, Rc = function() {
  function c(c, d) {
    return new Gc(null, function() {
      var e = G(c);
      return e ? ic(e) ? Mc(Bb(e), f.c(Cb(e), d)) : N(H(e), f.c(J(e), d)) : d;
    }, null, null);
  }
  function d(c) {
    return new Gc(null, function() {
      return c;
    }, null, null);
  }
  function e() {
    return new Gc(null, function() {
      return null;
    }, null, null);
  }
  var f = null, h = function() {
    function c(e, f, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, k);
    }
    function d(c, e, h) {
      return function u(c, d) {
        return new Gc(null, function() {
          var e = G(c);
          return e ? ic(e) ? Mc(Bb(e), u(Cb(e), d)) : N(H(e), u(J(e), d)) : w(d) ? u(H(d), L(d)) : null;
        }, null, null);
      }(f.c(c, e), h);
    }
    c.m = 2;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return d(e, f, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, p) {
    switch(arguments.length) {
      case 0:
        return e.call(this);
      case 1:
        return d.call(this, f);
      case 2:
        return c.call(this, f, l);
      default:
        return h.i(f, l, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.m = 2;
  f.j = h.j;
  f.q = e;
  f.e = d;
  f.c = c;
  f.i = h.i;
  return f;
}(), Sc = function() {
  function c(c, d, e, f) {
    return N(c, N(d, N(e, f)));
  }
  function d(c, d, e) {
    return N(c, N(d, e));
  }
  var e = null, f = function() {
    function c(e, f, h, s, q) {
      var u = null;
      4 < arguments.length && (u = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, s, u);
    }
    function d(c, e, f, h, k) {
      return N(c, N(e, N(f, N(h, Qc(k)))));
    }
    c.m = 4;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var q = H(c);
      c = J(c);
      return d(e, f, h, q, c);
    };
    c.i = d;
    return c;
  }(), e = function(e, k, l, p, n) {
    switch(arguments.length) {
      case 1:
        return G(e);
      case 2:
        return N(e, k);
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      default:
        return f.i(e, k, l, p, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 4;
  e.j = f.j;
  e.e = function(c) {
    return G(c);
  };
  e.c = function(c, d) {
    return N(c, d);
  };
  e.d = d;
  e.o = c;
  e.i = f.i;
  return e;
}();
function Tc(c) {
  return ub(c);
}
function Uc(c) {
  return wb(c);
}
function Vc(c, d, e) {
  return xb(c, d, e);
}
function Wc(c, d) {
  return yb(c, d);
}
function Xc(c, d, e) {
  var f = G(e);
  if (0 === d) {
    return c.q ? c.q() : c.call(null);
  }
  e = Pa(f);
  var h = Qa(f);
  if (1 === d) {
    return c.e ? c.e(e) : c.e ? c.e(e) : c.call(null, e);
  }
  var f = Pa(h), k = Qa(h);
  if (2 === d) {
    return c.c ? c.c(e, f) : c.c ? c.c(e, f) : c.call(null, e, f);
  }
  var h = Pa(k), l = Qa(k);
  if (3 === d) {
    return c.d ? c.d(e, f, h) : c.d ? c.d(e, f, h) : c.call(null, e, f, h);
  }
  var k = Pa(l), p = Qa(l);
  if (4 === d) {
    return c.o ? c.o(e, f, h, k) : c.o ? c.o(e, f, h, k) : c.call(null, e, f, h, k);
  }
  l = Pa(p);
  p = Qa(p);
  if (5 === d) {
    return c.I ? c.I(e, f, h, k, l) : c.I ? c.I(e, f, h, k, l) : c.call(null, e, f, h, k, l);
  }
  c = Pa(p);
  var n = Qa(p);
  if (6 === d) {
    return c.ra ? c.ra(e, f, h, k, l, c) : c.ra ? c.ra(e, f, h, k, l, c) : c.call(null, e, f, h, k, l, c);
  }
  var p = Pa(n), s = Qa(n);
  if (7 === d) {
    return c.Sa ? c.Sa(e, f, h, k, l, c, p) : c.Sa ? c.Sa(e, f, h, k, l, c, p) : c.call(null, e, f, h, k, l, c, p);
  }
  var n = Pa(s), q = Qa(s);
  if (8 === d) {
    return c.Cb ? c.Cb(e, f, h, k, l, c, p, n) : c.Cb ? c.Cb(e, f, h, k, l, c, p, n) : c.call(null, e, f, h, k, l, c, p, n);
  }
  var s = Pa(q), u = Qa(q);
  if (9 === d) {
    return c.Db ? c.Db(e, f, h, k, l, c, p, n, s) : c.Db ? c.Db(e, f, h, k, l, c, p, n, s) : c.call(null, e, f, h, k, l, c, p, n, s);
  }
  var q = Pa(u), D = Qa(u);
  if (10 === d) {
    return c.rb ? c.rb(e, f, h, k, l, c, p, n, s, q) : c.rb ? c.rb(e, f, h, k, l, c, p, n, s, q) : c.call(null, e, f, h, k, l, c, p, n, s, q);
  }
  var u = Pa(D), F = Qa(D);
  if (11 === d) {
    return c.sb ? c.sb(e, f, h, k, l, c, p, n, s, q, u) : c.sb ? c.sb(e, f, h, k, l, c, p, n, s, q, u) : c.call(null, e, f, h, k, l, c, p, n, s, q, u);
  }
  var D = Pa(F), I = Qa(F);
  if (12 === d) {
    return c.tb ? c.tb(e, f, h, k, l, c, p, n, s, q, u, D) : c.tb ? c.tb(e, f, h, k, l, c, p, n, s, q, u, D) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D);
  }
  var F = Pa(I), Q = Qa(I);
  if (13 === d) {
    return c.ub ? c.ub(e, f, h, k, l, c, p, n, s, q, u, D, F) : c.ub ? c.ub(e, f, h, k, l, c, p, n, s, q, u, D, F) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F);
  }
  var I = Pa(Q), fa = Qa(Q);
  if (14 === d) {
    return c.vb ? c.vb(e, f, h, k, l, c, p, n, s, q, u, D, F, I) : c.vb ? c.vb(e, f, h, k, l, c, p, n, s, q, u, D, F, I) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I);
  }
  var Q = Pa(fa), qa = Qa(fa);
  if (15 === d) {
    return c.wb ? c.wb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q) : c.wb ? c.wb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q);
  }
  var fa = Pa(qa), bb = Qa(qa);
  if (16 === d) {
    return c.xb ? c.xb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa) : c.xb ? c.xb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa);
  }
  var qa = Pa(bb), Gb = Qa(bb);
  if (17 === d) {
    return c.yb ? c.yb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa) : c.yb ? c.yb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa);
  }
  var bb = Pa(Gb), Dd = Qa(Gb);
  if (18 === d) {
    return c.zb ? c.zb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb) : c.zb ? c.zb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb);
  }
  Gb = Pa(Dd);
  Dd = Qa(Dd);
  if (19 === d) {
    return c.Ab ? c.Ab(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb, Gb) : c.Ab ? c.Ab(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb, Gb) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb, Gb);
  }
  var mf = Pa(Dd);
  Qa(Dd);
  if (20 === d) {
    return c.Bb ? c.Bb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb, Gb, mf) : c.Bb ? c.Bb(e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb, Gb, mf) : c.call(null, e, f, h, k, l, c, p, n, s, q, u, D, F, I, Q, fa, qa, bb, Gb, mf);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function c(c, d, e, f, h) {
    d = Sc.o(d, e, f, h);
    e = c.m;
    return c.j ? (f = Oc(d, e + 1), f <= e ? Xc(c, f, d) : c.j(d)) : c.apply(c, Nc(d));
  }
  function d(c, d, e, f) {
    d = Sc.d(d, e, f);
    e = c.m;
    return c.j ? (f = Oc(d, e + 1), f <= e ? Xc(c, f, d) : c.j(d)) : c.apply(c, Nc(d));
  }
  function e(c, d, e) {
    d = Sc.c(d, e);
    e = c.m;
    if (c.j) {
      var f = Oc(d, e + 1);
      return f <= e ? Xc(c, f, d) : c.j(d);
    }
    return c.apply(c, Nc(d));
  }
  function f(c, d) {
    var e = c.m;
    if (c.j) {
      var f = Oc(d, e + 1);
      return f <= e ? Xc(c, f, d) : c.j(d);
    }
    return c.apply(c, Nc(d));
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, F) {
      var I = null;
      5 < arguments.length && (I = M(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, I);
    }
    function d(c, e, f, h, k, l) {
      e = N(e, N(f, N(h, N(k, Qc(l)))));
      f = c.m;
      return c.j ? (h = Oc(e, f + 1), h <= f ? Xc(c, h, e) : c.j(e)) : c.apply(c, Nc(e));
    }
    c.m = 5;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = L(c);
      var l = H(c);
      c = J(c);
      return d(e, f, h, k, l, c);
    };
    c.i = d;
    return c;
  }(), h = function(h, p, n, s, q, u) {
    switch(arguments.length) {
      case 2:
        return f.call(this, h, p);
      case 3:
        return e.call(this, h, p, n);
      case 4:
        return d.call(this, h, p, n, s);
      case 5:
        return c.call(this, h, p, n, s, q);
      default:
        return k.i(h, p, n, s, q, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.m = 5;
  h.j = k.j;
  h.c = f;
  h.d = e;
  h.o = d;
  h.I = c;
  h.i = k.i;
  return h;
}();
function Yc(c) {
  return G(c) ? c : null;
}
function Zc(c, d) {
  for (;;) {
    if (null == G(d)) {
      return!0;
    }
    if (w(c.e ? c.e(H(d)) : c.call(null, H(d)))) {
      var e = c, f = L(d);
      c = e;
      d = f;
    } else {
      return y ? !1 : null;
    }
  }
}
function $c(c) {
  for (var d = ad;;) {
    if (G(c)) {
      var e = d.e ? d.e(H(c)) : d.call(null, H(c));
      if (w(e)) {
        return e;
      }
      c = L(c);
    } else {
      return null;
    }
  }
}
function bd(c) {
  if ("number" === typeof c && !isNaN(c) && Infinity !== c && parseFloat(c) === parseInt(c, 10)) {
    return 0 === (c & 1);
  }
  throw Error([A("Argument must be an integer: "), A(c)].join(""));
}
function ad(c) {
  return c;
}
function cd(c) {
  return function() {
    var d = null, e = function() {
      function d(c, f, p) {
        var n = null;
        2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
        return e.call(this, c, f, n);
      }
      function e(d, f, h) {
        return Da(T.o(c, d, f, h));
      }
      d.m = 2;
      d.j = function(c) {
        var d = H(c);
        c = L(c);
        var f = H(c);
        c = J(c);
        return e(d, f, c);
      };
      d.i = e;
      return d;
    }(), d = function(d, h, k) {
      switch(arguments.length) {
        case 0:
          return Da(c.q ? c.q() : c.call(null));
        case 1:
          return Da(c.e ? c.e(d) : c.call(null, d));
        case 2:
          return Da(c.c ? c.c(d, h) : c.call(null, d, h));
        default:
          return e.i(d, h, M(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.m = 2;
    d.j = e.j;
    return d;
  }();
}
var dd = function() {
  function c(c, d, e, f) {
    return function() {
      function h(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, d);
      }
      function q(h) {
        return T.I(c, d, e, f, h);
      }
      h.m = 0;
      h.j = function(c) {
        c = G(c);
        return q(c);
      };
      h.i = q;
      return h;
    }();
  }
  function d(c, d, e) {
    return function() {
      function f(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return h.call(this, d);
      }
      function h(f) {
        return T.o(c, d, e, f);
      }
      f.m = 0;
      f.j = function(c) {
        c = G(c);
        return h(c);
      };
      f.i = h;
      return f;
    }();
  }
  function e(c, d) {
    return function() {
      function e(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return f.call(this, d);
      }
      function f(e) {
        return T.d(c, d, e);
      }
      e.m = 0;
      e.j = function(c) {
        c = G(c);
        return f(c);
      };
      e.i = f;
      return e;
    }();
  }
  var f = null, h = function() {
    function c(e, f, h, k, u) {
      var D = null;
      4 < arguments.length && (D = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, D);
    }
    function d(c, e, f, h, k) {
      return function() {
        function d(c) {
          var e = null;
          0 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 0), 0));
          return l.call(this, e);
        }
        function l(d) {
          return T.I(c, e, f, h, Rc.c(k, d));
        }
        d.m = 0;
        d.j = function(c) {
          c = G(c);
          return l(c);
        };
        d.i = l;
        return d;
      }();
    }
    c.m = 4;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = J(c);
      return d(e, f, h, k, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, p, n, s) {
    switch(arguments.length) {
      case 1:
        return f;
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, n);
      default:
        return h.i(f, l, p, n, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.m = 4;
  f.j = h.j;
  f.e = function(c) {
    return c;
  };
  f.c = e;
  f.d = d;
  f.o = c;
  f.i = h.i;
  return f;
}(), ed = function() {
  function c(c, d, e, h) {
    return new Gc(null, function() {
      var s = G(d), q = G(e), u = G(h);
      return s && q && u ? N(c.d ? c.d(H(s), H(q), H(u)) : c.call(null, H(s), H(q), H(u)), f.o(c, J(s), J(q), J(u))) : null;
    }, null, null);
  }
  function d(c, d, e) {
    return new Gc(null, function() {
      var h = G(d), s = G(e);
      return h && s ? N(c.c ? c.c(H(h), H(s)) : c.call(null, H(h), H(s)), f.d(c, J(h), J(s))) : null;
    }, null, null);
  }
  function e(c, d) {
    return new Gc(null, function() {
      var e = G(d);
      if (e) {
        if (ic(e)) {
          for (var h = Bb(e), s = O(h), q = new Ic(Array(s), 0), u = 0;;) {
            if (u < s) {
              var D = c.e ? c.e(B.c(h, u)) : c.call(null, B.c(h, u));
              q.add(D);
              u += 1;
            } else {
              break;
            }
          }
          return Mc(q.la(), f.c(c, Cb(e)));
        }
        return N(c.e ? c.e(H(e)) : c.call(null, H(e)), f.c(c, J(e)));
      }
      return null;
    }, null, null);
  }
  var f = null, h = function() {
    function c(e, f, h, k, u) {
      var D = null;
      4 < arguments.length && (D = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, D);
    }
    function d(c, e, h, k, l) {
      return f.c(function(d) {
        return T.c(c, d);
      }, function F(c) {
        return new Gc(null, function() {
          var d = f.c(G, c);
          return Zc(ad, d) ? N(f.c(H, d), F(f.c(J, d))) : null;
        }, null, null);
      }(Vb.i(l, k, M([h, e], 0))));
    }
    c.m = 4;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = J(c);
      return d(e, f, h, k, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, p, n, s) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, n);
      default:
        return h.i(f, l, p, n, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.m = 4;
  f.j = h.j;
  f.c = e;
  f.d = d;
  f.o = c;
  f.i = h.i;
  return f;
}(), gd = function fd(d, e) {
  return new Gc(null, function() {
    if (0 < d) {
      var f = G(e);
      return f ? N(H(f), fd(d - 1, J(f))) : null;
    }
    return null;
  }, null, null);
};
function hd(c, d) {
  return new Gc(null, function() {
    var e;
    a: {
      e = c;
      for (var f = d;;) {
        if (f = G(f), 0 < e && f) {
          e -= 1, f = J(f);
        } else {
          e = f;
          break a;
        }
      }
      e = void 0;
    }
    return e;
  }, null, null);
}
var id = function() {
  function c(c, d) {
    return gd(c, e.e(d));
  }
  function d(c) {
    return new Gc(null, function() {
      return N(c, e.e(c));
    }, null, null);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}(), kd = function jd(d, e) {
  return N(e, new Gc(null, function() {
    return jd(d, d.e ? d.e(e) : d.call(null, e));
  }, null, null));
}, ld = function() {
  function c(c, e) {
    return new Gc(null, function() {
      var k = G(c), l = G(e);
      return k && l ? N(H(k), N(H(l), d.c(J(k), J(l)))) : null;
    }, null, null);
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      return new Gc(null, function() {
        var e = ed.c(G, Vb.i(h, f, M([c], 0)));
        return Zc(ad, e) ? Rc.c(ed.c(H, e), T.c(d, ed.c(J, e))) : null;
      }, null, null);
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.c = c;
  d.i = e.i;
  return d;
}();
function md(c) {
  return function e(c, h) {
    return new Gc(null, function() {
      var k = G(c);
      return k ? N(H(k), e(J(k), h)) : G(h) ? e(H(h), J(h)) : null;
    }, null, null);
  }(null, c);
}
var nd = function() {
  function c(c, d) {
    return md(ed.c(c, d));
  }
  var d = null, e = function() {
    function c(e, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, n);
    }
    function d(c, e, f) {
      return md(T.o(ed, c, e, f));
    }
    c.m = 2;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return d(e, f, c);
    };
    c.i = d;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.c = c;
  d.i = e.i;
  return d;
}(), pd = function od(d, e) {
  return new Gc(null, function() {
    var f = G(e);
    if (f) {
      if (ic(f)) {
        for (var h = Bb(f), k = O(h), l = new Ic(Array(k), 0), p = 0;;) {
          if (p < k) {
            if (w(d.e ? d.e(B.c(h, p)) : d.call(null, B.c(h, p)))) {
              var n = B.c(h, p);
              l.add(n);
            }
            p += 1;
          } else {
            break;
          }
        }
        return Mc(l.la(), od(d, Cb(f)));
      }
      h = H(f);
      f = J(f);
      return w(d.e ? d.e(h) : d.call(null, h)) ? N(h, od(d, f)) : od(d, f);
    }
    return null;
  }, null, null);
};
function qd(c, d) {
  return null != c ? c && (c.A & 4 || c.tc) ? Uc(U.d(vb, ub(c), d)) : U.d(Ma, c, d) : U.d(Vb, K, d);
}
var rd = function() {
  function c(c, d, e, p) {
    return new Gc(null, function() {
      var n = G(p);
      if (n) {
        var s = gd(c, n);
        return c === O(s) ? N(s, f.o(c, d, e, hd(d, n))) : Ma(K, gd(c, Rc.c(s, e)));
      }
      return null;
    }, null, null);
  }
  function d(c, d, e) {
    return new Gc(null, function() {
      var p = G(e);
      if (p) {
        var n = gd(c, p);
        return c === O(n) ? N(n, f.d(c, d, hd(d, p))) : null;
      }
      return null;
    }, null, null);
  }
  function e(c, d) {
    return f.d(c, c, d);
  }
  var f = null, f = function(f, k, l, p) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.o = c;
  return f;
}(), sd = function() {
  function c(c, d, e) {
    var l = lc;
    for (d = G(d);;) {
      if (d) {
        var p = c;
        if (p ? p.l & 256 || p.Ob || (p.l ? 0 : x(Sa, p)) : x(Sa, p)) {
          c = R.d(c, H(d), l);
          if (l === c) {
            return e;
          }
          d = L(d);
        } else {
          return e;
        }
      } else {
        return c;
      }
    }
  }
  function d(c, d) {
    return e.d(c, d, null);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), ud = function td(d, e, f) {
  var h = P.d(e, 0, null);
  return(e = wc(e, 1)) ? S.d(d, h, td(R.c(d, h), e, f)) : S.d(d, h, f);
}, vd = function() {
  function c(c, d, e, f, k, u) {
    var D = P.d(d, 0, null);
    return(d = wc(d, 1)) ? S.d(c, D, h.ra(R.c(c, D), d, e, f, k, u)) : S.d(c, D, e.o ? e.o(R.c(c, D), f, k, u) : e.call(null, R.c(c, D), f, k, u));
  }
  function d(c, d, e, f, k) {
    var u = P.d(d, 0, null);
    return(d = wc(d, 1)) ? S.d(c, u, h.I(R.c(c, u), d, e, f, k)) : S.d(c, u, e.d ? e.d(R.c(c, u), f, k) : e.call(null, R.c(c, u), f, k));
  }
  function e(c, d, e, f) {
    var k = P.d(d, 0, null);
    return(d = wc(d, 1)) ? S.d(c, k, h.o(R.c(c, k), d, e, f)) : S.d(c, k, e.c ? e.c(R.c(c, k), f) : e.call(null, R.c(c, k), f));
  }
  function f(c, d, e) {
    var f = P.d(d, 0, null);
    return(d = wc(d, 1)) ? S.d(c, f, h.d(R.c(c, f), d, e)) : S.d(c, f, e.e ? e.e(R.c(c, f)) : e.call(null, R.c(c, f)));
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, F, I) {
      var Q = null;
      6 < arguments.length && (Q = M(Array.prototype.slice.call(arguments, 6), 0));
      return d.call(this, e, f, h, k, l, F, Q);
    }
    function d(c, e, f, k, l, p, I) {
      var Q = P.d(e, 0, null);
      return(e = wc(e, 1)) ? S.d(c, Q, T.i(h, R.c(c, Q), e, f, k, M([l, p, I], 0))) : S.d(c, Q, T.i(f, R.c(c, Q), k, l, p, M([I], 0)));
    }
    c.m = 6;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = L(c);
      var l = H(c);
      c = L(c);
      var I = H(c);
      c = J(c);
      return d(e, f, h, k, l, I, c);
    };
    c.i = d;
    return c;
  }(), h = function(h, p, n, s, q, u, D) {
    switch(arguments.length) {
      case 3:
        return f.call(this, h, p, n);
      case 4:
        return e.call(this, h, p, n, s);
      case 5:
        return d.call(this, h, p, n, s, q);
      case 6:
        return c.call(this, h, p, n, s, q, u);
      default:
        return k.i(h, p, n, s, q, u, M(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.m = 6;
  h.j = k.j;
  h.d = f;
  h.o = e;
  h.I = d;
  h.ra = c;
  h.i = k.i;
  return h;
}();
function wd(c, d) {
  this.B = c;
  this.f = d;
}
function xd(c) {
  return new wd(c, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function yd(c) {
  c = c.k;
  return 32 > c ? 0 : c - 1 >>> 5 << 5;
}
function zd(c, d, e) {
  for (;;) {
    if (0 === d) {
      return e;
    }
    var f = xd(c);
    f.f[0] = e;
    e = f;
    d -= 5;
  }
}
var Bd = function Ad(d, e, f, h) {
  var k = new wd(f.B, Ga(f.f)), l = d.k - 1 >>> e & 31;
  5 === e ? k.f[l] = h : (f = f.f[l], d = null != f ? Ad(d, e - 5, f, h) : zd(null, e - 5, h), k.f[l] = d);
  return k;
};
function Cd(c, d) {
  throw Error([A("No item "), A(c), A(" in vector of length "), A(d)].join(""));
}
function Ed(c, d) {
  if (0 <= d && d < c.k) {
    if (d >= yd(c)) {
      return c.tail;
    }
    for (var e = c.root, f = c.shift;;) {
      if (0 < f) {
        var h = f - 5, e = e.f[d >>> f & 31], f = h
      } else {
        return e.f;
      }
    }
  } else {
    return Cd(d, c.k);
  }
}
var Gd = function Fd(d, e, f, h, k) {
  var l = new wd(f.B, Ga(f.f));
  if (0 === e) {
    l.f[h & 31] = k;
  } else {
    var p = h >>> e & 31;
    d = Fd(d, e - 5, f.f[p], h, k);
    l.f[p] = d;
  }
  return l;
};
function X(c, d, e, f, h, k) {
  this.meta = c;
  this.k = d;
  this.shift = e;
  this.root = f;
  this.tail = h;
  this.n = k;
  this.A = 4;
  this.l = 167668511;
}
m = X.prototype;
m.Va = function() {
  return new Hd(this.k, this.shift, Id.e ? Id.e(this.root) : Id.call(null, this.root), Jd.e ? Jd.e(this.tail) : Jd.call(null, this.tail));
};
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.O = function(c, d) {
  return B.d(this, d, null);
};
m.P = function(c, d, e) {
  return B.d(this, d, e);
};
m.ya = function(c, d, e) {
  if (0 <= d && d < this.k) {
    return yd(this) <= d ? (c = Ga(this.tail), c[d & 31] = e, new X(this.meta, this.k, this.shift, this.root, c, null)) : new X(this.meta, this.k, this.shift, Gd(this, this.shift, this.root, d, e), this.tail, null);
  }
  if (d === this.k) {
    return Ma(this, e);
  }
  if (y) {
    throw Error([A("Index "), A(d), A(" out of bounds  [0,"), A(this.k), A("]")].join(""));
  }
  return null;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.F(null, e);
      case 3:
        return this.pa(null, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return this.F(null, c);
};
m.c = function(c, d) {
  return this.pa(null, c, d);
};
m.K = function(c, d) {
  if (32 > this.k - yd(this)) {
    for (var e = this.tail.length, f = Array(e + 1), h = 0;;) {
      if (h < e) {
        f[h] = this.tail[h], h += 1;
      } else {
        break;
      }
    }
    f[e] = d;
    return new X(this.meta, this.k + 1, this.shift, this.root, f, null);
  }
  e = (f = this.k >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  f ? (f = xd(null), f.f[0] = this.root, h = zd(null, this.shift, new wd(null, this.tail)), f.f[1] = h) : f = Bd(this, this.shift, this.root, new wd(null, this.tail));
  return new X(this.meta, this.k + 1, e, f, [d], null);
};
m.Eb = function() {
  return B.c(this, 0);
};
m.Fb = function() {
  return B.c(this, 1);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return Ob.c(this, d);
};
m.aa = function(c, d, e) {
  return Ob.d(this, d, e);
};
m.M = function() {
  return 0 === this.k ? null : 32 > this.k ? M.e(this.tail) : y ? Kd.d ? Kd.d(this, 0, 0) : Kd.call(null, this, 0, 0) : null;
};
m.Q = function() {
  return this.k;
};
m.Hb = function(c, d, e) {
  return Va(this, d, e);
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new X(d, this.k, this.shift, this.root, this.tail, this.n);
};
m.L = function() {
  return this.meta;
};
m.F = function(c, d) {
  return Ed(this, d)[d & 31];
};
m.pa = function(c, d, e) {
  return 0 <= d && d < this.k ? B.c(this, d) : e;
};
m.U = function() {
  return ac(Ld, this.meta);
};
var Y = new wd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ld = new X(null, 0, 5, Y, [], 0);
function Md(c, d, e, f, h, k) {
  this.S = c;
  this.qa = d;
  this.s = e;
  this.off = f;
  this.meta = h;
  this.n = k;
  this.l = 32243948;
  this.A = 1536;
}
m = Md.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.Z = function() {
  if (this.off + 1 < this.qa.length) {
    var c = Kd.o ? Kd.o(this.S, this.qa, this.s, this.off + 1) : Kd.call(null, this.S, this.qa, this.s, this.off + 1);
    return null == c ? null : c;
  }
  return Db(this);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return Ob.c(Nd.d ? Nd.d(this.S, this.s + this.off, O(this.S)) : Nd.call(null, this.S, this.s + this.off, O(this.S)), d);
};
m.aa = function(c, d, e) {
  return Ob.d(Nd.d ? Nd.d(this.S, this.s + this.off, O(this.S)) : Nd.call(null, this.S, this.s + this.off, O(this.S)), d, e);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.qa[this.off];
};
m.ia = function() {
  if (this.off + 1 < this.qa.length) {
    var c = Kd.o ? Kd.o(this.S, this.qa, this.s, this.off + 1) : Kd.call(null, this.S, this.qa, this.s, this.off + 1);
    return null == c ? K : c;
  }
  return Cb(this);
};
m.ob = function() {
  var c = this.qa.length, c = this.s + c < Ja(this.S) ? Kd.d ? Kd.d(this.S, this.s + c, 0) : Kd.call(null, this.S, this.s + c, 0) : null;
  return null == c ? null : c;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return Kd.I ? Kd.I(this.S, this.qa, this.s, this.off, d) : Kd.call(null, this.S, this.qa, this.s, this.off, d);
};
m.U = function() {
  return ac(Ld, this.meta);
};
m.pb = function() {
  return Kc.c(this.qa, this.off);
};
m.qb = function() {
  var c = this.qa.length, c = this.s + c < Ja(this.S) ? Kd.d ? Kd.d(this.S, this.s + c, 0) : Kd.call(null, this.S, this.s + c, 0) : null;
  return null == c ? K : c;
};
var Kd = function() {
  function c(c, d, e, f, n) {
    return new Md(c, d, e, f, n, null);
  }
  function d(c, d, e, f) {
    return new Md(c, d, e, f, null, null);
  }
  function e(c, d, e) {
    return new Md(c, Ed(c, d), d, e, null, null);
  }
  var f = null, f = function(f, k, l, p, n) {
    switch(arguments.length) {
      case 3:
        return e.call(this, f, k, l);
      case 4:
        return d.call(this, f, k, l, p);
      case 5:
        return c.call(this, f, k, l, p, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.d = e;
  f.o = d;
  f.I = c;
  return f;
}();
function Od(c, d, e, f, h) {
  this.meta = c;
  this.v = d;
  this.start = e;
  this.end = f;
  this.n = h;
  this.A = 0;
  this.l = 32400159;
}
m = Od.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.O = function(c, d) {
  return B.d(this, d, null);
};
m.P = function(c, d, e) {
  return B.d(this, d, e);
};
m.ya = function(c, d, e) {
  var f = this, h = f.start + d;
  return Pd.I ? Pd.I(f.meta, S.d(f.v, h, e), f.start, function() {
    var c = f.end, d = h + 1;
    return c > d ? c : d;
  }(), null) : Pd.call(null, f.meta, S.d(f.v, h, e), f.start, function() {
    var c = f.end, d = h + 1;
    return c > d ? c : d;
  }(), null);
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.F(null, e);
      case 3:
        return this.pa(null, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return this.F(null, c);
};
m.c = function(c, d) {
  return this.pa(null, c, d);
};
m.K = function(c, d) {
  return Pd.I ? Pd.I(this.meta, eb(this.v, this.end, d), this.start, this.end + 1, null) : Pd.call(null, this.meta, eb(this.v, this.end, d), this.start, this.end + 1, null);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return Ob.c(this, d);
};
m.aa = function(c, d, e) {
  return Ob.d(this, d, e);
};
m.M = function() {
  var c = this;
  return function e(f) {
    return f === c.end ? null : N(B.c(c.v, f), new Gc(null, function() {
      return e(f + 1);
    }, null, null));
  }(c.start);
};
m.Q = function() {
  return this.end - this.start;
};
m.Hb = function(c, d, e) {
  return Va(this, d, e);
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return Pd.I ? Pd.I(d, this.v, this.start, this.end, this.n) : Pd.call(null, d, this.v, this.start, this.end, this.n);
};
m.L = function() {
  return this.meta;
};
m.F = function(c, d) {
  return 0 > d || this.end <= this.start + d ? Cd(d, this.end - this.start) : B.c(this.v, this.start + d);
};
m.pa = function(c, d, e) {
  return 0 > d || this.end <= this.start + d ? e : B.d(this.v, this.start + d, e);
};
m.U = function() {
  return ac(Ld, this.meta);
};
function Pd(c, d, e, f, h) {
  for (;;) {
    if (d instanceof Od) {
      e = d.start + e, f = d.start + f, d = d.v;
    } else {
      var k = O(d);
      if (0 > e || 0 > f || e > k || f > k) {
        throw Error("Index out of bounds");
      }
      return new Od(c, d, e, f, h);
    }
  }
}
var Nd = function() {
  function c(c, d, e) {
    return Pd(null, c, d, e, null);
  }
  function d(c, d) {
    return e.d(c, d, O(c));
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}();
function Id(c) {
  return new wd({}, Ga(c.f));
}
function Jd(c) {
  var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  kc(c, 0, d, 0, c.length);
  return d;
}
var Rd = function Qd(d, e, f, h) {
  f = d.root.B === f.B ? f : new wd(d.root.B, Ga(f.f));
  var k = d.k - 1 >>> e & 31;
  if (5 === e) {
    d = h;
  } else {
    var l = f.f[k];
    d = null != l ? Qd(d, e - 5, l, h) : zd(d.root.B, e - 5, h);
  }
  f.f[k] = d;
  return f;
};
function Hd(c, d, e, f) {
  this.k = c;
  this.shift = d;
  this.root = e;
  this.tail = f;
  this.l = 275;
  this.A = 88;
}
m = Hd.prototype;
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.O(null, e);
      case 3:
        return this.P(null, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.O = function(c, d) {
  return B.d(this, d, null);
};
m.P = function(c, d, e) {
  return B.d(this, d, e);
};
m.F = function(c, d) {
  if (this.root.B) {
    return Ed(this, d)[d & 31];
  }
  throw Error("nth after persistent!");
};
m.pa = function(c, d, e) {
  return 0 <= d && d < this.k ? B.c(this, d) : e;
};
m.Q = function() {
  if (this.root.B) {
    return this.k;
  }
  throw Error("count after persistent!");
};
m.Qb = function(c, d, e) {
  var f = this;
  if (f.root.B) {
    if (0 <= d && d < f.k) {
      return yd(this) <= d ? f.tail[d & 31] = e : (c = function k(c, p) {
        var n = f.root.B === p.B ? p : new wd(f.root.B, Ga(p.f));
        if (0 === c) {
          n.f[d & 31] = e;
        } else {
          var s = d >>> c & 31, q = k(c - 5, n.f[s]);
          n.f[s] = q;
        }
        return n;
      }.call(null, f.shift, f.root), f.root = c), this;
    }
    if (d === f.k) {
      return vb(this, e);
    }
    if (y) {
      throw Error([A("Index "), A(d), A(" out of bounds for TransientVector of length"), A(f.k)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
m.Xa = function(c, d, e) {
  return zb(this, d, e);
};
m.Ma = function(c, d) {
  if (this.root.B) {
    if (32 > this.k - yd(this)) {
      this.tail[this.k & 31] = d;
    } else {
      var e = new wd(this.root.B, this.tail), f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[0] = d;
      this.tail = f;
      if (this.k >>> 5 > 1 << this.shift) {
        var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], h = this.shift + 5;
        f[0] = this.root;
        f[1] = zd(this.root.B, this.shift, e);
        this.root = new wd(this.root.B, f);
        this.shift = h;
      } else {
        this.root = Rd(this, this.shift, this.root, e);
      }
    }
    this.k += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
m.Na = function() {
  if (this.root.B) {
    this.root.B = null;
    var c = this.k - yd(this), d = Array(c);
    kc(this.tail, 0, d, 0, c);
    return new X(null, this.k, this.shift, this.root, d, null);
  }
  throw Error("persistent! called twice");
};
function Sd() {
  this.A = 0;
  this.l = 2097152;
}
Sd.prototype.D = function() {
  return!1;
};
var Td = new Sd;
function Ud(c, d) {
  return nc(gc(d) ? O(c) === O(d) ? Zc(ad, ed.c(function(c) {
    return Ib.c(R.d(d, H(c), Td), H(L(c)));
  }, c)) : null : null);
}
function Vd(c, d) {
  var e = c.f;
  if (d instanceof V) {
    a: {
      for (var f = e.length, h = d.Fa, k = 0;;) {
        if (f <= k) {
          e = -1;
          break a;
        }
        var l = e[k];
        if (l instanceof V && h === l.Fa) {
          e = k;
          break a;
        }
        if (y) {
          k += 2;
        } else {
          e = null;
          break a;
        }
      }
      e = void 0;
    }
  } else {
    if (ba(d) || "number" === typeof d) {
      a: {
        f = e.length;
        for (h = 0;;) {
          if (f <= h) {
            e = -1;
            break a;
          }
          if (d === e[h]) {
            e = h;
            break a;
          }
          if (y) {
            h += 2;
          } else {
            e = null;
            break a;
          }
        }
        e = void 0;
      }
    } else {
      if (d instanceof Lb) {
        a: {
          f = e.length;
          h = d.Ia;
          for (k = 0;;) {
            if (f <= k) {
              e = -1;
              break a;
            }
            l = e[k];
            if (l instanceof Lb && h === l.Ia) {
              e = k;
              break a;
            }
            if (y) {
              k += 2;
            } else {
              e = null;
              break a;
            }
          }
          e = void 0;
        }
      } else {
        if (null == d) {
          a: {
            f = e.length;
            for (h = 0;;) {
              if (f <= h) {
                e = -1;
                break a;
              }
              if (null == e[h]) {
                e = h;
                break a;
              }
              if (y) {
                h += 2;
              } else {
                e = null;
                break a;
              }
            }
            e = void 0;
          }
        } else {
          if (y) {
            a: {
              f = e.length;
              for (h = 0;;) {
                if (f <= h) {
                  e = -1;
                  break a;
                }
                if (Ib.c(d, e[h])) {
                  e = h;
                  break a;
                }
                if (y) {
                  h += 2;
                } else {
                  e = null;
                  break a;
                }
              }
              e = void 0;
            }
          } else {
            e = null;
          }
        }
      }
    }
  }
  return e;
}
function Wd(c, d, e) {
  this.f = c;
  this.s = d;
  this.fa = e;
  this.A = 0;
  this.l = 32374990;
}
m = Wd.prototype;
m.H = function() {
  return Sb(this);
};
m.Z = function() {
  return this.s < this.f.length - 2 ? new Wd(this.f, this.s + 2, this.fa) : null;
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.Q = function() {
  return(this.f.length - this.s) / 2;
};
m.W = function() {
  return new X(null, 2, 5, Y, [this.f[this.s], this.f[this.s + 1]], null);
};
m.ia = function() {
  return this.s < this.f.length - 2 ? new Wd(this.f, this.s + 2, this.fa) : K;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Wd(this.f, this.s, d);
};
m.L = function() {
  return this.fa;
};
m.U = function() {
  return ac(K, this.fa);
};
function v(c, d, e, f) {
  this.meta = c;
  this.k = d;
  this.f = e;
  this.n = f;
  this.A = 4;
  this.l = 16123663;
}
m = v.prototype;
m.Va = function() {
  return new Xd({}, this.f.length, Ga(this.f));
};
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = xc(this);
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  c = Vd(this, d);
  return-1 === c ? e : this.f[c + 1];
};
m.ya = function(c, d, e) {
  c = Vd(this, d);
  if (-1 === c) {
    if (this.k < Yd) {
      c = this.f;
      for (var f = c.length, h = Array(f + 2), k = 0;;) {
        if (k < f) {
          h[k] = c[k], k += 1;
        } else {
          break;
        }
      }
      h[f] = d;
      h[f + 1] = e;
      return new v(this.meta, this.k + 1, h, null);
    }
    return jb(Va(qd(Zd, this), d, e), this.meta);
  }
  return e === this.f[c + 1] ? this : y ? (d = Ga(this.f), d[c + 1] = e, new v(this.meta, this.k, d, null)) : null;
};
m.nb = function(c, d) {
  return-1 !== Vd(this, d);
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.O(null, e);
      case 3:
        return this.P(null, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.K = function(c, d) {
  return hc(d) ? Va(this, B.c(d, 0), B.c(d, 1)) : U.d(Ma, this, d);
};
m.toString = function() {
  return Fb(this);
};
m.M = function() {
  return 0 <= this.f.length - 2 ? new Wd(this.f, 0, null) : null;
};
m.Q = function() {
  return this.k;
};
m.D = function(c, d) {
  return Ud(this, d);
};
m.N = function(c, d) {
  return new v(d, this.k, this.f, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return jb($d, this.meta);
};
m.La = function(c, d) {
  if (0 <= Vd(this, d)) {
    var e = this.f.length, f = e - 2;
    if (0 === f) {
      return Ka(this);
    }
    for (var f = Array(f), h = 0, k = 0;;) {
      if (h >= e) {
        return new v(this.meta, this.k - 1, f, null);
      }
      if (Ib.c(d, this.f[h])) {
        h += 2;
      } else {
        if (y) {
          f[k] = this.f[h], f[k + 1] = this.f[h + 1], k += 2, h += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var $d = new v(null, 0, [], null), Yd = 8;
function ae(c) {
  for (var d = c.length, e = 0, f = ub($d);;) {
    if (e < d) {
      var h = e + 2, f = xb(f, c[e], c[e + 1]), e = h
    } else {
      return wb(f);
    }
  }
}
function Xd(c, d, e) {
  this.Oa = c;
  this.oa = d;
  this.f = e;
  this.A = 56;
  this.l = 258;
}
m = Xd.prototype;
m.Gb = function(c, d) {
  if (w(this.Oa)) {
    var e = Vd(this, d);
    0 <= e && (this.f[e] = this.f[this.oa - 2], this.f[e + 1] = this.f[this.oa - 1], e = this.f, e.pop(), e.pop(), this.oa -= 2);
    return this;
  }
  throw Error("dissoc! after persistent!");
};
m.Xa = function(c, d, e) {
  if (w(this.Oa)) {
    c = Vd(this, d);
    if (-1 === c) {
      return this.oa + 2 <= 2 * Yd ? (this.oa += 2, this.f.push(d), this.f.push(e), this) : Vc(be.c ? be.c(this.oa, this.f) : be.call(null, this.oa, this.f), d, e);
    }
    e !== this.f[c + 1] && (this.f[c + 1] = e);
    return this;
  }
  throw Error("assoc! after persistent!");
};
m.Ma = function(c, d) {
  if (w(this.Oa)) {
    if (d ? d.l & 2048 || d.ec || (d.l ? 0 : x(Ya, d)) : x(Ya, d)) {
      return xb(this, yc.e ? yc.e(d) : yc.call(null, d), zc.e ? zc.e(d) : zc.call(null, d));
    }
    for (var e = G(d), f = this;;) {
      var h = H(e);
      if (w(h)) {
        e = L(e), f = xb(f, yc.e ? yc.e(h) : yc.call(null, h), zc.e ? zc.e(h) : zc.call(null, h));
      } else {
        return f;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
m.Na = function() {
  if (w(this.Oa)) {
    return this.Oa = !1, new v(null, rc((this.oa - this.oa % 2) / 2), this.f, null);
  }
  throw Error("persistent! called twice");
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  if (w(this.Oa)) {
    return c = Vd(this, d), -1 === c ? e : this.f[c + 1];
  }
  throw Error("lookup after persistent!");
};
m.Q = function() {
  if (w(this.Oa)) {
    return rc((this.oa - this.oa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function be(c, d) {
  for (var e = ub(Zd), f = 0;;) {
    if (f < c) {
      e = xb(e, d[f], d[f + 1]), f += 2;
    } else {
      return e;
    }
  }
}
function ce() {
  this.xa = !1;
}
function de(c, d) {
  return c === d ? !0 : W(c, d) ? !0 : y ? Ib.c(c, d) : null;
}
var ee = function() {
  function c(c, d, e, l, p) {
    c = Ga(c);
    c[d] = e;
    c[l] = p;
    return c;
  }
  function d(c, d, e) {
    c = Ga(c);
    c[d] = e;
    return c;
  }
  var e = null, e = function(e, h, k, l, p) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, k);
      case 5:
        return c.call(this, e, h, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.d = d;
  e.I = c;
  return e;
}();
function fe(c, d) {
  var e = Array(c.length - 2);
  kc(c, 0, e, 0, 2 * d);
  kc(c, 2 * (d + 1), e, 2 * d, e.length - 2 * d);
  return e;
}
var ge = function() {
  function c(c, d, e, l, p, n) {
    c = c.Ea(d);
    c.f[e] = l;
    c.f[p] = n;
    return c;
  }
  function d(c, d, e, l) {
    c = c.Ea(d);
    c.f[e] = l;
    return c;
  }
  var e = null, e = function(e, h, k, l, p, n) {
    switch(arguments.length) {
      case 4:
        return d.call(this, e, h, k, l);
      case 6:
        return c.call(this, e, h, k, l, p, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = d;
  e.ra = c;
  return e;
}();
function he(c, d, e) {
  this.B = c;
  this.C = d;
  this.f = e;
}
function ie(c, d, e, f) {
  if (c.C === e) {
    return null;
  }
  c = c.Ea(d);
  d = c.f;
  var h = d.length;
  c.C ^= e;
  kc(d, 2 * (f + 1), d, 2 * f, h - 2 * (f + 1));
  d[h - 2] = null;
  d[h - 1] = null;
  return c;
}
m = he.prototype;
m.ua = function(c, d, e, f, h, k) {
  var l = 1 << (e >>> d & 31), p = vc(this.C & l - 1);
  if (0 === (this.C & l)) {
    var n = vc(this.C);
    if (2 * n < this.f.length) {
      c = this.Ea(c);
      d = c.f;
      k.xa = !0;
      a: {
        for (e = 2 * (n - p), k = 2 * p + (e - 1), n = 2 * (p + 1) + (e - 1);;) {
          if (0 === e) {
            break a;
          }
          d[n] = d[k];
          n -= 1;
          e -= 1;
          k -= 1;
        }
      }
      d[2 * p] = f;
      d[2 * p + 1] = h;
      c.C |= l;
      return c;
    }
    if (16 <= n) {
      p = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      p[e >>> d & 31] = je.ua(c, d + 5, e, f, h, k);
      for (h = f = 0;;) {
        if (32 > f) {
          0 !== (this.C >>> f & 1) && (p[f] = null != this.f[h] ? je.ua(c, d + 5, E(this.f[h]), this.f[h], this.f[h + 1], k) : this.f[h + 1], h += 2), f += 1;
        } else {
          break;
        }
      }
      return new ke(c, n + 1, p);
    }
    return y ? (d = Array(2 * (n + 4)), kc(this.f, 0, d, 0, 2 * p), d[2 * p] = f, d[2 * p + 1] = h, kc(this.f, 2 * p, d, 2 * (p + 1), 2 * (n - p)), k.xa = !0, c = this.Ea(c), c.f = d, c.C |= l, c) : null;
  }
  n = this.f[2 * p];
  l = this.f[2 * p + 1];
  return null == n ? (n = l.ua(c, d + 5, e, f, h, k), n === l ? this : ge.o(this, c, 2 * p + 1, n)) : de(f, n) ? h === l ? this : ge.o(this, c, 2 * p + 1, h) : y ? (k.xa = !0, ge.ra(this, c, 2 * p, null, 2 * p + 1, le.Sa ? le.Sa(c, d + 5, n, l, e, f, h) : le.call(null, c, d + 5, n, l, e, f, h))) : null;
};
m.Ya = function() {
  return me.e ? me.e(this.f) : me.call(null, this.f);
};
m.$a = function(c, d, e, f, h) {
  var k = 1 << (e >>> d & 31);
  if (0 === (this.C & k)) {
    return this;
  }
  var l = vc(this.C & k - 1), p = this.f[2 * l], n = this.f[2 * l + 1];
  return null == p ? (d = n.$a(c, d + 5, e, f, h), d === n ? this : null != d ? ge.o(this, c, 2 * l + 1, d) : this.C === k ? null : y ? ie(this, c, k, l) : null) : de(f, p) ? (h[0] = !0, ie(this, c, k, l)) : y ? this : null;
};
m.Ea = function(c) {
  if (c === this.B) {
    return this;
  }
  var d = vc(this.C), e = Array(0 > d ? 4 : 2 * (d + 1));
  kc(this.f, 0, e, 0, 2 * d);
  return new he(c, this.C, e);
};
m.Za = function(c, d, e) {
  var f = 1 << (d >>> c & 31);
  if (0 === (this.C & f)) {
    return this;
  }
  var h = vc(this.C & f - 1), k = this.f[2 * h], l = this.f[2 * h + 1];
  return null == k ? (c = l.Za(c + 5, d, e), c === l ? this : null != c ? new he(null, this.C, ee.d(this.f, 2 * h + 1, c)) : this.C === f ? null : y ? new he(null, this.C ^ f, fe(this.f, h)) : null) : de(e, k) ? new he(null, this.C ^ f, fe(this.f, h)) : y ? this : null;
};
m.ta = function(c, d, e, f, h) {
  var k = 1 << (d >>> c & 31), l = vc(this.C & k - 1);
  if (0 === (this.C & k)) {
    var p = vc(this.C);
    if (16 <= p) {
      l = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      l[d >>> c & 31] = je.ta(c + 5, d, e, f, h);
      for (f = e = 0;;) {
        if (32 > e) {
          0 !== (this.C >>> e & 1) && (l[e] = null != this.f[f] ? je.ta(c + 5, E(this.f[f]), this.f[f], this.f[f + 1], h) : this.f[f + 1], f += 2), e += 1;
        } else {
          break;
        }
      }
      return new ke(null, p + 1, l);
    }
    c = Array(2 * (p + 1));
    kc(this.f, 0, c, 0, 2 * l);
    c[2 * l] = e;
    c[2 * l + 1] = f;
    kc(this.f, 2 * l, c, 2 * (l + 1), 2 * (p - l));
    h.xa = !0;
    return new he(null, this.C | k, c);
  }
  p = this.f[2 * l];
  k = this.f[2 * l + 1];
  return null == p ? (p = k.ta(c + 5, d, e, f, h), p === k ? this : new he(null, this.C, ee.d(this.f, 2 * l + 1, p))) : de(e, p) ? f === k ? this : new he(null, this.C, ee.d(this.f, 2 * l + 1, f)) : y ? (h.xa = !0, new he(null, this.C, ee.I(this.f, 2 * l, null, 2 * l + 1, le.ra ? le.ra(c + 5, p, k, d, e, f) : le.call(null, c + 5, p, k, d, e, f)))) : null;
};
m.Ga = function(c, d, e, f) {
  var h = 1 << (d >>> c & 31);
  if (0 === (this.C & h)) {
    return f;
  }
  var k = vc(this.C & h - 1), h = this.f[2 * k], k = this.f[2 * k + 1];
  return null == h ? k.Ga(c + 5, d, e, f) : de(e, h) ? k : y ? f : null;
};
var je = new he(null, 0, []);
function ne(c, d, e) {
  var f = c.f;
  c = 2 * (c.k - 1);
  for (var h = Array(c), k = 0, l = 1, p = 0;;) {
    if (k < c) {
      k !== e && null != f[k] && (h[l] = f[k], l += 2, p |= 1 << k), k += 1;
    } else {
      return new he(d, p, h);
    }
  }
}
function ke(c, d, e) {
  this.B = c;
  this.k = d;
  this.f = e;
}
m = ke.prototype;
m.ua = function(c, d, e, f, h, k) {
  var l = e >>> d & 31, p = this.f[l];
  if (null == p) {
    return c = ge.o(this, c, l, je.ua(c, d + 5, e, f, h, k)), c.k += 1, c;
  }
  d = p.ua(c, d + 5, e, f, h, k);
  return d === p ? this : ge.o(this, c, l, d);
};
m.Ya = function() {
  return oe.e ? oe.e(this.f) : oe.call(null, this.f);
};
m.$a = function(c, d, e, f, h) {
  var k = e >>> d & 31, l = this.f[k];
  if (null == l) {
    return this;
  }
  d = l.$a(c, d + 5, e, f, h);
  if (d === l) {
    return this;
  }
  if (null == d) {
    if (8 >= this.k) {
      return ne(this, c, k);
    }
    c = ge.o(this, c, k, d);
    c.k -= 1;
    return c;
  }
  return y ? ge.o(this, c, k, d) : null;
};
m.Ea = function(c) {
  return c === this.B ? this : new ke(c, this.k, Ga(this.f));
};
m.Za = function(c, d, e) {
  var f = d >>> c & 31, h = this.f[f];
  return null != h ? (c = h.Za(c + 5, d, e), c === h ? this : null == c ? 8 >= this.k ? ne(this, null, f) : new ke(null, this.k - 1, ee.d(this.f, f, c)) : y ? new ke(null, this.k, ee.d(this.f, f, c)) : null) : this;
};
m.ta = function(c, d, e, f, h) {
  var k = d >>> c & 31, l = this.f[k];
  if (null == l) {
    return new ke(null, this.k + 1, ee.d(this.f, k, je.ta(c + 5, d, e, f, h)));
  }
  c = l.ta(c + 5, d, e, f, h);
  return c === l ? this : new ke(null, this.k, ee.d(this.f, k, c));
};
m.Ga = function(c, d, e, f) {
  var h = this.f[d >>> c & 31];
  return null != h ? h.Ga(c + 5, d, e, f) : f;
};
function pe(c, d, e) {
  d *= 2;
  for (var f = 0;;) {
    if (f < d) {
      if (de(e, c[f])) {
        return f;
      }
      f += 2;
    } else {
      return-1;
    }
  }
}
function qe(c, d, e, f) {
  this.B = c;
  this.za = d;
  this.k = e;
  this.f = f;
}
m = qe.prototype;
m.ua = function(c, d, e, f, h, k) {
  if (e === this.za) {
    d = pe(this.f, this.k, f);
    if (-1 === d) {
      if (this.f.length > 2 * this.k) {
        return c = ge.ra(this, c, 2 * this.k, f, 2 * this.k + 1, h), k.xa = !0, c.k += 1, c;
      }
      e = this.f.length;
      d = Array(e + 2);
      kc(this.f, 0, d, 0, e);
      d[e] = f;
      d[e + 1] = h;
      k.xa = !0;
      k = this.k + 1;
      c === this.B ? (this.f = d, this.k = k, c = this) : c = new qe(this.B, this.za, k, d);
      return c;
    }
    return this.f[d + 1] === h ? this : ge.o(this, c, d + 1, h);
  }
  return(new he(c, 1 << (this.za >>> d & 31), [null, this, null, null])).ua(c, d, e, f, h, k);
};
m.Ya = function() {
  return me.e ? me.e(this.f) : me.call(null, this.f);
};
m.$a = function(c, d, e, f, h) {
  d = pe(this.f, this.k, f);
  if (-1 === d) {
    return this;
  }
  h[0] = !0;
  if (1 === this.k) {
    return null;
  }
  c = this.Ea(c);
  h = c.f;
  h[d] = h[2 * this.k - 2];
  h[d + 1] = h[2 * this.k - 1];
  h[2 * this.k - 1] = null;
  h[2 * this.k - 2] = null;
  c.k -= 1;
  return c;
};
m.Ea = function(c) {
  if (c === this.B) {
    return this;
  }
  var d = Array(2 * (this.k + 1));
  kc(this.f, 0, d, 0, 2 * this.k);
  return new qe(c, this.za, this.k, d);
};
m.Za = function(c, d, e) {
  c = pe(this.f, this.k, e);
  return-1 === c ? this : 1 === this.k ? null : y ? new qe(null, this.za, this.k - 1, fe(this.f, rc((c - c % 2) / 2))) : null;
};
m.ta = function(c, d, e, f, h) {
  return d === this.za ? (c = pe(this.f, this.k, e), -1 === c ? (c = 2 * this.k, d = Array(c + 2), kc(this.f, 0, d, 0, c), d[c] = e, d[c + 1] = f, h.xa = !0, new qe(null, this.za, this.k + 1, d)) : Ib.c(this.f[c], f) ? this : new qe(null, this.za, this.k, ee.d(this.f, c + 1, f))) : (new he(null, 1 << (this.za >>> c & 31), [null, this])).ta(c, d, e, f, h);
};
m.Ga = function(c, d, e, f) {
  c = pe(this.f, this.k, e);
  return 0 > c ? f : de(e, this.f[c]) ? this.f[c + 1] : y ? f : null;
};
var le = function() {
  function c(c, d, e, l, p, n, s) {
    var q = E(e);
    if (q === p) {
      return new qe(null, q, 2, [e, l, n, s]);
    }
    var u = new ce;
    return je.ua(c, d, q, e, l, u).ua(c, d, p, n, s, u);
  }
  function d(c, d, e, l, p, n) {
    var s = E(d);
    if (s === l) {
      return new qe(null, s, 2, [d, e, p, n]);
    }
    var q = new ce;
    return je.ta(c, s, d, e, q).ta(c, l, p, n, q);
  }
  var e = null, e = function(e, h, k, l, p, n, s) {
    switch(arguments.length) {
      case 6:
        return d.call(this, e, h, k, l, p, n);
      case 7:
        return c.call(this, e, h, k, l, p, n, s);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.ra = d;
  e.Sa = c;
  return e;
}();
function re(c, d, e, f, h) {
  this.meta = c;
  this.va = d;
  this.s = e;
  this.J = f;
  this.n = h;
  this.A = 0;
  this.l = 32374860;
}
m = re.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return null == this.J ? new X(null, 2, 5, Y, [this.va[this.s], this.va[this.s + 1]], null) : H(this.J);
};
m.ia = function() {
  return null == this.J ? me.d ? me.d(this.va, this.s + 2, null) : me.call(null, this.va, this.s + 2, null) : me.d ? me.d(this.va, this.s, L(this.J)) : me.call(null, this.va, this.s, L(this.J));
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new re(d, this.va, this.s, this.J, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ac(K, this.meta);
};
var me = function() {
  function c(c, d, e) {
    if (null == e) {
      for (e = c.length;;) {
        if (d < e) {
          if (null != c[d]) {
            return new re(null, c, d, null, null);
          }
          var l = c[d + 1];
          if (w(l) && (l = l.Ya(), w(l))) {
            return new re(null, c, d + 2, l, null);
          }
          d += 2;
        } else {
          return null;
        }
      }
    } else {
      return new re(null, c, d, e, null);
    }
  }
  function d(c) {
    return e.d(c, 0, null);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.d = c;
  return e;
}();
function se(c, d, e, f, h) {
  this.meta = c;
  this.va = d;
  this.s = e;
  this.J = f;
  this.n = h;
  this.A = 0;
  this.l = 32374860;
}
m = se.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return H(this.J);
};
m.ia = function() {
  return oe.o ? oe.o(null, this.va, this.s, L(this.J)) : oe.call(null, null, this.va, this.s, L(this.J));
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new se(d, this.va, this.s, this.J, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ac(K, this.meta);
};
var oe = function() {
  function c(c, d, e, l) {
    if (null == l) {
      for (l = d.length;;) {
        if (e < l) {
          var p = d[e];
          if (w(p) && (p = p.Ya(), w(p))) {
            return new se(c, d, e + 1, p, null);
          }
          e += 1;
        } else {
          return null;
        }
      }
    } else {
      return new se(c, d, e, l, null);
    }
  }
  function d(c) {
    return e.o(null, c, 0, null);
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 4:
        return c.call(this, e, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.o = c;
  return e;
}();
function te(c, d, e, f, h, k) {
  this.meta = c;
  this.k = d;
  this.root = e;
  this.Y = f;
  this.ma = h;
  this.n = k;
  this.A = 4;
  this.l = 16123663;
}
m = te.prototype;
m.Va = function() {
  return new ue({}, this.root, this.k, this.Y, this.ma);
};
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = xc(this);
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return null == d ? this.Y ? this.ma : e : null == this.root ? e : y ? this.root.Ga(0, E(d), d, e) : null;
};
m.ya = function(c, d, e) {
  if (null == d) {
    return this.Y && e === this.ma ? this : new te(this.meta, this.Y ? this.k : this.k + 1, this.root, !0, e, null);
  }
  c = new ce;
  d = (null == this.root ? je : this.root).ta(0, E(d), d, e, c);
  return d === this.root ? this : new te(this.meta, c.xa ? this.k + 1 : this.k, d, this.Y, this.ma, null);
};
m.nb = function(c, d) {
  return null == d ? this.Y : null == this.root ? !1 : y ? this.root.Ga(0, E(d), d, lc) !== lc : null;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.O(null, e);
      case 3:
        return this.P(null, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.K = function(c, d) {
  return hc(d) ? Va(this, B.c(d, 0), B.c(d, 1)) : U.d(Ma, this, d);
};
m.toString = function() {
  return Fb(this);
};
m.M = function() {
  if (0 < this.k) {
    var c = null != this.root ? this.root.Ya() : null;
    return this.Y ? N(new X(null, 2, 5, Y, [null, this.ma], null), c) : c;
  }
  return null;
};
m.Q = function() {
  return this.k;
};
m.D = function(c, d) {
  return Ud(this, d);
};
m.N = function(c, d) {
  return new te(d, this.k, this.root, this.Y, this.ma, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return jb(Zd, this.meta);
};
m.La = function(c, d) {
  if (null == d) {
    return this.Y ? new te(this.meta, this.k - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (y) {
    var e = this.root.Za(0, E(d), d);
    return e === this.root ? this : new te(this.meta, this.k - 1, e, this.Y, this.ma, null);
  }
  return null;
};
var Zd = new te(null, 0, null, !1, null, 0);
function Xb(c, d) {
  for (var e = c.length, f = 0, h = ub(Zd);;) {
    if (f < e) {
      var k = f + 1, h = h.Xa(null, c[f], d[f]), f = k
    } else {
      return wb(h);
    }
  }
}
function ue(c, d, e, f, h) {
  this.B = c;
  this.root = d;
  this.count = e;
  this.Y = f;
  this.ma = h;
  this.A = 56;
  this.l = 258;
}
m = ue.prototype;
m.Gb = function(c, d) {
  if (this.B) {
    if (null == d) {
      this.Y && (this.Y = !1, this.ma = null, this.count -= 1);
    } else {
      if (null != this.root) {
        var e = new ce, f = this.root.$a(this.B, 0, E(d), d, e);
        f !== this.root && (this.root = f);
        w(e[0]) && (this.count -= 1);
      }
    }
  } else {
    throw Error("dissoc! after persistent!");
  }
  return this;
};
m.Xa = function(c, d, e) {
  return ve(this, d, e);
};
m.Ma = function(c, d) {
  var e;
  a: {
    if (this.B) {
      if (d ? d.l & 2048 || d.ec || (d.l ? 0 : x(Ya, d)) : x(Ya, d)) {
        e = ve(this, yc.e ? yc.e(d) : yc.call(null, d), zc.e ? zc.e(d) : zc.call(null, d));
        break a;
      }
      e = G(d);
      for (var f = this;;) {
        var h = H(e);
        if (w(h)) {
          e = L(e), f = ve(f, yc.e ? yc.e(h) : yc.call(null, h), zc.e ? zc.e(h) : zc.call(null, h));
        } else {
          e = f;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    e = void 0;
  }
  return e;
};
m.Na = function() {
  var c;
  if (this.B) {
    this.B = null, c = new te(null, this.count, this.root, this.Y, this.ma, null);
  } else {
    throw Error("persistent! called twice");
  }
  return c;
};
m.O = function(c, d) {
  return null == d ? this.Y ? this.ma : null : null == this.root ? null : this.root.Ga(0, E(d), d);
};
m.P = function(c, d, e) {
  return null == d ? this.Y ? this.ma : e : null == this.root ? e : this.root.Ga(0, E(d), d, e);
};
m.Q = function() {
  if (this.B) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function ve(c, d, e) {
  if (c.B) {
    if (null == d) {
      c.ma !== e && (c.ma = e), c.Y || (c.count += 1, c.Y = !0);
    } else {
      var f = new ce;
      d = (null == c.root ? je : c.root).ua(c.B, 0, E(d), d, e, f);
      d !== c.root && (c.root = d);
      f.xa && (c.count += 1);
    }
    return c;
  }
  throw Error("assoc! after persistent!");
}
var we = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    c = G(c);
    for (var d = ub(Zd);;) {
      if (c) {
        var h = L(L(c)), d = Vc(d, H(c), H(L(c)));
        c = h;
      } else {
        return wb(d);
      }
    }
  }
  c.m = 0;
  c.j = function(c) {
    c = G(c);
    return d(c);
  };
  c.i = d;
  return c;
}();
function xe(c, d) {
  this.da = c;
  this.fa = d;
  this.A = 0;
  this.l = 32374988;
}
m = xe.prototype;
m.H = function() {
  return Sb(this);
};
m.Z = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Ra, c)) : x(Ra, c)) ? this.da.Z(null) : L(this.da);
  return null == c ? null : new xe(c, this.fa);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.da.W(null).Eb();
};
m.ia = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Ra, c)) : x(Ra, c)) ? this.da.Z(null) : L(this.da);
  return null != c ? new xe(c, this.fa) : K;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new xe(this.da, d);
};
m.L = function() {
  return this.fa;
};
m.U = function() {
  return ac(K, this.fa);
};
function ye(c) {
  return(c = G(c)) ? new xe(c, null) : null;
}
function yc(c) {
  return Za(c);
}
function ze(c, d) {
  this.da = c;
  this.fa = d;
  this.A = 0;
  this.l = 32374988;
}
m = ze.prototype;
m.H = function() {
  return Sb(this);
};
m.Z = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Ra, c)) : x(Ra, c)) ? this.da.Z(null) : L(this.da);
  return null == c ? null : new ze(c, this.fa);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return qc.c(d, this);
};
m.aa = function(c, d, e) {
  return qc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.da.W(null).Fb();
};
m.ia = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Ra, c)) : x(Ra, c)) ? this.da.Z(null) : L(this.da);
  return null != c ? new ze(c, this.fa) : K;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new ze(this.da, d);
};
m.L = function() {
  return this.fa;
};
m.U = function() {
  return ac(K, this.fa);
};
function zc(c) {
  return $a(c);
}
var Ae = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    return w($c(c)) ? U.c(function(c, d) {
      return Vb.c(w(c) ? c : $d, d);
    }, c) : null;
  }
  c.m = 0;
  c.j = function(c) {
    c = G(c);
    return d(c);
  };
  c.i = d;
  return c;
}();
function Be(c, d, e) {
  this.meta = c;
  this.Pa = d;
  this.n = e;
  this.A = 4;
  this.l = 15077647;
}
m = Be.prototype;
m.Va = function() {
  return new Ce(ub(this.Pa));
};
m.H = function() {
  var c = this.n;
  if (null != c) {
    return c;
  }
  a: {
    for (var c = 0, d = G(this);;) {
      if (d) {
        var e = H(d), c = (c + E(e)) % 4503599627370496, d = L(d)
      } else {
        break a;
      }
    }
    c = void 0;
  }
  return this.n = c;
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return Ua(this.Pa, d) ? d : e;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.O(null, e);
      case 3:
        return this.P(null, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.K = function(c, d) {
  return new Be(this.meta, S.d(this.Pa, d, null), null);
};
m.toString = function() {
  return Fb(this);
};
m.M = function() {
  return ye(this.Pa);
};
m.Pb = function(c, d) {
  return new Be(this.meta, Xa(this.Pa, d), null);
};
m.Q = function() {
  return Ja(this.Pa);
};
m.D = function(c, d) {
  var e = this;
  return(null == d ? !1 : d ? d.l & 4096 || d.yc ? !0 : d.l ? !1 : x(ab, d) : x(ab, d)) && O(e) === O(d) && Zc(function(c) {
    return oc(e, c);
  }, d);
};
m.N = function(c, d) {
  return new Be(d, this.Pa, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ac(De, this.meta);
};
var De = new Be(null, $d, 0);
function Ce(c) {
  this.Ca = c;
  this.l = 259;
  this.A = 136;
}
m = Ce.prototype;
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Ta.d(this.Ca, e, lc) === lc ? null : e;
      case 3:
        return Ta.d(this.Ca, e, lc) === lc ? f : e;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Ga(d)));
};
m.e = function(c) {
  return Ta.d(this.Ca, c, lc) === lc ? null : c;
};
m.c = function(c, d) {
  return Ta.d(this.Ca, c, lc) === lc ? d : c;
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return Ta.d(this.Ca, d, lc) === lc ? e : d;
};
m.Q = function() {
  return O(this.Ca);
};
m.Ma = function(c, d) {
  this.Ca = xb(this.Ca, d, null);
  return this;
};
m.Na = function() {
  return new Be(null, wb(this.Ca), null);
};
function Ee(c) {
  c = G(c);
  if (null == c) {
    return De;
  }
  if (c instanceof Nb && 0 === c.s) {
    c = c.f;
    a: {
      for (var d = 0, e = ub(De);;) {
        if (d < c.length) {
          var f = d + 1, e = e.Ma(null, c[d]), d = f
        } else {
          c = e;
          break a;
        }
      }
      c = void 0;
    }
    return c.Na(null);
  }
  if (y) {
    for (f = ub(De);;) {
      if (null != c) {
        d = c.Z(null), f = f.Ma(null, c.W(null)), c = d;
      } else {
        return f.Na(null);
      }
    }
  } else {
    return null;
  }
}
function Ec(c) {
  if (c && (c.A & 4096 || c.gc)) {
    return c.name;
  }
  if ("string" === typeof c) {
    return c;
  }
  throw Error([A("Doesn't support name: "), A(c)].join(""));
}
var Fe = function() {
  function c(c, d, e) {
    return(c.e ? c.e(d) : c.call(null, d)) > (c.e ? c.e(e) : c.call(null, e)) ? d : e;
  }
  var d = null, e = function() {
    function c(d, f, p, n) {
      var s = null;
      3 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, p, s);
    }
    function e(c, f, h, n) {
      return U.d(function(e, f) {
        return d.d(c, e, f);
      }, d.d(c, f, h), n);
    }
    c.m = 3;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var n = H(c);
      c = J(c);
      return e(d, f, n, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return h;
      case 3:
        return c.call(this, d, h, k);
      default:
        return e.i(d, h, k, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 3;
  d.j = e.j;
  d.c = function(c, d) {
    return d;
  };
  d.d = c;
  d.i = e.i;
  return d;
}(), He = function Ge(d, e) {
  return new Gc(null, function() {
    var f = G(e);
    return f ? w(d.e ? d.e(H(f)) : d.call(null, H(f))) ? N(H(f), Ge(d, J(f))) : null : null;
  }, null, null);
};
function Ie(c, d, e, f, h) {
  this.meta = c;
  this.start = d;
  this.end = e;
  this.step = f;
  this.n = h;
  this.A = 0;
  this.l = 32375006;
}
m = Ie.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Sb(this);
};
m.Z = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Ie(this.meta, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Ie(this.meta, this.start + this.step, this.end, this.step, null) : null;
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Fb(this);
};
m.$ = function(c, d) {
  return Ob.c(this, d);
};
m.aa = function(c, d, e) {
  return Ob.d(this, d, e);
};
m.M = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
m.Q = function() {
  return Da(pb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
m.W = function() {
  return null == pb(this) ? null : this.start;
};
m.ia = function() {
  return null != pb(this) ? new Ie(this.meta, this.start + this.step, this.end, this.step, null) : K;
};
m.D = function(c, d) {
  return Tb(this, d);
};
m.N = function(c, d) {
  return new Ie(d, this.start, this.end, this.step, this.n);
};
m.L = function() {
  return this.meta;
};
m.F = function(c, d) {
  if (d < Ja(this)) {
    return this.start + d * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
m.pa = function(c, d, e) {
  return d < Ja(this) ? this.start + d * this.step : this.start > this.end && 0 === this.step ? this.start : e;
};
m.U = function() {
  return ac(K, this.meta);
};
var Je = function() {
  function c(c, d, e) {
    return new Ie(null, c, d, e, null);
  }
  function d(c, d) {
    return h.d(c, d, 1);
  }
  function e(c) {
    return h.d(0, c, 1);
  }
  function f() {
    return h.d(0, Number.MAX_VALUE, 1);
  }
  var h = null, h = function(h, l, p) {
    switch(arguments.length) {
      case 0:
        return f.call(this);
      case 1:
        return e.call(this, h);
      case 2:
        return d.call(this, h, l);
      case 3:
        return c.call(this, h, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.q = f;
  h.e = e;
  h.c = d;
  h.d = c;
  return h;
}(), Ke = function() {
  function c(c, d, e) {
    return function() {
      var f = null, h = function() {
        function f(c, d, e, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, c, d, e, l);
        }
        function h(f, n, q, s) {
          return new X(null, 3, 5, Y, [T.I(c, f, n, q, s), T.I(d, f, n, q, s), T.I(e, f, n, q, s)], null);
        }
        f.m = 3;
        f.j = function(c) {
          var d = H(c);
          c = L(c);
          var e = H(c);
          c = L(c);
          var f = H(c);
          c = J(c);
          return h(d, e, f, c);
        };
        f.i = h;
        return f;
      }(), f = function(f, n, D, F) {
        switch(arguments.length) {
          case 0:
            return new X(null, 3, 5, Y, [c.q ? c.q() : c.call(null), d.q ? d.q() : d.call(null), e.q ? e.q() : e.call(null)], null);
          case 1:
            return new X(null, 3, 5, Y, [c.e ? c.e(f) : c.call(null, f), d.e ? d.e(f) : d.call(null, f), e.e ? e.e(f) : e.call(null, f)], null);
          case 2:
            return new X(null, 3, 5, Y, [c.c ? c.c(f, n) : c.call(null, f, n), d.c ? d.c(f, n) : d.call(null, f, n), e.c ? e.c(f, n) : e.call(null, f, n)], null);
          case 3:
            return new X(null, 3, 5, Y, [c.d ? c.d(f, n, D) : c.call(null, f, n, D), d.d ? d.d(f, n, D) : d.call(null, f, n, D), e.d ? e.d(f, n, D) : e.call(null, f, n, D)], null);
          default:
            return h.i(f, n, D, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.m = 3;
      f.j = h.j;
      return f;
    }();
  }
  function d(c, d) {
    return function() {
      var e = null, f = function() {
        function e(c, d, h, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return f.call(this, c, d, h, l);
        }
        function f(e, h, p, n) {
          return new X(null, 2, 5, Y, [T.I(c, e, h, p, n), T.I(d, e, h, p, n)], null);
        }
        e.m = 3;
        e.j = function(c) {
          var d = H(c);
          c = L(c);
          var e = H(c);
          c = L(c);
          var h = H(c);
          c = J(c);
          return f(d, e, h, c);
        };
        e.i = f;
        return e;
      }(), e = function(e, h, p, D) {
        switch(arguments.length) {
          case 0:
            return new X(null, 2, 5, Y, [c.q ? c.q() : c.call(null), d.q ? d.q() : d.call(null)], null);
          case 1:
            return new X(null, 2, 5, Y, [c.e ? c.e(e) : c.call(null, e), d.e ? d.e(e) : d.call(null, e)], null);
          case 2:
            return new X(null, 2, 5, Y, [c.c ? c.c(e, h) : c.call(null, e, h), d.c ? d.c(e, h) : d.call(null, e, h)], null);
          case 3:
            return new X(null, 2, 5, Y, [c.d ? c.d(e, h, p) : c.call(null, e, h, p), d.d ? d.d(e, h, p) : d.call(null, e, h, p)], null);
          default:
            return f.i(e, h, p, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      e.m = 3;
      e.j = f.j;
      return e;
    }();
  }
  function e(c) {
    return function() {
      var d = null, e = function() {
        function d(c, f, h, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, c, f, h, l);
        }
        function e(d, f, h, l) {
          return new X(null, 1, 5, Y, [T.I(c, d, f, h, l)], null);
        }
        d.m = 3;
        d.j = function(c) {
          var d = H(c);
          c = L(c);
          var f = H(c);
          c = L(c);
          var h = H(c);
          c = J(c);
          return e(d, f, h, c);
        };
        d.i = e;
        return d;
      }(), d = function(d, f, h, l) {
        switch(arguments.length) {
          case 0:
            return new X(null, 1, 5, Y, [c.q ? c.q() : c.call(null)], null);
          case 1:
            return new X(null, 1, 5, Y, [c.e ? c.e(d) : c.call(null, d)], null);
          case 2:
            return new X(null, 1, 5, Y, [c.c ? c.c(d, f) : c.call(null, d, f)], null);
          case 3:
            return new X(null, 1, 5, Y, [c.d ? c.d(d, f, h) : c.call(null, d, f, h)], null);
          default:
            return e.i(d, f, h, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.m = 3;
      d.j = e.j;
      return d;
    }();
  }
  var f = null, h = function() {
    function c(e, f, h, k) {
      var u = null;
      3 < arguments.length && (u = M(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, u);
    }
    function d(c, e, f, h) {
      var k = Sc.o(c, e, f, h);
      return function() {
        function c(d, e, f) {
          return U.d(function(c, h) {
            return Vb.c(c, h.d ? h.d(d, e, f) : h.call(null, d, e, f));
          }, Ld, k);
        }
        function d(c, e) {
          return U.d(function(d, f) {
            return Vb.c(d, f.c ? f.c(c, e) : f.call(null, c, e));
          }, Ld, k);
        }
        function e(c) {
          return U.d(function(d, e) {
            return Vb.c(d, e.e ? e.e(c) : e.call(null, c));
          }, Ld, k);
        }
        function f() {
          return U.d(function(c, d) {
            return Vb.c(c, d.q ? d.q() : d.call(null));
          }, Ld, k);
        }
        var h = null, l = function() {
          function c(e, f, h, k) {
            var l = null;
            3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
            return d.call(this, e, f, h, l);
          }
          function d(c, e, f, h) {
            return U.d(function(d, k) {
              return Vb.c(d, T.I(k, c, e, f, h));
            }, Ld, k);
          }
          c.m = 3;
          c.j = function(c) {
            var e = H(c);
            c = L(c);
            var f = H(c);
            c = L(c);
            var h = H(c);
            c = J(c);
            return d(e, f, h, c);
          };
          c.i = d;
          return c;
        }(), h = function(h, k, p, n) {
          switch(arguments.length) {
            case 0:
              return f.call(this);
            case 1:
              return e.call(this, h);
            case 2:
              return d.call(this, h, k);
            case 3:
              return c.call(this, h, k, p);
            default:
              return l.i(h, k, p, M(arguments, 3));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        h.m = 3;
        h.j = l.j;
        return h;
      }();
    }
    c.m = 3;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = J(c);
      return d(e, f, h, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, p, n) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, l);
      case 3:
        return c.call(this, f, l, p);
      default:
        return h.i(f, l, p, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.m = 3;
  f.j = h.j;
  f.e = e;
  f.c = d;
  f.d = c;
  f.i = h.i;
  return f;
}(), Le = function() {
  function c(c, d) {
    for (;;) {
      if (G(d) && 0 < c) {
        var e = c - 1, l = L(d);
        c = e;
        d = l;
      } else {
        return null;
      }
    }
  }
  function d(c) {
    for (;;) {
      if (G(c)) {
        c = L(c);
      } else {
        return null;
      }
    }
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
function Me(c, d, e, f, h, k, l) {
  var p = wa;
  try {
    wa = null == wa ? null : wa - 1;
    if (null != wa && 0 > wa) {
      return C(c, "#");
    }
    C(c, e);
    G(l) && (d.d ? d.d(H(l), c, k) : d.call(null, H(l), c, k));
    for (var n = L(l), s = Ca.e(k);n && (null == s || 0 !== s);) {
      C(c, f);
      d.d ? d.d(H(n), c, k) : d.call(null, H(n), c, k);
      var q = L(n);
      e = s - 1;
      n = q;
      s = e;
    }
    w(Ca.e(k)) && (C(c, f), d.d ? d.d("...", c, k) : d.call(null, "...", c, k));
    return C(c, h);
  } finally {
    wa = p;
  }
}
var Ne = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h);
  }
  function d(c, d) {
    for (var h = G(d), k = null, l = 0, p = 0;;) {
      if (p < l) {
        var n = k.F(null, p);
        C(c, n);
        p += 1;
      } else {
        if (h = G(h)) {
          k = h, ic(k) ? (h = Bb(k), l = Cb(k), k = h, n = O(h), h = l, l = n) : (n = H(k), C(c, n), h = L(k), k = null, l = 0), p = 0;
        } else {
          return null;
        }
      }
    }
  }
  c.m = 1;
  c.j = function(c) {
    var f = H(c);
    c = J(c);
    return d(f, c);
  };
  c.i = d;
  return c;
}(), Oe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Pe(c) {
  return[A('"'), A(c.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(c) {
    return Oe[c];
  })), A('"')].join("");
}
var Se = function Qe(d, e, f) {
  if (null == d) {
    return C(e, "nil");
  }
  if (void 0 === d) {
    return C(e, "#\x3cundefined\x3e");
  }
  if (y) {
    w(function() {
      var e = R.c(f, Aa);
      return w(e) ? (e = d ? d.l & 131072 || d.fc ? !0 : d.l ? !1 : x(gb, d) : x(gb, d)) ? bc(d) : e : e;
    }()) && (C(e, "^"), Qe(bc(d), e, f), C(e, " "));
    if (null == d) {
      return C(e, "nil");
    }
    if (d.Ub) {
      return d.ic(e);
    }
    if (d && (d.l & 2147483648 || d.V)) {
      return d.G(null, e, f);
    }
    if (Ea(d) === Boolean || "number" === typeof d) {
      return C(e, "" + A(d));
    }
    if (null != d && d.constructor === Object) {
      return C(e, "#js "), Re.o ? Re.o(ed.c(function(e) {
        return new X(null, 2, 5, Y, [Fc.e(e), d[e]], null);
      }, jc(d)), Qe, e, f) : Re.call(null, ed.c(function(e) {
        return new X(null, 2, 5, Y, [Fc.e(e), d[e]], null);
      }, jc(d)), Qe, e, f);
    }
    if (d instanceof Array) {
      return Me(e, Qe, "#js [", " ", "]", f, d);
    }
    if (ba(d)) {
      return w(za.e(f)) ? C(e, Pe(d)) : C(e, d);
    }
    if (Zb(d)) {
      return Ne.i(e, M(["#\x3c", "" + A(d), "\x3e"], 0));
    }
    if (d instanceof Date) {
      var h = function(d, e) {
        for (var f = "" + A(d);;) {
          if (O(f) < e) {
            f = [A("0"), A(f)].join("");
          } else {
            return f;
          }
        }
      };
      return Ne.i(e, M(['#inst "', "" + A(d.getUTCFullYear()), "-", h(d.getUTCMonth() + 1, 2), "-", h(d.getUTCDate(), 2), "T", h(d.getUTCHours(), 2), ":", h(d.getUTCMinutes(), 2), ":", h(d.getUTCSeconds(), 2), ".", h(d.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return d instanceof RegExp ? Ne.i(e, M(['#"', d.source, '"'], 0)) : (d ? d.l & 2147483648 || d.V || (d.l ? 0 : x(rb, d)) : x(rb, d)) ? sb(d, e, f) : y ? Ne.i(e, M(["#\x3c", "" + A(d), "\x3e"], 0)) : null;
  }
  return null;
}, Te = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    var d;
    if (null == c || Da(G(c))) {
      d = "";
    } else {
      d = A;
      var h = xa(), k = new ua;
      a: {
        var l = new Eb(k);
        Se(H(c), l, h);
        c = G(L(c));
        for (var p = null, n = 0, s = 0;;) {
          if (s < n) {
            var q = p.F(null, s);
            C(l, " ");
            Se(q, l, h);
            s += 1;
          } else {
            if (c = G(c)) {
              p = c, ic(p) ? (c = Bb(p), n = Cb(p), p = c, q = O(c), c = n, n = q) : (q = H(p), C(l, " "), Se(q, l, h), c = L(p), p = null, n = 0), s = 0;
            } else {
              break a;
            }
          }
        }
      }
      d = "" + d(k);
    }
    return d;
  }
  c.m = 0;
  c.j = function(c) {
    c = G(c);
    return d(c);
  };
  c.i = d;
  return c;
}();
function Re(c, d, e, f) {
  return Me(e, function(c, e, f) {
    d.d ? d.d(Za(c), e, f) : d.call(null, Za(c), e, f);
    C(e, " ");
    return d.d ? d.d($a(c), e, f) : d.call(null, $a(c), e, f);
  }, "{", ", ", "}", f, G(c));
}
xe.prototype.V = !0;
xe.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
Nb.prototype.V = !0;
Nb.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
Od.prototype.V = !0;
Od.prototype.G = function(c, d, e) {
  return Me(d, Se, "[", " ", "]", e, this);
};
Lc.prototype.V = !0;
Lc.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
v.prototype.V = !0;
v.prototype.G = function(c, d, e) {
  return Re(this, Se, d, e);
};
Gc.prototype.V = !0;
Gc.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
re.prototype.V = !0;
re.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
Md.prototype.V = !0;
Md.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
te.prototype.V = !0;
te.prototype.G = function(c, d, e) {
  return Re(this, Se, d, e);
};
Be.prototype.V = !0;
Be.prototype.G = function(c, d, e) {
  return Me(d, Se, "#{", " ", "}", e, this);
};
X.prototype.V = !0;
X.prototype.G = function(c, d, e) {
  return Me(d, Se, "[", " ", "]", e, this);
};
Ac.prototype.V = !0;
Ac.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
Wd.prototype.V = !0;
Wd.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
Bc.prototype.V = !0;
Bc.prototype.G = function(c, d) {
  return C(d, "()");
};
Dc.prototype.V = !0;
Dc.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
Ie.prototype.V = !0;
Ie.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
se.prototype.V = !0;
se.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
ze.prototype.V = !0;
ze.prototype.G = function(c, d, e) {
  return Me(d, Se, "(", " ", ")", e, this);
};
X.prototype.cb = !0;
X.prototype.eb = function(c, d) {
  return pc.c(this, d);
};
Od.prototype.cb = !0;
Od.prototype.eb = function(c, d) {
  return pc.c(this, d);
};
V.prototype.cb = !0;
V.prototype.eb = function(c, d) {
  return Hb(this, d);
};
Lb.prototype.cb = !0;
Lb.prototype.eb = function(c, d) {
  return Hb(this, d);
};
function Ue(c, d, e, f) {
  this.state = c;
  this.meta = d;
  this.pc = e;
  this.ac = f;
  this.l = 2153938944;
  this.A = 2;
}
m = Ue.prototype;
m.H = function() {
  return da(this);
};
m.Rb = function(c, d, e) {
  c = G(this.ac);
  for (var f = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = f.F(null, k), p = P.d(l, 0, null), l = P.d(l, 1, null);
      l.o ? l.o(p, this, d, e) : l.call(null, p, this, d, e);
      k += 1;
    } else {
      if (c = G(c)) {
        ic(c) ? (f = Bb(c), c = Cb(c), p = f, h = O(f), f = p) : (f = H(c), p = P.d(f, 0, null), l = P.d(f, 1, null), l.o ? l.o(p, this, d, e) : l.call(null, p, this, d, e), c = L(c), f = null, h = 0), k = 0;
      } else {
        return null;
      }
    }
  }
};
m.G = function(c, d, e) {
  C(d, "#\x3cAtom: ");
  Se(this.state, d, e);
  return C(d, "\x3e");
};
m.L = function() {
  return this.meta;
};
m.dc = function() {
  return this.state;
};
m.D = function(c, d) {
  return this === d;
};
var We = function() {
  function c(c) {
    return new Ue(c, null, null, null);
  }
  var d = null, e = function() {
    function c(e, f) {
      var p = null;
      1 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, e, p);
    }
    function d(c, e) {
      var f = mc(e) ? T.c(we, e) : e, h = R.c(f, Ve), f = R.c(f, Aa);
      return new Ue(c, f, h, null);
    }
    c.m = 1;
    c.j = function(c) {
      var e = H(c);
      c = J(c);
      return d(e, c);
    };
    c.i = d;
    return c;
  }(), d = function(d, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      default:
        return e.i(d, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 1;
  d.j = e.j;
  d.e = c;
  d.i = e.i;
  return d;
}();
function Xe(c, d) {
  var e = c.pc;
  if (null != e && !w(e.e ? e.e(d) : e.call(null, d))) {
    throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(Te.i(M([Cc(new Lb(null, "validate", "validate", 1233162959, null), new Lb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  e = c.state;
  c.state = d;
  null != c.ac && tb(c, e, d);
  return d;
}
var Ye = function() {
  function c(c, d, e, f, h) {
    return Xe(c, d.o ? d.o(c.state, e, f, h) : d.call(null, c.state, e, f, h));
  }
  function d(c, d, e, f) {
    return Xe(c, d.d ? d.d(c.state, e, f) : d.call(null, c.state, e, f));
  }
  function e(c, d, e) {
    return Xe(c, d.c ? d.c(c.state, e) : d.call(null, c.state, e));
  }
  function f(c, d) {
    return Xe(c, d.e ? d.e(c.state) : d.call(null, c.state));
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, F) {
      var I = null;
      5 < arguments.length && (I = M(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, I);
    }
    function d(c, e, f, h, k, l) {
      return Xe(c, T.i(e, c.state, f, h, k, M([l], 0)));
    }
    c.m = 5;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = L(c);
      var l = H(c);
      c = J(c);
      return d(e, f, h, k, l, c);
    };
    c.i = d;
    return c;
  }(), h = function(h, p, n, s, q, u) {
    switch(arguments.length) {
      case 2:
        return f.call(this, h, p);
      case 3:
        return e.call(this, h, p, n);
      case 4:
        return d.call(this, h, p, n, s);
      case 5:
        return c.call(this, h, p, n, s, q);
      default:
        return k.i(h, p, n, s, q, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.m = 5;
  h.j = k.j;
  h.c = f;
  h.d = e;
  h.o = d;
  h.I = c;
  h.i = k.i;
  return h;
}(), tc = function() {
  function c(c) {
    return(Math.random.q ? Math.random.q() : Math.random.call(null)) * c;
  }
  function d() {
    return e.e(1);
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.e = c;
  return e;
}(), uc = function(c) {
  return Math.floor.e ? Math.floor.e((Math.random.q ? Math.random.q() : Math.random.call(null)) * c) : Math.floor.call(null, (Math.random.q ? Math.random.q() : Math.random.call(null)) * c);
};
function Ze(c) {
  return P.c(c, uc(O(c)));
}
function $e(c) {
  this.kb = c;
  this.A = 0;
  this.l = 2153775104;
}
$e.prototype.H = function() {
  return na(Te.i(M([this], 0)));
};
$e.prototype.G = function(c, d) {
  return C(d, [A('#uuid "'), A(this.kb), A('"')].join(""));
};
$e.prototype.D = function(c, d) {
  return d instanceof $e && this.kb === d.kb;
};
function af() {
  var c = 135 / 255, d = 108 / 255, e = 46 / 255, f = Math.max(c, d, e), h = Math.min(c, d, e), k = 0, l = 0, p = 0.5 * (f + h);
  f != h && (f == c ? k = 60 * (d - e) / (f - h) : f == d ? k = 60 * (e - c) / (f - h) + 120 : f == e && (k = 60 * (c - d) / (f - h) + 240), l = 0 < p && 0.5 >= p ? (f - h) / (2 * p) : (f - h) / (2 - 2 * p));
  return[Math.round(k + 360) % 360, l, p];
}
function bf(c, d, e) {
  0 > e ? e += 1 : 1 < e && (e -= 1);
  return 1 > 6 * e ? c + 6 * (d - c) * e : 1 > 2 * e ? d : 2 > 3 * e ? c + (d - c) * (2 / 3 - e) * 6 : c;
}
function cf(c, d, e) {
  var f = 0, h = 0, k = 0;
  c /= 360;
  if (0 == d) {
    f = h = k = 255 * e;
  } else {
    var l = k = 0, l = 0.5 > e ? e * (1 + d) : e + d - d * e, k = 2 * e - l, f = 255 * bf(k, l, c + 1 / 3), h = 255 * bf(k, l, c), k = 255 * bf(k, l, c - 1 / 3)
  }
  return[Math.round(f), Math.round(h), Math.round(k)];
}
;var Ba = new V(null, "dup", "dup"), df = new V(null, "geometry", "geometry"), ef = new V(null, "background-layer", "background-layer"), ff = new V(null, "camera", "camera"), gf = new V(null, "entities", "entities"), Kb = new V(null, "default", "default"), hf = new V(null, "display-object", "display-object"), jf = new V(null, "renderer", "renderer"), kf = new V(null, "position", "position"), lf = new V(null, "vector", "vector"), nf = new V(null, "duration", "duration"), of = new V(null, "identifier", 
"identifier"), pf = new V(null, "cooldown-remaining", "cooldown-remaining"), qf = new V(null, "layers", "layers"), rf = new V(null, "movement", "movement"), sf = new V(null, "health", "health"), tf = new V(null, "width", "width"), uf = new V(null, "magnitude", "magnitude"), vf = new V(null, "velocity", "velocity"), wf = new V(null, "asteroid-explosive-death", "asteroid-explosive-death"), xf = new V(null, "fire-intent", "fire-intent"), yf = new V(null, "mouseover", "mouseover"), zf = new V(null, "current", 
"current"), Af = new V(null, "world", "world"), Bf = new V(null, "class", "class"), Cf = new V(null, "entity-id", "entity-id"), Df = new V(null, "radius", "radius"), Ef = new V(null, "collidable", "collidable"), Ff = new V(null, "player", "player"), Z = new V(null, "name", "name"), Gf = new V(null, "angular-acceleration", "angular-acceleration"), Hf = new V(null, "aabb", "aabb"), If = new V(null, "drag", "drag"), Jf = new V(null, "color", "color"), Kf = new V(null, "mouseout", "mouseout"), ya = new V(null, 
"flush-on-newline", "flush-on-newline"), Lf = new V(null, "coefficient", "coefficient"), Mf = new V(null, "max-angular-velocity", "max-angular-velocity"), Nf = new V(null, "thrust-intent", "thrust-intent"), Of = new V(null, "style", "style"), Pf = new V(null, "b-id", "b-id"), Qf = new V(null, "active-keys", "active-keys"), Rf = new V(null, "normal", "normal"), Sf = new V(null, "main-layer", "main-layer"), Tf = new V(null, "interface-layer", "interface-layer"), Uf = new V(null, "rotate-left-intent", 
"rotate-left-intent"), Vf = new V(null, "xmin", "xmin"), Wf = new V(null, "tensor", "tensor"), Xf = new V(null, "max", "max"), Yf = new V(null, "thrust", "thrust"), Zf = new V(null, "mouseleave", "mouseleave"), $f = new V(null, "aspect-ratio", "aspect-ratio"), ag = new V(null, "keydown", "keydown"), bg = new V(null, "ttl", "ttl"), cg = new V(null, "xmax", "xmax"), dg = new V(null, "cooldown", "cooldown"), eg = new V(null, "acceleration", "acceleration"), fg = new V(null, "moment-inertia", "moment-inertia"), 
gg = new V(null, "projectile", "projectile"), hg = new V(null, "damage", "damage"), ig = new V(null, "angular-velocity", "angular-velocity"), jg = new V(null, "space", "space"), Ca = new V(null, "print-length", "print-length"), kg = new V(null, "right", "right"), lg = new V(null, "weapon", "weapon"), mg = new V(null, "layer", "layer"), ng = new V(null, "left", "left"), og = new V(null, "a-id", "a-id"), pg = new V(null, "keyup", "keyup"), y = new V(null, "else", "else"), qg = new V(null, "contacts", 
"contacts"), rg = new V(null, "ymin", "ymin"), za = new V(null, "readably", "readably"), sg = new V(null, "prev-ids", "prev-ids"), tg = new V(null, "angle", "angle"), ug = new V(null, "mouseenter", "mouseenter"), vg = new V(null, "level", "level"), Ve = new V(null, "validator", "validator"), Aa = new V(null, "meta", "meta"), wg = new V(null, "rotate-right-intent", "rotate-right-intent"), xg = new V(null, "remaining", "remaining"), yg = new V(null, "ymax", "ymax"), zg = new V(null, "penetration", 
"penetration"), Ag = new V(null, "fov", "fov"), Bg = new V(null, "obj", "obj"), Cg = new V(null, "mass", "mass"), Dg = new V(null, "entity-ids", "entity-ids"), Eg = new V(null, "fixed", "fixed"), Fg = new V(null, "health-bar", "health-bar"), Gg = new V(null, "down", "down"), Hg = new V(null, "impulse", "impulse"), Ig = new V(null, "up", "up"), Jg = new V(null, "id", "id"), Kg = new V(null, "disabled", "disabled"), Lg = new V(null, "max-velocity", "max-velocity"), Mg = new V(null, "classes", "classes"), 
Ng = new V(null, "height", "height"), Og = new V(null, "window", "window"), Pg = new V(null, "rotation", "rotation"), Qg = new V(null, "stage", "stage");
function Rg() {
  var c = af(), d = c[0], e = c[1], f = c[2], c = uc(36) - 18, h = tc.e(0.1) - 0.05, k = tc.e(0.1) - 0.05, d = cf(sc(d + c, 360), sc(function() {
    var c;
    c = e + h;
    c = 0 > c ? 0 : c;
    return 1 < c ? 1 : c;
  }(), 1), sc(function() {
    var c;
    c = f + k;
    c = 0 > c ? 0 : c;
    return 1 < c ? 1 : c;
  }(), 1));
  return(d[0] << 16) + (d[1] << 8) + d[2];
}
;var Sg = function() {
  function c(c, d) {
    return T.c(A, hd(1, ld.c(id.e(c), d)));
  }
  function d(c) {
    return T.c(A, c);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
function Tg() {
  var c = Ug();
  return "" + A(c.kb);
}
function Ug() {
  function c() {
    return uc(16).toString(16);
  }
  return new $e((new ua).append(c(), c(), c(), c(), c(), c(), c(), c(), "-", c(), c(), c(), c(), "-4", c(), c(), c(), "-", (8 | 3 & uc(15)).toString(16), c(), c(), c(), "-", c(), c(), c(), c(), c(), c(), c(), c(), c(), c(), c(), c()));
}
var Vg, Wg = [A("^"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("-"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("-"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("-"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("-"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), 
A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("[0-9a-fA-F]"), A("$")].join(""), Xg = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(Wg);
Vg = null == Xg ? null : 1 === O(Xg) ? H(Xg) : wb(U.d(vb, ub(Ld), Xg));
P.d(Vg, 0, null);
P.d(Vg, 1, null);
P.d(Vg, 2, null);
var Yg = Math.PI, Zg = Number.MAX_VALUE, $g = Math.abs, ah = Math.pow, bh = Math.sqrt, ch = Math.cos, dh = Math.sin;
function eh(c, d) {
  return new X(null, 2, 5, Y, [P.c(c, 0) + P.c(d, 0), P.c(c, 1) + P.c(d, 1)], null);
}
function gh(c, d) {
  return new X(null, 2, 5, Y, [P.c(c, 0) - P.c(d, 0), P.c(c, 1) - P.c(d, 1)], null);
}
function hh(c) {
  return bh.e ? bh.e((ah.c ? ah.c(P.c(c, 0), 2) : ah.call(null, P.c(c, 0), 2)) + (ah.c ? ah.c(P.c(c, 1), 2) : ah.call(null, P.c(c, 1), 2))) : bh.call(null, (ah.c ? ah.c(P.c(c, 0), 2) : ah.call(null, P.c(c, 0), 2)) + (ah.c ? ah.c(P.c(c, 1), 2) : ah.call(null, P.c(c, 1), 2)));
}
function ih(c, d) {
  return new X(null, 2, 5, Y, [c * P.c(d, 0), c * P.c(d, 1)], null);
}
function jh(c, d) {
  return P.c(c, 0) * P.c(d, 0) + P.c(c, 1) * P.c(d, 1);
}
function kh(c) {
  var d = new X(null, 2, 5, Y, [1, 0], null), e = P.c(d, 0), d = P.c(d, 1);
  return new X(null, 2, 5, Y, [e * (ch.e ? ch.e(c) : ch.call(null, c)) - d * (dh.e ? dh.e(c) : dh.call(null, c)), e * (dh.e ? dh.e(c) : dh.call(null, c)) + d * (ch.e ? ch.e(c) : ch.call(null, c))], null);
}
function lh(c) {
  return new X(null, 2, 5, Y, [-P.c(c, 1), P.c(c, 0)], null);
}
function mh(c) {
  var d = hh(c);
  return new X(null, 2, 5, Y, [P.c(c, 0) / d, P.c(c, 1) / d], null);
}
function nh(c) {
  return 0 === P.c(c, 0) && P.c(c, 0) === P.c(c, 1);
}
;function oh(c, d) {
  var e = T.d(Fe, c, d);
  return N(e, pd(cd(function(c) {
    return e === c;
  }), d));
}
var ph = function() {
  function c(c, d) {
    return O(c) < O(d) ? U.d(Vb, d, c) : U.d(Vb, c, d);
  }
  var d = null, e = function() {
    function c(e, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, n);
    }
    function d(c, e, f) {
      c = oh(O, Vb.i(f, e, M([c], 0)));
      return U.d(qd, H(c), J(c));
    }
    c.m = 2;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return d(e, f, c);
    };
    c.i = d;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return De;
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.q = function() {
    return De;
  };
  d.e = function(c) {
    return c;
  };
  d.c = c;
  d.i = e.i;
  return d;
}();
function qh(c, d, e, f) {
  this.name = c;
  this.Ja = d;
  this.t = e;
  this.p = f;
  this.A = 0;
  this.l = 2229667594;
  2 < arguments.length ? (this.t = e, this.p = f) : this.p = this.t = null;
}
m = qh.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = xc(this);
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, lf) ? this.Ja : y ? R.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new qh(e, this.Ja, this.t, this.p, null) : w(W.c ? W.c(lf, d) : W.call(null, lf, d)) ? new qh(this.name, e, this.t, this.p, null) : new qh(this.name, this.Ja, this.t, S.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Me(d, function(c) {
    return Me(d, Se, "", " ", "", e, c);
  }, "#asteroids.core.Position{", ", ", "}", e, Rc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [lf, this.Ja], null)], null), this.p));
};
m.K = function(c, d) {
  return hc(d) ? Va(this, B.c(d, 0), B.c(d, 1)) : U.d(Ma, this, d);
};
m.M = function() {
  return G(Rc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [lf, this.Ja], null)], null), this.p));
};
m.Q = function() {
  return 2 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Ud(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new qh(this.name, this.Ja, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return oc(new Be(null, new v(null, 2, [lf, null, Z, null], null), null), d) ? Yb.c(ac(qd($d, this), this.t), d) : new qh(this.name, this.Ja, this.t, Yc(Yb.c(this.p, d)), null);
};
function rh(c, d, e, f) {
  this.name = c;
  this.angle = d;
  this.t = e;
  this.p = f;
  this.A = 0;
  this.l = 2229667594;
  2 < arguments.length ? (this.t = e, this.p = f) : this.p = this.t = null;
}
m = rh.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = xc(this);
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, tg) ? this.angle : y ? R.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new rh(e, this.angle, this.t, this.p, null) : w(W.c ? W.c(tg, d) : W.call(null, tg, d)) ? new rh(this.name, e, this.t, this.p, null) : new rh(this.name, this.angle, this.t, S.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Me(d, function(c) {
    return Me(d, Se, "", " ", "", e, c);
  }, "#asteroids.core.Rotation{", ", ", "}", e, Rc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [tg, this.angle], null)], null), this.p));
};
m.K = function(c, d) {
  return hc(d) ? Va(this, B.c(d, 0), B.c(d, 1)) : U.d(Ma, this, d);
};
m.M = function() {
  return G(Rc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [tg, this.angle], null)], null), this.p));
};
m.Q = function() {
  return 2 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Ud(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new rh(this.name, this.angle, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return oc(new Be(null, new v(null, 2, [Z, null, tg, null], null), null), d) ? Yb.c(ac(qd($d, this), this.t), d) : new rh(this.name, this.angle, this.t, Yc(Yb.c(this.p, d)), null);
};
function sh(c, d, e, f, h, k, l, p, n) {
  this.name = c;
  this.acceleration = d;
  this.R = e;
  this.ca = f;
  this.ga = h;
  this.X = k;
  this.ba = l;
  this.t = p;
  this.p = n;
  this.A = 0;
  this.l = 2229667594;
  7 < arguments.length ? (this.t = p, this.p = n) : this.p = this.t = null;
}
m = sh.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = xc(this);
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, eg) ? this.acceleration : W(d, vf) ? this.R : W(d, Lg) ? this.ca : W(d, Gf) ? this.ga : W(d, ig) ? this.X : W(d, Mf) ? this.ba : y ? R.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new sh(e, this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(eg, d) : W.call(null, eg, d)) ? new sh(this.name, e, this.R, this.ca, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(vf, d) : W.call(null, vf, d)) ? new sh(this.name, this.acceleration, e, this.ca, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(Lg, d) : W.call(null, Lg, d)) ? new sh(this.name, this.acceleration, 
  this.R, e, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(Gf, d) : W.call(null, Gf, d)) ? new sh(this.name, this.acceleration, this.R, this.ca, e, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(ig, d) : W.call(null, ig, d)) ? new sh(this.name, this.acceleration, this.R, this.ca, this.ga, e, this.ba, this.t, this.p, null) : w(W.c ? W.c(Mf, d) : W.call(null, Mf, d)) ? new sh(this.name, this.acceleration, this.R, this.ca, this.ga, this.X, e, this.t, this.p, null) : new sh(this.name, 
  this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, this.t, S.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Me(d, function(c) {
    return Me(d, Se, "", " ", "", e, c);
  }, "#asteroids.core.Movement{", ", ", "}", e, Rc.c(new X(null, 7, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [eg, this.acceleration], null), new X(null, 2, 5, Y, [vf, this.R], null), new X(null, 2, 5, Y, [Lg, this.ca], null), new X(null, 2, 5, Y, [Gf, this.ga], null), new X(null, 2, 5, Y, [ig, this.X], null), new X(null, 2, 5, Y, [Mf, this.ba], null)], null), this.p));
};
m.K = function(c, d) {
  return hc(d) ? Va(this, B.c(d, 0), B.c(d, 1)) : U.d(Ma, this, d);
};
m.M = function() {
  return G(Rc.c(new X(null, 7, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [eg, this.acceleration], null), new X(null, 2, 5, Y, [vf, this.R], null), new X(null, 2, 5, Y, [Lg, this.ca], null), new X(null, 2, 5, Y, [Gf, this.ga], null), new X(null, 2, 5, Y, [ig, this.X], null), new X(null, 2, 5, Y, [Mf, this.ba], null)], null), this.p));
};
m.Q = function() {
  return 7 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Ud(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new sh(this.name, this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return oc(new Be(null, new v(null, 7, [vf, null, Z, null, Gf, null, Mf, null, eg, null, ig, null, Lg, null], null), null), d) ? Yb.c(ac(qd($d, this), this.t), d) : new sh(this.name, this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, this.t, Yc(Yb.c(this.p, d)), null);
};
function th(c, d, e, f, h, k, l) {
  this.name = c;
  this.ea = d;
  this.ka = e;
  this.T = f;
  this.ja = h;
  this.t = k;
  this.p = l;
  this.A = 0;
  this.l = 2229667594;
  5 < arguments.length ? (this.t = k, this.p = l) : this.p = this.t = null;
}
m = th.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = xc(this);
};
m.O = function(c, d) {
  return Ta.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, Vf) ? this.ea : W(d, rg) ? this.ka : W(d, cg) ? this.T : W(d, yg) ? this.ja : y ? R.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new th(e, this.ea, this.ka, this.T, this.ja, this.t, this.p, null) : w(W.c ? W.c(Vf, d) : W.call(null, Vf, d)) ? new th(this.name, e, this.ka, this.T, this.ja, this.t, this.p, null) : w(W.c ? W.c(rg, d) : W.call(null, rg, d)) ? new th(this.name, this.ea, e, this.T, this.ja, this.t, this.p, null) : w(W.c ? W.c(cg, d) : W.call(null, cg, d)) ? new th(this.name, this.ea, this.ka, e, this.ja, this.t, this.p, null) : w(W.c ? W.c(yg, d) : W.call(null, yg, 
  d)) ? new th(this.name, this.ea, this.ka, this.T, e, this.t, this.p, null) : new th(this.name, this.ea, this.ka, this.T, this.ja, this.t, S.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Me(d, function(c) {
    return Me(d, Se, "", " ", "", e, c);
  }, "#asteroids.core.AABB{", ", ", "}", e, Rc.c(new X(null, 5, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [Vf, this.ea], null), new X(null, 2, 5, Y, [rg, this.ka], null), new X(null, 2, 5, Y, [cg, this.T], null), new X(null, 2, 5, Y, [yg, this.ja], null)], null), this.p));
};
m.K = function(c, d) {
  return hc(d) ? Va(this, B.c(d, 0), B.c(d, 1)) : U.d(Ma, this, d);
};
m.M = function() {
  return G(Rc.c(new X(null, 5, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [Vf, this.ea], null), new X(null, 2, 5, Y, [rg, this.ka], null), new X(null, 2, 5, Y, [cg, this.T], null), new X(null, 2, 5, Y, [yg, this.ja], null)], null), this.p));
};
m.Q = function() {
  return 5 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Ud(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new th(this.name, this.ea, this.ka, this.T, this.ja, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return oc(new Be(null, new v(null, 5, [Z, null, Vf, null, cg, null, rg, null, yg, null], null), null), d) ? Yb.c(ac(qd($d, this), this.t), d) : new th(this.name, this.ea, this.ka, this.T, this.ja, this.t, Yc(Yb.c(this.p, d)), null);
};
function uh(c, d, e, f, h, k) {
  return new sh(rf, c, d, e, f, h, k);
}
function vh(c) {
  return new qh(kf, c);
}
function wh(c) {
  return new rh(Pg, c);
}
var xh = function() {
  function c(c, d) {
    return new v(null, 3, [Z, bg, nf, c, xg, d], null);
  }
  function d(c) {
    return e.c(c, c);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}(), yh = function() {
  function c(c, d, e, l) {
    return new th(Hf, c, d, e, l);
  }
  function d(c, d) {
    var k = P.d(c, 0, null), l = P.d(c, 1, null), p = P.d(d, 0, null), n = P.d(d, 1, null);
    return e.o(k, l, p, n);
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 4:
        return c.call(this, e, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.o = c;
  return e;
}(), zh = function() {
  function c(c) {
    return new v(null, 2, [Z, of, Jg, c], null);
  }
  function d() {
    return e.e(Tg());
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.e = c;
  return e;
}();
function Ah(c, d) {
  return oc(c, d);
}
var Bh = function() {
  function c(c, d, e, f) {
    return oc(c, d) && oc(c, e) && oc(c, f);
  }
  function d(c, d, e) {
    return oc(c, d) && oc(c, e);
  }
  var e = null, f = function() {
    function c(e, f, h, s, q) {
      var u = null;
      4 < arguments.length && (u = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, s, u);
    }
    function d(c, f, h, k, q) {
      return(f = e.o(c, f, h, k)) ? U.c(function(c, d) {
        return w(c) ? d : c;
      }, ed.d(Ah, id.e(c), q)) : f;
    }
    c.m = 4;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var q = H(c);
      c = J(c);
      return d(e, f, h, q, c);
    };
    c.i = d;
    return c;
  }(), e = function(e, k, l, p, n) {
    switch(arguments.length) {
      case 2:
        return oc(e, k);
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      default:
        return f.i(e, k, l, p, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 4;
  e.j = f.j;
  e.c = function(c, d) {
    return oc(c, d);
  };
  e.d = d;
  e.o = c;
  e.i = f.i;
  return e;
}();
function $(c, d) {
  return R.c(c, d);
}
function Ch(c, d) {
  return S.d(c, Z.e(d), d);
}
function Dh(c, d) {
  return Uc(U.d(function(c, d) {
    return Vc(c, Z.e(d), d);
  }, ub(c), d));
}
var Eh = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    c = Uc(U.d(function(c, d) {
      return Vc(c, Z.e(d), d);
    }, ub($d), c));
    return oc(c, of) ? c : Ch(c, zh.q());
  }
  c.m = 0;
  c.j = function(c) {
    c = G(c);
    return d(c);
  };
  c.i = d;
  return c;
}();
function Fh(c, d) {
  return sd.c(c, new X(null, 2, 5, Y, [gf, d], null));
}
function Gh(c, d) {
  var e = Jg.e($(d, of));
  return ud(c, new X(null, 2, 5, Y, [gf, e], null), d);
}
function Hh(c) {
  c = gf.e(c);
  return(c = G(c)) ? new ze(c, null) : null;
}
function Ih(c) {
  return sd.d(c, new X(null, 2, 5, Y, [df, tf], null), 800);
}
function Jh(c) {
  return sd.d(c, new X(null, 2, 5, Y, [df, Ng], null), 500);
}
function Kh(c) {
  return Jg.e($(c, of));
}
function Lh(c) {
  c = $(c, kf);
  return w(c) ? c.Ja : null;
}
function Mh(c) {
  return tg.e($(c, Pg));
}
function Nh(c) {
  return Cg.e($(c, Cg));
}
function Oh(c, d) {
  var e = Tc(function() {
    var d = gf.e(c);
    return w(d) ? d : $d;
  }());
  return S.d(c, gf, Uc(U.d(function(c, d) {
    return Vc(c, Kh(d), d);
  }, e, d)));
}
function Ph(c) {
  return S.d(c, gf, function() {
    for (var d = Hh(c), e = Tc(gf.e(c));;) {
      if (G(d)) {
        var f = H(d), h = $(f, bg);
        if (null != h) {
          if (2 > xg.e(h)) {
            d = L(d), e = Wc(e, Kh(f));
          } else {
            var d = L(d), h = Kh(f), k = $(f, bg), l = nf.e(k), k = xg.e(k) - 1, f = Ch(f, xh.c(l, k)), e = xb(e, h, f)
          }
        } else {
          d = L(d);
        }
      } else {
        return wb(e);
      }
    }
  }());
}
;var Qh = new v(null, 4, [kg, function() {
  return new v(null, 1, [Z, wg], null);
}, ng, function() {
  return new v(null, 1, [Z, Uf], null);
}, Ig, function() {
  return new v(null, 1, [Z, Nf], null);
}, jg, function() {
  return new v(null, 1, [Z, xf], null);
}], null);
function Rh(c) {
  for (var d = function(c) {
    return function(d, e) {
      return U.d(function() {
        return function(c, d) {
          return w(d) ? Ch(c, d) : c;
        };
      }(c), e, function() {
        return function(c) {
          return function q(d) {
            return new Gc(null, function() {
              return function() {
                for (;;) {
                  var c = G(d);
                  if (c) {
                    if (ic(c)) {
                      var e = Bb(c), f = O(e), h = new Ic(Array(f), 0);
                      return function() {
                        for (var c = 0;;) {
                          if (c < f) {
                            var d = B.c(e, c), k = h, d = R.c(Qh, d), d = w(d) ? d.q ? d.q() : d.call(null) : null;
                            k.add(d);
                            c += 1;
                          } else {
                            return!0;
                          }
                        }
                      }() ? Mc(h.la(), q(Cb(c))) : Mc(h.la(), null);
                    }
                    var k = H(c);
                    return N(function() {
                      var c = R.c(Qh, k);
                      return w(c) ? c.q ? c.q() : c.call(null) : null;
                    }(), q(J(c)));
                  }
                  return null;
                }
              };
            }(c), null, null);
          };
        }(c)(Qf.e(d));
      }());
    };
  }(c), e = Hh(c), f = Tc(gf.e(c));;) {
    if (G(e)) {
      var h = H(e);
      Bh.c(h, Ff) ? (h = d(c, h), e = L(e), f = Vc(f, Kh(h), h)) : e = L(e);
    } else {
      return S.d(c, gf, wb(f));
    }
  }
}
function Sh(c) {
  var d = $(c, rf), e = Mh(c), e = kh(w(e) ? e : 0), e = oc(c, Nf) ? ih(0.1, e) : new X(null, 2, 5, Y, [0, 0], null), f = lf.c($(c, Yf), new X(null, 2, 5, Y, [0, 0], null)), f = eh(d.acceleration, gh(e, f));
  return Ch(Ch(Yb.c(c, Nf), uh(f, d.R, d.ca, d.ga, d.X, d.ba)), new v(null, 2, [Z, Yf, lf, e], null));
}
function Th(c) {
  return Oh(c, ed.c(Sh, pd(function(c) {
    return oc(c, Nf) || oc(c, Yf);
  }, Hh(c))));
}
function Uh(c) {
  var d = tg.c($(c, Pg), 0), e = 0.02 * Yg, e = w($(c, Uf)) ? -1 * e : e, d = d + e;
  return Ch(Yb.c(Yb.c(c, Uf), wg), wh(d));
}
function Vh(c) {
  return Oh(c, ed.c(Uh, pd(function(c) {
    return oc(c, Uf) || oc(c, wg);
  }, Hh(c))));
}
;function Wh(c) {
  return new v(null, 2, [Z, hf, Bg, c], null);
}
;function Xh(c, d) {
  for (var e = 0;;) {
    if (e = c.indexOf(d, e), 0 <= e) {
      var f;
      if (f = 0 === e || " " === c.charAt(e - 1)) {
        f = c.length;
        var h = e + d.length;
        f = h <= f ? h === f || " " === c.charAt(h) : null;
      }
      if (f) {
        return e;
      }
      e += d.length;
    } else {
      return null;
    }
  }
}
var Zh = function() {
  function c(c, d) {
    var e = Yh(c), l, p = Ec(d);
    l = ma(p);
    if (G(l)) {
      if (p = e.classList, w(p)) {
        l = G(l.split(/\s+/));
        for (var n = null, s = 0, q = 0;;) {
          if (q < s) {
            var u = n.F(null, q);
            p.add(u);
            q += 1;
          } else {
            if (l = G(l)) {
              n = l, ic(n) ? (l = Bb(n), q = Cb(n), n = l, s = O(l), l = q) : (l = H(n), p.add(l), l = L(n), n = null, s = 0), q = 0;
            } else {
              break;
            }
          }
        }
      } else {
        for (p = e.className, l = G(l.split(/\s+/)), n = null, q = s = 0;;) {
          if (q < s) {
            u = n.F(null, q), w(Xh(p, u)) || (e.className = "" === p ? u : [A(p), A(" "), A(u)].join("")), q += 1;
          } else {
            if (l = G(l)) {
              n = l, ic(n) ? (l = Bb(n), q = Cb(n), n = l, s = O(l), l = q) : (l = H(n), w(Xh(p, l)) || (e.className = "" === p ? l : [A(p), A(" "), A(l)].join("")), l = L(n), n = null, s = 0), q = 0;
            } else {
              break;
            }
          }
        }
      }
    }
    return e;
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      c = Yh(c);
      f = G(Vb.c(h, f));
      h = null;
      for (var n = 0, s = 0;;) {
        if (s < n) {
          var q = h.F(null, s);
          d.c(c, q);
          s += 1;
        } else {
          if (f = G(f)) {
            h = f, ic(h) ? (f = Bb(h), s = Cb(h), h = f, n = O(f), f = s) : (f = H(h), d.c(c, f), f = L(h), h = null, n = 0), s = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.c = c;
  d.i = e.i;
  return d;
}();
function $h(c) {
  return "string" === typeof c ? c : Sg.c(" ", ed.c(function(c) {
    var e = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return[A(Ec(e)), A(":"), A(Ec(c)), A(";")].join("");
  }, c));
}
var ai = function() {
  function c(c, d, e) {
    if (w(e)) {
      if (Zb(e)) {
        return c = Yh(c), c[Ec(d)] = e, c;
      }
      c = Yh(c);
      c.setAttribute(Ec(d), d === Of ? $h(e) : e);
      return c;
    }
    return null;
  }
  function d(c, d) {
    return e.d(Yh(c), d, "true");
  }
  var e = null, f = function() {
    function c(e, f, h, s) {
      var q = null;
      3 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, q);
    }
    function d(c, f, h, k) {
      if (!bd(O(k))) {
        throw Error([A("Assert failed: "), A(Te.i(M([Cc(new Lb(null, "even?", "even?", -1543640034, null), Cc(new Lb(null, "count", "count", -1545680184, null), new Lb(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      c = Yh(c);
      f = G(N(new X(null, 2, 5, Y, [f, h], null), rd.c(2, k)));
      h = null;
      for (var q = k = 0;;) {
        if (q < k) {
          var u = h.F(null, q), D = P.d(u, 0, null), u = P.d(u, 1, null);
          e.d(c, D, u);
          q += 1;
        } else {
          if (f = G(f)) {
            ic(f) ? (k = Bb(f), f = Cb(f), h = k, k = O(k)) : (k = H(f), h = P.d(k, 0, null), k = P.d(k, 1, null), e.d(c, h, k), f = L(f), h = null, k = 0), q = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    c.m = 3;
    c.j = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = J(c);
      return d(e, f, h, c);
    };
    c.i = d;
    return c;
  }(), e = function(e, k, l, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      default:
        return f.i(e, k, l, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 3;
  e.j = f.j;
  e.c = d;
  e.d = c;
  e.i = f.i;
  return e;
}();
function bi(c, d) {
  return w(d) ? Yh(c).getAttribute(Ec(d)) : null;
}
;var ci, di, ei, fi;
function gi() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
fi = ei = di = ci = !1;
var hi;
if (hi = gi()) {
  var ii = aa.navigator;
  ci = 0 == hi.indexOf("Opera");
  di = !ci && -1 != hi.indexOf("MSIE");
  ei = !ci && -1 != hi.indexOf("WebKit");
  fi = !ci && !ei && "Gecko" == ii.product;
}
var ji = ci, ki = di, li = fi, mi = ei;
function ni() {
  var c = aa.document;
  return c ? c.documentMode : void 0;
}
var oi;
a: {
  var pi = "", qi;
  if (ji && aa.opera) {
    var ri = aa.opera.version, pi = "function" == typeof ri ? ri() : ri
  } else {
    if (li ? qi = /rv\:([^\);]+)(\)|;)/ : ki ? qi = /MSIE\s+([^\);]+)(\)|;)/ : mi && (qi = /WebKit\/(\S+)/), qi) {
      var si = qi.exec(gi()), pi = si ? si[1] : ""
    }
  }
  if (ki) {
    var ti = ni();
    if (ti > parseFloat(pi)) {
      oi = String(ti);
      break a;
    }
  }
  oi = pi;
}
var ui = {};
function vi(c) {
  var d;
  if (!(d = ui[c])) {
    d = 0;
    for (var e = ma(String(oi)).split("."), f = ma(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
      var l = e[k] || "", p = f[k] || "", n = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = n.exec(l) || ["", "", ""], u = s.exec(p) || ["", "", ""];
        if (0 == q[0].length && 0 == u[0].length) {
          break;
        }
        d = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == u[2].length) ? -1 : (0 == q[2].length) > (0 == u[2].length) ? 1 : 0) || (q[2] < u[2] ? -1 : q[2] > u[2] ? 1 : 0);
      } while (0 == d);
    }
    d = ui[c] = 0 <= d;
  }
  return d;
}
var wi = aa.document, xi = wi && ki ? ni() || ("CSS1Compat" == wi.compatMode ? parseInt(oi, 10) : 5) : void 0;
var yi;
(yi = !ki) || (yi = ki && 9 <= xi);
var zi = yi, Ai = ki && !vi("9");
!mi || vi("528");
li && vi("1.9b") || ki && vi("8") || ji && vi("9.5") || mi && vi("528");
li && !vi("8") || ki && vi("9");
function Bi() {
  0 != Ci && da(this);
}
var Ci = 0;
function Di(c, d) {
  this.type = c;
  this.currentTarget = this.target = d;
}
Di.prototype.Ua = !1;
Di.prototype.defaultPrevented = !1;
Di.prototype.ib = !0;
Di.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.ib = !1;
};
function Ei(c) {
  Ei[" "](c);
  return c;
}
Ei[" "] = function() {
};
function Fi(c, d) {
  c && this.init(c, d);
}
la(Fi, Di);
m = Fi.prototype;
m.target = null;
m.relatedTarget = null;
m.offsetX = 0;
m.offsetY = 0;
m.clientX = 0;
m.clientY = 0;
m.screenX = 0;
m.screenY = 0;
m.button = 0;
m.keyCode = 0;
m.charCode = 0;
m.ctrlKey = !1;
m.altKey = !1;
m.shiftKey = !1;
m.metaKey = !1;
m.Wb = null;
m.init = function(c, d) {
  var e = this.type = c.type;
  Di.call(this, e);
  this.target = c.target || c.srcElement;
  this.currentTarget = d;
  var f = c.relatedTarget;
  if (f) {
    if (li) {
      var h;
      a: {
        try {
          Ei(f.nodeName);
          h = !0;
          break a;
        } catch (k) {
        }
        h = !1;
      }
      h || (f = null);
    }
  } else {
    "mouseover" == e ? f = c.fromElement : "mouseout" == e && (f = c.toElement);
  }
  this.relatedTarget = f;
  this.offsetX = mi || void 0 !== c.offsetX ? c.offsetX : c.layerX;
  this.offsetY = mi || void 0 !== c.offsetY ? c.offsetY : c.layerY;
  this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX;
  this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
  this.screenX = c.screenX || 0;
  this.screenY = c.screenY || 0;
  this.button = c.button;
  this.keyCode = c.keyCode || 0;
  this.charCode = c.charCode || ("keypress" == e ? c.keyCode : 0);
  this.ctrlKey = c.ctrlKey;
  this.altKey = c.altKey;
  this.shiftKey = c.shiftKey;
  this.metaKey = c.metaKey;
  this.state = c.state;
  this.Wb = c;
  c.defaultPrevented && this.preventDefault();
  delete this.Ua;
};
m.preventDefault = function() {
  Fi.nc.preventDefault.call(this);
  var c = this.Wb;
  if (c.preventDefault) {
    c.preventDefault();
  } else {
    if (c.returnValue = !1, Ai) {
      try {
        if (c.ctrlKey || 112 <= c.keyCode && 123 >= c.keyCode) {
          c.keyCode = -1;
        }
      } catch (d) {
      }
    }
  }
};
function Gi(c) {
  return new v(null, 2, [Z, fg, Wf, c], null);
}
function Hi(c, d) {
  var e = Lh(c), f = $(c, rf).R, h = $(c, rf).X;
  return eh(f, ih(h, lh(gh(d, e))));
}
var Ii = function() {
  function c(c) {
    return new v(null, 2, [Z, Ef, Dg, c], null);
  }
  function d() {
    return e.e(Ld);
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.e = c;
  return e;
}();
function Ji(c) {
  var d = $(c, Hf);
  if (w(d)) {
    var e = Lh(c), f = P.d(e, 0, null), h = P.d(e, 1, null), e = d.ea, k = d.ka, l = d.T, d = d.ja, f = f - (e + l) / 2, h = h - (k + d) / 2;
    return Ch(c, yh.o(e + f, k + h, l + f, d + h));
  }
  return c;
}
function Ki(c, d) {
  return c.ea - d.ea;
}
function Li(c, d) {
  return c.T - d.T;
}
function Mi(c) {
  var d = [];
  for (c = Hh(c);;) {
    if (G(c)) {
      var e = H(c);
      if (oc(e, Ef)) {
        var f = $(e, Hf);
        null != f && (f.id = Kh(e), d.push(f));
      }
      c = L(c);
    } else {
      break;
    }
  }
  a: {
    c = d.sort(Ki);
    for (var d = d.slice(0).sort(Li), e = O(d), h = 0, k = 0, l = De, p = ub(De);;) {
      if (h < e && k < e) {
        var f = c[h], n = d[k], s = f.id;
        if (f.ea < n.T) {
          h += 1;
          n = Vb.c(l, f);
          b: {
            for (;;) {
              if (G(l)) {
                var q = H(l);
                if (!w(q)) {
                  throw Error([A("Assert failed: "), A(Te.i(M([new Lb(null, "aabb-active", "aabb-active", 381724364, null)], 0)))].join(""));
                }
                q.ka < f.ja && f.ka < q.ja && (q = 0 < Jb(q.id, s) ? new X(null, 2, 5, Y, [q.id, s], null) : new X(null, 2, 5, Y, [s, q.id], null), p = vb(p, q));
                l = L(l);
              } else {
                f = p;
                break b;
              }
            }
            f = void 0;
          }
          l = n;
          p = f;
        } else {
          if (Kb) {
            f = h, s = k + 1, n = cc.c(l, n), h = f, k = s, l = n;
          } else {
            c = null;
            break a;
          }
        }
      } else {
        c = wb(p);
        break a;
      }
    }
    c = void 0;
  }
  return c;
}
function Ni(c, d, e, f) {
  return d + f > hh(gh(c, e));
}
function Oi(c, d) {
  function e(c) {
    var d = $(c, Hf).T, e = Lh(c);
    c = P.d(e, 0, null);
    e = P.d(e, 1, null);
    d = $g.e ? $g.e(d - c) : $g.call(null, d - c);
    if (0 > d) {
      throw Error([A("Assert failed: "), A("The circle radius cannot be negative."), A("\n"), A(Te.i(M([Cc(new Lb(null, "not", "not", -1640422260, null), Cc(new Lb(null, "\x3c", "\x3c", -1640531467, null), new Lb(null, "r", "r", -1640531413, null), 0))], 0)))].join(""));
    }
    return new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [c, e], null), d], null);
  }
  return pd(function(d) {
    return T.c(Ni, Rc.c(e(Fh(c, H(d))), e(Fh(c, H(L(d))))));
  }, d);
}
function Pi(c, d, e) {
  c = Lh(d);
  var f = Lh(e), h = $(d, Hf).T, k = $(e, Hf).T, l = gh(f, c), h = $g.e ? $g.e(h - H(c)) : $g.call(null, h - H(c)), f = $g.e ? $g.e(k - H(f)) : $g.call(null, k - H(f)), k = hh(l);
  return nh(l) ? new v(null, 3, [og, Kh(d), Pf, Kh(e), qg, new X(null, 1, 5, Y, [new v(null, 3, [zg, h, Rf, new X(null, 2, 5, Y, [1, 0], null), kf, c], null)], null)], null) : k > h + f ? new v(null, 3, [og, Kh(d), Pf, Kh(e), qg, Ld], null) : Kb ? (l = mh(l), new v(null, 3, [og, Kh(d), Pf, Kh(e), qg, new X(null, 1, 5, Y, [new v(null, 3, [zg, h + f - k, Rf, l, kf, eh(ih(h, l), c)], null)], null)], null)) : null;
}
function Qi(c, d) {
  return Oh(c, nd.c(function(d) {
    var f = mc(d) ? T.c(we, d) : d, h = R.c(f, qg);
    d = R.c(f, Pf);
    f = R.c(f, og);
    if (G(h)) {
      var h = H(h), k = kf.e(h), f = Fh(c, f), l = Fh(c, d);
      d = Rf.e(h);
      var p = Hi(f, k), n = Hi(l, k), p = gh(n, p), s = jh(p, d);
      if (0 < s) {
        d = Ld;
      } else {
        var h = zg.e(h), n = $(f, rf), p = $(l, rf), q = Nh(f), u = Nh(l), D = Wf.c($(f, fg), Zg), F = Wf.c($(l, fg), Zg), I = jh(lh(gh(k, Lh(f))), d), k = jh(lh(gh(k, Lh(l))), d), s = -2 * s / (1 / q + 1 / u + I * I / D + k * k / F), q = gh(n.R, ih(s / q, d)), u = eh(p.R, ih(s / u, d)), D = n.X + I * s / D, k = p.X - k * s / F;
        ih(0.5 * h, d);
        f = Ch(f, uh(n.acceleration, q, n.ca, n.ga, D, n.ba));
        l = Ch(l, uh(p.acceleration, u, p.ca, p.ga, k, p.ba));
        w(w(h) ? 0 < h : h) ? (p = Nh(f), k = Nh(l), n = Lh(f), F = Lh(l), d = ih(h, d), d = new X(null, 2, 5, Y, [Ch(f, vh(gh(n, ih(1 / p, d)))), Ch(l, vh(eh(F, ih(1 / k, d))))], null)) : d = new X(null, 2, 5, Y, [f, l], null);
      }
    } else {
      d = Ld;
    }
    return d;
  }, d));
}
function Ri(c, d) {
  return G(d) ? Qi(c, ed.c(dd.d(T, Pi, c), pd(dd.c(Zc, ad), ed.c(dd.c(ed, dd.c(Fh, c)), d)))) : c;
}
function Si(c, d) {
  var e = $(d, rf), f = $(d, If), h = Lh(d), k = e.acceleration, l = e.R, p = e.ca, n = function() {
    var c = w(l) ? hh(l) : 0;
    return c > p ? c : p;
  }(), s = e.ga, q = e.X, u = e.ba, D = Mh(d), F = eh(l, k), I = mh(F), Q = hh(F) > n ? ih(n, I) : F, n = null == f || nh(Q) ? Q : function() {
    var c = hh(Q) * Lf.e(f), c = ih(-1 * c, I);
    return eh(Q, c);
  }(), q = q + s, F = $g.e ? $g.e(q) : $g.call(null, q), u = F > u ? q / F * u : q, h = eh(n, h), h = new X(null, 2, 5, Y, [sc(P.c(h, 0), Ih(c)), sc(P.c(h, 1), Jh(c))], null);
  return Ji(Dh(d, new X(null, 3, 5, Y, [uh(k, n, e.ca, s, u, e.ba), vh(h), wh(u + D)], null)));
}
function Ti(c) {
  var d = Mi(c), e = Oi(c, d), f = U.d(function(c, d) {
    return function(e, f) {
      var n = H(f), s = H(L(f));
      return vd.d(vd.d(e, new X(null, 1, 5, Y, [n], null), function(c, d) {
        return function(c) {
          return Vb.c(c, d);
        };
      }(n, s, c, d)), new X(null, 1, 5, Y, [s], null), function(c) {
        return function(d) {
          return Vb.c(d, c);
        };
      }(n, s, c, d));
    };
  }(d, e), $d, e);
  return Oh(c, ed.c(function(c) {
    return Ch(c, Ii.e(R.c(f, Kh(c))));
  }, pd(function(c) {
    return oc(c, Ef);
  }, Hh(c))));
}
function Ui(c, d) {
  function e(c) {
    return oc(c, Cg) && oc(c, rf);
  }
  return Oh(d, ed.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    c = $g.e ? $g.e(Nh(d) * hh(gh($(c, rf).R, $(d, rf).R))) : $g.call(null, Nh(d) * hh(gh($(c, rf).R, $(d, rf).R)));
    return Ch(d, new v(null, 2, [Z, Hg, uf, c], null));
  }, pd(function(c) {
    return Zc(e, c);
  }, pd(function(c) {
    return H(L(c));
  }, ed.c(function(d) {
    return new X(null, 2, 5, Y, [d, Fh(c, Kh(d))], null);
  }, Hh(d))))));
}
function Vi(c) {
  return Ui(c, Ri(c, qd(De, nd.c(function(c) {
    var e = Dg.e($(c, Ef));
    return ed.c(function(e) {
      return Ee(new X(null, 2, 5, Y, [Kh(c), e], null));
    }, e);
  }, pd(function(c) {
    return G(Dg.e($(c, Ef)));
  }, pd(function(c) {
    return oc(c, Ef);
  }, Hh(c)))))));
}
;var Wi = function() {
  function c(c, d) {
    return new v(null, 3, [Z, sf, Xf, c, zf, d], null);
  }
  function d(c) {
    return new v(null, 3, [Z, sf, Xf, c, zf, c], null);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
function Xi(c, d) {
  return new v(null, 4, [Z, Fg, Cf, c, tf, d, Ng, 20], null);
}
function Yi(c) {
  for (var d = function() {
    return function(c, d) {
      var e = uf.e($(d, Hg)), f = hg.c($(d, hg), 0), e = e - 300;
      return 0 < e ? Ch(d, new v(null, 2, [Z, hg, hg, f + e], null)) : d;
    };
  }(c), e = Hh(c), f = Tc(gf.e(c));;) {
    if (G(e)) {
      var h = H(e);
      Bh.o(h, sf, Hg, Ff) ? (h = d(c, h), e = L(e), f = Vc(f, Kh(h), h)) : e = L(e);
    } else {
      return S.d(c, gf, wb(f));
    }
  }
}
function Zi(c) {
  for (var d = function() {
    return function(c, d) {
      var e = sd.c(d, new X(null, 2, 5, Y, [sf, zf], null)), f = sd.c(d, new X(null, 2, 5, Y, [sf, Xf], null)), h = sd.c(d, new X(null, 2, 5, Y, [hg, hg], null)), e = e - h;
      return Ch(Yb.c(d, hg), Wi.c(f, e));
    };
  }(c), e = Hh(c), f = Tc(gf.e(c));;) {
    if (G(e)) {
      var h = H(e);
      Bh.d(h, hg, sf) ? (h = d(c, h), e = L(e), f = Vc(f, Kh(h), h)) : e = L(e);
    } else {
      return S.d(c, gf, wb(f));
    }
  }
}
function $i(c) {
  for (var d = G(Hh(c)), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var k = e.F(null, h);
      if (Bh.o(k, Fg, hf, kf)) {
        var l = Bg.e($(k, hf)), p = $(k, Fg), n = Cf.e(p), n = Fh(c, n), n = $(n, sf), s = Xf.e(n), q = zf.e(n), n = function() {
          var c = q / s;
          return 0 > c ? 0 : c;
        }(), u = tf.e(p), p = Ng.e(p), k = Lh(k);
        P.d(k, 0, null);
        P.d(k, 1, null);
        var k = u - 4, D = p - 4;
        l.clear();
        l.beginFill(5592405);
        l.drawRect(0, 0, u, p);
        l.endFill();
        l.beginFill(16711680);
        l.drawRect(2, 2, k, D);
        l.endFill();
        l.beginFill(65280);
        l.drawRect(2, 2, n * k, D);
        l.endFill();
      }
      h += 1;
    } else {
      if (d = G(d)) {
        if (ic(d)) {
          f = Bb(d), d = Cb(d), e = f, f = O(f);
        } else {
          l = H(d);
          if (Bh.o(l, Fg, hf, kf)) {
            var e = Bg.e($(l, hf)), n = $(l, Fg), f = Cf.e(n), f = Fh(c, f), f = $(f, sf), F = Xf.e(f), I = zf.e(f), f = function() {
              var c = I / F;
              return 0 > c ? 0 : c;
            }(), h = tf.e(n), n = Ng.e(n), l = Lh(l);
            P.d(l, 0, null);
            P.d(l, 1, null);
            l = h - 4;
            u = n - 4;
            e.clear();
            e.beginFill(5592405);
            e.drawRect(0, 0, h, n);
            e.endFill();
            e.beginFill(16711680);
            e.drawRect(2, 2, l, u);
            e.endFill();
            e.beginFill(65280);
            e.drawRect(2, 2, f * l, u);
            e.endFill();
          }
          d = L(d);
          e = null;
          f = 0;
        }
        h = 0;
      } else {
        break;
      }
    }
  }
  return c;
}
;var aj = new v(null, 6, [kf, new X(null, 2, 5, Y, [0, 0], null), vf, new X(null, 2, 5, Y, [0, 0], null), ig, 0, Pg, 0, Df, 15, Jf, 8875054], null);
function bj(c) {
  var d = Ae.i(M([aj, c], 0)), e = Df.e(d);
  c = Yg * e * e;
  var f = kf.e(d), h = P.d(f, 0, null), f = P.d(f, 1, null), k = Jf.e(d), d = Eh.i(M([vh(new X(null, 2, 5, Y, [h, f], null)), wh(Pg.e(d)), uh(new X(null, 2, 5, Y, [0, 0], null), vf.e(d), Zg, 0, ig.e(d), Zg), new v(null, 2, [Z, Cg, Cg, c], null), new v(null, 1, [Z, wf], null), Gi(0.25 * Yg * (ah.c ? ah.c(e, 4) : ah.call(null, e, 4))), yh.c(new X(null, 2, 5, Y, [h - e, f - e], null), new X(null, 2, 5, Y, [h + e, f + e], null)), Wh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(k);
    c.drawCircle(0, 0, e);
    c.endFill();
    return c;
  }())], 0));
  return 50 > c ? Ch(d, xh.e(100)) : Ch(Ch(d, Ii.q()), Wi.e(0.5 * Yg * e * e));
}
var cj = function() {
  function c(c, d, e) {
    for (;;) {
      if (1 > d) {
        return e;
      }
      var l = tc.e(c);
      c -= l;
      d -= 1;
      e = Vb.c(e, l);
    }
  }
  function d(c, d) {
    return e.d(c, d, Ld);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}();
function dj(c, d) {
  var e = $(d, Hf), f = Nh(d), h = 0 * f, k = f - h, l = Ze(Je.c(2, 5)), p = cj.c(k, l), n = Lh(d), s = P.d(n, 0, null), q = P.d(n, 1, null), u = function() {
    return function(c, d, e, f, h, k, l, p, n) {
      return function fh(q) {
        return new Gc(null, function(c) {
          return function() {
            for (;;) {
              var d = G(q);
              if (d) {
                if (ic(d)) {
                  var e = Bb(d), f = O(e), h = new Ic(Array(f), 0);
                  a: {
                    for (var k = 0;;) {
                      if (k < f) {
                        B.c(e, k);
                        var l = new X(null, 2, 5, Y, [Ze(Je.c(c.ea, c.T)), Ze(Je.c(c.ka, c.ja))], null);
                        h.add(l);
                        k += 1;
                      } else {
                        e = !0;
                        break a;
                      }
                    }
                    e = void 0;
                  }
                  return e ? Mc(h.la(), fh(Cb(d))) : Mc(h.la(), null);
                }
                H(d);
                return N(new X(null, 2, 5, Y, [Ze(Je.c(c.ea, c.T)), Ze(Je.c(c.ka, c.ja))], null), fh(J(d)));
              }
              return null;
            }
          };
        }(c, d, e, f, h, k, l, p, n), null, null);
      };
    }(e, f, h, k, l, p, n, s, q)(Je.e(l));
  }(), D = ed.c(function() {
    return function(c) {
      return Hi(d, c);
    };
  }(e, f, h, k, l, p, n, s, q, u), u), u = ed.o(function() {
    return function(c, e, f) {
      return bj(new v(null, 5, [Jf, Rg(), vf, e, ig, $(d, rf).X, Df, bh.e ? bh.e(f / Yg) : bh.call(null, f / Yg), kf, c], null));
    };
  }(e, f, h, k, l, p, n, s, q, u, D), u, D, p), D = S.d(c, gf, Yb.c(gf.e(c), Kh(d)));
  return Oh(D, u);
}
function ej(c) {
  return U.d(dj, c, pd(function(c) {
    return 1 > zf.e($(c, sf));
  }, pd(function(c) {
    return Bh.d(c, wf, sf);
  }, Hh(c))));
}
;var fj = 0;
function gj() {
}
m = gj.prototype;
m.key = 0;
m.Qa = !1;
m.bb = !1;
m.init = function(c, d, e, f, h, k) {
  if (ca(c)) {
    this.Xb = !0;
  } else {
    if (c && c.handleEvent && ca(c.handleEvent)) {
      this.Xb = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ha = c;
  this.$b = d;
  this.src = e;
  this.type = f;
  this.capture = !!h;
  this.Jb = k;
  this.bb = !1;
  this.key = ++fj;
  this.Qa = !1;
};
m.handleEvent = function(c) {
  return this.Xb ? this.Ha.call(this.Jb || this.src, c) : this.Ha.handleEvent.call(this.Ha, c);
};
var hj = {}, ij = {}, jj = {}, kj = {};
function lj(c, d, e, f, h) {
  if ("array" == t(d)) {
    for (var k = 0;k < d.length;k++) {
      lj(c, d[k], e, f, h);
    }
  } else {
    a: {
      if (!d) {
        throw Error("Invalid event type");
      }
      f = !!f;
      var l = ij;
      d in l || (l[d] = {sa:0, na:0});
      l = l[d];
      f in l || (l[f] = {sa:0, na:0}, l.sa++);
      var l = l[f], k = da(c), p;
      l.na++;
      if (l[k]) {
        p = l[k];
        for (var n = 0;n < p.length;n++) {
          if (l = p[n], l.Ha == e && l.Jb == h) {
            if (l.Qa) {
              break;
            }
            p[n].bb = !1;
            c = p[n];
            break a;
          }
        }
      } else {
        p = l[k] = [], l.sa++;
      }
      n = mj();
      l = new gj;
      l.init(e, n, c, d, f, h);
      l.bb = !1;
      n.src = c;
      n.Ha = l;
      p.push(l);
      jj[k] || (jj[k] = []);
      jj[k].push(l);
      c.addEventListener ? c != aa && c.Vb || c.addEventListener(d, n, f) : c.attachEvent(d in kj ? kj[d] : kj[d] = "on" + d, n);
      c = l;
    }
    hj[c.key] = c;
  }
}
function mj() {
  var c = nj, d = zi ? function(e) {
    return c.call(d.src, d.Ha, e);
  } : function(e) {
    e = c.call(d.src, d.Ha, e);
    if (!e) {
      return e;
    }
  };
  return d;
}
function oj(c, d, e, f, h) {
  if ("array" == t(d)) {
    for (var k = 0;k < d.length;k++) {
      oj(c, d[k], e, f, h);
    }
  } else {
    f = !!f;
    a: {
      k = ij;
      if (d in k && (k = k[d], f in k && (k = k[f], c = da(c), k[c]))) {
        c = k[c];
        break a;
      }
      c = null;
    }
    if (c) {
      for (k = 0;k < c.length;k++) {
        if (c[k].Ha == e && c[k].capture == f && c[k].Jb == h) {
          pj(c[k].key);
          break;
        }
      }
    }
  }
}
function pj(c) {
  var d = hj[c];
  if (d && !d.Qa) {
    var e = d.src, f = d.type, h = d.$b, k = d.capture;
    e.removeEventListener ? e != aa && e.Vb || e.removeEventListener(f, h, k) : e.detachEvent && e.detachEvent(f in kj ? kj[f] : kj[f] = "on" + f, h);
    e = da(e);
    if (jj[e]) {
      var h = jj[e], l = pa(h, d);
      0 <= l && oa.splice.call(h, l, 1);
      0 == h.length && delete jj[e];
    }
    d.Qa = !0;
    if (d = ij[f][k][e]) {
      d.Yb = !0, qj(f, k, e, d);
    }
    delete hj[c];
  }
}
function qj(c, d, e, f) {
  if (!f.hb && f.Yb) {
    for (var h = 0, k = 0;h < f.length;h++) {
      f[h].Qa ? f[h].$b.src = null : (h != k && (f[k] = f[h]), k++);
    }
    f.length = k;
    f.Yb = !1;
    0 == k && (delete ij[c][d][e], ij[c][d].sa--, 0 == ij[c][d].sa && (delete ij[c][d], ij[c].sa--), 0 == ij[c].sa && delete ij[c]);
  }
}
function rj(c, d, e, f, h) {
  var k = 1;
  d = da(d);
  if (c[d]) {
    var l = --c.na, p = c[d];
    p.hb ? p.hb++ : p.hb = 1;
    try {
      for (var n = p.length, s = 0;s < n;s++) {
        var q = p[s];
        q && !q.Qa && (k &= !1 !== sj(q, h));
      }
    } finally {
      c.na = Math.max(l, c.na), p.hb--, qj(e, f, d, p);
    }
  }
  return Boolean(k);
}
function sj(c, d) {
  c.bb && pj(c.key);
  return c.handleEvent(d);
}
function nj(c, d) {
  if (c.Qa) {
    return!0;
  }
  var e = c.type, f = ij;
  if (!(e in f)) {
    return!0;
  }
  var f = f[e], h, k;
  if (!zi) {
    var l;
    if (!(l = d)) {
      a: {
        l = ["window", "event"];
        for (var p = aa;h = l.shift();) {
          if (null != p[h]) {
            p = p[h];
          } else {
            l = null;
            break a;
          }
        }
        l = p;
      }
    }
    h = l;
    l = !0 in f;
    p = !1 in f;
    if (l) {
      if (0 > h.keyCode || void 0 != h.returnValue) {
        return!0;
      }
      a: {
        var n = !1;
        if (0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a;
          } catch (s) {
            n = !0;
          }
        }
        if (n || void 0 == h.returnValue) {
          h.returnValue = !0;
        }
      }
    }
    n = new Fi;
    n.init(h, this);
    h = !0;
    try {
      if (l) {
        for (var q = [], u = n.currentTarget;u;u = u.parentNode) {
          q.push(u);
        }
        k = f[!0];
        k.na = k.sa;
        for (var D = q.length - 1;!n.Ua && 0 <= D && k.na;D--) {
          n.currentTarget = q[D], h &= rj(k, q[D], e, !0, n);
        }
        if (p) {
          for (k = f[!1], k.na = k.sa, D = 0;!n.Ua && D < q.length && k.na;D++) {
            n.currentTarget = q[D], h &= rj(k, q[D], e, !1, n);
          }
        }
      } else {
        h = sj(c, n);
      }
    } finally {
      q && (q.length = 0);
    }
    return h;
  }
  e = new Fi(d, this);
  return h = sj(c, e);
}
;function tj() {
  Bi.call(this);
}
la(tj, Bi);
m = tj.prototype;
m.Vb = !0;
m.Zb = null;
m.addEventListener = function(c, d, e, f) {
  lj(this, c, d, e, f);
};
m.removeEventListener = function(c, d, e, f) {
  oj(this, c, d, e, f);
};
m.dispatchEvent = function(c) {
  var d = c.type || c, e = ij;
  if (d in e) {
    if (ba(c)) {
      c = new Di(c, this);
    } else {
      if (c instanceof Di) {
        c.target = c.target || this;
      } else {
        var f = c;
        c = new Di(d, this);
        ta(c, f);
      }
    }
    var f = 1, h, e = e[d], d = !0 in e, k;
    if (d) {
      h = [];
      for (k = this;k;k = k.Zb) {
        h.push(k);
      }
      k = e[!0];
      k.na = k.sa;
      for (var l = h.length - 1;!c.Ua && 0 <= l && k.na;l--) {
        c.currentTarget = h[l], f &= rj(k, h[l], c.type, !0, c) && !1 != c.ib;
      }
    }
    if (!1 in e) {
      if (k = e[!1], k.na = k.sa, d) {
        for (l = 0;!c.Ua && l < h.length && k.na;l++) {
          c.currentTarget = h[l], f &= rj(k, h[l], c.type, !1, c) && !1 != c.ib;
        }
      } else {
        for (h = this;!c.Ua && h && k.na;h = h.Zb) {
          c.currentTarget = h, f &= rj(k, h, c.type, !1, c) && !1 != c.ib;
        }
      }
    }
    c = Boolean(f);
  } else {
    c = !0;
  }
  return c;
};
var uj = function() {
  function c(c, d) {
    return new v(null, 3, [Z, lg, dg, c, pf, d], null);
  }
  function d(c) {
    return e.c(c, 0);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
function vj(c) {
  var d = Mh(c), e = $(c, Hf), f = e.ea, e = e.T, d = kh(d), e = eh(Lh(c), ih(e - f, d)), f = P.d(e, 0, null), e = P.d(e, 1, null), d = ih(5, d);
  return Eh.i(M([vh(new X(null, 2, 5, Y, [f, e], null)), new v(null, 1, [Z, gg], null), Ii.q(), uh(new X(null, 2, 5, Y, [0, 0], null), eh(d, $(c, rf).R), Zg, 0, 0, Zg), xh.e(60), yh.c(new X(null, 2, 5, Y, [f - 2, e - 2], null), new X(null, 2, 5, Y, [f + 2, e + 2], null)), Wh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(65280);
    c.drawCircle(0, 0, 2);
    c.endFill();
    return c;
  }())], 0));
}
function wj(c) {
  for (var d = function() {
    return function(c, d) {
      var e = $(d, lg);
      return Ch(d, S.d(e, pf, sc(pf.e(e) - 1, dg.e(e))));
    };
  }(c), e = Hh(c), f = Tc(gf.e(c));;) {
    if (G(e)) {
      var h = H(e);
      Bh.c(h, lg) ? (h = d(c, h), e = L(e), f = Vc(f, Kh(h), h)) : e = L(e);
    } else {
      return S.d(c, gf, wb(f));
    }
  }
}
function xj(c) {
  return S.d(c, gf, Uc(U.d(function(d, e) {
    if (Bh.d(e, gg, Ef)) {
      var f = Dg.e($(e, Ef));
      return w(f) ? U.d(function(d, e) {
        var f = Fh(c, e);
        if (w(f)) {
          var p = hg.c($(f, hg), 0), f = Ch(f, new v(null, 2, [Z, hg, hg, 100 + p], null)), f = xb(d, e, f)
        } else {
          f = d;
        }
        return f;
      }, Wc(d, Kh(e)), f) : d;
    }
    return d;
  }, Tc(gf.e(c)), Hh(c))));
}
;var yj = function() {
  function c(c) {
    var d = new v(null, 1, [df, new v(null, 2, [tf, 800, Ng, 500], null)], null);
    return Gh(U.d(Gh, d, ed.c(function() {
      var c = Ih(d), e = Jh(d), c = Ze(Je.e(c)), e = Ze(Je.e(e)), f = Ze(Je.c(10, 25)), n = Ze(Je.c(-5, 5)), s = Ze(Je.c(-5, 5)), q = 0.01 * (tc.e(4 * Yg) - 2 * Yg), u = 0.01 * (tc.e(4 * Yg) - 2 * Yg);
      return bj(new v(null, 6, [Jf, Rg(), kf, new X(null, 2, 5, Y, [c, e], null), vf, new X(null, 2, 5, Y, [n, s], null), ig, q, Pg, u, Df, f], null));
    }, Je.e(c))), Eh.i(M([vh(new X(null, 2, 5, Y, [400, 250], null)), new v(null, 2, [Z, ff, Ag, new X(null, 2, 5, Y, [800, 500], null)], null), wh(0)], 0)));
  }
  function d() {
    return e.e(10);
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.e = c;
  return e;
}();
function zj() {
  var c = yj.q(), d = Ih(c) / 2, e = Jh(c) / 2, d = Eh.i(M([vh(new X(null, 2, 5, Y, [d, e], null)), uh(new X(null, 2, 5, Y, [0, 0], null), new X(null, 2, 5, Y, [0, 0], null), 10, 0, 0, Zg), wh(0), new v(null, 2, [Z, If, Lf, 0.02], null), Ii.q(), Wi.e(1E4), new v(null, 1, [Z, Ff], null), yh.c(new X(null, 2, 5, Y, [Ih(c) - 10, Jh(c) - 10], null), new X(null, 2, 5, Y, [Ih(c) + 10, Jh(c) + 10], null)), new v(null, 2, [Z, Cg, Cg, 100 * Yg], null), uj.e(10), Gi(0.25 * Yg * (ah.c ? ah.c(10, 4) : ah.call(null, 
  10, 4))), Wh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(255);
    c.moveTo(10, 0);
    c.lineTo(-6, -6);
    c.lineTo(-6, 6);
    c.endFill();
    return c;
  }())], 0)), e = Eh.i(M([vh(new X(null, 2, 5, Y, [10, Jh(c) - 30], null)), Wh(new PIXI.Graphics), new v(null, 2, [Z, mg, mg, 2], null), Xi(Kh(d), Ih(c) - 20)], 0));
  return Gh(Gh(c, d), e);
}
;function Aj(c, d) {
  Bi.call(this);
  this.gb = c || 1;
  this.Lb = d || aa;
  this.lb = ja(this.oc, this);
  this.Kb = ka();
}
la(Aj, tj);
Aj.prototype.enabled = !1;
Aj.prototype.jb = null;
Aj.prototype.oc = function() {
  if (this.enabled) {
    var c = ka() - this.Kb;
    0 < c && c < 0.8 * this.gb ? this.jb = this.Lb.setTimeout(this.lb, this.gb - c) : (this.dispatchEvent(Bj), this.enabled && (this.jb = this.Lb.setTimeout(this.lb, this.gb), this.Kb = ka()));
  }
};
Aj.prototype.start = function() {
  this.enabled = !0;
  this.jb || (this.jb = this.Lb.setTimeout(this.lb, this.gb), this.Kb = ka());
};
var Bj = "tick";
function Cj(c) {
  if (!ca(c)) {
    if (c && "function" == typeof c.handleEvent) {
      c = ja(c.handleEvent, c);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return aa.setTimeout(c, 0);
}
;function Dj(c) {
  return Array.prototype.slice.call(c);
}
;var Ej = new Be(null, new v(null, 2, ["svg", null, "line", null], null), null), Fj = {};
function Gj(c) {
  if (c ? c.Da : c) {
    return c.Da(c);
  }
  var d;
  d = Gj[t(null == c ? null : c)];
  if (!d && (d = Gj._, !d)) {
    throw z("PElement.-elem", c);
  }
  return d.call(null, c);
}
function Hj(c, d) {
  var e = c.indexOf("#", d), f = c.indexOf(".", d), h = Math.min(e, f);
  return 0 > h ? Math.max(e, f) : h;
}
function Ij(c) {
  var d = Ec(c), e = Hj(d, 0);
  c = 0 < e ? d.substring(0, e) : 0 === e ? "div" : y ? d : null;
  c = w(Ej.e ? Ej.e(c) : Ej.call(null, c)) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c);
  if (0 <= e) {
    for (d = d.substring(e);;) {
      var e = Hj(d, 1), f = 0 <= e ? d.substring(0, e) : d, h = f.charAt(0);
      if (Ib.c("#", h)) {
        c.setAttribute("id", f.substring(1));
      } else {
        if (Ib.c(".", h)) {
          Zh.c(c, f.substring(1));
        } else {
          if (y) {
            throw Error([A("No matching clause: "), A(f.charAt(0))].join(""));
          }
        }
      }
      if (0 <= e) {
        d = d.substring(e);
      } else {
        break;
      }
    }
  }
  return c;
}
var Jj = function() {
  function c(c, d) {
    if (d ? w(w(null) ? null : d.Aa) || (d.Ib ? 0 : x(Fj, d)) : x(Fj, d)) {
      return c.appendChild(Gj(d)), c;
    }
    if (mc(d)) {
      for (var k = G(d), l = null, p = 0, n = 0;;) {
        if (n < p) {
          var s = l.F(null, n);
          e.c(c, s);
          n += 1;
        } else {
          if (k = G(k)) {
            l = k, ic(l) ? (k = Bb(l), n = Cb(l), l = k, p = O(k), k = n) : (k = H(l), e.c(c, k), k = L(l), l = null, p = 0), n = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    if (null == d) {
      k = c;
    } else {
      if (y) {
        throw[A("Don't know how to make node from: "), A(Te.i(M([d], 0)))].join("");
      }
      k = null;
    }
    return k;
  }
  function d(c) {
    return e.c(document.createDocumentFragment(), c);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}();
function Yh(c) {
  return(c ? w(w(null) ? null : c.Aa) || (c.Ib ? 0 : x(Fj, c)) : x(Fj, c)) ? Gj(c) : Jj.e(c);
}
Fj.string = !0;
Gj.string = function(c) {
  return c instanceof V ? Ij(c) : document.createTextNode("" + A(c));
};
Fj.number = !0;
Gj.number = function(c) {
  return document.createTextNode("" + A(c));
};
X.prototype.Aa = !0;
X.prototype.Da = function() {
  for (var c = P.d(this, 0, null), d = P.d(this, 1, null), e = wc(this, 2), c = Ij(c), f = gc(d) && !(d ? w(w(null) ? null : d.Aa) || (d.Ib ? 0 : x(Fj, d)) : x(Fj, d)) ? d : null, d = w(f) ? e : N(d, e), e = G(f), f = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = f.F(null, k), p = P.d(l, 0, null), l = P.d(l, 1, null), n = p;
      if (Ib.c(Mg, n)) {
        for (var p = G(l), l = null, s = n = 0;;) {
          if (s < n) {
            var q = l.F(null, s);
            Zh.c(c, q);
            s += 1;
          } else {
            if (p = G(p)) {
              l = p, ic(l) ? (p = Bb(l), s = Cb(l), l = p, n = O(p), p = s) : (p = H(l), Zh.c(c, p), p = L(l), l = null, n = 0), s = 0;
            } else {
              break;
            }
          }
        }
      } else {
        Ib.c(Bf, n) ? Zh.c(c, l) : y && ai.d(c, p, l);
      }
      k += 1;
    } else {
      if (e = G(e)) {
        if (ic(e)) {
          h = Bb(e), e = Cb(e), f = h, h = O(h);
        } else {
          h = H(e);
          f = P.d(h, 0, null);
          h = P.d(h, 1, null);
          k = f;
          if (Ib.c(Mg, k)) {
            for (f = G(h), h = null, p = k = 0;;) {
              if (p < k) {
                l = h.F(null, p), Zh.c(c, l), p += 1;
              } else {
                if (f = G(f)) {
                  h = f, ic(h) ? (f = Bb(h), p = Cb(h), h = f, k = O(f), f = p) : (f = H(h), Zh.c(c, f), f = L(h), h = null, k = 0), p = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            Ib.c(Bf, k) ? Zh.c(c, h) : y && ai.d(c, f, h);
          }
          e = L(e);
          f = null;
          h = 0;
        }
        k = 0;
      } else {
        break;
      }
    }
  }
  c.appendChild(Yh(d));
  return c;
};
SVGElement.prototype.Aa = !0;
SVGElement.prototype.Da = function() {
  return this;
};
Document.prototype.Aa = !0;
Document.prototype.Da = function() {
  return this;
};
Text.prototype.Aa = !0;
Text.prototype.Da = function() {
  return this;
};
DocumentFragment.prototype.Aa = !0;
DocumentFragment.prototype.Da = function() {
  return this;
};
HTMLElement.prototype.Aa = !0;
HTMLElement.prototype.Da = function() {
  return this;
};
try {
  Window.prototype.Aa = !0, Window.prototype.Da = function() {
    return this;
  };
} catch (Kj) {
  if (Kj instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
  } else {
    if (y) {
      throw Kj;
    }
  }
}
;var Lj = function() {
  function c(c, d) {
    var e = Yh(c);
    e.appendChild(Yh(d));
    return e;
  }
  var d = null, e = function() {
    function c(d, f, p) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, n);
    }
    function e(c, f, h) {
      c = Yh(c);
      f = G(N(f, h));
      h = null;
      for (var n = 0, s = 0;;) {
        if (s < n) {
          var q = h.F(null, s);
          d.c(c, q);
          s += 1;
        } else {
          if (f = G(f)) {
            h = f, ic(h) ? (f = Bb(h), s = Cb(h), h = f, n = O(f), f = s) : (f = H(h), d.c(c, f), f = L(h), h = null, n = 0), s = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    c.m = 2;
    c.j = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = J(c);
      return e(d, f, c);
    };
    c.i = e;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.c = c;
  d.i = e.i;
  return d;
}();
function Mj(c, d) {
  var e = Yh(c);
  e.innerHTML = "";
  Lj.c(e, d);
}
var Oj = function Nj(d) {
  return(null == d ? 0 : d ? d.l & 8 || d.sc || (d.l ? 0 : x(La, d)) : x(La, d)) ? Sg.c(" ", ed.c(Nj, d)) : "string" === typeof d || d instanceof V ? Ec(d) : null;
};
function Pj(c) {
  return He(ad, kd(function(c) {
    return c.parentNode;
  }, Yh(c)));
}
var Qj = function() {
  function c(c, d) {
    var e = Dj(Yh(Yh(c)).querySelectorAll(Oj(d)));
    return function(c) {
      return 0 <= e.indexOf(c);
    };
  }
  function d(c) {
    return e.c(document, c);
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e;
}(), Rj = function() {
  function c(c, d, e) {
    var l = Yh(c);
    c = Yh(d);
    return H(pd(Qj.c(l, e), He(function(c) {
      return c !== l;
    }, Pj(c))));
  }
  function d(c, d) {
    return H(pd(Qj.e(d), Pj(Yh(c))));
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e;
}(), Sj = qd($d, ed.c(function(c) {
  var d = P.d(c, 0, null);
  c = P.d(c, 1, null);
  return new X(null, 2, 5, Y, [d, new ae([c, function(c) {
    return function(d) {
      var h = d.relatedTarget, k;
      k = d.mc;
      k = w(k) ? k : d.currentTarget;
      w(h) && (h = Yh(h), k = Yh(k), h = w(k.contains) ? k.contains(h) : w(k.compareDocumentPosition) ? 0 != (k.compareDocumentPosition(h) & 16) : null);
      return w(h) ? null : c.e ? c.e(d) : c.call(null, d);
    };
  }])], null);
}, new v(null, 2, [ug, yf, Zf, Kf], null)));
function Tj(c, d, e) {
  return function(f) {
    var h = Rj.d(Yh(c), f.target, d);
    return w(w(h) ? Da(bi.c ? bi.c(h, Kg) : bi.call(null, h, Kg)) : h) ? (f.mc = h, e.e ? e.e(f) : e.call(null, f)) : null;
  };
}
function Uj(c) {
  c = Yh(c).jc;
  return w(c) ? c : $d;
}
var Vj = function() {
  function c(c, f, h) {
    var k = null;
    2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
    return d.call(this, c, f, k);
  }
  function d(c, d, h) {
    c = Yh(c);
    return c.jc = T.d(d, Uj(c), h);
  }
  c.m = 2;
  c.j = function(c) {
    var f = H(c);
    c = L(c);
    var h = H(c);
    c = J(c);
    return d(f, h, c);
  };
  c.i = d;
  return c;
}();
function Wj(c) {
  return fc(c) ? Ke.c(function(c) {
    return Yh(H(c));
  }, J).call(null, c) : new X(null, 2, 5, Y, [Yh(c), null], null);
}
var Xj = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h);
  }
  function d(c, d) {
    if (!bd(O(d))) {
      throw Error([A("Assert failed: "), A(Te.i(M([Cc(new Lb(null, "even?", "even?", -1543640034, null), Cc(new Lb(null, "count", "count", -1545680184, null), new Lb(null, "type-fs", "type-fs", 1801297401, null)))], 0)))].join(""));
    }
    for (var h = Wj(c), k = P.d(h, 0, null), h = P.d(h, 1, null), l = G(rd.c(2, d)), p = null, n = 0, s = 0;;) {
      if (s < n) {
        for (var q = p.F(null, s), u = P.d(q, 0, null), q = P.d(q, 1, null), u = G(R.d(Sj, u, new ae([u, ad]))), D = null, F = 0, I = 0;;) {
          if (I < F) {
            var Q = D.F(null, I), fa = P.d(Q, 0, null), Q = P.d(Q, 1, null), Q = (w(h) ? dd.d(Tj, k, h) : ad).call(null, Q.e ? Q.e(q) : Q.call(null, q));
            Vj.i(k, ud, M([new X(null, 3, 5, Y, [h, fa, q], null), Q], 0));
            w(k.addEventListener) ? k.addEventListener(Ec(fa), Q) : k.attachEvent(Ec(fa), Q);
            I += 1;
          } else {
            if (u = G(u)) {
              ic(u) ? (F = Bb(u), u = Cb(u), D = F, F = O(F)) : (F = H(u), D = P.d(F, 0, null), F = P.d(F, 1, null), F = (w(h) ? dd.d(Tj, k, h) : ad).call(null, F.e ? F.e(q) : F.call(null, q)), Vj.i(k, ud, M([new X(null, 3, 5, Y, [h, D, q], null), F], 0)), w(k.addEventListener) ? k.addEventListener(Ec(D), F) : k.attachEvent(Ec(D), F), u = L(u), D = null, F = 0), I = 0;
            } else {
              break;
            }
          }
        }
        s += 1;
      } else {
        if (l = G(l)) {
          if (ic(l)) {
            n = Bb(l), l = Cb(l), p = n, n = O(n);
          } else {
            p = H(l);
            n = P.d(p, 0, null);
            p = P.d(p, 1, null);
            n = G(R.d(Sj, n, new ae([n, ad])));
            s = null;
            for (u = q = 0;;) {
              if (u < q) {
                F = s.F(null, u), D = P.d(F, 0, null), F = P.d(F, 1, null), F = (w(h) ? dd.d(Tj, k, h) : ad).call(null, F.e ? F.e(p) : F.call(null, p)), Vj.i(k, ud, M([new X(null, 3, 5, Y, [h, D, p], null), F], 0)), w(k.addEventListener) ? k.addEventListener(Ec(D), F) : k.attachEvent(Ec(D), F), u += 1;
              } else {
                if (n = G(n)) {
                  ic(n) ? (q = Bb(n), n = Cb(n), s = q, q = O(q)) : (q = H(n), s = P.d(q, 0, null), q = P.d(q, 1, null), q = (w(h) ? dd.d(Tj, k, h) : ad).call(null, q.e ? q.e(p) : q.call(null, p)), Vj.i(k, ud, M([new X(null, 3, 5, Y, [h, s, p], null), q], 0)), w(k.addEventListener) ? k.addEventListener(Ec(s), q) : k.attachEvent(Ec(s), q), n = L(n), s = null, q = 0), u = 0;
                } else {
                  break;
                }
              }
            }
            l = L(l);
            p = null;
            n = 0;
          }
          s = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  c.m = 1;
  c.j = function(c) {
    var f = H(c);
    c = J(c);
    return d(f, c);
  };
  c.i = d;
  return c;
}();
var Yj = new v(null, 5, [38, Ig, 40, Gg, 37, ng, 39, kg, 32, jg], null), Zj = qd(De, ye(Yj)), ak = We.e(Ld), bk = We.e(De);
function ck(c, d) {
  var e = d.keyCode;
  return oc(Zj, e) ? (w(d.preventDefault) ? d.preventDefault() : d.returnValue = !1, Ye.d(ak, Vb, new X(null, 2, 5, Y, [c, Yj.e ? Yj.e(e) : Yj.call(null, e)], null)), !1) : null;
}
function dk() {
  var c = fb(ak);
  Ye.c(bk, function(d) {
    return U.d(function(c, d) {
      var h = P.d(d, 0, null), k = P.d(d, 1, null);
      return Ib.c(h, ag) ? Vb.c(c, k) : Ib.c(h, pg) ? cc.c(c, k) : Kb ? c : null;
    }, d, c);
  });
}
function ek(c) {
  var d = ph.c(fb(bk), qd(De, pd(ad, ed.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return Ib.c(ag, d) ? c : null;
  }, fb(ak)))));
  dk();
  Xe(ak, Ld);
  return S.d(c, Qf, d);
}
Xj.i(document, M([pg, function(c) {
  return ck(pg, c);
}], 0));
Xj.i(document, M([ag, function(c) {
  return ck(ag, c);
}], 0));
var fk = We.e($d);
Ye.c(fk, function() {
  return zj();
});
var gk = function(c, d, e) {
  var f = PIXI.autoDetectRenderer(1, 1, null, !1, !0), h = new PIXI.Stage(0), k = new X(null, 3, 5, Y, [new v(null, 3, [vg, 0, Z, ef, hf, new PIXI.DisplayObjectContainer], null), new v(null, 3, [vg, 1, Z, Sf, hf, new PIXI.DisplayObjectContainer], null), new v(null, 4, [vg, 2, Z, Tf, Eg, !0, hf, new PIXI.DisplayObjectContainer], null)], null);
  Le.e(ed.c(function(c) {
    return h.addChild(hf.e(c));
  }, k));
  Mj(e, f.view);
  return new v(null, 5, [qf, k, jf, f, Qg, h, Og, c, $f, d], null);
}(window, Ih(fb(fk)) / Jh(fb(fk)), document.getElementById("content")), hk = function() {
  var c = We.e(new v(null, 2, [Af, null, sg, null], null));
  return function(d, e) {
    for (var f = qd($d, ed.c(Ke.c(vg, hf), e)), h = fb(c), k = Af.e(h), h = sg.e(h), l = {}, p = G(Hh(d)), n = null, s = 0, q = 0;;) {
      if (q < s) {
        var u = n.F(null, q), D = Bg.e($(u, hf));
        if (null != D) {
          l[Kh(u)] = !0;
          if (null == D.parent) {
            var F = mg.c($(u, mg), 1);
            R.c(f, F).addChild(D);
          }
          var I = Lh(u), F = P.d(I, 0, null), I = P.d(I, 1, null), Q = function() {
            var c = Mh(u);
            return w(c) ? c : 0;
          }(), fa = D.position;
          fa.x = F;
          fa.y = I;
          D.rotation = Q;
        }
        q += 1;
      } else {
        if (p = G(p)) {
          if (ic(p)) {
            s = Bb(p), p = Cb(p), n = s, s = O(s);
          } else {
            var qa = H(p), n = Bg.e($(qa, hf));
            null != n && (l[Kh(qa)] = !0, null == n.parent && (s = mg.c($(qa, mg), 1), R.c(f, s).addChild(n)), q = Lh(qa), s = P.d(q, 0, null), q = P.d(q, 1, null), D = function() {
              var c = Mh(qa);
              return w(c) ? c : 0;
            }(), F = n.position, F.x = s, F.y = q, n.rotation = D);
            p = L(p);
            n = null;
            s = 0;
          }
          q = 0;
        } else {
          break;
        }
      }
    }
    null != h && ra(h, function(c, d) {
      if (!0 !== l[d] && !0 === c) {
        var e = Fh(k, d), h = Bg.e($(e, hf)), e = mg.c($(e, mg), 1);
        return R.c(f, e).removeChild(h);
      }
      return null;
    });
    Xe(c, new v(null, 2, [Af, d, sg, l], null));
    return d;
  };
}();
function ik(c) {
  for (c = Hh(c);;) {
    if (G(c)) {
      var d = H(c);
      if (oc(d, ff)) {
        return d;
      }
      c = L(c);
    } else {
      return null;
    }
  }
}
function jk() {
  var c = fb(fk), d = mc(gk) ? T.c(we, gk) : gk, e = R.c(d, Qg), f = R.c(d, qf), h = R.c(d, $f), k = R.c(d, Og), d = R.c(d, jf), h = h > k.innerWidth / k.innerHeight ? new X(null, 2, 5, Y, [k.innerWidth, k.innerWidth / h], null) : new X(null, 2, 5, Y, [h * k.innerHeight, k.innerHeight], null), l = P.d(h, 0, null), h = P.d(h, 1, null);
  hk.c ? hk.c(c, f) : hk.call(null, c, f);
  if (d.width !== l || d.height !== h) {
    console.log("resizing"), k = new X(null, 2, 5, Y, [l, h], null), P.d(k, 0, null), P.d(k, 1, null), d.resize(l, h);
  }
  for (var p = ik(c), h = function() {
    var d = Ag.e($(p, ff));
    return w(d) ? d : new X(null, 2, 5, Y, [Ih(c), Jh(c)], null);
  }(), n = P.d(h, 0, null), s = P.d(h, 1, null), k = function() {
    var c = Lh(p);
    return w(c) ? c : new X(null, 2, 5, Y, [n / 2, s / 2], null);
  }(), h = P.d(k, 0, null), k = P.d(k, 1, null), q = function() {
    var c = Mh(p);
    return w(c) ? c : 0;
  }(), l = l / n;;) {
    if (G(f)) {
      var u = H(f), D = mc(u) ? T.c(we, u) : u, u = R.c(D, Eg), D = R.c(D, hf), F = D.scale, I = D.position, Q = D.pivot;
      F.x = l;
      F.y = l;
      w(u) || (I.x = n / 2 * l, I.y = s / 2 * l, Q.x = h, Q.y = k, D.rotation = -q);
      f = L(f);
    } else {
      break;
    }
  }
  d.render(e);
}
function kk(c) {
  c = wj(c);
  c = ek(c);
  c = Rh(c);
  c = Vh(c);
  a: {
    b: {
      c = Th(c);
      for (var d = Hh(c), e = Tc(gf.e(c));;) {
        if (G(d)) {
          var f = H(d), h = $(f, lg), k = h, h = w(k) ? 0 === pf.e(h) && oc(f, xf) : k;
          w(h) ? (h = vj(f), d = L(d), e = Vc(Vc(e, Kh(h), h), Kh(f), Yb.c(f, xf))) : d = L(d);
        } else {
          c = S.d(c, gf, wb(e));
          break b;
        }
      }
      c = void 0;
    }
    d = gf.e(c);
    for (e = Tc(gf.e(c));;) {
      if (G(d)) {
        h = H(d), f = H(L(h)), oc(f, rf) ? (f = Si(c, f), h = H(h), d = L(d), e = xb(e, h, f)) : d = L(d);
      } else {
        c = S.d(c, gf, wb(e));
        break a;
      }
    }
    c = void 0;
  }
  c = Ti(c);
  c = xj(c);
  c = Vi(c);
  c = Yi(c);
  c = Zi(c);
  c = ej(c);
  c = $i(c);
  return Ph(c);
}
var lk = new Aj(16);
lk.start();
lj(lk, Bj, function() {
  return Cj(function() {
    return Ye.c(fk, kk);
  });
});
requestAnimFrame(function mk() {
  jk();
  return requestAnimFrame(mk);
});

})();

//# sourceMappingURL=asteroids.js.map