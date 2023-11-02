import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/connext',
        component: () => import('@/views/airdrop/module/connext-tool.vue')
    }
]

export default routes