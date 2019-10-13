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
		window.location="index.html";
	}
	
	/*
	*@消息列表处理
	*/
	function Msgs(){
		document.getElementById("div1").innerHTML='<ul id="msgs" class="mdui-list mdui-list-dense"></ul>';
		document.getElementById("msgs").innerHTML='<li class="mdui-list-item mdui-ripple"><i class="mdui-text-color-white mdui-color-blue mdui-list-item-avatar mdui-icon material-icons">dvr</i><div class="mdui-list-item-content"><div class="mdui-list-item-title">系统消息</div><div class="mdui-list-item-text mdui-list-item-one-line">欢迎主人！</div></div></li>';
		msgs = "off";
	}
	
	//以下QQ变量都指的是机器人QQ号,data为对应的json数据(请看webapi文档)
api = {
	
	/*
	*@消息发送函数
	*/
	SendMsg: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/SendMsg.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取好友列表函数
	*/
	GetFriendLists: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/GetFriendLists.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@QQ群功能包加群拉人
	*/
	GroupMgr: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/GroupMgr.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@当前集群Cluster信息
	*/
	ClusterInfo: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/ClusterInfo.php?qq="+QQ, false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		return xhttp.responseText;
	},
	/*
	*@搜索QQ群组
	*/
	SearchGroup: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/SearchGroup.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取群列表
	*/
	GetTroopLists: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/GetTroopLists.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取群成员列表
	*/
	GetTroopMemberLists: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/GetTroopMemberLists.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@刷新Key二次登陆
	*/
	RefreshKeys: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/RefreshKeys.php?qq="+QQ, false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		return xhttp.responseText;
	},
	/*
	*@查询用户等级
	* fuin 要查询的用户
	*/
	GetLevelInfo: function(QQ,fuin){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/GetLevelInfo.php?qq="+QQ+"&fuin="+fuin, false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		return xhttp.responseText;
	},
	/*
	*@qq名片赞
	*/
	QQZan: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/QQZan.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取钱包余额相关Key
	*/
	QWallet: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/QWallet.php?qq="+QQ, false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		return xhttp.responseText;
	},
	/*
	*@发送群专属红包
	*/
	SendSingleRed: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/SendSingleRed.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@转账
	*/
	SendTransfer: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/SendTransfer.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@添加QQ好友
	*/
	AddFriend: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/AddFriend.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@撤回群成员消息
	*/
	RevokeMsg: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/RevokeMsg.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@禁言群成员或全员禁言
	*/
	ShoutUp: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/ShoutUp.php", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	}
	
}