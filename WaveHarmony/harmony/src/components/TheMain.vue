<template>
    <main class="main">
        <section class="intro">     
          <div class="container intro__wrap">
            <div class="intro__wrap__content">
              <div class="intro__wrap__content__heading">
                <h1>Ocean</h1>
                <img src="../assets/layouts/img/Waves.png" alt="">
              </div>
                <p>With long sleeves</p>
                <router-link :to="'catalog'">Buy Ocean</router-link>
                <div class="intro__wrap__content__toggles">
                  <div class="toggle"></div>
                  <div class="toggle toggle--white"></div>
                  <div class="toggle"></div>
              </div>
              <img class="center" src="../assets/layouts/img/pussy_center.png" alt="">
              <img class="right" src="../assets/layouts/img/pussy_right.png" alt="">
            </div>
            <img src="../assets/layouts/img/wave.png"  class='wave' alt="">
            
          </div>
        </section>

        <sectionpopModels />

        <ThesectiontrustMe />

        <sectionbetterClothing />

        <sectionInstagramPics />


    </main>
        
  </template>
  
  <script>

  import sectionpopModels from '@/assets/layouts/index/sections/sectionpopModels.vue'
  import ThesectiontrustMe from '@/assets/layouts/index/sections/ThesectiontrustMe.vue'
  import sectionbetterClothing from '@/assets/layouts/index/sections/sectionbetterClothing.vue'
  import sectionInstagramPics from '@/assets/layouts/index/sections/sectionInstagramPics.vue'

  export default {
    name: 'TheMain',
    components: {
      sectionpopModels,
      ThesectiontrustMe,
      sectionbetterClothing,
      sectionInstagramPics,
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    @import url(../assets/layouts/index/index.scss);
  </style>