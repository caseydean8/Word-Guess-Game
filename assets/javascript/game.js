// Array of GOT names, to be added after logic is completed.
// var words = ["daenerys targaryen", ['jon snow'], ['tyrion lannister'], ['bran stark'], ['sansa stark'], ['arya stark'], ['cersei lannister'], ['jaime lannister'], ['khal drago'], ['joffrey baratheon'], ['theon greyjoy'], ['samwell tarly'], ['brienne of tarth'], ['ramsay bolton'], ['podrick payne'], ['davos seaworth'], ['jorah mormont'], ['petyr Baelish']];

// Define variable for wins.
var wins = 0;

// Temporary test array.
var words = ["monkey", "dog", "pig", "tiger", "bear", "ass"];

// Set up an array to designate the answer.
var answerArray = [];
let comparisonArray = [];
let usedKeys = [];

// Define guess variable.
var guesses = 10;

// Define correct guess variable.
var correct;

// Reset game
function gameReset() {
  document.getElementById("current-word").innerHTML = word;
  guesses = 10;
  document.getElementById("guesses-left").innerHTML = guesses;
  usedKeys = [];
  comparisonArray = [];
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
//   console.log(`word length: ${word.length}`);
//   console.log(`answer array length: ${answerArray.length}`)
  correct = 0;
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    comparisonArray.push(word[i]);
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
  }
  console.log(`comparison array: ${comparisonArray}`);
  // boolean?
  //   let keyUsed = false;
  // or used key array?
  //   const usedKeys = [];
//   console.log(`before keypress:`);
//   console.log(usedKeys);

  // Get keypress to register as guess.
  document.onkeypress = function(event) {
    // console.log(`after keypress:`);
    // console.log(usedKeys);
    const userKey = event.key;
    // console.log(userKey);
    // const usedKeys = [];
    let keyUsed = false;
    // If the letter in the word generated is equal to the players keypress then set variable letterInWord to true.
    var letterInWord = false;
    // let keyUsed = false;
    // console.log(`keyUsed is ${keyUsed}`);

    for (var j = 0; j < word.length; j++) {
      if (word[j] === userKey) {
        letterInWord = true;
        // console.log(`letter in word is true`);
      }
    }

    for (var i = 0; i < usedKeys.length; i++) {
      if (usedKeys[i] === userKey) {
        keyUsed = true;
        console.log(`key used is true: ${keyUsed}`)
      };
    }

    // If letterInWord is true, create letter in current-word . . .
    if (letterInWord && keyUsed === false) {
      for (var j = 0; j < word.length; j++) {
        if (word[j] === userKey)
          // . . . at correct index
          answerArray[j] = userKey;
        document.getElementById("current-word").innerHTML = answerArray.join(
          " "
        );
      };
      correct++;
      usedKeys.push(userKey);
    //   console.log(`used keys after #1 if statement:`);
    //   console.log(usedKeys);
      console.log(`answer array: ${answerArray}`);
    } else if (letterInWord === false && keyUsed === false) {
      document.getElementById("already-guessed").innerHTML += userKey;
      guesses--;
      document.getElementById("guesses-left").innerHTML = guesses;
      usedKeys.push(userKey);
    //   console.log(`used keys after #2 if statement:`);
      console.log(usedKeys);
    } else {
      console.log("letter has been chosen already");
    }
    // console.log(usedKeys);

    // Record win if player guesses correctly.
    if (JSON.stringify(comparisonArray) === JSON.stringify(answerArray)) {
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
