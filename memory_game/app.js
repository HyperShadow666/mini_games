const cardArray = [

    {
        name: 'denji',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\denji.jpg'
    },
    {
        name: 'makima',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\makima.jpg'
    },
    {
        name: 'power',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\power.jpg'
    },
    {
        name: 'aki',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\aki.jpg'
    },
    {
        name: 'kobeni',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\kobeni.jpg'
    },
    {
        name: 'pochita',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\pochita.webp'
    },
    {
        name: 'denji',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\denji.jpg'
    },
    {
        name: 'makima',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\makima.jpg'
    },
    {
        name: 'power',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\power.jpg'
    },
    {
        name: 'aki',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\aki.jpg'
    },
    {
        name: 'kobeni',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\kobeni.jpg'
    },
    {
        name: 'pochita',
        img : 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\pochita.webp'
    }
]   

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function checkPictures(){
    const cards = document.querySelectorAll('img');
    if (cardChosen[0] == cardChosen[1] && cardChosenId[0] !== cardChosenId[1]){
        console.log(cards[cardChosenId])
        cards[cardChosenId[0]].setAttribute('src','C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\white.png')
        cards[cardChosenId[0]].removeEventListener('click', flipCard)
        cards[cardChosenId[1]].setAttribute('src','C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\white.png')
        cards[cardChosenId[1]].removeEventListener('click', flipCard)
        ++score
        scoreLabel.innerHTML = score
        if(score === cardArray.length/2){
            show_wining_title()
        }
    }
    else{
        console.log(cardChosenId)
        console.log(cards)
        cards[cardChosenId[0]].setAttribute('src','C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\blank.jpg')
        cards[cardChosenId[1]].setAttribute('src','C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\blank.jpg')
    }
    cardChosen = []
    cardChosenId = []
    console.log(cardChosen)
}


function createBoard (){
    gridDisplay.innerHTML = ""
    for (let i = 0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'C:\\Users\\HP\\OneDrive\\Desktop\\projects\\javascript\\memory_game\\assets\\blank.jpg')
        card.setAttribute('data-id', i)
        card.setAttribute('width', 100)
        card.setAttribute('height', 100)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        scoreLabel.innerHTML = 0
        score = 0
    }
}


let cardChosen = []
let cardChosenId = []
let scoreLabel = document.getElementById('score')
let score = 0

function flipCard() {
    let cardId =  this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkPictures, 500) 
    }
}

function show_wining_title(){
    gridDisplay.innerHTML = ""
    const winDisplay = document.createElement('h1')
    winDisplay.setAttribute('id', 'win')
    winDisplay.textContent = "YOU WON !"
    const playAgainButton = document.createElement('button')
    playAgainButton.setAttribute('id', 'playAgain')
    playAgainButton.textContent = 'play again'
    playAgainButton.addEventListener('click', createBoard)
    gridDisplay.appendChild(winDisplay)
    gridDisplay.appendChild(playAgainButton)

    
}


createBoard()