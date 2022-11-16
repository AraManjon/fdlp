import { validateNum } from "../src/validateNum.js";

test('validateNum should throw an error when a string is passed as parameter', () => {

    const invalidNum = 'abc'

    try {
        validateNum(invalidNum)
        
    } catch (error) {

        expect(error.message).toBe('Should be a number')
    }
})