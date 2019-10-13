<?php
include 'yingshi.php';
include 'conf.php';
$QQ=$_GET['QQ'];
echo $yingshi->curl_file_get_contents("http://".$ip."/v1/RefreshKeys?qq=".$QQ);
?>