<template>
    <div class="main-footer">
        <div class="content">
            <div class="footnav">
                <a href="">了解益装网</a>
                <a href="">新闻中心</a>
                <a href="">装修服务</a>
                <a href="">新手入门</a>
                <a href="">帮助中心</a>
                <a href="">网站地图</a>
                <a href="">联系我们</a>
                <span>官方客服热线：028-8550-0300</span>
            </div>
            <div class="links">
                <h3>合作伙伴</h3>
                <a href="">建设银行装修贷</a>
                <a href="">工商银行个人信用贷</a>
                <a href="">农业银行装修贷</a>
                <a href="">成都元度·家居汇</a>
                <a href="">成都川豪装饰</a>
                <a href="">贵阳川豪装饰</a>
                <a href="">贵阳川豪公装</a>
                <a href="">合肥川豪装饰</a>
                <a href="">合肥川豪公装</a>
                <a href="">温江川豪装饰</a>
            </div>
            <div class="links">
                <h3>友情链接</h3>
                <a href="">发展与改革委员会</a>
                <a href="">市场监督管理总局</a>
                <a href="">商务部市场秩序司</a>
                <a href="">四川省发展改革委</a>
                <a href="">四川省经济和信息化委</a>
                <a href="">四川省环境保护厅</a>
                <a href="">四川省住房城乡建设厅</a>
                <a href="">成都市发改委</a>
                <a href="">成都市质监局</a>
                <a href="">成都市工商局</a>
                <a href="">成都市环保局</a>
                <a href="">中国建筑装饰协会</a>
                <a href="">成都建筑装饰协会</a>
                <a href="">重庆市建筑装饰协会</a>
                <a href="">南京建筑装饰协会</a>
                <a href="">贵阳建筑装饰协会</a>
                <a href="">昆明建筑装饰协会</a>
            </div>
            <div class="coperight">
                蜀ICP备15033150号 成都市武侯区大石东路186号1-3层 coperight @ 2016-2050 益装网
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'MainFooter',
    data () {
        return {}
    },
    props: {},
    computed: {},
    methods:{}
}
</script>
    
<style scoped>
    .main-footer{
        margin-top: 2em;
        padding: 1em 0;
        background: #141a2a url(../assets/images/footerBg.jpg) center bottom no-repeat;
    }
    div{
        padding: 1.3em 0;
    }
    div + div{
        border-top: 1px solid dimgray
    }
    .footnav{
        color: whitesmoke
    }
    a{
        margin-right: 1em;
    }
    .footnav span{
        float: right;
        color: #00b062;
    }
    .links{
        line-height: 1.6;
        padding: 1em 0;
    }
    h3{
        font-size: 1em;
        margin-bottom: 0.5em;
        color: lightgray
    }
</style>