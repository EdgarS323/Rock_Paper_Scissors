// Initialize Variables

// let isGameOver = false;
// let round = 1;
// let player1Score = 0;
// let player2Score = 0;
let options = ['rock', 'paper', 'scissors'];

// Get computers Choice from an array that includes rock, paper and scissors.

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * options.length)];
};

let computerSelection = getComputerChoice();

// Play 1 round

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 'Player Win';
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
    return 'Computer Win';
  } else {
    console.log('Draw');
  }
}

// Grab HTML Elements

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Add event listeners to each button

rock.addEventListener('click', () => playRound('rock', computerSelection));
paper.addEventListener('click', () => playRound('paper', computerSelection));
scissors.addEventListener('click', () => playRound('scissors', computerSelection));
