// dynamic router
// 用户的动态路由
import PersonalCenter from '../pages/PersonalCenter.vue'; // 个人中心
import ErrorPage from '../pages/ErrorPage.vue'; // 错误页 errorpage
	// 个人中心的二级页面
	import MyHome from '../pages/MyHome.vue'; // 我的主页
	import MyTask from '../pages/MyTask.vue'; // 我的订单
    import MyOptions from '../pages/MyOptions.vue'; // 账户设置

export default [
    { path: '/user', component: PersonalCenter,
        children: [
            { path: '', component: MyHome },
            { path: '/user/task', component: MyTask },
            { path: '/user/options', component: MyOptions },
        ]
    },
    { path: '/*', component: ErrorPage }
]