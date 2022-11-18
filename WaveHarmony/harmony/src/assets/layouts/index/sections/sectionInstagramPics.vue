<template>
    <section class="instagram">
        <div class="container instagram__wrap">
            <h6>Do you like bright swimwear and inspiring landscapes?</h6>
            <div class="instagram__wrap__text">
                <span>Follow us on Instagram for everything and more</span>
                <router-link :to="'Error404'">
                    Follow us on Instagram
                </router-link>
            </div>

            <div class="instagramPics">

                <div class="instagramPics__left">
                    <img src="./sectionsImg/bigsize_left.png" alt="">
                    <div class="miniCards">
                        <img src="./sectionsImg/left1.png" alt="">
                        <img src="./sectionsImg/left2.png" alt="">
                        <img src="./sectionsImg/left3.png" alt="">
                        <img src="./sectionsImg/left4.png" alt="">
                        <img src="./sectionsImg/left5.png" alt="">
                        <img src="./sectionsImg/left6.png" alt="">
                    
                    </div>
                </div>

                <div class="instagramPics__right">
                    <div class="miniCards">
                        <img src="./sectionsImg/right1.png" alt="">
                        <img src="./sectionsImg/right2.png" alt="">
                        <img src="./sectionsImg/right3.png" alt="">
                        <img src="./sectionsImg/right4.png" alt="">
                        <img src="./sectionsImg/right5.png" alt="">
                        <img src="./sectionsImg/right6.png" alt="">
                    </div>
                    <img  class='mainImgRight' src="./sectionsImg/bigsize_right.png" alt="">
                </div>

            </div>


            
        </div>
    </section>

</template>