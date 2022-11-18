<template>
  <footer class="footer">
    <div class="container footer__wrap">
      <div class="footer__wrap__top">
        <p>Get up-to-date information about all discounts, sales and new, trendy collections</p>
        <input type="email" placeholder="Type your email" class="mailField">
        <button><img src="../assets/layouts/img/buttonArrow.png" alt=""></button>
      </div>

      <div class="footer__wrap__bottom">
        <div class="footer__wrap__bottom__category">
          <h5>Useful links</h5>
          <router-link :to="'catalog'">
            Catalog
          </router-link>
          <router-link :to="'Error404'">
            Blog
          </router-link>
          <router-link :to="'Error404'">
            About
          </router-link>
          <router-link :to="'Error404'">
            Calculator
          </router-link>
          <router-link :to="'Error404'">
            Sizes
          </router-link>
          <router-link :to="'Error404'">
            Shippind and payment
          </router-link>
          <router-link :to="'Error404'">
            Contacts
          </router-link>
          <span class="gift">Gift sertificates</span>
          <span class="saleOrange">Sale up to 40%</span>
        </div>

        <div class="footer__wrap__bottom__category">
          <h5>Item Categories</h5>
          <router-link :to="'Error404'">
            New Collection 2021
          </router-link>
          <router-link :to="'Error404'">
            Swimwear Sale
          </router-link>
          <router-link :to="'Error404'">
            Surf swimwear
          </router-link>
          <router-link :to="'Error404'">
            Surf Lycra
          </router-link>
          <router-link :to="'Error404'">
            One piece swimwear
          </router-link>
          <router-link :to="'Error404'">
            Separate swimwear
          </router-link>
          <router-link :to="'Error404'">
            Swimwear with sleeves
          </router-link>
          <router-link :to="'Error404'">
            Swimwear without sleeves
          </router-link>
          <router-link :to="'catalog'">
            Swimwear with cups
          </router-link>
          
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="footer__wrap__bottom__category category--oftenFind">
          <h5>Often Searches</h5>
          <span>Black swimwear with sleeves</span>
          <span>Sleeveless swimwear</span>
          <span>Mesh swimwear</span>
          <span>Sports swimwear for the pool</span>
          <span>Printed swimwear</span>
          <span>Off Shoulder Swimwear</span>
        </div>

        <div class="footer__wrap__bottom__category category--contacts">
          <h5>Contact details</h5>
          <p>order@waveharmony.com</p>
          <p class="phoneNumber">8 (800) 511-36-39</p>
          <div class="socialMedia">
            
            <img src="../assets/layouts/img/whatsapp.svg" alt="">
            <img src="../assets/layouts/img/fb.svg" alt="">
            <img src="../assets/layouts/img/inst.svg" alt="">
          </div>
          <span class="contactsText">Information for buyers</span>
          <span class="contactsText">Wave Harmony - women's clothing for surfing and any other water sports.</span>
          <span class="contactsText">All rights reserved. 2021</span>
        </div>

      </div>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: 'TheFooter',
  props: {
    msg: String
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(../assets/layouts/index/index.scss);
</style>