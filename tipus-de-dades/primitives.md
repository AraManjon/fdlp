# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

## **Tipus de dades primitives**

Primitius vol dir que són immutables. Serien tots els tipus excepte els objectes.

Hi ha 7:

### **String** 

typeof instance === "string"

Per representar dades textuals.

S'escriuen entre cometes dobles " " o simples ' '.

El primer element estarà en l'índex 0, el següent en l'índex 1, i successivament.

```
const exampleSimpleQuotes = 'A string'

console.log(exampleSimpleQuotes[0]) //output: 'A'

const exempleString = "I'm a string"

```

----------

### **Number** 

typeof instance === "number"

Per representar numèrics.

```
const exempleNumber = 1

const exempleDecimalNumber = 0.5
```

----------

### **Boolean** 

typeof instance === "boolean"

true || false

```
let isUserLogged = true

isUserLogged = false
```

--------

### **Undefined** 

typeof instance === "undefined"
 
Una variable a la qual no se li ha assignat valor, és undefined.

```
let username = undefined
```

---------

### **Null** 

typeof instance === "object"

instance === null // true

Representa la intencionalitat d'un valor nul o buit.

```
let shoppingCart = null
```
----------

### **BigInt** 

typeof instance === "bigint"

🚨 No té ús habitual

----------

### **Symbol** 

typeof instance === "symbol"

🚨 No té ús habitual

----------

### ❓ **Entendre que vol dir que no siguin mutables** 

Exemple:

```
let firstName = 'Pepito'
firstName.toUpperCase()
console.log(firstName) // output: Pepito, expected: PEPITO
```

No es modifica l'string original, sinó que el mètode ```toUpperCase()``` retorna un nou string.

Si el que volem és guardar a la variable firstName el valor en majúscules haurem de reassignar.

### **Conversió de tipus** 

#### Convertir a String

```
String(true) // "true"

String(10) // "10"
```

#### Convertir a Number

```
Number('123') // 123

Number(true) // 1

Number(false) // 0

```

| Valor |   Es transforma... |
|-------|--------------------|
|undefined |    NaN
|null	   |    0
|true i false|	1 i 0
|string	| si l'string és buit es transforma en 0. Si el contingut es llegeix com a string retorn NaN.

Notes:

> **NaN** és una propietat global que representa Not-A-Number. El que ens indica és que el valor no es pot representar dins de les limitacions d'un tipus numèric, encara que és considerat de tipus number. Exemple:

```
const exampleNaN = Number('five') // NaN

typeof exampleNaN === 'number'

isNaN(exampleNaN) // true

```

#### Convertir a Boolean

```
Boolean(1) // true
Boolean(0) // false

Boolean("hello") // true
Boolean("") // false
Boolean(" ") // true
```

| Valor |   Es transforma... |
|-------|--------------------|
|undefined, null, '', 0, NaN |    false
|altres	   |    true