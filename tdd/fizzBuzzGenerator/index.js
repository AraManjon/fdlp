import { fizzBuzzGenerator } from "./fizzBuzzGenerator.js"

document.getElementById('button').addEventListener('click', function () {

    const number = Number(document.getElementById('number').value)

    try{

        const result = fizzBuzzGenerator(number)
        document.getElementById('result').innerHTML = result
    }catch(error) {
       if (error.message === 'Should be a number') document.getElementById('result').innerHTML = 'Please, introduce a number'
       if (error.message !== 'Should be a number') document.getElementById('result').innerHTML = 'Ooops!Something went wrong'
        throw Error(error.message)
    }

})