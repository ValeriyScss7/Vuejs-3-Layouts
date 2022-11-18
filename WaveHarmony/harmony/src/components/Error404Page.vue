<template>
    <section class="error">
        <div class="container">

            <nav class="error__404BreadCrumbs">
                <span>Главная</span>
                <span class="grey">/404</span>
            </nav>

            <div class="error__content">
                <img src="../assets/layouts/img/404graphic.png" alt="image404">
                <div class="error__content__text">
                    <h1>Упс...</h1>
                    <p>мы опросили каждого серфера на побережье,<br>но никто из них не знает куда уплыла эта страница
                    </p>
                    <router-link :to="'catalog'">
                        Перейти в каталог
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