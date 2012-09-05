<?php
session_start();
if(!isset($_SESSION['login'])){
	header("Location: index.php");
	die("You are not logged in. Please go to <a href='index.php'>login</a>");
}
$valid_ext = array("TXT","txt","htm","HTM","html","HTML","shtm","SHTM","shtml","SHTML","pl","PL","cgi","CGI","CSS","css","conf","CONF","ASP","asp","JSP","jsp","js","JS","php","PHP","php3","PHP3","PHTML","phtml","ini","INI","cfm","CFM","inc","INC");

function drawFolder($dir,$valid_ext){
	drawLinks(glob($dir."*.*"),$valid_ext);
	$folders = glob($dir . "*");
	foreach($folders as $folder){
		drawLinks(glob($folder."/" . "*.*"),$valid_ext);
	}
}
function drawLinks($pages,$valid_ext){
	foreach($pages as $page){
		$page = substr($page,2);
    	$ext = substr(strrchr($page, '.'), 1);
		$pageText = "<span style='font-size:11px;'><em>".substr($page, 0, strrpos( $page, '/') )."/</em></span>&nbsp;".substr(strrchr($page, '/'), 1);
		if (in_array($ext,$valid_ext) && is_writable("../".$page)) {
			echo '<a class="pageLink" title="Edit now!" href="edit.php?p='.'..'.$page.'">'.$pageText.'</a><br />';
		}
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Admin Area - Overview</title>
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	<link rel="stylesheet" type="text/css" href="css/home.css" />
	<script type="text/javascript" language="javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script type="text/javascript">window.jQuery || document.write('<script type="text/javascript" src="../js/inc/jquery181.js"><\/script>')</script>
	<script type="text/javascript" language="javascript" src="js/home.js"></script>
</head> 
<body>
<div id="headerWrapper"><div id="header">
<h1><a href="home.php">Admin</a>  <a href="../" target='_blank' style='font-size:16px; margin-left:30px;'>Visit site</a>
<a href="../mobile.php" target='_blank' style='font-size:16px; margin-left:30px;'>Visit mobile site</a></h1><a id="logoutLink" href="#" onclick='logout();'>Logout</a>
</div></div>
<div id="wrapper">
	
<table width="100%" >
    <thead valign="top" align="left">
    <tr >
		<th style='width:50%;'>
			<h2>Your Pages</h2>
    	</th>
        <th>
        	<h2>Other Files</h2>
        </th>
        <th>
        </th>
   </tr>
   </thead>     
   <tbody>
   <tr valign="top">
   <td style='padding:0 10px;'>
		<?php
		//get all pages
		drawFolder( "../pages/",$valid_ext);
		?><br />
	    <a href="#" id="newPage">New page</a>
	    <div id="newPageWrapper"><em>The page will be made in /pages/ directory</em><br /><br />
	      filename: <input id="newPageName" size="25"/><br /><br />
	    <button id="newPageSubmit">Create</button><span id="newPageMsgbox"></span>
	    </div>
   </td><td style='padding:0 10px;'>
  
	    <h3 style='margin-top:0px;'>Javascript</h3>
	    <?php
		drawFolder("../js/",$valid_ext);
		?>
	    <br />
	    <h3>CSS</h3>
	    <?php
		drawFolder("../css/",$valid_ext);
		?><br />
        <h3>Themes</h3>
	    <?php
		$folders = glob("../themes/" . "*",GLOB_ONLYDIR);
		foreach($folders as $folder){
			echo "<strong>".$folder."</strong><br>";
			drawFolder($folder."/",$valid_ext);
			echo "<br/>";
		}
		?><br />
        
    </td><td style='padding:0 10px;'>
    	<h3 style='margin-top:0px;'>Root</h3>
	    <?php
		$directory = "../";
		drawLinks(glob($directory . "*.*"),$valid_ext);
		?><br />   
	    <?php
		if(file_exists("../mobi/js/tiles-mob.js")){
			?>
		    <h3>Mobile plugin</h3>
		    <?php
			drawFolder("../mobi/",$valid_ext);
			drawFolder("../mobi/js/inc",$valid_ext);
		}
		?><br />
	    <h3>Path</h3>
	    <form id="goPathForm"><input id="goPathLink" size="40" /><button type="submit" id="goPathSubmit">Open</button></form>
    </td></tr></tbody></table>
    <hr />
    <h2>Compressing</h2>
    <em>This framework can compress and combine CSS and JS files. By compressing they have a smaller size and it makes your site faster to load. The framework caches the compressed files and wont make any changes to your original files, so you can edit them. The script should detect when a file is changed to update the cache. If you don't see your change, try pressing the 'Flush Cache' button. If you have the no-javascript version enabled, you must click "Rebuild NoJS" everytime you did a change to the tile config of the mobile version. To enable caching, open config.php in the root folder and set $enableCompressionCss and/or $enableCompressionJs to true.</em>
    <br /><br />
    <button onclick="javascript:window.location.href='edit.php?p=../config.php'" >Open config file</button>
    <button id="flushCacheButton" >Flush cache!</button>
    <button id="removeNoJSbutton" >Rebuild NoJS version</button>
    <span id='flushMsgbox'></span>
</div>
<a id="footer" href="http://metro-webdesign.info" target="_blank">©Thomas Verelst; only for donators</a>
<!-- Please leave this line -->
</body>
</html>
