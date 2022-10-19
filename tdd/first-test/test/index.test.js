import { sum } from '../src/index.js'

test('As a user of sum function when I pass 2 and 4 as a arguments, should return 6 as response', () => {

    const expextedResult = 6

    const result = sum(2,4)

    expect(result).toBe(expextedResult)
})