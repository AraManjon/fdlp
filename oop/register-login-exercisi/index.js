
class User {
    #username
    #email
    #password
    #id
    constructor(username, email, password, id) {
        this.#username = username
        this.#email = email
        this.#password = password
        this.#id = id
    }
    getEmail () {
        return this.#email
    }
    getUsername () {
        return this.#username
    }

    samePassword (password) {
        return this.#password === password
    }
}

class UserRepository {
    // const userRepository = []
    #repository
    constructor() {
        this.#repository = []
    }

    saveUser(user) {
        this.#repository.push(user)
    }

    findUser(email, password) {

        let index = 0
        let userFound; 
        const repository = this.#repository

        while (index < repository.length && userFound === undefined /*!userLogged*/) {
            const user = repository[index]
            if ( user.getEmail() === email && user.samePassword(password) ) { 
                userFound = user;
            }    
            index++
        }

        if(!userFound) throw Error('user with this credentials not exist')
        return userFound
    }
}

//const userRepository = []
const userRepository = new UserRepository()

function generatId () {
    return Math.random()
}

function registerUser () {
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const passwordValue = document.getElementById('password').value
    // const password = new Password(passwordValue) // value object
    const id = generatId()

    const user = new User(username, email, passwordValue, id)

    //userRepository.push(user)
    userRepository.saveUser(user)

    console.log('userRepository', userRepository)
}


function findUser (loginEmail, loginPassword) {

    // buscar en userRepository si hay un usuario con el email y el password
    // 1. buscar en un array = recorrer y mirar cada elemento
    // 2. recorrer -> while, for...
    // 3. cada elemento -> element = array[position]

    // Si el elemento tiene una dada y es igual a email, parar el while y enseñar un mensaje de welcome con el username
    // elemento = {username: 'Pepito', email: 'pepito@emial.com', password: 123, getEmail: function () { return this.email}}
    let index = 0
    let userLogged; 
    while (index < userRepository.length && userLogged === undefined /*!userLogged*/) {
        const user = userRepository[index]
        if ( user.getEmail() === loginEmail && user.samePassword(loginPassword) ) { 
            userLogged = user;
        }    
        index++
    }

    return userLogged
}

function loginUser () {
    const loginEmail = document.getElementById('email-login').value
    const loginPassword = document.getElementById('password-login').value
    
    //const userExist = findUser(loginEmail, loginPassword)

    const userExist = userRepository.findUser(loginEmail, loginPassword)

    if(userExist) console.log(`Welcome ${userExist.getUsername()}`)

}
