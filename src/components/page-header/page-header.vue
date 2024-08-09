<template>
  <div class="bili-header">
    <div class="bili-header-bar">
      <div class="left-entry">
        <div v-for="link in links" :key="link.name">
          <a :href="link.url" class="entry-title">{{ link.name }}</a>
        </div>
      </div>
      <div class="right-entry">
        <div v-for="rl in rightLinks" :key="rl.name">
          <a :href="rl.url" target="_blank">{{ rl.name }}</a>
        </div>
        <a-button type="text" :icon="h(UploadOutlined)" class="upload-entry">Upload</a-button>
      </div>
    </div>
    <div class="bili-header-banner">
      <img class="banner" src="../../assets/header-bg.webp">
    </div>
    <div class="bili-header-logo">
      <img class="logo" src="../../assets/header-logo.png" alt="bili bili">
    </div>
  </div>
</template>

<script lang="ts" setup>
import {h} from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'

const links = ref([
  {name: 'Index', url: ''},
  {name: 'Videos', url: ''},
  {name: 'Live', url: ''},
  {name: 'Game Center', url: ''},
])

const rightLinks = ref([
  {name: 'Creation', url: ''},
  {name: 'Sign out', url: ''},
])
</script>

<style lang="scss">
@import '@/styles/mixin.scss';

@include b(header) {
  position: relative;
  width: 100%;
  min-height: 64px;
  background-color: #fff;

  @include sub(bar) {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 64px;
    z-index: 1;

    a {
      color: #fff;
      text-decoration: none;
    }

    .left-entry, .right-entry {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 0;
    }

    .upload-entry {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 34px;
      border-radius: 8px;
      background: #fb7299;
      color: #fff;
      font-size: 14px;
      line-height: 20px;
    }
  }

  @include sub(banner) {
    position: relative;
    display: flex;
    justify-content: center;
    height: 155px;
    z-index: 0;

    .banner {
      width: 100vw;
    }
  }

  @include sub(logo) {
    position: absolute;
    top: 64px;

    .logo {
      height: 78px;
      object-fit: contain;
    }
  }
}
</style>