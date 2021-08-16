import { createRouter, createWebHashHistory } from 'vue-router'

import ClientsList from '../components/ClientsList.vue'
import RegisterClient from '../components/RegisterClient.vue'

// import vueConfig from '../../vue.config'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: ClientsList
        },
        {
            path: '/register-client',
            component: RegisterClient
        },
        {
            path: '/update-client/:cpf',
            component: RegisterClient
        }
    ]
})
export default router