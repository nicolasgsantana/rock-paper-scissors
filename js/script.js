function toTitleCase(string){
    const firstLetter = string.slice(0, 1);
    return string.replace(firstLetter, firstLetter.toUpperCase());
}

function getComputerChoice(){
    const CHOICES = ["rock", "paper", "scissors"];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === "rock") {
        if(computerChoice === "rock"){
            return 0;
        }
        else if(computerChoice === "paper"){
            return -1;
        }
        else if(computerChoice === "scissors"){
            return 1;
        }
    }
    else if(playerChoice === "paper") {
        if(computerChoice === "rock"){
            return 1;
        }
        else if(computerChoice === "paper"){
            return 0;
        }
        else if(computerChoice === "scissors"){
            return -1;
        }
    }
    else if(playerChoice === "scissors") {
        if(computerChoice === "rock"){
            return -1;
        }
        else if(computerChoice === "paper"){
            return 1;
        }
        else if(computerChoice === "scissors"){
            return 0;
        }
    }
}

function game(){
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Input your choice").toLowerCase();
        computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);

        if(result > 0) {
            playerScore++;
            console.log(`You Win! ${toTitleCase(playerChoice)} beats ${toTitleCase(computerChoice)}`);
        }
        else if(result < 0){
            computerScore++;
            console.log(`You Lose! ${toTitleCase(computerChoice)} beats ${toTitleCase(playerChoice)}`);
        }
        else {
            console.log("It's a tie!");
        }
    }

    if(playerScore > computerScore){
        console.log("You Won the game!")
    }
    else if (playerScore < computerScore){
        console.log("You Lost the game...")
    }
    else {
        console.log("The game tied!")
    }
    console.log(`Final Scores\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
}

game();