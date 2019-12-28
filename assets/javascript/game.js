// Define variable for wins.
let wins = 0;

// Temporary test array.
const words = ["monkey", "dog", "pig", "tiger", "bear", "ass"];

// Set up an array to designate the answer.
let answerArray = [];
// Array to compare to answer array to determine win
let comparisonArray = [];
// Array to determine if a key has already been pressed
let usedKeys = [];

// Define guess variable.
let guesses = 10;

// Reset game
function gameReset() {
  document.getElementById("current-word").innerHTML = word;
  guesses = 10;
  document.getElementById("guesses-left").innerHTML = guesses;
  usedKeys = [];
  comparisonArray = [];
  document.getElementById("chosen-already").innerHTML = "";
  document.onkeypress = function() {
    startLogic();
  };
}

// Game start from html . This creates empty spaces for current word.
function startLogic() {
  document.getElementById("already-guessed").innerHTML = " ";
  word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    comparisonArray.push(word[i]);
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
  }

  // Get keypress to register as guess.
  document.onkeypress = function(event) {
    const userKey = event.key;

    // keyUsed variable introduced to alert player if a key has been previously pressed
    let keyUsed = false;

    // If the letter in the word generated is equal to the players keypress then set variable letterInWord to true.
    let letterInWord = false;

    for (let j = 0; j < word.length; j++) {
      if (word[j] === userKey) {
        letterInWord = true;
      }
    }

    for (let i = 0; i < usedKeys.length; i++) {
      if (usedKeys[i] === userKey) {
        keyUsed = true;
      };
    }

    // If letterInWord is true, create letter in current-word . . .
    if (letterInWord && keyUsed === false) {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === userKey)
          // . . . at correct index
          answerArray[j] = userKey;
        document.getElementById("current-word").innerHTML = answerArray.join(
          " "
        );
      };
      usedKeys.push(userKey);

    } else if (letterInWord === false && keyUsed === false) {
      document.getElementById("already-guessed").innerHTML += `${userKey} `;
      guesses--;
      document.getElementById("guesses-left").innerHTML = guesses;
      usedKeys.push(userKey);
      document.getElementById("chosen-already").innerHTML = "Incorrect letters:";

    } else {
      document.getElementById("chosen-already").innerHTML = `You've chosen ${userKey} already`;
    }

    // Record win if player guesses correctly
    if (JSON.stringify(comparisonArray) === JSON.stringify(answerArray)) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("already-guessed").innerHTML = "Great Guess! Press any key to play again";
      gameReset();
    }

    // Reset game upon loss.
    else if (guesses === 0) {
      document.getElementById("already-guessed").innerHTML = "You Lost, press a key to play again";
      gameReset();
    }
  };
};