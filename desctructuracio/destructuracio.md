# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

## **Destructuring**

Permet empaquetar valors d'objectes i arrays en variables.

Exemple en arrays: 

Sense destructuring:
```
const colors = ['red', 'blue', 'yellow']

const redColor = colors[0]
const blueColor = colors[1]
const yellowColor = colors[2]

redColor // 'red'
blueColor // 'blue'
yellowColor // 'yellow'
```

Amb destructuring:
```
const colors = ['red', 'blue', 'yellow']

const [ redColor, blueColor, yellowColor ] = colors

redColor // 'red'
blueColor // 'blue'
yellowColor // 'yellow'
```

Exemple en objectes: 

Sense destructuring:
```
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

const model = car.model
const brand = car.brand
const cilindrada = car.cilindrada

model // 'Ibiza'
brand // 'Seat'
cilindrada // '120'
```

Amb destructuring:
```
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

const { model, brand, cilindrada } = car

model // 'Ibiza'
brand // 'Seat'
cilindrada // '120'
```

Notes:
> 🚨 Molt útil per ignorar alguns valors retornats per una funció.

Exemple:

```
function calculator (num1, num2) {
    const sum = num1 + num2
    const rest = num1 - num2
    const mult = num1 * num2
    const div = num1 / num2

    const result = {
        sum: sum,
        rest,
        mult,
        div
    }

    return result
}

function showSum () {
    // const firstNum = Number(document.getElementById('num1')) 
    // const secondNum = Number(document.getElementById('num2'))

    const firstNum = 2
    const secondNum = 2

    const { sum } = calculator(firstNum, secondNum)
    alert(sum)
}
```