export class Task {
    #value
    #date
    #id
    #isDone

    constructor(task, date, id){
        this.#value = task
        this.#date = date
        this.#id = id
        this.#isDone = false
    }
    getValue () {
        return this.#value
    }

    getDate () {
        return this.#date
    } 

    getIsDone () {
        return this.#isDone
    }

    getId () {
        return this.#id
    }

    changeStatus () {
        this.#isDone = !this.#isDone
    }

    checkId (id) {
        return this.#id === id
    }
}