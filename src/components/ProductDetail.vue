<template>
    <div class="about__product">
        <div class="about__product-content">
            <div class="product__box">
                <div class="product__box-img">
                    <div class="main__img">
                        <img src="../assets/img/about_page/preview.png"
                            alt="main img">
                    </div>
                    <div class="select__img">
                        <div class="select__item active">
                            <img src="../assets/img/about_page/product.png"
                                alt="preview">
                        </div>
                        <div class="select__item">
                            <img src="../assets/img/about_page/product.png"
                                alt="preview">
                        </div>
                        <div class="select__item">
                            <img src="../assets/img/about_page/product.png"
                                alt="preview">
                        </div>
                        <div class="select__item">
                            <img src="../assets/img/about_page/product.png"
                                alt="preview">
                        </div>
                    </div>
                </div>
                <div class="product__box-info">
                    <h1 class="product__name">
                        {{ this.detail.title }}
                    </h1>
                    <div class="product__status">
                        <div class="status__title">
                            <h3>Состояние товара: <span>Новый</span></h3>
                            <div class="delete__btn">
                                <img src="../assets/img/about_page/exit.svg"
                                    alt="exit">
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
                            <li><span>{{ this.detail.about }}</span></li>
                        </ul>
                    </div>
                    <div class="product__recall">
                        <div class="product__stars">
                            <img width="12px"
                                height="12px"
                                src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img width="12px"
                                height="12px"
                                src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img width="12px"
                                height="12px"
                                src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img width="12px"
                                height="12px"
                                src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img width="12px"
                                height="12px"
                                src="../assets/img/about_page/star.svg"
                                alt="star">
                        </div>
                        <h3 class="product__review">245 отзывов</h3>
                    </div>
                </div>
            </div>
            <div class="product__comments">
                <h1 class="comments__title">Отзывы</h1>
                <div class="comments__filter">
                    <h3 class="comments__filter-title">Сортировать:</h3>
                    <div class="comments__filter-box">
                        <span class="active">по дате</span>
                        <span>по оценке</span>
                        <span>по полезности</span>
                    </div>
                </div>
                <div class="comments__box">
                    <div class="comments__person">
                        <div class="comments__person-img">
                            <img width="40"
                                height="40"
                                src="../assets/img/about_page/man.png"
                                alt="man">
                        </div>
                        <div class="comments__person-box">
                            <h3 class="comments__person-name">Артем Орлов</h3>
                            <div class="comments__person-grade">
                                <div class="product__stars">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                </div>
                                <h3>Опыт использварния: <span>несколько месяцев</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="comments__text">
                        <div class="comments__text-content">
                            <h3>Достоинства:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Neque, fringilla in quis amet vitae. Massa tristique est sit nibh nibh odio ultrices
                                purus.
                                Ante scelerisque odio facilisis faucibus diam.</p>
                        </div>
                        <div class="comments__text-content">
                            <h3>Недостатки:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Neque, fringilla in quis amet vitae. Massa tristique est sit nibh nibh odio ultrices
                                purus.
                                Ante scelerisque odio facilisis faucibus diam.</p>
                        </div>
                        <div class="comments__text-content">
                            <h3>Комментарий:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla in quis amet
                                vitae. Massa tristique est sit nibh nibh odio ultrices purus. Ante scelerisque odio
                                facilisis faucibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                                fringilla in quis amet vitae. Massa tristique est sit nibh nibh odio ultrices purus.
                                Ante
                                scelerisque odio facilisis faucibus diam.</p>
                        </div>
                    </div>
                    <div class="comments__add">
                        <div class="comments__add-box">
                            <button class="add__comment">Комментировать</button>
                            <div class="comments__date">7 месяцев назад</div>
                        </div>
                        <div class="comments__like">
                            <div class="like">
                                <img width="12px"
                                    height="auto"
                                    src="../assets/img/about_page/like.svg"
                                    alt="like">
                                <span class="like__count">4</span>
                            </div>
                            <div class="like dislike">
                                <img width="12px"
                                    height="auto"
                                    src="../assets/img/about_page/like.svg"
                                    alt="like">
                                <span class="like__count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comments__box">
                    <div class="comments__person">
                        <div class="comments__person-img">
                            <img width="40"
                                height="40"
                                src="../assets/img/about_page/man.png"
                                alt="man">
                        </div>
                        <div class="comments__person-box">
                            <h3 class="comments__person-name">Артем Орлов</h3>
                            <div class="comments__person-grade">
                                <div class="product__stars">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                    <img width="12px"
                                        height="12px"
                                        src="../assets/img/about_page/star.svg"
                                        alt="star">
                                </div>
                                <h3>Опыт использварния: <span>несколько месяцев</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="comments__text">
                        <div class="comments__text-content">
                            <h3>Достоинства:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Neque, fringilla in quis amet vitae. Massa tristique est sit nibh nibh odio ultrices
                                purus.
                                Ante scelerisque odio facilisis faucibus diam.</p>
                        </div>
                        <div class="comments__text-content">
                            <h3>Недостатки:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Neque, fringilla in quis amet vitae. Massa tristique est sit nibh nibh odio ultrices
                                purus.
                                Ante scelerisque odio facilisis faucibus diam.</p>
                        </div>
                        <div class="comments__text-content">
                            <h3>Комментарий:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla in quis amet
                                vitae. Massa tristique est sit nibh nibh odio ultrices purus. Ante scelerisque odio
                                facilisis faucibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                                fringilla in quis amet vitae. Massa tristique est sit nibh nibh odio ultrices purus.
                                Ante
                                scelerisque odio facilisis faucibus diam.</p>
                        </div>
                    </div>
                    <div class="comments__add">
                        <div class="comments__add-box">
                            <button class="add__comment">Комментировать</button>
                            <div class="comments__date">7 месяцев назад</div>
                        </div>
                        <div class="comments__like">
                            <div class="like">
                                <img width="12px"
                                    height="auto"
                                    src="../assets/img/about_page/like.svg"
                                    alt="like">
                                <span class="like__count">4</span>
                            </div>
                            <div class="like dislike">
                                <img width="12px"
                                    height="auto"
                                    src="../assets/img/about_page/like.svg"
                                    alt="like">
                                <span class="like__count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about__product-side">
            <div class="buy__box">
                <h3 class="buy__box-title">
                    Самая низкая цена
                </h3>
                <h3 class="buy__box-price">{{ this.detail.price }} UZS</h3>
                <div class="buy__box-service">
                    <div class="item">
                        <div class="item__img">
                            <img src="../assets/img/about_page/delivery.svg"
                                alt="delivery image">
                        </div>
                        <p><span href="#">Бесплатно курьером</span>, 2-3 дня</p>
                    </div>
                    <div class="item">
                        <div class="item__img">
                            <img src="../assets/img/about_page/card.svg"
                                alt="delivery image">
                        </div>
                        <p>Картой на сайте/курьеру, наличными</p>
                    </div>
                </div>
                <div class="buy__box-btn">
                    <button class="addCart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>В Корзину</p>
                    </button>
                </div>
                <div class="buy__box-rating">
                    <div class="product__recall">
                        <div class="product__stars">
                            <img src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img src="../assets/img/about_page/star.svg"
                                alt="star">
                            <img src="../assets/img/about_page/white__star.svg"
                                alt="star">
                        </div>
                        <h3 class="product__review">5 отзывов</h3>
                    </div>
                </div>
            </div>
            <div class="accordion">
                <div v-for="(section, index) in sections"
                    :key="index"
                    class="accordion__section">
                    <button :class="section.open ? 'accordion__header-border' : ''"
                        class="accordion__header"
                        @click="toggleSection(index)">
                        <h1 class="accordion-title">{{ section.header }}</h1>
                        <div class="accordion-arrow">
                            <img :class="section.open ? 'accordion-arrow__open' : 'accordion-arrow__close'"
                                src="../assets/img/about_page/arrow.svg"
                                alt="arrow">
                        </div>
                    </button>
                    <div v-if="index == 4"
                        class="accordion__content"
                        :class="section.open ? 'accordion__open' : ''">
                        <div class="accordion__content-related">
                            <div class="item">Товары для дома</div>
                            <div class="item">Декор для дома</div>
                            <div class="item">Свечи и подсвечники</div>
                            <div class="item">Идея новогодного подарка</div>
                        </div>
                    </div>
                    <div v-else-if="index == 3"
                        class="accordion__content"
                        :class="section.open ? 'accordion__open' : ''">
                        <div class="accordion__content-seller">
                            <div class="seller__header">
                                <div class="seller__header-img">
                                    <img src="../assets/img/about_page/seller.svg"
                                        alt="seller image">
                                </div>
                                <div class="seller__header-content">
                                    <h3 class="company-name">Makeawishcandle</h3>
                                    <p class="owner-name">Владелец: <a href="#"> MakeAWishCandleCo</a></p>
                                </div>
                            </div>
                            <button class="seller__btn addCart">
                                <p>Написать сообщение</p>
                            </button>
                            <p class="seller__about">Этот продавец обычно отвечает в течение нескольких часов</p>
                        </div>
                    </div>
                    <div v-else
                        class="accordion__content"
                        :class="section.open ? 'accordion__open' : ''">
                        hello
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetail',
    data() {
        return {
            sections: [
                {
                    header: "Описание",
                    open: false
                },
                {
                    header: "Основные моменты",
                    open: false
                },
                {
                    header: "Доставки и возврат",
                    open: false
                },
                {
                    header: "Познакомьтесь со своими продавцами",
                    open: false
                },
                {
                    header: "Связанные категории и поисковые запросы",
                    open: false
                }
            ]
        };
    },
    methods: {
        toggleSection(index) {
            this.sections.forEach((section, i) => {
                if (i === index) {
                    section.open = !section.open;
                } // else {
                //     section.open = false;
                // }
            });
        }
    },
    computed: {
        detail() {
            return this.$store.state.products.find(el => el.id == this.$route.params.id)
        }
    },
}
</script>

