import { calculateSum } from './logic/calculateSum.js'

const elementButton = document.getElementById('button')

elementButton.addEventListener('click', () => {
    const num = Number(document.getElementById('num').value)
    calculateSum(num)
})

