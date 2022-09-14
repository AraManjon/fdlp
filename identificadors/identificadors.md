# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

## **Identificador**
Una seqüència de caràcters en el codi que serveixen per identificar una variable, una funció o una propietat.

Notes: 
>🚫 No fer servir noms [reservats](https://www.w3schools.com/js/js_reserved.asp).
>
>🔎 Regles sobre quin tipus de [símbols o dígits no podem fer servir](https://developer.mozilla.org/es/docs/Glossary/Identifier).

## **Naming**

“El nostre codi ha de ser simple i directe, s'hauria de llegir amb la mateixa facilitat que un text ben escrit”. – Grady Booch

### **Noms pronunciables i expressius**

```
//bad
const yyyymmdstr = moment().format('YYYY/MM/DD')

//better
const currentDate = moment().format('YYYY/MM/DD')
```

Notes:
> - Absència d'informació tècnica en els nombres (AbstractUser)
> - Establir un llenguatge ubic (user, client, customer..)
>

### **Noms segons el tipus de dada**
------
#### Arrays

Llistes d'elements d'un mateix tipus.

```
//bad
const fruit = ['apple','banana','strawberry']

//regular
const fruitList = ['apple','banana','strawberry']

//good
const fruits = ['apple','banana','strawberry']

//better
const fruitNames = ['apple','banana','strawberry']
```

#### Booleans

Només pot tenir dos valors.
```
//bad
let open = true;
let write = true;
let fruit = true;

//good
let isOpen = true;
let canWrite = true;
let hasFruit = true;
```

#### Número

Escollir paraules que descriguin número, com min, max o total:

```
//bad
const fruits = 3

//better
const maxFruits = 5
const minFruits = 1
const totalFruits = 3
```

#### Funcions

El nom de la funció ha d'expressar el que fa, però també cal abstreure's de la implementació de la funció.

```
//bad
createUserIfNotExists()
updateUserIfNotEmpty()
sendEmailIfFieldsValid()

//better
createUser(...)
updateUser(...)
sendEmail()
```

Notes: 
> - accés, modificació o predicat = get, set, is
> - Fer ús de les paraules clau get i set quan accedim a propietats d'objectes.

#### Objectes i Classes

Han de tenir noms formats per un substantiu o frases de substantiu com User, UserProfile, Account o AdressParser...

Notes:
> - evitar noms genèrics com Manager, Processor, Data o Info... Si escollim noms massa genèrics tendim a crear classes amb múltiples responsabilitats


