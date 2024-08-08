<template>
  <button :class="classes" :type="nativeType">
    <span>
      <LoadingOutlined v-if="loading"/>
      <slot name="content" />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { LoadingOutlined } from '@ant-design/icons-vue'
type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'warning'
type ButtonNativeType = 'button' | 'submit' | 'reset'
type ButtonSize = 'lg' | 'sm'

interface ButtonProps {
  type?: ButtonType
  nativeType?: ButtonNativeType
  size?: ButtonSize
  loading?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  nativeType: 'button',
})

const classes = computed(() => ([
  'ant-btn',
  props.size ? `ant-btn-${props.size}` : '',
  `ant-btn-${props.type}`
]))
</script>

<style lang="sass">
@import 'ant-design-vue/dist/reset.css'
</style>