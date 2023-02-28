<template>
    <div class="container">
        <!-- <h1>{{ count }}</h1> -->
        <div class="product__list">
            <the-card v-for="(card, index) in $store.state.products.slice(0, 12)"
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
</template>

<script>
import TheCard from "../TheCard.vue";
export default {
    name: "Products",
    components: { TheCard },
    // data() {
    //     return {
    //         count: 12,
    //     }
    // },
    methods: {
        AddCart(card) {
            // this.$store.dispatch('addOrder', card)
            this.$store.commit('ADD_TO_CART', card)
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

<style lang="scss" scoped>
.product__list {
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
}</style>