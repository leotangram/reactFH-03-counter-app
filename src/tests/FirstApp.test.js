import React from 'react'
// import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import FirstApp from '../FirstApp'

describe('<FirstApp />', () => {
  // test('should show the message "Hola, soy Goku"', () => {
  //   const greeting = 'Hola, soy Goku'
  //   const { getByText } = render(<FirstApp greeting={greeting} />)
  //   expect(getByText(greeting)).toBeInTheDocument()
  // })

  test('should show <FirstApp /> correctly', () => {
    const greeting = 'Hola, soy Goku'
    const wrapper = shallow(<FirstApp greeting={greeting} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show the subtitle sent by props', () => {
    const greeting = 'Hola, soy Goku'
    const subtitle = 'Subtítulo'
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    )
    const textParagraph = wrapper.find('p').text()
    expect(textParagraph).toBe(subtitle)
  })
})
