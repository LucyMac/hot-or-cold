$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//new game generates new computer number
var newGame = function () {
	var computerChoice = Math.random() * 100 {     //getting the computer to generate a number 
		return Math.round(computerChoice);    //could this be Math.random.round? 
	}
	userAttempt();
}

//each time user submits new guess, compare this guess with computer's choice
var userAttempt = function () {
	document.getElementById("guessButton").onclick;
    var userNumber = document.getElementById("userGuess").val("");
}

//retrieving the value
var userInput = $("input").val();

//comparing userInput to computerChoice on clicking the button
$("guessButton")
	.click(
		feedback(userInput, computerChoice) {        //I'm calling the feedback function before I've defined it. Is this a problem?
			var feedback = function(userInput, computerChoice) {
				if (userInput === computerChoice) {
					var node = document.createElement("li");         
					var textnode = document.createTextNode("nice one! The number was" + userInput);
					node.appendChild(textnode);
					document.getElementById("guessList").appendChild(node);
				}
				else if ((userInput - computerChoice) > 15 || -15) {
					var node = document.createElement("li");         
					var textnode = document.createTextNode("cold");
					node.appendChild(textnode);
					document.getElementById("guessList").appendChild(node);
				}
				else if ((userInput - computerChoice) > 10 || -10) {
					var node = document.createElement("li");         
					var textnode = document.createTextNode("hotter");
					node.appendChild(textnode);
					document.getElementById("guessList").appendChild(node);
				}
				else if ((userInput - computerChoice) > 5 || -5) {
					var node = document.createElement("li");         
					var textnode = document.createTextNode("hot");
					node.appendChild(textnode);
					document.getElementById("guessList").appendChild(node);
				}
				else if ((userInput - computerChoice) > 1 || -1) {
					var node = document.createElement("li");         
					var textnode = document.createTextNode("burning");
					node.appendChild(textnode);
					document.getElementById("guessList").appendChild(node);
				}
			};
	
	});
	
});


