<template>
	<transition enter-active-class="animated slideInRight">
	<main>
		<div class="pro_wrap">
			<div class="pro_center">
				<div class="wrap">
					<span class="return_icon" @click="go">
						<img src="../../assets/image/pro_return.png" />
					</span>
					<div class="logo">
						<span>宝贝详情</span>
					</div>
					<span class="scan_icon">
						<img src="../../assets/image/pro_scan.png"/>
					</span>
				</div>
			</div>	
			<div class="show_pic">
				<img :src="currentImg">
				<ul>
					<li v-for="v in imgSrc" @click="changePic(v)">
						<img :src="v">
					</li>
				</ul>
			</div>
			<div class="message">
				<div class="msg_l">
					<p class="tit">{{proData.title}}</p>
					<p class="tig">{{proData.msg}}</p>
				</div>
				<div class="msg_r">
					<span :class="{active:saveClick}" @click="changeSave">收藏</span>
				</div>
			</div>
			<div class="buy_detail">
				<ul class="box">
					<li>
						<span class="key">编&nbsp;&nbsp;&nbsp;号：</span>
						<span class="value">HLC659(Y/G)</span>
					</li>
					<li>
						<span class="sugPrice">建议零售价：</span>
						<span class="sugValue">￥{{proData.originPrice}}</span>
					</li>
					<li>
						<span class="price">售&nbsp;&nbsp;&nbsp;价：</span>
						<span class="priceValue">￥{{proData.price}}</span>
					</li>
					<li>
						<span class="color">颜&nbsp;&nbsp;&nbsp;色：</span>
						<span class="colorOne" v-for="v in color" v-bind:style="'background:'+v+';'"></span>
					</li>
					<li>
						<span class="number">数&nbsp;&nbsp;&nbsp;量：</span>
						<span class="reduce" @click="reduce"></span>
						<input type="text" value="1" v-model="num"/>
						<span class="add" @click="add"></span>
						<span class="tig">(当前库存：<i>1774件</i>)</span>
					</li>
				</ul>
				<div class="buy_btn">
					<a class="addCar" @click="sure">加入购物车</a>
					<a class="pay">立即支付</a>
				</div>
				
			</div>
			<div class="pro_detail">
				<h2>乐扣乐扣柠檬水杯</h2>
				<p>柠檬水杯，用一个水杯轻松享受</p>
				<ul class="detail_item">
					<li>
						<p>当场把水果榨汁做成排毒果汁的柠檬水杯</p>
						<img src="../../assets/image/intro_01.jpg"/>
					</li>
					<li>
						<p> 不含破坏环境荷尔蒙物质多酚A的材质，可以放心的使用</p>
						<img src="../../assets/image/intro_02.jpg"/>
					</li>
					<li>
						<p>520ml的充分大容量，密封盖子方便携带</p>
						<ol class="introduce">
							<li>
								<div class="pic_box">
									<img src="../../assets/image/intro_04.png">
								</div>
								<p>圆润杯口</p>
							</li>
							<li>
								<div class="pic_box">
									<img src="../../assets/image/intro_05.png">
								</div>
								<p>防漏杯盖</p>
							</li>
							<li>
								<div class="pic_box">
									<img src="../../assets/image/intro_06.png">
								</div>
								<p>方便携带</p>
							</li>
						</ol>
					</li>
					<li>
						<p> 水杯整个可分离方便清洗，安全卫生</p>
						<img src="../../assets/image/intro_03.jpg"/>
					</li>
				</ul>
			</div>
		</div>
		<div class="shadeBox" v-if="show" @click="hide">
			<div class="shade">
				<i class="sure"></i>
				<p>恭喜您！已加入购物车！</p>
			</div>
		</div>
	</main>
	</transition>
