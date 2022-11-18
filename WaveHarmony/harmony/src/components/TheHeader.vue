<template>
  <header>
    <div class="container header__wrap">
      <div class="header__wrap__top">
        <div class="header__wrap__top__numberText">
          <p>+1 (800) 469-92-69</p>
          <span>— Free Call</span>
        </div>
        <div class="header__wrap__top__logo">
          <router-link :to="'/'">
            <img src="../assets/layouts/img/LOGO.svg" alt="">
          </router-link>

        </div>
        <div class="header__wrap__top__right">
          <img src="../assets/layouts/img/increase.svg" alt="image">
          <img src="../assets/layouts/img/heart.svg" alt="image">
          <div class="burgerBasket">
            <img src="../assets/layouts/img/bag.svg" alt="image">
            <div class="basket">
              <div class="basket__cards">
                <article>
                  <div class="itemPics">
                    <img src="../assets/layouts/img/basketGirl.svg" alt="">
                  </div>

                  <div class="itemText">
                    <h6>Kiana</h6>
                    <p>Size: S - 42/44</p>
                    <span>6 600 r</span>
                    <div class="itemText__bottom">
                      <img src="../assets/layouts/img/-.png" alt="image">
                      <span>1</span>
                      <img src="../assets/layouts/img/+.png" alt="image">
                      <img class='delete' src="../assets/layouts/img/delete1.svg" alt="">
                    </div>
                  </div>


                </article>

                <article>
                  <div class="itemPics">
                    <img src="../assets/layouts/img/basketGirl.svg" alt="">
                  </div>

                  <div class="itemText">
                    <h6>Kiana</h6>
                    <p>Size: S - 42/44</p>
                    <span>6 600 r.</span>
                    <div class="itemText__bottom">
                      <img src="../assets/layouts/img/-.png" alt="image">
                      <span>1.</span>
                      <img src="../assets/layouts/img/+.png" alt="image">
                      <img class='delete' src="../assets/layouts/img/delete1.svg" alt="">
                    </div>
                  </div>


                </article>
              </div>

              <div class="basketBottom">
                <div class="finalPayment">
                  <span>Final Payment:</span>
                  <span>13 200 r.</span>
                </div>
                <router-link :to="'Error404'">
                  Go to ordering
                </router-link>
              </div>


            </div>
          </div>

        </div>
      </div>
      <nav class="header__wrap__bottom">

        <router-link :to="'Error404'">
          Catalog
        </router-link>
        <router-link :to="'Error404'">
          Blog
        </router-link>
        <router-link :to="'Error404'">
          About
        </router-link>
        <router-link :to="'Error404'">
          Sizes
        </router-link>
        <router-link :to="'Error404'">
          Shipping and payment
        </router-link>
        <router-link :to="'Error404'">
          Create your swimsuit
        </router-link>
        <router-link :to="'Error404'" class="gift">
          Certificates
        </router-link>
        <router-link :to="'Error404'">
          Contacts
        </router-link>
        <router-link :to="'Error404'" class="sale">
          Sale up to 40%
        </router-link>
      </nav>
    </div>

  </header>

</template>

<script>


export default {
  name: 'TheHeader',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(../assets/layouts/index/index.scss);
@import url(../assets/layouts/header/header.scss)
</style>
