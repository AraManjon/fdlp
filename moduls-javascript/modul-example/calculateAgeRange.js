import { validate } from './validateAge.js'
export function calculateAgeRange () {
    const age = document.getElementById('age').value

    const isAValidAge = validate(age)

    if (!isAValidAge) {
        console.log('Introduce una edad valida')
    }
    if (isAValidAge) {
        console.log('Calculate range')
    }

}