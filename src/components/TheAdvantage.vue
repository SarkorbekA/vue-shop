<template>
    <section class="advantage">
        <div class="container">
            <div class="card">
                <div class="card__img">
                    <img width="60" height="auto" src="../assets/img/card.svg" alt="card">
                </div>
                <h1 class="card__title">
                    Моментальная ОПЛАТА
                    БЕЗ РЕГИСТРАЦИИ и комисии
                </h1>
                <p class="card__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="card">
                <div class="card__img">
                    <img width="60" height="auto" src="../assets/img/card.svg" alt="card">
                </div>
                <h1 class="card__title">
                    Моментальная ОПЛАТА
                    БЕЗ РЕГИСТРАЦИИ и комисии
                </h1>
                <p class="card__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="card">
                <div class="card__img">
                    <img width="60" height="auto" src="../assets/img/card.svg" alt="card">
                </div>
                <h1 class="card__title">
                    Моментальная ОПЛАТА
                    БЕЗ РЕГИСТРАЦИИ и комисии
                </h1>
                <p class="card__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="card">
                <div class="card__img">
                    <img width="60" height="auto" src="../assets/img/card.svg" alt="card">
                </div>
                <h1 class="card__title">
                    Моментальная ОПЛАТА
                    БЕЗ РЕГИСТРАЦИИ и комисии
                </h1>
                <p class="card__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.advantage {
    margin-top: 40px;
    padding-bottom: 20px;

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        gap: 30px;

        @media (max-width: 1280px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    .card {
        box-shadow: 0px 2px 20px rgba(226, 226, 226, 0.25);
        background: white;
        width: 100%;
        padding: 25px 15px;
        margin: auto;

        @media (max-width: 768px) {
            padding: 25px;

            max-width: 400px;
        }

        &__img {
            width: 60px;
            margin: auto;

            img {
                width: 100%;
                object-fit: contain;
                height: auto;
            }
        }

        &__title {
            margin-top: 12px;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            text-align: center;
            text-transform: uppercase;
            color: #454346;
        }

        &__subtitle {
            margin-top: 6px;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            text-align: center;
            color: #000000;
        }
    }
}
</style>