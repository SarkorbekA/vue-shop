<script setup>
import TheAdvantage from '../components/TheAdvantage.vue'
</script>

<script>
export default {
    name: "PayPage",
    component: {
        TheAdvantage,
    }
}
</script>

<template>
    <section class="pay__page">
        <div class="container content">
            <div class="page__router">
                <a @click="$router.push('/')"
                    href="#">Главная</a>
                <span> / </span>
                <span>Оплата и доставка</span>
            </div>
            <div class="about__pay">
                <div class="info">
                    <h1 class="title">
                        Оплата и доставка
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ipsum consectetur quisque ultrices sed
                        elementum. At ut amet venenatis enim erat. Nec vitae ultrices magna id felis laoreet pellentesque
                        nunc. Vivamus mattis ullamcorper quis consectetur. Maecenas massa erat consequat odio purus massa.
                        Tincidunt semper adipiscing lectus dui et odio faucibus lectus.

                    </p>
                    <p>
                        Aenean fringilla ut pellentesque ultricies dictum. Maecenas ullamcorper ipsum eget morbi leo leo
                        lectus. Egestas lacus et aliquam ullamcorper id vulputate mauris tortor nullam. Mi nec libero orci,
                        quisque at. Orci eleifend netus urna fusce a amet neque. Fermentum lacinia dictum.
                    </p>
                </div>
                <div class="img">
                    <img src="../assets/img/deliver/deliverright.webp"
                        alt="deliver">
                    <div class="item"></div>
                </div>
            </div>
            <TheAdvantage />
            <div class="about__pay-two">
                <div class="img">
                    <img src="../assets/img/deliver/deliverleft.webp"
                        alt="">
                </div>
                <div class="info">
                    <div class="title">Оплата и <span> доставка</span></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ipsum consectetur quisque ultrices sed
                        elementum. At ut amet venenatis enim erat. Nec vitae ultrices magna id felis laoreet pellentesque
                        nunc. Vivamus mattis ullamcorper quis consectetur. Maecenas massa erat consequat odio purus massa.
                        Tincidunt semper adipiscing lectus dui et odio faucibus lectus.

                    </p>
                    <p>
                        Aenean fringilla ut pellentesque ultricies dictum. Maecenas ullamcorper ipsum eget morbi leo leo
                        lectus. Egestas lacus et aliquam ullamcorper id vulputate mauris tortor nullam. Mi nec libero orci,
                        quisque at. Orci eleifend netus urna fusce a amet neque. Fermentum lacinia dictum.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.pay__page {
    overflow-x: hidden;
}


.about__pay,
.about__pay-two {
    .info {
        width: 45%;

        @media (max-width: 1280px) {
            width: 50%;
        }

        @media (max-width: 1024px) {
            width: 100%;
        }
    }

    .img {
        position: relative;
        width: 40%;

        @media (max-width: 1024px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #000000;
        margin-top: 15px;
    }
}

.about__pay {
    padding: 40px 0px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        row-gap: 40px;
    }

    .info {
        .title {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
            color: #232323;

            @media (max-width: 1024px) {
                font-size: 28px;
            }
        }
    }

    .img {

        img {
            transform: scale(1.2);

            @media (max-width: 1024px) {
                transform: scale(1);
            }
        }

        .item {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #FFD600;
            height: 95px;
            width: 100%;
            z-index: -1;
            right: -30%;
        }
    }
}

.about__pay-two {
    padding: 40px 0px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        row-gap: 40px;
    }

    .img {
        img {
            transform: scale(1.3);

            @media (max-width: 1024px) {
                transform: scale(1);
            }
        }
    }

    .info {
        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            color: #232323;

            span {
                color: white;
                background: #FFD600;
                padding: 8px 70px 8px 10px;
            }
        }

        p {
            margin-top: 20px;
        }
    }
}
</style>