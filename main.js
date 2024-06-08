var computerChoices = ['rock', 'paper', 'scissors']
var computerChoicesDifficult = ['rock', 'paper', 'scissors', 'alien', 'lizard']
/*--------------------------- VARIABLES ------------------------------------*/
var spongeBobImg;
var sandyImg;
var userSelection;
var computerPick;
var player;
var userInput;
var playerIcon;
var typeOfGame = null;
var playerWins = 0;
var computerScore = 0;
var outcome;
/*-------- QUERY SELECTORS -------------------*/
var classicGame = document.querySelector('.classic-box');
var difficultGame = document.querySelector('.difficult-box');
var gameView = document.querySelector('.game-view');
var computerView = document.querySelector('.computer-view');
var createProfile = document.querySelector('.human-row');
var changeGameBtn = document.querySelector('.change-game-btn');
/*-------- RADIO SELECTION -------------------*/
var selectedSpongeBob = document.querySelector('#sponge-bob');
var selectedSandy = document.querySelector('#sandy');
var playerInput = document.querySelector('#user-input');
var playerprofile = document.querySelector('.create-player-btn');
var profileView = document.querySelector('.profile');
/*-------- EVENT LISTENERS--------------------*/ 
classicGame.addEventListener('click', selectedClassicGame);
difficultGame.addEventListener('click', selectedDifficultGame);
selectedSpongeBob.addEventListener('click', spongeBobIcon);
selectedSandy.addEventListener('click', sandyIcon);
playerprofile.addEventListener('click', createChar);
changeGameBtn.addEventListener('click', gameChangeBtn);
/*--------------------------- FUNCTIONS -------------------------------------*/

function showGameScreen() {
    gameView.innerHTML = 
    `<section class="container-two game-view"> 
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your game!</h3>
        <div class="classic-box">
            <h4>🪨 CLASSIC ✂️</h4>
            <P>rock > Scissors</P>
            <p>paper > rock</p>
            <p>Scissors > paper</p>
        </div>
        <div class="human-selection hidden">
            <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
            <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
            <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
        </div>
        <div class="difficult-box">
            <h4>DIFFICULT</h4>
            <p>rock > scissors & lizard</p>
            <p>paper > rock & alien</p>
            <p>scissors > paper & alien</p>
            <p>lizard > paper & alien</p>
            <p>alien > scissors & rock</p>
        </div>
        <div class="human-selection hidden">
            <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
            <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
            <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
            <img src="assets/happy-lizard.png" alt="lizard" name="lizard" class="lizard">
            <img src="assets/happy-alien.png" alt="alien" name="alien" class="alien">
        </div>
    </section>`;
    changeGameBtn.classList.add('hidden');
    document.querySelector('.classic-box').addEventListener('click', selectedClassicGame);
    document.querySelector('.difficult-box').addEventListener('click', selectedDifficultGame);
}


function selectedClassicGame() {
    typeOfGame = 'classic';
    gameView.innerHTML =
    `<section class="container-two classicGame">
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your fighter!</h3>
        <div class="human-selection">
            <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
            <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
            <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
        </div>
    </section>`;
    changeGameBtn.classList.remove('hidden')
    playerSelectionListener();
}

function selectedDifficultGame() {
    typeOfGame = 'difficult';
    gameView.innerHTML =
    `<section class="container-two difficultGame">
        <h1>Rock, Paper, Scissors</h1>
        <h3>Choose your fighter!</h3>
        <div class="human-selection">
            <img src="assets/happy-rock.png" alt="rock" name="rock" class"rock">
            <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper>
            <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
            <img src="assets/happy-lizard.png" alt="lizard" name="lizard" class="lizard">
            <img src="assets/happy-alien.png" alt="alien" name="alien" class="alien">
        </div>
    </section>`;
    changeGameBtn.classList.remove('hidden')
    playerSelectionListener()
}

function gameChangeBtn() {
    showGameScreen();
}

/*--------------------------- CREATE PLAYER ------------------------------------*/

function spongeBobIcon(event) {
    if (event.target.value === 'spongebob') {
        spongeBobImg = event.target.value;
    }
}

