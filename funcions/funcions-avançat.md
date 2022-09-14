# FUNCIONS AVANÇAT

“Sabem que estem desenvolupant codi net quan cada funció fa exactament el que el seu nom indica”. – Ward Cunningham31

Les funcions són les entitats organitzatives més bàsiques d'un programa. 

👍 Han de ser fàcils de llegir i transmetre clarament la intenció.

##  **Expressió d'una funció**

Amb una sintaxi similar a la declaració d'una funció, però es guarda en una variable.

```
const doSomething = function(){
	return "Doing something";
}
doSomething() //"Doing something"
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
function printAlert (result) {
	alert(result)
}

function sumNums(num1, num2, print) { 
   const result = num1 + num2
   print(result);
}
sumNums(1, 2, printAlert)
```

###  **Funcions anònimes**

Un bon nom en una funció és fonamental per una bona llegibilitat. Quan escollim un mal nom, succeeix tot el contrari, per això de vegades la millor forma és no haver d'escollir noms.

Exemple:
```
function searchStuffEnabled() { 

	const stuffList = [
	{ isEnabled: true, name: 'justin' }, 
	{ isEnabled: true, name: 'lauren' }, 
	{ isEnabled: false, name: 'max' },
	];
	const filteredStuff = []

	stuffList.forEach(function (stuff) {

		if(stuff.isEnabled) filteredStuff.push(stuff)
	});
	console.log(filteredStuff); 
}

searchStuffEnabled();
```

###  **Arrow functions**

Amb l'aparició de l'ES6, es va introduir al llenguatge la sintaxi de funcions fletxa, amb la intenció de fer les funcions més llegibles.

- Si el contingut del bloc és una sola línia ens podem estalviar les {}.
- El return està implícit si no utilitzem {}.

```
const doSomething = () => "Doing something"

console.log(doSomething()) // Doing something
```

```
const printNum = num => console.log(num)

printNum(2) // 2
```

```
const sumNums = (num1, num2) => num1 + num2

console.log(sumNums(2, 2)) // 4
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
> Operacions lambda, són aquelles funcions que s'utilitzen com a dada. Si una funció s'utilitza com argument o com a valor de retorn, és una lambda.

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
- **spread**: expandeix els elements d'un array o un objecte. Veure a [destructuració](../desctructuracio/destructuracio.md)

El paràmetre ```...rest``` unifica els arguments en la trucada d'una funció.

```
function process(x, y, ...args) {
	console.log(args)
}
process(1,2,3,4,5) // [3,4,5]
```

### Debugger

Quan el depurador és invocat, l'execució s'atura a la sentència debugger. És com un ```breakpoint``` a l'script.

Només hem d'escriure la sentència ```debugger``` i activar un depurador.




