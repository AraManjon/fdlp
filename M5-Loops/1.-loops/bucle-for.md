# LOOPS: FOR

De vegades ens veiem amb la necessitat de crear un bucle perquè faci una acció en bucle tantes vegades com li indiquem. 

Imagina que volguéssim fer un ```console.log('Hello World')``` 100 cops. Si haguéssim d'escriure línia a línia, seria molt de temps i moltes línies repetides. Per poder fer aquesta funcionalitat tenim els anomenats **loops**.

## **Bucle For**

Una de les maneres més clàssiques per crear bucles. 

Sintaxi:

```js
for (inici; condició; increment){
    // instrucció
}
```
- **inici**: és una variable declarada que farà de comptador.
- **condició**: el loop s'executa mentre es compleixi la condició, determinarà el nombre de cops que s'executa el loop.
- **increment**: actualitza incrementant o disminuint el comptador.
- **instrucció**: mentre la condició sigui ```true```, executarà la instrucció.

Exemple:

```js
for (let counter = 0; counter < 100; counter++){
  console.log('hello world!')
}
```
Ordre execució:

```js
let counter = 0
counter < 100 // true
console.log('hello world!')
counter++ 
counter < 100 // true
console.log('hello world!')
counter++
...
counter++ // a incrementat a 100
counter < 100 // false ( s'atura el loop )
```

**El loop for** és una de les formes per crear bucles més utilitzats. Ens serveix també per recórrer elements iterables.

📝 Notes:

> Elements iterables: tots aquells que tenen length. Com per exemple strings i arrays.
> 
> Exemple:
> 
> ```js
> const iterableString = 'hello world'
> iterableString.length // 11
> iterableString[0] // 'h'
> ```

Exemple:

```js
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan']
let content = "Llistat d'alumnes:\n"

for (let index = 0; index < alumnes.length; index++) {
    content += `${index} ${alumnes[index]} \n`
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

Exemple:

```js
const films = [
    { title: 'El padrino', director: 'Francis Ford Coppola', year: 1972, score: 9 },
    { title: 'El padrino. Parte II', director: 'Francis Ford Coppola', year: 1974, score: 8.9 },
    { title: 'Doce hombres sin piedad', director: 'Sidney Lumet', year: 1957, score: 8.7 },
    { title: 'La lista de Schindler ', director: 'Steven Spielberg', year: 1993, score: 8.6 },
];

let filmsCoppola = [];

for (let index = 0; index < films.length; index++) {
    if (films[index].director === 'Francis Ford Coppola'){
        filmsCoppola.push(films[index])
    }
};

console.log(filmsCoppola)

/*
[
    {title: 'El padrino', director: 'Francis Ford Coppola', year: 1972, score: 9},
    {title: 'El padrino. Parte II', director: 'Francis Ford Coppola', year: 1974, score: 8.9},
]
*/
```

🚨 Important!
> Podem extraure la comprovació del lenght, perquè només faci un cop. Ja que sinó, cada cop que recorri, tornarà a calcular quin és el length de l'array.
> 
> Exemple:
> 
> ```js
> const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
> 
> const alumnesLength = alumnes.length
> 
> for (let index = 0; index < alumnesLength; index++){
>   console.log(`hello, ${alumnes[index]}`)
> }
> ```
> 
> Exemple:
> 
> ```js
> let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
> 
> for (let index = 0, alumnesLength = alumnes.length; index < alumnesLength; index++){
>   console.log(`hello, ${alumnes[index]}`)
> }
> ```

🚨 Important!
> Podem extraure la declaració del comptador i fer l'increment o decrement del comptador dins del bloc del codi.
> 
> Exemple:
> 
> ```js
> let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
> 
> let index = 0
> let alumnesLength = alumnes.length
> 
> for ( ; index < alumnesLength ; ){
>   console.log(`hello, ${alumnes[index]}`)
>   index++
> }
> ```

👍 Consell:

> Utilitzem el bucle for quan sabem el nombre exacte de les iteracions que necessitem que realitzi. Una de les funcions principals que té es quan volem recòrrer tots els elements d'un array.
>
> Exemple:
> 
> ```js
> const REQUEST_TIMES = 5
> 
> const numbers = []
> 
> for ( let counter = 0; counter < REQUEST_TIMES; counter++) {
>   const num = Number(prompt('Introdueix un nombre'))
>   numbers.push(num)
> }
> ```

📝 Notes:
> Si mirem la performance de cadascun dels bucles que tenim amb javascript, el bucle for és un dels més ràpids en executar-se. Pots veure en més detall una comparació de loops en els navegadors Chrome i Firefox, fen ús de ```console.time``` i ```conole.timeEnd```. [Mesurar el rendiment de diferents tipus de bucles JavaScript](https://blog.bitsrc.io/measuring-performance-of-different-javascript-loop-types-c0e9b1d193ed)
