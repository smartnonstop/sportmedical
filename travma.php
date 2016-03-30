<?php

require_once "php/Database.php";

$type = isset($_GET['type'])? $_GET['type'] : "sport";
$id = isset($_GET['n'])? (int)$_GET['n'] : die("Server error");

$db = new Database();
$travma = $db->getTravmaById($id);
$name_travmi = $db->getNameTravmiById($travma->getIdKind());





?>


 <!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <title>SportMedical - Первый портал спортивной медицины</title>

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8" />
    <meta name="description" content="The leading source for trustworthy and timely health and medical news and information. Providing credible health information, supportive community, and educational services by blending award-winning expertise in content, community services, expert commentary, and medical review." />
    <meta name="keywords" content="WebMD,www.webmd.com,web md,health,pregnancy,medical research,medical information/webm,prevention,disease,health care,healthcare,health information,health news,healthcare information,drug information,cancer,diabetes,depression,asthma,medical library,cholesterol,herpes,bipolar,diet,weight loss" />
    <meta http-equiv="CACHE-CONTROL" content="NO-CACHE" />

    <meta property="og:title" content="WebMD - Better information. Better health." />
    <meta property="og:description" content="The leading source for trustworthy and timely health and medical news and information. Providing credible health information, supportive community, and educational services by blending award-winning expertise in content, community services, expert commentary, and medical review." />
    <meta property="og:image" content="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/logos/webmd/web/webmd-logo-fb.jpg" />
    <meta property="og:url" content="http://www.webmd.com/default.htm" />
    <meta property="og:site_name" content="WebMD" />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en_US" />
    <meta property="fb:app_id" content="385978254785998" />
    <meta property="article:author" content="https://www.facebook.com/WebMD" />
    <meta property="article:publisher" content="https://www.facebook.com/WebMD" />

    <script class="googleloaded">
        if ((typeof document.domain !== "undefined") && (document.domain.toLowerCase().indexOf("fit.") < 0) && (document.domain.toLowerCase().indexOf(".webmd.boots.com") < 0)) {
            var $googleloaded = true;
            setTimeout(function() {
                var gads, node, useSSL;

                // Asynchronously load the google code
                gads = document.createElement("script");
                gads.async = true;
                gads.type = "text/javascript";
                useSSL = "https:" === document.location.protocol;
                gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                node = document.getElementsByTagName("script")[0];
                node.parentNode.insertBefore(gads, node);
            });
        }
    </script>
    <script type="text/javascript">
        var s_topic = "1728",
            s_business_reference = "Nav - Home Page",
            s_publication_source = "WebMD Information Page",
            s_sponsor_brand = "",
            s_sponsor_program = "",
            s_package_type = "homepage",
            s_package_name = "Home Page",
            s_channel_super_portal = "",
            s_channel_health = "",
            s_channel_topic_miniguide_guide = "",
            s_channel_mini = "",
            s_channel_micro = "",
            s_tug = "",
            s_topic_dir = "",
            s_mrt = "",
            s_site = "core",
            s_assetname = "",
            s_searchterm = "",
            image_server_url = "http://img.webmd.com/dtmcms/live",
            s_sensitive = "false",
            s_mblv = "false",
            s_tagemax = "",
            s_tagemin = "",
            s_cuih = "",
            s_cuil = "",
            s_cuim = "",
            s_sbtyp = "",
            s_tgender = "",
            s_furl = "/",
            s_uk_user = "false",
            s_account = "webmdcom",
            s_server_type = "1b",
            s_server = "WFAWS14L-CON-08",
            s_object_type = "wbmd_pb_page",
            s_page_number = "",
            s_site_class = "ooc",
            s_sponsored_uri = "default.htm",
            s_pagename = "www.webmd.com/default.htm",
            s_channel = "",
            s_intended_demographics = "__",
            s_stage_condition = "",
            s_asset_id = "091e9c5e80eff7b3",
            s_unique_id = "091e9c5e80eff7b3",
            s_company = "webmd",
            s_refpath = "";
    </script>

    <link rel="alternate" type="application/rss+xml" title="RSS" href="http://rssfeeds.webmd.com/rss/rss.aspx?RSSSource=RSS_PUBLIC" />
    <link rel="alternate" media="only screen and (max-width: 640px)" href="http://www.m.webmd.com/default.htm" />
    <link rel="canonical" href="http://www.webmd.com/default.htm" />
    <link rel="shortcut icon" href="http://img.webmd.com/dtmcms/live/images/favicon/webmd.ico" />
    <link rel="apple-touch-icon-precomposed" type="text/css" href="/favico/apple-touch-icon-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" type="text/css" sizes="72x72" href="/favico/apple-touch-icon-72x72-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" type="text/css" sizes="114x114" href="/favico/apple-touch-icon-114x114-precomposed.png" />

    <!--<link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS/Site/WebMD_091e9c5e8004a22461.css" />
    <link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS/Flexible_Layout_CSS/Runtime/2_column_layout_harmony22.css" />

    <link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS_Aggr/Harmony Flexible Layout Base Template_091e9c5e80edcfbd/template_Harmony Flexible Layout Base Template_091e9c5e80edcfbd_tmodules_css_570.css" />
    <link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS_Aggr/Homepage 2014_091e9c5e80eff7b3/page_Homepage 2014_091e9c5e80eff7b3_pmodules_css_4288.css" />
    <link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS/Navigation/Masthead/masthead7.css" />
    <link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS/Template/Harmony Flexible Layout Base Template_091e9c5e80fd052627.css" />
    <link rel="stylesheet" href="http://css.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/CSS/Page/Harmony Homepage 2014_091e9c5e80f299252536.css" />

    <script type="text/javascript" src="http://img.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/JS/harmony/scripts_harmony59.js"></script>
    <script type="text/javascript" src="http://img.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/JS/tablet/webmd.useragent.responsive3.js"></script>
    <script type="text/javascript" src="http://img.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/JS/masthead50.js"></script>
    <script type="text/javascript" src="http://img.webmd.com/dtmcms/live/webmd/PageBuilder_Assets/JS/oas71.js"></script>-->

        <link rel="stylesheet" href="css/first.css"/>
        <link rel="stylesheet" href="css/second.css"/>
        <link rel="stylesheet" href="css/third.css"/>
        <link rel="stylesheet" href="css/four.css"/>
        <link rel="stylesheet" href="css/five.css"/>
        <link rel="stylesheet" href="css/six.css"/>
        <link rel="stylesheet" href="css/seven.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">


        <script type="text/javascript" src="js/first.js"></script>
        <script type="text/javascript" src="js/second.js"></script><!--Беспонтовый-->
        <script type="text/javascript" src="js/third.js"></script>
        <script type="text/javascript" src="js/four.js"></script><!--Беспонтовый-->
        
