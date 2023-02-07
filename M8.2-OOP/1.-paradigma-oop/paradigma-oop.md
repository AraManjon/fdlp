# PARADIGMA DE LA PROGRAMACIÓ ORIENTADA A OBJECTES: OOP

És un paradigma de la programació on els objectes són elements organitzatius que representen les entitats úniques, similars a un objecte de la vida real que contenen propietats i mètodes.

## Entitats: propietats i mètodes

Per exemple, ```car``` és un objecte de la vida real que té característiques ```color, brand i model``` i accions com ```driving```. Les característiques d'un objecte són les **propietats** i les accions són el que anomenen **mètodes**.

Exemple:

```js
const car = { 
    color: 'red', 
    brand: 'Ferrari',
    model: 'SP48 Unica',
    driving: function () { console.log('🏎💨') }
}

car.driving() // '🏎💨'
```

🚨 Important!
> A la programació orientada a objectes, els objectes són els que contenen la seva informació i codi relacionat, és a dir, informació sobre l'entitat, així com a funcionalitats o comportament.
>
> Exemple implementació procedimental:
> 
> ```js
> const anualSalary = 30000
> const months = 12
> 
> function getSalary (anualSalary, months) {
>     return anualSalary / months
> }
> ```
> 
> Exemple implementació OOP:
> 
> ```js
> let employee = {
>     anualSalary: 30000,
>     months: 12,
>     getSalary: function getSalary () {
>         return this.anualSalary / this.months
>     }
> }
> ```

📝 Notes:
> La paraula reservada ```this``` a JavaScript ens serveix per fer referència a l'objecte que conté el mètode que l'invoca.
>
> Exemple:
> 
> ```js
> function myFunc () {
>     console.log(this)
> }
> myFunc() // Window
> ```
> 
> Exemple:
> 
> ```js
> function myFunc () {
>     
>     return { print : function () {console.log(this)} }
> }
> myFunc().print() // {print: ƒ}
> ```

## Class

En la programació orientada a objectes, els objectes són instàncies d'una ```class```.

- **Class**: descripció/plantilla d'un objecte. Consta d'una sèrie de dades i mètodes que resumeixen les característiques d'aquest objecte.

- **Instanciar**: és el procés de generar un exemplar d'una classe.

📝 Notes:
> JavaScript en un llenguatge orientat a objectes basat en prototips, en lloc d'estar basat en classes com a tals. A la versió ES6 del llenguatge es va introduir la paraula reservada class per definir classes seguint el mateix patró de llenguatges clàssics de POO com Java o C#.
>
> Abans es feia servir **Funcions constructores**.
>
> Exemple:
> ```js
> function Cercle (radius) {
>     this.radius = radius
> }
> Cercle.prototype.draw = function () {
>    console.log(`⭕️ with radius ${this.radius}`)
> }
>
> const circle = new Cercle(10)
> circle.radius // 10
> circle.draw() // '⭕️ with radius 10'
> 
> const circle2 = new Cercle(40)
> circle2.radius // 40
> circle2.draw() // '⭕️ with radius 40'
> ```

📝 Notes:
> La paraula reservada ```new``` el que fa és crear un nou objecte vuit, amb una referència pròpia, atribuirà el contingut de la funció.
>
> Si no utilitzem la paraula ```new``` el ```this``` de dins de la funció apuntarà a l'objecte que conté aquesta funció. En un navegador és l'objecte Window.
>
> L'ús de ```new``` en una funció constructora retornarà aquest nou objecte amb el contingut.

### **Constructors**

A partir d'ES6 podem crear objectes a partir de la paraula clau ```class```, tal com es fa en altres llenguatges orientats a objectes. Aquesta sintaxi no ofereix noves funcionalitats, sinó que simplement aporta un estil més simple i elegant per fer un ús més directe de funcions constructores i cadena de prototips.

Exemple:

```js
class Person {
    constructor(name){
        this.name = name
    }

    greet() {
        console.log(`Hello, I am ${this.name}`)
    }
}

const persona = new Person('Pepito')
persona.greet() // 'Hello, I am Pepito'
spersona.name // 'Pepito'

const persona2 = new Person('Pepita')
persona2.greet() // 'Hello, I am Pepita'
spersona2.name // 'Pepita'
```

