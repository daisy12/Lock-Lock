<template>
	<main class="header">
		<div class="wrap">
			<span class="list_icon">
				<img src="../../assets/image/list.png" />
			</span>
			<div class="logo">
				<img src="../../assets/image/logo.png">
				<span>LOCK&LOCK</span>
			</div>
			<span class="search_icon">
				<img src="../../assets/image/search.png"/>
			</span>
		</div>
	</main>
</template>
<style scoped>
	 .header{
	 	height: 50px;
	 	background:#0063b5;
	 	padding:0 26px;
	 	width:100%;
	 	box-sizing: border-box;
	 	font-family: "微软雅黑";
	 }
	 .header .wrap{
	 	width:100%;
	 	height: 100%;
	 	position: relative;
	 }
	 .header .list_icon{
	 	position: absolute;	
	 	left:0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .header .search_icon{
	 	position: absolute;
	 	right: 0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .header .list_icon img,.header .search_icon img{
	 	width:100%;
	 }
	 .header .logo{
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
	 .header .logo span{
	 	vertical-align:super;
	 }
	 .header .logo img{
	 	height: 100%;
	 }
</style>