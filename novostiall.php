<?php
require_once "php/Database.php";

$page = isset($_GET['p'])? intval($_GET['p']) : 1;
$db = new Database();

$news = $db->getNewsAll($page);
$pages_result = $db->pagesResultNewsAll();
$pages = ceil($pages_result/13);

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
            <div id="ContentPane10" class="pane"></div>
            <div id="ContentPane11" class="pane"></div>
            <div id="ContentPane12" class="pane">
                
                <div class="topStories module" id="head-hp">
                    <div class="module-header clearfix">
                        <h2>Новости</h2>
                       
                    </div>
                    <div class="module-content">
                        <?php if($page==1):?>
                        <div class="mainStory clearfix">
                            <a href="novostall.php?n=<?=$news[0]->getId();?>">
                                <div class="image-asset">
                                    <img src="<?=$news[0]->getImage();?>">
                                </div>
                            </a>
                            <a href="novostall.php?n=<?=$news[0]->getId();?>">
                                <div class="summary">
                                    <h3><?=$news[0]->getNazva();?></h3>
                                    <p></p>
                                </div>
                            </a>
                        </div>
                        <?php for($i=1;$i<count($news);$i++):?>
                        <ul class="subfeature">
                            <li>
                                <a href="novostall.php?n=<?=$news[$i]->getId();?>">
                                    <div class="image-asset">
                                        <img src="<?=$news[$i]->getImage();?>">
                                    </div>
                                    <h3><?=$news[$i]->getNazva();?></h3>
                                </a>
                            </li>
                        </ul>
                        <?php endfor;?>

                        <?php else:?>
                            <?php for($i=0;$i<count($news);$i++):?>
                                <ul class="subfeature">
                                    <li>
                                        <a href="novostall.php?n=<?=$news[$i]->getId();?>">
                                            <div class="image-asset">
                                                <img src="<?=$news[$i]->getImage();?>">
                                            </div>
                                            <h3><?=$news[$i]->getNazva();?></h3>
                                        </a>
                                    </li>
                                </ul>
                            <?php endfor;?>
                        <?php endif;?>
                    </div>
                </div>
                <div style="text-align:center;">
                    <?php if($page!=1):?>
                        <a href="novostiall.php?p=<?=$page-1;?>">назад</a>
                    <?php endif;?>
                    <?=$page;?> из <?=$pages;?>
                    <?php if($page!=$pages):?>
                        <a href="novostiall.php?p=<?=$page+1;?>">вперед</a>
                    <?php endif;?>
                </div>
            </div>
            <div id="ContentPane13" class="pane">
                <div class="module spotlight" id="ed-sptlghtcrsl-hp" data-metrics-module="ed-sptlghtcrsl-hp">
                    <div class="module-content">
                        <div class="slider single">
                            <div class="singleheader">
                                <div class="slide">
                                    <ul class="listHorizontal">
                                        <li class="thumb">
                                            <a class="block img clearfix" data-metrics-link="1" href="http://www.webmd.com/a-to-z-guides/video/mind-diet-foods">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/features/_2014/09_2014/eight_healthy_facts_about_kale_features/493x335_eight_healthy_facts_about_kale_features.jpg?resize=279:190" alt="bushel of kale" />
                                            </a>
                                            <a class="info clearfix" data-metrics-link="1" href="http://www.webmd.com/a-to-z-guides/video/mind-diet-foods">
                                                <h4>Video: MIND Diet for Alzheimer's</h4>
                                                <div class="text">Which foods should you eat?</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="thumbs">
                                <ul>
                                    <li>
                                        <a href="http://blogs.webmd.com/breaking-news/2016/02/we-can-handle-the-truth-the-facts-on-alzheimers.html" data-metrics-link="2">
                                            <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2016/01_2016/maria_shriver/79x79_maria_shriver.jpg" alt="maria shriver" />
                                            <div class="thumbtext">
                                                <div class="text">Alzheimer's Advocate Maria Shriver</div>
                                                <div class="action"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.webmd.com/news/breaking-news/confronting-alzheimers/heart-disease-alzheimers-risk" data-metrics-link="3">
                                            <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2011/12_2011/adhd_heart_stroke_risk/79x79_adhd_heart_stroke_risk.jpg" alt="human heart" />
                                            <div class="thumbtext">
                                                <div class="text">Video: How Are Heart and Brain Health Related?</div>
                                                <div class="action"></div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!--<ul><li>$adsystem = DFP</li><li>$pos = 121</li><li>$print = false</li></ul><ul><li>adtype = iFRAME</li><li>iframeheight = 250</li><li>iframewidth = 300</li><li>adserver = as.webmd.com</li></ul><ul><li>affiliate = 20</li><li>apg = 1728</li><li>artid = 091e9c5e80eff7b3</li><li>au1 = </li><li>au2 = </li><li>bc = __</li><li>brand = 0</li><li>cc = 83</li><li>env = &amp;env=0</li><li>hcent = </li><li>mcent = </li><li>micro = </li><li>pkg = &amp;leaf=1257</li><li>pos = 121</li><li>pug = __</li><li>scent = </li><li>sec = </li><li>segval = </li><li>site = 2</li><li>tile = 335705146</li><li>tmg = </li><li>transactionID = 690363899</li><li>tug = </li><li>uri = %2fdefault</li></ul>-->
                
                <div class="topSearchTerms module" id="lln-topsrch-hp" data-metrics-module="lln-topsrch-hp">
                    <div class="module-header">
                        <h2>Trending Topics</h2>
                    </div>
                    <div class="module-content">
                        <ul class="clearfix">
                            <li>
                                <a href="http://www.webmd.com/a-to-z-guides/zika-virus-symptoms-prevention" data-metrics-link="1">Zika Virus</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/skin-problems-and-treatments/illnesses-mosquito-bites" data-metrics-link="2">Mosquito Bites</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/parenting/baby/what-is-microcephaly" data-metrics-link="3">Microcephaly</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/brain/what-is-guillain-barre" data-metrics-link="4">Guillain-Barre</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/children/ss/slideshow-lice-overview" data-metrics-link="5">Lice</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/lung-cancer/ss/slideshow-lung-cancer-overview" data-metrics-link="6">Lung Cancer</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/ovarian-cancer/ss/slideshow-ovarian-cancer-overview" data-metrics-link="7">Ovarian Cancer</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/cold-and-flu/ss/slideshow-flu-symptoms-treatment" data-metrics-link="8">Flu Symptoms</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/skin-problems-and-treatments/eczema/ss/slideshow-eczema-overview" data-metrics-link="9">Eczema</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/diabetes/ss/slideshow-type-2-diabetes-overview" data-metrics-link="10">Diabetes Symptoms</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/vitamins-and-supplements/vitamin-b12-rm-quiz-html" data-metrics-link="11">B12 Deficiency</a>
                            </li>
                            <li>
                                <a href="http://www.webmd.com/cancer/throat-cancer-symptoms-treatments" data-metrics-link="12">Throat Cancer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="ContentPane14" class="pane"></div>
            <div id="ContentPane15" class="pane"></div>
            <div id="ContentPane16" class="pane"></div>
            <div id="ContentPane17" class="pane"></div>
            <div id="ContentPane18" class="pane"></div>
        </section>
        <section id="s3" class="section">
            <div id="ContentPane19" class="pane">    
            </div>
            <div id="ContentPane20" class="pane"></div>
            <div id="ContentPane21" class="pane">
                <div data-metrics-sel="li.thumb" class="module carousel" id="ed-lvnghlthy-hp" data-metrics-module="ed-lvnghlthy-hp">
                    <div class="module-header clearfix">
                        <h3>Топ клиник</h3>
                    </div>
                    <div class="module-content">
                        <div class="slider horizontal">
                            <div class="slides">
                                <div class="slide">
                                    <ul class="threeAcross listHorizontal">
                                        <li class="thumb thumb_1" id="x69">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/ticks_and_tickborne_diseases_in_dogs_ref_guide/493x335_ticks_and_tickborne_diseases_in_dogs_ref_guide.jpg?output-quality=80&amp;resize=275:187" alt="tick" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_2" id="x70">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/smoking_affects_your_appearance_slideshow/getty_rf_photo_of_woman_breaking_cigarette.jpg?output-quality=80&amp;resize=275:187" alt="Quit Smoking Now" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                               <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_3" id="x71">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/concentration_killers/493x335_concentration_killers.jpg?output-quality=80&amp;resize=275:187" alt="woman staring at social media" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_3" id="x71">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/concentration_killers/493x335_concentration_killers.jpg?output-quality=80&amp;resize=275:187" alt="woman staring at social media" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_3" id="x71">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/concentration_killers/493x335_concentration_killers.jpg?output-quality=80&amp;resize=275:187" alt="woman staring at social media" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_3" id="x71">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/concentration_killers/493x335_concentration_killers.jpg?output-quality=80&amp;resize=275:187" alt="woman staring at social media" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="slide">
                                    <ul class="threeAcross listHorizontal">
                                        <li class="thumb thumb_4" id="x72">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/habits_that_wreck_your_teeth_slideshow/getty_rm_photo_of_woman_eating_ice.jpg?output-quality=80&amp;resize=275:187" alt="person chewing ice" style="height:50px;" />
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_5" id="x73">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/features/lost_your_sex_drive_features/493x335_lost_your_sex_drive_features.jpg?output-quality=80&amp;resize=275:187" alt="couple in bed" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_6" id="x74">
                                            <a class="block img" href="">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/bad_bugs_slideshow/493x335_bad_bugs_slideshow.jpg?output-quality=80&amp;resize=275:187" alt="harvest mite" style="height:50px;"/>
                                            </a>
                                            <a href="">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_6" id="x74">
                                            <a class="block img" href="http://www.webmd.com/allergies/ss/slideshow-bad-bugs">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/bad_bugs_slideshow/493x335_bad_bugs_slideshow.jpg?output-quality=80&amp;resize=275:187" alt="harvest mite" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/allergies/ss/slideshow-bad-bugs">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_6" id="x74">
                                            <a class="block img" href="http://www.webmd.com/allergies/ss/slideshow-bad-bugs">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/bad_bugs_slideshow/493x335_bad_bugs_slideshow.jpg?output-quality=80&amp;resize=275:187" alt="harvest mite" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/allergies/ss/slideshow-bad-bugs">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_6" id="x74">
                                            <a class="block img" href="http://www.webmd.com/allergies/ss/slideshow-bad-bugs">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/bad_bugs_slideshow/493x335_bad_bugs_slideshow.jpg?output-quality=80&amp;resize=275:187" alt="harvest mite" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/allergies/ss/slideshow-bad-bugs">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="slide">
                                    <ul class="threeAcross listHorizontal">
                                        <li class="thumb thumb_7" id="x75">
                                            <a class="block img" href="http://www.webmd.com/beauty/hair-removal/rm-quiz-hair-removal">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/hair_removal_quiz_rmq/493x335_hair_removal_quiz_rmq.jpg?output-quality=80&amp;resize=275:187" alt="plucking eyebrows" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/beauty/hair-removal/rm-quiz-hair-removal">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_8" id="x76">
                                            <a class="block img" href="http://www.webmd.com/diet/rm-quiz-sugars-sweeteners">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/sugar_rmq/493x335_sugar_rmq.jpg?output-quality=80&amp;resize=275:187" alt="various sugars" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/diet/rm-quiz-sugars-sweeteners">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_9" id="x77">
                                            <a class="block img" href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/making_change_stick_rmq/493x335_making_change_stick_rmq.jpg?output-quality=80&amp;resize=275:187" alt="womans feet on road" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_9" id="x77">
                                            <a class="block img" href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/making_change_stick_rmq/493x335_making_change_stick_rmq.jpg?output-quality=80&amp;resize=275:187" alt="womans feet on road" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_9" id="x77">
                                            <a class="block img" href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/making_change_stick_rmq/493x335_making_change_stick_rmq.jpg?output-quality=80&amp;resize=275:187" alt="womans feet on road" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                        <li class="thumb thumb_9" id="x77">
                                            <a class="block img" href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <img src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/making_change_stick_rmq/493x335_making_change_stick_rmq.jpg?output-quality=80&amp;resize=275:187" alt="womans feet on road" style="height:50px;"/>
                                            </a>
                                            <a href="http://www.webmd.com/balance/rm-quiz-making-change-stick">
                                                <div class="title">Клиника</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    requirejs(['carousel/1/carousel'], function(carousel) {
                        carousel.init('ed-lvnghlthy-hp');
                    });
                </script>
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