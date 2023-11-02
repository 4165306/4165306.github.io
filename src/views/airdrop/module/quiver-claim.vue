<script setup lang="ts">
import {Textarea as ATextarea, Button as AButton, Table as ATable, Row as ARow, Col as ACol} from 'ant-design-vue'
import {ref} from 'vue'
import axios from 'axios'
const columns = [
  {title: '钱包地址', dataIndex: 'walletAddress', key: 'walletAddress'},
  {title: '结果', dataIndex: 'status', key: 'status'},
]

const address = ref<string>('')

const result = ref<any>([])
const quiver = () => {
  const adrs = address.value.split(/[(\r\n)\r\n]+/)
  result.value = []
  adrs.forEach(item => {
    axios.get(`https://www.pilotdog.tech/api/get_eligible?address=${item}`).then(r => {
      console.log(r)
      result.value.push({
        walletAddress: item,
        status: r.data.data.claimable_amount
      })
    })
  })
}
const pyth = () => {
  const adrs = address.value.split(/[(\r\n)\r\n]+/)
  result.value = []
  adrs.forEach(item => {
    axios.get(`https://airdrop.pyth.network/api/grant/v1/evm_breakdown?identity=${item}`).then(r => {
      console.log(r)
      result.value.push({
        walletAddress: item,
        status: r.data
      })
    }).catch(r => {
      console.log('进入catch', r)
      result.value.push({
        walletAddress: item,
        status: r.response.data.error.replace(item, '')
      })
    })
  })
}
const roci = () => {
  const adrs = address.value.split(/[(\r\n)\r\n]+/)
  result.value = []
  adrs.forEach(item => {
    axios.post('https://hibxjljwpk.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/proof', {
      'address':item,
      'uuid':'34e6d714-37c0-46a7-983d-36fc1f660a58'
    }).then(r => {
      console.log(r)
      result.value.push({
        walletAddress: item,
        status: JSON.stringify(r.data)
      })
    }).catch(r => {
      console.log('进入catch', r)
      result.value.push({
        walletAddress: item,
        status: r.response.data.error.replace(item, '')
      })
    })
  })
}
</script>

<template>
  <div style="padding: 10px;">
    <div>
      <a-textarea
        v-model:value="address"
        placeholder="一行一个地址"
      />
    </div>
    <div style="margin-top: 10px;">
      <a-row :gutter="[24,24]">
        <a-col>
          <a-button
            type="primary"
            @click="quiver"
          >
            quiver
          </a-button>
        </a-col>
        <a-col>
          <a-button
            type="primary"
            @click="pyth"
          >
            pyth
          </a-button>
        </a-col>
        <a-col>
          <a-button
            type="primary"
            @click="roci"
          >
            Hedgey(ROCI)
          </a-button>
        </a-col>
      </a-row>
    </div>
  </div>
  <div>
    <a-table
      :columns="columns"
      :data-source="result"
    />
  </div>
</template>

<style scoped>

</style>