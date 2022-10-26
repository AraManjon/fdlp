console.log('Exemple interacció per consola')

alert('Exemple interacció per alerta')

const city = prompt('Indica la teva ciutat de naixement', 'Barcelona')

console.log(city)

const over18 = confirm("Ets major d'edat?")

console.log(over18)

function showWelcomeMessage () {

    const username = document.getElementById('username').value

    document.getElementById('message').innerHTML = 'Welcome ' + username

}