# QUÈ ÉS UN MÈTODE?

Els objectes són estructures de dades mutables i referenciats. 

Un objecte literal està compost per propietats ```key```+ ```value```.

Quan el ```value``` és una funció, diem que aquest objecte té un mètode.

Exemple:

```js
const person = { name: 'Pepito', age: 27, sayHello: function greeting() {
    console.log('Hola')
}}

person.sayHello() // Hola
// sayHello és un mètode de person
```

```js
console.log('Hello World!')

//log és un mètode de console
```

## Arrays com a objecte

```js
typeof instance === "object"

instance instanceof Array
```

📚 Recursos:
> [Mètodes d'array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)