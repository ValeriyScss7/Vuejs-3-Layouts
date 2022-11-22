<template>
    <header>
        <div class="container header__wrap">
            <div class="header__wrap__left">
                <router-link :to="'/'">
                    <img src="../assets/img/Logo.png" alt="" class="logo">
                </router-link>
            </div>

            <div class="header__wrap__right">
                <div class="header__wrap__right__item">
                    <span>Games</span>
                    <img src="../assets/img/Arrowheader.svg" alt="imageHeader">
                </div>

                <div class="header__wrap__right__item">
                    <span>Consoles</span>
                    <img src="../assets/img/Arrowheader.svg" alt="imageHeader">
                </div>

                <div class="header__wrap__right__item">
                    <span>Community</span>
                    <input type="text" placeholder="Search">
                </div>

                <div class="header__wrap__right__item">
                    <img src="../assets/img/Person.svg" class="header__wrap__right__item__personImg" alt="imageHeader">
                    <span>My XBOX</span>
                    <img src="../assets/img/Arrowheader.svg" alt="">
                </div>
            </div>


        </div>

    </header>


    <main>
        <section class="intro">

            <div class="container intro__wrap">

                <div class="intro__wrap__text">
                    <h1>Star Wars</h1>
                    <span>Battlefront II</span>
                </div>

                <div class="intro__wrap__buttons">
                    <router-link :to="'/details'">
                        Watch trailer
                    </router-link>
                    <router-link :to="'/details'">
                        Explore Games
                    </router-link>

                </div>

                <div class="intro__wrap__Absolutebuttons">
                    <a href="#">
                        <img src="../assets/img/Carouselleft.svg" alt="">
                    </a>

                    <a href="#">
                        <img src="../assets/img/Carouselright.svg" alt="">
                    </a>

                </div>
                <div class="intro__wrap__circles">
                    <div class="circle green"></div>
                    <div class="circle green"></div>
                    <div class="circle green"></div>
                </div>
            </div>
        </section>

        <section class="xboxCards">
            <div class="container xboxCards__wrap">
                <div class="xboxCards__wrap__heading">
                    <img src="../assets/img/xboxicon.svg" class="logo" alt="">

                    <div class="xboxCards__wrap__heading__text">
                        <p>The best value</p>
                        <p>in games and entertainment</p>
                    </div>

                </div>

                <div class="xboxCards__wrap__cardbox">

                    <article class="xboxCards__wrap__cardbox__card">

                        <div class="xboxCards__wrap__cardbox__card__top">
                            <img src="../assets/img/xboxcard1.png" alt="">
                        </div>


                        <div class="xboxCards__wrap__cardbox__card__bottom">
                            <span>XBOX ONE X</span>
                            <p>Faster Processing
                                Smoother Gameplay</p>
                            <a href="#">Explore Consoles & Accessories</a>
                        </div>

                    </article>

                    <article class="xboxCards__wrap__cardbox__card card_two">

                        <div class="xboxCards__wrap__cardbox__card__top">

                        </div>


                        <div class="xboxCards__wrap__cardbox__card__bottom">
                            <span>mixer Streaming</span>
                            <p>The Next Generation
                                Of Life Game Streaming</p>
                            <a href="#">Start Watching mixer</a>
                        </div>

                    </article>

                    <article class="xboxCards__wrap__cardbox__card card_three">

                        <div class="xboxCards__wrap__cardbox__card__top">

                        </div>


                        <div class="xboxCards__wrap__cardbox__card__bottom">
                            <span>Free Games Every Month</span>
                            <p>Get up to $700 in
                                free games</p>
                            <a href="#">Get Free Games</a>
                        </div>

                    </article>


                </div>
            </div>

        </section>

        <section class="xboxGamesCards">

            <div class="containerxboxGames xboxGamesCards__wrap">
                <div class="xboxGamesCards__wrap__heading">
                    <h1>Exclusive games on XBOX</h1>
                    <img src="../assets/img/CardboxgamesArrow.svg" alt="">
                </div>

                <div class="xboxGamesCards__wrap__cardbox">

                    <article class="xboxGamesCards__wrap__cardbox__card card_1">

                        <div class="xboxGamesCards__wrap__cardbox__card__top">
                            <img src="../assets/img/1cardgames.png" alt="">
                        </div>


                        <div class="xboxGamesCards__wrap__cardbox__card__bottom">
                            <span>Call of Duty: WWII</span>
                            <p>The C.O.D.E. Bravery Pack
                                is now available in WWII</p>
                            <router-link :to="'/details'">
                                See Details
                            </router-link>

                        </div>

                    </article>

                    <article class="xboxCards__wrap__cardbox__card card_2">

                        <div class="xboxCards__wrap__cardbox__card__top">
                            <img src="../assets/img/2cardgames.png" alt="">
                        </div>


                        <div class="xboxCards__wrap__cardbox__card__bottom">
                            <span>Destiny 2</span>

                            <router-link :to="'/details'">
                                See Details
                            </router-link>
                        </div>

                    </article>

                    <article class="xboxCards__wrap__cardbox__card card_3">

                        <div class="xboxCards__wrap__cardbox__card__top">
                            <img src="../assets/img/3cardgames.png" alt="">
                        </div>


                        <div class="xboxCards__wrap__cardbox__card__bottom">
                            <span>STEEP</span>

                            <router-link :to="'/details'">
                                See Details
                            </router-link>
                        </div>

                    </article>



                </div>

                <div class="xboxGamesCards__wrap__button">
                    <div class="container">
                        <a href="#">XBOX Store</a>
                    </div>

                </div>
            </div>


        </section>

        <section class="designLab">
            <div class="designLabBackground">
                <div class="container designLab__wrap">
                    <h2>Xbox Design Lab</h2>
                    <p>Make yours one in a billion with new colors, metallic finishes and rubberized grips.</p>
                    <div class="designLab__wrap__buttons">
                        <button>Design Yours</button>
                        <button>Explore Consoles & Accessories</button>
                    </div>
                </div>

            </div>
        </section>
    </main>



    <footer>
        <div class="container footer__wrap">
            <div class="footer__wrap__top">
                <div class="footer__wrap__top__category">
                    <h3>XBOX</h3>
                    <div class="footer__wrap__top__category__text">
                        <span>Support</span>
                    </div>
                    <div class="footer__wrap__top__category__text">
                        <span>Contact us</span>
                    </div>
                    <div class="footer__wrap__top__category__text">
                        <span>Privacy & cookies</span>
                    </div>
                    <div class="footer__wrap__top__category__text">
                        <span>Terms of use </span>
                    </div>
                </div>
                <div class="footer__wrap__top__category">
                    <h3>Developers</h3>
                    <div class="footer__wrap__top__category__text">
                        <span>Games</span>
                    </div>
                    <div class="footer__wrap__top__category__text">
                        <span>Windows 10</span>
                    </div>
                    <div class="footer__wrap__top__category__text">
                        <span>Creators Program</span>
                    </div>
                    <div class="footer__wrap__top__category__text">
                        <span>Designed for XBOX</span>
                    </div>
                </div>
                <div class="footer__wrap__top__category">
                    <h3>Follow Us</h3>
                    <div class="footer__wrap__top__category__images">
                        <img src="../assets/img/Faacebook.svg" alt="">
                        <img src="../assets/img/Twitter.svg" alt="">
                        <img src="../assets/img/Instagram.svg" alt="">
                    </div>

                </div>
            </div>

            <div class="footer__wrap__bottom">
                <div class="footer__wrap__bottom__line"></div>
                <div class="footer__wrap__bottom__text">
                    <span>English (United States)</span>
                    <span> © Microsoft 2017</span>
                </div>
            </div>

        </div>
    </footer>
</template>

