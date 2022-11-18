<template>
    <TheHeader />
    <HeaderMobile />
    <CreatorNetwork />
    <CreatorNetworkTablet />
    <SectionSellers />
    <SectionHotBid />
    <SectionHotCollections />
    <SectionFilter />
    <SectionCrypter />
    <TheFooter />
    


</template>

<script>
    import TheHeader from '@/components/TheHeader.vue'
    import HeaderMobile from '@/components/sections/Mobile/HeaderMobile.vue'
    import TheFooter from '@/components/TheFooter.vue'
    import CreatorNetwork from '@/components/sections/CreatorNetwork.vue'
    import CreatorNetworkTablet from '@/components/sections/Tablet/CreatorNetworkTablet.vue'
    import SectionSellers from '@/components/sections/SectionSellers.vue'
    import SectionHotBid from '@/components/sections/SectionHotbid.vue'
    import SectionHotCollections from '@/components/sections/SectionHotCollections.vue'
    import SectionCrypter from '@/components/sections/SectionCrypter.vue'
    import SectionFilter from '@/components/sections/SectionFilter.vue'

    export default {
    components: {
        TheHeader,
        HeaderMobile,
        TheFooter,
        CreatorNetwork,
        CreatorNetworkTablet,
        SectionSellers,
        SectionHotBid,
        SectionHotCollections,
        SectionCrypter,
        SectionFilter,
        
    },

    }
</script>

<style scoped lang="scss">
    @import url(../assets/style/main.scss);
    


</style>