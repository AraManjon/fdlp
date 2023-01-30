import { CreateTasksListService } from "../domain/services/CreateTasksListService.js"
import { repository } from "../config/repositorySetup.js"

export function retrieveTodoList () {

    const createTaskListService = new CreateTasksListService(repository)
    const tasksList = createTaskListService.createByStatus()

    return tasksList
}