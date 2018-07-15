<template>
    <div class="nav">
        <div class="content clearfix">
            <img src="../assets/logo.png" class="toplogo left">
            <ul class="left">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/usr">个人中心</router-link>
                </li>
                <li>
                    <router-link to="/team">找装修</router-link>
                </li>
                <li>
                    <router-link to="/rebuilding">旧房改造</router-link>
                </li>
                <li>
                    <router-link to="/servce">找服务</router-link>
                </li>
                <li>
                    <router-link to="/design">找设计</router-link>
                </li>
                <li>
                    <router-link to="/diary">装修日记</router-link>
                </li>
                <li>
                    <router-link to="/guide">装修攻略</router-link>
                </li>
            </ul>
            <top-search></top-search>
        </div>
    </div>
</template>

<script>
import TopSearch from './TopSearch.vue';
export default {
    name: 'MainNav',
    components:{
        'top-search': TopSearch
    }
}
</script>

<style scoped>
    .nav{
        background: white;
        padding-top: 0.75em;
        padding-bottom: 0.75em;
    }
    .toplogo{
        height: 2em;
        margin-right: 2em;
    }
    .nav li{
        float: left;
        padding: 0.5em 1em;
        line-height: 1;
    }
    .router-link-exact-active{
        color: #00b062;
    }
</style>
