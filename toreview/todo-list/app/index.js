import { POST_Task } from "../api/src/routes/POST_Task.JS"
import { PUT_Task } from "../api/src/routes/PUT_Task.js"
import { GET_TodoList } from "../api/src/routes/GET_TodoList.js"
import { GET_TaskList } from "../api/src/routes/GET_TasksList.js"
import { startAPI } from '../api/src/startAPI.js'

startAPI()

document.getElementById('create-task-button').addEventListener('click', function () {

    const task = document.getElementById('task').value
    const tasksList = POST_Task(task)
    print(tasksList)
    eventsTasksList()
})

function updateTask (id){

    const tasksList = PUT_Task(id)
    print(tasksList)
    eventsTasksList()
}

function createTodoList () {

    const tasksList = GET_TodoList()
    print(tasksList)
}

function createTasksList () {

    const tasksList = GET_TaskList()
    print(tasksList)
}

function deleteTask () {
    console.log('delete')
}

function print (taskList) {

    const taskListFormated = taskList.map( function (task) {
        return `
        Tasca: ${task.getValue()} <br> 
        Data creació: ${task.getDate()} <br> 

        <input id=${ `${task.getId()}-checkbox`} type='checkbox' ${ task.getIsDone() && 'checked' }> Esta feta: ${task.getIsDone()} <br>
        <input id=${ `${task.getId()}-delete`} type='button' value='Eliminar'><br>`
    })

    document.getElementById('tasks-list').innerHTML = taskListFormated.join('<br><br>')

    taskList.forEach(task => {
        document.getElementById(`${task.getId()}-checkbox`).addEventListener('click', () => updateTask(task.getId()))
        document.getElementById(`${task.getId()}-delete`).addEventListener('click', () => deleteTask(task.getId()))
    })
}

document.getElementById('todo-task-button').addEventListener('click', showTodoList)

function showTodoList () {
    createTodoList()
    eventsTodoList()
}

function eventsTodoList() {

    document.getElementById('todo-task-button').innerHTML = 'Veure totes les tasques'
    document.getElementById('todo-task-button').removeEventListener('click', showTodoList)
    document.getElementById('todo-task-button').addEventListener('click', showAllTask)
}

function showAllTask() {

    createTasksList()
    eventsTasksList()
}

function eventsTasksList () {

    document.getElementById('todo-task-button').innerHTML = 'Veure nomes les tasques per fer'
    document.getElementById('todo-task-button').removeEventListener('click', showAllTask)
    document.getElementById('todo-task-button').addEventListener('click', showTodoList)
}