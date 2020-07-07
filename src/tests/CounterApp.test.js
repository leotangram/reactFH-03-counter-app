import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('CounterApp', () => {
  let wrapper = shallow(<CounterApp />)
  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })

  test('should show <CounterApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should show the counter sent by props', () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value} />)
    const number = wrapper.find('h2').text().trim()
    expect(number).toBe('100')
  })

  test('should increment with +1 button', () => {
    wrapper.find('button').at(0).simulate('click')
    const number = wrapper.find('h2').text().trim()
    expect(number).toBe('11')
  })

  test('should decrement with -1 button', () => {
    wrapper.find('button').at(2).simulate('click')
    const number = wrapper.find('h2').text().trim()
    expect(number).toBe('9')
  })
})
