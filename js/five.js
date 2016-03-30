/* repo: omniture-beacon/HEAD@1.1.0-117-g43b53aa - Package Version: 2.0.0 - 2016-02-12 11:14 am - User:  */
function wmdSetContext(a, b) {
    a && (a = a.replace(/[^A-Za-z0-9\.]/g, "").toLowerCase(), s_md.contextData[a] = b)
}

function s_md_doPlugins(a) {
    function b(a, b) {
        a && (s_md[a] = b)
    }
    s_md.pageName || (s_md.pageName = location.protocol + "//" + location.host + location.pathname),
        function() {
            var a, c;
            if (window.newProp)
                for (a in window.newProp) c = window.newProp[a], b(a, c)
        }(), s_md.prop66 = "D=aid"
}

function _readC(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
            " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 === e.indexOf(b)) return e.substring(b.length, e.length)
    }
    return ""
}

function _writeC(a, b) {
    date = new Date(3e3, 1, 1, 0, 0, 0), document.cookie = a + "=" + escape(b) + "; path=/; domain=" + s_domain + ";expires=" + date.toGMTString()
}

function _writeC9Mon(a, b) {
    var c = new Date;
    date = new Date(c.getFullYear(), c.getMonth() + 9, c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()), document.cookie = a + "=" + escape(b) + "; path=/; domain=" + s_domain + ";expires=" + date.toGMTString()
}

function sCookie(a, b) {
    document.cookie = a + "=" + b.toLowerCase() + "; path=/; domain=" + s_domain + ";expires="
}

function _readQ(a) {
    var b = a + "=";
    if (-1 == document.URL.indexOf("?")) return "";
    for (var c = document.URL.toLowerCase().split("?"), d = String(c[1]).split("&"), e = 0; e < d.length; e++) {
        for (var f = d[e];
            " " == f.charAt(0);) f = f.substring(1, f.length);
        if (0 === f.indexOf(b)) return f.substring(b.length, f.length)
    }
    return ""
}

function addEvent(a) {
    typeof a != _ud && "" !== a && -1 == s_md.events.indexOf(a) && ("" !== s_md.events && (s_md.events += ","), s_md.events += a)
}

function wmdSearchTrack(a) {
    ctr(a)
}

function ctrCookie(a) {
    var b = new Date,
        c = new Date(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds() + 20),
        d = a,
        e = "";
    typeof s_linktext != _ud && (e = s_linktext.toLowerCase(), s_linktext = "");
    try {
        d = s_md.pageName.split("_").join("-") + "_" + a + "|" + e
    } catch (f) {}
    d = d.toLowerCase(), document.cookie = "ctr=" + d + ";path=/; domain=" + s_domain + ";expires=" + c.toGMTString();
    try {
        document.cookie = "prop29=" + s_sponsor_program + ";path=/; domain=" + s_domain + ";expires=" + c.toGMTString()
    } catch (f) {}
}

function ctr(a) {
    ctrCookie(typeof s_query != _ud ? a + "|" + s_query : a + "|")
}

function wmdTrack(a) {
    ctrs(a)
}

function ctrs(a) {
    ctrCookie(a + "|")
}

function _urlClean(a) {
    return a = a.toLowerCase(), a = a.split("https://www.").join(""), a = a.split("http://www.").join(""), a = a.split("https://").join(""), a = a.split("http://").join(""), a = a.split("www.").join(""), a = a.split(".html").join(""), a = a.split(".htm").join(""), a = a.split(".aspx").join(""), a = a.split(".asp").join(""), a = a.split(" ").join("-"), a = a.split("default").join(""), a = a.split(" ").join("-"), a = a.split("%20").join("-"), a = a.split("_").join("-"), a = a.split("\\").join(""), a = a.split('"').join("")
}

function wmdGetPVCandidate() {
    window.jQuery && $.get("/api/xml/pv.xml?t=" + +new Date)
}

function locateCall(a) {
    var b = s_md.linkTrackVars,
        c = s_md.pageName;
    s_md.linkTrackVars = "prop3,prop47,prop50";
    var d = "w-debug-" + a + "_" + s_md.prop20;
    s_md.pageName = d, void s_md.tl(!0, "o", d), s_md.linkTrackVars = b, s_md.pageName = c
}

function wmdPageLink(a) {
    var b;
    try {
        a = a.toLowerCase()
    } catch (c) {}
    b = s_gi(s_account), b.prop32 = "";
    var d = b.events;
    b.events = "", b.prop21 = typeof s_query != _ud && "" !== s_query ? s_query.toLowerCase() : "", (typeof b.prop15 == _ud || "" === b.prop15) && (b.prop15 = typeof s_sponsor_program != _ud && "" !== s_sponsor_program && typeof a != _ud && "" !== a ? s_sponsor_program.toLowerCase() + "_" + a : "");
    try {
        b.prop20 = trun20(b.pageName.split("_").join("-") + "_" + a)
    } catch (c) {}
    typeof s_linktext != _ud && (b.prop32 = s_linktext.toLowerCase(), s_linktext = ""), addEvent("event8"), typeof s_new_reg != _ud && "" !== s_new_reg && addEvent(s_new_reg.toLowerCase());
    try {
        b.products = ";" + a.split("_")[0] + ";;;event8=1,"
    } catch (c) {}
    b.linkTrackVars = all_linkTrackVars, setProp40(), void b.tl(!0, "o", a), b.linkTrackVars = "prop3,prop47,prop50", b.prop15 = "", "1" == s_persist40 && (b.prop40 = ""), typeof s_new_reg != _ud && "" !== s_new_reg && (s_new_reg = ""), b.events = d
}

function wmdSetUserSegment(a, b, c) {
    "2" != b && "3" != b && (b = "1"), s_persist40 = b, s_md.prop40 = a, "1" != b && sCookie("p40", a + "|" + c)
}

function setProp40() {
    if (typeof s_md.prop40 == _ud || 0 === s_md.prop40.length) {
        var a = _readC("p40");
        if (typeof a != _ud && a.length > 0) {
            var b = a.split("|");
            if (s_md.prop40 = b[0], 2 == b.length && b[1].length > 0) {
                var c = b[1];
                c != s_md.prop28 && c != s_md.prop29 && c != s_md.prop31 && (s_md.prop40 = "", sCookie("p40", "undefined"))
            }
        }
    }
}

