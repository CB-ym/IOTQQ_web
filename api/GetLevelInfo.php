<?php
include 'yingshi.php';
include 'conf.php';
$QQ = $_GET['qq'];
$fuin = $_GET['fuin'];
echo $yingshi->curl_file_get_contents("http://".$ip."/v1/GetLevelInfo?qq=".$QQ."&fuin=".$fuin);
?>