let playerScore = 0;
let computerScore = 0;
let round = 1;

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

function startGame(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    
    
}

function runGame(playerChoice){
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);

    setImageAttributes(playerChoiceImg, `./img/${playerChoice.toLowerCase()}.png`, `a hand emoji representing ${playerChoice}`);
    setImageAttributes(computerChoiceImg, `./img/${computerChoice.toLocaleLowerCase()}.png`, `a hand emoji representing ${computerChoice}`);

    if(result > 0) {
        playerScoreText.textContent = ++playerScore;
        announcementText.textContent = "You Win!";
        resultText.textContent = `${playerChoice} beats ${computerChoice}`;
    }
    else if(result < 0){
        computerScoreText.textContent = ++computerScore;
        announcementText.textContent = "You Lose";
        resultText.textContent = `${computerChoice} beats ${playerChoice}`;
    }
    else {
        announcementText.textContent = "It's a tie!";
        resultText.textContent = " ";
    }

    round++; 
}

function finishGame() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if(playerScore > computerScore){
        announcementText.textContent = "You Won the game!";
    }
    else if (playerScore < computerScore){
        announcementText.textContent = "You Lost the game...";
    }
    else {
        announcementText.textContent = "The game tied!";
    }

    resultText.textContent = "";
}

function setImageAttributes(image, src, alt){
    image.setAttribute("src", src);
    image.setAttribute("alt", alt);
}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const announcementText = document.querySelector("#announcement-text");
const resultText = document.querySelector("#result-text");

const playerScoreText = document.querySelector(".player.score");
const computerScoreText = document.querySelector(".computer.score");

const playerChoiceImg = document.querySelector("#player-choice");
const computerChoiceImg = document.querySelector("#computer-choice");

rockBtn.addEventListener('click', () => runGame("Rock"));

paperBtn.addEventListener('click', () => runGame("Paper"));

scissorsBtn.addEventListener('click', () => runGame("Scissors"));

// startGame();