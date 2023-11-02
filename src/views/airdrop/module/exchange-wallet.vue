<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
    />
  </div>
</template>

<script setup lang="ts">
import {Table as ATable} from 'ant-design-vue'
const columns = [
  {title: '钱包地址', dataIndex: 'walletAddress', key: 'walletAddress'},
  {title: '交易所地址地址', dataIndex: 'exchangeAddress', key: 'exchangeAddress'},
  {title: '交易所', dataIndex: 'exchange', key: 'exchange'},
]
const data = [
  {key: 1, walletAddress: '0x11', exchangeAddress: '0x22', exchange: '待完成'}
]

</script>

<style scoped>

</style>