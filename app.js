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
//  Prompting user to choose between options

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt('Rock Paper or Scissors');
    if (choice === null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

// Playing the game

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

// Play 5 rounds

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let p1Choice = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(p1Choice, computerSelection);
    if (result === 'Player Win') {
      playerScore++;
    } else if (result === 'Computer Win') {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(
      `Congrats you win with a score of ${playerScore} - ${computerScore}`
    );
  } else {
    console.log(
      `Sorry you lose with a score of ${playerScore} to ${computerScore}`
    );
  }
}
game();
