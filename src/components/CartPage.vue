<template>
    <section class="cart">
        <div class="cart__content">
            <h1 class="cart__content-title">Всего 4 товара</h1>
            <div class="cart__content-box">
                <div class="cart__item">
                    <div class="cart__item-left">
                        <div class="cart__item-img">
                            <img src="../assets/img/cart/cart__img.png" alt="item">
                        </div>
                        <div class="cart__item-buttons">
                            <button class="btn">В избранное</button>
                            <button class="btn">Удалить</button>
                        </div>
                    </div>
                    <div class="cart__item-center">
                        <h1 class="cart__item-name">
                            New Year Candle, Christmas Gift Idea
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
                                1 000 000 UZS
                            </h1>
                            <h2 class="cart__item-price"> 1 000 000 UZS</h2>
                        </div>
                        <h3 class="cart__item-discount">Sale: 10%</h3>
                        <div class="cart__item-count">
                            <button class="minus">-</button>
                            <div class="count">10</div>
                            <button class="plus">+</button>
                        </div>
                        <div class="cart__item-total">
                            <div class="title">Общая цена:</div>
                            <div class="price">100 000 000 UZS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart__side">
            <div class="cart__side-item">
                <div class="payment">
                    <h1 class="payment__title">
                        Выберите способ оплаты
                    </h1>
                    <div class="payment__box"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CartPage"
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

        &-title {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
            color: #232323;
        }

        &-box {
            margin-top: 35px;
            display: flex;
            flex-direction: column;
            gap: 30px;

            .cart__item {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                // left box
                &-left {
                    width: 170px;
                    min-width: 170px;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-between;
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
                    }
                }

                // center box
                &-center {
                    width: 400px;
                    border-right: 1px solid #E5E5E5;
                    height: 100%;
                    padding-right: 20px;

                    @media (max-width: 1280px) {
                        min-width: 280px;
                        width: 285px;
                        padding-right: 0;
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
                        line-height: 100%;
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
                }

                &-sale {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 100%;
                    color: #333333;
                }

                &-price {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 100%;
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
                    line-height: 100%;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    display: inline-block;
                    width: 120px;
                    text-align: center;
                    border: 1px solid #E01A22
                }

                &-count {
                    height: 42px;
                    width: 120px;
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 28px;
                    color: #B5B5B5;
                    border: 1px solid #B5B5B5;

                    .count {
                        width: 40px;
                        text-align: center;
                        padding: 6px;
                    }

                    button {
                        color: #B5B5B5;
                        padding: 6px;
                        width: 40px;
                        font-size: 24px;

                        @media (max-width: 767px) {
                            background: #FFD600;
                            color: white;
                        }

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
                    gap: 12px;
                    flex-direction: column;

                    .title {
                        background: #FFD600;
                        width: 120px;
                        height: 34px;
                        padding: 10px 6px 8px;
                        font-weight: 400;
                        font-size: 14px;
                        border: 1px solid #FFD600;
                    }

                    .price {
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 100%;
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
                &__title {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: #232323;
                }
                &__box{
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 6px;
                    row-gap: 15px;
                }
            }
        }
    }
}
</style>