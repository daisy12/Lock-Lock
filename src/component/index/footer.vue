<template>
	<main class="footer">
		<span class="circle"></span>
		<ul class="nav">
			<li>
				<router-link to="/homePage">
					<img src="../../assets/image/fr_icon01.png" />
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<a>
					<img src="../../assets/image/fr_icon02.png" />
					<p>分类</p>
				</a>
			</li>
			<li>
				<a>
					<img src="../../assets/image/fr_icon03.png" />
					<p>逛逛</p>
				</a>
			</li>
			<li>
				<router-link to="/shopCar">
					<img src="../../assets/image/fr_icon04.png" />
					<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<img src="../../assets/image/fr_icon05.png" />
					<p>我</p>
				</router-link>
			</li>
		</ul>
	</main>
</template>
<style scoped>
	.footer{
		width:100%;
		position: fixed;
		bottom: 0;
		left:0;
		background: #0063b5;
		color:#fff;
	}
	.footer .nav{
		height: 44px;
		padding: 4px 0;
	}
	.footer .nav li{
		float: left;
		width:20%;
		list-style: none;
		text-align: center;
	}
	.footer .nav li a{
		color:#fff;
		text-decoration: none;
	}
	.footer .nav li img{
		height:24px;
	}
	.circle{
		width:20%;
		height: 50px;
		border-radius: 50% 50% 0 0;
		position: absolute;
		top:-10px;
		left:50%;
		transform: translateX(-50%);
		background:#0063b5;
		z-index:-1;
	}
</style>