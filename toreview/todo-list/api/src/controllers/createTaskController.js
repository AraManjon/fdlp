import { CreateTaskService } from "../domain/services/CreateTaskService.js"
import { CreateTasksListService } from "../domain/services/CreateTasksListService.js"
import { dateGenerator } from "../infrastructure/dateGenerator/dataGenerator.js"
import { idGenerator } from "../infrastructure/idGenerator/idGenerator.js"
import { repository } from "../config/repositorySetup.js"

export function createTaskController (task) {

    const createTaskService = new CreateTaskService(repository, idGenerator, dateGenerator)
    createTaskService.create(task)

    const createTaskListService = new CreateTasksListService(repository)
    const tasksList = createTaskListService.create()

    return tasksList
}