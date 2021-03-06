<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
/* METRO UI TEMPLATE  - MOBILE VERSION v1.0.1
/* Copyright 2012 Thomas Verelst, http://metro-webdesign.info
/* Do not redistribute or sell this template, nor claim this is your own work. 
/* For commercial use, please donate */

require_once('config.php');

/* FILES for MOBILE*/
$cssFiles = array( /* Add your css files to this array */
	'css/main.css',
	'css/nav.css',
	'css/tiles.css',
	'themes/'.$theme.'/theme.css',
	'themes/'.$theme.'/theme_mobile.css',
	'css/your.css'
);
$jsFiles = array( /* Add your js files to this array */
	'js/config.js',
	'js/tiles.js',
	'mobi/js/tiles-mob.js',
	'mobi/js/inc/functions-mob.js',
	'mobi/js/inc/main-mob.js'
);
$iecss='themes/'.$theme.'/theme_mobile_ie.php'; 

$mobile=true;
require_once("mobi/compress.php");

/* FOR NO-JAVASCRIPT PEOPLE */
$doLoad = true;
if(isset($_GET['p'])){
	$doLoad = false;
	$page = 'pages/'.str_replace ('/','',str_replace ('..','',$_GET['p']));
}
if($enableNoJavascript){
	if(!file_exists("cache/no-js-mob.txt")){
		$createNoJS = 'true';
	}else{
		$createNoJS = 'false';		
	}
}else{
	$createNoJS = 'false';
}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="Description" content="<?php echo $siteMetaDesc;?>"/>
    <meta name="keywords" content="<?php echo $siteMetaKeywords;?>"/>
    <meta name="viewport" content="width=310,target-densitydpi=160,initial-scale=1.0,user-scalable=no">
	<title><?php echo $siteTitle;?></title>     
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'><!-- Include a nicce font -->
	<?php echo $css; if(file_exists($iecss)){include($iecss);};//include css lines?>  
    <script>
	siteTitle = "<?php echo $siteTitle;?>";
	siteTitleHome = "<?php echo $siteTitleHome;?>";
	createNoJS = "<?php echo $createNoJS;?>";
	theme = "<?php echo $theme?>";
	doLoad = "<?php echo $doLoad?>";
	</script>   
    <script type="text/javascript" language="javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> 
    <script type="text/javascript">window.jQuery || document.write('<script type="text/javascript" src="js/inc/jquery182.js"><\/script>')</script>
    <?php echo $js;//include js lines?>
    <?php echo $plHead;?>
</head>
<body>
<div id="headerWrapper">
	<div id="header">
	<h1><a id="siteTitle" href="mobile.php" onClick="javascript:window.location.hash='';$show.prepareHomePage();return false;"><?php echo $siteName?></a></h1>
   	<h2><?php echo $siteDesc;?></h2>
    <?php echo $plHeader;?>
    </div>
</div>
<div id="wrapperMobile">   
    <div id="contentWrapper">
    	<div id="subNavWrapper">
	    	<div id="subNav">
		    </div>
            <?php echo $plSubNavWrapper;?>
		</div>
	   	<div id="content">
			<?php
			if(isset($page)){
				include($page);
			}else if($createNoJS == 'false' && $enableNoJavascript==true){		
				include("cache/no-js-mob.txt");
			}
			?>
	    </div>
	    <div id="footer">
	    	<?php echo $siteFooter?>
	    </div>
        <?php echo $plContentWrapper;?>
    </div>
    <?php echo $plWrapper;?>
</div>
<?php echo $plBody;?>
</body>
</html>