// Nativamente node ya hace el import

describe('Pruebas unitarias', () => {

    test('un EUR es 1.206 USD, 3,5 son 4,2', () => {
        const { fromEuroToDollar } = require ('./app.js')
        const USD = fromEuroToDollar(3.5)
        const expected = 3.5 * 1.2;

        expect(expected).toBe(USD);
    })

    test('')

})