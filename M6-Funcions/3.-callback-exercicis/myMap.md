## myMap Function

Aquesta funció **myMap** pretén ser una funció preparada per rebre com a primer paràmetre un array i com a segon paràmetre una altra funció (callback).

La funció **myMap** hauria de ser capaç de cridar, amb cada element de l'array, a la funció passada com a segon paràmetre i retornar una nova array amb tots els elements als quals se'ls hi ha aplicat la funció passada.

La funció passada com a paràmetre, rebrà cada element de l'array un a un, i hauria d'aplicar una operació i retornant l'element després d'aplicar-li l'operació.

Exemple: 

```js
const myArr = [1,2,3]

const result = myMap( myArr, multiplyByTwo )

console.log(result) // [2, 4, 6]
```

### Requeriment 1:

**El primer paràmetre hauria de ser una array**

Quan no passo un array com a primer paràmetre a la funció **myMap**, veiem un error a la consola que diu "El primer paràmetre hauria de ser un array".

### Requeriment 2:

**El segon paràmetre hauria de ser una funció**

Quan no passo una funció com a segon paràmetre a la funció **myMap**, veiem un error a la consola que diu "El segon paràmetre hauria de ser una funció".

### Requeriment 3:

**La funció myMap hauria de funcionar amb els següents casos**

Cas 1: **multiplyByTwo**

> **Donada** l'array ```[1,2,3,4,5]``` i la funció ```multiplyByTwo```

> **Quan** crido a la funció **myMap**

> **Aleshores** obtenim una nova array amb tots els nombres multiplicats per 2 ```[2,4,6,8,10]```.

Cas 2: **multiplyByTen**

> **Donada** l'array ```[1,2,3,4,5]``` i la funció ```multiplyByTen```

> **Quan** crido a la funció **myMap**

> **Aleshores** obtenim una nova array amb tots els nombres multiplicats per 10 ```[10,20,30,40,50]```.

Cas 3: **convertToUpperCase**

> **Donada** l'array ```['Barcelona','Paris','Roma','Londres','Berlin']``` i la funció ```convertToUpperCase```

> **Quan** crido a la funció **myMap**

> **Aleshores** obtenim una nova array amb totes les ciutats en majúscules per 10 ```['BARCELONA','PARIS','ROMA','LONDRES','BERLIN']```.

🚨 Important!

> Assegureu-vos que **myMap** retorna un array nova i que l'array original no es modifica.

