<template>
	<transition enter-active-class="animated slideInRight">
		<main>
			<div class="addr_wrap">
				<div class="addr_center">
					<div class="wrap">
						<span class="return_icon" @click="go">
						<img src="../../assets/image/car_return.png" />
					</span>
						<div class="logo">
							<span>收获地址管理</span>
						</div>
						<span class="scan_icon">
						<img src="../../assets/image/pro_scan.png"/>
					</span>
					</div>
				</div>
				<ul class="addrAll">
					<li class="addr_item" v-for="(v,k) in dataAdmin">
						<div class="tit">
							<span>{{v.name}}</span>
							<span>{{v.tel|toTel}}</span>
						</div>
						<div class="addr">
							<p>{{v.addr}}</p>
							<p>{{v.subAddr}}</p>
						</div>
						<div class="addr_btn">
							<span :class="{'default':true,'active':v.checked}" @click='setDefault(k)'>设为默认</span>
							<span class="del" @click="delFun(k)">删除</span>
							<span class="edit">编辑</span>
						</div>
					</li>
				</ul>
				<router-link class="new" to="/addAddress">+ 新增地址</router-link>
			</div>
		</main>
	</transition>
</template>
<script>
	
	export default {
		data() {
			return {
				index:0
				/*data:{
					"des":[{
						"name":"哆啦A梦",
						"tel":"18219111803",
						"addr":"广东省广州市白云区大源南路65号",
						"subAddr":"(广州市公用事业技师学院)"
					},{
						"name":"梦之蓝",
						"tel":"18219111803",
						"addr":"广东省广州市白云区大源南路65号",
						"subAddr":""
					},
					{
						"name":"狄仁杰",
						"tel":"18219111803",
						"addr":"广东省广州市白云区大源南路65号",
						"subAddr":""
					}]
				}*/
			}
		},
		props:['setAddress'],
		methods: {
			go() {
				this.setAddress.show=false;
			},
			setDefault(k){
				/*this.index=k;*/
				/*this.$emit('send',this.dataAdmin[k]);*/
				for(var i=0;i<this.$store.state.address.length;i++){
					this.$store.state.address[i].checked=false;
				}
				this.$store.state.address[k].checked=true;
				console.log(this.$store.state.address)
			},
			delFun(k){
				this.data.des.splice(k,1);
			}
		},
		filters:{
			toTel(n){
				var str=n.split('');
				str.splice(3,4,'****');
				return str.join('');
			}
		},
		mounted(){
		
		},
		computed:{
			dataAdmin(){
				return this.$store.state.address;
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
	
	.addr_center .scan_icon {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 23px;
		height: 23px;
		display: inline-block;
	}
	
	.addr_center .return_icon img {
		height: 100%;
	}
	
	.addr_center .scan_icon img {
		width: 100%;
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
	.addrAll{
		width:100%;
		padding: 10px;
		box-sizing: border-box;
	}
	.addrAll .addr_item{
		width:100%;
		padding-bottom: 10px;
		border-bottom:1px solid #0063b5;
	}
	.addrAll .addr_item .tit{
		line-height: 30px;
		height: 30px;
		width:80%;
	}
	.addrAll .addr_item .tit>span:nth-of-type(1){
		color:#ffc000;
		float:left;
	}
	.addrAll .addr_item .tit>span:nth-of-type(2){
		color:#0063b5;
		float:right;
	}
	.addrAll .addr_item .addr>p{
		line-height: 24px;
		color:#0063b5;
		font-size: 14px;
	}
	.addrAll .addr_item .addr_btn{
		margin-top: 20px;
		color:#0063b5;
		font-size: 14px;
	}
	.addrAll .addr_item .addr_btn .default{
		display: inline-block;
		padding-left: 20px;
		background: url('../../assets/image/noSelect.png') no-repeat left center;
		background-size: 16px 16px;
	}
	.addrAll .addr_item .addr_btn .default.active{
		background: url('../../assets/image/selected.png') no-repeat left center;
		background-size: 16px 16px;
	}
	.addrAll .addr_item .addr_btn .edit{
		display: inline-block;
		padding-left: 20px;
		background: url('../../assets/image/update.png') no-repeat left center;
		background-size: 16px 16px;
		float:right;
		margin-right: 20px;
	}
	.addrAll .addr_item .addr_btn .del{
		display: inline-block;
		padding-left: 20px;
		background: url('../../assets/image/delete.png') no-repeat left center;
		background-size: 16px 16px;
		float:right;
	}
	.new{
		padding: 4px 22px;
		color:#fff;
		background: #0063B5;
		text-decoration: none;
		position: fixed;
		bottom:74px;
		left:50%;
		transform: translateX(-50%);
	}
</style>