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
        <section class="intro">
            <div class="container intro__wrap">
                <div class="intro_text">
                    <h1><span class="brand">THE BRAND</span> <span class="luxerious">OF LUXERIOUS</span> <span
                            class="fashion">FASHION</span></h1>
                </div>
            </div>
        </section>

        <section class="card_box">
            <div class="container card_box__wrap">
                <div class="card card_1">
                    <p class="card_text card_text_1">30% OFF</p>
                    <a href="#">
                        <h2 class="card_content">FOR WOMEN</h2>
                    </a>
                </div>

                <div class="card card_2">
                    <p class="card_text card_text_2">HOT DEAL</p>
                    <a href="#">
                        <h2 class="card_content">FOR MEN</h2>
                    </a>
                </div>

                <div class="card card_3">
                    <p class="card_text card_text_3">NEW ARRIVALS</p>
                    <a href="#">
                        <h2 class="card_content">FOR KIDS</h2>
                    </a>
                </div>

                <div class="card card_4">
                    <p class="card_text card_text_4">LUXIROUS & TRENDY</p>
                    <a href="#">
                        <h2 class="card_content">ACCESORIES</h2>
                    </a>
                </div>
            </div>

        </section>



        <section class="card_box_2">
            <div class="Fetured_Items">
                <div class="container">
                    <h2 class="Fetured_Items_main_text">Fetured Items</h2>
                    <p class="Fetured_Items_text">Shop for items based on what we featured in this week</p>
                </div>
            </div>
            <div class="container card_box_2__wrap">
                <article class="card_box_card">
                    <img src="../assets/img/catalog1.png" alt="">
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
                    <img src="../assets/img/catalog2.png" alt="">
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
                    <img src="../assets/img/catalog3.png" alt="">
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
                    <img src="../assets/img/catalog4.png" alt="">
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
                    <img src="../assets/img/catalog5.png" alt="">
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

        <div class="button">
            <div class="container button__wrap">
                <RouterLink to="/catalog" class="btn_top">Browse All Product</RouterLink>
            </div>
        </div>

        <section class="advantages">
            <div class="container advantages__wrap">
                <div class="item_bottom">
                    <div class="item_bottom_pics">
                        <img src="../assets/img/Forma1.svg" alt="pics">
                    </div>
                    <div class="item_bottom_text">
                        <h3 class="item_bottom_top_text">Free Delivery</h3>
                        <p class="item_bottom_bottom_text">Worldwide delivery on all. Authorit tively morph
                            next-generation
                            innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="item_bottom item_bottom_2">
                    <div class="item_bottom_pics">
                        <img src="../assets/img/Forma2.svg" alt="pics">
                    </div>
                    <div class="item_bottom_text">
                        <h3 class="item_bottom_top_text">Sales & discounts</h3>
                        <p class="item_bottom_bottom_text">Worldwide delivery on all. Authorit tively morph
                            next-generation
                            innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="item_bottom item_bottom_3">
                    <div class="item_bottom_pics">
                        <img src="../assets/img/Forma3.svg" alt="pics">
                    </div>
                    <div class="item_bottom_text">
                        <h3 class="item_bottom_top_text">Quality assurance</h3>
                        <p class="item_bottom_bottom_text">Worldwide delivery on all. Authorit tively morph
                            next-generation
                            innov tion with extensive
                            models.</p>
                    </div>
                </div>






            </div>
        </section>

    </main>

    <footer class="footer__index">

        <div class="footer_top">
            <div class="container footer__wrap">
                <div class="footer_left_top">
                    <div class="footer_img">
                        <img src="../assets/img/FACE.png" alt="">
                    </div>
                    <div class="footer_top_text">
                        <h3 class="footer_top_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
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
                            <input placeholder="Enter Your Email" type="email" class="mail_field">
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