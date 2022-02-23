# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Funcions**

“Sabem que estem desenvolupant codi net quan cada funció fa exactament el que el seu nom indica”. – Ward Cunningham31

Les funcions són les entitats organitzatives més bàsiques d'un programa. 

👍 Han de ser fàcils de llegir i transmetre clarament la intenció.

###  **Declaració d'una funció**

```function```, nom de la funció, seguit de parèntesis ```()```, que poden tenir paràmetres o no. Entre claus tindrem les **instruccions**.

```
function doSomething() {
    console.log('do something')
}

doSomething()
```

```
function sayHello(greeting) {
    console.log(greeting)
}

sayHello('hi!')
```

###  **Paràmetres i arguments**

**Arguments** : els valors amb els quals cridem a la funció.

**Paràmetres** : les variables nomenades que reben aquests valors dins de la funció.

👍 Limita el nombre d'arguments que rep una funció. En general haurien de ser 3 com a màxim. Si hi ha més, potser és bona idea crear un objecte a rebre com a paràmetres.

Exemple:

```
1   function createMenu(title,body,buttonText,cancellable){
2       //...
3   }
4
5   function createMenu({title,body,buttonText,cancellable}){ 
6       //...
7   }
8   
9   createMenu({
10      title: 'Foo',
11      body: 'Bar', 
12      buttonText: 'Baz',       
13      cancellable: true
14   })
```
###  **Retornar valors**

Les funcions a Javascript també poden retornar valors, de fet, és una de les utilitats més essencials de les funcions.

Per tant, les funcions poden executar accions i retornar valors com a sortida. Aquest retorn ho aconseguim amb la paraula reservada ```return``` i seguit del valor que volem que retorni.

Exemple:

Tenim una funció que rep dos valors com a paràmetres i volem que calculi la mitjana. El valor de retorn serà el resultat.

```
function media(valor1,valor2){ 
   	let result
   	result = (valor1 + valor2) / 2 
   	return result
}

const resultat = media(4, 4)
console.log(resultat) // output 4
```

🚨 Tot el codi que hi hagi després del return, no s'executarà. El return suposa el final de l'acció de la funció.

```
function media(valor1,valor2){ 
   	let result
   	result = (valor1 + valor2) / 2 
   	return result
    result = 0 // Aquesta línia mai s'executarà
}
```
###  **Expressió d'una funció**

Amb una sintaxi similar a la declaració d'una funció, però es guarda en una variable.

```
const doSomething = function(){
	return "Doing something";
}
doSomething()//"Doing something"
```

###  **Funcions autoexecutades IIFE**

Són funcions que s'executen a l'hora de definir-se.

```
(function(){
	console.log('Doing something')
})()
```

###  **Funcions callback**

És una funció que rep com a paràmetre una altra funció i l'executa.

Exemple:
```
function printResutl (result) {
	alert(result)
}

function sumNums(num1, num2, callback) { 
   const result = num1 + num2
   callback(result);
}
sumNums(1, 2, printResutl)
```

###  **Funcions anònimes**

Un bon nom en una funció és fonamental per una bona llegibilitat. Quan escollim un mal nom, succeeix tot el contrari, per això de vegades la millor forma és no haver d'escollir noms.

Exemple:
```
function main() { 

	const stuffList = [
	{ isEnabled: true, name: 'justin' }, 
	{ isEnabled: false, name: 'lauren' }, 
	{ isEnabled: false, name: 'max' },
	];

	const filteredStuff = stuffList.filter(stuff => !stuff.isEnabled);
	console.log(filteredStuff); 
}
main();
```

###  **Arrow functions**

Amb l'aparició de l'ES6, es va introduir al llenguatge la sintaxi de funcions fletxa, amb la intenció de fer les funcions més llegibles.

- Si el contingut del bloc és una sola línia ens podem estalviar les {}.
- El return està implícit si no utilitzem {}.

```
const doSomething = () => "Doing something";

console.log(doSomething()) // Doing something
```

```
const printNum = num => console.log(num);

printNum(2) // 2
```

Funcionen molt bé per fer expressions lambda (funcions en línia), ja que redueixen el soroll sintàctic.

Sense arrow function:
```
const numbers = [1,2,3]

const numbersPlusTwo = numbers.map(function(n){ return n * 2 })

console.log(numbersPlusTwo) // [2, 4, 6]
```

Amb arrow function:
```
const numbers = [1,2,3]

const numbersPlusTwo = numbers.map(n => n * 2 )

console.log(numbersPlusTwo) // [2, 4, 6]
```

🚨
> Operacions lambda, són aquelles funcions que s'utilitzen com a dada. Si una functióo s'utilitza com argument o com a valor de retorn, és una lambda.


###  **Paràmetres per defecte**

Des de l'ES6, JavaScript permet que els paràmetres d'una funció es poden inicialitzar amb valors per defecte.

```
const greet = (text = 'world') => console.log('Hello ' + text);

greet() //Hello world
greet(undefined) //Hello world
greet('crafter') //Hello crafter
```

###  **Paràmetre ...rest**

L'operador de ```...```, és conegut com a paràmetre ```rest``` o operador ```spread``` depenen on es faci servir.

- **rest**: unifica un conjunt d'elements en un array.
- **spread**: expandeix els elements d'un array o un objecte.

El paràmetre ```...rest``` unifica els arguments en la trucada d'una funció.

```
function process(x, y, ...args) {
	console.log(args)
}
process(1,2,3,4,5); // [3,4,5]
```

### Debugger

Quan el depurador és invocat, l'execució s'atura a la sentència debugger. És com un ```breakpoint``` a l'script.

Només hem d'escriure la sentència ```debugger``` i activar un depurador.




