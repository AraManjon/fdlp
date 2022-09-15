/* 
console.log('Hola,que tal?')

alert('Benvinguts')

const age = prompt('Cual es tu edad?')

const ageUserConfirmed = confirm(`Tu edad es realmente ${age}?`)

console.log('age confirmed -> ' + ageUserConfirmed) */


function checkAge () {

    const inputAge = document.getElementById('input-age').value
    
    if ( inputAge >= 18 ) {
        alert('Puedes acceder a la web')

        document.getElementById('result').innerHTML = 'Eres mayor de edat'
    }

    if ( inputAge < 18 ) {
        alert('No puedes entrar')
    }

}
 
