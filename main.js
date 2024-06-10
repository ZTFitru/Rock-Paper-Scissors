var computerChoices = ['rock', 'paper', 'scissors']
var computerChoicesDifficult = ['spongeBob', 'patrick', 'squidward', 'mrKrabs', 'sandyCheeks']
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
var playerprofile = document.querySelector('.create-player-btn');
var profileView = document.querySelector('.profile');
/*-------- RADIO SELECTION -------------------*/
var selectedSpongeBob = document.querySelector('#spongeBob');
var selectedSandy = document.querySelector('#sandy');
var playerInput = document.querySelector('#userInput');
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
            <h4>🧽 DIFFICULT 🐿️</h4>
            <p>spongeBob > squidward & mrKrabs</p>
            <p>patrick > spongeBob & sandyCheeks</p>
            <p>squidward > patrick & mrKrabs</p>
            <p>mrKrabs > patrick & sandyCheeks</p>
            <p>sandyCheeks > squidward & spongeBob</p>
        </div>
        <div class="human-selection hidden">
            <img src="assets/happy-spongebob.png" alt="spongeBob" name="spongeBob" class="spongeBob">
            <img src="assets/happy-patrick.png" alt="patrick" name="patrick" class="patrick">
            <img src="assets/happy-squidward.png" alt="squidward" name="squidward" class="squidward">
            <img src="assets/happy-mrKrabs.png" alt="mrKrabs" name="mrKrabs" class="mrKrabs">
            <img src="assets/happy-sandyCheeks.png" alt="sandyCheeks" name="sandyCheeks" class="sandyCheeks">
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
        <div class="human-selection img-display">
            <img src="assets/happy-spongebob.png" alt="spongeBob" name="spongeBob" class="spongeBob">
            <img src="assets/happy-patrick.png" alt="patrick" name="patrick" class="patrick">
            <img src="assets/happy-squidward.png" alt="squidward" name="squidward" class="squidward">
            <img src="assets/happy-mrKrabs.png" alt="mrKrabs" name="mrKrabs" class="mrKrabs">
            <img src="assets/happy-sandyCheeks.png" alt="sandyCheeks" name="sandyCheeks" class="sandyCheeks">
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
    if (event.target.value === 'sandy-cheeks') {
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
    if (playerIcon === spongeBobImg) {
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
    if (playerIcon === sandyImg) {
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
    if (playerSelection) {
        playerSelection.addEventListener('click', playerPick);
    }
}

function playerPick(event) {
    userSelection = event.target.name;
    if (userSelection) {
        player = { name: playerInput.value, icon: spongeBobImg || sandyImg, wins: 0 };
        if (typeOfGame === 'classic') {
            createClassicGame(player, userSelection);
        } else if (typeOfGame === 'difficult') {
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
    if (userSelection === computerPick) {
        outcome = 'tie';
        gameView.innerHTML =
            `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>${player.name} TIED WITH PLANKTON </h3>
            <div class="human-selection">
                <img src="assets/happy-${userSelection}.png">
                <img src="assets/happy-${computerPick}.png">
            </div>
        </section>`;
    }
    else if ((userSelection === 'rock' && computerPick === 'scissors') ||
        (userSelection === 'paper' && computerPick === 'rock') ||
        (userSelection === 'scissors' && computerPick === 'paper')) {
        outcome = 'win';
        gameView.innerHTML =
            `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>${player.name} BEAT PLANKTON </h3>
            <div class="human-selection">
                <img src="assets/happy-${userSelection}.png">
                <img src="assets/happy-${computerPick}.png">
            </div>
        </section>`;
    }
    else {
        outcome = 'lose';
        gameView.innerHTML =
            `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>PLANKTON WON, ${player.name} LOST </h3>
            <div class="human-selection">
                <img src="assets/happy-${userSelection}.png">
                <img src="assets/happy-${computerPick}.png">
            </div>
        </section>`;
    }
}


function difficultGameOutcome(player, userSelection, computerPick) {
    if (userSelection === computerPick) {
        outcome = 'tie';
        gameView.innerHTML =
            `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>${player.name} TIED WITH PLANKTON </h3>
            <div class="human-selection">
                <img src="assets/happy-${userSelection}.png">
                <img src="assets/happy-${computerPick}.png">
            </div>
        </section>`;
    } else if ((userSelection === 'spongeBob' && (computerPick === 'squidward' || computerPick === 'mrKrabs')) ||
        (userSelection === 'patrick' && (computerPick === 'spongeBob' || computerPick === 'sandyCheeks')) ||
        (userSelection === 'squidward' && (computerPick === 'mrKrabs' || computerPick === 'patrick')) ||
        (userSelection === 'mrKrabs' && (computerPick === 'patrick' || computerPick === 'sandyCheeks')) ||
        (userSelection === 'sandyCheeks' && (computerPick === 'spongeBob' || computerPick === 'squidward'))) {
        outcome = 'win'
        gameView.innerHTML =
            `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>${player.name} BEAT PLANKTON </h3>
            <div class="human-selection">
                <img src="assets/happy-${userSelection}.png">
                <img src="assets/happy-${computerPick}.png">
            </div>
        </section>`;
    }
    else {
        outcome = 'lose'
        gameView.innerHTML =
            `<section class="container-two">
            <h1>Rock, Paper, Scissors</h1>
            <h3>PLANKTON WON, ${player.name} LOST</h3>
            <div class="human-selection">
                <img src="assets/happy-${userSelection}.png">
                <img src="assets/happy-${computerPick}.png">
            </div>
        </section>`;
    }

}

function updateScore(outcome) {
    if (outcome === 'win') {
        playerWins++;
    }
    else if (outcome === 'lose') {
        computerScore++;
    }
}

function updateProfiles() {
    updatePlayerProfile();
    updateComputerProfile();
}

function updatePlayerProfile() {
    playerIcon = spongeBobImg || sandyImg
    if (playerIcon === spongeBobImg) {
        profileView.innerHTML =
            `<div class="human-row">
            <img src="assets/spongebob-new.png">
            <h2 class="user-name">${userInput}</h2>
            <p>Wins: ${playerWins}</p>
        </div>`
    } else if (playerIcon === sandyImg) {
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
    if (typeOfGame === 'classic') {
        selectedClassicGame();
    } else if (typeOfGame === 'difficult') {
        selectedDifficultGame();
    }
}