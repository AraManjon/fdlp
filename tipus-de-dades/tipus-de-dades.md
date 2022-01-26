# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

## **Tipus de dades**

Existeixen diferents tipus de dades segons el valor que contingui.

## **Tipus de dades primitives** 

Primitius vol dir que són immutables. Serien tots els tipus excepte els objectes.

Hi han 7:

### **String** 

typeof instance === "string"

Per representar dades textuals.

S'escriuen entre cometes dobles " " o simples ' '.

El primer element estarà en l'índex 0, el sigüent en l'índex 1, i successivament.

```
const exempleString = "I'm a string"
console.log(exempleString[0]) //output: 'I'
```
----------

### **Number** 
typeof instance === "number"

Per representar numèrics.

```
const exempleNumber = 1
```

----------

### **Boolean** 

typeof instance === "boolean"

true || false

```
const exempleBoolean = true
```

--------

### **Undefined** 
typeof instance === "undefined"

Una variable a la qual no se li ha assignat valor, és undefined.

```
const exempleUndefined = undefined
```

---------

### **Null** 

typeof instance === "object"

instance === null

Representa la intencionalitat d'un valor nul o buit.

```
const exempleNull = null
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
const firstName = 'Pepito'
firstName.toUpperCase()
console.log(firstName) // output: Pepito, expected: PEPITO
```

No es modifica l'string original, si no que el mètode ```toUpperCase()``` retorna un nou string.

### **Conversió de tipus** 

#### Convertir a String

```
let value = true

value = String(value); // "true"
console.log(typeof value); // string
```
#### Convertir a Number

```
let value = '123'

value = Number(value); // 123
console.log(typeof value); // number
```

| Valor |   Es transforma... |
|-------|--------------------|
|undefined |    NaN
|null	   |    0
|true i false|	1 i 0
|string	| si l'string és buit es transforma en 0. Si el contingut es llegeix com a string retorn NaN.

Notes:

> **NaN** és una propietat global que representa Not-A-Number. El que ens indica és que el valor no es pot representar dins de les limitacions d'un tipus numèric, encara que és considerat de tipus number.
>
>typeof instance === 'number'

#### Convertir a Boolean

```
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
```

| Valor |   Es transforma... |
|-------|--------------------|
|undefined, null, '', 0, NaN |    false
|altres	   |    true


## **Objectes**

Un objecte és un valor en memòria, és a dir, quan es declara, es crea una referència que sempre apuntarà a aquesta primera instància de l'objecte.

Són mutables, és a dir, es poden editar, eliminar o afegir propietats.

Dins dels objectes hi ha diferents tipus d'estructures de dades, com per exemple el Array i els Objectes.

### **Array**

typeof instance === "object"

instance instanceof Array

Representen llistes.

El primer element estarà en l'índex 0, el sigüent en l'índex 1, i successivament.

```
const fruites = ['Poma', 'Pinya', 'Pera']
console.log(fruites[0]) //output: 'Poma'
```

Poden contindre una llista de diferents tipus de dades.
```
const exampleList = [1, 'dos', [3,4], true]
```
-----------

### **Objecte**

typeof instance === "object"

Compost per una col·lecció d'elements que contenen **key** i **value**.

Per accedir al valor d'una propietat, podem fer-ho a través de la key.
```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }

console.log(persona.nom) // Output: Pepito
console.log(persona['nom']) // Output: Pepito
```

També podem crear una nova propietat afegint una nova key amb un valor.
```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }

persona.city = 'Barcelona' 
console.log(persona) // Output: { nom: 'Pepito', cognom: 'Grillo', edat: 45, city: 'Barcelona' }
```

### ❓ **Entendre que vol dir que siguin mutables** 

```
const prices = ['5€', '10€']
prices[0] = '20€'
console.log(prices) // output: ['20€', '10€']
```

### ❓ **Entendre que vol dir que un objecte està referenciat** 

```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
const personaWithCar = persona

personaWithCity.car = true
console.log(persona) 
// Expected: { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
// Output:  { nom: 'Pepito', cognom: 'Grillo', edat: 45, car: true }
```

Notes:
> 🚨 Hem d'anar amb compte i tenir controlat quan volem modificar una dada de tipus objecte, ja que és posible que no volguem modificar la primera instància original, per això, és recomenable fer còpies de les dades tipus objecte quan volem treballar amb elles.

### **Com crear còpies d'objectes**

L'**spread operator** és una forma simple de recollir un per un els valors d'una estructura de dades, és a dir, itera l'estructura i de cada valor fa una copia dins d'una instancia nova de l'estructura.

Es fa servir afegint ```...``` a l'inici de la instància que volem copiar.

És una forma més expresiva.


Exemple en objectes: 
```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
const copyPersona = {...persona}
const copyPersonaSenseSpreadOperator = Object.assign({}, persona)

copyPersona.edat = 10
console.log(persona.edat) // Output: 45
console.log(copyPersona.edat) // Output: 10
```

Exemple en arrays: 
```
const colors = ['red', 'blue', 'yellow']
const copyColors = [...colors]
const copyColorsSenseSpreadOperator = myArray.slice();

copyColors.push('white')
console.log(copyColors) // Output: ['red', 'blue', 'yellow', 'white']
console.log(colors) // Output: ['red', 'blue', 'yellow']
```

Notes:
> 🚨 Si el valor que conté aquesta estructura no és primitu, continuarà mantenint aquesta referencia, així que tindrem que trencar també la referencia d'aquest valor.

> Nous [tipus de dades](https://dev.to/briansanteliz/nuevos-tipos-de-datos-en-javascript-records-tuples-2kiev) que s'introduiran aviat en Javascript per conseguir evitar aquesta mutabilitat en objectes i arrays.
