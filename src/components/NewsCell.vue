<template>
    <section class="financial-list">
        <!-- 测试组件,用完就删 -->
        <section class="collect" @click="jumpPage">
            <aside>
                <h2>{{newsDate.title}}</h2>
                <section class="Cleft clearfix">
                    <img src="../assets/images/logo.png" class="fl">
                    <span class="fl">{{newsDate.author_name}}</span>
                </section>
                <section class="Cright">
                    <img src="../assets/images/logo.png">
                    <span>{{newsDate.date | getYMD}}</span>
                </section>
            </aside>
            <aside>
                <img :src="newsDate.thumbnails_pic_s">
            </aside>
        </section>
    </section>
</template>
    
<script>
export default {
    name: 'NewsCell',
    data () {
        return {}
    },
    props: {
        newsDate: Object
    },
    computed: {},
    methods:{
        jumpPage: function () {
            window.location.href = this.newsDate.url
        }
    }
}
</script>
    
<style scoped>
    
</style>