<template>
  <footer class="ant-layout-footer" :style="{height}">
    <slot></slot>
  </footer>
</template>

<script lang="ts" setup>
interface FooterProps {
  height?: string
}
const { height } = withDefaults(defineProps<FooterProps>(), {
  height: '60px'
})
</script>

<style lang="scss">
</style>