<template>
    <TheHeader />
    <TheMain />
    <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/catalogMain.vue'
import TheFooter from '@/components/TheFooter.vue'


export default {
    components: {
        TheHeader,
        TheMain,
        TheFooter,
    },
}
</script>