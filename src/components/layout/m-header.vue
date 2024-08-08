<template>
  <header class="ant-layout-header" :style="{
    ...props
  }">
    <slot></slot>
  </header>
</template>

<script lang="ts" setup>
  interface HeaderProps {
    height?: string
    color?: string
  }
  const props = withDefaults(defineProps<HeaderProps>(), {
    height: '60px'
  })
</script>