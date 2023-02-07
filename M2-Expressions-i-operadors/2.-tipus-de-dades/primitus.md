# TIPUS DE DADES PRIMITIVES / NO-MUTABLES

Primitius vol dir que són immutables. Serien tots els tipus excepte els objectes.

Hi ha 7:

## **String** 

Per representar dades textuals.

S'escriuen entre cometes dobles " " o simples ' '.

El primer element estarà en l'índex 0, el següent en l'índex 1, i successivament.

```js
typeof instance === "string"
```

Exemple:

```js
const exampleSimpleQuotes = 'A string'

console.log(exampleSimpleQuotes[0]) //'A'

const exempleString = "I'm a string"
```

## **Number** 

Per representar numèrics.

```js
typeof instance === "number"
```

Exemple:

```js
const exampleNumber = 1

const exampleDecimalNumber = 0.5

const exampleNegativeNumber = -1
```

## **Boolean** 

Només té dos valors possibles: ```true``` o ```false```.

```js
typeof instance === "boolean"
```

Exemple:

```js
let isUserLogged = true

isUserLogged = false
```

## **Null** 

És només un valor especial que representa "res", "buit" o "valor desconegut".

```js
typeof instance === "object"

instance === null // true
```

Exemple:

```js
let shoppingCart = null
```

📝 Notes:

> La raó perquè null és de typeof object, és per un bug en la creació del llenguatge. Mira aquest [vídeo](https://www.youtube.com/watch?v=E9AKgDdZKnE).

## **Undefined** 

És un valor que representa una variable amb un valor no assignat. Quan una variable és declarada, però no assignada el seu valor és ```undefined```.

```js
typeof instance === "undefined"
``` 

Exemple:

```js
let username

console.log(username) // undefined
```

També es pot assignar explícitament a una variable el valor ```undefined``` però es recomana no fer-ho. Normalment, s'utilitza ```null``` per assignar un valor "buit" o "desconegut" a una variable, mentre que ```undefined``` es reserva com a valor inicial predeterminat per a coses no assignades.

Exemple:

```js
let username = undefined

console.log(username) // undefined
```

## **BigInt** 

És un tipus numèric especial que proporciona suport per a nombres enters de longitud arbitrària. Un ```bigint``` es crea afegint ```n``` al final d'un literal enter o cridant a la funció ```BigInt()``` que crea bigints a partir de cadenes, números, etc.

```js
typeof instance === "bigint"
```

Exemple afegint n:

```js
const number = 12n
```

Exemple fen ús de la funció BigInt:

```js
const number = BigInt(12)
```

🚨 Important!

> Com que els números de BigInt rarament es necessiten, no els cobrim aquí. Però pots veure més informació [MDN BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## **Symbol** 

Un símbol representa un identificador únic. Això vol dir que, cada vegada que en creem un de nou, és completament diferent i no es compara amb cap altre símbol, fins i tot si es creen a partir del mateix valor.

Un valor d'aquest tipus es pot crear mitjançant ```Symbol()```.


```js
typeof instance === "symbol"
```

Exemple:

```js
const mySymbolWithDescription = Symbol('descripció')

console.log(mySymbolWithDescription) // Symbol(descripció)
```

🚨 Important!

> Els símbols s'utilitzen en casos molt concrets per això, no els cobrim aquí. Pots veure amb més detall quan serien útils i com aplicar-los en aquest [article](https://midu.dev/javascript-symbols-que-son-para-que-sirven/).

## **Conversió de tipus** 

### Convertir a String

```js
String(true) // "true"

String(10) // "10"

String(undefined) // 'undefned'

String(null) // 'null'
```

### Convertir a Number

```js
Number('123') // 123

Number('hello world!') // NaN

Number('') // 0

Number(' ') // 0

Number(true) // 1

Number(false) // 0

Number(undefined) // NaN

Number(null) // 0

```
 
📝 Notes:

> **NaN** és una propietat global que representa Not-A-Number. El que ens indica és que el valor no es pot representar dins de les limitacions d'un tipus numèric, encara que és considerat de tipus number. Pots veure més exemples a [MDN NaN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN). 
>
> Exemple:
>
> ```js
> const exampleNaN = Number('five') // NaN
> 
> typeof exampleNaN === 'number'
> 
> isNaN(exampleNaN) // true
> ```

### Convertir a Boolean

```js
Boolean(1234) // true

Boolean(1) // true

Boolean(0) // false

Boolean("hello") // true

Boolean("") // false

Boolean(" ") // true

Boolean(undefined) // false

Boolean(null) // false
```