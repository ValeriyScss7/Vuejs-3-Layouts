<template>
  <footer class="footer">
    <div class="container footer__wrap">
      <div class="footer__wrap__top">
        <p>Получайте актуальную информацию о всех скидках,распродажах и новых,трендовых коллекциях</p>
        <input type="email" placeholder="Введите ваш E-mail" class="mailField">
        <button><img src="../assets/layouts/img/buttonArrow.png" alt=""></button>
      </div>

      <div class="footer__wrap__bottom">
        <div class="footer__wrap__bottom__category">
          <h5>Полезные ссылки</h5>
          <router-link :to="'catalog'">
            Каталог
          </router-link>
          <router-link :to="'Error404'">
            Блог
          </router-link>
          <router-link :to="'Error404'">
            О бренде
          </router-link>
          <router-link :to="'Error404'">
            Калькулятор
          </router-link>
          <router-link :to="'Error404'">
            Размеры
          </router-link>
          <router-link :to="'Error404'">
            Доставка и оплата
          </router-link>
          <router-link :to="'Error404'">
            Контакты
          </router-link>
          <span class="gift">Подарочные сертификаты</span>
          <span class="saleOrange">Распродажа до -40%</span>
        </div>

        <div class="footer__wrap__bottom__category">
          <h5>Категории товаров</h5>
          <router-link :to="'Error404'">
            Новая коллекция 2021
          </router-link>
          <router-link :to="'Error404'">
            Распродажа купальников
          </router-link>
          <router-link :to="'Error404'">
            Купальники для серфинга
          </router-link>
          <router-link :to="'Error404'">
            Лайкра для серфинга
          </router-link>
          <router-link :to="'Error404'">
            Слитные купальники
          </router-link>
          <router-link :to="'Error404'">
            Раздельные купальники
          </router-link>
          <router-link :to="'Error404'">
            Купальники с рукавами
          </router-link>
          <router-link :to="'Error404'">
            Купальники без рукавов
          </router-link>
          <router-link :to="'catalog'">
            Купальники с чашечками
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
          <h5>Часто ищут</h5>
          <span>Черные купальники с рукавами</span>
          <span>Закрытые купальники с рукавами</span>
          <span>Купальники с сеткой</span>
          <span>Спортивные купальники для бассейна</span>
          <span>Купальники с принтом</span>
          <span>Купальники с закрытыми плечами</span>
        </div>

        <div class="footer__wrap__bottom__category category--contacts">
          <h5>Контактные данные</h5>
          <p>zakaz@waveharmony.com</p>
          <p class="phoneNumber">8 (800) 511-36-39</p>
          <div class="socialMedia">
            <img src="../assets/layouts/img/vk.svg" alt="">
            <img src="../assets/layouts/img/whatsapp.svg" alt="">
            <img src="../assets/layouts/img/fb.svg" alt="">
            <img src="../assets/layouts/img/inst.svg" alt="">
          </div>
          <span class="contactsText">Информация для покупателей</span>
          <span class="contactsText">Wave Harmony - женская одежда для серфинга и любых других, водных видов
            спорта.</span>
          <span class="contactsText">Все права защищены. 2021</span>
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