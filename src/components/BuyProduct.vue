<template>
    <section class="buy">
        <div class="container">
            <div v-for="(card, index) in $store.state.products.slice(92, 93)"
                :key="index"
                class="buy__main">
                <img src="../assets/img/products/product2.webp"
                    alt="product">
                <p class="category">
                    {{ card.type }}
                </p>
                <p class="info">
                    {{ card.title }}
                </p>
                <p class="price">
                    {{ card.price }} UZS
                </p>
                <div class="time__box">
                    <img src="../assets/img/clock.svg"
                        alt="">
                    <p class="time">01 : 30 : 15</p>
                </div>
                <div v-if="!card.like"
                    @click="AddToLikes(card)"
                    :class="card.like ? 'add-like' : ''"
                    class="favorite">
                    <img src="../assets/img/icons/like.svg"
                        alt="like">
                </div>
                <div v-else
                    @click="AddToLikes(card)"
                    :class="card.like ? 'add-like' : ''"
                    class="favorite">
                    <img src="../assets/img/icons/liked.svg"
                        alt="like">
                </div>
                <div @click="AddCart(card)"
                    class="addCart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>В Корзину</p>
                </div>
            </div>
            <div class="product__list">
                <the-card v-for="(card, index) in $store.state.products.slice(84, 92)"
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

<script>
import TheCard from "./TheCard.vue";
export default {
    name: "BuyProduct",
    components: { TheCard },
    methods: {
        AddCart(card) {
            this.$store.commit('ADD_TO_CART', card)
        },
        AddToLikes(data) {
            data.like = !data.like
        }
    }
}
</script>

<style lang="scss" scoped>
.add-like {
    visibility: visible !important;
    opacity: 1 !important;
    background: rgba(255, 255, 255, 0.9) !important;
}

.buy {
    padding: 20px 0px;

    .container {
        display: grid;
        grid-template-columns: 2fr 4fr;
        align-items: flex-start;
        justify-content: space-between;
        gap: 30px;

        @media (max-width: 1280px) {
            grid-template-columns: 3fr 4fr;
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    }

    .product__list {
        width: 100%;
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        @media (max-width: 1280px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 450px) {
            grid-template-columns: 1fr;
        }
    }
}

.buy__main {
    width: 100%;
    box-shadow: 0px 0px 40px rgba(41, 121, 255, 0.1);
    position: relative;
    padding: 20px 0px 10px 0px;
    background: white;
    text-align: center;
    height: auto;

    @media (max-width: 1024px) {
        width: 80%;
        margin: auto;
    }

    @media (max-width: 450px) {
        width: 100%;
    }

    img {
        width: 80%;
        margin: auto;
    }

    .category {
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        color: #90989F;
    }

    .info {
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #333333;
        padding: 0px 14px;
    }

    .time__box {
        display: flex;
        justify-content: center;
        gap: 16px;
        align-items: center;
        margin-bottom: 10px;

        img {
            width: 26px;
            margin: 0;
        }

        p {
            display: inline-block;
            font-weight: 400;
            font-size: 18px;
            color: #FFD600;
        }
    }

    .price {
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 12px;
    }


    .favorite {
        position: absolute;
        cursor: pointer;
        top: 14px;
        right: 14px;
        width: 50px;
        height: 46px;
        padding: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(201, 201, 201, 0.2);
        transition: .3s;
        border-radius: 6px;

        img {
            width: 80%;
        }

        &:hover {
            background: rgba(201, 201, 201, 0.6);

        }
    }

    .addCart {
        margin: auto;
        width: 95%;
        border-radius: 4px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: white;
        background: #FFD600;
        cursor: pointer;
        border: 1px solid #FFD600;
        margin-top: 10px;

        i {
            font-size: 24px;
        }

        p {
            font-weight: 700;
            font-size: 24px;
        }

        &:hover {
            transition: .3s;
            color: #FFD600;
            background: white;
        }

        &:active {
            color: black;
            box-shadow: 0px 0px 10px 2px rgba(128, 128, 128, 0.5);
        }
    }
}
</style>