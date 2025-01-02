let computerScore = 0;
let userScore = 0;

let move = {
    rock: {strongTo: "scissors", weakTo: "paper"},
    paper: {strongTo: "rock", weakTo: "scissors"},
    scissors: {strongTo: "paper", weakTo: "rock"}
};

function getComputerChoice() {
    let possibilites = ["rock", "paper", "scissors"];
    let rng = Math.floor(Math.random() * 3);
    return possibilites[rng];
}

function getHumanChoice() {
    let choice = prompt("Enter a move(rock, paper or scissors)").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Enter a valid move(rock, paper or scissors)").toLowerCase();
    }

    return choice;
}

function playRound() {
    let cpuChoice = getComputerChoice();
    let userChoice = getHumanChoice();

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
    
}