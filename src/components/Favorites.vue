<template>
    <section class="favorites">
        <h1 class="favorites__title">Избранное</h1>
        <div class="favorites__filter">
            <div class="favorites__filter-sort">
                <h1 class="title">Сортировать:</h1>
                <div class="items">
                    <h3 class="item active">по популярности</h3>
                    <h3 class="item">по цене</h3>
                    <h3 class="item">по рейтингу к цене</h3>
                    <h3 class="item">по размеру скидки</h3>
                    <label for="inMyRegion">
                        <input type="checkbox" name="inMyRegion" id="inMyRegion">
                        Предложения в моём регионе
                    </label>
                </div>
            </div>
            <div class="favorites__filter-count">
                <label :class="selectAll == true ? 'active' : ''" class="filter__all">
                    <input @change="filterList()" type="checkbox" name="all__product" id="all__product">
                    Все товары
                </label>
                <div class="filter__btn">
                    <button class="filter__btn-discount">
                        <img src="../assets/img/fav__page/discount.svg" alt="discount">
                    </button>
                    <button class="filter__btn-discount">
                        <img src="../assets/img/fav__page/delete.svg" alt="delete">
                    </button>
                </div>
            </div>
        </div>
        <div class="favorites__body">
            <div class="favorites__body-content">
                <div :class="selectedItem == true ? 'active' : ''" class="cart__item">
                    <input v-model="checked" @change="selectItem()" type="checkbox">
                    <div class="cart__item-content">
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
                <div class="cart__item">
                    <input type="checkbox">
                    <div class="cart__item-content">
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
            <div class="favorites__body-side">
                <div class="side__item">
                    <div class="payment">
                        <h1 class="payment__title">
                            Выберите способ оплаты
                        </h1>
                        <div class="payment__info">
                            <div class="payment__info-item">
                                <div class="payment__info-left">
                                    Товары <span></span>
                                </div>
                                <div class="payment__info-price">4</div>
                            </div>
                            <div class="payment__info-item">
                                <div class="payment__info-left">
                                    Общая стоимость <span></span>
                                </div>
                                <div class="payment__info-price">10 655 940 сум</div>
                            </div>
                            <div class="payment__info-item">
                                <div class="payment__info-left">
                                    Скидки на товары <span></span>
                                </div>
                                <div class="payment__info-price">213 118 сум</div>
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
                            <button>Перенести всё в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
</template>

<script>
export default {
    name: 'Favorites',
    data() {
        return {
            selectAll: false,
            selectedItem: false,
            checked: false
        }
    },
    methods: {
        filterList() {
            this.selectAll = !this.selectAll
            this.selectedItem = !this.selectedItem
            this.checked = !this.checked
        },
        selectItem() {
            this.selectedItem = !this.selectedItem
        }
    }
}
</script>

<style lang="scss" scoped>
.favorites {
    margin-top: 40px;
    color: #232323;

    &__title {
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
    }

    &__filter {
        margin-top: 26px;

        &-sort {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-weight: 500;
            font-size: 16px;

            .title {
                color: #2B2B2B;
                font-weight: 700;
            }

            .items {
                display: flex;
                flex-wrap: wrap;
                gap: 22px;
                align-items: center;

                .item {
                    cursor: pointer;
                    color: #553280;

                    &:hover {
                        transition: .3s;
                        color: #000000;
                    }

                    &.active {
                        color: #404040;
                    }
                }

                label {
                    cursor: pointer;
                    font-weight: 400;
                    color: #000000;
                }
            }
        }

        &-count {
            margin-top: 30px;
            display: flex;
            gap: 30px;

            .filter__all {
                cursor: pointer;
                display: flex;
                align-items: center;
                height: 42px;
                background: #F9F9F9;
                border: 1px solid #bbbbbb;
                border-radius: 2px;
                padding: 12px 15px;
                gap: 10px;

                &.active {
                    border: 1px solid #FFD600;
                }
            }

            .filter__btn {
                display: flex;
                gap: 14px;

                button {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #FFFFFF;
                    border: 1px solid #AFB0B4;
                    border-radius: 2px;

                    &.active {
                        border: 1px solid #FFD600;
                    }
                }
            }
        }
    }

    &__body {
        display: grid;
        grid-template-columns: 10fr 4fr;
        gap: 20px;
        margin-top: 24px;
        color: #232323;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }

        &-content {
            display: flex;
            flex-direction: column;
            gap: 25px;

            .cart__item {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                padding: 20px 10px;
                border: 1px solid #AFB0B4;
                border-radius: 6px;

                &.active {
                    border: 1px solid #FFD600;
                }


                // content
                &-content {
                    display: flex;
                    flex-wrap: wrap;
                    // justify-content: space-between;
                    row-gap: 20px;
                    column-gap: 15px;
                    // max-height: 230px;
                }

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
                        width: 280px;
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

        &-side {
            width: 100%;

            .side__item {
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
                        padding: 15px 0px 15px 10px;

                        &-item {
                            display: flex;
                            max-width: 600px;
                        }


                        &-left {
                            font-size: 14px;
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
}
</style>