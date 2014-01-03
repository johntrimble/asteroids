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
  return c[u(null == d ? null : d)] ? !0 : c._ ? !0 : y ? !1 : null
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
function Fb(c, d, e, f, h) {
  this.Oa = c;
  this.name = d;
  this.Qa = e;
  this.Ia = f;
  this.ia = h;
  this.m = 2154168321;
  this.A = 4096
}
q = Fb.prototype;
q.G = function(c, d) {
  return jb(d, this.Qa)
};
q.H = function() {
  var c = this.Ia;
  return null != c ? c : this.Ia = c = Gb.c ? Gb.c(F.e ? F.e(this.Oa) : F.call(null, this.Oa), F.e ? F.e(this.name) : F.call(null, this.name)) : Gb.call(null, F.e ? F.e(this.Oa) : F.call(null, this.Oa), F.e ? F.e(this.name) : F.call(null, this.name))
};
q.N = function(c, d) {
  return new Fb(this.Oa, this.name, this.Qa, this.Ia, d)
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
  return d instanceof Fb ? this.Qa === d.Qa : !1
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
  if(y) {
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
function K(c) {
  return null == c ? null : c && (c.m & 128 || c.cb) ? c.ea(null) : G(I(c))
}
var Ib = function() {
  function c(c, d) {
    return c === d || eb(c, d)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      for(;;) {
        if(d.c(c, f)) {
          if(K(h)) {
            c = f, f = H(h), h = K(h)
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
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
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
  return M.c ? M.c(d, this) : M.call(null, d, this)
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
}(), L = function() {
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
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      for(;;) {
        if(w(h)) {
          c = d.c(c, f), f = H(h), h = K(h)
        }else {
          return d.c(c, f)
        }
      }
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}();
function N(c) {
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
            if(y) {
              a: {
                c = G(c);
                for(var d = 0;;) {
                  if(Lb(c)) {
                    c = d + Aa(c);
                    break a
                  }
                  c = K(c);
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
        c = K(c), d -= 1
      }else {
        return y ? e : null
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
        var e = K(c), l = d - 1;
        c = e;
        d = l
      }else {
        if(y) {
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
      if(y) {
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
    if(y) {
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
    return null != c ? c && (c.m & 256 || c.Ob) ? c.Q(null, d, e) : c instanceof Array ? d < c.length ? c[d] : e : "string" === typeof c ? d < c.length ? c[d] : e : x(Ja, c) ? Ka.d(c, d, e) : y ? e : null : e
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
      3 < arguments.length && (t = L(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, d, f, n, t)
    }
    function e(c, f, h, p) {
      for(;;) {
        if(c = d.d(c, f, h), w(p)) {
          f = H(p), h = H(K(p)), p = K(K(p))
        }else {
          return c
        }
      }
    }
    c.n = 3;
    c.k = function(c) {
      var d = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
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
        return e.i(d, h, k, L(arguments, 3))
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
      2 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 2), 0));
      return f.call(this, c, e, n)
    }
    function f(d, e, f) {
      for(;;) {
        if(d = c.c(d, e), w(f)) {
          e = H(f), f = K(f)
        }else {
          return d
        }
      }
    }
    d.n = 2;
    d.k = function(c) {
      var d = H(c);
      c = K(c);
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
        return d.i(c, f, L(arguments, 2))
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
    }, ua.Ub = !0, ua.Tb = "cljs.core/t7039", ua.hc = function(d) {
      return jb(d, "cljs.core/t7039")
    }, ua.prototype.call = function() {
      function d(f, l) {
        f = this;
        var n = null;
        1 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 1), 0));
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
        0 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 0), 0));
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
      2 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 2), 0));
      return f.call(this, c, e, n)
    }
    function f(d, e, f) {
      for(;;) {
        if(d = c.c(d, e), w(f)) {
          e = H(f), f = K(f)
        }else {
          return d
        }
      }
    }
    d.n = 2;
    d.k = function(c) {
      var d = H(c);
      c = K(c);
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
        return d.i(c, f, L(arguments, 2))
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
            c = y ? fb(c) : null
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
  if(y) {
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
    var k = N(c), l = N(d);
    return k < l ? -1 : k > l ? 1 : y ? e.p(c, d, k, 0) : null
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
        d = c.c ? c.c(d, H(e)) : c.call(null, d, H(e)), e = K(e)
      }else {
        return d
      }
    }
  }
  function d(c, d) {
    var e = G(d);
    return e ? U.d ? U.d(c, H(e), K(e)) : U.call(null, c, H(e), K(e)) : c.j ? c.j() : c.call(null)
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
    return e && (e.m & 524288 || e.fc) ? e.ga(null, c, d) : e instanceof Array ? Kb.d(e, c, d) : "string" === typeof e ? Kb.d(e, c, d) : x(bb, e) ? cb.d(e, c, d) : y ? lc.d(c, d, e) : null
  }
  function d(c, d) {
    return d && (d.m & 524288 || d.fc) ? d.fa(null, c) : d instanceof Array ? Kb.c(d, c) : "string" === typeof d ? Kb.c(d, c) : x(bb, d) ? cb.c(d, c) : y ? lc.c(c, d) : null
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
      e -= 1, f = K(f)
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
      1 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, d, n)
    }
    function e(c, f) {
      for(var h = new ta(d.e(c)), p = f;;) {
        if(w(p)) {
          h = h.append(d.e(H(p))), p = K(p)
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
        return e.i(d, L(arguments, 1))
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
        e = K(e), f = K(f)
      }else {
        return y ? !1 : null
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
    for(c = K(c);;) {
      if(null == c) {
        return d
      }
      d = Gb(d, F(H(c)));
      c = K(c)
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
      c = K(c)
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
    0 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 0), 0));
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
function M(c, d) {
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
  return null == this.J ? null : K(this.J)
};
q.K = function(c, d) {
  return M(d, this)
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
  return M(d, this)
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
      d.push(H(c)), c = K(c)
    }else {
      return d
    }
  }
}
function Hc(c, d) {
  if(Lb(c)) {
    return N(c)
  }
  for(var e = c, f = d, h = 0;;) {
    if(0 < f && G(e)) {
      e = K(e), f -= 1, h += 1
    }else {
      return h
    }
  }
}
var Jc = function Ic(d) {
  return null == d ? null : null == K(d) ? G(H(d)) : y ? M(H(d), Ic(K(d))) : null
}, Kc = function() {
  function c(c, d) {
    return new zc(null, function() {
      var e = G(c);
      return e ? dc(e) ? Fc(vb(e), f.c(wb(e), d)) : M(H(e), f.c(I(e), d)) : d
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
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, k)
    }
    function d(c, e, h) {
      return function v(c, d) {
        return new zc(null, function() {
          var e = G(c);
          return e ? dc(e) ? Fc(vb(e), v(wb(e), d)) : M(H(e), v(I(e), d)) : w(d) ? v(H(d), K(d)) : null
        }, null, null)
      }(f.c(c, e), h)
    }
    c.n = 2;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
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
        return h.i(f, l, L(arguments, 2))
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
    return M(c, M(d, M(e, f)))
  }
  function d(c, d, e) {
    return M(c, M(d, e))
  }
  var e = null, f = function() {
    function c(e, f, h, t, s) {
      var v = null;
      4 < arguments.length && (v = L(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, t, v)
    }
    function d(c, e, f, h, k) {
      return M(c, M(e, M(f, M(h, Jc(k)))))
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
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
        return M(e, k);
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, n);
      default:
        return f.i(e, k, l, n, L(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 4;
  e.k = f.k;
  e.e = function(c) {
    return G(c)
  };
  e.c = function(c, d) {
    return M(c, d)
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
  var s = Ga(v), z = Ha(v);
  if(10 === d) {
    return c.pb ? c.pb(e, f, h, k, l, c, n, p, t, s) : c.pb ? c.pb(e, f, h, k, l, c, n, p, t, s) : c.call(null, e, f, h, k, l, c, n, p, t, s)
  }
  var v = Ga(z), E = Ha(z);
  if(11 === d) {
    return c.qb ? c.qb(e, f, h, k, l, c, n, p, t, s, v) : c.qb ? c.qb(e, f, h, k, l, c, n, p, t, s, v) : c.call(null, e, f, h, k, l, c, n, p, t, s, v)
  }
  var z = Ga(E), O = Ha(E);
  if(12 === d) {
    return c.rb ? c.rb(e, f, h, k, l, c, n, p, t, s, v, z) : c.rb ? c.rb(e, f, h, k, l, c, n, p, t, s, v, z) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z)
  }
  var E = Ga(O), R = Ha(O);
  if(13 === d) {
    return c.sb ? c.sb(e, f, h, k, l, c, n, p, t, s, v, z, E) : c.sb ? c.sb(e, f, h, k, l, c, n, p, t, s, v, z, E) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E)
  }
  var O = Ga(R), pa = Ha(R);
  if(14 === d) {
    return c.tb ? c.tb(e, f, h, k, l, c, n, p, t, s, v, z, E, O) : c.tb ? c.tb(e, f, h, k, l, c, n, p, t, s, v, z, E, O) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O)
  }
  var R = Ga(pa), Pa = Ha(pa);
  if(15 === d) {
    return c.ub ? c.ub(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R) : c.ub ? c.ub(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O, R)
  }
  var pa = Ga(Pa), db = Ha(Pa);
  if(16 === d) {
    return c.vb ? c.vb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa) : c.vb ? c.vb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa)
  }
  var Pa = Ga(db), Eb = Ha(db);
  if(17 === d) {
    return c.wb ? c.wb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa) : c.wb ? c.wb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa)
  }
  var db = Ga(Eb), Ad = Ha(Eb);
  if(18 === d) {
    return c.xb ? c.xb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db) : c.xb ? c.xb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db)
  }
  Eb = Ga(Ad);
  Ad = Ha(Ad);
  if(19 === d) {
    return c.yb ? c.yb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db, Eb) : c.yb ? c.yb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db, Eb) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db, Eb)
  }
  var lf = Ga(Ad);
  Ha(Ad);
  if(20 === d) {
    return c.zb ? c.zb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db, Eb, lf) : c.zb ? c.zb(e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db, Eb, lf) : c.call(null, e, f, h, k, l, c, n, p, t, s, v, z, E, O, R, pa, Pa, db, Eb, lf)
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
      var O = null;
      5 < arguments.length && (O = L(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, O)
    }
    function d(c, e, f, h, k, l) {
      e = M(e, M(f, M(h, M(k, Jc(l)))));
      f = c.n;
      return c.k ? (h = Hc(e, f + 1), h <= f ? Pc(c, h, e) : c.k(e)) : c.apply(c, Gc(e))
    }
    c.n = 5;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
      var k = H(c);
      c = K(c);
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
        return k.i(h, n, p, t, s, L(arguments, 5))
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
      var e = c, f = K(d);
      c = e;
      d = f
    }else {
      return y ? !1 : null
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
      c = K(c)
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
        2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
        return e.call(this, c, f, p)
      }
      function e(d, f, h) {
        return va(T.p(c, d, f, h))
      }
      d.n = 2;
      d.k = function(c) {
        var d = H(c);
        c = K(c);
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
          return e.i(d, h, L(arguments, 2))
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
        0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
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
        0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
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
        0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
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
      var z = null;
      4 < arguments.length && (z = L(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, z)
    }
    function d(c, e, f, h, k) {
      return function() {
        function d(c) {
          var e = null;
          0 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 0), 0));
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
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
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
        return h.i(f, l, n, p, L(arguments, 4))
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
      return t && s && v ? M(c.d ? c.d(H(t), H(s), H(v)) : c.call(null, H(t), H(s), H(v)), f.p(c, I(t), I(s), I(v))) : null
    }, null, null)
  }
  function d(c, d, e) {
    return new zc(null, function() {
      var h = G(d), t = G(e);
      return h && t ? M(c.c ? c.c(H(h), H(t)) : c.call(null, H(h), H(t)), f.d(c, I(h), I(t))) : null
    }, null, null)
  }
  function e(c, d) {
    return new zc(null, function() {
      var e = G(d);
      if(e) {
        if(dc(e)) {
          for(var h = vb(e), t = N(h), s = new Bc(Array(t), 0), v = 0;;) {
            if(v < t) {
              var z = c.e ? c.e(C.c(h, v)) : c.call(null, C.c(h, v));
              s.add(z);
              v += 1
            }else {
              break
            }
          }
          return Fc(s.ka(), f.c(c, wb(e)))
        }
        return M(c.e ? c.e(H(e)) : c.call(null, H(e)), f.c(c, I(e)))
      }
      return null
    }, null, null)
  }
  var f = null, h = function() {
    function c(e, f, h, k, v) {
      var z = null;
      4 < arguments.length && (z = L(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, k, z)
    }
    function d(c, e, h, k, l) {
      return f.c(function(d) {
        return T.c(c, d)
      }, function E(c) {
        return new zc(null, function() {
          var d = f.c(G, c);
          return Rc(Tc, d) ? M(f.c(H, d), E(f.c(I, d))) : null
        }, null, null)
      }(Qb.i(l, k, L([h, e], 0))))
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
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
        return h.i(f, l, n, p, L(arguments, 4))
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
      return f ? M(H(f), Xc(d - 1, I(f))) : null
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
      return M(c, e.e(c))
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
  return M(e, new zc(null, function() {
    return ad(d, d.e ? d.e(e) : d.call(null, e))
  }, null, null))
}, cd = function() {
  function c(c, e) {
    return new zc(null, function() {
      var k = G(c), l = G(e);
      return k && l ? M(H(k), M(H(l), d.c(I(k), I(l)))) : null
    }, null, null)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      return new zc(null, function() {
        var e = X.c(G, Qb.i(h, f, L([c], 0)));
        return Rc(Tc, e) ? Kc.c(X.c(H, e), T.c(d, X.c(I, e))) : null
      }, null, null)
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
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
      return k ? M(H(k), e(I(k), h)) : G(h) ? e(H(h), I(h)) : null
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
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, p)
    }
    function d(c, e, f) {
      return dd(T.p(X, c, e, f))
    }
    c.n = 2;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
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
        for(var h = vb(f), k = N(h), l = new Bc(Array(k), 0), n = 0;;) {
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
      return w(d.e ? d.e(h) : d.call(null, h)) ? M(h, fd(d, f)) : fd(d, f)
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
        return c === N(t) ? M(t, f.p(c, d, e, Zc(d, p))) : Da(J, Yc(c, Kc.c(t, e)))
      }
      return null
    }, null, null)
  }
  function d(c, d, e) {
    return new zc(null, function() {
      var n = G(e);
      if(n) {
        var p = Yc(c, n);
        return c === N(p) ? M(p, f.d(c, d, Zc(d, n))) : null
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
          d = K(d)
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
    var z = P.d(d, 0, null);
    d = rc(d, 1);
    return w(d) ? S.d(c, z, h.qa(Q.c(c, z), d, e, f, k, v)) : S.d(c, z, e.p ? e.p(Q.c(c, z), f, k, v) : e.call(null, Q.c(c, z), f, k, v))
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
    function c(e, f, h, k, l, E, O) {
      var R = null;
      6 < arguments.length && (R = L(Array.prototype.slice.call(arguments, 6), 0));
      return d.call(this, e, f, h, k, l, E, R)
    }
    function d(c, e, f, k, l, n, O) {
      var R = P.d(e, 0, null);
      e = rc(e, 1);
      return w(e) ? S.d(c, R, T.i(h, Q.c(c, R), e, f, k, L([l, n, O], 0))) : S.d(c, R, T.i(f, Q.c(c, R), k, l, n, L([O], 0)))
    }
    c.n = 6;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
      var k = H(c);
      c = K(c);
      var l = H(c);
      c = K(c);
      var O = H(c);
      c = I(c);
      return d(e, f, h, k, l, O, c)
    };
    c.i = d;
    return c
  }(), h = function(h, n, p, t, s, v, z) {
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
        return k.i(h, n, p, t, s, v, L(arguments, 6))
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
  if(y) {
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
  return 0 === this.l ? null : 32 > this.l ? L.e(this.tail) : y ? Bd.d ? Bd.d(this, 0, 0) : Bd.call(null, this, 0, 0) : null
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
  return Wb(Cd, this.meta)
};
var Dd = new nd(null, Array(32)), Cd = new wd(null, 0, 5, Dd, [], 0);
function Y(c, d) {
  var e = c.length, f = d ? c : c.slice();
  if(32 > e) {
    return new wd(null, e, 5, Dd, f, null)
  }
  for(var h = f.slice(0, 32), k = 32, l = ob(new wd(null, 32, 5, Dd, h, null));;) {
    if(k < e) {
      h = k + 1, l = pb(l, f[k]), k = h
    }else {
      return qb(l)
    }
  }
}
function Ed(c, d, e, f, h, k) {
  this.U = c;
  this.pa = d;
  this.s = e;
  this.off = f;
  this.meta = h;
  this.o = k;
  this.m = 32243948;
  this.A = 1536
}
q = Ed.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = Nb(this)
};
q.ea = function() {
  if(this.off + 1 < this.pa.length) {
    var c = Bd.p ? Bd.p(this.U, this.pa, this.s, this.off + 1) : Bd.call(null, this.U, this.pa, this.s, this.off + 1);
    return null == c ? null : c
  }
  return xb(this)
};
q.K = function(c, d) {
  return M(d, this)
};
q.toString = function() {
  return zb(this)
};
q.fa = function(c, d) {
  return Jb.c(Fd.d ? Fd.d(this.U, this.s + this.off, N(this.U)) : Fd.call(null, this.U, this.s + this.off, N(this.U)), d)
};
q.ga = function(c, d, e) {
  return Jb.d(Fd.d ? Fd.d(this.U, this.s + this.off, N(this.U)) : Fd.call(null, this.U, this.s + this.off, N(this.U)), d, e)
};
q.M = function() {
  return this
};
q.X = function() {
  return this.pa[this.off]
};
q.ja = function() {
  if(this.off + 1 < this.pa.length) {
    var c = Bd.p ? Bd.p(this.U, this.pa, this.s, this.off + 1) : Bd.call(null, this.U, this.pa, this.s, this.off + 1);
    return null == c ? J : c
  }
  return wb(this)
};
q.mb = function() {
  var c = this.pa.length, c = this.s + c < Aa(this.U) ? Bd.d ? Bd.d(this.U, this.s + c, 0) : Bd.call(null, this.U, this.s + c, 0) : null;
  return null == c ? null : c
};
q.F = function(c, d) {
  return Ob(this, d)
};
q.N = function(c, d) {
  return Bd.C ? Bd.C(this.U, this.pa, this.s, this.off, d) : Bd.call(null, this.U, this.pa, this.s, this.off, d)
};
q.V = function() {
  return Wb(Cd, this.meta)
};
q.nb = function() {
  return Dc.c(this.pa, this.off)
};
q.ob = function() {
  var c = this.pa.length, c = this.s + c < Aa(this.U) ? Bd.d ? Bd.d(this.U, this.s + c, 0) : Bd.call(null, this.U, this.s + c, 0) : null;
  return null == c ? J : c
};
var Bd = function() {
  function c(c, d, e, f, p) {
    return new Ed(c, d, e, f, p, null)
  }
  function d(c, d, e, f) {
    return new Ed(c, d, e, f, null, null)
  }
  function e(c, d, e) {
    return new Ed(c, td(c, d), d, e, null, null)
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
    return f === c.end ? null : M(C.c(c.v, f), new zc(null, function() {
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
  return Wb(Cd, this.meta)
};
function Hd(c, d, e, f, h) {
  for(;;) {
    if(d instanceof Gd) {
      e = d.start + e, f = d.start + f, d = d.v
    }else {
      var k = N(d);
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
    return e.d(c, d, N(c))
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
    if(y) {
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
  return hc(bc(d) ? N(c) === N(d) ? Rc(Tc, X.c(function(c) {
    return Ib.c(Q.d(d, H(c), Ld), H(K(c)))
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
        if(y) {
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
          if(y) {
            h += 2
          }else {
            e = null;
            break a
          }
        }
        e = void 0
      }
    }else {
      if(d instanceof Fb) {
        a: {
          f = e.length;
          h = d.Qa;
          for(k = 0;;) {
            if(f <= k) {
              e = -1;
              break a
            }
            l = e[k];
            if(l instanceof Fb && h === l.Qa) {
              e = k;
              break a
            }
            if(y) {
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
              if(y) {
                h += 2
              }else {
                e = null;
                break a
              }
            }
            e = void 0
          }
        }else {
          if(y) {
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
                if(y) {
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
  return M(d, this)
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
  return e === this.f[c + 1] ? this : y ? (d = this.f.slice(), d[c + 1] = e, new Pd(this.meta, this.l, d, null)) : null
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
        if(y) {
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
        e = K(e), f = rb(f, tc.e ? tc.e(h) : tc.call(null, h), uc.e ? uc.e(h) : uc.call(null, h))
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
  return c === d ? !0 : W(c, d) ? !0 : y ? Ib.c(c, d) : null
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
    return y ? (d = Array(2 * (p + 4)), ec(this.f, 0, d, 0, 2 * n), d[2 * n] = f, d[2 * n + 1] = h, ec(this.f, 2 * n, d, 2 * (n + 1), 2 * (p - n)), k.wa = !0, c = this.Ea(c), c.f = d, c.D |= l, c) : null
  }
  p = this.f[2 * n];
  l = this.f[2 * n + 1];
  return null == p ? (p = l.ta(c, d + 5, e, f, h, k), p === l ? this : Zd.p(this, c, 2 * n + 1, p)) : Wd(f, p) ? h === l ? this : Zd.p(this, c, 2 * n + 1, h) : y ? (k.wa = !0, Zd.qa(this, c, 2 * n, null, 2 * n + 1, de.Sa ? de.Sa(c, d + 5, p, l, e, f, h) : de.call(null, c, d + 5, p, l, e, f, h))) : null
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
  return null == n ? (d = p.$a(c, d + 5, e, f, h), d === p ? this : null != d ? Zd.p(this, c, 2 * l + 1, d) : this.D === k ? null : y ? ae(this, c, k, l) : null) : Wd(f, n) ? (h[0] = !0, ae(this, c, k, l)) : y ? this : null
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
  return null == k ? (c = l.Za(c + 5, d, e), c === l ? this : null != c ? new $d(null, this.D, Xd.d(this.f, 2 * h + 1, c)) : this.D === f ? null : y ? new $d(null, this.D ^ f, Yd(this.f, h)) : null) : Wd(e, k) ? new $d(null, this.D ^ f, Yd(this.f, h)) : y ? this : null
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
  return null == n ? (n = k.sa(c + 5, d, e, f, h), n === k ? this : new $d(null, this.D, Xd.d(this.f, 2 * l + 1, n))) : Wd(e, n) ? f === k ? this : new $d(null, this.D, Xd.d(this.f, 2 * l + 1, f)) : y ? (h.wa = !0, new $d(null, this.D, Xd.C(this.f, 2 * l, null, 2 * l + 1, de.qa ? de.qa(c + 5, n, k, d, e, f) : de.call(null, c + 5, n, k, d, e, f)))) : null
};
q.Ga = function(c, d, e, f) {
  var h = 1 << (d >>> c & 31);
  if(0 === (this.D & h)) {
    return f
  }
  var k = qc(this.D & h - 1), h = this.f[2 * k], k = this.f[2 * k + 1];
  return null == h ? k.Ga(c + 5, d, e, f) : Wd(e, h) ? k : y ? f : null
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
  return y ? Zd.p(this, c, k, d) : null
};
q.Ea = function(c) {
  return c === this.B ? this : new ce(c, this.l, this.f.slice())
};
q.Za = function(c, d, e) {
  var f = d >>> c & 31, h = this.f[f];
  return null != h ? (c = h.Za(c + 5, d, e), c === h ? this : null == c ? 8 >= this.l ? fe(this, null, f) : new ce(null, this.l - 1, Xd.d(this.f, f, c)) : y ? new ce(null, this.l, Xd.d(this.f, f, c)) : null) : this
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
  return-1 === c ? this : 1 === this.l ? null : y ? new ie(null, this.za, this.l - 1, Yd(this.f, mc((c - c % 2) / 2))) : null
};
q.sa = function(c, d, e, f, h) {
  return d === this.za ? (c = he(this.f, this.l, e), -1 === c ? (c = 2 * this.l, d = Array(c + 2), ec(this.f, 0, d, 0, c), d[c] = e, d[c + 1] = f, h.wa = !0, new ie(null, this.za, this.l + 1, d)) : Ib.c(this.f[c], f) ? this : new ie(null, this.za, this.l, Xd.d(this.f, c + 1, f))) : (new $d(null, 1 << (this.za >>> c & 31), [null, this])).sa(c, d, e, f, h)
};
q.Ga = function(c, d, e, f) {
  c = he(this.f, this.l, e);
  return 0 > c ? f : Wd(e, this.f[c]) ? this.f[c + 1] : y ? f : null
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
  return M(d, this)
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
  return null == this.J ? ee.d ? ee.d(this.ua, this.s + 2, null) : ee.call(null, this.ua, this.s + 2, null) : ee.d ? ee.d(this.ua, this.s, K(this.J)) : ee.call(null, this.ua, this.s, K(this.J))
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
  return M(d, this)
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
  return ge.p ? ge.p(null, this.ua, this.s, K(this.J)) : ge.call(null, null, this.ua, this.s, K(this.J))
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
  return null == d ? this.ba ? this.la : e : null == this.root ? e : y ? this.root.Ga(0, F(d), d, e) : null
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
  return null == d ? this.ba : null == this.root ? !1 : y ? this.root.Ga(0, F(d), d, fc) !== fc : null
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
    return this.ba ? M(Y([null, this.la], !0), c) : c
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
  if(y) {
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
          e = K(e), f = ne(f, tc.e ? tc.e(h) : tc.call(null, h), uc.e ? uc.e(h) : uc.call(null, h))
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
    0 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    c = G(c);
    for(var d = ob(Sd);;) {
      if(c) {
        var h = K(K(c)), d = Oc(d, H(c), H(K(c)));
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
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : K(this.ha);
  return null == c ? null : new pe(c, this.ia)
};
q.K = function(c, d) {
  return M(d, this)
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
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : K(this.ha);
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
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : K(this.ha);
  return null == c ? null : new re(c, this.ia)
};
q.K = function(c, d) {
  return M(d, this)
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
  var c = this.ha, c = (c ? c.m & 128 || c.cb || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? this.ha.ea(null) : K(this.ha);
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
    0 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 0), 0));
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
        var e = H(d), c = (c + F(e)) % 4503599627370496, d = K(d)
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
  return(null == d ? !1 : d ? d.m & 4096 || d.Ac ? !0 : d.m ? !1 : x(Ta, d) : x(Ta, d)) && N(e) === N(d) && Rc(function(c) {
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
  return N(this.Ca)
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
  if(y) {
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
      3 < arguments.length && (t = L(Array.prototype.slice.call(arguments, 3), 0));
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
      c = K(c);
      var f = H(c);
      c = K(c);
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
        return e.i(d, h, k, L(arguments, 3))
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
    return f ? w(d.e ? d.e(H(f)) : d.call(null, H(f))) ? M(H(f), Ae(d, I(f))) : null : null
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
  return M(d, this)
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
          3 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, c, d, e, l)
        }
        function h(f, p, t, s) {
          return Y.c ? Y.c([T.C(c, f, p, t, s), T.C(d, f, p, t, s), T.C(e, f, p, t, s)], !0) : Y.call(null, [T.C(c, f, p, t, s), T.C(d, f, p, t, s), T.C(e, f, p, t, s)], !0)
        }
        f.n = 3;
        f.k = function(c) {
          var d = H(c);
          c = K(c);
          var e = H(c);
          c = K(c);
          var f = H(c);
          c = I(c);
          return h(d, e, f, c)
        };
        f.i = h;
        return f
      }(), f = function(f, p, z, E) {
        switch(arguments.length) {
          case 0:
            return Y.c ? Y.c([c.j ? c.j() : c.call(null), d.j ? d.j() : d.call(null), e.j ? e.j() : e.call(null)], !0) : Y.call(null, [c.j ? c.j() : c.call(null), d.j ? d.j() : d.call(null), e.j ? e.j() : e.call(null)], !0);
          case 1:
            return Y.c ? Y.c([c.e ? c.e(f) : c.call(null, f), d.e ? d.e(f) : d.call(null, f), e.e ? e.e(f) : e.call(null, f)], !0) : Y.call(null, [c.e ? c.e(f) : c.call(null, f), d.e ? d.e(f) : d.call(null, f), e.e ? e.e(f) : e.call(null, f)], !0);
          case 2:
            return Y.c ? Y.c([c.c ? c.c(f, p) : c.call(null, f, p), d.c ? d.c(f, p) : d.call(null, f, p), e.c ? e.c(f, p) : e.call(null, f, p)], !0) : Y.call(null, [c.c ? c.c(f, p) : c.call(null, f, p), d.c ? d.c(f, p) : d.call(null, f, p), e.c ? e.c(f, p) : e.call(null, f, p)], !0);
          case 3:
            return Y.c ? Y.c([c.d ? c.d(f, p, z) : c.call(null, f, p, z), d.d ? d.d(f, p, z) : d.call(null, f, p, z), e.d ? e.d(f, p, z) : e.call(null, f, p, z)], !0) : Y.call(null, [c.d ? c.d(f, p, z) : c.call(null, f, p, z), d.d ? d.d(f, p, z) : d.call(null, f, p, z), e.d ? e.d(f, p, z) : e.call(null, f, p, z)], !0);
          default:
            return h.i(f, p, z, L(arguments, 3))
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
          3 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 3), 0));
          return f.call(this, c, d, h, l)
        }
        function f(e, h, n, p) {
          return Y.c ? Y.c([T.C(c, e, h, n, p), T.C(d, e, h, n, p)], !0) : Y.call(null, [T.C(c, e, h, n, p), T.C(d, e, h, n, p)], !0)
        }
        e.n = 3;
        e.k = function(c) {
          var d = H(c);
          c = K(c);
          var e = H(c);
          c = K(c);
          var h = H(c);
          c = I(c);
          return f(d, e, h, c)
        };
        e.i = f;
        return e
      }(), e = function(e, h, n, z) {
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
            return f.i(e, h, n, L(arguments, 3))
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
          3 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, c, f, h, l)
        }
        function e(d, f, h, l) {
          return Y.c ? Y.c([T.C(c, d, f, h, l)], !0) : Y.call(null, [T.C(c, d, f, h, l)], !0)
        }
        d.n = 3;
        d.k = function(c) {
          var d = H(c);
          c = K(c);
          var f = H(c);
          c = K(c);
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
            return e.i(d, f, h, L(arguments, 3))
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
      3 < arguments.length && (v = L(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, v)
    }
    function d(c, e, f, h) {
      var k = Lc.p(c, e, f, h);
      return function() {
        function c(d, e, f) {
          return U.d(function(c, h) {
            return Qb.c(c, h.d ? h.d(d, e, f) : h.call(null, d, e, f))
          }, Cd, k)
        }
        function d(c, e) {
          return U.d(function(d, f) {
            return Qb.c(d, f.c ? f.c(c, e) : f.call(null, c, e))
          }, Cd, k)
        }
        function e(c) {
          return U.d(function(d, e) {
            return Qb.c(d, e.e ? e.e(c) : e.call(null, c))
          }, Cd, k)
        }
        function f() {
          return U.d(function(c, d) {
            return Qb.c(c, d.j ? d.j() : d.call(null))
          }, Cd, k)
        }
        var h = null, l = function() {
          function c(e, f, h, k) {
            var l = null;
            3 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 3), 0));
            return d.call(this, e, f, h, l)
          }
          function d(c, e, f, h) {
            return U.d(function(d, k) {
              return Qb.c(d, T.C(k, c, e, f, h))
            }, Cd, k)
          }
          c.n = 3;
          c.k = function(c) {
            var e = H(c);
            c = K(c);
            var f = H(c);
            c = K(c);
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
              return l.i(h, k, n, L(arguments, 3))
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
      c = K(c);
      var f = H(c);
      c = K(c);
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
        return h.i(f, l, n, L(arguments, 3))
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
        var e = c - 1, l = K(d);
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
        c = K(c)
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
  e = G(K(l));
  l = null;
  for(var n = 0, p = 0;;) {
    if(p < n) {
      var t = l.I(null, p);
      jb(c, f);
      d.d ? d.d(t, c, k) : d.call(null, t, c, k);
      p += 1
    }else {
      if(e = G(e)) {
        l = e, dc(l) ? (e = vb(l), p = wb(l), l = e, n = N(e), e = p) : (e = H(l), jb(c, f), d.d ? d.d(e, c, k) : d.call(null, e, c, k), e = K(l), l = null, n = 0), p = 0
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
    1 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 1), 0));
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
          k = h, dc(k) ? (h = vb(k), l = wb(k), k = h, p = N(h), h = l, l = p) : (p = H(k), jb(c, p), h = K(k), k = null, l = 0), n = 0
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
  if(y) {
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
      return He.i(e, L(["#\x3c", "" + B(d), "\x3e"], 0))
    }
    if(d instanceof Date) {
      var h = function(d, e) {
        for(var f = "" + B(d);;) {
          if(N(f) < e) {
            f = [B("0"), B(f)].join("")
          }else {
            return f
          }
        }
      };
      return He.i(e, L(['#inst "', "" + B(d.getUTCFullYear()), "-", h(d.getUTCMonth() + 1, 2), "-", h(d.getUTCDate(), 2), "T", h(d.getUTCHours(), 2), ":", h(d.getUTCMinutes(), 2), ":", h(d.getUTCSeconds(), 2), ".", h(d.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return w(d instanceof RegExp) ? He.i(e, L(['#"', d.source, '"'], 0)) : (d ? d.m & 2147483648 || d.W || (d.m ? 0 : x(lb, d)) : x(lb, d)) ? mb(d, e, f) : y ? He.i(e, L(["#\x3c", "" + B(d), "\x3e"], 0)) : null
  }
  return null
}, Me = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 0), 0));
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
        c = G(K(c));
        for(var n = null, p = 0, t = 0;;) {
          if(t < p) {
            var s = n.I(null, t);
            jb(l, " ");
            Le(s, l, d);
            t += 1
          }else {
            if(c = G(c)) {
              n = c, dc(n) ? (c = vb(n), p = wb(n), n = c, s = N(c), c = p, p = s) : (s = H(n), jb(l, " "), Le(s, l, d), c = K(n), n = null, p = 0), t = 0
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
Ed.prototype.W = !0;
Ed.prototype.G = function(c, d, e) {
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
        dc(c) ? (f = vb(c), c = wb(c), n = f, h = N(f), f = n) : (f = H(c), n = P.d(f, 0, null), l = P.d(f, 1, null), l.p ? l.p(n, this, d, e) : l.call(null, n, this, d, e), c = K(c), f = null, h = 0), k = 0
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
      1 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 1), 0));
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
        return e.i(d, L(arguments, 1))
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
    throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(Me.i(L([xc(new Fb(null, "validate", "validate", 1233162959, null), new Fb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
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
      var O = null;
      5 < arguments.length && (O = L(Array.prototype.slice.call(arguments, 5), 0));
      return d.call(this, e, f, h, k, l, O)
    }
    function d(c, e, f, h, k, l) {
      return Qe(c, T.i(e, c.state, f, h, k, L([l], 0)))
    }
    c.n = 5;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
      var k = H(c);
      c = K(c);
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
        return k.i(h, n, p, t, s, L(arguments, 5))
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
  return P.c(c, pc(N(c)))
}
function Te(c) {
  this.ib = c;
  this.A = 0;
  this.m = 2153775104
}
Te.prototype.H = function() {
  return na(Me.i(L([this], 0)))
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
;var Db = new V(null, "dup", "dup"), Xe = new V(null, "entities", "entities"), Ye = new V(null, "default", "default"), Ze = new V(null, "display-object", "display-object"), $e = new V(null, "position", "position"), af = new V(null, "vector", "vector"), bf = new V(null, "duration", "duration"), cf = new V(null, "identifier", "identifier"), df = new V(null, "cooldown-remaining", "cooldown-remaining"), ef = new V(null, "movement", "movement"), ff = new V(null, "health", "health"), gf = new V(null, "width", 
"width"), hf = new V(null, "magnitude", "magnitude"), jf = new V(null, "velocity", "velocity"), kf = new V(null, "asteroid-explosive-death", "asteroid-explosive-death"), mf = new V(null, "fire-intent", "fire-intent"), nf = new V(null, "mouseover", "mouseover"), of = new V(null, "current", "current"), pf = new V(null, "world", "world"), qf = new V(null, "class", "class"), rf = new V(null, "entity-id", "entity-id"), sf = new V(null, "radius", "radius"), tf = new V(null, "collidable", "collidable"), 
uf = new V(null, "player", "player"), Z = new V(null, "name", "name"), vf = new V(null, "angular-acceleration", "angular-acceleration"), wf = new V(null, "aabb", "aabb"), xf = new V(null, "color", "color"), yf = new V(null, "mouseout", "mouseout"), Ab = new V(null, "flush-on-newline", "flush-on-newline"), zf = new V(null, "max-angular-velocity", "max-angular-velocity"), Af = new V(null, "thrust-intent", "thrust-intent"), Bf = new V(null, "style", "style"), Cf = new V(null, "b-id", "b-id"), Df = new V(null, 
"active-keys", "active-keys"), Ef = new V(null, "normal", "normal"), Ff = new V(null, "rotate-left-intent", "rotate-left-intent"), Gf = new V(null, "xmin", "xmin"), Hf = new V(null, "tensor", "tensor"), If = new V(null, "max", "max"), Jf = new V(null, "thrust", "thrust"), Kf = new V(null, "mouseleave", "mouseleave"), Lf = new V(null, "keydown", "keydown"), Mf = new V(null, "ttl", "ttl"), Nf = new V(null, "xmax", "xmax"), Of = new V(null, "cooldown", "cooldown"), Pf = new V(null, "acceleration", "acceleration"), 
Qf = new V(null, "moment-inertia", "moment-inertia"), Rf = new V(null, "projectile", "projectile"), Sf = new V(null, "damage", "damage"), Tf = new V(null, "angular-velocity", "angular-velocity"), Uf = new V(null, "space", "space"), Vf = new V(null, "right", "right"), Wf = new V(null, "weapon", "weapon"), Xf = new V(null, "layer", "layer"), Yf = new V(null, "left", "left"), Zf = new V(null, "a-id", "a-id"), $f = new V(null, "keyup", "keyup"), y = new V(null, "else", "else"), ag = new V(null, "contacts", 
"contacts"), bg = new V(null, "ymin", "ymin"), Bb = new V(null, "readably", "readably"), cg = new V(null, "prev-ids", "prev-ids"), dg = new V(null, "angle", "angle"), eg = new V(null, "mouseenter", "mouseenter"), Oe = new V(null, "validator", "validator"), Cb = new V(null, "meta", "meta"), fg = new V(null, "rotate-right-intent", "rotate-right-intent"), gg = new V(null, "remaining", "remaining"), hg = new V(null, "ymax", "ymax"), ig = new V(null, "penetration", "penetration"), jg = new V(null, "obj", 
"obj"), kg = new V(null, "mass", "mass"), lg = new V(null, "entity-ids", "entity-ids"), mg = new V(null, "health-bar", "health-bar"), ng = new V(null, "down", "down"), og = new V(null, "impulse", "impulse"), pg = new V(null, "up", "up"), qg = new V(null, "id", "id"), rg = new V(null, "disabled", "disabled"), sg = new V(null, "max-velocity", "max-velocity"), tg = new V(null, "classes", "classes"), ug = new V(null, "height", "height"), vg = new V(null, "rotation", "rotation");
function wg() {
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
;var xg = function() {
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
function yg() {
  var c = zg();
  return"" + B(c.ib)
}
function zg() {
  function c() {
    return(8 | 3 & pc(15)).toString(16)
  }
  function d() {
    return pc(16).toString(16)
  }
  return new Te((new ta).append(d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-", d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-4", d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-", c.j ? c.j() : c.call(null), d.j ? 
  d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), "-", d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null), d.j ? d.j() : d.call(null)))
}
var Ag, Bg = [B("^"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("-"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), 
B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("[0-9a-fA-F]"), B("$")].join(""), Cg = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(Bg);
Ag = null == Cg ? null : 1 === N(Cg) ? H(Cg) : qb(U.d(pb, ob(Cd), Cg));
P.d(Ag, 0, null);
P.d(Ag, 1, null);
P.d(Ag, 2, null);
var Dg = Math.PI, Eg = Number.MAX_VALUE, Fg = Math.abs, Gg = Math.pow, Hg = Math.sqrt, Ig = Math.cos, Jg = Math.sin;
function Kg(c, d) {
  return Y([P.c(c, 0) + P.c(d, 0), P.c(c, 1) + P.c(d, 1)], !0)
}
function Lg(c, d) {
  return Y([P.c(c, 0) - P.c(d, 0), P.c(c, 1) - P.c(d, 1)], !0)
}
function Mg(c) {
  return Hg.e ? Hg.e((Gg.c ? Gg.c(P.c(c, 0), 2) : Gg.call(null, P.c(c, 0), 2)) + (Gg.c ? Gg.c(P.c(c, 1), 2) : Gg.call(null, P.c(c, 1), 2))) : Hg.call(null, (Gg.c ? Gg.c(P.c(c, 0), 2) : Gg.call(null, P.c(c, 0), 2)) + (Gg.c ? Gg.c(P.c(c, 1), 2) : Gg.call(null, P.c(c, 1), 2)))
}
function Ng(c, d) {
  return Y([c * P.c(d, 0), c * P.c(d, 1)], !0)
}
function Og(c, d) {
  return P.c(c, 0) * P.c(d, 0) + P.c(c, 1) * P.c(d, 1)
}
function Pg(c) {
  var d = Y([1, 0], !0), e = P.c(d, 0), d = P.c(d, 1);
  return Y([e * (Ig.e ? Ig.e(c) : Ig.call(null, c)) - d * (Jg.e ? Jg.e(c) : Jg.call(null, c)), e * (Jg.e ? Jg.e(c) : Jg.call(null, c)) + d * (Ig.e ? Ig.e(c) : Ig.call(null, c))], !0)
}
function Qg(c) {
  return Y([-P.c(c, 1), P.c(c, 0)], !0)
}
function Rg(c) {
  var d = Mg(c);
  return Y([P.c(c, 0) / d, P.c(c, 1) / d], !0)
}
;function Tg(c, d) {
  var e = T.d(ze, c, d);
  return M(e, gd(Vc(function(c) {
    return e === c
  }), d))
}
var Ug = function() {
  function c(c, d) {
    return N(c) < N(d) ? U.d(Qb, d, c) : U.d(Qb, c, d)
  }
  var d = null, e = function() {
    function c(e, f, n) {
      var p = null;
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, e, f, p)
    }
    function d(c, e, f) {
      c = Tg(N, Qb.i(f, e, L([c], 0)));
      return U.d(hd, H(c), I(c))
    }
    c.n = 2;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
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
}(), Vg = function() {
  function c(c, d) {
    for(;;) {
      if(N(d) < N(c)) {
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
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      c = Tg(function(c) {
        return-N(c)
      }, Qb.i(h, f, L([c], 0)));
      return U.d(d, H(c), I(c))
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.e = aa();
  d.c = c;
  d.i = e.i;
  return d
}(), Wg = function() {
  function c(c, d) {
    return N(c) < N(d) ? U.d(function(c, e) {
      return ic(d, e) ? Yb.c(c, e) : c
    }, c, c) : U.d(Yb, c, d)
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      return U.d(d, c, Qb.c(h, f))
    }
    c.n = 2;
    c.k = function(c) {
      var d = H(c);
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
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
function Xg(c, d, e, f) {
  this.name = c;
  this.xa = d;
  this.t = e;
  this.q = f;
  this.A = 0;
  this.m = 2229667594;
  2 < arguments.length ? (this.t = e, this.q = f) : this.q = this.t = null
}
q = Xg.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, af) ? this.xa : y ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new Xg(e, this.xa, this.t, this.q, null) : (W.c ? W.c(af, d) : W.call(null, af, d)) ? new Xg(this.name, e, this.t, this.q, null) : new Xg(this.name, this.xa, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.Position{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([af, this.xa], !0) : Y.call(null, [af, this.xa], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([af, this.xa], !0) : Y.call(null, [af, this.xa], !0)], !0), this.q))
};
q.R = function() {
  return 2 + N(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new Xg(this.name, this.xa, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([af, null, Z, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new Xg(this.name, this.xa, this.t, Qc(Tb.c(this.q, d)), null)
};
function Yg(c, d, e, f) {
  this.name = c;
  this.angle = d;
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
  return W(d, Z) ? this.name : W(d, dg) ? this.angle : y ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new Yg(e, this.angle, this.t, this.q, null) : (W.c ? W.c(dg, d) : W.call(null, dg, d)) ? new Yg(this.name, e, this.t, this.q, null) : new Yg(this.name, this.angle, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.Rotation{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([dg, this.angle], !0) : Y.call(null, [dg, this.angle], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([dg, this.angle], !0) : Y.call(null, [dg, this.angle], !0)], !0), this.q))
};
q.R = function() {
  return 2 + N(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new Yg(this.name, this.angle, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([Z, null, dg, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new Yg(this.name, this.angle, this.t, Qc(Tb.c(this.q, d)), null)
};
function Zg(c, d, e, f, h, k, l, n, p) {
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
q = Zg.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, Pf) ? this.acceleration : W(d, jf) ? this.O : W(d, sg) ? this.Z : W(d, vf) ? this.aa : W(d, Tf) ? this.T : W(d, zf) ? this.Y : y ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new Zg(e, this.acceleration, this.O, this.Z, this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(Pf, d) : W.call(null, Pf, d)) ? new Zg(this.name, e, this.O, this.Z, this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(jf, d) : W.call(null, jf, d)) ? new Zg(this.name, this.acceleration, e, this.Z, this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(sg, d) : W.call(null, sg, d)) ? new Zg(this.name, this.acceleration, this.O, e, 
  this.aa, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(vf, d) : W.call(null, vf, d)) ? new Zg(this.name, this.acceleration, this.O, this.Z, e, this.T, this.Y, this.t, this.q, null) : (W.c ? W.c(Tf, d) : W.call(null, Tf, d)) ? new Zg(this.name, this.acceleration, this.O, this.Z, this.aa, e, this.Y, this.t, this.q, null) : (W.c ? W.c(zf, d) : W.call(null, zf, d)) ? new Zg(this.name, this.acceleration, this.O, this.Z, this.aa, this.T, e, this.t, this.q, null) : new Zg(this.name, this.acceleration, 
  this.O, this.Z, this.aa, this.T, this.Y, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.Movement{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([Pf, this.acceleration], !0) : Y.call(null, [Pf, this.acceleration], !0), Y.c ? Y.c([jf, this.O], !0) : Y.call(null, [jf, this.O], !0), Y.c ? Y.c([sg, this.Z], !0) : Y.call(null, [sg, this.Z], !0), Y.c ? Y.c([vf, this.aa], !0) : Y.call(null, [vf, this.aa], !0), Y.c ? Y.c([Tf, this.T], !0) : Y.call(null, [Tf, this.T], !0), Y.c ? Y.c([zf, this.Y], !0) : Y.call(null, [zf, 
  this.Y], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([Pf, this.acceleration], !0) : Y.call(null, [Pf, this.acceleration], !0), Y.c ? Y.c([jf, this.O], !0) : Y.call(null, [jf, this.O], !0), Y.c ? Y.c([sg, this.Z], !0) : Y.call(null, [sg, this.Z], !0), Y.c ? Y.c([vf, this.aa], !0) : Y.call(null, [vf, this.aa], !0), Y.c ? Y.c([Tf, this.T], !0) : Y.call(null, [Tf, this.T], !0), Y.c ? Y.c([zf, this.Y], !0) : Y.call(null, [zf, this.Y], !0)], !0), this.q))
};
q.R = function() {
  return 7 + N(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new Zg(this.name, this.acceleration, this.O, this.Z, this.aa, this.T, this.Y, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([jf, null, Z, null, vf, null, zf, null, Pf, null, Tf, null, sg, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new Zg(this.name, this.acceleration, this.O, this.Z, this.aa, this.T, this.Y, this.t, Qc(Tb.c(this.q, d)), null)
};
function $g(c, d, e, f, h, k, l) {
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
q = $g.prototype;
q.H = function() {
  var c = this.o;
  return null != c ? c : this.o = c = sc(this)
};
q.P = function(c, d) {
  return Ka.d(this, d, null)
};
q.Q = function(c, d, e) {
  return W(d, Z) ? this.name : W(d, Gf) ? this.$ : W(d, bg) ? this.da : W(d, Nf) ? this.S : W(d, hg) ? this.ca : y ? Q.d(this.q, d, e) : null
};
q.ya = function(c, d, e) {
  return(W.c ? W.c(Z, d) : W.call(null, Z, d)) ? new $g(e, this.$, this.da, this.S, this.ca, this.t, this.q, null) : (W.c ? W.c(Gf, d) : W.call(null, Gf, d)) ? new $g(this.name, e, this.da, this.S, this.ca, this.t, this.q, null) : (W.c ? W.c(bg, d) : W.call(null, bg, d)) ? new $g(this.name, this.$, e, this.S, this.ca, this.t, this.q, null) : (W.c ? W.c(Nf, d) : W.call(null, Nf, d)) ? new $g(this.name, this.$, this.da, e, this.ca, this.t, this.q, null) : (W.c ? W.c(hg, d) : W.call(null, hg, d)) ? 
  new $g(this.name, this.$, this.da, this.S, e, this.t, this.q, null) : new $g(this.name, this.$, this.da, this.S, this.ca, this.t, S.d(this.q, d, e), null)
};
q.G = function(c, d, e) {
  return Ge(d, function(c) {
    return Ge(d, Le, "", " ", "", e, c)
  }, "#asteroids.core.AABB{", ", ", "}", e, Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([Gf, this.$], !0) : Y.call(null, [Gf, this.$], !0), Y.c ? Y.c([bg, this.da], !0) : Y.call(null, [bg, this.da], !0), Y.c ? Y.c([Nf, this.S], !0) : Y.call(null, [Nf, this.S], !0), Y.c ? Y.c([hg, this.ca], !0) : Y.call(null, [hg, this.ca], !0)], !0), this.q))
};
q.K = function(c, d) {
  return cc(d) ? Ma(this, C.c(d, 0), C.c(d, 1)) : U.d(Da, this, d)
};
q.M = function() {
  return G(Kc.c(Y([Y.c ? Y.c([Z, this.name], !0) : Y.call(null, [Z, this.name], !0), Y.c ? Y.c([Gf, this.$], !0) : Y.call(null, [Gf, this.$], !0), Y.c ? Y.c([bg, this.da], !0) : Y.call(null, [bg, this.da], !0), Y.c ? Y.c([Nf, this.S], !0) : Y.call(null, [Nf, this.S], !0), Y.c ? Y.c([hg, this.ca], !0) : Y.call(null, [hg, this.ca], !0)], !0), this.q))
};
q.R = function() {
  return 5 + N(this.q)
};
q.F = function(c, d) {
  var e;
  e = w(d) ? (e = this.constructor === d.constructor) ? Md(this, d) : e : d;
  return w(e) ? !0 : !1
};
q.N = function(c, d) {
  return new $g(this.name, this.$, this.da, this.S, this.ca, d, this.q, this.o)
};
q.L = m("t");
q.Ja = function(c, d) {
  return ic(we([Z, null, Gf, null, Nf, null, bg, null, hg, null]), d) ? Tb.c(Wb(hd(Td, this), this.t), d) : new $g(this.name, this.$, this.da, this.S, this.ca, this.t, Qc(Tb.c(this.q, d)), null)
};
function ah(c, d, e, f, h, k) {
  return new Zg(ef, c, d, e, f, h, k)
}
function bh(c) {
  return new Xg($e, c)
}
function ch(c) {
  return new Yg(vg, c)
}
var dh = function() {
  function c(c, d) {
    return D.c ? D.c([Z, Mf, bf, c, gg, d], !0) : D.call(null, [Z, Mf, bf, c, gg, d], !0)
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
}(), eh = function() {
  function c(c, d, e, l) {
    return new $g(wf, c, d, e, l)
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
function fh(c) {
  return D.c ? D.c([Z, kg, kg, c], !0) : D.call(null, [Z, kg, kg, c], !0)
}
var gh = function() {
  function c(c) {
    return D.c ? D.c([Z, cf, qg, c], !0) : D.call(null, [Z, cf, qg, c], !0)
  }
  function d() {
    return e.e(yg())
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
function hh(c, d) {
  return ic(c, d)
}
var ih = function() {
  function c(c, d, e, f) {
    return ic(c, d) && ic(c, e) && ic(c, f)
  }
  function d(c, d, e) {
    return ic(c, d) && ic(c, e)
  }
  var e = null, f = function() {
    function c(e, f, h, t, s) {
      var v = null;
      4 < arguments.length && (v = L(Array.prototype.slice.call(arguments, 4), 0));
      return d.call(this, e, f, h, t, v)
    }
    function d(c, f, h, k, s) {
      return(f = e.p(c, f, h, k)) ? U.c(function(c, d) {
        return w(c) ? d : c
      }, X.d(hh, $c.e(c), s)) : f
    }
    c.n = 4;
    c.k = function(c) {
      var e = H(c);
      c = K(c);
      var f = H(c);
      c = K(c);
      var h = H(c);
      c = K(c);
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
        return f.i(e, k, l, n, L(arguments, 4))
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
function jh(c, d) {
  return S.d(c, Z.e(d), d)
}
function kh(c, d) {
  return Nc(U.d(function(c, d) {
    return Oc(c, Z.e(d), d)
  }, ob(c), d))
}
var lh = function() {
  function c(c) {
    var f = null;
    0 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, f)
  }
  function d(c) {
    c = Nc(U.d(function(c, d) {
      return Oc(c, Z.e(d), d)
    }, ob(Td), c));
    return ic(c, cf) ? c : jh(c, gh.j())
  }
  c.n = 0;
  c.k = function(c) {
    c = G(c);
    return d(c)
  };
  c.i = d;
  return c
}();
function mh(c, d) {
  return jd.c(c, Y([Xe, d], !0))
}
function nh(c, d) {
  var e = qg.e($(d, cf));
  return ld(c, Y([Xe, e], !0), d)
}
function oh(c) {
  c = Xe.e(c);
  return(c = G(c)) ? new re(c, null) : null
}
function ph(c) {
  return qg.e($(c, cf))
}
function qh(c) {
  c = $(c, $e);
  return w(c) ? c.xa : null
}
function rh(c) {
  return kg.e($(c, kg))
}
function sh(c, d) {
  var e = Mc(function() {
    var d = Xe.e(c);
    return w(d) ? d : Td
  }());
  return S.d(c, Xe, Nc(U.d(function(c, d) {
    return Oc(c, ph(d), d)
  }, e, d)))
}
function th(c, d) {
  var e = Mc(function() {
    var d = Xe.e(c);
    return w(d) ? d : Td
  }());
  return S.d(c, Xe, Nc(U.d(function(c, d) {
    var e = ph(d);
    return sb(c, e)
  }, e, d)))
}
function uh(c) {
  var d = $(c, Mf), e = bf.e(d), d = gg.e(d) - 1;
  return jh(c, dh.c(e, d))
}
function vh(c) {
  var d = X.c(uh, gd(function(c) {
    return ic(c, Mf)
  }, oh(c))), e = gd(function() {
    return function(c) {
      return 0 > gg.e($(c, Mf))
    }
  }(d), d);
  c = sh(c, d);
  return th(c, e)
}
;var wh = D([Vf, function() {
  return D([Z, fg], !0)
}, Yf, function() {
  return D([Z, Ff], !0)
}, pg, function() {
  return D([Z, Af], !0)
}, Uf, function() {
  return D([Z, mf], !0)
}], !0);
function xh(c) {
  for(var d = function(c) {
    return function(d, e) {
      return U.d(function() {
        return function(c, d) {
          return w(d) ? jh(c, d) : c
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
                      var e = vb(c), f = N(e), h = new Bc(Array(f), 0);
                      return function() {
                        for(var c = 0;;) {
                          if(c < f) {
                            var d = C.c(e, c), k = h, d = Q.c(wh, d), d = w(d) ? d.j ? d.j() : d.call(null) : null;
                            k.add(d);
                            c += 1
                          }else {
                            return!0
                          }
                        }
                      }() ? Fc(h.ka(), s(wb(c))) : Fc(h.ka(), null)
                    }
                    var k = H(c);
                    return M(function() {
                      var c = Q.c(wh, k);
                      return w(c) ? c.j ? c.j() : c.call(null) : null
                    }(), s(I(c)))
                  }
                  return null
                }
              }
            }(c), null, null)
          }
        }(c)(Df.e(d))
      }())
    }
  }(c), e = oh(c), f = Mc(Xe.e(c));;) {
    if(G(e)) {
      var h = H(e);
      ih.c(h, uf) ? (h = d(c, h), e = K(e), f = Oc(f, ph(h), h)) : e = K(e)
    }else {
      return S.d(c, Xe, qb(f))
    }
  }
}
function yh(c) {
  var d = $(c, ef), e = dg.e($(c, vg)), e = Pg(w(e) ? e : 0), e = ic(c, Af) ? Ng(0.05, e) : Y([0, 0], !0), f = af.c($(c, Jf), Y([0, 0], !0)), f = Kg(d.acceleration, Lg(e, f));
  return jh(jh(Tb.c(c, Af), ah(f, d.O, d.Z, d.aa, d.T, d.Y)), D([Z, Jf, af, e], !0))
}
function zh(c) {
  return sh(c, X.c(yh, gd(function(c) {
    return ic(c, Af) || ic(c, Jf)
  }, oh(c))))
}
function Ah(c) {
  var d = dg.c($(c, vg), 0), e = 0.01 * 2 * Dg, e = w($(c, Ff)) ? -1 * e : e, d = d + e;
  return jh(Tb.c(Tb.c(c, Ff), fg), ch(d))
}
function Bh(c) {
  return sh(c, X.c(Ah, gd(function(c) {
    return ic(c, Ff) || ic(c, fg)
  }, oh(c))))
}
;function Ch(c) {
  return D([Z, Ze, jg, c], !0)
}
function Dh(c, d) {
  var e = qh(d), f = P.d(e, 0, null), e = P.d(e, 1, null), h;
  h = dg.e($(d, vg));
  h = w(h) ? h : 0;
  var k = jg.e($(d, Ze)), l = k.position;
  l.x = f;
  l.y = e;
  k.rotation = h;
  return c
}
;function Eh(c, d) {
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
var Gh = function() {
  function c(c, d) {
    var e = Fh(c), l, n = ye(d);
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
              p = l, dc(p) ? (l = vb(p), s = wb(p), p = l, t = N(l), l = s) : (l = H(p), n.add(l), l = K(p), p = null, t = 0), s = 0
            }else {
              break
            }
          }
        }
      }else {
        for(n = e.className, l = G(l.split(/\s+/)), p = null, s = t = 0;;) {
          if(s < t) {
            v = p.I(null, s), w(Eh(n, v)) || (e.className = "" === n ? v : [B(n), B(" "), B(v)].join("")), s += 1
          }else {
            if(l = G(l)) {
              p = l, dc(p) ? (l = vb(p), s = wb(p), p = l, t = N(l), l = s) : (l = H(p), w(Eh(n, l)) || (e.className = "" === n ? l : [B(n), B(" "), B(l)].join("")), l = K(p), p = null, t = 0), s = 0
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
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      c = Fh(c);
      f = G(Qb.c(h, f));
      h = null;
      for(var p = 0, t = 0;;) {
        if(t < p) {
          var s = h.I(null, t);
          d.c(c, s);
          t += 1
        }else {
          if(f = G(f)) {
            h = f, dc(h) ? (f = vb(h), t = wb(h), h = f, p = N(f), f = t) : (f = H(h), d.c(c, f), f = K(h), h = null, p = 0), t = 0
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
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}();
function Hh(c) {
  return"string" === typeof c ? c : xg.c(" ", X.c(function(c) {
    var e = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return[B(ye(e)), B(":"), B(ye(c)), B(";")].join("")
  }, c))
}
var Ih = function() {
  function c(c, d, e) {
    if(w(e)) {
      if(Ub(e)) {
        return c = Fh(c), c[ye(d)] = e, c
      }
      c = Fh(c);
      c.setAttribute(ye(d), d === Bf ? Hh(e) : e);
      return c
    }
    return null
  }
  function d(c, d) {
    return e.d(Fh(c), d, "true")
  }
  var e = null, f = function() {
    function c(e, f, h, t) {
      var s = null;
      3 < arguments.length && (s = L(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, e, f, h, s)
    }
    function d(c, f, h, k) {
      if(!Uc(N(k))) {
        throw Error([B("Assert failed: "), B(Me.i(L([xc(new Fb(null, "even?", "even?", -1543640034, null), xc(new Fb(null, "count", "count", -1545680184, null), new Fb(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      c = Fh(c);
      f = G(M(Y([f, h], !0), id.c(2, k)));
      h = null;
      for(var s = k = 0;;) {
        if(s < k) {
          var v = h.I(null, s), z = P.d(v, 0, null), v = P.d(v, 1, null);
          e.d(c, z, v);
          s += 1
        }else {
          if(f = G(f)) {
            dc(f) ? (k = vb(f), f = wb(f), h = k, k = N(k)) : (k = H(f), h = P.d(k, 0, null), k = P.d(k, 1, null), e.d(c, h, k), f = K(f), h = null, k = 0), s = 0
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
      c = K(c);
      var f = H(c);
      c = K(c);
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
        return f.i(e, k, l, L(arguments, 3))
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
function Jh(c, d) {
  return w(d) ? Fh(c).getAttribute(ye(d)) : null
}
;var Kh, Lh, Mh, Nh;
function Oh() {
  return ca.navigator ? ca.navigator.userAgent : null
}
Nh = Mh = Lh = Kh = !1;
var Ph;
if(Ph = Oh()) {
  var Qh = ca.navigator;
  Kh = 0 == Ph.indexOf("Opera");
  Lh = !Kh && -1 != Ph.indexOf("MSIE");
  Mh = !Kh && -1 != Ph.indexOf("WebKit");
  Nh = !Kh && !Mh && "Gecko" == Qh.product
}
var Rh = Kh, Sh = Lh, Th = Nh, Uh = Mh, Vh = ca.navigator, Wh = -1 != (Vh && Vh.platform || "").indexOf("Mac");
function Xh() {
  var c = ca.document;
  return c ? c.documentMode : void 0
}
var Yh;
a: {
  var Zh = "", $h;
  if(Rh && ca.opera) {
    var ai = ca.opera.version, Zh = "function" == typeof ai ? ai() : ai
  }else {
    if(Th ? $h = /rv\:([^\);]+)(\)|;)/ : Sh ? $h = /MSIE\s+([^\);]+)(\)|;)/ : Uh && ($h = /WebKit\/(\S+)/), $h) {
      var bi = $h.exec(Oh()), Zh = bi ? bi[1] : ""
    }
  }
  if(Sh) {
    var ci = Xh();
    if(ci > parseFloat(Zh)) {
      Yh = String(ci);
      break a
    }
  }
  Yh = Zh
}
var di = {};
function ei(c) {
  var d;
  if(!(d = di[c])) {
    d = 0;
    for(var e = ma(String(Yh)).split("."), f = ma(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
      var l = e[k] || "", n = f[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = p.exec(l) || ["", "", ""], v = t.exec(n) || ["", "", ""];
        if(0 == s[0].length && 0 == v[0].length) {
          break
        }
        d = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == v[2].length) ? -1 : (0 == s[2].length) > (0 == v[2].length) ? 1 : 0) || (s[2] < v[2] ? -1 : s[2] > v[2] ? 1 : 0)
      }while(0 == d)
    }
    d = di[c] = 0 <= d
  }
  return d
}
var fi = ca.document, gi = fi && Sh ? Xh() || ("CSS1Compat" == fi.compatMode ? parseInt(Yh, 10) : 5) : void 0;
var hi;
(hi = !Sh) || (hi = Sh && 9 <= gi);
var ii = hi, ji = Sh && !ei("9");
!Uh || ei("528");
Th && ei("1.9b") || Sh && ei("8") || Rh && ei("9.5") || Uh && ei("528");
Th && !ei("8") || Sh && ei("9");
function ki() {
  0 != li && (this.Dc = Error().stack, ea(this))
}
var li = 0;
function mi(c, d) {
  this.type = c;
  this.currentTarget = this.target = d
}
mi.prototype.Ua = !1;
mi.prototype.defaultPrevented = !1;
mi.prototype.gb = !0;
mi.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.gb = !1
};
function ni(c) {
  ni[" "](c);
  return c
}
ni[" "] = function() {
};
function oi(c, d) {
  c && this.init(c, d)
}
la(oi, mi);
q = oi.prototype;
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
  mi.call(this, e);
  this.target = c.target || c.srcElement;
  this.currentTarget = d;
  var f = c.relatedTarget;
  if(f) {
    if(Th) {
      var h;
      a: {
        try {
          ni(f.nodeName);
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
  this.offsetX = Uh || void 0 !== c.offsetX ? c.offsetX : c.layerX;
  this.offsetY = Uh || void 0 !== c.offsetY ? c.offsetY : c.layerY;
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
  this.kc = Wh ? c.metaKey : c.ctrlKey;
  this.state = c.state;
  this.Wb = c;
  c.defaultPrevented && this.preventDefault();
  delete this.Ua
};
q.preventDefault = function() {
  oi.nc.preventDefault.call(this);
  var c = this.Wb;
  if(c.preventDefault) {
    c.preventDefault()
  }else {
    if(c.returnValue = !1, ji) {
      try {
        if(c.ctrlKey || 112 <= c.keyCode && 123 >= c.keyCode) {
          c.keyCode = -1
        }
      }catch(d) {
      }
    }
  }
};
function pi(c) {
  return D([Z, Qf, Hf, c], !0)
}
function qi(c, d) {
  var e = qh(c), f = $(c, ef).O, h = $(c, ef).T;
  return Kg(f, Ng(h, Qg(Lg(d, e))))
}
var ri = function() {
  function c(c) {
    return D([Z, tf, lg, c], !0)
  }
  function d() {
    return e.e(Cd)
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
function si(c, d) {
  Y([c, d], !0);
  return 0 < jc(c, d) ? Y([c, d], !0) : Y([d, c], !0)
}
function ti(c, d) {
  return c.$ - d.$
}
function ui(c, d) {
  return c.S - d.S
}
function vi(c, d) {
  return c.da - d.da
}
function wi(c, d) {
  return c.ca - d.ca
}
function xi(c, d) {
  for(var e = c.sort(ti), f = d.sort(ui), h = N(f), k = 0, l = 0, n = ve, p = ob(ve);;) {
    if(k < h && l < h) {
      var t = e[k], s = f[l], v = t.id, z = s.id;
      if(t.$ < s.S) {
        var E = k + 1, O = l, R = Qb.c(n, v), p = U.d(function(c, d, e, f, h, k, l) {
          return function(c, d) {
            var e = si(d, l);
            return pb(c, e)
          }
        }(k, l, n, p, t, s, v, z), p, n), k = E, l = O, n = R
      }else {
        if(Ye) {
          l += 1, n = Yb.c(n, z)
        }else {
          return null
        }
      }
    }else {
      return qb(p)
    }
  }
}
function yi(c, d) {
  for(var e = c.sort(vi), f = d.sort(wi), h = N(f), k = 0, l = 0, n = ve, p = ob(ve);;) {
    if(k < h && l < h) {
      var t = e[k], s = f[l], v = t.id, z = s.id;
      if(t.da < s.ca) {
        var E = k + 1, O = l, R = Qb.c(n, v), p = U.d(function(c, d, e, f, h, k, l) {
          return function(c, d) {
            var e = si(d, l);
            return pb(c, e)
          }
        }(k, l, n, p, t, s, v, z), p, n), k = E, l = O, n = R
      }else {
        if(Ye) {
          l += 1, n = Yb.c(n, z)
        }else {
          return null
        }
      }
    }else {
      return qb(p)
    }
  }
}
function zi(c) {
  var d = Gc(X.c(function(c) {
    var d = ph(c);
    c = $(c, wf);
    c.id = d;
    return c
  }, gd(function(c) {
    return ih.d(c, wf, tf)
  }, oh(c)))), e = d.slice(0);
  c = xi(d, e);
  d = yi(d, e);
  return G(Vg.c(c, d))
}
function Ai(c, d, e, f) {
  return d + f > Mg(Lg(c, e))
}
function Bi(c, d) {
  function e(c) {
    var d = $(c, wf).S, e = qh(c);
    c = P.d(e, 0, null);
    e = P.d(e, 1, null);
    d = Fg.e ? Fg.e(d - c) : Fg.call(null, d - c);
    if(0 > d) {
      throw Error([B("Assert failed: "), B("The circle radius cannot be negative."), B("\n"), B(Me.i(L([xc(new Fb(null, "not", "not", -1640422260, null), xc(new Fb(null, "\x3c", "\x3c", -1640531467, null), new Fb(null, "r", "r", -1640531413, null), 0))], 0)))].join(""));
    }
    return Y([Y([c, e], !0), d], !0)
  }
  return gd(function(d) {
    return T.c(Ai, Kc.c(e(mh(c, H(d))), e(mh(c, H(K(d))))))
  }, d)
}
function Ci(c, d, e) {
  c = qh(d);
  var f = qh(e), h = $(d, wf).S, k = $(e, wf).S, l = Lg(f, c), h = Fg.e ? Fg.e(h - H(c)) : Fg.call(null, h - H(c)), f = Fg.e ? Fg.e(k - H(f)) : Fg.call(null, k - H(f)), k = Mg(l);
  return w(0 === P.c(l, 0) && P.c(l, 0) === P.c(l, 1)) ? D([Zf, ph(d), Cf, ph(e), ag, Y([D([ig, h, Ef, Y([1, 0], !0), $e, c], !0)], !0)], !0) : k > h + f ? D([Zf, ph(d), Cf, ph(e), ag, Cd], !0) : Ye ? (l = Rg(l), D([Zf, ph(d), Cf, ph(e), ag, Y([D([ig, h + f - k, Ef, l, $e, Kg(Ng(h, l), c)], !0)], !0)], !0)) : null
}
function Di(c, d) {
  return sh(c, ed.c(function(d) {
    var f = gc(d) ? T.c(oe, d) : d, h = Q.c(f, ag);
    d = Q.c(f, Cf);
    f = Q.c(f, Zf);
    if(G(h)) {
      var h = H(h), k = $e.e(h), f = mh(c, f), l = mh(c, d);
      d = Ef.e(h);
      var n = qi(f, k), p = qi(l, k), n = Lg(p, n), t = Og(n, d);
      if(0 < t) {
        d = Cd
      }else {
        var h = ig.e(h), p = $(f, ef), n = $(l, ef), s = rh(f), v = rh(l), z = Hf.c($(f, Qf), Eg), E = Hf.c($(l, Qf), Eg), O = Og(Qg(Lg(k, qh(f))), d), k = Og(Qg(Lg(k, qh(l))), d), t = -2 * t / (1 / s + 1 / v + O * O / z + k * k / E), s = Lg(p.O, Ng(t / s, d)), v = Kg(n.O, Ng(t / v, d)), z = p.T + O * t / z, k = n.T - k * t / E;
        Ng(0.5 * h, d);
        f = jh(f, ah(p.acceleration, s, p.Z, p.aa, z, p.Y));
        l = jh(l, ah(n.acceleration, v, n.Z, n.aa, k, n.Y));
        w(w(h) ? 0 < h : h) ? (n = rh(f), k = rh(l), p = qh(f), E = qh(l), d = Ng(h, d), d = Y([jh(f, bh(Lg(p, Ng(1 / n, d)))), jh(l, bh(Kg(E, Ng(1 / k, d))))], !0)) : d = Y([f, l], !0)
      }
    }else {
      d = Cd
    }
    return d
  }, d))
}
function Ei(c, d) {
  return G(d) ? Di(c, X.c(Wc.d(T, Ci, c), gd(Wc.c(Rc, Tc), X.c(Wc.c(X, Wc.c(mh, c)), d)))) : c
}
function Fi(c) {
  var d = zi(c), e = Bi(c, d), f = U.d(function(c, d) {
    return function(e, f) {
      var p = H(f), t = H(K(f));
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
  return sh(c, X.c(function(c) {
    return jh(c, ri.e(Q.c(f, ph(c))))
  }, gd(function(c) {
    return ic(c, tf)
  }, oh(c))))
}
function Gi(c, d) {
  function e(c) {
    return ic(c, kg) && ic(c, ef)
  }
  return sh(d, X.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    c = Fg.e ? Fg.e(rh(d) * Mg(Lg($(c, ef).O, $(d, ef).O))) : Fg.call(null, rh(d) * Mg(Lg($(c, ef).O, $(d, ef).O)));
    c = D([Z, og, hf, c], !0);
    return jh(d, c)
  }, gd(function(c) {
    return Rc(e, c)
  }, gd(function(c) {
    return H(K(c))
  }, X.c(function(d) {
    return Y.c ? Y.c([d, mh(c, ph(d))], !0) : Y.call(null, [d, mh(c, ph(d))], !0)
  }, oh(d))))))
}
function Hi(c) {
  return Gi(c, Ei(c, hd(ve, ed.c(function(c) {
    var e = lg.e($(c, tf));
    return X.c(function(e) {
      return xe(Y([ph(c), e], !0))
    }, e)
  }, gd(function(c) {
    return G(lg.e($(c, tf)))
  }, gd(function(c) {
    return ic(c, tf)
  }, oh(c)))))))
}
;var Ii = function() {
  function c(c, d) {
    return D([Z, ff, If, c, of, d], !0)
  }
  function d(c) {
    return D([Z, ff, If, c, of, c], !0)
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
function Ji(c) {
  return D([Z, mg, rf, c, gf, 780, ug, 20], !0)
}
function Ki(c) {
  for(var d = function() {
    return function(c, d) {
      var e = hf.e($(d, og)), f = Sf.c($(d, Sf), 0), e = e - 300;
      return 0 < e ? jh(d, D([Z, Sf, Sf, f + e], !0)) : d
    }
  }(c), e = oh(c), f = Mc(Xe.e(c));;) {
    if(G(e)) {
      var h = H(e);
      ih.p(h, ff, og, uf) ? (h = d(c, h), e = K(e), f = Oc(f, ph(h), h)) : e = K(e)
    }else {
      return S.d(c, Xe, qb(f))
    }
  }
}
function Li(c) {
  for(var d = function() {
    return function(c, d) {
      var e = jd.c(d, Y([ff, of], !0)), f = jd.c(d, Y([ff, If], !0)), h = jd.c(d, Y([Sf, Sf], !0)), e = e - h;
      return jh(Tb.c(d, Sf), Ii.c(f, e))
    }
  }(c), e = oh(c), f = Mc(Xe.e(c));;) {
    if(G(e)) {
      var h = H(e);
      ih.d(h, Sf, ff) ? (h = d(c, h), e = K(e), f = Oc(f, ph(h), h)) : e = K(e)
    }else {
      return S.d(c, Xe, qb(f))
    }
  }
}
function Mi(c) {
  for(var d = function() {
    return function(c, d) {
      var e = jg.e($(d, Ze)), f = $(d, mg), h = rf.e(f), h = mh(c, h), h = $(h, ff), s = If.e(h), h = of.e(h) / s, h = 0 > h ? 0 : h, s = gf.e(f), f = ug.e(f), v = qh(d);
      P.d(v, 0, null);
      P.d(v, 1, null);
      var v = s - 4, z = f - 4;
      e.clear();
      e.beginFill(5592405);
      e.drawRect(0, 0, s, f);
      e.endFill();
      e.beginFill(16711680);
      e.drawRect(2, 2, v, z);
      e.endFill();
      e.beginFill(65280);
      e.drawRect(2, 2, h * v, z);
      e.endFill();
      return e
    }
  }(c), e = oh(c), f = Mc(Xe.e(c));;) {
    if(G(e)) {
      var h = H(e);
      ih.p(h, mg, Ze, $e) ? (h = d(c, h), e = K(e), f = Oc(f, ph(h), h)) : e = K(e)
    }else {
      return S.d(c, Xe, qb(f))
    }
  }
}
;var Ni = D([$e, Y([0, 0], !0), jf, Y([0, 0], !0), Tf, 0, vg, 0, sf, 15, xf, 8875054], !0);
function Oi(c) {
  var d = se.i(L([Ni, c], 0)), e = sf.e(d);
  c = Dg * e * e;
  var f = $e.e(d), h = P.d(f, 0, null), f = P.d(f, 1, null), k = xf.e(d), d = lh.i(L([bh(Y([h, f], !0)), ch(vg.e(d)), ah(Y([0, 0], !0), jf.e(d), Eg, 0, Tf.e(d), Eg), fh(c), D([Z, kf], !0), pi(0.25 * Dg * (Gg.c ? Gg.c(e, 4) : Gg.call(null, e, 4))), eh.c(Y([h - e, f - e], !0), Y([h + e, f + e], !0)), Ch(function() {
    var c = new PIXI.Graphics;
    c.beginFill(k);
    c.drawCircle(0, 0, e);
    c.endFill();
    return c
  }())], 0));
  return 50 > c ? jh(d, dh.e(100)) : jh(jh(d, ri.j()), Ii.e(0.5 * Dg * e * e))
}
var Pi = function() {
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
    return e.d(c, d, Cd)
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
function Qi(c, d) {
  var e = $(d, wf), f = rh(d), h = 0 * f, k = f - h, l = Se(De.c(2, 5)), n = Pi.c(k, l), p = qh(d), t = P.d(p, 0, null), s = P.d(p, 1, null), v = function() {
    return function(c, d, e, f, h, k, l, n, p) {
      return function Sg(s) {
        return new zc(null, function(c) {
          return function() {
            for(;;) {
              var d = G(s);
              if(d) {
                if(dc(d)) {
                  var e = vb(d), f = N(e), h = new Bc(Array(f), 0);
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
                  return e ? Fc(h.ka(), Sg(wb(d))) : Fc(h.ka(), null)
                }
                H(d);
                return M(Y([Se(De.c(c.$, c.S)), Se(De.c(c.da, c.ca))], !0), Sg(I(d)))
              }
              return null
            }
          }
        }(c, d, e, f, h, k, l, n, p), null, null)
      }
    }(e, f, h, k, l, n, p, t, s)(De.e(l))
  }(), z = X.c(function() {
    return function(c) {
      return qi(d, c)
    }
  }(e, f, h, k, l, n, p, t, s, v), v), v = X.p(function() {
    return function(c, e, f) {
      return Oi(D([xf, wg(), jf, e, Tf, $(d, ef).T, sf, Hg.e ? Hg.e(f / Dg) : Hg.call(null, f / Dg), $e, c], !0))
    }
  }(e, f, h, k, l, n, p, t, s, v, z), v, z, n), z = S.d(c, Xe, Tb.c(Xe.e(c), ph(d)));
  return sh(z, v)
}
function Ri(c) {
  return U.d(Qi, c, gd(function(c) {
    return 1 > of.e($(c, ff))
  }, gd(function(c) {
    return ih.d(c, kf, ff)
  }, oh(c))))
}
;var Si = 0;
function Ti() {
}
q = Ti.prototype;
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
  this.key = ++Si;
  this.Pa = !1
};
q.handleEvent = function(c) {
  return this.Xb ? this.Ha.call(this.Hb || this.src, c) : this.Ha.handleEvent.call(this.Ha, c)
};
var Ui = {}, Vi = {}, Wi = {}, Xi = {};
function Yi(c, d, e, f, h) {
  if("array" == u(d)) {
    for(var k = 0;k < d.length;k++) {
      Yi(c, d[k], e, f, h)
    }
  }else {
    a: {
      if(!d) {
        throw Error("Invalid event type");
      }
      f = !!f;
      var l = Vi;
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
      p = Zi();
      l = new Ti;
      l.init(e, p, c, d, f, h);
      l.bb = !1;
      p.src = c;
      p.Ha = l;
      n.push(l);
      Wi[k] || (Wi[k] = []);
      Wi[k].push(l);
      c.addEventListener ? c != ca && c.Vb || c.addEventListener(d, p, f) : c.attachEvent(d in Xi ? Xi[d] : Xi[d] = "on" + d, p);
      c = l
    }
    Ui[c.key] = c
  }
}
function Zi() {
  var c = $i, d = ii ? function(e) {
    return c.call(d.src, d.Ha, e)
  } : function(e) {
    e = c.call(d.src, d.Ha, e);
    if(!e) {
      return e
    }
  };
  return d
}
function aj(c, d, e, f, h) {
  if("array" == u(d)) {
    for(var k = 0;k < d.length;k++) {
      aj(c, d[k], e, f, h)
    }
  }else {
    f = !!f;
    a: {
      k = Vi;
      if(d in k && (k = k[d], f in k && (k = k[f], c = ea(c), k[c]))) {
        c = k[c];
        break a
      }
      c = null
    }
    if(c) {
      for(k = 0;k < c.length;k++) {
        if(c[k].Ha == e && c[k].capture == f && c[k].Hb == h) {
          bj(c[k].key);
          break
        }
      }
    }
  }
}
function bj(c) {
  var d = Ui[c];
  if(d && !d.Pa) {
    var e = d.src, f = d.type, h = d.$b, k = d.capture;
    e.removeEventListener ? e != ca && e.Vb || e.removeEventListener(f, h, k) : e.detachEvent && e.detachEvent(f in Xi ? Xi[f] : Xi[f] = "on" + f, h);
    e = ea(e);
    if(Wi[e]) {
      var h = Wi[e], l = qa(h, d);
      0 <= l && oa.splice.call(h, l, 1);
      0 == h.length && delete Wi[e]
    }
    d.Pa = !0;
    if(d = Vi[f][k][e]) {
      d.Yb = !0, cj(f, k, e, d)
    }
    delete Ui[c]
  }
}
function cj(c, d, e, f) {
  if(!f.fb && f.Yb) {
    for(var h = 0, k = 0;h < f.length;h++) {
      f[h].Pa ? f[h].$b.src = null : (h != k && (f[k] = f[h]), k++)
    }
    f.length = k;
    f.Yb = !1;
    0 == k && (delete Vi[c][d][e], Vi[c][d].ra--, 0 == Vi[c][d].ra && (delete Vi[c][d], Vi[c].ra--), 0 == Vi[c].ra && delete Vi[c])
  }
}
function dj(c, d, e, f, h) {
  var k = 1;
  d = ea(d);
  if(c[d]) {
    var l = --c.ma, n = c[d];
    n.fb ? n.fb++ : n.fb = 1;
    try {
      for(var p = n.length, t = 0;t < p;t++) {
        var s = n[t];
        s && !s.Pa && (k &= !1 !== ej(s, h))
      }
    }finally {
      c.ma = Math.max(l, c.ma), n.fb--, cj(e, f, d, n)
    }
  }
  return Boolean(k)
}
function ej(c, d) {
  c.bb && bj(c.key);
  return c.handleEvent(d)
}
function $i(c, d) {
  if(c.Pa) {
    return!0
  }
  var e = c.type, f = Vi;
  if(!(e in f)) {
    return!0
  }
  var f = f[e], h, k;
  if(!ii) {
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
    p = new oi;
    p.init(h, this);
    h = !0;
    try {
      if(l) {
        for(var s = [], v = p.currentTarget;v;v = v.parentNode) {
          s.push(v)
        }
        k = f[!0];
        k.ma = k.ra;
        for(var z = s.length - 1;!p.Ua && 0 <= z && k.ma;z--) {
          p.currentTarget = s[z], h &= dj(k, s[z], e, !0, p)
        }
        if(n) {
          for(k = f[!1], k.ma = k.ra, z = 0;!p.Ua && z < s.length && k.ma;z++) {
            p.currentTarget = s[z], h &= dj(k, s[z], e, !1, p)
          }
        }
      }else {
        h = ej(c, p)
      }
    }finally {
      s && (s.length = 0)
    }
    return h
  }
  e = new oi(d, this);
  return h = ej(c, e)
}
;function fj() {
  ki.call(this)
}
la(fj, ki);
q = fj.prototype;
q.Vb = !0;
q.Zb = null;
q.addEventListener = function(c, d, e, f) {
  Yi(this, c, d, e, f)
};
q.removeEventListener = function(c, d, e, f) {
  aj(this, c, d, e, f)
};
q.dispatchEvent = function(c) {
  var d = c.type || c, e = Vi;
  if(d in e) {
    if(da(c)) {
      c = new mi(c, this)
    }else {
      if(c instanceof mi) {
        c.target = c.target || this
      }else {
        var f = c;
        c = new mi(d, this);
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
        c.currentTarget = h[l], f &= dj(k, h[l], c.type, !0, c) && !1 != c.gb
      }
    }
    if(!1 in e) {
      if(k = e[!1], k.ma = k.ra, d) {
        for(l = 0;!c.Ua && l < h.length && k.ma;l++) {
          c.currentTarget = h[l], f &= dj(k, h[l], c.type, !1, c) && !1 != c.gb
        }
      }else {
        for(h = this;!c.Ua && h && k.ma;h = h.Zb) {
          c.currentTarget = h, f &= dj(k, h, c.type, !1, c) && !1 != c.gb
        }
      }
    }
    c = Boolean(f)
  }else {
    c = !0
  }
  return c
};
var gj = function() {
  function c(c, d) {
    return D([Z, Wf, Of, c, df, d], !0)
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
function hj(c) {
  var d = dg.e($(c, vg)), e = $(c, wf), f = e.$, e = e.S, d = Pg(d), e = Kg(qh(c), Ng(e - f, d)), f = P.d(e, 0, null), e = P.d(e, 1, null), d = Ng(5, d);
  return lh.i(L([bh(Y([f, e], !0)), D([Z, Rf], !0), ri.j(), ah(Y([0, 0], !0), Kg(d, $(c, ef).O), Eg, 0, 0, Eg), dh.e(60), eh.c(Y([f - 2, e - 2], !0), Y([f + 2, e + 2], !0)), Ch(function() {
    var c = new PIXI.Graphics;
    c.beginFill(65280);
    c.drawCircle(0, 0, 2);
    c.endFill();
    return c
  }())], 0))
}
function ij(c) {
  for(var d = function() {
    return function(c, d) {
      var e = $(d, Wf);
      return jh(d, S.d(e, df, nc(df.e(e) - 1, Of.e(e))))
    }
  }(c), e = oh(c), f = Mc(Xe.e(c));;) {
    if(G(e)) {
      var h = H(e);
      ih.c(h, Wf) ? (h = d(c, h), e = K(e), f = Oc(f, ph(h), h)) : e = K(e)
    }else {
      return S.d(c, Xe, qb(f))
    }
  }
}
function jj(c, d) {
  return sh(S.d(c, Xe, Tb.c(Xe.e(c), ph(d))), X.c(function(c) {
    var d = Sf.c($(c, Sf), 0);
    return jh(c, D([Z, Sf, Sf, 100 + d], !0))
  }, gd(Tc, X.c(function(d) {
    return mh(c, d)
  }, lg.e($(d, tf))))))
}
function kj(c) {
  return U.d(jj, c, gd(function(c) {
    return G(lg.e($(c, tf)))
  }, gd(function(c) {
    return ih.d(c, Rf, tf)
  }, oh(c))))
}
;var lj = function() {
  function c(c) {
    return U.d(nh, Td, X.c(function() {
      var c = Se(De.e(800)), d = Se(De.e(800)), e = Se(De.c(10, 25)), f = Se(De.c(-5, 5)), p = Se(De.c(-5, 5)), t = 0.01 * (oc.e(4 * Dg) - 2 * Dg), s = 0.01 * (oc.e(4 * Dg) - 2 * Dg);
      return Oi(D([xf, wg(), $e, Y([c, d], !0), jf, Y([f, p], !0), Tf, t, vg, s, sf, e], !0))
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
function mj() {
  var c = lj.j(), d = lh.i(L([bh(Y([400, 400], !0)), ah(Y([0, 0], !0), Y([0, 0], !0), 10, 0, 0, Eg), ch(0), ri.j(), Ii.e(1E4), D.c ? D.c([Z, uf], !0) : D.call(null, [Z, uf], !0), eh.c(Y([390, 390], !0), Y([410, 410], !0)), fh(100 * Dg), gj.e(10), pi(0.25 * Dg * (Gg.c ? Gg.c(10, 4) : Gg.call(null, 10, 4))), Ch(function() {
    var c = new PIXI.Graphics;
    c.beginFill(255);
    c.moveTo(10, 0);
    c.lineTo(-6, -6);
    c.lineTo(-6, 6);
    c.endFill();
    return c
  }())], 0)), e = lh.i(L([bh(Y([10, 770], !0)), Ch(new PIXI.Graphics), D([Z, Xf, Xf, 2], !0), Ji(ph(d))], 0));
  return nh(nh(c, d), e)
}
;function nj(c, d) {
  ki.call(this);
  this.eb = c || 1;
  this.Jb = d || ca;
  this.jb = ja(this.oc, this);
  this.Ib = ka()
}
la(nj, fj);
nj.prototype.enabled = !1;
nj.prototype.hb = null;
nj.prototype.oc = function() {
  if(this.enabled) {
    var c = ka() - this.Ib;
    0 < c && c < 0.8 * this.eb ? this.hb = this.Jb.setTimeout(this.jb, this.eb - c) : (this.dispatchEvent(oj), this.enabled && (this.hb = this.Jb.setTimeout(this.jb, this.eb), this.Ib = ka()))
  }
};
nj.prototype.start = function() {
  this.enabled = !0;
  this.hb || (this.hb = this.Jb.setTimeout(this.jb, this.eb), this.Ib = ka())
};
var oj = "tick";
function pj(c) {
  return Array.prototype.slice.call(c)
}
;var qj = we(["svg", null, "line", null]), rj = {};
function sj(c) {
  if(c ? c.Da : c) {
    return c.Da(c)
  }
  var d;
  d = sj[u(null == c ? null : c)];
  if(!d && (d = sj._, !d)) {
    throw A("PElement.-elem", c);
  }
  return d.call(null, c)
}
function tj(c, d) {
  var e = c.indexOf("#", d), f = c.indexOf(".", d), h = Math.min(e, f);
  return 0 > h ? Math.max(e, f) : h
}
function uj(c) {
  var d = ye(c), e = tj(d, 0);
  c = 0 < e ? d.substring(0, e) : 0 === e ? "div" : y ? d : null;
  c = w(qj.e ? qj.e(c) : qj.call(null, c)) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c);
  if(0 <= e) {
    for(d = d.substring(e);;) {
      var e = tj(d, 1), f = 0 <= e ? d.substring(0, e) : d, h = f.charAt(0);
      if(Ib.c("#", h)) {
        c.setAttribute("id", f.substring(1))
      }else {
        if(Ib.c(".", h)) {
          Gh.c(c, f.substring(1))
        }else {
          if(y) {
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
var vj = function() {
  function c(c, d) {
    if(d ? w(w(null) ? null : d.Aa) || (d.Gb ? 0 : x(rj, d)) : x(rj, d)) {
      return c.appendChild(sj(d)), c
    }
    if(gc(d)) {
      for(var k = G(d), l = null, n = 0, p = 0;;) {
        if(p < n) {
          var t = l.I(null, p);
          e.c(c, t);
          p += 1
        }else {
          if(k = G(k)) {
            l = k, dc(l) ? (k = vb(l), p = wb(l), l = k, n = N(k), k = p) : (k = H(l), e.c(c, k), k = K(l), l = null, n = 0), p = 0
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
      if(y) {
        throw[B("Don't know how to make node from: "), B(Me.i(L([d], 0)))].join("");
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
function Fh(c) {
  return(c ? w(w(null) ? null : c.Aa) || (c.Gb ? 0 : x(rj, c)) : x(rj, c)) ? sj(c) : vj.e(c)
}
rj.string = !0;
sj.string = function(c) {
  return c instanceof V ? uj(c) : document.createTextNode("" + B(c))
};
rj.number = !0;
sj.number = function(c) {
  return document.createTextNode("" + B(c))
};
wd.prototype.Aa = !0;
wd.prototype.Da = function() {
  for(var c = P.d(this, 0, null), d = P.d(this, 1, null), e = rc(this, 2), c = uj(c), f = bc(d) && !(d ? w(w(null) ? null : d.Aa) || (d.Gb ? 0 : x(rj, d)) : x(rj, d)) ? d : null, d = w(f) ? e : M(d, e), e = G(f), f = null, h = 0, k = 0;;) {
    if(k < h) {
      var l = f.I(null, k), n = P.d(l, 0, null), l = P.d(l, 1, null), p = n;
      if(Ib.c(tg, p)) {
        for(var n = G(l), l = null, t = p = 0;;) {
          if(t < p) {
            var s = l.I(null, t);
            Gh.c(c, s);
            t += 1
          }else {
            if(n = G(n)) {
              l = n, dc(l) ? (n = vb(l), t = wb(l), l = n, p = N(n), n = t) : (n = H(l), Gh.c(c, n), n = K(l), l = null, p = 0), t = 0
            }else {
              break
            }
          }
        }
      }else {
        Ib.c(qf, p) ? Gh.c(c, l) : y && Ih.d(c, n, l)
      }
      k += 1
    }else {
      if(e = G(e)) {
        if(dc(e)) {
          h = vb(e), e = wb(e), f = h, h = N(h)
        }else {
          h = H(e);
          f = P.d(h, 0, null);
          h = P.d(h, 1, null);
          k = f;
          if(Ib.c(tg, k)) {
            for(f = G(h), h = null, n = k = 0;;) {
              if(n < k) {
                l = h.I(null, n), Gh.c(c, l), n += 1
              }else {
                if(f = G(f)) {
                  h = f, dc(h) ? (f = vb(h), n = wb(h), h = f, k = N(f), f = n) : (f = H(h), Gh.c(c, f), f = K(h), h = null, k = 0), n = 0
                }else {
                  break
                }
              }
            }
          }else {
            Ib.c(qf, k) ? Gh.c(c, h) : y && Ih.d(c, f, h)
          }
          e = K(e);
          f = null;
          h = 0
        }
        k = 0
      }else {
        break
      }
    }
  }
  c.appendChild(Fh(d));
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
}catch(wj) {
  if(wj instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)")
  }else {
    if(y) {
      throw wj;
    }
  }
}
;var xj = function() {
  function c(c, d) {
    var e = Fh(c);
    e.appendChild(Fh(d));
    return e
  }
  var d = null, e = function() {
    function c(d, f, n) {
      var p = null;
      2 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, d, f, p)
    }
    function e(c, f, h) {
      c = Fh(c);
      f = G(M(f, h));
      h = null;
      for(var p = 0, t = 0;;) {
        if(t < p) {
          var s = h.I(null, t);
          d.c(c, s);
          t += 1
        }else {
          if(f = G(f)) {
            h = f, dc(h) ? (f = vb(h), t = wb(h), h = f, p = N(f), f = t) : (f = H(h), d.c(c, f), f = K(h), h = null, p = 0), t = 0
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
      c = K(c);
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
        return e.i(d, h, L(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.k = e.k;
  d.c = c;
  d.i = e.i;
  return d
}(), zj = function yj(d) {
  return(null == d ? 0 : d ? d.m & 8 || d.tc || (d.m ? 0 : x(Ca, d)) : x(Ca, d)) ? xg.c(" ", X.c(yj, d)) : "string" === typeof d || d instanceof V ? ye(d) : null
};
function Aj(c) {
  return Be(Tc, bd(function(c) {
    return c.parentNode
  }, Fh(c)))
}
var Bj = function() {
  function c(c, d) {
    var e = pj(Fh(Fh(c)).querySelectorAll(zj(d)));
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
}(), Cj = function() {
  function c(c, d, e) {
    var l = Fh(c);
    c = Fh(d);
    return H(gd(Bj.c(l, e), Be(function(c) {
      return c !== l
    }, Aj(c))))
  }
  function d(c, d) {
    return H(gd(Bj.e(d), Aj(Fh(c))))
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
}(), Dj = hd(Td, X.c(function(c) {
  var d = P.d(c, 0, null);
  c = P.d(c, 1, null);
  return Y([d, D([c, function(c) {
    return function(d) {
      var h = d.relatedTarget, k;
      k = d.mc;
      k = w(k) ? k : d.currentTarget;
      w(h) && (h = Fh(h), k = Fh(k), h = w(k.contains) ? k.contains(h) : w(k.compareDocumentPosition) ? 0 != (k.compareDocumentPosition(h) & 16) : null);
      return w(h) ? null : c.e ? c.e(d) : c.call(null, d)
    }
  }], !0)], !0)
}, D([eg, nf, Kf, yf], !0)));
function Ej(c, d, e) {
  return function(f) {
    var h = Cj.d(Fh(c), f.target, d);
    return w(w(h) ? va(Jh.c ? Jh.c(h, rg) : Jh.call(null, h, rg)) : h) ? (f.mc = h, e.e ? e.e(f) : e.call(null, f)) : null
  }
}
function Fj(c) {
  c = Fh(c).ic;
  return w(c) ? c : Td
}
var Gj = function() {
  function c(c, f, h) {
    var k = null;
    2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
    return d.call(this, c, f, k)
  }
  function d(c, d, h) {
    c = Fh(c);
    return c.ic = T.d(d, Fj(c), h)
  }
  c.n = 2;
  c.k = function(c) {
    var f = H(c);
    c = K(c);
    var h = H(c);
    c = I(c);
    return d(f, h, c)
  };
  c.i = d;
  return c
}();
function Hj(c) {
  return ac(c) ? Ee.c(function(c) {
    return Fh(H(c))
  }, I).call(null, c) : Y([Fh(c), null], !0)
}
var Ij = function() {
  function c(c, f) {
    var h = null;
    1 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 1), 0));
    return d.call(this, c, h)
  }
  function d(c, d) {
    if(!Uc(N(d))) {
      throw Error([B("Assert failed: "), B(Me.i(L([xc(new Fb(null, "even?", "even?", -1543640034, null), xc(new Fb(null, "count", "count", -1545680184, null), new Fb(null, "type-fs", "type-fs", 1801297401, null)))], 0)))].join(""));
    }
    for(var h = Hj(c), k = P.d(h, 0, null), h = P.d(h, 1, null), l = G(id.c(2, d)), n = null, p = 0, t = 0;;) {
      if(t < p) {
        for(var s = n.I(null, t), v = P.d(s, 0, null), s = P.d(s, 1, null), v = G(Q.d(Dj, v, D([v, Tc], !0))), z = null, E = 0, O = 0;;) {
          if(O < E) {
            var R = z.I(null, O), pa = P.d(R, 0, null), R = P.d(R, 1, null), R = (w(h) ? Wc.d(Ej, k, h) : Tc).call(null, R.e ? R.e(s) : R.call(null, s));
            Gj.i(k, ld, L([Y([h, pa, s], !0), R], 0));
            w(k.addEventListener) ? k.addEventListener(ye(pa), R) : k.attachEvent(ye(pa), R);
            O += 1
          }else {
            if(v = G(v)) {
              dc(v) ? (E = vb(v), v = wb(v), z = E, E = N(E)) : (E = H(v), z = P.d(E, 0, null), E = P.d(E, 1, null), E = (w(h) ? Wc.d(Ej, k, h) : Tc).call(null, E.e ? E.e(s) : E.call(null, s)), Gj.i(k, ld, L([Y([h, z, s], !0), E], 0)), w(k.addEventListener) ? k.addEventListener(ye(z), E) : k.attachEvent(ye(z), E), v = K(v), z = null, E = 0), O = 0
            }else {
              break
            }
          }
        }
        t += 1
      }else {
        if(l = G(l)) {
          if(dc(l)) {
            p = vb(l), l = wb(l), n = p, p = N(p)
          }else {
            n = H(l);
            p = P.d(n, 0, null);
            n = P.d(n, 1, null);
            p = G(Q.d(Dj, p, D([p, Tc], !0)));
            t = null;
            for(v = s = 0;;) {
              if(v < s) {
                E = t.I(null, v), z = P.d(E, 0, null), E = P.d(E, 1, null), E = (w(h) ? Wc.d(Ej, k, h) : Tc).call(null, E.e ? E.e(n) : E.call(null, n)), Gj.i(k, ld, L([Y([h, z, n], !0), E], 0)), w(k.addEventListener) ? k.addEventListener(ye(z), E) : k.attachEvent(ye(z), E), v += 1
              }else {
                if(p = G(p)) {
                  dc(p) ? (s = vb(p), p = wb(p), t = s, s = N(s)) : (s = H(p), t = P.d(s, 0, null), s = P.d(s, 1, null), s = (w(h) ? Wc.d(Ej, k, h) : Tc).call(null, s.e ? s.e(n) : s.call(null, n)), Gj.i(k, ld, L([Y([h, t, n], !0), s], 0)), w(k.addEventListener) ? k.addEventListener(ye(t), s) : k.attachEvent(ye(t), s), p = K(p), t = null, s = 0), v = 0
                }else {
                  break
                }
              }
            }
            l = K(l);
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
var Jj = D([38, pg, 40, ng, 37, Yf, 39, Vf, 32, Uf], !0), Kj = hd(ve, qe(Jj)), Lj = Pe.e(Cd), Mj = Pe.e(ve);
function Nj(c, d) {
  var e = d.keyCode;
  return ic(Kj, e) ? (w(d.preventDefault) ? d.preventDefault() : d.returnValue = !1, Re.d(Lj, Qb, Y([c, Jj.e ? Jj.e(e) : Jj.call(null, e)], !0)), !1) : null
}
function Oj() {
  var c = Xa(Lj);
  Re.c(Mj, function(d) {
    return U.d(function(c, d) {
      var h = P.d(d, 0, null), k = P.d(d, 1, null);
      return Ib.c(h, Lf) ? Qb.c(c, k) : Ib.c(h, $f) ? Yb.c(c, k) : Ye ? c : null
    }, d, c)
  })
}
function Pj(c) {
  var d = Ug.c(Xa(Mj), hd(ve, gd(Tc, X.c(function(c) {
    var d = P.d(c, 0, null);
    c = P.d(c, 1, null);
    return Ib.c(Lf, d) ? c : null
  }, Xa(Lj)))));
  Oj();
  Qe(Lj, Cd);
  return S.d(c, Df, d)
}
Ij.i(document, L([$f, function(c) {
  return Nj($f, c)
}], 0));
Ij.i(document, L([Lf, function(c) {
  return Nj(Lf, c)
}], 0));
var Qj = PIXI.autoDetectRenderer(800, 800, null, !1, !0), Rj = new PIXI.Stage(0), Sj = function(c) {
  return hd(Td, X.c(function(d) {
    var e = new PIXI.DisplayObjectContainer;
    c.addChild(e);
    return Y([d, e], !0)
  }, De.e(3)))
}(Rj), Tj = function() {
  var c = Pe.e(D([pf, Td, cg, ve], !0));
  return function(d, e) {
    var f = Xa(c), h = pf.e(f), k = cg.e(f), l = gd(function() {
      return function(c) {
        return ic(c, Ze)
      }
    }(f, h, k), oh(d)), f = hd(ve, X.c(ph, l));
    Fe.e(X.c(function(c) {
      var d = Xf.c($(c, Xf), 1), d = Q.c(e, d);
      c = jg.e($(c, Ze));
      return d.removeChild(c)
    }, X.c(function(c) {
      return mh(h, c)
    }, Wg.c(k, f))));
    Fe.e(X.c(function(c) {
      var d = Xf.c($(c, Xf), 1), d = Q.c(e, d);
      c = jg.e($(c, Ze));
      return d.addChild(c)
    }, X.c(Wc.c(mh, d), Wg.c(f, k))));
    k = U.d(Dh, d, l);
    Qe(c, D([pf, k, cg, f], !0));
    return k
  }
}(), Uj = Qj.view, Vj = Fh(document.getElementById("content"));
Vj.innerHTML = "";
xj.c(Vj, Uj);
var Wj = Pe.e(Td);
Re.c(Wj, function() {
  return mj()
});
function Xj(c) {
  c = ij(c);
  c = Pj(c);
  c = xh(c);
  c = Bh(c);
  a: {
    b: {
      c = zh(c);
      for(var d = oh(c), e = Mc(Xe.e(c));;) {
        if(G(d)) {
          var f = H(d), h = $(f, Wf), k = h, h = w(k) ? 0 === df.e(h) && ic(f, mf) : k;
          w(h) ? (h = hj(f), d = K(d), e = Oc(Oc(e, ph(h), h), ph(f), Tb.c(f, mf))) : d = K(d)
        }else {
          c = S.d(c, Xe, qb(e));
          break b
        }
      }
      c = void 0
    }
    d = Xe.e(c);
    for(e = Mc(Xe.e(c));;) {
      if(G(d)) {
        if(f = H(d), h = H(K(f)), ic(h, ef)) {
          var k = $(h, ef), l = qh(h), n = k.acceleration, p = k.O, t = k.Z, s = void 0, v = w(p) ? Mg(p) : 0, s = v > t ? v : t, t = k.aa, z = k.T, E = k.Y, v = dg.e($(h, vg)), p = Kg(p, n), p = Mg(p) > s ? Ng(s, Rg(p)) : p, s = z + t, z = Fg.e ? Fg.e(s) : Fg.call(null, s), E = z > E ? s / z * E : s, l = Kg(p, l), l = Y([nc(P.c(l, 0), 800), nc(P.c(l, 1), 800)], !0);
          h = kh(h, Y([ah(n, p, k.Z, t, E, k.Y), bh(l), ch(E + v)], !0));
          E = $(h, wf);
          w(E) && (k = qh(h), t = P.d(k, 0, null), v = P.d(k, 1, null), k = E.$, n = E.da, l = E.S, E = E.ca, t -= (k + l) / 2, v -= (n + E) / 2, h = jh(h, eh.p(k + t, n + v, l + t, E + v)));
          f = H(f);
          d = K(d);
          e = rb(e, f, h)
        }else {
          d = K(d)
        }
      }else {
        c = S.d(c, Xe, qb(e));
        break a
      }
    }
    c = void 0
  }
  c = Fi(c);
  c = kj(c);
  c = Hi(c);
  c = Ki(c);
  c = Li(c);
  c = Ri(c);
  c = Mi(c);
  return vh(c)
}
var Yj = new nj(16);
Yj.start();
Yi(Yj, oj, function() {
  return Re.c(Wj, Xj)
});
requestAnimFrame(function Zj() {
  Tj.c ? Tj.c(Xa(Wj), Sj) : Tj.call(null, Xa(Wj), Sj);
  Qj.render(Rj);
  return requestAnimFrame(Zj)
});

})();
