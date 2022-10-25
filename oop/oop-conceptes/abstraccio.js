// Abstracción
class Email {
     #owner
     #content
     #receiver
     #currentDate

    constructor(owner) {
        this.#owner = owner
        this.#currentDate = new Date()
    }

    #setDate () {
        this.#currentDate = new Date()
    }

    setContent (content) {
        this.#content = content
        this.#setDate()
    }

    setReceiver ( receiver ) {
        this.#receiver = receiver
        this.#setDate()
    }

    print () {
        return `
        To: ${this.#receiver}
        From: ${this.#owner}
        Content: ${this.#content}
        Time: ${this.#currentDate}`
    }
}

const myEmail = new Email('Owner')

myEmail.setContent('This is the content of my email')

myEmail.setReceiver('Receiver')

const message = myEmail.print()

console.log(message)