import HomeRoutes from './modules/home.ts'
import AirDrop from './modules/airdrop.ts'
import {createRouter, createWebHashHistory} from 'vue-router'
import ConnextRouter from './modules/connext.ts'
import WalletRouter from './modules/wallet.ts'

const routes = [...HomeRoutes, ...AirDrop, ...ConnextRouter, ...WalletRouter]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router