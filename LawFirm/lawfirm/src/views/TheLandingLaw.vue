<template>
    <Lawheader />
    <TheWelcome />
    <ThePractice />
    <TheAdvantages />
    <TheHistory />
    <TheReviews />
    <TheAttourneys />
    <TheContacts />
    <TheBlogs />
    <LawFooter />
</template>


<script>
    import Lawheader from '@/components/LawHeader.vue'
    import TheWelcome from '@/components/sections/TheWelcome.vue'
    import ThePractice from '@/components/sections/ThePractice.vue'
    import TheAdvantages from '@/components/sections/TheAdvantages.vue'
    import TheHistory from '@/components/sections/TheHistory.vue'
    import TheReviews from '@/components/sections/TheReviews.vue'
    import TheAttourneys from '@/components/sections/TheAttourneys.vue'
    import TheContacts from '@/components/sections/TheContacts.vue'
    import TheBlogs from '@/components/sections/TheBlogs.vue'
    import LawFooter from '@/components/LawFooter.vue'

    export default {
    components: {
        Lawheader,
        TheWelcome,
        ThePractice,
        TheAdvantages,
        TheHistory,
        TheReviews,
        TheAttourneys,
        TheContacts,
        TheBlogs,
        LawFooter
    },
}
</script>

<style scoped lang="scss">
    @import url(../assets/style/style200.scss);
</style>