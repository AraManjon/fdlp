const PC_WIN = 'He guanyat'
const USER_WIN = 'Has guanyat'
const TIED = 'Hem empatat'
const SCISSORS = 'tisora'
const PAPER = 'paper'
const STONE = 'pedra'

const gameOptions = {
    1: {value: STONE, icon: '✊🏻' },
    2: {value: PAPER, icon: '✋🏻'},
    3: {value: SCISSORS, icon: '✌🏻'},
}

const rules = {
    pedra: { winsTo: SCISSORS },
    paper: { winsTo: STONE },
    tisora: { winsTo: PAPER },
}

function retrieveUserOption () {
    const number = parseInt(document.getElementById('number').value)
    return gameOptions[number]
}

function retrievePCOption () {
    const number = Math.floor(Math.random () * (4 - 1)) + 1
    return gameOptions[number]
}

function sayGoodBye () {
    document.getElementById('result-pc').innerHTML = ''
    document.getElementById('result-user').innerHTML = ''
    document.getElementById('result-winner').innerHTML = 'Entenc que no vols jugar. Adéu 👋🏽'

}

function showResult (pcOption, userOption, resultGame) {
    document.getElementById('result-pc').innerHTML = `Jo 💻 -> ${pcOption.value} ${pcOption.icon}`
    document.getElementById('result-user').innerHTML = `Tu 👧🏻 -> ${userOption.value} ${userOption.icon}`
    document.getElementById('result-winner').innerHTML = `${resultGame}!`
}

function play (pc, user) {
    if ( pc === user ) return TIED
    if ( rules[pc].winsTo === user ) return PC_WIN
    if ( rules[user].winsTo === pc) return USER_WIN
}

function startGame () {
    const userOption = retrieveUserOption()
    const pcOption = retrievePCOption()
    const userWantPlay = userOption

    if ( !userWantPlay ) sayGoodBye()

    if ( userWantPlay ) {
        const resultGame = play(pcOption.value, userOption.value)
        showResult(pcOption, userOption, resultGame)
    }
}