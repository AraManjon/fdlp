# **FILTER**

El mètode ```filter``` busca tots els elements en l'array que compleixin la condició demanada. 

🔍 No modifica l'array original

🔍 Retorna un nou array amb els elements que compleixin la condició. Si no hi ha cap element, retornarà un array buida.

Sintaxi:

```js
arr.filter(callback(element, index, array))
```

Exemple:

```js
const fruits = [
    { name: 'poma', quantity: 2 },
    { name: 'plàtan', quantity: 0 },
    { name: 'pera', quantity: 5 }
]

function quanitytSmallestThanThree(fruit) {
    return fruit.quantity < 3;
}

const lowStock = fruits.filter(quanitytSmallestThanThree);

console.log(lowStock)// [ { name: 'poma', quantity: 2 }, { name: 'plàtan', quantity: 0 } ]
```

📚 Recursos
>[Mètode map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)