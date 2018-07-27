<template>
    <div class="personal-home">
        <news-cell
        v-for="(item, key) in newsListShow"
        :newsDate="item"
        :key="key"
        ></news-cell>
    </div>
</template>

<script>
import api from '../assets/js/api.js';
import NewsCell from '../components/NewsCell.vue';
export default {
    name: 'PersonalHome',
    data () {
        return {
            newsListShow: []
        }
    },
    components: {
        NewsCell
    },
    created () {
        this.setNewsApi();
    },
    methods: {
        setNewsApi: function () {
            api.JH_news('./news/index', 'type=top&key=123456')
            .then(res => {
                window.console.log(res);
                this.newsListShow = res.articles;
            });
        }
    }
}
</script>

<style scoped>
</style>
