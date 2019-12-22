<?php
include 'yingshi.php';
include 'conf.php';
$data=$_POST['data'];
$QQ=$_POST['QQ'];
$funcname=$_GET['funcname'];
echo $yingshi->subJson("http://".$ip."/v1/LuaApiCaller?qq=".$QQ."&funcname=".$funcname."&timeout=10",$data);
?>