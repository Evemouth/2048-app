import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from './Tile.vue'

describe('Tile Component', () => {
  it('should render tile with value 2 and have bg-amber-100 background', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2,
      },
    })

    // Check that the tile renders with value 2
    expect(wrapper.text()).toBe('2')

    // Check that the tile has the correct background class for value 2
    expect(wrapper.find('.tile').classes()).toContain('bg-amber-100')
  })

  it('should render empty tile with value 0', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 0,
      },
    })

    // Value 0 should display nothing
    expect(wrapper.text()).toBe('')
  })

  it('should render tile with value 4 and have bg-amber-200 background', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 4,
      },
    })

    expect(wrapper.text()).toBe('4')
    expect(wrapper.find('.tile').classes()).toContain('bg-amber-200')
  })
})
