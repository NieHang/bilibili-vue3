import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import MLayout from '@/components/layout/m-layout.vue'
import MSider from '@/components/layout/m-sider.vue'

test('mount layout', async () => {
  const wrapper = mount(MLayout, {
    slots: {
      default: MSider
    }
  })

  expect(wrapper.classes()).toContain('ant-layout-has-sider')
})
