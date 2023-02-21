import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DetailPage from '../views/DetailPage.vue'
import CartPage from '../views/CartPage.vue'
import ContactPage from '../views/ContactPage.vue'
import FavoritePage from '../views/FavoritePage.vue'
import CatalogPage from '../views/CatalogPage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/details',
            name: 'details',
            component: DetailPage
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: FavoritePage
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogPage
        }
    ]
})

export default router