// Rock Paper Scissors game
//
// @param playerSelection()
// @param computerSelection()

let choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player-score .score");
const computer = document.querySelector("#computer-score .score");
player.textContent = `${playerScore}`;
computer.textContent = `${computerScore}`;

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    return "WIN";
  } else {
    return "LOSE";
  }
}

function playGame() {
  let playerSelection = prompt("Enter your choice.").toUpperCase();
  let computerSelection = getRandomChoice();
  const resultMessage = `Computer chose ${computerSelection}. You`;

  // Check if what was written is in the "choices" array.
  if (choices.indexOf(playerSelection) > -1) {
    const result = determineWinner(playerSelection, computerSelection);
    alert(`${resultMessage} ${result}!`);
  } else {
    alert(`You must make a selection. Type rock, paper, or scissors to play.`)
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

let rpsButton = document.querySelectorAll("choice");

rpsButton.addEventListener('click', () => {
  playGame();
});
// Call the playGame function to start the game
// playGame();