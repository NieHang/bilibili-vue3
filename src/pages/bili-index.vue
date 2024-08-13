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
            <template #actions>
              <div>
                <PlayCircleOutlined @click="watchLetter" />
              </div>
            </template>
            <template #cover>
              <div>
                <img :src="video.image" :alt="video.text">
              </div>
            </template>
            <a-card-meta :title="video.name" :description="video.text"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
      <div class="animate-ball">
        <transition @before-enter="onBeforeAnimateBallEnter" @enter="onAnimateBallEnter" @after-enter="onAfterAnimateBallEnter">
          <div class="animate" v-show="animateBallAttr.show">
            <div class="animate-y"></div>
          </div>
        </transition>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/layouts/default-layout.vue'
import { getIndexList } from '@/apis/mock'
import type { Video } from '@/apis/mock'
import debounce from 'lodash/debounce'
import { PlayCircleOutlined } from '@ant-design/icons-vue'

let currentPage: number = 0
let videos = ref<Video[]>([])
videos.value = await getIndexList(currentPage)

let animateBallAttr = reactive<{
  show: boolean
  el: Element | null
}>({
  show: false,
  el: null,
})

const scroll = async () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement
  if (scrollTop + clientHeight >= scrollHeight) {
    currentPage++
    let newVideos = await getIndexList(currentPage)
    videos.value = videos.value.concat(newVideos)
  }
}

const debounceScroll = debounce(scroll, 100)

const watchLetter = (e:Event) => {
  animateBallAttr.show = true
  animateBallAttr.el = e.target as HTMLElement
}

const onBeforeAnimateBallEnter = (el: Element) => {
  let dom = animateBallAttr.el!
  let rect = dom.getBoundingClientRect()
  let x = window.innerWidth - rect.left - 230
  let y = rect.top - 10
  ;(el as HTMLElement).style.transform = `translateX(-${x}px)`
  ;(document.querySelector('.animate-y') as HTMLElement).style.transform = `translateY(${y}px)`
}

const onAnimateBallEnter = (el: Element, done: () => void) => {
  // force redraw to trigger animation
  document.body.offsetHeight

  ;(el as HTMLElement).style.transform = 'translateX(0)'
  ;(document.querySelector('.animate-y') as HTMLElement).style.transform = `translateY(0)`
  el.addEventListener('transitionend', done)
}

const onAfterAnimateBallEnter = () => {
  animateBallAttr.show = false
}

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
.animate-ball .animate {
  position: fixed;
  top: 15px;
  right: 230px;
  z-index: 100;
  width: 20px;
  height: 20px;
  transition: all .5s linear;

  .animate-y {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fb7299;
    transition: all .5s ease-out;
  }
}
</style>