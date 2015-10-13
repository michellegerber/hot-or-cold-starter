
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


    var secretNumber;
    var newGame = function() {
        randomNumber100();
    };
//When a new game starts, the program will generate a secret number between 1 and 100 that the user must guess.
    var randomNumber100 = function() {
    secretNumber = Math.floor(Math.random()*100);
    };
    
    randomNumber100();
    
});