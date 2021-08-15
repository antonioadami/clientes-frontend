import { createRouter, createWebHistory } from 'vue-router'

import ClientsList from '../components/ClientsList.vue'
import RegisterClient from '../components/RegisterClient.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ClientsList
        },
        {
            path: '/register-client',
            component: RegisterClient
        }
    ]
})
export default router