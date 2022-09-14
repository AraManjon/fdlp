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
let exampleVariable = 5
exampleVariable = 'cinc'
```

```
let exampleVariable
exampleVariable = 'value'
```

```
let exampleVariable = 5
let exampleVariable = 'cinc'
//error
```

### **const** 
És la paraula reservada que fem servir per declarar variables **constants**. És a dir, no es pugi reassignar.

Exemple:
```
const exampleVariable = 5
exampleVariable = 'cinc'
// error
```

```
const exampleVariable
//error
```

```
const exampleVariable = [1,2,3]

exampleVariable[0] = 2

exampleVariable // [2,2,3]
```

Notes: 

> 🚨 Utilitzar **const** en variables que tenim pensat que no es modifiqui el seu valor, ens ajuda a donar intencionalitat.


### **var**

Amb Javascript clàssic es feia servir la paraula ```var```. ```Let``` i ```const``` és van introduir en l'ECMAScript6. S'ha d'evitar el seu ús ja que amb let i const es van afegir funcionalitats i lèxic que amb l'ús de ```var``` no teníem.

La paraula reservada **var** la veurem en l'apartat [àmbit de variables](./ambit-variables.md).
