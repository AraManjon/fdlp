# CONDICIONALS

De vegades hem de determinar diferents accions segons diferents condicions.

## **Declaració ```if```**

La sentència ```if(...)``` avalua una condició entre parèntesis i, si el resultat és ```true```, executa un bloc de codi.

Exemple:

```js
const correctResult = 4

const userResponse = Number(prompt("Quan és 2 + 2 ?"))

if ( userResponse === correctResult ) {
    alert( 'Correcte!' )
    console.log('Ets molt intel·ligent')
}
```

Exemple:

```js
const correctResult = 4

const userResponse = Number(prompt("Quan és 2 + 2 ?"))
const isCorrect = userResponse === correctResult

if ( isCorrect ) {
    alert( 'Correcte!' )
    console.log('Ets molt intel·ligent')
}
```
🚨 Important!

> Abans de ES6, després del ```if(...)``` sempre utilitzàvem ```{}```, amb aquesta actualització, quan dins d'un bloc només tenim una declaració, és a dir, només una línia de codi, les ```{}``` són opcionals.
>
> Exemple:
> ```js
> const correctResult = 4
> 
> const userResponse = Number(prompt("Quan és 2 + 2 ?"))
> 
> if ( userResponse === correctResult ) alert( 'Correcte!' )
> ```

## **Conversió**

Avalua l'expressió entre parèntesis i converteix el resultat en un boolean.

```js
if (0) {
    console.log('no entra')
}
```

```js
if (1) {
    console.log('entra')
}
```
🚨 Important! 

> ```0, "", null, undefined i NaN``` són avaluats com a ```false```. 
> 
> ```js
> Boolean('') // false
> Boolean(' ') // true
> Boolean(undefined) // false
> Boolean([]) // true
> Boolean({}) // true
> Boolean(!'') // true
> Boolean(!false) // true
> ```

## **Clàusula ```else```**

La instrucció ```if``` pot contenir un bloc opcional ```else```. S'executa quan la condició és ```false```.

```js
const correctResult = 4

const userResponse = Number(prompt("Quan és 2 + 2 ?"))
const isCorrect = userResponse === correctResult

if ( isCorrect ) {
    alert( 'Correcte!' )
    console.log('Ets molt intel·ligent')
} else {
    alert( "T'has equivocat..." )
}
```

## **Clàusula ```else if```**

Si volem tenir més d'una opció de condicionals que actuïn diferent en cada cas.


```js

const language = 'EN'

if ( language === 'EN' ) {
    console.log( 'hello' )
} else if ( language === 'IT' ) {
    console.log( 'ciao' )
} else if ( language === 'FR' ) {
    console.log( 'bonjour' )
} else if ( language === 'CAT' ) {
    console.log( 'hola' )
} else {
    console.log( 'No entenc el teu idioma!' )
}
```