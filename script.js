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

    let player = capitalize(playerSelection);
    computerSelection = getComputerChoice();

    let winAlert = `You Win! ${player} beats ${computerSelection}`;
    let loseAlert = `You Lose. ${computerSelection} beats ${player}`; 
    let tieAlert = "You Tied, both a pair of Not-Winners I Guess";
    let badChoice = "Choose 'Rock', 'Paper' or 'Scissors' idiot. Not that hard";

    if (player == "Rock" && computerSelection == "Scissors") {
        return winAlert;
    } else if (player == "Rock" && computerSelection == "Paper") {
        return loseAlert;
    } else if (player == "Rock" && computerSelection == "Rock") {
        return tieAlert;
    } else if (player == "Paper" && computerSelection == "Scissors") {
        return loseAlert;
    } else if (player == "Paper" && computerSelection == "Rock") {
        return winAlert;
    }else if (player == "Paper" && computerSelection == "Paper") {
        return tieAlert;
    } else if (player == "Scissors" && computerSelection == "Scissors") {
       return tieAlert;
    }else if (player == "Scissors" && computerSelection == "Paper") {
        return winAlert;
    } else if (player == "Scissors" && computerSelection == "Rock") {
        return loseAlert;
    } else {

        return badChoice;
    }

}

function game() {
    
}