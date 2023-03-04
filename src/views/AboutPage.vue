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
}</style>