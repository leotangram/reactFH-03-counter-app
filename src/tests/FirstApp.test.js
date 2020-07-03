import React from 'react'
import { render } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('<FirstApp />', () => {
  test('should show the message "Hola, soy Goku"', () => {
    const greeting = 'Hola, soy Goku'
    const { getByText } = render(<FirstApp greeting={greeting} />)
    expect(getByText(greeting)).toBeInTheDocument()
  })
})
