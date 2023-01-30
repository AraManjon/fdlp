import { TaskRepository } from "../infrastructure/repository/TaskRepository.js";

export let repository = undefined

export function repositorySetup () {
    repository =  new TaskRepository()
}