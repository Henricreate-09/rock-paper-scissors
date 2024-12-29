// TODO:
/**
 * write logic for the computer choise and human logic
 * 
 * COMPUTER LOGIC --
 * generate a random number from 0 to 2.
 * make this number an integer
 * if the number is 0, return the string "Rock"
 * if the number is 1, return the string "Paper"
 * if the number is 2, return the string "Scissors"
 * 
 * 
 * HUMAN LOGIC --
 * request a input from the user
 * make the user input lowercase
 * 
 * if the input is not either 'rock', 'paper' or 'scissors', do it again until it
 * matches any of those values
 * 
 * 
 * PLAY LOGIC --
 * set two values 'userScore' and 'computerScore' to 0
 * gets the computer's choice
 * compares the computer's choice to the user's
 * do the rock paper scissors logic using  if statements
 * gives a point to the winner
 * 
 * repeat that 5 times, totalizing 5 rounds
 **/
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