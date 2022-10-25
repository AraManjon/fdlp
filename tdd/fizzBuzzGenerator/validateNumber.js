export function validateNumber (number) {
    if ( isNaN(number) ) throw Error('Should be a number')
}