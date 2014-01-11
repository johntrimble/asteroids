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
  return c[da] || (c[da] = ++ea);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function ga(c, d, e) {
  return c.call.apply(c.bind, arguments);
}
function ha(c, d, e) {
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
function ia(c, d, e) {
  ia = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
  return ia.apply(null, arguments);
}
var ja = Date.now || function() {
  return+new Date;
};
function ka(c, d) {
  function e() {
  }
  e.prototype = d.prototype;
  c.nc = d.prototype;
  c.prototype = new e;
  c.prototype.constructor = c;
}
;function la(c) {
  return c.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function ma(c) {
  for (var d = 0, e = 0;e < c.length;++e) {
    d = 31 * d + c.charCodeAt(e), d %= 4294967296;
  }
  return d;
}
;var na = Array.prototype, oa = na.indexOf ? function(c, d, e) {
  return na.indexOf.call(c, d, e);
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
function pa(c, d) {
  for (var e in c) {
    d.call(void 0, c[e], e, c);
  }
}
var ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function sa(c, d) {
  for (var e, f, h = 1;h < arguments.length;h++) {
    f = arguments[h];
    for (e in f) {
      c[e] = f[e];
    }
    for (var k = 0;k < ra.length;k++) {
      e = ra[k], Object.prototype.hasOwnProperty.call(f, e) && (c[e] = f[e]);
    }
  }
}
;function ta(c, d) {
  null != c && this.append.apply(this, arguments);
}
ta.prototype.Ra = "";
ta.prototype.append = function(c, d, e) {
  this.Ra += c;
  if (null != d) {
    for (var f = 1;f < arguments.length;f++) {
      this.Ra += arguments[f];
    }
  }
  return this;
};
ta.prototype.clear = function() {
  this.Ra = "";
};
ta.prototype.toString = function() {
  return this.Ra;
};
var ua, va = null;
function wa() {
  return new v(null, 5, [xa, !0, ya, !0, za, !1, Aa, !1, Ba, null], null);
}
function w(c) {
  return null != c && !1 !== c;
}
function Ca(c) {
  return w(c) ? !1 : !0;
}
function x(c, d) {
  return c[t(null == d ? null : d)] ? !0 : c._ ? !0 : y ? !1 : null;
}
function Da(c) {
  return null == c ? null : c.constructor;
}
function A(c, d) {
  var e = Da(d), e = w(w(e) ? e.Ub : e) ? e.Tb : t(d);
  return Error(["No protocol method ", c, " defined for type ", e, ": ", d].join(""));
}
function Ea(c) {
  var d = c.Tb;
  return w(d) ? d : "" + B(c);
}
function Fa(c) {
  for (var d = c.length, e = Array(d), f = 0;;) {
    if (f < d) {
      e[f] = c[f], f += 1;
    } else {
      break;
    }
  }
  return e;
}
var Ga = {}, Ha = {};
function Ia(c) {
  if (c ? c.Q : c) {
    return c.Q(c);
  }
  var d;
  d = Ia[t(null == c ? null : c)];
  if (!d && (d = Ia._, !d)) {
    throw A("ICounted.-count", c);
  }
  return d.call(null, c);
}
function Ja(c) {
  if (c ? c.U : c) {
    return c.U(c);
  }
  var d;
  d = Ja[t(null == c ? null : c)];
  if (!d && (d = Ja._, !d)) {
    throw A("IEmptyableCollection.-empty", c);
  }
  return d.call(null, c);
}
var Ka = {};
function La(c, d) {
  if (c ? c.K : c) {
    return c.K(c, d);
  }
  var e;
  e = La[t(null == c ? null : c)];
  if (!e && (e = La._, !e)) {
    throw A("ICollection.-conj", c);
  }
  return e.call(null, c, d);
}
var Ma = {}, C = function() {
  function c(c, d, e) {
    if (c ? c.pa : c) {
      return c.pa(c, d, e);
    }
    var l;
    l = C[t(null == c ? null : c)];
    if (!l && (l = C._, !l)) {
      throw A("IIndexed.-nth", c);
    }
    return l.call(null, c, d, e);
  }
  function d(c, d) {
    if (c ? c.F : c) {
      return c.F(c, d);
    }
    var e;
    e = C[t(null == c ? null : c)];
    if (!e && (e = C._, !e)) {
      throw A("IIndexed.-nth", c);
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
}(), Na = {};
function Oa(c) {
  if (c ? c.W : c) {
    return c.W(c);
  }
  var d;
  d = Oa[t(null == c ? null : c)];
  if (!d && (d = Oa._, !d)) {
    throw A("ISeq.-first", c);
  }
  return d.call(null, c);
}
function Pa(c) {
  if (c ? c.ia : c) {
    return c.ia(c);
  }
  var d;
  d = Pa[t(null == c ? null : c)];
  if (!d && (d = Pa._, !d)) {
    throw A("ISeq.-rest", c);
  }
  return d.call(null, c);
}
var Qa = {}, Ra = {}, Sa = function() {
  function c(c, d, e) {
    if (c ? c.P : c) {
      return c.P(c, d, e);
    }
    var l;
    l = Sa[t(null == c ? null : c)];
    if (!l && (l = Sa._, !l)) {
      throw A("ILookup.-lookup", c);
    }
    return l.call(null, c, d, e);
  }
  function d(c, d) {
    if (c ? c.O : c) {
      return c.O(c, d);
    }
    var e;
    e = Sa[t(null == c ? null : c)];
    if (!e && (e = Sa._, !e)) {
      throw A("ILookup.-lookup", c);
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
function Ta(c, d) {
  if (c ? c.nb : c) {
    return c.nb(c, d);
  }
  var e;
  e = Ta[t(null == c ? null : c)];
  if (!e && (e = Ta._, !e)) {
    throw A("IAssociative.-contains-key?", c);
  }
  return e.call(null, c, d);
}
function Ua(c, d, e) {
  if (c ? c.ya : c) {
    return c.ya(c, d, e);
  }
  var f;
  f = Ua[t(null == c ? null : c)];
  if (!f && (f = Ua._, !f)) {
    throw A("IAssociative.-assoc", c);
  }
  return f.call(null, c, d, e);
}
var Va = {};
function Wa(c, d) {
  if (c ? c.La : c) {
    return c.La(c, d);
  }
  var e;
  e = Wa[t(null == c ? null : c)];
  if (!e && (e = Wa._, !e)) {
    throw A("IMap.-dissoc", c);
  }
  return e.call(null, c, d);
}
var Xa = {};
function Ya(c) {
  if (c ? c.Eb : c) {
    return c.Eb();
  }
  var d;
  d = Ya[t(null == c ? null : c)];
  if (!d && (d = Ya._, !d)) {
    throw A("IMapEntry.-key", c);
  }
  return d.call(null, c);
}
function Za(c) {
  if (c ? c.Fb : c) {
    return c.Fb();
  }
  var d;
  d = Za[t(null == c ? null : c)];
  if (!d && (d = Za._, !d)) {
    throw A("IMapEntry.-val", c);
  }
  return d.call(null, c);
}
var ab = {};
function bb(c, d) {
  if (c ? c.Pb : c) {
    return c.Pb(0, d);
  }
  var e;
  e = bb[t(null == c ? null : c)];
  if (!e && (e = bb._, !e)) {
    throw A("ISet.-disjoin", c);
  }
  return e.call(null, c, d);
}
var cb = {};
function db(c, d, e) {
  if (c ? c.Hb : c) {
    return c.Hb(c, d, e);
  }
  var f;
  f = db[t(null == c ? null : c)];
  if (!f && (f = db._, !f)) {
    throw A("IVector.-assoc-n", c);
  }
  return f.call(null, c, d, e);
}
function eb(c) {
  if (c ? c.dc : c) {
    return c.state;
  }
  var d;
  d = eb[t(null == c ? null : c)];
  if (!d && (d = eb._, !d)) {
    throw A("IDeref.-deref", c);
  }
  return d.call(null, c);
}
var fb = {};
function gb(c) {
  if (c ? c.L : c) {
    return c.L(c);
  }
  var d;
  d = gb[t(null == c ? null : c)];
  if (!d && (d = gb._, !d)) {
    throw A("IMeta.-meta", c);
  }
  return d.call(null, c);
}
var hb = {};
function ib(c, d) {
  if (c ? c.N : c) {
    return c.N(c, d);
  }
  var e;
  e = ib[t(null == c ? null : c)];
  if (!e && (e = ib._, !e)) {
    throw A("IWithMeta.-with-meta", c);
  }
  return e.call(null, c, d);
}
var jb = {}, kb = function() {
  function c(c, d, e) {
    if (c ? c.aa : c) {
      return c.aa(c, d, e);
    }
    var l;
    l = kb[t(null == c ? null : c)];
    if (!l && (l = kb._, !l)) {
      throw A("IReduce.-reduce", c);
    }
    return l.call(null, c, d, e);
  }
  function d(c, d) {
    if (c ? c.$ : c) {
      return c.$(c, d);
    }
    var e;
    e = kb[t(null == c ? null : c)];
    if (!e && (e = kb._, !e)) {
      throw A("IReduce.-reduce", c);
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
function lb(c, d) {
  if (c ? c.D : c) {
    return c.D(c, d);
  }
  var e;
  e = lb[t(null == c ? null : c)];
  if (!e && (e = lb._, !e)) {
    throw A("IEquiv.-equiv", c);
  }
  return e.call(null, c, d);
}
function mb(c) {
  if (c ? c.H : c) {
    return c.H(c);
  }
  var d;
  d = mb[t(null == c ? null : c)];
  if (!d && (d = mb._, !d)) {
    throw A("IHash.-hash", c);
  }
  return d.call(null, c);
}
var nb = {};
function ob(c) {
  if (c ? c.M : c) {
    return c.M(c);
  }
  var d;
  d = ob[t(null == c ? null : c)];
  if (!d && (d = ob._, !d)) {
    throw A("ISeqable.-seq", c);
  }
  return d.call(null, c);
}
var pb = {};
function D(c, d) {
  if (c ? c.Sb : c) {
    return c.Sb(0, d);
  }
  var e;
  e = D[t(null == c ? null : c)];
  if (!e && (e = D._, !e)) {
    throw A("IWriter.-write", c);
  }
  return e.call(null, c, d);
}
var qb = {};
function rb(c, d, e) {
  if (c ? c.G : c) {
    return c.G(c, d, e);
  }
  var f;
  f = rb[t(null == c ? null : c)];
  if (!f && (f = rb._, !f)) {
    throw A("IPrintWithWriter.-pr-writer", c);
  }
  return f.call(null, c, d, e);
}
function sb(c, d, e) {
  if (c ? c.Rb : c) {
    return c.Rb(0, d, e);
  }
  var f;
  f = sb[t(null == c ? null : c)];
  if (!f && (f = sb._, !f)) {
    throw A("IWatchable.-notify-watches", c);
  }
  return f.call(null, c, d, e);
}
function tb(c) {
  if (c ? c.Va : c) {
    return c.Va(c);
  }
  var d;
  d = tb[t(null == c ? null : c)];
  if (!d && (d = tb._, !d)) {
    throw A("IEditableCollection.-as-transient", c);
  }
  return d.call(null, c);
}
function ub(c, d) {
  if (c ? c.Ma : c) {
    return c.Ma(c, d);
  }
  var e;
  e = ub[t(null == c ? null : c)];
  if (!e && (e = ub._, !e)) {
    throw A("ITransientCollection.-conj!", c);
  }
  return e.call(null, c, d);
}
function vb(c) {
  if (c ? c.Na : c) {
    return c.Na(c);
  }
  var d;
  d = vb[t(null == c ? null : c)];
  if (!d && (d = vb._, !d)) {
    throw A("ITransientCollection.-persistent!", c);
  }
  return d.call(null, c);
}
function wb(c, d, e) {
  if (c ? c.Xa : c) {
    return c.Xa(c, d, e);
  }
  var f;
  f = wb[t(null == c ? null : c)];
  if (!f && (f = wb._, !f)) {
    throw A("ITransientAssociative.-assoc!", c);
  }
  return f.call(null, c, d, e);
}
function xb(c, d) {
  if (c ? c.Gb : c) {
    return c.Gb(c, d);
  }
  var e;
  e = xb[t(null == c ? null : c)];
  if (!e && (e = xb._, !e)) {
    throw A("ITransientMap.-dissoc!", c);
  }
  return e.call(null, c, d);
}
function yb(c, d, e) {
  if (c ? c.Qb : c) {
    return c.Qb(0, d, e);
  }
  var f;
  f = yb[t(null == c ? null : c)];
  if (!f && (f = yb._, !f)) {
    throw A("ITransientVector.-assoc-n!", c);
  }
  return f.call(null, c, d, e);
}
function zb(c) {
  if (c ? c.Mb : c) {
    return c.Mb();
  }
  var d;
  d = zb[t(null == c ? null : c)];
  if (!d && (d = zb._, !d)) {
    throw A("IChunk.-drop-first", c);
  }
  return d.call(null, c);
}
function Ab(c) {
  if (c ? c.pb : c) {
    return c.pb(c);
  }
  var d;
  d = Ab[t(null == c ? null : c)];
  if (!d && (d = Ab._, !d)) {
    throw A("IChunkedSeq.-chunked-first", c);
  }
  return d.call(null, c);
}
function Bb(c) {
  if (c ? c.qb : c) {
    return c.qb(c);
  }
  var d;
  d = Bb[t(null == c ? null : c)];
  if (!d && (d = Bb._, !d)) {
    throw A("IChunkedSeq.-chunked-rest", c);
  }
  return d.call(null, c);
}
function Cb(c) {
  if (c ? c.ob : c) {
    return c.ob(c);
  }
  var d;
  d = Cb[t(null == c ? null : c)];
  if (!d && (d = Cb._, !d)) {
    throw A("IChunkedNext.-chunked-next", c);
  }
  return d.call(null, c);
}
function Db(c) {
  this.lc = c;
  this.A = 0;
  this.l = 1073741824;
}
Db.prototype.Sb = function(c, d) {
  return this.lc.append(d);
};
function Eb(c) {
  var d = new ta;
  c.G(null, new Db(d), wa());
  return "" + B(d);
}
function Gb(c, d) {
  if (w(Hb.c ? Hb.c(c, d) : Hb.call(null, c, d))) {
    return 0;
  }
  var e = Ca(c.ha);
  if (w(e ? d.ha : e)) {
    return-1;
  }
  if (w(c.ha)) {
    if (Ca(d.ha)) {
      return 1;
    }
    e = Ib.c ? Ib.c(c.ha, d.ha) : Ib.call(null, c.ha, d.ha);
    return 0 === e ? Ib.c ? Ib.c(c.name, d.name) : Ib.call(null, c.name, d.name) : e;
  }
  return Jb ? Ib.c ? Ib.c(c.name, d.name) : Ib.call(null, c.name, d.name) : null;
}
function Kb(c, d, e, f, h) {
  this.ha = c;
  this.name = d;
  this.Ia = e;
  this.Ka = f;
  this.fa = h;
  this.l = 2154168321;
  this.A = 4096;
}
m = Kb.prototype;
m.G = function(c, d) {
  return D(d, this.Ia);
};
m.H = function() {
  var c = this.Ka;
  return null != c ? c : this.Ka = c = Lb.c ? Lb.c(E.e ? E.e(this.ha) : E.call(null, this.ha), E.e ? E.e(this.name) : E.call(null, this.name)) : Lb.call(null, E.e ? E.e(this.ha) : E.call(null, this.ha), E.e ? E.e(this.name) : E.call(null, this.name));
};
m.N = function(c, d) {
  return new Kb(this.ha, this.name, this.Ia, this.Ka, d);
};
m.L = function() {
  return this.fa;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Sa.d(e, this, null);
      case 3:
        return Sa.d(e, this, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return Sa.d(c, this, null);
};
m.c = function(c, d) {
  return Sa.d(c, this, d);
};
m.D = function(c, d) {
  return d instanceof Kb ? this.Ia === d.Ia : !1;
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
    return 0 === c.length ? null : new Mb(c, 0);
  }
  if (x(nb, c)) {
    return ob(c);
  }
  if (y) {
    throw Error([B(c), B("is not ISeqable")].join(""));
  }
  return null;
}
function I(c) {
  if (null == c) {
    return null;
  }
  if (c && (c.l & 64 || c.Wa)) {
    return c.W(null);
  }
  c = G(c);
  return null == c ? null : Oa(c);
}
function J(c) {
  return null != c ? c && (c.l & 64 || c.Wa) ? c.ia(null) : (c = G(c)) ? Pa(c) : K : K;
}
function L(c) {
  return null == c ? null : c && (c.l & 128 || c.fb) ? c.Z(null) : G(J(c));
}
var Hb = function() {
  function c(c, d) {
    return null == c ? null == d : c === d || lb(c, d);
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      for (;;) {
        if (d.c(c, f)) {
          if (L(h)) {
            c = f, f = I(h), h = L(h);
          } else {
            return d.c(f, I(h));
          }
        } else {
          return!1;
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
Ha["null"] = !0;
Ia["null"] = function() {
  return 0;
};
Date.prototype.D = function(c, d) {
  return d instanceof Date && this.toString() === d.toString();
};
lb.number = function(c, d) {
  return c === d;
};
fb["function"] = !0;
gb["function"] = function() {
  return null;
};
Ga["function"] = !0;
mb._ = function(c) {
  return ca(c);
};
var Nb = function() {
  function c(c, d, e, f) {
    for (var p = Ia(c);;) {
      if (f < p) {
        e = d.c ? d.c(e, C.c(c, f)) : d.call(null, e, C.c(c, f)), f += 1;
      } else {
        return e;
      }
    }
  }
  function d(c, d, e) {
    for (var f = Ia(c), p = 0;;) {
      if (p < f) {
        e = d.c ? d.c(e, C.c(c, p)) : d.call(null, e, C.c(c, p)), p += 1;
      } else {
        return e;
      }
    }
  }
  function e(c, d) {
    var e = Ia(c);
    if (0 === e) {
      return d.q ? d.q() : d.call(null);
    }
    for (var f = C.c(c, 0), p = 1;;) {
      if (p < e) {
        f = d.c ? d.c(f, C.c(c, p)) : d.call(null, f, C.c(c, p)), p += 1;
      } else {
        return f;
      }
    }
  }
  var f = null, f = function(f, k, l, n) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.o = c;
  return f;
}(), Ob = function() {
  function c(c, d, e, f) {
    for (var p = c.length;;) {
      if (f < p) {
        e = d.c ? d.c(e, c[f]) : d.call(null, e, c[f]), f += 1;
      } else {
        return e;
      }
    }
  }
  function d(c, d, e) {
    for (var f = c.length, p = 0;;) {
      if (p < f) {
        e = d.c ? d.c(e, c[p]) : d.call(null, e, c[p]), p += 1;
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
    for (var f = c[0], p = 1;;) {
      if (p < e) {
        f = d.c ? d.c(f, c[p]) : d.call(null, f, c[p]), p += 1;
      } else {
        return f;
      }
    }
  }
  var f = null, f = function(f, k, l, n) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.o = c;
  return f;
}();
function Pb(c) {
  return c ? c.l & 2 || c.cc ? !0 : c.l ? !1 : x(Ha, c) : x(Ha, c);
}
function Qb(c) {
  return c ? c.l & 16 || c.Nb ? !0 : c.l ? !1 : x(Ma, c) : x(Ma, c);
}
function Mb(c, d) {
  this.f = c;
  this.s = d;
  this.A = 0;
  this.l = 166199550;
}
m = Mb.prototype;
m.H = function() {
  return Rb.e ? Rb.e(this) : Rb.call(null, this);
};
m.Z = function() {
  return this.s + 1 < this.f.length ? new Mb(this.f, this.s + 1) : null;
};
m.K = function(c, d) {
  return N.c ? N.c(d, this) : N.call(null, d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return Ob.o(this.f, d, this.f[this.s], this.s + 1);
};
m.aa = function(c, d, e) {
  return Ob.o(this.f, d, e, this.s);
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
  return this.s + 1 < this.f.length ? new Mb(this.f, this.s + 1) : K;
};
m.D = function(c, d) {
  return Sb.c ? Sb.c(this, d) : Sb.call(null, this, d);
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
var Tb = function() {
  function c(c, d) {
    return d < c.length ? new Mb(c, d) : null;
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
    return Tb.c(c, d);
  }
  function d(c) {
    return Tb.c(c, 0);
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
lb._ = function(c, d) {
  return c === d;
};
var Ub = function() {
  function c(c, d) {
    return null != c ? La(c, d) : La(K, d);
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      for (;;) {
        if (w(h)) {
          c = d.c(c, f), f = I(h), h = L(h);
        } else {
          return d.c(c, f);
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
          if (x(Ha, c)) {
            c = Ia(c);
          } else {
            if (y) {
              a: {
                c = G(c);
                for (var d = 0;;) {
                  if (Pb(c)) {
                    c = d + Ia(c);
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
var Vb = function() {
  function c(c, d, e) {
    for (;;) {
      if (null == c) {
        return e;
      }
      if (0 === d) {
        return G(c) ? I(c) : e;
      }
      if (Qb(c)) {
        return C.d(c, d, e);
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
          return I(c);
        }
        throw Error("Index out of bounds");
      }
      if (Qb(c)) {
        return C.c(c, d);
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
      if (x(Ma, c)) {
        return C.c(c, d);
      }
      if (y) {
        if (c ? c.l & 64 || c.Wa || (c.l ? 0 : x(Na, c)) : x(Na, c)) {
          return Vb.d(c, d, e);
        }
        throw Error([B("nth not supported on this type "), B(Ea(Da(c)))].join(""));
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
    if (x(Ma, c)) {
      return C.c(c, d);
    }
    if (y) {
      if (c ? c.l & 64 || c.Wa || (c.l ? 0 : x(Na, c)) : x(Na, c)) {
        return Vb.c(c, d);
      }
      throw Error([B("nth not supported on this type "), B(Ea(Da(c)))].join(""));
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
}(), Q = function() {
  function c(c, d, e) {
    return null != c ? c && (c.l & 256 || c.Ob) ? c.P(null, d, e) : c instanceof Array ? d < c.length ? c[d] : e : "string" === typeof c ? d < c.length ? c[d] : e : x(Ra, c) ? Sa.d(c, d, e) : y ? e : null : e;
  }
  function d(c, d) {
    return null == c ? null : c && (c.l & 256 || c.Ob) ? c.O(null, d) : c instanceof Array ? d < c.length ? c[d] : null : "string" === typeof c ? d < c.length ? c[d] : null : x(Ra, c) ? Sa.c(c, d) : null;
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
    return null != c ? Ua(c, d, e) : Wb.c ? Wb.c([d], [e]) : Wb.call(null, [d], [e]);
  }
  var d = null, e = function() {
    function c(d, f, n, p) {
      var s = null;
      3 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, n, s);
    }
    function e(c, f, h, p) {
      for (;;) {
        if (c = d.d(c, f, h), w(p)) {
          f = I(p), h = I(L(p)), p = L(L(p));
        } else {
          return c;
        }
      }
    }
    c.m = 3;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var p = I(c);
      c = J(c);
      return e(d, f, p, c);
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
}(), Xb = function() {
  function c(c, d) {
    return null == c ? null : Wa(c, d);
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      for (;;) {
        if (null == c) {
          return null;
        }
        c = d.c(c, f);
        if (w(h)) {
          f = I(h), h = L(h);
        } else {
          return c;
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
function Yb(c) {
  var d = "function" == t(c);
  return d ? d : c ? w(w(null) ? null : c.bc) ? !0 : c.Ib ? !1 : x(Ga, c) : x(Ga, c);
}
var $b = function Zb(d, e) {
  return Yb(d) && !(d ? d.l & 262144 || d.Ac || (d.l ? 0 : x(hb, d)) : x(hb, d)) ? Zb(function() {
    "undefined" === typeof ua && (ua = function(d, e, k, l) {
      this.meta = d;
      this.ab = e;
      this.qc = k;
      this.kc = l;
      this.A = 0;
      this.l = 393217;
    }, ua.Ub = !0, ua.Tb = "cljs.core/t5991", ua.ic = function(d) {
      return D(d, "cljs.core/t5991");
    }, ua.prototype.call = function() {
      function d(f, l) {
        f = this;
        var n = null;
        1 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 1), 0));
        return e.call(this, f, n);
      }
      function e(d, f) {
        return S.c ? S.c(d.ab, f) : S.call(null, d.ab, f);
      }
      d.m = 1;
      d.j = function(d) {
        var f = I(d);
        d = J(d);
        return e(f, d);
      };
      d.i = e;
      return d;
    }(), ua.prototype.apply = function(d, e) {
      return this.call.apply(this, [this].concat(Fa(e)));
    }, ua.prototype.c = function() {
      function d(f) {
        var l = null;
        0 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, l);
      }
      function e(d) {
        return S.c ? S.c(self__.ab, d) : S.call(null, self__.ab, d);
      }
      d.m = 0;
      d.j = function(d) {
        d = G(d);
        return e(d);
      };
      d.i = e;
      return d;
    }(), ua.prototype.bc = !0, ua.prototype.L = function() {
      return this.kc;
    }, ua.prototype.N = function(d, e) {
      return new ua(this.meta, this.ab, this.qc, e);
    });
    return new ua(e, d, Zb, null);
  }(), e) : null == d ? null : ib(d, e);
};
function ac(c) {
  var d = null != c;
  return(d ? c ? c.l & 131072 || c.fc || (c.l ? 0 : x(fb, c)) : x(fb, c) : d) ? gb(c) : null;
}
var bc = function() {
  function c(c, d) {
    return null == c ? null : bb(c, d);
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      for (;;) {
        if (null == c) {
          return null;
        }
        c = d.c(c, f);
        if (w(h)) {
          f = I(h), h = L(h);
        } else {
          return c;
        }
      }
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
}(), cc = {}, dc = 0;
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
            255 < dc && (cc = {}, dc = 0);
            var d = cc[c];
            "number" !== typeof d && (d = ma(c), cc[c] = d, dc += 1);
            c = d;
          } else {
            c = null == c ? 0 : y ? mb(c) : null;
          }
        }
      }
    }
  }
  return c;
}
function ec(c) {
  return c ? c.l & 16777216 || c.xc ? !0 : c.l ? !1 : x(pb, c) : x(pb, c);
}
function fc(c) {
  return null == c ? !1 : c ? c.l & 1024 || c.vc ? !0 : c.l ? !1 : x(Va, c) : x(Va, c);
}
function gc(c) {
  return c ? c.l & 16384 || c.zc ? !0 : c.l ? !1 : x(cb, c) : x(cb, c);
}
function hc(c) {
  return c ? c.A & 512 || c.rc ? !0 : !1 : !1;
}
function ic(c) {
  var d = [];
  pa(c, function(c, f) {
    return d.push(f);
  });
  return d;
}
function jc(c, d, e, f, h) {
  for (;0 !== h;) {
    e[f] = c[d], f += 1, h -= 1, d += 1;
  }
}
var kc = {};
function lc(c) {
  return null == c ? !1 : c ? c.l & 64 || c.Wa ? !0 : c.l ? !1 : x(Na, c) : x(Na, c);
}
function mc(c) {
  return w(c) ? !0 : !1;
}
function nc(c, d) {
  return Q.d(c, d, kc) === kc ? !1 : !0;
}
function Ib(c, d) {
  if (c === d) {
    return 0;
  }
  if (null == c) {
    return-1;
  }
  if (null == d) {
    return 1;
  }
  if (Da(c) === Da(d)) {
    return c && (c.A & 2048 || c.cb) ? c.eb(null, d) : c > d ? 1 : c < d ? -1 : 0;
  }
  if (y) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var oc = function() {
  function c(c, d, e, l) {
    for (;;) {
      var n = Ib(P.c(c, l), P.c(d, l));
      if (0 === n && l + 1 < e) {
        l += 1;
      } else {
        return n;
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
}(), pc = function() {
  function c(c, d, e) {
    for (e = G(e);;) {
      if (e) {
        d = c.c ? c.c(d, I(e)) : c.call(null, d, I(e)), e = L(e);
      } else {
        return d;
      }
    }
  }
  function d(c, d) {
    var e = G(d);
    return e ? U.d ? U.d(c, I(e), L(e)) : U.call(null, c, I(e), L(e)) : c.q ? c.q() : c.call(null);
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
    return e && (e.l & 524288 || e.hc) ? e.aa(null, c, d) : e instanceof Array ? Ob.d(e, c, d) : "string" === typeof e ? Ob.d(e, c, d) : x(jb, e) ? kb.d(e, c, d) : y ? pc.d(c, d, e) : null;
  }
  function d(c, d) {
    return d && (d.l & 524288 || d.hc) ? d.$(null, c) : d instanceof Array ? Ob.c(d, c) : "string" === typeof d ? Ob.c(d, c) : x(jb, d) ? kb.c(d, c) : y ? pc.c(c, d) : null;
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
function qc(c) {
  return 0 <= c ? Math.floor.e ? Math.floor.e(c) : Math.floor.call(null, c) : Math.ceil.e ? Math.ceil.e(c) : Math.ceil.call(null, c);
}
function rc(c, d) {
  return(c % d + d) % d;
}
var sc = function() {
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
function tc(c) {
  return qc(sc.e(c));
}
function uc(c) {
  c -= c >> 1 & 1431655765;
  c = (c & 858993459) + (c >> 2 & 858993459);
  return 16843009 * (c + (c >> 4) & 252645135) >> 24;
}
function vc(c, d) {
  for (var e = d, f = G(c);;) {
    if (f && 0 < e) {
      e -= 1, f = L(f);
    } else {
      return f;
    }
  }
}
var B = function() {
  function c(c) {
    return null == c ? "" : c.toString();
  }
  var d = null, e = function() {
    function c(d, f) {
      var n = null;
      1 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, d, n);
    }
    function e(c, f) {
      for (var h = new ta(d.e(c)), p = f;;) {
        if (w(p)) {
          h = h.append(d.e(I(p))), p = L(p);
        } else {
          return h.toString();
        }
      }
    }
    c.m = 1;
    c.j = function(c) {
      var d = I(c);
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
function Sb(c, d) {
  return mc(ec(d) ? function() {
    for (var e = G(c), f = G(d);;) {
      if (null == e) {
        return null == f;
      }
      if (null == f) {
        return!1;
      }
      if (Hb.c(I(e), I(f))) {
        e = L(e), f = L(f);
      } else {
        return y ? !1 : null;
      }
    }
  }() : null);
}
function Lb(c, d) {
  return c ^ d + 2654435769 + (c << 6) + (c >> 2);
}
function Rb(c) {
  if (G(c)) {
    var d = E(I(c));
    for (c = L(c);;) {
      if (null == c) {
        return d;
      }
      d = Lb(d, E(I(c)));
      c = L(c);
    }
  } else {
    return 0;
  }
}
function wc(c) {
  var d = 0;
  for (c = G(c);;) {
    if (c) {
      var e = I(c), d = (d + (E(xc.e ? xc.e(e) : xc.call(null, e)) ^ E(yc.e ? yc.e(e) : yc.call(null, e)))) % 4503599627370496;
      c = L(c);
    } else {
      return d;
    }
  }
}
function zc(c, d, e, f, h) {
  this.meta = c;
  this.first = d;
  this.Ba = e;
  this.count = f;
  this.n = h;
  this.A = 0;
  this.l = 65937646;
}
m = zc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.Z = function() {
  return 1 === this.count ? null : this.Ba;
};
m.K = function(c, d) {
  return new zc(this.meta, d, this, this.count + 1, null);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
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
  return Sb(this, d);
};
m.N = function(c, d) {
  return new zc(d, this.first, this.Ba, this.count, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return K;
};
function Ac(c) {
  this.meta = c;
  this.A = 0;
  this.l = 65937614;
}
m = Ac.prototype;
m.H = function() {
  return 0;
};
m.Z = function() {
  return null;
};
m.K = function(c, d) {
  return new zc(this.meta, d, null, 1, null);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
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
  return Sb(this, d);
};
m.N = function(c, d) {
  return new Ac(d);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return this;
};
var K = new Ac(null), Bc = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    var d;
    if (c instanceof Mb && 0 === c.s) {
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
function Cc(c, d, e, f) {
  this.meta = c;
  this.first = d;
  this.Ba = e;
  this.n = f;
  this.A = 0;
  this.l = 65929452;
}
m = Cc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.Z = function() {
  return null == this.Ba ? null : G(this.Ba);
};
m.K = function(c, d) {
  return new Cc(null, d, this, this.n);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
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
  return Sb(this, d);
};
m.N = function(c, d) {
  return new Cc(d, this.first, this.Ba, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return $b(K, this.meta);
};
function N(c, d) {
  var e = null == d;
  return(e ? e : d && (d.l & 64 || d.Wa)) ? new Cc(null, c, d, null) : new Cc(null, c, G(d), null);
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
  return D(d, [B(":"), B(this.Fa)].join(""));
};
m.H = function() {
  null == this.Ka && (this.Ka = Lb(E(this.ha), E(this.name)) + 2654435769);
  return this.Ka;
};
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Q.c(e, this);
      case 3:
        return Q.d(e, this, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return Q.c(c, this);
};
m.c = function(c, d) {
  return Q.d(c, this, d);
};
m.D = function(c, d) {
  return d instanceof V ? this.Fa === d.Fa : !1;
};
m.toString = function() {
  return[B(":"), B(this.Fa)].join("");
};
function W(c, d) {
  return c === d ? !0 : c instanceof V && d instanceof V ? c.Fa === d.Fa : !1;
}
var Ec = function() {
  function c(c, d) {
    return new V(c, d, [B(w(c) ? [B(c), B("/")].join("") : null), B(d)].join(""), null);
  }
  function d(c) {
    if (c instanceof V) {
      return c;
    }
    if (c instanceof Kb) {
      var d;
      if (c && (c.A & 4096 || c.gc)) {
        d = c.ha;
      } else {
        throw Error([B("Doesn't support namespace: "), B(c)].join(""));
      }
      return new V(d, Dc.e ? Dc.e(c) : Dc.call(null, c), c.Ia, null);
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
function Fc(c, d, e, f) {
  this.meta = c;
  this.Ta = d;
  this.J = e;
  this.n = f;
  this.A = 0;
  this.l = 32374988;
}
m = Fc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.Z = function() {
  ob(this);
  return null == this.J ? null : L(this.J);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
function Gc(c) {
  null != c.Ta && (c.J = c.Ta.q ? c.Ta.q() : c.Ta.call(null), c.Ta = null);
  return c.J;
}
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
};
m.M = function() {
  Gc(this);
  if (null == this.J) {
    return null;
  }
  for (var c = this.J;;) {
    if (c instanceof Fc) {
      c = Gc(c);
    } else {
      return this.J = c, G(this.J);
    }
  }
};
m.W = function() {
  ob(this);
  return null == this.J ? null : I(this.J);
};
m.ia = function() {
  ob(this);
  return null != this.J ? J(this.J) : K;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new Fc(d, this.Ta, this.J, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return $b(K, this.meta);
};
function Hc(c, d) {
  this.mb = c;
  this.end = d;
  this.A = 0;
  this.l = 2;
}
Hc.prototype.Q = function() {
  return this.end;
};
Hc.prototype.add = function(c) {
  this.mb[this.end] = c;
  return this.end += 1;
};
Hc.prototype.la = function() {
  var c = new Ic(this.mb, 0, this.end);
  this.mb = null;
  return c;
};
function Ic(c, d, e) {
  this.f = c;
  this.off = d;
  this.end = e;
  this.A = 0;
  this.l = 524306;
}
m = Ic.prototype;
m.$ = function(c, d) {
  return Ob.o(this.f, d, this.f[this.off], this.off + 1);
};
m.aa = function(c, d, e) {
  return Ob.o(this.f, d, e, this.off);
};
m.Mb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ic(this.f, this.off + 1, this.end);
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
var Jc = function() {
  function c(c, d, e) {
    return new Ic(c, d, e);
  }
  function d(c, d) {
    return new Ic(c, d, c.length);
  }
  function e(c) {
    return new Ic(c, 0, c.length);
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
function Kc(c, d, e, f) {
  this.la = c;
  this.wa = d;
  this.meta = e;
  this.n = f;
  this.l = 31850732;
  this.A = 1536;
}
m = Kc.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.Z = function() {
  if (1 < Ia(this.la)) {
    return new Kc(zb(this.la), this.wa, this.meta, null);
  }
  var c = ob(this.wa);
  return null == c ? null : c;
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return C.c(this.la, 0);
};
m.ia = function() {
  return 1 < Ia(this.la) ? new Kc(zb(this.la), this.wa, this.meta, null) : null == this.wa ? K : this.wa;
};
m.ob = function() {
  return null == this.wa ? null : this.wa;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new Kc(this.la, this.wa, d, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return $b(K, this.meta);
};
m.pb = function() {
  return this.la;
};
m.qb = function() {
  return null == this.wa ? K : this.wa;
};
function Lc(c, d) {
  return 0 === Ia(c) ? d : new Kc(c, d, null, null);
}
function Mc(c) {
  for (var d = [];;) {
    if (G(c)) {
      d.push(I(c)), c = L(c);
    } else {
      return d;
    }
  }
}
function Nc(c, d) {
  if (Pb(c)) {
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
var Pc = function Oc(d) {
  return null == d ? null : null == L(d) ? G(I(d)) : y ? N(I(d), Oc(L(d))) : null;
}, Qc = function() {
  function c(c, d) {
    return new Fc(null, function() {
      var e = G(c);
      return e ? hc(e) ? Lc(Ab(e), f.c(Bb(e), d)) : N(I(e), f.c(J(e), d)) : d;
    }, null, null);
  }
  function d(c) {
    return new Fc(null, function() {
      return c;
    }, null, null);
  }
  function e() {
    return new Fc(null, function() {
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
        return new Fc(null, function() {
          var e = G(c);
          return e ? hc(e) ? Lc(Ab(e), u(Bb(e), d)) : N(I(e), u(J(e), d)) : w(d) ? u(I(d), L(d)) : null;
        }, null, null);
      }(f.c(c, e), h);
    }
    c.m = 2;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = J(c);
      return d(e, f, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, n) {
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
}(), Rc = function() {
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
      return N(c, N(e, N(f, N(h, Pc(k)))));
    }
    c.m = 4;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var q = I(c);
      c = J(c);
      return d(e, f, h, q, c);
    };
    c.i = d;
    return c;
  }(), e = function(e, k, l, n, p) {
    switch(arguments.length) {
      case 1:
        return G(e);
      case 2:
        return N(e, k);
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, n);
      default:
        return f.i(e, k, l, n, M(arguments, 4));
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
function Sc(c) {
  return tb(c);
}
function Tc(c) {
  return vb(c);
}
function Uc(c, d, e) {
  return wb(c, d, e);
}
function Vc(c, d) {
  return xb(c, d);
}
function Wc(c, d, e) {
  var f = G(e);
  if (0 === d) {
    return c.q ? c.q() : c.call(null);
  }
  e = Oa(f);
  var h = Pa(f);
  if (1 === d) {
    return c.e ? c.e(e) : c.e ? c.e(e) : c.call(null, e);
  }
  var f = Oa(h), k = Pa(h);
  if (2 === d) {
    return c.c ? c.c(e, f) : c.c ? c.c(e, f) : c.call(null, e, f);
  }
  var h = Oa(k), l = Pa(k);
  if (3 === d) {
    return c.d ? c.d(e, f, h) : c.d ? c.d(e, f, h) : c.call(null, e, f, h);
  }
  var k = Oa(l), n = Pa(l);
  if (4 === d) {
    return c.o ? c.o(e, f, h, k) : c.o ? c.o(e, f, h, k) : c.call(null, e, f, h, k);
  }
  l = Oa(n);
  n = Pa(n);
  if (5 === d) {
    return c.I ? c.I(e, f, h, k, l) : c.I ? c.I(e, f, h, k, l) : c.call(null, e, f, h, k, l);
  }
  c = Oa(n);
  var p = Pa(n);
  if (6 === d) {
    return c.ra ? c.ra(e, f, h, k, l, c) : c.ra ? c.ra(e, f, h, k, l, c) : c.call(null, e, f, h, k, l, c);
  }
  var n = Oa(p), s = Pa(p);
  if (7 === d) {
    return c.Sa ? c.Sa(e, f, h, k, l, c, n) : c.Sa ? c.Sa(e, f, h, k, l, c, n) : c.call(null, e, f, h, k, l, c, n);
  }
  var p = Oa(s), q = Pa(s);
  if (8 === d) {
    return c.Cb ? c.Cb(e, f, h, k, l, c, n, p) : c.Cb ? c.Cb(e, f, h, k, l, c, n, p) : c.call(null, e, f, h, k, l, c, n, p);
  }
  var s = Oa(q), u = Pa(q);
  if (9 === d) {
    return c.Db ? c.Db(e, f, h, k, l, c, n, p, s) : c.Db ? c.Db(e, f, h, k, l, c, n, p, s) : c.call(null, e, f, h, k, l, c, n, p, s);
  }
  var q = Oa(u), z = Pa(u);
  if (10 === d) {
    return c.rb ? c.rb(e, f, h, k, l, c, n, p, s, q) : c.rb ? c.rb(e, f, h, k, l, c, n, p, s, q) : c.call(null, e, f, h, k, l, c, n, p, s, q);
  }
  var u = Oa(z), F = Pa(z);
  if (11 === d) {
    return c.sb ? c.sb(e, f, h, k, l, c, n, p, s, q, u) : c.sb ? c.sb(e, f, h, k, l, c, n, p, s, q, u) : c.call(null, e, f, h, k, l, c, n, p, s, q, u);
  }
  var z = Oa(F), H = Pa(F);
  if (12 === d) {
    return c.tb ? c.tb(e, f, h, k, l, c, n, p, s, q, u, z) : c.tb ? c.tb(e, f, h, k, l, c, n, p, s, q, u, z) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z);
  }
  var F = Oa(H), T = Pa(H);
  if (13 === d) {
    return c.ub ? c.ub(e, f, h, k, l, c, n, p, s, q, u, z, F) : c.ub ? c.ub(e, f, h, k, l, c, n, p, s, q, u, z, F) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F);
  }
  var H = Oa(T), fa = Pa(T);
  if (14 === d) {
    return c.vb ? c.vb(e, f, h, k, l, c, n, p, s, q, u, z, F, H) : c.vb ? c.vb(e, f, h, k, l, c, n, p, s, q, u, z, F, H) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H);
  }
  var T = Oa(fa), qa = Pa(fa);
  if (15 === d) {
    return c.wb ? c.wb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T) : c.wb ? c.wb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H, T);
  }
  var fa = Oa(qa), $a = Pa(qa);
  if (16 === d) {
    return c.xb ? c.xb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa) : c.xb ? c.xb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa);
  }
  var qa = Oa($a), Fb = Pa($a);
  if (17 === d) {
    return c.yb ? c.yb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa) : c.yb ? c.yb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa);
  }
  var $a = Oa(Fb), Dd = Pa(Fb);
  if (18 === d) {
    return c.zb ? c.zb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a) : c.zb ? c.zb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a);
  }
  Fb = Oa(Dd);
  Dd = Pa(Dd);
  if (19 === d) {
    return c.Ab ? c.Ab(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a, Fb) : c.Ab ? c.Ab(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a, Fb) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a, Fb);
  }
  var lf = Oa(Dd);
  Pa(Dd);
  if (20 === d) {
    return c.Bb ? c.Bb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a, Fb, lf) : c.Bb ? c.Bb(e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a, Fb, lf) : c.call(null, e, f, h, k, l, c, n, p, s, q, u, z, F, H, T, fa, qa, $a, Fb, lf);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function c(c, d, e, f, h) {
    d = Rc.o(d, e, f, h);
    e = c.m;
    return c.j ? (f = Nc(d, e + 1), f <= e ? Wc(c, f, d) : c.j(d)) : c.apply(c, Mc(d));
  }
  function d(c, d, e, f) {
    d = Rc.d(d, e, f);
    e = c.m;
    return c.j ? (f = Nc(d, e + 1), f <= e ? Wc(c, f, d) : c.j(d)) : c.apply(c, Mc(d));
  }
  function e(c, d, e) {
    d = Rc.c(d, e);
    e = c.m;
    if (c.j) {
      var f = Nc(d, e + 1);
      return f <= e ? Wc(c, f, d) : c.j(d);
    }
    return c.apply(c, Mc(d));
  }
  function f(c, d) {
    var e = c.m;
    if (c.j) {
      var f = Nc(d, e + 1);
      return f <= e ? Wc(c, f, d) : c.j(d);
    }
    return c.apply(c, Mc(d));
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, F) {
      var H = null;
      5 < arguments.length && (H = M(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, H);
    }
    function d(c, e, f, h, k, l) {
      e = N(e, N(f, N(h, N(k, Pc(l)))));
      f = c.m;
      return c.j ? (h = Nc(e, f + 1), h <= f ? Wc(c, h, e) : c.j(e)) : c.apply(c, Mc(e));
    }
    c.m = 5;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var k = I(c);
      c = L(c);
      var l = I(c);
      c = J(c);
      return d(e, f, h, k, l, c);
    };
    c.i = d;
    return c;
  }(), h = function(h, n, p, s, q, u) {
    switch(arguments.length) {
      case 2:
        return f.call(this, h, n);
      case 3:
        return e.call(this, h, n, p);
      case 4:
        return d.call(this, h, n, p, s);
      case 5:
        return c.call(this, h, n, p, s, q);
      default:
        return k.i(h, n, p, s, q, M(arguments, 5));
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
function Xc(c) {
  return G(c) ? c : null;
}
function Yc(c, d) {
  for (;;) {
    if (null == G(d)) {
      return!0;
    }
    if (w(c.e ? c.e(I(d)) : c.call(null, I(d)))) {
      var e = c, f = L(d);
      c = e;
      d = f;
    } else {
      return y ? !1 : null;
    }
  }
}
function Zc(c) {
  for (var d = $c;;) {
    if (G(c)) {
      var e = d.e ? d.e(I(c)) : d.call(null, I(c));
      if (w(e)) {
        return e;
      }
      c = L(c);
    } else {
      return null;
    }
  }
}
function ad(c) {
  if ("number" === typeof c && !isNaN(c) && Infinity !== c && parseFloat(c) === parseInt(c, 10)) {
    return 0 === (c & 1);
  }
  throw Error([B("Argument must be an integer: "), B(c)].join(""));
}
function $c(c) {
  return c;
}
function bd(c) {
  return function() {
    var d = null, e = function() {
      function d(c, f, n) {
        var p = null;
        2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
        return e.call(this, c, f, p);
      }
      function e(d, f, h) {
        return Ca(S.o(c, d, f, h));
      }
      d.m = 2;
      d.j = function(c) {
        var d = I(c);
        c = L(c);
        var f = I(c);
        c = J(c);
        return e(d, f, c);
      };
      d.i = e;
      return d;
    }(), d = function(d, h, k) {
      switch(arguments.length) {
        case 0:
          return Ca(c.q ? c.q() : c.call(null));
        case 1:
          return Ca(c.e ? c.e(d) : c.call(null, d));
        case 2:
          return Ca(c.c ? c.c(d, h) : c.call(null, d, h));
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
var cd = function() {
  function c(c, d, e, f) {
    return function() {
      function h(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, d);
      }
      function q(h) {
        return S.I(c, d, e, f, h);
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
        return S.o(c, d, e, f);
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
        return S.d(c, d, e);
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
      var z = null;
      4 < arguments.length && (z = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, z);
    }
    function d(c, e, f, h, k) {
      return function() {
        function d(c) {
          var e = null;
          0 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 0), 0));
          return l.call(this, e);
        }
        function l(d) {
          return S.I(c, e, f, h, Qc.c(k, d));
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
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var k = I(c);
      c = J(c);
      return d(e, f, h, k, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, n, p, s) {
    switch(arguments.length) {
      case 1:
        return f;
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, n);
      case 4:
        return c.call(this, f, l, n, p);
      default:
        return h.i(f, l, n, p, M(arguments, 4));
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
}(), dd = function() {
  function c(c, d, e, h) {
    return new Fc(null, function() {
      var s = G(d), q = G(e), u = G(h);
      return s && q && u ? N(c.d ? c.d(I(s), I(q), I(u)) : c.call(null, I(s), I(q), I(u)), f.o(c, J(s), J(q), J(u))) : null;
    }, null, null);
  }
  function d(c, d, e) {
    return new Fc(null, function() {
      var h = G(d), s = G(e);
      return h && s ? N(c.c ? c.c(I(h), I(s)) : c.call(null, I(h), I(s)), f.d(c, J(h), J(s))) : null;
    }, null, null);
  }
  function e(c, d) {
    return new Fc(null, function() {
      var e = G(d);
      if (e) {
        if (hc(e)) {
          for (var h = Ab(e), s = O(h), q = new Hc(Array(s), 0), u = 0;;) {
            if (u < s) {
              var z = c.e ? c.e(C.c(h, u)) : c.call(null, C.c(h, u));
              q.add(z);
              u += 1;
            } else {
              break;
            }
          }
          return Lc(q.la(), f.c(c, Bb(e)));
        }
        return N(c.e ? c.e(I(e)) : c.call(null, I(e)), f.c(c, J(e)));
      }
      return null;
    }, null, null);
  }
  var f = null, h = function() {
    function c(e, f, h, k, u) {
      var z = null;
      4 < arguments.length && (z = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, z);
    }
    function d(c, e, h, k, l) {
      return f.c(function(d) {
        return S.c(c, d);
      }, function F(c) {
        return new Fc(null, function() {
          var d = f.c(G, c);
          return Yc($c, d) ? N(f.c(I, d), F(f.c(J, d))) : null;
        }, null, null);
      }(Ub.i(l, k, M([h, e], 0))));
    }
    c.m = 4;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var k = I(c);
      c = J(c);
      return d(e, f, h, k, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, n, p, s) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, n);
      case 4:
        return c.call(this, f, l, n, p);
      default:
        return h.i(f, l, n, p, M(arguments, 4));
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
}(), fd = function ed(d, e) {
  return new Fc(null, function() {
    if (0 < d) {
      var f = G(e);
      return f ? N(I(f), ed(d - 1, J(f))) : null;
    }
    return null;
  }, null, null);
};
function gd(c, d) {
  return new Fc(null, function() {
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
var hd = function() {
  function c(c, d) {
    return fd(c, e.e(d));
  }
  function d(c) {
    return new Fc(null, function() {
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
}(), jd = function id(d, e) {
  return N(e, new Fc(null, function() {
    return id(d, d.e ? d.e(e) : d.call(null, e));
  }, null, null));
}, kd = function() {
  function c(c, e) {
    return new Fc(null, function() {
      var k = G(c), l = G(e);
      return k && l ? N(I(k), N(I(l), d.c(J(k), J(l)))) : null;
    }, null, null);
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      return new Fc(null, function() {
        var e = dd.c(G, Ub.i(h, f, M([c], 0)));
        return Yc($c, e) ? Qc.c(dd.c(I, e), S.c(d, dd.c(J, e))) : null;
      }, null, null);
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
function ld(c) {
  return function e(c, h) {
    return new Fc(null, function() {
      var k = G(c);
      return k ? N(I(k), e(J(k), h)) : G(h) ? e(I(h), J(h)) : null;
    }, null, null);
  }(null, c);
}
var md = function() {
  function c(c, d) {
    return ld(dd.c(c, d));
  }
  var d = null, e = function() {
    function c(e, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, p);
    }
    function d(c, e, f) {
      return ld(S.o(dd, c, e, f));
    }
    c.m = 2;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
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
}(), od = function nd(d, e) {
  return new Fc(null, function() {
    var f = G(e);
    if (f) {
      if (hc(f)) {
        for (var h = Ab(f), k = O(h), l = new Hc(Array(k), 0), n = 0;;) {
          if (n < k) {
            if (w(d.e ? d.e(C.c(h, n)) : d.call(null, C.c(h, n)))) {
              var p = C.c(h, n);
              l.add(p);
            }
            n += 1;
          } else {
            break;
          }
        }
        return Lc(l.la(), nd(d, Bb(f)));
      }
      h = I(f);
      f = J(f);
      return w(d.e ? d.e(h) : d.call(null, h)) ? N(h, nd(d, f)) : nd(d, f);
    }
    return null;
  }, null, null);
};
function pd(c, d) {
  return null != c ? c && (c.A & 4 || c.tc) ? Tc(U.d(ub, tb(c), d)) : U.d(La, c, d) : U.d(Ub, K, d);
}
var qd = function() {
  function c(c, d, e, n) {
    return new Fc(null, function() {
      var p = G(n);
      if (p) {
        var s = fd(c, p);
        return c === O(s) ? N(s, f.o(c, d, e, gd(d, p))) : La(K, fd(c, Qc.c(s, e)));
      }
      return null;
    }, null, null);
  }
  function d(c, d, e) {
    return new Fc(null, function() {
      var n = G(e);
      if (n) {
        var p = fd(c, n);
        return c === O(p) ? N(p, f.d(c, d, gd(d, n))) : null;
      }
      return null;
    }, null, null);
  }
  function e(c, d) {
    return f.d(c, c, d);
  }
  var f = null, f = function(f, k, l, n) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.o = c;
  return f;
}(), rd = function() {
  function c(c, d, e) {
    var l = kc;
    for (d = G(d);;) {
      if (d) {
        var n = c;
        if (n ? n.l & 256 || n.Ob || (n.l ? 0 : x(Ra, n)) : x(Ra, n)) {
          c = Q.d(c, I(d), l);
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
}(), td = function sd(d, e, f) {
  var h = P.d(e, 0, null);
  return(e = vc(e, 1)) ? R.d(d, h, sd(Q.c(d, h), e, f)) : R.d(d, h, f);
}, ud = function() {
  function c(c, d, e, f, k, u) {
    var z = P.d(d, 0, null);
    return(d = vc(d, 1)) ? R.d(c, z, h.ra(Q.c(c, z), d, e, f, k, u)) : R.d(c, z, e.o ? e.o(Q.c(c, z), f, k, u) : e.call(null, Q.c(c, z), f, k, u));
  }
  function d(c, d, e, f, k) {
    var u = P.d(d, 0, null);
    return(d = vc(d, 1)) ? R.d(c, u, h.I(Q.c(c, u), d, e, f, k)) : R.d(c, u, e.d ? e.d(Q.c(c, u), f, k) : e.call(null, Q.c(c, u), f, k));
  }
  function e(c, d, e, f) {
    var k = P.d(d, 0, null);
    return(d = vc(d, 1)) ? R.d(c, k, h.o(Q.c(c, k), d, e, f)) : R.d(c, k, e.c ? e.c(Q.c(c, k), f) : e.call(null, Q.c(c, k), f));
  }
  function f(c, d, e) {
    var f = P.d(d, 0, null);
    return(d = vc(d, 1)) ? R.d(c, f, h.d(Q.c(c, f), d, e)) : R.d(c, f, e.e ? e.e(Q.c(c, f)) : e.call(null, Q.c(c, f)));
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, F, H) {
      var T = null;
      6 < arguments.length && (T = M(Array.prototype.slice.call(arguments, 6), 0));
      return d.call(this, e, f, h, k, l, F, T);
    }
    function d(c, e, f, k, l, n, H) {
      var T = P.d(e, 0, null);
      return(e = vc(e, 1)) ? R.d(c, T, S.i(h, Q.c(c, T), e, f, k, M([l, n, H], 0))) : R.d(c, T, S.i(f, Q.c(c, T), k, l, n, M([H], 0)));
    }
    c.m = 6;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var k = I(c);
      c = L(c);
      var l = I(c);
      c = L(c);
      var H = I(c);
      c = J(c);
      return d(e, f, h, k, l, H, c);
    };
    c.i = d;
    return c;
  }(), h = function(h, n, p, s, q, u, z) {
    switch(arguments.length) {
      case 3:
        return f.call(this, h, n, p);
      case 4:
        return e.call(this, h, n, p, s);
      case 5:
        return d.call(this, h, n, p, s, q);
      case 6:
        return c.call(this, h, n, p, s, q, u);
      default:
        return k.i(h, n, p, s, q, u, M(arguments, 6));
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
function vd(c, d) {
  this.B = c;
  this.f = d;
}
function wd(c) {
  return new vd(c, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function xd(c) {
  c = c.k;
  return 32 > c ? 0 : c - 1 >>> 5 << 5;
}
function yd(c, d, e) {
  for (;;) {
    if (0 === d) {
      return e;
    }
    var f = wd(c);
    f.f[0] = e;
    e = f;
    d -= 5;
  }
}
var Ad = function zd(d, e, f, h) {
  var k = new vd(f.B, Fa(f.f)), l = d.k - 1 >>> e & 31;
  5 === e ? k.f[l] = h : (f = f.f[l], d = null != f ? zd(d, e - 5, f, h) : yd(null, e - 5, h), k.f[l] = d);
  return k;
};
function Bd(c, d) {
  throw Error([B("No item "), B(c), B(" in vector of length "), B(d)].join(""));
}
function Cd(c, d) {
  if (0 <= d && d < c.k) {
    if (d >= xd(c)) {
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
    return Bd(d, c.k);
  }
}
var Fd = function Ed(d, e, f, h, k) {
  var l = new vd(f.B, Fa(f.f));
  if (0 === e) {
    l.f[h & 31] = k;
  } else {
    var n = h >>> e & 31;
    d = Ed(d, e - 5, f.f[n], h, k);
    l.f[n] = d;
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
  return new Gd(this.k, this.shift, Hd.e ? Hd.e(this.root) : Hd.call(null, this.root), Id.e ? Id.e(this.tail) : Id.call(null, this.tail));
};
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.O = function(c, d) {
  return C.d(this, d, null);
};
m.P = function(c, d, e) {
  return C.d(this, d, e);
};
m.ya = function(c, d, e) {
  if (0 <= d && d < this.k) {
    return xd(this) <= d ? (c = Fa(this.tail), c[d & 31] = e, new X(this.meta, this.k, this.shift, this.root, c, null)) : new X(this.meta, this.k, this.shift, Fd(this, this.shift, this.root, d, e), this.tail, null);
  }
  if (d === this.k) {
    return La(this, e);
  }
  if (y) {
    throw Error([B("Index "), B(d), B(" out of bounds  [0,"), B(this.k), B("]")].join(""));
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
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return this.F(null, c);
};
m.c = function(c, d) {
  return this.pa(null, c, d);
};
m.K = function(c, d) {
  if (32 > this.k - xd(this)) {
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
  f ? (f = wd(null), f.f[0] = this.root, h = yd(null, this.shift, new vd(null, this.tail)), f.f[1] = h) : f = Ad(this, this.shift, this.root, new vd(null, this.tail));
  return new X(this.meta, this.k + 1, e, f, [d], null);
};
m.Eb = function() {
  return C.c(this, 0);
};
m.Fb = function() {
  return C.c(this, 1);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return Nb.c(this, d);
};
m.aa = function(c, d, e) {
  return Nb.d(this, d, e);
};
m.M = function() {
  return 0 === this.k ? null : 32 > this.k ? M.e(this.tail) : y ? Jd.d ? Jd.d(this, 0, 0) : Jd.call(null, this, 0, 0) : null;
};
m.Q = function() {
  return this.k;
};
m.Hb = function(c, d, e) {
  return Ua(this, d, e);
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new X(d, this.k, this.shift, this.root, this.tail, this.n);
};
m.L = function() {
  return this.meta;
};
m.F = function(c, d) {
  return Cd(this, d)[d & 31];
};
m.pa = function(c, d, e) {
  return 0 <= d && d < this.k ? C.c(this, d) : e;
};
m.U = function() {
  return $b(Kd, this.meta);
};
var Y = new vd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Kd = new X(null, 0, 5, Y, [], 0);
function Ld(c, d, e, f, h, k) {
  this.S = c;
  this.qa = d;
  this.s = e;
  this.off = f;
  this.meta = h;
  this.n = k;
  this.l = 32243948;
  this.A = 1536;
}
m = Ld.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.Z = function() {
  if (this.off + 1 < this.qa.length) {
    var c = Jd.o ? Jd.o(this.S, this.qa, this.s, this.off + 1) : Jd.call(null, this.S, this.qa, this.s, this.off + 1);
    return null == c ? null : c;
  }
  return Cb(this);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return Nb.c(Md.d ? Md.d(this.S, this.s + this.off, O(this.S)) : Md.call(null, this.S, this.s + this.off, O(this.S)), d);
};
m.aa = function(c, d, e) {
  return Nb.d(Md.d ? Md.d(this.S, this.s + this.off, O(this.S)) : Md.call(null, this.S, this.s + this.off, O(this.S)), d, e);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.qa[this.off];
};
m.ia = function() {
  if (this.off + 1 < this.qa.length) {
    var c = Jd.o ? Jd.o(this.S, this.qa, this.s, this.off + 1) : Jd.call(null, this.S, this.qa, this.s, this.off + 1);
    return null == c ? K : c;
  }
  return Bb(this);
};
m.ob = function() {
  var c = this.qa.length, c = this.s + c < Ia(this.S) ? Jd.d ? Jd.d(this.S, this.s + c, 0) : Jd.call(null, this.S, this.s + c, 0) : null;
  return null == c ? null : c;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return Jd.I ? Jd.I(this.S, this.qa, this.s, this.off, d) : Jd.call(null, this.S, this.qa, this.s, this.off, d);
};
m.U = function() {
  return $b(Kd, this.meta);
};
m.pb = function() {
  return Jc.c(this.qa, this.off);
};
m.qb = function() {
  var c = this.qa.length, c = this.s + c < Ia(this.S) ? Jd.d ? Jd.d(this.S, this.s + c, 0) : Jd.call(null, this.S, this.s + c, 0) : null;
  return null == c ? K : c;
};
var Jd = function() {
  function c(c, d, e, f, p) {
    return new Ld(c, d, e, f, p, null);
  }
  function d(c, d, e, f) {
    return new Ld(c, d, e, f, null, null);
  }
  function e(c, d, e) {
    return new Ld(c, Cd(c, d), d, e, null, null);
  }
  var f = null, f = function(f, k, l, n, p) {
    switch(arguments.length) {
      case 3:
        return e.call(this, f, k, l);
      case 4:
        return d.call(this, f, k, l, n);
      case 5:
        return c.call(this, f, k, l, n, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.d = e;
  f.o = d;
  f.I = c;
  return f;
}();
function Nd(c, d, e, f, h) {
  this.meta = c;
  this.v = d;
  this.start = e;
  this.end = f;
  this.n = h;
  this.A = 0;
  this.l = 32400159;
}
m = Nd.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.O = function(c, d) {
  return C.d(this, d, null);
};
m.P = function(c, d, e) {
  return C.d(this, d, e);
};
m.ya = function(c, d, e) {
  var f = this, h = f.start + d;
  return Od.I ? Od.I(f.meta, R.d(f.v, h, e), f.start, function() {
    var c = f.end, d = h + 1;
    return c > d ? c : d;
  }(), null) : Od.call(null, f.meta, R.d(f.v, h, e), f.start, function() {
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
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return this.F(null, c);
};
m.c = function(c, d) {
  return this.pa(null, c, d);
};
m.K = function(c, d) {
  return Od.I ? Od.I(this.meta, db(this.v, this.end, d), this.start, this.end + 1, null) : Od.call(null, this.meta, db(this.v, this.end, d), this.start, this.end + 1, null);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return Nb.c(this, d);
};
m.aa = function(c, d, e) {
  return Nb.d(this, d, e);
};
m.M = function() {
  var c = this;
  return function e(f) {
    return f === c.end ? null : N(C.c(c.v, f), new Fc(null, function() {
      return e(f + 1);
    }, null, null));
  }(c.start);
};
m.Q = function() {
  return this.end - this.start;
};
m.Hb = function(c, d, e) {
  return Ua(this, d, e);
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return Od.I ? Od.I(d, this.v, this.start, this.end, this.n) : Od.call(null, d, this.v, this.start, this.end, this.n);
};
m.L = function() {
  return this.meta;
};
m.F = function(c, d) {
  return 0 > d || this.end <= this.start + d ? Bd(d, this.end - this.start) : C.c(this.v, this.start + d);
};
m.pa = function(c, d, e) {
  return 0 > d || this.end <= this.start + d ? e : C.d(this.v, this.start + d, e);
};
m.U = function() {
  return $b(Kd, this.meta);
};
function Od(c, d, e, f, h) {
  for (;;) {
    if (d instanceof Nd) {
      e = d.start + e, f = d.start + f, d = d.v;
    } else {
      var k = O(d);
      if (0 > e || 0 > f || e > k || f > k) {
        throw Error("Index out of bounds");
      }
      return new Nd(c, d, e, f, h);
    }
  }
}
var Md = function() {
  function c(c, d, e) {
    return Od(null, c, d, e, null);
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
function Hd(c) {
  return new vd({}, Fa(c.f));
}
function Id(c) {
  var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  jc(c, 0, d, 0, c.length);
  return d;
}
var Qd = function Pd(d, e, f, h) {
  f = d.root.B === f.B ? f : new vd(d.root.B, Fa(f.f));
  var k = d.k - 1 >>> e & 31;
  if (5 === e) {
    d = h;
  } else {
    var l = f.f[k];
    d = null != l ? Pd(d, e - 5, l, h) : yd(d.root.B, e - 5, h);
  }
  f.f[k] = d;
  return f;
};
function Gd(c, d, e, f) {
  this.k = c;
  this.shift = d;
  this.root = e;
  this.tail = f;
  this.l = 275;
  this.A = 88;
}
m = Gd.prototype;
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
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.O = function(c, d) {
  return C.d(this, d, null);
};
m.P = function(c, d, e) {
  return C.d(this, d, e);
};
m.F = function(c, d) {
  if (this.root.B) {
    return Cd(this, d)[d & 31];
  }
  throw Error("nth after persistent!");
};
m.pa = function(c, d, e) {
  return 0 <= d && d < this.k ? C.c(this, d) : e;
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
      return xd(this) <= d ? f.tail[d & 31] = e : (c = function k(c, n) {
        var p = f.root.B === n.B ? n : new vd(f.root.B, Fa(n.f));
        if (0 === c) {
          p.f[d & 31] = e;
        } else {
          var s = d >>> c & 31, q = k(c - 5, p.f[s]);
          p.f[s] = q;
        }
        return p;
      }.call(null, f.shift, f.root), f.root = c), this;
    }
    if (d === f.k) {
      return ub(this, e);
    }
    if (y) {
      throw Error([B("Index "), B(d), B(" out of bounds for TransientVector of length"), B(f.k)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
m.Xa = function(c, d, e) {
  return yb(this, d, e);
};
m.Ma = function(c, d) {
  if (this.root.B) {
    if (32 > this.k - xd(this)) {
      this.tail[this.k & 31] = d;
    } else {
      var e = new vd(this.root.B, this.tail), f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[0] = d;
      this.tail = f;
      if (this.k >>> 5 > 1 << this.shift) {
        var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], h = this.shift + 5;
        f[0] = this.root;
        f[1] = yd(this.root.B, this.shift, e);
        this.root = new vd(this.root.B, f);
        this.shift = h;
      } else {
        this.root = Qd(this, this.shift, this.root, e);
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
    var c = this.k - xd(this), d = Array(c);
    jc(this.tail, 0, d, 0, c);
    return new X(null, this.k, this.shift, this.root, d, null);
  }
  throw Error("persistent! called twice");
};
function Rd() {
  this.A = 0;
  this.l = 2097152;
}
Rd.prototype.D = function() {
  return!1;
};
var Sd = new Rd;
function Td(c, d) {
  return mc(fc(d) ? O(c) === O(d) ? Yc($c, dd.c(function(c) {
    return Hb.c(Q.d(d, I(c), Sd), I(L(c)));
  }, c)) : null : null);
}
function Ud(c, d) {
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
      if (d instanceof Kb) {
        a: {
          f = e.length;
          h = d.Ia;
          for (k = 0;;) {
            if (f <= k) {
              e = -1;
              break a;
            }
            l = e[k];
            if (l instanceof Kb && h === l.Ia) {
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
                if (Hb.c(d, e[h])) {
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
function Vd(c, d, e) {
  this.f = c;
  this.s = d;
  this.fa = e;
  this.A = 0;
  this.l = 32374990;
}
m = Vd.prototype;
m.H = function() {
  return Rb(this);
};
m.Z = function() {
  return this.s < this.f.length - 2 ? new Vd(this.f, this.s + 2, this.fa) : null;
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
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
  return this.s < this.f.length - 2 ? new Vd(this.f, this.s + 2, this.fa) : K;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new Vd(this.f, this.s, d);
};
m.L = function() {
  return this.fa;
};
m.U = function() {
  return $b(K, this.fa);
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
  return new Wd({}, this.f.length, Fa(this.f));
};
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = wc(this);
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  c = Ud(this, d);
  return-1 === c ? e : this.f[c + 1];
};
m.ya = function(c, d, e) {
  c = Ud(this, d);
  if (-1 === c) {
    if (this.k < Xd) {
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
    return ib(Ua(pd(Yd, this), d, e), this.meta);
  }
  return e === this.f[c + 1] ? this : y ? (d = Fa(this.f), d[c + 1] = e, new v(this.meta, this.k, d, null)) : null;
};
m.nb = function(c, d) {
  return-1 !== Ud(this, d);
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
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.K = function(c, d) {
  return gc(d) ? Ua(this, C.c(d, 0), C.c(d, 1)) : U.d(La, this, d);
};
m.toString = function() {
  return Eb(this);
};
m.M = function() {
  return 0 <= this.f.length - 2 ? new Vd(this.f, 0, null) : null;
};
m.Q = function() {
  return this.k;
};
m.D = function(c, d) {
  return Td(this, d);
};
m.N = function(c, d) {
  return new v(d, this.k, this.f, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ib(Zd, this.meta);
};
m.La = function(c, d) {
  if (0 <= Ud(this, d)) {
    var e = this.f.length, f = e - 2;
    if (0 === f) {
      return Ja(this);
    }
    for (var f = Array(f), h = 0, k = 0;;) {
      if (h >= e) {
        return new v(this.meta, this.k - 1, f, null);
      }
      if (Hb.c(d, this.f[h])) {
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
var Zd = new v(null, 0, [], null), Xd = 8;
function $d(c) {
  for (var d = c.length, e = 0, f = tb(Zd);;) {
    if (e < d) {
      var h = e + 2, f = wb(f, c[e], c[e + 1]), e = h
    } else {
      return vb(f);
    }
  }
}
function Wd(c, d, e) {
  this.Oa = c;
  this.oa = d;
  this.f = e;
  this.A = 56;
  this.l = 258;
}
m = Wd.prototype;
m.Gb = function(c, d) {
  if (w(this.Oa)) {
    var e = Ud(this, d);
    0 <= e && (this.f[e] = this.f[this.oa - 2], this.f[e + 1] = this.f[this.oa - 1], e = this.f, e.pop(), e.pop(), this.oa -= 2);
    return this;
  }
  throw Error("dissoc! after persistent!");
};
m.Xa = function(c, d, e) {
  if (w(this.Oa)) {
    c = Ud(this, d);
    if (-1 === c) {
      return this.oa + 2 <= 2 * Xd ? (this.oa += 2, this.f.push(d), this.f.push(e), this) : Uc(ae.c ? ae.c(this.oa, this.f) : ae.call(null, this.oa, this.f), d, e);
    }
    e !== this.f[c + 1] && (this.f[c + 1] = e);
    return this;
  }
  throw Error("assoc! after persistent!");
};
m.Ma = function(c, d) {
  if (w(this.Oa)) {
    if (d ? d.l & 2048 || d.ec || (d.l ? 0 : x(Xa, d)) : x(Xa, d)) {
      return wb(this, xc.e ? xc.e(d) : xc.call(null, d), yc.e ? yc.e(d) : yc.call(null, d));
    }
    for (var e = G(d), f = this;;) {
      var h = I(e);
      if (w(h)) {
        e = L(e), f = wb(f, xc.e ? xc.e(h) : xc.call(null, h), yc.e ? yc.e(h) : yc.call(null, h));
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
    return this.Oa = !1, new v(null, qc((this.oa - this.oa % 2) / 2), this.f, null);
  }
  throw Error("persistent! called twice");
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  if (w(this.Oa)) {
    return c = Ud(this, d), -1 === c ? e : this.f[c + 1];
  }
  throw Error("lookup after persistent!");
};
m.Q = function() {
  if (w(this.Oa)) {
    return qc((this.oa - this.oa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function ae(c, d) {
  for (var e = tb(Yd), f = 0;;) {
    if (f < c) {
      e = wb(e, d[f], d[f + 1]), f += 2;
    } else {
      return e;
    }
  }
}
function be() {
  this.xa = !1;
}
function ce(c, d) {
  return c === d ? !0 : W(c, d) ? !0 : y ? Hb.c(c, d) : null;
}
var de = function() {
  function c(c, d, e, l, n) {
    c = Fa(c);
    c[d] = e;
    c[l] = n;
    return c;
  }
  function d(c, d, e) {
    c = Fa(c);
    c[d] = e;
    return c;
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, k);
      case 5:
        return c.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.d = d;
  e.I = c;
  return e;
}();
function ee(c, d) {
  var e = Array(c.length - 2);
  jc(c, 0, e, 0, 2 * d);
  jc(c, 2 * (d + 1), e, 2 * d, e.length - 2 * d);
  return e;
}
var fe = function() {
  function c(c, d, e, l, n, p) {
    c = c.Ea(d);
    c.f[e] = l;
    c.f[n] = p;
    return c;
  }
  function d(c, d, e, l) {
    c = c.Ea(d);
    c.f[e] = l;
    return c;
  }
  var e = null, e = function(e, h, k, l, n, p) {
    switch(arguments.length) {
      case 4:
        return d.call(this, e, h, k, l);
      case 6:
        return c.call(this, e, h, k, l, n, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = d;
  e.ra = c;
  return e;
}();
function ge(c, d, e) {
  this.B = c;
  this.C = d;
  this.f = e;
}
function he(c, d, e, f) {
  if (c.C === e) {
    return null;
  }
  c = c.Ea(d);
  d = c.f;
  var h = d.length;
  c.C ^= e;
  jc(d, 2 * (f + 1), d, 2 * f, h - 2 * (f + 1));
  d[h - 2] = null;
  d[h - 1] = null;
  return c;
}
m = ge.prototype;
m.ua = function(c, d, e, f, h, k) {
  var l = 1 << (e >>> d & 31), n = uc(this.C & l - 1);
  if (0 === (this.C & l)) {
    var p = uc(this.C);
    if (2 * p < this.f.length) {
      c = this.Ea(c);
      d = c.f;
      k.xa = !0;
      a: {
        for (e = 2 * (p - n), k = 2 * n + (e - 1), p = 2 * (n + 1) + (e - 1);;) {
          if (0 === e) {
            break a;
          }
          d[p] = d[k];
          p -= 1;
          e -= 1;
          k -= 1;
        }
      }
      d[2 * n] = f;
      d[2 * n + 1] = h;
      c.C |= l;
      return c;
    }
    if (16 <= p) {
      n = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      n[e >>> d & 31] = ie.ua(c, d + 5, e, f, h, k);
      for (h = f = 0;;) {
        if (32 > f) {
          0 !== (this.C >>> f & 1) && (n[f] = null != this.f[h] ? ie.ua(c, d + 5, E(this.f[h]), this.f[h], this.f[h + 1], k) : this.f[h + 1], h += 2), f += 1;
        } else {
          break;
        }
      }
      return new je(c, p + 1, n);
    }
    return y ? (d = Array(2 * (p + 4)), jc(this.f, 0, d, 0, 2 * n), d[2 * n] = f, d[2 * n + 1] = h, jc(this.f, 2 * n, d, 2 * (n + 1), 2 * (p - n)), k.xa = !0, c = this.Ea(c), c.f = d, c.C |= l, c) : null;
  }
  p = this.f[2 * n];
  l = this.f[2 * n + 1];
  return null == p ? (p = l.ua(c, d + 5, e, f, h, k), p === l ? this : fe.o(this, c, 2 * n + 1, p)) : ce(f, p) ? h === l ? this : fe.o(this, c, 2 * n + 1, h) : y ? (k.xa = !0, fe.ra(this, c, 2 * n, null, 2 * n + 1, ke.Sa ? ke.Sa(c, d + 5, p, l, e, f, h) : ke.call(null, c, d + 5, p, l, e, f, h))) : null;
};
m.Ya = function() {
  return le.e ? le.e(this.f) : le.call(null, this.f);
};
m.$a = function(c, d, e, f, h) {
  var k = 1 << (e >>> d & 31);
  if (0 === (this.C & k)) {
    return this;
  }
  var l = uc(this.C & k - 1), n = this.f[2 * l], p = this.f[2 * l + 1];
  return null == n ? (d = p.$a(c, d + 5, e, f, h), d === p ? this : null != d ? fe.o(this, c, 2 * l + 1, d) : this.C === k ? null : y ? he(this, c, k, l) : null) : ce(f, n) ? (h[0] = !0, he(this, c, k, l)) : y ? this : null;
};
m.Ea = function(c) {
  if (c === this.B) {
    return this;
  }
  var d = uc(this.C), e = Array(0 > d ? 4 : 2 * (d + 1));
  jc(this.f, 0, e, 0, 2 * d);
  return new ge(c, this.C, e);
};
m.Za = function(c, d, e) {
  var f = 1 << (d >>> c & 31);
  if (0 === (this.C & f)) {
    return this;
  }
  var h = uc(this.C & f - 1), k = this.f[2 * h], l = this.f[2 * h + 1];
  return null == k ? (c = l.Za(c + 5, d, e), c === l ? this : null != c ? new ge(null, this.C, de.d(this.f, 2 * h + 1, c)) : this.C === f ? null : y ? new ge(null, this.C ^ f, ee(this.f, h)) : null) : ce(e, k) ? new ge(null, this.C ^ f, ee(this.f, h)) : y ? this : null;
};
m.ta = function(c, d, e, f, h) {
  var k = 1 << (d >>> c & 31), l = uc(this.C & k - 1);
  if (0 === (this.C & k)) {
    var n = uc(this.C);
    if (16 <= n) {
      l = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      l[d >>> c & 31] = ie.ta(c + 5, d, e, f, h);
      for (f = e = 0;;) {
        if (32 > e) {
          0 !== (this.C >>> e & 1) && (l[e] = null != this.f[f] ? ie.ta(c + 5, E(this.f[f]), this.f[f], this.f[f + 1], h) : this.f[f + 1], f += 2), e += 1;
        } else {
          break;
        }
      }
      return new je(null, n + 1, l);
    }
    c = Array(2 * (n + 1));
    jc(this.f, 0, c, 0, 2 * l);
    c[2 * l] = e;
    c[2 * l + 1] = f;
    jc(this.f, 2 * l, c, 2 * (l + 1), 2 * (n - l));
    h.xa = !0;
    return new ge(null, this.C | k, c);
  }
  n = this.f[2 * l];
  k = this.f[2 * l + 1];
  return null == n ? (n = k.ta(c + 5, d, e, f, h), n === k ? this : new ge(null, this.C, de.d(this.f, 2 * l + 1, n))) : ce(e, n) ? f === k ? this : new ge(null, this.C, de.d(this.f, 2 * l + 1, f)) : y ? (h.xa = !0, new ge(null, this.C, de.I(this.f, 2 * l, null, 2 * l + 1, ke.ra ? ke.ra(c + 5, n, k, d, e, f) : ke.call(null, c + 5, n, k, d, e, f)))) : null;
};
m.Ga = function(c, d, e, f) {
  var h = 1 << (d >>> c & 31);
  if (0 === (this.C & h)) {
    return f;
  }
  var k = uc(this.C & h - 1), h = this.f[2 * k], k = this.f[2 * k + 1];
  return null == h ? k.Ga(c + 5, d, e, f) : ce(e, h) ? k : y ? f : null;
};
var ie = new ge(null, 0, []);
function me(c, d, e) {
  var f = c.f;
  c = 2 * (c.k - 1);
  for (var h = Array(c), k = 0, l = 1, n = 0;;) {
    if (k < c) {
      k !== e && null != f[k] && (h[l] = f[k], l += 2, n |= 1 << k), k += 1;
    } else {
      return new ge(d, n, h);
    }
  }
}
function je(c, d, e) {
  this.B = c;
  this.k = d;
  this.f = e;
}
m = je.prototype;
m.ua = function(c, d, e, f, h, k) {
  var l = e >>> d & 31, n = this.f[l];
  if (null == n) {
    return c = fe.o(this, c, l, ie.ua(c, d + 5, e, f, h, k)), c.k += 1, c;
  }
  d = n.ua(c, d + 5, e, f, h, k);
  return d === n ? this : fe.o(this, c, l, d);
};
m.Ya = function() {
  return ne.e ? ne.e(this.f) : ne.call(null, this.f);
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
      return me(this, c, k);
    }
    c = fe.o(this, c, k, d);
    c.k -= 1;
    return c;
  }
  return y ? fe.o(this, c, k, d) : null;
};
m.Ea = function(c) {
  return c === this.B ? this : new je(c, this.k, Fa(this.f));
};
m.Za = function(c, d, e) {
  var f = d >>> c & 31, h = this.f[f];
  return null != h ? (c = h.Za(c + 5, d, e), c === h ? this : null == c ? 8 >= this.k ? me(this, null, f) : new je(null, this.k - 1, de.d(this.f, f, c)) : y ? new je(null, this.k, de.d(this.f, f, c)) : null) : this;
};
m.ta = function(c, d, e, f, h) {
  var k = d >>> c & 31, l = this.f[k];
  if (null == l) {
    return new je(null, this.k + 1, de.d(this.f, k, ie.ta(c + 5, d, e, f, h)));
  }
  c = l.ta(c + 5, d, e, f, h);
  return c === l ? this : new je(null, this.k, de.d(this.f, k, c));
};
m.Ga = function(c, d, e, f) {
  var h = this.f[d >>> c & 31];
  return null != h ? h.Ga(c + 5, d, e, f) : f;
};
function oe(c, d, e) {
  d *= 2;
  for (var f = 0;;) {
    if (f < d) {
      if (ce(e, c[f])) {
        return f;
      }
      f += 2;
    } else {
      return-1;
    }
  }
}
function pe(c, d, e, f) {
  this.B = c;
  this.za = d;
  this.k = e;
  this.f = f;
}
m = pe.prototype;
m.ua = function(c, d, e, f, h, k) {
  if (e === this.za) {
    d = oe(this.f, this.k, f);
    if (-1 === d) {
      if (this.f.length > 2 * this.k) {
        return c = fe.ra(this, c, 2 * this.k, f, 2 * this.k + 1, h), k.xa = !0, c.k += 1, c;
      }
      e = this.f.length;
      d = Array(e + 2);
      jc(this.f, 0, d, 0, e);
      d[e] = f;
      d[e + 1] = h;
      k.xa = !0;
      k = this.k + 1;
      c === this.B ? (this.f = d, this.k = k, c = this) : c = new pe(this.B, this.za, k, d);
      return c;
    }
    return this.f[d + 1] === h ? this : fe.o(this, c, d + 1, h);
  }
  return(new ge(c, 1 << (this.za >>> d & 31), [null, this, null, null])).ua(c, d, e, f, h, k);
};
m.Ya = function() {
  return le.e ? le.e(this.f) : le.call(null, this.f);
};
m.$a = function(c, d, e, f, h) {
  d = oe(this.f, this.k, f);
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
  jc(this.f, 0, d, 0, 2 * this.k);
  return new pe(c, this.za, this.k, d);
};
m.Za = function(c, d, e) {
  c = oe(this.f, this.k, e);
  return-1 === c ? this : 1 === this.k ? null : y ? new pe(null, this.za, this.k - 1, ee(this.f, qc((c - c % 2) / 2))) : null;
};
m.ta = function(c, d, e, f, h) {
  return d === this.za ? (c = oe(this.f, this.k, e), -1 === c ? (c = 2 * this.k, d = Array(c + 2), jc(this.f, 0, d, 0, c), d[c] = e, d[c + 1] = f, h.xa = !0, new pe(null, this.za, this.k + 1, d)) : Hb.c(this.f[c], f) ? this : new pe(null, this.za, this.k, de.d(this.f, c + 1, f))) : (new ge(null, 1 << (this.za >>> c & 31), [null, this])).ta(c, d, e, f, h);
};
m.Ga = function(c, d, e, f) {
  c = oe(this.f, this.k, e);
  return 0 > c ? f : ce(e, this.f[c]) ? this.f[c + 1] : y ? f : null;
};
var ke = function() {
  function c(c, d, e, l, n, p, s) {
    var q = E(e);
    if (q === n) {
      return new pe(null, q, 2, [e, l, p, s]);
    }
    var u = new be;
    return ie.ua(c, d, q, e, l, u).ua(c, d, n, p, s, u);
  }
  function d(c, d, e, l, n, p) {
    var s = E(d);
    if (s === l) {
      return new pe(null, s, 2, [d, e, n, p]);
    }
    var q = new be;
    return ie.ta(c, s, d, e, q).ta(c, l, n, p, q);
  }
  var e = null, e = function(e, h, k, l, n, p, s) {
    switch(arguments.length) {
      case 6:
        return d.call(this, e, h, k, l, n, p);
      case 7:
        return c.call(this, e, h, k, l, n, p, s);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.ra = d;
  e.Sa = c;
  return e;
}();
function qe(c, d, e, f, h) {
  this.meta = c;
  this.va = d;
  this.s = e;
  this.J = f;
  this.n = h;
  this.A = 0;
  this.l = 32374860;
}
m = qe.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return null == this.J ? new X(null, 2, 5, Y, [this.va[this.s], this.va[this.s + 1]], null) : I(this.J);
};
m.ia = function() {
  return null == this.J ? le.d ? le.d(this.va, this.s + 2, null) : le.call(null, this.va, this.s + 2, null) : le.d ? le.d(this.va, this.s, L(this.J)) : le.call(null, this.va, this.s, L(this.J));
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new qe(d, this.va, this.s, this.J, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return $b(K, this.meta);
};
var le = function() {
  function c(c, d, e) {
    if (null == e) {
      for (e = c.length;;) {
        if (d < e) {
          if (null != c[d]) {
            return new qe(null, c, d, null, null);
          }
          var l = c[d + 1];
          if (w(l) && (l = l.Ya(), w(l))) {
            return new qe(null, c, d + 2, l, null);
          }
          d += 2;
        } else {
          return null;
        }
      }
    } else {
      return new qe(null, c, d, e, null);
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
  return null != c ? c : this.n = c = Rb(this);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return I(this.J);
};
m.ia = function() {
  return ne.o ? ne.o(null, this.va, this.s, L(this.J)) : ne.call(null, null, this.va, this.s, L(this.J));
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new re(d, this.va, this.s, this.J, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return $b(K, this.meta);
};
var ne = function() {
  function c(c, d, e, l) {
    if (null == l) {
      for (l = d.length;;) {
        if (e < l) {
          var n = d[e];
          if (w(n) && (n = n.Ya(), w(n))) {
            return new re(c, d, e + 1, n, null);
          }
          e += 1;
        } else {
          return null;
        }
      }
    } else {
      return new re(c, d, e, l, null);
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
function se(c, d, e, f, h, k) {
  this.meta = c;
  this.k = d;
  this.root = e;
  this.Y = f;
  this.ma = h;
  this.n = k;
  this.A = 4;
  this.l = 16123663;
}
m = se.prototype;
m.Va = function() {
  return new te({}, this.root, this.k, this.Y, this.ma);
};
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = wc(this);
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return null == d ? this.Y ? this.ma : e : null == this.root ? e : y ? this.root.Ga(0, E(d), d, e) : null;
};
m.ya = function(c, d, e) {
  if (null == d) {
    return this.Y && e === this.ma ? this : new se(this.meta, this.Y ? this.k : this.k + 1, this.root, !0, e, null);
  }
  c = new be;
  d = (null == this.root ? ie : this.root).ta(0, E(d), d, e, c);
  return d === this.root ? this : new se(this.meta, c.xa ? this.k + 1 : this.k, d, this.Y, this.ma, null);
};
m.nb = function(c, d) {
  return null == d ? this.Y : null == this.root ? !1 : y ? this.root.Ga(0, E(d), d, kc) !== kc : null;
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
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.K = function(c, d) {
  return gc(d) ? Ua(this, C.c(d, 0), C.c(d, 1)) : U.d(La, this, d);
};
m.toString = function() {
  return Eb(this);
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
  return Td(this, d);
};
m.N = function(c, d) {
  return new se(d, this.k, this.root, this.Y, this.ma, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return ib(Yd, this.meta);
};
m.La = function(c, d) {
  if (null == d) {
    return this.Y ? new se(this.meta, this.k - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (y) {
    var e = this.root.Za(0, E(d), d);
    return e === this.root ? this : new se(this.meta, this.k - 1, e, this.Y, this.ma, null);
  }
  return null;
};
var Yd = new se(null, 0, null, !1, null, 0);
function Wb(c, d) {
  for (var e = c.length, f = 0, h = tb(Yd);;) {
    if (f < e) {
      var k = f + 1, h = h.Xa(null, c[f], d[f]), f = k
    } else {
      return vb(h);
    }
  }
}
function te(c, d, e, f, h) {
  this.B = c;
  this.root = d;
  this.count = e;
  this.Y = f;
  this.ma = h;
  this.A = 56;
  this.l = 258;
}
m = te.prototype;
m.Gb = function(c, d) {
  if (this.B) {
    if (null == d) {
      this.Y && (this.Y = !1, this.ma = null, this.count -= 1);
    } else {
      if (null != this.root) {
        var e = new be, f = this.root.$a(this.B, 0, E(d), d, e);
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
  return ue(this, d, e);
};
m.Ma = function(c, d) {
  var e;
  a: {
    if (this.B) {
      if (d ? d.l & 2048 || d.ec || (d.l ? 0 : x(Xa, d)) : x(Xa, d)) {
        e = ue(this, xc.e ? xc.e(d) : xc.call(null, d), yc.e ? yc.e(d) : yc.call(null, d));
        break a;
      }
      e = G(d);
      for (var f = this;;) {
        var h = I(e);
        if (w(h)) {
          e = L(e), f = ue(f, xc.e ? xc.e(h) : xc.call(null, h), yc.e ? yc.e(h) : yc.call(null, h));
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
    this.B = null, c = new se(null, this.count, this.root, this.Y, this.ma, null);
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
function ue(c, d, e) {
  if (c.B) {
    if (null == d) {
      c.ma !== e && (c.ma = e), c.Y || (c.count += 1, c.Y = !0);
    } else {
      var f = new be;
      d = (null == c.root ? ie : c.root).ua(c.B, 0, E(d), d, e, f);
      d !== c.root && (c.root = d);
      f.xa && (c.count += 1);
    }
    return c;
  }
  throw Error("assoc! after persistent!");
}
var ve = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    c = G(c);
    for (var d = tb(Yd);;) {
      if (c) {
        var h = L(L(c)), d = Uc(d, I(c), I(L(c)));
        c = h;
      } else {
        return vb(d);
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
function we(c, d) {
  this.da = c;
  this.fa = d;
  this.A = 0;
  this.l = 32374988;
}
m = we.prototype;
m.H = function() {
  return Rb(this);
};
m.Z = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Qa, c)) : x(Qa, c)) ? this.da.Z(null) : L(this.da);
  return null == c ? null : new we(c, this.fa);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.da.W(null).Eb();
};
m.ia = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Qa, c)) : x(Qa, c)) ? this.da.Z(null) : L(this.da);
  return null != c ? new we(c, this.fa) : K;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new we(this.da, d);
};
m.L = function() {
  return this.fa;
};
m.U = function() {
  return $b(K, this.fa);
};
function xe(c) {
  return(c = G(c)) ? new we(c, null) : null;
}
function xc(c) {
  return Ya(c);
}
function ye(c, d) {
  this.da = c;
  this.fa = d;
  this.A = 0;
  this.l = 32374988;
}
m = ye.prototype;
m.H = function() {
  return Rb(this);
};
m.Z = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Qa, c)) : x(Qa, c)) ? this.da.Z(null) : L(this.da);
  return null == c ? null : new ye(c, this.fa);
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return pc.c(d, this);
};
m.aa = function(c, d, e) {
  return pc.d(d, e, this);
};
m.M = function() {
  return this;
};
m.W = function() {
  return this.da.W(null).Fb();
};
m.ia = function() {
  var c = this.da, c = (c ? c.l & 128 || c.fb || (c.l ? 0 : x(Qa, c)) : x(Qa, c)) ? this.da.Z(null) : L(this.da);
  return null != c ? new ye(c, this.fa) : K;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new ye(this.da, d);
};
m.L = function() {
  return this.fa;
};
m.U = function() {
  return $b(K, this.fa);
};
function yc(c) {
  return Za(c);
}
var ze = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    return w(Zc(c)) ? U.c(function(c, d) {
      return Ub.c(w(c) ? c : Zd, d);
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
function Ae(c, d, e) {
  this.meta = c;
  this.Pa = d;
  this.n = e;
  this.A = 4;
  this.l = 15077647;
}
m = Ae.prototype;
m.Va = function() {
  return new Be(tb(this.Pa));
};
m.H = function() {
  var c = this.n;
  if (null != c) {
    return c;
  }
  a: {
    for (var c = 0, d = G(this);;) {
      if (d) {
        var e = I(d), c = (c + E(e)) % 4503599627370496, d = L(d)
      } else {
        break a;
      }
    }
    c = void 0;
  }
  return this.n = c;
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return Ta(this.Pa, d) ? d : e;
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
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return this.O(null, c);
};
m.c = function(c, d) {
  return this.P(null, c, d);
};
m.K = function(c, d) {
  return new Ae(this.meta, R.d(this.Pa, d, null), null);
};
m.toString = function() {
  return Eb(this);
};
m.M = function() {
  return xe(this.Pa);
};
m.Pb = function(c, d) {
  return new Ae(this.meta, Wa(this.Pa, d), null);
};
m.Q = function() {
  return Ia(this.Pa);
};
m.D = function(c, d) {
  var e = this;
  return(null == d ? !1 : d ? d.l & 4096 || d.yc ? !0 : d.l ? !1 : x(ab, d) : x(ab, d)) && O(e) === O(d) && Yc(function(c) {
    return nc(e, c);
  }, d);
};
m.N = function(c, d) {
  return new Ae(d, this.Pa, this.n);
};
m.L = function() {
  return this.meta;
};
m.U = function() {
  return $b(Ce, this.meta);
};
var Ce = new Ae(null, Zd, 0);
function Be(c) {
  this.Ca = c;
  this.l = 259;
  this.A = 136;
}
m = Be.prototype;
m.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Sa.d(this.Ca, e, kc) === kc ? null : e;
      case 3:
        return Sa.d(this.Ca, e, kc) === kc ? f : e;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
m.apply = function(c, d) {
  return this.call.apply(this, [this].concat(Fa(d)));
};
m.e = function(c) {
  return Sa.d(this.Ca, c, kc) === kc ? null : c;
};
m.c = function(c, d) {
  return Sa.d(this.Ca, c, kc) === kc ? d : c;
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return Sa.d(this.Ca, d, kc) === kc ? e : d;
};
m.Q = function() {
  return O(this.Ca);
};
m.Ma = function(c, d) {
  this.Ca = wb(this.Ca, d, null);
  return this;
};
m.Na = function() {
  return new Ae(null, vb(this.Ca), null);
};
function De(c) {
  c = G(c);
  if (null == c) {
    return Ce;
  }
  if (c instanceof Mb && 0 === c.s) {
    c = c.f;
    a: {
      for (var d = 0, e = tb(Ce);;) {
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
    for (f = tb(Ce);;) {
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
function Dc(c) {
  if (c && (c.A & 4096 || c.gc)) {
    return c.name;
  }
  if ("string" === typeof c) {
    return c;
  }
  throw Error([B("Doesn't support name: "), B(c)].join(""));
}
var Ee = function() {
  function c(c, d, e) {
    return(c.e ? c.e(d) : c.call(null, d)) > (c.e ? c.e(e) : c.call(null, e)) ? d : e;
  }
  var d = null, e = function() {
    function c(d, f, n, p) {
      var s = null;
      3 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, n, s);
    }
    function e(c, f, h, p) {
      return U.d(function(e, f) {
        return d.d(c, e, f);
      }, d.d(c, f, h), p);
    }
    c.m = 3;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var p = I(c);
      c = J(c);
      return e(d, f, p, c);
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
}(), Ge = function Fe(d, e) {
  return new Fc(null, function() {
    var f = G(e);
    return f ? w(d.e ? d.e(I(f)) : d.call(null, I(f))) ? N(I(f), Fe(d, J(f))) : null : null;
  }, null, null);
};
function He(c, d, e, f, h) {
  this.meta = c;
  this.start = d;
  this.end = e;
  this.step = f;
  this.n = h;
  this.A = 0;
  this.l = 32375006;
}
m = He.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = Rb(this);
};
m.Z = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new He(this.meta, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new He(this.meta, this.start + this.step, this.end, this.step, null) : null;
};
m.K = function(c, d) {
  return N(d, this);
};
m.toString = function() {
  return Eb(this);
};
m.$ = function(c, d) {
  return Nb.c(this, d);
};
m.aa = function(c, d, e) {
  return Nb.d(this, d, e);
};
m.M = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
m.Q = function() {
  return Ca(ob(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
m.W = function() {
  return null == ob(this) ? null : this.start;
};
m.ia = function() {
  return null != ob(this) ? new He(this.meta, this.start + this.step, this.end, this.step, null) : K;
};
m.D = function(c, d) {
  return Sb(this, d);
};
m.N = function(c, d) {
  return new He(d, this.start, this.end, this.step, this.n);
};
m.L = function() {
  return this.meta;
};
m.F = function(c, d) {
  if (d < Ia(this)) {
    return this.start + d * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
m.pa = function(c, d, e) {
  return d < Ia(this) ? this.start + d * this.step : this.start > this.end && 0 === this.step ? this.start : e;
};
m.U = function() {
  return $b(K, this.meta);
};
var Ie = function() {
  function c(c, d, e) {
    return new He(null, c, d, e, null);
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
  var h = null, h = function(h, l, n) {
    switch(arguments.length) {
      case 0:
        return f.call(this);
      case 1:
        return e.call(this, h);
      case 2:
        return d.call(this, h, l);
      case 3:
        return c.call(this, h, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.q = f;
  h.e = e;
  h.c = d;
  h.d = c;
  return h;
}(), Je = function() {
  function c(c, d, e) {
    return function() {
      var f = null, h = function() {
        function f(c, d, e, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, c, d, e, l);
        }
        function h(f, p, q, s) {
          return new X(null, 3, 5, Y, [S.I(c, f, p, q, s), S.I(d, f, p, q, s), S.I(e, f, p, q, s)], null);
        }
        f.m = 3;
        f.j = function(c) {
          var d = I(c);
          c = L(c);
          var e = I(c);
          c = L(c);
          var f = I(c);
          c = J(c);
          return h(d, e, f, c);
        };
        f.i = h;
        return f;
      }(), f = function(f, p, z, F) {
        switch(arguments.length) {
          case 0:
            return new X(null, 3, 5, Y, [c.q ? c.q() : c.call(null), d.q ? d.q() : d.call(null), e.q ? e.q() : e.call(null)], null);
          case 1:
            return new X(null, 3, 5, Y, [c.e ? c.e(f) : c.call(null, f), d.e ? d.e(f) : d.call(null, f), e.e ? e.e(f) : e.call(null, f)], null);
          case 2:
            return new X(null, 3, 5, Y, [c.c ? c.c(f, p) : c.call(null, f, p), d.c ? d.c(f, p) : d.call(null, f, p), e.c ? e.c(f, p) : e.call(null, f, p)], null);
          case 3:
            return new X(null, 3, 5, Y, [c.d ? c.d(f, p, z) : c.call(null, f, p, z), d.d ? d.d(f, p, z) : d.call(null, f, p, z), e.d ? e.d(f, p, z) : e.call(null, f, p, z)], null);
          default:
            return h.i(f, p, z, M(arguments, 3));
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
        function f(e, h, n, p) {
          return new X(null, 2, 5, Y, [S.I(c, e, h, n, p), S.I(d, e, h, n, p)], null);
        }
        e.m = 3;
        e.j = function(c) {
          var d = I(c);
          c = L(c);
          var e = I(c);
          c = L(c);
          var h = I(c);
          c = J(c);
          return f(d, e, h, c);
        };
        e.i = f;
        return e;
      }(), e = function(e, h, n, z) {
        switch(arguments.length) {
          case 0:
            return new X(null, 2, 5, Y, [c.q ? c.q() : c.call(null), d.q ? d.q() : d.call(null)], null);
          case 1:
            return new X(null, 2, 5, Y, [c.e ? c.e(e) : c.call(null, e), d.e ? d.e(e) : d.call(null, e)], null);
          case 2:
            return new X(null, 2, 5, Y, [c.c ? c.c(e, h) : c.call(null, e, h), d.c ? d.c(e, h) : d.call(null, e, h)], null);
          case 3:
            return new X(null, 2, 5, Y, [c.d ? c.d(e, h, n) : c.call(null, e, h, n), d.d ? d.d(e, h, n) : d.call(null, e, h, n)], null);
          default:
            return f.i(e, h, n, M(arguments, 3));
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
          return new X(null, 1, 5, Y, [S.I(c, d, f, h, l)], null);
        }
        d.m = 3;
        d.j = function(c) {
          var d = I(c);
          c = L(c);
          var f = I(c);
          c = L(c);
          var h = I(c);
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
      var k = Rc.o(c, e, f, h);
      return function() {
        function c(d, e, f) {
          return U.d(function(c, h) {
            return Ub.c(c, h.d ? h.d(d, e, f) : h.call(null, d, e, f));
          }, Kd, k);
        }
        function d(c, e) {
          return U.d(function(d, f) {
            return Ub.c(d, f.c ? f.c(c, e) : f.call(null, c, e));
          }, Kd, k);
        }
        function e(c) {
          return U.d(function(d, e) {
            return Ub.c(d, e.e ? e.e(c) : e.call(null, c));
          }, Kd, k);
        }
        function f() {
          return U.d(function(c, d) {
            return Ub.c(c, d.q ? d.q() : d.call(null));
          }, Kd, k);
        }
        var h = null, l = function() {
          function c(e, f, h, k) {
            var l = null;
            3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
            return d.call(this, e, f, h, l);
          }
          function d(c, e, f, h) {
            return U.d(function(d, k) {
              return Ub.c(d, S.I(k, c, e, f, h));
            }, Kd, k);
          }
          c.m = 3;
          c.j = function(c) {
            var e = I(c);
            c = L(c);
            var f = I(c);
            c = L(c);
            var h = I(c);
            c = J(c);
            return d(e, f, h, c);
          };
          c.i = d;
          return c;
        }(), h = function(h, k, n, p) {
          switch(arguments.length) {
            case 0:
              return f.call(this);
            case 1:
              return e.call(this, h);
            case 2:
              return d.call(this, h, k);
            case 3:
              return c.call(this, h, k, n);
            default:
              return l.i(h, k, n, M(arguments, 3));
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
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = J(c);
      return d(e, f, h, c);
    };
    c.i = d;
    return c;
  }(), f = function(f, l, n, p) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, l);
      case 3:
        return c.call(this, f, l, n);
      default:
        return h.i(f, l, n, M(arguments, 3));
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
}(), Ke = function() {
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
function Le(c, d, e, f, h, k, l) {
  var n = va;
  try {
    va = null == va ? null : va - 1;
    if (null != va && 0 > va) {
      return D(c, "#");
    }
    D(c, e);
    G(l) && (d.d ? d.d(I(l), c, k) : d.call(null, I(l), c, k));
    for (var p = L(l), s = Ba.e(k);p && (null == s || 0 !== s);) {
      D(c, f);
      d.d ? d.d(I(p), c, k) : d.call(null, I(p), c, k);
      var q = L(p);
      e = s - 1;
      p = q;
      s = e;
    }
    w(Ba.e(k)) && (D(c, f), d.d ? d.d("...", c, k) : d.call(null, "...", c, k));
    return D(c, h);
  } finally {
    va = n;
  }
}
var Me = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h);
  }
  function d(c, d) {
    for (var h = G(d), k = null, l = 0, n = 0;;) {
      if (n < l) {
        var p = k.F(null, n);
        D(c, p);
        n += 1;
      } else {
        if (h = G(h)) {
          k = h, hc(k) ? (h = Ab(k), l = Bb(k), k = h, p = O(h), h = l, l = p) : (p = I(k), D(c, p), h = L(k), k = null, l = 0), n = 0;
        } else {
          return null;
        }
      }
    }
  }
  c.m = 1;
  c.j = function(c) {
    var f = I(c);
    c = J(c);
    return d(f, c);
  };
  c.i = d;
  return c;
}(), Ne = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Oe(c) {
  return[B('"'), B(c.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(c) {
    return Ne[c];
  })), B('"')].join("");
}
var Re = function Pe(d, e, f) {
  if (null == d) {
    return D(e, "nil");
  }
  if (void 0 === d) {
    return D(e, "#\x3cundefined\x3e");
  }
  if (y) {
    w(function() {
      var e = Q.c(f, za);
      return w(e) ? (e = d ? d.l & 131072 || d.fc ? !0 : d.l ? !1 : x(fb, d) : x(fb, d)) ? ac(d) : e : e;
    }()) && (D(e, "^"), Pe(ac(d), e, f), D(e, " "));
    if (null == d) {
      return D(e, "nil");
    }
    if (d.Ub) {
      return d.ic(e);
    }
    if (d && (d.l & 2147483648 || d.V)) {
      return d.G(null, e, f);
    }
    if (Da(d) === Boolean || "number" === typeof d) {
      return D(e, "" + B(d));
    }
    if (null != d && d.constructor === Object) {
      return D(e, "#js "), Qe.o ? Qe.o(dd.c(function(e) {
        return new X(null, 2, 5, Y, [Ec.e(e), d[e]], null);
      }, ic(d)), Pe, e, f) : Qe.call(null, dd.c(function(e) {
        return new X(null, 2, 5, Y, [Ec.e(e), d[e]], null);
      }, ic(d)), Pe, e, f);
    }
    if (d instanceof Array) {
      return Le(e, Pe, "#js [", " ", "]", f, d);
    }
    if (ba(d)) {
      return w(ya.e(f)) ? D(e, Oe(d)) : D(e, d);
    }
    if (Yb(d)) {
      return Me.i(e, M(["#\x3c", "" + B(d), "\x3e"], 0));
    }
    if (d instanceof Date) {
      var h = function(d, e) {
        for (var f = "" + B(d);;) {
          if (O(f) < e) {
            f = [B("0"), B(f)].join("");
          } else {
            return f;
          }
        }
      };
      return Me.i(e, M(['#inst "', "" + B(d.getUTCFullYear()), "-", h(d.getUTCMonth() + 1, 2), "-", h(d.getUTCDate(), 2), "T", h(d.getUTCHours(), 2), ":", h(d.getUTCMinutes(), 2), ":", h(d.getUTCSeconds(), 2), ".", h(d.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return d instanceof RegExp ? Me.i(e, M(['#"', d.source, '"'], 0)) : (d ? d.l & 2147483648 || d.V || (d.l ? 0 : x(qb, d)) : x(qb, d)) ? rb(d, e, f) : y ? Me.i(e, M(["#\x3c", "" + B(d), "\x3e"], 0)) : null;
  }
  return null;
}, Se = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    var d;
    if (null == c || Ca(G(c))) {
      d = "";
    } else {
      d = B;
      var h = wa(), k = new ta;
      a: {
        var l = new Db(k);
        Re(I(c), l, h);
        c = G(L(c));
        for (var n = null, p = 0, s = 0;;) {
          if (s < p) {
            var q = n.F(null, s);
            D(l, " ");
            Re(q, l, h);
            s += 1;
          } else {
            if (c = G(c)) {
              n = c, hc(n) ? (c = Ab(n), p = Bb(n), n = c, q = O(c), c = p, p = q) : (q = I(n), D(l, " "), Re(q, l, h), c = L(n), n = null, p = 0), s = 0;
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
function Qe(c, d, e, f) {
  return Le(e, function(c, e, f) {
    d.d ? d.d(Ya(c), e, f) : d.call(null, Ya(c), e, f);
    D(e, " ");
    return d.d ? d.d(Za(c), e, f) : d.call(null, Za(c), e, f);
  }, "{", ", ", "}", f, G(c));
}
we.prototype.V = !0;
we.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
Mb.prototype.V = !0;
Mb.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
Nd.prototype.V = !0;
Nd.prototype.G = function(c, d, e) {
  return Le(d, Re, "[", " ", "]", e, this);
};
Kc.prototype.V = !0;
Kc.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
v.prototype.V = !0;
v.prototype.G = function(c, d, e) {
  return Qe(this, Re, d, e);
};
Fc.prototype.V = !0;
Fc.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
qe.prototype.V = !0;
qe.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
Ld.prototype.V = !0;
Ld.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
se.prototype.V = !0;
se.prototype.G = function(c, d, e) {
  return Qe(this, Re, d, e);
};
Ae.prototype.V = !0;
Ae.prototype.G = function(c, d, e) {
  return Le(d, Re, "#{", " ", "}", e, this);
};
X.prototype.V = !0;
X.prototype.G = function(c, d, e) {
  return Le(d, Re, "[", " ", "]", e, this);
};
zc.prototype.V = !0;
zc.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
Vd.prototype.V = !0;
Vd.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
Ac.prototype.V = !0;
Ac.prototype.G = function(c, d) {
  return D(d, "()");
};
Cc.prototype.V = !0;
Cc.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
He.prototype.V = !0;
He.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
re.prototype.V = !0;
re.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
ye.prototype.V = !0;
ye.prototype.G = function(c, d, e) {
  return Le(d, Re, "(", " ", ")", e, this);
};
X.prototype.cb = !0;
X.prototype.eb = function(c, d) {
  return oc.c(this, d);
};
Nd.prototype.cb = !0;
Nd.prototype.eb = function(c, d) {
  return oc.c(this, d);
};
V.prototype.cb = !0;
V.prototype.eb = function(c, d) {
  return Gb(this, d);
};
Kb.prototype.cb = !0;
Kb.prototype.eb = function(c, d) {
  return Gb(this, d);
};
function Te(c, d, e, f) {
  this.state = c;
  this.meta = d;
  this.pc = e;
  this.ac = f;
  this.l = 2153938944;
  this.A = 2;
}
m = Te.prototype;
m.H = function() {
  return ca(this);
};
m.Rb = function(c, d, e) {
  c = G(this.ac);
  for (var f = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = f.F(null, k), n = P.d(l, 0, null), l = P.d(l, 1, null);
      l.o ? l.o(n, this, d, e) : l.call(null, n, this, d, e);
      k += 1;
    } else {
      if (c = G(c)) {
        hc(c) ? (f = Ab(c), c = Bb(c), n = f, h = O(f), f = n) : (f = I(c), n = P.d(f, 0, null), l = P.d(f, 1, null), l.o ? l.o(n, this, d, e) : l.call(null, n, this, d, e), c = L(c), f = null, h = 0), k = 0;
      } else {
        return null;
      }
    }
  }
};
m.G = function(c, d, e) {
  D(d, "#\x3cAtom: ");
  Re(this.state, d, e);
  return D(d, "\x3e");
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
var Ve = function() {
  function c(c) {
    return new Te(c, null, null, null);
  }
  var d = null, e = function() {
    function c(e, f) {
      var n = null;
      1 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, e, n);
    }
    function d(c, e) {
      var f = lc(e) ? S.c(ve, e) : e, h = Q.c(f, Ue), f = Q.c(f, za);
      return new Te(c, f, h, null);
    }
    c.m = 1;
    c.j = function(c) {
      var e = I(c);
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
function We(c, d) {
  var e = c.pc;
  if (null != e && !w(e.e ? e.e(d) : e.call(null, d))) {
    throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(Se.i(M([Bc(new Kb(null, "validate", "validate", 1233162959, null), new Kb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  e = c.state;
  c.state = d;
  null != c.ac && sb(c, e, d);
  return d;
}
var Xe = function() {
  function c(c, d, e, f, h) {
    return We(c, d.o ? d.o(c.state, e, f, h) : d.call(null, c.state, e, f, h));
  }
  function d(c, d, e, f) {
    return We(c, d.d ? d.d(c.state, e, f) : d.call(null, c.state, e, f));
  }
  function e(c, d, e) {
    return We(c, d.c ? d.c(c.state, e) : d.call(null, c.state, e));
  }
  function f(c, d) {
    return We(c, d.e ? d.e(c.state) : d.call(null, c.state));
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, F) {
      var H = null;
      5 < arguments.length && (H = M(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, H);
    }
    function d(c, e, f, h, k, l) {
      return We(c, S.i(e, c.state, f, h, k, M([l], 0)));
    }
    c.m = 5;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var k = I(c);
      c = L(c);
      var l = I(c);
      c = J(c);
      return d(e, f, h, k, l, c);
    };
    c.i = d;
    return c;
  }(), h = function(h, n, p, s, q, u) {
    switch(arguments.length) {
      case 2:
        return f.call(this, h, n);
      case 3:
        return e.call(this, h, n, p);
      case 4:
        return d.call(this, h, n, p, s);
      case 5:
        return c.call(this, h, n, p, s, q);
      default:
        return k.i(h, n, p, s, q, M(arguments, 5));
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
}(), sc = function() {
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
}(), tc = function(c) {
  return Math.floor.e ? Math.floor.e((Math.random.q ? Math.random.q() : Math.random.call(null)) * c) : Math.floor.call(null, (Math.random.q ? Math.random.q() : Math.random.call(null)) * c);
};
function Ye(c) {
  return P.c(c, tc(O(c)));
}
function Ze(c) {
  this.kb = c;
  this.A = 0;
  this.l = 2153775104;
}
Ze.prototype.H = function() {
  return ma(Se.i(M([this], 0)));
};
Ze.prototype.G = function(c, d) {
  return D(d, [B('#uuid "'), B(this.kb), B('"')].join(""));
};
Ze.prototype.D = function(c, d) {
  return d instanceof Ze && this.kb === d.kb;
};
function $e() {
  var c = 135 / 255, d = 108 / 255, e = 46 / 255, f = Math.max(c, d, e), h = Math.min(c, d, e), k = 0, l = 0, n = 0.5 * (f + h);
  f != h && (f == c ? k = 60 * (d - e) / (f - h) : f == d ? k = 60 * (e - c) / (f - h) + 120 : f == e && (k = 60 * (c - d) / (f - h) + 240), l = 0 < n && 0.5 >= n ? (f - h) / (2 * n) : (f - h) / (2 - 2 * n));
  return[Math.round(k + 360) % 360, l, n];
}
function af(c, d, e) {
  0 > e ? e += 1 : 1 < e && (e -= 1);
  return 1 > 6 * e ? c + 6 * (d - c) * e : 1 > 2 * e ? d : 2 > 3 * e ? c + (d - c) * (2 / 3 - e) * 6 : c;
}
function bf(c, d, e) {
  var f = 0, h = 0, k = 0;
  c /= 360;
  if (0 == d) {
    f = h = k = 255 * e;
  } else {
    var l = k = 0, l = 0.5 > e ? e * (1 + d) : e + d - d * e, k = 2 * e - l, f = 255 * af(k, l, c + 1 / 3), h = 255 * af(k, l, c), k = 255 * af(k, l, c - 1 / 3)
  }
  return[Math.round(f), Math.round(h), Math.round(k)];
}
;var Aa = new V(null, "dup", "dup"), cf = new V(null, "geometry", "geometry"), df = new V(null, "background-layer", "background-layer"), ef = new V(null, "camera", "camera"), ff = new V(null, "entities", "entities"), Jb = new V(null, "default", "default"), gf = new V(null, "display-object", "display-object"), hf = new V(null, "renderer", "renderer"), jf = new V(null, "position", "position"), kf = new V(null, "vector", "vector"), mf = new V(null, "duration", "duration"), nf = new V(null, "identifier", 
"identifier"), of = new V(null, "cooldown-remaining", "cooldown-remaining"), pf = new V(null, "layers", "layers"), qf = new V(null, "movement", "movement"), rf = new V(null, "health", "health"), sf = new V(null, "width", "width"), tf = new V(null, "magnitude", "magnitude"), uf = new V(null, "velocity", "velocity"), vf = new V(null, "asteroid-explosive-death", "asteroid-explosive-death"), wf = new V(null, "fire-intent", "fire-intent"), xf = new V(null, "mouseover", "mouseover"), yf = new V(null, "current", 
"current"), zf = new V(null, "world", "world"), Af = new V(null, "class", "class"), Bf = new V(null, "entity-id", "entity-id"), Cf = new V(null, "radius", "radius"), Df = new V(null, "collidable", "collidable"), Ef = new V(null, "player", "player"), Z = new V(null, "name", "name"), Ff = new V(null, "angular-acceleration", "angular-acceleration"), Gf = new V(null, "aabb", "aabb"), Hf = new V(null, "color", "color"), If = new V(null, "mouseout", "mouseout"), xa = new V(null, "flush-on-newline", "flush-on-newline"), 
Jf = new V(null, "max-angular-velocity", "max-angular-velocity"), Kf = new V(null, "thrust-intent", "thrust-intent"), Lf = new V(null, "style", "style"), Mf = new V(null, "b-id", "b-id"), Nf = new V(null, "active-keys", "active-keys"), Of = new V(null, "normal", "normal"), Pf = new V(null, "main-layer", "main-layer"), Qf = new V(null, "interface-layer", "interface-layer"), Rf = new V(null, "rotate-left-intent", "rotate-left-intent"), Sf = new V(null, "xmin", "xmin"), Tf = new V(null, "tensor", "tensor"), 
Uf = new V(null, "max", "max"), Vf = new V(null, "thrust", "thrust"), Wf = new V(null, "mouseleave", "mouseleave"), Xf = new V(null, "aspect-ratio", "aspect-ratio"), Yf = new V(null, "keydown", "keydown"), Zf = new V(null, "ttl", "ttl"), $f = new V(null, "xmax", "xmax"), ag = new V(null, "cooldown", "cooldown"), bg = new V(null, "acceleration", "acceleration"), cg = new V(null, "moment-inertia", "moment-inertia"), dg = new V(null, "projectile", "projectile"), eg = new V(null, "damage", "damage"), 
fg = new V(null, "angular-velocity", "angular-velocity"), gg = new V(null, "space", "space"), Ba = new V(null, "print-length", "print-length"), hg = new V(null, "right", "right"), ig = new V(null, "weapon", "weapon"), jg = new V(null, "layer", "layer"), kg = new V(null, "left", "left"), lg = new V(null, "a-id", "a-id"), mg = new V(null, "keyup", "keyup"), y = new V(null, "else", "else"), ng = new V(null, "contacts", "contacts"), og = new V(null, "ymin", "ymin"), ya = new V(null, "readably", "readably"), 
pg = new V(null, "prev-ids", "prev-ids"), qg = new V(null, "angle", "angle"), rg = new V(null, "mouseenter", "mouseenter"), sg = new V(null, "level", "level"), Ue = new V(null, "validator", "validator"), za = new V(null, "meta", "meta"), tg = new V(null, "rotate-right-intent", "rotate-right-intent"), ug = new V(null, "remaining", "remaining"), vg = new V(null, "ymax", "ymax"), wg = new V(null, "penetration", "penetration"), xg = new V(null, "fov", "fov"), yg = new V(null, "obj", "obj"), zg = new V(null, 
"mass", "mass"), Ag = new V(null, "entity-ids", "entity-ids"), Bg = new V(null, "fixed", "fixed"), Cg = new V(null, "health-bar", "health-bar"), Dg = new V(null, "down", "down"), Eg = new V(null, "impulse", "impulse"), Fg = new V(null, "up", "up"), Gg = new V(null, "id", "id"), Hg = new V(null, "disabled", "disabled"), Ig = new V(null, "max-velocity", "max-velocity"), Jg = new V(null, "classes", "classes"), Kg = new V(null, "height", "height"), Lg = new V(null, "window", "window"), Mg = new V(null, 
"rotation", "rotation"), Ng = new V(null, "stage", "stage");
function Og() {
  var c = $e(), d = c[0], e = c[1], f = c[2], c = tc(36) - 18, h = sc.e(0.1) - 0.05, k = sc.e(0.1) - 0.05, d = bf(rc(d + c, 360), rc(function() {
    var c;
    c = e + h;
    c = 0 > c ? 0 : c;
    return 1 < c ? 1 : c;
  }(), 1), rc(function() {
    var c;
    c = f + k;
    c = 0 > c ? 0 : c;
    return 1 < c ? 1 : c;
  }(), 1));
  return(d[0] << 16) + (d[1] << 8) + d[2];
}
;var Pg = function() {
  function c(c, d) {
    return S.c(B, gd(1, kd.c(hd.e(c), d)));
  }
  function d(c) {
    return S.c(B, c);
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
function Qg() {
  var c = Rg();
  return "" + B(c.kb);
}
function Rg() {
  function c() {
    return tc(16).toString(16);
  }
  return new Ze((new ta).append(c(), c(), c(), c(), c(), c(), c(), c(), "-", c(), c(), c(), c(), "-4", c(), c(), c(), "-", (8 | 3 & tc(15)).toString(16), c(), c(), c(), "-", c(), c(), c(), c(), c(), c(), c(), c(), c(), c(), c(), c()));
}
var Sg, Tg = [B("^"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), 
B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("$")].join(""), Ug = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(Tg);
Sg = null == Ug ? null : 1 === O(Ug) ? I(Ug) : vb(U.d(ub, tb(Kd), Ug));
P.d(Sg, 0, null);
P.d(Sg, 1, null);
P.d(Sg, 2, null);
var Vg = Math.PI, Wg = Number.MAX_VALUE, Xg = Math.abs, Yg = Math.pow, Zg = Math.sqrt, $g = Math.cos, ah = Math.sin;
function bh(c, d) {
  return new X(null, 2, 5, Y, [P.c(c, 0) + P.c(d, 0), P.c(c, 1) + P.c(d, 1)], null);
}
function ch(c, d) {
  return new X(null, 2, 5, Y, [P.c(c, 0) - P.c(d, 0), P.c(c, 1) - P.c(d, 1)], null);
}
function dh(c) {
  return Zg.e ? Zg.e((Yg.c ? Yg.c(P.c(c, 0), 2) : Yg.call(null, P.c(c, 0), 2)) + (Yg.c ? Yg.c(P.c(c, 1), 2) : Yg.call(null, P.c(c, 1), 2))) : Zg.call(null, (Yg.c ? Yg.c(P.c(c, 0), 2) : Yg.call(null, P.c(c, 0), 2)) + (Yg.c ? Yg.c(P.c(c, 1), 2) : Yg.call(null, P.c(c, 1), 2)));
}
function fh(c, d) {
  return new X(null, 2, 5, Y, [c * P.c(d, 0), c * P.c(d, 1)], null);
}
function gh(c, d) {
  return P.c(c, 0) * P.c(d, 0) + P.c(c, 1) * P.c(d, 1);
}
function hh(c) {
  var d = new X(null, 2, 5, Y, [1, 0], null), e = P.c(d, 0), d = P.c(d, 1);
  return new X(null, 2, 5, Y, [e * ($g.e ? $g.e(c) : $g.call(null, c)) - d * (ah.e ? ah.e(c) : ah.call(null, c)), e * (ah.e ? ah.e(c) : ah.call(null, c)) + d * ($g.e ? $g.e(c) : $g.call(null, c))], null);
}
function ih(c) {
  return new X(null, 2, 5, Y, [-P.c(c, 1), P.c(c, 0)], null);
}
function jh(c) {
  var d = dh(c);
  return new X(null, 2, 5, Y, [P.c(c, 0) / d, P.c(c, 1) / d], null);
}
;function kh(c, d) {
  var e = S.d(Ee, c, d);
  return N(e, od(bd(function(c) {
    return e === c;
  }), d));
}
var lh = function() {
  function c(c, d) {
    return O(c) < O(d) ? U.d(Ub, d, c) : U.d(Ub, c, d);
  }
  var d = null, e = function() {
    function c(e, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, p);
    }
    function d(c, e, f) {
      c = kh(O, Ub.i(f, e, M([c], 0)));
      return U.d(pd, I(c), J(c));
    }
    c.m = 2;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = J(c);
      return d(e, f, c);
    };
    c.i = d;
    return c;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return Ce;
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
    return Ce;
  };
  d.e = function(c) {
    return c;
  };
  d.c = c;
  d.i = e.i;
  return d;
}();
function mh(c, d, e, f) {
  this.name = c;
  this.Ja = d;
  this.t = e;
  this.p = f;
  this.A = 0;
  this.l = 2229667594;
  2 < arguments.length ? (this.t = e, this.p = f) : this.p = this.t = null;
}
m = mh.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = wc(this);
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, kf) ? this.Ja : y ? Q.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new mh(e, this.Ja, this.t, this.p, null) : w(W.c ? W.c(kf, d) : W.call(null, kf, d)) ? new mh(this.name, e, this.t, this.p, null) : new mh(this.name, this.Ja, this.t, R.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Le(d, function(c) {
    return Le(d, Re, "", " ", "", e, c);
  }, "#asteroids.core.Position{", ", ", "}", e, Qc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [kf, this.Ja], null)], null), this.p));
};
m.K = function(c, d) {
  return gc(d) ? Ua(this, C.c(d, 0), C.c(d, 1)) : U.d(La, this, d);
};
m.M = function() {
  return G(Qc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [kf, this.Ja], null)], null), this.p));
};
m.Q = function() {
  return 2 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Td(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new mh(this.name, this.Ja, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return nc(new Ae(null, new v(null, 2, [kf, null, Z, null], null), null), d) ? Xb.c($b(pd(Zd, this), this.t), d) : new mh(this.name, this.Ja, this.t, Xc(Xb.c(this.p, d)), null);
};
function nh(c, d, e, f) {
  this.name = c;
  this.angle = d;
  this.t = e;
  this.p = f;
  this.A = 0;
  this.l = 2229667594;
  2 < arguments.length ? (this.t = e, this.p = f) : this.p = this.t = null;
}
m = nh.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = wc(this);
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, qg) ? this.angle : y ? Q.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new nh(e, this.angle, this.t, this.p, null) : w(W.c ? W.c(qg, d) : W.call(null, qg, d)) ? new nh(this.name, e, this.t, this.p, null) : new nh(this.name, this.angle, this.t, R.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Le(d, function(c) {
    return Le(d, Re, "", " ", "", e, c);
  }, "#asteroids.core.Rotation{", ", ", "}", e, Qc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [qg, this.angle], null)], null), this.p));
};
m.K = function(c, d) {
  return gc(d) ? Ua(this, C.c(d, 0), C.c(d, 1)) : U.d(La, this, d);
};
m.M = function() {
  return G(Qc.c(new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [qg, this.angle], null)], null), this.p));
};
m.Q = function() {
  return 2 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Td(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new nh(this.name, this.angle, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return nc(new Ae(null, new v(null, 2, [Z, null, qg, null], null), null), d) ? Xb.c($b(pd(Zd, this), this.t), d) : new nh(this.name, this.angle, this.t, Xc(Xb.c(this.p, d)), null);
};
function oh(c, d, e, f, h, k, l, n, p) {
  this.name = c;
  this.acceleration = d;
  this.R = e;
  this.ca = f;
  this.ga = h;
  this.X = k;
  this.ba = l;
  this.t = n;
  this.p = p;
  this.A = 0;
  this.l = 2229667594;
  7 < arguments.length ? (this.t = n, this.p = p) : this.p = this.t = null;
}
m = oh.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = wc(this);
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, bg) ? this.acceleration : W(d, uf) ? this.R : W(d, Ig) ? this.ca : W(d, Ff) ? this.ga : W(d, fg) ? this.X : W(d, Jf) ? this.ba : y ? Q.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new oh(e, this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(bg, d) : W.call(null, bg, d)) ? new oh(this.name, e, this.R, this.ca, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(uf, d) : W.call(null, uf, d)) ? new oh(this.name, this.acceleration, e, this.ca, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(Ig, d) : W.call(null, Ig, d)) ? new oh(this.name, this.acceleration, 
  this.R, e, this.ga, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(Ff, d) : W.call(null, Ff, d)) ? new oh(this.name, this.acceleration, this.R, this.ca, e, this.X, this.ba, this.t, this.p, null) : w(W.c ? W.c(fg, d) : W.call(null, fg, d)) ? new oh(this.name, this.acceleration, this.R, this.ca, this.ga, e, this.ba, this.t, this.p, null) : w(W.c ? W.c(Jf, d) : W.call(null, Jf, d)) ? new oh(this.name, this.acceleration, this.R, this.ca, this.ga, this.X, e, this.t, this.p, null) : new oh(this.name, 
  this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, this.t, R.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Le(d, function(c) {
    return Le(d, Re, "", " ", "", e, c);
  }, "#asteroids.core.Movement{", ", ", "}", e, Qc.c(new X(null, 7, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [bg, this.acceleration], null), new X(null, 2, 5, Y, [uf, this.R], null), new X(null, 2, 5, Y, [Ig, this.ca], null), new X(null, 2, 5, Y, [Ff, this.ga], null), new X(null, 2, 5, Y, [fg, this.X], null), new X(null, 2, 5, Y, [Jf, this.ba], null)], null), this.p));
};
m.K = function(c, d) {
  return gc(d) ? Ua(this, C.c(d, 0), C.c(d, 1)) : U.d(La, this, d);
};
m.M = function() {
  return G(Qc.c(new X(null, 7, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [bg, this.acceleration], null), new X(null, 2, 5, Y, [uf, this.R], null), new X(null, 2, 5, Y, [Ig, this.ca], null), new X(null, 2, 5, Y, [Ff, this.ga], null), new X(null, 2, 5, Y, [fg, this.X], null), new X(null, 2, 5, Y, [Jf, this.ba], null)], null), this.p));
};
m.Q = function() {
  return 7 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Td(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new oh(this.name, this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return nc(new Ae(null, new v(null, 7, [uf, null, Z, null, Ff, null, Jf, null, bg, null, fg, null, Ig, null], null), null), d) ? Xb.c($b(pd(Zd, this), this.t), d) : new oh(this.name, this.acceleration, this.R, this.ca, this.ga, this.X, this.ba, this.t, Xc(Xb.c(this.p, d)), null);
};
function ph(c, d, e, f, h, k, l) {
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
m = ph.prototype;
m.H = function() {
  var c = this.n;
  return null != c ? c : this.n = c = wc(this);
};
m.O = function(c, d) {
  return Sa.d(this, d, null);
};
m.P = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, Sf) ? this.ea : W(d, og) ? this.ka : W(d, $f) ? this.T : W(d, vg) ? this.ja : y ? Q.d(this.p, d, e) : null;
};
m.ya = function(c, d, e) {
  return w(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new ph(e, this.ea, this.ka, this.T, this.ja, this.t, this.p, null) : w(W.c ? W.c(Sf, d) : W.call(null, Sf, d)) ? new ph(this.name, e, this.ka, this.T, this.ja, this.t, this.p, null) : w(W.c ? W.c(og, d) : W.call(null, og, d)) ? new ph(this.name, this.ea, e, this.T, this.ja, this.t, this.p, null) : w(W.c ? W.c($f, d) : W.call(null, $f, d)) ? new ph(this.name, this.ea, this.ka, e, this.ja, this.t, this.p, null) : w(W.c ? W.c(vg, d) : W.call(null, vg, 
  d)) ? new ph(this.name, this.ea, this.ka, this.T, e, this.t, this.p, null) : new ph(this.name, this.ea, this.ka, this.T, this.ja, this.t, R.d(this.p, d, e), null);
};
m.G = function(c, d, e) {
  return Le(d, function(c) {
    return Le(d, Re, "", " ", "", e, c);
  }, "#asteroids.core.AABB{", ", ", "}", e, Qc.c(new X(null, 5, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [Sf, this.ea], null), new X(null, 2, 5, Y, [og, this.ka], null), new X(null, 2, 5, Y, [$f, this.T], null), new X(null, 2, 5, Y, [vg, this.ja], null)], null), this.p));
};
m.K = function(c, d) {
  return gc(d) ? Ua(this, C.c(d, 0), C.c(d, 1)) : U.d(La, this, d);
};
m.M = function() {
  return G(Qc.c(new X(null, 5, 5, Y, [new X(null, 2, 5, Y, [Z, this.name], null), new X(null, 2, 5, Y, [Sf, this.ea], null), new X(null, 2, 5, Y, [og, this.ka], null), new X(null, 2, 5, Y, [$f, this.T], null), new X(null, 2, 5, Y, [vg, this.ja], null)], null), this.p));
};
m.Q = function() {
  return 5 + O(this.p);
};
m.D = function(c, d) {
  return w(w(d) ? this.constructor === d.constructor && Td(this, d) : d) ? !0 : !1;
};
m.N = function(c, d) {
  return new ph(this.name, this.ea, this.ka, this.T, this.ja, d, this.p, this.n);
};
m.L = function() {
  return this.t;
};
m.La = function(c, d) {
  return nc(new Ae(null, new v(null, 5, [Z, null, Sf, null, $f, null, og, null, vg, null], null), null), d) ? Xb.c($b(pd(Zd, this), this.t), d) : new ph(this.name, this.ea, this.ka, this.T, this.ja, this.t, Xc(Xb.c(this.p, d)), null);
};
function qh(c, d, e, f, h, k) {
  return new oh(qf, c, d, e, f, h, k);
}
function rh(c) {
  return new mh(jf, c);
}
function sh(c) {
  return new nh(Mg, c);
}
var th = function() {
  function c(c, d) {
    return new v(null, 3, [Z, Zf, mf, c, ug, d], null);
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
}(), uh = function() {
  function c(c, d, e, l) {
    return new ph(Gf, c, d, e, l);
  }
  function d(c, d) {
    var k = P.d(c, 0, null), l = P.d(c, 1, null), n = P.d(d, 0, null), p = P.d(d, 1, null);
    return e.o(k, l, n, p);
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
}(), vh = function() {
  function c(c) {
    return new v(null, 2, [Z, nf, Gg, c], null);
  }
  function d() {
    return e.e(Qg());
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
function wh(c, d) {
  return nc(c, d);
}
var xh = function() {
  function c(c, d, e, f) {
    return nc(c, d) && nc(c, e) && nc(c, f);
  }
  function d(c, d, e) {
    return nc(c, d) && nc(c, e);
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
      }, dd.d(wh, hd.e(c), q)) : f;
    }
    c.m = 4;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = L(c);
      var q = I(c);
      c = J(c);
      return d(e, f, h, q, c);
    };
    c.i = d;
    return c;
  }(), e = function(e, k, l, n, p) {
    switch(arguments.length) {
      case 2:
        return nc(e, k);
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, n);
      default:
        return f.i(e, k, l, n, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 4;
  e.j = f.j;
  e.c = function(c, d) {
    return nc(c, d);
  };
  e.d = d;
  e.o = c;
  e.i = f.i;
  return e;
}();
function $(c, d) {
  return Q.c(c, d);
}
function yh(c, d) {
  return R.d(c, Z.e(d), d);
}
function zh(c, d) {
  return Tc(U.d(function(c, d) {
    return Uc(c, Z.e(d), d);
  }, tb(c), d));
}
var Ah = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f);
  }
  function d(c) {
    c = Tc(U.d(function(c, d) {
      return Uc(c, Z.e(d), d);
    }, tb(Zd), c));
    return nc(c, nf) ? c : yh(c, vh.q());
  }
  c.m = 0;
  c.j = function(c) {
    c = G(c);
    return d(c);
  };
  c.i = d;
  return c;
}();
function Bh(c, d) {
  return rd.c(c, new X(null, 2, 5, Y, [ff, d], null));
}
function Ch(c, d) {
  var e = Gg.e($(d, nf));
  return td(c, new X(null, 2, 5, Y, [ff, e], null), d);
}
function Dh(c) {
  c = ff.e(c);
  return(c = G(c)) ? new ye(c, null) : null;
}
function Eh(c) {
  return rd.d(c, new X(null, 2, 5, Y, [cf, sf], null), 800);
}
function Fh(c) {
  return rd.d(c, new X(null, 2, 5, Y, [cf, Kg], null), 500);
}
function Gh(c) {
  return Gg.e($(c, nf));
}
function Hh(c) {
  c = $(c, jf);
  return w(c) ? c.Ja : null;
}
function Ih(c) {
  return qg.e($(c, Mg));
}
function Jh(c) {
  return zg.e($(c, zg));
}
function Kh(c, d) {
  var e = Sc(function() {
    var d = ff.e(c);
    return w(d) ? d : Zd;
  }());
  return R.d(c, ff, Tc(U.d(function(c, d) {
    return Uc(c, Gh(d), d);
  }, e, d)));
}
function Lh(c) {
  return R.d(c, ff, function() {
    for (var d = Dh(c), e = Sc(ff.e(c));;) {
      if (G(d)) {
        var f = I(d), h = $(f, Zf);
        if (null != h) {
          if (2 > ug.e(h)) {
            d = L(d), e = Vc(e, Gh(f));
          } else {
            var d = L(d), h = Gh(f), k = $(f, Zf), l = mf.e(k), k = ug.e(k) - 1, f = yh(f, th.c(l, k)), e = wb(e, h, f)
          }
        } else {
          d = L(d);
        }
      } else {
        return vb(e);
      }
    }
  }());
}
;var Mh = new v(null, 4, [hg, function() {
  return new v(null, 1, [Z, tg], null);
}, kg, function() {
  return new v(null, 1, [Z, Rf], null);
}, Fg, function() {
  return new v(null, 1, [Z, Kf], null);
}, gg, function() {
  return new v(null, 1, [Z, wf], null);
}], null);
function Nh(c) {
  for (var d = function(c) {
    return function(d, e) {
      return U.d(function() {
        return function(c, d) {
          return w(d) ? yh(c, d) : c;
        };
      }(c), e, function() {
        return function(c) {
          return function q(d) {
            return new Fc(null, function() {
              return function() {
                for (;;) {
                  var c = G(d);
                  if (c) {
                    if (hc(c)) {
                      var e = Ab(c), f = O(e), h = new Hc(Array(f), 0);
                      return function() {
                        for (var c = 0;;) {
                          if (c < f) {
                            var d = C.c(e, c), k = h, d = Q.c(Mh, d), d = w(d) ? d.q ? d.q() : d.call(null) : null;
                            k.add(d);
                            c += 1;
                          } else {
                            return!0;
                          }
                        }
                      }() ? Lc(h.la(), q(Bb(c))) : Lc(h.la(), null);
                    }
                    var k = I(c);
                    return N(function() {
                      var c = Q.c(Mh, k);
                      return w(c) ? c.q ? c.q() : c.call(null) : null;
                    }(), q(J(c)));
                  }
                  return null;
                }
              };
            }(c), null, null);
          };
        }(c)(Nf.e(d));
      }());
    };
  }(c), e = Dh(c), f = Sc(ff.e(c));;) {
    if (G(e)) {
      var h = I(e);
      xh.c(h, Ef) ? (h = d(c, h), e = L(e), f = Uc(f, Gh(h), h)) : e = L(e);
    } else {
      return R.d(c, ff, vb(f));
    }
  }
}
function Oh(c) {
  var d = $(c, qf), e = Ih(c), e = hh(w(e) ? e : 0), e = nc(c, Kf) ? fh(0.05, e) : new X(null, 2, 5, Y, [0, 0], null), f = kf.c($(c, Vf), new X(null, 2, 5, Y, [0, 0], null)), f = bh(d.acceleration, ch(e, f));
  return yh(yh(Xb.c(c, Kf), qh(f, d.R, d.ca, d.ga, d.X, d.ba)), new v(null, 2, [Z, Vf, kf, e], null));
}
function Ph(c) {
  return Kh(c, dd.c(Oh, od(function(c) {
    return nc(c, Kf) || nc(c, Vf);
  }, Dh(c))));
}
function Qh(c) {
  var d = qg.c($(c, Mg), 0), e = 0.02 * Vg, e = w($(c, Rf)) ? -1 * e : e, d = d + e;
  return yh(Xb.c(Xb.c(c, Rf), tg), sh(d));
}
function Rh(c) {
  return Kh(c, dd.c(Qh, od(function(c) {
    return nc(c, Rf) || nc(c, tg);
  }, Dh(c))));
}
;function Sh(c) {
  return new v(null, 2, [Z, gf, yg, c], null);
}
;function Th(c, d) {
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
var Vh = function() {
  function c(c, d) {
    var e = Uh(c), l, n = Dc(d);
    l = la(n);
    if (G(l)) {
      if (n = e.classList, w(n)) {
        l = G(l.split(/\s+/));
        for (var p = null, s = 0, q = 0;;) {
          if (q < s) {
            var u = p.F(null, q);
            n.add(u);
            q += 1;
          } else {
            if (l = G(l)) {
              p = l, hc(p) ? (l = Ab(p), q = Bb(p), p = l, s = O(l), l = q) : (l = I(p), n.add(l), l = L(p), p = null, s = 0), q = 0;
            } else {
              break;
            }
          }
        }
      } else {
        for (n = e.className, l = G(l.split(/\s+/)), p = null, q = s = 0;;) {
          if (q < s) {
            u = p.F(null, q), w(Th(n, u)) || (e.className = "" === n ? u : [B(n), B(" "), B(u)].join("")), q += 1;
          } else {
            if (l = G(l)) {
              p = l, hc(p) ? (l = Ab(p), q = Bb(p), p = l, s = O(l), l = q) : (l = I(p), w(Th(n, l)) || (e.className = "" === n ? l : [B(n), B(" "), B(l)].join("")), l = L(p), p = null, s = 0), q = 0;
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
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      c = Uh(c);
      f = G(Ub.c(h, f));
      h = null;
      for (var p = 0, s = 0;;) {
        if (s < p) {
          var q = h.F(null, s);
          d.c(c, q);
          s += 1;
        } else {
          if (f = G(f)) {
            h = f, hc(h) ? (f = Ab(h), s = Bb(h), h = f, p = O(f), f = s) : (f = I(h), d.c(c, f), f = L(h), h = null, p = 0), s = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
function Wh(c) {
  return "string" === typeof c ? c : Pg.c(" ", dd.c(function(c) {
    var e = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return[B(Dc(e)), B(":"), B(Dc(c)), B(";")].join("");
  }, c));
}
var Xh = function() {
  function c(c, d, e) {
    if (w(e)) {
      if (Yb(e)) {
        return c = Uh(c), c[Dc(d)] = e, c;
      }
      c = Uh(c);
      c.setAttribute(Dc(d), d === Lf ? Wh(e) : e);
      return c;
    }
    return null;
  }
  function d(c, d) {
    return e.d(Uh(c), d, "true");
  }
  var e = null, f = function() {
    function c(e, f, h, s) {
      var q = null;
      3 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, q);
    }
    function d(c, f, h, k) {
      if (!ad(O(k))) {
        throw Error([B("Assert failed: "), B(Se.i(M([Bc(new Kb(null, "even?", "even?", -1543640034, null), Bc(new Kb(null, "count", "count", -1545680184, null), new Kb(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      c = Uh(c);
      f = G(N(new X(null, 2, 5, Y, [f, h], null), qd.c(2, k)));
      h = null;
      for (var q = k = 0;;) {
        if (q < k) {
          var u = h.F(null, q), z = P.d(u, 0, null), u = P.d(u, 1, null);
          e.d(c, z, u);
          q += 1;
        } else {
          if (f = G(f)) {
            hc(f) ? (k = Ab(f), f = Bb(f), h = k, k = O(k)) : (k = I(f), h = P.d(k, 0, null), k = P.d(k, 1, null), e.d(c, h, k), f = L(f), h = null, k = 0), q = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    c.m = 3;
    c.j = function(c) {
      var e = I(c);
      c = L(c);
      var f = I(c);
      c = L(c);
      var h = I(c);
      c = J(c);
      return d(e, f, h, c);
    };
    c.i = d;
    return c;
  }(), e = function(e, k, l, n) {
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
function Yh(c, d) {
  return w(d) ? Uh(c).getAttribute(Dc(d)) : null;
}
;var Zh, $h, ai, bi;
function ci() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
bi = ai = $h = Zh = !1;
var di;
if (di = ci()) {
  var ei = aa.navigator;
  Zh = 0 == di.indexOf("Opera");
  $h = !Zh && -1 != di.indexOf("MSIE");
  ai = !Zh && -1 != di.indexOf("WebKit");
  bi = !Zh && !ai && "Gecko" == ei.product;
}
var fi = Zh, gi = $h, hi = bi, ii = ai;
function ji() {
  var c = aa.document;
  return c ? c.documentMode : void 0;
}
var ki;
a: {
  var li = "", mi;
  if (fi && aa.opera) {
    var ni = aa.opera.version, li = "function" == typeof ni ? ni() : ni
  } else {
    if (hi ? mi = /rv\:([^\);]+)(\)|;)/ : gi ? mi = /MSIE\s+([^\);]+)(\)|;)/ : ii && (mi = /WebKit\/(\S+)/), mi) {
      var oi = mi.exec(ci()), li = oi ? oi[1] : ""
    }
  }
  if (gi) {
    var pi = ji();
    if (pi > parseFloat(li)) {
      ki = String(pi);
      break a;
    }
  }
  ki = li;
}
var qi = {};
function ri(c) {
  var d;
  if (!(d = qi[c])) {
    d = 0;
    for (var e = la(String(ki)).split("."), f = la(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
      var l = e[k] || "", n = f[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = p.exec(l) || ["", "", ""], u = s.exec(n) || ["", "", ""];
        if (0 == q[0].length && 0 == u[0].length) {
          break;
        }
        d = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == u[2].length) ? -1 : (0 == q[2].length) > (0 == u[2].length) ? 1 : 0) || (q[2] < u[2] ? -1 : q[2] > u[2] ? 1 : 0);
      } while (0 == d);
    }
    d = qi[c] = 0 <= d;
  }
  return d;
}
var si = aa.document, ti = si && gi ? ji() || ("CSS1Compat" == si.compatMode ? parseInt(ki, 10) : 5) : void 0;
var ui;
(ui = !gi) || (ui = gi && 9 <= ti);
var vi = ui, wi = gi && !ri("9");
!ii || ri("528");
hi && ri("1.9b") || gi && ri("8") || fi && ri("9.5") || ii && ri("528");
hi && !ri("8") || gi && ri("9");
function xi() {
  0 != yi && ca(this);
}
var yi = 0;
function zi(c, d) {
  this.type = c;
  this.currentTarget = this.target = d;
}
zi.prototype.Ua = !1;
zi.prototype.defaultPrevented = !1;
zi.prototype.ib = !0;
zi.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.ib = !1;
};
function Ai(c) {
  Ai[" "](c);
  return c;
}
Ai[" "] = function() {
};
function Bi(c, d) {
  c && this.init(c, d);
}
ka(Bi, zi);
m = Bi.prototype;
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
  zi.call(this, e);
  this.target = c.target || c.srcElement;
  this.currentTarget = d;
  var f = c.relatedTarget;
  if (f) {
    if (hi) {
      var h;
      a: {
        try {
          Ai(f.nodeName);
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
  this.offsetX = ii || void 0 !== c.offsetX ? c.offsetX : c.layerX;
  this.offsetY = ii || void 0 !== c.offsetY ? c.offsetY : c.layerY;
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
  Bi.nc.preventDefault.call(this);
  var c = this.Wb;
  if (c.preventDefault) {
    c.preventDefault();
  } else {
    if (c.returnValue = !1, wi) {
      try {
        if (c.ctrlKey || 112 <= c.keyCode && 123 >= c.keyCode) {
          c.keyCode = -1;
        }
      } catch (d) {
      }
    }
  }
};
function Ci(c) {
  return new v(null, 2, [Z, cg, Tf, c], null);
}
function Di(c, d) {
  var e = Hh(c), f = $(c, qf).R, h = $(c, qf).X;
  return bh(f, fh(h, ih(ch(d, e))));
}
var Ei = function() {
  function c(c) {
    return new v(null, 2, [Z, Df, Ag, c], null);
  }
  function d() {
    return e.e(Kd);
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
function Fi(c, d) {
  return c.ea - d.ea;
}
function Gi(c, d) {
  return c.T - d.T;
}
function Hi(c) {
  var d = [];
  for (c = Dh(c);;) {
    if (G(c)) {
      var e = I(c);
      if (nc(e, Df)) {
        var f = $(e, Gf);
        null != f && (f.id = Gh(e), d.push(f));
      }
      c = L(c);
    } else {
      break;
    }
  }
  a: {
    c = d.sort(Fi);
    for (var d = d.slice(0).sort(Gi), e = O(d), h = 0, k = 0, l = Ce, n = tb(Ce);;) {
      if (h < e && k < e) {
        var f = c[h], p = d[k], s = f.id;
        if (f.ea < p.T) {
          h += 1;
          p = Ub.c(l, f);
          b: {
            for (;;) {
              if (G(l)) {
                var q = I(l);
                if (!w(q)) {
                  throw Error([B("Assert failed: "), B(Se.i(M([new Kb(null, "aabb-active", "aabb-active", 381724364, null)], 0)))].join(""));
                }
                q.ka < f.ja && f.ka < q.ja && (q = 0 < Ib(q.id, s) ? new X(null, 2, 5, Y, [q.id, s], null) : new X(null, 2, 5, Y, [s, q.id], null), n = ub(n, q));
                l = L(l);
              } else {
                f = n;
                break b;
              }
            }
            f = void 0;
          }
          l = p;
          n = f;
        } else {
          if (Jb) {
            f = h, s = k + 1, p = bc.c(l, p), h = f, k = s, l = p;
          } else {
            c = null;
            break a;
          }
        }
      } else {
        c = vb(n);
        break a;
      }
    }
    c = void 0;
  }
  return c;
}
function Ii(c, d, e, f) {
  return d + f > dh(ch(c, e));
}
function Ji(c, d) {
  function e(c) {
    var d = $(c, Gf).T, e = Hh(c);
    c = P.d(e, 0, null);
    e = P.d(e, 1, null);
    d = Xg.e ? Xg.e(d - c) : Xg.call(null, d - c);
    if (0 > d) {
      throw Error([B("Assert failed: "), B("The circle radius cannot be negative."), B("\n"), B(Se.i(M([Bc(new Kb(null, "not", "not", -1640422260, null), Bc(new Kb(null, "\x3c", "\x3c", -1640531467, null), new Kb(null, "r", "r", -1640531413, null), 0))], 0)))].join(""));
    }
    return new X(null, 2, 5, Y, [new X(null, 2, 5, Y, [c, e], null), d], null);
  }
  return od(function(d) {
    return S.c(Ii, Qc.c(e(Bh(c, I(d))), e(Bh(c, I(L(d))))));
  }, d);
}
function Ki(c, d, e) {
  c = Hh(d);
  var f = Hh(e), h = $(d, Gf).T, k = $(e, Gf).T, l = ch(f, c), h = Xg.e ? Xg.e(h - I(c)) : Xg.call(null, h - I(c)), f = Xg.e ? Xg.e(k - I(f)) : Xg.call(null, k - I(f)), k = dh(l);
  return 0 === P.c(l, 0) && P.c(l, 0) === P.c(l, 1) ? new v(null, 3, [lg, Gh(d), Mf, Gh(e), ng, new X(null, 1, 5, Y, [new v(null, 3, [wg, h, Of, new X(null, 2, 5, Y, [1, 0], null), jf, c], null)], null)], null) : k > h + f ? new v(null, 3, [lg, Gh(d), Mf, Gh(e), ng, Kd], null) : Jb ? (l = jh(l), new v(null, 3, [lg, Gh(d), Mf, Gh(e), ng, new X(null, 1, 5, Y, [new v(null, 3, [wg, h + f - k, Of, l, jf, bh(fh(h, l), c)], null)], null)], null)) : null;
}
function Li(c, d) {
  return Kh(c, md.c(function(d) {
    var f = lc(d) ? S.c(ve, d) : d, h = Q.c(f, ng);
    d = Q.c(f, Mf);
    f = Q.c(f, lg);
    if (G(h)) {
      var h = I(h), k = jf.e(h), f = Bh(c, f), l = Bh(c, d);
      d = Of.e(h);
      var n = Di(f, k), p = Di(l, k), n = ch(p, n), s = gh(n, d);
      if (0 < s) {
        d = Kd;
      } else {
        var h = wg.e(h), p = $(f, qf), n = $(l, qf), q = Jh(f), u = Jh(l), z = Tf.c($(f, cg), Wg), F = Tf.c($(l, cg), Wg), H = gh(ih(ch(k, Hh(f))), d), k = gh(ih(ch(k, Hh(l))), d), s = -2 * s / (1 / q + 1 / u + H * H / z + k * k / F), q = ch(p.R, fh(s / q, d)), u = bh(n.R, fh(s / u, d)), z = p.X + H * s / z, k = n.X - k * s / F;
        fh(0.5 * h, d);
        f = yh(f, qh(p.acceleration, q, p.ca, p.ga, z, p.ba));
        l = yh(l, qh(n.acceleration, u, n.ca, n.ga, k, n.ba));
        w(w(h) ? 0 < h : h) ? (n = Jh(f), k = Jh(l), p = Hh(f), F = Hh(l), d = fh(h, d), d = new X(null, 2, 5, Y, [yh(f, rh(ch(p, fh(1 / n, d)))), yh(l, rh(bh(F, fh(1 / k, d))))], null)) : d = new X(null, 2, 5, Y, [f, l], null);
      }
    } else {
      d = Kd;
    }
    return d;
  }, d));
}
function Mi(c, d) {
  return G(d) ? Li(c, dd.c(cd.d(S, Ki, c), od(cd.c(Yc, $c), dd.c(cd.c(dd, cd.c(Bh, c)), d)))) : c;
}
function Ni(c) {
  var d = Hi(c), e = Ji(c, d), f = U.d(function(c, d) {
    return function(e, f) {
      var p = I(f), s = I(L(f));
      return ud.d(ud.d(e, new X(null, 1, 5, Y, [p], null), function(c, d) {
        return function(c) {
          return Ub.c(c, d);
        };
      }(p, s, c, d)), new X(null, 1, 5, Y, [s], null), function(c) {
        return function(d) {
          return Ub.c(d, c);
        };
      }(p, s, c, d));
    };
  }(d, e), Zd, e);
  return Kh(c, dd.c(function(c) {
    return yh(c, Ei.e(Q.c(f, Gh(c))));
  }, od(function(c) {
    return nc(c, Df);
  }, Dh(c))));
}
function Oi(c, d) {
  function e(c) {
    return nc(c, zg) && nc(c, qf);
  }
  return Kh(d, dd.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    c = Xg.e ? Xg.e(Jh(d) * dh(ch($(c, qf).R, $(d, qf).R))) : Xg.call(null, Jh(d) * dh(ch($(c, qf).R, $(d, qf).R)));
    return yh(d, new v(null, 2, [Z, Eg, tf, c], null));
  }, od(function(c) {
    return Yc(e, c);
  }, od(function(c) {
    return I(L(c));
  }, dd.c(function(d) {
    return new X(null, 2, 5, Y, [d, Bh(c, Gh(d))], null);
  }, Dh(d))))));
}
function Pi(c) {
  return Oi(c, Mi(c, pd(Ce, md.c(function(c) {
    var e = Ag.e($(c, Df));
    return dd.c(function(e) {
      return De(new X(null, 2, 5, Y, [Gh(c), e], null));
    }, e);
  }, od(function(c) {
    return G(Ag.e($(c, Df)));
  }, od(function(c) {
    return nc(c, Df);
  }, Dh(c)))))));
}
;var Qi = function() {
  function c(c, d) {
    return new v(null, 3, [Z, rf, Uf, c, yf, d], null);
  }
  function d(c) {
    return new v(null, 3, [Z, rf, Uf, c, yf, c], null);
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
function Ri(c, d) {
  return new v(null, 4, [Z, Cg, Bf, c, sf, d, Kg, 20], null);
}
function Si(c) {
  for (var d = function() {
    return function(c, d) {
      var e = tf.e($(d, Eg)), f = eg.c($(d, eg), 0), e = e - 300;
      return 0 < e ? yh(d, new v(null, 2, [Z, eg, eg, f + e], null)) : d;
    };
  }(c), e = Dh(c), f = Sc(ff.e(c));;) {
    if (G(e)) {
      var h = I(e);
      xh.o(h, rf, Eg, Ef) ? (h = d(c, h), e = L(e), f = Uc(f, Gh(h), h)) : e = L(e);
    } else {
      return R.d(c, ff, vb(f));
    }
  }
}
function Ti(c) {
  for (var d = function() {
    return function(c, d) {
      var e = rd.c(d, new X(null, 2, 5, Y, [rf, yf], null)), f = rd.c(d, new X(null, 2, 5, Y, [rf, Uf], null)), h = rd.c(d, new X(null, 2, 5, Y, [eg, eg], null)), e = e - h;
      return yh(Xb.c(d, eg), Qi.c(f, e));
    };
  }(c), e = Dh(c), f = Sc(ff.e(c));;) {
    if (G(e)) {
      var h = I(e);
      xh.d(h, eg, rf) ? (h = d(c, h), e = L(e), f = Uc(f, Gh(h), h)) : e = L(e);
    } else {
      return R.d(c, ff, vb(f));
    }
  }
}
function Ui(c) {
  for (var d = G(Dh(c)), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var k = e.F(null, h);
      if (xh.o(k, Cg, gf, jf)) {
        var l = yg.e($(k, gf)), n = $(k, Cg), p = Bf.e(n), p = Bh(c, p), p = $(p, rf), s = Uf.e(p), q = yf.e(p), p = function() {
          var c = q / s;
          return 0 > c ? 0 : c;
        }(), u = sf.e(n), n = Kg.e(n), k = Hh(k);
        P.d(k, 0, null);
        P.d(k, 1, null);
        var k = u - 4, z = n - 4;
        l.clear();
        l.beginFill(5592405);
        l.drawRect(0, 0, u, n);
        l.endFill();
        l.beginFill(16711680);
        l.drawRect(2, 2, k, z);
        l.endFill();
        l.beginFill(65280);
        l.drawRect(2, 2, p * k, z);
        l.endFill();
      }
      h += 1;
    } else {
      if (d = G(d)) {
        if (hc(d)) {
          f = Ab(d), d = Bb(d), e = f, f = O(f);
        } else {
          l = I(d);
          if (xh.o(l, Cg, gf, jf)) {
            var e = yg.e($(l, gf)), p = $(l, Cg), f = Bf.e(p), f = Bh(c, f), f = $(f, rf), F = Uf.e(f), H = yf.e(f), f = function() {
              var c = H / F;
              return 0 > c ? 0 : c;
            }(), h = sf.e(p), p = Kg.e(p), l = Hh(l);
            P.d(l, 0, null);
            P.d(l, 1, null);
            l = h - 4;
            u = p - 4;
            e.clear();
            e.beginFill(5592405);
            e.drawRect(0, 0, h, p);
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
;var Vi = new v(null, 6, [jf, new X(null, 2, 5, Y, [0, 0], null), uf, new X(null, 2, 5, Y, [0, 0], null), fg, 0, Mg, 0, Cf, 15, Hf, 8875054], null);
function Wi(c) {
  var d = ze.i(M([Vi, c], 0)), e = Cf.e(d);
  c = Vg * e * e;
  var f = jf.e(d), h = P.d(f, 0, null), f = P.d(f, 1, null), k = Hf.e(d), d = Ah.i(M([rh(new X(null, 2, 5, Y, [h, f], null)), sh(Mg.e(d)), qh(new X(null, 2, 5, Y, [0, 0], null), uf.e(d), Wg, 0, fg.e(d), Wg), new v(null, 2, [Z, zg, zg, c], null), new v(null, 1, [Z, vf], null), Ci(0.25 * Vg * (Yg.c ? Yg.c(e, 4) : Yg.call(null, e, 4))), uh.c(new X(null, 2, 5, Y, [h - e, f - e], null), new X(null, 2, 5, Y, [h + e, f + e], null)), Sh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(k);
    c.drawCircle(0, 0, e);
    c.endFill();
    return c;
  }())], 0));
  return 50 > c ? yh(d, th.e(100)) : yh(yh(d, Ei.q()), Qi.e(0.5 * Vg * e * e));
}
var Xi = function() {
  function c(c, d, e) {
    for (;;) {
      if (1 > d) {
        return e;
      }
      var l = sc.e(c);
      c -= l;
      d -= 1;
      e = Ub.c(e, l);
    }
  }
  function d(c, d) {
    return e.d(c, d, Kd);
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
function Yi(c, d) {
  var e = $(d, Gf), f = Jh(d), h = 0 * f, k = f - h, l = Ye(Ie.c(2, 5)), n = Xi.c(k, l), p = Hh(d), s = P.d(p, 0, null), q = P.d(p, 1, null), u = function() {
    return function(c, d, e, f, h, k, l, n, p) {
      return function eh(q) {
        return new Fc(null, function(c) {
          return function() {
            for (;;) {
              var d = G(q);
              if (d) {
                if (hc(d)) {
                  var e = Ab(d), f = O(e), h = new Hc(Array(f), 0);
                  a: {
                    for (var k = 0;;) {
                      if (k < f) {
                        C.c(e, k);
                        var l = new X(null, 2, 5, Y, [Ye(Ie.c(c.ea, c.T)), Ye(Ie.c(c.ka, c.ja))], null);
                        h.add(l);
                        k += 1;
                      } else {
                        e = !0;
                        break a;
                      }
                    }
                    e = void 0;
                  }
                  return e ? Lc(h.la(), eh(Bb(d))) : Lc(h.la(), null);
                }
                I(d);
                return N(new X(null, 2, 5, Y, [Ye(Ie.c(c.ea, c.T)), Ye(Ie.c(c.ka, c.ja))], null), eh(J(d)));
              }
              return null;
            }
          };
        }(c, d, e, f, h, k, l, n, p), null, null);
      };
    }(e, f, h, k, l, n, p, s, q)(Ie.e(l));
  }(), z = dd.c(function() {
    return function(c) {
      return Di(d, c);
    };
  }(e, f, h, k, l, n, p, s, q, u), u), u = dd.o(function() {
    return function(c, e, f) {
      return Wi(new v(null, 5, [Hf, Og(), uf, e, fg, $(d, qf).X, Cf, Zg.e ? Zg.e(f / Vg) : Zg.call(null, f / Vg), jf, c], null));
    };
  }(e, f, h, k, l, n, p, s, q, u, z), u, z, n), z = R.d(c, ff, Xb.c(ff.e(c), Gh(d)));
  return Kh(z, u);
}
function Zi(c) {
  return U.d(Yi, c, od(function(c) {
    return 1 > yf.e($(c, rf));
  }, od(function(c) {
    return xh.d(c, vf, rf);
  }, Dh(c))));
}
;var $i = 0;
function aj() {
}
m = aj.prototype;
m.key = 0;
m.Qa = !1;
m.bb = !1;
m.init = function(c, d, e, f, h, k) {
  if ("function" == t(c)) {
    this.Xb = !0;
  } else {
    if (c && c.handleEvent && "function" == t(c.handleEvent)) {
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
  this.key = ++$i;
  this.Qa = !1;
};
m.handleEvent = function(c) {
  return this.Xb ? this.Ha.call(this.Jb || this.src, c) : this.Ha.handleEvent.call(this.Ha, c);
};
var bj = {}, cj = {}, dj = {}, ej = {};
function fj(c, d, e, f, h) {
  if ("array" == t(d)) {
    for (var k = 0;k < d.length;k++) {
      fj(c, d[k], e, f, h);
    }
  } else {
    a: {
      if (!d) {
        throw Error("Invalid event type");
      }
      f = !!f;
      var l = cj;
      d in l || (l[d] = {sa:0, na:0});
      l = l[d];
      f in l || (l[f] = {sa:0, na:0}, l.sa++);
      var l = l[f], k = ca(c), n;
      l.na++;
      if (l[k]) {
        n = l[k];
        for (var p = 0;p < n.length;p++) {
          if (l = n[p], l.Ha == e && l.Jb == h) {
            if (l.Qa) {
              break;
            }
            n[p].bb = !1;
            c = n[p];
            break a;
          }
        }
      } else {
        n = l[k] = [], l.sa++;
      }
      p = gj();
      l = new aj;
      l.init(e, p, c, d, f, h);
      l.bb = !1;
      p.src = c;
      p.Ha = l;
      n.push(l);
      dj[k] || (dj[k] = []);
      dj[k].push(l);
      c.addEventListener ? c != aa && c.Vb || c.addEventListener(d, p, f) : c.attachEvent(d in ej ? ej[d] : ej[d] = "on" + d, p);
      c = l;
    }
    bj[c.key] = c;
  }
}
function gj() {
  var c = hj, d = vi ? function(e) {
    return c.call(d.src, d.Ha, e);
  } : function(e) {
    e = c.call(d.src, d.Ha, e);
    if (!e) {
      return e;
    }
  };
  return d;
}
function ij(c, d, e, f, h) {
  if ("array" == t(d)) {
    for (var k = 0;k < d.length;k++) {
      ij(c, d[k], e, f, h);
    }
  } else {
    f = !!f;
    a: {
      k = cj;
      if (d in k && (k = k[d], f in k && (k = k[f], c = ca(c), k[c]))) {
        c = k[c];
        break a;
      }
      c = null;
    }
    if (c) {
      for (k = 0;k < c.length;k++) {
        if (c[k].Ha == e && c[k].capture == f && c[k].Jb == h) {
          jj(c[k].key);
          break;
        }
      }
    }
  }
}
function jj(c) {
  var d = bj[c];
  if (d && !d.Qa) {
    var e = d.src, f = d.type, h = d.$b, k = d.capture;
    e.removeEventListener ? e != aa && e.Vb || e.removeEventListener(f, h, k) : e.detachEvent && e.detachEvent(f in ej ? ej[f] : ej[f] = "on" + f, h);
    e = ca(e);
    if (dj[e]) {
      var h = dj[e], l = oa(h, d);
      0 <= l && na.splice.call(h, l, 1);
      0 == h.length && delete dj[e];
    }
    d.Qa = !0;
    if (d = cj[f][k][e]) {
      d.Yb = !0, kj(f, k, e, d);
    }
    delete bj[c];
  }
}
function kj(c, d, e, f) {
  if (!f.hb && f.Yb) {
    for (var h = 0, k = 0;h < f.length;h++) {
      f[h].Qa ? f[h].$b.src = null : (h != k && (f[k] = f[h]), k++);
    }
    f.length = k;
    f.Yb = !1;
    0 == k && (delete cj[c][d][e], cj[c][d].sa--, 0 == cj[c][d].sa && (delete cj[c][d], cj[c].sa--), 0 == cj[c].sa && delete cj[c]);
  }
}
function lj(c, d, e, f, h) {
  var k = 1;
  d = ca(d);
  if (c[d]) {
    var l = --c.na, n = c[d];
    n.hb ? n.hb++ : n.hb = 1;
    try {
      for (var p = n.length, s = 0;s < p;s++) {
        var q = n[s];
        q && !q.Qa && (k &= !1 !== mj(q, h));
      }
    } finally {
      c.na = Math.max(l, c.na), n.hb--, kj(e, f, d, n);
    }
  }
  return Boolean(k);
}
function mj(c, d) {
  c.bb && jj(c.key);
  return c.handleEvent(d);
}
function hj(c, d) {
  if (c.Qa) {
    return!0;
  }
  var e = c.type, f = cj;
  if (!(e in f)) {
    return!0;
  }
  var f = f[e], h, k;
  if (!vi) {
    var l;
    if (!(l = d)) {
      a: {
        l = ["window", "event"];
        for (var n = aa;h = l.shift();) {
          if (null != n[h]) {
            n = n[h];
          } else {
            l = null;
            break a;
          }
        }
        l = n;
      }
    }
    h = l;
    l = !0 in f;
    n = !1 in f;
    if (l) {
      if (0 > h.keyCode || void 0 != h.returnValue) {
        return!0;
      }
      a: {
        var p = !1;
        if (0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a;
          } catch (s) {
            p = !0;
          }
        }
        if (p || void 0 == h.returnValue) {
          h.returnValue = !0;
        }
      }
    }
    p = new Bi;
    p.init(h, this);
    h = !0;
    try {
      if (l) {
        for (var q = [], u = p.currentTarget;u;u = u.parentNode) {
          q.push(u);
        }
        k = f[!0];
        k.na = k.sa;
        for (var z = q.length - 1;!p.Ua && 0 <= z && k.na;z--) {
          p.currentTarget = q[z], h &= lj(k, q[z], e, !0, p);
        }
        if (n) {
          for (k = f[!1], k.na = k.sa, z = 0;!p.Ua && z < q.length && k.na;z++) {
            p.currentTarget = q[z], h &= lj(k, q[z], e, !1, p);
          }
        }
      } else {
        h = mj(c, p);
      }
    } finally {
      q && (q.length = 0);
    }
    return h;
  }
  e = new Bi(d, this);
  return h = mj(c, e);
}
;function nj() {
  xi.call(this);
}
ka(nj, xi);
m = nj.prototype;
m.Vb = !0;
m.Zb = null;
m.addEventListener = function(c, d, e, f) {
  fj(this, c, d, e, f);
};
m.removeEventListener = function(c, d, e, f) {
  ij(this, c, d, e, f);
};
m.dispatchEvent = function(c) {
  var d = c.type || c, e = cj;
  if (d in e) {
    if (ba(c)) {
      c = new zi(c, this);
    } else {
      if (c instanceof zi) {
        c.target = c.target || this;
      } else {
        var f = c;
        c = new zi(d, this);
        sa(c, f);
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
        c.currentTarget = h[l], f &= lj(k, h[l], c.type, !0, c) && !1 != c.ib;
      }
    }
    if (!1 in e) {
      if (k = e[!1], k.na = k.sa, d) {
        for (l = 0;!c.Ua && l < h.length && k.na;l++) {
          c.currentTarget = h[l], f &= lj(k, h[l], c.type, !1, c) && !1 != c.ib;
        }
      } else {
        for (h = this;!c.Ua && h && k.na;h = h.Zb) {
          c.currentTarget = h, f &= lj(k, h, c.type, !1, c) && !1 != c.ib;
        }
      }
    }
    c = Boolean(f);
  } else {
    c = !0;
  }
  return c;
};
var oj = function() {
  function c(c, d) {
    return new v(null, 3, [Z, ig, ag, c, of, d], null);
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
function pj(c) {
  var d = Ih(c), e = $(c, Gf), f = e.ea, e = e.T, d = hh(d), e = bh(Hh(c), fh(e - f, d)), f = P.d(e, 0, null), e = P.d(e, 1, null), d = fh(5, d);
  return Ah.i(M([rh(new X(null, 2, 5, Y, [f, e], null)), new v(null, 1, [Z, dg], null), Ei.q(), qh(new X(null, 2, 5, Y, [0, 0], null), bh(d, $(c, qf).R), Wg, 0, 0, Wg), th.e(60), uh.c(new X(null, 2, 5, Y, [f - 2, e - 2], null), new X(null, 2, 5, Y, [f + 2, e + 2], null)), Sh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(65280);
    c.drawCircle(0, 0, 2);
    c.endFill();
    return c;
  }())], 0));
}
function qj(c) {
  for (var d = function() {
    return function(c, d) {
      var e = $(d, ig);
      return yh(d, R.d(e, of, rc(of.e(e) - 1, ag.e(e))));
    };
  }(c), e = Dh(c), f = Sc(ff.e(c));;) {
    if (G(e)) {
      var h = I(e);
      xh.c(h, ig) ? (h = d(c, h), e = L(e), f = Uc(f, Gh(h), h)) : e = L(e);
    } else {
      return R.d(c, ff, vb(f));
    }
  }
}
function rj(c) {
  return R.d(c, ff, Tc(U.d(function(d, e) {
    if (xh.d(e, dg, Df)) {
      var f = Ag.e($(e, Df));
      return w(f) ? U.d(function(d, e) {
        var f = Bh(c, e);
        if (w(f)) {
          var n = eg.c($(f, eg), 0), f = yh(f, new v(null, 2, [Z, eg, eg, 100 + n], null)), f = wb(d, e, f)
        } else {
          f = d;
        }
        return f;
      }, Vc(d, Gh(e)), f) : d;
    }
    return d;
  }, Sc(ff.e(c)), Dh(c))));
}
;var sj = function() {
  function c(c) {
    var d = new v(null, 1, [cf, new v(null, 2, [sf, 800, Kg, 500], null)], null);
    return Ch(U.d(Ch, d, dd.c(function() {
      var c = Eh(d), e = Fh(d), c = Ye(Ie.e(c)), e = Ye(Ie.e(e)), f = Ye(Ie.c(10, 25)), p = Ye(Ie.c(-5, 5)), s = Ye(Ie.c(-5, 5)), q = 0.01 * (sc.e(4 * Vg) - 2 * Vg), u = 0.01 * (sc.e(4 * Vg) - 2 * Vg);
      return Wi(new v(null, 6, [Hf, Og(), jf, new X(null, 2, 5, Y, [c, e], null), uf, new X(null, 2, 5, Y, [p, s], null), fg, q, Mg, u, Cf, f], null));
    }, Ie.e(c))), Ah.i(M([rh(new X(null, 2, 5, Y, [400, 250], null)), new v(null, 2, [Z, ef, xg, new X(null, 2, 5, Y, [800, 500], null)], null), sh(0)], 0)));
  }
  function d() {
    return e.e(15);
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
function tj() {
  var c = sj.q(), d = Eh(c) / 2, e = Fh(c) / 2, d = Ah.i(M([rh(new X(null, 2, 5, Y, [d, e], null)), qh(new X(null, 2, 5, Y, [0, 0], null), new X(null, 2, 5, Y, [0, 0], null), 10, 0, 0, Wg), sh(0), Ei.q(), Qi.e(1E4), new v(null, 1, [Z, Ef], null), uh.c(new X(null, 2, 5, Y, [Eh(c) - 10, Fh(c) - 10], null), new X(null, 2, 5, Y, [Eh(c) + 10, Fh(c) + 10], null)), new v(null, 2, [Z, zg, zg, 100 * Vg], null), oj.e(10), Ci(0.25 * Vg * (Yg.c ? Yg.c(10, 4) : Yg.call(null, 10, 4))), Sh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(255);
    c.moveTo(10, 0);
    c.lineTo(-6, -6);
    c.lineTo(-6, 6);
    c.endFill();
    return c;
  }())], 0)), e = Ah.i(M([rh(new X(null, 2, 5, Y, [10, Fh(c) - 30], null)), Sh(new PIXI.Graphics), new v(null, 2, [Z, jg, jg, 2], null), Ri(Gh(d), Eh(c) - 20)], 0));
  return Ch(Ch(c, d), e);
}
;function uj(c, d) {
  xi.call(this);
  this.gb = c || 1;
  this.Lb = d || aa;
  this.lb = ia(this.oc, this);
  this.Kb = ja();
}
ka(uj, nj);
uj.prototype.enabled = !1;
uj.prototype.jb = null;
uj.prototype.oc = function() {
  if (this.enabled) {
    var c = ja() - this.Kb;
    0 < c && c < 0.8 * this.gb ? this.jb = this.Lb.setTimeout(this.lb, this.gb - c) : (this.dispatchEvent(vj), this.enabled && (this.jb = this.Lb.setTimeout(this.lb, this.gb), this.Kb = ja()));
  }
};
uj.prototype.start = function() {
  this.enabled = !0;
  this.jb || (this.jb = this.Lb.setTimeout(this.lb, this.gb), this.Kb = ja());
};
var vj = "tick";
function wj(c) {
  return Array.prototype.slice.call(c);
}
;var xj = new Ae(null, new v(null, 2, ["svg", null, "line", null], null), null), yj = {};
function zj(c) {
  if (c ? c.Da : c) {
    return c.Da(c);
  }
  var d;
  d = zj[t(null == c ? null : c)];
  if (!d && (d = zj._, !d)) {
    throw A("PElement.-elem", c);
  }
  return d.call(null, c);
}
function Aj(c, d) {
  var e = c.indexOf("#", d), f = c.indexOf(".", d), h = Math.min(e, f);
  return 0 > h ? Math.max(e, f) : h;
}
function Bj(c) {
  var d = Dc(c), e = Aj(d, 0);
  c = 0 < e ? d.substring(0, e) : 0 === e ? "div" : y ? d : null;
  c = w(xj.e ? xj.e(c) : xj.call(null, c)) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c);
  if (0 <= e) {
    for (d = d.substring(e);;) {
      var e = Aj(d, 1), f = 0 <= e ? d.substring(0, e) : d, h = f.charAt(0);
      if (Hb.c("#", h)) {
        c.setAttribute("id", f.substring(1));
      } else {
        if (Hb.c(".", h)) {
          Vh.c(c, f.substring(1));
        } else {
          if (y) {
            throw Error([B("No matching clause: "), B(f.charAt(0))].join(""));
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
var Cj = function() {
  function c(c, d) {
    if (d ? w(w(null) ? null : d.Aa) || (d.Ib ? 0 : x(yj, d)) : x(yj, d)) {
      return c.appendChild(zj(d)), c;
    }
    if (lc(d)) {
      for (var k = G(d), l = null, n = 0, p = 0;;) {
        if (p < n) {
          var s = l.F(null, p);
          e.c(c, s);
          p += 1;
        } else {
          if (k = G(k)) {
            l = k, hc(l) ? (k = Ab(l), p = Bb(l), l = k, n = O(k), k = p) : (k = I(l), e.c(c, k), k = L(l), l = null, n = 0), p = 0;
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
        throw[B("Don't know how to make node from: "), B(Se.i(M([d], 0)))].join("");
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
function Uh(c) {
  return(c ? w(w(null) ? null : c.Aa) || (c.Ib ? 0 : x(yj, c)) : x(yj, c)) ? zj(c) : Cj.e(c);
}
yj.string = !0;
zj.string = function(c) {
  return c instanceof V ? Bj(c) : document.createTextNode("" + B(c));
};
yj.number = !0;
zj.number = function(c) {
  return document.createTextNode("" + B(c));
};
X.prototype.Aa = !0;
X.prototype.Da = function() {
  for (var c = P.d(this, 0, null), d = P.d(this, 1, null), e = vc(this, 2), c = Bj(c), f = fc(d) && !(d ? w(w(null) ? null : d.Aa) || (d.Ib ? 0 : x(yj, d)) : x(yj, d)) ? d : null, d = w(f) ? e : N(d, e), e = G(f), f = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = f.F(null, k), n = P.d(l, 0, null), l = P.d(l, 1, null), p = n;
      if (Hb.c(Jg, p)) {
        for (var n = G(l), l = null, s = p = 0;;) {
          if (s < p) {
            var q = l.F(null, s);
            Vh.c(c, q);
            s += 1;
          } else {
            if (n = G(n)) {
              l = n, hc(l) ? (n = Ab(l), s = Bb(l), l = n, p = O(n), n = s) : (n = I(l), Vh.c(c, n), n = L(l), l = null, p = 0), s = 0;
            } else {
              break;
            }
          }
        }
      } else {
        Hb.c(Af, p) ? Vh.c(c, l) : y && Xh.d(c, n, l);
      }
      k += 1;
    } else {
      if (e = G(e)) {
        if (hc(e)) {
          h = Ab(e), e = Bb(e), f = h, h = O(h);
        } else {
          h = I(e);
          f = P.d(h, 0, null);
          h = P.d(h, 1, null);
          k = f;
          if (Hb.c(Jg, k)) {
            for (f = G(h), h = null, n = k = 0;;) {
              if (n < k) {
                l = h.F(null, n), Vh.c(c, l), n += 1;
              } else {
                if (f = G(f)) {
                  h = f, hc(h) ? (f = Ab(h), n = Bb(h), h = f, k = O(f), f = n) : (f = I(h), Vh.c(c, f), f = L(h), h = null, k = 0), n = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            Hb.c(Af, k) ? Vh.c(c, h) : y && Xh.d(c, f, h);
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
  c.appendChild(Uh(d));
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
} catch (Dj) {
  if (Dj instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
  } else {
    if (y) {
      throw Dj;
    }
  }
}
;var Ej = function() {
  function c(c, d) {
    var e = Uh(c);
    e.appendChild(Uh(d));
    return e;
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p);
    }
    function e(c, f, h) {
      c = Uh(c);
      f = G(N(f, h));
      h = null;
      for (var p = 0, s = 0;;) {
        if (s < p) {
          var q = h.F(null, s);
          d.c(c, q);
          s += 1;
        } else {
          if (f = G(f)) {
            h = f, hc(h) ? (f = Ab(h), s = Bb(h), h = f, p = O(f), f = s) : (f = I(h), d.c(c, f), f = L(h), h = null, p = 0), s = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    c.m = 2;
    c.j = function(c) {
      var d = I(c);
      c = L(c);
      var f = I(c);
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
function Fj(c, d) {
  var e = Uh(c);
  e.innerHTML = "";
  Ej.c(e, d);
}
var Hj = function Gj(d) {
  return(null == d ? 0 : d ? d.l & 8 || d.sc || (d.l ? 0 : x(Ka, d)) : x(Ka, d)) ? Pg.c(" ", dd.c(Gj, d)) : "string" === typeof d || d instanceof V ? Dc(d) : null;
};
function Ij(c) {
  return Ge($c, jd(function(c) {
    return c.parentNode;
  }, Uh(c)));
}
var Jj = function() {
  function c(c, d) {
    var e = wj(Uh(Uh(c)).querySelectorAll(Hj(d)));
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
}(), Kj = function() {
  function c(c, d, e) {
    var l = Uh(c);
    c = Uh(d);
    return I(od(Jj.c(l, e), Ge(function(c) {
      return c !== l;
    }, Ij(c))));
  }
  function d(c, d) {
    return I(od(Jj.e(d), Ij(Uh(c))));
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
}(), Lj = pd(Zd, dd.c(function(c) {
  var d = P.d(c, 0, null);
  c = P.d(c, 1, null);
  return new X(null, 2, 5, Y, [d, new $d([c, function(c) {
    return function(d) {
      var h = d.relatedTarget, k;
      k = d.mc;
      k = w(k) ? k : d.currentTarget;
      w(h) && (h = Uh(h), k = Uh(k), h = w(k.contains) ? k.contains(h) : w(k.compareDocumentPosition) ? 0 != (k.compareDocumentPosition(h) & 16) : null);
      return w(h) ? null : c.e ? c.e(d) : c.call(null, d);
    };
  }])], null);
}, new v(null, 2, [rg, xf, Wf, If], null)));
function Mj(c, d, e) {
  return function(f) {
    var h = Kj.d(Uh(c), f.target, d);
    return w(w(h) ? Ca(Yh.c ? Yh.c(h, Hg) : Yh.call(null, h, Hg)) : h) ? (f.mc = h, e.e ? e.e(f) : e.call(null, f)) : null;
  };
}
function Nj(c) {
  c = Uh(c).jc;
  return w(c) ? c : Zd;
}
var Oj = function() {
  function c(c, f, h) {
    var k = null;
    2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
    return d.call(this, c, f, k);
  }
  function d(c, d, h) {
    c = Uh(c);
    return c.jc = S.d(d, Nj(c), h);
  }
  c.m = 2;
  c.j = function(c) {
    var f = I(c);
    c = L(c);
    var h = I(c);
    c = J(c);
    return d(f, h, c);
  };
  c.i = d;
  return c;
}();
function Pj(c) {
  return ec(c) ? Je.c(function(c) {
    return Uh(I(c));
  }, J).call(null, c) : new X(null, 2, 5, Y, [Uh(c), null], null);
}
var Qj = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h);
  }
  function d(c, d) {
    if (!ad(O(d))) {
      throw Error([B("Assert failed: "), B(Se.i(M([Bc(new Kb(null, "even?", "even?", -1543640034, null), Bc(new Kb(null, "count", "count", -1545680184, null), new Kb(null, "type-fs", "type-fs", 1801297401, null)))], 0)))].join(""));
    }
    for (var h = Pj(c), k = P.d(h, 0, null), h = P.d(h, 1, null), l = G(qd.c(2, d)), n = null, p = 0, s = 0;;) {
      if (s < p) {
        for (var q = n.F(null, s), u = P.d(q, 0, null), q = P.d(q, 1, null), u = G(Q.d(Lj, u, new $d([u, $c]))), z = null, F = 0, H = 0;;) {
          if (H < F) {
            var T = z.F(null, H), fa = P.d(T, 0, null), T = P.d(T, 1, null), T = (w(h) ? cd.d(Mj, k, h) : $c).call(null, T.e ? T.e(q) : T.call(null, q));
            Oj.i(k, td, M([new X(null, 3, 5, Y, [h, fa, q], null), T], 0));
            w(k.addEventListener) ? k.addEventListener(Dc(fa), T) : k.attachEvent(Dc(fa), T);
            H += 1;
          } else {
            if (u = G(u)) {
              hc(u) ? (F = Ab(u), u = Bb(u), z = F, F = O(F)) : (F = I(u), z = P.d(F, 0, null), F = P.d(F, 1, null), F = (w(h) ? cd.d(Mj, k, h) : $c).call(null, F.e ? F.e(q) : F.call(null, q)), Oj.i(k, td, M([new X(null, 3, 5, Y, [h, z, q], null), F], 0)), w(k.addEventListener) ? k.addEventListener(Dc(z), F) : k.attachEvent(Dc(z), F), u = L(u), z = null, F = 0), H = 0;
            } else {
              break;
            }
          }
        }
        s += 1;
      } else {
        if (l = G(l)) {
          if (hc(l)) {
            p = Ab(l), l = Bb(l), n = p, p = O(p);
          } else {
            n = I(l);
            p = P.d(n, 0, null);
            n = P.d(n, 1, null);
            p = G(Q.d(Lj, p, new $d([p, $c])));
            s = null;
            for (u = q = 0;;) {
              if (u < q) {
                F = s.F(null, u), z = P.d(F, 0, null), F = P.d(F, 1, null), F = (w(h) ? cd.d(Mj, k, h) : $c).call(null, F.e ? F.e(n) : F.call(null, n)), Oj.i(k, td, M([new X(null, 3, 5, Y, [h, z, n], null), F], 0)), w(k.addEventListener) ? k.addEventListener(Dc(z), F) : k.attachEvent(Dc(z), F), u += 1;
              } else {
                if (p = G(p)) {
                  hc(p) ? (q = Ab(p), p = Bb(p), s = q, q = O(q)) : (q = I(p), s = P.d(q, 0, null), q = P.d(q, 1, null), q = (w(h) ? cd.d(Mj, k, h) : $c).call(null, q.e ? q.e(n) : q.call(null, n)), Oj.i(k, td, M([new X(null, 3, 5, Y, [h, s, n], null), q], 0)), w(k.addEventListener) ? k.addEventListener(Dc(s), q) : k.attachEvent(Dc(s), q), p = L(p), s = null, q = 0), u = 0;
                } else {
                  break;
                }
              }
            }
            l = L(l);
            n = null;
            p = 0;
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
    var f = I(c);
    c = J(c);
    return d(f, c);
  };
  c.i = d;
  return c;
}();
var Rj = new v(null, 5, [38, Fg, 40, Dg, 37, kg, 39, hg, 32, gg], null), Sj = pd(Ce, xe(Rj)), Tj = Ve.e(Kd), Uj = Ve.e(Ce);
function Vj(c, d) {
  var e = d.keyCode;
  return nc(Sj, e) ? (w(d.preventDefault) ? d.preventDefault() : d.returnValue = !1, Xe.d(Tj, Ub, new X(null, 2, 5, Y, [c, Rj.e ? Rj.e(e) : Rj.call(null, e)], null)), !1) : null;
}
function Wj() {
  var c = eb(Tj);
  Xe.c(Uj, function(d) {
    return U.d(function(c, d) {
      var h = P.d(d, 0, null), k = P.d(d, 1, null);
      return Hb.c(h, Yf) ? Ub.c(c, k) : Hb.c(h, mg) ? bc.c(c, k) : Jb ? c : null;
    }, d, c);
  });
}
function Xj(c) {
  var d = lh.c(eb(Uj), pd(Ce, od($c, dd.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return Hb.c(Yf, d) ? c : null;
  }, eb(Tj)))));
  Wj();
  We(Tj, Kd);
  return R.d(c, Nf, d);
}
Qj.i(document, M([mg, function(c) {
  return Vj(mg, c);
}], 0));
Qj.i(document, M([Yf, function(c) {
  return Vj(Yf, c);
}], 0));
var Yj = Ve.e(Zd);
Xe.c(Yj, function() {
  return tj();
});
var Zj = function(c, d, e) {
  var f = PIXI.autoDetectRenderer(1, 1, null, !1, !0), h = new PIXI.Stage(0), k = new X(null, 3, 5, Y, [new v(null, 3, [sg, 0, Z, df, gf, new PIXI.DisplayObjectContainer], null), new v(null, 3, [sg, 1, Z, Pf, gf, new PIXI.DisplayObjectContainer], null), new v(null, 4, [sg, 2, Z, Qf, Bg, !0, gf, new PIXI.DisplayObjectContainer], null)], null);
  Ke.e(dd.c(function(c) {
    return h.addChild(gf.e(c));
  }, k));
  Fj(e, f.view);
  return new v(null, 5, [pf, k, hf, f, Ng, h, Lg, c, Xf, d], null);
}(window, Eh(eb(Yj)) / Fh(eb(Yj)), document.getElementById("content")), ak = function() {
  var c = Ve.e(new v(null, 2, [zf, null, pg, null], null));
  return function(d, e) {
    for (var f = pd(Zd, dd.c(Je.c(sg, gf), e)), h = eb(c), k = zf.e(h), h = pg.e(h), l = {}, n = G(Dh(d)), p = null, s = 0, q = 0;;) {
      if (q < s) {
        var u = p.F(null, q), z = yg.e($(u, gf));
        if (null != z) {
          l[Gh(u)] = !0;
          if (null == z.parent) {
            var F = jg.c($(u, jg), 1);
            Q.c(f, F).addChild(z);
          }
          var H = Hh(u), F = P.d(H, 0, null), H = P.d(H, 1, null), T = function() {
            var c = Ih(u);
            return w(c) ? c : 0;
          }(), fa = z.position;
          fa.x = F;
          fa.y = H;
          z.rotation = T;
        }
        q += 1;
      } else {
        if (n = G(n)) {
          if (hc(n)) {
            s = Ab(n), n = Bb(n), p = s, s = O(s);
          } else {
            var qa = I(n), p = yg.e($(qa, gf));
            null != p && (l[Gh(qa)] = !0, null == p.parent && (s = jg.c($(qa, jg), 1), Q.c(f, s).addChild(p)), q = Hh(qa), s = P.d(q, 0, null), q = P.d(q, 1, null), z = function() {
              var c = Ih(qa);
              return w(c) ? c : 0;
            }(), F = p.position, F.x = s, F.y = q, p.rotation = z);
            n = L(n);
            p = null;
            s = 0;
          }
          q = 0;
        } else {
          break;
        }
      }
    }
    null != h && pa(h, function(c, d) {
      if (!0 !== l[d] && !0 === c) {
        var e = Bh(k, d), h = yg.e($(e, gf)), e = jg.c($(e, jg), 1);
        return Q.c(f, e).removeChild(h);
      }
      return null;
    });
    We(c, new v(null, 2, [zf, d, pg, l], null));
    return d;
  };
}();
function bk(c) {
  for (c = Dh(c);;) {
    if (G(c)) {
      var d = I(c);
      if (nc(d, ef)) {
        return d;
      }
      c = L(c);
    } else {
      return null;
    }
  }
}
function ck() {
  var c = eb(Yj), d = lc(Zj) ? S.c(ve, Zj) : Zj, e = Q.c(d, Ng), f = Q.c(d, pf), h = Q.c(d, Xf), k = Q.c(d, Lg), d = Q.c(d, hf), h = h > k.innerWidth / k.innerHeight ? new X(null, 2, 5, Y, [k.innerWidth, k.innerWidth / h], null) : new X(null, 2, 5, Y, [h * k.innerHeight, k.innerHeight], null), l = P.d(h, 0, null), h = P.d(h, 1, null);
  ak.c ? ak.c(c, f) : ak.call(null, c, f);
  if (d.width !== l || d.height !== h) {
    console.log("resizing"), k = new X(null, 2, 5, Y, [l, h], null), P.d(k, 0, null), P.d(k, 1, null), d.resize(l, h);
  }
  for (var n = bk(c), h = function() {
    var d = xg.e($(n, ef));
    return w(d) ? d : new X(null, 2, 5, Y, [Eh(c), Fh(c)], null);
  }(), p = P.d(h, 0, null), s = P.d(h, 1, null), k = function() {
    var c = Hh(n);
    return w(c) ? c : new X(null, 2, 5, Y, [p / 2, s / 2], null);
  }(), h = P.d(k, 0, null), k = P.d(k, 1, null), q = function() {
    var c = Ih(n);
    return w(c) ? c : 0;
  }(), l = l / p;;) {
    if (G(f)) {
      var u = I(f), z = lc(u) ? S.c(ve, u) : u, u = Q.c(z, Bg), z = Q.c(z, gf), F = z.scale, H = z.position, T = z.pivot;
      F.x = l;
      F.y = l;
      w(u) || (H.x = p / 2 * l, H.y = s / 2 * l, T.x = h, T.y = k, z.rotation = -q);
      f = L(f);
    } else {
      break;
    }
  }
  d.render(e);
}
function dk(c) {
  c = qj(c);
  c = Xj(c);
  c = Nh(c);
  c = Rh(c);
  a: {
    b: {
      c = Ph(c);
      for (var d = Dh(c), e = Sc(ff.e(c));;) {
        if (G(d)) {
          var f = I(d), h = $(f, ig), k = h, h = w(k) ? 0 === of.e(h) && nc(f, wf) : k;
          w(h) ? (h = pj(f), d = L(d), e = Uc(Uc(e, Gh(h), h), Gh(f), Xb.c(f, wf))) : d = L(d);
        } else {
          c = R.d(c, ff, vb(e));
          break b;
        }
      }
      c = void 0;
    }
    d = ff.e(c);
    for (e = Sc(ff.e(c));;) {
      if (G(d)) {
        if (f = I(d), k = I(L(f)), nc(k, qf)) {
          var h = c, l = $(k, qf), n = Hh(k), p = l.acceleration, s = l.R, q = l.ca, u = void 0, z = w(s) ? dh(s) : 0, u = z > q ? z : q, q = l.ga, F = l.X, H = l.ba, z = Ih(k), s = bh(s, p), s = dh(s) > u ? fh(u, jh(s)) : s, u = F + q, F = Xg.e ? Xg.e(u) : Xg.call(null, u), H = F > H ? u / F * H : u, n = bh(s, n), h = new X(null, 2, 5, Y, [rc(P.c(n, 0), Eh(h)), rc(P.c(n, 1), Fh(h))], null);
          h = zh(k, new X(null, 3, 5, Y, [qh(p, s, l.ca, q, H, l.ba), rh(h), sh(H + z)], null));
          z = $(h, Gf);
          w(z) && (k = Hh(h), n = P.d(k, 0, null), q = P.d(k, 1, null), k = z.ea, l = z.ka, p = z.T, z = z.ja, n -= (k + p) / 2, q -= (l + z) / 2, h = yh(h, uh.o(k + n, l + q, p + n, z + q)));
          f = I(f);
          d = L(d);
          e = wb(e, f, h);
        } else {
          d = L(d);
        }
      } else {
        c = R.d(c, ff, vb(e));
        break a;
      }
    }
    c = void 0;
  }
  c = Ni(c);
  c = rj(c);
  c = Pi(c);
  c = Si(c);
  c = Ti(c);
  c = Zi(c);
  c = Ui(c);
  return Lh(c);
}
var ek = new uj(16);
ek.start();
fj(ek, vj, function() {
  return Xe.c(Yj, dk);
});
requestAnimFrame(function fk() {
  ck();
  return requestAnimFrame(fk);
});

})();

//# sourceMappingURL=asteroids.js.map