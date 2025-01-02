let computerScore = 0;
let userScore = 0;

let move = {
    rock: {strongTo: "scissors", weakTo: "paper"},
    paper: {strongTo: "rock", weakTo: "scissors"},
    scissors: {strongTo: "paper", weakTo: "rock"}
};

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let pMoveArea = document.querySelector("#p-move");
let cMoveArea = document.querySelector("#c-move");
let pScoreArea = document.querySelector("#p-score");
let cpuScoreArea = document.querySelector("#c-score");
let winnerArea = document.querySelector("#winner");


function getComputerChoice() {
    let possibilites = ["rock", "paper", "scissors"];
    let rng = Math.floor(Math.random() * 3);
    return possibilites[rng];
}

function playRound(userChoice) {
    let cpuChoice = getComputerChoice();

    console.log(`Your choice: ${userChoice}\nCPU choice: ${cpuChoice}`);
    


    // Better game logic
    if (userChoice == move[cpuChoice].weakTo) {
        userScore++;
        console.log("You win!");       
    }
    else if (move[userChoice] == move[cpuChoice]) {
        console.log("It's a tie!");
    }
    else {
        computerScore++;
        console.log("You lost!");
    }

    pMoveArea.textContent = `Your move: ${userChoice}`;
    cMoveArea.textContent = `Computer's move: ${cpuChoice}`;
    pScoreArea.textContent = `Your score: ${userScore}`;
    cpuScoreArea.textContent = `CPU score: ${computerScore}`;
    
    if (userScore == 5) {
        winnerArea.textContent = "You win!";
    }
    if (computerScore == 5) {
        winnerArea.textContent = "You lost!";
    }
}

// Apply logic
rockButton.addEventListener("click", () => {playRound("rock")});
paperButton.addEventListener("click", () => {playRound("paper")});
scissorsButton.addEventListener("click", () => {playRound("scissors")});