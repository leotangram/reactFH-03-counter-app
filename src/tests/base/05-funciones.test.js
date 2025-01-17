import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('05-funciones', () => {
  test('getUser should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()

    expect(user).toEqual(userTest)
  })

  test('getUsuarioActivo should return an object', () => {
    const name = 'Leo'

    const userTest = {
      uid: 'ABC567',
      username: name
    }

    const user = getUsuarioActivo(name)

    expect(user).toEqual(userTest)
  })
})
