<template>
    <header>
        <div class="container header__wrap">
            <div class="header_left">
                <RouterLink to="/" class="logo">
                    <img src="../assets/img/redround.png" alt="pics">
                </RouterLink>
                 
                <a href="#">
                    <img src="../assets/img/loop.svg" alt="pics">
                </a>
            </div>
            <div class="header_right">
                <label class="burger__label" for="toggle">
                    <img class="burger__img" src="../assets/img/lines.svg" alt="">
                </label>
                <input type="checkbox" class="toggle" id="toggle">

                <nav class="menu">
                    <div class="menu__wrap">
                        <label class="nav_close" for="toggle">
                            <img src="../assets/img/close2.svg" alt="">
                        </label>
                        <h2>Menu</h2>
                        <h3 class="MAN">MAN</h3>
                        <ul>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">T-Shirts</a></li>
                        </ul>
                        <h3 class="WOMAN">WOMAN</h3>
                        <ul>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Jackets & Coats</a></li>
                            <li><a href="#">Polos</a></li>
                            <li><a href="#"> T-Shirts</a></li>
                            <li><a href="#">Shirts</a></li>
                        </ul>
                        <h3 class="KIDS">KIDS</h3>
                        <ul>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Jackets & Coats</a></li>
                            <li><a href="#">Polos</a></li>
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Bags</a></li>
                        </ul>
                    </div>

                </nav>




                <div class="item">
                    <RouterLink to="/registration">
                        <img src="../assets/img/person.svg" alt="">
                    </RouterLink>
                    
                </div>
                <div class="item item_basket">
                    <span class="basket_count">5</span>
                    <RouterLink to="/cart">
                        <img src="../assets/img/corsina(1).svg" alt="">
                    </RouterLink>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="newarrivals">
            <div class="container newarrivals__wrap">
                <div class="newarrivals_left">
                    <h3 class="newarrivals_text_left">NEW ARRIVALS</h3>
                </div>
                <div class="newarrivals_right">
                    <a class="newarrivals_link" href="">
                        <span>HOME /</span>
                    </a>

                    <a class="newarrivals_link" href="">
                        <span>MEN /</span>
                    </a>
                    <a class="newarrivals_link" href="">
                        <span class="newarrivals_link_text">NEW ARRIVALS</span>
                    </a>

                </div>

            </div>

        </section>

        <section class="slider">
            <img class="slider_pics" src="../assets/img/Slyder_phone.png" alt="">

                    <button class="slider-btn slider-btn-left"> > </button>

                    <button class="slider-btn slider-btn-right"> > </button>
        </section>

        <section class="about">
            <div class="container about__wrap">
                <div class="about_top">
                    <span>Women collection</span>
                    <div class="border"></div>
                    <h3>MOSCHINO CHEAP AND CHIC</h3>
                    <p>Compellingly actualize fully researched processes before proactive outsourcing. Progressively
                        syndicate collaborative architectures before cutting-edge services. Completely visualize
                        parallel core competencies rather than exceptional portals. </p>
                    <strong>$561</strong>
                </div>

                <div class="about_bottom">
                    <hr>
                    <div class="about_bottom_menu">
                        <span>CHOOSE COLOR <img src="../assets/img/Vector.svg" alt=""></span>
                        <span>CHOOSE SIZE <img src="../assets/img/Vector.svg" alt=""></span>
                        <span>QUANTITY <img src="../assets/img/Vector.svg" alt=""></span>
                    </div>
                    <div class="about_bottom_button">
                        <a class="about_bottom_btn" href=""> <img src="../assets/img/Basket_bottom.svg" alt="">Add to Cart</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="card_box_2">
            <div class="container card_box_2__wrap">
                <article class="card_box_card">
                    <img src="../assets/img/catpics4.png" alt="">
                    <div class="overlay">
                        <button class="overlay_btn">
                            <img class="overlay_btn_img" src="../assets/img/basket.svg" alt="">
                            <span class="overlay_span">Add to Cart</span>
                        </button>
                    </div>
                    <div class="card_box_2_text">
                        <RouterLink to="/product">
                            <h3 class="catalog_text_top">ELLERY X M'O CAPSULE</h3>
                        </RouterLink>
                        <p class="catalog_text_middle">Known for her sculptural takes on traditional tailoring,
                            Australian
                            arbiter of cool Kym Ellery teams
                            up with Moda Operandi.</p>
                        <p class="catalog_text_bottom">$52.00</p>
                    </div>
                </article>

                <article class="card_box_card">
                    <img src="../assets/img/catpics3.png" alt="">
                    <div class="overlay">
                        <button class="overlay_btn">
                            <img class="overlay_btn_img" src="../assets/img/basket.svg" alt="">
                            <span class="overlay_span">Add to Cart</span>
                        </button>
                    </div>
                    <div class="card_box_2_text">
                        <RouterLink to="/product">
                            <h3 class="catalog_text_top">ELLERY X M'O CAPSULE</h3>
                        </RouterLink>
                        <p class="catalog_text_middle">Known for her sculptural takes on traditional tailoring,
                            Australian
                            arbiter of cool Kym Ellery teams
                            up with Moda Operandi.</p>
                        <p class="catalog_text_bottom">$52.00</p>
                    </div>
                </article>

                <article class="card_box_card">
                    <img src="../assets/img/catalog6.png" alt="">
                    <div class="overlay">
                        <button class="overlay_btn">
                            <img class="overlay_btn_img" src="../assets/img/basket.svg" alt="">
                            <span class="overlay_span">Add to Cart</span>
                        </button>
                    </div>
                    <div class="card_box_2_text">
                        <RouterLink to="/product">
                            <h3 class="catalog_text_top">ELLERY X M'O CAPSULE</h3>
                        </RouterLink>
                        <p class="catalog_text_middle">Known for her sculptural takes on traditional tailoring,
                            Australian
                            arbiter of cool Kym Ellery teams
                            up with Moda Operandi.</p>
                        <p class="catalog_text_bottom">$52.00</p>
                    </div>
                </article>
            </div>

        </section>
    </main>

    <footer>

        <div class="footer_top">
            <div class="container footer__wrap">
                <div class="footer_left_top">
                    <div class="footer_img">
                        <img src="../assets/img/FACE.png" alt="">
                    </div>
                    <div class="footer_top_text">
                        <h3 class="footer_top_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                            pulvinar
                            <i>purus condimentum</i>“
                        </h3>
                    </div>

                </div>
                <div class="footer_right_top">
                    <div class="footer_right_text">
                        <h3><span class="subscribe">SUBSCRIBE </span><br>FOR OUR NEWLETTER AND PROMOTION</h3>
                    </div>
                    <div class="btn">
                        <form action="#" class="subscribe_mail">
                            <input placeholder="Enter Your Email" type="text" class="mail_field">
                            <input type="submit" value="subscribe" class="subscribe_btn">
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer_bottom">
            <div class="container footer_bottom__wrap">
                <div class="footer_bottom_left">
                    <h3 class="footer_text">© 2021 Brand All Rights Reserved.</h3>
                </div>
                <div class="footer_bottom_right">
                    <div class="footer_icon">
                        <a href="#" class="footer_bottom_link">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div class="footer_icon">
                        <a href="#" class="footer_bottom_link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div class="footer_icon">
                        <a href="#" class="footer_bottom_link">
                            <i class="fab fa-pinterest-p"></i>
                        </a>
                    </div>
                    <div class="footer_icon">
                        <a href="#" class="footer_bottom_link">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>