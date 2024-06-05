
var classicArray = ["assets/happy-scissors.png", "assets/happy-rock.png", "assets/happy-paper.png"]
// var myArray = [
//     {name: 'scissors', img: 'assers/happy-scissors.png'},
//     {name: 'rock', img: 'assets/happy-rock.png'},
//     {name: 'paper', img: 'assets/happy-paper.png'}
// ]

/*--------------------------- VARIABLES ------------------------------------*/
var spongeBobImg;
var sandyImg;
var pickedRock;
var pickedPaper;
var pickedScissors;
var computerSelections = [{name: 'scissors', img: 'assers/happy-scissors.png'}, {name: 'rock', img: 'assets/happy-rock.png'}, {name: 'paper', img: 'assets/happy-paper.png'}]
var classicGame = document.querySelector('.classic-box');
var difficultGame = document.querySelector('.difficult-box')
var gameView = document.querySelector('.game-view')
var selectedRock = document.querySelector('article') 
var selectedPaper = document.querySelector('article')
// var userSelectionMaybe = document.querySelector('article') // <--- BIG MAYBE
var selectedScissors = document.querySelector('article')
var createProfile = document.querySelector('human-row')
/*-------- RADIO SELECTION -------------------*/
var selectedSpongeBob = document.querySelector('#sponge-bob')
var selectedSandy = document.querySelector('#sandy')

var playerInput = document.querySelector('#user-input')
var playerprofile = document.querySelector('.create-player-btn')
var profileView = document.querySelector('.profile')


classicGame.addEventListener('click', selectedClassicGame)
difficultGame.addEventListener('click', selectedDifficultGame)
selectedRock.addEventListener('click', rockSelection)
selectedPaper.addEventListener('click', paperSelection)
selectedScissors.addEventListener('click', scissorsSelection)
selectedSpongeBob.addEventListener('click', spongeBobIcon)
selectedSandy.addEventListener('click', sandyIcon)
playerprofile.addEventListener('click', createChar)

// userSelectionMaybe.addEventListener('click', userSelectionIdea) //<-- BIG MAYBE 
/*--------------------------- FUNCTIONS -------------------------------------*/

// function userSelectionIdea(event) {
//     // console.log(event.target)
//     var selectedImg = event.target
//     if(selectedImg) {
//         selectedImg = userSelection
//     }
//     console.log('hi ')
// }


function selectedClassicGame() {
    gameView.innerHTML =
        `<section class="container-two">
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your fighter!</h3>
        <div class="human-selection">
            <img src="assets/happy-rocks.png" alt="rock" name="rock" class="rock">
            <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
            <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
        </div>
        </section>`
}

// 

function selectedDifficultGame() {
    gameView.innerHTML =
        `<section class="container-two">
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your fighter!</h3>
        <div>
            <img src="assets/happy-rocks.png" alt="rock">
            <img src="assets/happy-paper.png" alt="paper">
            <img src="assets/happy-scissors.png" alt="scissors">
            <img src="assets/flat-lizard.png" alt="lizard"></img>
            <img src="assets/happy-alien.png" alt="alien"></img>
        </div>
        </section>`
}

/*--------------------------- create player ------------------------------------*/
function spongeBobIcon(event) {
    if (event.target.value === 'spongebob') {
        spongeBobImg = event.target.value
    }
}

function sandyIcon(event) {
    if(event.target.value === 'sandy-cheeks') {
        sandyImg = event.target.value
    }
}

function createChar() {
    var userInput = playerInput.value
    if (userInput == null || userInput == '') {
        alert('Please enter name')
    }
    if (spongeBobImg) {
        profileView.innerHTML =
            `<div class="human-row">
            <img src="assets/spongebob-new.png">
            <h2 class="user-name">${userInput}</h2>
            <p>Wins: 0</p>
        </div>`
    }
    if (sandyImg) {
        profileView.innerHTML = 
        `<div class="human-row">
            <img src="assets/Sandy_Cheeks.svg.png">
            <h2>${userInput}</h2>
            <p>Wins: 0</p>
        </div>`
    }
}

/*--------------------------- user selection option ------------------------------------*/

function paperSelection(event) {
    if (event.target.name === 'paper') {
        userSelection = event.target.name
    }
}

function rockSelection(event) {
    if(event.target.name === 'rock') {
        userSelection = event.target.name
    }
}

function scissorsSelection(event) {
    if(event.target.name === 'scissors') {
        userSelection = event.target.name
    }
}

/*--------------------------- FUNCTIONS -------------------------------------*/

function selectedClassicGame() {
    gameView.innerHTML =
        `<section class="container-two">
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your fighter!</h3>
        <div class="human-selection">
            <img src="assets/happy-rocks.png" alt="rock" name="rock" class="rock">
            <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
            <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
        </div>
    </section>`
}

// 

function selectedDifficultGame() {
    gameView.innerHTML =
        `<section class="container-two">
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your fighter!</h3>
        <div>
            <img src="assets/happy-rocks.png" alt="rock">
            <img src="assets/happy-paper.png" alt="paper">
            <img src="assets/happy-scissors.png" alt="scissors">
            <img src="assets/flat-lizard.png" alt="lizard"></img>
            <img src="assets/happy-alien.png" alt="alien"></img>
        </div>
    </section>`
}

function getRandomIndex() {
    var randomIndex = Math.floor(Math.random() * myArray.length);
    // return computerSelections[randomIndex]
    console.log(computerSelections[randomIndex])
}

function createGame() {
    var computerSelection = getRandomIndex()
}