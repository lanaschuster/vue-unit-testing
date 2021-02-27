import Header from '@/components/Header'
import { mount } from '@vue/test-utils'

describe('Header', () => {
  test('se o usuário não estiver logado, não mostre o botão', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
})

describe('Header', () => {
  test('se o usuário estiver logado, mostre o botão', async () => {
    const wrapper = mount(Header)
    wrapper.setData({ loggedIn: true })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
