## myFilter Function

This function **myFilter** aims to be a function prepared to receive as a first parameter an array and as a second parameter another function (callback). The function callback should valuate a condition that returns ```true``` or ```false```.

The function **myFilter** should be able to apply to each element of the array the function passed as the second parameter and return a new array with elements that accomplish the condition of function callback. 

Example: 

```
const myArr = [1,2,3,4,5,6,7,8,9,10]

const result = myFilter( myArr, isBiggerThanFive )

console.log(result) // [6,7,8,9,10]

```

### Requirement 1:

**The first parameter should be an array**

When I don't pass an array as first parameter to the function, we see an error in the console that says 'The first parameter should be an array'.

### Requirement 2:

**The second parameter should be a function**

When I don't pass a function as second parameter to the function, we see an error in the console that says 'The second parameter should be a function'.

### Requirement 3:

**The function myFilter should work with the next cases**

Case 1: **isBiggerThanFive**

When I pass an array with numbers [1,2,3,4,5,6,7,8,9,10] to **myFilter**, we get a new array with all numbers bigger than five [6,7,8,9,10] as a result.

Case 2: **isEvenNumber**

When I pass an array with numbers [1,2,3,4,5,6,7,8,9,10] to **myFilter**, we get a new array with all even numbers [2,4,6,8,10] as a result.

Case 3: **startsByB**

When I pass an array with strings ['Barcelona','Paris','Roma','Londres','Berlin'] to **myFilter**, we get a new array with all cities that starts with letter 'B' ['barcelona','berlin'] as a result.

Case 4: **isGrilloFamily**

When I pass an array with users ```[{name: 'Pepita', surname: 'Grillo', age: 95},{name: 'Maria', surname: 'Martinez', age: 35},{name: 'Pepito', surname: 'Grillo', age: 110},{name: 'Pepito', surname: 'Sanchez', age: 45}]``` to **myFilter**, we get a new array with all users with Grillo's surname 
```[{name: 'Pepita', surname: 'Grillo', age: 95},{name: 'Pepito', surname:'Grillo', age: 110}]``` as a result.

🚨 Make sure that **myFilter** returns a new array and the original array is not modified.



