<template>
    <TheHeader />
    <ErrorMain />
    <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import ErrorMain from '@/components/Error404Page.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
    components: {
        TheHeader,
        ErrorMain,
        TheFooter,
    },
}

</script>