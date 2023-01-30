# LOOPS: FOR...IN

```For...in```és un mètode en aquest cas per iterar objectes. Crearà una variable que serà la key de cada propietat de l'objecte.

Sintaxi:

```js
for (let variable in iterable) {
    // instrucció
}
```

Exemple:

```js
let film = {title: 'El padrino', director: 'Francis Ford Coppola', year: 1972, score: 9}

for (let key in film) {
    console.log(`La key -> ${key} \nEl valor -> ${film[key]}`)
};

/*
La key -> title 
El valor -> El padrino 
La key -> director 
El valor -> Francis Ford Coppola 
La key -> year 
El valor -> 1972 
La key -> score 
El valor -> 9 
*/
```