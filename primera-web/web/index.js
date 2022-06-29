
/*const username = prompt( 'Introduce tu username' ) 

const email = prompt( 'Introduce tu email', 'a@mail.com') 
console.log(email)
const password = prompt( 'Introduce tu contraseña' ) 
console.log(password)
const isOver18 = confirm('Eres mayor de edad?')

console.log('isOver18', isOver18)

console.log('Hello user, your email is: ' + email + ' and your password is: '+ password)

alert('Welcome ' + username) */


// hola mundo


function showMessage () {

    const element = document.getElementById( 'input-example' )
    const element2 = document.getElementById( 'input-example2' )

    const resultSum = Number(element.value) + Number(element2.value)

    document.getElementById('result').innerHTML = resultSum
}

