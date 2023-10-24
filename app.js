// Initialize Variables

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

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

// Get computers Choice from options array

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * options.length)];
};

// Play round

function playRound(playerSelection) {
  if (player1Score === 5 || compScore === 5) {
    if (player1Score > compScore) {
      gameWinner.textContent = 'CONGRATS YOU WIN THE SERIES!!!';
    } else {
      gameWinner.textContent = 'SORRY YOU LOST THE SERIES :(';
    }
    return;
  }
  roundWinner.style.color = 'white';
  let computerSelection = getComputerChoice();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    roundWinner.style.color = 'green';
    player1Score++;
    playerScore.textContent = player1Score;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    roundWinner.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    roundWinner.style.color = 'red';
    compScore++;
    computerScore.textContent = compScore;
  } else {
    roundWinner.textContent = 'Draw!!';
  }
}
