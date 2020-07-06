import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('CounterApp', () => {
  test('should show <CounterApp /> correctly', () => {
    const wrapper = shallow(<CounterApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show the counter sent by props', () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value} />)
    const number = wrapper.find('h2').text()
    expect(number).toBe('100')
  })
})
