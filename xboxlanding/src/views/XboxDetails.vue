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
        <section class="introDetails">
            <div class="container introDetails__wrap">
                <h1>Call of Duty: WWII</h1>
                <p>Released on: 23/11/2017</p>
                <div class="introDetails__wrap__buttons">
                    <a href="#">Order Now</a>
                    <a href="#">More Games</a>
                </div>
            </div>
        </section>

        <section class="gameDescription">

            <div class="container gameDescription__wrap">

                <div class="gameDescription__wrap__top">
                    <h2>Call of Duty: WWII</h2>

                    <div class="gameDescription__wrap__top__buttons">
                        <a href="#">Order Now</a>
                        <a href="#">Technical Specifications</a>
                    </div>

                    <div class="gameDescription__wrap__top__imgPlay">
                        <img src="../assets/img/PlayImg.svg" alt="">
                    </div>

                    <div class="gameDescription__wrap__top__imgContentRight">
                        <p>Life Advice Looking Through A Window</p>
                        <img src="../assets/img/RightimgDiv.png" alt="image">
                    </div>

                    <div class="gameDescription__wrap__top__imgContentLeft">
                        <p>The Best Answers</p>
                        <img src="../assets/img/LeftimgDiv.png" alt="image">
                    </div>

                </div>

                <div class="gameDescription__wrap__bottom">
                    <h3>Technical Specifications</h3>
                    <div class="gameDescription__wrap__bottom__text">
                        <div class="gameDescription__wrap__bottom__text__content">
                            <p>Computer Hardware Desktops And Notebooks And Handhelds Oh My</p>
                            <p>Microsoft Patch Management For Home Users</p>
                        </div>
                        <div class="gameDescription__wrap__bottom__text__content">
                            <p>For Women Only Your Computer Usage Could Cost You Your Job</p>
                            <p>Going Wireless With Your Headphones</p>
                        </div>
                        <div class="gameDescription__wrap__bottom__text__content">
                            <p>Party Jokes Startling But Unnecessary</p>
                            <p>Get The Boot A Birds Eye Look Into Mcse Boot Camps</p>
                        </div>
                    </div>

                    <div class="gameDescription__wrap__bottom__buttons">
                        <a href="#">XBOX Consoles</a>
                        <a href="#">Start streaming on mixer</a>

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