<template>
	<main>
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/image/banner01.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/image/banner02.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/image/banner03.jpg" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>	
		<ul class="sub_nav">
			<li class="item">
				<span></span>
				<p>我的收藏</p>
			</li>
			<li class="item">
				<span></span>
				<p>物流咨询</p>
			</li>
			<li class="item">
				<span></span>
				<p>新品上市</p>
			</li>
			<li class="item">
				<span></span>
				<p>生活百科</p>
			</li>
			<li class="item">
				<span></span>
				<p>活动专区</p>
			</li>
			<li class="item">
				<span></span>
				<p>闪惠专区</p>
			</li>
			<li class="item">
				<span></span>
				<p>热销排行</p>
			</li>
			<li class="item">
				<span></span>
				<p>F2C</p>
			</li>
		</ul>
		<div class="recommend">
			<div class="recommend_top">
				<div class="left">
					<a>
						<img src="../../assets/image/recom_01.jpg"/>
					</a>
				</div>
				<div class="right">
					<div class="r_top">
						<a>
							<img src="../../assets/image/recom_02.jpg" />
						</a>
					</div>
					 
					<ul class="r_btm">
						<li>
							<span>生活百科</span>
							<a>
								<img src="../../assets/image/recom_03.jpg"/>
							</a>
						</li>
						<li>
							<span>新会员好礼</span>
							<a>
								<img src="../../assets/image/recom_04.jpg"/>
							</a>
						</li>
					</ul>
				 
				</div>
			</div>
			<div class="recommend_btm">
				<a>
					<img src="../../assets/image/recom_05.jpg"/>
				</a>
			</div>
		</div>
		<div class="container" v-for="(v,k) in dataAll">
			<div class="list_title">
				<span class="hr_l"></span>
				<span class="tit">{{nav[k]}}</span>
				<span class="hr_r"></span>
			</div>
			<ul class="show_list">
				<li v-for="(n,i) in v" @click="change(k,i)">
					<router-link :to="'/proCenter/'+n.id">
						<img :src="n.imgSrc"/>
						<div class="tig" v-if="n.checked">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</router-link>
					<p>{{n.title}}</p>
					<div class="msg">
						<span class="buy"></span>
						<span class="price">￥{{n.price}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="ad">
			<a>
				<img src="../../assets/image/ad.jpg" />
			</a>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				data:new Array(6),
				nav:["密封容器","水瓶/水杯","厨房用品","生活日用","生活用电","卡通/幼儿"],
				show:false,
				dataAll:[]
			}
		},
		methods:{
			change(k,i){
				this.dataAll[k][i].checked=!this.dataAll[k][i].checked;
			}
		},
		mounted(){
			this.$http.get('./src/json/data.json').then(function(res){
				var getData=res.body.data;
				for(var i=0;i<this.data.length;i++){
					this.data[i]=new Array();
					for(var j=0;j<getData.length;j++){
						if(getData[j].type==i){
							this.data[i].push(getData[j]);
						}
					}
				}
				console.log(this.data)
				this.dataAll=this.data;
			},function(){
				
			})
		}
	}
	/*熟练webpack打包工具    flex  MVC开发模式  node.js+MongoDB 前端工程化*/
