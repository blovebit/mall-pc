<template>
    <div class="personal-home">
        <!-- 测试mock,正式的稍后开发 -->
        <div v-for="(item, key) in newsListShow"
            :key="key"
        >
            {{item.name}}
        </div>
    </div>
</template>

<script>
// import api from '../assets/js/api.js';
// import NewsCell from '../components/NewsCell.vue';

export default {
    name: 'PersonalHome',
    data () {
        return {
            newsListShow: []
        }
    },
    components: {},
    created () {
        this.setRegionApi();
    },
    methods: {
        setRegionApi: function () {
            this.$axios.post('/findRegion',{
                RegionId: 25
            })
            .then(res => {
                // window.console.log(res);
                this.newsListShow = res.data.content.regionList;
            })
            .catch(error => {
                window.console.log(error)
            })
        }
    }
}
</script>

<style scoped>
</style>
