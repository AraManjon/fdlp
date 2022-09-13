const sum = require('./suma')
test('should sum 5 and 2 and return 7', () => {

    expect( sum(5,2) ).toBe(7)
})