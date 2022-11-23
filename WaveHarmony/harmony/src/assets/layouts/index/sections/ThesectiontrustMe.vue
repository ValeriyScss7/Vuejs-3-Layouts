<template>
    <section class="trust">
        <div class="container trust__wrap">
            <div class="blue"></div>
            <div class="pink"></div>
            <div class="blueTwo"></div>

            <div class="trust__wrap__heading">
                <h4>We are trusted</h4>
                <router-link :to="'Error404'">
                    More about the company
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
                    <img src="./sectionsImg/Regina1.svg" alt="imageFamous">
                </div>

                <div class="text">
                    <h5>Regina Todorenko</h5>
                    <div class="text__subscribes">
                        <span class="inst">@reginatodorenko</span>
                        <span>8,5mln. subscribers</span>
                    </div>
                    <p>Blogger, TV presenter, singer, star of the program "OreliReshka", a young mother and just
                         super charismatic person, catches the wave with Wave Harmony</p>
                    <div class="text__links">
                        <a href="#">Read review</a>
                        <a href="#">Video of Regina</a>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>