<style lang="scss" scoped>
.accordion {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    &__section {
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(204, 204, 204, 0.25);
        border-radius: 4px;
        padding: 0px 18px;
    }

    // accordion header
    &__header {
        padding: 14px 0px;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid transparent;

        &-border {
            border-bottom: 1px solid #E5E5E5;
        }
    }

    &-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: #454346;
        text-align: left;
        max-width: 240px;
        width: 100%;
    }

    &-arrow {
        min-width: 27px;
        height: 27px;
        border-radius: 50%;
        background: rgba(255, 214, 0, 0.27);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 3s;

        &__open {
            transform: rotate(180deg);
            transition: .3s;
        }

        &__close {
            transform: rotate(0deg);
            transition: .3s;
        }
    }

    // accordion content
    &__content {
        height: 0;
        visibility: hidden;
        opacity: 0;
        transition: .2s;

        &-related {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            .item {
                background: #E5E5E5;
                border-radius: 4px;
                padding: 14px 10px;
                font-weight: 400;
                font-size: 12px;
                color: #232323;
            }
        }

        &-seller {
            .seller__header {
                display: flex;
                align-items: center;
                gap: 16px;

                &-img {
                    border: 1px solid #E5E5E5;
                    width: 64px;
                    height: auto;
                    border-radius: 4px;

                    img {
                        border-radius: 4px;
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                    }
                }

                &-content {
                    .company-name {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 150%;
                        color: #90989F;
                    }

                    .owner-name {
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 150%;
                        color: #232323;

                        a {
                            text-decoration: 1px solid underline #90989F;

                            &:hover {
                                transition: .3s;
                                color: #FFD600;
                            }
                        }
                    }
                }
            }

            .seller__btn {
                padding: 12px 0px;
                display: block;
                width: 100%;
                border: 1px solid #FFD600;
                border-radius: 4px;
                font-weight: 700;
                font-size: 18px;
                text-align: center;
                margin-top: 18px;
                color: white;
                background: #FFD600;
                cursor: pointer;

                &:hover {
                    transition: .3s;
                    background: white;
                    color: #FFD600;
                }

                &:active {
                    box-shadow: 0px 0px 5px 3px rgba(128, 128, 128, 0.5);
                }
            }

            .seller__about {
                font-weight: 400;
                font-size: 12px;
                display: block;
                margin: auto;
                text-align: center;
                color: #90989F;
                max-width: 238px;
                margin-top: 10px;
            }
        }
    }

    &__open {
        transition: .1s linear;
        height: auto;
        visibility: visible;
        opacity: 1;
        padding: 14px 0px;
    }
}

