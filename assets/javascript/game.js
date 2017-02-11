//wowowowowowowowowowowow i have no idea what i'm doing. let's rock 
 
 var readyPlayerOne = true;
 //choose rando words
  var words =[
  'wine','lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','jamie','battle','death','wedding','stark','heart tree',
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
  alert(mysteryWord.join(" "));
 //guess
 var guess = prompt("Guess a letter or click cancel because you're weak, your bloodline is weak and your children will perish");
 if ( guess === null ){
 // exit
 break;
} else { 
  //update the game with guess
  for (var j = 0; j < word.length; j++){
    if(word[j] === guess){
      mysteryWord[j] = guess;
      lettersRemaining--;  
    }
  }
}

 }
 // end of game loop yo

alert(mysteryWord.join(" "));

alert ("you have honored your house, the answer is " + word + "." );

// 1- create word array- done
// 2- create letter array - done, not needed, removed
// create random number generator to loop through words - done
// create blanks in place of word - done
// replace blanks with correct letter guesses - done
// show guessed letters ??
// show letters left unguessed ??
// show "hangman" being built with wrong each wrong letter guess ??
// create onkeyup event to start game with sound ??
// create audio event for corect guesses/wrong guesses ??
// create reset button ??
// create end you won alert - done
// create you lost alert (need to have limit to wrong guesses) ??








