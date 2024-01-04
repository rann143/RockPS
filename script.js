let winRound = null;

function getComputerChoice() {

        let options = ["Rock", "Paper", "Scissors"];
        let choice = options[Math.floor(Math.random() * options.length)];
        return choice;

}

function capitalize(string){
    let lowered = string.toLowerCase();

    let firstLetter = lowered.charAt(0);
    let cappedFirstLetter = firstLetter.toUpperCase();

    let loweredNoFirst = lowered.slice(1);

    let result = cappedFirstLetter + loweredNoFirst;
    return result;
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Choose Your Weapon.");
    let player = capitalize(playerSelection);
    computerSelection = getComputerChoice();

    let winAlert = `You Win! ${player} beats ${computerSelection}`;
    let loseAlert = `You Lose. ${computerSelection} beats ${player}`; 
    let tieAlert = "You Tied, both a pair of Not-Winners I Guess";
    let badChoice = "Choose 'Rock', 'Paper' or 'Scissors' idiot. Not that hard";

    if (player == "Rock" && computerSelection == "Scissors") {
        winRound = true;
        return winAlert;
    } else if (player == "Rock" && computerSelection == "Paper") {
        winRound = false;
        return loseAlert;
    } else if (player == "Rock" && computerSelection == "Rock") {
        winRound = null;
        return tieAlert;
        // console.log(tieAlert);
        // playRound(playerSelection, computerSelection);
    } else if (player == "Paper" && computerSelection == "Scissors") {
        winRound = false;
        return loseAlert;
    } else if (player == "Paper" && computerSelection == "Rock") {
        winRound = true;
        return winAlert;
    }else if (player == "Paper" && computerSelection == "Paper") {
        winRound = null;
        return tieAlert;
        // console.log(tieAlert);
        // playRound(playerSelection, computerSelection);
    } else if (player == "Scissors" && computerSelection == "Scissors") {
        winRound = null;
        return tieAlert;
        // console.log(tieAlert);
        // playRound(playerSelection, computerSelection);
    }else if (player == "Scissors" && computerSelection == "Paper") {
        winRound = true;
        return winAlert;
    } else if (player == "Scissors" && computerSelection == "Rock") {
        winRound = false;
        return loseAlert;
    } else {
        winRound = null;
        return badChoice;
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
            console.log(winGame);
        }

        if (computerCount == 3) {
            console.log(loseGame);
        }
    }

}