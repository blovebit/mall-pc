<template>
    <div class="concept-image">
        <ul v-if="isslide"
            @mouseover="mouseover"
            @mouseout="mouseout"
        >

            <li v-for="(image, index) in images"
                v-if="show(index)"
                :key="index"
            >

                <a v-if="getLink(image)"
                    :href="getLink(image)"
                    target="_blank"
                >
                    <img :src="image.src">
                </a>

                <img v-else
                    :src="image.src"
                >
            </li>

            <!-- 指示器 -->
            <slide-indicators :nums="{total:tot,cur:curidx}"
                @update-cur="updateCur"
            ></slide-indicators>
        </ul>
        <div v-else>
            <img :src="images[0].src">
        </div>
    </div>
</template>

<script>
import SlideIndicators from './SlideIndicators.vue'
export default {
    name: 'ConceptImage',
    data () {
        return {
            curidx: 0,
            slideInt: null
        }
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    computed: {
        tot () {
            return this.images.length
        },
        isslide () {
            return this.images.length > 1 ? true : false
        }
    },
    methods: {
        getLink: function (image) {
            return 'href' in image ? image.href : false
        },
        show (index){
            return index === this.curidx
        },
        slide () {
            if (this.isslide) {
                this.slideInt = setInterval(() => {
                    this.curidx = this.curidx >= this.tot - 1 ? 0 : this.curidx + 1
                },3000)
            }
        },
        updateCur (cur) {
            clearInterval(this.slideInt);
            this.curidx = cur;
        },
        mouseover () {
            clearInterval(this.slideInt)
        },
        mouseout () {
            this.slide()
        }
    },
    created () {
        this.slide()
    },
    components: {
        'slide-indicators' : SlideIndicators
    }
}
</script>

<style scoped>
    .concept-image{
        position: relative;
        overflow: hidden;
    }
    img {
        margin-left: calc(50% - 960px);
        display: block
    }
</style>
