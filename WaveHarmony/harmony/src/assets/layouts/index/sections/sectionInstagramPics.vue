<template>
    <section class="instagram">
        <div class="container instagram__wrap">
            <h6>Нравятся яркие купальники и вдохновляющие пейзажи?</h6>
            <div class="instagram__wrap__text">
                <span>Подписывайтесь на наш инстаграм, там все и даже больше</span>
                <router-link :to="'Error404'">
                    Подписаться на инстаграм
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