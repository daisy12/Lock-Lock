<template>
	<main>
		<div class="addr_wrap">
			<div class="addr_center">
				<div class="wrap">
					<span class="return_icon" @click="go">
						<img src="../../assets/image/car_return.png" />
					</span>
					<div class="logo">
						<span>添加新地址</span>
					</div>
					<span class="save" @click="save">保存</span>
				</div>
			</div>
			<div class="addr_con">
				<ul>
					<li>
						<span>收货人</span>
						<input type="text" v-model="name"/>
					</li>
					<li> 
						<span>联系电话</span>
						<input type="text" v-model="tel"/>
					</li>
					<li class="district">
						<span>所在地区</span>
						<input type="text" v-model="disMsg"/>
						<span class="selectDis" @click="selectDis">请选择</span>
					</li>
					<li class="road">
						<span>街道</span>
						<input type="text" v-model="road"/>
					</li>
				</ul>
				<textarea placeholder="详细地址" v-model="detailAddr"></textarea>
				<div class="defaultSet">
					<span>设为默认地址</span>
					<div class="checkItem">
						<span :class="{active:checked}" @click="selectItemFun()"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="shadeBox" v-if="show" @click="hide">
			<div class="shade">
				<i class="sure"></i>
				<p>保存成功！</p>
			</div>
		</div>
		<city v-if="selectObj.selectCityBol" :bol="selectObj" @send="get"></city>
	</main>
</template>
<script>
	import city from '../city/city.vue'
	export default{
		data(){
			return{
				checked:false,
				show:false,
				selectObj:{
					selectCityBol:false
				},
				disMsg:'',
				name:'',
				tel:'',
				road:'',
				detailAddr:''
			}
		},
		components:{
			"city":city
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			selectItemFun(){
				this.checked=!this.checked;
			},
			hide(){
				this.show=false;
			},
			save(){
				this.show=true;
				var obj={
					"name":this.name,
					"tel":this.tel,
					"addr":this.disMsg+this.detailAddr,
					"subAddr":this.road,
					"checked":this.checked
				}
				if(this.checked){
					for(var i=0;i<this.$store.state.address.length;i++){
						this.$store.state.address[i].checked=false;
					}
				}
				this.$store.state.address.push(obj);
				console.log(this.$store.state.address)
				
			},
			selectDis(){
				this.selectObj.selectCityBol=true;
			},
			get(n){
				this.disMsg=n;
			}
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
		padding:10px 20px;
		box-sizing: border-box;
		color:#666;
	}
	.addr_con ul{
		width:100%;
	}
	.addr_con ul li{
		width:100%;
		line-height: 40px;
		border-bottom: 1px solid rgba(0,99,181,0.3);
	}
	.addr_con ul li>span{
		display: inline-block;
		width:20%;
	}
	.addr_con ul li>input{
		border:none;
		box-sizing: border-box;
		outline: none;
	}
	textarea{
		margin-top:20px;
		width:100%;
		height: 80px;
		border:none;
		outline: none;
	}
	.defaultSet{
		height: 40px;
		border-top:1px solid rgba(0,99,181,0.3);
		padding-top: 10px;
	}
	.checkItem{
		float:right;
	}
	.checkItem>span{
		display: inline-block;
		width:20px;
		height: 20px;
		border:1px solid #0063b5;
		border-radius: 50%;
	}
	.checkItem span.active{
		background: url('../../assets/image/select02.png') no-repeat;
		background-size: 20px 20px;
	}
	.defaultSet>span{
		float:left;
	}
	
	.selectDis{
		float: right;
	}
	.selectDis:after{
		content: ">";
		width:0;
		height: 0;
		display: inline-block;
		font-family: '宋体';
		font-weight: bold;
		margin-left: 8px;
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