function wmdPageview(a, b, c) {
    var d;
    d = s_gi(s_account);
    var e = d.events;
    d.prop9 = b, d.prop32 = "", "y" == s_pageview_sent && (d.prop43 = "", d.prop20 = "", d.prop15 = "");
    try {
        a = _urlClean(a)
    } catch (f) {}
    if ("" !== a) {
        d.pageName = a;
        try {
            (s_sponsor_brand || s_sponsor_program) && (c = a.substr(a.indexOf("/") + 1))
        } catch (f) {}
        d.prop45 = typeof c != _ud && "" !== c ? c.toLowerCase() : ntc, typeof s_tug != _ud && "" !== s_tug && d.prop45 != ntc && (d.prop45 = s_tug + "_" + d.prop45)
    }
    var g = "";
    try {
        if (g = String(_readC("ctr")), prop29LastPg = String(_readC("prop29")).toLowerCase(), g && g != _ud) {
            var h = new Date;
            document.cookie = "ctr=undefined; path=/; domain=" + s_domain + ";expires=" + h.toGMTString(), document.cookie = "prop29=undefined; path=/; domain=" + s_domain + ";expires=" + h.toGMTString();
            var i = g.split("|"),
                j = i[0];
            i[1];
            d.prop32 = i[2];
            var k = j.indexOf("_");
            if (k > 0) var l = j.substr(k + 1);
            (typeof d.prop15 == _ud || "" === d.prop15) && (d.prop15 = typeof prop29LastPg != _ud && "" !== prop29LastPg && typeof l != _ud && "" !== l ? prop29LastPg + "_" + l.toLowerCase() : "");
            try {
                d.prop20 = trun20(j).toLowerCase()
            } catch (f) {}
        }
    } catch (f) {}
    var m = _readC("haiq");
    if (m = unescape(m).split("|")[0], d.eVar46 = webmd.omniture.getTrackingCookie("turn"), d.eVar45 = webmd.omniture.getTrackingCookie("aiq"), "coreuk" != s_site) try {
        mboxUpdate("WebMDMbox", "page=" + a)
    } catch (f) {}
    setProductsPV();
    try {
        d.prop44 = _readC("olen")
    } catch (f) {}
    setProp40();
    var n = document.cookie.split(";");
    try {
        d.prop24 = s_pageview_id
    } catch (f) {}
    d.prop71 = (5 * Math.ceil(n.length / 5)).toString(), d.prop72 = (250 * Math.ceil(document.cookie.length / 250)).toString();
    try {
        d.prop73 = String(window.performance.navigation.type), d.prop74 = String((500 * Math.ceil((Date.now() - window.performance.timing.navigationStart) / 500)).toString())
    } catch (f) {}
    if (typeof eMessage != _ud && (d.prop75 = eMessage), void d.t(), window["s_i_" + s_account]) {
        var o = window["s_i_" + s_account],
            p = 100 * Math.ceil(o.src.length / 100);
        sCookie("olen", p.toString())
    }
    d.products = "", d.prop15 = "", d.events = e, wmdGetPVCandidate(), s_pageview_sent = "y", "1" == s_persist40 && (d.prop40 = ""), window.s_after_pv && s_after_pv()
}

function wmdTrackLink(a) {
    trun20(ctrs(s_md.pageName + "_" + a))
}

function trun20(a) {
    try {
        if (typeof a == _ud || "" === a) return;
        if (!(a.length > 100)) return a;
        var b = a.split("_");
        if (b.length < 2) return a;
        var c = b[0].length > 73 ? b[0].substring(0, 72) : b[0],
            d = b[1].length > 20 ? b[1].substring(0, 19) : b[1];
        if (2 == b.length) return c + "_" + d;
        if (3 == b.length) return c + "_" + d + "_" + b[2];
        if (4 == b.length) return c + "_" + d + "_" + b[2] + "_" + b[3]
    } catch (e) {
        return a
    }
}

function setProductsPV() {
    var a = "";
    if (typeof s_md.prop20 != _ud && "" !== s_md.prop20 && (a = s_md.prop20.split("_")[1]), window.s_before_pv && s_before_pv(), s_md.products = "", modFoundInCurPg = 0, window.s_module_impressions && s_module_impressions.length)
        for (addEvent("event7"), z = 0; z < s_module_impressions.length; z++) "" !== a && s_module_impressions[z] == a ? (s_md.products = s_md.products + ";" + s_module_impressions[z] + ";;;event7=1|event8=1,", modFoundInCurPg = 1, addEvent("event8")) : s_md.products = s_md.products + ";" + s_module_impressions[z] + ";;;event7=1,";
    "" !== a && 0 === modFoundInCurPg && (s_md.products = s_md.products + ";" + a + ";;;event8=1,", addEvent("event8")), s_module_impressions = []
}
var s_ver = "|consumer",
    s_beacon_type = "core",
    s_site, webmd;
webmd || (webmd = {}), webmd.omniture = {
    regId: String(unescape(_readC("WBMD_MB9"))).toLowerCase() || String(unescape(_readC("WBMD_MB"))).toLowerCase(),
    getTrackingCookie: function(a) {
        if ("undefined" == typeof a) return !1;
        var b = window._readC(a);
        if ("" === b) b = !1;
        else {
            b = decodeURIComponent(b);
            var c = b.split("|")[2] || "";
            b = "y" === c ? b.replace(/\|(.*)/g, "") : "99999"
        }
        return b
    },
    handleMBCookie: function() {
        var a = this;
        if ("" !== qecd && qecd.indexOf("wnl") >= 0 && (_writeC("ecdwnl", "wnl"), ecdwnlC = "wnl", "" === uAuth)) {
            var b = unescape(_readQ("mb"));
            "" !== b && (_writeC9Mon("WBMD_MB9", b), a.regId = b)
        }
    },
    adInfo: function(a) {
        var b = "";
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                if (b += a[c].pos + ":", a[c].sizes.length > 2)
                    for (i = 0; i < a[c].sizes.length; i++) b += a[c].sizes[i] + "|";
                else b += a[c].sizes + "_";
                b = b.replace(/\|(\s+)?$/, "_")
            }
        return b = b.replace(/_(\s+)?$/, "").replace(/,/g, "x")
    },
    spCleanUp: function(a) {
        var b = a;
        return b = b.replace(/\-.*/, "").toLowerCase()
    }
}, s_ver += "-core|20160212";
var _ud = "undefined",
    ntc = "ntc",
    s_live = !0;
window.s_beaconload && s_beaconload();
var s_account;
try {
    "webmddev" == s_account ? s_live = !1 : (s_account = "webmdp1global", s_live = !0)
} catch (e) {
    var s_account = "webmdp1global"
}
typeof s_widget != _ud && 1 == s_widget && (s_account = "webmdp1widget"), "brand" == s_beacon_type && (s_account = "webmdpartner"), typeof s_account_override !== _ud && "" !== s_account_override && (s_account = s_account_override.toLowerCase());
var s_md = s_gi(s_account);
_dom = document.domain.split(".");
var s_domain = _dom[_dom.length - 2] + "." + _dom[_dom.length - 1];
if ("coreuk" == s_site) var s_domain = _dom[_dom.length - 3] + "." + s_domain;
s_md.cookieDomainPeriods = "2", s_md.jsCookieDomainPeriods = "2", s_md.charSet = "ISO-8859-1", s_md.currencyCode = "USD", s_md.trackDownloadLinks = !0, s_md.trackExternalLinks = !0, s_md.trackInlineStats = !0, s_md.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls", s_md.linkInternalFilters = "javascript:," + s_domain, s_md.linkLeaveQueryString = !1, s_md.linkTrackVars = "prop3,prop47,prop50", all_linkTrackVars = "products,events,contextData.wb.rspd,prop3,prop15,prop20,prop21,prop28,prop29,prop30,prop31,prop32,prop40,prop47,prop48,prop50,eVar46,eVar45",
    function() {
        var a, b;
        if (window.s_context)
            for (a in window.s_context) b = window.s_context[a], wmdSetContext(a, b)
    }(), s_md.linkTrackEvents = "", s_md.visitorNamespace = "webmd", s_md.usePlugins = !0, s_md.doPlugins = s_md_doPlugins, s_md.c_gd = new Function("var s=this,d=s.wd.location.hostname,n=s.jsCookieDomainPeriods,n2=s.cookieDomainPeriods,p;if(d&&!s.c_d){n=n?n:n2;n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):'';}return s.c_d"), s_md.trackGAS = new Function("var s_md=this,gifa=document.getElementsByTagName('iframe'),gif;for(var i=0;i<gifa.length;i++){if(gifa[i].src.indexOf('googlesyndication.com')>-1){gif=gifa[i];if(gif.attachEvent){gif.attachEvent('onfocus',s_md.gasf);}}}"), s_md.gasf = new Function("var s_md=s_gi(s_account);s_md.prop36=s_md.pageName;s.tl(true,'o','Google Exit Link');"), s_md.trackGAS(), s_md.events = "event5";
var s_persist40 = "",
    s_pageview_sent = "n";