</head>

<body>
    <section id="s1" class="section">
        <div id="ContentPane1" class="pane">
            <script>
                // write mboxes for OTT
                if (window.$ && window.webmd && window.mboxCreate) {
                    if (window.webmd.mbox) {
                        webmd.mbox.init();
                    }
                }
            </script>
            <!-- ROMWidget ID:091e9c5e80edecd8.Missing error in GenerateAndCacheContent. Failed to get XSL from IXSLTProvider -->
        </div>
        <div id="ContentPane2" class="pane">
            <!--<ul><li>$adsystem = DFP</li><li>$pos = 101</li><li>$print = false</li></ul><ul><li>adtype = iFRAME</li><li>iframeheight = 90</li><li>iframewidth = 728</li><li>adserver = as.webmd.com</li></ul><ul><li>affiliate = 20</li><li>apg = 1728</li><li>artid = 091e9c5e80eff7b3</li><li>au1 = </li><li>au2 = </li><li>bc = __</li><li>brand = 0</li><li>cc = 83</li><li>env = &amp;env=0</li><li>hcent = </li><li>mcent = </li><li>micro = </li><li>pkg = &amp;leaf=1257</li><li>pos = 101</li><li>pug = __</li><li>scent = </li><li>sec = </li><li>segval = </li><li>site = 2</li><li>tile = 335705146</li><li>tmg = </li><li>transactionID = 690363899</li><li>tug = </li><li>uri = %2fdefault</li></ul>-->
            <script>
                var priTopId = '1728',
                    secTopId = '';
            </script>
            <!--<div id="bannerAd_rdr">
                <div class="bannerAd_top_fmt"></div>
                <div id="bannerAd_fmt" class="bannerAd_BG_fmt loaded">
                    <div id="ads2-pos-101-ad_banner" class="ad_placeholder"></div>
                </div>
            </div> этот блок убирает верхнюю рекламу-->
            <!--<script>
                webmd.ads2Consumer.defineAd({
                    targets: {
                        art: '091e9c5e80eff7b3',
                        cc: '83',
                        env: '&amp;env=0',
                        hcent: '',
                        leaf: '&amp;leaf=1257',
                        mcent: '',
                        mic: '',
                        pt: '1728',
                        sec: '',
                        pug: '__',
                        scent: '',
                        tmg: '',
                        tug: '',
                        uri: '%2fdefault'
                    },
                    blockCodes: '__',
                    id: 'ads2-pos-101-ad_banner',
                    pos: '101',
                    sizes: [
                        [728, 90],
                        [970, 90],
                        [970, 250]
                    ]
                });
            </script>этот скрипт убирает верхнюю рекламу-->
            <?php require_once "nav.php";?>
            <div class="masthead-scrollbar">
                <div class="masthead-scrollbar-inner">
                    <div class="masthead-scrollbar-logo">
                        <a href="http://www.webmd.com" class="masthead-scrollbar-logo-link" data-metrics-link="logo"><img src="img/sportmedical.png" class="navigation-globalnav-logo" alt="Sportmedical: Лучшая информация для вашего здоровья" title="Sportmedical: Лучшая информация для вашего здоровья"></a>
                    </div>
                    <div class="masthead-scrollbar-title2">
                        <p class="myapper" style="font-size:16px;">Первый портал спортивной медицины</p>
                    </div>
                    <form id="masthead-scrollbar-searchform" action="http://www.webmd.com/search/search_results/default.aspx" method="get" name="searchForm2" data-metrics-module="srch-bar">
                        <div id="masthead-scrollbar-search" class="masthead-scrollbar-searchform">
                            <input type="text" name="query" maxlength="180" value="" autocomplete="off" title="Enter Search Keywords" placeholder="Поиск" class="masthead-scrollbar-input typeahead-search">
                            <button type="submit" class="masthead-scrollbar-submit" data-metrics-link="sticky"><i class="fa fa-search"></i></button>
                            <ul class="masthead-search-results-list typeahead-output"></ul>
                        </div>
                    </form>
                    <div class="masthead-scrollbar-share">
                        <a href="#" style="font-size:30px; color:#003399;"><i class="fa fa-facebook-square"></i></a>
                        <a href="#" style="font-size:30px;"><i class="fa fa-twitter-square"></i></a>
                        <a href="#" style="font-size:30px; color:#D80000;"><i class="fa fa-google-plus-square"></i></a>

                    </div>
                    
                </div>
            </div>
            <div tabindex="0" id="main-content"></div>
            <script type="text/javascript">
                webmd.useragent.setupResponsive();
            </script>
        </div>

    </section>
    <div id="chrome" class="chrome">
        <section id="s2" class="section">
            <div id="ContentPane12" class="pane">
                <div class="heroWithCaption module" id="prm-hp" data-metrics-module="prm-hp" style="padding:20px;">
                    <div>
                        <a href="travmi.php?type=<?=$type;?>" style="display:inline;"><?=$name_travmi['nazva']?></a> / <?=$travma->getNazva()?>
                    </div>
                    
                    <div style="margin:20px 5px;">
                        <h2 style="color:black;"><?=$travma->getNazva()?></h2>
                    </div>
                    <div style="margin:0 5px;">
                        <?=$travma->getText();?>
                    </div>
                        
                     

       
                    
                </div>
            
            </div>
