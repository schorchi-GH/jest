const calc = require ('./calculadora')


describe('Testes da calculadora', () => {
test('somar 2 e 2 deve resultar em 4', () => {
    const minhaSoma = calc.soma(2, 2)
    expect(minhaSoma).toBe(4)
})

test('multiplicar 3 e 3 deve resultar em 9', () => {
    const minhaMultiplicacao = calc.multiplicacao(3, 3)
    expect(minhaMultiplicacao).toBeGreaterThan(3)
})

})