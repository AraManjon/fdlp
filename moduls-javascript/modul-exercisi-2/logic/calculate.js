import { validNum } from '../validate/validNum.js'

export function calculate () {
    const num = Number(document.getElementById('num').value)

    if ( validNum(num) ) {
        const sum = num + 2
        document.getElementById('result').innerHTML = sum
    }
    
}