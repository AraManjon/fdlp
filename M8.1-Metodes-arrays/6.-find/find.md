# **FIND** 

El mètode ```find``` busca el primer element en l'array que compleixi la condició demanada. 

🔍 No modifica l'array original

🔍 Retorna el primer element dins l'array que compleixi la condició. Si no existeix cap element, retornarà ```undefined```.

Sintaxi:

```js
arr.find(callback(element, index, array))
```

Exemple:

```js
const fruits = [
    { name: 'poma', quantity: 2 },
    { name: 'plàtan', quantity: 0 },
    { name: 'pera', quantity: 5 }
]

function isApple(fruit) {
    return fruit.name === 'poma'
}

const apple = fruits.find(isApple)
console.log(apple) // { name: 'poma', quantity: 2 }
```

📚 Recursos
>[Mètode map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)