// Array of GOT names, to be added after logic is completed
// var words = ["daenerys targaryen", ['jon snow'], ['tyrion lannister'], ['bran stark'], ['sansa stark'], ['arya stark'], ['cersei lannister'], ['jaime lannister'], ['khal drago'], ['joffrey baratheon'], ['theon greyjoy'], ['samwell tarly'], ['brienne of tarth'], ['ramsay bolton'], ['podrick payne'], ['davos seaworth'], ['jorah mormont'], ['petyr Baelish']];

// Define variable for wins.
var wins = 0

// Temporary test array.
var words = ['monkey', 'dog', 'pig']

// Set up an array to designate the answer.
var answerArray = [];

// Define guess variable.
var guesses;

// Define correct guess variable.
var correct;

// Alert player of loss, not functioning. See line 87.
var lose = "YOU LOSE";

// Reset game
function gameReset() {
    document.getElementById("current-word").innerHTML = word;
    document.getElementById("already-guessed").innerHTML = " ";
    document.getElementById("guesses-left").innerHTML = "10";
    document.onkeypress = function(key_dtl) {
        startLogic();
    }
}

// Game start from html . This creates empty spaces for current word.
function startLogic() {
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [];
    guesses = 10;
    correct = 0;
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
    }


 // Get keypress to register as guess.
document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
   var uni_code = key_dtl.keyCode || key_dtl.which; 
   var key_name = String.fromCharCode(uni_code);
    guesses--;
    document.getElementById("guesses-left").innerHTML = guesses;
    
    // If the letter in the word generated is equal to the players keypress then set variable letterInWord to true.
    var letterInWord = false;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === key_name) {
            letterInWord = true;
            correct++;
            console.log(correct);
        }
    }
    // If letterInWord is true, create letter in current-word . . . 
    if (letterInWord) {
        for (var j = 0; j <= word.length; j++){
            if (word[j] === key_name) 
            // . . . at correct index
            answerArray[j] = key_name;
            document.getElementById("current-word").innerHTML = answerArray.join();
        }
        
    }
    // If letter in word is false, assign keypress to already-guessed.
    else {
        document.getElementById("already-guessed").innerHTML += key_name;
    }

    // Record win if player guesses correctly.
    if (correct === word.length) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    gameReset();
    } 
    

    // Reset game upon loss.
    else if (guesses === 0) {
        // Not sure why following line doesn't work.
        document.getElementById("already-guessed").innerHTML = lose;
        console.log(document.getElementById("already-guessed").innerHTML = lose);
        gameReset();
    }
    
}
}
