<template>
    <div class="wrapper">

        <header class="header">
            <div class="container header__wrap">
                <div class="header__wrap__top">

                    <div class="header__wrap__top__item itemOne">
                        <img src="../assets/img/NavigationgPS.svg" alt="">
                        <span>Kyiv, nizhniy val,37</span>
                    </div>
                    <div class="header__wrap__top__item itemTwo">
                        <img src="../assets/img/Phone.svg" alt="">
                        <span>+38 063 843 34 71</span>
                    </div>


                    <div class="header__wrap__top__logo item--logo">
                        <RouterLink to="/">
                            <img src="../assets/img/logo.svg" alt="">
                        </RouterLink>

                    </div>
                    <div class="header__wrap__top__item item--increase">
                        <img src="../assets/img/Loop.svg" alt="">
                        <span>Search</span>
                    </div>
                    <div class="header__wrap__top__item item--burgerBasket">
                        <img src="../assets/img/Heart.svg" alt="">
                        <div class="burger" @click="addClass()">
                            <img src="../assets/img/Bag.svg" class="basketImg" alt="">
                            <div class="burger__wrap">
                                <div class="basket">
                                    <div class="basket__button">
                                        <img src="../assets/img/burgerBasket/Basketbutton.svg" alt="image">
                                    </div>

                                    <h3>Cart</h3>

                                    <div class="basket__products">
                                        <article class="basket__products__card">
                                            <img class="basketPng" src="../assets/img/cart2.svg"
                                                alt="image">
                                            <div class="basket__products__card__content">
                                                <h4>Bomber Gone Crazy
                                                    </h4>
                                                <p>S — M</p>
                                                <span>2 499 UAH</span>
                                                <img src="../assets/img/burgerBasket/deleteBasket.svg" alt="image">
                                            </div>
                                        </article>
                                        <article class="basket__products__card">
                                            <img class="basketPng" src="../assets/img/cart1.svg"
                                                alt="image">
                                            <div class="basket__products__card__content">
                                                <h4>Dress t-shirt Aquarium</h4>
                                                <p>S — M</p>
                                                <span>899 UAH</span>
                                                <img src="../assets/img/burgerBasket/deleteBasket.svg" alt="image">
                                            </div>
                                        </article>
                                    </div>

                                    <div class="basket__sumOrder">
                                        <span>Sum of order: . . . . . . </span>
                                        <span class="sum">3 398 UAH</span>
                                    </div>

                                    <div class="basket__bottomButton">
                                        <RouterLink to="/order">Make order now</RouterLink>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <nav class="header__wrap__bottom">
                    <a href="#">
                        <span>Novelties</span>
                    </a>
                    <a href="#">
                        <span>Dresses</span>
                    </a>
                    <a href="#">
                        <span>Outerwear</span>
                    </a>

                    <a href="#">
                        <span>Jackets</span>
                    </a>
                    <a href="#">
                        <span>Accessories</span>
                    </a>
                    <a href="#">
                        <span>Suits</span>
                    </a>
                    <RouterLink to="/BoorivaPage">
                        <span>#Boorivagirls</span>
                    </RouterLink>


                </nav>
            </div>
        </header>

        <main class="main">
            <section class="clothingPresentation">
                <div class="container clothingPresentation__wrap">
                    <div class="clothingPresentation__wrap__left">
                        <div class="item item--one">
                            <div class="content content--one">
                                <span>T-shirts</span>
                            </div>
                        </div>
                        <div class="clothingPresentation__wrap__left__bottom">
                            <div class="item item--two">
                                <div class="content content--two">
                                    <span>Bots</span>
                                </div>
                            </div>
                            <div class="item item--three">
                                <div class="content content--three">
                                    <span>Outerwear</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clothingPresentation__wrap__right">
                        <div class="clothingPresentation__wrap__right__top">
                            <div class="item item--one">
                                <div class="content content--one">
                                    <span>Dresses</span>
                                </div>
                            </div>
                            <div class="item item--two">
                                <div class="content content--two">
                                    <span>Suits</span>
                                </div>
                            </div>
                        </div>

                        <div class="item item--three">
                            <div class="content content--three">
                                <span>Hoodies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="clothingPresentationMobile" style="display:none;">
                <div class="containerMobile clothingPresentationMobile__wrap">
                    <div class="clothingPresentationMobile__wrap__top">
                        <div class="item item--tShirts">
                            <div class="item__content">
                                <span>T-shirts</span>
                            </div>
                        </div>

                        <div class="right">
                            <div class="item item--dresses">
                                <div class="item__content">
                                    <span>Dresses</span>
                                </div>
                            </div>
                            <div class="item item--bot">
                                <div class="item__content">
                                    <span>Bots</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clothingPresentationMobile__wrap__bottom">
                        <div class="left">
                            <div class="item item--top">
                                <div class="item__content">
                                    <span>Top</span>
                                </div>
                            </div>
                            <div class="item item--hoodies">
                                <div class="item__content">
                                    <span>Hoodies</span>
                                </div>
                            </div>
                        </div>

                        <div class="item item--suits">
                            <div class="item__content">
                                <span>Suits</span>
                            </div>
                        </div>


                    </div>

                    <nav class="clothingPresentationMobile__wrap__menu">
                        <div class="clothingPresentationMobile__wrap__menu__item">
                            <img src="../assets/img/media/mobile480/icon_menu.svg" alt="image">
                            <span>Menu</span>
                        </div>
                        <div class="clothingPresentationMobile__wrap__menu__item">
                            <img src="../assets/img/media/mobile480/Telegram.svg" alt="image">
                            <span>Write</span>
                        </div>
                        <div class="clothingPresentationMobile__wrap__menu__item">
                            <img src="../assets/img/media/mobile480/icon_bag.svg" alt="image">
                            <span>Basket</span>
                        </div>
                        <div class="clothingPresentationMobile__wrap__menu__item">
                            <img src="../assets/img/media/mobile480/icon_wishlist.svg" alt="image">
                            <span>Wish list</span>
                        </div>
                    </nav>
                </div>
            </section>

            <section class="novelties">
                <div class="containerNovelties novelties__wrap">
                    <div class="novelties__wrap__heading">
                        <h1>Novelties</h1>
                        <div class="novelties__wrap__heading__text">
                            <span>Novelties</span>
                            <img src="../assets/img/BlackLineEeEeEEe.svg" alt="image">
                        </div>
                    </div>

                    <div class="novelties__wrap__cardbox">
                        <article class="novelties__wrap__cardbox__card card--one">
                            <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                            <RouterLink to="/product">
                                <img class="mainImg" src="../assets/img/Cardbox1.svg" alt="image">
                            </RouterLink>
                            <div class="novelties__wrap__cardbox__card__bottom">
                                <p>Sweatshirt in a cage</p>
                                <span>1 099 UAH</span>
                            </div>

                        </article>
                        <article class="novelties__wrap__cardbox__card card--two">
                            <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                            <RouterLink to="/product">
                                <img class="mainImg" src="../assets/img/Cardbox2.svg" alt="image">
                            </RouterLink>
                            <div class="novelties__wrap__cardbox__card__bottom">
                                <p>Black floral dress</p>
                                <span>1 299 UAH</span>
                            </div>
                        </article>
                        <article class="novelties__wrap__cardbox__card card--three">
                            <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                            <RouterLink to="/product">
                                <img class="mainImg" src="../assets/img/Cardbox3.svg" alt="image">
                            </RouterLink>
                            <div class="novelties__wrap__cardbox__card__bottom">
                                <p>Bomber gone crazy</p>
                                <span>2 499 UAH</span>
                            </div>
                        </article>
                        <article class="novelties__wrap__cardbox__card card--four">
                            <img class="heart" src="../assets/img/CardHeart.svg" alt="image">

                            <RouterLink to="/product">
                                <img class="mainImg" src="../assets/img/Cardbox4.svg" alt="image">
                            </RouterLink>


                            <div class="novelties__wrap__cardbox__card__bottom">
                                <p>Aquarium t-shirt dress</p>
                                <span>899 UAH</span>
                            </div>
                        </article>
                    </div>

                    <div class="novelties__wrap__button">
                        <RouterLink to="/category">
                            Watching all
                        </RouterLink>
                    </div>
                </div>
            </section>

            <section class="newCollection">
            </section>

            <section class="boorivaLocation">
                <div class="container boorivaLocation__wrap">
                    <div class="mainImage">
                    </div>

                    <div class="boorivaLocation__wrap__text">
                        <p>BOORIVA</p>
                        <p>STORE</p>
                    </div>

                    <div class="boorivaLocation__wrap__longText">
                        <p>You can order a fitting of the item you like or just drop in while walking along the Podil
                            and try on something from stock.</p>
                    </div>

                    <div class="boorivaLocation__wrap__smallText">
                        <span>Kiev, st. Nizhniy val, 37</span>
                        <span>Daily from 11:00 to 21:00</span>
                    </div>

                    <img src="../assets/img/BigHeartBottomTop.svg" alt="" class="heartTop">

                    <img src="../assets/img/BigHeartBottomTop.svg" alt="" class="heartBottom">

                    <img src="../assets/img/TopLocationSSS.svg" alt="" class="SSS">

                    <img src="../assets/img/BottomLeftLocationhalfCircle.svg" alt="" class="halfCircle">

                    <img src="../assets/img/CurvedLineAbsolute.svg" alt="" class="curvedLine">

                    <img src="../assets/img/topShit.svg" alt="" class="topShit">

                    <img src="../assets/img/BottomLeftLocationhalfCircle.svg" alt="" class="halfCircleBottom">

                    <img src="../assets/img/ArrowBeautyX2.svg" class="arrowBottomOne" alt="img">

                    <img src="../assets/img/ArrowBeautyX2.svg" alt="img" class="arrowBottomTwo">

                    <img src="../assets/img/YandexCard.png" alt="" class="yandex">

                    <div class="boorivaLocation__wrap__button">
                        <a href="#">plot your route now</a>
                    </div>




                </div>

            </section>

            <section class="topProducts">
                <div class="scroll">
                    <marquee scrollamount="15" direction="right" class="containerNovelties topProducts__wrap">
                        <div class="topProducts__wrap__content">
                            <span>Top Products</span>
                            <span>Top Products</span>
                            <span>Top Products</span>
                            <span>Top Products</span>
                        </div>
                    </marquee>
                </div>

                <div class="container">
                    <div class="banerCards">
                        <div class="miniCards">
                            <article class="banerCards__miniCard">
                                <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                                <a href="../Product/boorivaProduct.html">
                                    <img class="mainImg" src="../assets/img/banermini1.svg" alt="image">
                                </a>
                                <div class="banerCards__miniCard__bottom">
                                    <p>Bomber Gone Crazy
                                    </p>
                                    <span>2 499</span>
                                </div>
                            </article>

                            <article class="banerCards__miniCard">
                                <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                                <a href="../Product/boorivaProduct.html">
                                    <img class="mainImg" src="../assets/img/banermini2.svg" alt="image">
                                </a>
                                <div class="banerCards__miniCard__bottom">
                                    <p>Bomber Gone Crazy</p>
                                    <span>2499</span>
                                </div>
                            </article>
                        </div>

                        <img class="banner" src="../assets/img/Banner.svg" alt="">
                        <article class="banerCards__card">
                            <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                            <a href="../Product/boorivaProduct.html">
                                <img class="mainImg" src="../assets/img/banerbig.svg" alt="image">
                            </a>
                            <div class="banerCards__card__bottom">
                                <p>Dress flower black</p>
                                <span>1 299 UAH</span>
                            </div>
                        </article>
                    </div>

                    <div class="button">
                        <RouterLink to="/category">
                            Watching all
                        </RouterLink>
                    </div>
                </div>

            </section>

            <section class="suits">
                <div class="container suits__wrap">
                    <div class="suits__wrap__heading">
                        <h2>Suits</h2>
                        <div class="suits__wrap__heading__text">
                            <span>Suits</span>
                            <img src="../assets/img/BlackLineEeEeEEe.svg" alt="image">
                        </div>
                    </div>
                </div>

                <div class="containerNovelties suits__wrap__items">

                    <div class="suits__wrap__items__item item--1">

                        <div class="suits__wrap__items__item__contentTop">
                            <span>1 899 </span>
                        </div>

                        <div class="suits__wrap__items__item__contentBottom">
                            <span>899 </span>
                        </div>

                    </div>


                    <div class="suits__wrap__items__item item--2">

                        <div class="suits__wrap__items__item__contentBottom">
                            <span>1899 </span>
                        </div>

                        <div class="suits__wrap__items__item__contentTop">
                            <span>899 </span>
                        </div>



                    </div>
                    <div class="suits__wrap__items__item item--3">
                        <div class="suits__wrap__items__item__contentTop">
                            <span>1 899 </span>
                        </div>
                        <div class="suits__wrap__items__item__contentBottom">
                            <span>899 </span>
                        </div>
                    </div>
                    <div class="suits__wrap__items__item item--4">

                        <div class="suits__wrap__items__item__contentBottom">
                            <span>1899 </span>
                        </div>

                        <div class="suits__wrap__items__item__contentTop">
                            <span>899 </span>
                        </div>

                    </div>
                </div>

                <div class="container button">
                    <RouterLink to="/category">
                        Watching all
                    </RouterLink>
                </div>

            </section>

            <section class="sendingAndExchange">
                <div class="container sendingAndExchange__wrap">

                    <div class="sendingAndExchange__wrap__item item--one">
                        <img src="../assets/img/icon_отправка.svg" alt="">
                        <div class="sendingAndExchange__wrap__item__text">
                            <p>Same day dispatch</p>
                            <span class="time">If Order before 18</span>
                            <span>00</span>
                        </div>
                    </div>

                    <div class="sendingAndExchange__wrap__item item--two">
                        <img src="../assets/img/icon_обмен.svg" alt="">
                        <div class="sendingAndExchange__wrap__item__text">
                            <p>Light return/exchange</p>
                            <span>Within 14 days</span>
                        </div>
                    </div>

                    <div class="sendingAndExchange__wrap__item item--three">
                        <img src="../assets/img/Icon_heart.svg" alt="">
                        <div class="sendingAndExchange__wrap__item__text">
                            <p>Made in Ukraine</p>
                            <span>Directly in Kyiv</span>
                        </div>
                    </div>




                </div>
            </section>

            <section class="instagram">
                <div class="container instagram__wrap">
                    <div class="instagram__wrap__left">
                        <h3>Instagram</h3>
                        <span class="often">We are in ecstasy when you tag us)</span>
                        <span class="miniText--two">Please tag more often</span>
                        <div class="instagram__wrap__left__images">
                            <img src="../assets/img/instagrambigleft.svg" alt="image">
                            <img src="../assets/img/instagramleft.svg" alt="image">
                        </div>
                    </div>
                    <div class="instagram__wrap__center">

                    </div>

                    <div class="instagram__wrap__right">
                        <div class="instagram__wrap__right__images">
                            <img src="../assets/img/instagramright.svg" alt="image">
                            <img src="../assets/img/instagrambigright.svg" alt="image">
                        </div>

                        <h3>#boorivagirls </h3>
                        <p>Tag to join our group.</p>

                    </div>
                </div>
            </section>

        </main>

        <footer>
            <div class="container footer__wrap">
                <div class="footer__wrap__item item--logo">
                    <img src="../assets/img/FooterLogo.png" alt="">
                </div>
                <div class="footer__wrap__item">
                    <span>Information</span>
                    <ul>

                        <li>
                            <RouterLink to="/contacts">Contacts</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/systemLoyalty">System of loyalty</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/exchange">Exchange and return</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/exchange">Shipping and payment</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__wrap__item item--address">
                    <span>Our address</span>
                    <ul>
                        <li>Kyiv,nizhniy val,37</li>
                        <li>Mon — Sun: 11:00/21:00</li>
                    </ul>
                </div>
                <div class="footer__wrap__item item--social">
                    <span>Social networks</span>
                    <ul>
                        <li class="images">
                            <img src="../assets/img/InstagramFooter.svg" alt="image">
                            <img src="../assets/img/FacebookFOtter.svg" alt="image">
                        </li>
                    </ul>
                </div>
                <div class="footer__wrap__item item--feedback">
                    <img src="../assets/img/Ivanka.svg" alt="">

                    <div class="footer__wrap__item__text">
                        <p>It is important for us to know what you think about us. Just write to me!</p>

                        <p>Write to Ivanka</p>
                    </div>

                </div>

            </div>
        </footer>

        <footer class="footerMobile">
            <div class="container footerMobile__wrap">

                <div class="footerMobile__wrap__item">
                    <span>Information</span>
                    <ul>
                        <li>System of Loyalty</li>
                        <li>Send and exchange</li>
                        <li>Shipping and payment</li>
                        <li>
                            <div class="messangers">
                                <img src="../assets/img/media/tablet/instagram.png" alt="image">
                                <img src="../assets/img/media/tablet/facebook-logo1.png" alt="image">
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="footerMobile__wrap__item item--address">
                    <span>Контакты</span>
                    <ul>
                        <li>Kyiv<br> street,Nizhniy val, 37</li>
                        <li>Daily:<br> 11:00/21:00</li>
                        <li>+38 063 843 34 71</li>
                    </ul>
                </div>

                <div class="footerMobile__wrap__item item--feedback">
                    <img src="../assets/img/Ivanka.svg" alt="">

                    <div class="footerMobile__wrap__item__text">
                        <p>It is important for us to know what you think about us. Just write to me!</p>

                        <p>Write to Ivanka</p>
                    </div>

                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        name:'BurgerBaskett',
        methods: {
            addClass() {
                this.$el.querySelector('.basket').classList.toggle('visibility');
            }
        }
    }
</script>

<style lang="scss">
    .visibility{
        opacity: 1;
        width: 518px;
        min-height: 789px;
        display: block;
    }
</style>