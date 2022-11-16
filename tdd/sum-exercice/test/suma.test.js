import { suma } from "../src/suma.js";
test('sumar 1 + 2 es igual a 3', () => {

  const expectedResult = 3

  const result = suma(1, 2)

  expect(result).toBe(expectedResult);
});