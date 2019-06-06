// array of GOT names
// var words = ["daenerys targaryen", ['jon snow'], ['tyrion lannister'], ['bran stark'], ['sansa stark'], ['arya stark'], ['cersei lannister'], ['jaime lannister'], ['khal drago'], ['joffrey baratheon'], ['theon greyjoy'], ['samwell tarly'], ['brienne of tarth'], ['ramsay bolton'], ['podrick payne'], ['davos seaworth'], ['jorah mormont'], ['petyr Baelish']];

var words = ['monkey', 'dog', 'pig']
// pick a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
console.log(word.length)
// set up an array to designate the answer
var answerArray = [];
// set up array for incorrect guesses
var wrongLetters = [];
// creates empty spaces for current word
function startLogic() {
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray);
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
}
}
var guesses = 10
// get keypress to register
document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
   var uni_code = key_dtl.keyCode || key_dtl.which; 
   var key_name = String.fromCharCode(uni_code);
    console.log(key_name);
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var j = 0; j < word.length; j++) {
        if (word[j] === key_name) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        console.log(letterInWord);
        for (var j = 0; j < word.length; j++){
            if (word[j] === key_name) 
            answerArray[j] = key_name;
            console.log(answerArray[j]);
            document.getElementById("current-word").innerHTML = answerArray.join()
            
        }
        
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        document.getElementById("already-guessed").innerHTML += key_name;
        guesses--;
    }
}

    

    

    