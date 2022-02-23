import { validateNumber} from '../validate/index.js'
import { SUM_NUM } from '../constants/index.js'

export function calculateSum(number) {
    validateNumber(number)
    const sum = number + SUM_NUM
    console.log(`The result of sumByTwo is ${sum}`)
}