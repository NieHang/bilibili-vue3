<template>
  <footer class="ant-layout-footer" :style="{height}">
    <slot></slot>
  </footer>
</template>

<script lang="ts" setup>
  interface FooterProps {
    height?: string
  }
  const props = withDefaults(defineProps<FooterProps>(), {
    height: '60px'
  })
</script>

<style lang="stylus">
.ant-layout-footer
  text-align: center
</style>