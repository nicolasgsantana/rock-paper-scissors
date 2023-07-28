let playerScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice(){
    const CHOICES = ["Rock", "Paper", "Scissors"];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function checkWinner(playerChoice, computerChoice){
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

function toggleButtons(){
    if(rockBtn.disabled){
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        resetBtn.disabled = false;
    }
    else {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        resetBtn.disabled = true;
    }   
}

function startRound(playerChoice){
    toggleButtons();

    let roundAudio;
    if(round < 5){
        roundAudio = new Audio(`./sounds/round${round}.wav`);
        announcementText.textContent = `Round ${round}`;
    }
    else{
        roundAudio = new Audio('./sounds/finalround.wav');
        announcementText.textContent = "Final Round";
    }

    const goAudio = new Audio('./sounds/go.wav');
    
    resultText.textContent = "";

    roundAudio.addEventListener('ended', () => goAudio.play());
    goAudio.addEventListener('ended', () => playRound(playerChoice));

    roundAudio.play();
}

function playRound(playerChoice){
    
    const computerChoice = getComputerChoice();

    const result = checkWinner(playerChoice, computerChoice);

    setImageAttributes(playerChoiceImg, `./img/${playerChoice.toLowerCase()}.png`, `a hand emoji representing ${playerChoice}`);
    setImageAttributes(computerChoiceImg, `./img/${computerChoice.toLocaleLowerCase()}.png`, `a hand emoji representing ${computerChoice}`);

    if(result > 0) {
        playerScoreText.textContent = ++playerScore;
        announcementText.textContent = "You Win!";
        resultText.textContent = `${playerChoice} beats ${computerChoice}`;

        const audio = new Audio('./sounds/youwin.wav');
        audio.addEventListener('ended', () => finishRound());
        audio.play()
    }
    else if(result < 0){
        computerScoreText.textContent = ++computerScore;
        announcementText.textContent = "You Lose";
        resultText.textContent = `${computerChoice} beats ${playerChoice}`;

        const audio = new Audio('./sounds/youlose.wav');
        audio.addEventListener('ended', () => finishRound());
        audio.play()
    }
    else {
        announcementText.textContent = "It's a tie!";
        resultText.textContent = " ";

        const audio = new Audio('./sounds/roundover.wav');
        audio.addEventListener('ended', () => finishRound());
        audio.play()
    }
}

function finishRound() {
    round++;

    toggleButtons();

    if(round > 5) {
        toggleButtons();

        if(playerScore > computerScore){
            announcementText.textContent = "You Won the game!";
            const audio = new Audio('./sounds/winner.wav');
            audio.play()
        }
        else if (playerScore < computerScore){
            announcementText.textContent = "You Lost the game...";
            const audio = new Audio('./sounds/loser.wav');
            audio.play()
        }
        else {
            announcementText.textContent = "The game tied!";
            const audio = new Audio('./sounds/dudecomeon.wav');
            audio.play()
        }

        resetBtn.disabled = false;
    
        resultText.textContent = "";
    }
}

function reset() {
    resetBtn.disabled = true;

    const audio = new Audio('./sounds/getreadyforthenextfight.wav');
    audio.play();

    if(rockBtn.disabled){
        toggleButtons();
    }
    
    setImageAttributes(playerChoiceImg, "", "");
    setImageAttributes(computerChoiceImg, "", "");

    playerScore = 0;
    playerScoreText.textContent = playerScore;

    computerScoreScore = 0;
    computerScoreText.textContent = computerScoreScore;

    round = 1;

    announcementText.textContent = "Welcome to Rock Paper Scissors";
    resultText.textContent = "Choose a hand to start the game!"
}

function setImageAttributes(image, src, alt){
    image.setAttribute("src", src);
    image.setAttribute("alt", alt);
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resetBtn = document.querySelector("#reset");

const announcementText = document.querySelector("#announcement-text");
const resultText = document.querySelector("#result-text");

const playerScoreText = document.querySelector(".player.score");
const computerScoreText = document.querySelector(".computer.score");

const playerChoiceImg = document.querySelector("#player-choice");
const computerChoiceImg = document.querySelector("#computer-choice");

rockBtn.addEventListener('click', () => startRound("Rock"));

paperBtn.addEventListener('click', () => startRound("Paper"));

scissorsBtn.addEventListener('click', () => startRound("Scissors"));

resetBtn.addEventListener('click', () => reset());
