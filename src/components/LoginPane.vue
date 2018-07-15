<template>
    <div class="login-pane"
        @click.self="closepane"
    >
        <form name="login">
            <h3 class="logintitle">
                登录
                <small>
                    sign up
                </small>
            </h3>
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
            window.console.log('点击了提交')
        },
        turntosignin () {
            window.console.log('点击了跳转')
        },
        closepane () {
            this.$emit('close-pane')
        }
    }
}
</script>

<style scoped>
    .login-pane{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        margin: auto;
        z-index: 11;
        background-color: rgba(0, 0, 0, 0.1);
    }
    form{
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        width: 23em;
        height: 36.75em;
        padding: 2.25em 1em 1em;
        margin: auto;
        background-color: white;
        box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2)
    }
    h3{
        font-size: 1.25em;
        padding: 0.6em 0;
        border-bottom: 1px solid #00b062;
        margin-bottom: 1.2em;
    }
    h3 small{
        font-weight: normal;
        margin-left: 0.5em;
        color: darkgray
    }
    .fa-times{
        position: absolute;
        right: 1em;
        top: 1em;
        font-size: 1em;
        color: lightgray;
        cursor: pointer
    }
    .fa-times:hover{
        color: #00b062
    }
    .itemfield{
        margin: 1em auto;
    }
    label:first-child{
        width: 15%;
        display: inline-block;
    }
    label + input{
        width: 85%;
        padding: 0.5em;
        border: 1px solid lightgray
    }
    [type="checkbox"]{
        vertical-align: middle
    }
    [type="submit"]{
        appearance: none;
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
    .turnto{
        position: absolute;
        bottom: 1em;
        right: 1em;;
    }
    .turnto a{
        color: #00b062;
        cursor: pointer;
    }
</style>