<?php require_once "rightbar.php";?>

        </section>
        <section id="s3" class="section">

            <div id="ContentPane21" class="pane">
                <?php require_once "bottomclinica.php";?>
            </div>

        </section>

    </div>
    <section id="s8" class="section">
        <div id="ContentPane64" class="pane">
            <footer>
                <div class="footerContent">
                    <div class="logo">
                                <a data-metrics-link="logo" href="" title="Sportmedical"><img src="img/sportmedical.png" alt="Sportmedical Logo" /></a> 
                                <span style="margin-left:50px;">&copy; Все права защищены 2016</span>
                    </div>
                </div>
            </footer>
        </div>

            
            
            

            <script type="text/javascript">
                (function() {
                    // duckpunching s_before_pv as some assets are using that vs our event driven system. This lets the event system get triggered as well as the other functions	
                    var _old = window.s_before_pv;

                    window.s_before_pv = function() {
                        var timestamp = Number(new Date());
                        if (window.location.protocol === 'http:') {
                            webmd.load({
                                image: '//b.scorecardresearch.com/b?c1=2&c2=6035829&c3=&c4=&c5=&c6=&c7=' + encodeURIComponent(window.location.href) + '&c9=' + encodeURIComponent(window.document.referrer) + '&c15=&cv=2.0&cj=1&cb=' + timestamp
                            });
                        }
                        if (window.location.protocol === 'https:') {
                            webmd.load({
                                image: '//sb.scorecardresearch.com/b?c1=2&c2=6035829&c3=&c4=&c5=&c6=&c7=' + encodeURIComponent(window.location.href) + '&c9=' + encodeURIComponent(window.document.referrer) + '&c15=&cv=2.0&cj=1&cb=' + timestamp
                            });
                        }

                        _old();
                    }

                    if (webmd && webmd.ads2Consumer) {

                        var $mainContainer = $('#mainContentContainer_area'),
                            _tmp = $('#bannerAd_rdr').clone(true),
                            isSymtomCheckerSEO = $('.symptoms_seo_titlebar').length > 0 ? true : false;

                        if ($mainContainer.length > 0) {
                            $('#bannerAd_rdr').remove();
                            $mainContainer.prepend(_tmp);
                        } else if ($('header').length > 0) {
                            $('#bannerAd_rdr').remove();
                            $(_tmp).insertAfter($('header').eq(0));
                        }

                        if (isSymtomCheckerSEO) {
                            $('html').addClass('rising-star-banner symptom-checker-seo');
                            $('#breadcrumb_ctr').append($('#bannerAd_rdr'));
                        } else {
                            $('html').addClass('rising-star-banner');
                        }

                        webmd.ads2Consumer.display();
                    }
                })();
            </script>
            
        </div>
        
    </section>
    <script type="text/javascript" src="js/five.js"></script>

    
</body>

</html>