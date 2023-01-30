# IDENTIFICADORS

Una seqüència de caràcters en el codi que serveixen per identificar una variable, una funció o una propietat.

>🚫 No fer servir noms [reservats](https://www.w3schools.com/js/js_reserved.asp).
> 
> Exemple:
>
> ```js
> // no fer ús de paraules reservades
> let const = 5 // error
> let false = '' // error
> ```

>🔎 Regles sobre quin tipus de [símbols o dígits no podem fer servir](https://developer.mozilla.org/es/docs/Glossary/Identifier).
> 
> Exemple:
> 
> ```js
> // no utilitzar nombres a l'inici d'un identificador
> let 4num = 'quatre' // error
> ```
> ```js
> let num4 = 'quatre'
> ```
>
> ```js
> // només es poden fer servir com a símbols _ o $
> let !name = 'Pepito' // error
> ```
> ```js
> let $name = 'Pepito'
> let _name = 'Pepito'
> ```

## **Naming: Noms pronunciables i expressius**

*El nostre codi ha de ser simple i directe, s'hauria de llegir amb la mateixa facilitat que un text ben escrit*. – Grady Booch

Exemple:

```js
//bad
const yyyymmdstr = moment().format('YYYY/MM/DD')

//better
const currentDate = moment().format('YYYY/MM/DD')
```

👍 Consell:
> - Absència d'informació tècnica en els nombres (AbstractUser)
> - Establir un llenguatge ubic (user, client, customer..)

## **Noms segons el tipus de dada**

### Arrays

Llistes d'elements d'un mateix tipus.

Exemple:

```js
//bad
const fruit = ['apple','banana','strawberry']

//regular
const fruitList = ['apple','banana','strawberry']

//good
const fruits = ['apple','banana','strawberry']

//better
const fruitNames = ['apple','banana','strawberry']
```

### Booleans

Només pot tenir dos valors.

Exemple:

```js
//bad
let open = true;
let write = true;
let fruit = true;

//good
let isOpen = true;
let canWrite = true;
let hasFruit = true;
```

### Número

Escollir paraules que descriguin número, com min, max o total:

Exemple:

```js
//bad
const fruits = 3

//better
const maxFruits = 5
const minFruits = 1
const totalFruits = 3
```

### Funcions

Començaran amb un verb, ja que realitzen una acció.

El nom de la funció ha d'expressar el que fa, però també cal abstreure's de la implementació de la funció. 

Exemple:

```js
//bad
createUserIfNotExists()
updateUserIfNotEmpty()
sendEmailIfFieldsValid()

//better
createUser()
updateUser()
sendEmail()
```

👍 Consell:
> - accés, modificació o predicat = get, set, is
> - Fer ús de les paraules clau get i set quan accedim a propietats d'objectes.

### Objectes i Classes

Han de tenir noms formats per un substantiu o frases de substantiu com User, UserProfile, Account o AdressParser...

👍 Consell:
> - evitar noms genèrics com Manager, Processor, Data o Info... Si escollim noms massa genèrics, pot provocar a crear classes amb múltiples responsabilitats



