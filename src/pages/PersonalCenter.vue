<template>
    <div class="personal-center">
        <div class="content">
            <div class="controlpane">
                <div class="avatar">
                    <img :src="userdata.myavatar">
                </div>
                <i v-if="userdata.isvip"
                    class="vip fab fa-vuejs"
                >
                </i>
                <div class="myinfo">
                    <span class="myname">{{ user.name || userdata.name }}</span>
                    <div class="mytags">
                        <span class="mylevel"> {{ userdata.level }}</span>
                        <span v-if="userdata.isrealname"
                            class="isrealname"
                        >
                        实名认证
                        </span>
                    </div>
                    <div class="myicons">
                        <span class="fas fa-mobile-alt"></span>
                        <span class="fas fa-id-card"></span>
                        <span class="far fa-credit-card"></span>
                        <span class="fas fa-lock"></span>
                    </div>
                </div>
                <ul class="mymenu">
                    <li>
                        <router-link to="/user">
                            我的主页
                            <i class="fas fa-angle-right"></i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/task">
                            我的订单
                            <i class="fas fa-angle-right"></i>
                        </router-link>
                    </li>
                    <li v-if="user.roles[0].objectId === 3">
                        <router-link to="/user/case">
                            我的案例
                            <i class="fas fa-angle-right"></i>
                        </router-link>
                    </li>
                    <li v-if="user.roles[0].objectId === 3">
                        <router-link to="/user/company">
                            我的公司
                            <i class="fas fa-angle-right"></i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/options">
                            账户设置
                            <i class="fas fa-angle-right"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import avatar from "../assets/images/avatar.png";
export default {
    name: 'PersonalCenter',
    props: {
        user: Object
    },
    data () {
        return {
            userdata:{ // 没有用户（未登录）时展示的数据
                myavatar: avatar,
                isvip: true,
                mytel: '18000000000',
                name: '用户',
                level: '高级',
                isrealname: true
            }
        }
    },
    created () {
        // if (!this.user.name) {
        //     this.$emit('no-user')
        // }
    },
    components: {},
    // beforeRouteEnter (to, from, next) {
        // 导航前鉴权
        // next(vm => {
            // alert(vm.user.objectId)
            // if (!vm.user.objectId) {
            //     return 'false'
            // }
        // })
    // }
}
</script>

<style scoped>
    .personal-center{
        padding-top: 2em;
        background: url(../assets/images/BgPersonalCenter.jpg) center top no-repeat;
    }
    .content{
        min-height: 650px;
        padding-left: 230px;
        padding-right: 30px;
        background: white;
        box-sizing: border-box;
        position: relative;
    }
    .controlpane{
        width: 200px;
        height: 100%;
        border-right: 1px solid gainsboro;
        box-sizing: border-box;
        position: absolute;
        left: 0;
    }
    .avatar{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin: 1em auto;
    }
    .avatar img{
        display: block;
        width: 100%;
    }
    .vip{
        position:absolute;
        top: 1em;
        right: 1em;
        color: gold;
        font-size: 2em;
    }
    .myinfo{
        text-align: center;
    }
    .myname{
        display: block;
        font-size: 1.25em;
    }
    .mytags span{
        font-size: 0.75em;
        display: inline-block;
        padding: 0.15em 0.5em;
        color: white;
        border-radius: 0.5em;
        margin-top: 0.75em;
    }
    .mylevel{
        background-color: blueviolet
    }
    .isrealname{
        background-color: skyblue;
        margin-left: 0.5em;
    }
    .myicons{
        font-size: 1.15em;
        margin-top: 0.5em;
        color: darkgray;
    }
    .myicons span + span{
        margin-left: 0.5em;
    }
    .mymenu{
        border-top: 1px solid whitesmoke;
        margin-top: 2em;
    }
    .mymenu a{
        padding: 1em 0;
        display: block;
        text-align: center;
        border-bottom: 1px solid whitesmoke
    }
    .fa-angle-right{
        margin-left: 0.5em;
        color: darkgray;
    }
    .mymenu .router-link-exact-active{
        background-color: azure
    }
</style>
