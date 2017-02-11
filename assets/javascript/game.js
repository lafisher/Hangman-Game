 //wowowowowowowowowowowow i have no idea what i'm doing. let's rock 
 
 //choose rando words
  var words =[
  'wine','lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','jamie','battle','death','wedding','stark','heart tree',
  ];

  var word = words[Math.floor(Math.random() * words.length)];
  var mysteryWord = word.split("");
  var lettersRemaining = mysteryWord.length;
  var myGuesses =[];
  var blanksWord = [];
  $( document ).ready(function() {
      var setUpGame = function(){
   } 
     
     setUpBlanks();
});

document.onkeyup = function(event) {
  var pressedKey = event.key;
  // supossedly jquery for restricting to a-z key press only, does not appear to work
  $('.alphaonly').on('keyup blur', function(){
    var node = $(this);
    node.val( node.val().replace(/[^a-z]/g,'') ); 
});
  
  myGuesses.push(pressedKey);
  $(".wrongletters").append(pressedKey);

  //console.log(myGuesses);

};
  var setUpBlanks = function(){
  for ( var i=0 ; i < mysteryWord.length; i++){
  $(".gallows").append("_");
  blanksWord.push("_");
//attempt to make letters replace blanks, code not broken butdoes not work
  if(word[i] === myGuesses[i]) {
    $(".gallows").append(mysteryWord);
  };
}
};


// my first stab at the game play, worked, was very clunky
// while (lettersRemaining > 0) {
// // var guess = prompt("Guess a letter or click cancel because you're weak, your bloodline is weak and your children will perish");
// if ( guess === null ){
//  // exit
//   break;
//  } else { 
//  //update the game with guess
//   for (var j = 0; j < word.length; j++){
//     if(word[j] === guess){
//        mysteryWord[j] = guess;
//        lettersRemaining--;  
//     }
//    }
//  }

//   }

// end of game loop yo

// alert(mysteryWord.join(" "));

// alert ("you have honored your house, the answer is " + word + "." );

        //--------------------------//
      // pseudo code //
// 1- create word array- done
// 2- create letter array - done, not needed, removed
// create random number generator to loop through words - done
// create blanks in place of word - done
// replace blanks with correct letter guesses - had it working currently broken 
// show guessed letters - currently showing, but not being added to the word
// show letters left unguessed ??
// show "hangman" being built with wrong each wrong letter guess ??
// link sound to the initialize onkey event ??
// create audio event for corect guesses/wrong guesses ??
// create reset button ??
// create end you won alert - had one, i broke it. 
// create you lost alert (need to have limit to wrong guesses) ??








