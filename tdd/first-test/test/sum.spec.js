import { sum } from '../src/sum.js'

test('As a user of sum function when I pass 2 and 4 as a arguments, should return 6 as response', () => {

    const expextedResult = 6

    const result = sum(2,4)

    expect(result).toBe(expextedResult)
})


test('As a user of sum function when I pass a string as a first argument, should throw an error', () => {

    try {
        sum('abc', 3)
    }catch(error) {
        expect(error.message).toBe('The first argument should be a number')
    }
})

test('As a user of sum function when I pass a string as a second argument, should throw an error', () => {

    try {
        sum(4, 'abc')
        throw Error
    }catch(error) {
        expect(error.message).toBe('The second argument should be a number')
    }
})