function sandyIcon(event) {
    if(event.target.value === 'sandy-cheeks') {
        sandyImg = event.target.value;
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
        </div>`;
        computerView.innerHTML = 
        `<section class="container-three computer-view">
            <div class="computer-row">
                <img src="assets/plankton-Img.png" alt="plankton">
                <h2>PLANKTON</h2>
                <p>Wins: ${computerScore}</p>
            </div> 
        </section>`;
    }
    if(playerIcon === sandyImg) {
        profileView.innerHTML = 
        `<div class="human-row">
            <img src="assets/Sandy_Cheeks.svg.png">
            <h2>${userInput}</h2>
            <p>Wins: ${playerWins}</p>
        </div>`;
        computerView.innerHTML = 
        `<section class="container-three computer-view">
            <div class="computer-row">
                <img src="assets/plankton-Img.png" alt="plankton">
                <h2>PLANKTON</h2>
                <p>Wins: ${computerScore}</p>
            </div> 
        </section>`;
    }
    player = createPlayer(userInput, playerIcon)
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
        playerSelection.addEventListener('click', playerPick);
    }
}

function playerPick(event) {
    userSelection = event.target.name;
    if(userSelection) { 
        player = {name: playerInput.value, icon: spongeBobImg || sandyImg, wins: 0};
        if(typeOfGame === 'classic') {
            createClassicGame(player, userSelection);
        }
        else if(typeOfGame === 'difficult') {
            createDifficultGame(player, userSelection);
        }
    }
}

function createClassicGame(player, userSelection) {
    computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    classicGameOutcom(player, userSelection, computerPick);
    updateScore(outcome);
    updateProfiles();
    setTimeout(() => {
        resetBoard()
    }, 1000); 
}

function createDifficultGame(player, userSelection) {
    computerPick = computerChoicesDifficult[Math.floor(Math.random() * computerChoicesDifficult.length)];
    difficultGameOutcome(player, userSelection, computerPick);
    updateScore(outcome);
    updateProfiles();
    setTimeout(() => {
        resetBoard()
    }, 1000);
}

function classicGameOutcom(player, userSelection, computerPick) {
    if(userSelection === computerPick) {
        outcome = 'tie';
        if(userSelection === 'rock' && computerPick === 'rock') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} TIED WITH PLANKTON </h3>
                <div class="human-selection">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                </div>
            </section>`
        }
        else if(userSelection === 'paper' && computerPick === 'paper') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} TIED WITH PLANKTON </h3>
                <div class="human-selection">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`
        }
        else if(userSelection === 'scissors' && computerPick === 'scissors') {
            gameView.innerHTML = 
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} TIED WITH PLANKTON </h3>
                <div class="human-selection">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                </div>
            </section>`
        }
    }
    if((userSelection === 'rock' && computerPick === 'scissors') || 
        (userSelection === 'paper' && computerPick === 'rock') ||
        (userSelection === 'scissors' && computerPick === 'paper')){
            outcome = 'win'
        if(userSelection === 'rock' && computerPick === 'scissors') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3> ${player.name} WON  </h3>
                <div class="human-selection">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                </div>
            </section>`;
        }
        else if(userSelection === 'paper' && computerPick === 'rock') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
        else if(userSelection === 'scissors' && computerPick === 'paper') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
    }
    else if((computerPick === 'rock' && userSelection === 'scissors') || 
            (computerPick === 'paper' && userSelection === 'rock') ||
            (computerPick === 'scissors' && userSelection === 'paper')){
        outcome = 'lose'
        if(computerPick === 'rock' && userSelection === 'scissors') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3> ${player.name} WON  </h3>
                <div class="human-selection">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                </div>
            </section>`;
        }
        else if(computerPick === 'paper' && userSelection === 'rock') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                </div>
            </section>`;
        }
        else if(computerPick === 'scissors' && userSelection === 'paper') {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                </div>
            </section>`;
        }
    }
}


