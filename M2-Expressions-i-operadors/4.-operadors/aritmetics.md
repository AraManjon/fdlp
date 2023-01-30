# ARITMÈTICS

Similars als símbols matemàtics que ja coneixem i executen operacions matemàtiques.

| operació |   símbol |
|----------|----------|
|Addició |    +
|Resta |    -
|Multiplicació |    *
|Divisió |    /
|Restant | %
|Exponencials | **

Exemple:

```js
const sum = 2 + 2 // 4
const rest = 2 - 2 // 0
const mult = 4 * 2 // 8
const div = 10 / 2 // 5
const rest = 10 % 7 // 3
const div = 9 ** 2 // 81
```

## **Concatenació de strings amb binaris**

Si fem servir l'operador  ```+``` amb strings els concatena.

Exemple:

```js
const stringConcatenated = "Hello" + "World"
console.log(stringConcatenated) // HelloWorld
```

```js
const valor1 = "Hello"
const valor2 = "World"

const stringInterspaced = valor1 + ' ' + valor2

console.log(stringInterspaced); // Hello World
```

🚨 Important!

> Per concatenar càdena de caràcters i expressions es recomana fer ús dels [template literals](../4.-template-literals/template-literals.md).

🚨 Important!

> En el moment que l'operador ```+``` troba un valor tipus string i un valor binari, entén que volem concatenar i transformar-lo a string.
> 
> Exemple:
>
> ```js
> console.log( '1' + 2 ) // "12"
> 
> console.log( 'hola' + 2 ) // "hola2"
> 
> console.log(2 + 2 + '1' ) // "41" i no "221"
> ```

## **Modificació en el lloc**

Sovint hem d'aplicar un operador a una variable i emmagatzemar el nou resultat en aquesta mateixa variable.

Exemple:

```js
let n = 2
n = n + 5
n = n * 2
```
Exemple opció reduïda:

```js
let n = 2;
n += 5; // 7 (igual que n = n + 5)
n *= 2; // 14 (igual que n = n * 2)

console.log( n ); // 14
```

## **⬆ Augmentar o ⬇ Disminuir**

Augmentar o disminuir un nombre a 1 és una de les operacions numèriques més habituals.

Exemple de com augmentar 1:

```js
let counter = 2
counter++ // igual que counter = counter + 1
console.log( counter ) // 3
```

Exemple de com disminuir 1:

```js
let counter = 2
counter-- // igual que counter = counter - 1
console.log( counter ) // 1
```

🚨 Important!

> Com podem veure, es pot afegir l'operador d'increment ```++``` o el de disminuir ```--``` davant o darrere la variable. La diferència és el valor que retorna.
> 
> Exemple:
>
> ```js
> let counter = 1
>
> console.log(++counter) // 2
> console.log(counter) // 2
> ```
> 
> ```js
> let counter = 1
> console.log(counter++) // 1
> console.log(counter) // 2
> ```