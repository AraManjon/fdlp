import { isValidAge } from "./isValidAge.js"
import { ADULT_AGE } from "./constant.js"

export function calculate (age) {
    const validAge = isValidAge(age)

    if (validAge) {
        if ( age >= ADULT_AGE) {
            alert('Welcome')
        }
    }

    if (!validAge) console.log('invalid age')
}