import { mount } from '@vue/test-utils'
import FormLogin from '../FormLogin.vue'
import InputText from '../InputText.vue'
import InputPassword from '../InputPassword.vue'
import ButtonSubmit from '../ButtonSubmit.vue'
import { describe, it, expect } from 'vitest'

describe('FormLogin.vue', () => {
  it('renders InputText for username', () => {
    const wrapper = mount(FormLogin)

    const inputText = wrapper.findComponent(InputText)
    expect(inputText.exists()).toBe(true)
    expect(inputText.props('labelText')).toBe('Username')
    expect(inputText.props('required')).toBe(true)
    expect(inputText.props('placeholder')).toBe('JohnDoe')
  })

  it('renders InputPassword for password', () => {
    const wrapper = mount(FormLogin)

    const inputPassword = wrapper.findComponent(InputPassword)
    expect(inputPassword.exists()).toBe(true)
    expect(inputPassword.props('labelText')).toBe('Password')
  })

  it('renders ButtonSubmit with correct text', () => {
    const wrapper = mount(FormLogin)

    const buttonSubmit = wrapper.findComponent(ButtonSubmit)
    expect(buttonSubmit.exists()).toBe(true)
    expect(buttonSubmit.props('text')).toBe('Login')
  })

  it('renders the form element', () => {
    const wrapper = mount(FormLogin)

    const formElement = wrapper.find('form')
    expect(formElement.exists()).toBe(true)
  })
})
