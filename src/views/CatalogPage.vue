<script setup>
import Catalog from '../components/Catalog.vue'
import TheCard from '../components/TheCard.vue'

</script>

<script>
export default {
    component: {
        Catalog,
        TheCard,
    },
    methods: {
        AddCart(data) {
            this.$store.dispatch('addOrder', data)
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
            <div class="show__product-list">
                <the-card v-for="(card, index) in $store.state.products.slice(60,72)"
                    :key="index"
                    :title="card.title"
                    :type="card.type"
                    :price="card.price"
                    :discount="card.discount"
                    :like="card.like"
                    @addProductToCard="AddCart(card)"
                    @addToFavorites="AddToLikes(card)" />
            </div>
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

    &-list {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

        @media (max-width: 1280px) {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 576px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 450px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
