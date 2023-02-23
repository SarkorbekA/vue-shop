<script setup>
import TheSlider from '../components/TheSlider.vue'
import Products from '../components/Products.vue'
import BuyProduct from '../components/BuyProduct.vue'
import Partners from '../components/Partners.vue'
import Advantage from '../components/TheAdvantage.vue'
</script>

<script>
export default {
    component: {
        TheSlider,
        Products,
        BuyProduct,
        Partners,
        Advantage,
    }
}
</script>

<template>
    <TheSlider />

    <section class="product">
        <div class="product__title"><span>Популярные</span> товары</div>
        <Products />
    </section>


    <div class="buy__product">
        <div class="buy__product-title">Успейте <span>купить</span></div>
        <BuyProduct />
    </div>

    <section class="partners">
        <div class="container">
            <h1 class="partners__title">
                Наши партнеры
            </h1>
            <p class="partners__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eu mauris, varius neque orci neque tortor.
            </p>
            <Partners />
        </div>
    </section>

    <section class="product">
        <div class="product__title"><span>Новые</span> товары</div>
        <Products />
    </section>

    <section class="partners">
        <div class="container">
            <h1 class="partners__title">
                Наши преимущества
            </h1>
            <Advantage />
        </div>
    </section>
</template>

<style lang="scss">
.product {
    margin-top: 80px;

    &__title {
        max-width: 1600px;
        width: 100%;
        margin: auto;
        font-weight: 700;
        font-size: 28px;
        color: black;
        white-space: pre;
        margin-bottom: 50px;

        @media (max-width: 576px) {
            font-size: 22px;
        }
    }

    &__title span {
        padding: 9px 5px 9px 100px;
        background: #FFD600;
        color: white;

        @media (max-width: 576px) {
            padding: 9px 5px 9px 50px;
        }
    }
}


.buy__product {
    margin-top: 80px;

    &-title {
        text-align: center;
        font-weight: 700;
        font-size: 28px;
        color: black;
        white-space: pre;
        margin-bottom: 40px;

        @media (max-width: 576px) {
            font-size: 22px;
        }
    }

    &-title span {
        padding: 9px 160px 9px 5px;
        background: #FFD600;
        color: white;

        @media (max-width: 576px) {
            padding: 9px 70px 9px 5px;
        }
    }
}


.partners {
    margin-top: 65px;
    padding: 40px 0px 50px 0px;
    text-align: center;
    background: #F5F7FA;

    @media (max-width: 576px) {
        padding: 30px 0px 20px 0px;
    }

    &__title {
        font-weight: 700;
        font-size: 28px;
        color: #232323;
        @media(max-width: 400px){
            font-size: 24px;
        }
    }

    &__subtitle {
        margin-top: 25px;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
}
</style>