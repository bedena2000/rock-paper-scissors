// Step 1: 
let score = 0;
function userAnswer() {
  let userAnswer = prompt('Hey choose one of the three: Rock, Paper, Scissors').toLowerCase();
  while(userAnswer !== 'rock' && userAnswer !== 'paper' && userAnswer !== 'scissors') {
    userAnswer = prompt('Hey choose one of the three: Rock, Paper, Scissors').toLowerCase();
  }
  return userAnswer;
}
// Sigil of new Game
let newGameSigil = false;
// Step 2:
const gameArray = ['rock', 'paper', 'scissors'];
function computerAnswer() {
  // Step 1: Make Random Number 0, 1, 2
  const randomNumber = Math.floor(Math.random() * 3);
  return gameArray[randomNumber];
}

function computerWinner() {
  document.querySelector(".draw").textContent = '';
  // Get computer scrore
  let computerScore = Number(document.querySelector(".computer").textContent);
  // increaseScore 
  computerScore++;
  // Set the new score
  document.querySelector(".computer").textContent = computerScore;
};

function userWinner() {
  document.querySelector(".draw").textContent = '';
  // Get computer scrore
  let userScore = Number(document.querySelector(".user").textContent);
  // increaseScore 
  userScore++;
  // Set the new score
  document.querySelector(".user").textContent = userScore;
};

function draw() {
  document.querySelector(".draw").textContent = 'Draw';
}

function clearFunction() {
  document.querySelector(".computer").textContent = '0';
  document.querySelector(".user").textContent = '0';
  document.querySelector(".draw").textContent = '';
}

function checkSigil() {
  let computerScore = Number(document.querySelector(".computer").textContent);
  let userScore = Number(document.querySelector(".user").textContent);
  if(computerScore === 3 || userScore === 3) {
    newGameSigil = true;
  }
}

function startGame(userChoice) {
  const userChoose = userChoice;
  const computerChoose = computerAnswer();
  const winner = checkWinner(userChoose, computerChoose);
  if(winner === 'user') {
    if(newGameSigil) {
      clearFunction();
      newGameSigil = false;
    }
    userWinner();
    checkSigil()
  } else if (winner === 'computer') {
    if(newGameSigil) {
      clearFunction();
      newGameSigil = false;
    }
    computerWinner();
    checkSigil()
  } else if (winner === 'draw') {
    if(newGameSigil) {
      clearFunction();
      newGameSigil = false;
    }
    draw();
    checkSigil()
  }
}
function checkWinner(userChoose, computerChoose) {
  let winnerState;
  if(
    userChoose === 'rock' && computerChoose === 'paper'
  ) {
    winnerState = 'computer';
  } else if (
    userChoose === 'rock' && computerChoose === 'scissors'
  ) {
    winnerState = 'user';
  } else if (
    userChoose === 'rock' && computerChoose === 'rock'
  ) {
    winnerState = 'draw';
  } else if (
    userChoose === 'paper' && computerChoose === 'rock'
  ) {
    winnerState = 'user';
  } else if (
    userChoose === 'paper' && computerChoose === 'paper'
  ) {
    winnerState = 'draw';
  } else if (
    userChoose === 'paper' && computerChoose === 'scissors'
  ) {
    winnerState = 'computer';
  } else if (
    userChoose === 'scissors' && computerChoose === 'rock'
  ) {
    winnerState = 'computer';
  } else if (
    userChoose === 'scissors' && computerChoose === 'paper'
  ) {
    winnerState = 'user';
  } else if (
    userChoose === 'scissors' && computerChoose === 'scissors'
  ) {
    winnerState = 'draw';
  }
  return winnerState;
}
// Final Logic

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function getType(event) {
  const type = event.target.classList[0];
  if(type === 'rock') {
    startGame('rock');
  } else if (type === 'scissors') {
    startGame('scissors');
  } else if (type === 'paper') {
    startGame('paper');
  }
}

rock.addEventListener("click", getType);
paper.addEventListener("click", getType);
scissors.addEventListener("click", getType);

