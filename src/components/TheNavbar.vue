<template>
    <nav>
        <div class="container">
            <div class="navbar">
                <div class="burger__menu">
                    <img src="../assets/img/burgermenu.svg" alt="burger">
                    <p>ВСЕ КАТЕГОРИИ</p>
                </div>
                <ul class="navbar-list">
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
                        <a href="#">Контакты</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Новинки</a>
                    </li>
                    <li>
                        <a href="#">Вакансии</a>
                    </li>
                </ul>
            </div>
            <a href="#" class="favorite">
                <img src="../assets/img/like.svg" alt="like">
                <p>Избранное</p>
                <span class="favorite__count">
                    1
                </span>
            </a>
        </div>
    </nav>
</template>

<style scoped>
nav {
    padding: 20px 0px 22px;
    box-shadow: 0px 0px 10px rgba(41, 121, 255, 0.1);
}

nav .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* ===== navbar ===== */

.burger__menu {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    text-transform: uppercase;
    color: #553280;
    cursor: pointer;
}

.navbar {
    display: flex;
    align-items: center;
    gap: 30px;
}

.navbar-list {
    display: flex;
    align-items: center;
    gap: 40px;
}

.navbar-list a {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #323234;
}

.navbar-list a:hover {
    transition: .3s;
    color: #FFD600;
}

/* ===== favorite ===== */

.favorite {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
}

.favorite p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #232323;
}

.favorite__count {
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #232323;
    background: #FFD600;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    position: absolute;
    top: -2px;
    left: -5px;
}

.favorite:hover .favorite__count{
    color: white;
    transition: .3s;
}
</style>