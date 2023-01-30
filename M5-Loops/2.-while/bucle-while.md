# LOOPS: WHILE

Com el seu significat diu, el que fa aquest tipus de loop és executar un codi **mentre** (while), la condició sigui ```true```.

Sintaxi:

```js
let comptador

while (condició){
    // instrucció
    // actualitzem el comptador
}
```

Exemple:

```js
let counter = 0

while (counter < 10){
  console.log('hello world!')
  counter++
}
```

Ordre execució:

```js
let counter = 0
counter < 10 // true
console.log('hello world!')
counter++ 
counter < 10 // true
console.log('hello world!')
counter++
...
counter++ // a incrementat a 10
counter < 10 // false
```

Exemple:

```js
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan']
let content = "Llistat d'alumnes:\n"

let counter = 0
const alumnesLength = alumnes.length

while (counter < alumnesLength) {
    content += `${counter} ${alumnes[counter]} \n`
    counter++
};

console.log(content)
/*
Llistat d'alumnes:
0  Pep 
1  Paco 
2  Aina 
3  Lluisa 
4  Joan 
*/
```

👍 Consell:
> Utilitzem el bucle while quan no sabem el nombre exacte de les iteracions que necessitem que realitzi. Normalment, tindrà una ordre en el block de codi que aturi el loop.
>
> Exemple:
>
> ```js
> let askNumbers = true
>
> const numbers = []
>
> while ( askNumbers ) {
>   
>   const number = prompt('Introdueix un nombre')
>   const userPressCancel = number === null
>
>   if ( userPressCancel ) {
>     alert('Entenc que no vols introduïr més nombres')
>     askNumbers = false
>   } else {
>     numbers.push(Number(number))
>   }
> }
> ```