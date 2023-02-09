<template>
    <section class="buy">
        <div class="container">
            <div class="buy__main">
                <img src="../assets/img/products/product2.webp" alt="product">
                <p class="category">
                    Комплект
                </p>
                <p class="info">
                    10-летняя девочка в рубашке,
                </p>
                <p class="price">
                    от 1 000 000 UZS
                </p>
                <div class="time__box">
                    <img src="../assets/img/clock.svg" alt="">
                    <p class="time">01 : 30 : 15</p>
                </div>
                <div class="favorite">
                    <img src="../assets/img/like.svg" alt="like">
                </div>
                <div class="addCart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>В Корзину</p>
                </div>
            </div>
            <ul class="buy__list">
                <li class="product__item">
                    <img src="../assets/img/products/product.webp" alt="product">
                    <p class="category">
                        Комплект
                    </p>
                    <p class="info">
                        10-летняя девочка в рубашке,
                    </p>
                    <p class="price">
                        от 1 000 000 UZS
                    </p>
                    <div class="favorite">
                        <img src="../assets/img/like.svg" alt="like">
                    </div>
                    <div class="addCart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>В Корзину</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.buy {
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    .buy__list {
        width: calc(100% - 500px);
        // display: flex;
        // flex-wrap: wrap;
        // column-gap: 30px;
        // row-gap: 20px;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .product__item {
            text-align: center;
            width: 170px;
            position: relative;
            background: white;
            transition: .3s;
            position: relative;
            cursor: pointer;
            z-index: 1;
            border: 1px solid rgba(0, 0, 0, 0.1);

            img {
                width: 100%;
            }

            .category {
                margin-top: 14px;
                font-weight: 400;
                font-size: 12px;
                line-height: 100%;
                color: #90989F;
            }

            .info {
                margin-top: 8px;
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
                margin-top: 10px;
                margin-bottom: 8px;
            }

            .favorite {
                position: absolute;
                cursor: pointer;
                top: 7px;
                right: 7px;
                width: 30px;
                height: 28px;
                padding: 1px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(201, 201, 201, 0.2);
                visibility: hidden;
                opacity: 0;
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
                opacity: 0;
                display: none;
                visibility: hidden;
                width: 100%;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                color: white;
                background: #FFD600;
                padding: 0px 25px;
                cursor: pointer;
                transform: translateY(30px);
                transition: .6s;

                i {
                    font-size: 18px;
                }

                p {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 100%;
                }

                &:hover {
                    transition: .3s;
                    box-shadow: 0px 0px 5px 1px rgba(128, 128, 128, 0.5);
                    color: black;
                    background: white;
                }
            }

            &:hover {
                z-index: 2;
                transform: scale(1.3);
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
    }
}

.buy__main {
    width: 370px;
    box-shadow: 0px 0px 40px rgba(41, 121, 255, 0.1);
    position: relative;
    padding: 20px 0px 10px 0px;
    background: white;
    text-align: center;

    img {
        width: 80%;
        margin: auto;
    }

    .category {
        margin-top: 5px;
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        color: #90989F;
    }

    .info {
        margin-top: 8px;
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
        margin-bottom: 6px;

        img {
            width: 26px;
            margin: 0;
        }

        p {
            display: inline-block;
            font-weight: 400;
            font-size: 18px;
            line-height: 100%;
            color: #FFD600;
        }
    }

    .price {
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 10px;
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
        // transform: translateY(30px);

        i {
            font-size: 24px;
        }

        p {
            font-weight: 700;
            font-size: 24px;
            line-height: 100%;
        }

        &:hover {
            transition: .3s;
            box-shadow: 0px 0px 5px 1px rgba(128, 128, 128, 0.5);
            color: black;
            background: white;
        }
    }
}
</style>