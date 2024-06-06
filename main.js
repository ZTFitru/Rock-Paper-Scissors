

var computerChoices = ['rock', 'paper', 'scissors']
var computerChoicesDiff = ['rock', 'paper', 'scissors', 'alien', 'lizard']

/*--------------------------- VARIABLES ------------------------------------*/
var spongeBobImg;
var sandyImg;
var pickedRock;
var pickedPaper;
var pickedScissors;
var userSelection;
var computerPick;
var player;
var userInput;
var playerIcon;
var playerWins = 0;
var computerScore = 0;
var outcome;
var computerSelections = ['scissors', 'rock', 'paper']
var classicGame = document.querySelector('.classic-box');
var difficultGame = document.querySelector('.difficult-box')
var gameView = document.querySelector('.game-view')
var computerView = document.querySelector('.computer-view')
var createProfile = document.querySelector('human-row')
/*-------- RADIO SELECTION -------------------*/
var selectedSpongeBob = document.querySelector('#sponge-bob')
var selectedSandy = document.querySelector('#sandy')
var playerInput = document.querySelector('#user-input')
/*-------- EVENT LISTENERS--------------------*/ 
var playerprofile = document.querySelector('.create-player-btn')
var profileView = document.querySelector('.profile')

classicGame.addEventListener('click', selectedClassicGame)
difficultGame.addEventListener('click', selectedDifficultGame)
selectedSpongeBob.addEventListener('click', spongeBobIcon)
selectedSandy.addEventListener('click', sandyIcon)
playerprofile.addEventListener('click', createChar)
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
    playerSelectionListener()

}


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


/*--------------------------- CREATE PLAYER ------------------------------------*/
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


function createChar(player) {
    userInput = playerInput.value
    if (!userInput || (!spongeBobImg && !sandyImg)) {
        alert('Please enter name and select an icon!');
        return;
    }
    playerIcon = spongeBobImg || sandyImg
    if(playerIcon === spongeBobImg) {
        profileView.innerHTML =
        `<div class="human-row">
            <img src="assets/spongebob-new.png">
            <h2 class="user-name">${userInput}</h2>
            <p>Wins: ${playerWins}</p>
        </div>`
        computerView.innerHTML = 
        `<section class="container-three computer-view">
            <div class="computer-row">
                <h3>💻</h3>
                <h2>Plankton</h2>
                <p>Wins: ${computerScore}</p>
            </div> 
        </section>`
    }
    if(playerIcon === sandyImg) {
        profileView.innerHTML = 
        `<div class="human-row">
            <img src="assets/Sandy_Cheeks.svg.png">
            <h2>${userInput}</h2>
            <p>Wins: ${playerWins}</p>
        </div>`
        computerView.innerHTML = 
        `<section class="container-three computer-view">
            <div class="computer-row">
                <h3>💻</h3>
                <h2>Plankton</h2>
                <p>Wins: ${computerScore}</p>
            </div> 
        </section>`
    }
    console.log(playerWins)
    player = createPlayer(userInput, playerIcon)
    console.log(player)
}

function createPlayer(name, icon) {
    return {
        name: name,
        icon: icon,
        wins: playerWins
    }
    
}

/*--------------------------- USER SELECTION OPTIONS ------------------------------------*/

function playerSelectionListener() {
    var playerSelection = document.querySelector('.human-selection') 
    if(playerSelection) {
        playerSelection.addEventListener('click', playerPick)
    }
}

function playerPick(event) {
    userSelection = event.target.name;
    if(userSelection) {
        player = {name: playerInput.value, icon: spongeBobImg || sandyImg, wins: 0}
        createClassicGame(player, userSelection)
    }
}

function createClassicGame(player, userSelection) {
    computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    console.log(userSelection, computerPick)
    if(userSelection === computerPick) {
        outcome = 'tie'
        gameView.innerHTML =
        `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>${userInput} TIED WITH PLANKTON </h3>
            <div class="human-selection">
                <img src="assets/happy-rocks.png" alt="rock" name="rock" class="rock">
                <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
            </div>
        </section>`;

    }
    else if((userSelection === 'rock' && computerPick === 'scissors') || 
        (userSelection === 'paper' && computerPick === 'rock') ||
        (userSelection === 'scissors' && computerPick === 'paper'))
        {
            outcome = 'win'
            if(userSelection === 'rock' && computerPick === 'scissors') {
                gameView.innerHTML =
                `<section class="container-two">
                    <h1>Rock, Paper, Scissors</h1>
                    <h3> ${userInput} WON  </h3>
                    <div class="human-selection">
                        <img src="assets/happy-rocks.png" alt="rock" name="rock" class="rock">
                        <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                    </div>
                </section>`;
            }
            if(userSelection === 'paper' && computerPick === 'rock') {
                gameView.innerHTML =
                `<section class="container-two">
                    <h1>Rock, Paper, Scissors</h1>
                    <h3>${userInput} WON </h3>
                    <div class="human-selection">
                        <img src="assets/happy-rocks.png" alt="rock" name="rock" class="rock">
                        <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                    </div>
                </section>`;
            }
            if(userSelection === 'scissors' && computerPick === 'paper') {
                gameView.innerHTML =
                `<section class="container-two">
                    <h1>Rock, Paper, Scissors</h1>
                    <h3>${userInput} WON </h3>
                    <div class="human-selection">
                        <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                        <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                    </div>
                </section>`;
            }
        }
    else {
        outcome = 'lose'
        console.log('you lose')
    }
    if(outcome === 'win') {
        gameScore()
        console.log(playerWins)
        playerIcon = spongeBobImg || sandyImg
    if(playerIcon === spongeBobImg) {
        profileView.innerHTML =
        `<div class="human-row">
            <img src="assets/spongebob-new.png">
            <h2 class="user-name">${userInput}</h2>
            <p>Wins: ${playerWins++}</p>
        </div>`
    }
    if(playerIcon === sandyImg) {
        profileView.innerHTML = 
        `<div class="human-row">
            <img src="assets/Sandy_Cheeks.svg.png">
            <h2>${userInput}</h2>
            <p>Wins: ${playerWins++}</p>
        </div>`
    }

    } else if (outcome === 'lose'){
        gameScore()
        console.log(computerScore)
        computerView.innerHTML = 
        `<section class="container-three computer-view">
            <div class="computer-row">
                <h3>💻</h3>
                <h2>Plankton</h2>
                <p>Wins: ${computerScore++}</p>
            </div> 
        </section>`
    }

}

// 

function gameScore() {
    if(outcome === 'win') {
        playerWins++
    }
    if(outcome === 'lose') {
        computerScore++
    }
}
