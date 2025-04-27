function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update choices on screen
  document.getElementById('user-choice').innerText = `You chose: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').innerText = `Computer chose: ${capitalize(computerChoice)}`;

  let result = "";

  // Decide the winner
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  // Show the result
  document.getElementById('winner').innerText = result;
}

// Helper function to capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}