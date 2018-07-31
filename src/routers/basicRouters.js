// dynamic router
// 基础路由
import PageIndex from '../pages/PageIndex.vue'; // 主页 home
import ReleaseMall from '../pages/ReleaseMall.vue'; // 任务大厅

export default [
    { path: '/', component: PageIndex },
	{ path: '/mall', component: ReleaseMall },
]