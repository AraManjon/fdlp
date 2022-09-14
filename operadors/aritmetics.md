# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

###  **Aritmètics**
Similars als símbols matemàtics que ja coneixem i executen operacions matemàtiques.

| operació |   símbol |
|----------|----------|
|Addició |    +
|Resta |    -
|Multiplicació |    *
|Divisió |    /

```
const sum = 2 + 2 // 4
const rest = 2 - 2 // 0
const mult = 4 * 2 // 8
const div = 10 / 2 // 5
```

Notes:
> També tenim el símbol ```**``` per operacions exponencials i ```%``` per extreure el restant.

### **Concatenació de strings amb binaris**

Si fem servir l'operador  ```+``` amb strings els concatena.

```
const stringConcatenated = "Hola" + "Mundo"
console.log(stringConcatenated) // HolaMundo
```

```
const hello = "Hola"
const world = "Mundo"
const stringInterspaced = hello + ' ' + world
console.log(stringInterspaced); // Hola Mundo
```

🔎 Fes click [aquí](../template-literals/template-literals.md) per conèixer els **Template literals**, concatenar strings amb expressions incrustades.


🚨 En el moment que l'operador ```+``` troba un valor tipus string i un valor binari, entén que volem concatenar i transformar-lo a string. El resultat seria: 

```
console.log( '1' + 2 ) // "12"

console.log( 'hola' + 2 ) // "hola2"

console.log(2 + 2 + '1' ) // "41" i no "221"
```

### 📍**Modificació en el lloc**

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

### **⬆Augmentar o ⬇Disminuir**

Augmentar o disminuir un nombre a 1 és una de les operacions numèriques més habituals.

```
let counter = 2
counter++ // igual que counter = counter + 1
console.log( counter ) // 3
```

```
let counter = 2
counter-- // igual que counter = counter - 1
console.log( counter ) // 1
```

🚨 Podem fer servir aquesta manera d'incrementar afegint aquests operadors davant la variable o darrere. La diferència és el valor que retorna.

```
let counter = 1
let a = ++counter // igual que counter = counter + 1 i després fa a = counter 

console.log(a) // 2
console.log(counter) // 2
```

```
let counter = 1
let a = counter++ // igual que a = counter i després fa counter = counter + 1

console.log(a) // 1
console.log(counter) // 2
```

```
let counter = 1
counter++
++counter 

console.log(counter) // 3
```

### 📚 Recursos
Molts més exemples amb excepcions [aquí](https://javascript.info/operators).