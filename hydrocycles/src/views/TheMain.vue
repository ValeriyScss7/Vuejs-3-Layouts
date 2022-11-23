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

        <main class="mainMain">
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

            <nav class="Cycles__navMobile">
                <div class="container Cycles__nav__wrapper ">
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Shopes</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Actions</span>
                        </a>
                    </div>
                    <div class="Cycles__nav__item">
                        <a href="#">
                            <span class="Cycles__nav__span">Delivery</span>
                        </a>
                    </div>
                </div>

            </nav>

            <section class="slider">
                <div class="container slider__wrap">
                    <div class="slider__main">
                        <img src="../assets/img/слайдербаннер.png" alt="">
                        <img class="slider__main__img img-left" src="../assets/img/Vectorleft.svg" alt="">
                        <img src="../assets/img/Vectorright.svg" alt="" class="slider__main__img img-right">
                        <div class="slider__main__ellipse">
                            <img src="../assets/img/EllipseBackgroungwhite.png" alt="">
                            <img src="../assets/img/Ellipse.png" alt="">
                            <img src="../assets/img/Ellipse.png" alt="">
                            <img src="../assets/img/Ellipse.png" alt="">
                            <img src="../assets/img/Ellipse.png" alt="">
                            <img src="../assets/img/Ellipse.png" alt="">
                        </div>


                    </div>
                    <div class="slider__asside">
                        <div class="slider__asside__top">

                            <div class="slider__asside__top__actionprice">
                                <a href="#">Action</a>
                                <div class="slider__asside__top__price">
                                    <h2>190 000</h2>
                                    <img src="../assets/img/icons8-рубль-50.svg" alt="">
                                </div>
                            </div>
                            <div class="slider__asside__top__price__unprofitable">
                                <h2>225 000</h2>
                                <img src="../assets/img/icons8-рубль-50-мелкий.svg" alt="">
                            </div>
                        </div>
                        <div class="slider__asside__center">
                            <h3>Boat motor Suzuki DF9.9BRS</h3>

                        </div>
                        <div class="slider__asside__bottom">
                            <h3>The promotion is valid until</h3>
                            <span>31.08.2020</span>



                        </div>
                    </div>





                </div>
            </section>

            <nav class="searchProduct">
                <div class="container">
                    <div class="searchProduct__category">
                        <a href="">Search by number</a>
                        <a href="">Search by mark</a>
                        <a href="">Search by name</a>
                    </div>
                    <div class="searchProduct__field">
                        <form action="#" class="FieldForm">
                            <input class="userField" type="text" placeholder="Type mark">
                            <input class="btn" type="submit" value="search">
                        </form>

                    </div>

                </div>

            </nav>

            <section class="transportcardbox">
                <div class="container transportcardbox__wrap">
                    <article class="container transportcardbox__wrap__item">
                        <RouterLink to="/catalog">
                            <h3>Quad bikes</h3>
                        </RouterLink>

                        <RouterLink class="transportcardbox__wrap__item__link" to="/catalog">
                            Read more >
                        </RouterLink>

                    </article>
                    <article class="container transportcardbox__wrap__item item2">
                        <RouterLink to="/catalog">
                            <h3>Jet skis</h3>
                        </RouterLink>
                        <RouterLink class="transportcardbox__wrap__item__link" to="/catalog">
                            Read more >
                        </RouterLink>
                    </article>
                    <article class="container transportcardbox__wrap__item item3">
                        <RouterLink to="/catalog">
                            <h3>Launches</h3>
                        </RouterLink>
                        <RouterLink class="transportcardbox__wrap__item__link" to="/catalog">
                            Read more >
                        </RouterLink>
                    </article>
                    <article class="container transportcardbox__wrap__item item4">
                        <RouterLink to="/catalog">
                            <h3>Snowmobiles</h3>
                        </RouterLink>
                        <RouterLink class="transportcardbox__wrap__item__link" to="/catalog">
                            Read more >
                        </RouterLink>
                    </article>
                    <article class="container transportcardbox__wrap__item item5">
                        <RouterLink to="/catalog">
                            <h3>ATVs</h3>
                        </RouterLink>
                        <RouterLink class="transportcardbox__wrap__item__link" to="/catalog">
                            Read more >
                        </RouterLink>
                    </article>
                    <article class="container transportcardbox__wrap__item item6">
                        <RouterLink to="/catalog">
                            <h3>Engines</h3>
                        </RouterLink>
                        <RouterLink class="transportcardbox__wrap__item__link" to="/catalog">
                            Read more >
                        </RouterLink>
                    </article>
                </div>


            </section>

            <section class="popproducts">
                <div class="container popproducts__wrap">
                    <div class="absolute__btn">
                        <img src="../assets/img/ItemboxBTNleft.png" alt="" class="absolute__btn__left">
                        <img src="../assets/img/Itemboxbtnright.png" alt="" class="absolute__btn__right">
                    </div>
                    <div class="popproducts__wrap__heading">
                        <h3>Popular products</h3>
                    </div>
                    <nav class="popproducts__wrap__nav">
                        <a href="#">Spare parts</a>
                        <a href="#">Motors</a>
                        <a href="#">Tires</a>
                        <a href="#">Electronic</a>
                        <a href="#">Tools</a>
                        <a href="#">Accessories</a>
                    </nav>

                    <div class="popproducts__wrap__itembox">
                        <article class="popproducts__wrap__itembox__item1">
                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View product</a>
                            </div>
                            <h3>Waterproof backpack</h3>
                            <span>9800 $</span>
                            <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                        </article>
                        <article class="popproducts__wrap__itembox__item2">
                            <a href="#" class="popproducts__wrap__itembox__item2__toplink">SALE</a>
                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View product</a>
                            </div>
                            <h3>Life vest BRP Men's Airflow PFD</h3>
                            <span>6900 $</span>
                            <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>

                        </article>
                        <article class="popproducts__wrap__itembox__item3">
                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View product</a>
                            </div>
                            <h3>BRP Audio-Premium System</h3>
                            <span>6800 $</span>
                            <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                        </article>
                        <article class="popproducts__wrap__itembox__item4">
                            <a href="#" class="popproducts__wrap__itembox__item4__toplink">SALE</a>
                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View product</a>
                            </div>
                            <h3>Rescue equipment</h3>
                            <span class="item4__span">Not available</span>
                            <a href="#" class="item4__link">Report Admission</a>
                        </article>

                    </div>

                    <div class="switchCirclesMobile">
                        <div class="switchCirclesMobile__circle"></div>
                        <div class="switchCirclesMobile__circle"></div>
                        <div class="switchCirclesMobile__circle"></div>
                    </div>

                    <div class="popproducts__wrap__button">
                        <RouterLink to="/catalog">Show more</RouterLink>
                    </div>
                </div>
            </section>

            <section class="discounts">
                <div class="container discounts__wrap">
                    <div class="discounts__wrap__img__container">
                        <img src="../assets/img/CFMOTO-X6-EPS_blue2.png" alt="">
                        <img src="../assets/img/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front40722.png"
                            alt="">
                    </div>
                    <div class="discounts__wrap__text">
                        <h3>DISCOUNTS</h3>
                        <span>for all spare parts up to 70%</span>
                    </div>

                    <div class="discounts__wrap__textMobile">
                        <span>For all spare parts up</span>
                        <span>to 70%</span>
                    </div>

                    <RouterLink to="/catalog">
                        VIEW ALL
                    </RouterLink>

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