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
            <section class="productCard">
                <div class="container productCard__wrap">
                    <nav class="clothingNav">
                        <span>Overalls</span>
                        <span>Jackets</span>
                        <span>Shorts</span>
                        <span>Sweatshirt</span>
                        <span>Hoodies</span>
                        <span>Tops</span>
                        <span>T-shirts</span>
                    </nav>

                    <div class="productCard__wrap__leftAndRight">
                        <div class="productCard__wrap__leftAndRight__left">
                            <nav class="productCard__wrap__leftAndRight__left__productNav">
                                <span>Home</span>
                                <img src="../assets/img/Arrownavcategory.svg" alt="image">
                                <span>Jackets</span>
                                <img src="../assets/img/Arrownavcategory.svg" alt="image">
                                <span>Bombers</span>
                                <img src="../assets/img/Arrownavcategory.svg" alt="image">
                                <span>Bomber Gone Crazy</span>
                            </nav>

                            <div class="productCard__wrap__leftAndRight__left__product">
                                <div class="productCard__wrap__leftAndRight__left__product__circles">
                                    <div class="circle black"></div>
                                    <div class="circle black"></div>
                                    <div class="circle black"></div>
                                    <div class="circle black"></div>
                                    <div class="circle black"></div>
                                </div>
                                <div class="productCard__wrap__leftAndRight__left__product__miniCards">
                                    <article>
                                        <img src="../assets/img/itemmini1.svg" alt="image">
                                    </article>
                                    <article>
                                        <img src="../assets/img/itemmini3.svg" alt="image">
                                    </article>
                                    <article>
                                        <img src="../assets/img/itemmini4.svg" alt="image">
                                    </article>
                                    <article>
                                        <img src="../assets/img/itemmini2.svg" alt="image">
                                    </article>
                                </div>
                                <div class="productCard__wrap__leftAndRight__left__product__itemCard">
                                    <img src="../assets/img/Heart.svg" alt="image">
                                </div>
                            </div>
                        </div>

                        <div class="productCard__wrap__leftAndRight__right">
                            <div class="productCard__wrap__leftAndRight__right__top">
                                <h1>Bomber Gone Crazy</h1>
                                <span>2 499 UAH</span>
                                <span class="sizeText">Choose size:</span>
                                <div class="productCard__wrap__leftAndRight__right__top__size">
                                    <p>XS — S</p>
                                    <p>S — M</p>
                                    <p>M — L</p>
                                    <p>L — XL</p>
                                </div>
                                <div class="productCard__wrap__leftAndRight__right__top__buttons">
                                    <RouterLink to="/order">
                                        Cart add
                                    </RouterLink>

                                    <RouterLink to="/order">
                                        Quick order
                                    </RouterLink>
                                </div>

                                <div class="productCard__wrap__leftAndRight__right__top__text">
                                    <p>Over size khaki bomber jacket with elasticated sleeves. Fittings completed
                                         in silver color. The accent details are voluminous sewn pockets and
                                         detachable hood. One...<a href="#">Read more</a></p>
                                </div>

                                <hr class="hr-circle">

                            </div>

                            <div class="productCard__wrap__leftAndRight__right__bottom">
                                <div class="productCard__wrap__leftAndRight__right__bottom__model">
                                    <h3>Model parameters:</h3>
                                    <span>(On model XS — S)</span>
                                    <div class="scheme">
                                        <p class="rotate">growth: 171s</p>
                                        <div class="scheme__element element--first">
                                            <p>83 sm</p>
                                            <span>Breast volume</span>
                                        </div>
                                        <div class="scheme__element element--second">
                                            <p>66 sm</p>
                                            <span>Waist volume</span>
                                        </div>
                                        <div class="scheme__element element-third">
                                            <p>93 sm</p>
                                            <span>Hips Volume</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="structure">
                                    <h3>compound</h3>
                                    <p>50% viscose,
                                        50% polyester</p>

                                </div>


                            </div>

                            <div class="productCard__wrap__leftAndRight__right__button">
                                <a href="../OrderMaking/OrderMaking.html">Table of Sizes</a>
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <section class="bonuses">
                <div class="container bonuses__wrap">

                    <div class="bonuses__wrap__left">
                        <div class="bonuses__wrap__left__item item--one">
                            <img src="../assets/img/Kitty.svg" alt="">
                            <div class="bonuses__wrap__left__item__text">
                                <p>Same day dispatch</p>
                                <span class="time">Order from 18</span>
                                <span>00</span>
                            </div>
                        </div>

                        <div class="bonuses__wrap__left__item item--two">
                            <img src="../assets/img/Letter2.svg" alt="">
                            <div class="bonuses__wrap__left__item__text">
                                <p>Easy return/exchange</p>
                                <span>Within 14 days</span>
                            </div>
                        </div>

                        <div class="bonuses__wrap__left__item item--three">
                            <img src="../assets/img/LetterBonus.svg" alt="">
                            <div class="bonuses__wrap__left__item__text">
                                <p>Send by overlay</p>
                                <span>+ 2% from sum</span>
                            </div>
                        </div>
                    </div>

                    <div class="bonuses__wrap__right">
                        <span>INSTAGRAM PHOTO</span>
                        <img src="../assets/img/productInst.svg" alt="image">
                    </div>






                </div>
            </section>

            <section class="recomendationCards">
                <div class="container recomendationCards__wrap">
                    <div class="recomendationCards__wrap__heading">
                        <h3>Might like</h3>
                        <div class="recomendationCards__wrap__heading__text">
                            <span>You might like</span>
                            <img src="../assets/img/BlackLineEeEeEEe.svg" alt="image">
                        </div>
                    </div>
                </div>

                <div class="containerCardbox cardbox">
                    <article class="cardbox__card card--one">
                        <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                        <RouterLink to="/product">
                            <img class="mainImg" src="../assets/img/canlike1.svg" alt="image">
                        </RouterLink>
                        <div class="cardbox__card__bottom">
                            <p>Sweatshirt in a cage</p>
                            <span>1 099 UAH</span>
                        </div>

                    </article>
                    <article class="cardbox__card card--two">
                        <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                        <RouterLink to="/product">
                            <img class="mainImg" src="../assets/img/canlike2.svg" alt="image">
                        </RouterLink>
                        <div class="cardbox__card__bottom">
                            <p>Dress flower black</p>
                            <span>1 299 UAH</span>
                        </div>
                    </article>
                    <article class="cardbox__card card--three">
                        <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                        <RouterLink to="/product">
                            <img class="mainImg" src="../assets/img/canlike3.svg" alt="image">
                        </RouterLink>
                        <div class="cardbox__card__bottom">
                            <p>Bomber Gone Crazy</p>
                            <span>2 499 UAH</span>
                        </div>
                    </article>
                    <article class="cardbox__card card--four">
                        <img class="heart" src="../assets/img/CardHeart.svg" alt="image">
                        <RouterLink to="/product">
                            <img class="mainImg" src="../assets/img/canlike4.svg" alt="image">
                        </RouterLink>
                        <div class="cardbox__card__bottom">
                            <p>Dress t-shirts Aquarium</p>
                            <span>899 UAH</span>
                        </div>
                    </article>
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