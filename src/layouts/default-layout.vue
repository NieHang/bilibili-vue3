<template>
  <a-layout class="default-layout">
    <a-layout-header :style="{ height: '155px'}">
      <slot name="layout-header"></slot>
    </a-layout-header>
    <a-layout>
      <a-layout-content>
        <slot name="layout-content"></slot>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.default-layout {
  overflow: hidden;
}
</style>