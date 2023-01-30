import { UpdateTaskService } from "../domain/services/UpdateTaskService.js"
import { CreateTasksListService } from "../domain/services/CreateTasksListService.js"
import { repository } from "../config/repositorySetup.js"

export function updateTaskController (id) {

    const updateTaskService = new UpdateTaskService(repository)
    updateTaskService.update(id)

    const createTaskListService = new CreateTasksListService(repository)
    const tasksList = createTaskListService.create()

    return tasksList
}