<template>
  <aside class="ant-layout-sider" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'm-sider'
})
interface SiderProps {
  width?: string
}
const { width } = withDefaults(defineProps<SiderProps>(), {
  width: '200px'
})
</script>