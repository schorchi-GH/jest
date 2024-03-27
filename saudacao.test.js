const saudacao = require('./saudacao')

describe('Testes para saudação', () => {
  test('Deverá retornar Olá, Maria', () => {
    const olaMaria = saudacao.dizOla('Maria')
    expect(olaMaria).toBe('Olá, Maria')
    expect([1, 2, 3, 4, 5]).toHaveLength(5)
  })
})
