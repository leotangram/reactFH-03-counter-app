import { retornaArreglo } from '../../base/07-deses-arr'

describe('07-deses-arr', () => {
  test('should return a string & a number', () => {
    const arr = retornaArreglo() // ['ABC', 123]
    const [letters, numbers] = retornaArreglo() // ['ABC', 123]

    expect(arr).toEqual(['ABC', 123])
    expect(letters).toBe('ABC')
    expect(typeof letters).toBe('string')
    expect(numbers).toBe(123)
    expect(typeof numbers).toBe('number')
  })
})
