export class CreateTasksListService {

    #repository

    constructor (repository) {
        this.#repository = repository
    }

    create () {
        const tasksList = this.#repository.findAll()
        return tasksList
    }

    createByStatus () {
        const tasksList = this.#repository.findAllByStatus()
        return tasksList
    }
}