<template>
  <div id="app">
    <main-header :user="user"></main-header> <!-- 头部 -->
    <main-nav></main-nav> <!-- 导航 -->
    <router-view :user="user"></router-view> <!-- 一级路由 -->
    <main-footer></main-footer> <!-- 底部 -->
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'; // 头部
import MainNav from './components/MainNav.vue'; // 导航
import MainFooter from './components/MainFooter.vue'; // 底部

export default {
  name: 'app',
  components: {
        'main-nav': MainNav,
        'main-header': MainHeader,
        'main-footer': MainFooter
  },
  data () {
    return {
        // 当前用户，暂时绑定到各个组件上。
        // 目前没有研究vuex，后期优化。
        user: {
            userName: '', // 用户名
            userID: 0 // 用户id
        }
    }
  },
  computed: {}
}
</script>

<style>
@import url('./assets/css/common.css'); /* 公共样式 */
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.css'); /* fontawesome */
</style>
