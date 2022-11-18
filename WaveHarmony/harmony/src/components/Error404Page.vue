<template>
    <section class="error">
        <div class="container">

            <nav class="error__404BreadCrumbs">
                <span>Home</span>
                <span class="grey">/404</span>
            </nav>

            <div class="error__content">
                <img src="../assets/layouts/img/404graphic.png" alt="image404">
                <div class="error__content__text">
                    <h1>Oops...</h1>
                    <p>we've interviewed every surfer on the coast,<br>but none of them know where this page went
                    </p>
                    <router-link :to="'catalog'">
                        Go to catalog
                    </router-link>
                </div>
            </div>
        </div>
    </section>



</template>

<script>

</script>


<style>
@import url(../assets/layouts/404/404style.scss)
</style>