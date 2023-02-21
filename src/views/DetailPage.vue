<script setup>
import ProductDetail from '../components/ProductDetail.vue'
import Products from '../components/Products.vue'

</script>

<script>
export default {
    component: {
        ProductDetail,
        Products,
    }
}
</script>


<template>
    <div class="content container">
        <div class="page__router">
            <a @click="$router.push('/')" href="#">Главная</a>
            <span> / </span>
            <a href="#">Каталог</a>
            <span> / New Year Candle, Christmas Gift Idea</span>
        </div>
        <ProductDetail />
    </div>
    <section class="product">
        <div class="product__title"><span>Новые</span> товары</div>
        <Products />
    </section>
</template>

