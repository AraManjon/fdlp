# LOOPS: DO-WHILE

Molt similar al ```while```, l'únic que en assegurem que almenys un cop executa el codi.

Sintaxi:

```js
let comptador

do {
    // instrucció
    // actualitzem el comptador
} while (condició)
```

Exemple:

```js
let counter = 0

do {
    console.log('hello world!')
    counter++
} while (counter < 10)
```

Ordre execució:

```js
console.log('hello world!')
counter++ 
counter < 10 // true
console.log('hello world!')
counter++
counter < 10 // true
console.log('hello world!')
...
counter++ // a incrementat a 10
counter < 10 // false
```
