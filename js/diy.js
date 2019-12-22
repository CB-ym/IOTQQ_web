    /*
	*@ blck 状态群
	*@ 用于开启群事件
	*/
	function off_on(blck){
		if (document.getElementById("blck"+blck).name=="开启"){
		    localStorage.setItem(blck, 'off');
		    document.getElementById("blck"+blck).innerHTML="关闭";
		    document.getElementById("blck"+blck).name="关闭";
		}
		else
		{
			localStorage.setItem(blck, 'on');
			document.getElementById("blck"+blck).innerHTML="开启";
			document.getElementById("blck"+blck).name="开启";
		}
	}
	
	/*
	*@群列表处理
	*/
	function GetTroopLists(){
		window.location="index.php";
	}
	
	/*
	*@消息列表处理
	*/
	function Msgs(){
		document.getElementById("div1").innerHTML='<ul id="msgs" class="mdui-list mdui-list-dense"></ul>';
		document.getElementById("msgs").innerHTML='<li class="mdui-list-item mdui-ripple"><i class="mdui-text-color-white mdui-color-blue mdui-list-item-avatar mdui-icon material-icons">dvr</i><div class="mdui-list-item-content"><div class="mdui-list-item-title">系统消息</div><div class="mdui-list-item-text mdui-list-item-one-line">欢迎主人！</div></div></li>';
		msgs = "off";
	}
	
	/*
	*@获取二维码
	*/
	function GetQrcode(){
		//获取二维码
      socket.emit('GetQrcode', '1234', (data) =>{
      console.log(data); // data will be 'woot'
      var JsonPkg = JSON.parse(data);
      $('#qrcode').attr("src", 'data:image/png;base64,' + JsonPkg.Data.BQrpic);

       });
	}
	
	/*
	*@直接传送用
	*/
	function login(){
      //保存数据
      var QQ = document.getElementById("qq").value;
	  localStorage.setItem('User', QQ);
	  window.location="index.php";
	}
	
	/*
	*@退出Web用
	*/
	function exit(){
      //清空数据
      localStorage.clear();
	  window.location="index.php";
	}
	
	/*
	*@切换账号
	*/
	function switch1(){
      //清空数据
      localStorage.clear();
	  //保存新数据
	  var QQ = document.getElementById("switch").value;
	  localStorage.setItem('User', QQ);
	  window.location="index.php";
	}
	