let winRound = null;

function getComputerChoice() {

        let options = ["Rock", "Paper", "Scissors"];
        let choice = options[Math.floor(Math.random() * options.length)];
        return choice;

}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
})

paperBtn.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
})

scissorsBtn.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
})

// function capitalize(string){
//     let lowered = string.toLowerCase();

//     let firstLetter = lowered.charAt(0);
//     let cappedFirstLetter = firstLetter.toUpperCase();

//     let loweredNoFirst = lowered.slice(1);

//     let result = cappedFirstLetter + loweredNoFirst;
//     return result;
// }

function playRound(playerSelection, computerSelection) {
    
    // playerSelection = prompt("Choose Your Weapon.");
    // let player = capitalize(playerSelection);
    //computerSelection = getComputerChoice();

    let winAlert = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loseAlert = `You Lose. ${computerSelection} beats ${playerSelection}`; 
    let tieAlert = "You Tied, both a pair of Not-Winners I Guess";
    let badChoice = "Choose 'Rock', 'Paper' or 'Scissors' idiot. Not that hard";

    if ( (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Paper" && computerSelection == "Rock") || 
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        
        winRound = true;
        console.log(winAlert);
        return winAlert;

    } else if ((playerSelection == "Rock" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Paper") || 
    (playerSelection == "Scissors" && computerSelection == "Scissors")) {

        winRound = null;
        console.log(tieAlert);
        return tieAlert;

    } else {

        winRound = false;
        console.log(loseAlert);
        return loseAlert;

    }


    // if (playerSelection == "Rock" && computerSelection == "Scissors") {
    //     winRound = true;
    //     console.log(winAlert);
    //     return winAlert;
    // } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    //     winRound = false;
    //     console.log(loseAlert);
    //     return loseAlert;
    // } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    //     winRound = null;
    //     console.log(tieAlert);
    //     return playRound();
    // } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    //     winRound = false;
    //     console.log(loseAlert);
    //     return loseAlert;
    // } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    //     winRound = true;
    //     console.log(winAlert);
    //     return winAlert;
    // }else if (playerSelection == "Paper" && computerSelection == "Paper") {
    //     winRound = null;
    //     console.log(tieAlert);
    //     return playRound();
    // } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    //     winRound = null;
    //     console.log(tieAlert);
    //     return playRound();
    // }else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    //     winRound = true;
    //     console.log(winAlert);
    //     return winAlert;
    // } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    //     winRound = false;
    //     console.log(loseAlert);
    //     return loseAlert;
    // } else {
    //     winRound = null;
    //     return badChoice;
    // }

   

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