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
1 //bad
2 const yyyymmdstr = moment().format('YYYY/MM/DD');
3
4 //better
5 const currentDate = moment().format('YYYY/MM/DD');
```

Notes:
> - Ausència d'informació tècnica en els nombres (AbstractUser)
> - Establir un llenguatge ubicup (user, client, customer..)
>

### **Noms segons el tipus de dada**
------
#### Arrays

Llistes d'elements d'un mateix tipus.

```
1 //bad
2 const fruit = ['manzana','platano','fresa'];
3 //regular
4 const fruitList = ['manzana','platano','fresa'];
5 //good
6 const fruits = ['manzana','platano','fresa'];
7 //better
8 const fruitNames = ['manzana','platano','fresa'];
```

#### Booleans

Només pot tenir dos valors.
```
1 //bad
2 const open = true;
3 const write = true;
4 const fruit = true;
5
6 //good
7 const isOpen = true;
8 const canWrite = true;
9 const hasFruit = true;
```
#### Número

Escollir paraules que descriguin número, com min, max o total:

```
1 //bad
2 const fruits = 3;
3
4 //better
5 const maxFruits = 5;
6 const minFruits = 1;
7 const totalFruits = 3;
```

#### Funcions

El nom de la funció ha d'expressar el que fa, però també cal abstreure's de la implementació de la funció.

```
1 //bad
2 createUserIfNotExists()
3 updateUserIfNotEmpty()
4 sendEmailIfFieldsValid()
5
6 //better
7 createUser(...)
8 updateUser(...)
9 sendEmail()
```

Notes: 
> - accés, modificació o predicat = get, set, is
> - Fer ús de les paraules clau get i set quan accedim a propietats d'objectes.

#### Objectes i Classes

Han de tenir noms formats per un substantiu o frases de substantiu com User, UserProfile, Account o AdressParser...

Notes:
> - evitar noms genèrics com Manager, Processor, Data o Info... Si escollim noms massa genèrics tendim a crear classes amb múltiples responsabilitats


