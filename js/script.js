// ul where guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");
// button to guess a letter
const guessLetterButton = document.querySelector(".guess");
// letter input
const letterInput = document.querySelector(".letter");
// word in progress
const wordInProgress = document.querySelector(".word-in-progress");
// remaining guesses
const remainingGuesses = document.querySelector(".remaining");
// remaining guesses span
const remainingGuessesSpan = document.querySelector(".remaining span");
// where guessed letters will appear
const message = document.querySelector(".message");
// hidden button prompting player to play again
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
   placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess); 
    letterInput.value = "";
});


