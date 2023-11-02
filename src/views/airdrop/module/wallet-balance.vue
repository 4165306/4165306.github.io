<template>
  <div>
    <div>
      <a-textarea
        v-model:value="address"
        placeholder="请输入starkNet地址, 一行一个"
        :rows="4"
      />
      <div style="padding-top: 20px; display:grid; grid-template-columns: repeat(auto-fill, 150px)">
        <div>
          <a-button
            type="primary"
            @click="selectByStarkNet"
          >
            查询starknet
          </a-button>
        </div>
        <div>
          <a-button
            type="primary"
            @click="selectByDeBank"
          >
            查询evm
          </a-button>
        </div>
      </div>
    </div>
    <div
      v-if="showPanel"
      style="margin-top: 20px;"
    >
      <a-collapse
        v-model:activeKey="activeKey"
      >
        <a-collapse-panel
          v-for="(item, index) in tables"
          :key="index"
          :header="item.address"
        >
          <a-table
            :data-source="item.table.data"
            :columns="columns"
            :pagination="false"
          >
            <template #bodyCell="{column, record}">
              <div v-if="column.key === 'contract_address'">
                <a
                  :href="`https://starkscan.co/contract/${record.contract_address}`"
                  target="_blank"
                >查看合约</a>
              </div>
            </template>
          </a-table>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div v-if="!showPanel && tables.length > 0">
      <a-table
        :data-source="tables"
        :columns="columns"
        :pagination="false"
        :loading="tableIsLoading"
      >
        <template #bodyCell="{column, record}">
          <div v-if="column.key === 'info' && record.info !== ''">
            <a
              :href="record.info"
              target="_blank"
            >查看详情</a>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Textarea as ATextarea, Collapse as ACollapse, CollapsePanel as ACollapsePanel, Button as AButton, Table as ATable} from 'ant-design-vue'
import {ref} from 'vue'
import axios from 'axios'
import Timer from '@/util/Delay.ts'
const tables = ref<any>([])
const address = ref('')
const columns = ref<any>([])
const activeKey = ref(0)
const showPanel = ref(false)
const tableIsLoading = ref(true)

const selectByDeBank = async () => {
  tableIsLoading.value = true
  showPanel.value = false
  let request_total = 0
  const adrs = address.value.split(/[(\r\n)\r\n]+/)
  columns.value = [
    {title: '地址', dataIndex: 'address', key: 'address'},
    {title: '总额(U)', dataIndex: 'all_balance', key: 'all_balance'},
    {title: '详情', dataIndex: 'info', key: 'info'},
  ]
  const selectBalance = async (address: string) => {
    try {
      const r = await axios.get(`https://api.debank.com/user/search_v3?q=${address}&is_addr=1`, {
        headers: {
          'X-Api-Ver': 'v2'
        }
      })
      console.log('r', r)
      tables.value.push({
        address,
        all_balance: r.data.data.users[0].desc.usd_value.toFixed(2),
        info: `https://debank.com/profile/${address}`
      })
    }catch (e) {
      tables.value.push({
        address,
        all_balance: '获取失败',
        info: `https://debank.com/profile/${address}`
      })
    } finally {
      ++request_total
    }
    if (request_total === adrs.length ) {
      tableIsLoading.value = false
      let all_u = 0
      for (let i = 0; i < tables.value.length; i++) {
        const balance = parseFloat(tables.value[i].all_balance)
        all_u += isNaN(balance) ? 0 : balance
      }
      tables.value.push({
        address: '总计',
        all_balance: all_u,
        info: ''
      })
    }

  }
  for (let i = 0; i < adrs.length; i++) {
    await selectBalance(adrs[i])
    if (i % 3 === 0) {
      await Timer.delay(20000)
    }
  }
}
const selectByStarkNet = () => {
  showPanel.value = true
  columns.value = [
    {title: '币种', dataIndex: 'symbol', key: 'symbol'},
    {title: '金额', dataIndex: 'balance_display', key: 'balance_display'},
    {title: '合约地址', dataIndex: 'contract_address', key: 'contract_address'},
  ]
  const pushTable = () => {
    const adrs = address.value.split(/[(\r\n)\r\n]+/)
    const selectBalance = async (address: string, index: number) => {
      tables.value[index] = {
        address: address,
        table: {
          data: []
        }
      }
      const table = tables.value[index].table
      const r = await axios.post('https://starkscan.stellate.sh', {
        query: 'query ERC20BalancesByOwnerAddressTableQuery(\n' +
            '  $input: ERC20BalancesByOwnerAddressInput!\n' +
            ') {\n' +
            '  erc20BalancesByOwnerAddress(input: $input) {\n' +
            '    id\n' +
            '    ...ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            'fragment ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance on ERC20Balance {\n' +
            '  id\n' +
            '  contract_address\n' +
            '  contract_erc20_identifier\n' +
            '  contract_erc20_contract {\n' +
            '    symbol\n' +
            '    is_social_verified\n' +
            '    icon_url\n' +
            '    id\n' +
            '  }\n' +
            '  balance_display\n' +
            '}',
        variables: {
          input: {
            owner_address: address
          }
        }
      })
      console.log('r', r.data.data.erc20BalancesByOwnerAddress)
      for (let i = 0; i < r.data.data.erc20BalancesByOwnerAddress.length; i ++ ) {
        const v = r.data.data.erc20BalancesByOwnerAddress[i]
        table.data.push({
          symbol: v.contract_erc20_contract.symbol,
          balance_display: v.balance_display,
          contract_address: v.contract_address
        })
      }
      console.log(tables.value)
    }
    for (let i = 0; i < adrs.length; i++) {
      selectBalance(adrs[i], i)
    }
  }
  pushTable()
}
</script>

<style scoped>

</style>