import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false


// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// import HelloWorld from './components/HelloWorld.vue'
// import PageIndex from './pages/PageIndex.vue'
// import PageEffect from './pages/PageEffect.vue'
// import PageDiary from './pages/PageDiary.vue'
// import PageFindDesign from './pages/PageFindDesign.vue'
// import PageFindGuide from './pages/PageFindGuide.vue'
// import PageFindServce from './pages/PageFindServce.vue'
// import PageFindTeam from './pages/PageFindTeam.vue'
import PageRebuilding from './pages/PageRebuilding.vue'
import PersonalCenter from './pages/PersonalCenter.vue'
import PersonalHome from './components/PersonalHome.vue'
import ReleaseMall from './pages/ReleaseMall.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // { path: '/', component: PageIndex },
  // { path: '/hello', component: HelloWorld },
  // { path: '/effect', component: PageEffect },
  // { path: '/diary', component: PageDiary },
  // { path: '/design', component: PageFindDesign },
  // { path: '/guide', component: PageFindGuide },
  // { path: '/servce', component: PageFindServce },
  // { path: '/team', component: PageFindTeam },
  { path: '/mall', component: ReleaseMall },
  {
    path: '/usr',
    component: PersonalCenter,
    children: [
      {
        path: '',
        component: PersonalHome
      }
    ]
  },
  { path: '/rebuilding', component: PageRebuilding }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 现在，应用已经启动了！