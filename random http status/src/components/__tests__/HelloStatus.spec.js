import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HttpStatus from '../HttpStatus.vue'

vi.mock('@/tools/random_number', () => {
  return {
    default: [200, 404]
  }
})

describe('HttpStatus', () => {
  it('renders properly', () => {
    const wrapper = mount(HttpStatus)

    expect(wrapper.text()).toContain('200')
    expect(wrapper.text()).toContain('gif')
  })

  it('renders gif properly', async () => {
    const wrapper = mount(HttpStatus)

    const select_field = wrapper.find('select[name="http status"]')
    await select_field.setValue('404')

    expect(wrapper.find('img.image_code').attributes('src')).toBe('https://vadivelu.anoram.com/gif/404');
  })

  it('renders jpg properly', async () => {
    const wrapper = mount(HttpStatus)

    const select_field = wrapper.find('select[name="http status"]')
    const select_field_type = wrapper.find('select[name="gif_or_jpg"]')

    await select_field.setValue('200')
    await select_field_type.setValue('jpg')

    expect(wrapper.find('img.image_code').attributes('src')).toBe('https://vadivelu.anoram.com/jpg/200');
  })
})
