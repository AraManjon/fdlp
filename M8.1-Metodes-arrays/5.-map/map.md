# **MAP**

El mètode ```map``` aplica una funció a cada element de l'array i retorna una nova array amb el resultat. 

🔍 No modifica l'array original

🔍 Retorna un nou array amb els elements com a resultat d'aplicar la funció a cadascun d'ells.

Sintaxi:

```js
arr.map(callback(element, index, array))
```

Exemple:

```js
const numbers = [1, 5, 10, 15]
const resultMultiplyTwo = numbers.map(function(num) {
   return num * 2
})

console.log(resultMultiplyTwo) // [2, 10, 20, 30]
console.log(numbers) // [1, 5, 10, 15]
```

Exemple amb arrow function:

```js
const numbers = [1, 5, 10, 15]
const resultMultiplyTwo = numbers.map(n => n * 2)

console.log(resultMultiplyTwo) // [2, 10, 20, 30]
console.log(numbers) // [1, 5, 10, 15]
```

📚 Recursos
>[Mètode map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)