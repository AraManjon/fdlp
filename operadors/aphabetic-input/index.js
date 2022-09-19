function validateIsAlphabeticValue () {

    const surnameElement = document.getElementById('surname') // retrieve element HTML
    const surname = surnameElement.value // extract value of element

    const lastCharAdded = surname.charAt(surname.length - 1) // extract last value of a string
    const charToNumber = Number(lastCharAdded) // convert to num this value, if is not a numeric value, it converts to NaN, if is a number, it converts the string to number.

    const charIsNum = isNaN(charToNumber) === false // if isNaN charToNumber is a alphabetic value

    if ( charIsNum ) {
        const surnameWithLastCharDeleted = surname.slice(0, -1) // method to delete the last value of a string

        surnameElement.value = surnameWithLastCharDeleted // reasign element html to the surname without last value 

        console.log(surnameWithLastCharDeleted)
    }

}