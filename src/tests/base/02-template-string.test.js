import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('02-template-string.js', () => {
  test('should return Hola Fernando', () => {
    const name = 'Fernando'
    const saludo = getSaludo(name)
    expect(saludo).toBe(`Hola ${name}`)
  })

  test('should return Hola Carlos', () => {
    const saludo = getSaludo()
    expect(saludo).toBe('Hola Carlos')
  })
})
