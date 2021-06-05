// Nativamente node ya hace el import

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require ('./app.js')

describe('Pruebas unitarias', () => {

    test('3.5 EUR a USD', () => {
        const USD = fromEuroToDollar(3.5)
        const expected = 3.5 * 1.2;
        expect(expected).toBe(USD);
    })

   test('1 USD a Yen', () => {
       const YEN = fromDollarToYen(1)
       const expected = 1 / 1.2 * 127.9;
       expect(expected).toBe(YEN)
   })

   test('2.5 USD a yen', () => {
       const yen = fromDollarToYen(2.5)
       const expected = 2.5 / 1.2 * 127.9;
       expect(expected).toBe(yen)
   })

   test('1 YEN a GBP', () => {
       const gbp = fromYenToPound(1)
       const expected = 1 / 127.9 * 0.8;
       expect(expected).toBe(gbp)
   })

})