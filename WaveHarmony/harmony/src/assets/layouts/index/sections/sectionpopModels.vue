<template>
    <section class="popModels">
        <div class="container popModels__wrap">
            <h3>Самые популярные модели</h3>
            <div class="popModels__wrap__content">
                <p>то что выбирают наши прекрасные клиентки</p>
                <button><img src="./sectionsImg/Button_headingleft.svg" alt="image"></button>
                <button><img src="./sectionsImg/Button_headingright.svg" alt="image"></button>
                <router-link :to="'catalog'">Смотреть весь каталог</router-link>

            </div>

            <div class="popModels__wrap__itemCards">

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model1.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 руб.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">По меркам</span>
                    </div>
                    
                </article>

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model2.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 руб.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">По меркам</span>
                    </div>
                   
                </article>

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model3.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 руб.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">По меркам</span>
                    </div>
                    
                </article>

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model4.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 руб.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">По меркам</span>
                    </div>
                    
                </article>
            </div>

        </div>


    </section>

</template>

<script>


</script>


