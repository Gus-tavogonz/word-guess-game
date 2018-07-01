
var wordBank = ["pulpfiction", "django", "ingloriousbasterds", "true-love", "killbill"];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var underScore =[];
var guessesLeft = 9;
var randomValue;
var userGuess = [];


//Set random word from array
var randomValue = wordBank[Math.floor(Math.random() * wordBank.length)];

//changes random value to underscores
for(var i = 0; i < randomValue.length; i++)
{
    underScore.push('_');
}

var answerArray = document.getElementById("word-blank");
var answerArray = [];
for(var i = 0; i < randomValue.length - 1; i++){
    answerArray[i] = "_"; 
    answerArray.push("_");
}


document.getElementById("word-blank").textContent = underScore.join(" ");

//Remaining letters in array




//onkey function gets character from user
document.onkeyup = function(){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    for(var j = 0; j < randomValue.length; j++) {
        if (randomValue[j] == userGuess){
            answerArray[j] = userGuess;
            
        } 
        
        var el = document.getElementById("word-blank");
        el.innerHTML = answerArray.join(" ");
        }
       
    

}
document.getElementById("guesses-left").textContent = guessesLeft;
document.getElementById("wins-space").textContent = wins;
document.getElementById("loss-space").textContent = loss;
if(userGuess != randomValue[i]){
    guessesLeft--;
}



function gameStart(){
    while(remainingLetters > 0){



       
        } 
    }






