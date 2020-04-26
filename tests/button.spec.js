import { shallowMount } from '@vue/test-utils' // vue提供的快速测试的方法
import { expect } from 'chai'

import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vue', () => {
  it('1.测试button能否正常显示slot里的内容', () => {
    // 测试当前组件运行在浏览器的情况
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'zhu-ui',
      },
    })
    expect(wrapper.text()).to.eq('zhu-ui')
  })
  it('2.测试icon传入是否能正常显示', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'zh-icon': Icon, // 替换的功能
      },
      propsData: {
        icon: 'edit',
      },
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit')
  })

  it('3.测试按钮能否正常点击', () => {
    const wrapper = shallowMount(Button, {
      // 桩  nodejs 内置文件
      // stubs:['zh-icon'],// 不去渲染icon 只是一个加标签
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1)
  })

})
