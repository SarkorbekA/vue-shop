<template>
    <section class="catalog container">
        <aside class="catalog__side">
            <ul>
                <li>
                    <a href="#">Подарки</a>
                </li>
                <li>
                    <a href="#">Аксессуары</a>
                </li>
                <li>
                    <a href="#">Одежда и обувь</a>
                </li>
                <li>
                    <a href="#">Товары для дома</a>
                </li>
                <li>
                    <a href="#">Декор для дома</a>
                </li>
                <li>
                    <a href="#">Подарки</a>
                </li>
                <li>
                    <a href="#">Кухня</a>
                </li>
                <li>
                    <a href="#">Офис</a>
                </li>
                <li>
                    <a href="#">Техника</a>
                </li>
                <li>
                    <a href="#">Телефоны</a>
                </li>
                <li>
                    <a href="#">Ванная</a>
                </li>
            </ul>
        </aside>
        <div class="catalog__content">
            <div class="catalog__content-item">
                <h1 class="title">Каталог товаров категория 1</h1>
                <swiper :slidesPerView="4.5"
                    :breakpoints="{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        },
                        1400: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        }
                    }"
                    :spaceBetween="5"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="(card, index) in productsOne">
                        <the-card :key="index"
                            :title="card.title"
                            :type="card.type"
                            :price="card.price"
                            :like="card.like"
                            @addProductToCard="AddCart(card)"
                            @addToFavorites="AddToLikes(card)"
                            class="catalog__content-item">
                        </the-card>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="catalog__content-item">
                <h1 class="title">Каталог товаров категория 2</h1>
                <swiper :slidesPerView="4.5"
                    :breakpoints="{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        },
                        1400: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        }
                    }"
                    :spaceBetween="5"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="(card, index) in productsSecond">
                        <the-card :key="index"
                            :title="card.title"
                            :type="card.type"
                            :price="card.price"
                            :like="card.like"
                            @addProductToCard="AddCart(card)"
                            @addToFavorites="AddToLikes(card)"
                            class="catalog__content-item">
                        </the-card>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="catalog__content-item">
                <h1 class="title">Каталог товаров категория 3</h1>
                <swiper :slidesPerView="4.5"
                    :breakpoints="{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        },
                        1400: {
                            slidesPerView: 4.5,
                            spaceBetween: 5,
                        }
                    }"
                    :spaceBetween="5"
                    :freeMode="true"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper">
                    <swiper-slide v-for="(card, index) in productsThird">
                        <the-card :key="index"
                            :title="card.title"
                            :type="card.type"
                            :price="card.price"
                            :like="card.like"
                            @addProductToCard="AddCart(card)"
                            @addToFavorites="AddToLikes(card)"
                            class="catalog__content-item">
                        </the-card>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import TheCard from "./TheCard.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
        TheCard,
    },
    data() {
        return {
            productsOne: [
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
            ],
            productsSecond: [
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
            ],
            productsThird: [
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
            ]
        }
    },
    methods: {
        AddCart(data) {
            this.$store.commit('ADD_ORDER', data)
            this.$store.commit('CHANGE_ORDER_COUNT')
        },
        AddToLikes(data) {
            data.like = !data.like
            if (data.like) {
                this.$store.commit('ADD_LIKES')
            } else {
                this.$store.commit('SUBTRACT_LIKES')
            }
        }
    },
    setup() {
        return {
            modules: [FreeMode, Navigation],
        };
    },
};
</script>

<style lang="scss" scoped>
.swiper {
    padding: 20px 10px;
    width: 100%;

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .product__item {
        width: 100%;
        margin: 0;
    }

    &::after {
        content: '';
        background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0.234) 100%);
        position: absolute;
        z-index: 9;
        top: 0;
        right: 0;
        width: 100px;
        height: 100%;
    }
}

.catalog {
    margin-top: 40px;
    color: #232323;
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: 100%;
    }

    &__side {
        width: 100%;
        background: #F5F7FA;
        border-radius: 4px;
        padding: 20px;

        @media (max-width: 1024px) {
            display: none;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 25px;

            a {
                font-weight: 500;
                font-size: 14px;
                line-height: 120%;
                color: #222222;
            }
        }
    }

    &__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        &-item {
            .title {
                font-weight: 700;
                font-size: 24px;
                line-height: 100%;
                color: #232323;
            }
        }
    }
}


</style>

<style lang="scss">
.catalog__content {

    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 18px;
        color: #000000;
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 38px;
        min-width: 38px;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
        height: 38px;
        background: white;
        border-radius: 50%;
    }
}
</style>