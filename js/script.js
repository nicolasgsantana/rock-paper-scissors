let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const CHOICES = ["Rock", "Paper", "Scissors"];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === "Rock") {
        if(computerChoice === "Rock"){
            return 0;
        }
        else if(computerChoice === "Paper"){
            return -1;
        }
        else if(computerChoice === "Scissors"){
            return 1;
        }
    }
    else if(playerChoice === "Paper") {
        if(computerChoice === "Rock"){
            return 1;
        }
        else if(computerChoice === "Paper"){
            return 0;
        }
        else if(computerChoice === "Scissors"){
            return -1;
        }
    }
    else if(playerChoice === "Scissors") {
        if(computerChoice === "Rock"){
            return -1;
        }
        else if(computerChoice === "Paper"){
            return 1;
        }
        else if(computerChoice === "Scissors"){
            return 0;
        }
    }
}

function game(playerChoice){
    let computerChoice = getComputerChoice();

    let result = playRound(playerChoice, computerChoice);

    if(result > 0) {
        playerScore++;
        return `You Won the round! ${playerChoice} beats ${computerChoice}`;
    }
    else if(result < 0){
        computerScore++;
        return `You Lost the round! ${computerChoice} beats ${playerChoice}`;
    }
    else {
        return "It's a tie!";
    }

    // if(playerScore > computerScore){
    //     console.log("You Won the game!")
    // }
    // else if (playerScore < computerScore){
    //     console.log("You Lost the game...")
    // }
    // else {
    //     console.log("The game tied!")
    // }
    // console.log(`Final Scores\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const placeholderParagraph = document.querySelector("p");

rockBtn.addEventListener('click', () => {
    placeholderParagraph.textContent = game("Rock");
})

paperBtn.addEventListener('click', () => {
    placeholderParagraph.textContent = game("Paper");
})

scissorsBtn.addEventListener('click', () => {
    placeholderParagraph.textContent = game("Scissors");
})