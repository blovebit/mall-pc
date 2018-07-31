<template>
    <div class="main-header">
        <div class="content clearfix">
            <ul class="left">
                <li class="location">
                    <i class="fas fa-map-marker-alt"></i>成都
                </li>
                
                <li>
                    <i class="fab fa-weixin"></i>
                </li>

                <li>
                    <i class="fab fa-weibo"></i>
                </li>

                <li>
                    <a href="" class="download">
                        <i class="fas fa-mobile-alt"></i>益装APP下载
                    </a>
                </li>
            </ul>
            <ul class="right">
                <!-- 
                根据是否登录，渲染不同的入口
                如果已经登录，提供个人中心入口
                -->
                <li v-if="user.objectId">
                    <router-link to="/user">{{ user.name }}</router-link>
                    /
                    <a @click="signOut">退出登录</a>
                </li>
                <!-- 如果没有登录，提供登录/注册入口 -->
                <li v-else> 
                    <a @click="goLogin">登录</a>
                    /
                    <a @click="goRegister">注册</a>
                </li>

                <li>
                    <a href="">服务保障</a>
                </li>

                <li>
                    <a href="">帮助中心</a>
                </li>

                <li>
                    <a href="">
                        <i class="fas fa-phone-volume"></i>
                        028-67875230
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHeader',
    data () {
        return {}
    },
    props: {
        user: Object
    },
    computed: {},
    methods: {
        goLogin () {
            this.$emit('go-login')
        },
        goRegister () {
            this.$emit('go-register')
        },
        signOut () {
            this.$emit('sign-out')
        }
    },
    components: {}
}
</script>

<style scoped>
    .main-header{
        padding-top: 0.75em;
        padding-bottom: 0.75em;
        font-size: 0.875em;
        color: darkgray
    }
    .main-header li{
        display: inline-block;
        margin-left: 1.5em;
    }
    .main-header li:first-child{
        margin-left: 0;
    }
    ul.right li:first-child a{
        color: var(--main-color)
    }
</style>
