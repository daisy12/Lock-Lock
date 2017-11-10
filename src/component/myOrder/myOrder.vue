<template>
	<main>
		<div class="order_wrap">
			<div class="order_center">
				<div class="wrap">
					<span class="return_icon" @click="go">
						<img src="../../assets/image/pro_return.png" />
					</span>
					<div class="logo">
						<span>全部订单</span>
					</div>
					<span class="scan_icon">
						<img src="../../assets/image/pro_scan.png"/>
					</span>
				</div>
			</div>	
			<div class="order_con">
				<ul class="nav">
					<li :class="{active:k==index}" v-for="(v,k) in nav" @click="changeSelect(k)">{{v}}</li>
					 
				</ul>
				<ul class="order_item">
					<li>
						<div class="item_tit">
							<span>订单编号：146792001</span>
							<span class="state">代付款</span>
						</div>
						<div class="item_con">
							<div class="order_pic">
								<img src="../../assets/image/order_01.jpg"/>
							</div>
							<div class="order_msg">
								<div class="msg_tit">
									<h3>乐扣乐扣乐扣乐扣格拉斯趣味橙色</h3>
									<a>&gt;</a>
								</div>
								<time>2016.03.24 14:25pm</time>
								<div class="price">
									<span>￥110.40</span>
									<del>￥158.00</del>
									<a>立即支付</a>
								</diV>
							</div>
						</div>
					</li>
					<li v-for="v in orderData">
						<div class="item_tit">
							<span>订单编号：146792001</span>
							<span class="state">已付款</span>
						</div>
						<div class="item_con">
							<div class="order_pic">
								<img :src="v.imgSrc"/>
							</div>
							<div class="order_msg">
								<div class="msg_tit">
									<h3>{{v.title}}</h3>
									<router-link to="/orderDetail">&gt;</router-link>
								</div>
								<time>{{v.time}}</time>
								<div class="price">
									<span>￥{{v.price}}</span>
								</diV>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
<script>
	export default {
		data() {
			return {
				nav:["全部","代付款","待预约","更多"],
				index:0
			}
		},
		methods: {
			go() {
				this.$router.go(-1);
			},
			changeSelect(k){
				this.index=k;
			}
		},
		computed:{
			orderData(){ 
				return this.$store.state.orderData;
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
	
	.order_con {
		margin-top: 4px;
	}
	
	.order_con .nav {
		height: 40px;
	}
	
	.order_con .nav li {
		background: #0063b5;
		float: left;
		width: 25%;
		color: #fff;
		height: 40px;
		line-height: 38px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #fff;
		box-sizing: border-box;
	}
	
	.order_con .nav li.active {
		background: #fff;
		border: 1px solid #0063b5;
		height: 38px;
		line-height: 36px;
		color: #0063b5;
		margin-top: 1px;
	}
	
	.order_item {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		font-size: 14px;
		color: #0063B5;
	}
	
	.order_item .item_tit {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #0063B5;
		font-size: 12px;
	}
	
	.order_item .item_tit>span:nth-of-type(1) {
		float: left;
	}
	
	.order_item .item_tit .state {
		float: right;
		color:#FFC000;
	}
	.item_con{
		padding: 10px 0;
		overflow: hidden;
	}
	.item_con .order_pic{
		float:left;
		width:30%;
	}
	.item_con .order_pic img{
		width:100%;
	}
	.item_con .order_msg{
		float:right;
		width:70%;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.item_con .order_msg .msg_tit{
		width:100%;
		position: relative;
		font-size: 14px;
	}
	.item_con .order_msg .msg_tit h3{
		width:85%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.item_con .order_msg .msg_tit>a{
		display: inline-block;
		width:7px;
		height: 14px;
		position: absolute;
		right: 4px;
		top:4px;
		font-weight: bold;
		font-family: '宋体';
		text-decoration: none;
		color:#0063B5;
	}
	.item_con .order_msg>.price{
		margin-top:10px;
	}
	.item_con .order_msg>.price>span{
		color: #FFC000;
		font-family: "微软雅黑";
	}
	.item_con .order_msg>.price>a{
		padding: 4px 6px;
		background: #0063B5;
		color:#fff;
		border-radius: 5px;
	}
	.item_con .order_msg>.price>del{
		font-size: 12px;
	}
	.order_msg time{
		font-size: 12px;
	}
</style>