<script setup>
import TheAdvantage from '../components/TheAdvantage.vue'
</script>

<script>
export default {
    name: "AboutPage",
    component: {
        TheAdvantage,
    }
}
</script>

<template>
    <section class="about__page">
        <div class="container content">
            <div class="page__router">
                <a @click="$router.push('/')"
                    href="#">Главная</a>
                <span> / </span>
                <span>О нас</span>
            </div>
            <section class="info">
                <div class="info__box">
                    <div class="info__article">
                        <h1 class="info__title">О нас</h1>
                        <p class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ipsum consectetur quisque ultrices
                            sed
                            elementum. At ut amet venenatis enim erat. Nec vitae ultrices magna id felis laoreet
                            pellentesque
                            nunc. Vivamus mattis ullamcorper quis consectetur. Maecenas massa erat consequat odio purus
                            massa.
                            Tincidunt semper adipiscing lectus dui et odio faucibus lectus.
                        </p>
                        <p class="text">
                            Aenean fringilla ut pellentesque ultricies dictum. Maecenas ullamcorper ipsum eget morbi leo leo
                            lectus. Egestas lacus et aliquam ullamcorper id vulputate mauris tortor nullam. Mi nec libero
                            orci,
                            quisque at. Orci eleifend netus urna fusce a amet neque. Fermentum lacinia dictum.
                        </p>
                    </div>
                    <div class="info__img">
                        <img src="../assets/img/about/firstw.webp"
                            alt="about img">
                        <div class="right__item"></div>
                    </div>
                </div>
            </section>
            <TheAdvantage />
        </div>
        <section class="features">
            <div class="container">
                <div class="features__img">
                    <img src="../assets/img/about/second.webp"
                        alt="computer">
                    <div class="left__item"></div>
                </div>
                <div class="features__box">
                    <h1 class="title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, viverra nisi scelerisque
                        vestibulum mattis. Lacus scelerisque magna.
                    </h1>
                    <ul class="features__list">
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Duis nisi augue nulla sed.</p>
                        </li>
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Nisl quis velit odio amet mi in risus eu non.</p>
                        </li>
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Leo lacus lectus aliquet convallis sit.</p>
                        </li>
                        <li class="features__list-item">
                            <img src="../assets/img/about/check.svg"
                                alt="check item">
                            <p>Ornare lectus sodales nunc aenean.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="info__second">
            <div class="container">
                <div class="info__img">
                    <img src="../assets/img/about/firstw.webp"
                        alt="about img">
                </div>
                <div class="info__article">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ipsum consectetur quisque ultrices sed
                        elementum. At ut amet venenatis enim erat. Nec vitae ultrices magna id felis laoreet pellentesque
                        nunc.
                        Vivamus mattis ullamcorper quis consectetur. Maecenas massa erat consequat odio purus massa.
                        Tincidunt
                        semper adipiscing lectus dui et odio faucibus lectus.
                    </p>
                    <p class="text">
                        Aenean fringilla ut pellentesque ultricies dictum. Maecenas ullamcorper ipsum eget morbi leo leo
                        lectus.
                        Egestas lacus et aliquam ullamcorper id vulputate mauris tortor nullam. Mi nec libero orci, quisque
                        at.
                        Orci eleifend netus urna fusce a amet neque. Fermentum lacinia dictum.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about__page {
    overflow-x: hidden;

    .info {
        padding: 20px 0px 60px;

        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
            color: #232323;
        }

        &__box {
            display: flex;
            align-items: center;
            gap: 30px;
            justify-content: space-between;

            @media (max-width: 1024px) {
                flex-wrap: wrap;
                gap: 65px;
            }
        }

        &__article {
            width: 50%;

            @media (max-width: 1024px) {
                width: 100%;
            }

            .text {
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #000000;
                margin-top: 20px;
            }
        }

        &__img {
            width: 40%;
            position: relative;

            @media (max-width: 1024px) {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                width: 70%;
                height: 100%;
                margin: auto;
                object-fit: contain;
                transform: scale(1.2);

                @media (max-width: 1280px) {
                    width: 100%;
                }

                @media (max-width: 1024px) {
                    width: 60%;
                }

                @media (max-width: 576px) {
                    width: 80%;
                }
            }

            .right__item {
                background: linear-gradient(270deg, #FFD600 32.95%, rgba(255, 214, 0, 0) 81.61%);
                height: 95px;
                width: 70%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: -35%;
                z-index: -1;

                @media (max-width: 1024px) {
                    right: -20%;
                }
            }
        }
    }
}

.info__second {
    margin-top: 55px;
    padding: 30px 0px 60px;

    .container {
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: space-between;

        @media (max-width: 1024px) {
            flex-wrap: wrap;
            gap: 65px;
        }

        .text {
            @media (min-width: 1280px) {
                font-size: 22px;
            }
        }
    }

}

.features {
    padding: 50px 0px 70px;
    background: #F5F7FA;

    .container {
        display: flex;
        align-items: center;
        gap: 30px;

        @media (max-width: 1024px) {
            flex-direction: column;
        }
    }

    &__img {
        width: 50%;
        position: relative;

        @media (max-width: 1280px) {
            width: 55%;
        }

        @media (max-width: 1024px) {
            width: 100%;
        }

        img {
            position: relative;
            z-index: 2;
            width: 100%;
            object-fit: contain;
        }

        .left__item {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 95px;
            width: 100%;
            left: -40%;
            z-index: 1;
            background: #FFD600;
        }
    }

    &__box {
        width: 50%;

        @media (max-width: 1280px) {
            width: 45%;
        }

        @media (max-width: 1024px) {
            width: 100%;
        }

        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            letter-spacing: 0.03em;
            color: #232323;
        }
    }

    &__list {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item {
            display: flex;
            gap: 18px;
            align-items: center;

            p {
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0.03em;
                color: #232323;
            }
        }
    }
}
</style>