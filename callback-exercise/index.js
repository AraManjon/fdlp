const arrayOfNumbers = [1,2,3,4,5]

function sumByTwo (num) {
    return num + 2
}

function myMap(list, func) {

    let counter = 0
    const listLength = list.length
    const newList = []

    while(counter < listLength) {
        newList.push(func(list[counter]))
        counter++
    }

    return newList
}

myMap(arrayOfNumbers, sumByTwo) // [3, 4, 5, 6, 7]