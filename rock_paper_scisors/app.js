const compChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scisors'
    }
    compChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'Draw'
    }
    if (computerChoice ===  'rock' && userChoice === "paper"){
        result = 'Won'
    }
    if (computerChoice === 'rock' && userChoice === "scisors"){
        result = 'Lost'
    }
    if (computerChoice ===  'scisors' && userChoice === "paper"){
        result = 'Lost'
    }
    if (computerChoice === 'scisors' && userChoice === "rock"){
        result = 'Won'
    }
    if (computerChoice ===  'paper' && userChoice === "rock"){
        result = 'Lost'
    }
    if (computerChoice === 'paper' && userChoice === "scisors"){
        result = 'Won'
    }
    resultDisplay.innerHTML = result
}