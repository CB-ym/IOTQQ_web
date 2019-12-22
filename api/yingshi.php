<?php
class yingshi{
	/**
    *url访问
    *@param $burl链接地址
    */
    public function curl_file_get_contents($durl){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $durl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true) ; // 获取数据返回  
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ; // 在启用 CURLOPT_RETURNTRANSFER 时候将获取数据返回  
        $r = curl_exec($ch);
        curl_close($ch);
        return $r;
	}
	
	/**
	*@Desc：curl模拟post提交json数据
	*@param：$url：请求的地址 、 $data 请求的参数(数组)
	*@return：数组
	*/
	public function subJson($url,$data){
		$data_string = $data;
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		    'Content-Type: application/json',
		    'Content-Length: ' . strlen($data_string))
		);
		$result = curl_exec($ch);
		return $result;
	}

}
$yingshi=new yingshi();
?>