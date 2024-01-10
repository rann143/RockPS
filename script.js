let winRound = null;

function getComputerChoice() {

        let options = ["Rock", "Paper", "Scissors"];
        let choice = options[Math.floor(Math.random() * options.length)];
        return choice;

}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const playerText = document.querySelector('#player');
const computerText = document.querySelector('#cpu');
const playerOutputBox = document.querySelector(".player-output")
const computerOutputBox = document.querySelector(".cpu-output")

const roundOutcome = document.querySelector("#round-outcome");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#cpu-score");

playerScore.textContent = 0;
computerScore.textContent = 0;

rockBtn.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
    playerText.textContent = "Rock";
})

paperBtn.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
    playerText.textContent = "Paper";
})

scissorsBtn.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
    playerText.textContent = "Scissors";
})

function playRound(playerSelection, computerSelection) {

    let winAlert = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loseAlert = `You Lose. ${computerSelection} beats ${playerSelection}`; 
    let tieAlert = "You Tied, both a pair of Not-Winners I Guess";

    computerText.textContent = computerSelection;

    if ( (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Paper" && computerSelection == "Rock") || 
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        
        winRound = true;
        roundOutcome.textContent = `${winAlert}`;
        playerOutputBox.style.backgroundColor = "green";
        computerOutputBox.style.backgroundColor = "red";
        ++playerScore.textContent;
        endGameIfScore5();
        return winAlert;

    } else if ((playerSelection == "Rock" && computerSelection == "Rock") || 
    (playerSelection == "Paper" && computerSelection == "Paper") || 
    (playerSelection == "Scissors" && computerSelection == "Scissors")) {

        winRound = null;
        roundOutcome.textContent = `${tieAlert}`;
        playerOutputBox.style.backgroundColor = "grey";
        computerOutputBox.style.backgroundColor = "grey";
        return tieAlert;

    } else {

        winRound = false;
        roundOutcome.textContent = `${loseAlert}`;
        playerOutputBox.style.backgroundColor = "red";
        computerOutputBox.style.backgroundColor = "green";
        ++computerScore.textContent;
        endGameIfScore5();
        return loseAlert;

    }


}

function endGameIfScore5(){
    if (playerScore.textContent == 5) {
        roundOutcome.textContent = `YOU WIN IT ALL! Choose Your Weapon to Start Another Round.`;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    } else if (computerScore.textContent == 5){
        roundOutcome.textContent = `YOU LOSE IT ALL! Choose Your Weapon to Start Another Round.`;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
}

function game() {
    console.log("Starting Game");

    let playerCount = 0;
    let computerCount = 0;
    let winGame = "GAME WINNER";
    let loseGame = "GAME LOSER";

    for (gameCount = 0; gameCount < 5;) {
        winRound = null;
        gameCount++;
        console.log(playRound());

        if (winRound == true) {
            playerCount++;
        } else if (winRound == false) {
            computerCount++;
        } else {
            --gameCount;
        }

        if (playerCount == 3) {
            console.log(winGame + `: You - ${playerCount} / CPU - ${computerCount}`);
            return;
        }

        if (computerCount == 3) {
            console.log(loseGame + `: You - ${playerCount} / CPU - ${computerCount}`);
            return;
        }
    }

}