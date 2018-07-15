<template>
    <div class="slide-indicators">
        <ul class="content">
            <li v-for="n in nums.total"
                :key="n"
                :class="{cur: nums.cur == n - 1}"
                :style="colwidthstyle"
                @click="updatecur(n - 1)"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SlideIndicators',
    computed: {
        colwidthstyle () {
            return 'width:' + (100 - this.nums.total / 3) / this.nums.total + '%'
        }
    },
    props: {
        nums: {
            type: Object,
            required: true
        }
    },
    methods: {
        updatecur (n) {
            this.$emit('update-cur', n)
        }
    }
}
</script>

<style scoped>
    .slide-indicators{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0.7em 0 0.45em;
        background: rgba(0, 0, 0, 0.1);
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.35));
        text-align: center;
    }
    ul {
        height: 0.35em;
    }
    li {
        display: inline-block;
        line-height: 0.35em;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        vertical-align: top;
        margin-left: 0.3%;
    }
    li:first-child{
        margin-left: 0
    }
    .cur{
        background-color: #00b062;
    }
</style>
