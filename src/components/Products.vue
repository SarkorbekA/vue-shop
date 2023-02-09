<template>
    <div class="container">
        <!-- <h1>{{ count }}</h1> -->
        <div class="product__list">
            <the-card v-for="(card, index) in products" :key="index" :title="card.title" :type="card.type"
                :price="card.price" @addProductToCard="AddCart(card)" />

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
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
                },
                {
                    type: "Complect",
                    title: "Telefon",
                    price: 15000
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
        AddCart(data) {
            this.orderCard.push({
                title: data.title,
                type: data.type,
                price: data.price,
            })
        }
    }
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