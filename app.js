// Initialize Variables

let isGameOver = false;
let round = 1;
let player1Score = 0;
let compScore = 0;
let options = ['rock', 'paper', 'scissors'];

// Grab HTML Elements

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const roundWinner = document.querySelector('#round-winner');
const gameWinner = document.querySelector('#game-winner');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundDisplay = document.querySelector('#roundDisplay');

// Add event listeners to each button

rock.addEventListener('click', () => playRound('rock', computerSelection));
paper.addEventListener('click', () => playRound('paper', computerSelection));
scissors.addEventListener('click', () => playRound('scissors', computerSelection));

// Get computers Choice from options array

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * options.length)];
};

let computerSelection = getComputerChoice();

// Play 1 round

function playRound(playerSelection, computerSelection) {
  if (round == 5) {
    if (player1Score > compScore) {
      gameWinner.textContent = 'Congrats You win the series!!!';
    } else if (compScore > player1Score) {
      gameWinner.textContent = 'Sorry but you lose the series to the CPU!!!';
    }
    return;
  }
  roundWinner.style.color = 'white';
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    roundWinner.style.color = 'green';
    player1Score++;
    playerScore.textContent = player1Score;
    round++;
    roundDisplay.textContent = round;
    return 'Player Win';
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    roundWinner.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    roundWinner.style.color = 'red';
    compScore++;
    computerScore.textContent = compScore;
    round++;
    roundDisplay.textContent = round;
    return 'Computer Win';
  } else {
    roundWinner.textContent = 'Draw';
    round++;
    roundDisplay.textContent = round;
  }
}

// Tracking Scores & Round
