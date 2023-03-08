<template>
    <div class="product__item">
        <img @click="$router.push('/details')" width="100%" class="product__img"
            :src="img" alt="product">
        <p class="type">{{ type }}</p>
        <p class="title">{{ title }} </p>
        <p class="price">{{ price }} UZS</p>
        <div class="favorite">
            <div v-if="!like" @click="addToFavorites" class="favorite__item">
                <img width="80%" height="auto" src="../assets/img/icons/like.svg" alt="like">
            </div>
            <div v-else @click="addToFavorites" :class="like ? 'add-like' : ''" class="favorite__item">
                <img width="80%" height="auto" src="../assets/img/icons/liked.svg" alt="like">
            </div>
        </div>
        <div v-if="discount" class="discount">- {{ discount }} %</div>
        <button @click="addToCard" class="addCart">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>В Корзину</p>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TheCard',
    props: ['type', 'title', 'price', 'like', 'discount', 'img'],
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
    padding-bottom: 8px;
    background: white;
    border: 1px solid transparent;
    transition: .3s;
    position: relative;
    z-index: 1;

    @media (max-width: 450px) {
        width: 80%;
        margin: auto;
    }

    .product__img {
        width: 100%;
        height: 120px;
        cursor: pointer;
        object-fit: cover;

        @media (max-width: 450px) {
            width: 80% !important;
            margin: auto;
        }
    }

    .type {
        margin-top: 14px;
        font-weight: 400;
        font-size: 12px;
        color: #90989F;
    }

    .title {
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        color: #333333;
        padding: 0px 14px;
    }

    .price {
        font-weight: 700;
        font-size: 16px;
        color: #000000;
        margin-top: 14px;
        margin-bottom: 10px;
    }

    .discount {
        position: absolute;
        cursor: pointer;
        padding: 6px 12px;
        top: 0;
        left: 0;
        font-size: 18px;
        font-weight: 700;
        background: #E01A22;
        border-bottom-right-radius: 12px;
        color: white;
    }

    .favorite {
        position: absolute;
        cursor: pointer;
        top: 7px;
        right: 7px;

        &__item {
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(201, 201, 201, 0.2);
            visibility: hidden;
            opacity: 0;
            transition: .3s;
            border-radius: 6px;

            img {
                width: 70% !important;
                height: auto;
            }

            &:hover {
                background: rgba(201, 201, 201, 0.6);
            }

            @media (max-width: 1024px) {
                visibility: visible;
                opacity: 1;
                transition: .4s;
            }
        }
    }

    .addCart {
        opacity: 0;
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
        transition: .6s;
        transform: translateY(30px);
        border: 1px solid #FFD600;

        i {
            font-size: 18px;
        }

        p {
            font-weight: 700;
            font-size: 14px;
        }

        &:active {
            box-shadow: 0px 0px 5px 1px rgba(128, 128, 128, 0.5);
        }

        @media (min-width: 1024px) {
            &:hover {
                transition: .2s;
                background: white;
                color: #FFD600;
            }
        }


        @media (max-width: 1024px) {
            opacity: 1;
            visibility: visible;
            transform: translateY(0px);
        }
    }

    @media (min-width: 1024px) {
        &:hover {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            z-index: 2;
            transform: scale(1.1);
            transition: .3s;
            box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, 0.1);

            .favorite__item {
                visibility: visible;
                opacity: 1;
                transition: .4s;
            }

            .addCart {
                transition: opacity .7s, visibility .7s, transform .7s;
                opacity: 1;
                visibility: visible;
                transform: translateY(0px);
            }
        }
    }
}


.add-like {
    visibility: visible !important;
    opacity: 1 !important;
    // background: rgba(255, 255, 255, 0.9) !important;
}
</style>