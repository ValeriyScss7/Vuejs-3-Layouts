<template>
    <div class="wrapper">
        <header>
            <div class="container header__wrap">
                <div class="header__left">
                    <span class="header__left__span">The shops</span>
                    <span class="header__left__span">Actions</span>
                    <span class="header__left__span">Ships and Payment</span>
                    <RouterLink to="/">
                        <img class="img__logo" src="../assets/img/Логотип.svg" alt="">
                    </RouterLink>

                    <div class="dress__span">
                        <img class="img__dress" src="../assets/img/Адрес.png" alt="">
                        <span class="header__left__span">Qatar, Dukhan Hwy 25</span>
                    </div>

                </div>
                <div class="header__right">
                    <div class="header__right__item">
                        <img src="../assets/img/сердце.svg" alt="">
                    </div>
                    <div class="header__right__item">
                        <img src="../assets/img/Иконкачеловека.svg" alt="">
                    </div>
                    <div class="header__right__item item__basket">
                        <span class="basket__span">1</span>
                        <img class="basket__img" src="../assets/img/корзина.svg" alt="">
                    </div>
                </div>
            </div>


        </header>

        <div class="header__mobile">
            <div class="container header__mobile__wrap">
                <div class="burger_open" @click="addClass()">
                    <img class="header__mobile__burgerImg" src="../assets/img/Burgermedia.svg" alt="">

                    <nav class="burger">
                        <div class="burger__wrap">
                            <div class="burger__wrap__item item--img" @click="removeClass()">
                                <img src="../assets/img/BurgerClose.png" alt="imageclose">
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem1,2.svg" alt="">
                                <span>Sign up</span>
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem1,2.svg" alt="">
                                <span>Registration</span>
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem3.svg" alt="">
                                <span>Favorites</span>
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem4.svg" alt="">
                                <span>Cart</span>
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem5.svg" alt="">
                                <span>The shops</span>
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem6.svg" alt="">
                                <span>Actions</span>
                            </div>
                            <div class="burger__wrap__item">
                                <img src="../assets/img/burgeritem7.svg" alt="">
                                <span>Ships and Payment</span>
                            </div>
                            <span class="burger__wrap__text">Quad bikes</span>
                            <span class="burger__wrap__text">Launches</span>
                            <span class="burger__wrap__text">Jet skis</span>
                            <span class="burger__wrap__text">Boats</span>
                            <span class="burger__wrap__text">Snowmobiles</span>
                            <span class="burger__wrap__text">Engines</span>
                            <span class="burger__wrap__text">Spare parts</span>
                            <h3>Qatar, Dukhan Hwy 25</h3>
                        </div>
                    </nav>
                </div>



                <h3 class="header__mobile__text">DRIVE MOTO</h3>
                <div class="header__right">
                    <div class="header__right__item">
                        <img src="../assets/img/сердце.svg" alt="">
                    </div>
                    <div class="header__right__item">
                        <img src="../assets/img/Иконкачеловека.svg" alt="">
                    </div>
                    <div class="header__right__item item__basket">
                        <span class="basket__span">1</span>
                        <img class="basket__img" src="../assets/img/корзина.svg" alt="">
                    </div>
                </div>
            </div>

        </div>

        <main class="productMain">

            <nav class="Cycles__nav">
                <div class="container Cycles__nav__wrapper ">
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Quad bikes</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Launches</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Jet skis</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Boats</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Snowmobiles</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Engines</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Spare parts</span>
                        </a>
                    </div>




                </div>
            </nav>

            <nav class="additionaly__nav">
                <div class="container additionaly__nav__wrap">
                    <a href="#">Home</a>
                    <span>></span>
                    <a href="#">Jet skis</a>
                    <span>></span>
                    <a href="#">Jet Sky BRP SeaDoo GTI 155hp SE Long Blue Metallic</a>

                </div>

            </nav>

            <section class="itemCard">
                <div class="container itemCard__wrap">
                    <div class="itemCard__wrap__left">
                        <a href="#" class="itemCard__wrap__left__btn">SALE</a>
                        <span>12000 $</span>
                        <h3>11004 $</h3>
                        <a href="#" class="itemCard__wrap__left__questionLink">Found cheaper? Let's lower the price!</a>
                    </div>
                    <div class="itemCard__wrap__right">

                        <h3 class="itemCard__wrap__right__heading">Jet Sky BRP SeaDoo GTI 155hp SE Long Blue Metallic
                        </h3>
                        <span class="itemCard__wrap__right__itemCode">Product code: 366666-2 </span>
                        <div class="itemCard__wrap__right__raiting">
                            <img class="itemCard__wrap__right__raiting__heart" src="../assets/img/ItemBoxHeart.svg"
                                alt="img">
                            <img class="itemCard__wrap__right__raiting__line" src="../assets/img/RaitingLine.svg"
                                alt="img">
                            <div class="starLine">
                                <img class="star" src="../assets/img/BluestarRaiting.svg" alt="img">
                                <img class="star" src="../assets/img/BluestarRaiting.svg" alt="img">
                                <img class="star" src="../assets/img/BluestarRaiting.svg" alt="img">
                                <img class="star" src="../assets/img/BluestarRaiting.svg" alt="img">
                                <img class="star" src="../assets/img/RaitingStar.svg" alt="img">
                            </div>
                        </div>

                        <div class="itemCard__wrap__right__itemOptions">
                            <div class="itemCard__wrap__right__itemOptions__options">
                                <a href="#">Characteristics</a>
                                <a href="#">Available</a>
                            </div>
                            <div class="itemCard__wrap__right__itemOptions__specifications">
                                <span>Manufacturer</span>
                                <span class="Canada">Canada</span>
                            </div>
                            <div class="itemCard__wrap__right__itemOptions__specifications">
                                <span>Number of seats, pcs: </span>
                                <span class="Number3">3</span>
                            </div>
                            <div class="itemCard__wrap__right__itemOptions__specifications">
                                <span>Power ,hw</span>
                                <span class="Number155">155</span>
                            </div>
                            <div class="itemCard__wrap__right__itemOptions__specifications">
                                <span>Engine type</span>
                                <span class="petrol">Petrol</span>
                            </div>
                            <div class="itemCard__wrap__right__itemOptions__specifications">
                                <span>Year of issue</span>
                                <span class="year">2018</span>
                            </div>





                        </div>

                        <div class="itemCard__wrap__right__showLink">
                            <a href="#">Show more</a>
                        </div>

                        <div class="itemCard__wrap__right__btn">
                            <a href="#">Bye</a>
                        </div>


                    </div>
                </div>
            </section>

            <section class="itemWork">
                <div class="container itemWork__wrap">

                    <nav class="itemWork__wrap__itemBye">
                        <span class="itemWork__wrap__itemBye__item">About</span>
                        <span class="itemWork__wrap__itemBye__item">Characteristics</span>
                        <span class="itemWork__wrap__itemBye__item">Reviews</span>
                        <span class="itemWork__wrap__itemBye__item">Pickup</span>
                        <span class="itemWork__wrap__itemBye__item">Delivery</span>
                        <span class="itemWork__wrap__itemBye__item">Service</span>
                        <span class="itemWork__wrap__itemBye__item">Guarantee</span>
                    </nav>

                    <div class="itemWork__wrap__shopLocation">
                        <span>Store</span>
                        <div class="itemWork__wrap__shopLocation__inputBlock">
                            <input type="text" class="itemWork__wrap__shopLocation__inputBlock__textEnter">

                            <div class="itemWork__wrap__shopLocation__inputBlock__input-separator"></div>
                        </div>

                        <input type="text" placeholder="Enter store name" class="mobileInput">

                        <div class="inputBox">
                            <input type="checkbox">
                            <span class="inputBox__text">Pick up today</span>
                        </div>


                        <div class="inputBox">
                            <input type="checkbox">
                            <span class="inputBox__text">Pick up within a week</span>
                        </div>

                    </div>

                    <div class="itemWork__wrap__table">

                        <div class="itemWork__wrap__table__address">
                            <h3 class="tableHeading">Address</h3>

                            <div class="itemWork__wrap__table__address__exact">
                                <span class="tableSpan">Qatar, Dukhan Hwy 25</span>
                            </div>

                            <div class="itemWork__wrap__table__address__exact">
                                <span class="tableSpan">Qatar, Dukhan Hwy 34</span>
                            </div>

                            <div class="itemWork__wrap__table__address__exact">
                                <span class="tableSpan">Qatar, Dukhan Hwy 1</span>
                            </div>

                            <div class="itemWork__wrap__table__address__exact">
                                <span class="tableSpan">Qatar, Dukhan Hwy 67</span>
                            </div>
                        </div>

                        <div class="itemWork__wrap__table__workTime">
                            <h3 class="tableHeading">Working mode</h3>
                            <div class="itemWork__wrap__table__workTime__days">
                                <div class="itemWork__wrap__table__workTime__days__monday-saturday">
                                    <span class="tableSpan">mn-st:</span>
                                    <span class="tableSpan">08:00-19:00</span>
                                </div>

                                <div class="itemWork__wrap__table__workTime__days__sunday">
                                    <span class="tableSpan">sn:</span>
                                    <span class="tableSpan">09:00-17:00</span>
                                </div>

                            </div>
                            <div class="itemWork__wrap__table__workTime__days">
                                <div class="itemWork__wrap__table__workTime__days__monday-saturday">
                                    <span class="tableSpan">mn-st:</span>
                                    <span class="tableSpan">08:00-19:00</span>
                                </div>

                                <div class="itemWork__wrap__table__workTime__days__sunday">
                                    <span class="tableSpan">sn:</span>
                                    <span class="tableSpan">09:00-17:00</span>
                                </div>

                            </div>
                            <div class="itemWork__wrap__table__workTime__days">
                                <div class="itemWork__wrap__table__workTime__days__monday-saturday">
                                    <span class="tableSpan">mn-st:</span>
                                    <span class="tableSpan">08:00-19:00</span>
                                </div>

                                <div class="itemWork__wrap__table__workTime__days__sunday">
                                    <span class="tableSpan">sn:</span>
                                    <span class="tableSpan">09:00-17:00</span>
                                </div>

                            </div>
                            <div class="itemWork__wrap__table__workTime__days">
                                <div class="itemWork__wrap__table__workTime__days__monday-saturday">
                                    <span class="tableSpan">mn-st:</span>
                                    <span class="tableSpan">08:00-19:00</span>
                                </div>

                                <div class="itemWork__wrap__table__workTime__days__sunday">
                                    <span class="tableSpan">sn:</span>
                                    <span class="tableSpan">09:00-17:00</span>
                                </div>

                            </div>

                        </div>

                        <div class="itemWork__wrap__table__availability">
                            <h3 class="tableHeading">Available</h3>
                            <div class="itemWork__wrap__table__availability__text">
                                <span class="tableSpan">Available</span>
                            </div>
                            <div class="itemWork__wrap__table__availability__text">
                                <span class="tableSpan">Available</span>
                            </div>
                            <div class="itemWork__wrap__table__availability__text">
                                <span class="tableSpan">Not available</span>
                            </div>
                            <div class="itemWork__wrap__table__availability__text">
                                <span class="tableSpan">Not available</span>
                            </div>

                        </div>

                        <div class="itemWork__wrap__table__amount">
                            <h3 class="tableHeading">Amount</h3>
                            <div class="itemWork__wrap__table__amount__textNumber">
                                <span class="tableSpan">1</span>
                            </div>
                            <div class="itemWork__wrap__table__amount__textNumber">
                                <span class="tableSpan">2</span>
                            </div>
                            <div class="itemWork__wrap__table__amount__textNumber">
                                <span class="tableSpan">0</span>
                            </div>
                            <div class="itemWork__wrap__table__amount__textNumber">
                                <span class="tableSpan">0</span>
                            </div>
                        </div>

                        <div class="itemWork__wrap__table__buttons">
                            <div class="itemWork__wrap__table__buttons__button">
                                <a href="#">BUY</a>
                            </div>

                            <div class="itemWork__wrap__table__buttons__button">
                                <a href="#">BUY</a>
                            </div>

                            <div class="itemWork__wrap__table__buttons__button">
                                <a href="#">BUY</a>
                            </div>

                            <div class="itemWork__wrap__table__buttons__button">
                                <a href="#">BUY</a>
                            </div>
                        </div>

                        <div class="itemWork__wrap__table__line1"></div>
                        <div class="itemWork__wrap__table__line2"></div>
                        <div class="itemWork__wrap__table__line3"></div>
                        <div class="itemWork__wrap__table__line4"></div>

                    </div>

                    <div class="showLinkMobile">
                        <a href="#">Show all stores</a>
                        <img src="../assets/img/ShowLinkMobile.png" alt="">
                    </div>

                </div>
            </section>


            <section class="additionalProducts" style="display:block;">

                <div class="container additionalProducts__wrap">
                    <div class="absolute__btn">
                        <img src="../assets/img/ItemboxBTNleft.png" alt="" class="absolute__btn__left">
                        <img src="../assets/img/Itemboxbtnright.png" alt="" class="absolute__btn__right">
                    </div>
                    <div class="additionalProducts__wrap__heading">
                        <h3>Buy with this product</h3>
                    </div>
                    <nav class="additionalProducts__wrap__nav">
                        <a href="#">Spare parts</a>
                        <a href="#">Motors</a>
                        <a href="#">Tires</a>
                        <a href="#">Electronic</a>
                        <a href="#">Tools</a>
                        <a href="#">Accessories</a>
                    </nav>

                    <div class="additionalProducts__wrap__itembox">
                        <article class="additionalProducts__wrap__itembox__item1">
                            <a href="#" class="additionalProducts__wrap__itembox__item1__toplink">SALE</a>
                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View item</a>
                            </div>
                            <h3>BRP Audio-portative system</h3>
                            <span class="item1__span">Not available</span>
                            <a href="#" class="item1__link">Report Admission</a>
                        </article>
                        <article class="additionalProducts__wrap__itembox__item2">
                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View item</a>
                            </div>
                            <h3>Garmin Echomap Plus 62cv</h3>
                            <span>45 800 $</span>
                            <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>

                        </article>
                        <article class="additionalProducts__wrap__itembox__item3">
                            <a href="#" class="additionalProducts__wrap__itembox__item3__toplink">SALE</a>
                            <img class="imgHeart" src="../assets/img/additional_card_3.svg" alt="">
                            <div class="overlay">
                                <a href="#">View item</a>
                            </div>
                            <h3>RF D.E.S.S.TM Key</h3>
                            <span class="item3__span">Not available</span>
                            <a href="#" class="item3__link">Report Admission</a>
                        </article>
                        <article class="additionalProducts__wrap__itembox__item4">

                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View item</a>
                            </div>
                            <h3 class="item4__heading">Men's suit 3mm</h3>
                            <span class="item4__price">7 000 $</span>

                        </article>



                    </div>

                    <div class="switchCirclesMobile">
                        <div class="switchCirclesMobile__circle"></div>
                        <div class="switchCirclesMobile__circle"></div>
                        <div class="switchCirclesMobile__circle"></div>
                    </div>

                    <div class="additionalProducts__wrap__buttonMobile">
                        <a href="#">Show more</a>
                    </div>


                </div>
            </section>


        </main>

        <footer>
            <div class="footerWrapper">
                <div class="container footer__wrap">
                    <div class="footer__content__left">
                        <h3>Subscribe to our newsletter and learn about promotions faster</h3>
                        <form action="#">
                            <input type="email" placeholder="Type your email" class="mailInput">
                            <a href="" class="mailLink">SEND</a>
                        </form>
                    </div>
                    <div class="footer__content__ulLeft">
                        <ul class="footer__left__list"> Information
                            <li class="footer__left__link">About</li>
                            <li class="footer__left__link">Contacts</li>
                            <li class="footer__left__link">Actions</li>
                            <li class="footer__left__link">Shops</li>
                        </ul>
                        <span class="footer__left__span">Contract offer</span>
                    </div>
                    <div class="footer__content__ulRight">
                        <ul class="footer__right__list"> Online store
                            <li class="footer__right__link">Delivery and pickup</li>
                            <li class="footer__right__link">Payment</li>
                            <li class="footer__right__link">Return-exchange</li>
                            <li class="footer__right__link">News</li>
                        </ul>
                        <span class="footer__right__span">Personal data processing policy</span>
                    </div>
                    <div class="footer__content__right">
                        <img src="../assets/img/instagram-sketched(1)1.png" alt="">
                        <img src="../assets/img/vk1.svg" alt="">
                        <img src="../assets/img/facebook1.svg" alt="">
                        <img src="../assets/img/youtube1.svg" alt="">
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
                this.$el.querySelector('.burger').classList.toggle('visibility');
            },
        }
    }
</script>