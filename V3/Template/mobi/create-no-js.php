<?php
session_start();
require_once("../config.php"); 
if(!isset($_SESSION['login']) ||$_SESSION['login']!=$adminLogin){
	die("It seems you're not logged in anymore. Rebuilding NoJS failed.");
}
if(isset($_POST['data'])){
	$handle = fopen("../cache/no-js-mob.txt",'w');
	fwrite($handle,$_POST['data']);	
}
echo "yes";
?>