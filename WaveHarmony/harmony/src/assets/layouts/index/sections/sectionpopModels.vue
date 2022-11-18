<template>
    <section class="popModels">
        <div class="container popModels__wrap">
            <h3>Most Popular Models</h3>
            <div class="popModels__wrap__content">
                <p>what our beautiful clients choose</p>
                <button><img src="./sectionsImg/Button_headingleft.svg" alt="image"></button>
                <button><img src="./sectionsImg/Button_headingright.svg" alt="image"></button>
                <router-link :to="'catalog'">View catalog</router-link>

            </div>

            <div class="popModels__wrap__itemCards">

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model1.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 r.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">By the standards</span>
                    </div>
                    
                </article>

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model2.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 r.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">By the standards</span>
                    </div>
                   
                </article>

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model3.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 r.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">By the standards</span>
                    </div>
                    
                </article>

                <article>
                    <router-link :to="'itemCard'">
                        <img src="./sectionsImg/model4.svg" alt="">
                    </router-link>
                    <img class="heart" src="./sectionsImg/wishlist_button.svg" alt="">
                    <p>6 000 r.</p>
                    <span>Geometry</span>
                    <div class="cardSizes">
                        <span class="size">XS</span>
                        <span class="size">S</span>
                        <span class="size">M</span>
                        <span class="size">L</span>
                        <span class="size">By the standards</span>
                    </div>
                    
                </article>
            </div>

        </div>


    </section>

</template>

<script>


</script>


