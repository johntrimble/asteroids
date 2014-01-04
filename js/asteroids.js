;(function(){
function aa() {
  return function(c) {
    return c
  }
}
function m(c) {
  return function() {
    return this[c]
  }
}
function ba(c) {
  return function() {
    return c
  }
}
var q, ca = this;
function u(c) {
  var d = typeof c;
  if("object" == d) {
    if(c) {
      if(c instanceof Array) {
        return"array"
      }
      if(c instanceof Object) {
        return d
      }
      var e = Object.prototype.toString.call(c);
      if("[object Window]" == e) {
        return"object"
      }
      if("[object Array]" == e || "number" == typeof c.length && "undefined" != typeof c.splice && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == e || "undefined" != typeof c.call && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == d && "undefined" == typeof c.call) {
      return"object"
    }
  }
  return d
}
function da(c) {
  return"string" == typeof c
}
function ea(c) {
  return c[fa] || (c[fa] = ++ga)
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(c, d, e) {
  return c.call.apply(c.bind, arguments)
}
function ia(c, d, e) {
  if(!c) {
    throw Error();
  }
  if(2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, f);
      return c.apply(d, e)
    }
  }
  return function() {
    return c.apply(d, arguments)
  }
}
function ja(c, d, e) {
  ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
  return ja.apply(null, arguments)
}
var ka = Date.now || function() {
  return+new Date
};
function la(c, d) {
  function e() {
  }
  e.prototype = d.prototype;
  c.nc = d.prototype;
  c.prototype = new e;
  c.prototype.constructor = c
}
;function ma(c) {
  return c.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function na(c) {
  for(var d = 0, e = 0;e < c.length;++e) {
    d = 31 * d + c.charCodeAt(e), d %= 4294967296
  }
  return d
}
;var oa = Array.prototype, qa = oa.indexOf ? function(c, d, e) {
  return oa.indexOf.call(c, d, e)
} : function(c, d, e) {
  e = null == e ? 0 : 0 > e ? Math.max(0, c.length + e) : e;
  if(da(c)) {
    return da(d) && 1 == d.length ? c.indexOf(d, e) : -1
  }
  for(;e < c.length;e++) {
    if(e in c && c[e] === d) {
      return e
    }
  }
  return-1
};
var ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function sa(c, d) {
  for(var e, f, h = 1;h < arguments.length;h++) {
    f = arguments[h];
    for(e in f) {
      c[e] = f[e]
    }
    for(var k = 0;k < ra.length;k++) {
      e = ra[k], Object.prototype.hasOwnProperty.call(f, e) && (c[e] = f[e])
    }
  }
}
;function ta(c, d) {
  null != c && this.append.apply(this, arguments)
}
ta.prototype.Ra = "";
ta.prototype.append = function(c, d, e) {
  this.Ra += c;
  if(null != d) {
    for(var f = 1;f < arguments.length;f++) {
      this.Ra += arguments[f]
    }
  }
  return this
};
ta.prototype.clear = function() {
  this.Ra = ""
};
ta.prototype.toString = m("Ra");
var ua;
function w(c) {
  return null != c && !1 !== c
}
function va(c) {
  return w(c) ? !1 : !0
}
function x(c, d) {
  return c[u(null == d ? null : d)] ? !0 : c._ ? !0 : z ? !1 : null
}
function wa(c) {
  return null == c ? null : c.constructor
}
function A(c, d) {
  var e = wa(d), e = w(w(e) ? e.Ub : e) ? e.Tb : u(d);
  return Error(["No protocol method ", c, " defined for type ", e, ": ", d].join(""))
}
function xa(c) {
  var d = c.Tb;
  return w(d) ? d : "" + B(c)
}
var ya = {}, za = {};
function Aa(c) {
  if(c ? c.R : c) {
    return c.R(c)
  }
  var d;
  d = Aa[u(null == c ? null : c)];
  if(!d && (d = Aa._, !d)) {
    throw A("ICounted.-count", c);
  }
  return d.call(null, c)
}
function Ba(c) {
  if(c ? c.V : c) {
    return c.V(c)
  }
  var d;
  d = Ba[u(null == c ? null : c)];
  if(!d && (d = Ba._, !d)) {
    throw A("IEmptyableCollection.-empty", c);
  }
  return d.call(null, c)
}
var Ca = {};
function Da(c, d) {
  if(c ? c.K : c) {
    return c.K(c, d)
  }
  var e;
  e = Da[u(null == c ? null : c)];
  if(!e && (e = Da._, !e)) {
    throw A("ICollection.-conj", c);
  }
  return e.call(null, c, d)
}
var Ea = {}, C = function() {
  function c(c, d, e) {
    if(c ? c.oa : c) {
      return c.oa(c, d, e)
    }
    var l;
    l = C[u(null == c ? null : c)];
    if(!l && (l = C._, !l)) {
      throw A("IIndexed.-nth", c);
    }
    return l.call(null, c, d, e)
  }
  function d(c, d) {
    if(c ? c.I : c) {
      return c.I(c, d)
    }
    var e;
    e = C[u(null == c ? null : c)];
    if(!e && (e = C._, !e)) {
      throw A("IIndexed.-nth", c);
    }
    return e.call(null, c, d)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), Fa = {};
function Ga(c) {
  if(c ? c.X : c) {
    return c.X(c)
  }
  var d;
  d = Ga[u(null == c ? null : c)];
  if(!d && (d = Ga._, !d)) {
    throw A("ISeq.-first", c);
  }
  return d.call(null, c)
}
function Ha(c) {
  if(c ? c.ja : c) {
    return c.ja(c)
  }
  var d;
  d = Ha[u(null == c ? null : c)];
  if(!d && (d = Ha._, !d)) {
    throw A("ISeq.-rest", c);
  }
  return d.call(null, c)
}
var Ia = {}, Ja = {}, Ka = function() {
  function c(c, d, e) {
    if(c ? c.Q : c) {
      return c.Q(c, d, e)
    }
    var l;
    l = Ka[u(null == c ? null : c)];
    if(!l && (l = Ka._, !l)) {
      throw A("ILookup.-lookup", c);
    }
    return l.call(null, c, d, e)
  }
  function d(c, d) {
    if(c ? c.P : c) {
      return c.P(c, d)
    }
    var e;
    e = Ka[u(null == c ? null : c)];
    if(!e && (e = Ka._, !e)) {
      throw A("ILookup.-lookup", c);
    }
    return e.call(null, c, d)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}();
function La(c, d) {
  if(c ? c.lb : c) {
    return c.lb(c, d)
  }
  var e;
  e = La[u(null == c ? null : c)];
  if(!e && (e = La._, !e)) {
    throw A("IAssociative.-contains-key?", c);
  }
  return e.call(null, c, d)
}
function Ma(c, d, e) {
  if(c ? c.ya : c) {
    return c.ya(c, d, e)
  }
  var f;
  f = Ma[u(null == c ? null : c)];
  if(!f && (f = Ma._, !f)) {
    throw A("IAssociative.-assoc", c);
  }
  return f.call(null, c, d, e)
}
var Na = {};
function Oa(c, d) {
  if(c ? c.Ja : c) {
    return c.Ja(c, d)
  }
  var e;
  e = Oa[u(null == c ? null : c)];
  if(!e && (e = Oa._, !e)) {
    throw A("IMap.-dissoc", c);
  }
  return e.call(null, c, d)
}
var Qa = {};
function Ra(c) {
  if(c ? c.Cb : c) {
    return c.Cb()
  }
  var d;
  d = Ra[u(null == c ? null : c)];
  if(!d && (d = Ra._, !d)) {
    throw A("IMapEntry.-key", c);
  }
  return d.call(null, c)
}
function Sa(c) {
  if(c ? c.Db : c) {
    return c.Db()
  }
  var d;
  d = Sa[u(null == c ? null : c)];
  if(!d && (d = Sa._, !d)) {
    throw A("IMapEntry.-val", c);
  }
  return d.call(null, c)
}
var Ta = {};
function Ua(c, d) {
  if(c ? c.Pb : c) {
    return c.Pb(0, d)
  }
  var e;
  e = Ua[u(null == c ? null : c)];
  if(!e && (e = Ua._, !e)) {
    throw A("ISet.-disjoin", c);
  }
  return e.call(null, c, d)
}
var Va = {};
function Wa(c, d, e) {
  if(c ? c.Fb : c) {
    return c.Fb(c, d, e)
  }
  var f;
  f = Wa[u(null == c ? null : c)];
  if(!f && (f = Wa._, !f)) {
    throw A("IVector.-assoc-n", c);
  }
  return f.call(null, c, d, e)
}
function Xa(c) {
  if(c ? c.cc : c) {
    return c.state
  }
  var d;
  d = Xa[u(null == c ? null : c)];
  if(!d && (d = Xa._, !d)) {
    throw A("IDeref.-deref", c);
  }
  return d.call(null, c)
}
var Ya = {};
function Za(c) {
  if(c ? c.L : c) {
    return c.L(c)
  }
  var d;
  d = Za[u(null == c ? null : c)];
  if(!d && (d = Za._, !d)) {
    throw A("IMeta.-meta", c);
  }
  return d.call(null, c)
}
var $a = {};
function ab(c, d) {
  if(c ? c.N : c) {
    return c.N(c, d)
  }
  var e;
  e = ab[u(null == c ? null : c)];
  if(!e && (e = ab._, !e)) {
    throw A("IWithMeta.-with-meta", c);
  }
  return e.call(null, c, d)
}
var bb = {}, cb = function() {
  function c(c, d, e) {
    if(c ? c.ga : c) {
      return c.ga(c, d, e)
    }
    var l;
    l = cb[u(null == c ? null : c)];
    if(!l && (l = cb._, !l)) {
      throw A("IReduce.-reduce", c);
    }
    return l.call(null, c, d, e)
  }
  function d(c, d) {
    if(c ? c.fa : c) {
      return c.fa(c, d)
    }
    var e;
    e = cb[u(null == c ? null : c)];
    if(!e && (e = cb._, !e)) {
      throw A("IReduce.-reduce", c);
    }
    return e.call(null, c, d)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}();
function eb(c, d) {
  if(c ? c.F : c) {
    return c.F(c, d)
  }
  var e;
  e = eb[u(null == c ? null : c)];
  if(!e && (e = eb._, !e)) {
    throw A("IEquiv.-equiv", c);
  }
  return e.call(null, c, d)
}
function fb(c) {
  if(c ? c.H : c) {
    return c.H(c)
  }
  var d;
  d = fb[u(null == c ? null : c)];
  if(!d && (d = fb._, !d)) {
    throw A("IHash.-hash", c);
  }
  return d.call(null, c)
}
var gb = {};
function hb(c) {
  if(c ? c.M : c) {
    return c.M(c)
  }
  var d;
  d = hb[u(null == c ? null : c)];
  if(!d && (d = hb._, !d)) {
    throw A("ISeqable.-seq", c);
  }
  return d.call(null, c)
}
var ib = {};
function jb(c, d) {
  if(c ? c.Sb : c) {
    return c.Sb(0, d)
  }
  var e;
  e = jb[u(null == c ? null : c)];
  if(!e && (e = jb._, !e)) {
    throw A("IWriter.-write", c);
  }
  return e.call(null, c, d)
}
function kb(c) {
  if(c ? c.gc : c) {
    return null
  }
  var d;
  d = kb[u(null == c ? null : c)];
  if(!d && (d = kb._, !d)) {
    throw A("IWriter.-flush", c);
  }
  return d.call(null, c)
}
var lb = {};
function mb(c, d, e) {
  if(c ? c.G : c) {
    return c.G(c, d, e)
  }
  var f;
  f = mb[u(null == c ? null : c)];
  if(!f && (f = mb._, !f)) {
    throw A("IPrintWithWriter.-pr-writer", c);
  }
  return f.call(null, c, d, e)
}
function nb(c, d, e) {
  if(c ? c.Rb : c) {
    return c.Rb(0, d, e)
  }
  var f;
  f = nb[u(null == c ? null : c)];
  if(!f && (f = nb._, !f)) {
    throw A("IWatchable.-notify-watches", c);
  }
  return f.call(null, c, d, e)
}
function ob(c) {
  if(c ? c.Va : c) {
    return c.Va(c)
  }
  var d;
  d = ob[u(null == c ? null : c)];
  if(!d && (d = ob._, !d)) {
    throw A("IEditableCollection.-as-transient", c);
  }
  return d.call(null, c)
}
function pb(c, d) {
  if(c ? c.Ka : c) {
    return c.Ka(c, d)
  }
  var e;
  e = pb[u(null == c ? null : c)];
  if(!e && (e = pb._, !e)) {
    throw A("ITransientCollection.-conj!", c);
  }
  return e.call(null, c, d)
}
function qb(c) {
  if(c ? c.La : c) {
    return c.La(c)
  }
  var d;
  d = qb[u(null == c ? null : c)];
  if(!d && (d = qb._, !d)) {
    throw A("ITransientCollection.-persistent!", c);
  }
  return d.call(null, c)
}
function rb(c, d, e) {
  if(c ? c.Xa : c) {
    return c.Xa(c, d, e)
  }
  var f;
  f = rb[u(null == c ? null : c)];
  if(!f && (f = rb._, !f)) {
    throw A("ITransientAssociative.-assoc!", c);
  }
  return f.call(null, c, d, e)
}
function sb(c, d) {
  if(c ? c.Eb : c) {
    return c.Eb(c, d)
  }
  var e;
  e = sb[u(null == c ? null : c)];
  if(!e && (e = sb._, !e)) {
    throw A("ITransientMap.-dissoc!", c);
  }
  return e.call(null, c, d)
}
function tb(c, d, e) {
  if(c ? c.Qb : c) {
    return c.Qb(0, d, e)
  }
  var f;
  f = tb[u(null == c ? null : c)];
  if(!f && (f = tb._, !f)) {
    throw A("ITransientVector.-assoc-n!", c);
  }
  return f.call(null, c, d, e)
}
function ub(c) {
  if(c ? c.Kb : c) {
    return c.Kb()
  }
  var d;
  d = ub[u(null == c ? null : c)];
  if(!d && (d = ub._, !d)) {
    throw A("IChunk.-drop-first", c);
  }
  return d.call(null, c)
}
function vb(c) {
  if(c ? c.nb : c) {
    return c.nb(c)
  }
  var d;
  d = vb[u(null == c ? null : c)];
  if(!d && (d = vb._, !d)) {
    throw A("IChunkedSeq.-chunked-first", c);
  }
  return d.call(null, c)
}
function wb(c) {
  if(c ? c.ob : c) {
    return c.ob(c)
  }
  var d;
  d = wb[u(null == c ? null : c)];
  if(!d && (d = wb._, !d)) {
    throw A("IChunkedSeq.-chunked-rest", c);
  }
  return d.call(null, c)
}
function xb(c) {
  if(c ? c.mb : c) {
    return c.mb(c)
  }
  var d;
  d = xb[u(null == c ? null : c)];
  if(!d && (d = xb._, !d)) {
    throw A("IChunkedNext.-chunked-next", c);
  }
  return d.call(null, c)
}
function yb(c) {
  this.lc = c;
  this.A = 0;
  this.m = 1073741824
}
yb.prototype.Sb = function(c, d) {
  return this.lc.append(d)
};
yb.prototype.gc = ba(null);
function zb(c) {
  var d = new ta, e = new yb(d);
  c.G(null, e, D([Ab, !0, Bb, !0, Cb, !1, Db, !1], !0));
  kb(e);
  return"" + B(d)
}
function Eb(c, d, e, f, h) {
  this.Oa = c;
  this.name = d;
  this.Qa = e;
  this.Ia = f;
  this.ia = h;
  this.m = 2154168321;
  this.A = 4096
}
q = Eb.prototype;
q.G = function(c, d) {
  return jb(d, this.Qa)
};
q.H = function() {
  var c = this.Ia;
  return null != c ? c : this.Ia = c = Gb.c ? Gb.c(F.e ? F.e(this.Oa) : F.call(null, this.Oa), F.e ? F.e(this.name) : F.call(null, this.name)) : Gb.call(null, F.e ? F.e(this.Oa) : F.call(null, this.Oa), F.e ? F.e(this.name) : F.call(null, this.name))
};
q.N = function(c, d) {
  return new Eb(this.Oa, this.name, this.Qa, this.Ia, d)
};
q.L = m("ia");
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Ka.d(e, this, null);
      case 3:
        return Ka.d(e, this, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return Ka.d(c, this, null)
};
q.c = function(c, d) {
  return Ka.d(c, this, d)
};
q.F = function(c, d) {
  return d instanceof Eb ? this.Qa === d.Qa : !1
};
q.toString = m("Qa");
function G(c) {
  if(null == c) {
    return null
  }
  if(c && (c.m & 8388608 || c.yc)) {
    return c.M(null)
  }
  if(c instanceof Array || "string" === typeof c) {
    return 0 === c.length ? null : new Hb(c, 0)
  }
  if(x(gb, c)) {
    return hb(c)
  }
  if(z) {
    throw Error([B(c), B("is not ISeqable")].join(""));
  }
  return null
}
function H(c) {
  if(null == c) {
    return null
  }
  if(c && (c.m & 64 || c.Wa)) {
    return c.X(null)
  }
  c = G(c);
  return null == c ? null : Ga(c)
}
function I(c) {
  return null != c ? c && (c.m & 64 || c.Wa) ? c.ja(null) : (c = G(c)) ? Ha(c) : J : J
}
function L(c) {
  return null == c ? null : c && (c.m & 128 || c.cb) ? c.ea(null) : G(I(c))
}
var Ib = function() {
  function c(c, d) {
    return c === d || eb(c, d)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      for(;;) {
        if(d.c(c, f)) {
          if(L(h)) {
            c = f, f = H(h), h = L(h)
          }else {
            return d.c(f, H(h))
          }
        }else {
          return!1
        }
      }
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.e = ba(!0);
  d.c = c;
  d.i = e.i;
  return d
}();
fb["null"] = ba(0);
Ia["null"] = !0;
Ta["null"] = !0;
Ua["null"] = ba(null);
za["null"] = !0;
Aa["null"] = ba(0);
eb["null"] = function(c, d) {
  return null == d
};
$a["null"] = !0;
ab["null"] = ba(null);
Ya["null"] = !0;
Za["null"] = ba(null);
Ba["null"] = ba(null);
Na["null"] = !0;
Oa["null"] = ba(null);
Date.prototype.F = function(c, d) {
  return d instanceof Date && this.toString() === d.toString()
};
eb.number = function(c, d) {
  return c === d
};
Ya["function"] = !0;
Za["function"] = ba(null);
ya["function"] = !0;
fb._ = function(c) {
  return ea(c)
};
var Jb = function() {
  function c(c, d, e, f) {
    for(var p = Aa(c);;) {
      if(f < p) {
        e = d.c ? d.c(e, C.c(c, f)) : d.call(null, e, C.c(c, f)), f += 1
      }else {
        return e
      }
    }
  }
  function d(c, d, e) {
    for(var f = Aa(c), p = 0;;) {
      if(p < f) {
        e = d.c ? d.c(e, C.c(c, p)) : d.call(null, e, C.c(c, p)), p += 1
      }else {
        return e
      }
    }
  }
  function e(c, d) {
    var e = Aa(c);
    if(0 === e) {
      return d.j ? d.j() : d.call(null)
    }
    for(var f = C.c(c, 0), p = 1;;) {
      if(p < e) {
        f = d.c ? d.c(f, C.c(c, p)) : d.call(null, f, C.c(c, p)), p += 1
      }else {
        return f
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
        return c.call(this, f, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.p = c;
  return f
}(), Kb = function() {
  function c(c, d, e, f) {
    for(var p = c.length;;) {
      if(f < p) {
        e = d.c ? d.c(e, c[f]) : d.call(null, e, c[f]), f += 1
      }else {
        return e
      }
    }
  }
  function d(c, d, e) {
    for(var f = c.length, p = 0;;) {
      if(p < f) {
        e = d.c ? d.c(e, c[p]) : d.call(null, e, c[p]), p += 1
      }else {
        return e
      }
    }
  }
  function e(c, d) {
    var e = c.length;
    if(0 === c.length) {
      return d.j ? d.j() : d.call(null)
    }
    for(var f = c[0], p = 1;;) {
      if(p < e) {
        f = d.c ? d.c(f, c[p]) : d.call(null, f, c[p]), p += 1
      }else {
        return f
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
        return c.call(this, f, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.p = c;
  return f
}();
function Lb(c) {
  return c ? c.m & 2 || c.bc ? !0 : c.m ? !1 : x(za, c) : x(za, c)
}
function Mb(c) {
  return c ? c.m & 16 || c.Nb ? !0 : c.m ? !1 : x(Ea, c) : x(Ea, c)
}
function Hb(c, d) {
  this.f = c;
  this.s = d;
  this.A = 0;
  this.m = 166199550
}
q = Hb.prototype;
q.H = function() {
  return Nb.e ? Nb.e(this) : Nb.call(null, this)
};
q.ea = function() {
  return this.s + 1 < this.f.length ? new Hb(this.f, this.s + 1) : null
};
q.K = function(c, d) {
  return N.c ? N.c(d, this) : N.call(null, d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return Kb.p(this.f, d, this.f[this.s], this.s + 1)
};
q.ga = function(c, d, e) {
  return Kb.p(this.f, d, e, this.s)
};
q.M = function() {
  return this
};
q.R = function() {
  return this.f.length - this.s
};
q.X = function() {
  return this.f[this.s]
};
q.ja = function() {
  return this.s + 1 < this.f.length ? new Hb(this.f, this.s + 1) : J
};
q.F = function(c, d) {
  return Ob.c ? Ob.c(this, d) : Ob.call(null, this, d)
};
q.I = function(c, d) {
  var e = d + this.s;
  return e < this.f.length ? this.f[e] : null
};
q.oa = function(c, d, e) {
  c = d + this.s;
  return c < this.f.length ? this.f[c] : e
};
q.V = function() {
  return J
};
var Pb = function() {
  function c(c, d) {
    return d < c.length ? new Hb(c, d) : null
  }
  function d(c) {
    return e.c(c, 0)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}(), M = function() {
  function c(c, d) {
    return Pb.c(c, d)
  }
  function d(c) {
    return Pb.c(c, 0)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}();
eb._ = function(c, d) {
  return c === d
};
var Qb = function() {
  function c(c, d) {
    return null != c ? Da(c, d) : Da(J, d)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      for(;;) {
        if(w(h)) {
          c = d.c(c, f), f = H(h), h = L(h)
        }else {
          return d.c(c, f)
        }
      }
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}();
function O(c) {
  if(null != c) {
    if(c && (c.m & 2 || c.bc)) {
      c = c.R(null)
    }else {
      if(c instanceof Array) {
        c = c.length
      }else {
        if("string" === typeof c) {
          c = c.length
        }else {
          if(x(za, c)) {
            c = Aa(c)
          }else {
            if(z) {
              a: {
                c = G(c);
                for(var d = 0;;) {
                  if(Lb(c)) {
                    c = d + Aa(c);
                    break a
                  }
                  c = L(c);
                  d += 1
                }
                c = void 0
              }
            }else {
              c = null
            }
          }
        }
      }
    }
  }else {
    c = 0
  }
  return c
}
var Rb = function() {
  function c(c, d, e) {
    for(;;) {
      if(null == c) {
        return e
      }
      if(0 === d) {
        return G(c) ? H(c) : e
      }
      if(Mb(c)) {
        return C.d(c, d, e)
      }
      if(G(c)) {
        c = L(c), d -= 1
      }else {
        return z ? e : null
      }
    }
  }
  function d(c, d) {
    for(;;) {
      if(null == c) {
        throw Error("Index out of bounds");
      }
      if(0 === d) {
        if(G(c)) {
          return H(c)
        }
        throw Error("Index out of bounds");
      }
      if(Mb(c)) {
        return C.c(c, d)
      }
      if(G(c)) {
        var e = L(c), l = d - 1;
        c = e;
        d = l
      }else {
        if(z) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), P = function() {
  function c(c, d, e) {
    if(null != c) {
      if(c && (c.m & 16 || c.Nb)) {
        return c.oa(null, d, e)
      }
      if(c instanceof Array || "string" === typeof c) {
        return d < c.length ? c[d] : e
      }
      if(x(Ea, c)) {
        return C.c(c, d)
      }
      if(z) {
        if(c ? c.m & 64 || c.Wa || (c.m ? 0 : x(Fa, c)) : x(Fa, c)) {
          return Rb.d(c, d, e)
        }
        throw Error([B("nth not supported on this type "), B(xa(wa(c)))].join(""));
      }
      return null
    }
    return e
  }
  function d(c, d) {
    if(null == c) {
      return null
    }
    if(c && (c.m & 16 || c.Nb)) {
      return c.I(null, d)
    }
    if(c instanceof Array || "string" === typeof c) {
      return d < c.length ? c[d] : null
    }
    if(x(Ea, c)) {
      return C.c(c, d)
    }
    if(z) {
      if(c ? c.m & 64 || c.Wa || (c.m ? 0 : x(Fa, c)) : x(Fa, c)) {
        return Rb.c(c, d)
      }
      throw Error([B("nth not supported on this type "), B(xa(wa(c)))].join(""));
    }
    return null
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), Q = function() {
  function c(c, d, e) {
    return null != c ? c && (c.m & 256 || c.Ob) ? c.Q(null, d, e) : c instanceof Array ? d < c.length ? c[d] : e : "string" === typeof c ? d < c.length ? c[d] : e : x(Ja, c) ? Ka.d(c, d, e) : z ? e : null : e
  }
  function d(c, d) {
    return null == c ? null : c && (c.m & 256 || c.Ob) ? c.P(null, d) : c instanceof Array ? d < c.length ? c[d] : null : "string" === typeof c ? d < c.length ? c[d] : null : x(Ja, c) ? Ka.c(c, d) : null
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), S = function() {
  function c(c, d, e) {
    return null != c ? Ma(c, d, e) : Sb.c ? Sb.c([d], [e]) : Sb.call(null, [d], [e])
  }
  var d = null, e = function() {
    function c(d, f, n, p) {
      var t = null;
      3 < arguments.length && (t = M(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, n, t)
    }
    function e(c, f, h, p) {
      for(;;) {
        if(c = d.d(c, f, h), w(p)) {
          f = H(p), h = H(L(p)), p = L(L(p))
        }else {
          return c
        }
      }
    }
    c.n = 3;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var p = H(c);
      c = I(c);
      return e(d, f, p, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, k);
      default:
        return e.i(d, h, k, M(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 3;
  d.k = e.k;
  d.d = c;
  d.i = e.i;
  return d
}(), Tb = function() {
  var c = null, d = function() {
    function d(c, e, l) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return f.call(this, c, e, n)
    }
    function f(d, e, f) {
      for(;;) {
        if(d = c.c(d, e), w(f)) {
          e = H(f), f = L(f)
        }else {
          return d
        }
      }
    }
    d.n = 2;
    d.k = function(c) {
      var d = H(c);
      c = L(c);
      var e = H(c);
      c = I(c);
      return f(d, e, c)
    };
    d.i = f;
    return d
  }(), c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return c;
      case 2:
        return Oa(c, f);
      default:
        return d.i(c, f, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = 2;
  c.k = d.k;
  c.e = aa();
  c.c = function(c, d) {
    return Oa(c, d)
  };
  c.i = d.i;
  return c
}();
function Ub(c) {
  var d = "function" == u(c);
  return d ? d : c ? w(w(null) ? null : c.ac) ? !0 : c.Gb ? !1 : x(ya, c) : x(ya, c)
}
var Wb = function Vb(d, e) {
  return Ub(d) && !(d ? d.m & 262144 || d.Cc || (d.m ? 0 : x($a, d)) : x($a, d)) ? Vb(function() {
    "undefined" === typeof ua && (ua = function(d, e, k, l) {
      this.meta = d;
      this.ab = e;
      this.rc = k;
      this.jc = l;
      this.A = 0;
      this.m = 393217
    }, ua.Ub = !0, ua.Tb = "cljs.core/t7045", ua.hc = function(d) {
      return jb(d, "cljs.core/t7045")
    }, ua.prototype.call = function() {
      function d(f, l) {
        f = this;
        var n = null;
        1 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 1), 0));
        return e.call(this, f, n)
      }
      function e(d, f) {
        return T.c ? T.c(d.ab, f) : T.call(null, d.ab, f)
      }
      d.n = 1;
      d.k = function(d) {
        var f = H(d);
        d = I(d);
        return e(f, d)
      };
      d.i = e;
      return d
    }(), ua.prototype.apply = function(d, e) {
      return this.call.apply(this, [this].concat(e.slice()))
    }, ua.prototype.c = function() {
      function d(f) {
        var l = null;
        0 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, l)
      }
      function e(d) {
        return T.c ? T.c(self__.ab, d) : T.call(null, self__.ab, d)
      }
      d.n = 0;
      d.k = function(d) {
        d = G(d);
        return e(d)
      };
      d.i = e;
      return d
    }(), ua.prototype.ac = !0, ua.prototype.L = m("jc"), ua.prototype.N = function(d, e) {
      return new ua(this.meta, this.ab, this.rc, e)
    });
    return new ua(e, d, Vb, null)
  }(), e) : ab(d, e)
};
function Xb(c) {
  return(c ? c.m & 131072 || c.ec || (c.m ? 0 : x(Ya, c)) : x(Ya, c)) ? Za(c) : null
}
var Yb = function() {
  var c = null, d = function() {
    function d(c, e, l) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return f.call(this, c, e, n)
    }
    function f(d, e, f) {
      for(;;) {
        if(d = c.c(d, e), w(f)) {
          e = H(f), f = L(f)
        }else {
          return d
        }
      }
    }
    d.n = 2;
    d.k = function(c) {
      var d = H(c);
      c = L(c);
      var e = H(c);
      c = I(c);
      return f(d, e, c)
    };
    d.i = f;
    return d
  }(), c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return c;
      case 2:
        return Ua(c, f);
      default:
        return d.i(c, f, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = 2;
  c.k = d.k;
  c.e = aa();
  c.c = function(c, d) {
    return Ua(c, d)
  };
  c.i = d.i;
  return c
}(), Zb = {}, $b = 0;
function F(c) {
  if(c && (c.m & 4194304 || c.vc)) {
    c = c.H(null)
  }else {
    if("number" === typeof c) {
      c = Math.floor(c) % 2147483647
    }else {
      if(!0 === c) {
        c = 1
      }else {
        if(!1 === c) {
          c = 0
        }else {
          if("string" === typeof c) {
            255 < $b && (Zb = {}, $b = 0);
            var d = Zb[c];
            "number" !== typeof d && (d = na(c), Zb[c] = d, $b += 1);
            c = d
          }else {
            c = z ? fb(c) : null
          }
        }
      }
    }
  }
  return c
}
function ac(c) {
  return c ? c.m & 16777216 || c.zc ? !0 : c.m ? !1 : x(ib, c) : x(ib, c)
}
function bc(c) {
  return null == c ? !1 : c ? c.m & 1024 || c.wc ? !0 : c.m ? !1 : x(Na, c) : x(Na, c)
}
function cc(c) {
  return c ? c.m & 16384 || c.Bc ? !0 : c.m ? !1 : x(Va, c) : x(Va, c)
}
function dc(c) {
  return c ? c.A & 512 || c.sc ? !0 : !1 : !1
}
function ec(c, d, e, f, h) {
  for(;0 !== h;) {
    e[f] = c[d], f += 1, h -= 1, d += 1
  }
}
var fc = {};
function gc(c) {
  return null == c ? !1 : c ? c.m & 64 || c.Wa ? !0 : c.m ? !1 : x(Fa, c) : x(Fa, c)
}
function hc(c) {
  return w(c) ? !0 : !1
}
function ic(c, d) {
  return Q.d(c, d, fc) === fc ? !1 : !0
}
function jc(c, d) {
  if(c === d) {
    return 0
  }
  if(null == c) {
    return-1
  }
  if(null == d) {
    return 1
  }
  if(wa(c) === wa(d)) {
    return c && (c.A & 2048 || c.Lb) ? c.Mb(null, d) : c > d ? 1 : c < d ? -1 : 0
  }
  if(z) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var kc = function() {
  function c(c, d, e, l) {
    for(;;) {
      var n = jc(P.c(c, l), P.c(d, l));
      if(0 === n && l + 1 < e) {
        l += 1
      }else {
        return n
      }
    }
  }
  function d(c, d) {
    var k = O(c), l = O(d);
    return k < l ? -1 : k > l ? 1 : z ? e.p(c, d, k, 0) : null
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 4:
        return c.call(this, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.p = c;
  return e
}(), lc = function() {
  function c(c, d, e) {
    for(e = G(e);;) {
      if(e) {
        d = c.c ? c.c(d, H(e)) : c.call(null, d, H(e)), e = L(e)
      }else {
        return d
      }
    }
  }
  function d(c, d) {
    var e = G(d);
    return e ? U.d ? U.d(c, H(e), L(e)) : U.call(null, c, H(e), L(e)) : c.j ? c.j() : c.call(null)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), U = function() {
  function c(c, d, e) {
    return e && (e.m & 524288 || e.fc) ? e.ga(null, c, d) : e instanceof Array ? Kb.d(e, c, d) : "string" === typeof e ? Kb.d(e, c, d) : x(bb, e) ? cb.d(e, c, d) : z ? lc.d(c, d, e) : null
  }
  function d(c, d) {
    return d && (d.m & 524288 || d.fc) ? d.fa(null, c) : d instanceof Array ? Kb.c(d, c) : "string" === typeof d ? Kb.c(d, c) : x(bb, d) ? cb.c(d, c) : z ? lc.c(c, d) : null
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}();
function mc(c) {
  return 0 <= c ? Math.floor.e ? Math.floor.e(c) : Math.floor.call(null, c) : Math.ceil.e ? Math.ceil.e(c) : Math.ceil.call(null, c)
}
function nc(c, d) {
  return(c % d + d) % d
}
var oc = function() {
  function c(c) {
    return c * e.j()
  }
  function d() {
    return Math.random.j ? Math.random.j() : Math.random.call(null)
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = d;
  e.e = c;
  return e
}();
function pc(c) {
  return mc(oc.e(c))
}
function qc(c) {
  c -= c >> 1 & 1431655765;
  c = (c & 858993459) + (c >> 2 & 858993459);
  return 16843009 * (c + (c >> 4) & 252645135) >> 24
}
function rc(c, d) {
  for(var e = d, f = G(c);;) {
    if(f && 0 < e) {
      e -= 1, f = L(f)
    }else {
      return f
    }
  }
}
var B = function() {
  function c(c) {
    return null == c ? "" : c.toString()
  }
  var d = null, e = function() {
    function c(d, f) {
      var n = null;
      1 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, d, n)
    }
    function e(c, f) {
      for(var h = new ta(d.e(c)), p = f;;) {
        if(w(p)) {
          h = h.append(d.e(H(p))), p = L(p)
        }else {
          return h.toString()
        }
      }
    }
    c.n = 1;
    c.k = function(c) {
      var d = H(c);
      c = I(c);
      return e(d, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return c.call(this, d);
      default:
        return e.i(d, M(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 1;
  d.k = e.k;
  d.j = ba("");
  d.e = c;
  d.i = e.i;
  return d
}();
function Ob(c, d) {
  return hc(ac(d) ? function() {
    for(var e = G(c), f = G(d);;) {
      if(null == e) {
        return null == f
      }
      if(null == f) {
        return!1
      }
      if(Ib.c(H(e), H(f))) {
        e = L(e), f = L(f)
      }else {
        return z ? !1 : null
      }
    }
  }() : null)
}
function Gb(c, d) {
  return c ^ d + 2654435769 + (c << 6) + (c >> 2)
}
function Nb(c) {
  if(G(c)) {
    var d = F(H(c));
    for(c = L(c);;) {
      if(null == c) {
        return d
      }
      d = Gb(d, F(H(c)));
      c = L(c)
    }
  }else {
    return 0
  }
}
function sc(c) {
  var d = 0;
  for(c = G(c);;) {
    if(c) {
      var e = H(c), d = (d + (F(tc.e ? tc.e(e) : tc.call(null, e)) ^ F(uc.e ? uc.e(e) : uc.call(null, e)))) % 4503599627370496;
      c = L(c)
    }else {
      return d
    }
  }
}
function vc(c, d, e, f, h) {
  this.meta = c;
  this.first = d;
  this.Ba = e;
  this.count = f;
  this.o = h;
  this.A = 0;
  this.m = 65937646
}
q = vc.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  return 1 === this.count ? null : this.Ba
};
q.K = function(c, d) {
  return new vc(this.meta, d, this, this.count + 1, null)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.R = m("count");
q.X = m("first");
q.ja = function() {
  return 1 === this.count ? J : this.Ba
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new vc(d, this.first, this.Ba, this.count, this.o)
};
q.L = m("meta");
q.V = function() {
  return J
};
function wc(c) {
  this.meta = c;
  this.A = 0;
  this.m = 65937614
}
q = wc.prototype;
q.H = ba(0);
q.ea = ba(null);
q.K = function(c, d) {
  return new vc(this.meta, d, null, 1, null)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = ba(null);
q.R = ba(0);
q.X = ba(null);
q.ja = function() {
  return J
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new wc(d)
};
q.L = m("meta");
q.V = function() {
  return this
};
var J = new wc(null), xc = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    var d;
    if(c instanceof Hb) {
      d = c.f
    }else {
      a: {
        for(d = [];;) {
          if(null != c) {
            d.push(c.X(null)), c = c.ea(null)
          }else {
            break a
          }
        }
        d = void 0
      }
    }
    c = d.length;
    for(var h = J;;) {
      if(0 < c) {
        var k = c - 1, h = h.K(null, d[c - 1]);
        c = k
      }else {
        return h
      }
    }
  }
  c.n = 0;
  c.k = function(c) {
    c = G(c);
    return d(c)
  };
  c.i = d;
  return c
}();
function yc(c, d, e, f) {
  this.meta = c;
  this.first = d;
  this.Ba = e;
  this.o = f;
  this.A = 0;
  this.m = 65929452
}
q = yc.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  return null == this.Ba ? null : G(this.Ba)
};
q.K = function(c, d) {
  return new yc(null, d, this, this.o)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.X = m("first");
q.ja = function() {
  return null == this.Ba ? J : this.Ba
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new yc(d, this.first, this.Ba, this.o)
};
q.L = m("meta");
q.V = function() {
  return Wb(J, this.meta)
};
function N(c, d) {
  var e = null == d;
  return(e ? e : d && (d.m & 64 || d.Wa)) ? new yc(null, c, d, null) : new yc(null, c, G(d), null)
}
function V(c, d, e, f) {
  this.Oa = c;
  this.name = d;
  this.Fa = e;
  this.Ia = f;
  this.m = 2153775105;
  this.A = 4096
}
q = V.prototype;
q.G = function(c, d) {
  return jb(d, [B(":"), B(this.Fa)].join(""))
};
q.H = function() {
  null == this.Ia && (this.Ia = Gb(F(this.Oa), F(this.name)) + 2654435769);
  return this.Ia
};
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Q.c(e, this);
      case 3:
        return Q.d(e, this, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return Q.c(c, this)
};
q.c = function(c, d) {
  return Q.d(c, this, d)
};
q.F = function(c, d) {
  return d instanceof V ? this.Fa === d.Fa : !1
};
q.toString = function() {
  return[B(":"), B(this.Fa)].join("")
};
function W(c, d) {
  return c === d ? !0 : c instanceof V && d instanceof V ? c.Fa === d.Fa : !1
}
function zc(c, d, e, f) {
  this.meta = c;
  this.Ta = d;
  this.J = e;
  this.o = f;
  this.A = 0;
  this.m = 32374988
}
q = zc.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  hb(this);
  return null == this.J ? null : L(this.J)
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
function Ac(c) {
  null != c.Ta && (c.J = c.Ta.j ? c.Ta.j() : c.Ta.call(null), c.Ta = null);
  return c.J
}
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  Ac(this);
  if(null == this.J) {
    return null
  }
  for(var c = this.J;;) {
    if(c instanceof zc) {
      c = Ac(c)
    }else {
      return this.J = c, G(this.J)
    }
  }
};
q.X = function() {
  hb(this);
  return null == this.J ? null : H(this.J)
};
q.ja = function() {
  hb(this);
  return null != this.J ? I(this.J) : J
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new zc(d, this.Ta, this.J, this.o)
};
q.L = m("meta");
q.V = function() {
  return Wb(J, this.meta)
};
function Bc(c, d) {
  this.kb = c;
  this.end = d;
  this.A = 0;
  this.m = 2
}
Bc.prototype.R = m("end");
Bc.prototype.add = function(c) {
  this.kb[this.end] = c;
  return this.end += 1
};
Bc.prototype.ka = function() {
  var c = new Cc(this.kb, 0, this.end);
  this.kb = null;
  return c
};
function Cc(c, d, e) {
  this.f = c;
  this.off = d;
  this.end = e;
  this.A = 0;
  this.m = 524306
}
q = Cc.prototype;
q.fa = function(c, d) {
  return Kb.p(this.f, d, this.f[this.off], this.off + 1)
};
q.ga = function(c, d, e) {
  return Kb.p(this.f, d, e, this.off)
};
q.Kb = function() {
  if(this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Cc(this.f, this.off + 1, this.end)
};
q.I = function(c, d) {
  return this.f[this.off + d]
};
q.oa = function(c, d, e) {
  return 0 <= d && d < this.end - this.off ? this.f[this.off + d] : e
};
q.R = function() {
  return this.end - this.off
};
var Dc = function() {
  function c(c, d, e) {
    return new Cc(c, d, e)
  }
  function d(c, d) {
    return new Cc(c, d, c.length)
  }
  function e(c) {
    return new Cc(c, 0, c.length)
  }
  var f = null, f = function(f, k, l) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, k);
      case 3:
        return c.call(this, f, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.e = e;
  f.c = d;
  f.d = c;
  return f
}();
function Ec(c, d, e, f) {
  this.ka = c;
  this.va = d;
  this.meta = e;
  this.o = f;
  this.m = 31850732;
  this.A = 1536
}
q = Ec.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  if(1 < Aa(this.ka)) {
    return new Ec(ub(this.ka), this.va, this.meta, null)
  }
  var c = hb(this.va);
  return null == c ? null : c
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.M = function() {
  return this
};
q.X = function() {
  return C.c(this.ka, 0)
};
q.ja = function() {
  return 1 < Aa(this.ka) ? new Ec(ub(this.ka), this.va, this.meta, null) : null == this.va ? J : this.va
};
q.mb = function() {
  return null == this.va ? null : this.va
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new Ec(this.ka, this.va, d, this.o)
};
q.L = m("meta");
q.V = function() {
  return Wb(J, this.meta)
};
q.nb = m("ka");
q.ob = function() {
  return null == this.va ? J : this.va
};
function Fc(c, d) {
  return 0 === Aa(c) ? d : new Ec(c, d, null, null)
}
function Gc(c) {
  for(var d = [];;) {
    if(G(c)) {
      d.push(H(c)), c = L(c)
    }else {
      return d
    }
  }
}
function Hc(c, d) {
  if(Lb(c)) {
    return O(c)
  }
  for(var e = c, f = d, h = 0;;) {
    if(0 < f && G(e)) {
      e = L(e), f -= 1, h += 1
    }else {
      return h
    }
  }
}
var Jc = function Ic(d) {
  return null == d ? null : null == L(d) ? G(H(d)) : z ? N(H(d), Ic(L(d))) : null
}, Kc = function() {
  function c(c, d) {
    return new zc(null, function() {
      var e = G(c);
      return e ? dc(e) ? Fc(vb(e), f.c(wb(e), d)) : N(H(e), f.c(I(e), d)) : d
    }, null, null)
  }
  function d(c) {
    return new zc(null, function() {
      return c
    }, null, null)
  }
  function e() {
    return new zc(null, ba(null), null, null)
  }
  var f = null, h = function() {
    function c(e, f, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, k)
    }
    function d(c, e, h) {
      return function v(c, d) {
        return new zc(null, function() {
          var e = G(c);
          return e ? dc(e) ? Fc(vb(e), v(wb(e), d)) : N(H(e), v(I(e), d)) : w(d) ? v(H(d), L(d)) : null
        }, null, null)
      }(f.c(c, e), h)
    }
    c.n = 2;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return d(e, f, c)
    };
    c.i = d;
    return c
  }(), f = function(f, l, n) {
    switch(arguments.length) {
      case 0:
        return e.call(this);
      case 1:
        return d.call(this, f);
      case 2:
        return c.call(this, f, l);
      default:
        return h.i(f, l, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.n = 2;
  f.k = h.k;
  f.j = e;
  f.e = d;
  f.c = c;
  f.i = h.i;
  return f
}(), Lc = function() {
  function c(c, d, e, f) {
    return N(c, N(d, N(e, f)))
  }
  function d(c, d, e) {
    return N(c, N(d, e))
  }
  var e = null, f = function() {
    function c(e, f, h, t, s) {
      var v = null;
      4 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, t, v)
    }
    function d(c, e, f, h, k) {
      return N(c, N(e, N(f, N(h, Jc(k)))))
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var s = H(c);
      c = I(c);
      return d(e, f, h, s, c)
    };
    c.i = d;
    return c
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
        return f.i(e, k, l, n, M(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 4;
  e.k = f.k;
  e.e = function(c) {
    return G(c)
  };
  e.c = function(c, d) {
    return N(c, d)
  };
  e.d = d;
  e.p = c;
  e.i = f.i;
  return e
}();
function Mc(c) {
  return ob(c)
}
function Nc(c) {
  return qb(c)
}
function Oc(c, d, e) {
  return rb(c, d, e)
}
function Pc(c, d, e) {
  var f = G(e);
  if(0 === d) {
    return c.j ? c.j() : c.call(null)
  }
  e = Ga(f);
  var h = Ha(f);
  if(1 === d) {
    return c.e ? c.e(e) : c.e ? c.e(e) : c.call(null, e)
  }
  var f = Ga(h), k = Ha(h);
  if(2 === d) {
    return c.c ? c.c(e, f) : c.c ? c.c(e, f) : c.call(null, e, f)
  }
  var h = Ga(k), l = Ha(k);
  if(3 === d) {
    return c.d ? c.d(e, f, h) : c.d ? c.d(e, f, h) : c.call(null, e, f, h)
  }
  var k = Ga(l), n = Ha(l);
  if(4 === d) {
    return c.p ? c.p(e, f, h, k) : c.p ? c.p(e, f, h, k) : c.call(null, e, f, h, k)
  }
  l = Ga(n);
  n = Ha(n);
  if(5 === d) {
    return c.C ? c.C(e, f, h, k, l) : c.C ? c.C(e, f, h, k, l) : c.call(null, e, f, h, k, l)
  }
  c = Ga(n);
  var p = Ha(n);
  if(6 === d) {
    return c.qa ? c.qa(e, f, h, k, l, c) : c.qa ? c.qa(e, f, h, k, l, c) : c.call(null, e, f, h, k, l, c)
  }
  var n = Ga(p), t = Ha(p);
  if(7 === d) {
    return c.Sa ? c.Sa(e, f, h, k, l, c, n) : c.Sa ? c.Sa(e, f, h, k, l, c, n) : c.call(null, e, f, h, k, l, c, n)
  }
  var p = Ga(t), s = Ha(t);
  if(8 === d) {
    return c.Ab ? c.Ab(e, f, h, k, l, c, n, p) : c.Ab ? c.Ab(e, f, h, k, l, c, n, p) : c.call(null, e, f, h, k, l, c, n, p)
  }
  var t = Ga(s), v = Ha(s);
  if(9 === d) {
    return c.Bb ? c.Bb(e, f, h, k, l, c, n, p, t) : c.Bb ? c.Bb(e, f, h, k, l, c, n, p, t) : c.call(null, e, f, h, k, l, c, n, p, t)
  }
  var s = Ga(v), y = Ha(v);
  if(10 === d) {
    return c.pb ? c.pb(e, f, h, k, l, c, n, p, t, s) : c.pb ? c.pb(e, f, h, k, l, c, n, p, t, s) : c.call(null, e, f, h, k, l, c, n, p, t, s)
  }
  var v = Ga(y), E = Ha(y);
  if(11 === d) {
    return c.qb ? c.qb(e, f, h, k, l, c, n, p, t, s, v) : c.qb ? c.qb(e, f, h, k, l, c, n, p, t, s, v) : c.call(null, e, f, h, k, l, c, n, p, t, s, v)
  }
  var y = Ga(E), K = Ha(E);
  if(12 === d) {
    return c.rb ? c.rb(e, f, h, k, l, c, n, p, t, s, v, y) : c.rb ? c.rb(e, f, h, k, l, c, n, p, t, s, v, y) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y)
  }
  var E = Ga(K), R = Ha(K);
  if(13 === d) {
    return c.sb ? c.sb(e, f, h, k, l, c, n, p, t, s, v, y, E) : c.sb ? c.sb(e, f, h, k, l, c, n, p, t, s, v, y, E) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E)
  }
  var K = Ga(R), pa = Ha(R);
  if(14 === d) {
    return c.tb ? c.tb(e, f, h, k, l, c, n, p, t, s, v, y, E, K) : c.tb ? c.tb(e, f, h, k, l, c, n, p, t, s, v, y, E, K) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K)
  }
  var R = Ga(pa), Pa = Ha(pa);
  if(15 === d) {
    return c.ub ? c.ub(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R) : c.ub ? c.ub(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K, R)
  }
  var pa = Ga(Pa), db = Ha(Pa);
  if(16 === d) {
    return c.vb ? c.vb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa) : c.vb ? c.vb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa)
  }
  var Pa = Ga(db), Fb = Ha(db);
  if(17 === d) {
    return c.wb ? c.wb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa) : c.wb ? c.wb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa)
  }
  var db = Ga(Fb), Ed = Ha(Fb);
  if(18 === d) {
    return c.xb ? c.xb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db) : c.xb ? c.xb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db)
  }
  Fb = Ga(Ed);
  Ed = Ha(Ed);
  if(19 === d) {
    return c.yb ? c.yb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db, Fb) : c.yb ? c.yb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db, Fb) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db, Fb)
  }
  var pf = Ga(Ed);
  Ha(Ed);
  if(20 === d) {
    return c.zb ? c.zb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db, Fb, pf) : c.zb ? c.zb(e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db, Fb, pf) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, y, E, K, R, pa, Pa, db, Fb, pf)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function c(c, d, e, f, h) {
    d = Lc.p(d, e, f, h);
    e = c.n;
    return c.k ? (f = Hc(d, e + 1), f <= e ? Pc(c, f, d) : c.k(d)) : c.apply(c, Gc(d))
  }
  function d(c, d, e, f) {
    d = Lc.d(d, e, f);
    e = c.n;
    return c.k ? (f = Hc(d, e + 1), f <= e ? Pc(c, f, d) : c.k(d)) : c.apply(c, Gc(d))
  }
  function e(c, d, e) {
    d = Lc.c(d, e);
    e = c.n;
    if(c.k) {
      var f = Hc(d, e + 1);
      return f <= e ? Pc(c, f, d) : c.k(d)
    }
    return c.apply(c, Gc(d))
  }
  function f(c, d) {
    var e = c.n;
    if(c.k) {
      var f = Hc(d, e + 1);
      return f <= e ? Pc(c, f, d) : c.k(d)
    }
    return c.apply(c, Gc(d))
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, E) {
      var K = null;
      5 < arguments.length && (K = M(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, K)
    }
    function d(c, e, f, h, k, l) {
      e = N(e, N(f, N(h, N(k, Jc(l)))));
      f = c.n;
      return c.k ? (h = Hc(e, f + 1), h <= f ? Pc(c, h, e) : c.k(e)) : c.apply(c, Gc(e))
    }
    c.n = 5;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = L(c);
      var l = H(c);
      c = I(c);
      return d(e, f, h, k, l, c)
    };
    c.i = d;
    return c
  }(), h = function(h, n, p, t, s, v) {
    switch(arguments.length) {
      case 2:
        return f.call(this, h, n);
      case 3:
        return e.call(this, h, n, p);
      case 4:
        return d.call(this, h, n, p, t);
      case 5:
        return c.call(this, h, n, p, t, s);
      default:
        return k.i(h, n, p, t, s, M(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.n = 5;
  h.k = k.k;
  h.c = f;
  h.d = e;
  h.p = d;
  h.C = c;
  h.i = k.i;
  return h
}();
function Qc(c) {
  return G(c) ? c : null
}
function Rc(c, d) {
  for(;;) {
    if(null == G(d)) {
      return!0
    }
    if(w(c.e ? c.e(H(d)) : c.call(null, H(d)))) {
      var e = c, f = L(d);
      c = e;
      d = f
    }else {
      return z ? !1 : null
    }
  }
}
function Sc(c) {
  for(var d = Tc;;) {
    if(G(c)) {
      var e = d.e ? d.e(H(c)) : d.call(null, H(c));
      if(w(e)) {
        return e
      }
      c = L(c)
    }else {
      return null
    }
  }
}
function Uc(c) {
  if("number" === typeof c && !isNaN(c) && Infinity !== c && parseFloat(c) === parseInt(c, 10)) {
    return 0 === (c & 1)
  }
  throw Error([B("Argument must be an integer: "), B(c)].join(""));
}
function Tc(c) {
  return c
}
function Vc(c) {
  return function() {
    var d = null, e = function() {
      function d(c, f, n) {
        var p = null;
        2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
        return e.call(this, c, f, p)
      }
      function e(d, f, h) {
        return va(T.p(c, d, f, h))
      }
      d.n = 2;
      d.k = function(c) {
        var d = H(c);
        c = L(c);
        var f = H(c);
        c = I(c);
        return e(d, f, c)
      };
      d.i = e;
      return d
    }(), d = function(d, h, k) {
      switch(arguments.length) {
        case 0:
          return va(c.j ? c.j() : c.call(null));
        case 1:
          return va(c.e ? c.e(d) : c.call(null, d));
        case 2:
          return va(c.c ? c.c(d, h) : c.call(null, d, h));
        default:
          return e.i(d, h, M(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.n = 2;
    d.k = e.k;
    return d
  }()
}
var Wc = function() {
  function c(c, d, e, f) {
    return function() {
      function h(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return s.call(this, d)
      }
      function s(h) {
        return T.C(c, d, e, f, h)
      }
      h.n = 0;
      h.k = function(c) {
        c = G(c);
        return s(c)
      };
      h.i = s;
      return h
    }()
  }
  function d(c, d, e) {
    return function() {
      function f(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return h.call(this, d)
      }
      function h(f) {
        return T.p(c, d, e, f)
      }
      f.n = 0;
      f.k = function(c) {
        c = G(c);
        return h(c)
      };
      f.i = h;
      return f
    }()
  }
  function e(c, d) {
    return function() {
      function e(c) {
        var d = null;
        0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
        return f.call(this, d)
      }
      function f(e) {
        return T.d(c, d, e)
      }
      e.n = 0;
      e.k = function(c) {
        c = G(c);
        return f(c)
      };
      e.i = f;
      return e
    }()
  }
  var f = null, h = function() {
    function c(e, f, h, k, v) {
      var y = null;
      4 < arguments.length && (y = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, y)
    }
    function d(c, e, f, h, k) {
      return function() {
        function d(c) {
          var e = null;
          0 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 0), 0));
          return l.call(this, e)
        }
        function l(d) {
          return T.C(c, e, f, h, Kc.c(k, d))
        }
        d.n = 0;
        d.k = function(c) {
          c = G(c);
          return l(c)
        };
        d.i = l;
        return d
      }()
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = I(c);
      return d(e, f, h, k, c)
    };
    c.i = d;
    return c
  }(), f = function(f, l, n, p, t) {
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
        return h.i(f, l, n, p, M(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.n = 4;
  f.k = h.k;
  f.e = aa();
  f.c = e;
  f.d = d;
  f.p = c;
  f.i = h.i;
  return f
}(), X = function() {
  function c(c, d, e, h) {
    return new zc(null, function() {
      var t = G(d), s = G(e), v = G(h);
      return t && s && v ? N(c.d ? c.d(H(t), H(s), H(v)) : c.call(null, H(t), H(s), H(v)), f.p(c, I(t), I(s), I(v))) : null
    }, null, null)
  }
  function d(c, d, e) {
    return new zc(null, function() {
      var h = G(d), t = G(e);
      return h && t ? N(c.c ? c.c(H(h), H(t)) : c.call(null, H(h), H(t)), f.d(c, I(h), I(t))) : null
    }, null, null)
  }
  function e(c, d) {
    return new zc(null, function() {
      var e = G(d);
      if(e) {
        if(dc(e)) {
          for(var h = vb(e), t = O(h), s = new Bc(Array(t), 0), v = 0;;) {
            if(v < t) {
              var y = c.e ? c.e(C.c(h, v)) : c.call(null, C.c(h, v));
              s.add(y);
              v += 1
            }else {
              break
            }
          }
          return Fc(s.ka(), f.c(c, wb(e)))
        }
        return N(c.e ? c.e(H(e)) : c.call(null, H(e)), f.c(c, I(e)))
      }
      return null
    }, null, null)
  }
  var f = null, h = function() {
    function c(e, f, h, k, v) {
      var y = null;
      4 < arguments.length && (y = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, y)
    }
    function d(c, e, h, k, l) {
      return f.c(function(d) {
        return T.c(c, d)
      }, function E(c) {
        return new zc(null, function() {
          var d = f.c(G, c);
          return Rc(Tc, d) ? N(f.c(H, d), E(f.c(I, d))) : null
        }, null, null)
      }(Qb.i(l, k, M([h, e], 0))))
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = I(c);
      return d(e, f, h, k, c)
    };
    c.i = d;
    return c
  }(), f = function(f, l, n, p, t) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, n);
      case 4:
        return c.call(this, f, l, n, p);
      default:
        return h.i(f, l, n, p, M(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.n = 4;
  f.k = h.k;
  f.c = e;
  f.d = d;
  f.p = c;
  f.i = h.i;
  return f
}(), Yc = function Xc(d, e) {
  return new zc(null, function() {
    if(0 < d) {
      var f = G(e);
      return f ? N(H(f), Xc(d - 1, I(f))) : null
    }
    return null
  }, null, null)
};
function Zc(c, d) {
  return new zc(null, function() {
    var e;
    a: {
      e = c;
      for(var f = d;;) {
        if(f = G(f), 0 < e && f) {
          e -= 1, f = I(f)
        }else {
          e = f;
          break a
        }
      }
      e = void 0
    }
    return e
  }, null, null)
}
var $c = function() {
  function c(c, d) {
    return Yc(c, e.e(d))
  }
  function d(c) {
    return new zc(null, function() {
      return N(c, e.e(c))
    }, null, null)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}(), bd = function ad(d, e) {
  return N(e, new zc(null, function() {
    return ad(d, d.e ? d.e(e) : d.call(null, e))
  }, null, null))
}, cd = function() {
  function c(c, e) {
    return new zc(null, function() {
      var k = G(c), l = G(e);
      return k && l ? N(H(k), N(H(l), d.c(I(k), I(l)))) : null
    }, null, null)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      return new zc(null, function() {
        var e = X.c(G, Qb.i(h, f, M([c], 0)));
        return Rc(Tc, e) ? Kc.c(X.c(H, e), T.c(d, X.c(I, e))) : null
      }, null, null)
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}();
function dd(c) {
  return function e(c, h) {
    return new zc(null, function() {
      var k = G(c);
      return k ? N(H(k), e(I(k), h)) : G(h) ? e(H(h), I(h)) : null
    }, null, null)
  }(null, c)
}
var ed = function() {
  function c(c, d) {
    return dd(X.c(c, d))
  }
  var d = null, e = function() {
    function c(e, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, p)
    }
    function d(c, e, f) {
      return dd(T.p(X, c, e, f))
    }
    c.n = 2;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return d(e, f, c)
    };
    c.i = d;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}(), gd = function fd(d, e) {
  return new zc(null, function() {
    var f = G(e);
    if(f) {
      if(dc(f)) {
        for(var h = vb(f), k = O(h), l = new Bc(Array(k), 0), n = 0;;) {
          if(n < k) {
            if(w(d.e ? d.e(C.c(h, n)) : d.call(null, C.c(h, n)))) {
              var p = C.c(h, n);
              l.add(p)
            }
            n += 1
          }else {
            break
          }
        }
        return Fc(l.ka(), fd(d, wb(f)))
      }
      h = H(f);
      f = I(f);
      return w(d.e ? d.e(h) : d.call(null, h)) ? N(h, fd(d, f)) : fd(d, f)
    }
    return null
  }, null, null)
};
function hd(c, d) {
  return null != c ? c && (c.A & 4 || c.uc) ? Nc(U.d(pb, ob(c), d)) : U.d(Da, c, d) : U.d(Qb, J, d)
}
var id = function() {
  function c(c, d, e, n) {
    return new zc(null, function() {
      var p = G(n);
      if(p) {
        var t = Yc(c, p);
        return c === O(t) ? N(t, f.p(c, d, e, Zc(d, p))) : Da(J, Yc(c, Kc.c(t, e)))
      }
      return null
    }, null, null)
  }
  function d(c, d, e) {
    return new zc(null, function() {
      var n = G(e);
      if(n) {
        var p = Yc(c, n);
        return c === O(p) ? N(p, f.d(c, d, Zc(d, n))) : null
      }
      return null
    }, null, null)
  }
  function e(c, d) {
    return f.d(c, c, d)
  }
  var f = null, f = function(f, k, l, n) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.d = d;
  f.p = c;
  return f
}(), jd = function() {
  function c(c, d, e) {
    var l = fc;
    for(d = G(d);;) {
      if(d) {
        var n = c;
        if(n ? n.m & 256 || n.Ob || (n.m ? 0 : x(Ja, n)) : x(Ja, n)) {
          c = Q.d(c, H(d), l);
          if(l === c) {
            return e
          }
          d = L(d)
        }else {
          return e
        }
      }else {
        return c
      }
    }
  }
  function d(c, d) {
    return e.d(c, d, null)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), ld = function kd(d, e, f) {
  var h = P.d(e, 0, null);
  e = rc(e, 1);
  return w(e) ? S.d(d, h, kd(Q.c(d, h), e, f)) : S.d(d, h, f)
}, md = function() {
  function c(c, d, e, f, k, v) {
    var y = P.d(d, 0, null);
    d = rc(d, 1);
    return w(d) ? S.d(c, y, h.qa(Q.c(c, y), d, e, f, k, v)) : S.d(c, y, e.p ? e.p(Q.c(c, y), f, k, v) : e.call(null, Q.c(c, y), f, k, v))
  }
  function d(c, d, e, f, k) {
    var v = P.d(d, 0, null);
    d = rc(d, 1);
    return w(d) ? S.d(c, v, h.C(Q.c(c, v), d, e, f, k)) : S.d(c, v, e.d ? e.d(Q.c(c, v), f, k) : e.call(null, Q.c(c, v), f, k))
  }
  function e(c, d, e, f) {
    var k = P.d(d, 0, null);
    d = rc(d, 1);
    return w(d) ? S.d(c, k, h.p(Q.c(c, k), d, e, f)) : S.d(c, k, e.c ? e.c(Q.c(c, k), f) : e.call(null, Q.c(c, k), f))
  }
  function f(c, d, e) {
    var f = P.d(d, 0, null);
    d = rc(d, 1);
    return w(d) ? S.d(c, f, h.d(Q.c(c, f), d, e)) : S.d(c, f, e.e ? e.e(Q.c(c, f)) : e.call(null, Q.c(c, f)))
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, E, K) {
      var R = null;
      6 < arguments.length && (R = M(Array.prototype.slice.call(arguments, 6), 0));
      return d.call(this, e, f, h, k, l, E, R)
    }
    function d(c, e, f, k, l, n, K) {
      var R = P.d(e, 0, null);
      e = rc(e, 1);
      return w(e) ? S.d(c, R, T.i(h, Q.c(c, R), e, f, k, M([l, n, K], 0))) : S.d(c, R, T.i(f, Q.c(c, R), k, l, n, M([K], 0)))
    }
    c.n = 6;
    c.k = function(c) {
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
      var K = H(c);
      c = I(c);
      return d(e, f, h, k, l, K, c)
    };
    c.i = d;
    return c
  }(), h = function(h, n, p, t, s, v, y) {
    switch(arguments.length) {
      case 3:
        return f.call(this, h, n, p);
      case 4:
        return e.call(this, h, n, p, t);
      case 5:
        return d.call(this, h, n, p, t, s);
      case 6:
        return c.call(this, h, n, p, t, s, v);
      default:
        return k.i(h, n, p, t, s, v, M(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.n = 6;
  h.k = k.k;
  h.d = f;
  h.p = e;
  h.C = d;
  h.qa = c;
  h.i = k.i;
  return h
}();
function nd(c, d) {
  this.B = c;
  this.f = d
}
function od(c) {
  c = c.l;
  return 32 > c ? 0 : c - 1 >>> 5 << 5
}
function pd(c, d, e) {
  for(;;) {
    if(0 === d) {
      return e
    }
    var f = new nd(c, Array(32));
    f.f[0] = e;
    e = f;
    d -= 5
  }
}
var rd = function qd(d, e, f, h) {
  var k = new nd(f.B, f.f.slice()), l = d.l - 1 >>> e & 31;
  5 === e ? k.f[l] = h : (f = f.f[l], d = null != f ? qd(d, e - 5, f, h) : pd(null, e - 5, h), k.f[l] = d);
  return k
};
function sd(c, d) {
  throw Error([B("No item "), B(c), B(" in vector of length "), B(d)].join(""));
}
function td(c, d) {
  if(0 <= d && d < c.l) {
    if(d >= od(c)) {
      return c.tail
    }
    for(var e = c.root, f = c.shift;;) {
      if(0 < f) {
        var h = f - 5, e = e.f[d >>> f & 31], f = h
      }else {
        return e.f
      }
    }
  }else {
    return sd(d, c.l)
  }
}
var vd = function ud(d, e, f, h, k) {
  var l = new nd(f.B, f.f.slice());
  if(0 === e) {
    l.f[h & 31] = k
  }else {
    var n = h >>> e & 31;
    d = ud(d, e - 5, f.f[n], h, k);
    l.f[n] = d
  }
  return l
};
function wd(c, d, e, f, h, k) {
  this.meta = c;
  this.l = d;
  this.shift = e;
  this.root = f;
  this.tail = h;
  this.o = k;
  this.A = 4;
  this.m = 167668511
}
q = wd.prototype;
q.Va = function() {
  return new xd(this.l, this.shift, yd.e ? yd.e(this.root) : yd.call(null, this.root), zd.e ? zd.e(this.tail) : zd.call(null, this.tail))
};
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.P = function(c, d) {
  return C.d(this, d, null)
};
q.Q = function(c, d, e) {
  return C.d(this, d, e)
};
q.ya = function(c, d, e) {
  if(0 <= d && d < this.l) {
    return od(this) <= d ? (c = this.tail.slice(), c[d & 31] = e, new wd(this.meta, this.l, this.shift, this.root, c, null)) : new wd(this.meta, this.l, this.shift, vd(this, this.shift, this.root, d, e), this.tail, null)
  }
  if(d === this.l) {
    return Da(this, e)
  }
  if(z) {
    throw Error([B("Index "), B(d), B(" out of bounds  [0,"), B(this.l), B("]")].join(""));
  }
  return null
};
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.I(null, e);
      case 3:
        return this.oa(null, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return this.I(null, c)
};
q.c = function(c, d) {
  return this.oa(null, c, d)
};
q.K = function(c, d) {
  if(32 > this.l - od(this)) {
    var e = this.tail.slice();
    e.push(d);
    return new wd(this.meta, this.l + 1, this.shift, this.root, e, null)
  }
  var f = this.l >>> 5 > 1 << this.shift, e = f ? this.shift + 5 : this.shift;
  if(f) {
    f = new nd(null, Array(32));
    f.f[0] = this.root;
    var h = pd(null, this.shift, new nd(null, this.tail));
    f.f[1] = h
  }else {
    f = rd(this, this.shift, this.root, new nd(null, this.tail))
  }
  return new wd(this.meta, this.l + 1, e, f, [d], null)
};
q.Cb = function() {
  return C.c(this, 0)
};
q.Db = function() {
  return C.c(this, 1)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return Jb.c(this, d)
};
q.ga = function(c, d, e) {
  return Jb.d(this, d, e)
};
q.M = function() {
  return 0 === this.l ? null : 32 > this.l ? M.e(this.tail) : z ? Ad.d ? Ad.d(this, 0, 0) : Ad.call(null, this, 0, 0) : null
};
q.R = m("l");
q.Fb = function(c, d, e) {
  return Ma(this, d, e)
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new wd(d, this.l, this.shift, this.root, this.tail, this.o)
};
q.L = m("meta");
q.I = function(c, d) {
  return td(this, d)[d & 31]
};
q.oa = function(c, d, e) {
  return 0 <= d && d < this.l ? C.c(this, d) : e
};
q.V = function() {
  return Wb(Bd, this.meta)
};
var Cd = new nd(null, Array(32)), Bd = new wd(null, 0, 5, Cd, [], 0);
function Y(c, d) {
  var e = c.length, f = d ? c : c.slice();
  if(32 > e) {
    return new wd(null, e, 5, Cd, f, null)
  }
  for(var h = f.slice(0, 32), k = 32, l = ob(new wd(null, 32, 5, Cd, h, null));;) {
    if(k < e) {
      h = k + 1, l = pb(l, f[k]), k = h
    }else {
      return qb(l)
    }
  }
}
function Dd(c, d, e, f, h, k) {
  this.U = c;
  this.pa = d;
  this.s = e;
  this.off = f;
  this.meta = h;
  this.o = k;
  this.m = 32243948;
  this.A = 1536
}
q = Dd.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  if(this.off + 1 < this.pa.length) {
    var c = Ad.p ? Ad.p(this.U, this.pa, this.s, this.off + 1) : Ad.call(null, this.U, this.pa, this.s, this.off + 1);
    return null == c ? null : c
  }
  return xb(this)
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return Jb.c(Fd.d ? Fd.d(this.U, this.s + this.off, O(this.U)) : Fd.call(null, this.U, this.s + this.off, O(this.U)), d)
};
q.ga = function(c, d, e) {
  return Jb.d(Fd.d ? Fd.d(this.U, this.s + this.off, O(this.U)) : Fd.call(null, this.U, this.s + this.off, O(this.U)), d, e)
};
q.M = function() {
  return this
};
q.X = function() {
  return this.pa[this.off]
};
q.ja = function() {
  if(this.off + 1 < this.pa.length) {
    var c = Ad.p ? Ad.p(this.U, this.pa, this.s, this.off + 1) : Ad.call(null, this.U, this.pa, this.s, this.off + 1);
    return null == c ? J : c
  }
  return wb(this)
};
q.mb = function() {
  var c = this.pa.length, c = this.s + c < Aa(this.U) ? Ad.d ? Ad.d(this.U, this.s + c, 0) : Ad.call(null, this.U, this.s + c, 0) : null;
  return null == c ? null : c
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return Ad.C ? Ad.C(this.U, this.pa, this.s, this.off, d) : Ad.call(null, this.U, this.pa, this.s, this.off, d)
};
q.V = function() {
  return Wb(Bd, this.meta)
};
q.nb = function() {
  return Dc.c(this.pa, this.off)
};
q.ob = function() {
  var c = this.pa.length, c = this.s + c < Aa(this.U) ? Ad.d ? Ad.d(this.U, this.s + c, 0) : Ad.call(null, this.U, this.s + c, 0) : null;
  return null == c ? J : c
};
var Ad = function() {
  function c(c, d, e, f, p) {
    return new Dd(c, d, e, f, p, null)
  }
  function d(c, d, e, f) {
    return new Dd(c, d, e, f, null, null)
  }
  function e(c, d, e) {
    return new Dd(c, td(c, d), d, e, null, null)
  }
  var f = null, f = function(f, k, l, n, p) {
    switch(arguments.length) {
      case 3:
        return e.call(this, f, k, l);
      case 4:
        return d.call(this, f, k, l, n);
      case 5:
        return c.call(this, f, k, l, n, p)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.d = e;
  f.p = d;
  f.C = c;
  return f
}();
function Gd(c, d, e, f, h) {
  this.meta = c;
  this.v = d;
  this.start = e;
  this.end = f;
  this.o = h;
  this.A = 0;
  this.m = 32400159
}
q = Gd.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.P = function(c, d) {
  return C.d(this, d, null)
};
q.Q = function(c, d, e) {
  return C.d(this, d, e)
};
q.ya = function(c, d, e) {
  var f = this, h = f.start + d;
  return Hd.C ? Hd.C(f.meta, S.d(f.v, h, e), f.start, function() {
    var c = f.end, d = h + 1;
    return c > d ? c : d
  }(), null) : Hd.call(null, f.meta, S.d(f.v, h, e), f.start, function() {
    var c = f.end, d = h + 1;
    return c > d ? c : d
  }(), null)
};
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.I(null, e);
      case 3:
        return this.oa(null, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return this.I(null, c)
};
q.c = function(c, d) {
  return this.oa(null, c, d)
};
q.K = function(c, d) {
  return Hd.C ? Hd.C(this.meta, Wa(this.v, this.end, d), this.start, this.end + 1, null) : Hd.call(null, this.meta, Wa(this.v, this.end, d), this.start, this.end + 1, null)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return Jb.c(this, d)
};
q.ga = function(c, d, e) {
  return Jb.d(this, d, e)
};
q.M = function() {
  var c = this;
  return function e(f) {
    return f === c.end ? null : N(C.c(c.v, f), new zc(null, function() {
      return e(f + 1)
    }, null, null))
  }(c.start)
};
q.R = function() {
  return this.end - this.start
};
q.Fb = function(c, d, e) {
  return Ma(this, d, e)
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return Hd.C ? Hd.C(d, this.v, this.start, this.end, this.o) : Hd.call(null, d, this.v, this.start, this.end, this.o)
};
q.L = m("meta");
q.I = function(c, d) {
  return 0 > d || this.end <= this.start + d ? sd(d, this.end - this.start) : C.c(this.v, this.start + d)
};
q.oa = function(c, d, e) {
  return 0 > d || this.end <= this.start + d ? e : C.d(this.v, this.start + d, e)
};
q.V = function() {
  return Wb(Bd, this.meta)
};
function Hd(c, d, e, f, h) {
  for(;;) {
    if(d instanceof Gd) {
      e = d.start + e, f = d.start + f, d = d.v
    }else {
      var k = O(d);
      if(0 > e || 0 > f || e > k || f > k) {
        throw Error("Index out of bounds");
      }
      return new Gd(c, d, e, f, h)
    }
  }
}
var Fd = function() {
  function c(c, d, e) {
    return Hd(null, c, d, e, null)
  }
  function d(c, d) {
    return e.d(c, d, O(c))
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}();
function yd(c) {
  return new nd({}, c.f.slice())
}
function zd(c) {
  var d = Array(32);
  ec(c, 0, d, 0, c.length);
  return d
}
var Jd = function Id(d, e, f, h) {
  f = d.root.B === f.B ? f : new nd(d.root.B, f.f.slice());
  var k = d.l - 1 >>> e & 31;
  if(5 === e) {
    d = h
  }else {
    var l = f.f[k];
    d = null != l ? Id(d, e - 5, l, h) : pd(d.root.B, e - 5, h)
  }
  f.f[k] = d;
  return f
};
function xd(c, d, e, f) {
  this.l = c;
  this.shift = d;
  this.root = e;
  this.tail = f;
  this.m = 275;
  this.A = 88
}
q = xd.prototype;
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.P(null, e);
      case 3:
        return this.Q(null, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return this.P(null, c)
};
q.c = function(c, d) {
  return this.Q(null, c, d)
};
q.P = function(c, d) {
  return C.d(this, d, null)
};
q.Q = function(c, d, e) {
  return C.d(this, d, e)
};
q.I = function(c, d) {
  if(this.root.B) {
    return td(this, d)[d & 31]
  }
  throw Error("nth after persistent!");
};
q.oa = function(c, d, e) {
  return 0 <= d && d < this.l ? C.c(this, d) : e
};
q.R = function() {
  if(this.root.B) {
    return this.l
  }
  throw Error("count after persistent!");
};
q.Qb = function(c, d, e) {
  var f = this;
  if(f.root.B) {
    if(0 <= d && d < f.l) {
      return od(this) <= d ? f.tail[d & 31] = e : (c = function k(c, n) {
        var p = f.root.B === n.B ? n : new nd(f.root.B, n.f.slice());
        if(0 === c) {
          p.f[d & 31] = e
        }else {
          var t = d >>> c & 31, s = k(c - 5, p.f[t]);
          p.f[t] = s
        }
        return p
      }.call(null, f.shift, f.root), f.root = c), this
    }
    if(d === f.l) {
      return pb(this, e)
    }
    if(z) {
      throw Error([B("Index "), B(d), B(" out of bounds for TransientVector of length"), B(f.l)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
q.Xa = function(c, d, e) {
  return tb(this, d, e)
};
q.Ka = function(c, d) {
  if(this.root.B) {
    if(32 > this.l - od(this)) {
      this.tail[this.l & 31] = d
    }else {
      var e = new nd(this.root.B, this.tail), f = Array(32);
      f[0] = d;
      this.tail = f;
      if(this.l >>> 5 > 1 << this.shift) {
        var f = Array(32), h = this.shift + 5;
        f[0] = this.root;
        f[1] = pd(this.root.B, this.shift, e);
        this.root = new nd(this.root.B, f);
        this.shift = h
      }else {
        this.root = Jd(this, this.shift, this.root, e)
      }
    }
    this.l += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
q.La = function() {
  if(this.root.B) {
    this.root.B = null;
    var c = this.l - od(this), d = Array(c);
    ec(this.tail, 0, d, 0, c);
    return new wd(null, this.l, this.shift, this.root, d, null)
  }
  throw Error("persistent! called twice");
};
function Kd() {
  this.A = 0;
  this.m = 2097152
}
Kd.prototype.F = ba(!1);
var Ld = new Kd;
function Md(c, d) {
  return hc(bc(d) ? O(c) === O(d) ? Rc(Tc, X.c(function(c) {
    return Ib.c(Q.d(d, H(c), Ld), H(L(c)))
  }, c)) : null : null)
}
function Nd(c, d) {
  var e = c.f;
  if(d instanceof V) {
    a: {
      for(var f = e.length, h = d.Fa, k = 0;;) {
        if(f <= k) {
          e = -1;
          break a
        }
        var l = e[k];
        if(l instanceof V && h === l.Fa) {
          e = k;
          break a
        }
        if(z) {
          k += 2
        }else {
          e = null;
          break a
        }
      }
      e = void 0
    }
  }else {
    if(da(d) || "number" === typeof d) {
      a: {
        f = e.length;
        for(h = 0;;) {
          if(f <= h) {
            e = -1;
            break a
          }
          if(d === e[h]) {
            e = h;
            break a
          }
          if(z) {
            h += 2
          }else {
            e = null;
            break a
          }
        }
        e = void 0
      }
    }else {
      if(d instanceof Eb) {
        a: {
          f = e.length;
          h = d.Qa;
          for(k = 0;;) {
            if(f <= k) {
              e = -1;
              break a
            }
            l = e[k];
            if(l instanceof Eb && h === l.Qa) {
              e = k;
              break a
            }
            if(z) {
              k += 2
            }else {
              e = null;
              break a
            }
          }
          e = void 0
        }
      }else {
        if(null == d) {
          a: {
            f = e.length;
            for(h = 0;;) {
              if(f <= h) {
                e = -1;
                break a
              }
              if(null == e[h]) {
                e = h;
                break a
              }
              if(z) {
                h += 2
              }else {
                e = null;
                break a
              }
            }
            e = void 0
          }
        }else {
          if(z) {
            a: {
              f = e.length;
              for(h = 0;;) {
                if(f <= h) {
                  e = -1;
                  break a
                }
                if(Ib.c(d, e[h])) {
                  e = h;
                  break a
                }
                if(z) {
                  h += 2
                }else {
                  e = null;
                  break a
                }
              }
              e = void 0
            }
          }else {
            e = null
          }
        }
      }
    }
  }
  return e
}
function Od(c, d, e) {
  this.f = c;
  this.s = d;
  this.ia = e;
  this.A = 0;
  this.m = 32374990
}
q = Od.prototype;
q.H = function() {
  return Nb(this)
};
q.ea = function() {
  return this.s < this.f.length - 2 ? new Od(this.f, this.s + 2, this.ia) : null
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.R = function() {
  return(this.f.length - this.s) / 2
};
q.X = function() {
  return Y([this.f[this.s], this.f[this.s + 1]], !0)
};
q.ja = function() {
  return this.s < this.f.length - 2 ? new Od(this.f, this.s + 2, this.ia) : J
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new Od(this.f, this.s, d)
};
q.L = m("ia");
q.V = function() {
  return Wb(J, this.ia)
};
function Pd(c, d, e, f) {
  this.meta = c;
  this.l = d;
  this.f = e;
  this.o = f;
  this.A = 4;
  this.m = 16123663
}
q = Pd.prototype;
q.Va = function() {
  return new Qd({}, this.f.length, this.f.slice())
};
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  c = Nd(this, d);
  return-1 === c ? e : this.f[c + 1]
};
q.ya = function(c, d, e) {
  c = Nd(this, d);
  if(-1 === c) {
    if(this.l < Rd) {
      c = this.f;
      for(var f = c.length, h = Array(f + 2), k = 0;;) {
        if(k < f) {
          h[k] = c[k], k += 1
        }else {
          break
        }
      }
      h[f] = d;
      h[f + 1] = e;
      return new Pd(this.meta, this.l + 1, h, null)
    }
    return ab(Ma(hd(Sd, this), d, e), this.meta)
  }
  return e === this.f[c + 1] ? this : z ? (d = this.f.slice(), d[c + 1] = e, new Pd(this.meta, this.l, d, null)) : null
};
q.lb = function(c, d) {
  return-1 !== Nd(this, d)
};
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.P(null, e);
      case 3:
        return this.Q(null, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return this.P(null, c)
};
q.c = function(c, d) {
  return this.Q(null, c, d)
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.toString = function() {
  return zb(this)
};
q.M = function() {
  return 0 <= this.f.length - 2 ? new Od(this.f, 0, null) : null
};
q.R = m("l");
q.F = function(c, d) {
  return Md(this, d)
};
q.N = function(c, d) {
  return new Pd(d, this.l, this.f, this.o)
};
q.L = m("meta");
q.V = function() {
  return ab(Td, this.meta)
};
q.Ja = function(c, d) {
  if(0 <= Nd(this, d)) {
    var e = this.f.length, f = e - 2;
    if(0 === f) {
      return Ba(this)
    }
    for(var f = Array(f), h = 0, k = 0;;) {
      if(h >= e) {
        return new Pd(this.meta, this.l - 1, f, null)
      }
      if(Ib.c(d, this.f[h])) {
        h += 2
      }else {
        if(z) {
          f[k] = this.f[h], f[k + 1] = this.f[h + 1], k += 2, h += 2
        }else {
          return null
        }
      }
    }
  }else {
    return this
  }
};
var Td = new Pd(null, 0, [], null), Rd = 8;
function D(c, d) {
  var e = d ? c : c.slice();
  return new Pd(null, e.length / 2, e, null)
}
function Qd(c, d, e) {
  this.Ma = c;
  this.na = d;
  this.f = e;
  this.A = 56;
  this.m = 258
}
q = Qd.prototype;
q.Eb = function(c, d) {
  if(w(this.Ma)) {
    var e = Nd(this, d);
    0 <= e && (this.f[e] = this.f[this.na - 2], this.f[e + 1] = this.f[this.na - 1], e = this.f, e.pop(), e.pop(), this.na -= 2);
    return this
  }
  throw Error("dissoc! after persistent!");
};
q.Xa = function(c, d, e) {
  if(w(this.Ma)) {
    c = Nd(this, d);
    if(-1 === c) {
      return this.na + 2 <= 2 * Rd ? (this.na += 2, this.f.push(d), this.f.push(e), this) : Oc(Ud.c ? Ud.c(this.na, this.f) : Ud.call(null, this.na, this.f), d, e)
    }
    e !== this.f[c + 1] && (this.f[c + 1] = e);
    return this
  }
  throw Error("assoc! after persistent!");
};
q.Ka = function(c, d) {
  if(w(this.Ma)) {
    if(d ? d.m & 2048 || d.dc || (d.m ? 0 : x(Qa, d)) : x(Qa, d)) {
      return rb(this, tc.e ? tc.e(d) : tc.call(null, d), uc.e ? uc.e(d) : uc.call(null, d))
    }
    for(var e = G(d), f = this;;) {
      var h = H(e);
      if(w(h)) {
        e = L(e), f = rb(f, tc.e ? tc.e(h) : tc.call(null, h), uc.e ? uc.e(h) : uc.call(null, h))
      }else {
        return f
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
q.La = function() {
  if(w(this.Ma)) {
    return this.Ma = !1, new Pd(null, mc((this.na - this.na % 2) / 2), this.f, null)
  }
  throw Error("persistent! called twice");
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  if(w(this.Ma)) {
    return c = Nd(this, d), -1 === c ? e : this.f[c + 1]
  }
  throw Error("lookup after persistent!");
};
q.R = function() {
  if(w(this.Ma)) {
    return mc((this.na - this.na % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Ud(c, d) {
  for(var e = ob(Sd), f = 0;;) {
    if(f < c) {
      e = rb(e, d[f], d[f + 1]), f += 2
    }else {
      return e
    }
  }
}
function Vd() {
  this.wa = !1
}
function Wd(c, d) {
  return c === d ? !0 : W(c, d) ? !0 : z ? Ib.c(c, d) : null
}
var Xd = function() {
  function c(c, d, e, l, n) {
    c = c.slice();
    c[d] = e;
    c[l] = n;
    return c
  }
  function d(c, d, e) {
    c = c.slice();
    c[d] = e;
    return c
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, k);
      case 5:
        return c.call(this, e, h, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.d = d;
  e.C = c;
  return e
}();
function Yd(c, d) {
  var e = Array(c.length - 2);
  ec(c, 0, e, 0, 2 * d);
  ec(c, 2 * (d + 1), e, 2 * d, e.length - 2 * d);
  return e
}
var Zd = function() {
  function c(c, d, e, l, n, p) {
    c = c.Ea(d);
    c.f[e] = l;
    c.f[n] = p;
    return c
  }
  function d(c, d, e, l) {
    c = c.Ea(d);
    c.f[e] = l;
    return c
  }
  var e = null, e = function(e, h, k, l, n, p) {
    switch(arguments.length) {
      case 4:
        return d.call(this, e, h, k, l);
      case 6:
        return c.call(this, e, h, k, l, n, p)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = d;
  e.qa = c;
  return e
}();
function $d(c, d, e) {
  this.B = c;
  this.D = d;
  this.f = e
}
function ae(c, d, e, f) {
  if(c.D === e) {
    return null
  }
  c = c.Ea(d);
  d = c.f;
  var h = d.length;
  c.D ^= e;
  ec(d, 2 * (f + 1), d, 2 * f, h - 2 * (f + 1));
  d[h - 2] = null;
  d[h - 1] = null;
  return c
}
q = $d.prototype;
q.ta = function(c, d, e, f, h, k) {
  var l = 1 << (e >>> d & 31), n = qc(this.D & l - 1);
  if(0 === (this.D & l)) {
    var p = qc(this.D);
    if(2 * p < this.f.length) {
      c = this.Ea(c);
      d = c.f;
      k.wa = !0;
      a: {
        for(e = 2 * (p - n), k = 2 * n + (e - 1), p = 2 * (n + 1) + (e - 1);;) {
          if(0 === e) {
            break a
          }
          d[p] = d[k];
          p -= 1;
          e -= 1;
          k -= 1
        }
      }
      d[2 * n] = f;
      d[2 * n + 1] = h;
      c.D |= l;
      return c
    }
    if(16 <= p) {
      n = Array(32);
      n[e >>> d & 31] = be.ta(c, d + 5, e, f, h, k);
      for(h = f = 0;;) {
        if(32 > f) {
          0 !== (this.D >>> f & 1) && (n[f] = null != this.f[h] ? be.ta(c, d + 5, F(this.f[h]), this.f[h], this.f[h + 1], k) : this.f[h + 1], h += 2), f += 1
        }else {
          break
        }
      }
      return new ce(c, p + 1, n)
    }
    return z ? (d = Array(2 * (p + 4)), ec(this.f, 0, d, 0, 2 * n), d[2 * n] = f, d[2 * n + 1] = h, ec(this.f, 2 * n, d, 2 * (n + 1), 2 * (p - n)), k.wa = !0, c = this.Ea(c), c.f = d, c.D |= l, c) : null
  }
  p = this.f[2 * n];
  l = this.f[2 * n + 1];
  return null == p ? (p = l.ta(c, d + 5, e, f, h, k), p === l ? this : Zd.p(this, c, 2 * n + 1, p)) : Wd(f, p) ? h === l ? this : Zd.p(this, c, 2 * n + 1, h) : z ? (k.wa = !0, Zd.qa(this, c, 2 * n, null, 2 * n + 1, de.Sa ? de.Sa(c, d + 5, p, l, e, f, h) : de.call(null, c, d + 5, p, l, e, f, h))) : null
};
q.Ya = function() {
  return ee.e ? ee.e(this.f) : ee.call(null, this.f)
};
q.$a = function(c, d, e, f, h) {
  var k = 1 << (e >>> d & 31);
  if(0 === (this.D & k)) {
    return this
  }
  var l = qc(this.D & k - 1), n = this.f[2 * l], p = this.f[2 * l + 1];
  return null == n ? (d = p.$a(c, d + 5, e, f, h), d === p ? this : null != d ? Zd.p(this, c, 2 * l + 1, d) : this.D === k ? null : z ? ae(this, c, k, l) : null) : Wd(f, n) ? (h[0] = !0, ae(this, c, k, l)) : z ? this : null
};
q.Ea = function(c) {
  if(c === this.B) {
    return this
  }
  var d = qc(this.D), e = Array(0 > d ? 4 : 2 * (d + 1));
  ec(this.f, 0, e, 0, 2 * d);
  return new $d(c, this.D, e)
};
q.Za = function(c, d, e) {
  var f = 1 << (d >>> c & 31);
  if(0 === (this.D & f)) {
    return this
  }
  var h = qc(this.D & f - 1), k = this.f[2 * h], l = this.f[2 * h + 1];
  return null == k ? (c = l.Za(c + 5, d, e), c === l ? this : null != c ? new $d(null, this.D, Xd.d(this.f, 2 * h + 1, c)) : this.D === f ? null : z ? new $d(null, this.D ^ f, Yd(this.f, h)) : null) : Wd(e, k) ? new $d(null, this.D ^ f, Yd(this.f, h)) : z ? this : null
};
q.sa = function(c, d, e, f, h) {
  var k = 1 << (d >>> c & 31), l = qc(this.D & k - 1);
  if(0 === (this.D & k)) {
    var n = qc(this.D);
    if(16 <= n) {
      l = Array(32);
      l[d >>> c & 31] = be.sa(c + 5, d, e, f, h);
      for(f = e = 0;;) {
        if(32 > e) {
          0 !== (this.D >>> e & 1) && (l[e] = null != this.f[f] ? be.sa(c + 5, F(this.f[f]), this.f[f], this.f[f + 1], h) : this.f[f + 1], f += 2), e += 1
        }else {
          break
        }
      }
      return new ce(null, n + 1, l)
    }
    c = Array(2 * (n + 1));
    ec(this.f, 0, c, 0, 2 * l);
    c[2 * l] = e;
    c[2 * l + 1] = f;
    ec(this.f, 2 * l, c, 2 * (l + 1), 2 * (n - l));
    h.wa = !0;
    return new $d(null, this.D | k, c)
  }
  n = this.f[2 * l];
  k = this.f[2 * l + 1];
  return null == n ? (n = k.sa(c + 5, d, e, f, h), n === k ? this : new $d(null, this.D, Xd.d(this.f, 2 * l + 1, n))) : Wd(e, n) ? f === k ? this : new $d(null, this.D, Xd.d(this.f, 2 * l + 1, f)) : z ? (h.wa = !0, new $d(null, this.D, Xd.C(this.f, 2 * l, null, 2 * l + 1, de.qa ? de.qa(c + 5, n, k, d, e, f) : de.call(null, c + 5, n, k, d, e, f)))) : null
};
q.Ga = function(c, d, e, f) {
  var h = 1 << (d >>> c & 31);
  if(0 === (this.D & h)) {
    return f
  }
  var k = qc(this.D & h - 1), h = this.f[2 * k], k = this.f[2 * k + 1];
  return null == h ? k.Ga(c + 5, d, e, f) : Wd(e, h) ? k : z ? f : null
};
var be = new $d(null, 0, []);
function fe(c, d, e) {
  var f = c.f;
  c = 2 * (c.l - 1);
  for(var h = Array(c), k = 0, l = 1, n = 0;;) {
    if(k < c) {
      k !== e && null != f[k] && (h[l] = f[k], l += 2, n |= 1 << k), k += 1
    }else {
      return new $d(d, n, h)
    }
  }
}
function ce(c, d, e) {
  this.B = c;
  this.l = d;
  this.f = e
}
q = ce.prototype;
q.ta = function(c, d, e, f, h, k) {
  var l = e >>> d & 31, n = this.f[l];
  if(null == n) {
    return c = Zd.p(this, c, l, be.ta(c, d + 5, e, f, h, k)), c.l += 1, c
  }
  d = n.ta(c, d + 5, e, f, h, k);
  return d === n ? this : Zd.p(this, c, l, d)
};
q.Ya = function() {
  return ge.e ? ge.e(this.f) : ge.call(null, this.f)
};
q.$a = function(c, d, e, f, h) {
  var k = e >>> d & 31, l = this.f[k];
  if(null == l) {
    return this
  }
  d = l.$a(c, d + 5, e, f, h);
  if(d === l) {
    return this
  }
  if(null == d) {
    if(8 >= this.l) {
      return fe(this, c, k)
    }
    c = Zd.p(this, c, k, d);
    c.l -= 1;
    return c
  }
  return z ? Zd.p(this, c, k, d) : null
};
q.Ea = function(c) {
  return c === this.B ? this : new ce(c, this.l, this.f.slice())
};
q.Za = function(c, d, e) {
  var f = d >>> c & 31, h = this.f[f];
  return null != h ? (c = h.Za(c + 5, d, e), c === h ? this : null == c ? 8 >= this.l ? fe(this, null, f) : new ce(null, this.l - 1, Xd.d(this.f, f, c)) : z ? new ce(null, this.l, Xd.d(this.f, f, c)) : null) : this
};
q.sa = function(c, d, e, f, h) {
  var k = d >>> c & 31, l = this.f[k];
  if(null == l) {
    return new ce(null, this.l + 1, Xd.d(this.f, k, be.sa(c + 5, d, e, f, h)))
  }
  c = l.sa(c + 5, d, e, f, h);
  return c === l ? this : new ce(null, this.l, Xd.d(this.f, k, c))
};
q.Ga = function(c, d, e, f) {
  var h = this.f[d >>> c & 31];
  return null != h ? h.Ga(c + 5, d, e, f) : f
};
function he(c, d, e) {
  d *= 2;
  for(var f = 0;;) {
    if(f < d) {
      if(Wd(e, c[f])) {
        return f
      }
      f += 2
    }else {
      return-1
    }
  }
}
function ie(c, d, e, f) {
  this.B = c;
  this.za = d;
  this.l = e;
  this.f = f
}
q = ie.prototype;
q.ta = function(c, d, e, f, h, k) {
  if(e === this.za) {
    d = he(this.f, this.l, f);
    if(-1 === d) {
      if(this.f.length > 2 * this.l) {
        return c = Zd.qa(this, c, 2 * this.l, f, 2 * this.l + 1, h), k.wa = !0, c.l += 1, c
      }
      e = this.f.length;
      d = Array(e + 2);
      ec(this.f, 0, d, 0, e);
      d[e] = f;
      d[e + 1] = h;
      k.wa = !0;
      k = this.l + 1;
      c === this.B ? (this.f = d, this.l = k, c = this) : c = new ie(this.B, this.za, k, d);
      return c
    }
    return this.f[d + 1] === h ? this : Zd.p(this, c, d + 1, h)
  }
  return(new $d(c, 1 << (this.za >>> d & 31), [null, this, null, null])).ta(c, d, e, f, h, k)
};
q.Ya = function() {
  return ee.e ? ee.e(this.f) : ee.call(null, this.f)
};
q.$a = function(c, d, e, f, h) {
  d = he(this.f, this.l, f);
  if(-1 === d) {
    return this
  }
  h[0] = !0;
  if(1 === this.l) {
    return null
  }
  c = this.Ea(c);
  h = c.f;
  h[d] = h[2 * this.l - 2];
  h[d + 1] = h[2 * this.l - 1];
  h[2 * this.l - 1] = null;
  h[2 * this.l - 2] = null;
  c.l -= 1;
  return c
};
q.Ea = function(c) {
  if(c === this.B) {
    return this
  }
  var d = Array(2 * (this.l + 1));
  ec(this.f, 0, d, 0, 2 * this.l);
  return new ie(c, this.za, this.l, d)
};
q.Za = function(c, d, e) {
  c = he(this.f, this.l, e);
  return-1 === c ? this : 1 === this.l ? null : z ? new ie(null, this.za, this.l - 1, Yd(this.f, mc((c - c % 2) / 2))) : null
};
q.sa = function(c, d, e, f, h) {
  return d === this.za ? (c = he(this.f, this.l, e), -1 === c ? (c = 2 * this.l, d = Array(c + 2), ec(this.f, 0, d, 0, c), d[c] = e, d[c + 1] = f, h.wa = !0, new ie(null, this.za, this.l + 1, d)) : Ib.c(this.f[c], f) ? this : new ie(null, this.za, this.l, Xd.d(this.f, c + 1, f))) : (new $d(null, 1 << (this.za >>> c & 31), [null, this])).sa(c, d, e, f, h)
};
q.Ga = function(c, d, e, f) {
  c = he(this.f, this.l, e);
  return 0 > c ? f : Wd(e, this.f[c]) ? this.f[c + 1] : z ? f : null
};
var de = function() {
  function c(c, d, e, l, n, p, t) {
    var s = F(e);
    if(s === n) {
      return new ie(null, s, 2, [e, l, p, t])
    }
    var v = new Vd;
    return be.ta(c, d, s, e, l, v).ta(c, d, n, p, t, v)
  }
  function d(c, d, e, l, n, p) {
    var t = F(d);
    if(t === l) {
      return new ie(null, t, 2, [d, e, n, p])
    }
    var s = new Vd;
    return be.sa(c, t, d, e, s).sa(c, l, n, p, s)
  }
  var e = null, e = function(e, h, k, l, n, p, t) {
    switch(arguments.length) {
      case 6:
        return d.call(this, e, h, k, l, n, p);
      case 7:
        return c.call(this, e, h, k, l, n, p, t)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.qa = d;
  e.Sa = c;
  return e
}();
function je(c, d, e, f, h) {
  this.meta = c;
  this.ua = d;
  this.s = e;
  this.J = f;
  this.o = h;
  this.A = 0;
  this.m = 32374860
}
q = je.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.X = function() {
  return null == this.J ? Y([this.ua[this.s], this.ua[this.s + 1]], !0) : H(this.J)
};
q.ja = function() {
  return null == this.J ? ee.d ? ee.d(this.ua, this.s + 2, null) : ee.call(null, this.ua, this.s + 2, null) : ee.d ? ee.d(this.ua, this.s, L(this.J)) : ee.call(null, this.ua, this.s, L(this.J))
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new je(d, this.ua, this.s, this.J, this.o)
};
q.L = m("meta");
q.V = function() {
  return Wb(J, this.meta)
};
var ee = function() {
  function c(c, d, e) {
    if(null == e) {
      for(e = c.length;;) {
        if(d < e) {
          if(null != c[d]) {
            return new je(null, c, d, null, null)
          }
          var l = c[d + 1];
          if(w(l) && (l = l.Ya(), w(l))) {
            return new je(null, c, d + 2, l, null)
          }
          d += 2
        }else {
          return null
        }
      }
    }else {
      return new je(null, c, d, e, null)
    }
  }
  function d(c) {
    return e.d(c, 0, null)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.d = c;
  return e
}();
function ke(c, d, e, f, h) {
  this.meta = c;
  this.ua = d;
  this.s = e;
  this.J = f;
  this.o = h;
  this.A = 0;
  this.m = 32374860
}
q = ke.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.X = function() {
  return H(this.J)
};
q.ja = function() {
  return ge.p ? ge.p(null, this.ua, this.s, L(this.J)) : ge.call(null, null, this.ua, this.s, L(this.J))
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new ke(d, this.ua, this.s, this.J, this.o)
};
q.L = m("meta");
q.V = function() {
  return Wb(J, this.meta)
};
var ge = function() {
  function c(c, d, e, l) {
    if(null == l) {
      for(l = d.length;;) {
        if(e < l) {
          var n = d[e];
          if(w(n) && (n = n.Ya(), w(n))) {
            return new ke(c, d, e + 1, n, null)
          }
          e += 1
        }else {
          return null
        }
      }
    }else {
      return new ke(c, d, e, l, null)
    }
  }
  function d(c) {
    return e.p(null, c, 0, null)
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 4:
        return c.call(this, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.p = c;
  return e
}();
function le(c, d, e, f, h, k) {
  this.meta = c;
  this.l = d;
  this.root = e;
  this.ba = f;
  this.la = h;
  this.o = k;
  this.A = 4;
  this.m = 16123663
}
q = le.prototype;
q.Va = function() {
  return new me({}, this.root, this.l, this.ba, this.la)
};
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return null == d ? this.ba ? this.la : e : null == this.root ? e : z ? this.root.Ga(0, F(d), d, e) : null
};
q.ya = function(c, d, e) {
  if(null == d) {
    return this.ba && e === this.la ? this : new le(this.meta, this.ba ? this.l : this.l + 1, this.root, !0, e, null)
  }
  c = new Vd;
  d = (null == this.root ? be : this.root).sa(0, F(d), d, e, c);
  return d === this.root ? this : new le(this.meta, c.wa ? this.l + 1 : this.l, d, this.ba, this.la, null)
};
q.lb = function(c, d) {
  return null == d ? this.ba : null == this.root ? !1 : z ? this.root.Ga(0, F(d), d, fc) !== fc : null
};
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.P(null, e);
      case 3:
        return this.Q(null, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return this.P(null, c)
};
q.c = function(c, d) {
  return this.Q(null, c, d)
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.toString = function() {
  return zb(this)
};
q.M = function() {
  if(0 < this.l) {
    var c = null != this.root ? this.root.Ya() : null;
    return this.ba ? N(Y([null, this.la], !0), c) : c
  }
  return null
};
q.R = m("l");
q.F = function(c, d) {
  return Md(this, d)
};
q.N = function(c, d) {
  return new le(d, this.l, this.root, this.ba, this.la, this.o)
};
q.L = m("meta");
q.V = function() {
  return ab(Sd, this.meta)
};
q.Ja = function(c, d) {
  if(null == d) {
    return this.ba ? new le(this.meta, this.l - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(z) {
    var e = this.root.Za(0, F(d), d);
    return e === this.root ? this : new le(this.meta, this.l - 1, e, this.ba, this.la, null)
  }
  return null
};
var Sd = new le(null, 0, null, !1, null, 0);
function Sb(c, d) {
  for(var e = c.length, f = 0, h = ob(Sd);;) {
    if(f < e) {
      var k = f + 1, h = h.Xa(null, c[f], d[f]), f = k
    }else {
      return qb(h)
    }
  }
}
function me(c, d, e, f, h) {
  this.B = c;
  this.root = d;
  this.count = e;
  this.ba = f;
  this.la = h;
  this.A = 56;
  this.m = 258
}
q = me.prototype;
q.Eb = function(c, d) {
  if(this.B) {
    if(null == d) {
      this.ba && (this.ba = !1, this.la = null, this.count -= 1)
    }else {
      if(null != this.root) {
        var e = new Vd, f = this.root.$a(this.B, 0, F(d), d, e);
        f !== this.root && (this.root = f);
        w(e[0]) && (this.count -= 1)
      }
    }
  }else {
    throw Error("dissoc! after persistent!");
  }
  return this
};
q.Xa = function(c, d, e) {
  return ne(this, d, e)
};
q.Ka = function(c, d) {
  var e;
  a: {
    if(this.B) {
      if(d ? d.m & 2048 || d.dc || (d.m ? 0 : x(Qa, d)) : x(Qa, d)) {
        e = ne(this, tc.e ? tc.e(d) : tc.call(null, d), uc.e ? uc.e(d) : uc.call(null, d));
        break a
      }
      e = G(d);
      for(var f = this;;) {
        var h = H(e);
        if(w(h)) {
          e = L(e), f = ne(f, tc.e ? tc.e(h) : tc.call(null, h), uc.e ? uc.e(h) : uc.call(null, h))
        }else {
          e = f;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    e = void 0
  }
  return e
};
q.La = function() {
  var c;
  if(this.B) {
    this.B = null, c = new le(null, this.count, this.root, this.ba, this.la, null)
  }else {
    throw Error("persistent! called twice");
  }
  return c
};
q.P = function(c, d) {
  return null == d ? this.ba ? this.la : null : null == this.root ? null : this.root.Ga(0, F(d), d)
};
q.Q = function(c, d, e) {
  return null == d ? this.ba ? this.la : e : null == this.root ? e : this.root.Ga(0, F(d), d, e)
};
q.R = function() {
  if(this.B) {
    return this.count
  }
  throw Error("count after persistent!");
};
function ne(c, d, e) {
  if(c.B) {
    if(null == d) {
      c.la !== e && (c.la = e), c.ba || (c.count += 1, c.ba = !0)
    }else {
      var f = new Vd;
      d = (null == c.root ? be : c.root).ta(c.B, 0, F(d), d, e, f);
      d !== c.root && (c.root = d);
      f.wa && (c.count += 1)
    }
    return c
  }
  throw Error("assoc! after persistent!");
}
var oe = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    c = G(c);
    for(var d = ob(Sd);;) {
      if(c) {
        var h = L(L(c)), d = Oc(d, H(c), H(L(c)));
        c = h
      }else {
        return qb(d)
      }
    }
  }
  c.n = 0;
  c.k = function(c) {
    c = G(c);
    return d(c)
  };
  c.i = d;
  return c
}();
function pe(c, d) {
  this.ha = c;
  this.ia = d;
  this.A = 0;
  this.m = 32374988
}
q = pe.prototype;
q.H = function() {
  return Nb(this)
};
q.ea = function() {
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : L(this.ha);
  return null == c ? null : new pe(c, this.ia)
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.X = function() {
  return this.ha.X(null).Cb()
};
q.ja = function() {
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : L(this.ha);
  return null != c ? new pe(c, this.ia) : J
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new pe(this.ha, d)
};
q.L = m("ia");
q.V = function() {
  return Wb(J, this.ia)
};
function qe(c) {
  return(c = G(c)) ? new pe(c, null) : null
}
function tc(c) {
  return Ra(c)
}
function re(c, d) {
  this.ha = c;
  this.ia = d;
  this.A = 0;
  this.m = 32374988
}
q = re.prototype;
q.H = function() {
  return Nb(this)
};
q.ea = function() {
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : L(this.ha);
  return null == c ? null : new re(c, this.ia)
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return lc.c(d, this)
};
q.ga = function(c, d, e) {
  return lc.d(d, e, this)
};
q.M = function() {
  return this
};
q.X = function() {
  return this.ha.X(null).Db()
};
q.ja = function() {
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : L(this.ha);
  return null != c ? new re(c, this.ia) : J
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new re(this.ha, d)
};
q.L = m("ia");
q.V = function() {
  return Wb(J, this.ia)
};
function uc(c) {
  return Sa(c)
}
var se = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    return w(Sc(c)) ? U.c(function(c, d) {
      return Qb.c(w(c) ? c : Td, d)
    }, c) : null
  }
  c.n = 0;
  c.k = function(c) {
    c = G(c);
    return d(c)
  };
  c.i = d;
  return c
}();
function te(c, d, e) {
  this.meta = c;
  this.Na = d;
  this.o = e;
  this.A = 4;
  this.m = 15077647
}
q = te.prototype;
q.Va = function() {
  return new ue(ob(this.Na))
};
q.H = function() {
  var c = this.o;
  if(null != c) {
    return c
  }
  a: {
    for(var c = 0, d = G(this);;) {
      if(d) {
        var e = H(d), c = (c + F(e)) % 4503599627370496, d = L(d)
      }else {
        break a
      }
    }
    c = void 0
  }
  return this.o = c
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return w(La(this.Na, d)) ? d : e
};
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return this.P(null, e);
      case 3:
        return this.Q(null, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return this.P(null, c)
};
q.c = function(c, d) {
  return this.Q(null, c, d)
};
q.K = function(c, d) {
  return new te(this.meta, S.d(this.Na, d, null), null)
};
q.toString = function() {
  return zb(this)
};
q.M = function() {
  return qe(this.Na)
};
q.Pb = function(c, d) {
  return new te(this.meta, Oa(this.Na, d), null)
};
q.R = function() {
  return Aa(this.Na)
};
q.F = function(c, d) {
  var e = this;
  return(null == d ? !1 : d ? d.m & 4096 || d.Ac ? !0 : d.m ? !1 : x(Ta, d) : x(Ta, d)) && O(e) === O(d) && Rc(function(c) {
    return ic(e, c)
  }, d)
};
q.N = function(c, d) {
  return new te(d, this.Na, this.o)
};
q.L = m("meta");
q.V = function() {
  return Wb(ve, this.meta)
};
var ve = new te(null, Td, 0);
function we(c) {
  var d = c.length;
  if(d / 2 <= Rd) {
    return new te(null, D.c ? D.c(c, !0) : D.call(null, c, !0), null)
  }
  for(var e = 0, f = ob(ve);;) {
    if(e < d) {
      var h = e + 2, f = pb(f, c[e]), e = h
    }else {
      return qb(f)
    }
  }
}
function ue(c) {
  this.Ca = c;
  this.m = 259;
  this.A = 136
}
q = ue.prototype;
q.call = function() {
  var c = null;
  return c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return Ka.d(this.Ca, e, fc) === fc ? null : e;
      case 3:
        return Ka.d(this.Ca, e, fc) === fc ? f : e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(c, d) {
  return this.call.apply(this, [this].concat(d.slice()))
};
q.e = function(c) {
  return Ka.d(this.Ca, c, fc) === fc ? null : c
};
q.c = function(c, d) {
  return Ka.d(this.Ca, c, fc) === fc ? d : c
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return Ka.d(this.Ca, d, fc) === fc ? e : d
};
q.R = function() {
  return O(this.Ca)
};
q.Ka = function(c, d) {
  this.Ca = rb(this.Ca, d, null);
  return this
};
q.La = function() {
  return new te(null, qb(this.Ca), null)
};
function xe(c) {
  c = G(c);
  if(null == c) {
    return ve
  }
  if(c instanceof Hb) {
    c = c.f;
    a: {
      for(var d = 0, e = ob(ve);;) {
        if(d < c.length) {
          var f = d + 1, e = e.Ka(null, c[d]), d = f
        }else {
          c = e;
          break a
        }
      }
      c = void 0
    }
    return c.La(null)
  }
  if(z) {
    for(f = ob(ve);;) {
      if(null != c) {
        d = c.ea(null), f = f.Ka(null, c.X(null)), c = d
      }else {
        return f.La(null)
      }
    }
  }else {
    return null
  }
}
function ye(c) {
  if(c && (c.A & 4096 || c.xc)) {
    return c.name
  }
  if("string" === typeof c) {
    return c
  }
  throw Error([B("Doesn't support name: "), B(c)].join(""));
}
var ze = function() {
  function c(c, d, e) {
    return(c.e ? c.e(d) : c.call(null, d)) > (c.e ? c.e(e) : c.call(null, e)) ? d : e
  }
  var d = null, e = function() {
    function c(d, f, n, p) {
      var t = null;
      3 < arguments.length && (t = M(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, n, t)
    }
    function e(c, f, h, p) {
      return U.d(function(e, f) {
        return d.d(c, e, f)
      }, d.d(c, f, h), p)
    }
    c.n = 3;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var p = H(c);
      c = I(c);
      return e(d, f, p, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return h;
      case 3:
        return c.call(this, d, h, k);
      default:
        return e.i(d, h, k, M(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 3;
  d.k = e.k;
  d.c = function(c, d) {
    return d
  };
  d.d = c;
  d.i = e.i;
  return d
}(), Be = function Ae(d, e) {
  return new zc(null, function() {
    var f = G(e);
    return f ? w(d.e ? d.e(H(f)) : d.call(null, H(f))) ? N(H(f), Ae(d, I(f))) : null : null
  }, null, null)
};
function Ce(c, d, e, f, h) {
  this.meta = c;
  this.start = d;
  this.end = e;
  this.step = f;
  this.o = h;
  this.A = 0;
  this.m = 32375006
}
q = Ce.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Ce(this.meta, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Ce(this.meta, this.start + this.step, this.end, this.step, null) : null
};
q.K = function(c, d) {
  return N(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return Jb.c(this, d)
};
q.ga = function(c, d, e) {
  return Jb.d(this, d, e)
};
q.M = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
q.R = function() {
  return va(hb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.X = m("start");
q.ja = function() {
  return null != hb(this) ? new Ce(this.meta, this.start + this.step, this.end, this.step, null) : J
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return new Ce(d, this.start, this.end, this.step, this.o)
};
q.L = m("meta");
q.I = function(c, d) {
  if(d < Aa(this)) {
    return this.start + d * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
q.oa = function(c, d, e) {
  return d < Aa(this) ? this.start + d * this.step : this.start > this.end && 0 === this.step ? this.start : e
};
q.V = function() {
  return Wb(J, this.meta)
};
var De = function() {
  function c(c, d, e) {
    return new Ce(null, c, d, e, null)
  }
  function d(c, d) {
    return h.d(c, d, 1)
  }
  function e(c) {
    return h.d(0, c, 1)
  }
  function f() {
    return h.d(0, Number.MAX_VALUE, 1)
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
        return c.call(this, h, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.j = f;
  h.e = e;
  h.c = d;
  h.d = c;
  return h
}(), Ee = function() {
  function c(c, d, e) {
    return function() {
      var f = null, h = function() {
        function f(c, d, e, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, c, d, e, l)
        }
        function h(f, p, s, t) {
          return Y.c ? Y.c([T.C(c, f, p, s, t), T.C(d, f, p, s, t), T.C(e, f, p, s, t)], !0) : Y.call(null, [T.C(c, f, p, s, t), T.C(d, f, p, s, t), T.C(e, f, p, s, t)], !0)
        }
        f.n = 3;
        f.k = function(c) {
          var d = H(c);
          c = L(c);
          var e = H(c);
          c = L(c);
          var f = H(c);
          c = I(c);
          return h(d, e, f, c)
        };
        f.i = h;
        return f
      }(), f = function(f, p, y, E) {
        switch(arguments.length) {
          case 0:
            return Y.c ? Y.c([c.j ? c.j() : c.call(null), d.j ? d.j() : d.call(null), e.j ? e.j() : e.call(null)], !0) : Y.call(null, [c.j ? c.j() : c.call(null), d.j ? d.j() : d.call(null), e.j ? e.j() : e.call(null)], !0);
          case 1:
            return Y.c ? Y.c([c.e ? c.e(f) : c.call(null, f), d.e ? d.e(f) : d.call(null, f), e.e ? e.e(f) : e.call(null, f)], !0) : Y.call(null, [c.e ? c.e(f) : c.call(null, f), d.e ? d.e(f) : d.call(null, f), e.e ? e.e(f) : e.call(null, f)], !0);
          case 2:
            return Y.c ? Y.c([c.c ? c.c(f, p) : c.call(null, f, p), d.c ? d.c(f, p) : d.call(null, f, p), e.c ? e.c(f, p) : e.call(null, f, p)], !0) : Y.call(null, [c.c ? c.c(f, p) : c.call(null, f, p), d.c ? d.c(f, p) : d.call(null, f, p), e.c ? e.c(f, p) : e.call(null, f, p)], !0);
          case 3:
            return Y.c ? Y.c([c.d ? c.d(f, p, y) : c.call(null, f, p, y), d.d ? d.d(f, p, y) : d.call(null, f, p, y), e.d ? e.d(f, p, y) : e.call(null, f, p, y)], !0) : Y.call(null, [c.d ? c.d(f, p, y) : c.call(null, f, p, y), d.d ? d.d(f, p, y) : d.call(null, f, p, y), e.d ? e.d(f, p, y) : e.call(null, f, p, y)], !0);
          default:
            return h.i(f, p, y, M(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.n = 3;
      f.k = h.k;
      return f
    }()
  }
  function d(c, d) {
    return function() {
      var e = null, f = function() {
        function e(c, d, h, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return f.call(this, c, d, h, l)
        }
        function f(e, h, n, p) {
          return Y.c ? Y.c([T.C(c, e, h, n, p), T.C(d, e, h, n, p)], !0) : Y.call(null, [T.C(c, e, h, n, p), T.C(d, e, h, n, p)], !0)
        }
        e.n = 3;
        e.k = function(c) {
          var d = H(c);
          c = L(c);
          var e = H(c);
          c = L(c);
          var h = H(c);
          c = I(c);
          return f(d, e, h, c)
        };
        e.i = f;
        return e
      }(), e = function(e, h, n, y) {
        switch(arguments.length) {
          case 0:
            return Y.c ? Y.c([c.j ? c.j() : c.call(null), d.j ? d.j() : d.call(null)], !0) : Y.call(null, [c.j ? c.j() : c.call(null), d.j ? d.j() : d.call(null)], !0);
          case 1:
            return Y.c ? Y.c([c.e ? c.e(e) : c.call(null, e), d.e ? d.e(e) : d.call(null, e)], !0) : Y.call(null, [c.e ? c.e(e) : c.call(null, e), d.e ? d.e(e) : d.call(null, e)], !0);
          case 2:
            return Y.c ? Y.c([c.c ? c.c(e, h) : c.call(null, e, h), d.c ? d.c(e, h) : d.call(null, e, h)], !0) : Y.call(null, [c.c ? c.c(e, h) : c.call(null, e, h), d.c ? d.c(e, h) : d.call(null, e, h)], !0);
          case 3:
            return Y.c ? Y.c([c.d ? c.d(e, h, n) : c.call(null, e, h, n), d.d ? d.d(e, h, n) : d.call(null, e, h, n)], !0) : Y.call(null, [c.d ? c.d(e, h, n) : c.call(null, e, h, n), d.d ? d.d(e, h, n) : d.call(null, e, h, n)], !0);
          default:
            return f.i(e, h, n, M(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      e.n = 3;
      e.k = f.k;
      return e
    }()
  }
  function e(c) {
    return function() {
      var d = null, e = function() {
        function d(c, f, h, k) {
          var l = null;
          3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, c, f, h, l)
        }
        function e(d, f, h, l) {
          return Y.c ? Y.c([T.C(c, d, f, h, l)], !0) : Y.call(null, [T.C(c, d, f, h, l)], !0)
        }
        d.n = 3;
        d.k = function(c) {
          var d = H(c);
          c = L(c);
          var f = H(c);
          c = L(c);
          var h = H(c);
          c = I(c);
          return e(d, f, h, c)
        };
        d.i = e;
        return d
      }(), d = function(d, f, h, l) {
        switch(arguments.length) {
          case 0:
            return Y.c ? Y.c([c.j ? c.j() : c.call(null)], !0) : Y.call(null, [c.j ? c.j() : c.call(null)], !0);
          case 1:
            return Y.c ? Y.c([c.e ? c.e(d) : c.call(null, d)], !0) : Y.call(null, [c.e ? c.e(d) : c.call(null, d)], !0);
          case 2:
            return Y.c ? Y.c([c.c ? c.c(d, f) : c.call(null, d, f)], !0) : Y.call(null, [c.c ? c.c(d, f) : c.call(null, d, f)], !0);
          case 3:
            return Y.c ? Y.c([c.d ? c.d(d, f, h) : c.call(null, d, f, h)], !0) : Y.call(null, [c.d ? c.d(d, f, h) : c.call(null, d, f, h)], !0);
          default:
            return e.i(d, f, h, M(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.n = 3;
      d.k = e.k;
      return d
    }()
  }
  var f = null, h = function() {
    function c(e, f, h, k) {
      var v = null;
      3 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, v)
    }
    function d(c, e, f, h) {
      var k = Lc.p(c, e, f, h);
      return function() {
        function c(d, e, f) {
          return U.d(function(c, h) {
            return Qb.c(c, h.d ? h.d(d, e, f) : h.call(null, d, e, f))
          }, Bd, k)
        }
        function d(c, e) {
          return U.d(function(d, f) {
            return Qb.c(d, f.c ? f.c(c, e) : f.call(null, c, e))
          }, Bd, k)
        }
        function e(c) {
          return U.d(function(d, e) {
            return Qb.c(d, e.e ? e.e(c) : e.call(null, c))
          }, Bd, k)
        }
        function f() {
          return U.d(function(c, d) {
            return Qb.c(c, d.j ? d.j() : d.call(null))
          }, Bd, k)
        }
        var h = null, l = function() {
          function c(e, f, h, k) {
            var l = null;
            3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
            return d.call(this, e, f, h, l)
          }
          function d(c, e, f, h) {
            return U.d(function(d, k) {
              return Qb.c(d, T.C(k, c, e, f, h))
            }, Bd, k)
          }
          c.n = 3;
          c.k = function(c) {
            var e = H(c);
            c = L(c);
            var f = H(c);
            c = L(c);
            var h = H(c);
            c = I(c);
            return d(e, f, h, c)
          };
          c.i = d;
          return c
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
              return l.i(h, k, n, M(arguments, 3))
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        h.n = 3;
        h.k = l.k;
        return h
      }()
    }
    c.n = 3;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = I(c);
      return d(e, f, h, c)
    };
    c.i = d;
    return c
  }(), f = function(f, l, n, p) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, l);
      case 3:
        return c.call(this, f, l, n);
      default:
        return h.i(f, l, n, M(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.n = 3;
  f.k = h.k;
  f.e = e;
  f.c = d;
  f.d = c;
  f.i = h.i;
  return f
}(), Fe = function() {
  function c(c, d) {
    for(;;) {
      if(G(d) && 0 < c) {
        var e = c - 1, l = L(d);
        c = e;
        d = l
      }else {
        return null
      }
    }
  }
  function d(c) {
    for(;;) {
      if(G(c)) {
        c = L(c)
      }else {
        return null
      }
    }
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}();
function Ge(c, d, e, f, h, k, l) {
  jb(c, e);
  G(l) && (d.d ? d.d(H(l), c, k) : d.call(null, H(l), c, k));
  e = G(L(l));
  l = null;
  for(var n = 0, p = 0;;) {
    if(p < n) {
      var t = l.I(null, p);
      jb(c, f);
      d.d ? d.d(t, c, k) : d.call(null, t, c, k);
      p += 1
    }else {
      if(e = G(e)) {
        l = e, dc(l) ? (e = vb(l), p = wb(l), l = e, n = O(e), e = p) : (e = H(l), jb(c, f), d.d ? d.d(e, c, k) : d.call(null, e, c, k), e = L(l), l = null, n = 0), p = 0
      }else {
        break
      }
    }
  }
  return jb(c, h)
}
var He = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h)
  }
  function d(c, d) {
    for(var h = G(d), k = null, l = 0, n = 0;;) {
      if(n < l) {
        var p = k.I(null, n);
        jb(c, p);
        n += 1
      }else {
        if(h = G(h)) {
          k = h, dc(k) ? (h = vb(k), l = wb(k), k = h, p = O(h), h = l, l = p) : (p = H(k), jb(c, p), h = L(k), k = null, l = 0), n = 0
        }else {
          return null
        }
      }
    }
  }
  c.n = 1;
  c.k = function(c) {
    var f = H(c);
    c = I(c);
    return d(f, c)
  };
  c.i = d;
  return c
}(), Ie = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Je(c) {
  return[B('"'), B(c.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(c) {
    return Ie[c]
  })), B('"')].join("")
}
var Le = function Ke(d, e, f) {
  if(null == d) {
    return jb(e, "nil")
  }
  if(void 0 === d) {
    return jb(e, "#\x3cundefined\x3e")
  }
  if(z) {
    w(function() {
      var e = Q.c(f, Cb);
      return w(e) ? (e = d ? d.m & 131072 || d.ec ? !0 : d.m ? !1 : x(Ya, d) : x(Ya, d)) ? Xb(d) : e : e
    }()) && (jb(e, "^"), Ke(Xb(d), e, f), jb(e, " "));
    if(null == d) {
      return jb(e, "nil")
    }
    if(d.Ub) {
      return d.hc(e)
    }
    if(d && (d.m & 2147483648 || d.W)) {
      return d.G(null, e, f)
    }
    if(wa(d) === Boolean || "number" === typeof d) {
      return jb(e, "" + B(d))
    }
    if(d instanceof Array) {
      return Ge(e, Ke, "#\x3cArray [", ", ", "]\x3e", f, d)
    }
    if(da(d)) {
      return w(Bb.e(f)) ? jb(e, Je(d)) : jb(e, d)
    }
    if(Ub(d)) {
      return He.i(e, M(["#\x3c", "" + B(d), "\x3e"], 0))
    }
    if(d instanceof Date) {
      var h = function(d, e) {
        for(var f = "" + B(d);;) {
          if(O(f) < e) {
            f = [B("0"), B(f)].join("")
          }else {
            return f
          }
        }
      };
      return He.i(e, M(['#inst "', "" + B(d.getUTCFullYear()), "-", h(d.getUTCMonth() + 1, 2), "-", h(d.getUTCDate(), 2), "T", h(d.getUTCHours(), 2), ":", h(d.getUTCMinutes(), 2), ":", h(d.getUTCSeconds(), 2), ".", h(d.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return w(d instanceof RegExp) ? He.i(e, M(['#"', d.source, '"'], 0)) : (d ? d.m & 2147483648 || d.W || (d.m ? 0 : x(lb, d)) : x(lb, d)) ? mb(d, e, f) : z ? He.i(e, M(["#\x3c", "" + B(d), "\x3e"], 0)) : null
  }
  return null
}, Me = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    var d = D([Ab, !0, Bb, !0, Cb, !1, Db, !1], !0);
    if(null == c || va(G(c))) {
      d = ""
    }else {
      var h = B, k = new ta, l = new yb(k);
      a: {
        Le(H(c), l, d);
        c = G(L(c));
        for(var n = null, p = 0, t = 0;;) {
          if(t < p) {
            var s = n.I(null, t);
            jb(l, " ");
            Le(s, l, d);
            t += 1
          }else {
            if(c = G(c)) {
              n = c, dc(n) ? (c = vb(n), p = wb(n), n = c, s = O(c), c = p, p = s) : (s = H(n), jb(l, " "), Le(s, l, d), c = L(n), n = null, p = 0), t = 0
            }else {
              break a
            }
          }
        }
      }
      kb(l);
      d = "" + h(k)
    }
    return d
  }
  c.n = 0;
  c.k = function(c) {
    c = G(c);
    return d(c)
  };
  c.i = d;
  return c
}();
pe.prototype.W = !0;
pe.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
Hb.prototype.W = !0;
Hb.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
Gd.prototype.W = !0;
Gd.prototype.G = function(c, d, e) {
  return Ge(d, Le, "[", " ", "]", e, this)
};
Ec.prototype.W = !0;
Ec.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
Pd.prototype.W = !0;
Pd.prototype.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "{", ", ", "}", e, this)
};
zc.prototype.W = !0;
zc.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
je.prototype.W = !0;
je.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
Dd.prototype.W = !0;
Dd.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
le.prototype.W = !0;
le.prototype.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "{", ", ", "}", e, this)
};
te.prototype.W = !0;
te.prototype.G = function(c, d, e) {
  return Ge(d, Le, "#{", " ", "}", e, this)
};
wd.prototype.W = !0;
wd.prototype.G = function(c, d, e) {
  return Ge(d, Le, "[", " ", "]", e, this)
};
vc.prototype.W = !0;
vc.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
Od.prototype.W = !0;
Od.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
wc.prototype.W = !0;
wc.prototype.G = function(c, d) {
  return jb(d, "()")
};
yc.prototype.W = !0;
yc.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
Ce.prototype.W = !0;
Ce.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
ke.prototype.W = !0;
ke.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
re.prototype.W = !0;
re.prototype.G = function(c, d, e) {
  return Ge(d, Le, "(", " ", ")", e, this)
};
wd.prototype.Lb = !0;
wd.prototype.Mb = function(c, d) {
  return kc.c(this, d)
};
Gd.prototype.Lb = !0;
Gd.prototype.Mb = function(c, d) {
  return kc.c(this, d)
};
function Ne(c, d, e, f) {
  this.state = c;
  this.meta = d;
  this.pc = e;
  this.qc = f;
  this.m = 2153938944;
  this.A = 2
}
q = Ne.prototype;
q.H = function() {
  return ea(this)
};
q.Rb = function(c, d, e) {
  c = G(this.qc);
  for(var f = null, h = 0, k = 0;;) {
    if(k < h) {
      var l = f.I(null, k), n = P.d(l, 0, null), l = P.d(l, 1, null);
      l.p ? l.p(n, this, d, e) : l.call(null, n, this, d, e);
      k += 1
    }else {
      if(c = G(c)) {
        dc(c) ? (f = vb(c), c = wb(c), n = f, h = O(f), f = n) : (f = H(c), n = P.d(f, 0, null), l = P.d(f, 1, null), l.p ? l.p(n, this, d, e) : l.call(null, n, this, d, e), c = L(c), f = null, h = 0), k = 0
      }else {
        return null
      }
    }
  }
};
q.G = function(c, d, e) {
  jb(d, "#\x3cAtom: ");
  Le(this.state, d, e);
  return jb(d, "\x3e")
};
q.L = m("meta");
q.cc = m("state");
q.F = function(c, d) {
  return this === d
};
var Pe = function() {
  function c(c) {
    return new Ne(c, null, null, null)
  }
  var d = null, e = function() {
    function c(e, f) {
      var n = null;
      1 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, e, n)
    }
    function d(c, e) {
      var f = gc(e) ? T.c(oe, e) : e, h = Q.c(f, Oe), f = Q.c(f, Cb);
      return new Ne(c, f, h, null)
    }
    c.n = 1;
    c.k = function(c) {
      var e = H(c);
      c = I(c);
      return d(e, c)
    };
    c.i = d;
    return c
  }(), d = function(d, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      default:
        return e.i(d, M(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 1;
  d.k = e.k;
  d.e = c;
  d.i = e.i;
  return d
}();
function Qe(c, d) {
  var e = c.pc;
  if(w(e) && !w(e.e ? e.e(d) : e.call(null, d))) {
    throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(Me.i(M([xc(new Eb(null, "validate", "validate", 1233162959, null), new Eb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  e = c.state;
  c.state = d;
  nb(c, e, d);
  return d
}
var Re = function() {
  function c(c, d, e, f, h) {
    return Qe(c, d.p ? d.p(c.state, e, f, h) : d.call(null, c.state, e, f, h))
  }
  function d(c, d, e, f) {
    return Qe(c, d.d ? d.d(c.state, e, f) : d.call(null, c.state, e, f))
  }
  function e(c, d, e) {
    return Qe(c, d.c ? d.c(c.state, e) : d.call(null, c.state, e))
  }
  function f(c, d) {
    return Qe(c, d.e ? d.e(c.state) : d.call(null, c.state))
  }
  var h = null, k = function() {
    function c(e, f, h, k, l, E) {
      var K = null;
      5 < arguments.length && (K = M(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, K)
    }
    function d(c, e, f, h, k, l) {
      return Qe(c, T.i(e, c.state, f, h, k, M([l], 0)))
    }
    c.n = 5;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var k = H(c);
      c = L(c);
      var l = H(c);
      c = I(c);
      return d(e, f, h, k, l, c)
    };
    c.i = d;
    return c
  }(), h = function(h, n, p, t, s, v) {
    switch(arguments.length) {
      case 2:
        return f.call(this, h, n);
      case 3:
        return e.call(this, h, n, p);
      case 4:
        return d.call(this, h, n, p, t);
      case 5:
        return c.call(this, h, n, p, t, s);
      default:
        return k.i(h, n, p, t, s, M(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.n = 5;
  h.k = k.k;
  h.c = f;
  h.d = e;
  h.p = d;
  h.C = c;
  h.i = k.i;
  return h
}(), oc = function() {
  function c(c) {
    return(Math.random.j ? Math.random.j() : Math.random.call(null)) * c
  }
  function d() {
    return e.e(1)
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = d;
  e.e = c;
  return e
}(), pc = function(c) {
  return Math.floor.e ? Math.floor.e((Math.random.j ? Math.random.j() : Math.random.call(null)) * c) : Math.floor.call(null, (Math.random.j ? Math.random.j() : Math.random.call(null)) * c)
};
function Se(c) {
  return P.c(c, pc(O(c)))
}
function Te(c) {
  this.ib = c;
  this.A = 0;
  this.m = 2153775104
}
Te.prototype.H = function() {
  return na(Me.i(M([this], 0)))
};
Te.prototype.G = function(c, d) {
  return jb(d, [B('#uuid "'), B(this.ib), B('"')].join(""))
};
Te.prototype.F = function(c, d) {
  return d instanceof Te && this.ib === d.ib
};
function Ue() {
  var c = 135 / 255, d = 108 / 255, e = 46 / 255, f = Math.max(c, d, e), h = Math.min(c, d, e), k = 0, l = 0, n = 0.5 * (f + h);
  f != h && (f == c ? k = 60 * (d - e) / (f - h) : f == d ? k = 60 * (e - c) / (f - h) + 120 : f == e && (k = 60 * (c - d) / (f - h) + 240), l = 0 < n && 0.5 >= n ? (f - h) / (2 * n) : (f - h) / (2 - 2 * n));
  return[Math.round(k + 360) % 360, l, n]
}
function Ve(c, d, e) {
  0 > e ? e += 1 : 1 < e && (e -= 1);
  return 1 > 6 * e ? c + 6 * (d - c) * e : 1 > 2 * e ? d : 2 > 3 * e ? c + 6 * (d - c) * (2 / 3 - e) : c
}
function We(c, d, e) {
  var f = 0, h = 0, k = 0;
  c /= 360;
  if(0 == d) {
    f = h = k = 255 * e
  }else {
    var l = k = 0, l = 0.5 > e ? e * (1 + d) : e + d - d * e, k = 2 * e - l, f = 255 * Ve(k, l, c + 1 / 3), h = 255 * Ve(k, l, c), k = 255 * Ve(k, l, c - 1 / 3)
  }
  return[Math.round(f), Math.round(h), Math.round(k)]
}
;var Db = new V(null, "dup", "dup"), Xe = new V(null, "geometry", "geometry"), Ye = new V(null, "entities", "entities"), Ze = new V(null, "default", "default"), $e = new V(null, "display-object", "display-object"), af = new V(null, "position", "position"), bf = new V(null, "vector", "vector"), cf = new V(null, "duration", "duration"), df = new V(null, "identifier", "identifier"), ef = new V(null, "cooldown-remaining", "cooldown-remaining"), ff = new V(null, "movement", "movement"), gf = new V(null, 
"health", "health"), hf = new V(null, "width", "width"), jf = new V(null, "magnitude", "magnitude"), kf = new V(null, "velocity", "velocity"), lf = new V(null, "asteroid-explosive-death", "asteroid-explosive-death"), mf = new V(null, "fire-intent", "fire-intent"), nf = new V(null, "mouseover", "mouseover"), of = new V(null, "current", "current"), qf = new V(null, "world", "world"), rf = new V(null, "class", "class"), sf = new V(null, "entity-id", "entity-id"), tf = new V(null, "radius", "radius"), 
uf = new V(null, "collidable", "collidable"), vf = new V(null, "player", "player"), Z = new V(null, "name", "name"), wf = new V(null, "angular-acceleration", "angular-acceleration"), xf = new V(null, "aabb", "aabb"), yf = new V(null, "color", "color"), zf = new V(null, "resize", "resize"), Af = new V(null, "mouseout", "mouseout"), Ab = new V(null, "flush-on-newline", "flush-on-newline"), Bf = new V(null, "max-angular-velocity", "max-angular-velocity"), Cf = new V(null, "thrust-intent", "thrust-intent"), 
Df = new V(null, "style", "style"), Ef = new V(null, "b-id", "b-id"), Ff = new V(null, "active-keys", "active-keys"), Gf = new V(null, "normal", "normal"), Hf = new V(null, "rotate-left-intent", "rotate-left-intent"), If = new V(null, "xmin", "xmin"), Jf = new V(null, "tensor", "tensor"), Kf = new V(null, "max", "max"), Lf = new V(null, "thrust", "thrust"), Mf = new V(null, "mouseleave", "mouseleave"), Nf = new V(null, "keydown", "keydown"), Of = new V(null, "ttl", "ttl"), Pf = new V(null, "xmax", 
"xmax"), Qf = new V(null, "cooldown", "cooldown"), Rf = new V(null, "acceleration", "acceleration"), Sf = new V(null, "moment-inertia", "moment-inertia"), Tf = new V(null, "projectile", "projectile"), Uf = new V(null, "damage", "damage"), Vf = new V(null, "angular-velocity", "angular-velocity"), Wf = new V(null, "space", "space"), Xf = new V(null, "right", "right"), Yf = new V(null, "weapon", "weapon"), Zf = new V(null, "layer", "layer"), $f = new V(null, "left", "left"), ag = new V(null, "a-id", 
"a-id"), bg = new V(null, "keyup", "keyup"), z = new V(null, "else", "else"), cg = new V(null, "contacts", "contacts"), dg = new V(null, "ymin", "ymin"), Bb = new V(null, "readably", "readably"), eg = new V(null, "prev-ids", "prev-ids"), fg = new V(null, "angle", "angle"), gg = new V(null, "mouseenter", "mouseenter"), Oe = new V(null, "validator", "validator"), Cb = new V(null, "meta", "meta"), hg = new V(null, "rotate-right-intent", "rotate-right-intent"), ig = new V(null, "remaining", "remaining"), 
jg = new V(null, "ymax", "ymax"), kg = new V(null, "penetration", "penetration"), lg = new V(null, "obj", "obj"), mg = new V(null, "mass", "mass"), ng = new V(null, "entity-ids", "entity-ids"), og = new V(null, "health-bar", "health-bar"), pg = new V(null, "down", "down"), qg = new V(null, "impulse", "impulse"), rg = new V(null, "up", "up"), sg = new V(null, "id", "id"), tg = new V(null, "disabled", "disabled"), ug = new V(null, "max-velocity", "max-velocity"), vg = new V(null, "classes", "classes"), 
wg = new V(null, "height", "height"), xg = new V(null, "rotation", "rotation");
function yg() {
  var c = Ue(), d = c[0], e = c[1], f = c[2], c = pc(36) - 18, h = oc.e(0.1) - 0.05, k = oc.e(0.1) - 0.05, d = We(nc(d + c, 360), nc(function() {
    var c;
    c = e + h;
    c = 0 > c ? 0 : c;
    return 1 < c ? 1 : c
  }(), 1), nc(function() {
    var c;
    c = f + k;
    c = 0 > c ? 0 : c;
    return 1 < c ? 1 : c
  }(), 1));
  return(d[0] << 16) + (d[1] << 8) + d[2]
}
;var zg = function() {
  function c(c, d) {
    return T.c(B, Zc(1, cd.c($c.e(c), d)))
  }
  function d(c) {
    return T.c(B, c)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}();
function Ag() {
  var c = Bg();
  return"" + B(c.ib)
}
function Bg() {
  function c() {
    return(8 | 3 & pc(15)).toString(16)
  }
  function d() {
    return pc(16).toString(16)
  }
  return new Te((new ta).append(d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-", d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-4", d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-", c.j ? c.j() : c.call(null), d.j ? 
  d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-", d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null)))
}
var Cg, Dg = [B("^"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), 
B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("$")].join(""), Eg = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(Dg);
Cg = null == Eg ? null : 1 === O(Eg) ? H(Eg) : qb(U.d(pb, ob(Bd), Eg));
P.d(Cg, 0, null);
P.d(Cg, 1, null);
P.d(Cg, 2, null);
var Fg = Math.PI, Gg = Number.MAX_VALUE, Hg = Math.abs, Ig = Math.pow, Jg = Math.sqrt, Kg = Math.cos, Lg = Math.sin;
function Mg(c, d) {
  return Y([P.c(c, 0) + P.c(d, 0), P.c(c, 1) + P.c(d, 1)], !0)
}
function Ng(c, d) {
  return Y([P.c(c, 0) - P.c(d, 0), P.c(c, 1) - P.c(d, 1)], !0)
}
function Og(c) {
  return Jg.e ? Jg.e((Ig.c ? Ig.c(P.c(c, 0), 2) : Ig.call(null, P.c(c, 0), 2)) + (Ig.c ? Ig.c(P.c(c, 1), 2) : Ig.call(null, P.c(c, 1), 2))) : Jg.call(null, (Ig.c ? Ig.c(P.c(c, 0), 2) : Ig.call(null, P.c(c, 0), 2)) + (Ig.c ? Ig.c(P.c(c, 1), 2) : Ig.call(null, P.c(c, 1), 2)))
}
function Pg(c, d) {
  return Y([c * P.c(d, 0), c * P.c(d, 1)], !0)
}
function Qg(c, d) {
  return P.c(c, 0) * P.c(d, 0) + P.c(c, 1) * P.c(d, 1)
}
function Rg(c) {
  var d = Y([1, 0], !0), e = P.c(d, 0), d = P.c(d, 1);
  return Y([e * (Kg.e ? Kg.e(c) : Kg.call(null, c)) - d * (Lg.e ? Lg.e(c) : Lg.call(null, c)), e * (Lg.e ? Lg.e(c) : Lg.call(null, c)) + d * (Kg.e ? Kg.e(c) : Kg.call(null, c))], !0)
}
function Sg(c) {
  return Y([-P.c(c, 1), P.c(c, 0)], !0)
}
function Tg(c) {
  var d = Og(c);
  return Y([P.c(c, 0) / d, P.c(c, 1) / d], !0)
}
;function Ug(c, d) {
  var e = T.d(ze, c, d);
  return N(e, gd(Vc(function(c) {
    return e === c
  }), d))
}
var Vg = function() {
  function c(c, d) {
    return O(c) < O(d) ? U.d(Qb, d, c) : U.d(Qb, c, d)
  }
  var d = null, e = function() {
    function c(e, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, p)
    }
    function d(c, e, f) {
      c = Ug(O, Qb.i(f, e, M([c], 0)));
      return U.d(hd, H(c), I(c))
    }
    c.n = 2;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return d(e, f, c)
    };
    c.i = d;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return ve;
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.j = function() {
    return ve
  };
  d.e = aa();
  d.c = c;
  d.i = e.i;
  return d
}(), Wg = function() {
  function c(c, d) {
    for(;;) {
      if(O(d) < O(c)) {
        var e = c;
        c = d;
        d = e
      }else {
        return U.d(function(c, d) {
          return function(c, e) {
            return ic(d, e) ? c : Yb.c(c, e)
          }
        }(c, d), c, c)
      }
    }
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      c = Ug(function(c) {
        return-O(c)
      }, Qb.i(h, f, M([c], 0)));
      return U.d(d, H(c), I(c))
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.e = aa();
  d.c = c;
  d.i = e.i;
  return d
}(), Xg = function() {
  function c(c, d) {
    return O(c) < O(d) ? U.d(function(c, e) {
      return ic(d, e) ? Yb.c(c, e) : c
    }, c, c) : U.d(Yb, c, d)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      return U.d(d, c, Qb.c(h, f))
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.e = aa();
  d.c = c;
  d.i = e.i;
  return d
}();
function Yg(c, d, e, f) {
  this.name = c;
  this.xa = d;
  this.t = e;
  this.q = f;
  this.A = 0;
  this.m = 2229667594;
  2 < arguments.length ? (this.t = e, this.q = f) : this.q = this.t = null
}
q = Yg.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, bf) ? this.xa : z ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new Yg(e, this.xa, this.t, this.q, null) : (W.c ? W.c(bf, d) : W.call(null, bf, d)) ? new Yg(this.name, e, this.t, this.q, null) : new Yg(this.name, this.xa, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.Position{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([bf, this.xa], !0) : Y.call(null, [bf, this.xa], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([bf, this.xa], !0) : Y.call(null, [bf, this.xa], !0)], !0), this.q))
};
q.R = function() {
  return 2 + O(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new Yg(this.name, this.xa, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([bf, null, Z, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new Yg(this.name, this.xa, this.t, Qc(Tb.c(this.q, d)), null)
};
function Zg(c, d, e, f) {
  this.name = c;
  this.angle = d;
  this.t = e;
  this.q = f;
  this.A = 0;
  this.m = 2229667594;
  2 < arguments.length ? (this.t = e, this.q = f) : this.q = this.t = null
}
q = Zg.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, fg) ? this.angle : z ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new Zg(e, this.angle, this.t, this.q, null) : (W.c ? W.c(fg, d) : W.call(null, fg, d)) ? new Zg(this.name, e, this.t, this.q, null) : new Zg(this.name, this.angle, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.Rotation{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([fg, this.angle], !0) : Y.call(null, [fg, this.angle], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([fg, this.angle], !0) : Y.call(null, [fg, this.angle], !0)], !0), this.q))
};
q.R = function() {
  return 2 + O(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new Zg(this.name, this.angle, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([Z, null, fg, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new Zg(this.name, this.angle, this.t, Qc(Tb.c(this.q, d)), null)
};
function $g(c, d, e, f, h, k, l, n, p) {
  this.name = c;
  this.acceleration = d;
  this.O = e;
  this.Z = f;
  this.aa = h;
  this.T = k;
  this.Y = l;
  this.t = n;
  this.q = p;
  this.A = 0;
  this.m = 2229667594;
  7 < arguments.length ? (this.t = n, this.q = p) : this.q = this.t = null
}
q = $g.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, Rf) ? this.acceleration : W(d, kf) ? this.O : W(d, ug) ? this.Z : W(d, wf) ? this.aa : W(d, Vf) ? this.T : W(d, Bf) ? this.Y : z ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new $g(e, this.acceleration, this.O, this.Z, this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(Rf, d) : W.call(null, Rf, d)) ? new $g(this.name, e, this.O, this.Z, this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(kf, d) : W.call(null, kf, d)) ? new $g(this.name, this.acceleration, e, this.Z, this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(ug, d) : W.call(null, ug, d)) ? new $g(this.name, this.acceleration, this.O, e, 
  this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(wf, d) : W.call(null, wf, d)) ? new $g(this.name, this.acceleration, this.O, this.Z, e, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(Vf, d) : W.call(null, Vf, d)) ? new $g(this.name, this.acceleration, this.O, this.Z, this.aa, e, this.Y, this.t, this.q, null) : (W.c ? W.c(Bf, d) : W.call(null, Bf, d)) ? new $g(this.name, this.acceleration, this.O, this.Z, this.aa, this.T, e, this.t, this.q, null) : new $g(this.name, this.acceleration, 
  this.O, this.Z, this.aa, this.T, this.Y, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.Movement{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([Rf, this.acceleration], !0) : Y.call(null, [Rf, this.acceleration], !0), Y.c ? Y.c([kf, this.O], !0) : Y.call(null, [kf, this.O], !0), Y.c ? Y.c([ug, this.Z], !0) : Y.call(null, [ug, this.Z], !0), Y.c ? Y.c([wf, this.aa], !0) : Y.call(null, [wf, this.aa], !0), Y.c ? Y.c([Vf, this.T], !0) : Y.call(null, [Vf, this.T], !0), Y.c ? Y.c([Bf, this.Y], !0) : Y.call(null, [Bf, 
  this.Y], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([Rf, this.acceleration], !0) : Y.call(null, [Rf, this.acceleration], !0), Y.c ? Y.c([kf, this.O], !0) : Y.call(null, [kf, this.O], !0), Y.c ? Y.c([ug, this.Z], !0) : Y.call(null, [ug, this.Z], !0), Y.c ? Y.c([wf, this.aa], !0) : Y.call(null, [wf, this.aa], !0), Y.c ? Y.c([Vf, this.T], !0) : Y.call(null, [Vf, this.T], !0), Y.c ? Y.c([Bf, this.Y], !0) : Y.call(null, [Bf, this.Y], !0)], !0), this.q))
};
q.R = function() {
  return 7 + O(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new $g(this.name, this.acceleration, this.O, this.Z, this.aa, this.T, this.Y, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([kf, null, Z, null, wf, null, Bf, null, Rf, null, Vf, null, ug, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new $g(this.name, this.acceleration, this.O, this.Z, this.aa, this.T, this.Y, this.t, Qc(Tb.c(this.q, d)), null)
};
function bh(c, d, e, f, h, k, l) {
  this.name = c;
  this.$ = d;
  this.da = e;
  this.S = f;
  this.ca = h;
  this.t = k;
  this.q = l;
  this.A = 0;
  this.m = 2229667594;
  5 < arguments.length ? (this.t = k, this.q = l) : this.q = this.t = null
}
q = bh.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, If) ? this.$ : W(d, dg) ? this.da : W(d, Pf) ? this.S : W(d, jg) ? this.ca : z ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new bh(e, this.$, this.da, this.S, this.ca, this.t, this.q, null) : (W.c ? W.c(If, d) : W.call(null, If, d)) ? new bh(this.name, e, this.da, this.S, this.ca, this.t, this.q, null) : (W.c ? W.c(dg, d) : W.call(null, dg, d)) ? new bh(this.name, this.$, e, this.S, this.ca, this.t, this.q, null) : (W.c ? W.c(Pf, d) : W.call(null, Pf, d)) ? new bh(this.name, this.$, this.da, e, this.ca, this.t, this.q, null) : (W.c ? W.c(jg, d) : W.call(null, jg, d)) ? 
  new bh(this.name, this.$, this.da, this.S, e, this.t, this.q, null) : new bh(this.name, this.$, this.da, this.S, this.ca, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.AABB{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([If, this.$], !0) : Y.call(null, [If, this.$], !0), Y.c ? Y.c([dg, this.da], !0) : Y.call(null, [dg, this.da], !0), Y.c ? Y.c([Pf, this.S], !0) : Y.call(null, [Pf, this.S], !0), Y.c ? Y.c([jg, this.ca], !0) : Y.call(null, [jg, this.ca], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([If, this.$], !0) : Y.call(null, [If, this.$], !0), Y.c ? Y.c([dg, this.da], !0) : Y.call(null, [dg, this.da], !0), Y.c ? Y.c([Pf, this.S], !0) : Y.call(null, [Pf, this.S], !0), Y.c ? Y.c([jg, this.ca], !0) : Y.call(null, [jg, this.ca], !0)], !0), this.q))
};
q.R = function() {
  return 5 + O(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new bh(this.name, this.$, this.da, this.S, this.ca, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([Z, null, If, null, Pf, null, dg, null, jg, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new bh(this.name, this.$, this.da, this.S, this.ca, this.t, Qc(Tb.c(this.q, d)), null)
};
function ch(c, d, e, f, h, k) {
  return new $g(ff, c, d, e, f, h, k)
}
function dh(c) {
  return new Yg(af, c)
}
function eh(c) {
  return new Zg(xg, c)
}
var fh = function() {
  function c(c, d) {
    return D.c ? D.c([Z, Of, cf, c, ig, d], !0) : D.call(null, [Z, Of, cf, c, ig, d], !0)
  }
  function d(c) {
    return e.c(c, c)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}(), gh = function() {
  function c(c, d, e, l) {
    return new bh(xf, c, d, e, l)
  }
  function d(c, d) {
    var k = P.d(c, 0, null), l = P.d(c, 1, null), n = P.d(d, 0, null), p = P.d(d, 1, null);
    return e.p(k, l, n, p)
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 4:
        return c.call(this, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.p = c;
  return e
}();
function hh(c) {
  return D.c ? D.c([Z, mg, mg, c], !0) : D.call(null, [Z, mg, mg, c], !0)
}
var ih = function() {
  function c(c) {
    return D.c ? D.c([Z, df, sg, c], !0) : D.call(null, [Z, df, sg, c], !0)
  }
  function d() {
    return e.e(Ag())
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = d;
  e.e = c;
  return e
}();
function jh(c, d) {
  return ic(c, d)
}
var kh = function() {
  function c(c, d, e, f) {
    return ic(c, d) && ic(c, e) && ic(c, f)
  }
  function d(c, d, e) {
    return ic(c, d) && ic(c, e)
  }
  var e = null, f = function() {
    function c(e, f, h, t, s) {
      var v = null;
      4 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, t, v)
    }
    function d(c, f, h, k, s) {
      return(f = e.p(c, f, h, k)) ? U.c(function(c, d) {
        return w(c) ? d : c
      }, X.d(jh, $c.e(c), s)) : f
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = L(c);
      var s = H(c);
      c = I(c);
      return d(e, f, h, s, c)
    };
    c.i = d;
    return c
  }(), e = function(e, k, l, n, p) {
    switch(arguments.length) {
      case 2:
        return ic(e, k);
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, n);
      default:
        return f.i(e, k, l, n, M(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 4;
  e.k = f.k;
  e.c = function(c, d) {
    return ic(c, d)
  };
  e.d = d;
  e.p = c;
  e.i = f.i;
  return e
}();
function $(c, d) {
  return Q.c(c, d)
}
function lh(c, d) {
  return S.d(c, Z.e(d), d)
}
function mh(c, d) {
  return Nc(U.d(function(c, d) {
    return Oc(c, Z.e(d), d)
  }, ob(c), d))
}
var nh = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    c = Nc(U.d(function(c, d) {
      return Oc(c, Z.e(d), d)
    }, ob(Td), c));
    return ic(c, df) ? c : lh(c, ih.j())
  }
  c.n = 0;
  c.k = function(c) {
    c = G(c);
    return d(c)
  };
  c.i = d;
  return c
}();
function oh(c, d) {
  return jd.c(c, Y([Ye, d], !0))
}
function ph(c, d) {
  var e = sg.e($(d, df));
  return ld(c, Y([Ye, e], !0), d)
}
function qh(c) {
  c = Ye.e(c);
  return(c = G(c)) ? new re(c, null) : null
}
function rh(c) {
  return jd.d(c, Y([Xe, hf], !0), 800)
}
function sh(c) {
  return jd.d(c, Y([Xe, wg], !0), 500)
}
function th(c) {
  return sg.e($(c, df))
}
function uh(c) {
  c = $(c, af);
  return w(c) ? c.xa : null
}
function vh(c) {
  return mg.e($(c, mg))
}
function wh(c, d) {
  var e = Mc(function() {
    var d = Ye.e(c);
    return w(d) ? d : Td
  }());
  return S.d(c, Ye, Nc(U.d(function(c, d) {
    return Oc(c, th(d), d)
  }, e, d)))
}
function xh(c, d) {
  var e = Mc(function() {
    var d = Ye.e(c);
    return w(d) ? d : Td
  }());
  return S.d(c, Ye, Nc(U.d(function(c, d) {
    var e = th(d);
    return sb(c, e)
  }, e, d)))
}
function yh(c) {
  var d = $(c, Of), e = cf.e(d), d = ig.e(d) - 1;
  return lh(c, fh.c(e, d))
}
function zh(c) {
  var d = X.c(yh, gd(function(c) {
    return ic(c, Of)
  }, qh(c))), e = gd(function() {
    return function(c) {
      return 0 > ig.e($(c, Of))
    }
  }(d), d);
  c = wh(c, d);
  return xh(c, e)
}
;var Ah = D([Xf, function() {
  return D([Z, hg], !0)
}, $f, function() {
  return D([Z, Hf], !0)
}, rg, function() {
  return D([Z, Cf], !0)
}, Wf, function() {
  return D([Z, mf], !0)
}], !0);
function Bh(c) {
  for(var d = function(c) {
    return function(d, e) {
      return U.d(function() {
        return function(c, d) {
          return w(d) ? lh(c, d) : c
        }
      }(c), e, function() {
        return function(c) {
          return function s(d) {
            return new zc(null, function() {
              return function() {
                for(;;) {
                  var c = G(d);
                  if(c) {
                    if(dc(c)) {
                      var e = vb(c), f = O(e), h = new Bc(Array(f), 0);
                      return function() {
                        for(var c = 0;;) {
                          if(c < f) {
                            var d = C.c(e, c), k = h, d = Q.c(Ah, d), d = w(d) ? d.j ? d.j() : d.call(null) : null;
                            k.add(d);
                            c += 1
                          }else {
                            return!0
                          }
                        }
                      }() ? Fc(h.ka(), s(wb(c))) : Fc(h.ka(), null)
                    }
                    var k = H(c);
                    return N(function() {
                      var c = Q.c(Ah, k);
                      return w(c) ? c.j ? c.j() : c.call(null) : null
                    }(), s(I(c)))
                  }
                  return null
                }
              }
            }(c), null, null)
          }
        }(c)(Ff.e(d))
      }())
    }
  }(c), e = qh(c), f = Mc(Ye.e(c));;) {
    if(G(e)) {
      var h = H(e);
      kh.c(h, vf) ? (h = d(c, h), e = L(e), f = Oc(f, th(h), h)) : e = L(e)
    }else {
      return S.d(c, Ye, qb(f))
    }
  }
}
function Ch(c) {
  var d = $(c, ff), e = fg.e($(c, xg)), e = Rg(w(e) ? e : 0), e = ic(c, Cf) ? Pg(0.05, e) : Y([0, 0], !0), f = bf.c($(c, Lf), Y([0, 0], !0)), f = Mg(d.acceleration, Ng(e, f));
  return lh(lh(Tb.c(c, Cf), ch(f, d.O, d.Z, d.aa, d.T, d.Y)), D([Z, Lf, bf, e], !0))
}
function Dh(c) {
  return wh(c, X.c(Ch, gd(function(c) {
    return ic(c, Cf) || ic(c, Lf)
  }, qh(c))))
}
function Eh(c) {
  var d = fg.c($(c, xg), 0), e = 0.01 * 2 * Fg, e = w($(c, Hf)) ? -1 * e : e, d = d + e;
  return lh(Tb.c(Tb.c(c, Hf), hg), eh(d))
}
function Fh(c) {
  return wh(c, X.c(Eh, gd(function(c) {
    return ic(c, Hf) || ic(c, hg)
  }, qh(c))))
}
;function Gh(c) {
  return D([Z, $e, lg, c], !0)
}
function Hh(c, d) {
  var e = uh(d), f = P.d(e, 0, null), e = P.d(e, 1, null), h;
  h = fg.e($(d, xg));
  h = w(h) ? h : 0;
  var k = lg.e($(d, $e)), l = k.position;
  l.x = f;
  l.y = e;
  k.rotation = h;
  return c
}
;function Ih(c, d) {
  for(var e = 0;;) {
    if(e = c.indexOf(d, e), 0 <= e) {
      var f;
      if(f = 0 === e || " " === c.charAt(e - 1)) {
        f = c.length;
        var h = e + d.length;
        f = h <= f ? h === f || " " === c.charAt(h) : null
      }
      if(f) {
        return e
      }
      e += d.length
    }else {
      return null
    }
  }
}
var Kh = function() {
  function c(c, d) {
    var e = Jh(c), l, n = ye(d);
    l = ma(n);
    if(G(l)) {
      if(n = e.classList, w(n)) {
        l = G(l.split(/\s+/));
        for(var p = null, t = 0, s = 0;;) {
          if(s < t) {
            var v = p.I(null, s);
            n.add(v);
            s += 1
          }else {
            if(l = G(l)) {
              p = l, dc(p) ? (l = vb(p), s = wb(p), p = l, t = O(l), l = s) : (l = H(p), n.add(l), l = L(p), p = null, t = 0), s = 0
            }else {
              break
            }
          }
        }
      }else {
        for(n = e.className, l = G(l.split(/\s+/)), p = null, s = t = 0;;) {
          if(s < t) {
            v = p.I(null, s), w(Ih(n, v)) || (e.className = "" === n ? v : [B(n), B(" "), B(v)].join("")), s += 1
          }else {
            if(l = G(l)) {
              p = l, dc(p) ? (l = vb(p), s = wb(p), p = l, t = O(l), l = s) : (l = H(p), w(Ih(n, l)) || (e.className = "" === n ? l : [B(n), B(" "), B(l)].join("")), l = L(p), p = null, t = 0), s = 0
            }else {
              break
            }
          }
        }
      }
    }
    return e
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      c = Jh(c);
      f = G(Qb.c(h, f));
      h = null;
      for(var p = 0, t = 0;;) {
        if(t < p) {
          var s = h.I(null, t);
          d.c(c, s);
          t += 1
        }else {
          if(f = G(f)) {
            h = f, dc(h) ? (f = vb(h), t = wb(h), h = f, p = O(f), f = t) : (f = H(h), d.c(c, f), f = L(h), h = null, p = 0), t = 0
          }else {
            break
          }
        }
      }
      return c
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}();
function Lh(c) {
  return"string" === typeof c ? c : zg.c(" ", X.c(function(c) {
    var e = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return[B(ye(e)), B(":"), B(ye(c)), B(";")].join("")
  }, c))
}
var Mh = function() {
  function c(c, d, e) {
    if(w(e)) {
      if(Ub(e)) {
        return c = Jh(c), c[ye(d)] = e, c
      }
      c = Jh(c);
      c.setAttribute(ye(d), d === Df ? Lh(e) : e);
      return c
    }
    return null
  }
  function d(c, d) {
    return e.d(Jh(c), d, "true")
  }
  var e = null, f = function() {
    function c(e, f, h, t) {
      var s = null;
      3 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, s)
    }
    function d(c, f, h, k) {
      if(!Uc(O(k))) {
        throw Error([B("Assert failed: "), B(Me.i(M([xc(new Eb(null, "even?", "even?", -1543640034, null), xc(new Eb(null, "count", "count", -1545680184, null), new Eb(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      c = Jh(c);
      f = G(N(Y([f, h], !0), id.c(2, k)));
      h = null;
      for(var s = k = 0;;) {
        if(s < k) {
          var v = h.I(null, s), y = P.d(v, 0, null), v = P.d(v, 1, null);
          e.d(c, y, v);
          s += 1
        }else {
          if(f = G(f)) {
            dc(f) ? (k = vb(f), f = wb(f), h = k, k = O(k)) : (k = H(f), h = P.d(k, 0, null), k = P.d(k, 1, null), e.d(c, h, k), f = L(f), h = null, k = 0), s = 0
          }else {
            break
          }
        }
      }
      return c
    }
    c.n = 3;
    c.k = function(c) {
      var e = H(c);
      c = L(c);
      var f = H(c);
      c = L(c);
      var h = H(c);
      c = I(c);
      return d(e, f, h, c)
    };
    c.i = d;
    return c
  }(), e = function(e, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      default:
        return f.i(e, k, l, M(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 3;
  e.k = f.k;
  e.c = d;
  e.d = c;
  e.i = f.i;
  return e
}();
function Nh(c, d) {
  return w(d) ? Jh(c).getAttribute(ye(d)) : null
}
;var Oh, Ph, Qh, Rh;
function Sh() {
  return ca.navigator ? ca.navigator.userAgent : null
}
Rh = Qh = Ph = Oh = !1;
var Th;
if(Th = Sh()) {
  var Uh = ca.navigator;
  Oh = 0 == Th.indexOf("Opera");
  Ph = !Oh && -1 != Th.indexOf("MSIE");
  Qh = !Oh && -1 != Th.indexOf("WebKit");
  Rh = !Oh && !Qh && "Gecko" == Uh.product
}
var Vh = Oh, Wh = Ph, Xh = Rh, Yh = Qh, Zh = ca.navigator, $h = -1 != (Zh && Zh.platform || "").indexOf("Mac");
function ai() {
  var c = ca.document;
  return c ? c.documentMode : void 0
}
var bi;
a: {
  var ci = "", di;
  if(Vh && ca.opera) {
    var ei = ca.opera.version, ci = "function" == typeof ei ? ei() : ei
  }else {
    if(Xh ? di = /rv\:([^\);]+)(\)|;)/ : Wh ? di = /MSIE\s+([^\);]+)(\)|;)/ : Yh && (di = /WebKit\/(\S+)/), di) {
      var fi = di.exec(Sh()), ci = fi ? fi[1] : ""
    }
  }
  if(Wh) {
    var gi = ai();
    if(gi > parseFloat(ci)) {
      bi = String(gi);
      break a
    }
  }
  bi = ci
}
var hi = {};
function ii(c) {
  var d;
  if(!(d = hi[c])) {
    d = 0;
    for(var e = ma(String(bi)).split("."), f = ma(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
      var l = e[k] || "", n = f[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = p.exec(l) || ["", "", ""], v = t.exec(n) || ["", "", ""];
        if(0 == s[0].length && 0 == v[0].length) {
          break
        }
        d = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == v[2].length) ? -1 : (0 == s[2].length) > (0 == v[2].length) ? 1 : 0) || (s[2] < v[2] ? -1 : s[2] > v[2] ? 1 : 0)
      }while(0 == d)
    }
    d = hi[c] = 0 <= d
  }
  return d
}
var ji = ca.document, ki = ji && Wh ? ai() || ("CSS1Compat" == ji.compatMode ? parseInt(bi, 10) : 5) : void 0;
var li;
(li = !Wh) || (li = Wh && 9 <= ki);
var mi = li, ni = Wh && !ii("9");
!Yh || ii("528");
Xh && ii("1.9b") || Wh && ii("8") || Vh && ii("9.5") || Yh && ii("528");
Xh && !ii("8") || Wh && ii("9");
function oi() {
  0 != pi && (this.Dc = Error().stack, ea(this))
}
var pi = 0;
function qi(c, d) {
  this.type = c;
  this.currentTarget = this.target = d
}
qi.prototype.Ua = !1;
qi.prototype.defaultPrevented = !1;
qi.prototype.gb = !0;
qi.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.gb = !1
};
function ri(c) {
  ri[" "](c);
  return c
}
ri[" "] = function() {
};
function si(c, d) {
  c && this.init(c, d)
}
la(si, qi);
q = si.prototype;
q.target = null;
q.relatedTarget = null;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = !1;
q.altKey = !1;
q.shiftKey = !1;
q.metaKey = !1;
q.kc = !1;
q.Wb = null;
q.init = function(c, d) {
  var e = this.type = c.type;
  qi.call(this, e);
  this.target = c.target || c.srcElement;
  this.currentTarget = d;
  var f = c.relatedTarget;
  if(f) {
    if(Xh) {
      var h;
      a: {
        try {
          ri(f.nodeName);
          h = !0;
          break a
        }catch(k) {
        }
        h = !1
      }
      h || (f = null)
    }
  }else {
    "mouseover" == e ? f = c.fromElement : "mouseout" == e && (f = c.toElement)
  }
  this.relatedTarget = f;
  this.offsetX = Yh || void 0 !== c.offsetX ? c.offsetX : c.layerX;
  this.offsetY = Yh || void 0 !== c.offsetY ? c.offsetY : c.layerY;
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
  this.kc = $h ? c.metaKey : c.ctrlKey;
  this.state = c.state;
  this.Wb = c;
  c.defaultPrevented && this.preventDefault();
  delete this.Ua
};
q.preventDefault = function() {
  si.nc.preventDefault.call(this);
  var c = this.Wb;
  if(c.preventDefault) {
    c.preventDefault()
  }else {
    if(c.returnValue = !1, ni) {
      try {
        if(c.ctrlKey || 112 <= c.keyCode && 123 >= c.keyCode) {
          c.keyCode = -1
        }
      }catch(d) {
      }
    }
  }
};
function ti(c) {
  return D([Z, Sf, Jf, c], !0)
}
function ui(c, d) {
  var e = uh(c), f = $(c, ff).O, h = $(c, ff).T;
  return Mg(f, Pg(h, Sg(Ng(d, e))))
}
var vi = function() {
  function c(c) {
    return D([Z, uf, ng, c], !0)
  }
  function d() {
    return e.e(Bd)
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = d;
  e.e = c;
  return e
}();
function wi(c, d) {
  Y([c, d], !0);
  return 0 < jc(c, d) ? Y([c, d], !0) : Y([d, c], !0)
}
function xi(c, d) {
  return c.$ - d.$
}
function yi(c, d) {
  return c.S - d.S
}
function zi(c, d) {
  return c.da - d.da
}
function Ai(c, d) {
  return c.ca - d.ca
}
function Bi(c, d) {
  for(var e = c.sort(xi), f = d.sort(yi), h = O(f), k = 0, l = 0, n = ve, p = ob(ve);;) {
    if(k < h && l < h) {
      var t = e[k], s = f[l], v = t.id, y = s.id;
      if(t.$ < s.S) {
        var E = k + 1, K = l, R = Qb.c(n, v), p = U.d(function(c, d, e, f, h, k, l) {
          return function(c, d) {
            var e = wi(d, l);
            return pb(c, e)
          }
        }(k, l, n, p, t, s, v, y), p, n), k = E, l = K, n = R
      }else {
        if(Ze) {
          l += 1, n = Yb.c(n, y)
        }else {
          return null
        }
      }
    }else {
      return qb(p)
    }
  }
}
function Ci(c, d) {
  for(var e = c.sort(zi), f = d.sort(Ai), h = O(f), k = 0, l = 0, n = ve, p = ob(ve);;) {
    if(k < h && l < h) {
      var t = e[k], s = f[l], v = t.id, y = s.id;
      if(t.da < s.ca) {
        var E = k + 1, K = l, R = Qb.c(n, v), p = U.d(function(c, d, e, f, h, k, l) {
          return function(c, d) {
            var e = wi(d, l);
            return pb(c, e)
          }
        }(k, l, n, p, t, s, v, y), p, n), k = E, l = K, n = R
      }else {
        if(Ze) {
          l += 1, n = Yb.c(n, y)
        }else {
          return null
        }
      }
    }else {
      return qb(p)
    }
  }
}
function Di(c) {
  var d = Gc(X.c(function(c) {
    var d = th(c);
    c = $(c, xf);
    c.id = d;
    return c
  }, gd(function(c) {
    return kh.d(c, xf, uf)
  }, qh(c)))), e = d.slice(0);
  c = Bi(d, e);
  d = Ci(d, e);
  return G(Wg.c(c, d))
}
function Ei(c, d, e, f) {
  return d + f > Og(Ng(c, e))
}
function Fi(c, d) {
  function e(c) {
    var d = $(c, xf).S, e = uh(c);
    c = P.d(e, 0, null);
    e = P.d(e, 1, null);
    d = Hg.e ? Hg.e(d - c) : Hg.call(null, d - c);
    if(0 > d) {
      throw Error([B("Assert failed: "), B("The circle radius cannot be negative."), B("\n"), B(Me.i(M([xc(new Eb(null, "not", "not", -1640422260, null), xc(new Eb(null, "\x3c", "\x3c", -1640531467, null), new Eb(null, "r", "r", -1640531413, null), 0))], 0)))].join(""));
    }
    return Y([Y([c, e], !0), d], !0)
  }
  return gd(function(d) {
    return T.c(Ei, Kc.c(e(oh(c, H(d))), e(oh(c, H(L(d))))))
  }, d)
}
function Gi(c, d, e) {
  c = uh(d);
  var f = uh(e), h = $(d, xf).S, k = $(e, xf).S, l = Ng(f, c), h = Hg.e ? Hg.e(h - H(c)) : Hg.call(null, h - H(c)), f = Hg.e ? Hg.e(k - H(f)) : Hg.call(null, k - H(f)), k = Og(l);
  return w(0 === P.c(l, 0) && P.c(l, 0) === P.c(l, 1)) ? D([ag, th(d), Ef, th(e), cg, Y([D([kg, h, Gf, Y([1, 0], !0), af, c], !0)], !0)], !0) : k > h + f ? D([ag, th(d), Ef, th(e), cg, Bd], !0) : Ze ? (l = Tg(l), D([ag, th(d), Ef, th(e), cg, Y([D([kg, h + f - k, Gf, l, af, Mg(Pg(h, l), c)], !0)], !0)], !0)) : null
}
function Hi(c, d) {
  return wh(c, ed.c(function(d) {
    var f = gc(d) ? T.c(oe, d) : d, h = Q.c(f, cg);
    d = Q.c(f, Ef);
    f = Q.c(f, ag);
    if(G(h)) {
      var h = H(h), k = af.e(h), f = oh(c, f), l = oh(c, d);
      d = Gf.e(h);
      var n = ui(f, k), p = ui(l, k), n = Ng(p, n), t = Qg(n, d);
      if(0 < t) {
        d = Bd
      }else {
        var h = kg.e(h), p = $(f, ff), n = $(l, ff), s = vh(f), v = vh(l), y = Jf.c($(f, Sf), Gg), E = Jf.c($(l, Sf), Gg), K = Qg(Sg(Ng(k, uh(f))), d), k = Qg(Sg(Ng(k, uh(l))), d), t = -2 * t / (1 / s + 1 / v + K * K / y + k * k / E), s = Ng(p.O, Pg(t / s, d)), v = Mg(n.O, Pg(t / v, d)), y = p.T + K * t / y, k = n.T - k * t / E;
        Pg(0.5 * h, d);
        f = lh(f, ch(p.acceleration, s, p.Z, p.aa, y, p.Y));
        l = lh(l, ch(n.acceleration, v, n.Z, n.aa, k, n.Y));
        w(w(h) ? 0 < h : h) ? (n = vh(f), k = vh(l), p = uh(f), E = uh(l), d = Pg(h, d), d = Y([lh(f, dh(Ng(p, Pg(1 / n, d)))), lh(l, dh(Mg(E, Pg(1 / k, d))))], !0)) : d = Y([f, l], !0)
      }
    }else {
      d = Bd
    }
    return d
  }, d))
}
function Ii(c, d) {
  return G(d) ? Hi(c, X.c(Wc.d(T, Gi, c), gd(Wc.c(Rc, Tc), X.c(Wc.c(X, Wc.c(oh, c)), d)))) : c
}
function Ji(c) {
  var d = Di(c), e = Fi(c, d), f = U.d(function(c, d) {
    return function(e, f) {
      var p = H(f), t = H(L(f));
      return md.d(md.d(e, Y([p], !0), function(c, d) {
        return function(c) {
          return Qb.c(c, d)
        }
      }(p, t, c, d)), Y([t], !0), function(c) {
        return function(d) {
          return Qb.c(d, c)
        }
      }(p, t, c, d))
    }
  }(d, e), Td, e);
  return wh(c, X.c(function(c) {
    return lh(c, vi.e(Q.c(f, th(c))))
  }, gd(function(c) {
    return ic(c, uf)
  }, qh(c))))
}
function Ki(c, d) {
  function e(c) {
    return ic(c, mg) && ic(c, ff)
  }
  return wh(d, X.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    c = Hg.e ? Hg.e(vh(d) * Og(Ng($(c, ff).O, $(d, ff).O))) : Hg.call(null, vh(d) * Og(Ng($(c, ff).O, $(d, ff).O)));
    c = D([Z, qg, jf, c], !0);
    return lh(d, c)
  }, gd(function(c) {
    return Rc(e, c)
  }, gd(function(c) {
    return H(L(c))
  }, X.c(function(d) {
    return Y.c ? Y.c([d, oh(c, th(d))], !0) : Y.call(null, [d, oh(c, th(d))], !0)
  }, qh(d))))))
}
function Li(c) {
  return Ki(c, Ii(c, hd(ve, ed.c(function(c) {
    var e = ng.e($(c, uf));
    return X.c(function(e) {
      return xe(Y([th(c), e], !0))
    }, e)
  }, gd(function(c) {
    return G(ng.e($(c, uf)))
  }, gd(function(c) {
    return ic(c, uf)
  }, qh(c)))))))
}
;var Mi = function() {
  function c(c, d) {
    return D([Z, gf, Kf, c, of, d], !0)
  }
  function d(c) {
    return D([Z, gf, Kf, c, of, c], !0)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}();
function Ni(c, d) {
  return D([Z, og, sf, c, hf, d, wg, 20], !0)
}
function Oi(c) {
  for(var d = function() {
    return function(c, d) {
      var e = jf.e($(d, qg)), f = Uf.c($(d, Uf), 0), e = e - 300;
      return 0 < e ? lh(d, D([Z, Uf, Uf, f + e], !0)) : d
    }
  }(c), e = qh(c), f = Mc(Ye.e(c));;) {
    if(G(e)) {
      var h = H(e);
      kh.p(h, gf, qg, vf) ? (h = d(c, h), e = L(e), f = Oc(f, th(h), h)) : e = L(e)
    }else {
      return S.d(c, Ye, qb(f))
    }
  }
}
function Pi(c) {
  for(var d = function() {
    return function(c, d) {
      var e = jd.c(d, Y([gf, of], !0)), f = jd.c(d, Y([gf, Kf], !0)), h = jd.c(d, Y([Uf, Uf], !0)), e = e - h;
      return lh(Tb.c(d, Uf), Mi.c(f, e))
    }
  }(c), e = qh(c), f = Mc(Ye.e(c));;) {
    if(G(e)) {
      var h = H(e);
      kh.d(h, Uf, gf) ? (h = d(c, h), e = L(e), f = Oc(f, th(h), h)) : e = L(e)
    }else {
      return S.d(c, Ye, qb(f))
    }
  }
}
function Qi(c) {
  for(var d = function() {
    return function(c, d) {
      var e = lg.e($(d, $e)), f = $(d, og), h = sf.e(f), h = oh(c, h), h = $(h, gf), s = Kf.e(h), h = of.e(h) / s, h = 0 > h ? 0 : h, s = hf.e(f), f = wg.e(f), v = uh(d);
      P.d(v, 0, null);
      P.d(v, 1, null);
      var v = s - 4, y = f - 4;
      e.clear();
      e.beginFill(5592405);
      e.drawRect(0, 0, s, f);
      e.endFill();
      e.beginFill(16711680);
      e.drawRect(2, 2, v, y);
      e.endFill();
      e.beginFill(65280);
      e.drawRect(2, 2, h * v, y);
      e.endFill();
      return e
    }
  }(c), e = qh(c), f = Mc(Ye.e(c));;) {
    if(G(e)) {
      var h = H(e);
      kh.p(h, og, $e, af) ? (h = d(c, h), e = L(e), f = Oc(f, th(h), h)) : e = L(e)
    }else {
      return S.d(c, Ye, qb(f))
    }
  }
}
;var Ri = D([af, Y([0, 0], !0), kf, Y([0, 0], !0), Vf, 0, xg, 0, tf, 15, yf, 8875054], !0);
function Si(c) {
  var d = se.i(M([Ri, c], 0)), e = tf.e(d);
  c = Fg * e * e;
  var f = af.e(d), h = P.d(f, 0, null), f = P.d(f, 1, null), k = yf.e(d), d = nh.i(M([dh(Y([h, f], !0)), eh(xg.e(d)), ch(Y([0, 0], !0), kf.e(d), Gg, 0, Vf.e(d), Gg), hh(c), D([Z, lf], !0), ti(0.25 * Fg * (Ig.c ? Ig.c(e, 4) : Ig.call(null, e, 4))), gh.c(Y([h - e, f - e], !0), Y([h + e, f + e], !0)), Gh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(k);
    c.drawCircle(0, 0, e);
    c.endFill();
    return c
  }())], 0));
  return 50 > c ? lh(d, fh.e(100)) : lh(lh(d, vi.j()), Mi.e(0.5 * Fg * e * e))
}
var Ti = function() {
  function c(c, d, e) {
    for(;;) {
      if(1 > d) {
        return e
      }
      var l = oc.e(c);
      c -= l;
      d -= 1;
      e = Qb.c(e, l)
    }
  }
  function d(c, d) {
    return e.d(c, d, Bd)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}();
function Ui(c, d) {
  var e = $(d, xf), f = vh(d), h = 0 * f, k = f - h, l = Se(De.c(2, 5)), n = Ti.c(k, l), p = uh(d), t = P.d(p, 0, null), s = P.d(p, 1, null), v = function() {
    return function(c, d, e, f, h, k, l, n, p) {
      return function ah(s) {
        return new zc(null, function(c) {
          return function() {
            for(;;) {
              var d = G(s);
              if(d) {
                if(dc(d)) {
                  var e = vb(d), f = O(e), h = new Bc(Array(f), 0);
                  a: {
                    for(var k = 0;;) {
                      if(k < f) {
                        C.c(e, k);
                        var l = Y([Se(De.c(c.$, c.S)), Se(De.c(c.da, c.ca))], !0);
                        h.add(l);
                        k += 1
                      }else {
                        e = !0;
                        break a
                      }
                    }
                    e = void 0
                  }
                  return e ? Fc(h.ka(), ah(wb(d))) : Fc(h.ka(), null)
                }
                H(d);
                return N(Y([Se(De.c(c.$, c.S)), Se(De.c(c.da, c.ca))], !0), ah(I(d)))
              }
              return null
            }
          }
        }(c, d, e, f, h, k, l, n, p), null, null)
      }
    }(e, f, h, k, l, n, p, t, s)(De.e(l))
  }(), y = X.c(function() {
    return function(c) {
      return ui(d, c)
    }
  }(e, f, h, k, l, n, p, t, s, v), v), v = X.p(function() {
    return function(c, e, f) {
      return Si(D([yf, yg(), kf, e, Vf, $(d, ff).T, tf, Jg.e ? Jg.e(f / Fg) : Jg.call(null, f / Fg), af, c], !0))
    }
  }(e, f, h, k, l, n, p, t, s, v, y), v, y, n), y = S.d(c, Ye, Tb.c(Ye.e(c), th(d)));
  return wh(y, v)
}
function Vi(c) {
  return U.d(Ui, c, gd(function(c) {
    return 1 > of.e($(c, gf))
  }, gd(function(c) {
    return kh.d(c, lf, gf)
  }, qh(c))))
}
;var Wi = 0;
function Xi() {
}
q = Xi.prototype;
q.key = 0;
q.Pa = !1;
q.bb = !1;
q.init = function(c, d, e, f, h, k) {
  if("function" == u(c)) {
    this.Xb = !0
  }else {
    if(c && c.handleEvent && "function" == u(c.handleEvent)) {
      this.Xb = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ha = c;
  this.$b = d;
  this.src = e;
  this.type = f;
  this.capture = !!h;
  this.Hb = k;
  this.bb = !1;
  this.key = ++Wi;
  this.Pa = !1
};
q.handleEvent = function(c) {
  return this.Xb ? this.Ha.call(this.Hb || this.src, c) : this.Ha.handleEvent.call(this.Ha, c)
};
var Yi = {}, Zi = {}, $i = {}, aj = {};
function bj(c, d, e, f, h) {
  if("array" == u(d)) {
    for(var k = 0;k < d.length;k++) {
      bj(c, d[k], e, f, h)
    }
  }else {
    a: {
      if(!d) {
        throw Error("Invalid event type");
      }
      f = !!f;
      var l = Zi;
      d in l || (l[d] = {ra:0, ma:0});
      l = l[d];
      f in l || (l[f] = {ra:0, ma:0}, l.ra++);
      var l = l[f], k = ea(c), n;
      l.ma++;
      if(l[k]) {
        n = l[k];
        for(var p = 0;p < n.length;p++) {
          if(l = n[p], l.Ha == e && l.Hb == h) {
            if(l.Pa) {
              break
            }
            n[p].bb = !1;
            c = n[p];
            break a
          }
        }
      }else {
        n = l[k] = [], l.ra++
      }
      p = cj();
      l = new Xi;
      l.init(e, p, c, d, f, h);
      l.bb = !1;
      p.src = c;
      p.Ha = l;
      n.push(l);
      $i[k] || ($i[k] = []);
      $i[k].push(l);
      c.addEventListener ? c != ca && c.Vb || c.addEventListener(d, p, f) : c.attachEvent(d in aj ? aj[d] : aj[d] = "on" + d, p);
      c = l
    }
    Yi[c.key] = c
  }
}
function cj() {
  var c = dj, d = mi ? function(e) {
    return c.call(d.src, d.Ha, e)
  } : function(e) {
    e = c.call(d.src, d.Ha, e);
    if(!e) {
      return e
    }
  };
  return d
}
function ej(c, d, e, f, h) {
  if("array" == u(d)) {
    for(var k = 0;k < d.length;k++) {
      ej(c, d[k], e, f, h)
    }
  }else {
    f = !!f;
    a: {
      k = Zi;
      if(d in k && (k = k[d], f in k && (k = k[f], c = ea(c), k[c]))) {
        c = k[c];
        break a
      }
      c = null
    }
    if(c) {
      for(k = 0;k < c.length;k++) {
        if(c[k].Ha == e && c[k].capture == f && c[k].Hb == h) {
          fj(c[k].key);
          break
        }
      }
    }
  }
}
function fj(c) {
  var d = Yi[c];
  if(d && !d.Pa) {
    var e = d.src, f = d.type, h = d.$b, k = d.capture;
    e.removeEventListener ? e != ca && e.Vb || e.removeEventListener(f, h, k) : e.detachEvent && e.detachEvent(f in aj ? aj[f] : aj[f] = "on" + f, h);
    e = ea(e);
    if($i[e]) {
      var h = $i[e], l = qa(h, d);
      0 <= l && oa.splice.call(h, l, 1);
      0 == h.length && delete $i[e]
    }
    d.Pa = !0;
    if(d = Zi[f][k][e]) {
      d.Yb = !0, gj(f, k, e, d)
    }
    delete Yi[c]
  }
}
function gj(c, d, e, f) {
  if(!f.fb && f.Yb) {
    for(var h = 0, k = 0;h < f.length;h++) {
      f[h].Pa ? f[h].$b.src = null : (h != k && (f[k] = f[h]), k++)
    }
    f.length = k;
    f.Yb = !1;
    0 == k && (delete Zi[c][d][e], Zi[c][d].ra--, 0 == Zi[c][d].ra && (delete Zi[c][d], Zi[c].ra--), 0 == Zi[c].ra && delete Zi[c])
  }
}
function hj(c, d, e, f, h) {
  var k = 1;
  d = ea(d);
  if(c[d]) {
    var l = --c.ma, n = c[d];
    n.fb ? n.fb++ : n.fb = 1;
    try {
      for(var p = n.length, t = 0;t < p;t++) {
        var s = n[t];
        s && !s.Pa && (k &= !1 !== ij(s, h))
      }
    }finally {
      c.ma = Math.max(l, c.ma), n.fb--, gj(e, f, d, n)
    }
  }
  return Boolean(k)
}
function ij(c, d) {
  c.bb && fj(c.key);
  return c.handleEvent(d)
}
function dj(c, d) {
  if(c.Pa) {
    return!0
  }
  var e = c.type, f = Zi;
  if(!(e in f)) {
    return!0
  }
  var f = f[e], h, k;
  if(!mi) {
    var l;
    if(!(l = d)) {
      a: {
        l = ["window", "event"];
        for(var n = ca;h = l.shift();) {
          if(null != n[h]) {
            n = n[h]
          }else {
            l = null;
            break a
          }
        }
        l = n
      }
    }
    h = l;
    l = !0 in f;
    n = !1 in f;
    if(l) {
      if(0 > h.keyCode || void 0 != h.returnValue) {
        return!0
      }
      a: {
        var p = !1;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(t) {
            p = !0
          }
        }
        if(p || void 0 == h.returnValue) {
          h.returnValue = !0
        }
      }
    }
    p = new si;
    p.init(h, this);
    h = !0;
    try {
      if(l) {
        for(var s = [], v = p.currentTarget;v;v = v.parentNode) {
          s.push(v)
        }
        k = f[!0];
        k.ma = k.ra;
        for(var y = s.length - 1;!p.Ua && 0 <= y && k.ma;y--) {
          p.currentTarget = s[y], h &= hj(k, s[y], e, !0, p)
        }
        if(n) {
          for(k = f[!1], k.ma = k.ra, y = 0;!p.Ua && y < s.length && k.ma;y++) {
            p.currentTarget = s[y], h &= hj(k, s[y], e, !1, p)
          }
        }
      }else {
        h = ij(c, p)
      }
    }finally {
      s && (s.length = 0)
    }
    return h
  }
  e = new si(d, this);
  return h = ij(c, e)
}
;function jj() {
  oi.call(this)
}
la(jj, oi);
q = jj.prototype;
q.Vb = !0;
q.Zb = null;
q.addEventListener = function(c, d, e, f) {
  bj(this, c, d, e, f)
};
q.removeEventListener = function(c, d, e, f) {
  ej(this, c, d, e, f)
};
q.dispatchEvent = function(c) {
  var d = c.type || c, e = Zi;
  if(d in e) {
    if(da(c)) {
      c = new qi(c, this)
    }else {
      if(c instanceof qi) {
        c.target = c.target || this
      }else {
        var f = c;
        c = new qi(d, this);
        sa(c, f)
      }
    }
    var f = 1, h, e = e[d], d = !0 in e, k;
    if(d) {
      h = [];
      for(k = this;k;k = k.Zb) {
        h.push(k)
      }
      k = e[!0];
      k.ma = k.ra;
      for(var l = h.length - 1;!c.Ua && 0 <= l && k.ma;l--) {
        c.currentTarget = h[l], f &= hj(k, h[l], c.type, !0, c) && !1 != c.gb
      }
    }
    if(!1 in e) {
      if(k = e[!1], k.ma = k.ra, d) {
        for(l = 0;!c.Ua && l < h.length && k.ma;l++) {
          c.currentTarget = h[l], f &= hj(k, h[l], c.type, !1, c) && !1 != c.gb
        }
      }else {
        for(h = this;!c.Ua && h && k.ma;h = h.Zb) {
          c.currentTarget = h, f &= hj(k, h, c.type, !1, c) && !1 != c.gb
        }
      }
    }
    c = Boolean(f)
  }else {
    c = !0
  }
  return c
};
var kj = function() {
  function c(c, d) {
    return D([Z, Yf, Qf, c, ef, d], !0)
  }
  function d(c) {
    return e.c(c, 0)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}();
function lj(c) {
  var d = fg.e($(c, xg)), e = $(c, xf), f = e.$, e = e.S, d = Rg(d), e = Mg(uh(c), Pg(e - f, d)), f = P.d(e, 0, null), e = P.d(e, 1, null), d = Pg(5, d);
  return nh.i(M([dh(Y([f, e], !0)), D([Z, Tf], !0), vi.j(), ch(Y([0, 0], !0), Mg(d, $(c, ff).O), Gg, 0, 0, Gg), fh.e(60), gh.c(Y([f - 2, e - 2], !0), Y([f + 2, e + 2], !0)), Gh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(65280);
    c.drawCircle(0, 0, 2);
    c.endFill();
    return c
  }())], 0))
}
function mj(c) {
  for(var d = function() {
    return function(c, d) {
      var e = $(d, Yf);
      return lh(d, S.d(e, ef, nc(ef.e(e) - 1, Qf.e(e))))
    }
  }(c), e = qh(c), f = Mc(Ye.e(c));;) {
    if(G(e)) {
      var h = H(e);
      kh.c(h, Yf) ? (h = d(c, h), e = L(e), f = Oc(f, th(h), h)) : e = L(e)
    }else {
      return S.d(c, Ye, qb(f))
    }
  }
}
function nj(c, d) {
  return wh(S.d(c, Ye, Tb.c(Ye.e(c), th(d))), X.c(function(c) {
    var d = Uf.c($(c, Uf), 0);
    return lh(c, D([Z, Uf, Uf, 100 + d], !0))
  }, gd(Tc, X.c(function(d) {
    return oh(c, d)
  }, ng.e($(d, uf))))))
}
function oj(c) {
  return U.d(nj, c, gd(function(c) {
    return G(ng.e($(c, uf)))
  }, gd(function(c) {
    return kh.d(c, Tf, uf)
  }, qh(c))))
}
;var pj = function() {
  function c(c) {
    var d = D([Xe, D([hf, 800, wg, 500], !0)], !0);
    return U.d(ph, d, X.c(function() {
      var c = rh(d), e = sh(d), c = Se(De.e(c)), e = Se(De.e(e)), f = Se(De.c(10, 25)), p = Se(De.c(-5, 5)), t = Se(De.c(-5, 5)), s = 0.01 * (oc.e(4 * Fg) - 2 * Fg), v = 0.01 * (oc.e(4 * Fg) - 2 * Fg);
      return Si(D([yf, yg(), af, Y([c, e], !0), kf, Y([p, t], !0), Vf, s, xg, v, tf, f], !0))
    }, De.e(c)))
  }
  function d() {
    return e.e(15)
  }
  var e = null, e = function(e) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = d;
  e.e = c;
  return e
}();
function qj() {
  var c = pj.j(), d = rh(c) / 2, e = sh(c) / 2, d = nh.i(M([dh(Y([d, e], !0)), ch(Y([0, 0], !0), Y([0, 0], !0), 10, 0, 0, Gg), eh(0), vi.j(), Mi.e(1E4), D.c ? D.c([Z, vf], !0) : D.call(null, [Z, vf], !0), gh.c(Y([rh(c) - 10, sh(c) - 10], !0), Y([rh(c) + 10, sh(c) + 10], !0)), hh(100 * Fg), kj.e(10), ti(0.25 * Fg * (Ig.c ? Ig.c(10, 4) : Ig.call(null, 10, 4))), Gh(function() {
    var c = new PIXI.Graphics;
    c.beginFill(255);
    c.moveTo(10, 0);
    c.lineTo(-6, -6);
    c.lineTo(-6, 6);
    c.endFill();
    return c
  }())], 0)), e = nh.i(M([dh(Y([10, sh(c) - 30], !0)), Gh(new PIXI.Graphics), D([Z, Zf, Zf, 2], !0), Ni(th(d), rh(c) - 20)], 0));
  return ph(ph(c, d), e)
}
;function rj(c, d) {
  oi.call(this);
  this.eb = c || 1;
  this.Jb = d || ca;
  this.jb = ja(this.oc, this);
  this.Ib = ka()
}
la(rj, jj);
rj.prototype.enabled = !1;
rj.prototype.hb = null;
rj.prototype.oc = function() {
  if(this.enabled) {
    var c = ka() - this.Ib;
    0 < c && c < 0.8 * this.eb ? this.hb = this.Jb.setTimeout(this.jb, this.eb - c) : (this.dispatchEvent(sj), this.enabled && (this.hb = this.Jb.setTimeout(this.jb, this.eb), this.Ib = ka()))
  }
};
rj.prototype.start = function() {
  this.enabled = !0;
  this.hb || (this.hb = this.Jb.setTimeout(this.jb, this.eb), this.Ib = ka())
};
var sj = "tick";
function tj(c) {
  return Array.prototype.slice.call(c)
}
;var uj = we(["svg", null, "line", null]), vj = {};
function wj(c) {
  if(c ? c.Da : c) {
    return c.Da(c)
  }
  var d;
  d = wj[u(null == c ? null : c)];
  if(!d && (d = wj._, !d)) {
    throw A("PElement.-elem", c);
  }
  return d.call(null, c)
}
function xj(c, d) {
  var e = c.indexOf("#", d), f = c.indexOf(".", d), h = Math.min(e, f);
  return 0 > h ? Math.max(e, f) : h
}
function yj(c) {
  var d = ye(c), e = xj(d, 0);
  c = 0 < e ? d.substring(0, e) : 0 === e ? "div" : z ? d : null;
  c = w(uj.e ? uj.e(c) : uj.call(null, c)) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c);
  if(0 <= e) {
    for(d = d.substring(e);;) {
      var e = xj(d, 1), f = 0 <= e ? d.substring(0, e) : d, h = f.charAt(0);
      if(Ib.c("#", h)) {
        c.setAttribute("id", f.substring(1))
      }else {
        if(Ib.c(".", h)) {
          Kh.c(c, f.substring(1))
        }else {
          if(z) {
            throw Error([B("No matching clause: "), B(f.charAt(0))].join(""));
          }
        }
      }
      if(0 <= e) {
        d = d.substring(e)
      }else {
        break
      }
    }
  }
  return c
}
var zj = function() {
  function c(c, d) {
    if(d ? w(w(null) ? null : d.Aa) || (d.Gb ? 0 : x(vj, d)) : x(vj, d)) {
      return c.appendChild(wj(d)), c
    }
    if(gc(d)) {
      for(var k = G(d), l = null, n = 0, p = 0;;) {
        if(p < n) {
          var t = l.I(null, p);
          e.c(c, t);
          p += 1
        }else {
          if(k = G(k)) {
            l = k, dc(l) ? (k = vb(l), p = wb(l), l = k, n = O(k), k = p) : (k = H(l), e.c(c, k), k = L(l), l = null, n = 0), p = 0
          }else {
            break
          }
        }
      }
      return c
    }
    if(null == d) {
      k = c
    }else {
      if(z) {
        throw[B("Don't know how to make node from: "), B(Me.i(M([d], 0)))].join("");
      }
      k = null
    }
    return k
  }
  function d(c) {
    return e.c(document.createDocumentFragment(), c)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}();
function Jh(c) {
  return(c ? w(w(null) ? null : c.Aa) || (c.Gb ? 0 : x(vj, c)) : x(vj, c)) ? wj(c) : zj.e(c)
}
vj.string = !0;
wj.string = function(c) {
  return c instanceof V ? yj(c) : document.createTextNode("" + B(c))
};
vj.number = !0;
wj.number = function(c) {
  return document.createTextNode("" + B(c))
};
wd.prototype.Aa = !0;
wd.prototype.Da = function() {
  for(var c = P.d(this, 0, null), d = P.d(this, 1, null), e = rc(this, 2), c = yj(c), f = bc(d) && !(d ? w(w(null) ? null : d.Aa) || (d.Gb ? 0 : x(vj, d)) : x(vj, d)) ? d : null, d = w(f) ? e : N(d, e), e = G(f), f = null, h = 0, k = 0;;) {
    if(k < h) {
      var l = f.I(null, k), n = P.d(l, 0, null), l = P.d(l, 1, null), p = n;
      if(Ib.c(vg, p)) {
        for(var n = G(l), l = null, t = p = 0;;) {
          if(t < p) {
            var s = l.I(null, t);
            Kh.c(c, s);
            t += 1
          }else {
            if(n = G(n)) {
              l = n, dc(l) ? (n = vb(l), t = wb(l), l = n, p = O(n), n = t) : (n = H(l), Kh.c(c, n), n = L(l), l = null, p = 0), t = 0
            }else {
              break
            }
          }
        }
      }else {
        Ib.c(rf, p) ? Kh.c(c, l) : z && Mh.d(c, n, l)
      }
      k += 1
    }else {
      if(e = G(e)) {
        if(dc(e)) {
          h = vb(e), e = wb(e), f = h, h = O(h)
        }else {
          h = H(e);
          f = P.d(h, 0, null);
          h = P.d(h, 1, null);
          k = f;
          if(Ib.c(vg, k)) {
            for(f = G(h), h = null, n = k = 0;;) {
              if(n < k) {
                l = h.I(null, n), Kh.c(c, l), n += 1
              }else {
                if(f = G(f)) {
                  h = f, dc(h) ? (f = vb(h), n = wb(h), h = f, k = O(f), f = n) : (f = H(h), Kh.c(c, f), f = L(h), h = null, k = 0), n = 0
                }else {
                  break
                }
              }
            }
          }else {
            Ib.c(rf, k) ? Kh.c(c, h) : z && Mh.d(c, f, h)
          }
          e = L(e);
          f = null;
          h = 0
        }
        k = 0
      }else {
        break
      }
    }
  }
  c.appendChild(Jh(d));
  return c
};
SVGElement.prototype.Aa = !0;
SVGElement.prototype.Da = function() {
  return this
};
Document.prototype.Aa = !0;
Document.prototype.Da = function() {
  return this
};
Text.prototype.Aa = !0;
Text.prototype.Da = function() {
  return this
};
DocumentFragment.prototype.Aa = !0;
DocumentFragment.prototype.Da = function() {
  return this
};
HTMLElement.prototype.Aa = !0;
HTMLElement.prototype.Da = function() {
  return this
};
try {
  Window.prototype.Aa = !0, Window.prototype.Da = function() {
    return this
  }
}catch(Aj) {
  if(Aj instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)")
  }else {
    if(z) {
      throw Aj;
    }
  }
}
;var Bj = function() {
  function c(c, d) {
    var e = Jh(c);
    e.appendChild(Jh(d));
    return e
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      c = Jh(c);
      f = G(N(f, h));
      h = null;
      for(var p = 0, t = 0;;) {
        if(t < p) {
          var s = h.I(null, t);
          d.c(c, s);
          t += 1
        }else {
          if(f = G(f)) {
            h = f, dc(h) ? (f = vb(h), t = wb(h), h = f, p = O(f), f = t) : (f = H(h), d.c(c, f), f = L(h), h = null, p = 0), t = 0
          }else {
            break
          }
        }
      }
      return c
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = L(c);
      var f = H(c);
      c = I(c);
      return e(d, f, c)
    };
    c.i = e;
    return c
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      default:
        return e.i(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}(), Dj = function Cj(d) {
  return(null == d ? 0 : d ? d.m & 8 || d.tc || (d.m ? 0 : x(Ca, d)) : x(Ca, d)) ? zg.c(" ", X.c(Cj, d)) : "string" === typeof d || d instanceof V ? ye(d) : null
};
function Ej(c) {
  return Be(Tc, bd(function(c) {
    return c.parentNode
  }, Jh(c)))
}
var Fj = function() {
  function c(c, d) {
    var e = tj(Jh(Jh(c)).querySelectorAll(Dj(d)));
    return function(c) {
      return 0 <= e.indexOf(c)
    }
  }
  function d(c) {
    return e.c(document, c)
  }
  var e = null, e = function(e, h) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.c = c;
  return e
}(), Gj = function() {
  function c(c, d, e) {
    var l = Jh(c);
    c = Jh(d);
    return H(gd(Fj.c(l, e), Be(function(c) {
      return c !== l
    }, Ej(c))))
  }
  function d(c, d) {
    return H(gd(Fj.e(d), Ej(Jh(c))))
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.d = c;
  return e
}(), Hj = hd(Td, X.c(function(c) {
  var d = P.d(c, 0, null);
  c = P.d(c, 1, null);
  return Y([d, D([c, function(c) {
    return function(d) {
      var h = d.relatedTarget, k;
      k = d.mc;
      k = w(k) ? k : d.currentTarget;
      w(h) && (h = Jh(h), k = Jh(k), h = w(k.contains) ? k.contains(h) : w(k.compareDocumentPosition) ? 0 != (k.compareDocumentPosition(h) & 16) : null);
      return w(h) ? null : c.e ? c.e(d) : c.call(null, d)
    }
  }], !0)], !0)
}, D([gg, nf, Mf, Af], !0)));
function Ij(c, d, e) {
  return function(f) {
    var h = Gj.d(Jh(c), f.target, d);
    return w(w(h) ? va(Nh.c ? Nh.c(h, tg) : Nh.call(null, h, tg)) : h) ? (f.mc = h, e.e ? e.e(f) : e.call(null, f)) : null
  }
}
function Jj(c) {
  c = Jh(c).ic;
  return w(c) ? c : Td
}
var Kj = function() {
  function c(c, f, h) {
    var k = null;
    2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
    return d.call(this, c, f, k)
  }
  function d(c, d, h) {
    c = Jh(c);
    return c.ic = T.d(d, Jj(c), h)
  }
  c.n = 2;
  c.k = function(c) {
    var f = H(c);
    c = L(c);
    var h = H(c);
    c = I(c);
    return d(f, h, c)
  };
  c.i = d;
  return c
}();
function Lj(c) {
  return ac(c) ? Ee.c(function(c) {
    return Jh(H(c))
  }, I).call(null, c) : Y([Jh(c), null], !0)
}
var Mj = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h)
  }
  function d(c, d) {
    if(!Uc(O(d))) {
      throw Error([B("Assert failed: "), B(Me.i(M([xc(new Eb(null, "even?", "even?", -1543640034, null), xc(new Eb(null, "count", "count", -1545680184, null), new Eb(null, "type-fs", "type-fs", 1801297401, null)))], 0)))].join(""));
    }
    for(var h = Lj(c), k = P.d(h, 0, null), h = P.d(h, 1, null), l = G(id.c(2, d)), n = null, p = 0, t = 0;;) {
      if(t < p) {
        for(var s = n.I(null, t), v = P.d(s, 0, null), s = P.d(s, 1, null), v = G(Q.d(Hj, v, D([v, Tc], !0))), y = null, E = 0, K = 0;;) {
          if(K < E) {
            var R = y.I(null, K), pa = P.d(R, 0, null), R = P.d(R, 1, null), R = (w(h) ? Wc.d(Ij, k, h) : Tc).call(null, R.e ? R.e(s) : R.call(null, s));
            Kj.i(k, ld, M([Y([h, pa, s], !0), R], 0));
            w(k.addEventListener) ? k.addEventListener(ye(pa), R) : k.attachEvent(ye(pa), R);
            K += 1
          }else {
            if(v = G(v)) {
              dc(v) ? (E = vb(v), v = wb(v), y = E, E = O(E)) : (E = H(v), y = P.d(E, 0, null), E = P.d(E, 1, null), E = (w(h) ? Wc.d(Ij, k, h) : Tc).call(null, E.e ? E.e(s) : E.call(null, s)), Kj.i(k, ld, M([Y([h, y, s], !0), E], 0)), w(k.addEventListener) ? k.addEventListener(ye(y), E) : k.attachEvent(ye(y), E), v = L(v), y = null, E = 0), K = 0
            }else {
              break
            }
          }
        }
        t += 1
      }else {
        if(l = G(l)) {
          if(dc(l)) {
            p = vb(l), l = wb(l), n = p, p = O(p)
          }else {
            n = H(l);
            p = P.d(n, 0, null);
            n = P.d(n, 1, null);
            p = G(Q.d(Hj, p, D([p, Tc], !0)));
            t = null;
            for(v = s = 0;;) {
              if(v < s) {
                E = t.I(null, v), y = P.d(E, 0, null), E = P.d(E, 1, null), E = (w(h) ? Wc.d(Ij, k, h) : Tc).call(null, E.e ? E.e(n) : E.call(null, n)), Kj.i(k, ld, M([Y([h, y, n], !0), E], 0)), w(k.addEventListener) ? k.addEventListener(ye(y), E) : k.attachEvent(ye(y), E), v += 1
              }else {
                if(p = G(p)) {
                  dc(p) ? (s = vb(p), p = wb(p), t = s, s = O(s)) : (s = H(p), t = P.d(s, 0, null), s = P.d(s, 1, null), s = (w(h) ? Wc.d(Ij, k, h) : Tc).call(null, s.e ? s.e(n) : s.call(null, n)), Kj.i(k, ld, M([Y([h, t, n], !0), s], 0)), w(k.addEventListener) ? k.addEventListener(ye(t), s) : k.attachEvent(ye(t), s), p = L(p), t = null, s = 0), v = 0
                }else {
                  break
                }
              }
            }
            l = L(l);
            n = null;
            p = 0
          }
          t = 0
        }else {
          break
        }
      }
    }
    return c
  }
  c.n = 1;
  c.k = function(c) {
    var f = H(c);
    c = I(c);
    return d(f, c)
  };
  c.i = d;
  return c
}();
var Nj = D([38, rg, 40, pg, 37, $f, 39, Xf, 32, Wf], !0), Oj = hd(ve, qe(Nj)), Pj = Pe.e(Bd), Qj = Pe.e(ve);
function Rj(c, d) {
  var e = d.keyCode;
  return ic(Oj, e) ? (w(d.preventDefault) ? d.preventDefault() : d.returnValue = !1, Re.d(Pj, Qb, Y([c, Nj.e ? Nj.e(e) : Nj.call(null, e)], !0)), !1) : null
}
function Sj() {
  var c = Xa(Pj);
  Re.c(Qj, function(d) {
    return U.d(function(c, d) {
      var h = P.d(d, 0, null), k = P.d(d, 1, null);
      return Ib.c(h, Nf) ? Qb.c(c, k) : Ib.c(h, bg) ? Yb.c(c, k) : Ze ? c : null
    }, d, c)
  })
}
function Tj(c) {
  var d = Vg.c(Xa(Qj), hd(ve, gd(Tc, X.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return Ib.c(Nf, d) ? c : null
  }, Xa(Pj)))));
  Sj();
  Qe(Pj, Bd);
  return S.d(c, Ff, d)
}
Mj.i(document, M([bg, function(c) {
  return Rj(bg, c)
}], 0));
Mj.i(document, M([Nf, function(c) {
  return Rj(Nf, c)
}], 0));
var Uj = Pe.e(Td);
Re.c(Uj, function() {
  return qj()
});
var Vj = PIXI.autoDetectRenderer(rh(Xa(Uj)), sh(Xa(Uj)), null, !1, !0), Wj = new PIXI.Stage(0), Xj = function(c) {
  return hd(Td, X.c(function(d) {
    var e = new PIXI.DisplayObjectContainer;
    c.addChild(e);
    return Y([d, e], !0)
  }, De.e(3)))
}(Wj);
function Yj(c) {
  return Fe.e(X.c(function(d) {
    P.d(d, 0, null);
    d = P.d(d, 1, null).scale;
    d.x = c;
    return d.y = c
  }, Xj))
}
function Zj() {
  var c = Xa(Uj), d = window.innerWidth, e = window.innerHeight, f = rh(c), c = sh(c), c = f / c, e = 1 > c / (d / e) ? Y([e * c, e], !0) : Y([d, d / c], !0), d = P.d(e, 0, null), e = P.d(e, 1, null);
  Vj.resize(d, e);
  return Yj(d / f)
}
Zj();
w(window) && Mj.i(window, M([zf, Zj], 0));
var ak = function() {
  var c = Pe.e(D([qf, Td, eg, ve], !0));
  return function(d, e) {
    var f = Xa(c), h = qf.e(f), k = eg.e(f), l = gd(function() {
      return function(c) {
        return ic(c, $e)
      }
    }(f, h, k), qh(d)), f = hd(ve, X.c(th, l));
    Fe.e(X.c(function(c) {
      var d = Zf.c($(c, Zf), 1), d = Q.c(e, d);
      c = lg.e($(c, $e));
      return d.removeChild(c)
    }, X.c(function(c) {
      return oh(h, c)
    }, Xg.c(k, f))));
    Fe.e(X.c(function(c) {
      var d = Zf.c($(c, Zf), 1), d = Q.c(e, d);
      c = lg.e($(c, $e));
      return d.addChild(c)
    }, X.c(Wc.c(oh, d), Xg.c(f, k))));
    k = U.d(Hh, d, l);
    Qe(c, D([qf, k, eg, f], !0));
    return k
  }
}(), bk = Vj.view, ck = Jh(document.getElementById("content"));
ck.innerHTML = "";
Bj.c(ck, bk);
function dk(c) {
  c = mj(c);
  c = Tj(c);
  c = Bh(c);
  c = Fh(c);
  a: {
    b: {
      c = Dh(c);
      for(var d = qh(c), e = Mc(Ye.e(c));;) {
        if(G(d)) {
          var f = H(d), h = $(f, Yf), k = h, h = w(k) ? 0 === ef.e(h) && ic(f, mf) : k;
          w(h) ? (h = lj(f), d = L(d), e = Oc(Oc(e, th(h), h), th(f), Tb.c(f, mf))) : d = L(d)
        }else {
          c = S.d(c, Ye, qb(e));
          break b
        }
      }
      c = void 0
    }
    d = Ye.e(c);
    for(e = Mc(Ye.e(c));;) {
      if(G(d)) {
        if(f = H(d), k = H(L(f)), ic(k, ff)) {
          var h = c, l = $(k, ff), n = uh(k), p = l.acceleration, t = l.O, s = l.Z, v = void 0, y = w(t) ? Og(t) : 0, v = y > s ? y : s, s = l.aa, E = l.T, K = l.Y, y = fg.e($(k, xg)), t = Mg(t, p), t = Og(t) > v ? Pg(v, Tg(t)) : t, v = E + s, E = Hg.e ? Hg.e(v) : Hg.call(null, v), K = E > K ? v / E * K : v, n = Mg(t, n), h = Y([nc(P.c(n, 0), rh(h)), nc(P.c(n, 1), sh(h))], !0);
          h = mh(k, Y([ch(p, t, l.Z, s, K, l.Y), dh(h), eh(K + y)], !0));
          y = $(h, xf);
          w(y) && (k = uh(h), n = P.d(k, 0, null), s = P.d(k, 1, null), k = y.$, l = y.da, p = y.S, y = y.ca, n -= (k + p) / 2, s -= (l + y) / 2, h = lh(h, gh.p(k + n, l + s, p + n, y + s)));
          f = H(f);
          d = L(d);
          e = rb(e, f, h)
        }else {
          d = L(d)
        }
      }else {
        c = S.d(c, Ye, qb(e));
        break a
      }
    }
    c = void 0
  }
  c = Ji(c);
  c = oj(c);
  c = Li(c);
  c = Oi(c);
  c = Pi(c);
  c = Vi(c);
  c = Qi(c);
  return zh(c)
}
var ek = new rj(16);
ek.start();
bj(ek, sj, function() {
  return Re.c(Uj, dk)
});
requestAnimFrame(function fk() {
  ak.c ? ak.c(Xa(Uj), Xj) : ak.call(null, Xa(Uj), Xj);
  Vj.render(Wj);
  return requestAnimFrame(fk)
});

})();
