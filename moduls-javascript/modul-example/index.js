import { checkAge } from './checkAge.js'
import { retrieveAge } from './retrieve-age.js'

document.getElementById('button-calculate').addEventListener('click', () => {

    const age = retrieveAge()
    checkAge(age)
} )
