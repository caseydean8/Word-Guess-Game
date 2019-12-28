// Array of GOT names, to be added after logic is completed.
// var words = ["daenerys targaryen", ['jon snow'], ['tyrion lannister'], ['bran stark'], ['sansa stark'], ['arya stark'], ['cersei lannister'], ['jaime lannister'], ['khal drago'], ['joffrey baratheon'], ['theon greyjoy'], ['samwell tarly'], ['brienne of tarth'], ['ramsay bolton'], ['podrick payne'], ['davos seaworth'], ['jorah mormont'], ['petyr Baelish']];

// Define variable for wins.
var wins = 0;

// Temporary test array.
var words = ["monkey", "dog", "pig", "tiger", "bear"];

// Set up an array to designate the answer.
var answerArray = [];

// Define guess variable.
var guesses = 10;

// Define correct guess variable.
var correct;

// Reset game
function gameReset() {
  document.getElementById("current-word").innerHTML = word;
  guesses = 10;
  document.getElementById("guesses-left").innerHTML = guesses;
  document.onkeypress = function(event) {
    startLogic();
  };
}

// Game start from html . This creates empty spaces for current word.
function startLogic() {
  document.getElementById("already-guessed").innerHTML = " ";
  word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  answerArray = [];
  correct = 0;
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
  }
  console.log(answerArray);

  // Get keypress to register as guess.
  document.onkeypress = function(event) {
    const userKey = event.key;

    // If the letter in the word generated is equal to the players keypress then set variable letterInWord to true.
    var letterInWord = false;
    for (var j = 0; j < word.length; j++) {
      if (word[j] === userKey) {
        letterInWord = true;
        correct++;
        console.log(correct);
      }
    }

    // If letterInWord is true, create letter in current-word . . .
    if (letterInWord) {
      for (var j = 0; j < word.length; j++) {
        if (word[j] === userKey)
          // . . . at correct index
          answerArray[j] = userKey;
        document.getElementById("current-word").innerHTML = answerArray.join(
          " "
        );
      }
    }

    // If letter in word is false, assign keypress to already-guessed.
    else {
      document.getElementById("already-guessed").innerHTML += userKey;
      guesses--;
      document.getElementById("guesses-left").innerHTML = guesses;
    }

    // Record win if player guesses correctly.
    if (correct === word.length) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("already-guessed").innerHTML = "Great Guess!";
      gameReset();
    }

    // Reset game upon loss.
    else if (guesses === 0) {
      document.getElementById("already-guessed").innerHTML = "You Lost";

      gameReset();
    }
  };
}
