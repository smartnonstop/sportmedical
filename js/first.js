/* repo: scripts/release-2016-02-10@2.17.0-1-gbacfcef - Package Version: 2.17.0 - 2016-02-10 12:12 pm - User: J. Smith */
/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */
function openAssessPopup(a) {
    wmdTrack("oap");
    var b = window.open(a, "WebMDHealthManagerTool", "resizable,scrollbars,width=705,height=600,left=25,top=25,screenX=25,screenY=25");
    return b && b.focus(), !1
}

function sl(a, b, c) {
    webmd.debug("LEGACY METRICS CALL sl IS INVOKED: ", a, b, c);
    var d, e, f, g, h, i, j, k, l = "string" == typeof a ? a : new String(a.href),
        m = 0,
        n = 0;
    if (window.s_linktext = "", "string" != typeof a && (window.s_linktext = $(a).text().replace(/[^\w\s]/g, "").replace(/\s+/g, " ") || $(a).find("img").attr("alt")), c = webmd.metrics.icm.adjustModuleName(a, c), l.indexOf("webmd.com") > -1 || -1 === l.indexOf("/click?") && !l.match(/^(http|ftp|mailto)/) ? window.ctrs(c) : wmdPageLink(c), -1 !== l.indexOf("/healthmanager.")) return window.openAssessPopup(a);
    if ("sp" === b) f = 380, g = 210, e = 0, h = 1, d = 0, i = 1, m = 25, n = 25;
    else if ("sdp" === b) f = 600, g = 700, i = 1, e = 0, h = 1, d = 0, m = 25, n = 25;
    else if ("scp" === b) f = 530, g = 490, i = 1, e = 0, h = 1, d = 0, m = 25, n = 25;
    else if ("ai" === b) f = 715, g = 600, i = 1, e = 0, h = 1, d = 0, m = 25, n = 25;
    else if ("nw" === b) f = 1e3, g = 600, i = 1, e = 1, j = 1, h = 1, d = 1, m = 25, n = 25;
    else {
        if ("hw" !== b) return !0;
        f = 675, g = 626, i = 1, e = 1, h = 1, d = 1, m = 25, n = 25
    }
    return k = window.open(a, "", "width=" + f + ",height=" + g + ",left=" + m + ",top=" + n + ",scrollbars=" + i + ",toolbar=" + e + ",resizable=" + h + ",status=" + d + ",menubar=" + j), webmd.offsite.showInterstitial(l), !1
}

function s_before_pv() {
    $(document).trigger("before_pv")
}

function s_beaconload() {
    $(document).trigger("beacon_load")
}

function printWindow() {
    var a = 800,
        b = 600,
        c = location.href,
        d = "width=" + a + ",height=" + b; - 1 !== c.search("[\\#]") && (c = c.split("#")[0]), c += -1 !== c.search("[\\?]") ? "&print=true" : "?print=true", d += navigator.appVersion.indexOf("Mac") > 0 ? ",toolbar=yes,resizable=yes,scrollbars=yes" : ",toolbar=1,location=1,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,copyhistory=0,top=10,left=10", window.open(c, "printFriendly", d)
}

function articleUrl() {
    var a = window.location.href,
        b = "?print=true",
        c = a.replace(b, ""),
        d = document.createElement("div");
    return -1 !== a.indexOf("&print") && (b = "&print=true"), d.setAttribute("id", "url_reference"), d.innerHTML = '<div>Article Link:<span class="art_link"> ' + c + "</span></div>", d
}

