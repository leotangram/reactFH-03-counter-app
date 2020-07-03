import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('08-imp-exp', () => {
  test('should return a hero by id', () => {
    const id = 1
    const heroe = getHeroeById(id)
    const heroData = heroes.find(hero => hero.id === heroe.id)
    expect(heroe).toEqual(heroData)
  })

  test('should return undefined', () => {
    const id = 20
    const heroe = getHeroeById(id)
    expect(heroe).toBe(undefined)
  })

  test('should return DC heroes', () => {
    const owner = 'DC'
    const heroe = getHeroesByOwner(owner)
    const heroData = heroes.filter(hero => hero.owner === owner)
    expect(heroe).toEqual(heroData)
  })

  test('should return 2 wiht Marvel heroes', () => {
    const owner = 'Marvel'
    const heroe = getHeroesByOwner(owner)
    expect(heroe.length).toBe(2)
  })
})
