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

    <section class="shopping_cart">
        <div class="container">
            <div class="shop">
                <h3>SHOPPING CART</h3>
            </div>

        </div>


    </section>

    <section class="main">

        <div class="left_and_right container">

            <div class="product">
                <div class="container">
                    <article class="product_card">
                        <div class="product_card__left">
                            <img src="../assets/img/catalog3.png" alt="">
                        </div>

                        <div class="product_card__right">

                            <h3>MANGO PEOPLE<br> T-SHIRT</h3>

                            <ul>
                                <li>Price: <span class="price">$300</span></li>
                                <li>Color: Red</li>
                                <li>Size: Xl</li>
                                <li>Quantity: <input type="number" value=2></li>
                            </ul>

                            <button>
                                <img src="../assets/img/Close.svg" alt="">
                            </button>

                        </div>

                    </article>

                    <article class="product_card product_card_2">

                        <div class="product_card__left">
                            <img src="../assets/img/catpics2.png" alt="">
                        </div>

                        <div class="product_card__right">

                            <h3>MANGO PEOPLE<br> T-SHIRT</h3>

                            <ul>
                                <li>Price: <span class="price">$300</span></li>
                                <li>Color: Red</li>
                                <li>Size: Xl</li>
                                <li>Quantity: <input type="number" value=2></li>
                            </ul>

                            <button>
                                <img src="../assets/img/Close.svg" alt="">
                            </button>

                        </div>

                    </article>
                    <div class="buttons">

                        <div class="btn_left">
                            <a href="#">CLEAR SHOPPING CART</a>
                        </div>

                        <div class="btn_right">
                            <a href="">CONTINUE SHOPPING</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="registration_payment">
                <div class="container">
                    <div class="right__part">
                        <form action="#">
                            <fieldset>
                                <legend>SHIPPING ADDRESS</legend>
                                <input class="bangladesh" type="text" placeholder="Bangladesh">
                                <input type="text" placeholder="State">
                                <input type="text" placeholder="Postcode / Zip">
                                <button>GET A QUOTE</button>
                            </fieldset>
                        </form>

                        <div class="totalprice">
                            <span>SUB TOTAL &nbsp;&nbsp;&nbsp;&nbsp; 900$</span>
                            <p>GRAND TOTAL &nbsp;&nbsp;&nbsp;&nbsp; <strong class="price">$900</strong> </p>
                            <div class="line"></div>
                            <button>PROCEED TO CHECKOUT</button>


                        </div>
                    </div>





                </div>


            </div>
        </div>





    </section>

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