<script setup>
import Catalog from '../components/Catalog.vue'
import Products from '../components/Products.vue'

</script>

<script>
export default {
    component: {
        Catalog,
        Products,
    }
}
</script>

<template>
    <div class="container content">
        <div class="page__router">
            <a @click="$router.push('/')"
                href="#">Главная</a>
            <span> / </span>
            <span>Каталог</span>
        </div>
        <Catalog />
    </div>
    <section class="show__product">
        <div class="container">
            <div class="show__product-title">Вы <span> смотрели</span></div>
            <Products />
        </div>
    </section>
</template>


<style lang="scss" scoped>
.show__product {
    margin-top: 60px;
    background: #F5F7FA;
    padding: 45px 0px;

    &-title {
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
</style>
