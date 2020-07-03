describe('Demo test', () => {
  test('deben ser iguales los strings', () => {
    // 1. Inicialización
    const message = 'Hola mundo'

    // 2. Estímulo
    const message2 = `Hola mundo`

    // 3. Observar el comportamiento
    expect(message).toBe(message2)
  })
})
