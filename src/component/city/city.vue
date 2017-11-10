<template>
	<main>
		<div class="addr_wrap">
			<div class="addr_center">
				<div class="wrap">
					<span class="return_icon" @click="go">
						<img src="../../assets/image/car_return.png" />
					</span>
					<div class="logo">
						<span>选择地区</span>
					</div>
				</div>
			</div>
			<div class="addr_con">
				<ul class="cityitem" v-if="pro">
					<li v-for="(v,k) in proData" @click="changePro(k)">
						<span>{{v.p}}</span>
					</li>					 
				</ul>
				<ul class="cityitem" v-if="city">
					<li v-for="(v,k) in cityData" @click="changeCity(k)">
						<span>{{v.n}}</span>
					</li>					 
				</ul>
				<ul class="cityitem" v-if="town">
					<li v-for="(v,k) in townData" @click="changeTown(k)">
						<span>{{v.s}}</span>
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
				proData:[],
				cityData:[],
				townData:[],
				pro:true,
				city:false,
				town:false,
				cityMsg:''
			}
		},
		props:['bol'],
		methods:{
			go(){
				this.bol.selectCityBol=false;
			},
			changePro(k){
				this.pro=false;
				this.city=true;
				this.town=false;
				this.cityData=this.proData[k].c;
				this.cityMsg=this.cityMsg+this.proData[k].p;
			},
			changeCity(k){
				this.pro=false;
				this.city=false;
				this.town=true;
				this.townData=this.cityData[k].a;
				if(this.townData==null){
					this.bol.selectCityBol=false;
				}
				this.cityMsg=this.cityMsg+this.cityData[k].n;
				this.$emit('send',this.cityMsg);
			},
			changeTown(k){
				this.bol.selectCityBol=false;
				this.cityMsg=this.cityMsg+this.townData[k].s;
				this.$emit('send',this.cityMsg);
			}
		},
		mounted(){
			this.$http.get('./src/json/city.json').then(function(res){
				console.log(res)
				this.proData=res.body.citylist;
			},function(){
				
			})
		}
	}
</script>
<style scoped>
	main{
		position: fixed;
		top:0;
		left:0;
		width:100%;;
		height: 100%;
		background: #fff;
		overflow: scroll;
	}
	.addr_wrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		font-family: "微软雅黑";
		margin-bottom: 60px;
		background: #fff;
	}
	
	.addr_center {
		height: 50px;
		background: #0063b5;
		padding: 0 26px;
		width: 100%;
		box-sizing: border-box;
		font-family: "微软雅黑";
		position: fixed;
		top:0;
		left:0;
		z-index:1;
	}
	
	.addr_center .wrap {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.addr_center .return_icon {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 23px;
		height: 23px;
		display: inline-block;
	}
	
	.addr_center .return_icon img {
		height: 100%;
	}
	
	.addr_center .save{
		position: absolute;
		right:0;
		top: 50%;
		transform: translateY(-50%);
		color:#fff;
	}
	
	.addr_center .logo {
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
	
	.addr_center .logo span {
		vertical-align: super;
	}
	
	.addr_center .logo img {
		height: 100%;
	}
	.addr_con{
		margin-top:50px;
		width:100%;
		box-sizing: border-box;
	}
	.addr_con ul{
		width:100%;
	}
	.addr_con ul li{
		width:100%;
		padding: 0 10px;
		box-sizing: border-box;
		line-height: 40px;
		position: relative;
	}
	.addr_con ul li:after{
		content: ">";
		display: inline-block;
		font-family: '宋体';
		font-weight: bold;
		float:right;
		color:#666;
	}
</style>