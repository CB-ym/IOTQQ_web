
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp"/>
  <title>IOTQQ - Web - js版</title>
    <script src="js/diy.js"></script>
  <script src="js/void.js"></script>
  <script src="js/jquery.min.js"></script>
<script src="js/socket.io.js"></script>
<script src="js/conf.js"></script>
<script src="js/websocket.js"></script>
<script src="js/main.js"></script>
<link rel="stylesheet" href="//cdnjs.loli.net/ajax/libs/mdui/0.4.3/css/mdui.min.css">
<script src="//cdnjs.loli.net/ajax/libs/mdui/0.4.3/js/mdui.min.js"></script>

</head>
<body id="iotqq" class="mdui-drawer-body-left mdui-appbar-with-toolbar  mdui-theme-primary-indigo mdui-theme-accent-pink">
<header class="mdui-appbar mdui-appbar-fixed">
  <div class="mdui-text-color-white-text mdui-toolbar mdui-color-blue">
    <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-drawer="{target: '#main-drawer', swipe: true}"><i class="mdui-icon material-icons">menu</i></span>
    <a href="/" class="mdui-typo-headline mdui-hidden-xs">Web_IOTQQ</a>
    <div class="mdui-toolbar-spacer"></div>
	<img id="user" class="mdui-img-circle" height="80%">
  </div>
</header>

<div class="mdui-drawer" id="main-drawer">
  <div class="mdui-list" mdui-collapse="{accordion: true}" style="margin-bottom: 76px;">
    <ul class="mdui-list" id="list">
  <li onclick="Msgs()" class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">textsms</i>
    <div class="mdui-list-item-content">消息列表</div>
  </li>
</ul>
  </div>
</div>

<div class="mdui-dialog" id="sws">
<div class="mdui-container mdui-textfield mdui-textfield-floating-label mdui-center">
       <label class="mdui-textfield-label">机器人QQ</label>
      <input class="mdui-textfield-input" id="switch" type="text" required/>
      <div class="mdui-textfield-error">请输入QQ号</div>
      <div class="mdui-textfield-helper">你在iotqq上登录了的机器人QQ</div>
     </div>

    <div class="mdui-valign"style="height:5em;width: 100%"><button onclick="switch1()" class="mdui-text-color-white-text mdui-center mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue">切换账号</button></div>
</div>

  <div class="mdui-dialog" id="example-4">
    <div class="mdui-tab mdui-tab-full-width" id="example4-tab">
      <a href="#example4-tab1" class="mdui-ripple">账号登录</a>
      <a href="#example4-tab2" class="mdui-ripple">扫码登录</a>
      <a href="#example4-tab3" class="mdui-ripple">其他方式</a>
    </div>
    <div id="example4-tab1" class="mdui-p-a-2">
      <br>
       <div class="mdui-container mdui-textfield mdui-textfield-floating-label mdui-center">
       <label class="mdui-textfield-label">用户</label>
      <input class="mdui-textfield-input" disabled name="user" type="text" required/>
      <div class="mdui-textfield-error">请输入QQ号</div>
      <div class="mdui-textfield-helper">你的机器人QQ</div>
     </div>
    <div class="mdui-container mdui-textfield mdui-textfield-floating-label mdui-center">
     <label class="mdui-textfield-label">密码</label>
       <input class="mdui-textfield-input" disabled name="pass" type="password" required/>
      <div class="mdui-textfield-error">请输入密码</div>
     <div class="mdui-textfield-helper">你的机器人密码</div>
     </div>

    <div class="mdui-valign"style="height:5em;width: 100%"><button class="mdui-text-color-white-text mdui-center mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue">暂不支持</button></div>
    </div>
    <div id="example4-tab2" class="mdui-p-a-2">
      <img class="mdui-center" id="qrcode"onclick="GetQrcode()"mdui-tooltip="{content: '点击二维码刷新，请勿重复刷新'}">
	  <div align="center" style="margin-top: 1em;color:#2196F3">打开手机QQ，扫描二维码登录</div>
    </div>
    <div id="example4-tab3" class="mdui-p-a-2">
      <br>
       <div class="mdui-container mdui-textfield mdui-textfield-floating-label mdui-center">
       <label class="mdui-textfield-label">机器人QQ</label>
      <input class="mdui-textfield-input" id="qq" type="text" required/>
      <div class="mdui-textfield-error">请输入QQ号</div>
      <div class="mdui-textfield-helper">你在iotqq上登录了的机器人QQ</div>
     </div>

    <div class="mdui-valign"style="height:5em;width: 100%"><button onclick="login()" class="mdui-text-color-white-text mdui-center mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue">直接传送</button></div>
    </div>
  </div>
</div>

<div id="div1"style="margin-top: 1em;margin-bottom: 1em">
<ul id="msgs" class="mdui-list mdui-list-dense"></ul>
<div id="login"style="position: absolute;transform: translate(-50%, -50%);left: 50%;top: 50%">
<button class="mdui-text-color-white-text mdui-btn mdui-color-blue mdui-ripple" mdui-dialog="{target: '#example-4'}">登录QQ</button>
</div>
</div>
</div>
<script>
  var tab = new mdui.Tab('#example4-tab');
  document.getElementById('example-4').addEventListener('open.mdui.dialog', function () {
    tab.handleUpdate();
  });
</script>