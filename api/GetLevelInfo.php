<?php
include 'yingshi.php';
include 'conf.php';
$fuin=$_GET['fuin'];
$QQ=$_GET['QQ'];
echo $yingshi->curl_file_get_contents("http://".$ip."/v1/GetLevelInfo?qq=".$QQ."&fuin=".$fuin);
?>