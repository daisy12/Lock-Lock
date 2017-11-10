<template>
	<main>
		<div class="order_wrap">
			<div class="crumbs">
				<span>确定订单</span>
				<div>
					<span class="serve"></span>
					<span class="scan"></span>
				</div>
			</div>
			<div class="private">
				<span class="name">收货人：{{addrMsg.name}}</span>
				<span class="tel">{{addrMsg.tel}}</span>
			</div>
			<a class="address" @click="setAddressFun">
				<p>收货地址：{{addrMsg.addr+" "+addrMsg.subAddr}}</p>
			</a>
			<div class="tig">
				<p>为了您能尽快收到宝贝，请输入详细的地址哦</p>
			</div>
		</div>
		<div class="dispatch_wrap">
			<div class="shopMsg" v-for="v in data">
				<span>{{v.shop}}</span>
				<div class="shopMsg_l">
					<img src="../../assets/image/order_pic.jpg">
				</div>
				<div class="shopMsg_r">
					<h3 class="title">{{v.title}}</h3>
					<p class="price">{{v.price|toMoney}}</p>
					<p class="shopId">
						编号：<span>{{v.shopid}}</span>
					</p>
					<p class="amount">
						数量:<span>{{v.amount}}</span>
					</p>
				</div>
			</div>
			<ul class="dispatch">
				<li>
					<span class="tit">配送方式</span>
					<span>快递 免邮</span>
				</li>
				<li>
					<span class="tit">配送时间</span>
					<span>16:00前付款，预计06月30日送达</span>
				</li>
				<li>
					<span class="tit">买家留言</span>
					<div class="input_box">
						<input type="text" @focus="writeFocus" @blur="writeBlur" v-model="writeCon"/>
						<p v-if="write">选填，可以写您的要求哦</p>
					</div>
				</li>
			</ul>
			<p class="include">共
				<span>{{numAll}}</span>件商品，合计
				<span class="moneyAll">{{moneyAll|toMoney}}</span>
			</p>
		</div>
		<div class="order_btm">
			<p>
				<span>使用优惠券</span>
				<span class="noUse">未使用</span>
			</p>
			<p>
				<span>使用淘金币</span>
				<span class="noUse">未使用</span>
			</p>
			<div class="submit">
				<div class="all">总计：
					<span>{{moneyAll|toMoney}}</span>
				</div>
				<div class="certain_btn" @click="sure">确定</div>
			</div>
		</div>
		<div class="shadeBox" v-if="show" @click="hide">
			<div class="shade">
				<i class="sure"></i>
				<p>{{payMsg}}</p>
			</div>
		</div>
		<div class="payBox" v-if="bufferBol">
			<div class="buffer">
				<img src="../../assets/image/loader.gif"/>
			</div>
		</div>
		<div class="payBox" v-if="payshow">
			<div class="payshade">
				<p>请输入支付密码</p>
				<div class="pay_btn">
					<input type="text" v-model="a"/>
					<input type="text" v-model="b"/>
					<input type="text" v-model="c"/>
					<input type="text" v-model="d"/>
					<input type="text" v-model="e"/>
					<input type="text" v-model="f"/>
				</div>
				<button @click="submit">确定</button>
			</div>
		</div>
		<updateAddr v-if="setAddress.show" :setAddress="setAddress"></updateAddr>
		<orderDetail v-if="detailShow"></orderDetail>
	</main>
