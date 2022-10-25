console.log('hola clase')

alert('hola clase')

const city = prompt('De que ciudad vienes?', 'Barcelona')

console.log(city)

const over18 = confirm('Eres mayor de edad?')

console.log(over18)


function showWelcomeMessage () {

    const name = document.getElementById('name-input').value

    document.getElementById('message').innerHTML = 'Welcome ' + name

}