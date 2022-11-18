<template>
  <header>
    <div class="container header__wrap">
      <div class="header__wrap__top">
        <div class="header__wrap__top__numberText">
          <p>8 (800) 511 36 39</p>
          <span>— бесплатно по России</span>
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
                    <h6>Kiana - одна строка?</h6>
                    <p>Размер: S - 42/44</p>
                    <span>6 600 руб.</span>
                    <div class="itemText__bottom">
                      <img src="../assets/layouts/img/-.png" alt="image">
                      <span>1 шт.</span>
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
                    <h6>Kiana - одна строка?</h6>
                    <p>Размер: S - 42/44</p>
                    <span>6 600 руб.</span>
                    <div class="itemText__bottom">
                      <img src="../assets/layouts/img/-.png" alt="image">
                      <span>1 шт.</span>
                      <img src="../assets/layouts/img/+.png" alt="image">
                      <img class='delete' src="../assets/layouts/img/delete1.svg" alt="">
                    </div>
                  </div>


                </article>
              </div>

              <div class="basketBottom">
                <div class="finalPayment">
                  <span>Итого к оплате:</span>
                  <span>13 200 руб.</span>
                </div>
                <router-link :to="'Error404'">
                  Перейти к оформлению заказа
                </router-link>
              </div>


            </div>
          </div>

        </div>
      </div>
      <nav class="header__wrap__bottom">
        <a href="#">Каталог</a>
        <a href="#">Блог</a>
        <a href="#">О бренде</a>
        <a href="#">Размеры</a>
        <a href="#">Доставка и оплата</a>
        <a href="#">Отзывы</a>
        <a href="#">Создай свой купальник</a>
        <a href="#" class="gift">Сертификаты</a>
        <a href="#">Контакты</a>
        <a href="#" class="sale">Распродажа до -40%</a>
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
