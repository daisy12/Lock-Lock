import VueRouter from 'vue-router';
import homePage from '../component/nav/homePage.vue'
import my from '../component/nav/my.vue'
import proCenter from '../component/proCenter/proCenter.vue'
import shopCar from '../component/shopCar/shopCar.vue'
import setOrder from '../component/setOrder/setOrder.vue'
import updateAddr from '../component/updateAddr/updateAddr.vue'
import myOrder from '../component/myOrder/myOrder.vue'
import orderDetail from '../component/orderDetail/orderDetail.vue'
import addAddress from '../component/addAddress/addAddress.vue'

export default new VueRouter({
	routes:[
		{path:'/homePage',component:homePage},
		{path:'/my',component:my},
		{path:'/proCenter/:id',component:proCenter},
		{path:'/shopCar',component:shopCar},
		{path:'/setOrder',component:setOrder},
		{path:'/myOrder',component:myOrder},
		{path:'/orderDetail',component:orderDetail},
		{path:'/addAddress',component:addAddress},
		{path:'/',redirect:'/homePage'},
	]
})