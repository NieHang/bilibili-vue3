<template>
  <Layout>
    <template #layout-header>
      <page-header></page-header>
    </template>
    <template #layout-content>
      <a-row :gutter="16" style="margin-top: 20px">
        <a-col :span="12">
          <a-carousel autoplay>
            <div v-for="item in 3" :key="item">
              <img class="slider-img" :src="`/slider/0${item}.webp`" alt="sliderImage">
            </div>
          </a-carousel>
        </a-col>
        <a-col :span="12">
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="6" v-for="video in videos" :key="video.key" style="margin-top: 16px">
          <a-card hoverable>
            <template #cover>
              <div>
                <img :src="video.image" :alt="video.text">
              </div>
            </template>
            <a-card-meta :title="video.name" :description="video.text"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/layouts/default-layout.vue'
import { getIndexList } from '@/apis/mock'
import type { Video } from '@/apis/mock'
import debounce from 'lodash/debounce'

let currentPage: number = 0
let videos = ref<Video[]>([])
videos.value = await getIndexList(currentPage)

const scroll = async () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement
  if (scrollTop + clientHeight >= scrollHeight) {
    currentPage++
    let newVideos = await getIndexList(currentPage)
    videos.value = videos.value.concat(newVideos)
  }
}

const debounceScroll = debounce(scroll, 100)

onMounted(() => {
  window.addEventListener('scroll', debounceScroll)
})

onUnmounted(() => {
  window.addEventListener('unScroll', debounceScroll)
})
</script>

<style lang="scss">
.slider-img {
  width: 100%;
  height: 400px;
  object-fit: contain;
}
.ant-card-cover {
  img {
    width: 100%;
  }
}
.ant-card-meta-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>