# Herencia

L'herència és una tècnica típica de l'OOP que ens permet definir noves classes basades en altres de ja existents amb l'objectiu de reutilitzar codi. 

Exemple amb sintaxi tradicional d'ES5:

```js
function Person (name) {
    this.name = name
}

Person.prototype.greet = function () {
    console.log('Hola, soc ' + this.name)
}

function Programmer (name) {
    this.name = name
}

Programmer.prototype = Object.create(Person.prototype)

Programmer.prototype.writteCode = function (coffee) {
    if (coffee) { 
        console.log( 'Estic programant') 
    } else {
        console.log('No puc, no tinc cafè')
    }
}

const programmer = new Programmer('Pepito')
programmer.greet() // 'Hola, soc Pepito'
programmer.writteCode() // 'No puc, no tinc cafè'
```

Exemple amb sintaxi ES6:

```js
class Person {
    constructor(name){
        this.name = name
    }

    greet() {
        console.log(`Hola, soc ${this.name}`)
    }
}

class Programmer extends Person { 
    constructor(name){
        super(name)
    }

    writeCode(coffee){
        coffee ? console.log( 'Estic programant') : console.log('No puc, no tinc cafè'); 
    }
}

const programmer = new Programmer('Pepito')
programmer.greet() // 'Hola, soc Pepito'
programmer.writteCode() // 'No puc, no tinc cafè'
```

La sintaxi de classes permet escriure un codi més llegible i intuïtiu. Per cert, al constructor de la classe estem passant a la classe pare el paràmetre name a través de la paraula clau super. Aquest tipus de pràctiques les hem de minimitzar, ja que augmenten la rigidesa i l'acoblament del nostre codi.

🚨 Important!
> L'herència no és la millor opció per a la reutilització de codi, encara que sí que hi ha certs contextos en què s'aplica molt bé.
