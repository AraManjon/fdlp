# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

Scope fa referència a la visibilitat o vida útil d'una variable.

A Javascript existeixen 3 tipus d'àmbits:

## **Àmbit global**

Tota variable que no estigui dins d'un bloc, estarà en àmbit global.

Exemple:

```
let greeting = 'Hello World' // variable en scope global

{
  console.log('inside', greeting) //Output: Hello World
} 

console.log('outside',greeting) //Output: Hello World
```

## **Àmbit local o de funció**

L'àmbit d'una variable declarada dins d'una funció, només serà accessible dins de la mateixa funció.

Exemple:

```
function sayHello () {
  let greeting = 'Hi'
  console.log('inside', greeting) //Output: Hi
} 

console.log('outside',greeting) //error
```

## **Àmbit bloc**

L'àmbit d'una variable declarada dins d'un bloc, només serà accessible dins del mateix bloc. Es delimita mitjançant curly braces {}.

Exemple:

```
{
  let greeting = 'Hi'
  console.log('inside', greeting) //Output: Hi
} 

console.log('outside',greeting) //error
```

##  **Hoisting**

Les declaracions de variables i funcions es creen en memòria en temps de compilació.

En l'àmbit pràctic, seria com dir que l'intèrpret de Javascript mou aquestes declaracions al principi del seu àmbit.

Això ens permet executar una funció abans de la seva declaració:

Exemple: 
```
greet() // Executa la funció

function greet() {
  console.log('Hello')
}
```

```
let greeting = 'Hi'

function greet() {
  console.log('inside', greeting) //error
  let greeting = 'Hello'
  console.log('inside', greeting) //Hello
} 

//Es tradueix:

let greeting = 'Hi'

function greet() {
  let greeting
  console.log('inside', greeting) //error
  greeting = 'Hello'
  console.log('inside', greeting) //Hello
} 
```

Notes: 
> 🚨 Existeix un concepte conegut com a Temporal Dead Zone, que succeeix quan volem accedir a una variable abans de la seva inicialització. Aquest cas només el trobarem amb ```let```i ```const```. [Més informació](https://www.freecodecamp.org/espanol/news/que-es-la-zona-muerta-temporal-temporal-dead-zone-tdz/). Un exemple: 

```
{
  console.log(typeof myVar) // undefined
  console.log(typeof myLet) // error

  var myVar = 3
  let myLet = 4
}

```

## **var**

Amb Javascript clàssic es feia servir la paraula **var**.  Hauríem d'evitar el seu ús, ja que no permet declarar variables en àmbit de bloc.

Exemple:
```
var variable = 5 
{
  console.log('inside', variable) //5
  var variable = 10
} 
console.log('outside',variable) //10
variable = variable * 2
console.log('changed',variable) //20
```

Amb **let** aquest problema se soluciona: 

Exemple:

```
let variable = 5 

{
  console.log('inside', variable) //error
  let variable = 10
} 

console.log('outside',variable) //5
variable = variable * 2
console.log('changed',variable) //10
```

Notes: 
> 🚨 Evitar l'ús de **var** per no provocar comportament inesperat i poc intuïtius.
