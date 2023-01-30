# TIPUS DE DADES NO PRIMITIVES / MUTABLES

No primitius vol dir que són mutables. Serien tots els tipus d'**objectes**.

Un objecte és un valor en memòria, és a dir, quan es declara, es crea una referència que sempre apuntarà a aquesta primera instància de l'objecte.

Són mutables, és a dir, es poden editar, eliminar o afegir propietats.

Dins dels objectes hi ha diferents tipus d'**estructures de dades**, com per exemple l' **Array** i els **Objectes**.

## **Array**

Representen llistes de valors que representen el mateix. El primer element estarà en l'índex 0, el següent en l'índex 1, i així successivament.

```js
typeof instance === "object"

instance instanceof Array
```

Exemple:

```js
const fruitNames = ['Apple', 'Pineapple', 'Pear']

fruitNames[0] // 'Apple'
fruitNames[1] // 'Pineapple'
fruitNames[2] // 'Pear'
fruitNames[3] // undefined
```

Poden contenir una llista de diferents tipus de dades, però no és d'ús habitual.

Example:

```js
const exampleList = [1, 'two', [3,4], true]
```

## **Objecte literal**

Un objecte literal representa una entitat semblant a quelcom de la vida real.

Està compost per propietats, una col·lecció d'elements que contenen **key** i **value**. Per accedir al valor d'una propietat, podem fer-ho a través de la key.

```js
typeof instance === "object"
```

Exemple:

```js
const person = { name: 'Pepito', surname: 'Grillo', age: 45, greeting: function() { console.log('hello!') }, cities: ['BCN', 'MDR'] }

console.log(person.name) // Pepito
console.log(person['name']) // Pepito
console.log(person.cities[0]) // BCN
console.log(person.greeting()) // hello!
```

També podem crear una nova propietat afegint una nova key amb un valor.

Exemple:

```js
const person = { name: 'Pepito', surname: 'Grillo', age: 45 }

person.city = 'BCN'

console.log(person) // { name: 'Pepito', surname: 'Grillo', age: 45, city: 'BCN' }

```

## ❓ **Entendre que vol dir que siguin mutables** 

Exemple com mutar un array:

```js
const prices = ['5€', '10€']

prices[0] = '20€'

prices // ['20€', '10€']
```

Exemple com mutar un objecte:

```js
const user = { email: 'myname@gmail.com', username: 'myname' }

user.username = 'Pepito_Grillo'
user.language = 'EN-GB'

user // { email: 'myname@gmail.com', username: 'Pepito_Grillo', language: 'EN-GB' }
```

Exemple de com no es pot mutar un valor primitu:

```js
let firstName = 'Pepito'
firstName.toUpperCase()
console.log(firstName) // Pepito, expected: PEPITO
```

No es modifica l'string original, sinó que el mètode ```toUpperCase()``` retorna un nou string.

Si el que volem és guardar a la variable firstName el valor en majúscules haurem de reassignar.


🚨 Important!

> Es recomana no utilitzar la mutabilitat dels objectes per a evitar modificacions inesperades i side-effects, ja que ens donarà un codi amb comportament difícil de seguir.

> Nous [tipus de dades](https://dev.to/briansanteliz/nuevos-tipos-de-datos-en-javascript-records-tuples-2kie) com a proposta per evitar aquesta mutabilitat en objectes i arrays.