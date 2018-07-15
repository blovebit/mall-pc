<template>
    <div class="top-search"
        name="top-search"
    >
        <input type="text"
            @keyup.enter.prevent="search"
            placeholder="案例/攻略/问题"
            v-model="querystring"
        >
        <input type="hidden">
        <i class="fas fa-search"
            @click="search"
        ></i>
    </div>
</template>

<script>
export default {
    name: 'TopSearch',
    data () {
        return {
            querystring: ''
        }
    },
    methods: {
        search () {
            alert(this.querystring)
        }
    }
}
</script>

<style scoped>
    .top-search{
        float: right;
        position: relative;
    }
    input{
        width: 16em;
        height: 2em;;
        padding: 0 0.5em;
        box-sizing: border-box;
        border: 1px solid lightgray;
        border-radius:0.25em;
    }
    i{
        position: absolute;
        right: 0.5em;
        top: 0.5em;
        color: lightgray
    }
</style>
