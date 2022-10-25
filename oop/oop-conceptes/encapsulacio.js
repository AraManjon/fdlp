// Encapsulación
class Person {
    #name
    age
    nationality

    constructor(name, age, nationality) {
        this.#name = name
        this.age = age
        this.nationality = nationality
    }

    sayHello () {
        console.log(`Hello my name is ${this.#name}`)
    }
}

const pepito = new Person('Pepito', 89, 'Fracia')

pepito.sayHello()
pepito.age
pepito.nationality
//pepito.#name // error, private field