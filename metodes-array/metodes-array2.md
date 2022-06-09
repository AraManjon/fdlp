# MÈTODES ARRAYS

Abans de començar aquest mòdul, farem un repàs de què és un mètode. 

## Què és un mètode?

Els objectes són estructures de dades mutables i referenciats. 

Un objecte literal està compost per propietats ```key```+ ```value```.

Quan el ```value``` és una funció, diem que aquest objecte té un mètode.

Exemple:
```
const person = {name: 'Pepito', age: 27, sayHello: function greeting() {
    console.log('Hola')
}}

person.sayHello() // Hola
//sayHello és un mètode de person
```

```
console.log('Hello World!')

//log és un mètode de console
```

## Arrays com a objecte

typeof instance === "object"

instance instanceof Array

Les arrays tenen moltíssims mètodes. Per fer-ho més fàcil, els dividirem en grups.

## Afegir/Eliminar elements

Ja hem vist alguns d'aquests mètodes, com per exemple:

arr.push(...items) – afegir al final
arr.pop() – entraure del final
arr.shift() – extraure de l'inici
arr.unshift(...items) – afegir al inici

[push, pop, shift, unshift](../estructures-repetitives/estructura-de-dades-per-posicio-arrays.md)

Però veiem alguns més:

### **SPLICE**

El mètode ```splice``` Pot fer de tot: afegir, treure i substituir elements.

🔍 Modifica l'array original

🔍 Si s'eliminen valors, retorna el valor extret, si no, retorna un array buida.

Sintaxi:
```
array.splice(start, deleteCount, item1, item2, ...)
```

Exemples:
```
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // des de l'índex 1, elimina 1 element

console.log( arr ); // ["I", "JavaScript"]
```

```
let arr = ["I", "study", "JavaScript", "right", "now"];

// elimina els 3 primers elements i afegeix
let removed = arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // ["Let's", "dance", "right", "now"]
console.log( removed ) // ["I", "study", "JavaScript"]
```

### **SLICE**

El mètode ```slice``` crea una nova còpia amb els elements indicats d'un array existent.

🔍 No modifica l'array original

🔍 Retorna un nou array amb els valors que hi ha des de l'indici fins al final indicat.


Sintaxi:
```
array.spice(start, end)
```

Exemple:
```
let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e, s

console.log( arr.slice(1) ); // e, s, t

console.log( arr ); // t, e, s, t
```

### **CONCAT**

El mètode ```concat``` crea una nova array que inclou els valors d'un altre array.

🔍 No modifica l'array original

🔍 Retorna un nou array amb els valors d'una altra array

Sintaxi:
```
arr.concat(arg1, arg2...)
```

Exemple:
```
let arr = [1, 2];

console.log( arr.concat([3, 4]) ); // 1,2,3,4

console.log( arr ); // 1,2
```

## Iterar arrays

### **FOREACH**

Ja hem vist el mètode forEach que ens permet aplicar una funció per cada element d'un array:

Sintaxi:
```
arr.forEach(function( item, index, array ) {
    //codi
})
```

[forEach](../estructures-repetitives/loops.md)

## Buscar en arrays

### **INDEXOF // LASTINDEXOF // INCLUDES**

```arr.indexOf(item)``` – busca un element a l'array, si troba l'element, retorna l'índex on es troba aquest element, si no troba cap element, retorna -1.

```arr.lastIndexOf(item)``` – igual que indexOf, però recorrerà l'array de dreta a esquerra.

```arr.includes(item)``` – busca un element a l'array, si existeix l'element, retorna true, si no retorna false.

Exemple:
```
const fruits = ['pera', 'poma', 'plàtan', 'poma', 'pinya', 'pruna', 'prèsec']

console.log(fruits.indexOf('poma')) // 1
console.log(fruits.lastIndexOf('poma')) // 3
console.log(fruits.includes('pruna')) // true
```

### **FIND** 

El mètode ```find``` busca el primer element en l'array que compleixi la condició demanada. 

🔍 No modifica l'array original

🔍 Retorna el primer element dins l'array que compleixi la condició. Si no existeix cap element, retornarà ```undefined```.

Sintaxi:
```
arr.find(callback(element, index, array))
```

Exemple:
```
const fruits = [
    {nom: 'poma', quantitat: 2},
    {nom: 'plàtan', quantitat: 0},
    {nom: 'pera', quantitat: 5}
];

function esPoma(fruit) {
    return fruit.nom === 'poma';
}

const poma = fruits.find(esPoma);
console.log(poma)// {nom: 'poma', quantitat: 2}
```

### **FILTER**

El mètode ```filter``` busca tots els elements en l'array que compleixin la condició demanada. 

🔍 No modifica l'array original

🔍 Retorna un nou array amb els elements que compleixin la condició. Si no hi ha cap element, retornarà un array buida.

Sintaxi:
```
arr.filter(callback(element, index, array))
```

Exemple:
```
const fruits = [
    {nom: 'poma', quantitat: 2},
    {nom: 'plàtan', quantitat: 0},
    {nom: 'pera', quantitat: 5}
];

function quantitatMenorATres(fruit) {
    return fruit.quantitat < 3;
}

const elementsAmbPocStock = fruits.filter(quantitatMenorATres);

console.log(elementsAmbPocStock)// [{nom: 'poma', quantitat: 2}, {nom: 'plàtan', quantitat: 0}, ]
```

## Transformar arrays

Ja hem vist alguns d'aquests mètodes, com per exemple:

arr.sort(...items) – ordena l'array, canvien els elements d'ordre
arr.reverse() – ordena l'array del revés, canvien els elements d'ordre

[sort, reverse](../estructures-repetitives/estructura-de-dades-per-posicio-arrays.md)

### **MAP**

El mètode ```map``` aplica una funció a cada element de l'array i retorna una nova array amb el resultat. 

🔍 No modifica l'array original

🔍 Retorna un nou array amb els elements com a resultat d'aplicar la funció a cadascun d'ells.

Sintaxi:
```
arr.map(callback(element, index, array));
```

Exemple:
```
const numbers = [1, 5, 10, 15];
const resultMultiplyTwo = numbers.map(function(num) {
   return num * 2;
});

console.log(resultMultiplyTwo)// [2, 10, 20, 30]
console.log(numbers) // [1, 5, 10, 15]
```

### 📚 Recursos

Més [mètodes de l'array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)