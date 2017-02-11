 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

  var mysteryWord = "";
  var wordDisplay = "";
  var usedLetters = "";
  var wrongGuess = 0;


    $(document).ready(function() { 

// random word generator 
    var word = words[Math.floor(Math.random() * words.length)];

    // set up blank word 
    var mysteryWord = [];
    for (var i = 0; i < word.length; i++) {
      mysteryWord[i] = "_";
    }
function blankWord() {
  $(".dead").append(mysteryWord);
  // body...
}
    var remainingLetters = word.length;

    // game play loop
    while (remainingLetters > 0) {
      // Show the player their progress
      alert(mysteryWord.join(" "));

      // Get a guess from the player
      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      if (guess === null) {
        // Exit the game loop
        break;
      } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
      } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            mysteryWord[j] = guess;
            remainingLetters--;
          }
        }
      }

    // The end of the game loop
    }

    // Show the answer and congratulate the player
    alert(mysteryWord.join(" "));
    alert("Good job! The answer was " + word);
  


  for (var i = 0; i < letters.length-1; i++) {
     var guessBtn = $("<button>");
       guessBtn.attr("class", "guess-button guess guess-button-color");
       guessBtn.attr("data-letter", letters[i]);
       guessBtn.html(letters[i]);
          $(".game-play").append(guessBtn);
      }

  $ (".guess-button").on("click", function() {
        var letterGuess= $("<div>");
       letterGuess.attr("class", "letter letterGuess-color");
        letterGuess.text($(this).attr("data-letter"));
        $(".dead").append(letterGuess);
      });

 $ (".reset-button").on("click", function() {
        var resetBtn= $("<button>");
       resetBtn.attr("class", "reset resetBtn-color");
        resetBtn.text($(this).attr("data-reset"));
        $("#clean").append(resetBtn);
      });

});

var readyPlayerOne = true;
 //choose rando words
  var words =[
  'wine','Lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','Jamie','battle','death','wedding','Stark','heart tree',
  ];

 var word = words[Math.floor(Math.random() * words.length)];

 /*var el = document.getElementById("demo");
 el.innerHTML = words*/

 var mysteryWord = [];

 for ( var i =0; i < word.length; i++){
  mysteryWord[i] = "_";
 }

 // create var to keep track of letters that remain to be guessed
 var lettersRemaining = word.length;
 // game loop yo

 while (lettersRemaining > 0) {
  //show progress
  var el = document.getElementById("demo");
 el.innerHTML = mysteryWord.join(" ");
 //guess
 var guess = prompt("Guess a letter or click cancel because your weak, your bloodline is weak and your children will perish");
 if guess === null {
 // exit
 break;
} else { 
  //update the game state with guess
  for (var j = 0; j < word.length; j++){
    if(word[j] === guess){
      mysteryWord[j] = guess;
      lettersRemaining--;  
    }
  }
}

 }
 // end of game loop 

e.innerHTML = mysteryWord.join(" ");

alert ("you have honored your house, the answer " + word + "." );

//kjguhjhjhljhkjojpojp'ojpo'pokopk'opk[okpihiuugcu]

var readyPlayerOne = true;
 //choose rando words
  var words =[
  'wine','Lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','Jamie','battle','death','wedding','Stark','heart tree',
  ];

 var word = words[Math.floor(Math.random() * words.length)];

 /*var el = document.getElementById("demo");
 el.innerHTML = words*/

 var mysteryWord = [];

 for ( var i =0; i < word.length; i++){
  mysteryWord[i] = "_";
 }

 // create var to keep track of letters that remain to be guessed
 var lettersRemaining = word.length;
 // game loop yo

 while (lettersRemaining > 0) {
  //show progress
  var el = document.getElementById("demo");
 el.innerHTML = mysteryWord.join(" ");
 //guess
 var guess = prompt("Guess a letter or click cancel because your weak, your bloodline is weak and your children will perish");
 if guess === null {
 // exit
 break;
} else { 
  //update the game state with guess
  for (var j = 0; j < word.length; j++){
    if(word[j] === guess){
      mysteryWord[j] = guess;
      lettersRemaining--;  
    }
  }
}

 }
 // end of game loop 

e.innerHTML = mysteryWord.join(" ");

alert ("you have honored your house, the answer " + word + "." );






