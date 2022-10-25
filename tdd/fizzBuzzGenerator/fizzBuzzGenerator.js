import { validateNumber } from './validateNumber.js'
import { FIZZ, BUZZ, FIZZBUZZ } from './constants.js'
import { isFizzNumber } from './isFizzNumber.js'
import { isBuzzNumber } from './isBuzzNumber.js'
import { isFizzBuzzNumber } from './isFizzBuzzNumber.js'

export function fizzBuzzGenerator (value) {

    validateNumber(value)
    
    if( isFizzBuzzNumber(value) ) return FIZZBUZZ
    if( isFizzNumber(value) ) return FIZZ
    if( isBuzzNumber(value) ) return BUZZ

    return (value).toString()
}