</script>
<style scoped>
	main{
		width:100%;
		margin-bottom:50px;
	}
	main .banner{
		width:100%;
	}
	.sub_nav{
		overflow: hidden;
		margin-bottom: 8px;
	}
	.sub_nav .item{
		width:25%;
		text-align: center;
		float:left;
		color:#0063b5;
		padding-top:8px;
	}
	.sub_nav .item span{
		display: inline-block;
		width:35px;
		height: 34px;
		background: url('../../assets/image/nav_01.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(2) span{
		background: url('../../assets/image/nav_02.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(3) span{
		background: url('../../assets/image/nav_03.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(4) span{
		background: url('../../assets/image/nav_04.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(5) span{
		background: url('../../assets/image/nav_05.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(6) span{
		background: url('../../assets/image/nav_06.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(7) span{
		background: url('../../assets/image/nav_07.png');
		background-size: 35px 34px;
	}
	.sub_nav .item:nth-of-type(8) span{
		background: url('../../assets/image/nav_08.png');
		background-size: 35px 34px;
	}
	.recommend_top{
		overflow: hidden;
	}
	.recommend_top .left{
		float:left;
		width:45%;
	}
	.recommend_top .left a{
		display: inline-block;
		width:100%;
	}
	.recommend_top .left a img{
		width:100%;
	}
	.recommend_top .right{
		float:right;
		width:55%;
	}
	.recommend_top .right .r_top{
		width:100%;
		margin-bottom: 4px;
	}
	.recommend_top .right .r_top a{
		display: inline-block;
	}
	.recommend_top .right .r_top img{
		width:110%;
	}
	.recommend_top .right .r_btm{
		overflow: hidden;
		width:100%;
	}
	.recommend_top .right .r_btm li{
		float:left;
		width:50%;
		text-align: center;
		color:#0063b5;
	}
	.recommend_top .right .r_btm li span{
		display: inline-block;
		width:100%;
	}
	.recommend_top .right .r_btm li a{
		margin-top: 8px;
		display:inline-block;
		width:80px;
		height: 80px;
		border-radius: 50%;
		overflow: hidden;
	}
	.recommend_top .right .r_btm li a img{
		height: 100%;
	}
	.recommend_btm{
		width:100%;
	}
	.recommend_btm a{
		display: inline-block;
		width:100%;
	}
	.recommend_btm a img{
		width:100%;
	}
	.list_title{
		color:#106dba;
		line-height: 40px;
		height: 40px;
		position: relative;
	}
	.list_title .tit{
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.list_title .hr_l,.list_title .hr_r{
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		display: inline-block;
		height: 0;
		width: 38%;
		border-top:5px dotted #106dba;
		display: inline-block;
	}
	.list_title .hr_r{
		right: 0px;
	}
	.list_title .hr_l{
		left:0px;
	}
	.show_list{
		overflow: hidden;
	}
	.show_list>li{
		float:left;
		width:33.3%;
		padding: 6px;
		box-sizing: border-box;
		border:1px solid #106dba;
		margin-right: -1px;
	}
	.show_list>li>a{
		display: inline-block;
		width:100%;
		box-sizing: border-box;
		position: relative;
	}
	.show_list>li>a>img{
		width:100%;
	}
	.show_list>li>p{
		color:#106dba;
		line-height: 24px;
		width:100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.show_list .msg .buy{
		display: inline-block;
		width:26px;
		height: 15px;
		background: url('../../assets/image/logo1.png') no-repeat;
		background-size: 26px 15px;
	}
	.show_list .msg .price{
		float:right;
		color:#ffc000;
	}
	.tig{
		position: absolute;
		bottom:6px;
		left:50%;
		transform: translateX(-50%);
		background: #fff;
		overflow: hidden;
		width:70px;
		margin:0 auto;
	}
	.tig>span{
		display: inline-block;
		width:24px;
		height: 24px;
		border:1px solid #106dba;
		float: left;
		box-sizing: border-box;
		padding: 6px;
		margin-left: -1px;
	}
	.tig>span:nth-of-type(1){
		background:url('../../assets/image/icon_02.png') no-repeat center center;
		background-size: 14px 14px;
	}
	.tig>span:nth-of-type(2){
		background:url('../../assets/image/icon_01.png') no-repeat center center;
		background-size: 14px 14px;
	}
	.tig>span:nth-of-type(3){
		background:url('../../assets/image/icon_03.png') no-repeat center center;
		background-size: 14px 14px;
	}
	.ad{
		width:100%;
		margin:10px 0;
	}
	.ad a{
		display: inline-block;
		width:100%;
	}
	.ad>a>img{
		width: 100%;
	}
</style>
<style>

	.mint-swipe {
	    overflow: hidden;
	    position: relative;
	    width: 100%;
	    height:100%;
	}
	.mint-swipe-items-wrap,.mint-swipe-item{
		width:100%;
		height:0;
		padding-bottom:50%;
	}
	.mint-swipe img{
		width:100%;
	}
	 
</style>
