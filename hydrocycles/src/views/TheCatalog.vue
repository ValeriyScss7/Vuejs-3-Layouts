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

        <main>
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
                </div>

            </nav>

            <section class="jetski__category">
                <div class="container jetski__category__wrap">
                    <div class="jetski__category__wrap__heading">
                        <h3>Jet skis</h3>
                        <div class="jetski__category__wrap__heading__left__and__right">
                            <div class="jetski__category__wrap__heading__left">
                                <a href="#" class="jetski__category__wrap__heading__left__link">All-wheel drive</a>
                                <a href="#" class="jetski__category__wrap__heading__left__link">from 5000</a>
                                <a href="#" class="jetski__category__wrap__heading__left__link">BRP</a>
                                <a href="#" class="jetski__category__wrap__heading__left__link">more</a>
                            </div>

                            <div class="jetski__category__wrap__heading__right">
                                <div class="jetski__category__wrap__heading__right__popsort">
                                    <span class="jetski__category__wrap__heading__right__popsort__text">By popularity</span>
                                    <img src="../assets/img/Expandmore.1.1.1.1.1.1.svg" alt="">
                                </div>
                                <img src="../assets/img/Heading-right1.svg" alt="">
                                <img src="../assets/img/Heading-right2.svg" alt="">
                            </div>
                        </div>


                    </div>
                    <div class="jetski__category__wrap__main">
                        <div class="jetski__category__wrap__main__filter">
                            <h3 class="jetski__category__wrap__main__filter__heading">parameters</h3>
                            <h3 class="jetski__category__wrap__main__filter__heading">by mark</h3>

                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Available
                                </summary>
                                <div class="inputContainer">
                                    <div class="inputContainer__inputText">
                                        <div class="inputContainer__inputText__quadro"></div>
                                        <span>Available</span>
                                    </div>
                                    <div class="inputContainer__inputText">
                                        <div class="inputContainer__inputText__quadro"></div>
                                        <span>On order</span>
                                    </div>
                                </div>
                            </details>

                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Novelties
                                </summary>
                                <div class="inputContainer second">
                                    <div class="inputContainer__inputText">
                                        <div class="inputContainer__inputText__quadro"></div>
                                        <span>All</span>
                                    </div>
                                    <div class="inputContainer__inputText">
                                        <div class="inputContainer__inputText__quadro"></div>
                                        <span>Novelties</span>
                                    </div>
                                    <div class="inputContainer__inputText">
                                        <div class="inputContainer__inputText__quadro"></div>
                                        <span>Actions</span>
                                    </div>
                                </div>
                            </details>

                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Price
                                </summary>
                                <div class="jetski__category__wrap__main__filter__details__line">
                                    <div class="jetski__category__wrap__main__filter__details__line__circleLine"></div>
                                </div>
                                <div class="jetski__category__wrap__main__filter__details__priceWrapper">
                                    <div
                                        class="jetski__category__wrap__main__filter__details__priceWrapper__priceValue">
                                        <span>From</span>
                                        <a href="#">100000</a>
                                    </div>
                                    <div
                                        class="jetski__category__wrap__main__filter__details__priceWrapper__priceValue">
                                        <span>Before</span>
                                        <a href="#">500000</a>
                                    </div>
                                </div>


                            </details>

                            <div class="jetski__category__wrap__main__filter__enginePowerItem">
                                <h3>Power, hp</h3>
                                <details>
                                    <summary>
                                        <span>90</span>
                                        <img src="../assets/img/Detailsimg.png" alt="">
                                    </summary>
                                    <div class="specificationsEngine">
                                        <div><span>90</span></div>
                                        <div><span>130</span></div>
                                        <div><span>154</span></div>
                                        <div><span>230</span></div>
                                        <div><span>300</span></div>





                                    </div>
                                </details>



                            </div>

                            <div class="jetski__category__wrap__main__filter__enginePowerItem item2">
                                <h3>Engine power</h3>
                                <details>
                                    <summary>
                                        <span>90</span>
                                        <img src="../assets/img/Detailsimg.png" alt="">
                                    </summary>
                                    <div class="specificationsEngine">
                                        <div><span>90</span></div>
                                        <div><span>130</span></div>
                                        <div><span>154</span></div>
                                        <div><span>230</span></div>
                                        <div><span>300</span></div>
                                    </div>
                                </details>
                            </div>

                            <div class="jetski__category__wrap__main__filter__enginePowerItem item3">
                                <h3>Max speed</h3>
                                <details>
                                    <summary>
                                        <span>90</span>
                                        <img src="../assets/img/Detailsimg.png" alt="">
                                    </summary>
                                    <div class="specificationsEngine">
                                        <div><span>90</span></div>
                                        <div><span>130</span></div>
                                        <div><span>154</span></div>
                                        <div><span>230</span></div>
                                        <div><span>300</span></div>





                                    </div>
                                </details>



                            </div>

                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Brend
                                </summary>
                                <div class="inputContainer fourth">
                                    <div class="fourthContainer">
                                        <div class="inputContainer__inputText fourthText">
                                            <input type="checkbox">
                                            <span>BRP</span>
                                        </div>
                                        <div class="inputContainer__inputText fourthText">
                                            <input type="checkbox">
                                            <span>Spark 2</span>
                                        </div>
                                    </div>

                                    <div class="inputContainer__inputText fourthText">
                                        <input type="checkbox">
                                        <span>Spark 3</span>
                                    </div>
                                    <a href="#">Show more</a>
                                </div>


                            </details>


                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Model
                                </summary>
                                <div class="inputContainer fifth">

                                    <input type="text" class="fifth__input" placeholder="Type model">

                                    <div class="fifthContainer">
                                        <div class="inputContainer__inputText fifthText">
                                            <input type="checkbox">
                                            <span>Sea-doo Spark 2</span>
                                        </div>

                                        <div class="inputContainer__inputText fifthText">
                                            <input type="checkbox">
                                            <span>SeaDoo Spark 90 </span>
                                        </div>
                                    </div>

                                    <div class="fifthContainer">
                                        <div class="inputContainer__inputText fifthText">
                                            <input type="checkbox">
                                            <span>SeaDoo GTI 155</span>
                                        </div>

                                        <div class="inputContainer__inputText fifthText">

                                            <input type="checkbox">
                                            <span>SeaDoo GTR 230</span>
                                        </div>
                                    </div>

                                    <a href="#">Show more</a>
                                </div>


                            </details>

                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Actions
                                </summary>
                                <div class="inputContainer sixth">

                                    <a href="#" class="sixth__btn1">SALE</a>
                                    <a href="#" class="sixth__btn2">NEW</a>
                                    <a href="#" class="sixth__btn3">HIT</a>
                                    <a href="#" class="sixth__btn4">DEALER</a>






                                </div>


                            </details>

                            <details class="jetski__category__wrap__main__filter__details" open>
                                <summary><img class='jetski__category__wrap__main__filter__details__img'
                                        src="../assets/img/Detailsimg.png" alt=""> Countries
                                </summary>
                                <div class="inputContainer fifth">



                                    <div class="fifthContainer">
                                        <div class="inputContainer__inputText fifthText">
                                            <input type="checkbox">
                                            <span>Russia</span>
                                        </div>

                                        <div class="inputContainer__inputText fifthText">
                                            <input type="checkbox">
                                            <span>Germany</span>
                                        </div>
                                    </div>

                                    <div class="fifthContainer">
                                        <div class="inputContainer__inputText fifthText">
                                            <input type="checkbox">
                                            <span>China</span>
                                        </div>

                                        <div class="inputContainer__inputText fifthText">

                                            <input type="checkbox">
                                            <span>USA</span>
                                        </div>
                                    </div>

                                    <a href="#">Show more</a>
                                </div>


                            </details>

                            <div class="jetski__category__wrap__main__filter__ending">
                                <a href="#" class="jetski__category__wrap__main__filter__ending__btn">Choose</a>
                                <div class="jetski__category__wrap__main__filter__ending__options">
                                    <span>Extra options</span>
                                    <img src="../assets/img/Dopparametryvnizstrelka.svg" alt="">
                                </div>
                                <a href="#" class="jetski__category__wrap__main__filter__ending__filterReset">Reset filter</a>
                            </div>



                        </div>

                        <div class="jetski__category__wrap__main__cardbox">
                            <article class="jetski__category__wrap__main__cardbox__card1">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP SeaDoo GTI 130hp SE Black\Mango</h3>
                                <span>10495 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card2">
                                <a href="#" class="jetski__category__wrap__main__cardbox__card2__toplink">SALE</a>
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP SeaDoo GTI 155hp SE Long Blue Metallic</h3>
                                <span>11007 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card3">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3 class="card3__mainText">Jet Ski BRP SeaDoo GTR 230hp X California green</h3>
                                <span>13270 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card4">
                                <a href="#" class="jetski__category__wrap__main__cardbox__card4__toplink">SALE</a>
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3 class="card4__mainText">Jet Ski BRP SeaDoo GTR 230hp STD Black / Gulfstream</h3>
                                <span class="card4__span">Not available</span>
                                <a href="#" class="card4__link">Report Admission</a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card5">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP SeaDoo GTX 300hp LTD Liquid Metal</h3>
                                <span>15430 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card6">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View Item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP SeaDoo Spark 60hp 2 up</h3>
                                <span>13234 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card7">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP SeaDoo Spark GTS 90hp Rental</h3>
                                <span>6666 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card8">
                                <a href="#" class="jetski__category__wrap__main__cardbox__card8__toplink">SALE</a>
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP SeaDoo WAKE 230hp PRO Teal blue</h3>
                                <span>12297 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card9">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski Spark 2-UP 900 Ho Ace Chili Pepper</h3>
                                <span>18700 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card10">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski Spark 2-UP 900 Ho Ace Pineapple</h3>
                                <span>18744 $</span>
                                <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>
                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card11">
                                <a href="#" class="jetski__category__wrap__main__cardbox__card11__toplink">SALE</a>
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski BRP Sea-doo Spark 2-UP 900 Ace Vanilla</h3>
                                <span class="card11__span">Not available</span>
                                <a href="#" class="card11__link">Report Admission</a>

                            </article>
                            <article class="jetski__category__wrap__main__cardbox__card12">
                                <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                                <div class="overlay">
                                    <RouterLink to="/product">View item</RouterLink>
                                </div>
                                <h3>Jet Ski Spark 3-UP 900 HO Ace IBR Blueberry</h3>
                                <span class="card12__span">Not available</span>
                                <a href="#" class="card12__link">Report Admission</a>
                            </article>



                        </div>

                        <div class="jetski__category__wrap__main__buttonShowElseMobile">
                            <a href="#">SHOW MORE</a>
                        </div>
                    </div>

                    <nav class="jetski__category__wrap__numberPanel">

                        <a href="#">1</a>


                        <a href="#">2</a>


                        <a href="#">3</a>


                        <a href="#">4</a>


                        <a href="#">5</a>

                        <a href="#">...</a>

                        <a href="#">11</a>

                    </nav>
                </div>
            </section>

            <section class="additionalProducts">

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
                            <span>4580 $</span>
                            <a href="#" class="article__link"><img src="../assets/img/ItemBoxBasket.png" alt=""></a>

                        </article>
                        <article class="additionalProducts__wrap__itembox__item3">
                            <a href="#" class="additionalProducts__wrap__itembox__item3__toplink">SALE</a>
                            <img class="imgHeart" src="../assets/img/additional_card_3.svg" alt="">
                            <div class="overlay">
                                <a href="#"></a>
                            </div>
                            <h3>RF D.E.S.S.TM Key</h3>
                            <span class="item3__span">Нет в наличии</span>
                            <a href="#" class="item3__link">Report Admission</a>
                        </article>
                        <article class="additionalProducts__wrap__itembox__item4">

                            <img class="imgHeart" src="../assets/img/ItemBoxHeart.svg" alt="">
                            <div class="overlay">
                                <a href="#">View item</a>
                            </div>
                            <h3 class="item4__heading">Мужской костюм 3мм</h3>
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