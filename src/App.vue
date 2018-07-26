<template>
  <div id="app">
    <main-header></main-header>
    <main-nav></main-nav>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    islogined () {
      return false
    }
  },
  components: {
    'main-nav': MainNav,
    'main-header': MainHeader,
    'main-footer': MainFooter
  }
}
</script>

<style>
@import url('./assets/css/common.css'); /* 公共样式 */
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.css'); /* fontawesome */
</style>
