# LOOPS: FOR...OF

```For...of```és un altre mètode per iterar arrays. En aquest cas no tenim accés al número de vegades que hem iterat, només al valor de cada element de l'array.

Sintaxi:

```js
for (let variable of iterable) {
    // instrucció
}
```

Exemple:

```js
let fruits = ["Apple", "Orange", "Plum"]

for (let fruit of fruits) {
  console.log( fruit )
}
```