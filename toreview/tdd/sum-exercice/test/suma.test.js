import { suma } from "../src/suma.js"
test('suma 3 and 4 returns 7', function () {

    const expectedResult = 7

    const resultSum = suma(3, 4)
    debugger
    expect( resultSum ).toBe( expectedResult )
})