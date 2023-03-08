<template>
    <section class="cart">
        <div class="cart__content">
            <h1 class="cart__content-title">Всего {{ $store.state.products.filter(el => el.cart == true).length }} товара
            </h1>
            <div v-if="$store.state.products.filter(el => el.cart == true).length"
                class="cart__content-box">
                <div v-for="(item, index) in $store.state.products.filter(el => el.cart == true)"
                    :key="index"
                    class="cart__item">
                    <div class="cart__item-left">
                        <div class="cart__item-img">
                            <img src="../assets/img/cart/cart__img.png"
                                alt="item">
                        </div>
                        <div class="cart__item-buttons">
                            <button @click="cartLike(item)"
                                :class="item.like == true ? 'active' : ''"
                                class="btn">В
                                избранное</button>
                            <button @click="removeItem(item)"
                                class="btn">Удалить</button>
                        </div>
                    </div>
                    <div class="cart__item-center">
                        <h1 class="cart__item-name">
                            {{ item.title }}
                        </h1>
                        <div class="cart__item-facts">
                            <h3>Коротко о товаре</h3>
                            <ul>
                                <li><span>{{ item.about }}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cart__item-right">
                        <div class="prices">
                            <h2 v-if="item.discount"
                                class="cart__item-sale"> {{ item.price - (item.discount * (item.price / 100)) }} UZS</h2>
                            <h1 class="cart__item-sale"
                                :class="item.discount ? 'cart__item-price' : ''">
                                {{ item.price }} UZS
                            </h1>
                        </div>
                        <h3 v-if="item.discount"
                            class="cart__item-discount">Sale: {{ item.discount }}%</h3>
                        <div class="cart__item-count">
                            <button @click="minusCount(item)"
                                class="minus">-</button>
                            <div class="count">{{ item.count }}</div>
                            <button @click="plusCount(item)"
                                class="plus">+</button>
                        </div>
                        <div class="cart__item-total">
                            <div class="title">Общая цена:</div>
                            <div class="prices">
                                <h2 v-if="item.discount"
                                    class="cart__item-sale price"> {{ (item.price - (item.discount * (item.price /
                                        100))) * item.count }} UZS
                                </h2>
                                <h1 class="cart__item-sale price"
                                    :class="item.discount ? 'cart__item-price' : ''">
                                    {{ item.price * item.count }} UZS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="empty"
                v-else>
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
                            <img src="../assets/img/cart/icons/payme.svg"
                                alt="payme">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/click.svg"
                                alt="click">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/uzcard.svg"
                                alt="uzcard">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/apelsin.svg"
                                alt="apelsin">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/humo.svg"
                                alt="humo">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/mastercard.svg"
                                alt="mastercard">
                        </div>
                        <div class="item">
                            <img src="../assets/img/cart/icons/visacard.svg"
                                alt="visacard">
                        </div>
                    </div>
                    <div class="payment__info">
                        <div class="payment__info-item">
                            <div class="payment__info-left">
                                Товары <span></span>
                            </div>
                            <div class="payment__info-price">{{ $store.state.products.filter(item => item.cart ==
                                true).length }}</div>
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
                        <input type="text"
                            placeholder="Промокоды">
                        <input type="button"
                            value="Применить">
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
            cartDiscount: 0
        }
    },
    methods: {
        removeItem(item) {
            item.cart = false;
            if (item.discount) {
                this.cartPrice -= (item.price - (item.discount * (item.price / 100))) * item.count;
                this.cartDiscount -= (item.count * item.price) - (item.price - (item.discount * (item.price / 100))) * item.count;
            } else {
                this.cartPrice -= item.price * item.count;
            }
            if (!item.like == true) {
                item.count = 1;
            }
        },
        plusCount(item) {
            let discount = (item.discount * (item.price / 100));
            if (item.discount) {
                this.cartPrice += (item.price - discount);
                this.cartDiscount += discount;
            } else {
                this.cartPrice += item.price;
            }
            item.count++
        },
        minusCount(item) {
            let discount = (item.discount * (item.price / 100));
            if (item.count <= 1) {
                item.cart = false;
                if (item.discount) {
                    this.cartPrice -= (item.price - discount);
                    this.cartDiscount -= item.price - (item.price - discount);
                } else {
                    this.cartPrice -= item.price;
                }
                item.count = 1;
            } else {
                if (item.discount) {
                    this.cartPrice -= (item.price - discount);
                    this.cartDiscount -= item.price - (item.price - discount);
                } else {
                    this.cartPrice -= item.price;
                }
                item.count--;
            }
        },
        cartLike(item) {
            item.like = !item.like;
            item.checkbox = false;
        }
    },
    mounted() {
        for (const item in this.$store.state.products.filter(item => item.cart == true)) {
            let oneItem = this.$store.state.products.filter(item => item.cart == true)[item]
            if (oneItem.discount) {
                this.cartPrice += (oneItem.price - (oneItem.discount * (oneItem.price / 100))) * oneItem.count
                this.cartDiscount += (oneItem.count * oneItem.price) - (oneItem.price - (oneItem.discount * (oneItem.price / 100))) * oneItem.count
            } else {
                this.cartPrice += oneItem.price * oneItem.count
            }
        }
    },
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
                        width: 200px;
                        min-width: 200px;
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
                    width: 430px;
                    border-right: 1px solid #E5E5E5;
                    height: 100%;
                    padding-right: 20px;

                    @media (max-width: 1280px) {
                        min-width: 250px;
                        width: 250px;
                        padding-right: 0;
                    }

                    @media (max-width: 768px) {
                        border: none;
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
                        margin-top: 16px;

                        li {
                            list-style: disc;
                            color: #999999;

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
                        justify-content: space-around;
                        // flex-direction: column;
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