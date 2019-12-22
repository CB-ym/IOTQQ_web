<?php
include 'yingshi.php';
include 'conf.php';
echo $yingshi->curl_file_get_contents("http://".$ip."/v1/ClusterInfo");
?>