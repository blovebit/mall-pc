// dynamic router
// 基础路由
import PageIndex from '../pages/PageIndex.vue'; // 主页 home
import ErrorPage from '../pages/ErrorPage.vue'; // 错误页 errorpage
import ReleaseMall from '../pages/ReleaseMall.vue'; // 任务大厅

export default [
    { path: '/', component: PageIndex },
	{ path: '/mall', component: ReleaseMall },
	{ path: '/*', component: ErrorPage }
]