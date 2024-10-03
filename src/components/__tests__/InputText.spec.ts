// import { mount } from '@vue/test-utils'
// import InputText from '../InputText.vue'
// import { describe, it, expect } from 'vitest'

// describe('InputText.vue', () => {
//   it('renders label and input field with required attribute', () => {
//     const wrapper = mount(InputText, {
//       props: {
//         labelText: 'Username',
//         required: true,
//         placeholder: 'JohnDoe'
//       }
//     })

//     expect(wrapper.find('label').text()).toBe('Username')

//     const inputElement = wrapper.find('input').element
//     expect(inputElement.required).toBe(true)
//   })

//   it('does not add required attribute if not provided', () => {
//     const wrapper = mount(InputText, {
//       props: {
//         labelText: 'Username',
//         placeholder: 'JohnDoe'
//       }
//     })

//     const inputElement = wrapper.find('input').element
//     expect(inputElement.required).toBe(false)
//   })
// })
