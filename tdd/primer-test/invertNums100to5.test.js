const invertNums100to5 = require('./invertNums100to5')
test('should return an array with nums from 100 to 5 with intervals of 5', ( ) => {

    const expectedResult = [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5]
    
    const result = invertNums100to5()

    expect(result).toBe(expectedResult)
})

test('should return an array', () => {

    const result = invertNums100to5()

    expect(Array.isArray(result)).toBeTruthy()
})