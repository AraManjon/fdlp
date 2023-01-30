import { CreateTasksListService } from "../domain/services/CreateTasksListService.js"
import { repository } from "../config/repositorySetup.js"

export function retrieveTaskListController () {

    const createTaskListService = new CreateTasksListService(repository)
    const tasksList = createTaskListService.create()

    return tasksList
}