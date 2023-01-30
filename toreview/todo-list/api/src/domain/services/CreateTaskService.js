import { Task } from "../entities/Task.js"

export class CreateTaskService {
    #repository
    #idGenerator
    #dateGenerator

    constructor (reposoitory, idGenerator, dateGenerator) {
        this.#repository = reposoitory
        this.#idGenerator = idGenerator
        this.#dateGenerator = dateGenerator
    }

    create (task) {

        const id = this.#idGenerator()
        const date = this.#dateGenerator()

        const newTask = new Task(task, date, id)

        this.#repository.save(newTask)
    }
}