<?php	
/* PLUGIN SYSTEM */
$jsPluginsArray = array("js/inc/plugins.js");
$cssPluginsArray = array();

$plHead = '';
$plHeader = '';
$plBody = '';
$plWrapper = '';
$plContentWrapper = '';
$plSubNavWrapper ='';

$folders = glob("plugins/" . "*");
foreach($folders as $folder){
	if(is_dir($folder)){
		if(file_exists($folder."/plugin.js")){
			$jsPluginsArray[] = $folder."/plugin.js";		
		}
		if(file_exists($folder."/plugin.css")){
			$cssPluginsArray[] = $folder."/plugin.css";		
		}
		if(file_exists($folder."/plugin.php")){
			include($folder."/plugin.php");
		}
	}
}

/* AUTO FLUSH CACHE SYSTEM */
if($autoFlush == true){
	if($autoFlushPlugins){
		$cssFiles = array_merge($cssFiles,$cssPluginsArray);
		$jsFiles = array_merge($jsPluginsArray,$jsFiles);
	}	
	$fileAge = 0;
	if($enableCompressionCss){
		foreach($cssFiles as $cssFile){
			$fileAge += filemtime($cssFile);
		}		
	}
	if($enableCompressionJs){
		foreach($jsFiles as $jsFile){
			$fileAge += filemtime($jsFile);
		}
	}
	if(file_exists("cache/latestedit-mob.txt")){
		$oldFileAge = file_get_contents("cache/latestedit-mob.txt");
		if($oldFileAge=="" || $fileAge>$oldFileAge){
			$handle = fopen("cache/latestedit-mob.txt", "w");
			fwrite($handle,$fileAge);
			flushCache();
		}
	}else{
		$handle = fopen("cache/latestedit-mob.txt", "w");
		fwrite($handle,$fileAge);
		flushCache();
	}
	if($autoFlushPlugins){
		if(file_exists("cache/compressfilescount-mob.txt")){
			$filesCount = file_get_contents("cache/compressfilescount-mob.txt");
			if($filesCount == "" || (int)$filesCount != count($cssFiles)*$enableCompressionCss+count($jsFiles)*$enableCompressionJs){
				flushCache();
			}
		}else{
			flushCache();
		}
	}
}

if(!$autoFlushPlugins){
	$cssFiles = array_merge($cssFiles,$cssPluginsArray);
	$jsFiles = array_merge($jsPluginsArray,$jsFiles);
}

/*CSS COMPRESS*/
$totalFiles = '';
$css = '';
if($enableCompressionCss){
	if(!file_exists("cache/compressed-mob.css")){
		$totalFilesHandle = fopen("cache/compressfilescount-mob.txt",'w');
		$handle = fopen("cache/compressed-mob.css",'w');	
		$compressedCss = '';
		foreach ($cssFiles as $cssFile) {
	  		$compressedCss .= file_get_contents($cssFile);
		}
		$compressedCss = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $compressedCss);// Remove comments
		$compressedCss = str_replace(': ', ':', $compressedCss);// Remove space after colons
		$compressedCss = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), ' ', $compressedCss);// Remove whitespace
		fwrite($handle,$compressedCss);
		$totalFiles+=count($cssFiles);
		fwrite($totalFilesHandle,$totalFiles);
	}
	$css = '<link rel="stylesheet" type="text/css" href="cache/compressed-mob.css" />';
}else{
	foreach($cssFiles as $cssFile){
		$css .= '<link rel="stylesheet" type="text/css" href="'.$cssFile.'" />';
	}
}
/*JAVASCRIPT COMPRESS*/
$js = '';
if($enableCompressionJs){
	if(!file_exists("cache/compressed-mob.js")){
		require_once('inc/jsminplus.php');
		$totalFilesHandle = fopen("cache/compressfilescount-mob.txt",'w');
		$handle = fopen("cache/compressed-mob.js",'w');	
		$compressedJs = '';
		foreach ($jsFiles as $jsFile) {
	  		$compressedJs .= file_get_contents($jsFile)."\n";
		}
		$compressedJs = JSMinPlus::minify($compressedJs);
		fwrite($handle,$compressedJs);	
		$totalFiles+=count($jsFiles);
		fwrite($totalFilesHandle,$totalFiles);
	}
	$js = '<script type="text/javascript" src="cache/compressed-mob.js" /></script>';
}else{
	foreach($jsFiles as $jsFile){
		$js .= '<script type="text/javascript" src="'.$jsFile.'" /></script>';
	}
}

/*FUNCTION FLUSHCACHE*/
function flushCache(){
	if(file_exists("cache/compressed-mob.css")){
		$handle = fopen("cache/compressed-mob.css","w") or die("Can't flush cache of css files  for mobile version");
		fclose($handle);
		unlink("cache/compressed-mob.css")  or die("Can't flush cache of css files for mobile version");
	}
	if(file_exists("cache/compressed-mob.js")){
		$handle = fopen("cache/compressed-mob.js","w") or die("Can't flush cache of javascript files for mobile version");
		fclose($handle);
		unlink("cache/compressed-mob.js")  or die("Can't flush cache of javascript files for mobile version");
	}
}
?>