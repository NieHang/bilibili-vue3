<template>
  <section :class="classes">
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
function useClass() {
  const slots = useSlots()
  let hasSider = false
  if (slots?.default) {
    const vnodes: VNode[] = slots.default()
    hasSider = vnodes.some((vnode) => {
      const component = vnode.type as Component
      return component.name === 'm-sider'
    })
  }
  return computed(() => [
    'ant-layout',
    hasSider ? 'ant-layout-has-sider' : ''
  ])
}
const classes = useClass()
</script>

<script></script>