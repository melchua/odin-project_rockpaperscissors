
// Rock Paper Scissors

// randomly return Rock, Paper or Scissors
function computerPlay() {
  var choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random()* 3)];
}


function playRound(playerSelection, computerSelection) {
  var winlose;
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" ) {
    winlose = "You lose! " + computerSelection + " beats " + playerSelection + "!";
  }
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" ) {
    winlose = "You win! " + playerSelection + " beats " + computerSelection + "!";
  }
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors" ) {
    winlose = "You lose! " + computerSelection + " beats " + playerSelection + "!";
  }
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock" ) {
    winlose = "You win! " + playerSelection + " beats " + computerSelection + "!";
  }
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" ) {
    winlose = "You lose! " + computerSelection + " beats " + playerSelection + "!";
  }
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" ) {
    winlose = "You win! " + playerSelection + " beats " + computerSelection + "!";
  }
  else if (playerSelection.toLowerCase() == computerSelection) {
    winlose = "It's a draw!";
  }
  else {
    winlose = "I cannot determine this, you must have messed something up";
  }
  return winlose;
}

function game() {
  const playerSelection = 'rock'

  for (var i=0; i < 5; i++) {
    console.log(playRound(playerSelection, computerPlay()))
  }

}


game();