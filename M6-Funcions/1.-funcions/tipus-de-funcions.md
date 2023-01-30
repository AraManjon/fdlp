# TIPUS DE FUNCIONS

## **Funcions com a objectes**

Les funcions són objectes regulars amb la capacitat addicional de ser invocables.

```js
typeof instance === "function"

instance instanceof Object
```

Exemple funció com a objecte:

```js
function foo () {
    const result = 2
    return result
}

foo.call() // 2
foo.name // 'foo'
```

##  **Funcions autoexecutades IIFE**

Són funcions que s'executen a l'hora de definir-se.

Exemple:

```js
(function(){
	console.log('Doing something')
})()
```

##  **Expressió d'una funció**

Amb una sintaxi similar a la declaració d'una funció, però es guarda en una variable.

Exemple:

```js
const doSomething = function(){
	return "Doing something";
}
doSomething() //"Doing something"
```

###  **Funcions callback**

És una funció que rep com a paràmetre una altra funció i l'executa.

Exemple:

```js
function printAlert (result) {
	alert(result)
}

function printConsole (result) {
	console.log(result)
}

function sumNums(num1, num2, print) { 
   const result = num1 + num2
   print(result)
}

sumNums(1, 2, printAlert) // mostra per alert 3
sumNums(3, 4, printConsole) // mostra per consola 7
```

###  **Funcions anònimes**

Un bon nom en una funció és fonamental per una bona llegibilitat. Quan escollim malament nom, succeeix tot el contrari, per això de vegades la millor forma és no haver d'escollir noms.

Exemple:

```js

const stuffList = [
	{ name: 'Justin', isEnabled: true }, 
	{ name: 'Lauren', isEnabled: true }, 
	{ name: 'Max', isEnabled: false },
]

const filteredStuff = []

stuffList.forEach(function (stuff) {

	if(stuff.isEnabled) filteredStuff.push(stuff)
})

console.log(filteredStuff) // [ { name: 'Justin', isEnabled: true }, { name: 'Lauren', isEnabled: true } ]
```

###  **Arrow functions**

Amb l'aparició de l'ES6, es va introduir al llenguatge la sintaxi de funcions fletxa, amb la intenció de fer les funcions més llegibles.

- Si el contingut del bloc és una sola línia ens podem estalviar l'ús de ```{}```.
- El return està implícit si no utilitzem ```{}```.

Exemple sense arrow function:

```js
const sumNumns = function (num1, num2) { 
	return num1 + num2 
}

console.log(sumNums(2, 2)) // 4
```

Exemple amb arrow function:

```js
const sumNumns = (num1, num2) => num1 + num2 

console.log(sumNums(2, 2)) // 4
```

🚨 Important! 

> Funcions lambda, són aquelles funcions que no estan enllaçades a un identificador i que es fan servir com a dada, és a dir, si una funció s'empra com argument o com a valor de retorn, és una lambda.
> 
> Exemple:
>
> ```js
> const numbers = [1,2,3]
> 
> const numbersMultipliedByTwo = numbers.map(n => n * 2 )
> 
> console.log(numbersMultipliedByTwo) // [2, 4, 6]
> ```


## **Funcions: ciutadans de primera classe**

Si un llenguatge de programació té la capacitat de tractar les funcions com a valors, passar-les com arguments i retornar la funció d'una altra funció, es diu que aquest llenguatge té funcions de primera classe.

Les funcions a JavaScript tenen aquestes capacitats:

Exemple funció com a valor: 

```js
const greet = function() {
    console.log("Welcome!")
}
greet() "Welcome"
```

Exemple funció com argument: 

```js
function askNameLiteral ( lang ){

    if ( lang === 'CAT') return 'Hola, introdueix el teu nom'
    if ( lang === 'EN') return 'Hello, enter your name'
    if ( lang === 'FR') return 'Bonjour, entrez votre nom'
}

function askAgeLiteral ( lang ){

    if ( lang === 'CAT') return 'Introdueix la teva edat'
    if ( lang === 'EN') return 'Enter your age'
    if ( lang === 'FR') return 'Entrez votre âge'
}
  
function doQuestion (language, question){

	const response = prompt(question(language))

    alert(response)
}

doQuestion('CAT', askNameLiteral) // pregunta per prompt 'Hola, introdueix el teu nom'
doQuestion('CAT', askAgeLiteral) // pregunta per prompt 'Introdueix la teva edat'
```

Exemple funció com a valor return: 

```js
function applyDiscount( discount ){

    return function( product ){
        return { ...product, price: product.price * discount }
    }
}

const CURRENT_DISCOUNT = 0.5

const discounter = applyDiscount(CURRENT_DISCOUNT)

const products = [
	{ type: 'vestit', price: 35},
	{ type: 'barret', price: 20},
	{ type: 'pantaló', price: 25},
]

const productSelected = prompt(`Avui tenim un descompte del ${CURRENT_DISCOUNT}, selecciona el producte del qual vols saber el preu:`, 'vestit: 0, barret: 1, pantaló: 2')

const productWithDiscount = discounter(products[productSelected])

alert(`El preu del ${productWithDiscount.type} seleccionat és de ${productWithDiscount.price}€`)
```

📝 Notes:

> Funcions d'ordre superior o (High Order Functions) són aquelles funcions que compleixen una de les següents característiques:
>
> - Reben una funció com a paràmetre
> - Retornen una funció

