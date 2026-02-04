alert("🎮 Welcome to the Guess the Number Game!");

const player = prompt("What’s your name?");
const max = prompt(`Hi ${player}! 👋 Enter the maximum number:`);

const random = Math.floor(Math.random() * max) + 1;
let attempts = 0;

let guess = prompt(`Alright ${player}, I’ve picked a number between 1 and ${max}. Try to guess it! (Type 'quit' to exit)`);

while (guess !== "quit") {
  attempts++;
  const numGuess = parseInt(guess);

  if (numGuess === random) {
    alert(`🎉 Congrats ${player}! You guessed it right in ${attempts} attempts. The number was ${random}.`);
    break;
  } else if (numGuess < random) {
    guess = prompt(`📉 Too low, ${player}! Try again (Attempt #${attempts}) or type 'quit' to stop:`);
  } else if (numGuess > random) {
    guess = prompt(`📈 Too high, ${player}! Try again (Attempt #${attempts}) or type 'quit' to stop:`);
  } else {
    guess = prompt(`❗Oops! Please enter a valid number or 'quit':`);
  }
}

alert(`👋 Thanks for playing, ${player}! You made ${attempts} attempts. Game Over!`);
console.log(`Game ended for ${player}. Total attempts: ${attempts}`);
