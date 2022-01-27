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
