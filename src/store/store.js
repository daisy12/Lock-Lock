import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
var store=new Vuex.Store({
	state:{
		data:[{
				'shop':'杯子友情',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'商品促销:2016.6.28-7.31购买迪士尼米奇米妮系列享受3.2折优惠',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'1',
			 	'tig':'新品上市',
			 	'imgSrc':'./src/assets/image/car_01.png',
			 	'checked':false
			},
			{
				'shop':'杯子旗舰店',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'2',
			 	'tig':'',
			 	'imgSrc':'./src/assets/image/car02.jpg',
			 	'checked':false
			},
			{
				'shop':'乐扣',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'商品促销:2016.6.28-7.31购买迪士尼米奇米妮系列享受3.2折优惠',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'3',
			 	'tig':'',
			 	'imgSrc':'./src/assets/image/car02.jpg',
			 	'checked':false
			}
		],
		orderData:[],
		address:[{
			"name":"李某人",
			"tel":"18219111803",
			"addr":"广东省广州市天河区大观路商务大厦B栋5F510",
			"subAddr":"",
			"checked":true
		},{
			"name":"哆啦A梦",
			"tel":"18219111803",
			"addr":"广东省广州市白云区大源南路65号",
			"subAddr":"(广州市公用事业技师学院)",
			"checked":false
			
		},{
			"name":"梦之蓝",
			"tel":"18219111803",
			"addr":"广东省广州市白云区大源南路65号",
			"subAddr":"",
			"checked":false
		},
		{
			"name":"狄仁杰",
			"tel":"18219111803",
			"addr":"广东省广州市白云区大源南路65号",
			"subAddr":"",
			"checked":false
		}]
	}
})

export default store;
