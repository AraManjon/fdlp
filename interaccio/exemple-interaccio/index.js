// Funciones navegador

console.log('imprimir por consola')

alert('mostrar por alert')

const username = prompt('Introduce tu nombre')

console.log(username)

const over18 = confirm('Eres mayor de 18?')

console.log(over18)


// Interactuar DOM

function showName () {
    const inputValue = document.getElementById('input-name').value
    const myText = document.getElementById('my-text')
    myText.innerHTML = inputValue
}
