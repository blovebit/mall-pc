<template>
    <div class="layer">
        <form name="login">

            <h3>登录<small>sign up</small></h3>

            <div class="itemfield">
                <label for="usr">用户</label>
                <input type="text"
                    v-model="usr"
                    name="usr"
                    ref="usr"
                    placeholder="用户名/手机号/邮箱"
                >
            </div>

            <div class="itemfield">
                <label for="password">密码</label>
                <input type="password"
                    v-model="password"
                    name="password"
                    ref="password"
                    placeholder="密码（不能使用空格开头和结尾）"
                >
            </div>

            <!-- <div class="itemfield">
                <input type="checkbox"
                    name="remAccount"
                >
                <label for="remAccount">记住账号</label>
            </div> -->

            <input type="submit"
                @click.self.prevent="submit"
                value="登录"
                class="itemfield"
            >

            <i class="fas fa-times"
                @click="closepane"
            ></i>

            <div class="turnto">
                没有账号？
                <a @click.self="turntosignin">
                    立即注册
                </a>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPane',
    data () {
        return {
            usr: '',
            password: ''
        }
    },
    props: {},
    computed: {},
    methods:{
        submit () {
            this.usr = this.usr.replace(/(^\s*)|(\s*$)/g,'');
            this.password = this.password.replace(/(^\s*)|(\s*$)/g,'');
            if (this.usr.length<1) {
                this.$refs.usr.focus();
                return;
            }
            if(this.password.length<6){
                this.$refs.password.focus();
                return
            }
            this.$axios.post('/login',{})
            .then(res => {
                // window.console.log(res.data)
                this.$emit('logined', res.data.content)
                this.closepane();
            })
            .catch(error => {
                window.cosole.log(error)
            })
        },
        turntosignin () {
            this.$emit('turn-to-sign-in')
        },
        closepane () {
            this.$emit('close-pane')
        }
    }
}
</script>

<style scoped>
    [type="checkbox"]{
        vertical-align: middle
    }
    [type="submit"]{
        -moz-appearance:button; /* Firefox */
        -webkit-appearance:button; /* Safari 和 Chrome */
        width: 100%;
        border: 0;
        background: #00b062;
        color: white;
        line-height: 2;
        cursor: pointer;
    }
    [type="submit"]:hover{
        background-color: #00a055
    }
</style>