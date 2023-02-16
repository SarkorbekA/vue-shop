<template>
    <footer>
        <div class="container footer">
            <div class="footer__item">
                <a class="footer__logo" href="#">
                    <img width="110" src="../assets/img/Logo.svg" alt="logo">
                </a>
                <h1 class="footer__title">
                    Интернет-магазин Крафтовые ручные поделки
                </h1>
            </div>
            <div class="footer__body">
                <div class="footer__nav">
                    <ul class="footer__list">
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Оплата и доставка</a>
                        </li>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Гарантия и возврат</a>
                        </li>
                        <li>
                            <a href="#">Гарантия и возврат</a>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li>
                            <a href="#">Отзывы</a>
                        </li>
                        <li>
                            <a href="#">Новинки</a>
                        </li>
                        <li>
                            <a href="#">Новинки</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li>
                            <a href="#">Отзывы</a>
                        </li>
                        <li>
                            <a href="#">Новинки</a>
                        </li>
                        <li>
                            <a href="#">Новинки</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>

                <div class="footer__payment">
                    <h1 class="footer__payment-title">
                        Cпособы оплаты
                    </h1>
                    <ul class="footer__payment-list">
                        <li>
                            <a href="#">
                                <img src="../assets/img/payment/payme.svg" alt="payme">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/payment/mastercard.svg" alt="master">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/payment/click.svg" alt="click">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/payment/apelsin.svg" alt="apelsin">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/payment/visa.svg" alt="visa">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/payment/uzcard.svg" alt="uzcard">
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__social">
                    <h1 class="footer__social-title">
                        Социальные сети
                    </h1>
                    <ul class="footer__social-list">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-instagram instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-telegram telegram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    padding: 55px 0px 80px 0px;

    .footer {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: 50px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }



        // footer title, left item
        &__item {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: #AFB0B4;
            width: 100%;
            margin-top: 26px;
        }

        // footer body
        &__body {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
            row-gap: 30px;
            column-gap: 10px;
        }


        // navigation
        &__nav {
            display: flex;
            align-items: center;
            column-gap: 30px;
            max-width: 430px;
            justify-content: space-between;
            width: 100%;
            flex-wrap: wrap;
            row-gap: 40px;
        }

        &__list {
            display: flex;
            flex-direction: column;
            gap: 20px;

            a {
                font-weight: 700;
                font-size: 16px;
                                color: #232323;
                transition: .3s;

                &:hover {
                    transition: .2s;
                    color: #FFD600;
                }
            }
        }



        // payment
        &__payment {
            display: flex;
            flex-direction: column;
            gap: 22px;

            @media (max-width: 1024px) {
                padding-top: 30px;
                border-top: 1px solid #232323;
            }


            &-title {
                font-weight: 700;
                font-size: 16px;
                                color: #232323;
            }

            &-list {
                width: 100%;
                max-width: 290px;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;

                li {
                    width: 80px;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    a {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            object-fit: contain;
                            width: 100%;
                        }

                    }

                }
            }
        }

        // social
        &__social {
            display: flex;
            flex-direction: column;
            gap: 22px;

            @media (max-width: 1280px) {
                padding-top: 30px;
                border-top: 1px solid #232323;
            }

            &-title {
                font-weight: 700;
                font-size: 16px;
                                color: #232323;
            }

            &-list {
                display: flex;
                align-items: center;
                gap: 20px;

                li {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #AFB0B4;
                    border-radius: 5px;

                    a {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;

                        &:hover {
                            .facebook {
                                color: #3b5998;
                                transition: .3s;
                            }

                            .telegram {
                                color: #229ED9;
                                transition: .3s;
                            }

                            .instagram {
                                transition: .3s;
                                color: #d6249f;
                            }
                        }

                        i {
                            transition: .3s;
                            font-size: 22px;
                        }
                    }
                }
            }
        }
    }
}
</style>