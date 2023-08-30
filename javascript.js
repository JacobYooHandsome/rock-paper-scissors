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

const display = document.querySelector('#score');
const result = document.querySelector('#result');

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => {
    showRound(playRound(0, getComputerChoice()));
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    showRound(playRound(1, getComputerChoice()));
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => {
    showRound(playRound(2, getComputerChoice()));
});

function showRound(returnString) {
    display.textContent = `[playerScore: ${playerScore}] VS [computerScore: ${computerScore}]`;
    result.textContent = returnString;
    if (playerScore == 5) {
        display.textContent = `YOU WIN!`;
        result.textContent = '';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        display.textContent = 'YOU LOSE! :(';
        result.textContent = '';
        playerScore = 0;
        computerScore = 0;
    }
}

