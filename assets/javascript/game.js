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
//create array for incorrect keypress
// get keypress to register
document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
   var uni_code = key_dtl.keyCode || key_dtl.which; 
   var key_name = String.fromCharCode(uni_code); 
   // if player keypress matches letter in current word apply to #"current-word"
   for (var j = 0; j < word.length; j++) {
        if (word[j] === key_name) {
            console.log(key_name)
            answerArray[j] = key_name;
            console.log(answerArray);
            //apply #"current-word" keypress match in correct position
            document.getElementById("current-word").innerHTML = answerArray.join();
        }
        // if player keypress doesn't match #current-word send to letters already guessed
        else {
            wrongLetters[0] = key_name;
            document.getElementById("already-guessed").innerHTML += wrongLetters;
            console.log(wrongLetters);
        }
        }   
    }


