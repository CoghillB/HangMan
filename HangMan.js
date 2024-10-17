/*
    Brayden Coghill
    300347436
    Hangman Game - JavaScript
    Game will use a pre set list of words and randomly select one for the user to guess
 */

//Global Variables
let words = ["javascript", "python", "java", "html", "css", "php", "ruby", "csharp", "rust", "swift", "kotlin"];
let word = "";
let guessedLetters = [];
let incorrectGuesses = 0;
let maxIncorrectGuesses = 6;

// Function to select random word from list
function selectRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    return word;
}

// Function to display current state of the guessed word
function displayWord() {
    let display = "";
    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.includes(word[i])) {
            display += word[i];
        } else {
            display += "_";
        }
    }
    return display;
}

function checkGuess(letter) {
    if (guessedLetters.includes(letter)) {
        console.log(`You have already guessed the letter ${letter}`);
        return displayWord();
    }

    guessedLetters.push(letter);

    if (word.includes(letter)) {
        guessedLetters.push(letter);
        console.log(`Good job! the letter ${letter} is in the word!`);
    } else {
        incorrectGuesses++;
        console.log(`Sorry! the letter ${letter} is not in the word!\n
        You have ${maxIncorrectGuesses - incorrectGuesses} guesses left!`);
    }
    return displayWord();
}

function playGame() {
    console.log("Welcome to Hangman!");
    selectRandomWord();
    console.log(displayWord());

    while (incorrectGuesses < maxIncorrectGuesses) {
        let guess = prompt("Please enter a letter to guess: ");
        if (guess.length !== 1) {
            console.log("Please enter a single letter from a-z");
            continue;
        }

        console.log(checkGuess(guess.toLowerCase()));

    if (!displayWord().includes("_")) {
        console.log(`Congratulations! You have guessed the word ${word}!`);
        return;
    }
        //console.log(`You have ${maxIncorrectGuesses - incorrectGuesses} guesses left!`);
    }
    console.log(`Game Over! The word was ${word}`);
}
playGame();