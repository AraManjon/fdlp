# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

El primer que hem de conèixer quan aprenem un llenguatge de programació és a crear variables.

##  **Variables**

Les variables són com capces on guardarem valors.

### tipus de variable  + nom de la variable  +  assignació  +  valor

```
let name = 'Pepito'
```

Existeixen tres paraules reservades per declarar una variable:

### **let** 

És la paraula reservada que fem servir per declarar una variable que es pugi **reassignar**. 

Exemple:
```
1 let variable = 5
2 variable = 'cinc'
```

```
1 let variable
2 variable = 'value'
```

```
1 let variable = 5
2 let variable = 'cinc'
3 //error
```

### **const** 
És la paraula reservada que fem servir per declarar variables **constants**. És a dir, no es pugi reassignar.

Exemple:
```
1 const variable = 5
2 variable = 'cinc'
3 // error
```

```
1 const variable
2 //error
```
```
1 const variable = [1,2,3]
2 variable[0] = 2
3 console.log(variable) // output: [2,2,3]
```

Notes: 

> Utilitzar **const** en variables que tenim pensat que no es modifiqui el seu valor, ens ajuda a donar intencionalitat.

### **var**

Amb Javascript clàssic es feia servir la paraula **var**.Let i const és van introduir en l'ECMAScript6. Però hauríem d'evitar el seu ús, ja que no permet declarar variables en àmbit de bloc.

Exemple:
```
1 var variable = 5; 
2 {
3   console.log('inside', variable); //5
4   var variable = 10;
5 } 
6
7 console.log('outside',variable); //10
8 variable = variable*2;
9 console.log('changed',variable); //20
```

Amb **let** aquest problema se soluciona: 

Exemple:

```
1 let variable = 5; 
2
3 {
4   console.log('inside', variable); //error
5   let variable = 10;
6 } 
7
8 console.log('outside',variable); //5
9 variable = variable*2;
10 console.log('changed',variable); //10
```

Notes: 
> 🚨 Evitar l'ús de **var** per no provocar comportament inesperat i poc intuïtius.

##  **Àmbit o Scope de les variables**

Scope fa referència a la visibilitat o vida útil d'una variable.

A Javascript existeixen 3 tipus d'àmbits:

### **Àmbit global**

Tota variable que no estigui dins d'un bloc, estarà en àmbit global.

Exemple:

```
1 let greeting = 'Hello World'; 
2
3 {
4   console.log('inside', greeting); //Output: Hello World
5 } 
6
7 console.log('outside',greeting); //Output: Hello World
```

### **Àmbit local o de funció**

L'àmbit d'una variable declarada dins d'una funció, només serà accessible dins de la mateixa funció.

Exemple:

```
1 function sayHello () {
2   let greeting = 'Hi';
3   console.log('inside', greeting); //Output: Hi
4 } 
5
6 console.log('outside',greeting); //error
```

### **Àmbit bloc**

L'àmbit d'una variable declarada dins d'un bloc, només serà accessible dins del mateix bloc. Es delimita mitjançant curly braces {}.

Exemple:

```
1 {
2   let greeting = 'Hi';
3   console.log('inside', greeting); //Output: Hi
4 } 
5
6 console.log('outside',greeting); //error
```

##  **Hoisting**

Les declaracions de variables i funcions és creen en memòria en temps de compilació.

En l'àmbit pràctic, seria com dir que l'intèrpret de Javascript mou aquestes declaracions al principi del seu àmbit.


Això ens permet executar una funció abans de la seva declaració:

Exemple: 
```
1 greet()
2 function greet() {
3   console.log('Hello')
4 }
```

```
1 function greet() {
2   console.log('Hello')
3 }
```

```
1 let greeting = 'Hi'; 
2
3 function greet() {
4   console.log('inside', greeting); //error
5   let greeting = 'Hello';
6   console.log('inside', greeting); //Hello
7 } 
8
9 //Es tradueix:
10 
11 let greeting = 'Hi'; 
12
13 function greet() {
14   let greeting
15   console.log('inside', greeting); //error
16   greeting = 'Hello';
17   console.log('inside', greeting); //Hello
18 } 
```

