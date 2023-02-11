<template>
    <div class="about__product">
        <div class="about__product-content">
            <div class="product__box">
                <div class="product__box-img">
                    <div class="main__img">
                        <img src="../assets/img/about_page/preview.png" alt="main img">
                    </div>
                    <div class="select__img">
                        <div class="select__item active">
                            <img src="../assets/img/about_page/product.png" alt="preview">
                        </div>
                        <div class="select__item">
                            <img src="../assets/img/about_page/product.png" alt="preview">
                        </div>
                        <div class="select__item">
                            <img src="../assets/img/about_page/product.png" alt="preview">
                        </div>
                        <div class="select__item">
                            <img src="../assets/img/about_page/product.png" alt="preview">
                        </div>
                    </div>
                </div>
                <div class="product__box-info">
                    <h1 class="product__name">
                        New Year Candle, Christmas Gift Idea
                    </h1>
                    <div class="product__status">
                        <div class="status__title">
                            <h3>Состояние товара: <span>Новый</span></h3>
                            <div class="delete__btn">
                                <img src="../assets/img/about_page/exit.svg" alt="exit">
                            </div>
                        </div>
                        <div class="status__btn">
                            <button class="btn active">Новый</button>
                            <button class="btn">Уцененный</button>
                        </div>
                    </div>
                    <div class="product__facts">
                        <h3>Коротко о товаре</h3>
                        <ul>
                            <li><span>Handmade</span></li>
                            <li><span>Handmade</span></li>
                            <li><span>Handmade</span></li>
                            <li><span>Доступно только 4 штуки, и сейчас это есть у более 20 человек</span></li>
                        </ul>
                    </div>
                    <div class="product__recall">
                        <div class="product__stars">
                            <img width="12px" height="12px" src="../assets/img/about_page/star.svg" alt="star">
                            <img width="12px" height="12px" src="../assets/img/about_page/star.svg" alt="star">
                            <img width="12px" height="12px" src="../assets/img/about_page/star.svg" alt="star">
                            <img width="12px" height="12px" src="../assets/img/about_page/star.svg" alt="star">
                            <img width="12px" height="12px" src="../assets/img/about_page/star.svg" alt="star">
                        </div>
                        <h3 class="product__review">245 отзывов</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="about__product-side"></div>
    </div>
</template>

<style lang="scss" scoped>
.about__product {
    display: grid;
    grid-template-columns: 7fr 4fr;
    gap: 30px;
    margin-top: 60px;
    color: #232323;

    &-content {
        width: 100%;

        .product__box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;

            &-img {
                width: 100%;

                .main__img {
                    width: 100%;

                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                .select__img {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    gap: 25px;
                    margin-top: 20px;

                    .select__item {
                        border: 2px solid transparent;
                        width: 100%;

                        &.active {
                            border: 2px solid #FFD600;
                        }

                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }

            &-info {
                width: 100%;

                .product__name {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                }

                .product__status {
                    margin-top: 20px;

                    .status__title {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        h3 {
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 100%;
                        }

                        .delete__btn {
                            cursor: pointer;
                            width: 17px;
                            height: 17px;
                            border-radius: 50%;

                            &:hover {
                                transition: .3s;
                                background: #FFD600;
                            }
                        }
                    }

                    .status__btn {
                        margin-top: 16px;
                        display: flex;
                        gap: 10px;
                        align-items: center;

                        .btn {
                            padding: 10px;
                            border: 1px solid #CCCCCC;
                            border-radius: 4px;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 17px;

                            &.active {
                                border: 1px solid #FFD600;

                            }
                        }
                    }
                }

                .product__facts {
                    margin-top: 24px;

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
                                line-height: 100%;
                                color: #232323;
                            }
                        }
                    }
                }

                .product__recall {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-top: 34px;

                    .product__stars {
                        display: flex;
                        align-items: center;
                        gap: 4px;
                    }

                    .prodcut_review {
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 100%;
                    }
                }
            }
        }
    }

    &-side {
        width: 100%;
    }
}
</style>