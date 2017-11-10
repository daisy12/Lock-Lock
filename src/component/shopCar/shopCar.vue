<template>
	<transition enter-active-class="animated slideInRight">
	<main>
		<div class="car_wrap">
			<div class="car_center">
				<div class="wrap">
					<span class="return_icon" @click="go">
						<img src="../../assets/image/car_return.png" />
					</span>
					<div class="logo">
						<span>我的购物车</span>
					</div>
					<span class="scan_icon">
						<img src="../../assets/image/car_more.png"/>
					</span>
				</div>
			</div>	
			<ul class="buy_item">
				<li class="th">
					<div class="checkbox">
						<span @click="selectAllFun" :class="{active:selectAll}"></span>
					</div>
					<div>
						<span :class="{'checkAll':true,'current':selectAll}">全选</span>
					</div>
					<div>
						<span @click="editFun" :class="{current:showDel}">编辑</span>
					</div>
				</li>
				<li class="tr" v-for="(v,k) in data">
					<div class="checkItem">
						<span :class="{active:v.checked}" @click="selectItemFun(k)"></span>
					</div>
					<div class="shop_pic">
						<img :src="v.imgSrc" />
					</div>
					<div class="introduce">
						<h3>{{v.title}}<span>{{v.tig}}</span></h3>
						<p>{{v.msg}}</p>
						<span>编&nbsp;&nbsp;号：<i>{{v.shopid}}</i></span>
						<div class="money">
							<span class="price">{{v.price|toMoney}}</span>
							<del class="originPrice">{{v.originPrice|toMoney}}</del>
							<span class="amount">{{v.amount|toAmount}}</span>
						</div>
					</div>
					<div class="delItem" @click="deleteFun(k)" v-if="showDel"><span>×</span></div>
				</li>
			</ul>
			<div class="account">
				<div  class="numAll">已选：<span>2</span>件商品</div>
				<div class="priceAll">总价（不含运费）：{{MoneyAll|toMoney}}</span></div>
				<router-link class="account_btn" to="/setOrder" @click="go">去结算</router-link>
			</div>
		</div>
	</main>
	</transition>
