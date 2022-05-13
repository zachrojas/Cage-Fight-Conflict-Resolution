var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

// Function to define game
var playGame = function() {
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    return;
  }

  userChoice = userChoice.toUpperCase();

  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Play again prompt
  var playAgain = window.confirm("Play again?");

  // Play again if user pressed OK
  if (playAgain) {
    playGame();
  }
};

// Run game
playGame();
