const user = 'Pepito'

// Exemple com interactuar amb el navegador per imprimir missatge en la consola
console.log('interaccio desde arxiu js')

// Exemple com interactuar amb el navegador per enseñar pop up en el navegador
alert(user)

const resultPrompt = prompt('Quants anys tens?')
console.log('resultPrompt', resultPrompt)

const isOver18 = confirm("Ets major d'edat?")
console.log('isOver18', isOver18)

// Exemple com interactuar amb el DOM
function sayHello () {
    const elementGreeting = document.getElementById('greeting')

    elementGreeting.innerHTML = `Hello ${user}`

    console.log(elementGreeting)
}
