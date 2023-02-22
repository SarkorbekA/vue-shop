<script setup>
import Catalog from '../components/Catalog.vue'

</script>

<script>
export default {
    component: {
        Catalog,
    }
}
</script>

<template>
    <div class="container content">
        <div class="page__router">
            <a @click="$router.push('/')" href="#">Главная</a>
            <span> / </span>
            <span>Каталог</span>
        </div>
        <Catalog />
    </div>
</template>

