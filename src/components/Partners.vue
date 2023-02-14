<template>
    <section class="partner">
        <div class="container">

            <swiper :slidesPerView="1" :spaceBetween="10" :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }" :loop="true" :navigation="true" :modules="modules" :breakpoints="{
    '@0.00': {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    '@0.75': {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    '@1.00': {
        slidesPerView: 5,
        spaceBetween: 40,
    },
    '@1.50': {
        slidesPerView: 6,
        spaceBetween: 50,
    },
}" class="mySwiper">
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/apple.webp" alt="apple">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/asus.webp" alt="asus">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/hp.webp" alt="hp">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/huawei.webp" alt="huawei">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/lg.webp" alt="lg">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/samsung.webp" alt="samsung">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/apple.webp" alt="apple">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/asus.webp" alt="asus">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/hp.webp" alt="hp">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/huawei.webp" alt="huawei">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/lg.webp" alt="lg">
                </swiper-slide>
                <swiper-slide>
                    <img width="100%" height="100%" src="../assets/img/companies/samsung.webp" alt="samsung">
                </swiper-slide>
            </swiper>

        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay, Navigation],
        };
    },
};

</script>

<style lang="scss" scoped>
.partner {
    margin-top: 30px;

    @media (max-width: 576px) {
        margin-top: 10px;
    }
}

.swiper {
    width: 100%;
    height: 200px;
    padding: 0px 50px;

    @media (max-width: 576px) {
        height: 140px;
    }
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>

<style>
.swiper-button-next,
.swiper-button-prev {
    /* transform: translateY(-50%); */
    color: #FFD600 !important;
}



.swiper-pagination-bullet {
    background: #FFD600;
    width: 15px;
    height: 15px;
}
</style>