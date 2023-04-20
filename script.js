// Generate random computerChoice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      return "Oops, something went wrong";
  }
}

// Function to create a single round using playerSelection and computerSelection parameters
function playRound(playerSelection, computerSelection) {
  // Declare empty winner variable
  let winner

  // Standardise capitalisation of player input
  playerSelection = playerSelection.toLowerCase();
  const firstLetter = playerSelection[0].toUpperCase();
  playerSelection = playerSelection.replace(playerSelection[0], firstLetter);

  // Determine winner of round
  if (playerSelection === computerSelection) {
    winner = 'Tie';
  } else if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      winner = 'Computer';
    } else {
      winner = 'Player';
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      winner = 'Player';
    } else {
      winner = 'Computer';
    }
  } else if (playerSelection = 'Scissors') {
    if (computerSelection === 'Rock') {
      winner = 'Computer';
    } else {
      winner = 'Player';
    }
  };

  // Log string declaring the winner
  switch (winner) {
    case 'Player':
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
      break;
    case 'Computer':
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
      break;
    case 'Tie':
      console.log(`Tie! You both selected ${playerSelection}.`);
      break;
  }

  // Return the result
  return winner;
}

// Play a game consisting of 5 rounds
function game() {
  // Declare score keeping variables
  let playerScore = 0;
  let computerScore = 0;

  // 5 round loop prompting user for choice
  for (let i=0; i<5; i++) {
    let round = playRound(prompt('Enter your choice (Rock, Paper or Scissors)'), getComputerChoice());
    if (round === 'Player') {
      playerScore++;
    } else if (round === 'Computer') {
      computerScore++;
    }
  };

  // Log result to console
  if (playerScore > computerScore) {
    console.log(`Congratulations, you win ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Bad luck, you lose ${playerScore} to ${computerScore}`);
  } else {
    console.log(`It was a tie - ${playerScore} each`);
  }
};

game();