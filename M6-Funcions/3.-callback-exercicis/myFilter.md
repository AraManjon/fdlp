## myFilter Function

Aquesta funció **myFilter** pretén ser una funció preparada per rebre com a primer paràmetre un array i com a segon paràmetre una altra funció (callback). 

La funció **myFilter** hauria de ser capaç de cridar, amb cada element de l'array, a la funció passada com a segon paràmetre i retornar una nova array amb els elements que compleixin la condició.

La funció passada com a parametre, rebrà cada element del array un a un, i hauria de valorar una condició, retornant ```true``` en el cas que compleixi la condició i en cas contraari retornarà ```false```.

Exemple: 

```js
const myArr = [1,2,3,4,5,6,7,8,9,10]

const result = myFilter( myArr, isBiggerThanFive )

console.log(result) // [6,7,8,9,10]
```

### Requeriment 1:

**El primer paràmetre hauria de ser una array**

Quan no passo un array com a primer paràmetre a la funció **myFilter**, veiem un error a la consola que diu "El primer paràmetre hauria de ser un array".

### Requeriment 2:

**El segon paràmetre hauria de ser una funció**

Quan no passo una funció com a segon paràmetre a la funció **myFilter**, veiem un error a la consola que diu "El segon paràmetre hauria de ser una funció".

### Requeriment 3:

**La funció myFilter hauria de funcionar amb els següents casos**

Cas 1: **isBiggerThanFive**

> **Donada** l'array ```[1,2,3,4,5,6,7,8,9,10]``` i la funció ```isBiggerThanFive```

> **Quan** crido a la funció **myFilter**

> **Aleshores** obtenim una nova array amb tots els nombres més grans que cinc ```[6,7,8,9,10]```.

Cas 2: **isEvenNumber**

> **Donada** l'array ```[1,2,3,4,5,6,7,8,9,10]``` i la funció ```isEvenNumber```

> **Quan** crido a la funció **myFilter**

> **Aleshores** obtenim una nova array amb tots els números parells ```[2,4,6,8,10]```.

Cas 3: **startsByB**

> **Donada** l'array ```['Barcelona','Paris','Roma','Londres','Berlin']``` i la funció ```startsByB```

> **Quan** crido a la funció **myFilter**

> **Aleshores** obtenim una nova array amb totes les ciutats que comencen amb B ```['Barcelona','Berlin']```.

Cas 4: **isGrilloFamily**

When I pass an array with users ```[{name: 'Pepita', surname: 'Grillo', age: 95},{name: 'Maria', surname: 'Martinez', age: 35},{name: 'Pepito', surname: 'Grillo', age: 110},{name: 'Pepito', surname: 'Sanchez', age: 45}]``` to **myFilter**, we get a new array with all users with Grillo's surname 
```[{name: 'Pepita', surname: 'Grillo', age: 95},{name: 'Pepito', surname:'Grillo', age: 110}]``` as a result.


> **Donada** l'array 
> ```js
> [
>    { name: 'Pepita', surname: 'Grillo', age: 95 },
>    { name: 'Maria', surname: 'Martinez', age: 35 },
>    { name: 'Pepito', surname: 'Grillo', age: 110 },
>    { name: 'Pepito', surname: 'Sanchez', age: 45 }
> ]
> ``` 
> i la funció ```isGrilloFamily```

> **Quan** crido a la funció **myFilter**

> **Aleshores** obtenim una nova array amb tots els usuaris que tenen com a cognom Grillo.
> ```js
> [
>    { name: 'Pepita', surname: 'Grillo', age: 95 },
>    { name: 'Pepito', surname:'Grillo', age: 110 }
> ]
> ```

🚨 Important!

> Assegureu-vos que **myFilter** retorna un array nova i que l'array original no es modifica.



