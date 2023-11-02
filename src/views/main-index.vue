<template>
  <div
    class="full-screen-disable-scroll"
  >
    <div
      class="pos-abs c-center disable-select"
      :style="_menuConfig.center.style"
      style="z-index: 9"
      @click="to(_menuConfig.center.link ?? '')"
    >
      {{ _menuConfig.center.title }}
    </div>
    <div
      v-for="item in _menuConfig.children"
      :key="item.id"
      class="pos-abs c-center disable-select"
      :style="item.style"
      style="z-index: 1;"
      @click="to(item.link)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {nextTick, reactive} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const _centerSize = 200
const _childSize = 150
const screenCenter = {
  x: document.documentElement.clientWidth / 2,
  y: document.documentElement.clientHeight / 2
}
const _childStyle = {
  width: `${_childSize}px`,
  height: `${_childSize}px`,
  top: `${screenCenter.y - _childSize / 2}px`,
  left: `${screenCenter.x - _childSize / 2}px`,
  borderRadius: `${_childSize / 2}px`,
  fontSize: `${_childSize / 7}px`,
  color: '#FFF',
  transform: 'translate(0,0)',
}
const _menuConfig = reactive({
  center: {
    title: '时秒',
    link: null,
    background: '#96F',
    style: {
      width: `${_centerSize}px`,
      height: `${_centerSize}px`,
      top: `${screenCenter.y - _centerSize / 2}px`,
      left: `${screenCenter.x - _centerSize / 2}px`,
      background: '#2979ff',
      borderRadius: `${_centerSize / 2}px`,
      fontSize: `${_centerSize / 5}px`,
      color: '#FFF',
    }
  },
  children: [
    {id: 1,title: 'connext女巫\n查询工具', link: '/connext', background: '#2979ff', color: '#FFF', style: {
      ..._childStyle,
        background: '#96C291'
      }},
    {id: 1,title: '空投资格查询', link: '/quiver', background: '#2979ff', color: '#FFF', style: {
      ..._childStyle,
        background: '#96C291'
      }},
    {id: 2,title: '个人简介', link: '/my', background: '#2979ff', color: '#FFF', style: {
      ..._childStyle,
        background: '#FFDBAA'
      }},
    {id: 3,title: 'web3钱包\n管理工具', link: '/exchange-address', background: '#2979ff', color: '#FFF', style: {
      ..._childStyle,
        background: '#FFB7B7'
      }},
    {id: 3,title: '钓鱼体验', link: '/fish', background: '#2979ff', color: '#FFF', style: {
      ..._childStyle,
        background: '#FFB7B7'
      }},
  ]
})
nextTick(() => {
  __init()
})
const __init = async () => {
  let r = 1
  const draw = async () => {
    const l = _menuConfig.children.length
    for (let j = 0; j < l; j ++ ) {
      const target = {
        x: r * Math.cos(j * (2 * Math.PI) / l),
        y: r * Math.sin(j * (2 * Math.PI) / l)
      }
      _menuConfig.children[j].style.transform = `translate(${target.x}px, ${target.y}px)`
    }
    if (r < 300) {
      r += 10
      requestAnimationFrame(draw)
      return
    }
    inching()
  }
  let direction = 0.3
  const inching = () => {
    if ( r >= 300 ) {
      direction = -0.3
    }
    if (r < 280) {
      direction = 0.3
    }
    r += direction
    const _render = () => {
      const l = _menuConfig.children.length
      for (let j = 0; j < l; j ++ ) {
        const target = {
          x: r * Math.cos(j * (2 * Math.PI) / l),
          y: r * Math.sin(j * (2 * Math.PI) / l)
        }
        _menuConfig.children[j].style.transform = `translate(${target.x}px, ${target.y}px)`
      }
    }
    _render()
    requestAnimationFrame(inching)
  }
  draw()
}

const to = (path: string) => {
  console.log('push', path)
  router.push(path)
}
</script>


<style scoped>
.pos-abs {
  position: absolute;
}
.c-center {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
}
.disable-select {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
  text-align: center;
}
</style>