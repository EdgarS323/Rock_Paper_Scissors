// Initialize Variables

// let isGameOver = false;
// let round = 1;
// let player1Score = 0;
// let player2Score = 0;
let options = ['rock', 'paper', 'scissors'];

// Get computers Choice from an array that includes rock, paper and scissors.

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3)];
};

let computerSelection = getComputerChoice();
//  Prompting user to choose between options

// let p1Choice = prompt('Choose either Rock Paper or Scissors');
// p1Choice = p1Choice.toLowerCase();

// Playing the game

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log('Draw');
  }
}

// Play 5 rounds

function game() {
  for (let i = 1; i <= 5; i++) {
    let p1Choice = prompt('Chose either rock paper or scissors').toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(p1Choice, computerSelection);
  }
}

game();
