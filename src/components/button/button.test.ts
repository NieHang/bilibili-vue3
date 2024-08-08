import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import MButton from './m-button.vue'

test('mount btn', async () => {
  const wrapper = mount(MButton, {
    props: {
      type: 'primary',
      nativeType: 'button'
    },
    slots: {
      content: 'hello'
    }
  })

  expect(wrapper.text()).toContain('hello')
})

test('test loading', async () => {
  const wrapper = mount(MButton, {
    props: {
      loading: true
    }
  })

  expect(wrapper.find('svg').attributes('data-icon')).toBe('loading')
})
