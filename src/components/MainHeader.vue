<template>
    <div>
        <div class="main-header">
            <div class="content clearfix">
                <ul class="left">
                    <li class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        成都
                    </li>
                    
                    <li>
                        <i class="fab fa-weixin"></i>
                    </li>

                    <li>
                        <i class="fab fa-weibo"></i>
                    </li>

                    <li>
                        <a href="" class="download">
                            <i class="fas fa-mobile-alt"></i>
                            益装APP下载
                        </a>
                    </li>
                    
                </ul>
                <ul class="right">
                    <li>
                        <a @click="openpane">登录</a>
                    </li>

                    <li>
                        <a @click="openpane">注册</a>
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
        <div v-if="ispaneopen"
            v-bind:is="currentComponent"
            @close-pane="closepane"
        ></div>
    </div>
</template>

<script>
import LoginPane from './LoginPane.vue';
export default {
    name: 'MainHeader',
    data () {
        return {
            ispaneopen: false,
            currentComponent: LoginPane
        }
    },
    computed: {},
    methods: {
        closepane () {
            this.ispaneopen = false
        },
        openpane () {
            this.ispaneopen = true
        }
    },
    components: {
        'login-pane': LoginPane
    }
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
</style>
