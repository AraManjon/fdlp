# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

## **Tipus de dades no primitives** 

No primitius vol dir que són mutables. Serien tots els tipus d'**objectes**.

Un objecte és un valor en memòria, és a dir, quan es declara, es crea una referència que sempre apuntarà a aquesta primera instància de l'objecte.

Són mutables, és a dir, es poden editar, eliminar o afegir propietats.

Dins dels objectes hi ha diferents tipus d'**estructures de dades**, com per exemple l' **Array** i els **Objectes**.

### **Array**

typeof instance === "object"

instance instanceof Array

Representen llistes.

El primer element estarà en l'índex 0, el següent en l'índex 1, i successivament.

```
const fruits = ['Apple', 'Pineapple', 'Pear']

fruits[0] // 'Apple'
fruits[1] // 'Pineapple'
fruits[2] // 'Pear'
fruits[3] // undefined
```

Poden contenir una llista de diferents tipus de dades.

```
const exampleList = [1, 'two', [3,4], true]
```

-----------

### **Objecte literal**

typeof instance === "object"

Compost per una col·lecció d'elements que contenen **key** i **value**.

Per accedir al valor d'una propietat, podem fer-ho a través de la key.

```
const person = { name: 'Pepito', surname: 'Grillo', age: 45, greeting: function() {console.log('hello!')}, cities: ['BCN', 'MDR'] }

console.log(person.name) // Output: Pepito
console.log(person['name']) // Output: Pepito
console.log(person.cities[0]) // Output: BCN
console.log(person.greeting()) // Output: hello!
```

També podem crear una nova propietat afegint una nova key amb un valor.

```
const person = { name: 'Pepito', surname: 'Grillo', age: 45 }

person.city = 'BCN' 
console.log(person) // Output: { name: 'Pepito', surname: 'Grillo', age: 45, city: 'BCN' }

```

### **Funcions com a objectes**

Les funcions són objectes regulars amb la capacitat addicional de ser invocables.

typeof instance === "function"

instance instanceof Object

[Què és una funció?](../funcions/funcions-basic.md)

Exemple funció com a objecte:

```
function foo () {
    const result = 2
    return result
}

foo.call() // 2
foo.name // 'foo'
```

### ❓ **Entendre que vol dir que siguin mutables** 

```
const prices = ['5€', '10€']
prices[0] = '20€'
prices // ['20€', '10€']
```

### ❓ **Entendre que vol dir que un objecte està referenciat** 

```
const person = { name: 'Pepito', surname: 'Grillo', age: 45 }
const personaWithCar = person

personaWithCar.car = true

personaWithCar // { name: 'Pepito', surname: 'Grillo', age: 45, car: true }
person // { name: 'Pepito', surname: 'Grillo', age: 45, car: true }
```

Notes:
> 🚨 Hem d'anar amb compte i tenir controlat quan volem modificar una dada de tipus objecte, ja que és possible que no vulguem modificar la primera instància original, per això, és recomanable fer còpies de les dades tipus objecte quan volem treballar amb elles.

### **Com crear còpies d'objectes**

L'**spread operator** és una forma simple de recollir un per un els valors d'una estructura de dades, és a dir, itera l'estructura i de cada valor fa una còpia dins d'una instància nova de l'estructura.

Es fa servir afegint ```...``` a l'inici de la instància que volem copiar.

És una forma més expressiva.

Exemple en objectes: 
```
const person = { name: 'Pepito', surname: 'Grillo', age: 45 }
const copyPerson = {...person}
const copyPersonWithoutSpreadOperator = Object.assign({}, person)

copyPerson.age = 10
person.edat // 45
copyPersona.edat // 10

```

Exemple en arrays: 
```
const colors = ['red', 'blue', 'yellow']
const copyColors = [...colors]
const copyColorsWithoutSpreadOperator = myArray.slice();

copyColors.push('white')
copyColors // ['red', 'blue', 'yellow', 'white']
colors // ['red', 'blue', 'yellow']
```

Notes:
> 🚨 Si el valor que conté aquesta estructura no és primitiu, continuarà mantenint aquesta referència, així que haurem de trencar també la referència d'aquest valor.

> Nous [tipus de dades](https://dev.to/briansanteliz/nuevos-tipos-de-datos-en-javascript-records-tuples-2kie) que s'introduiran aviat en Javascript per aconseguir evitar aquesta mutabilitat en objectes i arrays.


