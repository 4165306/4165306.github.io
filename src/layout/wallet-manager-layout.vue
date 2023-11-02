<template>
  <div style="width: max-content; margin: auto;">
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      :items="items"
    />
  </div>
  <div style="padding: 20px;">
    <router-view />
  </div>
</template>

<script setup lang="ts">

import {h, ref} from 'vue'
import {MenuProps} from 'ant-design-vue'
import {ArrowLeftOutlined, CaretDownOutlined} from '@ant-design/icons-vue'
import {Menu as AMenu} from 'ant-design-vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const cur = router.currentRoute.value.path.substring(1)
console.log('cur', cur)
const current = ref<string[]>(['exchange-address'])
const items = ref<MenuProps['items']>([
  {
    key: 'home',
    icon: () => h(ArrowLeftOutlined),
    label: h('a', { href: '#/'}, '回首页'),
  },
  {
    key: 'exchange-address',
    label: h('a', { href: '#/exchange-address'}, '交易所地址关联记录'),
  },
  {
    key: 'wallet-balance',
    label: h('a', { href: '#/wallet-balance'}, '钱包资产批量查询'),
  },
  {
    key: 'layer-zero',
    label: h('a', { href: '#/layer-zero'}, 'LayerZero'),
  },
  {
    key: 'stark',
    label: h('span', {}, [
      h('a', { href: '#/stark-balance', style: {marginRight: '5px', color: 'inherit'}}, 'StarkNet工具'),
      h(CaretDownOutlined)
    ]),
    children: [
      {
        key: 'stark-balance',
        label: h('a', { href: '#/stark-balance'}, '余额查询'),
      },
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      }
    ],
  },
  {
    key: 'alipay',
    label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'Navigation Four - Link'),
    title: 'Navigation Four - Link',
  },
])
</script>

<style scoped>

</style>