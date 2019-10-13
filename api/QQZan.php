<?php
include 'yingshi.php';
include 'conf.php';
$data=$_POST['data'];
$QQ=$_POST['QQ'];
echo $yingshi->subJson("http://".$ip."/v1/QQZan?qq=".$QQ,$data);
?>