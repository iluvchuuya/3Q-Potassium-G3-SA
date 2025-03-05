// List of possible words for the game
const words = ["jumpy", "brick", "plumb", "shock", "crisp", "flute", "drown", "grasp", "blaze", "twirl",
"vexed", "swift", "thump", "chirp", "ghost", "quirk", "frown", "plank", "brush", "crush",
"flesh", "grind", "humid", "knife", "lunch", "mouth", "nerve", "ocean", "prize", "quilt",
"ranch", "storm", "thorn", "using", "vowel", "waltz", "xenon", "yeast", "zebra", "drift",
"fancy", "glint", "horse", "index", "joker", "knock", "lemon", "march", "night", "opera"];

// Select a random word from the list
const selectedWord = words[Math.floor(Math.random() * words.length)];

// Create an array representing the word with underscores (5 spaces)
let guessedWord = ["_", "_", "_", "_", "_"]; 

// Track the number of wrong guesses
let wrongGuesses = 0;
let lives = 5;

function autoRefresh() {
    window.location = window.location.href;
}

// Display the initial word and lives count
document.getElementById("word-display").textContent = guessedWord.join(" ");
document.getElementById("lives").textContent = "Remaining lives: " + (5 - wrongGuesses);

function checkLetter(letter) {
    // Disable the button so it cannot be clicked again
    document.getElementById(letter).disabled = true;

    // Reference elements for updating the display
    let wordDisplay = document.getElementById("word-display");
    let hangmanImage = document.getElementById("hangman-image");
    let livesText = document.getElementById("lives");

    // Flag to determine if the letter is found in the word
    let found = false;

    // Manually check each position in the word
    if (selectedWord[0] === letter) {
        guessedWord[0] = letter;
        found = true;
    }
    if (selectedWord[1] === letter) {
        guessedWord[1] = letter;
        found = true;
    }
    if (selectedWord[2] === letter) {
        guessedWord[2] = letter;
        found = true;
    }
    if (selectedWord[3] === letter) {
        guessedWord[3] = letter;
        found = true;
    }
    if (selectedWord[4] === letter) {
        guessedWord[4] = letter;
        found = true;
    }

    // If the letter is not found, update wrong guesses and hangman image
    if (!found) {
        wrongGuesses++;
        hangmanImage.src = "p" + wrongGuesses + ".jpg";
    }

    // Check if the player has lost (5 wrong guesses)
    if (wrongGuesses >= 5) {
        alert("You lost! The word was " + selectedWord);
        setInterval(autoRefresh, 2000); // Restart game after loss
    }

    wordDisplay.textContent = guessedWord.join(" ");
    document.getElementById("lives").textContent = "Remaining lives: " + (5 - wrongGuesses);

    // Check if the player has won 
    if (guessedWord.indexOf("_") == -1) {
        hangmanImage.src = "win.jpg";
        alert("CONGRATULATIONS!!! You win!");
        setInterval(autoRefresh, 2000); // Restart game after win
    }
}

// Make checkLetter globally accessible
window.checkLetter = checkLetter;
