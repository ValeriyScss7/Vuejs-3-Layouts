<template>
    <section class="filter">
        <div class="container filter__wrap">
            <h6>Discover</h6>

            <nav class="filter__wrap__nav">
                <details>
                    <summary>Recently added
                        <img src="./sectionsimg/ArrowDetailsSallers.svg" alt="imagearrow">
                    </summary>

                    <p class="detailsText">123</p>
                    <p class="detailsText">123</p>
                    <p class="detailsText">123</p>

                </details>

                <div class="filter__wrap__nav__links">
                    <a href="#">All items</a>
                    <a href="#">Art</a>
                    <a href="#">Game</a>
                    <a href="#">Photography</a>
                    <a href="#">Music</a>
                    <a href="#">Video</a>
                </div>

                <button>Filter <img src="./sectionsimg/CloseFilter.svg" alt="imageClose"></button>
            </nav>

            <div class="filter__wrap__categories">
                <div class="category">
                    <p>price</p>
                    <details>
                        <summary>Highest price
                            <img src="./sectionsimg/ArrowDetailsSallers.svg" alt="imagearrow">
                        </summary>
                        <p class="detailsText">123</p>
                        <p class="detailsText">123</p>
                        <p class="detailsText">123</p>
                    </details>
                </div>
                <div class="category">
                    <p>likes</p>
                    <details>
                        <summary>Most liked
                            <img src="./sectionsimg/ArrowDetailsSallers.svg" alt="imagearrow">
                        </summary>

                        <p class="detailsText">123</p>
                        <p class="detailsText">123</p>
                        <p class="detailsText">123</p>
                    </details>
                </div>
                <div class="category">
                    <p>Creator</p>
                    <details>
                        <summary>Verified only
                            <img src="./sectionsimg/ArrowDetailsSallers.svg" alt="imagearrow">
                        </summary>

                        <p class="detailsText">123</p>
                        <p class="detailsText">123</p>
                        <p class="detailsText">123</p>
                    </details>
                </div>
                <div class="category">
                    <p>Price range</p>
                    <div class="category__input">
                        <input type="range" max="10" min="0.01" step="0.01" id="inputRange"
                            oninput="this.nextElementSibling.value = this.value">
                        <output>0.01</output>

                        <div class="labels">
                            <label class="right" for="inputRange">0.01 ETH</label>

                            <label class="left" for="inputRange">10 ETH</label>
                        </div>

                    </div>

                </div>
            </div>

            <div class="filter__wrap__cardbox">
                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid4.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid1.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid2.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid3.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/gotbid5.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid6.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid7.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>

                <article class="filter__wrap__cardbox__card">
                    <img src="./sectionsimg/hotbid8.png" alt="imageFilter">

                    <div class="crypt">
                        <p>Amazing digital art</p>
                        <p class="greenText">2.45 ETH</p>
                    </div>

                    <div class="avatars">
                        <img src="./sectionsimg/avatars.png" alt="imageavatars">
                        <p class="stock">3 in stock</p>
                    </div>

                    <div class="bid">
                        <div class="bid__left">
                            <span class="slide">Highest bid</span>
                            <p class="bidValue">0.001 ETH</p>
                        </div>

                        <span>New bid 🔥</span>
                    </div>
                </article>
            </div>

            <div class="btn">
                <a href="#">Load more
                    <img src="./sectionsimg/loading.svg" alt="imageLoading">
                </a>
            </div>

        </div>
    </section>
</template>