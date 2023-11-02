import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/wallet',
        component: () => import('@/layout/wallet-manager-layout.vue'),
        children: [
            {
                path: '/wallet-balance',
                component: () => import('@/views/airdrop/module/wallet-balance.vue')
            },
            {
                path: '/layer-zero',
                component: () => import('@/views/airdrop/module/layer-zero.vue')
            },
        ]
    },
    {
        path: '/fish',
        component: () => import('@/views/airdrop/module/fish-experience.vue')
    }
]

export default routes