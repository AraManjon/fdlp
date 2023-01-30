# VARIABLES

El primer que hem de conèixer quan aprenem un llenguatge de programació és a crear variables.

Les variables són com capces on guardarem valors.

**tipus de variable** + **nom de la variable**  +  **assignació**  + **valor**

Exemple:

```js
let name = 'Pepito'
```

## Existeixen **tres paraules reservades per declarar una variable**:

### **let** 

És la paraula reservada que fem servir per declarar una variable que es pugi **reassignar**. 

Exemple:

```js
let exampleVariable = 5
exampleVariable = 'cinc'
```

Una variable declarada com a **let** es pot inicialitzar sense cap valor, és a dir, el seu valor és **undefined** i posteriorment li reassignarem un valor.

Exemple:

```js
let exampleVariable
exampleVariable = 'value'
```

Les variables només es poden declarar un cop.

Exemple:

```js
let exampleVariable = 5
let exampleVariable = 'cinc' // error
```

### **const** 
És la paraula reservada que fem servir per declarar variables **constants**. És a dir, no es pugui reassignar.

Exemple:

```js
const exampleVariable = 5
exampleVariable = 'cinc' // error
```

Com no es poden reassignar, el programa no permet inicialitzar una variable de tipus **const** sense cap valor. 

Exemple:

```js
const exampleVariable // error
```

Tingues en compte que el concepte reassignar no és el mateix que modificar. Una variable de tipus **const** és modificable igual que de tipus **let**.

Exemple:

```js
const exampleVariable = [1, 2, 3]

exampleVariable[0] = 2

exampleVariable // [2, 2, 3]
```

🚨 Important! 

> Es recomana utilitzar **const** per defecte i només **let** en el cas que sigui una variable que després reassignem. 

> Quan es tracta de valors constants del programa, o valors hard-coded, es recomana seguir les guies de convenció per indicar la intenció que són valors només de lectura.
>
> Exemple:
>
> ```js
> const CONSTANT_NAME = 'value'
> ```
> 

### **var**

Amb JavaScript clàssic es feia servir la paraula ```var```. Es van introduir ```let``` i ```const``` en l'ECMAScript6. S'ha d'evitar el seu ús, ja que amb let i const es van afegir funcionalitats i lèxic que amb l'ús de ```var``` no teníem.

Exemple:

```js
var value = 3
```

La paraula reservada **var** la veurem en l'apartat [àmbit de variables](./ambit-variables.md).
