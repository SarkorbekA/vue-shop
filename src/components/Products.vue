<template>
    <div class="container">
        <!-- <h1>{{ count }}</h1> -->
        <div class="product__list">
            <the-card v-for="(card, index) in products" :key="index" :title="card.title" :type="card.type"
                :price="card.price" :discount="card.discount" :like="card.like" @addProductToCard="AddCart(card)"
                @addToFavorites="AddToLikes(card)" />
        </div>
    </div>
</template>

<script>
import TheCard from "./TheCard.vue";
export default {
    name: "Products",
    components: { TheCard },
    data() {
        return {
            orderCard: [],
            products: [
                {
                    id: 1,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false,
                    discount: 10
                },
                {
                    id: 2,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false,
                    discount: 50
                },
                {
                    id: 3,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false,
                    discount: 70
                },
                {
                    id: 4,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 5,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 6,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 7,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 8,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 9,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 10,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 11,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
                {
                    id: 12,
                    type: "Complect",
                    title: "Telefon",
                    price: 15000,
                    like: false
                },
            ]
        }
    },
    computed: {
        count() {
            return this.orderCard.length
        }
    },
    methods: {
        AddCart(card) {
            this.$store.dispatch('addOrder', card)
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
}
</style>