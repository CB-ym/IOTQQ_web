
   
    var socket = io(ip, {
      transports: ['websocket']
    });

    socket.on('connect',
    function() {
        //从缓存或从cookies 读取历史登陆的QQ号
        //链接成功后获取用户缓存 获取成功后直接同步消息 失败直接获取二维码
        //同一浏览器会置换当前的websocket id
    
      if (User == null){
		  GetQrcode();
      }else{
		 var parent = document.getElementById("div1");
	     var child1 = document.getElementById("login");
	     parent.removeChild(child1);
        socket.emit('GetWebConn', User, (data) =>{
        console.log(data);
        $('#user').attr("src", 'http://q1.qlogo.cn/g?b=qq&nk=' + User + '&s=640');
      });
	    var b = document.getElementById("list").innerHTML;
	    document.getElementById("example-4").innerHTML='<div></div>';
		var a= "'#sws'";
		document.getElementById("list").innerHTML=b+'<li mdui-dialog="{target: '+a+'}" class="mdui-list-item mdui-ripple"><i class="mdui-list-item-icon mdui-icon material-icons">autorenew</i><div class="mdui-list-item-content">切换账号</div></li><li onclick="exit()" class="mdui-list-item mdui-ripple"><i class="mdui-list-item-icon mdui-icon material-icons">exit_to_app</i><div class="mdui-list-item-content">退出Web</div></li>';
      }
     
    })
    socket.on('OnCheckLoginQrcode',
    function(data) {
      //48未扫描 53已扫码 17 49 过期了
       if (data.Data.ScanStatus ==17 || data.Data.ScanStatus == 49){
		    mdui.snackbar({
			  message: '二维码已过期'
			});
       }
	   else if(data.Data.ScanStatus ==53){
		    mdui.snackbar({
			  message: '已扫码,登录中...'
			});
	   }
        console.log(data);
    });

    socket.on('OnLoginSuccess',
    function(data) {

      // 移除所有
      localStorage.clear();
      console.log(data);
	  var parent = document.getElementById("div1");
	  var child1 = document.getElementById("login");
	  parent.removeChild(child1);
      $('#user').attr("src", 'http://q1.qlogo.cn/g?b=qq&nk=' + data.Uin + '&s=640');
      localStorage.setItem('User', data.Uin);
      localStorage.setItem('Nick', data.Nick);
      window.location = "index.php";
    });

       //获取群成员列表
       //socket.emit('GetTroopMemberList', JSON.stringify({"Uid":User+"","Group":654264644}));
       //  //绑定群成员返回数据事件
       //socket.on('OnTroopMemberInfo',function(data){

       // console.log(data); 

       //});
       //获取好友列表命令
         //socket.emit('GetFriendList',User);
       //  //绑定好友返回数据事件
	   
        /*socket.on('OnFriendlistInfo',function(data){

         console.log(data);

        });*/

        //获取群列表命令 
        /*Data = api.GetGroupList(User,'{"NextToken":""}');
		data = JSON.parse(Data);
		var newss = "";
		   for (var i=0;i<data.TroopList.length;i++){
			   var blck = localStorage.getItem(data.TroopList[i].GroupId);
			   if (blck == null||blck=="on")
			   {
				   blck="开启";
			   }
			   else
			   {
				   blck="关闭";
			   }
			   
			   document.getElementById("div1").innerHTML=newss+'<div class="mdui-card mdui-container"><div class="mdui-card-header"><img class="mdui-card-header-avatar" src="http://p.qlogo.cn/gh/'+data.TroopList[i].GroupId+'/'+data.TroopList[i].GroupId+'/100/"/><div class="mdui-card-header-title">'+data.TroopList[i].GroupName+'</div><div class="mdui-card-header-subtitle">'+data.TroopList[i].GroupId+'</div><button id="blck'+data.TroopList[i].GroupId+'" onclick="off_on('+data.TroopList[i].GroupId+')"name="'+blck+'" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-float-right">'+blck+'</button></div> <!-- 卡片的内容 --><div id="'+data.TroopList[i].GroupId+'" class="mdui-card-content">系统:暂无消息</div></div>';
		   }
        console.log(data);*/
		
		
        socket.on('OnGroupMsgs',function(data){
				++mun;
				GroupMsg(data);
				if (mun >= 80){
					var parent = document.getElementById("msgs");
					var child = document.getElementById("msgss");
					parent.removeChild(child);
				}
				
				if (data.CurrentPacket.Data.MsgType == "PicMsg")
				{
					json = JSON.parse(data.CurrentPacket.Data.Content);
					data.CurrentPacket.Data.Content = '<img src="'+json.url+'">';
				}
				var news =document.getElementById("msgs").innerHTML;
			    document.getElementById("msgs").innerHTML=news+'<li id="msgss" class="mdui-list-item mdui-ripple"><div class="mdui-list-item-avatar"><img src="http://p.qlogo.cn/gh/'+data.CurrentPacket.Data.FromGroupId+'/'+data.CurrentPacket.Data.FromGroupId+'/100/"/></div><div class="mdui-list-item-content"><div class="mdui-list-item-title"><p class="mdui-text-color-blue">群号:'+data.CurrentPacket.Data.FromGroupId+' QQ:'+data.CurrentPacket.Data.FromUserId+'</p></div><div class="mdui-list-item-text mdui-list-item-two-line">'+data.CurrentPacket.Data.Content+'</div></div></li>';
			localStorage.setItem('User', User);
        });
		socket.on('OnFriendMsgs',function(data){
			FriendMsg(data);
			    ++mun;
				if (mun >= 80){
					var parent = document.getElementById("msgs");
					var child = document.getElementById("msgss");
					parent.removeChild(child);
				}
				var news =document.getElementById("msgs").innerHTML;
			    document.getElementById("msgs").innerHTML=news+'<li id="msgss" class="mdui-list-item mdui-ripple"><div class="mdui-list-item-avatar"><img src="http://q4.qlogo.cn/g?b=qq&nk='+data.CurrentPacket.Data.FromUin+'&s=140"/></div><div class="mdui-list-item-content"><div class="mdui-list-item-title"><p class="mdui-text-color-blue">私聊消息 QQ:'+data.CurrentPacket.Data.FromUin+'</p></div><div class="mdui-list-item-text mdui-list-item-two-line">'+data.CurrentPacket.Data.Content+'</div></div></li>';
			console.log("收到好友消息");
            console.log(data);
        });
		socket.on('OnEvents',function(data){
			Events(data);
            console.log("收到事件消息");
            console.log(data);
        });


    