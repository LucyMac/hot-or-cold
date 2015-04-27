$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(500);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

var computerChoice = "";    //we declare computerChoice outside of the newGame function so it can have a global scope. 
							//This way we can call it in subsequent functions: feedback and userAttempt. 
							//this means we do not use the word 'var' in newGame, we just say 'computerChoice' to avoid redefining its scope. 

//new game generates new computer number
var newGame = function () {
	computerChoice = Math.floor((Math.random() * 100) + 1); //generates a number between 1 and 100 and rounds it down to eliminate decimals. 
	console.log(computerChoice);
	userAttempt();
}

//creating feedback() function to compare user input with computer-generated number. 
//This is only executed when user makes a guess, see userAttempt() function below. 
var feedback = function(userInput, computerChoice) {
	console.log(userInput);
	var difference = Math.abs(userInput - computerChoice);
	if (userInput === computerChoice) {
		var node = document.createElement("li");         
		var textnode = document.createTextNode("nice one! The number was" + userInput);
		node.appendChild(textnode);
		document.getElementById("guessList").appendChild(node);
	}
	else if (difference > 15) {
		var node = document.createElement("li");         
		var textnode = document.createTextNode("cold");
		node.appendChild(textnode);
		document.getElementById("guessList").appendChild(node);
	}
	else if (difference > 10) {
		var node = document.createElement("li");         
		var textnode = document.createTextNode("hotter");
		node.appendChild(textnode);
		document.getElementById("guessList").appendChild(node);
	}
	else if (difference > 5) {
		var node = document.createElement("li");         
		var textnode = document.createTextNode("hot");
		node.appendChild(textnode);
		document.getElementById("guessList").appendChild(node);
	}
	else if (difference > 1) {
		var node = document.createElement("li");         
		var textnode = document.createTextNode("burning");
		node.appendChild(textnode);
		document.getElementById("guessList").appendChild(node);
	}
};

//each time user submits new guess, compare this guess with computer's choice
var userAttempt = function () {
	document.getElementById("guessButton").addEventListener("click", function(event){
    	event.preventDefault();
    	var userNumber = parseInt(document.getElementById("userGuess").value); //parseInt turns string into number
    	feedback(userNumber, computerChoice);
	});	
}

//Executing newGame once on page load. 
//Note: newGame also runs when ".clearfix li.new" is clicked. See index.html
newGame();

});