function difficultGameOutcome(player, userSelection, computerPick) {
    if(userSelection === computerPick) {
        outcome = 'tie'
        gameView.innerHTML =
        `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>${player.name} TIED WITH PLANKTON </h3>
            <div class="human-selection">
                <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                <img src="assets/happy-lizard.png" alt="lizard">
                <img src="assets/happy-alien.png" alt="alien">
            </div>
        </section>`;
    }
    else if((userSelection === 'rock' && (computerPick === 'scissors' || computerPick === 'lizard')) || 
            (userSelection === 'paper' && (computerPick === 'rock' || computerPick === 'alien')) ||
            (userSelection === 'scissors' && (computerPick === 'paper' || computerPick === 'lizard')) ||
            (userSelection === 'lizard' && (computerPick === 'paper' || computerPick === 'alien')) ||
            (userSelection === 'alien' && (computerPick === 'scissors' || computerPick === 'rock'))) {
            outcome = 'win'
        if(userSelection === 'rock' && (computerPick === 'scissors' || computerPick === 'lizard')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3> ${player.name} WON  </h3>
                <div class="human-selection">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                </div>
            </section>`;
        }
        if(userSelection === 'paper' && (computerPick === 'rock' || computerPick === 'alien')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
        if(userSelection === 'scissors' && (computerPick === 'paper' || computerPick === 'lizard')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
        if(userSelection === 'lizard' && (computerPick === 'paper' || computerPick === 'alien')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-lizard.png" alt="lizard">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
        if(userSelection === 'alien' && (computerPick === 'scissors' || computerPick === 'rock')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-alien.png" alt="alien">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
    }
    else if((computerPick === 'rock' && (userSelection === 'scissors' || userSelection === 'lizard')) || 
            (computerPick === 'paper' && (userSelection === 'rock' || userSelection === 'alien')) ||
            (computerPick === 'scissors' && (userSelection === 'paper' || userSelection === 'alien'))
            (computerPick === 'lizard' && (userSelection === 'paper' || userSelection === 'alien')) ||
            (computerPick === 'alien' && (userSelection === 'scissors' || userSelection === 'rock'))){
        outcome = 'lose'
        if(computerPick === 'rock' && (userSelection === 'scissors' || userSelection === 'lizard')) {
        gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3> ${player.name} WON  </h3>
                <div class="human-selection">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                </div>
            </section>`;
        }
        else if(computerPick === 'paper' && (userSelection === 'rock' || userSelection === 'alien')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                    <img src="assets/happy-rock.png" alt="rock" name="rock" class="rock">
                </div>
            </section>`;
        }
        else if(computerPick === 'scissors' && (userSelection === 'paper' || userSelection === 'alien')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
        else if(computerPick === 'lizard' && (userSelection === 'paper' || userSelection === 'alien')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-lizard.png" alt="lizard">
                    <img src="assets/happy-paper.png" alt="paper" name="paper" class="paper">
                </div>
            </section>`;
        }
        else if(computerPick === 'alien' && (userSelection === 'scissors' || userSelection === 'rock')) {
            gameView.innerHTML =
            `<section class="container-two">
                <h1>Rock, Paper, Scissors</h1>
                <h3>${player.name} WON </h3>
                <div class="human-selection">
                    <img src="assets/happy-alien.png" alt="alien">
                    <img src="assets/happy-scissors.png" alt="scissors" name="scissors" class="scissors">
                </div>
            </section>`;
        }
    }
    
}

function updateScore(outcome) {
    if(outcome === 'win') {
        playerWins++;
    }
    else if(outcome === 'lose') {
        computerScore++;
    }
}

function updateProfiles() {
    updatePlayerProfile();
    updateComputerProfile();
}

function updatePlayerProfile() {
    playerIcon = spongeBobImg || sandyImg
    if(playerIcon === spongeBobImg) {
        profileView.innerHTML = 
        `<div class="human-row">
            <img src="assets/spongebob-new.png">
            <h2 class="user-name">${userInput}</h2>
            <p>Wins: ${playerWins}</p>
        </div>`
    }else if(playerIcon === sandyImg) {
        profileView.innerHTML = 
        `<div class="human-row">
            <img src="assets/Sandy_Cheeks.svg.png">
            <h2>${userInput}</h2>
            <p>Wins: ${playerWins}</p>
        </div>`
    }
}

function updateComputerProfile() {
    computerView.innerHTML = 
    `<section class="container-three computer-view">
        <div class="computer-row">
            <img src="assets/plankton-Img.png" alt="plankton">
            <h2>PLANKTON</h2>
            <p>Wins: ${computerScore}</p>
        </div> 
    </section>`;
}

function resetBoard() {
    console.log(classicGame.classList.contains('classicGame'))
    if (typeOfGame === 'classic') {
        selectedClassicGame();
    } else if (typeOfGame === 'difficult') {
        selectedDifficultGame();
    }
}