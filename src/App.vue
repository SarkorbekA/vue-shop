<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheSlider from './components/TheSlider.vue'
import Products from './components/Products.vue'
// import BuyProduct from './components/BuyProduct.vue'
import Partners from './components/Partners.vue'
import Advantage from './components/TheAdvantage.vue'
import Footer from './components/TheFooter.vue'


// Contact page
import Contacts from './components/Contacts.vue'

</script>



<template>

  <TheHeader />
  <TheNavbar />
  <TheSlider />

  <section class="product">
    <div class="product__title"><span>Популярные</span> товары</div>
    <Products />
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
    <Products />
  </section>

  <section class="partners">
    <div class="container">
      <h1 class="partners__title">
        Наши преимущества
      </h1>
      <Advantage />
    </div>
  </section>

  <Footer />


  <div class="contact__page">
    <!-- <TheHeader />
    <TheNavbar /> -->
    <div class="contact container">
      <div class="page__router">
        <a href="#">Главная</a>
        <span> / Каталог</span>
      </div>
      <Contacts />
    </div>
    <!-- <Footer /> -->
  </div>


</template>

<style lang="scss">
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

    @media (max-width: 576px) {
      font-size: 22px;
    }
  }

  &__title span {
    padding: 9px 5px 9px 100px;
    background: #FFD600;
    color: white;

    @media (max-width: 576px) {
      padding: 9px 5px 9px 50px;
    }
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

    @media (max-width: 576px) {
      font-size: 22px;
    }
  }

  &-title span {
    padding: 9px 160px 9px 5px;
    background: #FFD600;
    color: white;

    @media (max-width: 576px) {
      padding: 9px 70px 9px 5px;
    }
  }
}

.partners {
  margin-top: 65px;
  padding: 40px 0px 50px 0px;
  text-align: center;
  background: #F5F7FA;

  @media (max-width: 576px) {
    padding: 30px 0px 20px 0px;
  }

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


.contact__page {
  margin-top: 300px;

  .contact {
    color: #232323;
    .page__router {
      padding-top: 34px;

      a:hover {
        transition: .3s;
        color: #FFD600;
      }

      span {
        color: #90989F;
      }

      &>* {
        font-weight: 600;
        font-size: 14px;
        line-height: 13px;
        color: #232323;
      }
    }
  }
}
</style>

