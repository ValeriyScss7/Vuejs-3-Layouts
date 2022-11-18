<template>
    <section class="filter">
        <div class="container filter__wrap">
            <nav class="catalogNav">
                <span>Главная</span>
                <span class="grey">/ Каталог</span>
            </nav>

            <div class="filter__wrap__heading">
                <h2>Новая коллекция купальников и лайкр 2021</h2>
            </div>

            <div class="filter__wrap__nav">
                <div class="item item--details">
                    <details open>
                        <summary>От дешевых к дорогим
                            <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                        </summary>
                        <div class="drod-down">
                            <div class="form_radio">
                                <input type="radio" id="radio1">
                                <label for="radio1">От дешевых</label>
                            </div>
                            <div class="form_radio">
                                <input type="radio" id="radio2">
                                <label for="radio2" class="labelTwo">От дорогих</label>
                            </div>
                            <div class="form_radio">
                                <input type="radio" id="radio3">
                                <label for="radio3" class="individualLabel">По ревелантности</label>
                            </div>
                            <div class="form_radio">
                                <input type="radio" id="radio4">
                                <label for="radio4" class="individualToo">По скидке</label>
                            </div>

                            <button>Применить</button>
                        </div>
                    </details>
                </div>
                <div class="item ">
                    <span>Наличие</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Цвет</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Фасон</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Рукава</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Размер</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Стоимость</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Популярные запросы</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span class="view">Вид:</span>
                    <span>2</span>
                    <span>3</span>
                    <span class="active">4</span>
                </div>
            </div>

            <div class="filter__wrap__additionalFilters">
                <div class="item">
                    <button>Сбросить все</button>
                </div>
                <div class="item">
                    <a href="#">5000 - 7490 руб. <img src="../assets/layouts/img/closefilter.svg" alt="image"></a>
                </div>
                <div class="item item--two">
                    <a href="#">XS,S <img src="../assets/layouts/img/closefilter.svg" alt="image"> </a>
                </div>
                <div class="item">
                    <a href="#">Лонгслив, Комбинезон <img src="../assets/layouts/img/closefilter.svg" alt="image"></a>
                </div>
                <div class="item item--five">
                    <a href="#">Цвет:
                        <div class="color color--1"></div>
                        <div class="color color--2"></div>
                        <div class="color color--3"></div>
                        <div class="color color--4"></div>
                        <div class="color color--5"></div>
                        <div class="color color--6"></div>
                        <img src="../assets/layouts/img/closefilter.svg" alt="image">
                    </a>
                </div>
            </div>

            <div class="filterMain">
                <div class="filterMain__left">
                    <details open>
                        <summary>Купальники</summary>
                        <span>Все</span>
                        <span>Для серфинга</span>
                        <span>Слитные</span>
                        <span>Раздельные</span>
                        <span>С рукавами</span>
                        <span>Без рукавов</span>
                        <span>С чашечками</span>
                        <span>С шортиками</span>
                        <span>Для беременных</span>
                        <span>Солнцезащитные</span>
                        <span>Лосины и легинсы</span>
                    </details>

                    <details>
                        <summary>Новая коллекция</summary>
                    </details>
                    <details>
                        <summary>Комбинезоны</summary>
                    </details>
                    <details>
                        <summary>Косметика</summary>
                    </details>
                    <details>
                        <summary class="orange">Распродажа до -40%</summary>
                    </details>
                </div>
                <div class="filterMain__right">

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl1.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>



                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl2.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl3.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl4.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article class="sale">
                        <img class ='girl' src="../assets/layouts/img/filtergirl5.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl6.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl7.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article class="sale">
                        <img class ='girl' src="../assets/layouts/img/filtergirl8.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl9.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl10.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl11.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl12.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 руб.</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">По меркам</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Купить
                            </router-link>
                        </div>
                    </article>
                </div>
            </div>




        </div>
    </section>
</template>

<script>
    
</script>

<style scoped lang="scss">
@import url(../assets/layouts/catalog/catalog.scss);
</style>