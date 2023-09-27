import { createRouter, createWebHashHistory as createHistory } from 'vue-router'
import MainLayout from '../layouts/main-layout/MainLayout.vue'

const router = createRouter({
    history: createHistory(),
    routes: [
        {
            path: '',
            component: MainLayout,
            children: [
                {
                    path: '',
                    component: () => import('../views/home/Home.vue'),
                    name: 'Home'
                },
                {
                    path: 'web-listview',
                    component: () => import('../views/products/list/ProductsList.vue'),
                    name: 'ProductList'
                },
                {
                    path: 'web-detail',
                    component: () => import('../views/products/details/ProductDetails.vue'),
                    name: 'ProductDetails'
                },
            ]
        }
    ]
})

export default router