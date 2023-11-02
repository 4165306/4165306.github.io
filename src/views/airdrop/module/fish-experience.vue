<template>
  <div style="padding: 20px;">
    <div>
      <a-button
        size="large"
        type="primary"
        @click="run"
      >
        开始测试
      </a-button>
      <a-button
        size="large"
        type="primary"
        style="margin-left: 10px;"
        @click="test"
      >
        使用OP网络向我转账0.001ETH测试
      </a-button>
    </div>
    <div style="margin-top: 20px;">
      <a-table
        :columns="columns"
        :data-source="data"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import {Button as AButton, message, Table as ATable} from 'ant-design-vue'
import {onMounted, ref} from 'vue'
import {MetaMaskInpageProvider} from '@metamask/providers'
import {Web3} from 'web3'
import {Numbers} from 'web3-types'

const columns = [
  {title: '网络', dataIndex: 'network', key: 'network'},
  {title: '币种', dataIndex: 'token', key: 'token'},
  {title: '操作', dataIndex: 'actions', key: 'actions'},
]
const data = ref<Array<Record<string, any>>>([
])
let metamask:MetaMaskInpageProvider
onMounted(() => {
  if (typeof window.ethereum === 'undefined') {
    message.info('没有安装metamask')
  } else {
    metamask = window.ethereum as MetaMaskInpageProvider
  }
})

const chains: Record<string, any> = {
  '0x38': {
    chainName: 'BNB',
    rpcUrl: ['https://bsc-dataseed.binance.org/'],
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    tokens: [
      {name: 'USDT', contract: '0x55d398326f99059fF775485246999027B3197955'},
      {name: 'BNB', contract: '0xE1d88E1c2a007eaDC641aBeC5204e434772EeD16'},
    ]
  },
  '0xa': {
    chainName: 'op',
    rpcUrls: ['https://mainnet.optimism.io'],
    nativeCurrency: {
      name: 'Eth',
      symbol: 'ETH',
      decimals: 18,
    },
    tokens: [
      {name: 'USDT', contract: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'},
      {name: 'OP', contract: '0x4200000000000000000000000000000000000042'}
    ]
  },
  '0xa4b1': {
    chainName: 'arb',
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    tokens: [
      {name: 'USDT', contract: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'},
      {name: 'ARB', contract: '0x912CE59144191C1204E64559FE8253a0e49E6548'}
    ]
  },
  '0x89': {
    chainName: 'polygon',
    rpcUrls: ['https://polygon-rpc.com'],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    tokens: [
      {name: 'USDT', contract: '0x0000000000000000000000000000000000001010'},
    ]
  }
}
const delay = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

async function getTokenBalance(
    web3: Web3,
    tokenContractAddress: string,
    accountAddress: string
): Promise<string> {
  try {
    const erc20ABI = [
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        type: 'function',
      },
    ]
    // 创建代币合约实例
    const tokenContract = new web3.eth.Contract(erc20ABI, tokenContractAddress)

    // 查询余额
    // ts-ignore
    const balance = await (tokenContract.methods.balanceOf as any)(accountAddress).call() as Numbers

    // 格式化余额为可读的单位（如 ETH 或代币符号）
    console.log('实际余额', balance, '格式化余额', web3.utils.fromWei(balance, 'ether'))
    return web3.utils.fromWei(balance, 'ether')
  } catch (error) {
    throw new Error(`查询代币余额时出错: ${error}`)
  }
}
const run = async () => {
  try {
    // 请求连接
    const adrs = await metamask.request({
      method: 'eth_requestAccounts'
    }) as string[]
    // 获取用户当前网络
    const currentChain = await metamask.request({method: 'eth_chainId'}) as string
    for (const _k in chains) {
      console.log('即将执行网络', _k)
      if (_k === currentChain) {
        continue
      }
      try {
        await metamask.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: _k }]
        })
        const provider = new Web3(metamask)
        const _currentChain = await metamask.request({method: 'eth_chainId'}) as string
        console.log('当前网络', currentChain)
        const gas = await provider.eth.getBalance(adrs[0])
        data.value.push(
            {network: chains[_currentChain].chainName, token: `${chains[_k].nativeCurrency.symbol}: ${Web3.utils.fromWei(gas, 'ether')}`}
        )
        for (const __k in chains[_k].tokens) {
          const balance = await getTokenBalance(provider, chains[_k].tokens[__k].contract, adrs[0])
          console.log('余额', balance)
          data.value.push(
            {network: chains[_currentChain].chainName, token: `${chains[_k].tokens[__k].name}: ${balance}`}
          )
        }
      }catch (e) {
        console.log('error', e)
      }

      await delay(1000)
    }
  }catch (err: any) {
    message.info(err.message)
  }
}

const test = async () => {
  try {
    await metamask.request({
      method: 'eth_requestAccounts'
    })
  }catch (e) {
    console.log(e)
  }

  await metamask.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xa' }]
  })
  console.log(metamask)
  const provider = new Web3(metamask)
  const from = await provider.eth.getAccounts()
  const gas = await provider.eth.getGasPrice()
  const transactionObject = {
    from: from[0],
    to: '0xF7DDb891F45676712049078c2651646077777777', // 收款地址
    value: Web3.utils.toWei('0.001', 'ether'), // 转账金额（以太）
    gasPrice: gas,
    gas: 21000
  }
  try {
    await provider.eth.sendTransaction(transactionObject)
  }catch(e:any) {
    message.error(e.message)
  }
}
</script>
<style scoped>

</style>