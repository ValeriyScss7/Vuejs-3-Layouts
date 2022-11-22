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

        <section class="filter">
            <div class="container filter__wrap">
                <div class="filter_main">

                    <details class="filter__details">
                        <summary class="filter__details__main__text"><span>FILTER</span><svg class="filter_img"
                                width="15" height="10" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
                            </svg>

                        </summary>
                        <div class="filter_content">
                            <details class="filter__details">
                                <summary class="filter__details__text">CATEGORY</summary>
                                <ul>
                                    <li class="filter__details__list"> <a href="#">Accessories</a></li>
                                    <li class="filter__details__list"> <a href="#">Bags</a></li>
                                    <li class="filter__details__list"> <a href="#">Denim</a></li>
                                    <li class="filter__details__list"> <a href="#">Hoodies & Sweatshirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Jackets & Coats</a></li>
                                    <li class="filter__details__list"> <a href="#">Polos</a></li>
                                    <li class="filter__details__list"> <a href="#">Shirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Shoes</a></li>
                                    <li class="filter__details__list"> <a href="#">Sweaters & Knits</a></li>
                                    <li class="filter__details__list"> <a href="#">T-Shirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Tanks</a></li>
                                </ul>
                            </details>

                            <details class="filter__details">
                                <summary class="filter__details__text">BRAND</summary>
                                <ul>
                                    <li class="filter__details__list"> <a href="#">Accessories</a></li>
                                    <li class="filter__details__list"> <a href="#">Bags</a></li>
                                    <li class="filter__details__list"> <a href="#">Denim</a></li>
                                    <li class="filter__details__list"> <a href="#">Hoodies & Sweatshirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Jackets & Coats</a></li>
                                    <li class="filter__details__list"> <a href="#">Polos</a></li>
                                    <li class="filter__details__list"> <a href="#">Shirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Shoes</a></li>
                                    <li class="filter__details__list"> <a href="#">Sweaters & Knits</a></li>
                                    <li class="filter__details__list"> <a href="#">T-Shirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Tanks</a></li>
                                </ul>
                            </details>

                            <details class="filter__details">
                                <summary class="filter__details__text">DESIGNER</summary>
                                <ul class="filter__list">
                                    <li class="filter__details__list"> <a href="#">Accessories</a></li>
                                    <li class="filter__details__list"> <a href="#">Bags</a></li>
                                    <li class="filter__details__list"> <a href="#">Denim</a></li>
                                    <li class="filter__details__list"> <a href="#">Hoodies & Sweatshirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Jackets & Coats</a></li>
                                    <li class="filter__details__list"> <a href="#">Polos</a></li>
                                    <li class="filter__details__list"> <a href="#">Shirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Shoes</a></li>
                                    <li class="filter__details__list"> <a href="#">Sweaters & Knits</a></li>
                                    <li class="filter__details__list"> <a href="#">T-Shirts</a></li>
                                    <li class="filter__details__list"> <a href="#">Tanks</a></li>
                                </ul>
                            </details>
                        </div>
                    </details>
                </div>

                <div class="filter_options">
                    <div class="filter_item">
                        <details class="filter_item_details">
                            <summary class="filter_item_text">
                                TRENDING NOW <img class="filter_pics" src="../assets/img/Vector.svg" alt="">
                            </summary>

                        </details>

                    </div>
                    <div class="filter_item">
                        <details class="filter_item_details">
                            <summary class="filter_item_text">
                                SIZE <img class="filter_pics" src="../assets/img/Vector.svg" alt="">
                            </summary>
                            <div class="filter_item_input">
                                <input type="checkbox"><span class="filter_item_input_text">XS</span><br>
                                <input type="checkbox"><span class="filter_item_input_text">S</span><br>
                                <input type="checkbox"><span class="filter_item_input_text">M</span><br>
                                <input type="checkbox"><span class="filter_item_input_text">L</span><br>
                            </div>

                        </details>
                    </div>
                    <div class="filter_item">
                        <span class="filter_item_text">PRICE</span>
                        <img class="filter_pics" src="../assets/img/Vector.svg" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="card_box_2">
            <div class="container card_box_2__wrap">
                <article class="card_box_card">
                    <img src="../assets/img/catpics1.png" alt="">
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
                    <img src="../assets/img/catpics2.png" alt="">
                    <div class="overlay">
                        <button class="overlay_btn">
                            <img class="overlay_btn_img" src="../assets/img/basket.svg" alt="">
                            <span class="overlay_span">Add to Cart</span>
                        </button>
                    </div>
                    <div class="card_box_2_text">
                        <a href="product.html">
                            <h3 class="catalog_text_top">ELLERY X M'O CAPSULE</h3>
                        </a>
                        <p class="catalog_text_middle">Known for her sculptural takes on traditional tailoring,
                            Australian
                            arbiter of cool Kym Ellery teams
                            up with Moda Operandi.</p>
                        <p class="catalog_text_bottom">$52.00</p>
                    </div>
                </article>
                <article class="card_box_card card_invisible">
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
                    <img src="../assets/img/catpics5.png" alt="">
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
                    <img src="../assets/img/catpics6.png" alt="">
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
                    <img src="../assets/img/catpics7.png" alt="">
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
                    <img src="../assets/img/catpics8.png" alt="">
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
                    <img src="../assets/img/catpics9.png" alt="">
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

    <footer class="footer__catalog">

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