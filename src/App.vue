<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheSlider from './components/TheSlider.vue'
import ProductCard from './components/ProductCard.vue'
// import BuyProduct from './components/BuyProduct.vue'
import Partners from './components/Partners.vue'

</script>



<template>

  <TheHeader />
  <TheNavbar />
  <TheSlider />

  <section class="product">
    <div class="product__title"><span>Популярные</span> товары</div>
    <ProductCard />
  </section>

  <div class="buy__product">
    <div class="buy__product-title">Успейте <span>купить</span></div>
    <!-- <BuyProduct /> -->
  </div>

  <section class="partners">
    <div class="container">
      <h1 class="partners__title">
        Наши партнеры
      </h1>
      <p class="partners__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eu mauris, varius neque orci neque tortor.
      </p>
      <Partners />
    </div>
  </section>

  <section class="product">
    <div class="product__title"><span>Новые</span> товары</div>
    <ProductCard />
  </section>

  <section class="partners">
    <div class="container">
      <h1 class="partners__title">
        Наши преимущества
      </h1>
      <Partners />
    </div>
  </section>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: 'Montserrat', sans-serif;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  position: relative;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

.container {
  padding: 0px 15px;
  margin: auto;
  // max-width: 1200px;
  // width: 100%;
}

.product {
  margin-top: 120px;

  &__title {
    max-width: 1600px;
    width: 100%;
    margin: auto;
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    color: black;
    white-space: pre;
    margin-bottom: 50px;
  }

  &__title span {
    padding: 9px 5px 9px 100px;
    background: #FFD600;
    color: white;
  }
}

.buy__product {
  margin-top: 100px;

  &-title {
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    color: black;
    white-space: pre;
    margin-bottom: 40px;
  }

  &-title span {
    padding: 9px 160px 9px 5px;
    background: #FFD600;
    color: white;
  }
}

.partners {
  margin-top: 65px;
  padding: 40px 0px 50px 0px;
  text-align: center;
  background: #F5F7FA;

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    color: #232323;
  }

  &__subtitle {
    margin-top: 25px;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #000000;
  }
}
</style>

