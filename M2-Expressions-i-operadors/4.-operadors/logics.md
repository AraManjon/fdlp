# LÒGICS

## **```&&``` (AND)**

A la programació clàssica, AND retorna ```true``` si els dos operands són veritables i ```false``` en cas contrari:

Exemple:

```js
true && true // true
false && true // false
true && false // false
false && false // false

'' && 'hello world' // ''
' ' && 'hello world' // 'hello world'
' ' && 1 // 1
0 && 1 // 0
```

Exemple:

```js
let hour = 14

const isAfternoon = hour >= 12 && hour <= 18

console.log(isAfternoon) // true
```

📝 Notes:

> - Avalua els operands d'esquerra a dreta.
> - Per a cada operand, el converteix en un boolean. Si el resultat és ```false```, s'atura i retorna el valor original d'aquest operand.
> - Si s'han avaluat tots els operands (és a dir, tots eren veritables), retorna l'últim operand.
> 
> Exemple:
> 
> ```js
> 1 && 0 && true // 0
> 1 && true && 5 // 5
> null && 5 // null
> 0 && "qualsevol valor" // 0
> ```

## **```||``` (OR)**

Si algun dels seus arguments és ```true```, retorna ```true```, en cas contrari retorna ```false```.

Exemple:

```js
true || true  // true
false || true // true
true || false // true
false || false // false

'' || 'hello world' // 'hello world'
' ' || 'hello world' // ' '
' ' || 1 // ' '
0 || 1 // 1
```

Exemple:

```js
const hour = 9

const shopIsClosed = hour < 10 || hour > 18

console.log(shopIsClosed) // true
```

📝 Notes:

> - Avalua els operands d'esquerra a dreta.
> - Per a cada operand, el converteix en boolean. Si el resultat és ```true```, s'atura i retorna el valor original d'aquest operand.
> - Si s'han avaluat tots els operands (és a dir, tots eren falsos), retorna l'últim operand.
> 
> Exemple:
> 
> ```js 
> 1 || 0 // 1 
> 
> null || 1 // 1
> null || 0 || 1 // 1
> 
> undefined || null || 0 // 0
> 
> '' || 'hola' // hola
> '' || 'hola' || true // hola
> ```

## **```!``` (NOT)**

L'operador accepta un sol argument i fa el següent:

1. Converteix l'operand al tipus boolean: ```true``` o ```false```.
2. Retorna el valor invers.

Exemple:

```js
!true // false
!1  // false

!false  //true
!0  //true
!'' //  true
!' ' //  false
!'hello world' //  false

1 !== 1 // false
```

Exemple:

```js
const username = prompt('Introdueix el teu nom')

const userNotIdentified = !username

console.log(`user not authenticated -> ${userNotIdentified}`) 
```

📝 Notes:

> Un doble ```!!``` (NOT) de vegades s'utilitza per convertir un valor al tipus boolean.
> 
> Exemple:
>
> ```js
> console.log( !!"non-empty string" ) // true
> console.log( !!null ) // false
> ```

## **```??``` (Nullish)**

És una nova incorporació del llenguatge.

Tracta ```null``` i ```undefinded``` de la mateixa manera. En altres paraules, ```??``` retorna el primer valor que no sigui ```null``` o ```undefinded```.

Exemple:

```js

const numbers = [10, 5, 0]

const numberPosition = prompt('Escull la posició del nombre que vols veure')

const userChoice = numbers[numberPosition] ?? 'No existeix cap nombre en aquesta posició'

console.log(userChoice)
```

📝 Notes:
> ?? retorna el primer valor "definit" (entenen definit com a qualsevol valor que no sigui ```undefined``` o ```null```).