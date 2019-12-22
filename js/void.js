
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
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=SendMsg", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取好友列表函数
	*/
	GetQQUserList: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=GetQQUserList", false);
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
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=GroupMgr", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@当前集群Cluster信息
	*/
	ClusterInfo: function(){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/ClusterInfo.php", false);
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
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=SearchGroup", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取群列表
	*/
	GetGroupList: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=GetGroupList", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取群成员列表
	*/
	GetGroupUserList: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
        xhttp.open("POST", "api/LuaApiCaller.php?funcname=GetGroupUserList", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@刷新Key二次登陆
	*/
	RefreshKeys: function(QQ){
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
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=QQZan", false);
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
	*@发送群红包/个人红包
	*具体红包类型请查看webapi文档
	*/
	SendSingleRed: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=SendSingleRed", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@转账
	*/
	Transfer: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=Transfer", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@添加QQ好友
	*/
	AddQQUser: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=AddQQUser", false);
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
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=RevokeMsg", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@禁言群成员或全员禁言
	*/
	ShutUp: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=ShutUp", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@退出指定QQ
	*/
	LogOut: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=LogOut", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@打开RED包
	*/
	ModifyGroupCard: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=ModifyGroupCard", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@处理群邀请
	*/
	AnswerInviteGroup: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=AnswerInviteGroup", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@修改群名片
	*/
	ModifyGroupCard: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=ModifyGroupCard", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@设置头衔
	*/
	SetUniqueTitle: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=SetUniqueTitle", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@获取任意用户信息昵称头像等
	*/
	GetUserInfo: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=GetUserInfo", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	},
	/*
	*@发送QQ空间红包
	*红包类型请参考webapi文档
	*/
	SendQzoneRed: function(QQ,data){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
		xhttp.open("POST", "api/LuaApiCaller.php?funcname=SendQzoneRed", false);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send('QQ='+QQ+'&data='+data);
		return xhttp.responseText;
	}
	
}