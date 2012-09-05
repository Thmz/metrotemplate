<?php
session_start();
require_once("../config.php"); 
if(!isset($_SESSION['login']) ||$_SESSION['login']!=$adminLogin){
	die("It seems you're not logged in anymore. Rebuilding NoJS failed.");
}
$handle = fopen("../cache/no-js-mob.txt","w") or die("Can't flush NoJS cache.");
fclose($handle);
unlink("../cache/no-js-mob.txt") or die("Can't flush NoJS cache.");
echo "yes";
?>