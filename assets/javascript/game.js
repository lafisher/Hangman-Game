//wowowowowowowowowowowow i have no idea what i'm doing. let's rock 
 

  var words =['wine','Lanaster','poison','lion','direwolf','swords','crows','feast',
  'blood', 'dragon','Jamie','battle','death','wedding','Stark','heart tree',
  ]
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    $(document).ready(function() {

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
