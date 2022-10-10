## myMap Function

The function **myMap** aims to be a function prepared to receive as a first parameter an array and as a second parameter another function (callback). 

The function **myMap** should be able to apply to each element of the array, the function passed as the second parameter and return a new array with the result of applies the callback. 

Example: 

```
const myArr = [1,2,3]

const result = myMap( myArr, multiplyByTwo )

console.log(result) // [2, 4, 6]
```

### Requirement 1:

**The first parameter should be an array**

When I don't pass an array as first parameter to the function, we see an error in the console that says 'The first parameter should be an array'.

### Requirement 2:

**The second parameter should be a function**

When I don't pass a function as second parameter to the function, we see an error in the console that says 'The second parameter should be a function'.

### Requirement 3:

**The function myMap should work with the next cases**

Case 1: **multiplyByTwo**

When I pass an array with numbers [1,2,3,4,5] to **myMap**, we get a new array with all numbers multiplied by two [2,4,6,8,10] as a result.

Case 2: **multiplyByTen**

When I pass an array with numbers [1,2,3,4,5] to **myMap**, we get a new array with all numbers multiplied by 10 [10,20,30,40,50] as a result.

Case 3: **convertToUpperCase**

When I pass an array with strings ['Barcelona','Paris','Roma','Londres','Berlin'] to **myMap**, we get a new array with all strings to upper case ['BARCELONA','PARIS','ROMA','LONDRES','BERLIN'] as a result.


🚨 Make sure that **myMap** returns a new array and the original array is not modified.

