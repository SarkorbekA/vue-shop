<script setup>
import Favorites from '../components/Favorites.vue'

</script>

<script>
export default {
    component: {
        Favorites,
    }
}
</script>

<template>
    <div class="container content">
        <div class="page__router">
            <a @click="$router.push('/')" href="#">Главная</a>
            <span> / </span>
            <span>Избранное</span>
        </div>
        <Favorites />
    </div>
</template>