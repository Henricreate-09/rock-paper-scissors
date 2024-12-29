let computerScore = 0;
let userScore = 0;


function getComputerChoice() {
    let c = Math.floor(Math.random() * 3);

    switch (c) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
    }
}

function getHumanChoice() {
    let c = prompt("Enter a move(rock, paper or scissors)").toLowerCase();
    while (c != "rock" && c != "paper" && c != "scissors") {
        c = prompt("Enter a valid move(rock, paper or scissors)").toLowerCase();
    }

    return c;
}

function playRound() {
    let cpuChoice = getComputerChoice();
    let userChoice = getHumanChoice();

    console.log(`Your choice: ${userChoice}\nCPU choice: ${cpuChoice}`);
    


    //Rock
    if (userChoice === "rock" && cpuChoice === "Scissors") {
        userScore++;
        console.log("You won!");
        return;
    }
    else if (userChoice === "rock" && cpuChoice === "Rock") {
        console.log("It's a tie!");
        return;
    }
    else if (userChoice === "rock" && cpuChoice === "Paper") {
        computerScore++;
        console.log("You lost!");
    }
    //Paper
    if (userChoice === "paper" && cpuChoice === "Rock") {
        userScore++;
        console.log("You won!");
    }
    else if (userChoice === "paper" && cpuChoice === "Paper") {
        console.log("It's a tie!");
    }
    else if (userChoice === "paper" && cpuChoice === "Scissors") {
        computerScore++;
        console.log("You lost!");

    }
    //Scissors
    if (userChoice === "scissors" && cpuChoice === "Paper") {
        userScore++;
        console.log("You won!");
        return;
    }
    else if (userChoice === "scissors" && cpuChoice === "scissors") {
        console.log("It's a tie!");
        return;
    }
    else if (userChoice === "scissors" && cpuChoice === "Rock") {
        computerScore++;
        console.log("You lost!");
    }
}

for (let i=1; i <= 5; i++) {
    console.log(`ROUND ${i}`);
    console.log(`Current scores:\nCPU: ${computerScore}\nYours: ${userScore}`);
    playRound();
}