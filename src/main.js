import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false;

// 全局配置axios
import axios from 'axios';
Vue.prototype.$axios = axios.create({
	// baseURL: 'http://localhost:8080'
});

// 模拟数据
require('./mock.js');

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import PageIndex from './pages/PageIndex.vue'; // 主页 home
import ReleaseMall from './pages/ReleaseMall.vue'; // 任务大厅
import PersonalCenter from './pages/PersonalCenter.vue'; // 个人中心
	// 个人中心的二级页面
	import MyHome from './pages/MyHome.vue'; // 我的主页
	import MyTask from './pages/MyTask.vue'; // 我的订单
	import MyCase from './pages/MyCase.vue'; // 我的案例
	import MyCompany from './pages/MyCompany.vue'; // 我的公司
	import MyOptions from './pages/MyOptions.vue'; // 账户设置

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '/', component: PageIndex },
	{ path: '/mall', component: ReleaseMall },
	{ path: '/user', component: PersonalCenter,
		children: [
			{ path: '', component: MyHome },
			{ path: '/user/task', component: MyTask },
			{ path: '/user/case', component: MyCase },
			{ path: '/user/company', component: MyCompany },
			{ path: '/user/options', component: MyOptions },
		]
	}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes // (缩写) 相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

// 现在，应用已经启动了！