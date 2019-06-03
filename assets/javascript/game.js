// array of GOT names
// var words = ["daenerys targaryen", ['jon snow'], ['tyrion lannister'], ['bran stark'], ['sansa stark'], ['arya stark'], ['cersei lannister'], ['jaime lannister'], ['khal drago'], ['joffrey baratheon'], ['theon greyjoy'], ['samwell tarly'], ['brienne of tarth'], ['ramsay bolton'], ['podrick payne'], ['davos seaworth'], ['jorah mormont'], ['petyr Baelish']];

var words = ['monkey', 'dog', 'pig']
// pick a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
console.log(word.length)
// set up an array to designate the answer
var answerArray = [];
// function myFunction() {
//     document.getElementById("current-word").innerHTML = ("_") * word.length;
//     console.log("current-word");
// }


function startLogic() {
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray);
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
}
}
// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     // show player progress
//     alert(answerArray.join(" "));
//     // get a guess from player
//     var guess = prompt("Guess a letter, or cancel to stop playing.");
//     if (guess === null) {
//         break;
//     }
//     else if (guess.length !==1) {
//         alert("Please enter a single letter.");
//     }
//     else {
//         // update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }

// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
