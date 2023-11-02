import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/wallet',
        component: () => import('@/layout/wallet-manager-layout.vue'),
        children: [
            {
                path: '/exchange-address',
                component: () => import('@/views/airdrop/module/exchange-wallet.vue')
            },
            {
                path: '/stark-balance',
                component: () => import('@/views/airdrop/module/stark-balance.vue')
            }
        ]
    },
    {
        path: '/airdrop',
        children: [
            {
                path: '/quiver',
                component: () => import('@/views/airdrop/module/quiver-claim.vue')
            }
        ]
    }
]

export default routes