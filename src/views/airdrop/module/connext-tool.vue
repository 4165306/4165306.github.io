<template>
  <div style="padding: 20px;">
    <div>
      <a-textarea
        v-model:value="adr"
        placeholder="请输入地址，一行一个"
        :rows="4"
      />
    </div>
    <div style="margin-top: 10px;">
      <a-button
        type="primary"
        @click="search"
      >
        查询
      </a-button>
    </div>
    <div>
      <a-table
        :data-source="dataSource"
        :columns="columns"
      >
        <template #bodyCell="{column, record}">
          <template v-if="column.key === 'link_url'">
            <div
              v-for="(url, i) in record.link_url"
              :key="i"
            >
              <a
                v-if="url.indexOf('http') !== -1"
                :href="url"
                target="_blank"
              >点击查看</a>
            </div>
          </template>
          <template v-if="column.key === 'suspicion_sybil'">
            <a-tag
              v-if="record.suspicion_sybil === 2"
              color="red"
            >
              铁定
            </a-tag>
            <a-tag
              v-if="record.suspicion_sybil === 1"
              color="orange"
            >
              疑似
            </a-tag>
            <a-tag
              v-if="record.suspicion_sybil === 0"
            >
              无
            </a-tag>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Button as AButton, Textarea as ATextarea, Table as ATable, Tag as ATag} from 'ant-design-vue'

import {ref} from 'vue'
import axios from 'axios'

const adr = ref<string>('')

const columns = [
  {title: '地址', dataIndex: 'address', key: 'address'},
  {title: '女巫', dataIndex: 'suspicion_sybil', key: 'suspicion_sybil'},
  {title: '查看地址', dataIndex: 'link_url', key: 'link_url'},
]

const dataSource = ref<Array<Record<string, any>>>([

])

const search = () => {
  const address = adr.value.split(/[(\r\n)\r\n]+/)
  console.log(address)
  dataSource.value = []
  const r = async (search_adr: string) => {
      axios.get(`https://api.github.com/search/issues?q=repo:connext/community-sybil-reports+is:issue+${search_adr}+in:title,body`).then(r => {
        if (r.data.items.length === 0) {
          dataSource.value.push({
            address: search_adr,
            suspicion_sybil: 0,
            link_url: []
          })
        } else {
          let link_url = []
          let is_sybil = 1
          for (let i = 0; i < r.data.items.length; i++) {
            link_url.push(r.data.items[i].html_url)
            if (r.data.items[i].labels.length > 0) {
              for (let j = 0; j < r.data.items[i].labels.length; j ++) {
                is_sybil = r.data.items[i].labels[j].id === 5900186237 ? 2 : 1
              }
            }
          }
          dataSource.value.push({
            address: search_adr,
            suspicion_sybil: is_sybil,
            link_url: link_url
          })
        }
        console.log('dataSource', dataSource.value)
      })
  }
  for (let i = 0; i < address.length; i++) {
    r(address[i])
  }
}
</script>

<style scoped>

</style>