.about__product {
    display: grid;
    grid-template-columns: 7fr 4fr;
    gap: 30px;
    margin-top: 60px;
    color: #232323;

    @media (max-width: 1024px) {
        gap: 15px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 45px;
    }

    .product__recall {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: 24px;

        .product__stars {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .prodcut_review {
            font-weight: 400;
            font-size: 12px;
        }
    }

    &-content {
        width: 100%;

        .product__stars {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .product__box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;

            @media (max-width: 1024px) {
                gap: 15px;
            }

            @media (max-width: 768px) {
                gap: 25px;
            }

            @media (max-width: 576px) {
                grid-template-columns: 1fr;
            }

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
                    gap: 15px;
                    margin-top: 15px;

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
                                color: #232323;
                            }
                        }
                    }
                }
            }
        }

        .product__comments {
            margin-top: 50px;

            .comments__title {
                font-weight: 700;
                font-size: 28px;
            }

            .comments__filter {
                display: flex;
                margin-top: 22px;
                gap: 22px;
                align-items: flex-start;

                &-title {
                    font-weight: 400;
                    font-size: 14px;
                }

                &-box {
                    display: flex;
                    gap: 22px;
                    justify-content: space-evenly;
                    flex-wrap: wrap;

                    span {
                        cursor: pointer;
                        font-weight: 400;
                        font-size: 14px;
                        color: #FFD600;

                        &:hover {
                            color: #232323;
                            transition: .3s;
                        }

                        &.active {
                            color: #232323;

                            &:hover {
                                color: #FFD600;
                                transition: .3s;
                            }
                        }
                    }
                }
            }

            .comments__box {
                .comments__person {
                    margin-top: 30px;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    &-box {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    &-name {
                        font-weight: 700;
                        font-size: 14px;
                    }

                    &-grade {
                        display: flex;
                        gap: 15px;
                        align-items: center;
                        gap: 10px;
                        flex-wrap: wrap;

                        h3 {
                            font-weight: 400;
                            font-size: 12px;
                            color: #999999;
                        }
                    }
                }

                .comments__text {
                    padding-left: 52px;

                    @media (max-width: 576px) {
                        padding: 0;
                    }

                    &-content {
                        margin-bottom: 25px;
                        font-weight: 400;
                        font-size: 14px;

                        h3 {
                            margin-bottom: 15px;
                        }

                        p {
                            font-weight: 300;
                            line-height: 140%;
                        }
                    }
                }

                .comments__add {
                    padding-left: 52px;

                    @media (max-width: 576px) {
                        padding: 0;
                    }

                    margin-top: 28px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    width: 100%;

                    &-box {
                        display: flex;
                        gap: 24px;
                        align-items: center;
                        flex-wrap: wrap;

                        .add__comment {
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 120%;
                        }

                        .comments__date {
                            font-weight: 400;
                            font-size: 13px;
                            color: #90989F
                        }
                    }

                    .comments__like {
                        display: flex;
                        gap: 22px;
                        align-items: center;

                        .like {
                            display: flex;
                            gap: 8px;
                            cursor: pointer;

                            span {
                                font-weight: 400;
                                font-size: 13px;
                            }

                            &.dislike {
                                img {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    &-side {
        width: 100%;

        .buy__box {
            padding: 25px 28px;
            background: white;
            box-shadow: 0px 5px 15px 6px rgba(204, 204, 204, 0.25);
            border-radius: 8px;

            &-title {
                font-weight: 700;
                font-size: 12px;
                text-transform: uppercase;
                color: #90989F;
            }

            &-price {
                margin-top: 10px;
                font-weight: 700;
                font-size: 20px;
                color: #333333;
            }

            &-service {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 14px;
                margin-top: 22px;

                .item {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    &__img {
                        width: 18px;

                        img {
                            object-fit: cover;
                            width: 100%;
                        }
                    }

                    span {
                        color: #553280;

                    }

                    p {
                        font-weight: 400;
                        font-size: 13px;
                        color: #333333;
                    }
                }
            }

            &-btn {
                margin-top: 25px;

                .addCart {
                    width: 100%;
                    border-radius: 4px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    color: white;
                    background: #FFD600;
                    border: 1px solid #FFD600;

                    i {
                        font-size: 18px;
                    }

                    p {
                        font-weight: 700;
                        font-size: 14px;
                    }

                    &:active {
                        box-shadow: 0px 0px 5px 3px rgba(128, 128, 128, 0.5);
                    }

                    &:hover {
                        transition: .3s;
                        background: white;
                        color: #FFD600;
                    }
                }

            }

            &-rating {
                .product__recall {
                    margin-top: 18px;
                }

                .product__review {
                    font-weight: 700;
                    font-size: 13px;
                    color: #90989F;
                }
            }
        }
    }
}
</style>