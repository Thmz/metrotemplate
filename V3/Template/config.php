<?PHP
/* CONFIG SETTINGS - change this */
$siteTitle = 'Your website'; /* will be displayed above the url-bar */
$siteName = 'Your website'; /* The biggest title on your homepage */
$siteDesc ='A description of your site'; /*subtitle */
$siteTitleHome = 'Home'; // will be displayed above the url-bar when the home-page is open
$siteFooter = '©your name';

$siteMetaDesc = 'A description of your site for Google here';
$siteMetaKeywords = 'Some, keywords, seperated, by, kommas, here, max 10';

$theme = "theme_default"; // name of the subfolder in themes directory for the theme you want

$enableMobileVersion = true; // go to mobi/js/tiles-mob.js to edit the tile config for mobile browsers after your main site is done!!! check the tutorial please!
$enableNoJavascript = false; // ONLY FOR MOBILE VERSION; adds some features for people that have no javascript. Set to TRUE when the mobile version of your site is finished. This will create a file no-js-mob.txt in the compress folder. Changes wont be visible until you delete that file and reload the page. Always reload the page yourself after deleting that file! IF YOU DO NOT REFRESH IMMEDIATLY THE MOBILE PAGE AFTER REMOVING NO-JS-MOB.txt, IT CAN BE A HUGE POTENTIAL LEAK.



/*Must be the same as the pageLink array in js/config.js ! For SEO optimization (tip: first create the array in config.js, then copy it here and place a $-sign in front of every line */
$pageLink = array();
$pageLink['Typography'] = 'typography.php';
$pageLink['Slider example'] = 'sliders.php';
$pageLink['Images 1'] = 'myimages.html';
$pageLink['Images 2'] = 'otherimages.php';
$pageLink['Images 3'] = 'images3.php';
$pageLink['Terms of service'] = 'tos.php';

/*YOUR LOGIN FOR ADMIN SECTION, access it on http:/yoursite.com/admin/ */
$adminLogin = 'user';
$adminPassword = 'pass';

/*COMPRESSING */
$enableCompressionCss =false; // compress and combine CSS files? See the admin section and tutorial on http://metro-webdesign.info before enabling this!
$enableCompressionJs =false; // compress and combine Javascript files? See the admin section and tutorial on http://metro-webdesign.info before enabling this!

$autoFlush = true; // automaticly flush the cache when compression of JS or CSS is on and you have edited a file? When set to false, you'll have to manually flush the cache when you edited a file. Set to FALSE on slow servers to speed up page loading.
$autoFlushPlugins = true; // automaticly flush cache when plugins are changed? If you set this to FALSE, it's a good speed boost, but you'll have to remember to manually flush the cache from the amdin section if you update/change/add/remove a plugin. Only works if $autoFlush is enabled
?>
