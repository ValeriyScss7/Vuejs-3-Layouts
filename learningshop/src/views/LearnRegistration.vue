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

    <section class="registration">
        <div class="container">
            <div class="registration__text">
                <h3>REGISTRATION</h3>
            </div>

        </div>


    </section>

    <main>
        <section class="registration__content">
            <div class="left_and_right container">
                <div class="registration__field">
                    <form action="#">
                        <fieldset>
                            <legend>Your Name</legend>
                            <input class="name" type="text" placeholder="First Name">
                            <input class="name" type="text" placeholder="Last Name">
                        </fieldset>

                        <div class="sex">
                            <input type="radio" name="pol"><span>Male</span>
                            <input class="sex__input" type="radio" name="pol"><span>Female</span>
                        </div>

                        <fieldset class="registration__field__bottom_fieldset">
                            <legend>Login details</legend>
                            <input class="name" type="email" placeholder="Email">
                            <input class="name" type="password" placeholder="Password">
                        </fieldset>

                        <p>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and
                            lowercase letters</p>

                        <button class="super_btn">
                            <span>JOIN NOW</span>
                        </button>
                    </form>
                </div>

                <div class="perks">
                    <h3>LOYALTY HAS ITS PERKS</h3>
                    <span class="perks__text">Get in on the loyalty program where you can earn points and unlock serious
                        perks. Starting
                        with these as soon as you join:</span>
                    <ul>
                        <li>15% off welcome offer</li>
                        <li>Free shipping, returns and exchanges on all orders</li>
                        <li>$10 off a purchase on your birthday</li>
                        <li>Early access to products</li>
                        <li>Exclusive offers & rewards</li>
                    </ul>




                </div>

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