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
require('./assets/js/mock.js');

// 配置路由
Vue.use(VueRouter);
// 1.先配置基础路由
// 其他个人中心的路由，等到用户登录以后
// 再根据用户的类型，追加进去。
import basicRouters from './routers/basicRouters.js';
const routes = basicRouters;
// 2.创建 router 实例
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes // (缩写) 相当于 routes: routes
});
// 3. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

// 现在，应用已经启动了！