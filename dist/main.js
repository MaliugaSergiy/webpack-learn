!(function(e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = r),
    (t.d = function(e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function(e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function(r) {
              return e[r];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = "dist/"),
    t((t.s = 0));
})([
  function(e, r) {
    function t(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function n(e, r, t) {
      return (
        r in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[r] = t),
        e
      );
    }
    var o = { x: 1, y: 2, a: 3, b: 4 },
      u = o.x,
      c = o.y,
      l = (function(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function(e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              u = Object.keys(e);
            for (n = 0; n < u.length; n++)
              (t = u[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (n = 0; n < u.length; n++)
            (t = u[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      })(o, ["x", "y"]);
    console.log(u), console.log(c), console.log(l);
    var i = (function(e) {
      for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? t(o, !0).forEach(function(r) {
              n(e, r, o[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : t(o).forEach(function(r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(o, r)
              );
            });
      }
      return e;
    })({ x: u, y: c }, l);
    console.log(i.x);
    console.log("dsdsds");
  }
]);
//# sourceMappingURL=main.js.map
