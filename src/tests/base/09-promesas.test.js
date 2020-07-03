import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('09-promesas', () => {
  test('should return async hero', done => {
    const id = 1
    getHeroeByIdAsync(id).then(heroe => {
      expect(heroe).toBe(heroes[0])
      done()
    })
  })

  test('should get an error', done => {
    const id = 10
    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe')
      done()
    })
  })
})
