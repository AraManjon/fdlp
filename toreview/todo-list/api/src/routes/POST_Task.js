import { createTaskController } from "../controllers/createTaskController.js"

export const POST_Task = (task) => createTaskController(task)