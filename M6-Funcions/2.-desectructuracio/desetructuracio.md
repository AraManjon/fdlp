# DESESTRUCTURACIÓ

Permet empaquetar valors d'objectes i arrays en variables.

Exemple en arrays sense desestructuració:

```js
const colors = ['red', 'blue', 'yellow']

const redColor = colors[0]
const blueColor = colors[1]
const yellowColor = colors[2]

redColor // 'red'
blueColor // 'blue'
yellowColor // 'yellow'
```

Exemple en arrays amb desestructuració:

```js
const colors = ['red', 'blue', 'yellow']

const [ firstValue, secondValue, thirdValue ] = colors

firstValue // 'red'
secondValue // 'blue'
thirdValue // 'yellow'
```

Exemple en objecte sense desestructuració: 

```js
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    displacement: 120,
}

const model = car.model
const brand = car.brand
const displacement = car.displacement

model // 'Ibiza'
brand // 'Seat'
displacement // '120'
```

Exemple en objecte amb desestructuració:

```js
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    displacement: 120,
}

const { model, brand, displacement } = car

model // 'Ibiza'
brand // 'Seat'
displacement // '120'
```

👍 Consell:
> Molt útil per ignorar alguns valors retornats per una funció.
> 
> Exemple:
> 
> ```js
> function calculator (num1, num2) {
>     const sum = num1 + num2
>     const rest = num1 - num2
>     const mult = num1 * num2
>     const div = num1 / num2
>
>     const result = {
>         sum: sum,
>         rest,
>         mult,
>         div
>     }
>
>    return result
> }
> 
> function showSum () {
>     // const firstNum = Number(document.getElementById('num1').value) 
>     // const secondNum = Number(document.getElementById('num2').value)
> 
>     const firstNum = 2
>     const secondNum = 2
> 
>     const { sum } = calculator(firstNum, secondNum)
>     alert(sum)
> }
> ```