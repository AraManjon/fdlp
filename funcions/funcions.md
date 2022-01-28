# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Funcions**

“Sabem que estem desenvolupant codi net quan cada funció fa exactament el que el seu nom indica”. – Ward Cunningham31

Les funcions són les entitats organizatives més bàsiques d'un programa. 

👍 Han de ser fàcils de llegir i transmetre clarament la intenció.

###  **Declaració d'una funció**

```funcion```, nom de la funció, seguit de parèntesis ```()```, que poden tenir paràmetres o no. Entre claus tindrem les **instruccions**.

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

Les funcions a Javascriot també poden retornar valors, de fet, és una de les utilitats més essencials de les funcions.

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