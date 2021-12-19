//variables

const people = ["green", "mustard", "peacock", "plum", "scarlett", "white"];

const rooms = [
  "billard",
  "ballroom",
  "conservatory",
  "dining",
  "hall",
  "kitchen",
  "library",
  "lounge",
  "study",
];

const weapons = ["candlestick", "dagger", "pipe", "revolver", "rope", "wrench"];

let game = {
  person: "",
  room: "",
  weapon: "",
};

let rounds = 0;
//eventListeners
document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("submit-guess").addEventListener("click", checkGuess);
document.getElementById("try-again").addEventListener("click", tryAgain);
document.getElementById("play-again").addEventListener("click", playAgain);

//functions to run the game

//select a random element in an array
function randomSelection(arr) {
  return Math.floor(Math.random() * arr.length);
}

//assigne value to the game solution and display the guess form
function startGame() {
  rounds = 0;
  game.person = people[randomSelection(people)];
  game.room = rooms[randomSelection(rooms)];
  game.weapon = weapons[randomSelection(weapons)];

  console.log(game);

  document.getElementById("start").setAttribute("class", "invisible");
  document.getElementById("guess-form").removeAttribute("class");
  document.getElementById("guess-form").setAttribute("class", "guess-form-visible");
}

//to be called on form submit - check that value submitted matched the game solution and display the right/wrong section

function checkGuess() {
  rounds++;
  let guessPerson = document.getElementById("person").value;
  let guessRoom = document.getElementById("room").value;
  let guessWeapon = document.getElementById("weapon").value;
  console.log(guessPerson, guessRoom, guessWeapon);
  let rightGuess = 0;



  if (guessPerson === game.person) {
    rightGuess++;
  };

  if (guessRoom === game.room ){
    rightGuess++;
 };

 if (guessWeapon === game.weapon ){
  rightGuess++;
};


if (rightGuess===3) {
  document.getElementById("guess-form").removeAttribute("class"); // set form to not display
  document.getElementById("guess-form").setAttribute("class", "invisible");
  document.getElementById("final-guess-count").textContent = `Well done Detective, you solved the murder at your ${rounds} accusation!`
  document.getElementById("right-answer").classList.remove("invisible"); //set right paragraph to show

} else {
     document.getElementById("guess-form").removeAttribute("class"); // set form to not display
    document.getElementById("guess-form").setAttribute("class", "invisible");
    document.getElementById("right-guess").innerHTML = `Accusation #${rounds} <br> Right guesses: ${rightGuess}`;
    document.getElementById("wrong-answer").classList.remove("invisible"); // set wrong answer to display

}


  // if (
  //   guessPerson === game.person &&
  //   guessRoom === game.room &&
  //   guessWeapon === game.weapon
  // ) {
  //   document.getElementById("guess-form").removeAttribute("class"); // set form to not display
  //   document.getElementById("guess-form").setAttribute("class", "invisible");
  //   document.getElementById("right-answer").classList.remove("invisible"); //set right paragraph to show
  // } else {
  //   document.getElementById("guess-form").removeAttribute("class"); // set form to not display
  //   document.getElementById("guess-form").setAttribute("class", "invisible");
  //   document.getElementById("wrong-answer").classList.remove("invisible"); // set wrong answer to display
  // }


  
}

//to be called on try again - display the form again
function tryAgain() {
  // set form to display
  document.getElementById("person").value ="" ;
  document.getElementById("room").value ="" ;
  document.getElementById("weapon").value ="" ;
 
  document.getElementById("guess-form").classList.remove("invisible");
  


  // set wrong answer not to  display
  document.getElementById("wrong-answer").classList.add("invisible");

  //empty the right guess sentence
  document.getElementById("right-guess").innerHTML="";
}

//to be called on play again - remove the right paragraph and re-start the game
function playAgain() {
  // set right answer not to  display
  document.getElementById("person").value ="" ;
  document.getElementById("room").value ="" ;
  document.getElementById("weapon").value ="" ;
  document.getElementById("final-guess-count").textContent = "";
  document.getElementById("right-answer").classList.add("invisible");

  startGame();
}

//add round counter
