<template>
    <section class="filter">
        <div class="container filter__wrap">
            <nav class="catalogNav">
                <span>Home</span>
                <span class="grey">/ Catalog</span>
            </nav>

            <div class="filter__wrap__heading">
                <h2>New collection of swimwear and lycra 2021</h2>
            </div>

            <div class="filter__wrap__nav">
                <div class="item item--details">
                    <details open>
                        <summary>From cheap to expensive
                            <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                        </summary>
                        <div class="drod-down">
                            <div class="form_radio">
                                <input type="radio" id="radio1">
                                <label for="radio1">From cheap</label>
                            </div>
                            <div class="form_radio">
                                <input type="radio" id="radio2">
                                <label for="radio2" class="labelTwo">From expensive</label>
                            </div>
                            <div class="form_radio">
                                <input type="radio" id="radio3">
                                <label for="radio3" class="individualLabel">Relevance</label>
                            </div>
                            <div class="form_radio">
                                <input type="radio" id="radio4">
                                <label for="radio4" class="individualToo">Discount</label>
                            </div>

                            <button>Apply</button>
                        </div>
                    </details>
                </div>
                <div class="item ">
                    <span>Availability</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Color</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Style</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Sleeves</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Size</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Price</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span>Popular queries</span>
                    <img src="../assets/layouts/img/Arrowfilter.svg" alt="image">
                </div>
                <div class="item ">
                    <span class="view">View</span>
                    <span>2</span>
                    <span>3</span>
                    <span class="active">4</span>
                </div>
            </div>

            <div class="filter__wrap__additionalFilters">
                <div class="item">
                    <button>Reset all</button>
                </div>
                <div class="item">
                    <a href="#">5000 - 7490 r. <img src="../assets/layouts/img/closefilter.svg" alt="image"></a>
                </div>
                <div class="item item--two">
                    <a href="#">XS,S <img src="../assets/layouts/img/closefilter.svg" alt="image"> </a>
                </div>
                <div class="item">
                    <a href="#">Longsleeve, Jumpsuit <img src="../assets/layouts/img/closefilter.svg" alt="image"></a>
                </div>
                <div class="item item--five">
                    <a href="#">Color:
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
                        <summary>Swimsuites</summary>
                        <span>All</span>
                        <span>For surfing</span>
                        <span>One-piece</span>
                        <span>separate</span>
                        <span>Sleeves</span>
                        <span>Without sleeves</span>
                        <span>With cups</span>
                        <span>With shorts</span>
                        <span>For pregnant</span>
                        <span>Sunscreen</span>
                        <span>Tights and leggings</span>
                    </details>

                    <details>
                        <summary>New collection</summary>
                    </details>
                    <details>
                        <summary>Overalls</summary>
                    </details>
                    <details>
                        <summary>Cosmetics</summary>
                    </details>
                    <details>
                        <summary class="orange">Sale up 40%</summary>
                    </details>
                </div>
                <div class="filterMain__right">

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl1.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>



                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl2.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl3.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl4.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article class="sale">
                        <img class ='girl' src="../assets/layouts/img/filtergirl5.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl6.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl7.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article class="sale">
                        <img class ='girl' src="../assets/layouts/img/filtergirl8.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl9.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl10.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl11.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
                            </router-link>
                        </div>
                    </article>

                    <article>
                        <img class ='girl' src="../assets/layouts/img/filtergirl12.svg" alt="">
                        <img class="heart" src="../assets/layouts/img/wishlist_button.svg" alt="">
                        <div class="cardBottom">
                            <p>6 000 r</p>
                            <span>Geometry</span>
                            <div class="cardSizes">
                                <span class="size">XS</span>
                                <span class="size">S</span>
                                <span class="size">M</span>
                                <span class="size">L</span>
                                <span class="size">By the standards</span>
                            </div>

                            <router-link :to="'itemCard'">
                                Buy
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