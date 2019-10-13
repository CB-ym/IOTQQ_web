
   
    var socket = io(ip, {
      transports: ['websocket']
    });

    socket.on('connect',
    function() {
        //从缓存或从cookies 读取历史登陆的QQ号
        //链接成功后获取用户缓存 获取成功后直接同步消息 失败直接获取二维码
        //同一浏览器会置换当前的websocket id
    
      if (User == null){

      //获取二维码
      socket.emit('GetQrcode', '1234', (data) =>{
      console.log(data); // data will be 'woot'
      var JsonPkg = JSON.parse(data);
      $('#qrcode').attr("src", 'data:image/png;base64,' + JsonPkg.Data.BQrpic);

       });

      }else{

        socket.emit('GetWebConn', User, (data) =>{
        console.log(data);
		var parent = document.getElementById("div1");
	    var child2 = document.getElementById("tips2");
	    parent.removeChild(child2);
	    var child1 = document.getElementById("login");
	  
	    parent.removeChild(child1);

        $('#user').attr("src", 'http://q1.qlogo.cn/g?b=qq&nk=' + User + '&s=640');
      });

      }
     
    })
    socket.on('OnCheckLoginQrcode',
    function(data) {
      //48未扫描 53已扫码 17 49 过期了
       if (data.Data.ScanStatus ==17 || data.Data.ScanStatus == 49){
		  document.getElementById("tips2").innerHTML="二维码已过期！";
		  document.getElementById("tips2").style="color:red";
       }
	   else if(data.Data.ScanStatus ==53){
		  document.getElementById("tips2").innerHTML="已扫码,登录中...";
		  document.getElementById("tips2").style="color:green";
	   }
        console.log(data);
    });

    socket.on('OnLoginSuccess',
    function(data) {

      // 移除所有
      localStorage.clear();
      console.log(data);
	  var parent = document.getElementById("div1");
	  var child = document.getElementById("tips2");
	  var child1 = document.getElementById("login");
	  parent.removeChild(child);
	  parent.removeChild(child1);
      $('#user').attr("src", 'http://q1.qlogo.cn/g?b=qq&nk=' + data.Uin + '&s=640');
      localStorage.setItem('User', data.Uin);
      localStorage.setItem('Nick', data.Nick);
	  socket.emit('GetTroopList', data.Uin);
      //window.location = "/main.html";
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
        socket.emit('GetTroopList', User);
        //绑定群列表返回数据事件
       socket.on('OnTroopListInfo',function(data){
		   for (var i=0;i<data.CurrentPacket.Data.TroopList.length;i++){
			   var blck = localStorage.getItem(data.CurrentPacket.Data.TroopList[i].GroupId);
			   if (blck == null||blck=="on")
			   {
				   blck="开启";
			   }
			   else
			   {
				   blck="关闭";
			   }
			   var newss = document.getElementById("div1").innerHTML;
			   document.getElementById("div1").innerHTML=newss+'<div class="mdui-card mdui-container"><div class="mdui-card-header"><img class="mdui-card-header-avatar" src="http://p.qlogo.cn/gh/'+data.CurrentPacket.Data.TroopList[i].GroupId+'/'+data.CurrentPacket.Data.TroopList[i].GroupId+'/100/"/><div class="mdui-card-header-title">'+data.CurrentPacket.Data.TroopList[i].GroupName+'</div><div class="mdui-card-header-subtitle">'+data.CurrentPacket.Data.TroopList[i].GroupId+'</div><button id="blck'+data.CurrentPacket.Data.TroopList[i].GroupId+'" onclick="off_on('+data.CurrentPacket.Data.TroopList[i].GroupId+')"name="'+blck+'" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-float-right">'+blck+'</button></div> <!-- 卡片的内容 --><div id="'+data.CurrentPacket.Data.TroopList[i].GroupId+'" class="mdui-card-content">系统:暂无消息</div></div>';
		   }
        console.log(data); 
       });

        socket.on('OnGroupMsgs',function(data){
			var Groupid = localStorage.getItem(data.CurrentPacket.Data.FromGroupId);
			if (Groupid == null||Groupid=="on"){
				console.log("收到群消息,过滤.....");
			}
			else if (msgs=="on"){
				GroupMsg(data);
				console.log("收到群消息");
			    document.getElementById(data.CurrentPacket.Data.FromGroupId).innerHTML=data.CurrentPacket.Data.FromNickName+"："+data.CurrentPacket.Data.Content;
                console.log(data);
			}
            else{
				++mun;
				GroupMsg(data);
				if (mun >= 40){
					var parent = document.getElementById("msgs");
					var child = document.getElementById("msgss");
					parent.removeChild(child);
				}
				var news =document.getElementById("msgs").innerHTML;
			    document.getElementById("msgs").innerHTML=news+'<li id="msgss" class="mdui-list-item mdui-ripple"><div class="mdui-list-item-avatar"><img src="http://p.qlogo.cn/gh/'+data.CurrentPacket.Data.FromGroupId+'/'+data.CurrentPacket.Data.FromGroupId+'/100/"/></div><div class="mdui-list-item-content"><div class="mdui-list-item-title"><p class="mdui-text-color-blue">群号:'+data.CurrentPacket.Data.FromGroupId+' QQ:'+data.CurrentPacket.Data.FromUserId+'</p></div><div class="mdui-list-item-text mdui-list-item-two-line">'+data.CurrentPacket.Data.Content+'</div></div></li>';
			}

        });
		socket.on('OnFriendMsgs',function(data){
			FriendMsg(data);
			 if (msgs=="off"){ 
			    ++mun;
				if (mun >= 40){
					var parent = document.getElementById("msgs");
					var child = document.getElementById("msgss");
					parent.removeChild(child);
				}
				var news =document.getElementById("msgs").innerHTML;
			    document.getElementById("msgs").innerHTML=news+'<li id="msgss" class="mdui-list-item mdui-ripple"><div class="mdui-list-item-avatar"><img src="http://q4.qlogo.cn/g?b=qq&nk='+data.CurrentPacket.Data.FromUin+'&s=140"/></div><div class="mdui-list-item-content"><div class="mdui-list-item-title"><p class="mdui-text-color-blue">私聊消息 QQ:'+data.CurrentPacket.Data.FromUin+'</p></div><div class="mdui-list-item-text mdui-list-item-two-line">'+data.CurrentPacket.Data.Content+'</div></div></li>';
				}
			console.log("收到好友消息");
            console.log(data);

        });
		socket.on('OnEvents',function(data){
			Events(data);
            console.log("收到事件消息");
            console.log(data);
        });


    