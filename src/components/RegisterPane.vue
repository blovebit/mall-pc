<template>
    <form name="signIp">

        <h3>注册<small>sign in</small></h3>

        <i class="fas fa-times"
            @click="closeLayer"
        ></i>

        <div class="turnto">
            已有账号？
            <a @click.self="goLogin">
                立即登录
            </a>
        </div>
        
    </form>
</template>
    
<script>
export default {
    name: 'SignInPane',
    data () {
        return {}
    },
    props: {},
    computed: {},
    methods:{
        closeLayer () {
            this.$emit('close-layer')
        },
        goLogin () {
            this.$emit('go-login')
        }
    }
}
</script>
    
<style scoped>
    
</style>