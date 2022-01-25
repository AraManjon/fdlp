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
firsName.toUpperCase()
console.log(firstName) // output: Pepito, expected: PEPITOS
```

No es modifica l'string original, si no que el mètode ```toUpperCase()``` retorna un nou string.

## **Objectes**

Un objecte és un valor en memòria, és a dir, quan es declara, es crea una referència que sempre apuntarà a aquesta primera instància de l'objecte.

Són mutables, és a dir, es poden editar, eliminar o afegir propietats.

Dins dels objectes hi ha diferents tipus d'estructures de dades, com per exemple el Array i els Objectes.

### **Array**

typeof instance === "object"

instance instanceof Array

Representen llistes.

Poden contindree una llista de diferents tipus de dades.

El primer element estarà en l'índex 0, el sigüent en l'índex 1, i successivament.

```
const fruites = ['Poma', 'Pinya', 'Pera']
console.log(fruites[0]) //output: 'Poma'

const exampleList = [1, 'dos', [3,4], true]
```
-----------

### **Objecte**

typeof instance === "object"

Compost per una col·lecció d'elements que contenen **key** i **value**.

```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: '45' }

console.log(persona.nom) // Output: Pepito
console.log(persona['nom']) // Output: Pepito
```

### ❓ **Entendre que vol dir que siguin mutables** 

Exemple:
```
const prices = []
prices.push('20€')
console.log(prices) // output: 20€
```

### ❓ **Entendre que vol dir que un objecte està referenciat** 

```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
const copyPersona = persona

copyPersona.edat = 46
console.log(persona.edat) // Output: 46
```