const BOARD_WIDTH = 560
const BOARD_HEIGHT = 300
const blockWidth = 100
const blockHeight = 20
const ballRadius = 20
const userStartPosition = [230,10] 
let userPosition = userStartPosition
let moveBallID

let xDirection = 2
let yDirection = 2

class Block{

    constructor(x,y){
        this.bottomLeft = [x,y]
        this.bottomRight = [x + blockWidth,y]
        this.topleft = [x,y + blockHeight]
        this.topRight = [x + blockWidth,y + blockWidth]
    }

}

const blocks =[
    new Block(10,270),
    new Block(120 ,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120 ,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120 ,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]

function addBlocks(){

    for(let i= 0; i<blocks.length; i++){

        const grid = document.querySelector('.grid')
    
        const block = document.createElement("div")
        block.classList.add('block')
    
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'

    
        grid.appendChild(block)
    }


}

const grid = document.querySelector('.grid')

const userDisplay = document.createElement("div")
userDisplay.classList.add('user')

userDisplay.style.left = userStartPosition[0] + 'px'
userDisplay.style.bottom = userStartPosition[1] + 'px'

grid.appendChild(userDisplay)

document.addEventListener('keydown', moveUser)
    

function redrawUser(){
    userDisplay.style.left = userPosition[0] + 'px'
    userDisplay.style.bottom = userPosition[1] + 'px'   
}


function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(userPosition[0]>0){
                userPosition[0] -= 10
                redrawUser()
            }

            break;

        case 'ArrowRight':
            if(userPosition[0] < BOARD_WIDTH - blockWidth){
                userPosition[0]+= 10
                redrawUser()

            }
        
        break;
    }
}

addBlocks()

const ballStartPosition = [270,100]
let ballPosition = ballStartPosition

const ballDisplay = document.createElement("div")
ballDisplay.classList.add("ball")
ballDisplay.style.left = ballPosition[0] + 'px'
ballDisplay.style.bottom = ballPosition[1] + 'px' 

grid.appendChild(ballDisplay)

function displayGameOver(){
    clearInterval(moveBallID)
    clearInterval(checkForCollisionID)
    let display = document.getElementById("win-lose")
    display.style.color = 'white'
    display.innerHTML = "you lose"
}

function redrawBall(){
    ballDisplay.style.left = ballPosition[0] + 'px'
    ballDisplay.style.bottom = ballPosition[1] + 'px'   
}

function moveBall(){
    ballPosition[0]+=xDirection
    ballPosition[1]+=yDirection
    redrawBall()
}

moveBallID = setInterval(moveBall,30)

function checkForCollision(){

    for (let i = 0; i < blocks.length; i++){
        if(
          (ballPosition[0] > blocks[i].bottomLeft[0] && ballPosition[0] < blocks[i].bottomRight[0]) &&
          ((ballPosition[1] + ballRadius) > blocks[i].bottomLeft[1] && ballPosition[1] < blocks[i].topleft[1]) 
        )
          {
          const allBlocks = Array.from(document.querySelectorAll('.block'))
          allBlocks[i].classList.remove('block')
          blocks.splice(i,1)
          changeDirection()   
        }
    }

    if
        ((ballPosition[0] > userPosition[0] && ballPosition[0] < userPosition[0] + blockWidth) &&
        (ballPosition[1] > userPosition[1] && ballPosition[1] < userPosition[1] + blockHeight ) 
        ){
        changeDirection()
    }

    if (ballPosition[0] >= BOARD_WIDTH - ballRadius ||
        ballPosition[1] >= BOARD_HEIGHT - ballRadius ||
        ballPosition[0] <= 0 
        ){  
        changeDirection()
    }
    if (ballPosition[1] <= 0){
        console.log('ok')
        displayGameOver()
    }

}

function changeDirection(){
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
      }
      if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
      }
      if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
      }
      if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
      }
}

checkForCollisionID = setInterval(checkForCollision,35)
