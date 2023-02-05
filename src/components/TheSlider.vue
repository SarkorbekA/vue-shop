<template>
    <div class="container">
        <swiper :slidesPerView="2" :spaceBetween="20" :pagination="{
            clickable: true,
        }" :autoplay="{
    delay: 4000,
    disableOnInteraction: false,
}" :loop="true" :navigation="true" :modules="modules" class="mySwiper">

            <swiper-slide>
                <div class="box box__yellow">
                    <p>Хозяйственные товары</p>
                    <a href="#" class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="box box__white">
                    <p>Мотивационные декоры</p>
                    <a href="#" class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="box box__yellow">
                    <p>Хозяйственные товары</p>
                    <a href="#" class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 500px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    height: 90%;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0px 35px;
    padding-bottom: 50px;
    background: url(../assets/img/swiper.png);
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box {
    padding: 0px 30px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box__yellow {
    background: rgba(255, 214, 0, 0.66);
}

.box__white {
    background: rgba(255, 255, 255, 0.66);
}

.box__yellow .right {
    background: #FFD600;
    transition: .4s
}

.box__white .right {
    background: white;
    transition: .4s
}

.box__yellow .right:hover {
    background: white;
    transition: .3s;
}

.box__yellow .right:hover i {
    color: #FFD600;
    transition: .3s;
}

.box__white .right:hover {
    background: black;
    transition: .3s;
}

.box__white .right:hover i {
    color: white;
    transition: .3s;
}

.box p {
    font-weight: 700;
    font-size: 34px;
    line-height: 100%;
}

.box__yellow p {
    color: #FFFFFF;
}

.box__white p {
    color: #232323;
}


.right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
}


.box__yellow i {
    color: white;
}

.box__white i {
    color: #232323;
}
</style>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: #FFD600 !important;
}


.swiper-pagination-bullet {
    background: #FFD600;
    width: 15px;
    height: 15px;
}
</style>