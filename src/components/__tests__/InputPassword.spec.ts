import { mount } from '@vue/test-utils'
import InputPassword from '../InputPassword.vue'
import { describe, it, expect } from 'vitest'

describe('InputText.vue', () => {
  it('renders label and input field', () => {
    const wrapper = mount(InputPassword, {
      props: {
        labelText: 'Password'
      }
    })

    expect(wrapper.find('label').text()).toBe('Password')
  })
})
