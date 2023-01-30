# **INDEXOF // FINDINDEX // INCLUDES**

## indexOf

Busca un element a l'array, si troba l'element, retorna l'índex on es troba aquest element, si no troba cap element, retorna -1.

Sintaxi:

```js
arr.indexOf(item)
```

Exemple:

```js
const fruits = ['pera', 'poma', 'plàtan', 'poma', 'pinya', 'pruna', 'prèsec']

console.log(fruits.indexOf('poma')) // 1
```

## findIndex

Sintaxi:

```js
arr.findIndex(callback( element, index, array ))
```

Exemple:

Torna l'índex del primer element d'un array que compleixi la funció proporcionada. En cas contrari, torna -1.

```js
const fruits = ['pera', 'poma', 'plàtan', 'poma', 'pinya', 'pruna', 'prèsec']

const lengthBiggerThanFour = fruits.findIndex(fruit => fruit.length > 4)

console.log(lengthBiggerThanFour) // 2

```

## includes

Busca un element a l'array, si existeix l'element, retorna true, si no retorna false.

Sintaxi:

```js
arr.includes(item)
```

Exemple:

```js
const fruits = ['pera', 'poma', 'plàtan', 'poma', 'pinya', 'pruna', 'prèsec']

console.log(fruits.includes('pruna')) // true
```
