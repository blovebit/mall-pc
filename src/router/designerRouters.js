// dynamic router
// 设计师的动态路由
import PersonalCenter from '../pages/PersonalCenter.vue'; // 个人中心
	// 个人中心的二级页面
	import MyHome from '../pages/MyHome.vue'; // 我的主页
	import MyTask from '../pages/MyTask.vue'; // 我的订单
	import MyCase from '../pages/MyCase.vue'; // 我的案例
	import MyCompany from '../pages/MyCompany.vue'; // 我的公司
    import MyOptions from '../pages/MyOptions.vue'; // 账户设置

export default [
    { path: '/user', component: PersonalCenter,
        children: [
            { path: '', component: MyHome },
            { path: '/user/task', component: MyTask },
            { path: '/user/case', component: MyCase },
            { path: '/user/company', component: MyCompany },
            { path: '/user/options', component: MyOptions },
        ]
    }
]