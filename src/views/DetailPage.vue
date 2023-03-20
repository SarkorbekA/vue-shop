<script setup>
import ProductDetail from '../components/ProductDetail.vue'
import DetailProducts from '../components/DetailPage/DetailProducts.vue'

</script>

<script>
export default {
    component: {
        ProductDetail,
        DetailProducts,
    },
    computed: {
        detail() {
            return this.$store.state.products.find(el => el.id == this.$route.params.id)
        }
    },
}
</script>


<template>
    <div class="content container">
        <div class="page__router">
            <a @click="$router.push('/')"
                href="#">Главная</a>
            <span> / </span>
            <a href="#">Каталог</a>
            <span> / {{ this.detail.title }}</span>
        </div>
        <ProductDetail />
    </div>
    <section class="product">
        <div class="product__title"><span>Новые</span> товары</div>
        <DetailProducts />
    </section>
</template>

