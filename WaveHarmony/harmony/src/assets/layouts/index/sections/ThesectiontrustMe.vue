<template>
    <section class="trust">
        <div class="container trust__wrap">
            <div class="blue"></div>
            <div class="pink"></div>
            <div class="blueTwo"></div>

            <div class="trust__wrap__heading">
                <h4>Нам доверяют</h4>
                <router-link :to="'Error404'">
                    Больше о компании
                </router-link>
            </div>

            <div class="trust__wrap__reginaFamous">
                <div class="miniCards">
                    <div class="miniCards__images">
                        <img src="./sectionsImg/firstgirl.png" alt="">
                        <img src="./sectionsImg/secondgirl.png" alt="">
                        <img src="./sectionsImg/thirdgirl.png" alt="">
                        <img src="./sectionsImg/lastgirl.png" alt="">
                    </div>

                    <div class="miniCards__scroll">
                        <div class="scrollslider"></div>
                    </div>

                </div>
                <div class="center">
                    <img src="./sectionsImg/Regina1.png" alt="">
                </div>

                <div class="text">
                    <h5>Регина Тодоренко</h5>
                    <div class="text__subscribes">
                        <span class="inst">@reginatodorenko</span>
                        <span>8,5млн. подписчиков</span>
                    </div>
                    <p>Блогер, телеведущая, певица, звезда передачи «ОрелиРешка», молодая мама и просто
                        суперхаризматичная персона, ловит волну вместе с Wave Harmony</p>
                    <div class="text__links">
                        <a href="#">Читать отзыв</a>
                        <a href="#">Видео Регины</a>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>