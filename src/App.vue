<template>
    <div id="app">

        <!-- 头部 -->
        <main-header :user="user"
            @go-sign="openLayer"
            @sign-out="user = {}"
            @go-login="goLogin"
            @go-register="goRegister"
        ></main-header>

        <!-- 导航 -->
        <main-nav></main-nav>

        <!-- 以及路由 -->
        <router-view :user="user"
        ></router-view>

        <!-- 底部 -->
        <main-footer></main-footer>

        <!-- 浮动层 -->
        <lay-er
            v-if="isGoingToSign"
            @click.native.self="closeLayer"
        >
            <!-- 登录注册框 -->
            <div :is="layerChildis"
                class="pane"
                @log-in="logIn"
                @close-layer="closeLayer"
                @go-login="goLogin"
                @go-register="goRegister"
            >
            </div>
        </lay-er>
    </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'; // 头部
import MainNav from './components/MainNav.vue'; // 导航
import MainFooter from './components/MainFooter.vue'; // 底部
import LayEr from './components/LayEr.vue'; // 浮层
import LoginPane from './components/LoginPane.vue'; // 登录框
import RegisterPane from './components/RegisterPane.vue'; // 注册框
// 路由配置文件
import userRouters from './routers/userRouters'
import designerRouters from './routers/designerRouters'
import basicRouters from './routers/basicRouters'

export default {
    name: 'app',
    data () {
        return {
            isGoingToSign: false,
            layerChildis: LoginPane,
            // 当前用户，暂时绑定到各个组件上。
            // 目前没有研究vuex，后期优化。
            user: {}
        }
    },
    computed: {},
    methods: {
        closeLayer () { // 关闭层
            this.isGoingToSign = false
        },
        openLayer () { // 打开层
            this.isGoingToSign = true
        },
        goLogin () { // 去登录
            this.layerChildis = LoginPane;
            this.openLayer()
        },
        goRegister () { // 去注册
            this.layerChildis = RegisterPane;
            this.openLayer()
        },
        // 登录后
        logIn (data) {
            this.user = data;
            // todo.. 设置cookie
            // cookie 的作用请求时验证用户权限
            // 也可以由后端设置
            // 根据用户类型配置路由
            switch (data.roles[0].objectId){
                case 16: // user
                    this.$router.addRoutes(userRouters);
                    break;
                case 3: // designer
                    this.$router.addRouters(designerRouters);
                    break;
                default: // 其他
            }
            this.$router.push({path:'/user'});
        },
        // 退出后
        signOut () {
            this.user = {}
            // todo.. 设置cookie
            // 重置路由
            this.$router = basicRouters
        }
    },
    components: {
        'main-nav': MainNav,
        'main-header': MainHeader,
        'main-footer': MainFooter,
        'lay-er': LayEr,
        LoginPane,
        RegisterPane
    }
}
</script>

<style>
@import url('./assets/css/common.css'); /* 公共样式 */
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.css'); /* fontawesome */
</style>
