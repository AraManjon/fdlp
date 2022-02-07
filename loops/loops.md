# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Loops**

De vegades ens veiem amb la necessitat de crear un bucle perquè faci una acció en bucle tantes vegades com li indiquem. 

Imagina que volguéssim fer un console.log('Hello World') 100 cops. Si haguéssim d'escriure línia a línia, seria molt de temps i moltes línies repetides. Per poder fer aquesta funcionalitat tenim els anomenats **loops**.

### **For**

Una de les maneres més clàssiques per crear bucles. 

Sintaxi:

```
for (inici; condició; increment){
    // instrucció
}
```
- **inici**: és una variable declarada que farà de comptador.
- **condició**: el loop s'executa mentre es compleixi la condició, determinarà el nombre de cops que s'executa el loop.
- **increment**: actualitza incrementant o disminuint el comptador.
- **instrucció**: mentre la condició sigui ```true```, executarà la instrucció.

```
for (let i = 0; i < 100; i++){
  console.log('hello world!')
}
```
Ordre execució:

1) let i = 0
2) i < 100 //true
3) console.log('hello world!')
4) i++ 
5) i < 100 //true
6) console.log('hello world!')
7) i++
8)...
9) i++ // a incrementat a 100
10) i < 100 //false

**El loop for** és una de les formes per crear bucles més utilitzats. Ens serveix també per recórrer elements iterables.

🚨
> Elements iterables: tots aquells que tenen length. Com per exemple strings i arrays.

```
let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
let content = "Llistat d'alumnes:\n";

for (let index = 0; index < alumnes.length; index++) {
    content += `${index} ${alumnes[index]} \n`;
};

console.log(content);
/*
Llistat d'alumnes:
0  Pep 
1  Paco 
2  Aina 
3  Lluisa 
4  Joan 
*/
```

```
const films = [
    {title: 'El padrino', director: 'Francis Ford Coppola', year: 1972, score: 9},
    {title: 'El padrino. Parte II', director: 'Francis Ford Coppola', year: 1974, score: 8.9},
    {title: 'Doce hombres sin piedad', director: 'Sidney Lumet', year: 1957, score: 8.7},
    {title: 'La lista de Schindler ', director: 'Steven Spielberg', year: 1993, score: 8.6},
];

let filmsCoppola = [];

for (let index = 0; index < films.length; index++) {
    if (films[index].director === 'Francis Ford Coppola'){
        filmsCoppola.push(films[index])
    }
};

console.log(filmsCoppola);

/*
[
    {title: 'El padrino', director: 'Francis Ford Coppola', year: 1972, score: 9},
    {title: 'El padrino. Parte II', director: 'Francis Ford Coppola', year: 1974, score: 8.9},
]
*/
```


👍 Podem extraure la comprovació del lenght, perquè només faci un cop. Ja que sinó, cada cop que recorri, tornarà a calcular quin és el length de l'array.

Exemple 1:
```
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];

const alumnesLength = alumnes.length

for (let index = 0; index < alumnesLength; index++){
  console.log(`hello, ${alumnes[index]}`)
}
```

Exemple2:
```
let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];

for (let index = 0, alumnesLength = alumnes.length; index < alumnesLenght; index++){
  console.log(`hello, ${alumnes[index]}`)
}
```

Notes:

> Podem extraure la declaració del comptador i fer l'increment o decrement del comptador dins del bloc del codi.

Exemple:
```
let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];

let index = 0
let alumnesLength = alumnes.length

for (; index < alumnesLength;){
  console.log(`hello, ${alumnes[index]}`)
  index++
}
```

### **While**

Com el seu significat diu, el que fa aquest tipus de loop és executar un codi **mentre** (while), la condició sigui ```true```.. 

Sintaxi:

```
let comptador

while (condició){
    // instrucció
    // actualitzem el comptador
}
```

```
let counter = 0

while (counter < 10){
  console.log('hello world!')
  counter++
}
```
Ordre execució:

1) let counter = 0
2) counter < 10 //true
3) console.log('hello world!')
4) counter++ 
5) counter < 10 //true
6) console.log('hello world!')
7) counter++
8) ...
9) counter++ // a incrementat a 10
10) counter < 10 //false

```
let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
let content = "Llistat d'alumnes:\n";

let counter = 0
let alumnesLength = alumnes.length

while (counter < alumnesLength) {
    content += `${counter} ${alumnes[counter]} \n`;
    counter++
};

console.log(content);
/*
Llistat d'alumnes:
0  Pep 
1  Paco 
2  Aina 
3  Lluisa 
4  Joan 
*/
```
### **do...while**

Molt similar al while, l'únic que en assegurem que almenys un cop executa el codi.

Sintaxi:

```
let comptador

do {
    // instrucció
    // actualitzem el comptador
} while (condició)
```

```
let counter = 0

do {
    console.log('hello world!')
    counter++
} while (counter < 10)
```
Ordre execució:

1) console.log('hello world!')
2) counter++ 
3) counter < 10 //true
4) console.log('hello world!')
5) counter++
6) counter < 10 //true
7) console.log('hello world!')
8) ...
9) counter++ // a incrementat a 10
10) counter < 10 //false


Exemple:

```
let counter = 10

do {
    console.log('hello world!')
    counter++
} while (counter < 10)

// 'hello world'
```

### **ForEach**

És un mètode de les arrays. És una manera de recórrer arrays de forma més funcional, sense escriure una estructura.

Sintaxi:
```
array.forEach(function(element, index) {
    // element és cada valor de l'array
    // index és la posició del valor
    // intrucció per cada element de l'array
})
```

```
let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
let content = "Llistat d'alumnes:\n";

alumnes.forEach(function(alumne, position) {
    content += `${position} ${alumne} \n`;
})

console.log(content);
/*
Llistat d'alumnes:
0  Pep 
1  Paco 
2  Aina 
3  Lluisa 
4  Joan 
*/
```

### **For...of**

```For...of```és un altre mètode per iterar arrays. En aquest cas no tenim accés al número de vegades que hem iterat, només al valor de cada element de l'array.

Sintaxi:
```
for (variable of iterable) {
    //instrucció
}
```

```
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  console.log( fruit );
}
```

### **For...in**

```For...in```és un mètode en aquest cas per iterar objectes. Crearà una variable que serà la key de cada propietat de l'objecte.

Sintaxi:
```
for (variable in iterable) {
    //instrucció
}
```

```
let film = {title: 'El padrino', director: 'Francis Ford Coppola', year: 1972, score: 9}

for (let key in film) {
    console.log(`La key -> ${key} \nEl valor -> ${film[key]} `)
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

### **Break**

Normalment, un loop continua mentre la condició és ```true``` i s'aturarà el bucle quan la condició sigui ```false```. 

Però podem forçar que s'acabi el bucle utilitzant la paraula ```break```.

Exemple: 

```
let sum = 0;

while (true) {

  let value = Number(prompt("Enter a number", ''));

  if (!value) break;

  sum += value;

}
console.log( 'Sum: ' + sum );
```

### **Continue**

Seria una versió més lleugera del ```break```, ja que no atura el loop però, si que fa que s'aturi la iteració en el bucle actual, obligant al bucle a iniciar-se.

Exemple: 

```
for (let i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  console.log(i); // 1, 3, 5, 7, 9
}
```