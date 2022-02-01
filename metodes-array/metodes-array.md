# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Arrays**

> Els objectes literals, ens permeten emmagatzemar col·leccions de valors amb keys. Per accedir o modificar al seu contingut, ho fem a partir de la ```keys```.

Exemple:
```
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

console.log(car.model) // Seat

car.turbo = true

console.log(car.turbo) // true
```

Però existeixen casos en què volem emmagatzemar valors ordenats i poder accedir a ells segons el **ordre** en la llista. En aquest cas faríem servir les **Arrays**.

Exemple:
```
const cities = ['Barcelona', 'Londres', 'Berlín', 'Roma']

console.log(cities[0]) // Barcelona
console.log(cities[1]) // Londres
console.log(cities[2]) // Berlín
console.log(cities[3]) // Roma

console.log(cities.length) // 4
cities[4] = 'Paris'

console.log(cities) // 'Barcelona', 'Londres', 'Berlín', Roma', 'Paris'
```

🚨
> Els objectes no tenen cap funció on puguem guardar o recuperar una propietat en una posició concreta.

##  **Mètodes array**

Les arrays tenen moltíssims mètodes que ens permeten manejar l'ordre dels seus elements.

### **Array com a cua**

En ciències de la computació ens referim a una **cua** o **queue** com col·leccions ordenades que suporten dos operacions:

**[ ]  ⬅️  push:** afegir un element al final.

**⬅️  [ ] shift:** obtenir un element del principi, avançant la cua, on el segon element passa a ser el primer.

### **Array com a stack**

També existeix un altre concepte d'estructura de dades que és la **stack**. Aquesta estructura suporta:

**[ ]  ⬅️  push:** afegir un element al final 

**[ ] ➡️  pop:** obtindre un element del final.

🔎 
> Les arrays tenen aquestes funcions, així que permeten ser utilitzades com a **queue** o com **stack**. En ciències de la computació quan una estructura de dades permet ser feta servir de les dues maneres és coneguda com a **deque**.

### **PUSH**

[ ]  ⬅️ 

Afegeix un element al **final** del array.

```
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear
```

### **POP**

[ ] ➡️  

Exteu un element del **final** del array.

```
let fruits = ["Apple", "Orange", "Pear"];

let lastFruit = fruits.pop(); // Pear

alert( fruits ); // Apple, Orange
```

### **SHIFT**

⬅️  [ ]

Extreu el **primer** element del array.

```
let fruits = ["Apple", "Orange", "Pear"];

let firstFruit = fruits.shift(); // Apple

alert( fruits ); // Orange, Pear
```

### **UNSHIFT**

➡️  [ ]

Afegeix un element al **principi** del array.

```
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear
```

### **Performance**

🐢 Els que operan al inici de l'array.

🐇 Els que operan al final de l'array.

Això és perquè a l'extreure o introduir un element de l'inici de l'array, s'hi han de recol·lorcar tots els elements de l'array. Si fem servir el ```shift```, haurem de passar el segon element a la primera posició, el tercer a segona i així fins al final.

##  **Loops**

Molts cops ens veiem amb la necessitat de recórrer un element per operar en cada un dels elements. Imagina que volguéssim fer un console.log() de cada element d'una array, i aquesta array té 100 elements. Hauríem d'escriure manualment cada línia, seria molt de temps i ocuparia moltes línies de codi. Doncs això es pot solucionar en poques línies mitjançant els **loops**.

### **For**

Una de les maneres més clàssiques per iterar sobre elements iterables.

Sintaxi:

```
for (inici; condició; increment){
    // instrucció
}
```
- **inici**: es una variable declarada que farà de comptador.
- **condició**: el loop s'executa mentre es compleixi la condició, determinarà el número de cops que s'executa el loop.
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

```
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
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
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];
let index = 0
const alumnesLenght = alumnes.length

for (index; index < alumnesLenght; index++){
  console.log(`hello, ${alumnes[index]}`)
}
```

```
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan'];

const content = "Llistat d'alumnes:\n";
const index = 0;

//Iterar
for (let valor of alumnes) {
    contenido += i + " " + valor + '\n';
    index++;
};
alert(contenido);

```
### **For of**

```For...of```és un altre mètode per iterar arrays. En aquest cas no tenim accés al número de vegades que hem iterat, només al valor de cada element del array.

Sintaxi:
```
for(variable of iterable) {
    //statement
}
```

```
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  console.log( fruit );
}
```

### **Curiositats**

```
const listBooks = []
listBooks[123] = ['Game of Thrones']
console.log(listBooks.length) //124
```

```
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5
```

### 📚 Recursos

Més [curiositats sobre l'array](https://javascript.info/array#a-word-about-length)

