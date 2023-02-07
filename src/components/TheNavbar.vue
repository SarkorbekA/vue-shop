<template>
    <nav>
        <div class="container">
            <div class="menu">
                <div class="burger__menu">
                    <img src="../assets/img/burgermenu.svg" alt="burger">
                    <p>ВСЕ КАТЕГОРИИ</p>
                </div>
                <a href="#" class="favorite">
                    <img width="20" height="auto" src="../assets/img/like.svg" alt="like">
                    <p>Избранное</p>
                    <span class="favorite__count">
                        1
                    </span>
                </a>
            </div>
            <!-- <div class="navbar"> -->
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
            <a href="#" class="favorite">
                <img width="20" height="auto" src="../assets/img/like.svg" alt="like">
                <p>Избранное</p>
                <span class="favorite__count">
                    1
                </span>
            </a>
            <!-- </div> -->

        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    padding: 20px 0px 22px;
    box-shadow: 0px 0px 10px rgba(41, 121, 255, 0.1);
}

nav .container {
    display: grid;
    grid-template-columns: 130px 1fr 112px;
    gap: 20px;

    /* align-items: center;
    justify-content: space-between; */
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
}

/* ===== navbar ===== */

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .favorite {
        display: none;

        @media (max-width: 1024px) {
            display: flex !important;
        }
    }
}

.burger__menu {
    display: flex;
    align-items: center;
    height: 28px;
    gap: 8px;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    text-transform: uppercase;
    color: #553280;
    cursor: pointer;
}

// .navbar {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 30px;

//     @media (max-width: 1280px) {
//         flex-direction: column-reverse;
//         align-items: flex-end;
//     }
// }

.navbar-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 1280px) {
        gap: 20px;
    }

    @media (max-width: 1024px) {
        justify-content: space-between;
    }

    a {
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        white-space: nowrap;
        color: #323234;

        &:hover {
            transition: .3s;
            color: #FFD600;
        }
    }
}

/* ===== favorite ===== */

.favorite {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    position: relative;
    width: fit-content;

    @media (max-width: 1024px) {
        display: none;
    }
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
    left: -6px;
}

.favorite:hover .favorite__count {
    color: white;
    transition: .3s;
}
</style>