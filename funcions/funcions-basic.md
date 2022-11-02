# FUNCIONS BÀSIC

“Sabem que estem desenvolupant codi net quan cada funció fa exactament el que el seu nom indica”. – Ward Cunningham

Les funcions són les entitats organitzatives més bàsiques d'un programa. 

👍 Han de ser fàcils de llegir i transmetre clarament la intenció.

##  **Declaració d'una funció**

```function```, nom de la funció, seguit de parèntesis ```()```, que poden tenir paràmetres o no. Entre claus tindrem les **instruccions**.

```
function doSomething() {
    console.log('do something')
}

doSomething()
```

##  **Retornar valors**

Les funcions a Javascript també poden retornar valors, de fet, és una de les utilitats més essencials de les funcions.

Per tant, les funcions poden executar accions i retornar valors com a sortida. Aquest retorn ho aconseguim amb la paraula reservada ```return``` i seguit del valor que volem que retorni.

Exemple:

Tenim una funció que rep dos valors com a paràmetres i volem que calculi la mitjana. El valor de retorn serà el resultat.

```
const value1 = 4
const value2 = 4

function average(){ 

   	let result
   	result = (value1 + value2) / 2 
   	return result
}

const averageResult = average()
averageResult // 4
```

🚨 Tot el codi que hi hagi després del return, no s'executarà. El return suposa el final de l'acció de la funció.

```
const value1 = 4
const value2 = 4

function average(){ 

   	let result
   	result = (valor1 + valor2) / 2 
   	return result
    result = 0 // Aquesta línia mai s'executarà
}

const averageResult = average()
averageResult // 4
```

##  **Paràmetres i arguments**

**Arguments** : els valors amb els quals cridem a la funció.

**Paràmetres** : les variables nomenades que reben aquests valors dins de la funció.

```
function doSomething(greeting) {
    console.log(greeting)
}

doSomething('hello') // hello
```

Internament es tradueix així:

```
function doSomething(let greeting) {
    console.log(greeting)
}

doSomething(greeting = 'hello') // hello
```

👍 Limita el nombre d'arguments que rep una funció. En general haurien de ser 3 com a màxim. Si hi ha més, potser és bona idea crear un objecte a rebre com a paràmetres.

Exemple:

```
function createMenu(title,body,buttonText,cancellable){
	console.log('title', title)
	console.log('content', body)
	console.log('button', buttonText)
	console.log('cancellable', cancellable)
}
createMenu('Foo','Bar', 'Baz', true)
```

```
function createMenu(menu){ 
	console.log('title', menu.title)
	console.log('content', menu.body)
	console.log('button', menu.buttonText)
	console.log('cancellable', menu.cancellable)
}

const menu = {
	title: 'Foo',
	body: 'Bar', 
	buttonText: 'Baz',       
	cancellable: true
}
createMenu(menu)
```