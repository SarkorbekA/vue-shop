<script setup>

</script>

<template>
  <header>
    <div class="header__top">
      <div class="container">
        <nav class="nav">
          <ul class="nav__menu">
            <li class="nav__items">
              <a aria-label="link" href="#">Контакты</a>
            </li>
            <li class="nav__items">
              <a aria-label="link" href="#">Помощь</a>
            </li>
            <li class="nav__items">
              <a href="#">Услуги и сервис</a>
            </li>
            <li class="nav__items">
              <a aria-label="link" href="#">Стать партнером</a>
            </li>
          </ul>
        </nav>
        <div class="login">
          <div class="login__img">
            <img src="../assets/img/user-logo.svg" alt="user logo">
          </div>
          <div class="login__items">
            <a aria-label="link" href="#">Вход </a>
            <span> | </span>
            <a aria-label="link" href="#"> Регистрация</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <a aria-label="link" href="#" class="logo">
          <img width="100" height="auto" src="../assets/img/Logo.svg" alt="logo">
        </a>
        <div class="search">
          <input type="text" placeholder="Поиск по товарам...">
          <img class="" src="../assets/img/search.svg" alt="search">
        </div>
        <ul class="menu__list">
          <li class="location">
            <div class="menu__list-img">
              <img width="19" height="auto" src="../assets/img/geo.svg" alt="location">
            </div>
            <div class="menu__list-text">
              <a href="#">Работаем по всему Узбекистану</a>
            </div>
          </li>
          <li class="contact">
            <div class="menu__list-img">
              <img width="20" height="auto" src="../assets/img/tel.svg" alt="tel">
            </div>
            <div class="menu__list-text">
              <a aria-label="link" class="menu__list-contact" href="tel:+998991001879">+998 90 000 00 00</a>
              <a aria-label="link" class="menu__list-contact" href="tel:+998991001879">Заказать звонок</a>
            </div>
          </li>
          <li class="cart">
            <div class="menu__list-img">
              <img width="22" height="auto" src="../assets/img/shop.svg" alt="shop cart">
            </div>
            <div class="menu__list-text">
              <a aria-label="link" class="menu__list-cart" href="#">Корзинка</a>
              <a aria-label="link" class="menu__list-count" href="#">
                {{ $store.state.orderCount }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      cardCount: 0,
    }
  },
  methods: {
    addCart() {
      this.cardCount++
    },
  }
}
</script>

<style lang="scss" scoped>
.header__top {
  border-bottom: 1px solid #E5E5E5;
}

.logo{
  width: 100px;
  height: auto;
}

.header__top .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 15px 12px;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 18px;
}

.nav {
  @media (max-width: 768px) {
    width: 100%;
  }
}

.nav__menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 35px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 15px;
  }
}


.nav__items a {
  font-weight: 400;
  font-size: 12px;
    color: #90989F;
  transition: .3s;
}

.nav__items a:hover {
  color: #FFD600;
  transition: .3s;
}

.login {
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 10px 0px;
    background: #e5e5e560;
  }
}

.login__items>* {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ADAEB0;
  transition: .3s;
}

.login__items a:hover {
  color: #FFD600;
  transition: .3s;
}

.login__img img {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  padding: 22px 0px;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
}

.search {
  width: 100%;
  max-width: 370px;
  background: #F9F9F9;
  border-radius: 4px;
  padding: 14px 34px 16px 21px;
  position: relative;
  height: 46px;

  @media (max-width: 576px) {
    max-width: 100%;
  }
}

.search input {
  height: 46px;
  top: 0;
  left: 0;
  padding: 0px 36px 0px 14px;
  z-index: 1;
  width: 100%;
  position: absolute;
  background: transparent;
  border-radius: 4px;
}

.search input:focus {
  outline: 1px solid #FFD600;
  box-shadow: 0px 0px 5px 1px #FFD600;
}

.search img {
  z-index: 0;
  position: absolute;
  top: 16px;
  right: 16px;
}

.menu__list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 36px;
  flex-wrap: wrap;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
}

.menu__list li {
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
  }
}

.menu__list-text {
  cursor: pointer;
}

.menu__list-text>* {
  display: block;
  max-width: 140px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  text-align: right;
}

.menu__list-text a:hover {
  color: #FFD600;
  transition: .3s;
}

.menu__list-contact {
  text-align: end;
  display: block;
}

.menu__list-contact:last-child {
  text-decoration-line: underline;
  text-decoration-color: #90989F;
}

.menu__list-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  background: rgba(255, 214, 0, 0.1);
  border-radius: 50%;
}

.menu__list-count {
  width: 14px;
  height: 14px;
  padding: 1px;
  background: #FFD600;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: auto;
  justify-content: center;
}

.menu__list-text:last-child:hover .menu__list-count {
  color: white !important;
  transition: .3s;
}

.menu__list-text:last-child:hover .menu__list-cart {
  color: #FFD600;
  transition: .3s;
}
</style>
