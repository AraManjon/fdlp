# OPERADOR TERNARI

## **Operador condicional ```?```**

També conegut com a **ternari**. Ens ajuda a fer una operació condicionada d'una manera simple i més curta.

```js
let result = condition ? value1 : value2
```

Exemple:

```js
let isAccessAllowed;
const age = prompt('Quants anys tens?')

if (age > 18) {
  isAccessAllowed = true
} else {
  isAccessAllowed = false
}

alert(isAccessAllowed)
```

```js
const isAccessAllowed = age > 18 ? true : false
```

👍 Consell:

> Quan executis l'operador ternari s'ha d'intentar mantenir l'expressió el més simple possible i no perdre la llegibilitat.
> 
> Exemple:
>
> ```js
> function stop () {
>   console.log('✋🏻')
> }
>
> function run () {
>   console.log('🏃‍♂️')
> }
> const isRunning = true
> 
> // if - else
> if (isRunning) {
>     stop()
> } else {
>     run()
> }
> 
> // ternari
> isRunning ? stop() : run()
> ```

👍 Consell:

> Prioritza les condicions assertives, ens ajuda a millorar la llegibilitat de la condicional. Les frases afirmatives solen ser més fàcils d'entendre que les negatives.
> 
> Exemple:
> 
> ```js
> function print () {
>   console.log('🖨')
> }
>
> // Negativa
> const canNotPrint = false
>
> if(!canNotPrint){
>     print()
> }
> 
> // Positiva
> const canPrint = true
>
> if(canPrint){
>    print()
> }
> ```