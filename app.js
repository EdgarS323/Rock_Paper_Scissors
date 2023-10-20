// Initialize Variables

let isGameOver = false;
let round = 1;
let player1Score = 0;
let player2Score = 0;
let options = ['rock', 'paper', 'scissors'];

// Get computers Choice from an array that includes rock, paper and scissors.

const getComputerChoice = () => {
  const compSelection = options[Math.floor(Math.random() * 3)];
  return compSelection;
};
