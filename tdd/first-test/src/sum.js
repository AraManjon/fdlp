export function sum ( n1, n2 ) {
    if (typeof n1 !== 'number') throw Error('The first argument should be a number')
    if (typeof n2 !== 'number') throw Error('The second argument should be a number')
    
    return n1 + n2
}