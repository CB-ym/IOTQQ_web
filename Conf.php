
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp"/>
  <title>Conf ip配置</title>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/css/mdui.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/js/mdui.min.js"></script>
</head>
<body class="mdui-appbar-with-toolbar mdui-drawer-body-left"style="height:100%">
<div class="mdui-appbar mdui-appbar-fixed mdui-color-blue">
  <div class="mdui-toolbar">
    <a href="javascript:;" class="mdui-typo-headline"style="color:#E3F2FD">IOTQQ_Conf</a>
  </div>
</div>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$conf=$_POST["conf"];
	if ($conf == ""){
		$sx = "<div align='center' style='color:red'>请填写你的ip地址加端口!</div>";
	}
	else{
		if(file_put_contents("api/conf.php",'<?php $ip = "'.$conf.'";?>')){
			file_put_contents("js/conf.js","var ip = '".$conf."';var User = localStorage.getItem('User');var mun = 0;");
			exit("<script>window.location='index.php';</script>");//写入成功
	    }
        else{
		    $sx="<div align='center' style='color:red'>修改失败,请检查配置!</div>";//写入失败
	    }
	}
}
?>
<form method="POST" action="Conf.php" enctype="multipart/form-data" style="position: absolute;transform: translate(-50%, -50%);left: 50%;top: 50%">
<div class="mdui-center">
<div class="mdui-shadow-2 mdui-container"style="border-radius:1%">

    <div class="mdui-textfield mdui-textfield-floating-label mdui-center">
  <label class="mdui-textfield-label">IP:[端口]</label>
  <input class="mdui-textfield-input" name="conf" type="text" required/>
<div class="mdui-textfield-error">IP地址不能为空</div>
<div class="mdui-textfield-helper">你自己的IP 例: 163.0.06:8888</div>
</div><?php echo $sx; ?>
<div class="mdui-valign"style="height:5em;width: 100%">
<button type="submit" class="mdui-text-color-white-text mdui-center mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue">提交</button>
</div>
  </div>
</div>
</form>