</template>
<script>
	import updateAddr from '../updateAddr/updateAddr.vue';
	import orderDetail from '../orderDetail/orderDetail.vue'
	export default{
		data(){
			return{
				num:0,
				show:false,
				write:true,
				detailShow:false,
				bufferBol:false,
				writeCon:'',
				moneyAll:0,
				numAll:0,
				setAddress:{
					show:false
				},
				a:"",
				b:"",
				c:"",
				d:"",
				e:"",
				f:"",
				payshow:false,
				payMsg:'恭喜您！订单已提交成功！'/*,
				addrMsg:{
					"name":"李某人",
					"tel":"18219111803",
					"addr":"广东省广州市天河区大观路商务大厦 B栋5F510",
					"subAddr":""
				}*/,
				data:[]
				/*,
				data:[{
					"shop":"乐扣商城",
					"name":"乐扣乐扣玻璃储物罐(3050ml)",
					"price":96,
					"shopId":"LLG569S10-OCH",
					"num":1
				},
				{
					"shop":"银之行",
					"name":"精美送闺蜜毕业礼物银项链",
					"price":150,
					"shopId":"ABG569S10-OCH",
					"num":2
				}]*/
			}
		},
		components:{
			'updateAddr':updateAddr,
			'orderDetail':orderDetail
		},
		methods:{
			hide(){
				this.show=false;
				this.bufferBol=true;
				var that=this;
				if(this.num==0){
					setTimeout(function(){
						that.bufferBol=false;
						that.payshow=true;
					},1000);
				}
				this.num=this.num+1;
			},
			sure(){
				this.show=true;
				var tempData=this.$store.state.data;
				for(var j=0;j<tempData.length;){
					if(tempData[j].checked){
						tempData[j].serial='123456784';
						tempData[j].time=new Date();
						/*tempData[j].payType=1;*/
						this.$store.state.orderData.push(tempData[j]);
						tempData.splice(j,1);
					}else{
						j++;
					}
				}
				console.log(this.$store.state.orderData);	
				this.data=[];
			},
			submit(){
				
				this.payshow=false;
				this.show=true;
				this.payMsg="恭喜您！支付成功！"
				var that=this;
				setTimeout(function(){
					that.bufferBol=false;
					that.detailShow=true;
				},1000)
				 
			},
			writeFocus(){
				this.write=false;
			},
			writeBlur(){
				if(this.writeCon){
					this.write=false;
				}else{
					this.write=true;
				}
			},
			setAddressFun(){
				this.setAddress.show=true;
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
		mounted(){
			var tempData=this.$store.state.data;
			for(var j=0;j<tempData.length;j++){
				if(tempData[j].checked){
					this.data.push(tempData[j]);
				}
			}
			console.log(this.data);
			for(var i=0;i<this.data.length;i++){
				this.numAll=this.numAll+this.data[i].amount;
				this.moneyAll=this.moneyAll+this.data[i].price*this.data[i].amount;
			}
		},
		computed:{
			addrMsg(){
				var temp={};
				for(var i=0;i<this.$store.state.address.length;i++){
					if(this.$store.state.address[i].checked){
						temp=this.$store.state.address[i];
					}
				}
				return temp;
			}
		}
	}
</script>
<style scoped>
	main{
		width:100%;
		height: 100%;
		background: #fff;
		padding: 0 20px;
		box-sizing: border-box;
		font-family: "微软雅黑";
		margin-bottom: 70px;
	}
	main .order_wrap,main .dispatch_wrap{
		width:100%;
		padding-bottom: 10px;
		border-bottom: 6px solid #0063b5;
	}
	.crumbs{
		padding-bottom: 14px;
	}
	.crumbs>span{
		color:#0063b5;
		display: inline-block;
		margin-top: 8px;
	}
	.crumbs>span:before{
		content:"<";
		display: inline-block;
		width:16px;
		height: 16px;
		font-family: '宋体';
		font-weight: bold;
	}
	.crumbs>div{
		float: right;
	}
	.crumbs .serve{
		display: inline-block;
		width:18px;
		height: 40px;
		background: url('../../assets/image/chat.png') no-repeat center center;
		background-size: 18px 18px;
		margin-right: 18px;
	}
	.crumbs .scan{
		display: inline-block;
		width:18px;
		height: 40px;
		background: url('../../assets/image/scan1.png') no-repeat center center;
		background-size: 18px 18px;
		margin-left: 20px;
		position: relative;
	}
	.crumbs .scan:before{
		display: inline-block;
		content: "";
		height: 100%;
		border-left:2px solid #0063b5;
		position: absolute;
		top:0;
		left:-20px;
	}
	.address{
		text-decoration: none;
	}
	.private,.address p,.tig{
		width:80%;
		margin:0 auto;
		font-size: 14px;
		line-height: 24px;
		color:#0063b5;
	}
	.private{
		overflow: hidden;
	}
	.private .name{
		float:left;
	}
	.private .tel{
		float:right;
	}
	.address p{
		position: relative;
	}
	.address p:before{
		content:"";
		display: inline-block;
		width:14px;
		height: 16px;
		background: url('../../assets/image/addr.png') no-repeat;
		background-size: 14px 16px;
		position: absolute;
		top:4px;
		left:-20px;
		position: absolute;
	}
	.address p:after{
		content:">";
		font-family: "宋体";
		font-weight: bold;
		position: absolute;
		top:4px;
		right:-20px;
	}
	.tig{
		color:#ffc000;
		font-size: 12px;
	}
	.tig p:before{
		content: "";
		display: inline-block;
		width:12px;
		height: 12px;
		background: url('../../assets/image/tig.png');
		background-size: 12px 12px;
		vertical-align: middle;
		margin-right: 4px;
	}
	.shopMsg{
		padding: 20px;
		color:#0063b5;
	}
	.shopMsg>span{
		display: block;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.shopMsg>span:before{
		content: "";
		display: inline-block;
		width:24px;
		height: 16px;
		background: url('../../assets/image/logo2.png');
		background-size: 24px 16px;
		margin-right: 4px;
	}
	.shopMsg{
		overflow: hidden;
	}
	.shopMsg .shopMsg_l{
		float:left;
		width:30%;
		box-sizing: border-box;
		border:1px solid #0063b5;
		box-shadow: 1px 1px 2px #999;
	}
	.shopMsg .shopMsg_l img{
		width:100%;
	}
	.shopMsg .shopMsg_r{
		float:left;
		width:70%;
		font-size: 14px;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.shopMsg_r p{
		font-size: 12px;
		line-height:24px;
	}
	.shopMsg_r p.price{
		color:#ffc000;
	}
	.dispatch li{
		font-size: 12px;
		color:#0063b5;
		border-bottom: 1px dotted #0063b5;
		padding: 6px 20px;
	}
	.dispatch li>span:nth-of-type(2){
		float:right;
	}
	.input_box{
		position: relative;
		float:right;
		width:70%;
	}
	.dispatch li div input{
		width:100%;
		border:none;
		outline: none;
		background: transparent;
	}
	.input_box p{
		position: absolute;
		top:0;
		right:0;
		opacity: 0.6;
		z-index:-1;
	}
	.include{
		font-size: 12px;
		color:#0063b5;
		text-align: right;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.include .moneyAll{
		color:#ffc000;
	}
	.order_btm{
		margin-top:10px;
	}
	.order_btm p{
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		color:#0063b5;
	}
	.order_btm p .noUse{
		float: right;
	}
	.order_btm p .noUse:after{
		content: ">";
		width:0;
		height: 0;
		display: inline-block;
		font-family: '宋体';
		font-weight: bold;
		margin-left: 8px;
	}
	.submit{
		margin-top:10px;
		height: 40px;
		color:#fff;
	}
	.submit>.all{
		float:left;
		width:80%;
		line-height: 40px;
		background:#0063b5;
		text-align: right;
		padding-right: 6px;
		box-sizing: border-box;
	}
	.submit .certain_btn{
		background:#ffc000;
		float:right;
		width:20%;
		height: 40px;
		line-height: 40px;
		text-align: center;
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
	.payBox{
		position: fixed;
		width:100%;
		height: 100%;
		top:0;
		left:0;
		background:rgba(0,99,181,0.4);
	}
	.payBox .payshade{
		width:80%;
		height: 240px;
		background: #fff;
		position: absolute;
		top:220px;
		left: 50%;
		transform: translateX(-50%);
		border-radius:4px;
	}
	.payBox .payshade p{
		font-size: 18px;
		color:#ffc000;
		margin-top:20px;
		text-align: center;
	}
	.payBox .payshade .pay_btn{
		position: absolute;
		width: 70%;
		top:90px;
		left: 50%;
		transform: translateX(-50%);
	}
	.payBox .payshade .pay_btn input{
		float:left;
		display: inline-block;
		background: #fff;
		outline: none;
		border:none;
		border-bottom: 1px solid #0063B5;
		width:15%;
		margin-right: 1%;
		text-align: center;
		color:#0063B5;
	}
	.payBox .payshade button{
		position: absolute;
		width: 20%;
		height: 34px;
		top:160px;
		left: 50%;
		transform: translateX(-50%);
		background: #0063B5;
		color:#fff;
		border:none;
		outline: none;
	}
	.payBox .buffer{
		position: absolute;
		width:60px;
		height: 60px;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.payBox .buffer img{
		width: 100%;
	}
</style>