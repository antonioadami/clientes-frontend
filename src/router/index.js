import { createRouter, createWebHistory } from 'vue-router'

import ClientsList from '../components/ClientsList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ClientsList
        }
    ]
})
export default router