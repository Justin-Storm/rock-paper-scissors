const user = document.getElementById('user');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');

// Function to get user choice
const getUserChoice = (userInput) => {
  
    // Check if the input is valid
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      user.innerHTML = 'Invalid input. Please choose rock, paper, or scissors.';
    }
  };
  
  // Function to get computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    // Check for secret 'bomb' cheat code
    if (userChoice === 'bomb') {
      return 'User wins by using the secret cheat code!';
    }
  
    // Check if it's a tie
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    // Determine winner based on choices
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  };
  
  // Function to play the game
  const playGame = () => {
    const userChoice = getUserChoice('paper'); // You can change this to 'rock', 'paper', 'scissors', or 'bomb'
    const computerChoice = getComputerChoice();
    
    user.innerHTML = `User Choice: ${userChoice}`;
    computer.innerHTML = `Computer Choice: ${computerChoice}`;
  
    winner.innerHTML = determineWinner(userChoice, computerChoice);
  };
  
  // Start the game
  playGame();
  