const WRAPPER_WIDTH = 600
const WRAPPER_HEIGHT = 600
const squareSize = 60

const squareStartHeight = 400 
const squareEndHeight = 40

const dic = {1: "left", 2:"right" , 3:"up" , 4:"down"}

let score = 0

let keys = []

let randomHorizentalPositioning = [40,102,164,228]

for (let i = 0; i<4; i++){
    squares = document.querySelector(".squares")
    square = document.createElement("div")
    square.classList.add('square')
    squares.appendChild(square)
    keys.push(square)
}

kobeni = document.querySelector('.kobeni')

scoreDisplay = document.getElementById("score")
scoreDisplay.innerHTML = score

const arrow = document.querySelector(".arrow")
arrow.style.bottom = 400 + Math.floor(Math.random() * 60) + 'px'
var randomArrowNumber = Math.floor(Math.random() * 4)+1
let arrowChosed = dic[randomArrowNumber]
arrow.classList.add(dic[randomArrowNumber])

let squareHeight = squareStartHeight
let =  redrawSquareID = setInterval(redrawSquare ,8);


function redrawSquare(){
    if(squareHeight <=0 ){
        arrow.style.bottom = squareStartHeight + 'px'
        squareHeight =squareStartHeight
        redrawSquare()
        
    }else{
        arrow.style.bottom = (squareHeight -5) + 'px'
        squareHeight -=5
    }
}

document.addEventListener('keydown', checkMatch)

function removeLastClass(elementClass) {
    // Get the element by its ID
    var element = document.querySelector("."+elementClass);

    // Check if the element exists
    if (element) {
        // Get the list of classes as an array
        var classesArray = element.className.split(' ');

        // Check if there are classes to remove
        if (classesArray.length > 0) {
            // Get the last class from the array
            var lastClass = classesArray.pop();

            // Remove the last class from the element
            element.classList.remove(lastClass);
        }
    } else {
        console.log("Element with ID " + elementClass + " not found.");
    }
}



function checkMatch(e){
    
    switch (e.key){
        case 'ArrowRight':
            console.log(Math.abs(squareEndHeight - squareHeight)<40)
            console.log(arrowChosed)
            if(Math.abs(squareEndHeight - squareHeight)<40 &&
               arrowChosed === "right"){

                score++
                scoreDisplay.innerHTML = score
                var randomPicureNumber = Math.floor(Math.random() * 5)+1
                console.log("url('"+randomPicureNumber+".png')")
                kobeni.style.backgroundImage = "url('"+randomPicureNumber+".png')"
                // squareHeight = squareStartHeight
                // removeLastClass('arrow')
                // var randomArrowNumber = Math.floor(Math.random() * 4)+1
                // arrow.classList.add(dic[randomArrowNumber])
                // arrowChosed = dic[randomArrowNumber]  
                
            }

            squareHeight = squareStartHeight
            removeLastClass('arrow')
            var randomArrowNumber = Math.floor(Math.random() * 4)+1
            arrow.classList.add(dic[randomArrowNumber])
            arrowChosed = dic[randomArrowNumber]  
            arrow.style.left = randomHorizentalPositioning[Math.floor(Math.random() * 4)] + 'px'
            console.log(arrow.style.left)

            break;
        case 'ArrowLeft':
            console.log(Math.abs(squareEndHeight - squareHeight)<20)
            if(Math.abs(squareEndHeight - squareHeight)<20 &&
            arrowChosed === "left"
            ){
                score++
                scoreDisplay.innerHTML = score
                var randomPicureNumber = Math.floor(Math.random() * 5)+1
                console.log("url('"+randomPicureNumber+".png')")
                kobeni.style.backgroundImage = "url('"+randomPicureNumber+".png')"
                // squareHeight = squareStartHeight
                // removeLastClass('arrow')
                // var randomArrowNumber = Math.floor(Math.random() * 4)+1
                // arrow.classList.add(dic[randomArrowNumber])
                // arrowChosed = dic[randomArrowNumber]  
                
            }

            squareHeight = squareStartHeight
            removeLastClass('arrow')
            var randomArrowNumber = Math.floor(Math.random() * 4)+1
            arrow.classList.add(dic[randomArrowNumber])
            arrowChosed = dic[randomArrowNumber] 
            arrow.style.left = randomHorizentalPositioning[Math.floor(Math.random() * 4)] + 'px'
            console.log(arrow.style.left)

            break;
            case 'ArrowUp':
                console.log(Math.abs(squareEndHeight - squareHeight)<20)
                if(Math.abs(squareEndHeight - squareHeight)<20 &&
                arrowChosed === "up"
                ){
                    score++
                    scoreDisplay.innerHTML = score
                    var randomPicureNumber = Math.floor(Math.random() * 5)+1
                    console.log("url('"+randomPicureNumber+".png')")
                    kobeni.style.backgroundImage = "url('"+randomPicureNumber+".png')"
                    // squareHeight = squareStartHeight
                    // removeLastClass('arrow')
                    // var randomArrowNumber = Math.floor(Math.random() * 4)+1
                    // arrow.classList.add(dic[randomArrowNumber])
                    // arrowChosed = dic[randomArrowNumber]  
                    
                }
                
                squareHeight = squareStartHeight
                removeLastClass('arrow')
                var randomArrowNumber = Math.floor(Math.random() * 4)+1
                arrow.classList.add(dic[randomArrowNumber])
                arrowChosed = dic[randomArrowNumber] 
                arrow.style.left = randomHorizentalPositioning[Math.floor(Math.random() * 4)] + 'px'
                console.log(arrow.style.left)

                break;
                case 'ArrowDown':
                    console.log(Math.abs(squareEndHeight - squareHeight)<20)
                    if(Math.abs(squareEndHeight - squareHeight)<20 &&
                    arrowChosed === "down"
                    ){
                        score++
                        scoreDisplay.innerHTML = score
                        var randomPicureNumber = Math.floor(Math.random() * 5)+1
                        console.log("url('"+randomPicureNumber+".png')")
                        kobeni.style.backgroundImage = "url('"+randomPicureNumber+".png')"
                        // squareHeight = squareStartHeight
                        // removeLastClass('arrow')
                        // var randomArrowNumber = Math.floor(Math.random() * 4)+1
                        // arrow.classList.add(dic[randomArrowNumber])
                        // arrowChosed = dic[randomArrowNumber]  
                        
                    }
                    
                    squareHeight = squareStartHeight
                    removeLastClass('arrow')
                    var randomArrowNumber = Math.floor(Math.random() * 4)+1
                    arrow.classList.add(dic[randomArrowNumber])
                    arrowChosed = dic[randomArrowNumber] 
                    arrow.style.left = randomHorizentalPositioning[Math.floor(Math.random() * 4)] + 'px'
                    console.log(arrow.style.left)

                    break;
                    default:
                        console.log("clicked")
                        squareHeight = squareStartHeight
                        var randomArrowNumber = Math.floor(Math.random() * 4)+1
                        arrow.classList.add(dic[randomArrowNumber])
                        arrowChosed = dic[randomArrowNumber]
                        console.log(arrow.style.left)
                        arrow.style.left = randomHorizentalPositioning[Math.floor(Math.random() * 4)] + 'px'
                    }
                    
                }