try {
    s_not_pageview ? "n" != s_not_pageview && (s_not_pageview = "y") : s_not_pageview = "n"
} catch (e) {
    s_not_pageview = "n"
}
var s_ctr_loc;
if ("n" == s_not_pageview) {
    s_md.prop32 = "";
    var sCtrRead = "";
    try {
        if (sCtrRead = String(_readC("ctr")), prop29LastPg = String(_readC("prop29")).toLowerCase(), sCtrRead && sCtrRead != _ud) {
            var _dtDel = new Date;
            document.cookie = "ctr=undefined; path=/; domain=" + s_domain + ";expires=" + _dtDel.toGMTString(), document.cookie = "prop29=undefined; path=/; domain=" + s_domain + ";expires=" + _dtDel.toGMTString();
            var _CtrRead = sCtrRead.split("|");
            s_ctr_loc = _CtrRead[0];
            var s_ctr_query = _CtrRead[1];
            s_md.prop32 = _CtrRead[2];
            var _pos = s_ctr_loc.indexOf("_");
            if (_pos > 0) var s_ml = s_ctr_loc.substr(_pos + 1)
        }
    } catch (e) {}
}
var qicd = _readQ("ICD"),
    qecd = _readQ("ECD"),
    qctr = _readQ("CTR");
"" === qicd && (qicd = _readQ("icd")), "" === qecd && (qecd = _readQ("ecd")), "" === qctr && (qctr = _readQ("ctr")), "" !== qicd && (s_md.prop42 = qicd.toLowerCase()), "" !== qctr && (s_ctr_loc = qctr);
var _haiq = _readC("haiq");
if (_haiq = unescape(_haiq).split("|")[0], "core" == s_beacon_type) {
    if ("" !== qecd) {
        var vendor = _readQ("v"),
            publisher = _readQ("p");
        "" !== vendor && (vendor = vendor.split("_").join("-"), qecd = 0 === qecd.lastIndexOf("_") ? qecd + vendor : qecd + "_" + vendor), "" !== publisher && (publisher = publisher.split("_").join("-"), qecd += "_" + publisher), qecd = qecd.toLowerCase(), qecd = qecd.split("__").join("_").split("%20").join("-"), s_md.prop43 = qecd
    }
    var _src = _readQ("src");
    "" !== _src && (_src = _src.toLowerCase(), s_md.prop43 = _src)
}
var uPermC = String(_readC("WBMD_PERM")),
    ecdwnlC = _readC("ecdwnl"),
    uAuth = _readC("WBMD_AUTH");
webmd.omniture.handleMBCookie(), s_md.prop41 = "consumer-unregistered", typeof uPermC !== _ud && "" !== uPermC ? s_md.prop41 = "consumer-full" : ("" !== webmd.omniture.regId || "" !== ecdwnlC) && (s_md.prop41 = "consumer-light");
var s_user_group = "consumer-unregistered";
("" !== _readC("WLMDAUTH") || "" !== uAuth) && (s_user_group = "consumer"), "idm" === s_site && (s_user_group = "idm-unregistered", ("" !== _readC("UHID_AUTH") || "" !== _readC("UHID_SAUTH")) && (s_user_group = "idm"));
var s_errAs = "",
    s_eUrl = "",
    s_eRef = "";
try {
    s_error || (s_error = "")
} catch (e) {
    s_error = ""
}
try {
    s_pageType && (s_error = s_pageType)
} catch (e) {
    s_pageType = ""
}
try {
    if ("" !== s_error) {
        _rf = document.location.href;
        var _qrypos = _rf.indexOf("?");
        _qrypos >= 0 && (_qry = _rf.substring(_qrypos + 1), _rf = _qry.split("ourl=").join(""), _er = _rf.split("&referer="), s_eUrl = _er[0], s_eRef = _er[1])
    }
    if ("" === s_error) {
        _rf1 = document.location.href;
        var _qrypos1 = _rf1.indexOf("aspxerrorpath=");
        if (_qrypos1 >= 0) {
            _qry1 = _rf1.substring(_qrypos1 + 14), _er1 = _qry1.split("&referer="), s_error = "errorPage", s_eUrl = "404;http://" + document.domain + _er1[0];
            try {
                s_eRef = _er1[1]
            } catch (e) {}
        }
    }
    if (s_eUrl) {
        s_errAs = s_eUrl.split("://").join("");
        var _len = s_errAs.indexOf("/");
        s_errAs = s_errAs.substring(_len, s_errAs.length), s_errAs = _urlClean(s_errAs).substr(1)
    }
    "" === s_eRef && (s_eRef = document.referrer)
} catch (e) {
    s_error = ""
}
var s_visitor = _readC("VisitorId");
try {
    s_query || (s_query = "No Search Term")
} catch (e) {}
var _URL = "";
try {
    _URL = s_pagename
} catch (e) {}
try {
    _URL = s_pageName
} catch (e) {}
"" === _URL && (_URL = String(document.location).split("?")[0].split("#")[0]), _URL = _urlClean(_URL);
try {
    s_movie && (_URL = _URL + "?movie=" + s_movie.toLowerCase())
} catch (e) {}
try {
    "tools - sdc" == s_asset_class && (_URL = _URL + "/formid=" + _readQ("formid"))
} catch (e) {}
var _asset = _URL.substr(_URL.indexOf("/") + 1);
"affiliate" == s_beacon_type && (_asset = _URL), _asset = String(_urlClean(_asset)).toLowerCase(), "" === _asset && (_asset = "default");
var s_sponUri = "";
try {
    (s_sponsor_brand || s_sponsor_program) && (s_sponUri = _asset)
} catch (e) {}
var _suit = "";
typeof s_site == _ud && (s_site = "ntc");
var s_hier1_subsite = "";
if ("core" == s_beacon_type) {
    if ("mobileus" == s_site) {
        s_site = "core";
        var s_mobileweb = "yes"
    }
    if (typeof s_mobileweb == _ud) var s_mobileweb = "no";
    typeof s_subsite != _ud && (s_hier1_subsite = s_subsite);
    try {
        if ("core" != s_site) {
            var s_sc = "cb";
            switch (s_site) {
                case "coreuk":
                    "no" == s_mobileweb ? (s_md.prop48 = "mbl-no", s_hier1_subsite = s_site + "only") : "yes" == s_mobileweb && (s_md.prop48 = "mbl-yes", s_hier1_subsite = "mobile"), _suit = "webmdp1bootsvista", s_hier1 = "webmd,cns," + s_sc + "," + s_site + "," + s_hier1_subsite;
                    break;
                case "hlthboard":
                    _suit = "webmdp1cbvista", s_hier1 = "webmd,cns,cb,healthboards,hlthboard";
                    break;
                case "psychtoday":
                    _suit = "webmdp1cbvista", s_hier1 = "webmd,cns,cb,psychologytoday,psychtoday";
                    break;
                case "diet":
                    s_sc = "ooc", s_asset_class = "expert commentary", s_hier1 = "webmd,cns," + s_sc + "," + s_site + ",-", _suit = "webmdp1dietvista";
                    break;
                case "chldob":
                    _suit = "webmdchldobvista", s_hier1 = "webmd,cns,ooc,chldob," + s_subsite, s_sc = "ooc";
                    break;
                case "social":
                    _suit = "", s_sc = "ooc", s_hier1 = "webmd,cns,ooc,social,-";
                    break;
                case "connect":
                    _suit = "webmdconnect", s_sc = "ooc", s_hier1 = "webmd,cns,ooc,connect,-";
                    break;
                case "uhid":
                    _suit = "", s_sc = "wmd", s_bu = "wmd", s_hier1 = "webmd,wmd,wmd,uhid,-";
                    break;
                case "idm":
                    _suit = "", s_sc = "wmd", s_bu = "wmd", s_hier1 = "webmd,wmd,wmd,idm,-";
                    break;
                default:
                    s_sc = "ntc", s_hier1 = "webmd,cns," + s_sc + "," + s_site + ",-"
            }
        } else {
            var s_sc = "ooc";
            typeof s_mobileweb != _ud && "yes" == s_mobileweb ? (s_md.prop48 = "mbl-yes", s_hier1_subsite = "mobile") : (s_md.prop48 = "mbl-no", s_hier1_subsite = s_site + "only"), _suit = "webmdp1corevista", s_hier1 = "webmd,cns," + s_sc + "," + s_site + "," + s_hier1_subsite
        }
    } catch (e) {}
    if (typeof s_widget != _ud && 1 == s_widget && (_suit = "webmdp1widget"), _dom2 = window.location.hostname.split("."), _dom2[0].indexOf("fit") >= 0) {
        _suit = "webmdchldobvista", s_site = "chldob", s_hier1 = "webmd,cns,ooc,chldob";
        var urlSeg = document.location.href.split("http://").join("");
        urlSeg = urlSeg.split("/"), urlSeg.length >= 2 && (urlSeg = urlSeg[1], (urlSeg.indexOf("teen") >= 0 || urlSeg.indexOf("jr") >= 0 || urlSeg.indexOf("kids") >= 0) && (s_hier1 = "webmd,cns,ooc,chldob," + urlSeg))
    }
}
if ("affiliate" == s_beacon_type) {
    var s_siteclass = "cb";
    switch ("ntc" == s_site && (s_site = s_domain.split(".")[0]), _suit = "webmdp1cbvista", s_site) {
        case "drugs":
            s_site = "drugscom", _suit = "webmddrugscom";
            break;
        case "psychologytoday":
            s_site = "psychologytoday", s_hier1 = "webmd,cns,cb,psychologytoday," + s_site + "only";
            break;
        case "psychtests":
            s_hier1 = "webmd,cns,cb,psychologytoday," + s_site;
            break;
        case "healthboards":
            s_hier1 = "webmd,cns,cb,healthboards," + s_site + "only";
            break;
        case "store":
            s_hier1 = "webmd,cns,cb," + s_site + ",-";
            break;
        default:
            s_hier1 = "webmd,cns," + s_siteclass + "," + s_site + ",-"
    }
}
if ("oo" == s_beacon_type)
    if ("medicinenet" != s_site) switch (s_site) {
        case "rxlist":
            _suit = "webmdp1odvista,webmdp1rxlistvista", s_md.hier1 = "webmd,cns,od,rxlist,-";
            break;
        case "medterms":
            _suit = "webmdp1odvista,webmdp1medicinenetvista", s_md.hier1 = "webmd,cns,od,medicinenet,medterms";
            break;
        case "emedicinehealth":
            _suit = "webmdp1odvista,webmdp1emedicinehealthvista", s_md.hier1 = "webmd,cns,od,emedicinehealth,-";
            break;
        default:
            _suit = "webmdp1odvista", s_md.hier1 = ntc
    } else _suit = "webmdp1odvista,webmdp1medicinenetvista", s_md.hier1 = "webmd,cns,od," + s_site + "," + s_hier1_subsite;
