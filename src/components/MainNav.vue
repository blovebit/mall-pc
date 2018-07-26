<template>
    <div class="nav">
        <div class="content clearfix">
            <img src="../assets/images/logo.png" class="toplogo left">
            <ul class="left">
                <li>
                    <a href="/">首页</a>
                </li>
                <li>
                    <router-link to="/mall">任务大厅</router-link>
                </li>
                <li>
                    <a href="javascript:void(0)">找装修</a>
                </li>
                <li>
                    <a href="http://www.yizhuangw.cn/index.php?a=rebuilding&m=index">旧房改造</a>
                </li>
                <li>
                    <a href="javascript:void(0)">找服务</a>
                </li>
                <li>
                    <a href="javascript:void(0)">找设计</a>
                </li>
                <li>
                    <a href="http://www.yizhuangw.cn/index.php?a=diary&m=decorationDiaryList">装修日记</a>
                </li>
                <li>
                    <a href="http://www.yizhuangw.cn/index.php?a=decoration&m=index">装修攻略</a>
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
