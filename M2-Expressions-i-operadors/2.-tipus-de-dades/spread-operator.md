# SPREAD OPERATOR

A JavaScript, els valors mutables, és a dir, els objectes, en el moment de la seva instància es crea una referència associada a aquest objecte. 

## ❓ **Entendre que vol dir que un objecte està referenciat** 

Exemple amb objecte literal: 

```js
const person = { name: 'Pepito', surname: 'Grillo', age: 45 }
const personaWithCar = person

personaWithCar.hasCar = true

personaWithCar // { name: 'Pepito', surname: 'Grillo', age: 45, hasCar: true }

person // { name: 'Pepito', surname: 'Grillo', age: 45, hasCar: true }
```

Exemple en arrays: 

```js
const colors = ['red', 'blue', 'yellow']
const copyColors = colors

copyColors.push('white')

copyColors // ['red', 'blue', 'yellow', 'white']
colors // ['red', 'blue', 'yellow', 'white']
```

🚨 Important!
> Hem d'anar amb compte i tenir controlat quan volem modificar una dada de tipus objecte, ja que és possible que no vulguem modificar la instància original, per això, és recomanable fer còpies de les dades de tipus objecte quan volem treballar amb elles.

## **Com crear còpies d'objectes: Spread operator**

L'**spread operator** és una forma simple de recollir, un per un, els valors d'una estructura de dades, és a dir, itera l'estructura i de cada valor fa una còpia dins d'una instància nova de l'estructura.

Es fa servir afegint ```...``` a l'inici de la instància que volem copiar.

Exemple en objectes:

```js
const person = { name: 'Pepito', surname: 'Grillo', age: 45 }
const personaWithCar = { ...person }

personaWithCar.hasCar = true

personaWithCar // { name: 'Pepito', surname: 'Grillo', age: 45, hasCar: true }
person // { name: 'Pepito', surname: 'Grillo', age: 45 }

```

Exemple en arrays: 

```js
const colors = ['red', 'blue', 'yellow']
const copyColors = [ ...colors ]

copyColors.push('white')

copyColors // ['red', 'blue', 'yellow', 'white']
colors // ['red', 'blue', 'yellow']
```

🚨 Important!

> Spread operator fa un còpia superficial, és a dir, si el valor que conté aquesta estructura no és primitiu, continuarà mantenint aquesta referència, així que haurem de trencar també la referència d'aquest valor.
>
> Exemple:
>
> ```js
> const person = { name: 'Pepito', surname: 'Grillo', age: 45, pets: ['🐶', '🐢'] }
> const personWithCat = { ...person }
>
> personWithCat.pets[2] = '🐱'
>
> person // { name: 'Pepito', surname: 'Grillo', age: 45, pets: ['🐶', '🐢', '🐱'] }
> personWithCat // { name: 'Pepito', surname: 'Grillo', age: 45, pets: ['🐶', '🐢', '🐱'] }
> ```
>
> Per fer còpies profundament, tenim diferents opcions, aquí tens un [article](https://midu.dev/como-clonar-un-array-en-javascript/) on explica cada una d'elles.
> 