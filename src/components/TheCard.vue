<template>
    <div class="product__item">
        <!-- <img width="100%" height="auto" class="product__img" src="../assets/img/products/product.webp" alt="product"> -->
        <img width="100%" height="auto" class="product__img" src="../assets/img/products/product.webp" alt="product">
        <p class="type">{{ type }}</p>
        <p class="title">{{ title }} </p>
        <p class="price">{{ price }} UZS</p>
        <div v-if="!like" @click="addToFavorites" :class="like ? 'add-like' : ''" class="favorite">
            <img width="80%" height="auto" src="../assets/img/icons/like.svg" alt="like">
        </div>
        <div v-else @click="addToFavorites" :class="like ? 'add-like' : ''" class="favorite">
            <img width="80%" height="auto" src="../assets/img/icons/liked.svg" alt="like">
        </div>
        <div @click="addToCard" class="addCart">
            <i class="fa-solid fa-cart-shopping"></i>
            <button>В Корзину</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCard',
    props: ['type', 'title', 'price', 'like'],
    methods: {
        addToCard() {
            this.$emit('addProductToCard')
        },
        addToFavorites() {
            this.$emit('addToFavorites')
        }
    }
}
</script>

<style lang="scss" scoped>
.product__item {
    text-align: center;
    width: 100%;
    // height: 230px;
    padding-bottom: 8px;
    background: white;
    border: 1px solid transparent;

    @media (max-width: 450px) {
        width: 80%;
        margin: auto;
    }

    .product__img {
        width: 100%;
        height: auto;

        @media (max-width: 450px) {
            width: 80% !important;
            margin: auto;
        }
    }

    .type {
        margin-top: 14px;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        color: #90989F;
    }

    .title {
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        color: #333333;
        padding: 0px 14px;
    }

    .price {
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        color: #000000;
        margin-top: 14px;
        margin-bottom: 10px;
    }

    .favorite {
        position: absolute;
        cursor: pointer;
        top: 7px;
        right: 7px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(201, 201, 201, 0.2);
        visibility: hidden;
        opacity: 0;
        transition: .3s;
        border-radius: 6px;

        img {
            width: 80% !important;
            height: auto;
        }

        &:hover {
            background: rgba(201, 201, 201, 0.6);
        }
    }

    .addCart {
        opacity: 0;
        display: none;
        visibility: hidden;
        margin: auto;
        width: 95%;
        border-radius: 4px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: white;
        background: #FFD600;
        cursor: pointer;
        transition: .6s;
        transform: translateY(30px);

        i {
            font-size: 18px;
        }

        p {
            font-weight: 700;
            font-size: 14px;
            line-height: 100%;
        }

        &:active {
            box-shadow: 0px 0px 5px 1px rgba(128, 128, 128, 0.5);
            color: black;
            background: white;
        }
    }

    transition: .3s;
    position: relative;
    z-index: 1;

    &:hover {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        z-index: 2;
        transform: scale(1.1);
        transition: .3s;
        box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);

        .favorite {
            visibility: visible;
            opacity: 1;
            transition: .4s;
        }

        .addCart {
            transition: .7s;
            opacity: 1;
            visibility: visible;
            transform: translateY(0px);
            display: flex;

        }
    }
}


.add-like {
    visibility: visible !important;
    opacity: 1 !important;
    background: rgba(255, 255, 255, 0.9) !important;
}
</style>