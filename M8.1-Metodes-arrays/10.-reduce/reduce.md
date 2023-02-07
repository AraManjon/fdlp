# **REDUCE**

El mètode ```reduce``` accepta una funció com a primer paràmetre i un valor inicial com a segon paràmetre. Aquesta funció callback serà cridada per cada element de l'array. El valor inicial és opcional, en cas de no indicar quin és el primer valor, utilitzarà el primer l'element de l'array com a valor previ.

En cada iteració, la funció callback retornarà el valor amb el qual treballarem a la següent iteració.

🔍 No modifica l'array original

🔍 Retorna un únic valor

Sintaxi:

```js
arr.reduce(callback(prevValue, accValue, index, array), initialValue)
```

Exemple:

```js
const arr = [1, 2, 3, 4, 5]

let resultOfSum = arr.reduce( function (prev, acc) {
    return prev + acc
})

console.log( resultOfSum )
```

👍 Consell:
> Per la seva càrrega cognitiva no és d'ús habitual. Si no mira aquest vídeo explicatiu: [REDUCE: ús i pràctiques a evitar](https://www.youtube.com/watch?v=S1ZXSoAxEBg).