if ("brand" == s_beacon_type) {
    s_site == ntc && (s_site = _dom[_dom.length - 2]), _suit = "webmd" + s_site + "com";
    var s_siteclass = "brand",
        s_hier1 = "webmd,cns,brand," + s_site + ",-"
}
s_md.pageName = typeof _URL != _ud && "" !== _URL ? typeof s_page_suffix != _ud && "" !== s_page_suffix ? _URL + "-" + s_page_suffix : _URL : "";
try {
    s_md.prop16 = s_test1.toLowerCase()
} catch (e) {}
try {
    s_md.prop25 = s_test2.toLowerCase()
} catch (e) {}
s_md.prop1 = typeof s_bu != _ud && "" !== s_bu ? s_bu.toLowerCase() : "cns", s_md.prop2 = typeof s_sc != _ud && "" !== s_sc ? s_sc.toLowerCase() : typeof s_siteclass != _ud && "" !== s_siteclass ? s_siteclass.toLowerCase() : ntc, s_md.prop3 = typeof s_site != _ud && "" !== s_site ? s_site.toLowerCase() : ntc, typeof s_site_override != _ud && "" !== s_site_override && (s_md.prop3 = s_site_override.toLowerCase()), s_md.prop4 = typeof s_topic != _ud && "" !== s_topic ? s_topic.toLowerCase() : typeof s_channel != _ud && "" !== s_channel ? s_channel.toLowerCase() : ntc;
try {
    s_md.prop6 = s_asset_class.toLowerCase()
} catch (e) {}
try {
    typeof s_md.prop6 == _ud && (s_md.prop6 = s_business_reference.toLowerCase())
} catch (e) {
    s_md.prop6 = ""
}
try {
    ("" === s_md.prop6 || "-" == s_md.prop6) && (s_md.prop6 = ntc)
} catch (e) {
    s_md.prop6 = ntc
}
if (s_md.prop7 = typeof s_asset_id != _ud && "" !== s_asset_id ? s_asset_id.toLowerCase() : typeof _asset != _ud && "" !== _asset ? _asset.toLowerCase() : ntc, s_md.prop8 = typeof s_pub != _ud && "" !== s_pub ? s_pub.toLowerCase() : ntc, s_md.prop8 == ntc) try {
    s_md.prop8 = s_company.toLowerCase() + "-" + s_publication_source.toLowerCase()
} catch (e) {}
s_md.prop8 != ntc && s_md.prop8.indexOf("-") < 0 && (s_md.prop8 = "webmd-" + s_md.prop8), s_md.prop9 = typeof s_page_number != _ud && "" !== s_page_number ? s_page_number.toLowerCase() : typeof s_pagenum != _ud && "" !== s_pagenum ? s_pagenum : "", s_md.prop10 = typeof s_query != _ud && "" !== s_query ? s_query.toLowerCase() : "", s_md.prop11 = typeof s_filter != _ud && "" !== s_filter ? s_filter.toLowerCase() : "", s_md.prop12 = typeof s_results != _ud && "" !== s_results ? s_results.toLowerCase() : "", s_md.prop13 = typeof s_spell != _ud && "" !== s_spell ? s_spell.toLowerCase() : "", s_md.prop14 = typeof s_g_ads != _ud && "" !== s_g_ads ? s_g_ads.toLowerCase() : "", (typeof s_md.prop15 == _ud || "" === s_md.prop15) && (s_md.prop15 = typeof prop29LastPg != _ud && "" !== prop29LastPg && typeof s_ml != _ud && "" !== s_ml ? prop29LastPg + "_" + s_ml.toLowerCase() : ""), s_md.prop19 = typeof s_user_group != _ud && "" !== s_user_group ? s_user_group.toLowerCase() : "";
try {
    s_md.prop20 = trun20(s_ctr_loc).toLowerCase()
} catch (e) {}
try {
    s_md.prop21 = s_ctr_query.toLowerCase()
} catch (e) {}
s_md.prop22 = typeof s_adpos != _ud && "" !== s_adpos ? s_adpos.toLowerCase() : "";
try {
    s_md.prop23 = s_board.toLowerCase()
} catch (e) {}
try {
    s_md.prop24 = s_refpath.toLowerCase()
} catch (e) {}
try {
    s_md.prop24 = s_pageview_id
} catch (e) {}
try {
    if ("" !== s_error) {
        s_md.pageType = "errorPage";
        try {
            s_eUrl && (s_md.pageName = s_eUrl, s_md.prop7 = s_errAs, s_md.pageURL = s_eUrl)
        } catch (e) {}
        try {
            s_md.prop26 = s_eRef
        } catch (e) {}
    }
} catch (e) {}
try {
    s_md.prop26 = s_test3.toLowerCase()
} catch (e) {}
s_md.prop27 = typeof s_relevancy_cuis != _ud && "" !== s_relevancy_cuis ? s_relevancy_cuis.toLowerCase() : "", s_md.prop28 = typeof s_sponsor_brand != _ud && "" !== s_sponsor_brand ? s_sponsor_brand.toLowerCase() : ntc, typeof s_sponsor_program != _ud && "" !== s_sponsor_program ? (s_md.prop29 = s_sponsor_program.toLowerCase(), s_md.events += ",event6") : s_md.prop29 = ntc, typeof s_package_type != _ud && "" !== s_package_type ? (s_package_type = s_package_type.toLowerCase(), -1 == s_package_type.indexOf("- sponsored blog") && (s_package_type = s_package_type.split(" - sp").join("")), s_package_type = s_package_type.split("-sp").join(""), s_package_type = s_package_type.split(" - nosp").join(""), s_package_type = s_package_type.split("-nosp").join(""), typeof s_sponsor_program != _ud && "" !== s_sponsor_program ? s_package_type += " - sp" : s_package_type += " - nosp", s_md.prop30 = s_package_type) : s_md.prop30 = ntc, s_md.prop31 = typeof s_package_name != _ud && "" !== s_package_name ? s_package_name.toLowerCase() : ntc, s_md.prop33 = typeof s_assetname != _ud && "" !== s_assetname ? s_assetname.toLowerCase() : "", s_md.prop35 = typeof s_articletype != _ud && "" !== s_articletype ? s_articletype.toLowerCase() : ntc, s_md.prop35 = typeof s_channel_micro != _ud && "" !== s_channel_micro ? s_channel_micro.toLowerCase() : s_md.prop35, s_md.prop36 = typeof s_asset != _ud && "" !== s_asset ? s_asset.toLowerCase() : typeof s_topic_dir != _ud && "" !== s_topic_dir ? "tpdr-" + s_topic_dir.toLowerCase() : typeof s_ext_id != _ud && "" !== s_ext_id ? s_ext_id.toLowerCase() : "", "affiliate" == s_beacon_type && (s_md.prop36 = "Y"), s_md.prop37 = typeof s_channel_super_portal != _ud && "" !== s_channel_super_portal ? s_channel_super_portal.toLowerCase() : ntc, s_md.prop38 = typeof s_channel_health != _ud && "" !== s_channel_health ? s_channel_health.toLowerCase() : ntc, s_md.prop39 = typeof s_channel_mini_topic_guide != _ud && "" !== s_channel_mini_topic_guide ? s_channel_mini_topic_guide.toLowerCase() : ntc, s_md.prop39 = typeof s_channel_mini != _ud && "" !== s_channel_mini ? s_channel_mini.toLowerCase() : s_md.prop39, s_md.prop40 = typeof s_user_seg != _ud && "" !== s_user_seg ? s_user_seg.toLowerCase() : "", setProp40();
try {
    s_md.prop41 = s_user_group_perm.toLowerCase()
} catch (e) {}
try {
    s_md.prop44 = _readC("olen")
} catch (e) {}
if (s_md.prop45 = typeof s_sponUri != _ud && "" !== s_sponUri ? s_sponUri.toLowerCase() : ntc, typeof s_tug != _ud && "" !== s_tug && s_md.prop45 != ntc && (s_md.prop45 = s_tug + "_" + s_md.prop45), s_md.prop46 = typeof s_page_state != _ud && "" !== s_page_state ? s_page_state.toLowerCase() : "", s_md.prop47 = "" !== webmd.omniture.regId ? webmd.omniture.regId : ntc, "coreuk" == s_site) {
    var buID = String(_readC("ADOL_AUTH"));
    "" !== buID ? (buID = buID.split("|"), buID.length >= 1 && (s_md.prop47 = typeof buID[0] != _ud && "" !== buID[0] ? buID[0].toLowerCase() : ntc)) : s_md.prop47 = ntc
}
try {
    s_md.prop49 = s_visitor
} catch (e) {}
try {
    s_md.prop50 = _suit
} catch (e) {}
s_md.eVar46 = _haiq;
var ca = document.cookie.split(";");
webmd.omniture.getTrackingCookie && (s_md.eVar45 = webmd.omniture.getTrackingCookie("aiq"), s_md.eVar46 = webmd.omniture.getTrackingCookie("turn")), s_md.prop71 = (5 * Math.ceil(ca.length / 5)).toString(), s_md.prop72 = (250 * Math.ceil(document.cookie.length / 250)).toString();
try {
    s_md.prop73 = String(window.performance.navigation.type), s_md.prop74 = String((500 * Math.ceil((Date.now() - window.performance.timing.navigationStart) / 500)).toString())
} catch (e) {}
typeof eMessage != _ud && (s_md.prop75 = eMessage);
try {
    s_md.server = s_server_type.toLowerCase()
} catch (e) {}
try {
    s_md.server = s_md.server + s_server_location
} catch (e) {}
try {
    s_md.server = s_md.server + s_server_number.toLowerCase()
} catch (e) {}
try {
    s_md.server = s_server.toLowerCase()
} catch (e) {}
try {
    s_md.server = (typeof s_md.server == _ud || "" === s_md.server ? ntc : s_md.server) + s_ver
} catch (e) {}
try {
    s_md.hier1 = s_hier1.toLowerCase()
} catch (e) {
    s_md.hier1 = ntc
}
if (typeof s_light_reg != _ud && "" !== s_light_reg ? s_md.events += "," + s_light_reg.toLowerCase() : typeof s_new_reg != _ud && "" !== s_new_reg && (s_md.events += "," + s_new_reg.toLowerCase(), s_new_reg = ""), typeof Visitor !== _ud ? wmdSetContext("wb.vapi", "VisitorAPI Present") : wmdSetContext("wb.vapi", "VisitorAPI Missing"), typeof s_rspd != _ud && "" !== s_rspd && wmdSetContext("wb.rspd", "rdesign-yes"), typeof Visitor != _ud && (s_md.visitor = Visitor.getInstance("16AD4362526701720A490D45@AdobeOrg")), s_md.trackingServer = "std.o.webmd.com", s_md.trackingServerSecure = "ssl.o.webmd.com", s_md.dc = "122", "n" == s_not_pageview) {
    setProductsPV(), s_pageview_sent = "y";
    var s_code = s_md.t();
    if (s_md.products = "", window["s_i_" + s_account]) {
        var srcCode = window["s_i_" + s_account],
            s_code_length = 100 * Math.ceil(srcCode.src.length / 100);
        sCookie("olen", s_code_length.toString())
    }
    s_code && document.write(s_code)
}
//# sourceMappingURL=../bi_common/sourcemap/bi_consumer_sourcemap.js
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.5.2
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com
*/
function AppMeasurement() {
    var a = this;
    a.version = "1.5.2";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var q = k.AppMeasurement.zb;
    q || (q = null);
    var r = k,
        n, t;
    try {
        for (n = r.parent, t = r.location; n && n.location && t && "" + n.location != "" + t && r.location && "" + n.location != "" + r.location && n.location.host == t.host;) r = n, n = r.parent
    } catch (u) {}
    a.ob = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    };
    a.za = function(a) {
        return "" + parseInt(a) == "" + a
    };
    a.replace = function(a, b, d) {
        return !a ||
            0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = function(c) {
        var b, d;
        if (!c) return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    };
    a.unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {}
        return unescape(c)
    };
    a.gb = function() {
        var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
            d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.cookieDomain &&
            !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
        }
        return a.cookieDomain
    };
    a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie,
            d = b.indexOf(" " + c + "="),
            f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    };
    a.c_w = a.cookieWrite = function(c, b, d) {
        var f = a.gb(),
            e = a.cookieLifetime,
            g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" !=
            e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = c + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.G = [];
    a.ba = function(c, b, d) {
        if (a.ta) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
            e = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            m = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ca)
                for (a.ca = 1, d = 0; d < m.length; d++) a.d.addEventListener(m[d], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState);
                    "visible" == c && (a.ca = 0, a.delayReady())
                });
            f = 1;
            e = 0
        } else d || a.l("_d") && (f = 1);
        f && (a.G.push({
            m: c,
            a: b,
            t: e
        }), a.ca || setTimeout(a.delayReady, a.maxDelay));
        return f
    };
    a.delayReady = function() {
        var c = (new Date).getTime(),
            b = 0,
            d;
        for (a.l("_d") ? b = 1 : a.na(); 0 < a.G.length;) {
            d = a.G.shift();
            if (b && !d.t && d.t > c) {
                a.G.unshift(d);
                setTimeout(a.delayReady,
                    parseInt(a.maxDelay / 2));
                break
            }
            a.ta = 1;
            a[d.m].apply(a, d.a);
            a.ta = 0
        }
    };
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.ba("setAccount", arguments))
            if (a.account = c, a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else a.allAccounts = c.split(",")
    };
    a.foreachVar = function(c, b) {
        var d, f, e, g, m = "";
        e = f = "";
        if (a.lightProfileID) d = a.K, (m = a.lightTrackVars) && (m = "," + m + "," + a.ga.join(",") + ",");
        else {
            d = a.c;
            if (a.pe || a.linkType) m = a.linkTrackVars,
                f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (m = a[e].yb, f = a[e].xb));
            m && (m = "," + m + "," + a.A.join(",") + ",");
            f && m && (m += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!m || 0 <= m.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    };
    a.B = function(c, b, d, f, e) {
        var g = "",
            m, p, k, w, n = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (m in b)
                if (!(Object.prototype[m] || e && m.substring(0, e.length) != e) && b[m] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + m + ","))) {
                    k = !1;
                    if (n)
                        for (p =
                            0; p < n.length; p++) m.substring(0, n[p].length) == n[p] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."), p = b[m], e && (m = m.substring(e.length)), 0 < m.length))
                        if (k = m.indexOf("."), 0 < k) p = m.substring(0, k), k = (e ? e : "") + p + ".", n || (n = []), n.push(k), g += a.B(p, b, d, f, k);
                        else if ("boolean" == typeof p && (p = p ? "true" : "false"), p) {
                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = m.substring(0, 4), w = m.substring(4), m) {
                            case "transactionID":
                                m = "xact";
                                break;
                            case "channel":
                                m = "ch";
                                break;
                            case "campaign":
                                m = "v0";
                                break;
                            default:
                                a.za(w) && ("prop" ==
                                    k ? m = "c" + w : "eVar" == k ? m = "v" + w : "list" == k ? m = "l" + w : "hier" == k && (m = "h" + w, p = p.substring(0, 255)))
                        }
                        g += "&" + a.escape(m) + "=" + a.escape(p)
                    }
                }
                "" != g && (g += "&." + c)
        }
        return g
    };
    a.ib = function() {
        var c = "",
            b, d, f, e, g, m, p, k, n = "",
            r = "",
            s = e = "";
        if (a.lightProfileID) b = a.K, (n = a.lightTrackVars) && (n = "," + n + "," + a.ga.join(",") + ",");
        else {
            b = a.c;
            if (a.pe || a.linkType) n = a.linkTrackVars, r = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].yb, r = a[e].xb));
            n && (n = "," + n + "," + a.A.join(",") + ",");
            r && (r = "," + r + ",",
                n && (n += ",events,"));
            a.events2 && (s += ("" != s ? "," : "") + a.events2)
        }
        if (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
            e = q;
            if (g = a.visitor.getCustomerIDs())
                for (d in g) Object.prototype[d] || (f = g[d], e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState));
            e && (c += a.B("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.B("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            m = e.substring(4);
            !g &&
                "events" == e && s && (g = s, s = "");
            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                switch (e) {
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0,
                            255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e =
                            "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        s && (g += ("" != g ? "," : "") + s);
                        if (r)
                            for (m =
                                g.split(","), g = "", f = 0; f < m.length; f++) p = m[f], k = p.indexOf("="), 0 <= k && (p = p.substring(0, k)), k = p.indexOf(":"), 0 <= k && (p = p.substring(0, k)), 0 <= r.indexOf("," + p + ",") && (g += (g ? "," : "") + m[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.B("c", a[e], n, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e =
                            "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.B("mts", a[e], n, e));
                        g = "";
                        break;
                    default:
                        a.za(m) && ("prop" == f ? e = "c" + m : "eVar" == f ? e = "v" + m : "list" == f ? e = "l" + m : "hier" == f && (e = "h" + m, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (c += a.e)
        }
        return c
    };
    a.u = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Cb || "undefined" != "" + a.sb && "HTML" != ("" + a.sb).toUpperCase()) return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b ||
            "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    };
    a.va = function(a) {
        var b = a.href ? a.href : "",
            d, f, e;
        d = b.indexOf(":");
        f = b.indexOf("?");
        e = b.indexOf("/");
        b && (0 > d || 0 <= f && d > f || 0 <= e && d > e) && (f = a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", d = l.pathname.lastIndexOf("/"), b = (f ? f + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ? 0 : d) + "/" : "") + b);
        return b
    };
    a.H = function(c) {
        var b = a.u(c),
            d, f, e = "",
            g = 0;
        return b &&
            (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : c.src && "IMAGE" == b && (e = c.src) : e = a.va(c), e) ? {
                id: e.substring(0, 100),
                type: g
            } : 0
    };
    a.Ab = function(c) {
        for (var b = a.u(c), d = a.H(c); c && !d && "BODY" != b;)
            if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.u(c), d = a.H(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    };
    a.rb = function() {
        var c, b, d = a.linkObject,
            f = a.linkType,
            e = a.linkURL,
            g, m;
        a.ha = 1;
        d || (a.ha = 0, d = a.clickObject);
        if (d) {
            c = a.u(d);
            for (b = a.H(d); d && !b && "BODY" != c;)
                if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.u(d), b = a.H(d);
            b && "BODY" != c || (d = 0);
            if (d) {
                var p = d.onclick ? "" + d.onclick : "";
                if (0 <= p.indexOf(".tl(") || 0 <= p.indexOf(".trackLink(")) d = 0
            }
        } else a.ha = 1;
        !e && d && (e = a.va(d));
        e && !a.linkLeaveQueryString &&
            (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var n = 0,
                r = 0,
                q;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (p = e.toLowerCase(), g = p.indexOf("?"), m = p.indexOf("#"), 0 <= g ? 0 <= m && m < g && (g = m) : g = m, 0 <= g && (p = p.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), m = 0; m < g.length; m++)(q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f = "d");
            if (a.trackExternalLinks && !f && (p = e.toLowerCase(), a.ya(p) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ?
                    (g = a.linkExternalFilters.toLowerCase().split(","), n = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (m = 0; m < g.length; m++) q = g[m], 0 <= p.indexOf(q) && (r = 1);
                r ? n && (f = "e") : n || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0,
            100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    };
    a.jb = function() {
        var c = a.ha,
            b = a.linkType,
            d = a.linkURL,
            f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats) {
            var b = {},
                d = 0,
                e = a.cookieRead("s_sq"),
                g = e ? e.split("&") : 0,
                m, p, k, e = 0;
            if (g)
                for (m = 0; m < g.length; m++) p = g[m].split("="), f = a.unescape(p[0]).split(","), p = a.unescape(p[1]), b[p] = f;
            f = a.account.split(",");
            if (c || a.e) {
                c &&
                    !a.e && (e = 1);
                for (p in b)
                    if (!Object.prototype[p])
                        for (m = 0; m < f.length; m++)
                            for (e && (k = b[p].join(","), k == a.account && (a.e += ("&" != p.charAt(0) ? "&" : "") + p, b[p] = [], d = 1)), g = 0; g < b[p].length; g++) k = b[p][g], k == f[m] && (e && (a.e += "&u=" + a.escape(k) + ("&" != p.charAt(0) ? "&" : "") + p + "&u=0"), b[p].splice(g, 1), d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    m = 2;
                    !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), m = 1);
                    for (p in b) !Object.prototype[p] && 0 < m && 0 < b[p].length && (e += (e ? "&" : "") + a.escape(b[p].join(",")) + "=" + a.escape(p), m--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    };
    a.kb = function() {
        if (!a.wb) {
            var c = new Date,
                b = r.location,
                d, f, e = f = d = "",
                g = "",
                m = "",
                k = "1.2",
                n = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                q = "",
                s = "";
            if (c.setUTCDate && (k = "1.3", (0).toPrecision && (k = "1.5", c = [], c.forEach))) {
                k = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d), f.next && (k = "1.7", c.reduce && (k = "1.8", k.trim && (k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k = "1.8.5")))))
                } catch (t) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ?
                a.w.innerWidth : a.d.documentElement.offsetWidth;
            m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), q = a.b.Bb(b) ? "Y" : "N"
            } catch (u) {}
            try {
                a.b.addBehavior("#default#clientCaps"), s = a.b.connectionType
            } catch (x) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = k;
            a.javaEnabled = e;
            a.cookiesEnabled = n;
            a.browserWidth = g;
            a.browserHeight = m;
            a.connectionType = s;
            a.homepage = q;
            a.wb = 1
        }
    };
    a.L = {};
    a.loadModule = function(c, b) {
        var d = a.L[c];
        if (!d) {
            d = k["AppMeasurement_Module_" +
                c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.L[c] = a[c] = d;
            d.Oa = function() {
                return d.Sa
            };
            d.Ta = function(b) {
                if (d.Sa = b) a[c + "_onLoad"] = b, a.ba(c + "_onLoad", [a, d], 1) || b(a, d)
            };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.Oa,
                    set: d.Ta
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b, a.ba(c + "_onLoad", [a, d], 1) || b(a, d))
    };
    a.l = function(c) {
        var b, d;
        for (b in a.L)
            if (!Object.prototype[b] && (d = a.L[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
        return 0
    };
    a.mb = function() {
        var c =
            Math.floor(1E13 * Math.random()),
            b = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            f = a.cookieRead(d);
        if (b) {
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, c)) return 0;
                f = c
            }
            if (f % 1E4 > v) return 0
        }
        return 1
    };
    a.M = function(c, b) {
        var d, f, e, g, m, k;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.oa : a.c, e = 0; e < f.length; e++)
                if (g = f[e], (m = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (k in a[g]) m[k] || (m[k] = a[g][k]);
                    a[g] = m
                }
    };
    a.Ha = function(c, b) {
        var d,
            f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.oa : a.c, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    };
    a.eb = function(a) {
        var b, d, f, e, g, m = 0,
            k, n = "",
            q = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (k = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? m = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (m = ",p,ei,"),
                m && k)))) {
            if ((a = k.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= m.indexOf("," + e.substring(0, d) + ",") ? n += (n ? "&" : "") + e : q += (q ? "&" : "") + e;
                n && q ? k = n + "&" + q : q = ""
            }
            d = 253 - (k.length - q.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + k
        }
        return a
    };
    a.Na = function(c) {
        var b = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState);
                    "visible" == b && c()
                });
            return !1
        }
        return !0
    };
    a.Y = !1;
    a.D = !1;
    a.Ua = function() {
        a.D = !0;
        a.i()
    };
    a.W = !1;
    a.Q = !1;
    a.Ra = function(c) {
        a.marketingCloudVisitorID = c;
        a.Q = !0;
        a.i()
    };
    a.T = !1;
    a.N = !1;
    a.Ja = function(c) {
        a.analyticsVisitorID = c;
        a.N = !0;
        a.i()
    };
    a.V = !1;
    a.P = !1;
    a.La = function(c) {
        a.audienceManagerLocationHint = c;
        a.P = !0;
        a.i()
    };
    a.U = !1;
    a.O = !1;
    a.Ka = function(c) {
        a.audienceManagerBlob = c;
        a.O = !0;
        a.i()
    };
    a.Ma = function(c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.l("_d") ? (c && setTimeout(function() {
            c()
        }, a.maxDelay), !1) : !0
    };
    a.X = !1;
    a.C = !1;
    a.na = function() {
        a.C = !0;
        a.i()
    };
    a.isReadyToTrack = function() {
        var c = !0,
            b = a.visitor;
        a.Y || a.D || (a.Na(a.Ua) ? a.D = !0 : a.Y = !0);
        if (a.Y && !a.D) return !1;
        b && b.isAllowed() && (a.W || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.W = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Ra]), a.marketingCloudVisitorID && (a.Q = !0)), a.T || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.T = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Ja]), a.analyticsVisitorID && (a.N = !0)), a.V ||
            a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.V = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.La]), a.audienceManagerLocationHint && (a.P = !0)), a.U || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.U = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ka]), a.audienceManagerBlob && (a.O = !0)), a.W && !a.Q && !a.marketingCloudVisitorID || a.T && !a.N && !a.analyticsVisitorID || a.V && !a.P && !a.audienceManagerLocationHint || a.U && !a.O && !a.audienceManagerBlob) && (c = !1);
        a.X ||
            a.C || (a.Ma(a.na) ? a.C = !0 : a.X = !0);
        a.X && !a.C && (c = !1);
        return c
    };
    a.k = q;
    a.o = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.Ya = c;
        f.Xa = b;
        f.Va = d;
        a.k == q && (a.k = []);
        a.k.push(f);
        0 == a.o && (a.o = setInterval(a.i, 100))
    };
    a.i = function() {
        var c;
        if (a.isReadyToTrack() && (a.o && (clearInterval(a.o), a.o = 0), a.k != q))
            for (; 0 < a.k.length;) c = a.k.shift(), c.Xa.apply(c.Ya, c.Va)
    };
    a.Pa = function(c) {
        var b, d, f = q,
            e = q;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != q)
                for (d in f = {}, c) f[d] = c[d];
            e = {};
            a.Ha(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a,
                a.track, b);
            return !0
        }
        return !1
    };
    a.hb = function() {
        var c = a.cookieRead("s_fid"),
            b = "",
            d = "",
            f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    };
    a.t = a.track = function(c, b) {
        var d, f = new Date,
            e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
            g = f.getYear(),
            g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() +
                "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && (a.visitor.fb && (a.authState = a.visitor.fb()), !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)));
        a.l("_s");
        a.Pa(c) || (b && a.M(b), c && (d = {}, a.Ha(d, 0), a.M(c)), a.mb() && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.hb()), a.rb(), a.usePlugins && a.doPlugins &&
            a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Ia || (a.referrer = r.document.referrer), a.Ia = 1, a.referrer = a.eb(a.referrer), a.l("_g")), a.jb() && !a.abort && (a.kb(), g += a.ib(), a.qb(e, g), a.l("_t"), a.referrer = ""))), c && a.M(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e =
            a.lightProfileID = 0
    };
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && (a.j = c, a.q = e);
        return a.track(f)
    };
    a.trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.c.length; c++)
            if (b = a.c[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" ==
                b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0
    };
    a.tagContainerMarker = "";
    a.qb = function(c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc,
            g = "sc.",
            k = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (k || (k = a.account, f = k.indexOf(","), 0 <= f && (k = k.substring(0, f)), k = k.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = k + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement &&
            a.AudienceManagement.isReady();
        d += f + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.vb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].AudienceManagement.passData&" : "") + b + "&AQE=1";
        a.bb(d);
        a.da()
    };
    a.bb = function(c) {
        a.g || a.lb();
        a.g.push(c);
        a.fa = a.r();
        a.Fa()
    };
    a.lb = function() {
        a.g = a.nb();
        a.g || (a.g = [])
    };
    a.nb = function() {
        var c, b;
        if (a.ka()) {
            try {
                (b = k.localStorage.getItem(a.ia())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    };
    a.ka = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
        return c
    };
    a.wa = function() {
        var c = 0;
        a.g && (c = a.g.length);
        a.v && c++;
        return c
    };
    a.da = function() {
        if (!a.v)
            if (a.xa = q, a.ja) a.fa > a.J && a.Da(a.g), a.ma(500);
            else {
                var c = a.Wa();
                if (0 < c) a.ma(c);
                else if (c = a.ua()) a.v = 1, a.pb(c), a.tb(c)
            }
    };
    a.ma = function(c) {
        a.xa || (c || (c = 0), a.xa = setTimeout(a.da, c))
    };
    a.Wa = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
        c = a.r() - a.Ca;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay -
            c
    };
    a.ua = function() {
        if (0 < a.g.length) return a.g.shift()
    };
    a.pb = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
            a.ob(b)
        }
    };
    a.Qa = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    };
    a.S = !1;
    var s;
    try {
        s = JSON.parse('{"x":"y"}')
    } catch (x) {
        s = null
    }
    s && "y" == s.x ? (a.S = !0, a.R = function(a) {
        return JSON.parse(a)
    }) : k.$ && k.$.parseJSON ? (a.R = function(a) {
        return k.$.parseJSON(a)
    }, a.S = !0) : a.R = function() {
        return null
    };
    a.tb = function(c) {
        var b,
            d, f;
        a.Qa() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && a.AudienceManagement && a.AudienceManagement.isReady() && (a.S ? b.pa = !0 : b = 0));
        !b && a.Ga && (c = c.substring(0, 2047));
        !b && a.d.createElement && a.AudienceManagement && a.AudienceManagement.isReady() && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript",
            b.setAttribute("async", "async"), d = 3) : b = 0);
        b || (b = new Image, b.alt = "");
        b.ra = function() {
            try {
                a.la && (clearTimeout(a.la), a.la = 0), b.timeout && (clearTimeout(b.timeout), b.timeout = 0)
            } catch (c) {}
        };
        b.onload = b.ub = function() {
            b.ra();
            a.ab();
            a.Z();
            a.v = 0;
            a.da();
            if (b.pa) {
                b.pa = !1;
                try {
                    var c = a.R(b.responseText);
                    AudienceManagement.passData(c)
                } catch (d) {}
            }
        };
        b.onabort = b.onerror = b.cb = function() {
            b.ra();
            (a.trackOffline || a.ja) && a.v && a.g.unshift(a.$a);
            a.v = 0;
            a.fa > a.J && a.Da(a.g);
            a.Z();
            a.ma(500)
        };
        b.onreadystatechange = function() {
            4 == b.readyState &&
                (200 == b.status ? b.ub() : b.cb())
        };
        a.Ca = a.r();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Aa) try {
                f.removeChild(a.Aa)
            } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Aa = a.Za
        }
        b.abort && (a.la = setTimeout(b.abort, 5E3));
        a.$a = c;
        a.Za = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.F || a.q) a.forcedLinkTrackingTimeout ||
            (a.forcedLinkTrackingTimeout = 250), a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout)
    };
    a.ab = function() {
        if (a.ka() && !(a.Ba > a.J)) try {
            k.localStorage.removeItem(a.ia()), a.Ba = a.r()
        } catch (c) {}
    };
    a.Da = function(c) {
        if (a.ka()) {
            a.Fa();
            try {
                k.localStorage.setItem(a.ia(), k.JSON.stringify(c)), a.J = a.r()
            } catch (b) {}
        }
    };
    a.Fa = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.g.length > a.offlineLimit;) a.ua()
        }
    };
    a.forceOffline = function() {
        a.ja = !0
    };
    a.forceOnline = function() {
        a.ja = !1
    };
    a.ia =
        function() {
            return a.offlineFilename + "-" + a.visitorNamespace + a.account
        };
    a.r = function() {
        return (new Date).getTime()
    };
    a.ya = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    };
    a.setTagContainer = function(c) {
        var b, d, f;
        a.vb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                a.M(d);
                if (d.lmq)
                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f],
                                f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                break
            }
    };
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d) {
            var f;
            b || (b = a.pageURL ? a.pageURL : k.location);
            d || (d = "&");
            return c &&
                b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f + d.length + c.length + 1), f = b.indexOf(d), 0 <= f && (b = b.substring(0, f)), 0 < b.length))) ? a.unescape(b) : ""
        }
    };
    a.A = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");
    a.c = a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.ga = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.K = a.ga.slice(0);
    a.oa = "account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
    for (n = 0; 250 >= n; n++) 76 > n && (a.c.push("prop" + n), a.K.push("prop" + n)), a.c.push("eVar" + n), a.K.push("eVar" + n), 6 > n && a.c.push("hier" + n), 4 > n && a.c.push("list" + n);
    n = "latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");
    a.c = a.c.concat(n);
    a.A = a.A.concat(n);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Ca = 0;
    a.fa = 0;
    a.J = 0;
    a.Ba = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
        if (a.Ga = !1, navigator) {
            var y = navigator.userAgent;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= y.indexOf("MSIE ") || 0 <= y.indexOf("Trident/") && 0 <= y.indexOf("Windows NT 6")) a.Ga = !0
        }
    } catch (z) {}
    a.Z = function() {
        a.aa && (k.clearTimeout(a.aa), a.aa = q);
        a.j && a.F && a.j.dispatchEvent(a.F);
        a.q && ("function" == typeof a.q ? a.q() : a.j && a.j.href && (a.d.location = a.j.href));
        a.j =
            a.F = a.q = 0
    };
    a.Ea = function() {
        a.b = a.d.body;
        a.b ? (a.p = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.qa)
                    if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.p, !1);
                    else {
                        a.b.removeEventListener("click", a.p, !0);
                        a.qa = a.useForcedLinkTracking = 0;
                        return
                    } else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.I && a.I == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject =
                        0;
                    else {
                        var m = a.I = a.clickObject;
                        a.ea && (clearTimeout(a.ea), a.ea = 0);
                        a.ea = setTimeout(function() {
                            a.I == m && (a.I = 0)
                        }, 1E4);
                        f = a.wa();
                        a.track();
                        if (f < a.wa() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                            if (e && (g = e.href, a.ya(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (n) {
                                    b = new k.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click",
                                            c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (q) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.j = c.target, a.F = b)
                                }
                            }
                        }
                    }
                } catch (r) {
                    a.clickObject = 0
                }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.p) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") &&
            k.MouseEvent) && (a.qa = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.p, !0)), a.b.addEventListener("click", a.p, !1))) : setTimeout(a.Ea, 30)
    };
    a.Ea()
}

function s_gi(a) {
    var k, q = window.s_c_il,
        r, n, t = a.split(","),
        u, s, x = 0;
    if (q)
        for (r = 0; !x && r < q.length;) {
            k = q[r];
            if ("s_c" == k._c && (k.account || k.oun))
                if (k.account && k.account == a) x = 1;
                else
                    for (n = k.account ? k.account : k.oun, n = k.allAccounts ? k.allAccounts : n.split(","), u = 0; u < t.length; u++)
                        for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
            r++
        }
    x || (k = new AppMeasurement);
    k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
    return k
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);

function s_pgicq() {
    var a = window,
        k = a.s_giq,
        q, r, n;
    if (k)
        for (q = 0; q < k.length; q++) r = k[q], n = s_gi(r.oun), n.setAccount(r.un), n.setTagContainer(r.tagContainerName);
    a.s_giq = 0
}
s_pgicq();