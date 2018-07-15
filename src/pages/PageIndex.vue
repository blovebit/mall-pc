<template>
    <concept-image :images="images"></concept-image>
</template>

<script>
import ConceptImage from '../components/ConceptImage.vue';
export default {
    name: 'PageIndex',
    components: {
        'concept-image': ConceptImage
    },
    data () {
        return {
            images: [
                {
                    src: require('../assets/focusindex01.jpg'),
                    href: 'yizhuangw.cn'
                },
                {
                    src: require('../assets/focusindex02.jpg')
                },
                {
                    src: require('../assets/focusindex03.jpg'),
                    href: 'baidu.com'
                },
                {
                    src: require('../assets/focusindex04.jpg')
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
