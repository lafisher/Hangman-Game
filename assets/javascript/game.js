//let's rock 
 

//let's set some variables! 
//-----------------------------------------------------------
  var wordOptions =[
  'wine','lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','jamie','battle','death','wedding','stark','hearttree',
  ];
  var selectedWord = "";
  var lettersInWord = [];
  var numBlanks = 0;
  var blanksAndSuccesses =[];
  var wrongLetters = [];

// counters  
  var winCount = 0;
  var lossCount = 0;
  var guessesLeft = 8; 

//let's make some functions up!
//------------------------------------------------------------
function startGame () {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersInWord = selectedWord.split("");
  numBlanks = lettersInWord.length;

 //reset
 guessesLeft = 8;
 wrongLetters = [];
 blanksAndSuccesses = [];

 //populate blanksAndSuccesses
 for (var i=0; i<numBlanks; i++){
      blanksAndSuccesses.push("_");
 }

 // Change HTML
 document.getElementById("guessMe").innerHTML = blanksAndSuccesses.join(" ");
 document.getElementById("leftGuesses").innerHTML = guessesLeft;
 document.getElementById("youwin").innerHTML = winCount;
 document.getElementById("losscounter").innerHTML = lossCount;
 
 
  //test
  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
  // check if letter exists
  
  var isLetterInWord = false;
  for (var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter) {
      isLetterInWord = true;
    }
  }

// check where in word letter exists 
if(isLetterInWord) {
for (var i=0; i< numBlanks; i++) {
      if(selectedWord[i] == letter) {
          blanksAndSuccesses[i] = letter;
      }
   }
}

else {
  wrongLetters.push(letter);
  guessesLeft--
}
   console.log(blanksAndSuccesses);

}

function roundComplete(){
    console.log("win Count:"  + winCount + " | Loss Count:" + lossCount + " | Guesses Left" + guessesLeft )

    //update HTML
    document.getElementById("leftGuesses").innerHTML = guessesLeft;
    document.getElementById("guessMe").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
      winCount++;
      alert("You Won!");

      document.getElementById("youwin").innerHTML = winCount;
    
      startGame();
    }

    else if (guessesLeft == 0) {
      lossCount++
      alert("You Lost!");

      document.getElementById("losscounter").innerHTML = lossCount;

      startGame();
    }


}
//let's call those fucntions B! process like a MoFo
//------------------------------------------------------------

// initiates game play
startGame();

// register keystrokes 

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    //test
    console.log(letterGuessed);
} 










