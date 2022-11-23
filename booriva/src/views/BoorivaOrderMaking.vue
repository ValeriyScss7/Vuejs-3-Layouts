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
            <section class="order">
                <div class="container order__wrap">

                    <div class="order__wrap__left">
                        <div class="orderArea Area--one">
                            <div class="orderArea__number">
                                <div class="orderArea__number__num">
                                    <h4>1</h4>
                                    <img src="../assets/img/PinklineSSS.svg" alt="image">
                                    <span>Contact details</span>
                                </div>
                            </div>

                            <div class="orderArea__textFields">
                                <input type="text" placeholder="Name">
                                <input type="text" placeholder="Second name">
                                <input type="tel" placeholder="+38 (___) ___-__-__">
                                <input type="email" placeholder="E-mail">
                            </div>
                        </div>

                        <div class="orderArea Area--two">
                            <div class="orderArea__number">
                                <div class="orderArea__number__num">
                                    <h4>2</h4>
                                    <img src="../assets/img/PinklineSSS.svg" alt="image">
                                    <span>Delivery method</span>
                                </div>
                            </div>

                            <div class="orderArea__textFields">
                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>Delivery to the New Post Office—</p>
                                        <span>according to NP tariffs</span>
                                    </div>
                                </div>

                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>Delivery to the New Post Office—</p>
                                        <span>according to NP tariffs</span>
                                    </div>

                                </div>

                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>Delivery to the New Post Office—</p>
                                        <span>according to NP tariffs</span>
                                    </div>
                                </div>

                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>Delivery to the New Post Office—</p>
                                        <span>according to NP tariffs</span>
                                    </div>
                                </div>

                                <p class="bottomText">Kiev, st. Nizhniy Val, 37 Daily from 11:00 to 21:00</p>

                                <textarea name="" id="" cols="1" rows="1" class="enterText">Comment to the order
                                </textarea>
                            </div>
                        </div>

                        <div class="orderArea Area--three">
                            <div class="orderArea__number">
                                <div class="orderArea__number__num">
                                    <h4>3</h4>
                                    <img src="../assets/img/PinklineSSS.svg" alt="image">
                                    <span>Delivery method</span>
                                </div>
                            </div>

                            <div class="orderArea__textFields">
                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>By Visa / MasterCard</p>
                                    </div>

                                </div>
                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>Cash upon receipt</p>
                                    </div>
                                </div>
                                <input type="text" placeholder="Number of card  boorivasis">
                                <div class="area__point">
                                    <div class="circle black"></div>
                                    <div class="text">
                                        <p>I am sure of the order, with me you can
                                             don't get involved</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="button">
                            <a href="#">Confirm the order</a>
                        </div>
                    </div>

                    <div class="order__wrap__right">
                        <div class="basket">
                            <h5>Items in the cart</h5>

                                <div class="basket__products">

                                    <article class="basket__products__card">
                                        <a href="../Product/boorivaProduct.html">
                                            <img class="basketPng" src="../assets/img/cart2.svg"
                                                alt="image">
                                        </a>
                                        <div class="basket__products__card__content">
                                            <h4>Bomber Gone Crazy
                                                </h4>
                                            <p>S — M</p>
                                            <span>2 499 UAH</span>
                                            <img src="../assets/img/burgerBasket/deleteBasket.svg" alt="image">
                                        </div>
                                    </article>

                                    <article class="basket__products__card">
                                        <a href="../Product/boorivaProduct.html">
                                            <img class="basketPng" src="../assets/img/cart1.svg"
                                                alt="image">
                                        </a>
                                        <div class="basket__products__card__content">
                                            <h4>Aquarium t-shirt dress</h4>
                                            <p>S — M</p>
                                            <span>899 UAH</span>
                                            <img src="../assets/img/burgerBasket/deleteBasket.svg" alt="image">
                                        </div>
                                    </article>

                                </div>

                                <div class="basket__sumOrder">
                                    <div class="pinkSum">
                                        <span class="sumSmall">Summ of Order:</span>
                                        <span class="sumBold">3 398 UAH</span>
                                    </div>
                                    <div class="pinkSum">
                                        <span class="sumSmall">Cost of delivery:</span>
                                        <span class="sumBold">free</span>
                                    </div>
                                    <div class="sumEnd">
                                        <span>Price: . . . . . . . . . . </span>
                                        <span class="sum">3 398 UAH</span>
                                    </div>

                                </div>

                        </div>

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