function printElements() {
    webmd.legacy.track("prel");
    var a = "",
        b = document.createElement("div"),
        c = document.getElementById("ContentPane2"),
        d = articleUrl(),
        e = document.createElement("div");
    return a.src = image_server_url + "/webmd/consumer_assets/site_images/layout/shared/logo_webmd_print.gif", a.width = "190", a.height = "43", b.setAttribute("id", "global-head-print"), b.innerHTML = '<div class="fontSizer"><div class="font_sizer_content"><p>Font size:</p><a class="module_fontSizeOne font_size_selected">A</a><a class="module_fontSizeTwo">A</a><a class="module_fontSizeThree">A</a></div></div>', b.innerHTML += '<a class="webmd-btn webmd-btn-pr webmd-btn-l" href="#" onclick="javascript:window.close();return false;">Close Window</a><a class="webmd-btn webmd-btn-pr webmd-btn-s" href="#" onclick="javascript:window.print();return sl(this,\'\',\'prnt\');"">Print</a></div>', c ? (e.setAttribute("id", "print_notes"), e.innerHTML = '<div><a href="#mynotes">Type in <strong>"My Notes"</strong> to add personal or doctor discussion notes before printing.</a></div>', c.appendChild(b), c.appendChild(e), void c.appendChild(d)) : !1
}! function(a, b) {
    function c(a) {
        var b = oa[a] = {};
        return $.each(a.split(ba), function(a, c) {
            b[c] = !0
        }), b
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(qa, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : pa.test(d) ? $.parseJSON(d) : d
                } catch (f) {}
                $.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        var b;
        for (b in a)
            if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        return !0
    }

    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function i(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function j(a, b, c) {
        if (b = b || 0, $.isFunction(b)) return $.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return $.grep(a, function(a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = $.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Ka.test(b)) return $.filter(b, d, !c);
            b = $.filter(b, d)
        }
        return $.grep(a, function(a, d) {
            return $.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = Na.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function m(a, b) {
        if (1 === b.nodeType && $.hasData(a)) {
            var c, d, e, f = $._data(a),
                g = $._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) $.event.add(b, c, h[c][d])
            }
            g.data && (g.data = $.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        Xa.test(a.type) && (a.defaultChecked = a.checked)
    }

    function q(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rb.length; e--;)
            if (b = rb[e] + c, b in a) return b;
        return d
    }

    function r(a, b) {
        return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    }

    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) c = a[f], c.style && (e[f] = $._data(c, "olddisplay"), b ? (e[f] || "none" !== c.style.display || (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cb(c, "display"), e[f] || "none" === d || $._data(c, "olddisplay", d)));
        for (f = 0; g > f; f++) c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
        return a
    }

    function t(a, b, c) {
        var d = kb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2) "margin" === c && (f += $.css(a, c + qb[e], !0)), d ? ("content" === c && (f -= parseFloat(cb(a, "padding" + qb[e])) || 0), "margin" !== c && (f -= parseFloat(cb(a, "border" + qb[e] + "Width")) || 0)) : (f += parseFloat(cb(a, "padding" + qb[e])) || 0, "padding" !== c && (f += parseFloat(cb(a, "border" + qb[e] + "Width")) || 0));
        return f
    }

    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
        if (0 >= d || null == d) {
            if (d = cb(a, b), (0 > d || null == d) && (d = a.style[b]), lb.test(d)) return d;
            e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function w(a) {
        if (nb[a]) return nb[a];
        var b = $("<" + a + ">").appendTo(P.body),
            c = b.css("display");
        return b.remove(), ("none" === c || "" === c) && (db = P.body.appendChild(db || $.extend(P.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), eb && db.createElement || (eb = (db.contentWindow || db.contentDocument).document, eb.write("<!doctype html><html><body>"), eb.close()), b = eb.body.appendChild(eb.createElement(a)), c = cb(b, "display"), P.body.removeChild(db)), nb[a] = c, c
    }

    function x(a, b, c, d) {
        var e;
        if ($.isArray(b)) $.each(b, function(b, e) {
            c || ub.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== $.type(b)) d(a, b);
        else
            for (e in b) x(a + "[" + e + "]", b[e], c, d)
    }

    function y(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(ba),
                h = 0,
                i = g.length;
            if ($.isFunction(c))
                for (; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function z(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kb; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
        return !l && h || g["*"] || (h = z(a, c, d, e, "*", g)), h
    }

    function A(a, c) {
        var d, e, f = $.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && $.extend(!0, a, e)
    }

    function B(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function C(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1])
            for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)
            if ("*" !== e) {
                if ("*" !== h && h !== e) {
                    if (c = i[h + " " + e] || i["* " + e], !c)
                        for (d in i)
                            if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                                c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                break
                            }
                    if (c !== !0)
                        if (c && a["throws"]) b = c(b);
                        else try {
                            b = c(b)
                        } catch (k) {
                            return {
                                state: "parsererror",
                                error: c ? k : "No conversion from " + h + " to " + e
                            }
                        }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }

    function D() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function E() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function F() {
        return setTimeout(function() {
            Vb = b
        }, 0), Vb = $.now()
    }

    function G(a, b) {
        $.each(b, function(b, c) {
            for (var d = (_b[b] || []).concat(_b["*"]), e = 0, f = d.length; f > e; e++)
                if (d[e].call(a, b, c)) return
        })
    }

    function H(a, b, c) {
        var d, e = 0,
            f = $b.length,
            g = $.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                for (var b = Vb || F(), c = Math.max(0, i.startTime + i.duration - b), d = 1 - (c / i.duration || 0), e = 0, f = i.tweens.length; f > e; e++) i.tweens[e].run(d);
                return g.notifyWith(a, [i, d, c]), 1 > d && f ? c : (g.resolveWith(a, [i]), !1)
            },
            i = g.promise({
                elem: a,
                props: $.extend({}, b),
                opts: $.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Vb || F(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                    return i.tweens.push(e), e
                },
                stop: function(b) {
                    for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++) i.tweens[c].run(1);
                    return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
                }
            }),
            j = i.props;
        for (I(j, i.opts.specialEasing); f > e; e++)
            if (d = $b[e].call(i, a, j, i.opts)) return d;
        return G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    function I(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function J(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {},
            o = [],
            p = a.nodeType && r(a);
        c.queue || (j = $._queueHooks(a, "fx"), null == j.unqueued && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
            j.unqueued || k()
        }), j.unqueued++, l.always(function() {
            l.always(function() {
                j.unqueued--, $.queue(a, "fx").length || j.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? m.zoom = 1 : m.display = "inline-block")), c.overflow && (m.overflow = "hidden", $.support.shrinkWrapBlocks || l.done(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (f = b[d], Xb.exec(f)) {
                if (delete b[d], f === (p ? "hide" : "show")) continue;
                o.push(d)
            }
        if (g = o.length)
            for (h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), p ? $(a).show() : l.done(function() {
                    $(a).hide()
                }), l.done(function() {
                    var b;
                    $.removeData(a, "fxshow", !0);
                    for (b in n) $.style(a, b, n[b])
                }), d = 0; g > d; d++) e = o[d], i = l.createTween(e, p ? h[e] : 0), n[e] = h[e] || $.style(a, e), e in h || (h[e] = i.start, p && (i.end = i.start, i.start = "width" === e || "height" === e ? 1 : 0))
    }

    function K(a, b, c, d, e) {
        return new K.prototype.init(a, b, c, d, e)
    }

    function L(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = qb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function M(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var N, O, P = a.document,
        Q = a.location,
        R = a.navigator,
        S = a.jQuery,
        T = a.$,
        U = Array.prototype.push,
        V = Array.prototype.slice,
        W = Array.prototype.indexOf,
        X = Object.prototype.toString,
        Y = Object.prototype.hasOwnProperty,
        Z = String.prototype.trim,
        $ = function(a, b) {
            return new $.fn.init(a, b, N)
        },
        _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        aa = /\S/,
        ba = /\s+/,
        ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fa = /^[\],:{}\s]*$/,
        ga = /(?:^|:|,)(?:\s*\[)+/g,
        ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ja = /^-ms-/,
        ka = /-([\da-z])/gi,
        la = function(a, b) {
            return (b + "").toUpperCase()
        },
        ma = function() {
            P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ma, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ma), $.ready())
        },
        na = {};
    $.fn = $.prototype = {
        constructor: $,
        init: function(a, c, d) {
            var e, f, g;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : da.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) return c = c instanceof $ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], g, !0), ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
                if (f = P.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = P, this.selector = a, this
            }
            return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return V.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = $.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        },
        each: function(a, b) {
            return $.each(this, a, b)
        },
        ready: function(a) {
            return $.ready.promise().done(a), this
        },
        eq: function(a) {
            return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack($.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    }, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || $.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (a = arguments[i]))
                for (c in a) d = h[c], e = a[c], h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, $.extend({
        noConflict: function(b) {
            return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? $.readyWait++ : $.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--$.readyWait : !$.isReady) {
                if (!P.body) return setTimeout($.ready, 1);
                $.isReady = !0, a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === $.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === $.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? String(a) : na[X.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a)) return !1;
            try {
                if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || Y.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = ea.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
        },
        parseJSON: function(b) {
            return b && "string" == typeof b ? (b = $.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && aa.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(ja, "ms-").replace(ka, la)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = g === b || $.isFunction(a);
            if (d)
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1) break
                } else
                    for (; g > f && c.apply(a[f++], d) !== !1;);
            else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1) break
            } else
                for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
            return a
        },
        trim: Z && !Z.call("\ufeffÂ ") ? function(a) {
            return null == a ? "" : Z.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(ca, "")
        },
        makeArray: function(a, b) {
            var c, d = b || [];
            return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (W) return W.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
            if (j)
                for (; i > h; h++) e = c(a[h], h, d), null != e && (g[g.length] = e);
            else
                for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function() {
                return a.apply(c, e.concat(V.call(arguments)))
            }, f.guid = a.guid = a.guid || $.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = null == d,
                k = 0,
                l = a.length;
            if (d && "object" == typeof d) {
                for (k in d) $.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && $.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                        return i.call($(a), c)
                    }) : (c.call(a, e), c = null)), c)
                    for (; l > k; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }), $.ready.promise = function(b) {
        if (!O)
            if (O = $.Deferred(), "complete" === P.readyState) setTimeout($.ready, 1);
            else if (P.addEventListener) P.addEventListener("DOMContentLoaded", ma, !1), a.addEventListener("load", $.ready, !1);
        else {
            P.attachEvent("onreadystatechange", ma), a.attachEvent("onload", $.ready);
            var c = !1;
            try {
                c = null == a.frameElement && P.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!$.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    $.ready()
                }
            }()
        }
        return O.promise(b)
    }, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        na["[object " + b + "]"] = b.toLowerCase()
    }), N = $(P);
    var oa = {};
    $.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || c(a) : $.extend({}, a);
        var d, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                    if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        d = !1;
                        break
                    }
                f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
            },
            m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function c(b) {
                            $.each(b, function(b, d) {
                                var e = $.type(d);
                                "function" !== e || a.unique && m.has(d) ? d && d.length && "string" !== e && c(d) : j.push(d)
                            })
                        }(arguments), f ? h = j.length : d && (g = b, l(d))
                    }
                    return this
                },
                remove: function() {
                    return j && $.each(arguments, function(a, b) {
                        for (var c;
                            (c = $.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                    }), this
                },
                has: function(a) {
                    return $.inArray(a, j) > -1
                },
                empty: function() {
                    return j = [], this
                },
                disable: function() {
                    return j = k = d = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, d || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || e && !k || (f ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return m
    }, $.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", $.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", $.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", $.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return $.Deferred(function(c) {
                            $.each(b, function(b, d) {
                                var f = d[0],
                                    g = a[b];
                                e[d[1]]($.isFunction(g) ? function() {
                                    var a = g.apply(this, arguments);
                                    a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? $.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, $.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = V.call(arguments),
                g = f.length,
                h = 1 !== g || a && $.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : $.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? V.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), $.support = function() {
        var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
        if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5", !c || !c.length) return {};
        e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!P.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === P.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (n) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
                b.noCloneEvent = !1
            }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
            for (j in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
        return $(function() {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                h = P.getElementsByTagName("body")[0];
            h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {
                width: "4px"
            }).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
        }), h.removeChild(m), c = d = e = f = g = h = m = null, b
    }();
    var pa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        qa = /([A-Z])/g;
    $.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a)
        },
        data: function(a, c, d, e) {
            if ($.acceptData(a)) {
                var f, g, h = $.expando,
                    i = "string" == typeof c,
                    j = a.nodeType,
                    k = j ? $.cache : a,
                    l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f, g
            }
        },
        removeData: function(a, b, c) {
            if ($.acceptData(a)) {
                var d, f, g, h = a.nodeType,
                    i = h ? $.cache : a,
                    j = h ? a[$.expando] : $.expando;
                if (i[j]) {
                    if (b && (d = c ? i[j] : i[j].data)) {
                        $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
                        if (!(c ? e : $.isEmptyObject)(d)) return
                    }(c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                }
            }
        },
        _data: function(a, b, c) {
            return $.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), $.fn.extend({
        data: function(a, c) {
            var e, f, g, h, i, j = this[0],
                k = 0,
                l = null;
            if (a === b) {
                if (this.length && (l = $.data(j), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
                    for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
                    $._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function() {
                $.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function(c) {
                return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function() {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e)
                }))
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                $.removeData(this, a)
            })
        }
    }), $.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = $.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = $._queueHooks(a, b),
                g = function() {
                    $.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return $._data(a, c) || $._data(a, c, {
                empty: $.Callbacks("once memory").add(function() {
                    $.removeData(a, b + "queue", !0), $.removeData(a, c, !0)
                })
            })
        }
    }), $.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                $.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = $.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var ra, sa, ta, ua = /[\t\r\n]/g,
        va = /\r/g,
        wa = /^(?:button|input)$/i,
        xa = /^(?:button|input|object|select|textarea)$/i,
        ya = /^a(?:rea|)$/i,
        za = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Aa = $.support.getSetAttribute;
    $.fn.extend({
        attr: function(a, b) {
            return $.access(this, $.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                $.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return $.access(this, $.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = $.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if ($.isFunction(a)) return this.each(function(b) {
                $(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)
                for (b = a.split(ba), c = 0, d = this.length; d > c; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = $.trim(f)
                        } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if ($.isFunction(a)) return this.each(function(b) {
                $(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(ba), h = 0, i = this.length; i > h; h++)
                    if (e = this[h], 1 === e.nodeType && e.className) {
                        for (d = (" " + e.className + " ").replace(ua, " "), f = 0, g = c.length; g > f; f++)
                            for (; d.indexOf(" " + c[f] + " ") >= 0;) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? $.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return $.isFunction(a) ? this.each(function(c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = $(this), h = b, i = a.split(ba); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ua, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = $.isFunction(a), this.each(function(d) {
                    var f, g = $(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value,
                    "string" == typeof d ? d.replace(va, "") : null == d ? "" : d)
            }
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = "select-one" === a.type;
                    if (0 > f) return null;
                    for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                        if (e = h[c], e.selected && ($.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !$.nodeName(e.parentNode, "optgroup"))) {
                            if (b = $(e).val(), i) return b;
                            g.push(b)
                        }
                    return i && !g.length && h.length ? $(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = $.makeArray(b);
                    return $(a).find("option").each(function() {
                        this.selected = $.inArray($(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i) return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (za.test(c) ? sa : ra)), d !== b ? null === d ? void $.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)
                for (d = b.split(ba); g < d.length; g++) e = d[g], e && (c = $.propFix[e] || e, f = za.test(e), f || $.attr(a, e, ""), a.removeAttribute(Aa ? e : c), f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (wa.test(a.nodeName) && a.parentNode) $.error("type property can't be changed");
                    else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return ra && $.nodeName(a, "button") ? ra.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    return ra && $.nodeName(a, "button") ? ra.set(a, b, c) : void(a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : xa.test(a.nodeName) || ya.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), sa = {
        get: function(a, c) {
            var d, e = $.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Aa || (ta = {
        name: !0,
        id: !0,
        coords: !0
    }, ra = $.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (ta[c] ? "" !== d.value : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, $.each(["width", "height"], function(a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), $.attrHooks.contenteditable = {
        get: ra.get,
        set: function(a, b, c) {
            "" === b && (b = "false"), ra.set(a, b, c)
        }
    }), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function(a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), $.support.style || ($.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function(a, b) {
                return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Ba = /^(?:textarea|input|select)$/i,
        Ca = /^([^\.]*|)(?:\.(.+)|)$/,
        Da = /(?:^|\s)hover(\.\S+|)\b/,
        Ea = /^key/,
        Fa = /^(?:mouse|contextmenu)|click/,
        Ga = /^(?:focusinfocus|focusoutblur)$/,
        Ha = function(a) {
            return $.event.special.hover ? a : a.replace(Da, "mouseenter$1 mouseleave$1")
        };
    $.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q;
                if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                    for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                            return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = a), c = $.trim(Ha(c)).split(" "), j = 0; j < c.length; j++) k = Ca.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && $.expr.match.needsContext.test(f),
                        namespace: m.join(".")
                    }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0;
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
                if (q && (m = q.events)) {
                    for (b = $.trim(Ha(b || "")).split(" "), f = 0; f < b.length; f++)
                        if (g = Ca.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                            for (n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++) p = o[l], !e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
                            0 === o.length && k !== o.length && (n.teardown && n.teardown.call(a, j, q.handle) !== !1 || $.removeEvent(a, h, q.handle), delete m[h])
                        } else
                            for (h in m) $.event.remove(a, h + b[f], c, d, !0);
                    $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                        r = [];
                    if (!Ga.test(q + $.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), e && !$.event.customEvent[q] || $.event.global[q]))
                        if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", e) {
                            if (c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {}, !m.trigger || m.trigger.apply(e, d) !== !1) {
                                if (o = [
                                        [e, m.bindType || q]
                                    ], !f && !m.noBubble && !$.isWindow(e)) {
                                    for (p = m.delegateType || q, j = Ga.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode) o.push([j, p]), k = j;
                                    k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                                }
                                for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                                return c.type = q, f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && $.nodeName(e, "a") || !$.acceptData(e) || l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !$.isWindow(e) && (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, k && (e[l] = k)), c.result
                            }
                        } else {
                            g = $.cache;
                            for (i in g) g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0)
                        }
                }
            },
            dispatch: function(c) {
                c = $.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [],
                    n = m.delegateCount,
                    o = V.call(arguments),
                    p = !c.exclusive && !c.namespace,
                    q = $.event.special[c.type] || {},
                    r = [];
                if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                    if (n && (!c.button || "click" !== c.type))
                        for (f = c.target; f != this; f = f.parentNode || this)
                            if (f.disabled !== !0 || "click" !== c.type) {
                                for (h = {}, j = [], d = 0; n > d; d++) k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
                                j.length && r.push({
                                    elem: f,
                                    matches: j
                                })
                            }
                    for (m.length > n && r.push({
                            elem: this,
                            matches: m.slice(n)
                        }), d = 0; d < r.length && !c.isPropagationStopped(); d++)
                        for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
                    return q.postDispatch && q.postDispatch.call(this, c), c.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[$.expando]) return a;
                var b, c, d = a,
                    e = $.event.fixHooks[a.type] || {},
                    f = e.props ? this.props.concat(e.props) : this.props;
                for (a = $.Event(d), b = f.length; b;) c = f[--b], a[c] = d[c];
                return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        $.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = $.extend(new $.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
        }, $.Event = function(a, b) {
            return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), void(this[$.expando] = !0)) : new $.Event(a, b)
        }, $.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = g;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = g;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = g, this.stopPropagation()
            },
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f
        }, $.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            $.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    f.selector;
                    return (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), $.support.submitBubbles || ($.event.special.submit = {
            setup: function() {
                return $.nodeName(this, "form") ? !1 : void $.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
                    d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), $._data(d, "_submit_attached", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return $.nodeName(this, "form") ? !1 : void $.event.remove(this, "._submit")
            }
        }), $.support.changeBubbles || ($.event.special.change = {
            setup: function() {
                return Ba.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), $.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0)
                })), !1) : void $.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Ba.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || $.event.simulate("change", this.parentNode, a, !0)
                    }), $._data(b, "_change_attached", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return $.event.remove(this, "._change"), !Ba.test(this.nodeName)
            }
        }), $.support.focusinBubbles || $.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    $.event.simulate(b, a.target, $.event.fix(a), !0)
                };
            $.event.special[b] = {
                setup: function() {
                    0 === c++ && P.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && P.removeEventListener(a, d, !0)
                }
            }
        }), $.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = f;
                else if (!e) return this;
                return 1 === g && (h = e, e = function(a) {
                    return $().off(a), h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = $.guid++)), this.each(function() {
                    $.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, g;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (g in a) this.off(g, c, a[g]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = f), this.each(function() {
                    $.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return $(this.context).on(a, this.selector, b, c), this
            },
            die: function(a, b) {
                return $(this.context).off(a, this.selector || "**", b), this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    $.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || $.guid++,
                    d = 0,
                    e = function(c) {
                        var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                        return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                    };
                for (e.guid = c; d < b.length;) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            $.fn[b] = function(a, c) {
                return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
        }),
        /*!
         * Sizzle CSS Selector Engine
         * Copyright 2012 jQuery Foundation and other contributors
         * Released under the MIT license
         * http://sizzlejs.com/
         */
        function(a, b) {
            function c(a, b, c, d) {
                c = c || [], b = b || F;
                var e, f, g, h, i = b.nodeType;
                if (!a || "string" != typeof a) return c;
                if (1 !== i && 9 !== i) return [];
                if (g = v(b), !g && !d && (e = ca.exec(a)))
                    if (h = e[1]) {
                        if (9 === i) {
                            if (f = b.getElementById(h), !f || !f.parentNode) return c;
                            if (f.id === h) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h) return c.push(f), c
                    } else {
                        if (e[2]) return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
                        if ((h = e[3]) && ma && b.getElementsByClassName) return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
                    }
                return p(a.replace(Z, "$1"), b, c, d, g)
            }

            function d(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function e(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function f(a) {
                return N(function(b) {
                    return b = +b, N(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function g(a, b, c) {
                if (a === b) return c;
                for (var d = a.nextSibling; d;) {
                    if (d === b) return -1;
                    d = d.nextSibling
                }
                return 1
            }

            function h(a, b) {
                var d, e, f, g, h, i, j, k = Q[D][a];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = t.preFilter; h;) {
                    (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length)), i.push(f = [])), d = !1, (e = aa.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
                    for (g in t.filter) !(e = ha[g].exec(h)) || j[g] && !(e = j[g](e, F, !0)) || (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
                    if (!d) break
                }
                return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
            }

            function i(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === b.dir,
                    f = I++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (e || 1 === b.nodeType) return a(b, c, f)
                } : function(b, c, g) {
                    if (g) {
                        for (; b = b[d];)
                            if ((e || 1 === b.nodeType) && a(b, c, g)) return b
                    } else
                        for (var h, i = H + " " + f + " ", j = i + r; b = b[d];)
                            if (e || 1 === b.nodeType) {
                                if ((h = b[D]) === j) return b.sizset;
                                if ("string" == typeof h && 0 === h.indexOf(i)) {
                                    if (b.sizset) return b
                                } else {
                                    if (b[D] = j, a(b, c, g)) return b.sizset = !0, b;
                                    b.sizset = !1
                                }
                            }
                }
            }

            function j(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function k(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function l(a, b, c, d, e, f) {
                return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function(f, g, h, i) {
                    if (!f || !e) {
                        var j, l, m, n = [],
                            p = [],
                            q = g.length,
                            r = f || o(b || "*", h.nodeType ? [h] : h, [], f),
                            s = !a || !f && b ? r : k(r, n, a, h, i),
                            t = c ? e || (f ? a : q || d) ? [] : g : s;
                        if (c && c(s, t, h, i), d)
                            for (m = k(t, p), d(m, [], h, i), j = m.length; j--;)(l = m[j]) && (t[p[j]] = !(s[p[j]] = l));
                        if (f)
                            for (j = a && t.length; j--;)(l = t[j]) && (f[n[j]] = !(g[n[j]] = l));
                        else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
                    }
                })
            }

            function m(a) {
                for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function(a) {
                        return a === b
                    }, g, !0), n = i(function(a) {
                        return M.call(b, a) > -1
                    }, g, !0), o = [function(a, c, d) {
                        return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
                    }]; e > h; h++)
                    if (c = t.relative[a[h].type]) o = [i(j(o), c)];
                    else {
                        if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
                            for (d = ++h; e > d && !t.relative[a[d].type]; d++);
                            return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
                        }
                        o.push(c)
                    }
                return j(o)
            }

            function n(a, b) {
                var d = b.length > 0,
                    e = a.length > 0,
                    f = function(g, h, i, j, l) {
                        var m, n, o, p = [],
                            q = 0,
                            s = "0",
                            u = g && [],
                            v = null != l,
                            w = A,
                            x = g || e && t.find.TAG("*", l && h.parentNode || h),
                            y = H += null == w ? 1 : Math.E;
                        for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
                            if (e && m) {
                                for (n = 0; o = a[n]; n++)
                                    if (o(m, h, i)) {
                                        j.push(m);
                                        break
                                    }
                                v && (H = y, r = ++f.el)
                            }
                            d && ((m = !o && m) && q--, g && u.push(m))
                        }
                        if (q += s, d && s !== q) {
                            for (n = 0; o = b[n]; n++) o(u, p, h, i);
                            if (g) {
                                if (q > 0)
                                    for (; s--;) u[s] || p[s] || (p[s] = J.call(j));
                                p = k(p)
                            }
                            K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                        }
                        return v && (H = y, A = w), u
                    };
                return f.el = 0, d ? N(f) : f
            }

            function o(a, b, d, e) {
                for (var f = 0, g = b.length; g > f; f++) c(a, b[f], d, e);
                return d
            }

            function p(a, b, c, d, e) {
                var f, g, i, j, k, l = h(a);
                l.length;
                if (!d && 1 === l.length) {
                    if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                        if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0], !b) return c;
                        a = a.slice(g.shift().length)
                    }
                    for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--)
                        if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                            if (g.splice(f, 1), a = d.length && g.join(""), !a) return K.apply(c, L.call(d, 0)), c;
                            break
                        }
                }
                return x(a, l)(d, b, e, c, da.test(a)), c
            }

            function q() {}
            var r, s, t, u, v, w, x, y, z, A, B = !0,
                C = "undefined",
                D = ("sizcache" + Math.random()).replace(".", ""),
                E = String,
                F = a.document,
                G = F.documentElement,
                H = 0,
                I = 0,
                J = [].pop,
                K = [].push,
                L = [].slice,
                M = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                N = function(a, b) {
                    return a[D] = null == b || b, a
                },
                O = function() {
                    var a = {},
                        b = [];
                    return N(function(c, d) {
                        return b.push(c) > t.cacheLength && delete a[b.shift()], a[c] = d
                    }, a)
                },
                P = O(),
                Q = O(),
                R = O(),
                S = "[\\x20\\t\\r\\n\\f]",
                T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                U = T.replace("w", "w#"),
                V = "([*^$|!~]?=)",
                W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
                X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
                Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
                Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
                _ = new RegExp("^" + S + "*," + S + "*"),
                aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"),
                ba = new RegExp(X),
                ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                da = /[\x20\t\r\n\f]*[+~]/,
                ea = /h\d/i,
                fa = /input|select|textarea|button/i,
                ga = /\\(?!\\)/g,
                ha = {
                    ID: new RegExp("^#(" + T + ")"),
                    CLASS: new RegExp("^\\.(" + T + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + W),
                    PSEUDO: new RegExp("^" + X),
                    POS: new RegExp(Y, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
                },
                ia = function(a) {
                    var b = F.createElement("div");
                    try {
                        return a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b = null
                    }
                },
                ja = ia(function(a) {
                    return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
                }),
                ka = ia(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
                }),
                la = ia(function(a) {
                    a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return "boolean" !== b && "string" !== b
                }),
                ma = ia(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
                }),
                na = ia(function(a) {
                    a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
                    var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
                    return s = !F.getElementById(D), G.removeChild(a), b
                });
            try {
                L.call(G.childNodes, 0)[0].nodeType
            } catch (oa) {
                L = function(a) {
                    for (var b, c = []; b = this[a]; a++) c.push(b);
                    return c
                }
            }
            c.matches = function(a, b) {
                return c(a, null, null, b)
            }, c.matchesSelector = function(a, b) {
                return c(b, null, null, [a]).length > 0
            }, u = c.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += u(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += u(b);
                return c
            }, v = c.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, w = c.contains = G.contains ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
            } : G.compareDocumentPosition ? function(a, b) {
                return b && !!(16 & a.compareDocumentPosition(b))
            } : function(a, b) {
                for (; b = b.parentNode;)
                    if (b === a) return !0;
                return !1
            }, c.attr = function(a, b) {
                var c, d = v(a);
                return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
            }, t = c.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: ha,
                attrHandle: ka ? {} : {
                    href: function(a) {
                        return a.getAttribute("href", 2)
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                find: {
                    ID: s ? function(a, b, c) {
                        if (typeof b.getElementById !== C && !c) {
                            var d = b.getElementById(a);
                            return d && d.parentNode ? [d] : []
                        }
                    } : function(a, c, d) {
                        if (typeof c.getElementById !== C && !d) {
                            var e = c.getElementById(a);
                            return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                        }
                    },
                    TAG: ja ? function(a, b) {
                        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                    } : function(a, b) {
                        var c = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (var d, e = [], f = 0; d = c[f]; f++) 1 === d.nodeType && e.push(d);
                            return e
                        }
                        return c
                    },
                    NAME: na && function(a, b) {
                        return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
                    },
                    CLASS: ma && function(a, b, c) {
                        return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ga, ""), a[3] = (a[4] || a[5] || "").replace(ga, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c;
                        return ha.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
                    }
                },
                filter: {
                    ID: s ? function(a) {
                        return a = a.replace(ga, ""),
                            function(b) {
                                return b.getAttribute("id") === a
                            }
                    } : function(a) {
                        return a = a.replace(ga, ""),
                            function(b) {
                                var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                                return c && c.value === a
                            }
                    },
                    TAG: function(a) {
                        return "*" === a ? function() {
                            return !0
                        } : (a = a.replace(ga, "").toLowerCase(), function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        })
                    },
                    CLASS: function(a) {
                        var b = P[D][a];
                        return b || (b = P(a, new RegExp("(^|" + S + ")" + a + "(" + S + "|$)"))),
                            function(a) {
                                return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                            }
                    },
                    ATTR: function(a, b, d) {
                        return function(e, f) {
                            var g = c.attr(e, a);
                            return null == g ? "!=" === b : b ? (g += "", "=" === b ? g === d : "!=" === b ? g !== d : "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d : "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b ? g === d || g.substr(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d) {
                        return "nth" === a ? function(a) {
                            var b, e, f = a.parentNode;
                            if (1 === c && 0 === d) return !0;
                            if (f)
                                for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                            return e -= d, e === c || e % c === 0 && e / c >= 0
                        } : function(b) {
                            var c = b;
                            switch (a) {
                                case "only":
                                case "first":
                                    for (; c = c.previousSibling;)
                                        if (1 === c.nodeType) return !1;
                                    if ("first" === a) return !0;
                                    c = b;
                                case "last":
                                    for (; c = c.nextSibling;)
                                        if (1 === c.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
                            for (var d, f = e(a, b), g = f.length; g--;) d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, d)
                        }) : e
                    }
                },
                pseudos: {
                    not: N(function(a) {
                        var b = [],
                            c = [],
                            d = x(a.replace(Z, "$1"));
                        return d[D] ? N(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: N(function(a) {
                        return function(b) {
                            return c(a, b).length > 0
                        }
                    }),
                    contains: N(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                        }
                    }),
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    parent: function(a) {
                        return !t.pseudos.empty(a)
                    },
                    empty: function(a) {
                        var b;
                        for (a = a.firstChild; a;) {
                            if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b) return !1;
                            a = a.nextSibling
                        }
                        return !0
                    },
                    header: function(a) {
                        return ea.test(a.nodeName)
                    },
                    text: function(a) {
                        var b, c;
                        return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                    },
                    radio: d("radio"),
                    checkbox: d("checkbox"),
                    file: d("file"),
                    password: d("password"),
                    image: d("image"),
                    submit: e("submit"),
                    reset: e("reset"),
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    input: function(a) {
                        return fa.test(a.nodeName)
                    },
                    focus: function(a) {
                        var b = a.ownerDocument;
                        return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !(!a.type && !a.href)
                    },
                    active: function(a) {
                        return a === a.ownerDocument.activeElement
                    },
                    first: f(function(a, b, c) {
                        return [0]
                    }),
                    last: f(function(a, b, c) {
                        return [b - 1]
                    }),
                    eq: f(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: f(function(a, b, c) {
                        for (var d = 0; b > d; d += 2) a.push(d);
                        return a
                    }),
                    odd: f(function(a, b, c) {
                        for (var d = 1; b > d; d += 2) a.push(d);
                        return a
                    }),
                    lt: f(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: f(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, y = G.compareDocumentPosition ? function(a, b) {
                return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
            } : function(a, b) {
                if (a === b) return z = !0, 0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    f = [],
                    h = a.parentNode,
                    i = b.parentNode,
                    j = h;
                if (h === i) return g(a, b);
                if (!h) return -1;
                if (!i) return 1;
                for (; j;) e.unshift(j), j = j.parentNode;
                for (j = i; j;) f.unshift(j), j = j.parentNode;
                c = e.length, d = f.length;
                for (var k = 0; c > k && d > k; k++)
                    if (e[k] !== f[k]) return g(e[k], f[k]);
                return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
            }, [0, 0].sort(y), B = !z, c.uniqueSort = function(a) {
                var b, c = 1;
                if (z = B, a.sort(y), z)
                    for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
                return a
            }, c.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, x = c.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = R[D][a];
                if (!f) {
                    for (b || (b = h(a)), c = b.length; c--;) f = m(b[c]), f[D] ? d.push(f) : e.push(f);
                    f = R(a, n(e, d))
                }
                return f
            }, F.querySelectorAll && ! function() {
                var a, b = p,
                    d = /'|\\/g,
                    e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    f = [":focus"],
                    g = [":active", ":focus"],
                    i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
                ia(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
                }), ia(function(a) {
                    a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
                }), f = new RegExp(f.join("|")), p = function(a, c, e, g, i) {
                    if (!(g || i || f && f.test(a))) {
                        var j, k, l = !0,
                            m = D,
                            n = c,
                            o = 9 === c.nodeType && a;
                        if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                            for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;) j[k] = m + j[k].join("");
                            n = da.test(a) && c.parentNode || c, o = j.join(",")
                        }
                        if (o) try {
                            return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
                        } catch (p) {} finally {
                            l || c.removeAttribute("id")
                        }
                    }
                    return b(a, c, e, g, i)
                }, i && (ia(function(b) {
                    a = i.call(b, "div");
                    try {
                        i.call(b, "[test!='']:sizzle"), g.push("!=", X)
                    } catch (c) {}
                }), g = new RegExp(g.join("|")), c.matchesSelector = function(b, d) {
                    if (d = d.replace(e, "='$1']"), !(v(b) || g.test(d) || f && f.test(d))) try {
                        var h = i.call(b, d);
                        if (h || a || b.document && 11 !== b.document.nodeType) return h
                    } catch (j) {}
                    return c(d, null, null, [b]).length > 0
                })
            }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains
        }(a);
    var Ia = /Until$/,
        Ja = /^(?:parents|prev(?:Until|All))/,
        Ka = /^.[^:#\[\.,]*$/,
        La = $.expr.match.needsContext,
        Ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    $.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a) return $(a).filter(function() {
                for (b = 0, c = h.length; c > b; b++)
                    if ($.contains(h[b], this)) return !0
            });
            for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++)
                if (d = g.length, $.find(a, this[b], g), b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; d > f; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            return g
        },
        has: function(a) {
            var b, c = $(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if ($.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(j(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? La.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a),
                d = $.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), $.fn.andSelf = $.fn.addBack, $.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return $.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return $.dir(a, "parentNode", c)
        },
        next: function(a) {
            return i(a, "nextSibling")
        },
        prev: function(a) {
            return i(a, "previousSibling")
        },
        nextAll: function(a) {
            return $.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return $.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return $.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return $.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return $.sibling(a.firstChild)
        },
        contents: function(a) {
            return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
        }
    }, function(a, b) {
        $.fn[a] = function(c, d) {
            var e = $.map(this, b, c);
            return Ia.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), e = this.length > 1 && !Ma[a] ? $.unique(e) : e, this.length > 1 && Ja.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
        }
    }), $.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oa = / jQuery\d+="(?:null|\d+)"/g,
        Pa = /^\s+/,
        Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ra = /<([\w:]+)/,
        Sa = /<tbody/i,
        Ta = /<|&#?\w+;/,
        Ua = /<(?:script|style|link)/i,
        Va = /<(?:script|object|embed|option|style)/i,
        Wa = new RegExp("<(?:" + Na + ")[\\s/>]", "i"),
        Xa = /^(?:checkbox|radio)$/,
        Ya = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Za = /\/(java|ecma)script/i,
        $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        _a = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        ab = k(P),
        bb = ab.appendChild(P.createElement("div"));
    _a.optgroup = _a.option, _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead, _a.th = _a.td, $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]), $.fn.extend({
            text: function(a) {
                return $.access(this, function(a) {
                    return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if ($.isFunction(a)) return this.each(function(b) {
                    $(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return $.isFunction(a) ? this.each(function(b) {
                    $(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = $(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = $.isFunction(a);
                return this.each(function(c) {
                    $(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (!h(this[0])) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = $.clean(arguments);
                    return this.pushStack($.merge(a, this), "before", this.selector)
                }
            },
            after: function() {
                if (!h(this[0])) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = $.clean(arguments);
                    return this.pushStack($.merge(this, a), "after", this.selector)
                }
            },
            remove: function(a, b) {
                for (var c, d = 0; null != (c = this[d]); d++)(!a || $.filter(a, [c]).length) && (b || 1 !== c.nodeType || ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return $.clone(this, a, b)
                })
            },
            html: function(a) {
                return $.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
                    if ("string" == typeof a && !Ua.test(a) && ($.support.htmlSerialize || !Wa.test(a)) && ($.support.leadingWhitespace || !Pa.test(a)) && !_a[(Ra.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Qa, "<$1></$2>");
                        try {
                            for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function(b) {
                    var c = $(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : ("string" != typeof a && (a = $(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    $(this).remove(), b ? $(b).before(a) : $(c).append(a)
                }))
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                a = [].concat.apply([], a);
                var e, f, g, h, i = 0,
                    j = a[0],
                    k = [],
                    m = this.length;
                if (!$.support.checkClone && m > 1 && "string" == typeof j && Ya.test(j)) return this.each(function() {
                    $(this).domManip(a, c, d)
                });
                if ($.isFunction(j)) return this.each(function(e) {
                    var f = $(this);
                    a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
                });
                if (this[0]) {
                    if (e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f)
                        for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; m > i; i++) d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
                    g = f = null, k.length && $.each(k, function(a, b) {
                        b.src ? $.ajax ? $.ajax({
                            url: b.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($a, "")), b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }), $.buildFragment = function(a, c, d) {
            var e, f, g, h = a[0];
            return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, !(1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0)) || Va.test(h) || !$.support.checkClone && Ya.test(h) || !$.support.html5Clone && Wa.test(h) || (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
                fragment: e,
                cacheable: f
            }
        }, $.fragments = {}, $.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            $.fn[a] = function(c) {
                var d, e = 0,
                    f = [],
                    g = $(c),
                    h = g.length,
                    i = 1 === this.length && this[0].parentNode;
                if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h) return g[b](this[0]), this;
                for (; h > e; e++) d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
                return this.pushStack(f, a, g.selector)
            }
        }), $.extend({
            clone: function(a, b, c) {
                var d, e, f, g;
                if ($.support.html5Clone || $.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bb.innerHTML = a.outerHTML, bb.removeChild(g = bb.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
                    for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
                if (b && (m(a, g), c))
                    for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
                return d = e = null, g
            },
            clean: function(a, b, c, d) {
                var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ab,
                    s = [];
                for (b && "undefined" != typeof b.createDocumentFragment || (b = P), e = 0; null != (g = a[e]); e++)
                    if ("number" == typeof g && (g += ""), g) {
                        if ("string" == typeof g)
                            if (Ta.test(g)) {
                                for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qa, "<$1></$2>"), h = (Ra.exec(g) || ["", ""])[1].toLowerCase(), i = _a[h] || _a._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--;) l = l.lastChild;
                                if (!$.support.tbody)
                                    for (m = Sa.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f) $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                                !$.support.leadingWhitespace && Pa.test(g) && l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
                            } else g = b.createTextNode(g);
                        g.nodeType ? s.push(g) : $.merge(s, g)
                    }
                if (l && (g = l = r = null), !$.support.appendChecked)
                    for (e = 0; null != (g = s[e]); e++) $.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
                if (c)
                    for (o = function(a) {
                            return !a.type || Za.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
                        }, e = 0; null != (g = s[e]); e++) $.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
                return s
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)
                    if ((b || $.acceptData(e)) && (d = e[h], c = d && i[d])) {
                        if (c.events)
                            for (f in c.events) k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                        i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
                    }
            }
        }),
        function() {
            var a, b;
            $.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                $.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
                    return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(P);
                return a
            }
        }();
    var cb, db, eb, fb = /alpha\([^)]*\)/i,
        gb = /opacity=([^)]*)/,
        hb = /^(top|right|bottom|left)$/,
        ib = /^(none|table(?!-c[ea]).+)/,
        jb = /^margin/,
        kb = new RegExp("^(" + _ + ")(.*)$", "i"),
        lb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        mb = new RegExp("^([-+])=(" + _ + ")", "i"),
        nb = {},
        ob = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        qb = ["Top", "Right", "Bottom", "Left"],
        rb = ["Webkit", "O", "Moz", "ms"],
        sb = $.fn.toggle;
    $.fn.extend({
        css: function(a, c) {
            return $.access(this, function(a, c, d) {
                return d !== b ? $.style(a, c, d) : $.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return s(this, !0)
        },
        hide: function() {
            return s(this)
        },
        toggle: function(a, b) {
            var c = "boolean" == typeof a;
            return $.isFunction(a) && $.isFunction(b) ? sb.apply(this, arguments) : this.each(function() {
                (c ? a : r(this)) ? $(this).show(): $(this).hide()
            })
        }
    }), $.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = cb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": $.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = $.camelCase(c),
                    j = a.style;
                if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = mb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || $.cssNumber[i] || (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = $.camelCase(c);
            return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = cb(a, c)), "normal" === f && c in pb && (f = pb[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? cb = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null),
            i = b.style;
        return h && (d = h[c], "" !== d || $.contains(b.ownerDocument, b) || (d = $.style(b, c)), lb.test(d) && jb.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : P.documentElement.currentStyle && (cb = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return null == e && f && f[b] && (e = f[b]), lb.test(e) && !hb.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
    }), $.each(["height", "width"], function(a, b) {
        $.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && ib.test(cb(a, "display")) ? $.swap(a, ob, function() {
                    return v(a, b, d)
                }) : v(a, b, d) : void 0
            },
            set: function(a, c, d) {
                return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
            }
        }
    }), $.support.opacity || ($.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === $.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }), $(function() {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function(a, b) {
                return $.swap(a, {
                    display: "inline-block"
                }, function() {
                    return b ? cb(a, "marginRight") : void 0
                })
            }
        }), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(a, b) {
            $.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = cb(a, b);
                        return lb.test(d) ? $(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cb(a, "display"))
    }, $.expr.filters.visible = function(a) {
        return !$.expr.filters.hidden(a)
    }), $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        $.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c],
                    f = {};
                for (d = 0; 4 > d; d++) f[a + qb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, jb.test(a) || ($.cssHooks[a + b].set = t)
    });
    var tb = /%20/g,
        ub = /\[\]$/,
        vb = /\r?\n/g,
        wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        xb = /^(?:select|textarea)/i;
    $.fn.extend({
        serialize: function() {
            return $.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
            }).map(function(a, b) {
                var c = $(this).val();
                return null == c ? null : $.isArray(c) ? $.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(vb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(vb, "\r\n")
                }
            }).get()
        }
    }), $.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = $.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) x(d, a[d], c, f);
        return e.join("&").replace(tb, "+")
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = /\?/,
        Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hb = /([?&])_=[^&]*/,
        Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Jb = $.fn.load,
        Kb = {},
        Lb = {},
        Mb = ["*/"] + ["*"];
    try {
        zb = Q.href
    } catch (Nb) {
        zb = P.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Ib.exec(zb.toLowerCase()) || [], $.fn.load = function(a, c, d) {
        if ("string" != typeof a && Jb) return Jb.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), $.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments, h.html(e ? $("<div>").append(a.replace(Gb, "")).find(e) : a)
        }), this
    }, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        $.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), $.each(["get", "post"], function(a, c) {
        $[c] = function(a, d, e, f) {
            return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), $.extend({
        getScript: function(a, c) {
            return $.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return $.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a
        },
        ajaxSettings: {
            url: zb,
            isLocal: Cb.test(yb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Mb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: y(Kb),
        ajaxTransport: y(Lb),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c),
                n = m.context || m,
                o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
                p = $.Deferred(),
                q = $.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!u) {
                            var c = a.toLowerCase();
                            a = t[c] = t[c] || a, s[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? f : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === u) {
                            if (!g)
                                for (g = {}; c = Bb.exec(f);) g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || v, h && h.abort(a), d(0, a), this
                    }
                };
            if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (2 > u)
                            for (b in a) r[b] = [r[b], a[b]];
                        else b = a[w.status], w.always(b)
                    }
                    return this
                }, m.url = ((a || m.url) + "").replace(Ab, "").replace(Eb, yb[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(ba), null == m.crossDomain && (j = Ib.exec(m.url.toLowerCase()) || !1, m.crossDomain = j && j.join(":") + (j[3] ? "" : "http:" === j[1] ? 80 : 443) !== yb.join(":") + (yb[3] ? "" : "http:" === yb[1] ? 80 : 443)), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kb, m, c, w), 2 === u) return w;
            if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Db.test(m.type), k && 0 === $.active++ && $.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Fb.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                var x = $.now(),
                    y = m.url.replace(Hb, "$1_=" + x);
                m.url = y + (y === m.url ? (Fb.test(m.url) ? "&" : "?") + "_=" + x : "")
            }(m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (h = z(Lb, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, h.send(s, d)
                } catch (A) {
                    if (!(2 > u)) throw A;
                    d(-1, A)
                }
            } else d(-1, "No Transport");
            return w
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ob = [],
        Pb = /\?/,
        Qb = /(=)\?(?=&|$)|\?\?/,
        Rb = $.now();
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ob.pop() || $.expando + "_" + Rb++;
            return this[a] = !0, a
        }
    }), $.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && Qb.test(j),
            m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qb.test(i);
        return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qb, "$1" + f) : m ? c.data = i.replace(Qb, "$1" + f) : k && (c.url += (Pb.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || $.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ob.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return $.globalEval(a), a
            }
        }
    }), $.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), $.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function(e, f) {
                    c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Sb, Tb = a.ActiveXObject ? function() {
            for (var a in Sb) Sb[a](0, 1)
        } : !1,
        Ub = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && D() || E()
        } : D,
        function(a) {
            $.extend($.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function(c) {
            if (!c.crossDomain || $.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || 4 === i.readyState))
                                    if (d = b, g && (i.onreadystatechange = $.noop, Tb && delete Sb[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                        try {
                                            l.text = i.responseText
                                        } catch (a) {}
                                        try {
                                            j = i.statusText
                                        } catch (n) {
                                            j = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                            } catch (o) {
                                e || f(-1, o)
                            }
                            l && f(h, j, l, k)
                        }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Ub, Tb && (Sb || (Sb = {}, $(a).unload(Tb)), Sb[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var Vb, Wb, Xb = /^(?:toggle|show|hide)$/,
        Yb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
        Zb = /queueHooks$/,
        $b = [J],
        _b = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = Yb.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                        h = $.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h /= i, $.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    $.Animation = $.extend(H, {
        tweener: function(a, b) {
            $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _b[c] = _b[c] || [], _b[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? $b.unshift(a) : $b.push(a)
        }
    }), $.Tween = K, K.prototype = {
        constructor: K,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = K.propHooks[this.prop];
            return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
        }
    }, K.prototype.init.prototype = K.prototype, K.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, $.each(["toggle", "show", "hide"], function(a, b) {
        var c = $.fn[b];
        $.fn[b] = function(d, e, f) {
            return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
        }
    }), $.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = $.isEmptyObject(a),
                f = $.speed(b, c, d),
                g = function() {
                    var b = H(this, $.extend({}, a), f);
                    e && b.stop(!0)
                };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = $.timers,
                    g = $._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && Zb.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && $.dequeue(this, a)
            })
        }
    }), $.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        $.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), $.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? $.extend({}, a) : {
            complete: c || !c && b || $.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !$.isFunction(b) && b
        };
        return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
        }, d
    }, $.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function() {
        for (var a, b = $.timers, c = 0; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || $.fx.stop()
    }, $.fx.timer = function(a) {
        a() && $.timers.push(a) && !Wb && (Wb = setInterval($.fx.tick, $.fx.interval))
    }, $.fx.interval = 13, $.fx.stop = function() {
        clearInterval(Wb), Wb = null
    }, $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
        return $.grep($.timers, function(b) {
            return a === b.elem
        }).length
    });
    var ac = /^(?:body|html)$/i;
    $.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            $.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {
                top: 0,
                left: 0
            },
            k = this[0],
            l = k && k.ownerDocument;
        if (l) return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }, $.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = $.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = $(a),
                h = g.offset(),
                i = $.css(a, "top"),
                j = $.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, $.fn.extend({
        position: function() {
            if (this[0]) {
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = ac.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || P.body; a && !ac.test(a.nodeName) && "static" === $.css(a, "position");) a = a.offsetParent;
                return a || P.body
            })
        }
    }), $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function(e) {
            return $.access(this, function(a, e, f) {
                var g = M(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    }), $.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        $.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            $.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return $.access(this, function(c, d, e) {
                    var f;
                    return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery/1/jquery", [], function() {
        return $
    })
}(window), window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; e > d; d++) E[c[d]] = !!(c[d] in u);
                return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.6.2",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
            },
            I = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b).matches;
                var d;
                return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            J = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            K = {}.hasOwnProperty;
        m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return K.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        }), C.flexbox = function() {
            return j("flexWrap")
        }, C.flexboxlegacy = function() {
            return j("boxDirection")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }, C.canvastext = function() {
            return !(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"))
        }, C.webgl = function() {
            return !!a.WebGLRenderingContext
        }, C.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!a.postMessage
        }, C.websqldatabase = function() {
            return !!a.openDatabase
        }, C.indexedDB = function() {
            return !!j("indexedDB", a)
        }, C.hashchange = function() {
            return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !(!a.history || !history.pushState)
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            var a;
            return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, C.generatedcontent = function() {
            var a;
            return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(r, r), localStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.webworkers = function() {
            return !!a.Worker
        }, C.applicationcache = function() {
            return !!a.applicationCache
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = r.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = q[a[o]];
                    return b || (b = {}, p++, a[o] = p, q[p] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return !r.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
                }
                var j, k, l = a.html5 || {},
                    m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    o = "_html5shiv",
                    p = 0,
                    q = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var r = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: l.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: l.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = r, i(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function(a) {
        a.xLazyLoader = function(a, c) {
            "object" == typeof a && (c = a, a = "load"), b[a](c)
        };
        var b = new function() {
            var b = document.getElementsByTagName("head")[0];
            this.load = function(b) {
                function c(b, c) {
                    a.isArray(c) && c.length > 0 ? a.each(c, function(a, c) {
                        d(b, c)
                    }) : "string" == typeof c && d(b, c)
                }

                function d(b, c) {
                    f[b](c, function() {
                        a.isArray(e[b]) ? g[b].push(c) : g[b] = c, e.js.length == g.js.length && e.css.length == g.css.length && e.image.length == g.image.length && e.load.apply(g, [])
                    }, e.name ? "lazy-loaded-" + e.name : "lazy-loaded-" + (new Date).getTime())
                }
                var e = {
                    js: [],
                    css: [],
                    image: [],
                    name: null,
                    load: function() {}
                };
                a.extend(e, b);
                var f = this,
                    g = {
                        js: [],
                        css: [],
                        image: []
                    };
                c("js", e.js), c("css", e.css), c("image", e.image)
            }, this.js = function(c, d, e) {
                if (a('script[src*="' + c + '"]').length > 0) return void d();
                var f = document.createElement("script");
                f.setAttribute("type", "text/javascript"), f.setAttribute("src", c), f.setAttribute("id", e), a.browser.msie ? f.onreadystatechange = function() {
                    /loaded|complete/.test(f.readyState) && d()
                } : f.onload = d, b.appendChild(f)
            }, this.css = function(c, d, e) {
                if (a('link[href*="' + c + '"]').length > 0) return void d();
                var f = a('<link rel="stylesheet" type="text/css" media="all" href="' + c + '" id="' + e + '"></link>')[0];
                a.browser.msie ? f.onreadystatechange = function() {
                    ("loaded" == f.readyState || "complete" == f.readyState) && (f.onreadystatechange = null, d())
                } : a.browser.opera ? f.onload = d : function() {
                    try {
                        f.sheet.cssRule
                    } catch (a) {
                        return void setTimeout(arguments.callee, 20)
                    }
                    d()
                }(), b.appendChild(f)
            }, this.image = function(a, b) {
                var c = new Image;
                c.onload = b, c.src = a
            }, this.disable = function(c) {
                a("#lazy-loaded-" + c, b).attr("disabled", "disabled")
            }, this.enable = function(c) {
                a("#lazy-loaded-" + c, b).removeAttr("disabled")
            }, this.destroy = function(c) {
                a("#lazy-loaded-" + c, b).remove()
            }
        }
    }(jQuery); /*! webmd.core */
var webmd, image_server_url = window.image_server_url || location.protocol + "//img.webmd.com/dtmcms/live",
    s_business_reference = window.s_business_reference || "",
    s_furl = window.s_furl || "",
    s_package_type = window.s_package_type || "",
    s_package_name = window.s_package_name || "",
    s_sponsor_program = window.s_sponsor_program || "";
webmd || (webmd = {}), webmd.p || (webmd.p = {}), webmd.m || (webmd.m = {}), $.extend(webmd, {
    load: function(a, b) {
        return $.xLazyLoader(a, b)
    },
    substitute: function(a, b, c) {
        return a.replace(/\{([^{}]*)\}/g, function(a, d) {
            var e, f = webmd.object.get(d, b);
            return e = "string" == typeof f || "number" == typeof f ? f : c ? "" : a
        })
    },
    htmlEncode: function(a) {
        return a.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;")
    },
    reEncode: function(a) {
        return a.replace(/([.*+?|(){}\[\]\\])/g, "\\$1")
    },
    openWindow: function(a, b) {
        var c, d, e, f, g;
        b || (b = {}), c = {
            name: "",
            focus: !0
        }, b.standard && (c = $.extend(c, {
            location: 1,
            menubar: 1,
            resizable: 1,
            scrollbars: 1,
            status: 1,
            toolbar: 1
        })), b = $.extend(c, b), f = {
            name: 1,
            focus: 1,
            standard: 1
        }, e = [];
        for (d in b)
            if (b.hasOwnProperty(d)) {
                if (f[d]) continue;
                e.push(d + "=" + b[d])
            }
        return g = window.open(a, b.name, e.join(",")), b.focus && g && g.focus(), g
    },
    object: function() {
        function a() {}
        return function(b, c) {
            a.prototype = b;
            var d = new a;
            return c && $.extend(d, c), d
        }
    }(),
    plugin: function(a, b) {
        $.fn[a] = function(c) {
            var d, e = Array.prototype.slice.call(arguments, 1),
                f = "string" == typeof c ? {} : c,
                g = !1;
            return this.each(function() {
                var h = $.data(this, a);
                if (h || (h = webmd.object(b), $.data(this, a, h), h.init(f, this)), $.isFunction(h[c])) {
                    if (d = h[c].apply(h, e), void 0 !== d && d !== h) return g = !0, !1
                } else if ("option" === c) {
                    if (!(e.length > 1)) return g = !0, d = h[e[0]], !1;
                    h[e[0]] = e[1]
                }
            }), g ? d : this
        }
    }
}), $.extend(webmd.object, {
    /*! BEGIN LICENSE getObject
     * jQuery getObject
     * http://benalman.com/projects/jquery-getobject-plugin/
     * Copyright (c) 2009 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     * Inspired by Dojo, which is Copyright (c) 2005-2009, The Dojo Foundation.
     */
    get: function(a, b, c) {
        var d = a;
        "string" == typeof a && (a = a.split(".")), "boolean" != typeof b && (c = b, b = void 0), c = c || window;
        var e;
        if (void 0 !== c[d]) c = c[d];
        else
            for (; c && a.length;) e = a.shift(), void 0 === c[e] && b && (c[e] = {}), c = c[e];
        return c
    },
    set: function(a, b, c) {
        var d = a.split("."),
            e = d.pop(),
            f = this.get(d, !0, c);
        return f && "object" == typeof f && e ? f[e] = b : void 0
    },
    exists: function(a, b) {
        return void 0 !== this.get(a, b)
    }
}), $(function() {
    window.document.write = function(a) {
        throw "INVALID document.write: " + a
    }
});
/*!* vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs, require, define;
! function(global) {
    function isFunction(a) {
        return "[object Function]" === ostring.call(a)
    }

    function isArray(a) {
        return "[object Array]" === ostring.call(a)
    }

    function each(a, b) {
        if (a) {
            var c;
            for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
        }
    }

    function eachReverse(a, b) {
        if (a) {
            var c;
            for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
        }
    }

    function hasProp(a, b) {
        return hasOwn.call(a, b)
    }

    function eachProp(a, b) {
        var c;
        for (c in a)
            if (a.hasOwnProperty(c) && b(a[c], c)) break
    }

    function mixin(a, b, c, d) {
        return b && eachProp(b, function(b, e) {
            (c || !hasProp(a, e)) && (d && "string" != typeof b ? (a[e] || (a[e] = {}), mixin(a[e], b, c, d)) : a[e] = b)
        }), a
    }

    function bind(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function getGlobal(a) {
        if (!a) return a;
        var b = global;
        return each(a.split("."), function(a) {
            b = b[a]
        }), b
    }

    function makeContextModuleFunc(a, b, c) {
        return function() {
            var d, e = aps.call(arguments, 0);
            return c && isFunction(d = e[e.length - 1]) && (d.__requireJsBuild = !0), e.push(b), a.apply(null, e)
        }
    }

    function addRequireMethods(a, b, c) {
        each([
            ["toUrl"],
            ["undef"],
            ["defined", "requireDefined"],
            ["specified", "requireSpecified"]
        ], function(d) {
            var e = d[1] || d[0];
            a[d[0]] = b ? makeContextModuleFunc(b[e], c) : function() {
                var a = contexts[defContextName];
                return a[e].apply(a, arguments)
            }
        })
    }

    function makeError(a, b, c, d) {
        var e = new Error(b + "\nhttp://requirejs.org/docs/errors.html#" + a);
        return e.requireType = a, e.requireModules = d, c && (e.originalError = c), e
    }

    function newContext(a) {
        function b(a) {
            var b, c;
            for (b = 0; a[b]; b += 1)
                if (c = a[b], "." === c) a.splice(b, 1), b -= 1;
                else if (".." === c) {
                if (1 === b && (".." === a[2] || ".." === a[0])) break;
                b > 0 && (a.splice(b - 1, 2), b -= 2)
            }
        }

        function c(a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p = c && c.split("/"),
                q = p,
                r = y.map,
                s = r && r["*"];
            if (a && "." === a.charAt(0) && (c ? (q = y.pkgs[c] ? p = [c] : p.slice(0, p.length - 1), a = q.concat(a.split("/")), b(a), f = y.pkgs[e = a[0]], a = a.join("/"), f && a === e + "/" + f.main && (a = e)) : 0 === a.indexOf("./") && (a = a.substring(2))), d && (p || s) && r) {
                for (h = a.split("/"), i = h.length; i > 0; i -= 1) {
                    if (k = h.slice(0, i).join("/"), p)
                        for (j = p.length; j > 0; j -= 1)
                            if (g = r[p.slice(0, j).join("/")], g && (g = g[k])) {
                                l = g, m = i;
                                break
                            }
                    if (l) break;
                    !n && s && s[k] && (n = s[k], o = i)
                }!l && n && (l = n, m = o), l && (h.splice(0, m, l), a = h.join("/"))
            }
            return a
        }

        function d(a) {
            isBrowser && each(scripts(), function(b) {
                return b.getAttribute("data-requiremodule") === a && b.getAttribute("data-requirecontext") === v.contextName ? (b.parentNode.removeChild(b), !0) : void 0
            })
        }

        function e(a) {
            var b = y.paths[a];
            return b && isArray(b) && b.length > 1 ? (d(a), b.shift(), v.undef(a), v.require([a]), !0) : void 0
        }

        function f(a, b, d, e) {
            var f, g, h, i = a ? a.indexOf("!") : -1,
                j = null,
                k = b ? b.name : null,
                l = a,
                m = !0,
                n = "";
            return a || (m = !1, a = "_@r" + (E += 1)), -1 !== i && (j = a.substring(0, i), a = a.substring(i + 1, a.length)), j && (j = c(j, k, e), g = C[j]), a && (j ? n = g && g.normalize ? g.normalize(a, function(a) {
                return c(a, k, e)
            }) : c(a, k, e) : (n = c(a, k, e), f = v.nameToUrl(n))), h = !j || g || d ? "" : "_unnormalized" + (F += 1), {
                prefix: j,
                name: n,
                parentMap: b,
                unnormalized: !!h,
                url: f,
                originalName: l,
                isDefine: m,
                id: (j ? j + "!" + n : n) + h
            }
        }

        function g(a) {
            var b = a.id,
                c = z[b];
            return c || (c = z[b] = new v.Module(a)), c
        }

        function h(a, b, c) {
            var d = a.id,
                e = z[d];
            !hasProp(C, d) || e && !e.defineEmitComplete ? g(a).on(b, c) : "defined" === b && c(C[d])
        }

        function i(a, b) {
            var c = a.requireModules,
                d = !1;
            b ? b(a) : (each(c, function(b) {
                var c = z[b];
                c && (c.error = a, c.events.error && (d = !0, c.emit("error", a)))
            }), d || req.onError(a))
        }

        function j() {
            globalDefQueue.length && (apsp.apply(B, [B.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function k(a, b, c) {
            var d = a && a.map,
                e = makeContextModuleFunc(c || v.require, d, b);
            return addRequireMethods(e, v, d), e.isBrowser = isBrowser, e
        }

        function l(a) {
            delete z[a], each(G, function(b, c) {
                return b.map.id === a ? (G.splice(c, 1), b.defined || (v.waitCount -= 1), !0) : void 0
            })
        }

        function m(a, b, c) {
            var d, e = a.map.id,
                f = a.depMaps;
            if (a.inited) return b[e] ? a : (b[e] = !0, each(f, function(a) {
                var e = a.id,
                    f = z[e];
                if (f && !c[e] && f.inited && f.enabled) return d = m(f, b, c)
            }), c[e] = !0, d)
        }

        function n(a, b, c) {
            var d = a.map.id,
                e = a.depMaps;
            if (a.inited && a.map.isDefine) return b[d] ? C[d] : (b[d] = a, each(e, function(e) {
                var f, g = e.id,
                    h = z[g];
                if (!w[g] && h) {
                    if (!h.inited || !h.enabled) return void(c[d] = !0);
                    f = n(h, b, c), c[g] || a.defineDepById(g, f)
                }
            }), a.check(!0), C[d])
        }

        function o(a) {
            a.check()
        }

        function p() {
            var a, b, c, f, g = 1e3 * y.waitSeconds,
                h = g && v.startTime + g < (new Date).getTime(),
                j = [],
                k = !1,
                l = !0;
            if (!t) {
                if (t = !0, eachProp(z, function(c) {
                        if (a = c.map, b = a.id, c.enabled && !c.error)
                            if (!c.inited && h) e(b) ? (f = !0, k = !0) : (j.push(b), d(b));
                            else if (!c.inited && c.fetched && a.isDefine && (k = !0, !a.prefix)) return l = !1
                    }), h && j.length) return c = makeError("timeout", "Load timeout for modules: " + j, null, j), c.contextName = v.contextName, i(c);
                l && (each(G, function(a) {
                    if (!a.defined) {
                        var b = m(a, {}, {}),
                            c = {};
                        b && (n(b, c, {}), eachProp(c, o))
                    }
                }), eachProp(z, o)), h && !f || !k || !isBrowser && !isWebWorker || x || (x = setTimeout(function() {
                    x = 0, p()
                }, 50)), t = !1
            }
        }

        function q(a) {
            g(f(a[0], null, !0)).init(a[1], a[2])
        }

        function r(a, b, c, d) {
            a.detachEvent && !isOpera ? d && a.detachEvent(d, b) : a.removeEventListener(c, b, !1)
        }

        function s(a) {
            var b = a.currentTarget || a.srcElement;
            return r(b, v.onScriptLoad, "load", "onreadystatechange"), r(b, v.onScriptError, "error"), {
                node: b,
                id: b && b.getAttribute("data-requiremodule")
            }
        }
        var t, u, v, w, x, y = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {}
            },
            z = {},
            A = {},
            B = [],
            C = {},
            D = {},
            E = 1,
            F = 1,
            G = [];
        return w = {
            require: function(a) {
                return k(a)
            },
            exports: function(a) {
                return a.usingExports = !0, a.map.isDefine ? a.exports = C[a.map.id] = {} : void 0
            },
            module: function(a) {
                return a.module = {
                    id: a.map.id,
                    uri: a.map.url,
                    config: function() {
                        return y.config && y.config[a.map.id] || {}
                    },
                    exports: C[a.map.id]
                }
            }
        }, u = function(a) {
            this.events = A[a.id] || {}, this.map = a, this.shim = y.shim[a.id], this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, u.prototype = {
            init: function(a, b, c, d) {
                d = d || {}, this.inited || (this.factory = b, c ? this.on("error", c) : this.events.error && (c = bind(this, function(a) {
                    this.emit("error", a)
                })), this.depMaps = a && a.slice(0), this.depMaps.rjsSkipMap = a.rjsSkipMap, this.errback = c, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDepById: function(a, b) {
                var c;
                return each(this.depMaps, function(b, d) {
                    return b.id === a ? (c = d, !0) : void 0
                }), this.defineDep(c, b)
            },
            defineDep: function(a, b) {
                this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, v.startTime = (new Date).getTime();
                    var a = this.map;
                    return this.shim ? void k(this, !0)(this.shim.deps || [], bind(this, function() {
                        return a.prefix ? this.callPlugin() : this.load()
                    })) : a.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var a = this.map.url;
                D[a] || (D[a] = !0, v.load(this.map.id, a))
            },
            check: function(a) {
                if (this.enabled && !this.enabling) {
                    var b, c, d = this.map.id,
                        e = this.depExports,
                        f = this.exports,
                        g = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(g)) {
                                    if (this.events.error) try {
                                        f = v.execCb(d, g, e, f)
                                    } catch (h) {
                                        b = h
                                    } else f = v.execCb(d, g, e, f);
                                    if (this.map.isDefine && (c = this.module, c && void 0 !== c.exports && c.exports !== this.exports ? f = c.exports : void 0 === f && this.usingExports && (f = this.exports)), b) return b.requireMap = this.map, b.requireModules = [this.map.id], b.requireType = "define", i(this.error = b)
                                } else f = g;
                                this.exports = f, this.map.isDefine && !this.ignore && (C[d] = f, req.onResourceLoad && req.onResourceLoad(v, this.map, this.depMaps)), delete z[d], this.defined = !0, v.waitCount -= 1, 0 === v.waitCount && (G = [])
                            }
                            this.defining = !1, a || this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var a = this.map,
                    b = a.id,
                    d = f(a.prefix, null, !1, !0);
                h(d, "defined", bind(this, function(d) {
                    var e, j, m, n = this.map.name,
                        o = this.map.parentMap ? this.map.parentMap.name : null;
                    return this.map.unnormalized ? (d.normalize && (n = d.normalize(n, function(a) {
                        return c(a, o, !0)
                    }) || ""), j = f(a.prefix + "!" + n, this.map.parentMap, !1, !0), h(j, "defined", bind(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), m = z[j.id], void(m && (this.events.error && m.on("error", bind(this, function(a) {
                        this.emit("error", a)
                    })), m.enable()))) : (e = bind(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0
                        })
                    }), e.error = bind(this, function(a) {
                        this.inited = !0, this.error = a, a.requireModules = [b], eachProp(z, function(a) {
                            0 === a.map.id.indexOf(b + "_unnormalized") && l(a.map.id)
                        }), i(a)
                    }), e.fromText = function(a, b) {
                        var c = useInteractive;
                        c && (useInteractive = !1), g(f(a)), req.exec(b), c && (useInteractive = !0), v.completeLoad(a)
                    }, void d.load(a.name, k(a.parentMap, !0, function(a, b, c) {
                        return a.rjsSkipMap = !0, v.require(a, b, c)
                    }), e, y))
                })), v.enable(d, this), this.pluginMaps[d.id] = d
            },
            enable: function() {
                this.enabled = !0, this.waitPushed || (G.push(this), v.waitCount += 1, this.waitPushed = !0), this.enabling = !0, each(this.depMaps, bind(this, function(a, b) {
                    var c, d, e;
                    if ("string" == typeof a) {
                        if (a = f(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.depMaps.rjsSkipMap), this.depMaps[b] = a, e = w[a.id]) return void(this.depExports[b] = e(this));
                        this.depCount += 1, h(a, "defined", bind(this, function(a) {
                            this.defineDep(b, a), this.check()
                        })), this.errback && h(a, "error", this.errback)
                    }
                    c = a.id, d = z[c], w[c] || !d || d.enabled || v.enable(a, this)
                })), eachProp(this.pluginMaps, bind(this, function(a) {
                    var b = z[a.id];
                    b && !b.enabled && v.enable(a, this)
                })), this.enabling = !1, this.check()
            },
            on: function(a, b) {
                var c = this.events[a];
                c || (c = this.events[a] = []), c.push(b)
            },
            emit: function(a, b) {
                each(this.events[a], function(a) {
                    a(b)
                }), "error" === a && delete this.events[a]
            }
        }, v = {
            config: y,
            contextName: a,
            registry: z,
            defined: C,
            urlFetched: D,
            waitCount: 0,
            defQueue: B,
            Module: u,
            makeModuleMap: f,
            configure: function(a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                var b = y.pkgs,
                    c = y.shim,
                    d = y.paths,
                    e = y.map;
                mixin(y, a, !0), y.paths = mixin(d, a.paths, !0), a.map && (y.map = mixin(e || {}, a.map, !0, !0)), a.shim && (eachProp(a.shim, function(a, b) {
                    isArray(a) && (a = {
                        deps: a
                    }), a.exports && !a.exports.__buildReady && (a.exports = v.makeShimExports(a.exports)), c[b] = a
                }), y.shim = c), a.packages && (each(a.packages, function(a) {
                    var c;
                    a = "string" == typeof a ? {
                        name: a
                    } : a, c = a.location, b[a.name] = {
                        name: a.name,
                        location: c || a.name,
                        main: (a.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), y.pkgs = b), eachProp(z, function(a, b) {
                    a.inited || a.map.unnormalized || (a.map = f(b))
                }), (a.deps || a.callback) && v.require(a.deps || [], a.callback)
            },
            makeShimExports: function(a) {
                var b;
                return "string" == typeof a ? (b = function() {
                    return getGlobal(a)
                }, b.exports = a, b) : function() {
                    return a.apply(global, arguments)
                }
            },
            requireDefined: function(a, b) {
                return hasProp(C, f(a, b, !1, !0).id)
            },
            requireSpecified: function(a, b) {
                return a = f(a, b, !1, !0).id, hasProp(C, a) || hasProp(z, a)
            },
            require: function(b, c, d, e) {
                var h, k, l, m, n;
                if ("string" == typeof b) return isFunction(c) ? i(makeError("requireargs", "Invalid require call"), d) : req.get ? req.get(v, b, c) : (h = b, e = c, l = f(h, e, !1, !0), k = l.id, hasProp(C, k) ? C[k] : i(makeError("notloaded", 'Module name "' + k + '" has not been loaded yet for context: ' + a)));
                for (d && !isFunction(d) && (e = d, d = void 0), c && !isFunction(c) && (e = c, c = void 0), j(); B.length;) {
                    if (n = B.shift(), null === n[0]) return i(makeError("mismatch", "Mismatched anonymous define() module: " + n[n.length - 1]));
                    q(n)
                }
                return m = g(f(null, e)), m.init(b, c, d, {
                    enabled: !0
                }), p(), v.require
            },
            undef: function(a) {
                j();
                var b = f(a, null, !0),
                    c = z[a];
                delete C[a], delete D[b.url], delete A[a], c && (c.events.defined && (A[a] = c.events), l(a))
            },
            enable: function(a, b) {
                var c = z[a.id];
                c && g(a).enable()
            },
            completeLoad: function(a) {
                var b, c, d, f = y.shim[a] || {},
                    g = f.exports && f.exports.exports;
                for (j(); B.length;) {
                    if (c = B.shift(), null === c[0]) {
                        if (c[0] = a, b) break;
                        b = !0
                    } else c[0] === a && (b = !0);
                    q(c)
                }
                if (d = z[a], !b && !C[a] && d && !d.inited) {
                    if (!(!y.enforceDefine || g && getGlobal(g))) return e(a) ? void 0 : i(makeError("nodefine", "No define call for " + a, null, [a]));
                    q([a, f.deps || [], f.exports])
                }
                p()
            },
            toUrl: function(a, b) {
                var d = a.lastIndexOf("."),
                    e = null;
                return -1 !== d && (e = a.substring(d, a.length), a = a.substring(0, d)), v.nameToUrl(c(a, b && b.id, !0), e)
            },
            nameToUrl: function(a, b) {
                var c, d, e, f, g, h, i, j, k;
                if (req.jsExtRegExp.test(a)) j = a + (b || "");
                else {
                    for (c = y.paths, d = y.pkgs, g = a.split("/"), h = g.length; h > 0; h -= 1) {
                        if (i = g.slice(0, h).join("/"), e = d[i], k = c[i]) {
                            isArray(k) && (k = k[0]), g.splice(0, h, k);
                            break
                        }
                        if (e) {
                            f = a === e.name ? e.location + "/" + e.main : e.location, g.splice(0, h, f);
                            break
                        }
                    }
                    j = g.join("/"), j += b || (/\?/.test(j) ? "" : ".js"), j = ("/" === j.charAt(0) || j.match(/^[\w\+\.\-]+:/) ? "" : y.baseUrl) + j
                }
                return y.urlArgs ? j + ((-1 === j.indexOf("?") ? "?" : "&") + y.urlArgs) : j
            },
            load: function(a, b) {
                req.load(v, a, b)
            },
            execCb: function(a, b, c, d) {
                return b.apply(d, c)
            },
            onScriptLoad: function(a) {
                if ("load" === a.type || readyRegExp.test((a.currentTarget || a.srcElement).readyState)) {
                    interactiveScript = null;
                    var b = s(a);
                    v.completeLoad(b.id)
                }
            },
            onScriptError: function(a) {
                var b = s(a);
                return e(b.id) ? void 0 : i(makeError("scripterror", "Script error", a, [b.id]))
            }
        }
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(a) {
            return "interactive" === a.readyState ? interactiveScript = a : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.0.6",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        aps = ap.slice,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || !navigator || !document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(a, b, c, d) {
            var e, f, g = defContextName;
            return isArray(a) || "string" == typeof a || (f = a, isArray(b) ? (a = b, b = c, c = d) : a = []), f && f.context && (g = f.context), e = contexts[g], e || (e = contexts[g] = req.s.newContext(g)), f && e.configure(f), e.require(a, b, c)
        }, req.config = function(a) {
            return req(a)
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), addRequireMethods(req), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function(a) {
            throw a
        }, req.load = function(a, b, c) {
            var d, e = a && a.config || {};
            return isBrowser ? (d = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), d.type = e.scriptType || "text/javascript", d.charset = "utf-8", d.async = !0, d.setAttribute("data-requirecontext", a.contextName), d.setAttribute("data-requiremodule", b), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (d.addEventListener("load", a.onScriptLoad, !1), d.addEventListener("error", a.onScriptError, !1)) : (useInteractive = !0, d.attachEvent("onreadystatechange", a.onScriptLoad)), d.src = c, currentlyAddingScript = d, baseElement ? head.insertBefore(d, baseElement) : head.appendChild(d), currentlyAddingScript = null, d) : void(isWebWorker && (importScripts(c), a.completeLoad(b)))
        }, isBrowser && eachReverse(scripts(), function(a) {
            return head || (head = a.parentNode), dataMain = a.getAttribute("data-main"), dataMain ? (cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ""), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0) : void 0
        }), define = function(a, b, c) {
            var d, e;
            "string" != typeof a && (c = b, b = a, a = null), isArray(b) || (c = b, b = []), !b.length && isFunction(c) && c.length && (c.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(a, c) {
                b.push(c)
            }), b = (1 === c.length ? ["require"] : ["require", "exports", "module"]).concat(b)), useInteractive && (d = currentlyAddingScript || getInteractiveScript(), d && (a || (a = d.getAttribute("data-requiremodule")), e = contexts[d.getAttribute("data-requirecontext")])), (e ? e.defQueue : globalDefQueue).push([a, b, c])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this), /*! require.config */
"function" == typeof define && define.amd && define.amd.jQuery && define("jquery/1/jquery", [], function() {
    return jQuery
});
var webmdCachebuster = "1";
require.config({
    urlArgs: "_=" + (window.webmdCachebuster || ""),
    waitSeconds: 30,
    baseUrl: (window.image_server_url || "") + "/webmd/consumer_assets/site_images/amd_modules/"
}), define("css", [], function() {
    function a(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return c;
        return -1
    }
    if ("undefined" == typeof window) return {
        load: function(a, b, c) {
            c()
        }
    };
    var b = !1,
        c = document.getElementsByTagName("head")[0],
        d = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/),
        e = !1;
    d && (d[1] || d[7] ? (e = parseInt(d[1]) < 6 || parseInt(d[7]) <= 9, d = "trident") : d[2] ? (e = !0, d = "webkit") : d[3] || (d[4] ? (e = parseInt(d[4]) < 18, d = "gecko") : b && alert("Engine detection failed")));
    var f = {},
        g = /^\/|([^\:\/]*:)/;
    f.pluginBuilder = "./css-builder";
    var h = [],
        i = {},
        j = [];
    f.addBuffer = function(b) {
        -1 == a(h, b) && -1 == a(j, b) && (h.push(b), j.push(b))
    }, f.setBuffer = function(a, b) {
        var c = window.location.pathname.split("/");
        c.pop(), c = c.join("/") + "/";
        var d = require.toUrl("base_url").split("/");
        d.pop();
        var e = d.join("/") + "/";
        e = normalize.convertURIBase(e, c, "/"), e.match(g) || (e = "/" + e), "/" != e.substr(e.length - 1, 1) && (e += "/"), f.inject(normalize(a, e, c));
        for (var j = 0; j < h.length; j++)(b && ".less" == h[j].substr(h[j].length - 5, 5) || !b && ".css" == h[j].substr(h[j].length - 4, 4)) && (! function(a) {
            i[a] = i[a] || !0, setTimeout(function() {
                "function" == typeof i[a] && i[a](), delete i[a]
            }, 7)
        }(h[j]), h.splice(j--, 1))
    }, f.attachBuffer = function(b, c) {
        for (var d = 0; d < h.length; d++)
            if (h[d] == b) return i[b] = c, !0;
        return i[b] === !0 ? (i[b] = c, !0) : -1 != a(j, b) ? (c(), !0) : void 0
    };
    var k = function(a, b) {
            setTimeout(function() {
                for (var c = 0; c < document.styleSheets.length; c++) {
                    var d = document.styleSheets[c];
                    if (d.href == a.href) return b()
                }
                k(a, b)
            }, 10)
        },
        l = function(a, b) {
            setTimeout(function() {
                try {
                    return a.sheet.cssRules, b()
                } catch (c) {}
                l(a, b)
            }, 10)
        };
    if ("trident" == d && e) var m = [],
        n = [],
        o = 0,
        p = function(a, b) {
            var d;
            n.push({
                url: a,
                cb: b
            }), d = m.shift(), !d && o++ < 12 && (d = document.createElement("style"), c.appendChild(d)), q(d)
        },
        q = function(a) {
            var b = n.shift();
            if (!b) return a.onload = s, void m.push(a);
            a.onload = function() {
                b.cb(b.ss), q(a)
            };
            var c = a.styleSheet;
            b.ss = c.imports[c.addImport(b.url)]
        };
    var r = function(a) {
            var b = document.createElement("link");
            return b.type = "text/css", b.rel = "stylesheet", b.href = a, b
        },
        s = function() {};
    f.linkLoad = function(a, f) {
        var g = setTimeout(function() {
                b && alert("timeout"), f()
            }, 1e3 * B - 100),
            h = function() {
                clearTimeout(g), i && (i.onload = s), setTimeout(f, 7)
            };
        if (e)
            if ("webkit" == d) {
                var i = r(a);
                k(i, h), c.appendChild(i)
            } else if ("gecko" == d) {
            var j = document.createElement("style");
            j.textContent = '@import "' + a + '"', l(j, h), c.appendChild(j)
        } else "trident" == d && p(a, h);
        else {
            var i = r(a);
            i.onload = h, c.appendChild(i)
        }
    };
    var t, u = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        v = {},
        w = function(a, b, c) {
            if (v[a]) return void b(v[a]);
            var d, e, f;
            if ("undefined" != typeof XMLHttpRequest) d = new XMLHttpRequest;
            else if ("undefined" != typeof ActiveXObject)
                for (e = 0; 3 > e; e += 1) {
                    f = u[e];
                    try {
                        d = new ActiveXObject(f)
                    } catch (g) {}
                    if (d) {
                        u = [f];
                        break
                    }
                }
            d.open("GET", a, requirejs.inlineRequire ? !1 : !0), d.onreadystatechange = function(e) {
                var f, g;
                4 === d.readyState && (f = d.status, f > 399 && 600 > f ? (g = new Error(a + " HTTP status: " + f), g.xhr = d, c(g)) : (v[a] = d.responseText, b(d.responseText)))
            }, d.send(null)
        },
        x = 0;
    f.inject = function(a) {
        31 > x && (t = document.createElement("style"), t.type = "text/css", c.appendChild(t), x++), t.styleSheet ? t.styleSheet.cssText += a : t.appendChild(document.createTextNode(a))
    };
    var y = /@import\s*(url)?\s*(('([^']*)'|"([^"]*)")|\(('([^']*)'|"([^"]*)"|([^\)]*))\))\s*;?/g,
        z = window.location.pathname.split("/");
    z.pop(), z = z.join("/") + "/";
    var A = function(a, b, c) {
        a.match(g) || (a = "/" + normalize.convertURIBase(a, z, "/")), w(a, function(d) {
            d = normalize(d, a, z);
            for (var e, f = [], g = [], h = []; e = y.exec(d);) {
                var i = e[4] || e[5] || e[7] || e[8] || e[9];
                f.push(i), g.push(y.lastIndex - e[0].length), h.push(e[0].length)
            }
            for (var j = 0, k = 0; k < f.length; k++)(function(a) {
                A(f[a], function(c) {
                    d = d.substr(0, g[a]) + c + d.substr(g[a] + h[a]);
                    for (var e = c.length - h[a], i = a + 1; i < f.length; i++) g[i] += e;
                    j++, j == f.length && b(d)
                }, c)
            })(k);
            0 == f.length && b(d)
        }, c)
    };
    f.normalize = function(a, b) {
        return ".css" == a.substr(a.length - 4, 4) && (a = a.substr(0, a.length - 4)), b(a)
    };
    var B, C = !1;
    return f.load = function(a, c, d, g, h) {
        B = B || g.waitSeconds || 7;
        var i = a + (h ? ".less" : ".css");
        f.attachBuffer(i, d) || (fileUrl = c.toUrl(i), !C && b && (alert(e ? "hacking links" : "not hacking"), C = !0), h ? A(fileUrl, function(a) {
            h && (a = h(a, function(a) {
                f.inject(a), setTimeout(d, 7)
            }))
        }) : f.linkLoad(fileUrl, d))
    }, b && (f.inspect = function() {
        return stylesheet.styleSheet ? stylesheet.styleSheet.cssText : stylesheet.innerHTML ? stylesheet.innerHTML : void 0
    }), f
}); /*! webmd.json */
var JSON;
if (JSON || (JSON = {}), function() {
        "use strict";

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) d = rep[c], "string" == typeof d && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), webmd.json = {
        parse: JSON.parse,
        stringify: JSON.stringify
    }, /*! webmd.url */
    webmd.url = {
        getParam: function(a, b) {
            var c;
            return c = this.getParams(b), c[a] ? c[a][0] : void 0
        },
        getParams: function(a) {
            return void 0 === a && (a = location.href), this._getParts(a).params
        },
        addParam: function(a, b, c) {
            return this.setParam(a, b, c)
        },
        setParam: function(a, b, c) {
            return c = this.deleteParam(a, c), this.appendParam(a, b, c)
        },
        appendParam: function(a, b, c) {
            var d;
            return void 0 === c && (c = location.href), d = this._getParts(c), void 0 === b && (b = ""), d.params[a] || (d.params[a] = []), d.params[a].push(b), this._buildUrl(d)
        },
        deleteParam: function(a, b) {
            var c;
            return void 0 === b && (b = location.href), c = this._getParts(b), delete c.params[a], this._buildUrl(c)
        },
        getHash: function(a) {
            return void 0 === a && (a = location.href), this._getParts(a).hash
        },
        setHash: function(a, b) {
            return void 0 === b && (b = location.href), b = b.replace(/#.*/, ""), a = a.replace(/^#/, ""), a && (b = b + "#" + a), b
        },
        clear: function(a) {
            return void 0 === a && (a = location.href), this._getParts(a).url
        },
        getHostname: function(a) {
            var b;
            return void 0 === a ? location.hostname : (b = document.createElement("a"), b.href = a, b.hostname)
        },
        getLifecycle: function(a) {
            var b;
            return b = this.getHostname(a), -1 !== b.indexOf(".preview.") ? ".preview" : -1 !== b.indexOf(".staging.") ? ".staging" : ""
        },
        getEnv: function(a) {
            var b, c, d;
            return b = this.getHostname(a), c = b.split("."), c.pop(), c.pop(), d = c.pop(), "m" === d && (d = c.pop()), ("preview" === d || "staging" === d) && (d = ""), d = d && c.length ? "." + d : ""
        },
        addLifecycleAndEnv: function(a, b) {
            return a.replace(/(\/\/[^\/]+?)(\.m)?(\.\w+\.\w+)/, "$1" + this.getLifecycle(b) + this.getEnv(b) + "$2$3")
        },
        getSLD: function(a) {
            return this.getHostname(a).split(".").splice(-2, 2).join(".")
        },
        _getPartsRegExp: new RegExp("([^#?]*)\\??([^#]*)?#?(.*)?"),
        _getParts: function(a) {
            var b, c;
            return c = {
                url: "",
                query: "",
                hash: "",
                params: {}
            }, b = this._getPartsRegExp.exec(a), null !== b && (c.url = void 0 === b[1] ? "" : b[1], c.query = void 0 === b[2] ? "" : b[2], c.hash = void 0 === b[3] ? "" : decodeURIComponent(b[3]), c.params = this._splitParams(c.query)), c
        },
        _splitParams: function(a) {
            var b, c, d, e, f, g, h;
            if (h = {}, a)
                for (c = a.replace(/\+/g, " ").split("&"), b = 0; b < c.length; b++) d = c[b].split("="), f = d[0], g = d[1] || "", f && (f = decodeURIComponent(f), g = decodeURIComponent(g), e = h[f] || [], e.push(g), h[f] = e);
            return h
        },
        _buildUrl: function(a) {
            var b, c, d, e, f, g;
            d = a.params, e = a.url, f = "?";
            for (c in d)
                if (d.hasOwnProperty(c))
                    for (g = d[c], b = 0; b < g.length; b++) e += f + encodeURIComponent(c) + "=" + encodeURIComponent(g[b]), f = "&";
            return a.hash && (e += "#" + a.hash), e
        }
    }, /*! webmd.cookie */
    function() {
        function a(a) {
            var b = a.match(/^\[(.+?)\]/);
            return b ? b[1] || "" : ""
        }

        function b(a, b) {
            return "[" + a + "]" + b
        }

        function c(a) {
            return a.replace(/^\[(.+?)\]/, "")
        }

        function d(a) {
            return (a || "").replace(/[a-z]/gi, function(a) {
                var b = a.charCodeAt(0);
                return String.fromCharCode(b > 109 || 97 > b && b > 77 ? b - 13 : b + 13)
            })
        }

        function e(a) {
            return a.replace(/[0-9]/g, f)
        }

        function f(a) {
            return j.hasOwnProperty(a) ? j[a] : a
        }

        function g(a) {
            return encodeURIComponent(a).replace(/%7B|%7D|%3A|%5B|%5D/g, function(a) {
                return decodeURIComponent(a)
            })
        }

        function h(a) {
            return decodeURIComponent(a)
        }

        function i(a) {
            return (a || "").replace(k, "")
        }
        var j = {
                0: 5,
                1: 6,
                2: 7,
                3: 8,
                4: 9,
                5: 0,
                6: 1,
                7: 2,
                8: 3,
                9: 4
            },
            k = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
        webmd.cookie = function(d, e, f) {
                /*! BEGIN LICENSE Cookie plugin
                 * This code was based on:
                 * Cookie plugin
                 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
                 * Dual licensed under the MIT and GPL licenses:
                 * http://www.opensource.org/licenses/mit-license.php
                 * http://www.gnu.org/licenses/gpl.html
                 */
                var j, k, l, m, n, o, p, q, r, s, t, u, v = "";
                if (u = webmd.cookie, f = f || {}, "undefined" != typeof e) return null === e && (e = "", f.expires = -1), f.scramble && (u.scramblers[f.scramble] || (f.scramble = u.scramblerDefault), p = u.scramblers[f.scramble].encode, e = p(e), e = b(f.scramble, e)), f.expires && ("number" == typeof f.expires || f.expires.toUTCString) && ("number" == typeof f.expires ? (m = new Date, m.setTime(m.getTime() + 24 * f.expires * 60 * 60 * 1e3)) : m = f.expires, v = "; expires=" + m.toUTCString()), o = f.domain ? "; domain=" + f.domain : "", t = f.secure ? "; secure" : "", r = void 0 === f.path ? "; path=/" : "" === f.path ? "" : "; path=" + f.path, document.cookie = [d, "=", g(e), v, r, o, t].join(""), e;
                if (k = null, document.cookie && "" !== document.cookie)
                    for (l = document.cookie.split(";"), q = 0; q < l.length; q++)
                        if (j = i(l[q]), j.substring(0, d.length + 1) == d + "=") {
                            if (k = h(j.substring(d.length + 1)), f.scramble) {
                                if (s = a(k), s || (s = "rot13"), !u.scramblers[s]) throw "Cannot unscramble cookie with prefix " + s;
                                k = c(k), n = u.scramblers[s].decode, k = n(k)
                            }
                            break
                        }
                return k
            }, /*! END LICENSE Cookie plugin */
            webmd.cookie = $.extend(webmd.cookie, {
                get: function(a, b) {
                    var c = this(a, void 0, b);
                    return null === c ? "" : c
                },
                set: function(a, b, c) {
                    return this(a, b, c)
                },
                getJson: function(a, b) {
                    var c = this(a, void 0, b);
                    if (null === c) return {};
                    try {
                        return c = JSON.parse(c)
                    } catch (d) {
                        return {}
                    }
                },
                setJson: function(a, b, c) {
                    return this(a, JSON.stringify(b), c)
                },
                exists: function(a) {
                    return null !== this(a)
                },
                deleteCookie: function(a, b) {
                    return this(a, "", $.extend({}, b, {
                        expires: -1
                    }))
                },
                scramblers: {
                    rot13: {
                        encode: function(a) {
                            return d(a)
                        },
                        decode: function(a) {
                            return d(a)
                        }
                    },
                    rot13n: {
                        encode: function(a) {
                            return e(d(a))
                        },
                        decode: function(a) {
                            return e(d(a))
                        }
                    }
                },
                scramblerDefault: "rot13n"
            })
    }(), !window.webmd) var webmd = {};
window.webmd.m || (webmd.m = {}), webmd.m.cookieConsent || (webmd.m.cookieConsent = {}),
    function() {
        webmd.m.cookieConsent = {
            API_VISITOR_EU: "/api/visitorcountry/visitorcountry.svc/isvisitoreu",
            COOKIE_NAME: "ck_consent",
            GLOBAL_CLASS: "cookie-consent",
            COOKIE_OPTIONS: {
                domain: webmd.url.getSLD(),
                expires: 30
            },
            COOKIE_POLICIES: {
                "webmd.com": "/about-webmd-policies/cookie-policy",
                "medicinenet.com": "/script/main/art.asp?articlekey=190917",
                "emedicinehealth.com": "/script/main/art.asp?articlekey=190918",
                "rxlist.com": "/script/main/art.asp?articlekey=190919"
            },
            defaults: {
                template: '<div class="cookie-consent-ctr"><span class="legal">This website uses cookies to deliver its services as described in our <a href="{cookiePolicyLink}">Cookie Policy</a>. By using this website, you agree to the use of cookies.</span><a class="close" aria-label="Dismiss" title="close"></a></div>',
                selectors: {
                    target: {
                        core: "body",
                        mobile: "#main_header"
                    },
                    container: ".cookie-consent-ctr"
                }
            },
            init: function() {
                var a = this,
                    b = !1,
                    c = a.hasCookie(a.COOKIE_NAME),
                    d = window.location.href.match(/sponsor-box/),
                    e = "",
                    f = webmd.url.getParam("isvisitoreu");
                f && f.length && (f = "true" === f ? !0 : !1, b = f), c || $.get(a.API_VISITOR_EU).done(function(c) {
                    c ? (b = c, b && !d && (e = a.createTemplate(a.defaults.template), e && (a.displayCookieBanner(a.defaults.selectors.target, e), a.bindEvents()))) : a.setCookie(a.COOKIE_NAME, !0, a.COOKIE_OPTIONS)
                }).fail(function() {
                    webmd.debug("ERROR: API failure in webmd.m.cookieConsent :: isVisitorEu")
                })
            },
            isVisitorEu: function() {
                var a = !1,
                    b = webmd.url.getParam("isvisitoreu");
                return b && b.length ? (b = "true" === b ? !0 : !1, a = b) : void $.get(this.API_VISITOR_EU).done(function(b) {
                    return b ? a = b : void 0
                }).fail(function() {
                    webmd.debug("ERROR: API failure in webmd.m.cookieConsent :: isVisitorEu")
                })
            },
            createTemplate: function(a) {
                var b = "";
                return b = this.getCookiePolicyLink(), a = webmd.substitute(a, {
                    cookiePolicyLink: b
                })
            },
            displayCookieBanner: function(a, b) {
                var c = $("html"),
                    d = c.hasClass("ua_type_mobile") ? a.mobile : a.core;
                d && b && ($(d).prepend(b), c.addClass(this.GLOBAL_CLASS))
            },
            getCookiePolicyLink: function() {
                var a = "",
                    b = "";
                try {
                    a = webmd.url.getSLD(), a && (b = this.COOKIE_POLICIES[a])
                } catch (c) {
                    webmd.debug("ERROR: cannot find key in webmd.m.cookieConsent :: getCookiePolicyLink", c)
                }
                return b
            },
            hasCookie: function(a) {
                return webmd.cookie.exists(a) || !1
            },
            bindEvents: function() {
                var a = this,
                    b = this.defaults.selectors.container;
                $(b).on("click", ".close", function() {
                    a.handleClick(a.COOKIE_NAME, !0, a.COOKIE_OPTIONS, b)
                }), $("body").on("click", "a, button, input, select", function() {
                    a.handleClick(a.COOKIE_NAME, !0, a.COOKIE_OPTIONS, b)
                })
            },
            handleClick: function(a, b, c, d) {
                try {
                    this.setCookie(this.COOKIE_NAME, !0, this.COOKIE_OPTIONS), $("html").removeClass(this.GLOBAL_CLASS), $(d).remove()
                } catch (e) {
                    webmd.debug("ERROR: Cannot handle handleClick in webmd.m.cookieConsent.", e)
                }
            },
            setCookie: function(a, b, c) {
                webmd.cookie.setJson(a, b, c)
            }
        }
    }(), $(function() {
        webmd.m.cookieConsent.init()
    }), /*! webmd.forceMobile.js */
    webmd.forceMobile = function() {
        if (-1 == document.referrer.indexOf("as.webmd.com") && webmd.url.getParam("force-mobile")) {
            var a = new Date;
            a.setDate(a.getDate() + 365), document.cookie = "MobileRequest=MobileRequest=True;expires=" + a + ";path=/;domain=webmd.com", window.location.replace(webmd.url.deleteParam("force-mobile"))
        }
    }, webmd.forceMobile(), /*! webmd.search.js */
    function(a) {
        "use strict";
        a.search = a.search || {}, a.search.onHeaderSearchKeypress = function(b, c) {
            return b.which && 13 == b.which || b.keyCode && 13 == b.keyCode ? a.search.submit(c) : !0
        }, a.search.submit = function(b) {
            var c, d;
            switch (void 0 == b && (b = "topSrchBar"), "topSrchBar" == b ? (c = escape(document.getElementById("searchQuery_fmt").value), d = "srch-bar_submit") : "botSrchBar" == b ? (d = "srch-bar-foot_submit", c = escape(document.getElementById("searchQueryFoot_fmt").value)) : "la" == b.replace(/[0-9]/g, "") ? (c = escape(document.getElementById("searchQuery_fmt").value), d = "srch-bar_" + b) : (c = escape(document.getElementById("searchQuery_fmt").value), d = "srch-bar-unknown"), b) {
                case "dpa":
                    d = "dpa-srch-bar_submit";
                    break;
                case "dpb":
                    d = "dpb-srch-bar_submit";
                    break;
                case "dpc":
                    d = "dpc-srch-bar_submit";
                    break;
                case "wha":
                    d = "wha-srch-bar_submit";
                    break;
                case "whb":
                    d = "whb-srch-bar_submit";
                    break;
                case "whc":
                    d = "whc-srch-bar_submit";
                    break;
                case "hpa":
                    d = "hpa-srch-bar_submit";
                    break;
                case "hpb":
                    d = "hpb-srch-bar_submit";
                    break;
                case "hpc":
                    d = "hpc-srch-bar_submit"
            }
            var e, f = a.url.getEnv(),
                g = a.url.getLifecycle();
            try {
                ctrs(d)
            } catch (h) {}
            return e = f ? a.substitute("http://search{environment}.webmd.com/search", {
                environment: f
            }) : a.substitute("http://www{lifecycle}.webmd.com/search", {
                lifecycle: g
            }), c && (e += "/search_results/default.aspx?query=" + c, "pet_search" === window.s_filter && (e += "&searchtype=pets")), window.location.href = e, !1
        }
    }(webmd), /*! webmd.usability */
    webmd.usability = {
        coinFlip: function(a) {
            var b = 100 * Math.random() + 1;
            b > 100 && (b = 100);
            var c = 0,
                d = 0,
                e = 0,
                f = "";
            return $.each(a, function(a, g) {
                0 == e ? d = g : (c = d, d = c + g), b > c && d >= b && (f = a), e++
            }), f
        },
        config: function(a, b, c) {
            var d = webmd.cookie.getJson("usability");
            if ("undefined" == typeof b) return d[a] || !1;
            d[a] = "object" == typeof d[a] && "object" == typeof b ? $.extend(!0, d[a], b) : b;
            var e = new Date((new Date).getTime() + 18e5);
            if ("undefined" == typeof c) var c = e;
            else null != c && (c = c ? "function" == c.getTime ? c : e : "number" == typeof d.expires ? new Date(d.expires) : e);
            d.expires = null != c ? c.getTime() : null;
            var f = {
                domain: window.location.hostname.indexOf("webmd.com") > -1 ? "webmd.com" : null,
                expires: c,
                path: "/"
            };
            webmd.cookie.setJson("usability", d, f)
        },
        tests: {}
    }, /*! webmd.ads */
    webmd.ads = {
        params: {},
        posSizeMapping: {
            101: {
                height: 90,
                width: 728
            },
            102: {
                height: 90,
                width: 728
            },
            105: {
                height: 90,
                width: 970
            },
            111: {
                height: 240,
                width: 120
            },
            112: {
                height: 600,
                width: 120
            },
            113: {
                height: 600,
                width: 160
            },
            121: {
                height: 250,
                width: 300
            },
            131: {
                height: 600,
                width: 300
            },
            132: {
                height: 600,
                width: 300
            },
            133: {
                height: 600,
                width: 300
            },
            137: {
                height: 250,
                width: 300
            },
            138: {
                height: 1050,
                width: 300
            },
            404: {
                height: 250,
                width: 300
            },
            700: {
                height: 198,
                width: 300
            },
            701: {
                height: 199,
                width: 145
            },
            901: {
                height: 1,
                width: 1
            },
            5e3: {
                height: 1,
                width: 494
            },
            5001: {
                height: 1,
                width: 494
            },
            5002: {
                height: 1,
                width: 308
            },
            5003: {
                height: 1,
                width: 308
            },
            0: {
                height: 0,
                width: 0
            }
        },
        init: function() {
            function a(a, c) {
                var d, e, f, g, h, i, j = $(a).attr("src"),
                    k = b.exec(j);
                if (null !== k && (d = void 0 === k[2] ? "" : k[2]), d)
                    for (d = d.replace(/amp;/g, ""), e = d.split("&"), f = 0; f < e.length; f++) g = e[f].split("="), h = decodeURIComponent(g[0]), i = decodeURIComponent(g[1]), i = i.replace(/\//g, "%2f"), "pos" == h && c[h] ? c[h] = c[h] + "," + i : c[h] = i;
                return !0
            }
            if ($.isEmptyObject(this.params)) {
                var b = new RegExp("(.*/)(.*)"),
                    c = {};
                $("*[id*='Ad_Iframe']").each(function() {
                    a(this, c)
                }), $.each(webmd.ads.refresh.defaults.src, function() {
                    a(this, c)
                }), this.params = c
            }
        },
        refresh: function(a) {
            webmd.debug("============= Refresh:", a);
            var b = this,
                c = (new Date).getTime(),
                d = 0,
                e = b.refresh.throttling.queue,
                f = 1e3 * b.refresh.throttling.perSeconds;
            $.each(e, function(a, b) {
                return c - b > f ? !1 : void d++
            }), e.splice(d), e.unshift(c), e.length <= b.refresh.throttling.maxCalls ? (webmd.ads2.isInitialized() ? b._refreshDFP(a) : b._refresh(a), $(document).trigger("refreshAds", a)) : (webmd.debug("WARNING!  Too many ad refresh calls being made"), e.pop())
        },
        _refreshDFP: function(a) {
            var b = $.extend(!0, {}, webmd.ads.refresh.defaults, a);
            webmd.ads2.refresh({
                keys: b.params
            }), $(document).trigger("before_adrefresh")
        },
        _refresh: function(a) {
            function b(a, b, c) {
                var d = new RegExp("\\b" + b + "=[^&#\"']*");
                return a = a.replace(d, b + "=" + c)
            }
            var c = $.extend(!0, {}, webmd.ads.refresh.defaults, a),
                d = Math.round(99999999 * Math.random()),
                e = window.s_pageview_id || "99999";
            c.params.pvid = e;
            var f = !1;
            $(c.selector).each(function() {
                var a, e, g = $(this).children("*[id*='Ad_Iframe']");
                if ($(this).find("*").not("*[id*='Ad_Iframe'],.ad_placeholder").remove(), g.empty(), a = $(this).find("[id]"), !a[0]) {
                    var h = c.src[$(this).attr("id")];
                    return e = $(h).attr("src"), e ? (e = e.replace(/amp;/g, ""), e = b(e, "transactionID", d), e = b(e, "tile", d), $.each(c.params, function(a, c) {
                        e = b(e, a, c), e.indexOf(a + "=") < 0 && (e = e + "&" + a + "=" + c)
                    }), $.isFunction(c.filter) && (e = c.filter(e)), e = e.replace(/&/g, "%26"), $(h).attr("src", e), h = '<iframe id="' + $(h).attr("id") + '" width="' + $(h).attr("width") + '" height="' + $(h).attr("height") + '" src="' + $(h).attr("src") + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style=""></iframe>', void $(this).children("div.ad_placeholder").replaceWith(h)) : void $(this).parent().remove()
                }
                if (f || ($(document).trigger("before_adrefresh"), f = !0), e = a.attr("src"))
                    if (e = e.replace(/%26/g, "&"), e = b(e, "transactionID", d), e = b(e, "tile", d), $.each(c.params, function(a, c) {
                            e = b(e, a, c), e.indexOf(a + "=") < 0 && (e = e + "&" + a + "=" + c)
                        }), $.isFunction(c.filter) && (e = c.filter(e)), $(a).attr("style", ""), e = e.replace(/&/g, "%26"), a[0].contentWindow) try {
                        a[0].contentWindow.location.replace(e)
                    } catch (i) {
                        webmd.debug(i)
                    } else a.attr({
                        src: e
                    })
            })
        },
        handleAdSeedCall: function(a) {
            var b = this;
            return "object" == typeof a && a.adLocation && a.adURL && a.trans && a.tile && a.pos ? (a.iframeId = a.adLocation + "Ad_Iframe", a.iframeContainer = a.adLocation + "Ad_fmt", a.iframeContainerWrapper = a.adLocation + "Ad_rdr", a.width = webmd.object.get("width", b.posSizeMapping[a.pos]) || 0, a.height = webmd.object.get("height", b.posSizeMapping[a.pos]) || 0, webmd.ads.refresh.defaults.src[a.iframeContainer] = document.createElement("iframe"), $(webmd.ads.refresh.defaults.src[a.iframeContainer]).attr({
                src: a.adURL,
                width: a.width,
                height: a.height,
                id: a.iframeId,
                title: "Advertisement Frame",
                marginwidth: 0,
                marginheight: 0,
                style: "margin:0;",
                frameborder: 0,
                scrolling: "no"
            }), void(webmd.ads.adSeedCallPromise ? webmd.ads.adSeedCallPromise.done(function() {
                a.pos = webmd.object.get("webmd.ads.pageConfig.adPosValues." + a.adLocation + ".pos") || a.pos, a.height = webmd.object.get("height", b.posSizeMapping[a.pos]) || a.height, a.width = webmd.object.get("width", b.posSizeMapping[a.pos]) || a.width, $(webmd.ads.refresh.defaults.src[a.iframeContainer]).attr({
                    width: a.width,
                    height: a.height
                }), b._writeSeedCallAd(a)
            }) : b._writeSeedCallAd(a))) : void webmd.debug("Ad Seed Call: The proper ad parameters were not provided. Will not create ad iframe")
        },
        _writeSeedCallAd: function(a) {
            webmd.ads.refresh({
                selector: "#" + a.iframeContainerWrapper + " #" + a.iframeContainer,
                params: {
                    pos: a.pos,
                    transactionID: a.trans,
                    tile: a.tile
                }
            }), $("#" + a.iframeContainer).css({
                width: a.width
            }), webmd.debug(webmd.ads.refresh.defaults.src[a.iframeContainer])
        }
    }, $(function() {
        webmd.ads.init()
    }), webmd.ads.refresh.defaults = {
        selector: "#bannerAd_fmt, #leftAd_fmt, #rightAd_fmt, #slideshow_ad_300x250, #cw_btm_ad_300x250, #top_ad, #bottom_ad",
        src: {},
        params: {}
    }, webmd.ads.refresh.throttling = {
        maxCalls: 10,
        perSeconds: 5,
        queue: []
    };
var googletag, webmd;
webmd = window.webmd || {}, googletag = googletag || {}, googletag.cmd = googletag.cmd || [], webmd.ads2 = {
        ads: {},
        adTarget: ["consumer", "webmd"],
        networkCode: "",
        pageTargets: {},
        pageExclusions: {},
        sizes: {},
        init: function() {
            return this.init.flag ? void 0 : (this.init.flag = !0, this.networkCode = this.setNetworkCode(), "undefined" == typeof $googleloaded && this.googleLoad(), this)
        },
        isInitialized: function() {
            return Boolean(this.init.flag)
        },
        googleDefer: function(a) {
            return googletag.cmd.push(a), this
        },
        googleLoad: function() {
            var a, b, c;
            return a = document.createElement("script"), a.async = !0, a.type = "text/javascript", c = "https:" === document.location.protocol, a.src = (c ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b), this
        },
        setPageTarget: function(a, b) {
            var c;
            return c = this, c.googleDefer(function() {
                $.isPlainObject(a) ? $.each(a, function(a, b) {
                    b = String(c.fixTarget(a, b)), googletag.pubads().setTargeting(a, b), c.pageTargets[a] = b
                }) : (b = String(c.fixTarget(a, b)), googletag.pubads().setTargeting(a, b), c.pageTargets[a] = b)
            }), this
        },
        fixTarget: function(a, b) {
            return "env" === a && (b = b.replace(/&amp;env=/, "")), "leaf" === a && (b = b.replace(/&amp;leaf=/, "")), "uri" === a && (b = decodeURIComponent(b)), b
        },
        setPageTargetUrl: function(a) {
            var b, c, d, e, f;
            for (a = a || "", e = a.split("&amp;"), b = 0; b < e.length; b++) d = e[b].split("="), c = decodeURIComponent(d[0] || ""), f = decodeURIComponent(d[1] || ""), c && this.setPageTarget(c, f);
            return this
        },
        setPageExclusion: function(a) {
            var b;
            return b = this, a = $.isArray(a) ? a : [a], b.googleDefer(function() {
                $.each(a, function(a, c) {
                    googletag.pubads().setCategoryExclusion(c), b.pageExclusions[c] = !0
                })
            }), b
        },
        setPageExclusionUnderscore: function(a) {
            var b;
            return b = this, a = a || "", $.each(a.split("_"), function(a, c) {
                c && b.setPageExclusion(c)
            }), this
        },
        defineAd: function(a) {
            var b, c;
            if (c = this, a = a || {}, b = window.ads2_ignore || {}, !b.all && !b[a.pos]) {
                if (a.sizes = c.sizes[a.pos] || a.sizes, !(a.id && a.sizes && a.pos)) throw "Missing id, pos, or sizes for defineAd";
                return c.ads[a.id] = a, c.googleDefer(function() {
                    webmd.debug("define ad");
                    var b, d;
                    b = "/" + c.networkCode + "/" + c.adTarget.join("/"), d = googletag.defineSlot(b, a.sizes, a.id).addService(googletag.pubads()).setTargeting("pos", a.pos), a.slot = d, a.keys && $.each(a.keys, function(a, b) {
                        d.setTargeting(a, b)
                    }), (a.collapseAfter || a.collapseBefore) && d.setCollapseEmptyDiv(a.collapseAfter, a.collapseBefore), c.display.flag && (googletag.display(a.id), a.immediate && c.refresh({
                        id: a.id
                    }))
                }), this
            }
        },
        disableInitialLoad: function() {
            return this.googleDefer(function() {
                googletag.pubads().disableInitialLoad()
            }), this
        },
        displayCalled: !1,
        displayCalledCount: 0,
        display: function() {
            var a;
            return a = this, a.googleDefer(function() {
                a.displayCalled = !0, a.displayCalledCount++, 1 === a.displayCalledCount && $(document).trigger("DFP_DISPLAY_CALLED"), webmd.debug("display"), googletag.pubads().enableSingleRequest(), googletag.enableServices(), $.each(a.ads, function(b, c) {
                    googletag.display(b), a.display.flag = !0
                })
            }), this
        },
        refresh: function(a) {
            function b() {
                webmd.debug("refresh"), c.slots = [], a.keys && (a.keys.dmp && (a.keys.dmp = webmd.lotame.truncatedDMPAudiences), c.setPageTarget(a.keys)), $.each(c.ads, function(b, d) {
                    var e, f;
                    if (f = d.slot, e = d.pos, "undefined" != typeof a.pos) $.isPlainObject(a.pos) ? a.pos[e] === !0 && c.slots.push(f) : String(e) === String(a.pos) && c.slots.push(f);
                    else if ("undefined" != typeof a.id) $.isPlainObject(a.id) ? a.id[b] === !0 && c.slots.push(f) : String(b) === String(a.id) && c.slots.push(f);
                    else {
                        if (d.refresh === !1) return !0;
                        if ("undefined" != typeof a.posSkip)
                            if ($.isPlainObject(a.posSkip)) {
                                if (a.posSkip[e] === !0) return !0
                            } else if (String(e) === String(a.posSkip)) return !0;
                        if ("undefined" != typeof a.idSkip)
                            if ($.isPlainObject(a.idSkip)) {
                                if (a.idSkip[b] === !0) return !0
                            } else if (String(b) === String(a.idSkip)) return !0;
                        c.slots.push(f)
                    }
                }), googletag.pubads().refresh(c.slots), webmd.debug("refresh - inside timeout")
            }
            var c;
            return c = this, a = a || {}, c.displayCalled ? (webmd.debug("invoking refresh not using event"), b()) : $(document).on("DFP_DISPLAY_CALLED", function() {
                webmd.debug("invoking refresh using event"), setTimeout(b, 1)
            }), this
        },
        setNetworkCode: function() {
            var a = {
                    live: "4312434",
                    sandbox: "8668145"
                },
                b = webmd.url.getEnv() || "";
            return "" === b ? a.live : a.sandbox
        }
    }, webmd.ads2Consumer = {
        defineAd: function(a) {
            var b, c, d;
            c = this, b = webmd.ads2, b.init(), d = a.targets || {}, b.googleDefer(function() {
                d.env ? d.env = b.fixTarget("env", d.env) : webmd.url.getEnv() || (d.env = "0"), d.leaf && (d.leaf = b.fixTarget("leaf", d.leaf)), d.uri && (d.uri = b.fixTarget("uri", d.uri)), "" === d.pt && delete d.pt, "[exgid]" === d.ex && delete d.ex, webmd.adappid && (d.app = webmd.adappid), d.pug && (d.pug = c.splitPugFromString(d.pug)), d.segm || (d.segm = "0"), c.sizeIsNotDefined(a.sizes) && (a.sizes = c.getSizeForPos(a.pos)), "undefined" != typeof window.ads2_emb && "1" === window.ads2_emb && (d.emb = "1"), b.setPageTarget(d), b.setPageExclusionUnderscore(a.blockCodes), c.checkRules(), b.defineAd(a)
            })
        },
        display: function() {
            var a, b;
            a = webmd.ads2, b = this, webmd.ads2.googleDefer(function() {
                webmd.object.get("webmd.p.pim.isAllowed") && !webmd.p.pim.isAllowed() && a.setPageTarget("pimx", "1"), webmd.object.get("webmd.lotame.defer") ? webmd.lotame.defer.done(function() {
                    a.display()
                }) : a.display()
            })
        },
        setSafeSelect: function() {
            webmd.ads2.setPageExclusion("ssg")
        },
        setUserGeneratedContent: function() {
            var a, b;
            b = {
                webmd: "webmdugc",
                mednet: "mednetugc",
                rxlist: "rxlistugc",
                emed: "emedugc",
                webmdmobileweb: "webmdmobilewebugc",
                mednetmobileweb: "mednetmobilewebugc",
                rxlistmobileweb: "rxlistmobilewebugc",
                emedmobileweb: "emedmobilewebugc"
            }, a = webmd.ads2.adTarget[1], a = b[a] || a, webmd.ads2.adTarget[1] = a, webmd.ads2.adTarget[0] = a.indexOf("mobile") > 0 ? "consugcmobileweb" : "consugc", this.setSafeSelect()
        },
        setSensitive: function() {
            var a;
            a = {
                webmd: "st-conwbmd",
                webmdmobileweb: "st-cmbwwbmd",
                mednet: "st-conmnet",
                mednetmobileweb: "st-cmbwmnet",
                rxlist: "st-conrxl",
                rxlistmobileweb: "st-cmbwrxl",
                emed: "st-conemed",
                emedmobileweb: "st-cmbwemed",
                boots: "st-conboots",
                bootsmobileweb: "st-cmbwboots"
            }, webmd.ads2.adTarget[2] = a[webmd.ads2.adTarget[1]] || "", this.setSafeSelect()
        },
        setHomepage: function() {
            var a;
            a = {
                webmd: "hp-conwbmd",
                webmdmobileweb: "hp-cmbwwbmd",
                mednet: "hp-conmnet",
                mednetmobileweb: "hp-cmbwmnet",
                rxlist: "hp-conrxl",
                rxlistmobileweb: "hp-cmbwrxl",
                emed: "hp-conemed",
                emedmobileweb: "hp-cmbwemed",
                boots: "hp-conboots",
                bootsmobileweb: "hp-cmbwboots"
            }, webmd.ads2.adTarget[2] = a[webmd.ads2.adTarget[1]] || "", this.setSafeSelect()
        },
        setSponsored: function() {
            var a;
            a = {
                webmd: "sp-conwbmd",
                webmdmobileweb: "sp-cmbwwbmd",
                mednet: "sp-conmnet",
                mednetmobileweb: "sp-cmbwmnet",
                rxlist: "sp-conrxl",
                rxlistmobileweb: "sp-cmbwrxl",
                emed: "sp-conemed",
                emedmobileweb: "sp-cmbwemed",
                boots: "sp-conboots",
                bootsmobileweb: "sp-cmbwboots"
            }, webmd.ads2.adTarget[2] = a[webmd.ads2.adTarget[1]] || "", this.setSafeSelect()
        },
        checkRules: function() {
            var a, b, c;
            a = webmd.ads2.pageExclusions, b = this.rules, c = webmd.ads2.pageTargets, webmd.debug(c), (b.ugcApp[c.app] || b.ugcCc[c.cc] || b.ugcPt[c.pt]) && (webmd.debug("UGC"), this.setUserGeneratedContent()), (b.sensitiveTopic[c.pt] || b.sensitiveTopic[c.sec] || b.sensitiveCc[c.cc]) && (webmd.debug("Sensitive"), this.setSensitive()), (!b.adUnit1[webmd.ads2.adTarget[0]] || !b.adUnit2[webmd.ads2.adTarget[1]] || c.app && !b.app[c.app] || b.cc[c.cc] || b.pt[c.pt] || a[0]) && (webmd.debug("Safe Select"), this.setSafeSelect()), (window.s_sponsor_program || b.sponsoredPt[c.pt] || c.tug) && (webmd.debug("Sponsored"), this.setSponsored()), (b.homepageCc[c.cc] || b.homepagePt[c.pt]) && (webmd.debug("Homepage"), this.setHomepage())
        },
        splitPugFromString: function(a) {
            var b;
            return "__" !== a ? (b = a.split("_"), b.shift(), b.pop(), b) : []
        },
        getSizeForPos: function(a) {
            if (this.rules.defaultSizes[parseInt(a, 0)]) return this.rules.defaultSizes[parseInt(a, 0)];
            throw new Error("no position or default size defined")
        },
        sizeIsNotDefined: function(a) {
            return a && $.isArray(a) && a.length >= 1 ? !1 : !0
        },
        rules: {
            adUnit1: {
                consumer: !0,
                consmobileweb: !0,
                consuk: !0,
                consukmobileweb: !0
            },
            adUnit2: {
                webmd: !0,
                webmdmobileweb: !0,
                mednet: !0,
                mednetmobileweb: !0,
                rxlist: !0,
                rxlistmobileweb: !0,
                emed: !0,
                emedmobileweb: !0,
                boots: !0,
                bootsmobileweb: !0
            },
            app: {
                7: !0,
                8: !0,
                18: !0,
                22: !0,
                27: !0,
                28: !0
            },
            cc: {
                52: !0,
                53: !0,
                54: !0,
                55: !0,
                84: !0,
                85: !0,
                86: !0,
                87: !0,
                90: !0,
                99: !0,
                93: !0,
                100: !0,
                111: !0,
                112: !0,
                113: !0,
                121: !0,
                122: !0,
                127: !0,
                128: !0,
                129: !0,
                131: !0,
                138: !0,
                139: !0
            },
            leaf: {
                1141: !0,
                6141: !0,
                13404: !0
            },
            pt: {
                3644: !0,
                4117: !0,
                4112: !0,
                4113: !0,
                4121: !0
            },
            ugcApp: {
                2: !0,
                4: !0,
                5: !0,
                12: !0,
                17: !0,
                19: !0,
                21: !0,
                23: !0,
                200: !0,
                201: !0,
                202: !0,
                203: !0,
                204: !0,
                500: !0
            },
            ugcCc: {
                109: !0,
                110: !0
            },
            ugcPt: {
                3552: !0,
                3562: !0
            },
            sensitiveTopic: {
                4050: !0,
                7e3: !0,
                7001: !0,
                7002: !0,
                7004: !0,
                7005: !0,
                7006: !0,
                7007: !0,
                7009: !0,
                7010: !0,
                7012: !0,
                7013: !0,
                7014: !0,
                7015: !0,
                7019: !0,
                7021: !0,
                7022: !0,
                7023: !0,
                7024: !0,
                7121: !0,
                7122: !0
            },
            sensitiveCc: {
                20: !0,
                61: !0
            },
            sponsoredPt: {
                3644: !0,
                4121: !0
            },
            homepageCc: {
                83: !0
            },
            homepagePt: {
                1728: !0,
                home: !0
            },
            defaultSizes: {
                101: [728, 90],
                102: [728, 90],
                105: [970, 90],
                111: [120, 240],
                112: [120, 600],
                113: [160, 600],
                121: [300, 250],
                131: [300, 600],
                132: [300, 600],
                133: [300, 600],
                137: [300, 250],
                138: [300, 1050],
                404: [300, 250],
                700: [300, 198],
                701: [145, 199],
                901: [1, 1],
                5e3: [494, 1],
                5001: [494, 1],
                5002: [308, 1],
                5003: [308, 1]
            }
        }
    }, /*! webmd.ads.trackcenters */
    function(a) {
        var b = "cntr_track",
            c = "cntr_track_30",
            d = "as_02",
            e = "as_02_30";
        a.trackCenters = function(a, d) {
            var e = webmd.cookie.get(a),
                f = {
                    domain: "webmd.com"
                };
            if ("" === e) a == b && (webmd.cookie.set(d, "ck_cntr1_" + center_id, f), webmd.cookie.set(a, "1," + center_id, f)), a == c && (f.expires = 30, webmd.cookie.set(d, "ck_cntr1_" + center_id, f), webmd.cookie.set(a, "1," + center_id, f));
            else {
                var g = e.split("|"),
                    h = new Array(g.length),
                    i = "",
                    j = "",
                    k = !0,
                    l = 0;
                for (l in g) {
                    var m = g[l].slice(0, g[l].indexOf(",")),
                        n = g[l].slice(g[l].indexOf(",") + 1);
                    n == center_id && (m = String(parseInt(m, 10) + 1), k = !1), h[l] = new Array(2), h[l][0] = m, h[l][1] = n
                }
                k && (h[g.length] = new Array(2), h[g.length][0] = 1, h[g.length][1] = center_id), h.sort(function(a, b) {
                    return b[0] - a[0]
                }), l = 0;
                for (l in h) 3 > l && (l > 0 && (j += "|"), a == b && (j += "ck_cntr" + String(parseInt(l, 10) + 1) + "_" + h[l][1] + "x"), a == c && (j += "ck_cntr" + String(parseInt(l, 10) + 1) + "_" + h[l][1] + "x")), l > 0 && (i += "|"), i += h[l][0] + "," + h[l][1];
                a == b && (webmd.cookie.set(d, j, f), webmd.cookie.set(a, i, f)), a == c && (f.expires = 30, webmd.cookie.set(d, j, f), webmd.cookie.set(a, i, f))
            }
        }, "undefined" != typeof center_id && (a.trackCenters(b, d), a.trackCenters(c, e))
    }(webmd.ads), /*! webmd.adViewability.js */
    webmd.object.set("webmd.adViewability"), webmd.adViewability = {
        init: function() {
            "use strict";
            webmd.debug("|||||||||| webmd.adViewability ----->", "init");
            var a = $("#bannerAd_rdr"),
                b = window.s_sponsor_brand || "",
                c = window.s_sponsor_program || "",
                d = window.s_package_type || "",
                e = window.s_channel_health || null,
                f = $("#leftAd_rdr"),
                g = {
                    "Skin Problems and Treatments": !0,
                    Lupus: !0,
                    "Sleep Disorders": !0
                };
            this.addClassNoBanner(a), "" === b && "" === c && ($("html").hasClass("ua_type_mobile") || $("html").hasClass("cookie-consent") || d.indexOf("answers") >= 0 || d.indexOf("search") >= 0 || (this.makeBannerSticky(a), !($(window).width() >= 1350) || g[e] || b && c || !f.length || this.makeLeftAdSticky(f)))
        },
        makeLeftAdSticky: function(a) {
            var b = $("#masthead");
            a && ($("html").addClass("sticky-left-ad"), a.addClass("sticky-leftAd"), $(window).scroll(function() {
                var c = a.offset().top;
                window.pageYOffset > c - b.height() && a.addClass("is-fixed").removeClass("sticky-leftAd")
            }))
        },
        addClassNoBanner: function(a) {
            0 === a.length && $("html").addClass("no-banner")
        },
        makeBannerSticky: function(a) {
            function b(b, c) {
                b > c && (b > e && i > b ? ($("html").addClass("sticky-banner"), a.addClass("is-fixed")) : b > i && a.removeClass("is-fixed is-static").addClass("is-absolute"))
            }

            function c(b, c) {
                c > b && ($("html").removeClass("sticky-banner"), a.removeClass("is-fixed is-absolute").addClass("is-static"))
            }
            var d = $("html"),
                e = 90,
                f = "",
                g = 0,
                h = 0,
                i = 1100,
                j = "",
                k = "";
            $("html").hasClass("legacy") && (g = 25), a.length > 0 && (f = a.offset().top, Modernizr.touch ? ($(window).on("touchstart", function(a) {
                j = a.originalEvent.touches[0].pageY
            }), $(window).on("touchmove", function(d) {
                var f = $(this).scrollTop(),
                    g = a.offset().top,
                    l = "",
                    m = "";
                k = d.originalEvent.touches[0].pageY, l = Math.abs(k - j), m = i + g - e, a.hasClass("is-static") || a.hasClass("pushdown") || (j > k && l > 5 ? b(f, h) : k > j && l > 5 && c(f, m), h = f)
            })) : $(window).scroll(function() {
                var b = $(this).scrollTop();
                a.offset().top;
                a.hasClass("is-static") || a.hasClass("pushdown") || (b > h ? b > e + g && i > b ? (d.addClass("sticky-banner"), a.addClass("is-fixed")) : b > i && a.removeClass("is-fixed is-static").addClass("is-absolute") : ((e > b || b > i) && (d.removeClass("sticky-banner"), a.removeClass("is-fixed is-absolute")), b > i && a.addClass("is-static")), h = b)
            }))
        }
    }, $(function() {
        webmd.adViewability.init()
    }), /*! webmd.debug */
    webmd.debug = function() {
        var a = Array.prototype.slice.call(arguments);
        webmd.debug.active && window.console && (console.log.apply ? console.log.apply(console, a) : console.log(a))
    }, $.extend(webmd.debug, {
        active: !1,
        cookie: "webmddebug",
        param: "webmddebug",
        autoDetect: function() {
            var a = webmd.url.getParam(this.param);
            "0" === a ? this.deactivate() : ("1" === a || webmd.cookie.exists(this.cookie)) && this.activate()
        },
        activate: function() {
            this.active = !0, webmd.cookie.set(this.cookie, "1")
        },
        deactivate: function() {
            this.active = !1, webmd.cookie.deleteCookie(this.cookie)
        }
    }), webmd.debug.autoDetect(), /*! webmd.mbox */
    document.writeln('<script type="text/javascript" src="' + image_server_url + '/webmd/consumer_assets/site_images/usability/webmd.mboxreduction.js"></script>'), /*! webmd.flash */
    webmd.flash = {
        getState: function(a) {
            var b, c;
            return a || (a = "urlParams"), webmd.debug("webmd.flash.getState called. appID: ", a), webmd.debug("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"), c = {}, b = this.getState[a], b ? c = b() : webmd.debug("Error: no getState handler for ", a), $(document).trigger("getState", [c]), c
        },
        handleUserAction: function(a) {
            webmd.debug("userAction object:", a);
            var b = this.handleUserAction[a.action];
            b ? b(a) : webmd.debug("Error: no handleUserAction function for ", a.action), a.type = "userAction", $(document).trigger(a)
        },
        flashMetricsError: function(a) {
            0 == a && $(document).bind("beacon_load", function() {
                s_pagename = "no-flash:" + s_pagename, s_sponsor_program = "", s_package_type = "", s_package_name = "", s_sponsor_brand = ""
            })
        },
        flashUserError: function(a, b) {
            webmd.load({
                js: image_server_url + "/webmd/PageBuilder_Assets/JS_static/flash_error_messaging.js",
                load: function() {
                    webmd.flash.displayError(a, b)
                }
            })
        }
    }, $.extend(webmd.flash.handleUserAction, {
        moduleClick: function(a) {
            wmdPageLink(a.id)
        },
        linkClick: function(a) {
            if (ctrs(a.id), a.url) {
                var b = a.url; - 1 == a.url.indexOf(".webmd.com/") && (b = "http://www.webmd.com/click?url=" + encodeURIComponent(b), webmd.offsite.showInterstitial(b));
                window.open(b, "", "width=1000,height=600,left=25,top=25,scrollbars=1,toolbar=1,resizable=1,status=1,menubar=1")
            }
        },
        pageClick: function(a) {
            wmdTrack(a.id), a.url && (location = a.url)
        },
        pageView: function(a) {
            var b = window.s_pagename || location.href,
                c = b.split("default.htm"),
                d = c[0] + a.id;
            wmdPageview(d), webmd.debug("omniturePageURL: ", d)
        },
        videoView: function(a) {
            if (a.video.id || (a.video.id = "sponsorvideo"), a.video && a.video.status && a.video.name && a.video.id) {
                var b;
                b = s_gi(s_account), b.linkTrackVars = "prop9,prop17,prop18,prop20,prop34,prop50", b.prop17 = a.video.id, b.prop18 = a.video.id + "_" + a.video.status, b.prop20 = a.video.name + "_" + a.video.id + "_" + a.video.status, b.prop34 = a.video.name + "_" + a.video.id, b.prop9 = "", "start" == a.video.status && (b.prop9 = "allvideo_start"), "100pct" == a.video.status && (b.prop9 = "allvideo_100pct"), b.tl(!0, "o", b.prop20)
            }
        }
    }), $.extend(webmd.flash.getState, {
        urlParams: function() {
            var a, b, c, d, e, f, g = {};
            if (location.search)
                for (a = location.search.split("?"), a = void 0 === a[1] ? "" : a[1], b = a.split("&"), c = 0; c < b.length; c++) d = b[c].split("="), e = decodeURIComponent(d[0]), f = decodeURIComponent(d[1]), g[e] = f;
            return g
        }
    }),
    /*!
    ColorBox v1.3.15 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
    Copyright (c) 2010 Jack Moore - jack@colorpowered.com
    Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
    */
    function(a, b) {
        function c(b, c) {
            return b = b ? ' id="' + D + b + '"' : "", c = c ? ' style="' + c + '"' : "", a("<div" + b + c + "/>")
        }

        function d(a, b) {
            return b = "x" === b ? m.width() : m.height(), "string" == typeof a ? Math.round(/%/.test(a) ? b / 100 * parseInt(a, 10) : parseInt(a, 10)) : a
        }

        function e(b) {
            for (var c in b) a.isFunction(b[c]) && "on" !== c.substring(0, 2) && (b[c] = b[c].call(v));
            return b.rel = b.rel || v.rel || "nofollow", b.href = b.href || a(v).attr("href"), b.title = b.title || v.title, b
        }

        function f(b, c) {
            c && c.call(v), a.event.trigger(b)
        }

        function g(b) {
            if (!O) {
                if (v = b, x = e(a.extend({}, a.data(v, C))), l = a(v), w = 0, "nofollow" !== x.rel && (l = a("." + P).filter(function() {
                        var b = a.data(this, C).rel || this.rel;
                        return b === x.rel
                    }), w = l.index(v), -1 === w && (l = l.add(v), w = l.length - 1)), !y) {
                    if (y = z = !0, i.show(), x.returnFocus) try {
                        v.blur(), a(v).one(I, function() {
                            try {
                                this.focus()
                            } catch (a) {}
                        })
                    } catch (c) {}
                    h.css({
                        opacity: +x.opacity,
                        cursor: x.overlayClose ? "pointer" : "auto"
                    }).show(), "mobile" == webmd.useragent.getType() && h.css({
                        height: document.height + "px"
                    }), x.w = d(x.initialWidth, "x"), x.h = d(x.initialHeight, "y"), A.position(0), M && m.bind("resize." + N + " scroll." + N, function() {
                        h.css({
                            width: m.width(),
                            height: m.height(),
                            top: m.scrollTop(),
                            left: m.scrollLeft()
                        })
                    }).trigger("scroll." + N), f(E, x.onOpen), q.html(x.close).show()
                }
                A.load(!0)
            }
        }
        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B = {
                transition: "none",
                speed: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scrolling: !0,
                inline: !1,
                html: !1,
                iframe: !1,
                photo: !1,
                href: !1,
                title: !1,
                rel: !1,
                opacity: .7,
                preloading: !0,
                close: "close",
                open: !1,
                returnFocus: !0,
                loop: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                hideCloseButton: !1
            },
            C = "colorbox",
            D = "webmdHover",
            E = D + "_open",
            F = D + "_load",
            G = D + "_complete",
            H = D + "_cleanup",
            I = D + "_closed",
            J = D + "_purge",
            K = D + "_loaded",
            L = a.browser.msie && !a.support.opacity,
            M = L && a.browser.version < 7,
            N = D + "_IE6",
            O = !1,
            P = D + "Element";
        A = a.fn[C] = a[C] = function(b, c) {
            var d, e = this;
            return !e[0] && e.selector ? e : (b = b || {}, c && (b.onComplete = c), e[0] && void 0 !== e.selector || (e = a("<a/>"), b.open = !0), e.each(function() {
                a.data(this, C, a.extend({}, a.data(this, C) || B, b)), a(this).addClass(P)
            }), d = b.open, a.isFunction(d) && (d = d.call(e)), d && g(e[0]), e)
        }, A.init = function() {
            m = a(b), i = c().attr({
                id: C,
                "class": L ? D + "IE" : ""
            }), h = c("Overlay", M ? "position:absolute" : "").hide(), j = c("Wrapper"), k = c("Content").append(n = c("LoadedContent", "width:0; height:0; overflow:hidden"), p = c("LoadingOverlay"), q = c("Close")), j.append(k), o = c(!1, "position:absolute; width:9999px; visibility:hidden; display:none"), a("body").prepend(h, i.append(j, o)), k.children().hover(function() {
                a(this).addClass("hover")
            }, function() {
                a(this).removeClass("hover")
            }).addClass("hover"), r = k.outerHeight(!0) - k.height(), s = k.outerWidth(!0) - k.width(), t = n.outerHeight(!0), u = n.outerWidth(!0), i.css({
                "padding-bottom": r,
                "padding-right": s
            }).hide(), q.click(A.close), k.children().removeClass("hover"), a("." + P).live("click", function(a) {
                0 !== a.button && "undefined" != typeof a.button || a.ctrlKey || a.shiftKey || a.altKey || (a.preventDefault(), g(this))
            }), h.click(function() {
                x.overlayClose && A.close()
            }), a(document).bind("keydown", function(a) {
                y && x.escKey && 27 === a.keyCode && (a.preventDefault(), A.close())
            })
        }, A.remove = function() {
            i.add(h).remove(), a("." + P).die("click").removeData(C).removeClass(P)
        }, A.position = function(a, b) {
            function c(a) {
                k[0].style.width = a.style.width, p[0].style.height = k[0].style.height = a.style.height
            }
            var d, e = Math.max(document.documentElement.clientHeight - x.h - t - r, 0) / 2 + m.scrollTop(),
                f = Math.max(m.width() - x.w - u - s, 0) / 2 + m.scrollLeft();
            d = i.width() === x.w + u && i.height() === x.h + t ? 0 : a, j[0].style.width = j[0].style.height = "9999px", 0 == d ? (i[0].style.width = x.w + "px", i[0].style.height = x.h + "px", i[0].style.top = e + "px", i[0].style.left = f + "px", i[0].style.display = "block", z = !1, j[0].style.width = x.w + u + s + "px", j[0].style.height = x.h + t + r + "px", b && b()) : i.dequeue().animate({
                width: x.w + u,
                height: x.h + t,
                top: e,
                left: f
            }, {
                duration: d,
                complete: function() {
                    c(this), z = !1, j[0].style.width = x.w + u + s + "px", j[0].style.height = x.h + t + r + "px", b && b()
                },
                step: function() {
                    c(this)
                }
            })
        }, A.resize = function(a) {
            if (y) {
                if (a = a || {}, a.width && (x.w = d(a.width, "x") - u - s), a.innerWidth && (x.w = d(a.innerWidth, "x")), n.css({
                        width: x.w
                    }), a.height && (x.h = d(a.height, "y") - t - r), a.innerHeight && (x.h = d(a.innerHeight, "y")), !a.innerHeight && !a.height) {
                    var b = n.wrapInner("<div style='overflow:auto'></div>").children();
                    x.h = b.height(), b.replaceWith(b.children())
                }
                n.css({
                    height: x.h
                }), A.position("none" === x.transition ? 0 : x.speed)
            }
        }, A.prep = function(b) {
            function d() {
                return x.w = x.w || n.width(), x.w = x.mw && x.mw < x.w ? x.mw : x.w, x.w
            }

            function e() {
                return x.h = x.h || n.height(), x.h = x.mh && x.mh < x.h ? x.mh : x.h, x.h
            }

            function g(a) {
                l.length, x.loop;
                A.position(a, function() {
                    function a() {
                        L && i[0].style.removeAttribute("filter")
                    }
                    y && (L && h && n.fadeIn(100), n.show(), f(K), p.hide(), "fade" === x.transition ? i.fadeTo(j, 1, function() {
                        a()
                    }) : a(), m.bind("resize." + D, function() {
                        A.position(0)
                    }), f(G, x.onComplete))
                })
            }
            if (y) {
                var h, j = "none" === x.transition ? 0 : x.speed;
                m.unbind("resize." + D), n.remove(), n = c("LoadedContent").html(b), n.hide().appendTo(o.show()).css({
                    width: d(),
                    overflow: x.scrolling ? "auto" : "hidden"
                }).css({
                    height: e()
                }).prependTo(k), o.hide(), a("#" + D + "Photo").css({
                    cssFloat: "none",
                    marginLeft: "auto",
                    marginRight: "auto"
                }), M && a("select").not(i.find("select")).filter(function() {
                    return "hidden" !== this.style.visibility
                }).css({
                    visibility: "hidden"
                }).one(H, function() {
                    this.style.visibility = "inherit"
                }), "fade" === x.transition ? i.fadeTo(j, 0, function() {
                    g(0)
                }) : g(j)
            }
        }, A.load = function(b) {
            var g, h = A.prep;
            z = !0, v = l[w], b || (x = e(a.extend({}, a.data(v, C)))), f(J), f(F, x.onLoad), x.h = x.height ? d(x.height, "y") - t - r : x.innerHeight && d(x.innerHeight, "y"), x.w = x.width ? d(x.width, "x") - u - s : x.innerWidth && d(x.innerWidth, "x"), x.mw = x.w, x.mh = x.h, x.maxWidth && (x.mw = d(x.maxWidth, "x") - u - s, x.mw = x.w && x.w < x.mw ? x.w : x.mw), x.maxHeight && (x.mh = d(x.maxHeight, "y") - t - r, x.mh = x.h && x.h < x.mh ? x.h : x.mh), g = x.href, p.show(), x.inline ? (c().hide().insertBefore(a(g)[0]).one(J, function() {
                a(this).replaceWith(n.children())
            }), h(a(g))) : x.iframe ? (i.one(K, function() {
                var b = a("<iframe frameborder='0' style='width:100%; height:100%; border:0; display:block'/>")[0];
                b.name = +new Date, b.src = x.href, x.scrolling || (b.scrolling = "no"), L && (b.allowtransparency = "true"), a(b).appendTo(n).one(J, function() {
                    b.src = "//about:blank"
                })
            }), h(" ")) : x.html ? h(x.html) : g && o.load(g, function(b, c, d) {
                h("error" === c ? "Request unsuccessful: " + d.statusText : a(this).children())
            })
        }, A.close = function() {
            y && !O && (O = !0, y = !1, f(H, x.onCleanup), m.unbind("." + D + " ." + N), h.hide(), i.stop().hide(), f(J), n.remove(), i.add(h).css({
                opacity: 1,
                cursor: "auto"
            }).hide(), O = !1, f(I, x.onClosed))
        }, A.element = function() {
            return a(v)
        }, A.settings = B
    }(jQuery, this), webmd.overlay = function(a, b, c) {
        0 == $("#colorbox").length && $.fn.colorbox.init(), $(a).colorbox(b, c)
    }, webmd.overlay = $.extend(webmd.overlay, {
        open: function(a) {
            this.init(), $("#webmdHoverClose").css("visibility", a.hideCloseButton ? "hidden" : "visible"), $.fn.colorbox(a, a.callback)
        },
        close: function() {
            $.fn.colorbox.close()
        },
        resize: function(a) {
            $.fn.colorbox.resize(a)
        },
        init: function() {
            0 == $("#colorbox").length && $.fn.colorbox.init()
        },
        remove: function() {
            $.fn.colorbox.remove()
        },
        replace: function(a) {
            this.open(a, !1)
        },
        alert: function(a) {
            var b = {};
            "string" == typeof a ? b.text = a : b = $.extend(!0, b, a), b.cancel = "", this.confirm(b)
        },
        confirm: function(a) {
            var b = this,
                c = !1,
                d = {
                    text: "",
                    ok: "OK",
                    okSizeClass: "webmd-btn-xs",
                    cancel: "Cancel",
                    cancelSizeClass: "webmd-btn-xs",
                    width: "",
                    callback: function() {}
                };
            d = $.extend(!0, d, a), "string" == typeof a && (d.text = a), d.buttons = webmd.substitute('<button id="webmd_confirm_true_button" class="webmd-btn webmd-btn-sc {okSizeClass}">{ok}</button>', d), d.cancel && (d.buttons += webmd.substitute('<button id="webmd_confirm_false_button" class="webmd-btn webmd-btn-sc {cancelSizeClass}">{cancel}</button>', d));
            var e = webmd.substitute('<div id="webmd_confirm"><div class="webmd_confirm_content">{text}</div><div class="webmd_confirm_buttons">{buttons}</div></div>', d);
            this.open({
                html: e,
                innerWidth: d.width,
                onComplete: function() {
                    $("#webmd_confirm_true_button").click(function() {
                        return c = !0, b.close(), !1
                    }), $("#webmd_confirm_false_button").click(function() {
                        return c = !1, b.close(), !1
                    })
                },
                onClosed: function() {
                    d.callback(c)
                }
            })
        }
    }), /*! webmd.m.slideshow */
    webmd.m.slideshow = {
        auto: !1,
        autoDelay: 1,
        autoFunction: function(a) {
            a.trans("+1")
        },
        autoIncrement: 2e3,
        autoLoops: 0,
        circular: !1,
        container: "#slides",
        dBuild: function() {
            return this
        },
        dSlides: function() {
            return this
        },
        effect: "fade",
        effectParam: 500,
        fBefore: function(a) {
            return a
        },
        fAfter: function(a) {
            return a
        },
        height: 0,
        slideContainer: ".slide",
        startAt: 1,
        width: 0,
        init: function() {
            return this.dBuild()._cacheContainer()._calcWidthHeight().dSlides().firstSlide(), this.auto && this.autoStart(), this
        },
        autoStart: function() {
            var a = this;
            return this._autoTimeout = setTimeout(function() {
                a._autoInterval = setInterval(function() {
                    a.autoLoops && (a._autoLoopCount || (a._autoLoopCount = 1), a.autoLoops <= a._autoLoopCount && a.autoStop(), a._autoLoopCount++), a.autoFunction && a.autoFunction(a)
                }, a.autoIncrement)
            }, this.autoDelay), this
        },
        autoStop: function() {
            return this._autoInterval && (self._autoLoopCount = 0, clearInterval(this._autoInterval)), this
        },
        firstSlide: function() {
            return this.current = this.startAt || 1, this.restart || (this.restart = this.circular ? !0 : !1), this.trans(this.current), this
        },
        metricsAdRefresh: function() {
            try {
                webmd.ads.refresh()
            } catch (a) {}
            return this
        },
        metricsPV: function() {
            try {
                wmdPageview(window.location.href)
            } catch (a) {}
            return this
        },
        metricsXML: function() {
            try {
                var a = new Date,
                    b = String(a.getHours()),
                    c = String(a.getMinutes()),
                    d = String(a.getSeconds()),
                    e = b + c + d;
                $.get("/api/proxy/proxy.aspx?url=http://img.webmd.com/slideshow_fp/slideshow_fp.wxml?date=" + e)
            } catch (f) {}
            return this
        },
        trans: function(a) {
            this.transCommand = a;
            var b = this;
            return a = a ? a : "+1", b.n = "number" == typeof a ? a - 1 : "f" == a ? 0 : "l" == a ? b.slides.length - 1 : "p" == a ? b.current - 1 : b.current + Number(a), b.n = b.n < 0 && b.circular ? b.slides.length - 1 : b.n < 0 ? b.current : b.n >= 0 && b.n < b.slides.length ? b.n : b.current + 1, b.effectInProgress || (b.n == b.slides.length && (b.lastSlide && b.lastSlide(b), b.dir && (document.location = b.dir), b.restart && (b.circular = !0, b.n = 0)), b.n != b.current && b.n >= 0 && b.n < b.slides.length && (b.effectInProgress = !0, b.fBefore && b.fBefore(b), b.effect && b.effects[b.effect] ? b.effects[b.effect](b.n, b, b.effectParam) : b.effects.fade(b.n, b), b.current = b.n)), this
        },
        effectFade: function(a, b) {
            var c = this,
                d = c.current >= c.slides.length ? 0 : c.current || 0,
                b = b ? b : c.effectParam;
            if (c.effectBuilt || (c.$container.css({
                    height: c.height,
                    overflow: "hidden",
                    position: "relative",
                    width: c.width
                }), $(c.slides).css({
                    display: "none",
                    left: 0,
                    position: "absolute",
                    top: 0
                }), c.effectBuilt = !0), c.slides[d] && $(c.slides[d]).fadeOut(b), $(c.slides[a]).fadeIn(b, function() {
                    c._effectDone()
                }), this._dynamicHeight || this._dynamicWidth) {
                var e = {},
                    f = $(this.slides[a]);
                this._dynamicHeight && (e.height = f.height()), this._dynamicWidth && (e.width = f.width()), this.$container.animate(e)
            }
        },
        effectHslider: function(a, b) {
            var c = this,
                d = c.current >= c.slides.length ? 0 : c.current || 0,
                b = b ? b : c.effectParam,
                e = (d == length, c.transCommand ? c.transCommand.toString().indexOf("+") > -1 : !0);
            Math.abs(c.transCommand);
            c.effectBuilt ? ($(c.slides[a]).css({
                display: "block",
                left: e ? c.width : -1 * c.width
            }), $(c.slides[a]).animate({
                left: 0
            }, {
                duration: b
            }), $(c.slides[d]).animate({
                left: e ? -1 * c.width : c.width
            }, {
                duration: b,
                complete: function() {
                    c._effectDone()
                }
            })) : (c.$container.css({
                height: c.height,
                overflow: "hidden",
                position: "relative",
                width: c.width
            }), $(c.slides).css({
                display: "none",
                left: 0,
                position: "absolute",
                top: 0
            }), $(c.slides[a]).show(), c.effectBuilt = !0, c._effectDone())
        },
        _cacheContainer: function() {
            return this.$container = $(this.container), this.slides = this.$container.find(this.slideContainer), this
        },
        _calcWidthHeight: function() {
            var a = $(this.slides[0]);
            return this.height || (this.height = a.height()), this.width || (this.width = a.width()), "dynamic" == this.height && (this._dynamicHeight = !0, this.height = $(this.slides[this.startAt - 1]).height()), "dynamic" == this.width && (this._dynamicWidth = !0, this.width = $(this.slides[this.startAt - 1]).width()), this
        },
        _effectDone: function() {
            var a = this;
            return a.fAfter && a.fAfter(a), a.effectInProgress = !1, this
        },
        effects: {
            fade: function(a, b, c) {
                return b.effectFade(a, c)
            },
            hslider: function(a, b, c) {
                return b.effectHslider(a, c)
            }
        },
        metricsAds: !0,
        metricsAjax: !0,
        metricsSkipPV: !0,
        metricsWmdTrack: !0,
        metrics: function() {
            return this.metricsSkipPV ? this.metricsSkipPV = !1 : (this.metricsAds && this.metricsAdRefresh(), this.metricsAjax && this.metricsXML(), this.metricsWmdTrack && this.metricsPV()), this
        },
        delayAfter: 0,
        delayBefore: 0
    }, /*! webmd.useragent */
    webmd.useragent = {
        ua: {
            type: "desktop",
            device: "pc",
            browser: "",
            major_version: "",
            minor_version: ""
        },
        init: function() {
            var a = this,
                b = "";
            if (a.agent = a._getNavigatorUserAgent(), (b = /MSIE\s(\d+)\.(\d+);/.exec(a.agent)) ? (this.ua.browser = "browserIE", this.ua.major_version = b[1], this.ua.minor_version = b[2]) : (b = /Firefox[\/\s](\d+)\.(\d+)/.exec(a.agent)) ? (this.ua.browser = "browserFF", this.ua.major_version = b[1], this.ua.minor_version = b[2]) : (b = /Chrome\/(\d+)\.(\d+)/.exec(a.agent)) ? (this.ua.browser = "browserCH", this.ua.major_version = b[1], this.ua.minor_version = b[2]) : a.agent.indexOf("Safari") > -1 && -1 === a.agent.indexOf("Chrome") ? (b = /like Gecko\) \w*\/(\d+)\.(\d+)/.exec(a.agent), this.ua.browser = "browserSF", this.ua.major_version = b[1], this.ua.minor_version = b[2]) : (b = /AppleWebKit\/(\d+)\.(\d+)/.exec(a.agent)) && (this.ua.browser = "browserWK", this.ua.major_version = b[1], this.ua.minor_version = b[2]), -1 === a.agent.indexOf("AppleWebKit") || -1 === a.agent.indexOf("Mobile") && -1 === a.agent.indexOf("webOS") || (this.ua.type = "mobile"), -1 !== a.agent.indexOf("iPad") && (this.ua.type = "tablet", this.ua.device = "ipad"), -1 !== a.agent.indexOf("iPhone") && (this.ua.type = "mobile", this.ua.device = "iphone"), -1 !== a.agent.indexOf("Android") && (-1 !== a.agent.indexOf("SM-P600") || -1 !== a.agent.indexOf("SCH-I800") || -1 !== a.agent.indexOf("Xoom") ? this.ua.type = "tablet" : this.ua.type = "mobile", this.ua.deviceVer = parseInt(a.agent.match(/Android [0-9.]+/)[0].replace("Android ", "")), this.ua.device = "android"), -1 !== a.agent.indexOf("Blackberry") && (this.ua.type = "mobile", this.ua.device = "blackberry"), (-1 !== a.agent.indexOf("Silk") || -1 !== a.agent.indexOf("Kindle")) && (this.ua.type = "tablet", -1 === a.agent.indexOf("Android") && (this.ua.device = "kindle")), -1 !== a.agent.indexOf("webmdapp") && (this.ua.appview = "webmdapp"), $("html").addClass("ua_type_" + this.ua.type).addClass("ua_device_" + this.ua.device), this.ua.deviceVer && $("html").addClass("ua_deviceVer_" + this.ua.deviceVer), this.ua.appview && $("html").addClass("ua_app_" + this.ua.appview), this.ua.browser)
                if ($("html").addClass(this.ua.browser).addClass(this.ua.browser + "_" + this.ua.major_version).addClass(this.ua.browser + "_" + this.ua.major_version + "_" + this.ua.minor_version), "browserIE" === this.ua.browser && document.documentMode) {
                    var c = document.documentMode;
                    5 === c && (c = "quirks"), $("html").addClass("IEDocMode_" + c)
                } else "browserIE" === this.ua.browser && 7 === this.ua.major_version && $("html").addClass("IEDocMode_7");
            $("html").removeClass("no-js").addClass("js")
        },
        _getNavigatorUserAgent: function() {
            return navigator.userAgent
        },
        getDevice: function() {
            return this.ua.device
        },
        getDeviceVer: function() {
            return this.ua.deviceVer
        },
        getType: function() {
            return this.ua.type
        },
        getTouch: function() {
            return webmd.debug("webmd.useragent.getTouch is depracated, please use modernizr instead"), Modernizr.touch ? !0 : !1
        },
        setupResponsive: function() {
            var a = this; - 1 !== navigator.userAgent.indexOf("iPad") ? $("head").append('<meta name="viewport" content="width=device-width">') : "mobile" === webmd.useragent.getType() && $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">'), a._setResponsiveHTMLClasses(), a.oldWidth = a.whichWidth(), a._singleResizeEvent(function() {
                a._setResponsiveHTMLClasses(), a._triggerResponsiveEvents()
            })
        },
        _singleResizeEvent: function(a, b) {
            return $(window).resize(function() {
                clearTimeout(b), b = setTimeout(a, 250)
            }), a
        },
        _triggerResponsiveEvents: function() {
            var a = this;
            a.oldWidth !== a.whichWidth() && ($(window).trigger("responsiveResize", [a.whichWidth()]), a.oldWidth = a.whichWidth())
        },
        _setResponsiveHTMLClasses: function() {
            $("html").removeClass("small thin normal").addClass(webmd.useragent.whichWidth())
        },
        whichWidth: function() {
            return this.getWidth()
        },
        getWidth: function() {
            return window.matchMedia ? window.matchMedia("(max-width: 50em) and (max-device-width: 767px)").matches ? "small" : window.matchMedia("(max-width: 63em), (max-device-width: 1025px)").matches ? "thin" : "normal" : $(window).width() < 1e3 ? "thin" : "normal"
        },
        isThin: function() {
            var a = this;
            return "thin" === a.whichWidth()
        },
        removeResponsive: function() {
            $(window).unbind("resize.responsive"), $("html").removeClass("thin")
        }
    }, webmd.useragent.init(); /*! webmd.scrollFix */
var userAgent = webmd.useragent.getDevice();
("iphone" == userAgent.device || "ipad" == userAgent.device || "android" == userAgent.device) && $.getScript(window.image_server_url ? image_server_url + "/webmd/consumer_assets/site_images/javascript/scroll_fix.js" : "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/javascript/scroll_fix.js"), /*! webmd.m.share */
    webmd.m.share = {
        additionalClasses: "",
        buildModule: null,
        fbButton: !0,
        twButton: !0,
        shareDiv: "share_bar",
        shareMessage: "Share this:",
        pageLinkPre: "art-share",
        init: function() {
            (("" == s_sponsor_program || $(".ed_disclaimer, .edtrDisclaimer_fmt").text().indexOf("sponsor") <= 0) && 0 != this.buildModule || this.buildModule) && "true" != webmd.url.getParam("print") && ($('<link rel="stylesheet" type="text/css" href="' + image_server_url + '/webmd/consumer_assets/site_images/share/share.css"/>').appendTo("head"), this.buildShareBar())
        },
        buildShareBar: function() {
            $(document).ready(function() {
                $(".share_rdr").remove()
            }), this.shareBar = '<div class="share_top"></div><div class="share_content"><p>' + this.shareMessage + '</p></div><div class="share_bottom"></div>', $("." + this.shareDiv).html(this.shareBar).addClass(this.additionalClasses), this.buildShareButtons()
        },
        buildFb: function() {
            $(".share_content").append("<a onclick=\"return sl(this, 'nw', '" + this.pageLinkPre + '_face\');" href="/click?url=' + encodeURIComponent("http://www.facebook.com/share.php?t=" + document.title + "&u=" + window.location).replace(/\'/g, "%27") + '" class="fb_share"></a>')
        },
        buildTw: function() {
            $(".share_content").append("<a onclick=\"return sl(this, 'nw', '" + this.pageLinkPre + '_twit\');" href="/click?url=' + encodeURIComponent("http://twitter.com/share?text=" + document.title + "&url=" + window.location).replace(/\'/g, "%27") + '" class="tw_share"></a>')
        },
        buildShareButtons: function() {
            this.fbButton && this.buildFb(), this.twButton && this.buildTw()
        }
    }, /*! webmd.m.nls.overlay.controller */
    window.center_id && $(function() {
        require(["newsletter-hover/1/hover-newsletter-center-id"], function(a) {
            a.init()
        })
    }), /*! webmd.offsite */
    webmd.offsite = {
        showInterstitial: function(a) {
            var b = null,
                c = unescape(webmd.url.getParam("url", a)) || "http://www.webmd.com",
                d = "width=470,height=195,resizable=no,toolbar=no,left=350,top=300,location=0",
                e = -1 == a.indexOf("preview.webmd.com") ? "http://www.webmd.com/privacy-window-2010" : "http://www.preview.webmd.com/privacy-window-2010";
            return -1 != a.indexOf("/click?") && "http://www.webmd.com" != c ? ("specialreport" == webmd.url.getParam("custom", a) && (d = "width=325,height=175,resizable=no,toolbar=no,left=350,top=300", e = "http://www.webmd.com/interstitial-nl"), (document.location.href.match(/^(https?):\/\/fit\./) || document.location.href.match(/^(https|http?):\/\/(blogs|blogpub.qa01|blog.qa01?).webmd.com\/fit/)) && (e = "http://fit.webmd.com/interstitial", d = "width=325,height=250,resizable=no,toolbar=no,left=350,top=300"), b = window.open(e, "privacy_window", d), !0) : !1
        }
    }, /*! webmd.p.adscookie */
    webmd.adsCookie = {
        config: {
            perm: {
                name: "ads_perm",
                expire: 365
            },
            sess: {
                name: "ads_sess",
                expire: null
            }
        },
        baseDomain: location.hostname.replace(/.*(\.[^.]+\.[^.]+)$/, "$1"),
        get: function(a) {
            var b = webmd.cookie(this.config[a].name);
            return null === b ? {} : JSON.parse(b)
        },
        deleteCookie: function(a) {
            return webmd.cookie(this.config[a].name, "", {
                domain: this.baseDomain,
                expires: -1
            })
        },
        set: function(a) {
            var b = webmd.adsCookie.get(a.type);
            return b[a.prefix] || (b[a.prefix] = {}), b[a.prefix][a.value] = a.prefix + a.value + "x", a.count && (b[a.prefix][a.value] = b[a.prefix][a.value].split("x")[0] + "_" + a.count + "x"), "sess" == a.type ? webmd.cookie(this.config[a.type].name, JSON.stringify(b), {
                domain: this.baseDomain
            }) : webmd.cookie(this.config[a.type].name, JSON.stringify(b), {
                domain: this.baseDomain,
                expires: this.config[a.type].expire
            })
        },
        remove: function(a) {
            var b = webmd.adsCookie.get(a.type);
            if (a.prefix && b[a.prefix]) {
                if (a.value) {
                    if (!b[a.prefix][a.value]) return;
                    delete b[a.prefix][a.value]
                } else delete b[a.prefix];
                return webmd.cookie(this.config[a.type].name, JSON.stringify(b), {
                    domain: this.baseDomain,
                    expires: this.config[a.type].expire
                })
            }
        }
    }, /*! webmd.visit */
    webmd.visit = {
        lengthOfSessionInMinutes: 30,
        cookieName: "ui",
        _inCurrentNewVisit: null,
        _lastView: null,
        _lastViewWaitMilliseconds: 1e3,
        _minutesFromEpoch: function() {
            return Math.floor(+new Date / 6e4)
        },
        isNewVisit: function(a) {
            var b = this,
                c = webmd.cookie.getJson(this.cookieName);
            return "boolean" != typeof b._inCurrentNewVisit || a ? c.vtime && !isNaN(c.vtime) && b._minutesFromEpoch() - c.vtime <= b.lengthOfSessionInMinutes ? !1 : !0 : b._inCurrentNewVisit
        },
        visitView: function() {
            var a = this,
                b = webmd.cookie.getJson(this.cookieName);
            return a._lastView && +new Date - a._lastView <= a._lastViewWaitMilliseconds ? !1 : (a._inCurrentNewVisit = a.isNewVisit(!0), a._lastView = +new Date, webmd.debug("webmd.visit: " + a._inCurrentNewVisit), b.vtime = a._minutesFromEpoch(), void webmd.cookie.setJson(a.cookieName, b, {
                domain: webmd.url.getSLD()
            }))
        },
        init: function() {
            var a = this;
            a._inCurrentNewVisit = a.isNewVisit(), $(document).on("before_pv before_adrefresh", function() {
                a.visitView()
            })
        }
    }, webmd.visit.init(), /*! wembd.m.firstImpression */
    webmd.m.firstImpression = {
        siteImpression: 0,
        siteImpressionTarget: "fis",
        topicImpression: "",
        visitedTopics: [],
        topicImpressionTarget: "fipt",
        followingImpressionTarget: "fif",
        init: function() {
            var a = this;
            top.location === location && -1 !== location.hostname.indexOf("webmd.com") && (a.checkNewVisit().setTopicImpression().setPageTargets().addLotameMeta(), $(document).on("before_adrefresh", function() {
                webmd.m.firstImpression.checkNewVisit().setTopicImpression().setPageTargets()
            }))
        },
        checkNewVisit: function() {
            var a = this,
                b = window.localStorage;
            return webmd.visit.isNewVisit() ? (a.siteImpression = 1, a.followingImpression = null, webmd.adsCookie.remove({
                type: "sess",
                prefix: "fi"
            }), a.visitedTopics = [], b && b.removeItem(a.topicImpressionTarget)) : (a.siteImpression = 0, webmd.adsCookie.get("sess") && webmd.adsCookie.get("sess").fi && (a.followingImpression = Object.keys(webmd.adsCookie.get("sess").fi).toString())), a
        },
        setTopicImpression: function() {
            var a = this,
                b = window.localStorage,
                c = window.s_topic;
            if (a.topicImpression = 0, b && c && (a.visitedTopics = b.getItem(a.topicImpressionTarget) ? JSON.parse(b.getItem(a.topicImpressionTarget)) : [], -1 === $.inArray(c, a.visitedTopics))) {
                a.topicImpression = c, a.visitedTopics.push(c);
                try {
                    b.setItem(a.topicImpressionTarget, JSON.stringify(a.visitedTopics))
                } catch (d) {}
            }
            return a
        },
        setPageTargets: function() {
            var a = this;
            return webmd.debug("site impression: " + a.siteImpression), webmd.debug("topic impression: " + a.topicImpression), webmd.debug("following impression: " + a.followingImpression), webmd.ads2.setPageTarget(a.siteImpressionTarget, a.siteImpression), webmd.ads2.setPageTarget(a.topicImpressionTarget, a.topicImpression), a.followingImpression && webmd.ads2.setPageTarget(a.followingImpressionTarget, a.followingImpression), a
        },
        addLotameMeta: function() {
            var a = this;
            1 === a.siteImpression && $("<meta/>").attr({
                name: "s_1stimp",
                content: a.topicImpression
            }).appendTo("head")
        }
    }, webmd.m.firstImpression.init(), webmd.ads.setWallpaper = function(a) {
        "tablet" !== webmd.useragent.ua.type && "mobile" !== webmd.useragent.ua.type && ($("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: image_server_url + "/webmd/PageBuilder_Assets/CSS_static/sponsored_programs/wallpaper.css"
        }).appendTo("head"), $("body").addClass("wp" + a))
    }, /*! webmd.p.pim */
    webmd.p.pim = {
        maxSession: 2,
        cookieCount: {
            type: "sess",
            prefix: "pim",
            value: "c",
            count: 0
        },
        cookieMax: {
            type: "sess",
            prefix: "pim",
            value: "m"
        },
        cookieExpire: {
            type: "sess",
            prefix: "pim",
            value: "t"
        },
        expireMS: 864e5,
        metricsModule: "pim",
        _occurredOnPage: !1,
        _baseDomain: location.hostname.replace(/.*(\.[^.]+\.[^.]+)$/, "$1"),
        runIfAllowed: function(a, b) {
            return this.isAllowed() ? (this.increment(), a && a()) : b && b(), this
        },
        isAllowed: function() {
            return this.checkExpiration(), this._occurredOnPage ? !1 : Boolean(this.getCount() < this.maxSession)
        },
        increment: function() {
            var a = this,
                b = 0;
            return a._occurredOnPage = !0, b = a.getCount() + 1, a.cookieCount.count = b, webmd.adsCookie.set(a.cookieCount), b >= a.maxSession && webmd.adsCookie.set(a.cookieMax), a.cookieExpire.count = (new Date).getTime(), webmd.adsCookie.set(a.cookieExpire), a.setAds2PageTarget(), a.doMetrics(), a
        },
        getCount: function() {
            var a, b;
            return a = webmd.adsCookie.get(this.cookieCount.type), a[this.cookieCount.prefix] && a[this.cookieCount.prefix][this.cookieCount.value] ? (b = a[this.cookieCount.prefix][this.cookieCount.value].replace(/.*_(\d+)x$/, "$1"), parseInt(b, 10) || 0) : 0
        },
        checkExpiration: function() {
            var a, b, c = (new Date).getTime();
            a = webmd.adsCookie.get(this.cookieExpire.type), a[this.cookieExpire.prefix] && a[this.cookieExpire.prefix][this.cookieExpire.value] && (b = a[this.cookieExpire.prefix][this.cookieExpire.value].replace(/.*_(\d+)x$/, "$1"), b = parseInt(b, 10) || 0), b && b + this.expireMS < c && webmd.adsCookie.remove({
                type: this.cookieExpire.type,
                prefix: this.cookieExpire.prefix
            })
        },
        doMetrics: function() {
            var a, b;
            a = this.getCount(), b = this.metricsModule, window.wmdPageLink && b && a && wmdPageLink(b + "_" + a)
        },
        setAds2PageTarget: function() {
            webmd.ads2 && webmd.ads2.isInitialized() && webmd.ads2.setPageTarget("pimx", "1")
        }
    }, webmd.p.pim.isAllowed() || webmd.p.pim.setAds2PageTarget(); /*! webmd.metrics */
var s_pageview_id, s_module_impressions = []; /*! webmd.m.typeahead */
if (webmd.metrics = {
        createPageviewId: function() {
            var a, b;
            a = Math.floor((new Date).getTime() / 1e3).toString().substr(0, 10), b = Math.random().toFixed(8).substr(2, 8), window.s_pageview_id = a + b, webmd.ads2 && webmd.ads2.setPageTarget("pvid", window.s_pageview_id)
        },
        dpv: function(a) {
            var b = this,
                c = {
                    pageName: window.s_pagename || window.location.href,
                    moduleName: "",
                    iCount: "",
                    refresh: !0
                };
            b.createPageviewId(), c = $.extend(c, a), "" !== c.moduleName && wmdTrack(c.moduleName), wmdPageview(c.pageName, c.iCount), c.refresh && webmd.ads.refresh(c.refresh)
        },
        linktext: function(a) {
            window.s_linktext = "", "string" != typeof a && (window.s_linktext = $(a).text().replace(/[^\w\s]/g, "").replace(/\s+/g, " ") || $(a).find("img").attr("alt"))
        },
        bindDataMetricsModule: function() {
            var a = this;
            return $("html").on("click", "a, button", function() {
                var b, c, d;
                if (c = a._getMetricsValue(this))
                    if (b = $(this).data("metrics-type") || "track", "track" === b) {
                        if (wmdTrack(c), d = $(this).attr("href"), d && d.indexOf("/click?url=") > -1) return window.open(d, "", "width=1000,height=600,left=25,top=25,scrollbars=1,toolbar=1,resizable=1,status=1,menubar=1"), webmd.offsite.showInterstitial(d), !1
                    } else wmdPageLink(c)
            }), this
        },
        _getMetricsValue: function(a) {
            var b, c, d, e, f, g, h, i, j = "0",
                k = "_",
                l = "-",
                m = "",
                n = !1;
            return c = $(a).closest("*[data-metrics-module]"), c.length ? (h = $(a).closest("*[data-metrics-section]"), h.length > 0 && $.contains(c[0], h[0]) === !0 && (m = h.data("metrics-section") || ""), n = h.length > 0 && "" !== m, d = c.data("metrics-module"), e = $(a).closest("*[data-metrics-link]"), e.length ? j = e.data("metrics-link") : (i = n === !0 ? h : c, f = i.data("metrics-sel") || "", f && (g = i.find(f), j = g.index($(a).parents(f)) + 1)), n === !0 ? ("" === j && (l = ""), b = d + k + m + l + j) : (("" === d || "" === j) && (k = ""), b = d + k + j), b) : !1
        },
        showMetricsInfo: function() {
            var a = this,
                b = webmd.url.getParam("webmdmetrics"),
                c = window.sessionStorage;
            return b && ("0" === b ? c.removeItem("webmdmetrics") : c.webmdmetrics = 1), c.webmdmetrics && (require(["tooltips/1/tooltips"], function() {
                $("a, button").each(function() {
                    var b = a._getMetricsValue(this);
                    b && ($(this).attr({
                        title: b
                    }), $(this).webmdTooltip({
                        content: {
                            text: b
                        }
                    }))
                })
            }), $("*[data-metrics-module]").each(function() {
                var a = $(this).data("metrics-module"),
                    b = $(this).position();
                $("<div/>").css({
                    position: "absolute",
                    top: b.top,
                    left: b.left,
                    border: "1px solid #f00",
                    background: "#fff",
                    padding: "5px",
                    "z-index": "999",
                    "box-shadow": "8px 8px 20px 0px #333"
                }).html(a).appendTo("body")
            })), this
        }
    }, webmd.metrics.ctr = {
        moduleSelector: ".moduleImpression",
        cookieName: "mimp",
        cookieOptions: {
            domain: location.hostname.replace(/.*(\.[^.]+\.[^.]+)$/, "$1")
        },
        findModules: function() {
            var a = this;
            $(this.moduleSelector).each(function() {
                this.id && a.addImpression(this.id)
            })
        },
        addImpression: function(a) {
            var b;
            b = this.getCookie(), b && (b += ","), b += a, this.setCookie(b)
        },
        getImpressions: function() {
            var a = this;
            $.each(a.getCookie().split(","), function(a, b) {
                b && s_module_impressions.push(b)
            }), a.setCookie("")
        },
        getCookie: function() {
            return webmd.cookie.get(this.cookieName)
        },
        setCookie: function(a) {
            a ? webmd.cookie.set(this.cookieName, a, this.cookieOptions) : webmd.cookie.deleteCookie(this.cookieName, this.cookieOptions)
        }
    }, webmd.metrics.icm = {
        adjustModuleName: function(a, b) {
            var c, d, e = this,
                f = window.s_sponsor_program || "",
                g = window.s_business_reference || "",
                h = window.s_furl || "",
                i = window.s_package_type || "";
            return "string" == typeof a ? b : ($(a).closest(".icm,.icm_wrapper,.sponsorBox_right_rdr,.sponsorbox_rdr").length && (b = b.replace(/sb-.{2}-(.+)-(.+)-([0-9]+)/, "sb-$1-$2-$3"), b = "right" === e.getColumnPosition(a) ? b.replace(/sb-(.+)/, "sb-rr-$1") : b.replace(/sb-(.+)/, "sb-cw-$1"), "" === f && -1 !== g.indexOf("Medical Reference") && (b = b.replace(/sb-.{2}-(.+)/, "sb-mr-$1")), -1 !== h.indexOf("/guide/") && (b = b.replace(/sb-.{2}-(.+)/, "sb-gc-$1")), -1 !== h.indexOf("/tc/") && (b = b.replace(/sb-.{2}-(.+)/, "sb-tc-$1")), (-1 !== h.indexOf("/news/") || -1 !== h.indexOf("/features/") || -1 !== h.indexOf("/news-features")) && (b = b.replace(/sb-.{2}-(.+)/, "sb-nf-$1"))), null === /sb-.{2}-.{4}-[a-z]*-.*/.exec(b) && (c = i.toLowerCase(), d = "none", 0 === c.indexOf("topic center") && (d = "tc"), 0 === c.indexOf("slide show") && (d = "ss"), 0 === c.indexOf("sas") && (d = "sas"), 0 === c.indexOf("sas in motion") && (d = "sasm"), 0 === c.indexOf("quiz") && (d = "qq"), 0 === c.indexOf("poll") && (d = "poll"), 0 === c.indexOf("healthzone") && (d = "hz"), 0 === c.indexOf("healthzone in motion") && (d = "hzim"), 0 === c.indexOf("editorial special") && (d = "edsp"), 0 === c.indexOf("community - neighborhood") && (d = "cone"), 0 === c.indexOf("calculator") && (d = "calc"), 0 === c.indexOf("ask-a-specialist tv") && (d = "atsp"), 0 === c.indexOf("custom targeted program") && (d = "tts"), b = b.replace(/(sb-.{2}-.{4})-(.+)/, "$1-" + d + "-$2")), b)
        },
        getColumnPosition: function(a) {
            return $(a).parents("#thirdCol_ctr").length ? "right" : "center"
        }
    }, webmd.metrics.bindDataMetricsModule().createPageviewId(), $(window).load(function() {
        webmd.metrics.showMetricsInfo()
    }), /*! webmd.m.regCheck */
    webmd.isDown = function(a) {
        return webmd.cookie.exists("ignoremaint") ? !1 : webmd.object.get(a, webmd.status) === !1
    }, !window.webmd) var webmd = {};
window.webmd.m || (webmd.m = {}), webmd.m.search || (webmd.m.search = {}),
    function() {
        webmd.m.search.typeahead = {
            cache: {},
            emptyResponse: {
                types: []
            },
            template: '<li class="typeahead_li_fmt pos{pos}" data-pos="{pos}">{text}</li>',
            init: function() {
                var a = this;
                this.input = $("#searchQuery_fmt"), this.output = $("#searchTypeahead_fmt"), this.form = $("#WebMDSearchResults"), this.ajaxData = {
                    s: 2,
                    sz: 6
                }, this.ajaxUrl = this.url(), this.input.length > 0 && this.output.length > 0 ? (this.input.hasClass("disabletypeahead") ? webmd.debug("typeahead disabled: remove disabletypeahead class from input box to enable") : (this.input.keydown(function(b) {
                    a.keydown(b)
                }).keyup(function(b) {
                    a.keyup(b, this)
                }).focus(function() {
                    $(a.output).find("li").length > 0 && a.output.fadeIn(150)
                }).blur(function() {
                    setTimeout(function() {
                        a.output.fadeOut(100), a.waitingOnAjax = null
                    }, 300)
                }), this.output.delegate("li", "click", function() {
                    webmd.debug("link clicked-value:" + $(this).text()), a.input.val($(this).text()), webmd.debug("start search:" + $(this).text()), a.submit()
                }).delegate("li", "mouseover", function() {
                    a.output.find(".selected").removeClass("selected"), $(this).hasClass("selected") || $(this).addClass("selected"), a.selected = $(this).index() + 1
                }).delegate("li", "mouseout", function() {
                    $(this).removeClass("selected")
                })), this.initialized = !0) : webmd.debug("typeahead disabled: required input/output elements are missing or this page is not secured")
            },
            url: function() {
                var a = "";
                return document.location.hostname.indexOf(".perf.webmd") > -1 ? a = "perf." : document.location.hostname.indexOf(".devintlive.webmd") > -1 && (a = "devintlive."), "//www." + a + "webmd.com/api/qrl/LookupService.ashx"
            },
            fetch: function(a) {
                var b, c;
                this.ajaxData.q = a;
                for (var d = a.length - 1; d > 0; d--)
                    if (b = a.substring(0, d), b in this.cache && 0 === this.cache[b].types.length) {
                        c = this.emptyResponse;
                        break
                    }
                return a in this.cache && (c = this.cache[a]), c ? webmd.m.search.typeahead.callback(c) : $.ajax({
                    type: "GET",
                    cache: !0,
                    url: this.ajaxUrl,
                    dataType: "jsonp",
                    data: this.ajaxData,
                    jsonp: "jsonp",
                    jsonpCallback: "webmd.m.search.typeahead.callback"
                })
            },
            keydown: function(b) {
                a.downKey(b) && this._moveSelection(1), a.upKey(b) && this._moveSelection(-1)
            },
            keyup: function(b, c) {
                if (a.escKey(b)) this.output.fadeOut(100), this.waitingOnAjax = null;
                else if (a.upKey(b) || a.downKey(b)) this.select(this.selected);
                else if (this._inputTextNumChanged(c)) {
                    var d = $(c).val();
                    this.prevInput = d.replace(/[^a-z0-9]/gi, ""), this.curSearch = d, d.length > 2 ? this.search(this.curSearch) : this._removeResults()
                }
            },
            search: function(a) {
                this.waitingOnAjax = a, this.resultsNum = 0, 0 == this.isThrottling ? (webmd.debug("no throttling,search for:" + a), this.fetch(a), this.isThrottling = !0) : (webmd.debug("throttling...adding to queue:" + a), this._addtoQueue(a))
            },
            callback: function(a) {
                this.cache[this.ajaxData.q] = a, null != this.waitingOnAjax ? a.types && a.types[0] && a.types[0].references ? (this.addResults(a.types[0].references), this.resultsNum = a.types[0].references.length) : a.types.length < 1 && (webmd.debug("empty results"), this._removeResults()) : webmd.debug("prevented expired jsonp call")
            },
            addResults: function(a) {
                this.selected = 0;
                var b, c = this,
                    d = "";
                b = this.curSearch.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/[^a-z0-9]/), b = new RegExp(b.join("|"), "gi"), $.each(a, function(a, e) {
                    var f = {
                        pos: a + 1,
                        text: e.text.replace(b, function(a, b) {
                            return "<span>" + a + "</span>"
                        })
                    };
                    d += webmd.substitute(c.template, f)
                }), this.output.html(d).fadeIn(100)
            },
            select: function(a) {
                this.output.find(".selected").removeClass("selected"), this.output.find(".typeahead_li_fmt.pos" + a).addClass("selected"), this.output.find(".selected").length > 0 ? this.input.val(this.output.find(".selected").text()) : this.input.val(this.curSearch)
            },
            submit: function() {
                webmd.search.submit(this.input.val(), "la" + this.selected)
            },
            _removeResults: function() {
                this.output.fadeOut(100), this.resultsNum = 0, setTimeout(function() {
                    webmd.m.search.typeahead.output.html("")
                }, 100), this.waitingOnAjax = null
            },
            _moveSelection: function(a) {
                this.resultsNum > 0 && (this.selected + a <= this.resultsNum && this.selected + a >= 0 ? this.selected = this.selected + a : this.selected + a < 0 ? this.selected = this.resultsNum : this.selected = 0, this.select(this.selected))
            },
            _inputTextNumChanged: function(a) {
                return this.prevInput != $(a).val().replace(/[^a-z0-9]/gi, "")
            },
            _addtoQueue: function(a) {
                this.queue.length < 1 && setTimeout(function() {
                    webmd.m.search.typeahead._fireQueue()
                }, 1e3), this.queue.push(a)
            },
            _fireQueue: function() {
                webmd.debug("fired queue:" + this.queue[this.queue.length - 1]), this.fetch(this.queue[this.queue.length - 1]), this.isThrottling = !1, this.queue = []
            },
            resultsNum: 0,
            initialized: !1,
            active: !1,
            selected: 0,
            prevInput: "",
            curSearch: "",
            waitingOnAjax: null,
            isThrottling: !1,
            queue: []
        }, $(function() {
            webmd.m.search.typeahead.init()
        });
        var a = {
            upKey: function(a) {
                return 38 == a.which ? !0 : !1
            },
            downKey: function(a) {
                return 40 == a.which ? !0 : !1
            },
            leftKey: function(a) {
                return 37 == a.which ? !0 : !1
            },
            rightKey: function(a) {
                return 39 == a.which ? !0 : !1
            },
            enterKey: function(a) {
                return 13 == a.which ? !0 : !1
            },
            escKey: function(a) {
                return 27 == a.which ? !0 : !1
            }
        }
    }(), /*! webmd.tablet.core */
    webmd.useragent.getTouch() && webmd.load({
        js: [image_server_url + "/webmd/PageBuilder_Assets/JS_static/tablet/modules/webmd.m.nav.tablet.js", image_server_url + "/webmd/PageBuilder_Assets/JS_static/tablet/webmd.mobile.swipe.min.js", image_server_url + "/webmd/PageBuilder_Assets/JS_static/tablet/modules/webmd.mobile.m.swipeshow.min.js"]
    }),
    function() {
        if (document.referrer) {
            var a, b = document.referrer;
            if (-1 != b.indexOf("google.com") ? a = "q" : -1 != b.indexOf("search.yahoo.com") ? a = "p" : -1 != b.indexOf("bing.com") && (a = "q"), a) {
                var c = webmd.url.getParam(a, b);
                c && (c = c.replace(/\+/g, " "), $("<meta/>").attr({
                    name: "external-search-query",
                    content: c
                }).appendTo("head"))
            }
        }
    }(), /*! webmd.lotame */
    webmd.lotame = {
        metrics: !0,
        bcpCallTiming: "",
        audCallTiming: "",
        dmpMaxLength: 540,
        truncatedDMPAudiences: [],
        init: function() {
            var a = this;
            return window.top !== window.self ? (webmd.debug("Lotame beacons not fired in iframe."), !1) : webmd.beaconDisable ? (webmd.debug("Lotame beacons not fired due to beaconDisable."), !1) : "https:" === window.location.protocol ? (webmd.debug("Lotame beacons not fired for https pages"), !1) : webmd.useragent.ua.appview ? (webmd.debug("Lotame beacons not fired within webmd mobile apps."), !1) : window.location.hostname.toLowerCase().indexOf("fit.webmd.com") > -1 ? (webmd.debug("Lotame beacons not fired within fit site"), !1) : (a.baseDomain = a._determineBaseDomain(), a.defer = new jQuery.Deferred, a.startTime = new Date, a.DMPProcessCallTimeout = setTimeout(function() {
                $(function() {
                    webmd.debug("Lotame timed out, firing lotame_to custom metrics call"), a._customAdHocModuleCall("lotame_to"), a._processCookieIntoAds2PageTargets()
                }), a.defer.resolve()
            }, 1e3), a._createAndProcessBCPImgTag(), a.defer.promise())
        },
        _weAreOnWebMD: function() {
            return webmd.url.getHostname().indexOf("webmd.com") > -1 ? !0 : !1
        },
        _determineBaseDomain: function() {
            return "browserSF" === webmd.useragent.ua.browser ? "cc.webmd.com" : "crwdcntrl.net"
        },
        _customAdHocModuleCall: function(a) {
            var b, c, d = this;
            if (d.metrics) {
                if (!a) return !1;
                if (c = window.s_channel_health || "", "Skin Problems and Treatments" != c) return !1;
                b = "http://std.o.webmd.com", "https:" === location.protocol && (b = "https://ssl.o.webmd.com"), b += "/b/ss/webmdp1thekidneyvista/1/H.23.8/s" + Math.floor(1e13 * Math.random()) + "?AQB=1&ndh=1&t=17%2F5%2F2013%2015%3A20%3A27%201%20240&ce=UTF-8&ns=webmd&cdp=3&pageName=webmd.com%2F&g=http%3A%2F%2Fwww.webmd.com%2F&cc=USD&events=event8&products=%3B" + a + "%3B%3B%3Bevent8%3D1%2C&c3=core&c20=webmd.com%2F_" + a + "&v46=99999&c47=7ffy56wieumuojbql92w2ehnvev1imbcvnzw6ljbsq8%3D&c48=mbl-no&pe=lnk_o&s=2560x1600&c=24&j=1.6&v=Y&k=Y&bw=1619&bh=1159&pe=lnk_o&pev2=" + a + "&AQE=1", $("<img />").attr({
                    src: b,
                    width: "1",
                    height: "1"
                }).appendTo("body")
            }
        },
        _processSVars: function() {
            var a, b = this,
                c = window.s_pageview_id || "",
                d = window.s_topic || "",
                e = window.s_business_reference || "",
                f = window.s_sponsor_brand || "",
                g = window.s_sponsor_program || "",
                h = window.s_package_type || "",
                i = window.s_package_name || "",
                j = window.s_channel_super_portal || "",
                k = window.s_channel_health || "",
                l = window.s_channel_topic_miniguide_guide || "",
                m = window.s_channel_micro || "",
                n = window.s_channel_mini || "",
                o = window.s_searchterm || "",
                p = window.s_mrt || "",
                q = window.s_channel || "",
                r = window.s_asset_class || "",
                s = window.s_channel_health || "";
            return a = "/rand=" + c, b._weAreOnWebMD() ? (a += "/int=s_topic : " + d, a += "/int=s_business_reference : " + e, a += "/int=s_sponsor_brand : " + f, a += "/int=s_sponsor_program : " + d + " - " + g, a += "/int=s_package_type : " + h, a += "/int=s_package_name : " + i, a += "/int=s_channel_super_portal : " + j, a += "/int=s_channel_health : " + k, a += "/int=s_channel_topic_miniguide_guide : " + l, a += "/int=s_channel_mini : " + n, a += "/int=s_channel_micro : " + m, a += "/int=s_searchterm : " + o, a += "/int=s_mrt : " + p + " : " + d) : (a += "/int=s_topic : " + q, a += "/int=s_business_reference : " + r, a += "/int=s_channel_health : " + s), a
        },
        _createAndProcessBCPImgTag: function() {
            var a, b = this,
                c = "//bcp." + b.baseDomain + "/5/c=932";
            a = webmd.cookie.get("s_vi") || webmd.cookie.get("VisitorId"), a = a.indexOf("|") > -1 ? a.slice(a.indexOf("|") + 1, -4) : a, c += "/tp=WBMD/tpid=" + a, c += b._processSVars(), $("<img />").on("load", function() {
                b._doAudienceAPICall()
            }).attr({
                src: c,
                width: "1",
                height: "1"
            }).appendTo("body")
        },
        _doAudienceAPICall: function() {
            var a = this;
            a.bcpCallTiming = a._recordTimeSinceStart(), $.getJSON("//ad." + a.baseDomain + "/5/c=932/pe=y/callback=?", function(b) {
                for (var c = b.Profile.Audiences.Audience, d = [], e = 0; e < c.length; e++) {
                    var f = c[e].abbr;
                    d.push(f)
                }
                a._processAudsIntoAds2PageTargets(b), a._weAreOnWebMD() ? a._processAudsIntoCookie(b) : a._processAudsIntoAdParams(b)
            })
        },
        _processAudsIntoAdParams: function(a) {
            var b = this,
                c = "";
            $.each(a.Profile.Audiences.Audience, function(b, d) {
                c += "_l" + a.Profile.Audiences.Audience[b].abbr
            }), $.extend(webmd.ads.refresh.defaults.params, {
                dmp: c
            }), b._clearTimeoutAndResolve()
        },
        _processAudsIntoCookie: function(a) {
            var b = this,
                c = "segvar",
                d = webmd.cookie.getJson("ads_perm", {
                    domain: "webmd.com"
                });
            $.each(a.Profile.Audiences.Audience, function(b, d) {
                c += "l_" + a.Profile.Audiences.Audience[b].abbr + "x"
            }), $.extend(d, {
                segvar: c
            }), webmd.cookie.setJson("ads_perm", d, {
                domain: "webmd.com",
                expires: 365
            }), b._clearTimeoutAndResolve()
        },
        _processAudsIntoAds2PageTargets: function(a) {
            var b = this,
                c = [];
            $.each(a.Profile.Audiences.Audience, function(a, b) {
                c.push(b.abbr)
            }), webmd.debug("----------------"), webmd.debug("INITIAL ARRAY"), webmd.debug(c), b.truncatedDMPAudiences = b._truncate(c), webmd.debug("----------------"), webmd.debug("TRUNCATED ARRAY"), webmd.debug(b.truncatedDMPAudiences), webmd.ads2.setPageTarget("dmp", b.truncatedDMPAudiences)
        },
        _truncate: function(a) {
            var b = this,
                c = [],
                d = [],
                e = !1;
            $.each(a, function(a, b) {
                return "all" !== b.toString().toLowerCase() ? void c.push(b.toString().toUpperCase()) : void(e = !0)
            });
            var f = {};
            $.each(c, function(a, c) {
                var d = c,
                    e = d.charAt(0),
                    g = "";
                for (b._isLetter(e) && (g = e, d = d.slice(1));
                    "0" === d.charAt(0);) d = d.substr(1);
                d = parseInt(d), "" !== g ? (f.hasOwnProperty(g) || (f[g] = []), f[g].push(d)) : (f.hasOwnProperty("loose") || (f.loose = []), f.loose.push(d))
            });
            var g = [],
                h = f;
            $.each(h, function(a, b) {
                g.push(a);
                var c = b;
                c.sort(function(a, b) {
                    return a - b
                }), f[a] = c
            }), g.sort();
            var i = [];
            return $.each(g, function(a, b) {
                var c = b,
                    d = f[c];
                $.each(d, function(a, b) {
                    i.push(b)
                })
            }), $.each(i, function(a, b) {
                -1 === $.inArray(b, d) && d.push(b)
            }), e && d.unshift("all"), d = b._trimArrayToLimitedLength(d, b.dmpMaxLength)
        },
        _trimArrayToLimitedLength: function(a, b) {
            var c = this._getURLEncodedLength(a);
            return b >= c ? a : (a.pop(), this._trimArrayToLimitedLength(a, b))
        },
        _getURLEncodedLength: function(a) {
            var b = a.join("");
            return b.length + 6 + 5 * (a.length - 1)
        },
        _isLetter: function(a) {
            return 1 === a.length && a.match(/[a-z]/i)
        },
        _processCookieIntoAds2PageTargets: function() {
            var a = this,
                b = [];
            if (cookieValue = webmd.cookie.getJson("ads_perm", {
                    domain: "webmd.com"
                }).segvar, cookieValue) {
                var c = cookieValue.split(/(x)?l_/);
                $.each(c, function(a, c) {
                    c && "undefined" != typeof c && "segvar" !== c && "x" !== c && (webmd.debug("pushing lotame values from the cookie +"), b.push(c))
                })
            }
            var d = b[b.length - 1];
            if (d && "all" !== d) {
                var e = d.substring(0, d.length - 1);
                b[b.length - 1] = e
            }
            if (b.length) {
                var f = a._truncate(b);
                webmd.ads2.setPageTarget("dmp", f), webmd.debug("GETTING DMP VALUES FROM COOKIE " + f)
            } else webmd.debug("GETTING DMP VALUES FROM COOKIE BUT THERES NOTHING THERE !!!!!! ")
        },
        _clearTimeoutAndResolve: function() {
            var a = this;
            a.audCallTiming = a._recordTimeSinceStart(), a._customAdHocModuleCall("lotame_end-" + a.bcpCallTiming + "-" + a.audCallTiming), clearTimeout(a.DMPProcessCallTimeout), a.defer.resolve()
        },
        _recordTimeSinceStart: function() {
            var a, b = this,
                c = new Date;
            return a = Math.round((c - b.startTime) / 100), a > 20 ? "over" + a.toString() : a.toString()
        }
    }, webmd.lotame.promise = webmd.lotame.init(), /*! webmd.experian */
    $(function() {
        if (top !== self) return webmd.debug("Exp beacons not fired in iframe."), !1;
        if ("http:" !== location.protocol) return webmd.debug("Exp beacons not fired in https."), !1;
        if (webmd.beaconDisable) return webmd.debug("Exp beacons not fired due to beaconDisable."), !1;
        if (window.location.hostname.indexOf("fit.") > -1) return webmd.debug("Exp beacons not fired on Fit"), !1;
        if (webmd.useragent.ua.appview) return webmd.debug("Exp beacons not fired in WebMD App"), !1;
        var a = webmd.cookie.getJson("ui"),
            b = a.expmatch || 0,
            c = webmd.cookie.get("aiq"),
            d = window.s_pageview_id || "";
        return 0 === b || 3 > b && !c ? (webmd.debug("Exp beacon call - try #" + (b + 1) + "..."), $("<iframe/>").attr({
            id: "aiq",
            src: "//img.webmd.com/pixel/aiq.a.html?domain=" + webmd.url.getSLD() + "&pvid=" + d,
            style: "width:0px; height:0px; border:0px;"
        }).appendTo("body"), a.expmatch = b + 1, webmd.cookie.setJson("ui", a, {
            domain: webmd.url.getSLD()
        }), webmd.debug("Exp beacon call done.")) : webmd.debug("Exp beacon not needed."), !0
    }), /*! webmd.hoverIntent */
    function(a) {
        a.fn.hoverIntent = function(b, c) {
            var d = {
                sensitivity: 3,
                interval: 100,
                timeout: 100
            };
            d = a.extend(d, c ? {
                over: b,
                out: c
            } : b);
            var e, f, g, h, i = function(a) {
                    e = a.pageX, f = a.pageY
                },
                j = function(b, c) {
                    return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.abs(g - e) + Math.abs(h - f) < d.sensitivity ? (a(c).unbind("mousemove", i), c.hoverIntent_s = 1, d.over.apply(c, [b])) : (g = e, h = f, c.hoverIntent_t = setTimeout(function() {
                        j(b, c)
                    }, d.interval), void 0)
                },
                k = function(a, b) {
                    return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = 0, d.out.apply(b, [a])
                },
                l = function(b) {
                    var c = jQuery.extend({}, b),
                        e = this;
                    e.hoverIntent_t && (e.hoverIntent_t = clearTimeout(e.hoverIntent_t)), "mouseenter" == b.type ? (g = c.pageX, h = c.pageY, a(e).bind("mousemove", i), 1 != e.hoverIntent_s && (e.hoverIntent_t = setTimeout(function() {
                        j(c, e)
                    }, d.interval))) : (a(e).unbind("mousemove", i), 1 == e.hoverIntent_s && (e.hoverIntent_t = setTimeout(function() {
                        k(c, e)
                    }, d.timeout)))
                };
            return this.bind("mouseenter", l).bind("mouseleave", l)
        }
    }(jQuery), /*! webmd.html5 */
    document.createElement("header"), document.createElement("nav"), document.createElement("section"), document.createElement("article"), document.createElement("aside"), document.createElement("footer"), /*! webmd.cookietrack.js */
    webmd.cookie.trackCookies = function() {
        var a, b, c, d, e, f, g, h, i;
        if (i = window.sessionStorage, h = "http://bi.webmd.com/1x1.gif", document.cookie && window == window.top && i && "https:" !== location.protocol && (a = "" + document.cookie.length, b = i.cookieLength, webmd.debug("cookie length = ", a, b), a !== b && !(6e3 > a))) {
            for (i.cookieLength = a, c = document.cookie.split(";"), h = webmd.url.addParam("cookieLength", a, h), d = 0; d < c.length; d++) e = jQuery.trim(c[d]).split("="), f = e[0] || "", g = (e[1] || "").length, f && g && (h = webmd.url.addParam(f, g, h));
            webmd.debug("Logging cookie sizes: ", h), $(function() {
                $("<img/>").hide().appendTo("body").attr("src", h)
            })
        }
    }, webmd.cookie.cleanup = function() {
        var a, b, c, d, e, f, g, h;
        if (a = 8e3, document.cookie && !(document.cookie.length <= a)) {
            for (b = document.cookie.split(";"), d = "", e = 0, c = 0; c < b.length; c++) f = jQuery.trim(b[c]).split("="), g = f[0] || "", h = (f[1] || "").length, g && h > e && (d = g, e = h);
            d && (webmd.debug("deleting largest cookie " + d), webmd.cookie.deleteCookie(d, {
                path: "/",
                domain: "webmd.com"
            }))
        }
    }, $(function() {
        webmd.cookie && (webmd.cookie.trackCookies(), webmd.cookie.cleanup())
    }), /*! emailafriend */
    $(document).on("click", ".triggerEmailOverlay", function(a) {
        var b, c, d;
        return a.preventDefault(), (b = window.s_unique_id || window.s_asset_id) ? (c = "email_asset_overlay/1/email_asset_overlay", d = function() {
            require([c], function(a) {
                a.open({
                    id: b
                })
            }, function(a) {
                webmd.overlay.alert("Unable to send email:<br/>Could not load email form.")
            })
        }, void(require.defined(c) ? d() : webmd.overlay.open({
            html: '<div class="loading_large" style="margin:30px"></div>',
            onComplete: function() {
                d()
            }
        }))) : void webmd.overlay.alert("Unable to send email:<br/>Cannot determine asset id for this page.")
    }), /*! webmd.p.decisionSelect */
    function() {
        var a = webmd.adsCookie.get("sess"),
            b = webmd.cookie.exists("ds_30");
        a && a.ds && a.ds.sp && webmd.ads2.setPageTarget("dsf", a.ds.sp.match(/^dssp_(.+)x$/)[1]), webmd.p.decisionSelect = function(a) {
            webmd.p.decisionSelect.sponsorId = a;
            var c = window.image_server_url || "http://img.webmd.com/dtmcms/live";
            !b && webmd.p.pim.isAllowed() && require([c + "/webmd/PageBuilder_Assets/JS_static/sponsored_programs/decision_select/survey-runner.min.js"])
        }
    }();
var pf_param = webmd.url.getParam("print");
pf_param && (document.documentElement.className += " printPreview"),
    function() {
        $("html").addClass("harmony")
    }(), $(function() {
        var a = $("#ContentPane12"),
            b = $("#ContentPane13"),
            c = window.s_business_reference || "",
            d = $("header.page-header"),
            e = $("section.page-meta"),
            f = $("article .article-header"),
            g = $(".ss_title"),
            h = $(".titlebar"),
            i = $(".content-header"),
            j = $("#rmq_header"),
            k = $(".byline"),
            l = $(".attribution");
        "TOC" !== c && (d && $(a).append(d), f && $(a).append(f), g && $(a).append(g), j && $(a).append(j), h && $(a).append(h), i && $(a).append(i)), e && $(b).append(e), k && $(b).append(k), l && $(b).append(l)
    }), /*! webmd.mediaNet */
    window._mNHandle = window._mNHandle || {}, window._mNHandle.queue = window._mNHandle.queue || [], window.medianet_versionId = "121199",
    function() {
        var a = "https:" === document.location.protocol;
        webmd.load({
            js: "//contextual.media.net/dmedianet.js?cid=8CUU54RQD" + (a ? "&https=1" : "")
        })
    }(), $(function() {
        if (window.getMediaNetContainer = function(a) {
                var b, c = {};
                return b = $("html"), b.hasClass("flexible") && (c.id = "540688367", c.size = "600x175"), b.hasClass("harmony") && (c.id = "127453681", c.size = "620x175"), b.hasClass("legacy") && (c.id = "388776378", c.size = "500x175"), a && "" !== a ? c[a] || "" : c
            }, !("false" !== window.s_sensitive || window.s_sponsor_brand && window.s_sponsor_program)) try {
            var a = window.getMediaNetContainer();
            $(".medianet-ctr").attr("id", a.id), window._mNHandle.queue.push(function() {
                window._mNDetails.loadTag(a.id, a.size, a.id)
            })
        } catch (b) {}
    });
//# sourceMappingURL=../JS_static/sourcemaps/scripts_harmony_sourcemap.js