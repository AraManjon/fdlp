# SIDE-EFFECTS

Quan modifiquem alguna cosa, en JavaScript, provoquem efectes secundaris, això simplement vol dir modificar o canviar el nostre codi, fent que tingui un comportament i una mutabilitat impredictibles.

Exemple:

```js
//side effect
const fruits = ['pineapple','orange','pawpaw','kiwi']

function removeData(dataArr){
    return dataArr.pop()
}

removeData(fruits)

```

## Exercici per entendre que es un side-effect

Respon les preguntes:

Cas 1:
```js
let num = 0

function sumOne (n) {
    n++
    console.log(`A: Perquè n val -> ${n}?`)
}

sumOne(num)

console.log(`B: Perquè num val -> ${num}?`)

```

Cas 2:
```js
let num = [0]

function sumOne (n) {
    n[0]++
    console.log(`C: Perquè n val -> ${n}?`)
}

sumOne(num)

console.log(`D: Perquè num val -> ${num}?`)
```

📚 Recursos:
> [side-effects](https://javascript.plainenglish.io/how-to-avoid-side-effects-using-pure-functions-in-javascript-366acaafb60c#:~:text=What%20is%20a%20side%20effect,have%20unpredictable%20behavior%20and%20mutability.) en JavaScript.

