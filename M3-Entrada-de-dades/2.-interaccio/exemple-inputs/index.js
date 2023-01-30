function retrieveTextValue () {
    const textInputValue = document.getElementById('text-input').value
    console.log('textInputValue', textInputValue)
}

function retrieveNumberValue () {
    const numberInputValue = document.getElementById('number-input').value
    console.log('numberInputValue', numberInputValue)
}

function retrieveNumberMinMaxValue () {
    const numberMinMaxValue = document.getElementById('number-min-max-input').value
    console.log('numberMinMaxValue', numberMinMaxValue)
}

function retrievePasswordValue () {
    const passwordValue = document.getElementById('password-input').value
    console.log('passwordValue', passwordValue)
}

function retrieveSearchValue () {
    const searchValue = document.getElementById('search-input').value
    console.log('searchValue', searchValue)
}

function retrieveEmailValue () {
    const emailValue = document.getElementById('email-input').value
    console.log('emailValue', emailValue)
}

function retrieveDateValue () {
    const dateValue = document.getElementById('date-input').value
    console.log('dateValue', dateValue)
}

function retrieveMonthValue () {
    const monthValue = document.getElementById('month-input').value
    console.log('monthValue', monthValue)
}

function retrieveWeekValue () {
    const weekValue = document.getElementById('week-input').value
    console.log('weekValue', weekValue)
}

function retrieveTimeValue () {
    const timeInputValue = document.getElementById('time-input').value
    console.log('timeInputValue', timeInputValue)
}

function retrieveColorValue () {
    const colorInputValue = document.getElementById('color-input').value
    console.log('colorInputValue', colorInputValue)
}

function retrieveCheckboxValues () {

    const checkedBlue = document.getElementById('checkbox-input-blue').checked
    const valueBlue = document.getElementById('checkbox-input-blue').value

    console.log('checkedBlue', checkedBlue)
    console.log('valueBlue', valueBlue)

    const checkedRed = document.getElementById('checkbox-input-red').checked
    const valueRed = document.getElementById('checkbox-input-red').value

    console.log('checkedRed', checkedRed)
    console.log('valueRed', valueRed)

    const checkedWhite = document.getElementById('checkbox-input-white').checked
    const valueWhite = document.getElementById('checkbox-input-white').value

    console.log('checkedWhite', checkedWhite)
    console.log('valueWhite', valueWhite)

}

function retrieveRadioValues () {
    const radioInputSelected = document.querySelector('input[name="radio-input"]:checked').value
    console.log('radioInputSelected', radioInputSelected)
}

function retrieveSelectValues (){
    const selectValue = document.getElementById('pet-select').value
    console.log('selectValue', selectValue)
} 