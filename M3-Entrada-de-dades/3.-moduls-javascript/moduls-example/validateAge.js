import { MAX_AGE, MIN_AGE } from "./contants/contants.js";

export function validateAge(age) {
    if (age < MIN_AGE || age > MAX_AGE) throw Error('Invalid age');
}