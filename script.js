// List of possible words for the game
const words = ["brave", "chair", "dance", "eagle", "frost", "globe", "heart", "index", "joint", "knife", "lemon", "magic", "north", "ocean", "plant", "quick", "river", "space", "table", "unite", "value", "world", "xeric", "young", "zebra", "adapt", "blast", "crisp", "drift", "empty", "flute", "grant", "humor", "input", "latch", "mirth", "novel", "orbit", "pulse", "quest", "roach", "steam", "tonic", "upset", "vigor", "whisk", "yield"];

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
