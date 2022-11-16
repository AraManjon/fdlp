import { MAX_AGE, MIN_AGE } from "./constant.js"

export function isValidAge (age) {

    if ( age === '') return false

    if ( age < MIN_AGE || age > MAX_AGE) return false

    if (age >= MIN_AGE && age <= MAX_AGE) return true
}