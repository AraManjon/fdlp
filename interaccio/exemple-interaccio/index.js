console.log('hola mundo')

alert('Hola que tal')

const nombre = prompt('Introduce tu nombre')

console.log(nombre)

const isOver18 = confirm('Eres mayor de edad?')


function showName () {
    const inputElement = document.getElementById("name")

    console.log(inputElement)

    const nameValue = inputElement.value
    
    console.log(nameValue)

    document.getElementById('greeting').innerHTML = `Hello ${nameValue}`
}



