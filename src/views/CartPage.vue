<script setup>
import TheCart from '../components/TheCart.vue'
</script>

<script>
export default {
    name: "CartPage",
    component: {
        TheCart,
    }
}
</script>

<template>
    <section class="cart__page">
        <div class="container content">
            <div class="page__router">
                <a @click="$router.push('/')" href="#">Главная</a>
                <span> / </span>
                <span>Корзина</span>
            </div>
            <TheCart />
        </div>
    </section>
</template>

