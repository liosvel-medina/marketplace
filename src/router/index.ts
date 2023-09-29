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
                    redirect: { name: 'ProductList' },
                    name: 'Home'
                },
                {
                    path: 'products',
                    component: () => import('../views/products/list/ProductsList.vue'),
                    name: 'ProductList'
                },
                {
                    path: 'products/:id',
                    component: () => import('../views/products/details/ProductDetails.vue'),
                    name: 'ProductDetails'
                },
            ]
        }
    ]
})

export default router