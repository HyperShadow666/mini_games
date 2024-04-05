const mole = document.querySelector(".mole")
const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector("#time_left")
const score = document.querySelector("#score")

let result = 0
let moleIndex 
let seconds = 60

score.innerHTML = result

function randomSquares(){
    squares.forEach(square => {square.classList.remove('mole')
    })

    let randSquare = squares[Math.floor(Math.random() * 9)]
    randSquare.classList.add('mole')
    moleIndex = randSquare.getAttribute('id')
    
}

squares.forEach(square => {
    square.addEventListener('click',()=>{
        if(square.id == moleIndex){
            result++
            score.innerHTML = result
            //square.style.backgroundImage  = 'url("pochita_hurt.png")'
        }
    })
})

function moveMole(){
    timer = setInterval(randomSquares, 400)
}


function countDown(){
    seconds--
    timeLeft.innerHTML = seconds

    if (seconds==0){
        clearInterval(countDownId)
        alert("GAME OVER")
    }
}

let countDownId = setInterval(countDown , 1000)


randomSquares()
moveMole()