// Initialize Variables

// let isGameOver = false;
// let round = 1;
// let player1Score = 0;
// let player2Score = 0;
let options = ['rock', 'paper', 'scissors'];

// Get computers Choice from an array that includes rock, paper and scissors.

const getComputerChoice = () => {
  const compSelection = options[Math.floor(Math.random() * 3)];
  return compSelection;
};

let computerSelection = getComputerChoice();
//  Prompting user to choose between options

let p1Choice = prompt('Choose either Rock Paper or Scissors');
p1Choice = p1Choice.toLowerCase();

// Playing the game

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  } else {
    return 'draw';
  }
}
