
function retrieveNums () {

    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)

    const result = [ num1, num2 ]

    return result
}

function sumNums () {

    const [ num1, num2 ] = retrieveNums()

    const sum = num1 + num2

    printResult( `The result of sum ${num1} and ${num2} is = ${sum}`  )
}

function printResult (value) {

    document.getElementById('result').innerHTML = value
}