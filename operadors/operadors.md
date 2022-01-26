# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Operadors**

Existeixen diferents tipus d'operadors:

###  **Aritmètics**
Similars als símbols matemàtics que ja conèixem i executen operacions matemàtiques.


| operació |   simbol |
|----------|----------|
|Addició |    +
|Resta |    -
|Multiplicació |    *
|Divisió |    /

```
const suma = 2 + 2 // 4
const resta = 2 - 2 // 0
const multiplicacio = 4 * 2 // 8
const divisio = 10 * 2 // 5
```
Notes:
> També tenim el simbols ```**``` per operacions exponencials i ```%``` per extreure el restant.

#### **Concatenació d'strings amb binaris**

Si fem servir l'operador  ```+```amb strings els concatena.

```
let exempleStringConcatenada = "Hola" + "Mundo";
console.log(exempleStringConcatenada); // HolaMundo
```

```
const hello = "Hola"
const world = "Mundo"
let stringAmbEspai = hello + ' ' + world;
console.log(exempleStringConcatenada); // Hola Mundo
```

🚨 En el moment que l'operador ```+``` troba un valor tipus string i un valor binari, enten que volem concatenar i transformarlo a string. El resultat seria: 

```
console.log( '1' + 2 ); // "12"
```
```
console.log( 'hola' + 2 ); // "hola2"
```
```
console.log(2 + 2 + '1' ); // "41" i no "221"
````

📚 Recursos

Molts més exemples amb excepcions [aquí](https://javascript.info/operators)

#### **Modificació en el lloc**

Sovint hem d'aplicar un operador a una variable i emmagatzemar el nou resultat en aquesta mateixa variable.

```
let n = 2
n = n + 5
n = n * 2
```
```
let n = 2;
n += 5; // 7 (igual que n = n + 5)
n *= 2; // 14 (igual que n = n * 2)

console.log( n ); // 14
```

#### **Augmentar o disminuir**

Augmentar o disminuir un nombre en un és una de les operacions numèriques més habituals.

```
let counter = 2;
counter++;        // igual que counter + 1
console.log( counter ); // 3
```
```
let counter = 2;
counter--;        // igual que counter - 1
console.log( counter ); // 1
```

🚨 Podem fer servir aquesta manera de incrementar afegint aquests operador devant la variable o darrera. La diferencia és el valor que retorna.

```
let counter = 1;
let a = ++counter;

console.log(a); // 2
```
```
let counter = 1;
let a = counter++; 

console.log(a); // 1
```


###  **Comparació**
Tots els operadors de comparació retornen un valor boolean:

**true**: significa "sí", "correcte" o "la veritat".

**false**: significa "no", "incorrecte" o "no és la veritat".

Major/menys que: ```a > b, a < b```.

Major/menys que o igual: ```a >= b, a <= b```.

Igual: ```a === b```

No és igual: en matemàtiques la notació és ≠, però en JavaScript s'escriu com ```a !== b```.

```
console.log( 2 > 1 );  // true 
console.log( 2 === 1 ); // false 
console.log( 2 !== 1 ); // true
```

Els strings són comparats lletra per lletra.
```
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
```


🚨 Per comprobar la igualtat de dos valors també exiteix amb ```==``` o ```!=```, en aquest cas no compara tipus, es per això que es recomana no utilitzar.

```
console.log( 0 == false ); // true
console.log( 10 == '10' ); // true
```
```
console.log( 0 === false ); // false
console.log( 10 === '10' ); // false

```

###  **Lògics**

|| (OR), && (AND), ! (NOT)