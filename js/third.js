define("webmd.m.masthead-2015", function() {
    return webmd.m.globalnavigation = function($, window, document, undefined) {
        "use strict";

        function initDefaultVars() {
            defaults.$navGlobalSel = $(".masthead-nav-shell"), defaults.$navSel = $(".masthead-channelnav-shell"), defaults.$channelParentSel = $(".masthead-channelnav-list"), defaults.$channelSel = $(".masthead-channelnav-list > li"), defaults.$channelFlyoutSel = $(".masthead-channelnav-channel-flyout"), defaults.$navOverlay = $(".masthead-sitecontent-overlay"), defaults.$userbarNotLoggedInSel = $(".masthead-userlogin-notloggedin"), defaults.$userbarLoggedInSel = $(".masthead-userlogin-loggedin"), defaults.$userprofileNoNickSel = $(".userprofile-nonick-shell"), defaults.$userprofileNickSel = $(".userprofile-nick-shell"), defaults.$userprofileDwnArrowSel = $(".userprofile-downarrow"), defaults.$userprofileMoreOptsListSel = $(".userprofile-moreoptions-list"), defaults.$searchField = $(".masthead-search-input"), defaults.$upperShellOverlayTablet = $(".masthead-coveruserlinks-tablet"), defaults.$navCoverOverlayTablet = $(".masthead-channelnav-overlay-tablet"), defaults.$userprofilelinkClassName = $(".userprofile-nick-shell > .userprofile-link"), defaults.$searchResultsSel = $(".masthead-search-results-list"), defaults.$searchFieldSel = $(".masthead-search-input"), defaults.$signInSel = $(".masthead-reg-signin"), defaults.$signUpSel = $(".masthead-reg-signup")
        }

        function getDomainValues() {
            var env, memberEnvironments;
            return env = webmd.url.getEnv(), memberEnvironments = {
                ".perf": 1,
                ".devint": 1,
                ".qa00": 1,
                ".qa01": 1
            }, env && !memberEnvironments[env] && (env = ".perf"), ".perf" === env && $(function() {
                defaults.$userbarNotLoggedInSel.find("a").each(function() {
                    var href = $(this).attr("href");
                    /member\.webmd/.test(href) && $(this).attr("href", webmd.url.addLifecycleAndEnv(href, "http://www.perf.webmd.com"))
                })
            }), {
                env: env,
                member_url: "https://member" + env + ".webmd.com",
                url: window.location.href,
                signcookie: webmd.cookie.exists("WBMD_AUTH")
            }
        }

        function initSignIn() {
            var appid = webmd.appid || 1,
                signinUrl = domainValuesObj.member_url + "/signin",
                signupUrl = domainValuesObj.member_url + "/register";
            signinUrl = webmd.url.setParam("appid", appid, signinUrl), signinUrl = webmd.url.setParam("returl", domainValuesObj.url, signinUrl), defaults.$signInSel.attr("href", signinUrl), signupUrl = webmd.url.setParam("appid", appid, signupUrl), signupUrl = webmd.url.setParam("returl", domainValuesObj.url, signupUrl), defaults.$signUpSel.attr("href", signupUrl)
        }

        function initSearchPatch() {
            var environment = webmd.url.getEnv(),
                lifecycle = webmd.url.getLifecycle(),
                searchQuery = "",
                searchFormActionUrl = "",
                hasSearchResultsForm = $("#WebMDSearchResults").length ? !0 : !1;
            searchFormActionUrl = environment ? webmd.substitute("http://search{environment}.webmd.com/search/search_results/default.aspx", {
                environment: environment
            }) : webmd.substitute("http://www{lifecycle}.webmd.com/search/search_results/default.aspx", {
                lifecycle: lifecycle
            }), "pet_search" === window.s_filter && (searchFormActionUrl = webmd.url.setParam("searchtype", "pets", searchFormActionUrl)), hasSearchResultsForm && ($("#WebMDSearchResults").attr("data-metrics-module", "srch-bar"), $("#WebMDSearchResults").attr("method", "get"), $("#WebMDSearchResults").attr("action", searchFormActionUrl)), $("#WebMDSearchResults").on("submit", function(event) {
                searchQuery = $(".masthead-search-input").val(), "" != searchQuery && (window.location.href = webmd.url.setParam("query", searchQuery, searchFormActionUrl)), event.preventDefault()
            })
        }

        function closeFlyouts() {
            defaults.$channelSel.removeClass("is-on"), defaults.$channelFlyoutSel.removeClass("is-on"), defaults.$navOverlay.removeClass("is-on"), currOpenFlyoutIndex = ""
        }

        function closeSearchResults() {
            defaults.$searchResultsSel.css("display", "none"), defaults.$searchFieldSel.blur()
        }

        function openFlyout(flyoutIndex) {
            closeProfileFlyout(), closeSearchResults(), currOpenFlyoutIndex = flyoutIndex, defaults.$channelFlyoutSel.filter(function(index) {
                return index === flyoutIndex
            }).addClass("is-on"), offsetObj = defaults.$navGlobalSel.offset(), navHeaderHeight = parseInt(defaults.$navGlobalSel.css("height"), 10), navOverlayTopCoord = offsetObj.top + navHeaderHeight + "px", defaults.$navOverlay.css("top", navOverlayTopCoord), defaults.$navOverlay.addClass("is-on")
        }

        function addDesktopEventListeners() {
            defaults.$channelParentSel.on("mouseenter", "li", function(event) {
                flyoutIndex = parseInt($(this).attr("data-channel-id")), "" !== currOpenFlyoutIndex && currOpenFlyoutIndex !== flyoutIndex && closeFlyouts(), $(this).addClass("is-on"), openFlyout(flyoutIndex)
            }), defaults.$navSel.on("mouseleave", function(event) {
                var canICloseFlyout = !0;
                (event.relatedTarget || event.toElement) && (($(event.relatedTarget).hasClass("channel-flyout-shell") || $(event.relatedTarget).hasClass("channel-flyout-shell")) && (canICloseFlyout = !1), ($(event.relatedTarget).hasClass("masthead-channelnav-channel-flyout") || $(event.toElement).hasClass("masthead-channelnav-channel-flyout")) && (canICloseFlyout = !1), ($(event.relatedTarget).hasClass("channel-flyout-whitespace") || $(event.toElement).hasClass("channel-flyout-whitespace")) && (canICloseFlyout = !1), canICloseFlyout === !0 && closeFlyouts())
            }), defaults.$channelFlyoutSel.on("mouseleave", function(event) {
                (event.relatedTarget || event.toElement) && ($(event.relatedTarget).hasClass("masthead-channelnav-shell") && $(event.toElement).hasClass("masthead-channelnav-shell") || closeFlyouts())
            }), $(defaults.$navSel).on("mouseenter", function(event) {
                getProgrammedContent()
            })
        }

        function addTouchEventListeners() {
            defaults.$channelParentSel.on("click", "a", function(event) {
                event.preventDefault();
                var $channelParentSel = $(this).parent("li");
                flyoutIndex = parseInt($channelParentSel.attr("data-channel-id")), $channelParentSel.hasClass("is-on") ? closeFlyouts() : (closeFlyouts(), $channelParentSel.addClass("is-on"), openFlyout(flyoutIndex)), getProgrammedContent()
            }), $(defaults.$navOverlay).on("touchend", function() {
                closeFlyouts()
            })
        }

        function toggleUserProfileFlyout() {
            defaults.$userprofileMoreOptsListSel.hasClass("is-on") ? (defaults.$userprofileDwnArrowSel.removeClass("is-on"), defaults.$userprofileMoreOptsListSel.removeClass("is-on")) : (closeFlyouts(), defaults.$userprofileDwnArrowSel.addClass("is-on"), defaults.$userprofileMoreOptsListSel.addClass("is-on"))
        }

        function closeProfileFlyout() {
            defaults.$userprofileDwnArrowSel.removeClass("is-on"), defaults.$userprofileMoreOptsListSel.removeClass("is-on")
        }

        function addUserOptionsEventListener() {
            defaults.$userprofileDwnArrowSel.on("click", function(event) {
                event.preventDefault(), toggleUserProfileFlyout()
            })
        }

        function displayUserbar() {
            addUserOptionsEventListener(), domainValuesObj.signcookie ? (window.nickname ? (defaults.$userprofilelinkClassName.append(window.nickname), defaults.$userprofileNoNickSel.addClass("is-hidden"), defaults.$userprofileNickSel.removeClass("is-hidden")) : defaults.$userprofileNoNickSel.removeClass("is-hidden"), defaults.$userbarLoggedInSel.removeClass("is-hidden")) : defaults.$userbarNotLoggedInSel.removeClass("is-hidden")
        }

        function displayElement(elem, html) {
            var $elem = $("#" + elem);
            $elem.html(html)
        }

        function displayProgrammedContent(links, referencedObjects) {
            var protocol = "http://",
                chronicIdToLinks = $.extend({}, {
                    image_prefix: programmedLinks.image_prefix
                }),
                navTemplates = {
                    t1: "<a href='{{link_url.@chronic_id}}' class='readmore-link' data-metrics-link='{metricsCount}'>{link_text}</a>",
                    t2: "<a href='{{link_url.@chronic_id}}' class='readmore-link' data-metrics-link='{metricsCount}'><img src='{image_prefix}{link_source_icon.@path}' width='200' alt='{link_source_icon.@alt}' title='{link_source_icon.@alt}' class='readmore-img' /></a>\n<ul class='channel-flyout-readmore-list'><li><a href='{{link_url.@chronic_id}}' class='readmore-link' data-metrics-link='1'>{link_text}</a></li></ul>",
                    t3: "<a href='{{link_url.@chronic_id}}' class='readmore-link' data-metrics-link='{metricsCount}'><img src='{image_prefix}{link_source_icon.@path}' class='readmore-news-img' width='110' alt='{link_source_icon.@alt}' title='{link_source_icon.@alt}' /></a>\n<a href='{{link_url.@chronic_id}}' class='readmore-link' data-metrics-link='{metricsCount}'>{link_text}</a>"
                },
                elemList = [],
                currDataMetricsNum = 1;
            "https:" == window.location.protocol && (protocol = "https://"), $.each(referencedObjects, function(key, value) {
                if ("0" === value["@pointer"])
                    if ("undefined" != typeof value.target[0])
                        for (var c = 0; c < value.target.length; c++) "3" === value.target[c]["@siteid"] && (chronicIdToLinks[value["@chronic_id"]] = protocol + value.target[c]["@prefix"] + "." + programmedLinks.site + value.target[c]["@friendlyurl"]);
                    else chronicIdToLinks[value["@chronic_id"]] = protocol + value.target["@prefix"] + "." + programmedLinks.site + value.target["@friendlyurl"];
                else chronicIdToLinks[value["@chronic_id"]] = value.target["@friendlyurl"]
            }), $.each(links, function(key, value) {
                var elem = "pb" + key,
                    $elem = $("#" + elem);
                if (value.hasOwnProperty("action_text") ? currDataMetricsNum = 1 : ($.extend(value, {
                        metricsCount: currDataMetricsNum
                    }), currDataMetricsNum++), $elem.length) {
                    var html = webmd.substitute(navTemplates[programmedLinks.mapping[elem] || "t1"], value);
                    html = webmd.substitute(html, chronicIdToLinks), html = html.replace(/\{+[^\}]*\}+/g, ""), elemList[elemList.length] = elem, displayElement(elem, html)
                }
            })
        }

        function getProgrammedContent() {
            navContentLoaded || $.ajax({
                type: "GET",
                dataType: "json",
                url: "/api/repository/repositoryservice.svc/GetModuleXML",
                data: {
                    chronicleID: programmedLinks.chronicle_id
                },
                success: function(data) {
                    data && "undefined" != typeof data.webmd_rendition && (programmedLinks.site = data.webmd_rendition.resources.sites.site[0]["@domain"], programmedLinks.image_prefix = data.webmd_rendition.resources.ImageServerUrls.ImageServerUrl[0]["@url"], webmd.debug("Global nav content populated by ajax call."), displayProgrammedContent(data.webmd_rendition.content.wbmd_asset.webmd_module.module_data.links.link, data.webmd_rendition.referenced_objects.object)), navContentLoaded = !0
                },
                error: function() {
                    webmd.debug("Error loading chronic_id " + programmedLinks.chronicle_id)
                }
            })
        }

        function addSearchFieldTabletBehavior() {
            defaults.$searchField.attr("placeholder", ""), defaults.$searchField.on("focus", function(event) {
                closeFlyouts(), $(this).addClass("tabletexpanded"), defaults.$upperShellOverlayTablet.addClass("is-on"), defaults.$navCoverOverlayTablet.addClass("is-on")
            }), defaults.$searchField.on("focusout", function(event) {
                $(this).removeClass("tabletexpanded"), defaults.$upperShellOverlayTablet.removeClass("is-on"), defaults.$navCoverOverlayTablet.removeClass("is-on")
            })
        }

        function init() {
            initDefaultVars(), domainValuesObj = getDomainValues(), initSignIn(), initSearchPatch(), Modernizr.touch && $("html").hasClass("ua_type_tablet") ? (addTouchEventListeners(), addSearchFieldTabletBehavior()) : addDesktopEventListeners(), displayUserbar()
        }
        var defaults = {},
            flyoutIndex = "",
            currOpenFlyoutIndex = "",
            navHeaderHeight = "",
            navOverlayTopCoord = "",
            offsetObj = {},
            navContentLoaded = !1,
            domainValuesObj = {},
            programmedLinks = {
                mapping: {
                    pb11: "t2",
                    pb20: "t2",
                    pb29: "t3",
                    pb30: "t3"
                },
                chronicle_id: "091e9c5e80acf2b1",
                site: "",
                image_prefix: ""
            };
        return {
            init: init
        }
    }(jQuery, window, document), webmd.m.globalnavigation
}), require(["webmd.m.masthead-2015", "search/1/typeahead"], function(masthead, typeahead) {
    $(document).ready(function() {
        masthead.init(), typeahead.init("masthead-search-div")
    })
}), require.config({
    paths: {
        "webmd.m.masthead-legacy-main": "../../../PageBuilder_Assets/JS_static/masthead-legacy"
    },
    shim: {
        "webmd.m.masthead-legacy-main": {
            exports: "webmd.m.masthead-legacy-main"
        }
    }
}), define("webmd.m.masthead-legacy-css", function() {
    return webmd.m.mastheadLegacy = {
        init: function() {
            0 == $("link[href$='reg_hdr_styles.css']", "head").length && webmd.load({
                css: image_server_url + "/webmd/consumer_assets/site_images/registration/css/reg_hdr_styles.css",
                load: function() {
                    $(".login_rdr").parent().css("top", "0px")
                }
            })
        }
    }, webmd.m.mastheadLegacy
}), define("webmd.p.reg_data", function() {
    return webmd.p.reg_data = {
        services: {
            defaults: {
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                timeout: 1e4,
                type: "GET",
                cache: "false"
            },
            add_bookmark: function(linkURL) {
                var title = $(".add_bookmark_input").val(),
                    url = void 0 !== linkURL ? linkURL : document.URL,
                    host = "webmd" == window.location.host.split(".")[1] ? "member" : "member." + window.location.host.split(".")[1];
                url = url.replace("//", "//");
                var dataObj = {
                        title: title,
                        url: url
                    },
                    overrides = {
                        success: function(data) {
                            webmd.p.header.addBMSsuccess(), webmd.p.header.kill_cache()
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            var errorTxt = "There was an error in your request. Please try again later.",
                                response = jQuery.parseJSON(jqXHR.responseText);
                            if (response)
                                if (-1e3 == response.code) errorTxt = "This page has already been saved";
                                else if (-1001 == response.code) errorTxt = "There is already a saved item with that name.  Please type a new name.";
                            else if (-1002 == response.code) errorTxt = "You have exceeded the max amount of bookmarks.  Please delete some of the above in order to add more.";
                            else if (-2 == response.code) {
                                var appid, returl, href;
                                appid = webmd.appid || 1, returl = webmd.url.setParam("bookmark", "true"), href = "https://" + host + ".webmd.com/signin", href = webmd.url.setParam("appid", appid, href), href = webmd.url.setParam("returl", returl, href), errorTxt = webmd.substitute('Your session has ended. To protect your privacy, please <a class="signin_overlay_utn" href="{href}" onclick="return sl(this,\'\',\'reg-ovlylogin\');">sign in</a> again.', {
                                    href: href
                                })
                            }
                            webmd.p.header.showOverlayError(errorTxt)
                        },
                        type: "POST",
                        data: webmd.json.stringify(dataObj),
                        url: window.location.protocol + "//" + window.location.hostname + "/api/reg/Bookmarks.svc/json/add"
                    };
                return $.extend({}, this.defaults, overrides)
            }
        },
        supports_storage: function() {
            try {
                return "localStorage" in window && null !== window.localStorage
            } catch (e) {
                return !1
            }
        },
        bm_data: [],
        app_data: {}
    }, webmd.p.reg_data
}), define("webmd.p.header", function() {
    return webmd.p.header = {
        domain_vals: function() {
            prvwDmn = -1 != document.location.href.indexOf("preview.w") || -1 != document.location.href.indexOf("member.perf") ? "preview." : "", currDmn = -1 != document.location.href.indexOf("perf.w") ? "perf." : -1 != document.location.href.indexOf("qa00.w") ? "qa00." : -1 != document.location.href.indexOf("preview.w") ? "perf." : "";
            var member_url = "https://member." + currDmn + "webmd.com",
                signcookie = webmd.cookie.exists("WBMD_AUTH");
            return -1 == image_server_url.indexOf(currDmn) && image_server_url.indexOf("preview") < 0 && (image_server_url = image_server_url.replace("img.", "img." + currDmn)), {
                prvwDmn: prvwDmn,
                currDmn: currDmn,
                member_url: member_url,
                signcookie: signcookie
            }
        },
        addBMSsuccess: function() {
            webmd.overlay.close()
        },
        kill_cache: function() {
            var _data = webmd.p.reg_data;
            _data.supports_storage(), _data.bm_data.length = 0
        },
        cleanSession: function() {
            var _self = this,
                prevUrl = document.referrer,
                curHost = "";
            "" != prevUrl && (prevUrl = prevUrl.split("/")[2].split(".")[0]), curHost = window.location.host.split(".")[0], curHost != prevUrl && _self.kill_cache()
        },
        setup_page_header: function() {
            var _self = this,
                domain_vals = _self.domain_vals();
            if ($("#ctl00_ContentWell_Login_imgCmdSubmit").bind("click", function() {
                    _self.kill_cache()
                }), _self.cleanSession(), bookmark_link = $('<a title="Save" href="#" rel="nofollow">Save</a>'), $(bookmark_link).unbind("click").bind("click", function(e) {
                    e.preventDefault(), wmdPageLink("bkmrkpg"), webmd.p.header.bookmark_page()
                }), $("#headerLinks_print").length && hdr) {
                var bothHidden = $("#headerLinks_email").is(":visible") || $("#headerLinks_print").is(":visible") ? !1 : !0;
                if (!bothHidden) {
                    var targetLink = $(".headerLinks_fmt:last").is(":visible") ? $(".headerLinks_fmt:last") : $(".headerLinks_fmt:first");
                    targetLink.length < 1 && (targetLink = $("#breadcrumb_rdr")), $(bookmark_link).insertAfter(targetLink).wrap('<div class="headerLinks_fmt_on" id="headerLinks_pages" />')
                }
            } else hdr && -1 == location.host.indexOf("member.") && ($("#breadcrumb_rdr").length > 0 && $("#exchange-group-tools").length < 1 ? ($(bookmark_link).appendTo("#breadcrumb_rdr").wrap('<div class="headerLinks_fmt_on" id="headerLinks_pages" />'), $("#breadcrumb_rdr").css("width", "100%")) : $("#exchange-group-tools").length > 0 ? $(bookmark_link).insertAfter("#exchange-group-tools").wrap('<div class="headerLinks_fmt_on" id="headerLinks_pages" />') : $(bookmark_link).prependTo("#breadcrumb_ctr").wrap('<div class="headerLinks_fmt_on" id="headerLinks_pages" />'));
            if (webmd.url.getParam("retsub")) {
                var submitComplete = "";
                document.location.href.indexOf("/diet/") > -1 && (submitComplete = function() {
                    window.location.href = domain_vals.member_url + "/subscriptions.aspx"
                }, webmd.overlay = $.extend(webmd.overlay, {
                    close: function() {
                        $.fn.colorbox.close(), submitComplete()
                    }
                }))
            } else document.location.host.indexOf("vaccine") > -1 && document.referrer.indexOf("retsub=t") > -1 && (window.location.href = domain_vals.member_url + "/subscriptions.aspx")
        },
        is_overlay_loaded: function(show) {
            return webmd.p.registration || (webmd.p.registration = {}), 0 == $("link[href$='reg_hdr_styles.css']", "head").length && webmd.load({
                css: image_server_url + "/webmd/consumer_assets/site_images/registration/css/reg_hdr_styles.css",
                load: function() {
                    $(".login_rdr").parent().css("top", "0px")
                }
            }), webmd.p.registration.loginOverlay ? (show(), !0) : void webmd.load({
                js: image_server_url + "/webmd/PageBuilder_Assets/JS_static/registration/loginOverlay.js",
                load: function() {
                    show()
                }
            })
        },
        showOverlayError: function(message) {
            var _self = this;
            $(".overlay_error").length < 1 ? $('<p class="overlay_error">' + message + "</p>").insertAfter(".add_bookmark_rdr p:first") : $(".overlay_error").html(message), $(".add_bookmark_input", "#webmdHoverLoadedContent").css({
                border: "1px solid #EC1919",
                background: "#ffffff"
            }), _self.bindErrorLogin(), webmd.overlay.resize("height")
        },
        bindErrorLogin: function() {
            function showPromo() {
                var promoApp = webmd.p.header.getPromoApp(),
                    signin_params = {
                        appid: promoApp,
                        unAuth: !0
                    };
                webmd.p.registration.loginOverlay.show(signin_params)
            }
            $(".signin_overlay_utn").click(function(e) {
                e.preventDefault(), wmdPageLink("reg-ovlylogin"), is_overlay_loaded = webmd.p.header.is_overlay_loaded(showPromo), is_overlay_loaded && webmd.p.registration.loginOverlay.show(signin_params)
            })
        },
        bookmark_page: function(linkURL, text) {
            function showPromo() {
                if (webmd.p.registration.isLoggedIn()) show_bm_overlay();
                else {
                    var promoApp = webmd.p.header.getPromoApp(),
                        signin_params = {
                            appid: promoApp,
                            returl: webmd.url.addParam("bookmark", "true", document.location.href)
                        };
                    webmd.p.registration.loginOverlay.show(signin_params)
                }
            }

            function show_bm_overlay() {
                var bm_markup = '<div class="add_bookmark_rdr"><h2>Save to My WebMD Pages</h2><p>You can save this page with the current page title or you can create a new page title.</p><input type="text" class="add_bookmark_input" /><a href="#" id="add_bm_butn" class="webmd-btn webmd-btn-pr webmd-btn-s">Add</a><a href="#" id="cancel_bm_butn">Cancel</a></div>';
                webmd.overlay.open({
                    width: "550px",
                    html: bm_markup,
                    onComplete: function() {
                        var bookMarkTitle = void 0 !== text ? text : document.title;
                        $("#cancel_bm_butn").click(function(e) {
                            e.preventDefault(), webmd.overlay.close()
                        }), $(".add_bookmark_input").val(bookMarkTitle).focus(function() {
                            $(this).data("o_val", $(this).val())
                        }).blur(function() {
                            "" == $(this).val() && $(this).val($(this).data("o_val"))
                        }), $("#add_bm_butn").unbind("click").bind("click", function(e) {
                            e.preventDefault(), xhr = $.ajax(_data.services.add_bookmark(linkURL)), wmdPageLink("bkmrk-ovly-add_sub")
                        })
                    }
                })
            }
            var _data = webmd.p.reg_data;
            is_overlay_loaded = webmd.p.header.is_overlay_loaded(showPromo), is_overlay_loaded && (webmd.p.registration.isLoggedIn() ? (wmdPageLink("bkmrk-ovly-imp"), show_bm_overlay()) : promo = showPromo)
        },
        getPromoApp: function() {
            var promoApp = 1;
            return promoApp = window.location.pathname.indexOf("/magazine/") > -1 ? 6 : promoApp, promoApp = window.location.host.indexOf("exchanges") > -1 ? 5 : promoApp
        },
        regHdOpt: {
            speed: {
                i: 300,
                o: 250
            },
            delay: 300,
            leave: null,
            enter: null,
            tt: null,
            typing: !1
        }
    }, webmd.p.header
}), webmd.object.set("webmd.p.header"), webmd.object.set("webmd.p.reg_data"), require(["webmd.p.header", "webmd.p.reg_data"], function(header, regData) {}), $(document).ready(function() {
    void 0 === window.s_package_type || "exchange - nosp" !== window.s_package_type && "answers - nosp" !== window.s_package_type && "symptom checker - nosp" !== window.s_package_type || require(["webmd.m.masthead-legacy-css", "webmd.m.masthead-legacy-main"], function(mastheadLegacyCSS, mastheadLegacyMain) {
        mastheadLegacyCSS.init(), webmd.p.masthead.init()
    })
}), webmd.object.set("webmd.m.masthead.scrollbar"), webmd.m.masthead.scrollbar = {
    init: function() {
        "use strict";
        webmd.debug("|||||||||| webmd.m.masthead.scrollbar ----->", "init");
        var $mastheadScrollbar = $(".masthead-scrollbar"),
            isExcluded = this.excludeScrollbar($mastheadScrollbar);
        isExcluded !== !0 && (this.enablePlugin(), this.enableScrollbar($mastheadScrollbar))
    },
    excludeScrollbar: function($mastheadScrollbar) {
        var excludeAsset = !1;
        return 0 === $mastheadScrollbar.length && (webmd.debug("|||||||||| webmd.m.masthead.scrollbar ----->", "scrollbar not present"), excludeAsset = !0), $("html").hasClass("ua_type_mobile") && (excludeAsset = !0), "true" === webmd.url.getParam("print") && (excludeAsset = !0), void 0 !== window.s_pub && "webmd member services center" === window.s_pub.toLowerCase() && (excludeAsset = !0), void 0 !== window.s_asset_type && "search" === window.s_asset_type.toLowerCase() && (excludeAsset = !0), (void 0 !== window.s_sponsor_brand && "" !== window.s_sponsor_brand || void 0 !== window.s_sponsor_program && "" !== window.s_sponsor_program) && (excludeAsset = !0), (void 0 !== window.s_topic && 4121 === window.s_topic || void 0 !== window.s_publication_source && "WebMD Sponsor: Sponsor" === window.s_publication_source || void 0 !== window.s_publication_source && "Video Sponsored Content - WebMD" === window.s_publication_source) && (excludeAsset = !0), void 0 !== window.s_package_name && "Brandcast" === window.s_package_name && (excludeAsset = !0), -1 !== window.location.href.indexOf("about-webmd-policies") && (excludeAsset = !0), excludeAsset
    },
    enablePlugin: function() {
        $.fn.inView = function() {
            var win = $(window),
                obj = $(this),
                scrollPosition = win.scrollTop(),
                visibleArea = win.scrollTop() + win.height(),
                objEndPos = obj.offset().top + obj.outerHeight(!1);
            return visibleArea >= objEndPos && objEndPos >= scrollPosition ? !0 : !1
        }
    },
    enableScrollbar: function($mastheadScrollbar) {
        var isSearching, $bannerAd = $("#bannerAd_rdr"),
            $masthead = $(".masthead-shell"),
            $triggerElement = $bannerAd.length > 0 ? $bannerAd : $masthead,
            shareTitle = ($mastheadScrollbar.outerHeight(!0), $mastheadScrollbar.offset().top, $("meta[property='og:title']").attr("content") || $("title").html()),
            shareTitleCharCount = 45,
            lastWindowPos = 0;
        $($mastheadScrollbar).find("#masthead-scrollbar-search input").on({
            focus: function() {
                isSearching = !0
            },
            focusout: function() {
                isSearching = !1
            }
        }), shareTitle.length > shareTitleCharCount && (shareTitle = shareTitle.substring(0, shareTitleCharCount) + "..."), $($mastheadScrollbar).find(".masthead-scrollbar-title p").append(shareTitle), $(window).scroll(function() {
            var currentWindowPos = $(this).scrollTop();
            currentWindowPos > lastWindowPos && $triggerElement.inView() !== !0 && $($mastheadScrollbar).removeClass("scrollbar-unstuck").addClass("scrollbar-stuck"), isSearching !== !0 && lastWindowPos > currentWindowPos && $triggerElement.inView() === !0 && $($mastheadScrollbar).hasClass("scrollbar-stuck") && $($mastheadScrollbar).removeClass("scrollbar-stuck").addClass("scrollbar-unstuck"), lastWindowPos = currentWindowPos
        })
    }
}, $(function() {
    webmd.m.masthead.scrollbar.init(), require(["search/1/typeahead"], function(typeahead) {
        $(function() {
            typeahead.init("masthead-scrollbar-search")
        })
    }), $(".masthead-scrollbar-submit").on("click", function(e) {
        $("#masthead-scrollbar-searchform").submit(), e.preventDefault()
    })
}), require.config({
    paths: {
        "webmd.m.socialshareplugin": "socialshareplugin/1/webmd.m.socialshareplugin.min"
    }
}), $(document).ready(function() {
    require(["webmd.m.socialshareplugin", "css!socialshareplugin/1/socialshareplugin.min.css"], function(socialshare) {
        $("#js-scrollbar-share").socialshareplugin({
            baseHtmlTmpl: "<div class='plugin plugin-socialshare' data-metrics-module='sharebar-m'></div>"
        })
    })
});