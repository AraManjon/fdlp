# RETURN I ARGUMENTS

*Sabem que estem desenvolupant codi net quan cada funció fa exactament el que el seu nom indica*. – Ward Cunningham

👍 Consell:
> Han de ser fàcils de llegir i transmetre clarament la intenció.


##  **Retornar valors**

Les funcions a JavaScript també poden retornar valors, de fet, és una de les utilitats més essencials de les funcions.

Per tant, les funcions poden executar accions i retornar valors com a sortida. Aquest retorn ho aconseguim amb la paraula reservada ```return``` i seguit del valor que volem que retorni.

Exemple:

```js

const value1 = 4
const value2 = 4

function calculateAverage(){ 

   	let result = (value1 + value2) / 2 
   	return result
}

const averageResult = calculateAverage()
averageResult // 4
```

🚨 Important!

> Tot el codi que hi hagi després del return, no s'executarà. El return suposa el final de l'acció de la funció.
> 
> ```js
> const value1 = 4
> const value2 = 4
> 
> function calculateAverage(){ 
>
>   	let result = (valor1 + valor2) / 2 
>   	return result
>    	result = 0 // Aquesta línia mai s'executarà
> }
> 
> const averageResult = calculateAverage()
> averageResult // 4
> ```

##  **Paràmetres i arguments**

**Arguments** : els valors amb els quals cridem a la funció.

**Paràmetres** : les variables nomenades que reben aquests valors dins de la funció.

Exemple:

```js
function doSomething(greeting) {
    console.log(greeting)
}

doSomething('hello') // hello
doSomething('hi') // hi
```

Internament es tradueix així:

```js
function doSomething(let greeting) {
    console.log(greeting)
}

doSomething(greeting = 'hello') // hello
doSomething(greeting = 'hi') // hi
```

##  **Paràmetres per defecte**

Des de l'ES6, JavaScript permet que els paràmetres d'una funció es poden inicialitzar amb valors per defecte.

Exemple:

```js
function greet (text = 'world') { 
	console.log('Hello ' + text)
}

greet() // Hello world
greet(undefined) // Hello world
greet('crafter') // Hello crafter
```

👍 Consell:

> Limita el nombre d'arguments que rep una funció. En general haurien de ser 3 com a màxim. Si hi ha més, potser és bona idea crear un objecte a rebre com a paràmetres.
> 
> Exemple:
> 
> ```js
> // bad
> function createMenu(title, body, buttonText, cancellable){
> 	console.log('title', title)
> 	console.log('content', body)
> 	console.log('button', buttonText)
> 	console.log('cancellable', cancellable)
> }
> createMenu('Foo','Bar', 'Baz', true)
> ```
> 
> ```js
> // good
> function createMenu(menu){ 
> 	console.log('title', menu.title)
> 	console.log('content', menu.body)
> 	console.log('button', menu.buttonText)
> 	console.log('cancellable', menu.cancellable)
> }
> 
> const menu = {
> 	title: 'Foo',
> 	body: 'Bar', 
> 	buttonText: 'Baz',       
> 	cancellable: true
> }
> createMenu(menu)
> ```

##  **Paràmetre ...rest**

L'operador de ```...```, és conegut com a paràmetre ```rest``` o operador ```spread``` depenen on es faci servir.

- **rest**: unifica un conjunt d'elements en un array.
- **spread**: expandeix els elements d'un array o un objecte. Veure [spread operator](../../M2-Expressions-i-operadors/2.-tipus-de-dades/spread-operator.md)

El paràmetre ```...rest``` unifica els arguments en la trucada d'una funció.

Exemple:

```js
function process(x, y, ...args) {
	console.log(args)
}
process(1,2,3,4,5) // [3,4,5]
```

