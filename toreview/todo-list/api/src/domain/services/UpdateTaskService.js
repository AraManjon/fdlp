export class UpdateTaskService {

    #repository

    constructor(repository) {
        this.#repository = repository
    }

    update (id) {

        const foundTask = this.#repository.findById(id)
        foundTask.changeStatus()

        this.#repository.save(foundTask)
    }
}
