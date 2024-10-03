import { mount } from '@vue/test-utils'
import Button from '../ButtonSubmit.vue'
import { describe, it, expect } from 'vitest'

describe('ButtonSubmit.vue', () => {
  it('renders a button of type submit', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Submit'
      }
    })

    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })
})
