import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/ventas',
        component: () => import('../modules/ventas/components/IngresarVentas')
    },
    {
        path: '/productos',
        component: () => import('../modules/productos/components/IngresarProductos')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router