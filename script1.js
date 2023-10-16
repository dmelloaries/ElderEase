const words = ['HELLO', 'WORLD', 'JAVASCRIPT', 'PUZZLE', 'ELDERLY', 'FUN'];
let word = '';
let remainingLetters = 0;
let guesses = 0;

const wordDisplay = document.getElementById('word-display');
const letterInput = document.getElementById('letter-input');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

function newGame() {
    word = words[Math.floor(Math.random() * words.length)];
    remainingLetters = word.length;
    guesses = 0;
    wordDisplay.textContent = '_ '.repeat(word.length);
    letterInput.value = '';
    message.textContent = '';
}

function checkGuess() {
    const guess = letterInput.value.toUpperCase();
    if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
        message.textContent = 'Please enter a valid letter.';
        return;
    }

    if (word.includes(guess)) {
        const displayArray = wordDisplay.textContent.split(' ');
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess && displayArray[i] === '_') {
                displayArray[i] = guess;
                remainingLetters--;
            }
        }
        wordDisplay.textContent = displayArray.join(' ');
        message.textContent = 'Correct guess!';
    } else {
        guesses++;
        message.textContent = 'Wrong guess!';
    }

    letterInput.value = '';

    if (remainingLetters === 0) {
        message.textContent = `Congratulations! You guessed the word '${word}' in ${guesses} attempts.`;
    }
}

newGame();

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', newGame);
