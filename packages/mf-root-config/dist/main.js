!(function(e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t(require("single-spa"));
  else if ("function" == typeof define && define.amd) define(["single-spa"], t);
  else {
    var n =
      "object" == typeof exports
        ? t(require("single-spa"))
        : t(e["single-spa"]);
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function(e) {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 1))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0);
      var o = function(e) {
          return System.import(e);
        },
        u = function(e) {
          return o(e)
            .then(function(e) {
              return e.default;
            })
            .then(function(e) {
              return (function(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "app",
                  n = e.entrypoints,
                  r = e.publicPath,
                  u = n[t].assets;
                return o(r + u[0]);
              })(e);
            });
        };
      Object(r.registerApplication)(
        "@mf/application-vue",
        function() {
          return u("@mf/application-vue");
        },
        function(e) {
          return !0;
        }
      ),
        Object(r.start)();
    }
  ]);
});
//# sourceMappingURL=main.js.map
