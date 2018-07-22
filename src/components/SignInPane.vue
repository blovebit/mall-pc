<template>
    <div class="layer">
        <form name="signIp">

            <h3>注册<small>sign in</small></h3>

            <i class="fas fa-times"
                @click="closepane"
            ></i>

            <div class="turnto">
                已有账号？
                <a @click.self="turntologin">
                    立即登录
                </a>
            </div>

        </form>
    </div>
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
        closepane () {
            this.$emit('close-pane')
        },
        turntologin () {
            this.$emit('turn-to-login')
        }
    }
}
</script>
    
<style scoped>
    
</style>