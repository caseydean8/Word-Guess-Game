// array of GOT names, to be added after logic is completed
// var words = ["daenerys targaryen", ['jon snow'], ['tyrion lannister'], ['bran stark'], ['sansa stark'], ['arya stark'], ['cersei lannister'], ['jaime lannister'], ['khal drago'], ['joffrey baratheon'], ['theon greyjoy'], ['samwell tarly'], ['brienne of tarth'], ['ramsay bolton'], ['podrick payne'], ['davos seaworth'], ['jorah mormont'], ['petyr Baelish']];

// set up variable for wins
var wins = 0
// temporary test array
var words = ['monkey', 'dog', 'pig']

// set up an array to designate the answer
var answerArray = [];

// define guess variable
var guesses;
// define correct guess variable
var correct;
// reset game
function gameReset() {
    document.getElementById("already-guessed").innerHTML = " ";
    guesses = 10;
    document.onkeypress = function(key_dtl) {
        startLogic();
    }
}

// creates empty spaces for current word
function startLogic() {
    word = words[Math.floor(Math.random() * words.length)];
console.log(word);
    answerArray = [];
    guesses = 10;
    correct = 0;
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray);
    document.getElementById("current-word").innerHTML =answerArray.join(" ");
    }


    // get keypress to register
document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
   var uni_code = key_dtl.keyCode || key_dtl.which; 
   var key_name = String.fromCharCode(uni_code);
    guesses--;
    document.getElementById("guesses-left").innerHTML = guesses;
    
    //if the word generated is equal to the players keypress then set variable letterInWord to true
    var letterInWord = false;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === key_name) {
            letterInWord = true;
            correct++;
            console.log(correct);
        }
    }
    //if letterInWord is true, create letter in current-word at correct index
    if (letterInWord) {
        for (var j = 0; j <= word.length; j++){
            if (word[j] === key_name) 
            answerArray[j] = key_name;
            document.getElementById("current-word").innerHTML = answerArray.join();
        }
        
    }
    // if letter in word is false, assign keypress to already-guessed
    else {
        document.getElementById("already-guessed").innerHTML += key_name;
    }

    // record win if player guesses correctly
    if (correct === word.length) {
    console.log(correct);
    wins++;
    document.getElementById("wins").innerHTML = wins;
    gameReset();
    } 
    
    // reset game upon loss
    else if (guesses === 0) {
        document.getElementById("already-guessed").innerHTML = " ";
        gameReset();
    }
    
}
}
