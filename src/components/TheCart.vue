<template>
    <section class="cart">
        <div class="cart__content">
            <h1 class="cart__content-title">Всего {{ $store.state.ordersData.length }} товара</h1>
            <div v-if="$store.state.ordersData.length" class="cart__content-box">
                <div v-for="(cart, index) in $store.state.ordersData" :key="index" class="cart__item">
                    <div class="cart__item-left">
                        <div class="cart__item-img">
                            <img src="../assets/img/cart/cart__img.png" alt="item">
                        </div>
                        <div class="cart__item-buttons">
                            <button @click="cartLike(cart)"  :class="cart.like == true ? 'active' : ''" class="btn">В
                                избранное</button>
                            <button @click="removeItem(cart)" class="btn">Удалить</button>
                        </div>
                    </div>
                    <div class="cart__item-center">
                        <h1 class="cart__item-name">
                            {{ cart.title }}
                        </h1>
                        <div class="cart__item-facts">
                            <h3>Коротко о товаре</h3>
                            <ul>
                                <li><span>Handmade</span></li>
                                <li><span>Handmade</span></li>
                                <li><span>Handmade</span></li>
                                <li><span>Доступно только 4 штуки, и сейчас это есть у более 20 человек</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cart__item-right">
                        <div class="prices">
                            <h1 class="cart__item-sale">
                                {{ cart.price }} UZS
                            </h1>
                            <h2 class="cart__item-price"> 1 000 000 UZS</h2>
                        </div>
                        <h3 class="cart__item-discount">Sale: 10%</h3>
                        <div class="cart__item-count">
                            <button @click="minusCount(cart)" class="minus">-</button>
                            <div class="count">{{ cart.count }}</div>
                            <button @click="plusCount(cart)" class="plus">+</button>
                        </div>
                        <div class="cart__item-total">
                            <div class="title">Общая цена:</div>
                            <div class="price">{{ cart.price * cart.count }} UZS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="empty" v-else>
                Пусто
            </div>
        </div>
        <div class="cart__side">
            <div class="cart__side-item">
                <div class="payment">
                    <h1 class="payment__title">
                        Выберите способ оплаты
                    </h1>
                    <div class="payment__box">
                        <div class="item">
                            <img src="../assets/img/cart/icons/payme.svg" alt="payme">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/click.svg" alt="click">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/uzcard.svg" alt="uzcard">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/apelsin.svg" alt="apelsin">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/humo.svg" alt="humo">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/mastercard.svg" alt="mastercard">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/visacard.svg" alt="visacard">
                        </div>
                    </div>
                    <div class="payment__info">
                        <div class="payment__info-item">
                            <div class="payment__info-left">
                                Товары <span></span>
                            </div>
                            <div class="payment__info-price">{{ $store.state.ordersData.length }}</div>
                        </div>
                        <div class="payment__info-item">
                            <div class="payment__info-left">
                                Общая стоимость <span></span>
                            </div>
                            <div class="payment__info-price">{{ this.cartPrice }} сум</div>
                        </div>
                        <div class="payment__info-item">
                            <div class="payment__info-left">
                                Скидки на товары <span></span>
                            </div>
                            <div class="payment__info-price">{{ this.cartDiscount }} сум</div>
                        </div>
                        <div class="payment__info-item">
                            <div class="payment__info-left">
                                Доставка <span></span>
                            </div>
                            <div class="payment__info-price"><span>Бесплатно</span></div>
                        </div>
                    </div>
                    <form class="payment__promocode">
                        <input type="text" placeholder="Промокоды">
                        <input type="button" value="Применить">
                    </form>
                    <div class="payment__pay">
                        <button>Перейти к оплате</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TheCart",
    data() {
        return {
            cartPrice: 0,
            cartDiscount: 0,
            allPrice: {},
        }
    },
    methods: {
        removeItem(item) {
            const index = this.$store.state.ordersData.findIndex(el => el.id === item.id)
            this.$store.state.ordersData.splice(index, 1);
            this.cartPrice -= item.price * item.count
        },
        plusCount(item) {
            this.cartPrice += item.price
            item.count++
        },
        minusCount(item) {
            if (item.count <= 1) {
                const index = this.$store.state.ordersData.findIndex(el => el.id === item.id)
                this.$store.state.ordersData.splice(index, 1);
                this.cartPrice -= item.price
            } else {
                this.cartPrice -= item.price
                item.count--
            }
        },
        cartLike(cart) {
            cart.like = !cart.like
            if (cart.like) {
                this.$store.commit('ADD_LIKES')
            } else {
                this.$store.commit('SUBTRACT_LIKES')
            }
        }
    },
    mounted() {
        for (const item in this.$store.state.ordersData) {
            let oneItem = this.$store.state.ordersData[item]
            this.cartPrice += oneItem.price * oneItem.count
        }
    },
    // computed: {
    //     countAcceptedTodo() {
    //         return {}
    //     }
    // },
}
</script>

