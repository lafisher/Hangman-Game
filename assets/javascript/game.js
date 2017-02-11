//wowowowowowowowowowowow i have no idea what i'm doing. let's rock 
 
 var readyPlayerOne = true;
 //choose rando words
  var words =[
  'wine','lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','jamie','battle','death','wedding','Stark','heart tree',
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


