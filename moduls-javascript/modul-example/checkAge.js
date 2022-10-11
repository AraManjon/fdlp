
export function checkAge (age) {
    
    if (age < 0 || age > 120) throw Error('Invalid age')
    return age
}

