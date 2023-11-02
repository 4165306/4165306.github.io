<template>
  <div>
    <div>
      <a-textarea
        v-model:value="address"
        placeholder="请输入starkNet地址, 一行一个"
        :rows="4"
      />
      <div style="padding-top: 20px;">
        <a-button
          type="primary"
          @click="select"
        >
          查询
        </a-button>
      </div>
    </div>
    <div style="margin-top: 20px;">
      <a-collapse>
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
  </div>
</template>

<script setup lang="ts">
import {Textarea as ATextarea, Collapse as ACollapse, CollapsePanel as ACollapsePanel, Button as AButton, Table as ATable} from 'ant-design-vue'
import {ref} from 'vue'
import axios from 'axios'
const tables = ref<any>([])
const address = ref('')
const columns = [
  {title: '币种', dataIndex: 'symbol', key: 'symbol'},
  {title: '金额', dataIndex: 'balance_display', key: 'balance_display'},
  {title: '合约地址', dataIndex: 'contract_address', key: 'contract_address'},
]
const select = () => {
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