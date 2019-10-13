    /*
	*@ data 群组消息数据
	*@ 群组消息触发事件
	*****
	data.CurrentPacket.Data.FromGroupId
	来源群号
	*****
	data.CurrentPacket.Data.FromGroupName
	来源群名
	*****
	data.CurrentPacket.Data.Content
	消息内容
	*****
	data.CurrentPacket.Data.FromUserId
	发送者QQ
	*****
	data.CurrentPacket.Data.FromNickName
	发送者昵称
	*****
	data.CurrentPacket.Data.MsgType
	消息类型
	*****
	data.CurrentPacket.Data.MsgRandom
	消息随机码
	*****
	data.CurrentPacket.Data.MsgSeq
	消息id
	*****
	data.CurrentQQ
	机器人QQ
	*/
    function GroupMsg(data){
		//发送私聊消息
		api.SendMsg(data.CurrentQQ,'{"toUser":2184656498,"sendToType":1,"sendMsgType":"TextMsg","content":"htt","groupid":0,"atUser":0}');
    }
   
   /*
	*@ data 私聊消息数据
	*@ 私聊消息触发事件
	********
	data.CurrentPacket.Data.Content
	消息内容
	********
	data.CurrentPacket.Data.FromUin
	发送者QQ
	********
	data.CurrentPacket.Data.MsgType
	消息类型
	********
	data.CurrentPacket.Data.ToUin
	接收者QQ
	********
	data.CurrentQQ
	机器人QQ
	*/
    function FriendMsg(data){
		//发送私聊消息
		api.SendMsg(data.CurrentQQ,'{"toUser":2184656498,"sendToType":1,"sendMsgType":"TextMsg","content":"。。。。。","groupid":0,"atUser":0}');
	}
	
	/*
	*@ data 事件消息数据
	*@ 事件消息触发
	*事件消息的相关data数据请用浏览器打开控制台，自行看输出，目前，亲测事件消息返回的数据包不是很完善，有些事件还无法触发
	*/
    function Events(data){
		//发送私聊消息
		api.SendMsg(data.CurrentQQ,'{"toUser":2184656498,"sendToType":1,"sendMsgType":"TextMsg","content":"htt","groupid":0,"atUser":0}');
	}