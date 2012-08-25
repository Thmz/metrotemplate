<?PHP
/* CONFIG SETTINGS - change for your needs */
$siteTitle = 'Metro UI Template'; /* will be displayed above the url-bar */
$siteName = 'Metro UI Template'; /* The biggest title on your homepage */
$siteTitleHome = 'Create windows 8-style websites with ease'; // will be displayed above the url-bar when the home-page is open
$siteFooter = '©Thomas Verelst';

/*Must be the same as the pageLink array in js/config.js ! For SEO optimization (tip: first create the array in config.js, then copy it here and place a $-sign in front of every line */
$pageLink = array();
$pageLink['About'] = 'about.php';
$pageLink['Changelog'] = 'changelog.php';
$pageLink['Tutorial'] = 'tutorial.php';
$pageLink['FAQ'] = 'faq.php';
$pageLink['Contact'] = 'contact.php';
$pageLink['Terms of Use'] = 'termsofuse.php';
$pageLink['Donate'] = 'donate.php';
$pageLink['Fixes'] = 'fixes.php';


/*BACKGROUND OPTIONS*/
$enableBackgroundImg = false; // set false for only backgroundColor
$backgroundImg = 'img/background.jpg'; // your background image path
$backgroundColor =  '#CCC'; // you MUST fill in background-color that has about the same color as your background image, to prevent flickering!

/*YOUR LOGIN FOR ADMIN SECTION, access it on http:/yoursite.com/admin/ */
$adminLogin = 'user';
$adminPassword = 'pass';

/*COMPRESSING */
$enableCompressionCss =false; // compress and combine CSS files? See the admin section and tutorial on http://metro-webdesign.info before enabling this!
$enableCompressionJs = false; // compress and combine Javascript files? See the admin section and tutorial on http://metro-webdesign.info before enabling this!
?>
