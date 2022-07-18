export function validateAge (age) {
    const isFilled = age !== ''
    const isAgeIntoRange = age >= 0 && age <= 120
    return isFilled && isAgeIntoRange
}
