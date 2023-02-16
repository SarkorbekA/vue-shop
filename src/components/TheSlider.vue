<template>
    <div class="container">
        <swiper :slidesPerView="2" :spaceBetween="20" :pagination="{
            clickable: true,
        }" :autoplay="{
    delay: 4000,
    disableOnInteraction: false,
}" :breakpoints="{
    '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    '@0.75': {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    '@1.00': {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    '@1.50': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
}" :loop="true" :navigation="true" :modules="modules" class="mySwiper">

            <swiper-slide>
                <a href="#" class="box box__yellow">
                    <p>Хозяйственные товары</p>
                    <span class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#" class="box box__white">
                    <p>Мотивационные декоры</p>
                    <span class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#" class="box box__yellow">
                    <p>Хозяйственные товары</p>
                    <span class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#" class="box box__white">
                    <p>Мотивационные декоры</p>
                    <span class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </a>
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

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 500px;

    @media (max-width: 576px) {
        height: 400px;
    }
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
    background: url(../assets/img/swiper.webp);

    @media (max-width: 576px) {
        padding: 0px;
    }
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
    gap: 8px;

    p {
        font-weight: 700;
        font-size: 28px;
        
        @media (max-width: 576px) {
            font-size: 24px;
        }

        @media (max-width: 576px) {
            font-size: 20px;
        }
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;

        @media (max-width: 576px) {
            width: 30px;
            min-width: 30px;
            height: 30px;
            font-size: 10px;
        }
    }
}

.box__yellow {
    background: rgba(255, 214, 0, 0.66);

    .right {
        background: #FFD600;
        transition: .4s
    }

    .right:hover {
        background: white;
        transition: .3s;
    }

    .right:hover i {
        color: #FFD600;
        transition: .3s;
    }

    p {
        color: #FFFFFF;
    }

    i {
        color: white;
    }


}

.box__white {
    background: rgba(255, 255, 255, 0.66);

    .right {
        background: white;
        transition: .4s
    }

    .right:hover {
        background: black;
        transition: .3s;
    }

    .right:hover i {
        color: white;
        transition: .3s;
    }

    p {
        color: #232323;
    }

    i {
        color: #232323;
    }
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