</template>
<script> 
	export default{
		data(){
			return{
				 selectAll:false,
				 selectItem:[false,false,false],
				 MoneyAll:0,
				 showDel:false
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			selectAllFun(){
				this.showDel=false;
				this.selectAll=!this.selectAll;
				if(this.selectAll){
					for(var i=0;i<this.data.length;i++){
						this.data[i].checked=true;
					}
				}else{
					for(var i=0;i<this.data.length;i++){
						this.data[i].checked=false;
					}
				}
				this.accounts();
			},
			selectItemFun(k){ 
				this.showDel=false;
				this.selectAll=false;
				this.data[k].checked=!this.data[k].checked;
				this.accounts();
			},
			accounts(){
				var sum=0;
				for(var i=0;i<this.data.length;i++){
					if(this.data[i].checked){
						sum=sum+parseFloat(this.data[i].price)*parseFloat(this.data[i].amount);
					}
				}
				this.MoneyAll=sum.toFixed(2);
				/*console.log(this.MoneyAll);*/
			},
			deleteFun(k){
				this.data.splice(k,1);
			},
			editFun(){
				this.showDel=!this.showDel;
			},
			go(){
				this.$router.go(-2);
			}
		},
		filters:{
			toMoney(n){
				return '￥'+n;
			},
			toAmount(n){
				return '*'+n;
			}
		},
		computed:{
			data(){
				return this.$store.state.data;
			}
		}
	}
</script>
<style scoped>
	main{
		position: fixed;
		width:100%;
		height: 100%;
		top:0;
		left:0;
		overflow: scroll;
	}
	.car_wrap{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		font-family: "微软雅黑";
		margin-bottom: 70px;
		background: #fff;
	}
	.car_center{
	 	height: 50px;
	 	background:#0063b5;
	 	padding:0 26px;
	 	width:100%;
	 	box-sizing: border-box;
	 	font-family: "微软雅黑";
	 }
	 .car_center .wrap{
	 	width:100%;
	 	height: 100%;
	 	position: relative;
	 }
	 .car_center .return_icon{
	 	position: absolute;	
	 	left:0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .car_center .scan_icon{
	 	position: absolute;
	 	right: 0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .car_center .return_icon img{
	 	height: 100%;
	 }
	 .car_center .scan_icon img{
	 	width:100%;
	 }
	 .car_center .logo{
	 	width:50%;
	 	text-align: center;
	 	position: absolute;
	 	top:50%;
	 	left:50%;
	 	transform: translate(-50%,-50%);
	 	height: 23px;
	 	line-height: 23px;
	 	color:#fff;
	 }
	 .car_center .logo span{
	 	vertical-align:super;
	 }
	 .car_center .logo img{
	 	height: 100%;
	 }
	.buy_item{
		width:100%;
		margin-bottom: 30px;
	}
	.buy_item li{
		width:100%;
		overflow: hidden;
		padding:0 20px;
		box-sizing: border-box;
		position: relative;
	}
	.buy_item .th{
		height:40px;
		background:#0063b5;
		margin-top:4px;
		line-height: 40px;
		color:#fff;
	}
	.buy_item .th>div:nth-of-type(2){
		text-align: center;
	}
	.buy_item .th>div:nth-of-type(3){
		text-align: right;
	}
	.buy_item .th .checkbox span{
		border:1px solid #fff;
	}
	
	/*公共样式*/
	.buy_item li>div{
		float:left;
		box-sizing: border-box;
	}
	.buy_item li>div:nth-of-type(1)>span{
		display: inline-block;
		width:20px;
		height: 20px;
		border:1px solid #0063b5;
		border-radius: 50%;
	}
	.buy_item li>div:nth-of-type(2){
		width:30%;
		margin-left: 8%;
	}
	.buy_item li>div:nth-of-type(3){
		width:62%;
	}
	.buy_item .tr div:nth-of-type(2) img{
		width:100%;
	}
	.buy_item .tr{
		margin-bottom: 2px;
		border-bottom:1px solid #0063b5;
		border-top:1px solid #0063b5;
		padding: 20px;
		font-size: 14px;
		position: relative;
	}
	.buy_item .tr .introduce h3{
		color: #0063b5;
		font-size: 16px;
	}
	.buy_item .tr .introduce h3>span{
		color:#ffc000;
		margin-left: 4px;
	}
	.buy_item .tr .introduce>p{
		color:#ffd040;
		font-size: 12px;
	}
	.buy_item .tr .introduce>span{
		color: #0063b5;
	}
	.buy_item .tr .introduce>span>i{
		font-style: normal;
	}
	.buy_item .tr .introduce .money{
		line-height: 40px;
		color: #0063b5;
	}
	.buy_item .tr .introduce .price{
		font-weight: bold;
		color:#ffd040;
		font-size: 16px;
	}
	.buy_item .tr .introduce .amount{
		float:right;
	}
	.buy_item li>div:nth-of-type(1) span{
		position:absolute;
		left:20px;
		top:50%;
		transform: translateY(-50%);
	}
	.buy_item .th .checkbox span.active{
		background: url('../../assets/image/select01.png') no-repeat;
		background-size: 20px 20px;
	}
	.buy_item .tr .checkItem span.active{
		background: url('../../assets/image/select02.png') no-repeat;
		background-size: 20px 20px;
	}
	.tr .delItem{
		position: absolute;
		bottom:0;
		right:0;
		display: inline-block;
		width:0px;
		height: 0px;
		border-bottom: 12px solid #0063B5;
		border-right: 12px solid #0063B5;
		border-top:12px solid transparent;
		border-left:12px solid transparent;
		color:#fff;
	}
	.tr .delItem>span{
		position: absolute;
		top:-6px;
		left: 0px;
	}
	.account{
		height: 40px;
		background:#0063b5;
		color:#fff;
		font-size: 14px;
	}
	.account>div{
		float:left;
		line-height: 40px;
	}
	.account .numAll{
		width:30%;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.account .priceAll{
		width:50%;
		text-align: right;
		padding-right: 6px;
		box-sizing: border-box;
	}
	.account .account_btn{
		width:20%;	
		display: inline-block;
		line-height: 40px;
		text-align: center;
		background:#ffc000;
		color:#fff;
	}
	.current{
		text-shadow: 1px 1px 1px rgba(255,255,255,.5);
	}
</style>