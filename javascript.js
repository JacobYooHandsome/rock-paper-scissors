let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }
    else if (player === 0) {
        if (computer === 2) {
            playerScore++;
            return "You win! Rock beats Scissors.";
        }
        else {
            computerScore++;
            return "You lose! Paper beats Rock.";
        }
    }
    else if (player === 1) {
        if (computer === 0) {
            playerScore++;
            return "You win! Paper beats Rock.";
        }
        else {
            computerScore++;
            return "You lose! Scissors beats Paper."
        }
    }
    else if (player === 2) {
        if (computer === 1) {
            playerScore++;
            return "You win! Scissors beats Paper.";
        }
        else {
            computerScore++;
            return "You lose! Rock beats Scissors."
        }
    }
}

function getPlayerChoice() {
    const playerChoice = prompt("Rock, paper, or scissors?: ").toLowerCase()
    if (playerChoice === "rock") {
        return 0;
    }
    else if (playerChoice === "paper") {
        return 1;
    }
    else if (playerChoice === "scissors") {
        return 2;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        console.log(`Player: ${playerScore} VS Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("YOU HAVE BESTED THE COMPUTER!");
    }
    else if (computerScore < playerScore) {
        console.log("YOU HAVE LOST TO THE COMPUTER!")
    }
    else {
        console.log("Boring... You tied.")
    }
}

game()