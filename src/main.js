import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './js/router.js'
import VueResource from 'vue-resource'
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import store from './store/store.js'

//定义vue可以使用VueResource
Vue.use(VueResource)

Vue.use(VueRouter)

Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
//浮动的元素会相互贴靠，但是行内块元素每个元素之间有距离。
//浮动之后，变成
//绝对定位脱离标准流 
//position:absolute;//绝对定位之后，宽度为0
//position:inline;
//position:relative
//position:inline-block;
 

//asset:是防止静态的东西 ：例如图片，需要在里面再建立一个文件夹
/*

 	footer.vue
	<template>
		<main>
			<img src="../../assets/images/pic.png"/>
			<ul class="menu">
				<li>
					<router-link to="/hot">
						<img src="../../assets/images/pic.png"/>
					</router-link>
					//实现路由,跳转到新的页面（组件、模块）
				</li>
			</ul>
		</main>
	</template>
	<style scoped>   --限制作用域
		.menu{
			
		}
	</style>


	hot.vue:
	<template>
		<h1>热门推荐</h1>
	</template>


	router.js

	import hot from '../componrnt/hot/hot.vue'



	注意：less:转换成css  less-loader:打包css

	cssreset.css
	可以使用下面两种方式引用外部的css
	index.html    link
	main.js import    './assets/cssreset.css'

	//热门推荐  按钮 返回上一级
	//热门推荐的数据
	<template>
		<main>
			<h1>这是热门推荐</h1>
			<button @click="add">按钮</button>
			<ul>
				<li>第一条推荐</li>
			</ul>
		</main>
	</template>
	<script>
		//导出模板及其数据
		export default{
			//导出里面有隐形的template,默认是当前文件的模板
			//这种等价于Vue.component({
				template:'',
				data(){
					return{
					
					}
				}
			})
			data(){
				return {
					msg:'hello world'
				}
			},
			methods:{
				add(){
					this.$router.go(-1);
				}
			},
			由于这是一个实例，所以有声明周期的钩子函数（组件算是一个实例）
			mounted(){
	
			}
		}
	</script>


	ajax请求 vue-resource -D

	由于main.js才是打包的入口文件
	import VueResource from 'vue-resource'
	Vue.use(VueResource)

	vue-resource是插件，需要依赖vue


	西林街 云瑞  搜索


	ajax请求路径问题：
	data.json 放在最外层目录
	this.$http.get('data.json').then(function(res){
				console.log(res)
			})

			这是由于当前服务器指向的是当前的文件夹

	如果放在hot目录下
	src/component/hot/data.json

	这是由于：8080指向的是当前的项目文件夹

	请求数据的api地址：https://www.juhe.cn/docs/api/id/46

	注意：mounted是使用相对应的模板时执行的
	就是每次点击相应的链接，导入其它组件的时候，请求连接


	h1的作用：语义化，SEO优化（方便爬虫抓取更多的信息）
	
	三大模块 ：指令  组件（模板）路由


	补充：
	body{
		max-width:1000px;
		margin:0 auto; //在电脑上显示时
	}

	手机版网页（m站）

	宽度百分比，高度自适应

	vuex:是管理页面与页面之间的数据


	hot.vue点击图片跳转  路由传参 <router-link>


	总结：流程：

 */