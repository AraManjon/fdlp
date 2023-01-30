export class TaskRepository {

    #repository

    constructor () {
        this.#repository = []
    }

    save (task) {

        const taskPosition = this.#repository.findIndex((currentTask)  => currentTask.checkId(task.getId()))
        const taskExist = taskPosition >= 0

        if ( taskExist ) this.#repository.splice(taskPosition,1,task)
        
        if (!taskExist ) this.#repository.push(task)
    }

    findById (id) {

        return this.#repository.find(task => task.checkId(id))
    }

    findAllByStatus () {

        return this.#repository.filter(task => !task.getIsDone())
    }

    findAll () {
        
        return this.#repository
    }
}