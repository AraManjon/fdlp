# ENCAPSULACIÓ

El procés d'encapsular propietats i funcions dins d'una sola unitat es coneix com a encapsulació.

De vegades, l'encapsulació fa referència a l'ocultació de dades per aïllar l'objecte de l'exterior. Aquest aïllament fa que les dades (propietats) de l'objecte només es puguin gestionar amb les funcions (mètodes) definides en aquest objecte.

JavaScript no pot amagar i/o encapsular dades perquè els objectes no podien tenir variables i mètodes privats com passa amb Java i altres llenguatges.

Però existeix una proposta experimental que permet definir propietats i mètodes privats utilitzant el prefix ```#```.

📚 Recursos:
>Per veure més accedeix a aquest [enllaç](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

Per accedir a les propietats, haurem de fer servir els mètodes ```set``` (per modificar) i ```get```(per consultar).

Exemple:

```js
class Person {
    #name
    #surname
    #dni

    constructor(name, surname, dni){
        this.#name = name
        this.#surname = surname
        this.#dni = dni
    }

    greet() {
        console.log(`Hola, sóc ${this.#name} ${this.#surname} amb dni ${this.#dni}.`)
    }

    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
    }

    getSurname() {
        return this.#surname
    }

    setSurname(surname) {
        this.#surname = surname
    }

    getDni() {
        return this.#dni
    }
}

const person = new Person('Pepito')

person.getName() // Output: 'Pepito'

persona.setName('Pepita')

person.getName() // Output: 'Pepita'
```