<template>
	<main>
		<div class="order_wrap">
			<div class="order_center">
				<div class="wrap">
					<span class="return_icon" @click="go">
						<img src="../../assets/image/pro_return.png" />
					</span>
					<div class="logo">
						<span>我的订单</span>
					</div>
					<span class="scan_icon">
						<img src="../../assets/image/pro_scan.png"/>
					</span>
				</div>
			</div>	
			<div class="detail_con">
				<div class="private">
					<div class="private_tit">
						<span>收货人：阿爸</span>
						<span>19827654296</span>
					</div>
					<p>收货地址：广东省深圳市宝安区福永街道国富康2F205</p>
					<p class="tig">(收货不便时，可选择免费代收货服务)</p>
					<i></i>
				</div>
				<ul class="flow">
					<li>
						<h4 class="tit">订单信息</h4>
						<p>订单编号：21228992765821</p>
						<p>支付宝交易号：2618281676787128187216</p>
						<p>成交时间：2016-01-23 15:10:20</p>
						<p>付款时间：2016-01-23 15:10:20</p>
						<p>确认时间：2016-01-23 15:20:20</p>
						<i></i>
					</li>
					<li>
						<h4 class="tit">物流信息</h4>
						<p>收货地址：广东省深圳市宝安区福永街道国富康2F205</p>
						<p>与单号：1211678172182890098</p>
						<p>运送方式：快递</p>
						<p>物流公司：中通快递</p>
						<i></i>
					</li>
					<li>
						<h4 class="tit">买家留言</h4>
						<p>无</p>
						<i></i>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	main {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	overflow: scroll;
	}
	.order_wrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		font-family: "微软雅黑";
		margin-bottom: 60px;
		background: #fff;
	}
	
	.order_center {
		height: 50px;
		background: #0063b5;
		padding: 0 26px;
		width: 100%;
		box-sizing: border-box;
		font-family: "微软雅黑";
	}
	
	.order_center .wrap {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.order_center .return_icon {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 23px;
		height: 23px;
		display: inline-block;
	}
	
	.order_center .scan_icon {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 23px;
		height: 23px;
		display: inline-block;
	}
	
	.order_center .return_icon img,
	.order_center .scan_icon img {
		width: 100%;
	}
	
	.order_center .logo {
		width: 50%;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 23px;
		line-height: 23px;
		color: #fff;
	}
	
	.order_center .logo span {
		vertical-align: super;
	}
	
	.order_center .logo img {
		height: 100%;
	}
	.detail_con{
		font-size: 14px;
		color:#0063B5;
		width:100%;
	}
	.private{
		padding:10px 10px 10px 18%;
		border-bottom: 1px solid #0063B5;
		position: relative;
	}
	.private .private_tit{
		height: 24px;
	}
	.private .private_tit span:nth-of-type(1){
		float:left;
		font-weight: bold;
	}
	.private .private_tit span:nth-of-type(2){
		float:right;
	}
	.private p:nth-of-type(1){
		font-weight: bold;
	}
	.private p:nth-of-type(2){
		margin-top:4px;
		color:#FFC000;
	}
	.flow{
		margin-top:12px;
	}
	.flow li{
		padding:10px 10px 10px 18%;
		border-top: 1px solid #0063B5;
		position: relative;
	}
	.flow li>h4{
		font-weight: bold;
		margin-bottom: 4px;
	}
	.flow li>p{
		line-height: 22px;
	}
	.private i,.flow li i{
		position: absolute;
		width: 32px;
		height: 36px;
		display: inline-block;
		background: url('../../assets/image/myOrder_01.png') no-repeat center center;
		background-size: 26px;
		top:50%;
		right: 86%;
		transform: translateY(-50%);
	}
	.flow li:nth-of-type(1) i{
		background: url('../../assets/image/myOrder_02.png') no-repeat center center;
		background-size: 26px;
	}
	.flow li:nth-of-type(2) i{
		background: url('../../assets/image/myOrder_03.png') no-repeat center center;
		background-size: 32px;
	}
	.flow li:nth-of-type(3) i{
		background: url('../../assets/image/myOrder_04.png') no-repeat center center;
		background-size: 32px;
	}
</style>