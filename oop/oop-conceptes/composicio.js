//Inheritance
class Owner {
    
    #name
    constructor(name) {
        this.#name = name
    }

    getName () {
        return this.#name
    }
}

class Message extends Owner {
    #text

    constructor(name, text) {
        super(name)
        this.#text = text
    }

    showMessage () {
        console.log(`Sender(${this.getName()}): ${this.#text}`)
    }
}
const myMessageWithInheritance = new Message (owner, 'this is my message')


//composition
class Owner {
    
    #name
    constructor(name) {
        this.#name = name
    }

    getName () {
        return this.#name
    }
}

class Message  {
    #text
    #owner
    constructor(owner, text) {
        this.#owner = owner
        this.#text = text
    }

    showMessage () {
        console.log(`Sender(${this.#owner.getName()}): ${this.#text}`)
    }
}
const owner = new Owner('Pepito')

const myMessage = new Message (owner, 'this is my message')