</template>
<script> 
	export default{
		data(){
			return{
				currentImg:"./src/assets/image/pro_pic.jpg",
				color:['#fcfb26','#cedb42'],
				num:1,
				saveClick:false,
				show:false,
				imgSrc:["./src/assets/image/pro_01.jpg","./src/assets/image/pro_02.jpg","./src/assets/image/pro_03.jpg"],
				proData:{
					'title':'乐扣乐扣柠檬杯(黄色/绿色 520ML)',
				 	'msg':'商品促销:2016.6.27-7.31购买多款夏日新款水杯享受7折活动价格',
				 	'shopid':'HLC659(Y/G)',
				 	'price':'47.60',
				 	'originPrice':'68.00',
				 	'amount':'1',
				 	'tig':'',
				 	'imgBig':'./src/assets/image/car02.jpg',
				 	'checked':false
				}
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			changePic(v){
				this.currentImg=v;
			},
			add(){
				this.num=this.num+1;
				this.proData.amount=this.num;
			},
			reduce(){
				if(this.num-1<1){
					this.num=1;
				}else{
					this.num=this.num-1;
				}
				this.proData.amount=this.num;
			},
			changeSave(){
				this.saveClick=!this.saveClick;
			},
			hide(){
				this.show=false;
			},
			sure(){
				this.show=true;
				this.$store.state.data.push(this.proData);
			}
		},
		mounted(){
			this.$http.get('./src/json/data.json').then(function(res){
				var getData=res.body.data;
				for(var i=0;i<getData.length;i++){
					/*console.log(this.$route.params.id)*/
					if(getData[i].id==this.$route.params.id){
						this.proData=getData[i];
						break;
					}
				}
			},function(){
				
			})
			console.log(this.proData)
			 
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
	.pro_wrap{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		font-family: "微软雅黑";
		margin-bottom: 60px;
		background: #fff;
	}
	.pro_center{
	 	height: 50px;
	 	background:#0063b5;
	 	padding:0 26px;
	 	width:100%;
	 	box-sizing: border-box;
	 	font-family: "微软雅黑";
	 }
	 .pro_center .wrap{
	 	width:100%;
	 	height: 100%;
	 	position: relative;
	 }
	 .pro_center .return_icon{
	 	position: absolute;	
	 	left:0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .pro_center .scan_icon{
	 	position: absolute;
	 	right: 0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:23px;
	 	height: 23px;
	 	display: inline-block;
	 }
	 .pro_center .return_icon img,.pro_center .scan_icon img{
	 	width:100%;
	 }
	 .pro_center .logo{
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
	 .pro_center .logo span{
	 	vertical-align:super;
	 }
	 .pro_center .logo img{
	 	height: 100%;
	 }
	 .show_pic{
	 	width:100%;
	 	position: relative;
	 }
	 .show_pic img{
	 	width:100%;
	 }
	 .show_pic ul{
	 	position: absolute;
	 	width:60%;
	 	left:50%;
	 	bottom:20px;
	 	overflow: hidden;
	 	transform: translateX(-50%);
	 }
	 .show_pic ul li{
	 	float:left;
	 	width:33.3%;
	 	padding:0 6px;
	 	box-sizing: border-box;
	 }
	 .message{
	 	margin: 0 10px;
	 	padding-bottom: 10px;
	 	box-sizing: border-box;
	 	border-bottom:2px dotted #ffc000; 
	 	overflow: hidden;
	 }
	 .message .msg_l{
	 	float:left;
	 	width:88%;
	 	font-family: "微软雅黑";
	 	border-right:2px dotted #ffc000;
	 	box-sizing: border-box;
	 }
	 .message .msg_l .tit{
	 	color:#0063b5;
	 	line-height: 40px;
	 }
	 .message .msg_l .tig{
	 	color:#ffc000;
	 	font-size: 14px;
	 	white-space: nowrap;
	 	text-overflow: ellipsis;
	 	overflow: hidden;
	 	
	 }
	 .message .msg_r{
	 	float:right;
	 	width:12%;
	 }
	 .message .msg_r>span{
	 	color:#ffc000;
	 	display: block;
	 	color:#ffc000;
	 	width:100%;
	 	text-align: center;
		margin-top: 8px;
	 }
	 .message .msg_r>span:before{
	  	content: "";
	  	display: inline-block;
	  	width:100%;
	  	height: 22px;
	  	background: url('../../assets/image/save.png') no-repeat center center;
	  	background-size: 22px 22px;
	  	margin-bottom: 4px;
	 }
	 .message .msg_r>span.active:before{
	 	background: url('../../assets/image/save1.png') no-repeat center center;
	  	background-size: 22px 22px;
	 }
	 .buy_detail{
	 	padding: 10px;
	 	box-sizing: border-box;
	 	color:#0063b5;
	 }
	 .buy_detail .box li{
	 	font-size: 14px;
	 	margin-bottom: 6px;
	 }
	 .buy_detail .box li .priceValue{
	 	color:#ffc000;
	 	font-size: 16px;
	 }
	 .buy_detail .box li .colorOne{
	 	display: inline-block;
	 	width:16px;
	 	height: 16px;
	 	border:1px solid #0063b5;
	 	background:#ffc000;
	 	margin-right: 8px;
	 }
	 .buy_detail .box li input{
	 	border:1px solid #0063b5;
	 	width:24px;
	 	text-align: center;
	 	height: 20px;
	 	line-height: 20px;
	 	color:#0063b5;
	 	outline: none;
	 }
	 .buy_detail .box li .add,.buy_detail .box li .reduce{
	 	display: inline-block;
	 	width:22px;
	 	height: 20px;
	 	vertical-align: middle;
	 }
	 .buy_detail .box li .add{
	 	background: url('../../assets/image/reduce.png');
	 	background-size: 22px 20px;
	 }
	 .buy_detail .box li .reduce{
	 	background: url('../../assets/image/add.png');
	 	background-size: 22px 20px;
	 }
	 .buy_detail .box li .tig i{
	 	font-style: normal;
	 }
	 .buy_btn{
	 	width:82%;
	 	margin:20px auto;
	 	overflow: hidden;
	 }
	 .buy_btn a{
	 	width:45%;
	 	float:left;
	 	text-decoration: none;
	 	display: inline-block;
	 	text-align: center;
	 	background:#0063b5;
	 	border-radius: 10px;
	 	color:#fff;
	 	padding: 7px 8px;
	 	box-sizing: border-box;
	 	line-height: 18px;
	 }
	 .buy_btn a:nth-of-type(2){
	 	float:right;
	 }
	 .buy_btn a:nth-of-type(1){
	 	padding-left: 20px;
	 	position: relative;
	 }
	 .buy_btn a:nth-of-type(1):before{
	 	content: "";
	 	display: inline-block;
	 	position: absolute;
	 	left:6px;
	 	top:6px;
	 	width:18px;
	 	height: 18px;
	 	background: url('../../assets/image/car.png') no-repeat center center;
	 	background-size: 18px 18px;
	 	vertical-align: middle;
	 }
	 .pro_detail{
	 	text-align: center;
	 }
	 .pro_detail h2{
	 	color:#0063b5;
	 	width:100%;
	 	font-weight: bold;
	 }
	 .pro_detail p{
	 	font-size: 14px;
	 	color:#0063b5;
	 	line-height: 40px;
	 }
	 .pro_detail .detail_item li>img{
	 	width:100%;
	 }
	 .introduce{
	 	width:100%;
	 }
	 .introduce li{
	 	float:left;
	 	width:33.3%;
	 	padding: 10px;
	 	box-sizing: border-box;
	 }
	 .introduce li .pic_box{
	 	width:100%;
	 	height:0;
	 	padding-bottom: 100%;
	 	border: 2px solid #0063B5;
	 	border-radius: 50%;
	 }
	 .introduce li .pic_box img{
	 	width:100%;
	 }
	 .shadeBox{
		position: fixed;
		width:100%;
		height: 100%;
		top:0;
		left:0;
		background:rgba(0,99,181,0.4);
	}
	.shadeBox .shade{
		width:80%;
		height: 240px;
		background: #fff;
		position: absolute;
		top:220px;
		left: 50%;
		transform: translateX(-50%);
		border-radius:4px;
	}
	.shadeBox .shade i{
		content: "";
		display: inline-block;
		width: 78px;
		height: 78px;
		background: url('../../assets/image/sure.png');
		background-size: 78px 78px;
		position: absolute;
		top:50px;
		left: 50%;
		transform: translateX(-50%);
	}
	.shadeBox .shade p{
		font-size: 18px;
		color:#ffc000;
		margin-top:160px;
		text-align: center;
	}
</style>