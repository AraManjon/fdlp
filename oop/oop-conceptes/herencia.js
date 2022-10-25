class Employee {

    #name

    constructor(name) {
        this.#name = name
    }

    sayMyName () {
        console.log(`My name is ${this.#name}`)
    }
}

class Programmer extends Employee {
    constructor(name) {
        super(name)
    }

    writeCode(coffee){
        coffee ? console.log( 'Estic programan') : console.log('No puc,no tinc café.');
    }
}

const beyonce = new Employee('Beyonce')
beyonce.sayMyName()

const pepito = new Programmer('Pepito')
pepito.sayMyName()
pepito.writeCode(true)