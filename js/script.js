// ul where guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
const guessedLetters = [];

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
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

if (goodGuess) {
    makeGuess(guess);
}
letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.lenth > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again.";
    }
};