<style lang="scss" scoped>
.cart {
    display: grid;
    grid-template-columns: 9fr 4fr;
    gap: 30px;
    margin-top: 60px;
    color: #232323;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    &__content {
        width: 100%;

        .empty {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45vh;
            font-size: 30px;
            color: gray;
        }

        &-title {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
        }

        &-box {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;

            .cart__item {
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;
                row-gap: 20px;
                column-gap: 20px;
                padding: 20px 0px;
                border-bottom: 1px solid #FFD600;

                // left box
                &-left {

                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-between;

                    @media (max-width: 1535px) {
                        width: 170px;
                        min-width: 170px;
                    }

                    @media (max-width:500px) {
                        width: 100%;
                    }
                }

                &-img {
                    width: 100%;

                    img {
                        width: 100%;
                        object-fit: cover;
                    }
                }

                &-buttons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-top: 20px;

                    .btn {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 140%;
                        text-decoration-line: underline;
                        color: #CCCCCC;

                        &:hover {
                            transition: .3s;
                            color: #232323;
                        }

                        &.active {
                            color: #E01A22;
                        }
                    }
                }

                // center box
                &-center {
                    width: 450px;
                    border-right: 1px solid #E5E5E5;
                    height: 100%;
                    padding-right: 20px;

                    @media (max-width: 1280px) {
                        min-width: 280px;
                        width: 285px;
                        padding-right: 0;
                    }

                    @media (max-width: 768px) {
                        border: none;
                    }

                    @media (max-width:500px) {
                        width: 100%;
                    }
                }

                &-name {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                }

                &-facts {
                    margin-top: 12px;

                    h3 {
                        font-weight: 700;
                        font-size: 14px;
                    }

                    ul {
                        margin-left: 16px;

                        li {
                            list-style: disc;
                            color: #999999;
                            margin-top: 16px;

                            span {
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 120%;
                                color: #232323;
                            }
                        }
                    }

                }

                // right box
                &-right {
                    width: 160px;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-between;
                    max-height: 220px;
                    gap: 8px;

                    @media (max-width: 768px) {
                        width: 100%;
                        gap: 20px;
                        flex-direction: column;
                        max-height: 250px;
                    }
                }

                &-sale {
                    font-weight: 700;
                    font-size: 18px;
                    color: #333333;
                }

                &-price {
                    font-weight: 400;
                    font-size: 14px;
                    text-decoration-line: line-through;
                    text-transform: uppercase;
                    color: #B9B9B9;
                }

                &-discount {
                    background: #E01A22;
                    padding: 10px 14px 8px;
                    font-weight: 700;
                    height: 34px;
                    font-size: 14px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    display: inline-block;
                    width: 120px;
                    text-align: center;
                    border: 1px solid #E01A22
                }

                &-count {
                    height: 40px;
                    width: 120px;
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 28px;
                    color: #B5B5B5;
                    border: 1px solid #B5B5B5;

                    .count {
                        width: 40%;
                        text-align: center;
                        padding: 5px;
                    }

                    button {
                        color: #B5B5B5;
                        padding: 5px;
                        width: 30%;
                        font-size: 24px;

                        @media (min-width: 768px) {
                            &:hover {
                                transition: .3s;
                                background: #FFD600;
                                color: white;
                            }
                        }
                    }
                }

                &-total {
                    display: flex;
                    gap: 8px;
                    flex-direction: column;

                    .title {
                        // background: #FFD600;
                        // width: 120px;
                        // height: 34px;
                        // padding: 10px 6px 8px;
                        font-weight: 400;
                        font-size: 14px;
                        // border: 1px solid #FFD600;
                    }

                    .price {
                        font-weight: 700;
                        font-size: 18px;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    &__side {
        width: 100%;

        &-item {
            .payment {
                box-shadow: 0px 5px 15px 3px rgba(204, 204, 204, 0.25);
                border-radius: 4px;
                padding: 25px 0px;

                &__title {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    padding: 0px 25px;
                }

                &__box {
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 6px;
                    row-gap: 10px;
                    margin-top: 15px;
                    padding: 0px 25px;

                    .item {
                        cursor: pointer;
                        display: inline-block;
                        border-radius: 4px;
                        border: 1px solid #E7E7E7;

                        &:hover {
                            transition: .3s;
                            border: 1px solid #FFD600;
                        }
                    }
                }

                &__info {
                    padding: 15px 0px;
                    margin-top: 20px;
                    border-top: 1px solid #E7E7E7;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding: 15px 8px 15px 25px;

                    &-item {
                        display: flex;
                        max-width: 600px;
                    }


                    &-left {
                        width: 60%;
                        display: flex;
                        white-space: nowrap;

                        span {
                            width: 100%;
                            border-bottom: 1px dashed #AFB0B4;
                        }
                    }

                    &-price {
                        span {
                            font-weight: 700;
                            color: #FFD600;
                        }
                    }
                }

                &__promocode {
                    margin-top: 10px;
                    padding: 0px 15px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: space-between;

                    input[type="text"] {
                        padding: 12px;
                        background: #F5F7FA;
                        border-radius: 5px;
                        font-weight: 700;
                        width: 100%;
                        text-transform: uppercase;
                    }

                    input[type="button"] {
                        cursor: pointer;
                        padding: 12px 14px;
                        background: #FFFFFF;
                        border: 1px solid #232323;
                        border-radius: 5px;
                        font-weight: 700;
                        font-size: 14px;
                        color: #232323;
                    }
                }

                &__pay {
                    padding: 0px 15px;
                    margin-top: 14px;

                    button {
                        width: 100%;
                        background: #FFD600;
                        border-radius: 4px;
                        border: 1px solid #FFD600;
                        padding: 11px;
                        text-align: center;
                        font-weight: 700;
                        font-size: 18px;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
}
</style>