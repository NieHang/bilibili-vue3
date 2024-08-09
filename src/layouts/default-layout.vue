<template>
  <m-layout>
    <m-header :style="{ height: '155px'}"><slot name="layout-header"></slot></m-header>
    <m-layout>
      <m-content>
        <slot name="layout-content"></slot>
      </m-content>
    </m-layout>
    <m-footer>footer</m-footer>
  </m-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss">
</style>