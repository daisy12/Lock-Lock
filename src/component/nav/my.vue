<template>
	<main>
		<div class="my_header">
			<div class="wrap">
				<span class="list_icon">
					<img src="../../assets/image/list.png" />
				</span>
				<span class="search_icon">
					<img src="../../assets/image/search.png"/>
				</span>
				<div class="logo">
					<span>个人中心</span>
				</div>
				<span class="scan_icon">
					<img src="../../assets/image/pro_scan.png"/>
				</span>
			</div>
			<div class="private_img">
				<img src="../../assets/image/img.png" />
			</div>
		</div>
		<div class="my_con">
			<ul class="my_nav">
				<li>
					<a>代付款</a>
				</li>
				<li>
					<a>代收获</a>
				</li>
				<li>
					<router-link to="/myOrder">全部订单</router-link>
				</li>
			</ul>
			<ul class="my_subNav">
				<li>
					<span class="tit">账户与安全</span>
					<span class="next"></span>
				</li>
				<li>
					<span class="tit">我的资产</span>
					<span class="next"></span>
				</li>
				<li>
					<span class="tit">我的卡券</span>
					<span class="next"></span>
				</li>
				<li>
					<span class="tit">我的收藏夹</span>
					<span class="next"></span>
				</li>
				<li>
					<span class="tit">联系客服</span>
					<span class="next"></span>
				</li>
				<li>
					<span class="tit">编辑资料</span>
					<span class="next"></span>
				</li>
			</ul>
		</div>
	</main>
</template>
<style scoped>
	 main{
	 	position: fixed;
	 	width:100%;
	 	height: 100%;
	 	top:0;
	 	left:0;
	 	overflow: scroll;
	 }
	 .my_header{
	 	height: 34%;
	 	background:#0063b5;
	 	padding:0 26px;
	 	width:100%;
	 	box-sizing: border-box;
	 	font-family: "微软雅黑";
	 	position: relative;
	 }
	 .my_header .wrap{
	 	width:100%;
	 	position: relative;
	 	height: 50px;
	 }
	 .my_header .list_icon{
	 	position: absolute;	
	 	left:0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .my_header .search_icon{
	 	position: absolute;
	 	left: 34px;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .my_header .scan_icon{
	 	position: absolute;
	 	right: 0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .my_header .list_icon img,.my_header .search_icon img,.my_header .scan_icon img{
	 	width:100%;
	 }
	 .my_header .logo{
	 	width:60%;
	 	text-align: center;
	 	position: absolute;
	 	top:50%;
	 	left:50%;
	 	transform: translate(-50%,-50%);
	 	height: 23px;
	 	line-height: 23px;
	 	color:#fff;
	 }
	 .private_img{
	 	width:26%;
	 	position: absolute;
	 	top:50%;
	 	left:50%;
	 	transform: translate(-50%,-30%);
	 }
	 .private_img img{
	 	width:100%;
	 }
	 .my_nav{
	 	font-family: "微软雅黑";
	 	color:#0063b5;
	 	margin:4px 0;
	 	border-top:2px dotted #0063b5;
	 	border-bottom:2px dotted #0063b5;
	 	overflow: hidden;
	 }
	 .my_nav li{
	 	margin:10px 0;
	 	float:left;
	 	width:33.3%;
	 	text-align: center;
	 	padding: 80px 0 30px;
	 	border-right:2px dotted #0063b5;
	 	box-sizing: border-box;
	 }
	 .my_nav li:nth-last-of-type(1){
	 	border-right:none;
	 }
	 .my_nav li{
	 	position: relative;
	 }
	 .my_nav li>a{
	 	color:#0063b5;
	 	text-decoration: none;
	 }
	 .my_nav li>a:before{
	 	position: absolute;
	 	display: inline-block;
	 	content: "";
	 	width:50px;
	 	height: 55px;
	 	background: url('../../assets/image/my_01.png') no-repeat center center;
	 	background-size: 50px;
	 	top:20px;
	 	left:50%;
	 	transform: translateX(-50%);
	 }
	 .my_nav li:nth-of-type(2)>a:before{
	 	background: url('../../assets/image/my_02.png') no-repeat center center;
	 	background-size: 50px;
	 }
	 .my_nav li:nth-of-type(3)>a:before{
	 	background: url('../../assets/image/my_03.png') no-repeat center center;
	 	background-size: 50px;
	 }
	 .my_subNav{
	 	width:100%;
	 	padding: 0 20px;
	 	box-sizing: border-box;
	 	margin-bottom: 70px;
	 	font-family: "微软雅黑";
	 	color:#0063b5
	 }
	 .my_subNav li{
	 	line-height: 34px;
	 	height: 34px;
	 	border-bottom:2px dotted #0063b5;
	 	padding: 0 20px;
	 	width:100%;
	 	box-sizing: border-box;
	 }
	  .my_subNav li .tit{
	  	float:left;
	  }
	  .my_subNav li .next{
	  	float:right;
	  	display: inline-block;
	  	width:7px;
	  	height:34px;
	  	background: url('../../assets/image/my_icon_07.png') no-repeat center center;
	  	background-size: 7px 14px;
	  }
</style>