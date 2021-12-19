//---GAME VARIABLES----
const green = {
  name: "Rev Green",
  value: "green",
};

const mustard = {
  name: "Colonel Mustard",
  value: "mustard",
};

const peacock = {
  name: "Mrs peacock",
  value: "peacock",
};

const plum = {
  name: "Professor Plum",
  value: "plum",
};

const scarlett = {
  name: "Miss Scarlett",
  value: "scarlett",
};

const white = {
  name: "Mrs White",
  value: "white",
};

const people = [green, mustard, peacock, plum, scarlett, white];

const billard = {
  name: "Billiard Room",
  value: "billiard",
};

const ballroom = {
  name: "Ballroom",
  value: "ballroom",
};

const conservatory = {
  name: "Conservatory",
  value: "conservatory",
};

const dining = {
  name: "Dining Room",
  value: "dining",
};

const hall = {
  name: "Hall",
  value: "hall",
};

const kitchen = {
  name: "Kitchen",
  value: "kitchen",
};

const library = {
  name: "Library",
  value: "library",
};

const lounge = {
  name: "Lounge",
  value: "lounge",
};

const study = {
  name: "Study",
  value: "study",
};

const rooms = [
  billard,
  ballroom,
  conservatory,
  dining,
  hall,
  kitchen,
  library,
  lounge,
  study,
];

const candlestick = {
  name: "Candlestick",
  value: "candlestick",
};

const dagger = {
  name: "Dagger",
  value: "dagger",
};

const pipe = {
  name: "Lead Pipe",
  value: "pipe",
};

const revolver = {
  name: "Revolver",
  value: "revolver",
};

const rope = {
  name: "Rope",
  value: "rope",
};

const wrench = {
  name: "Wrench",
  value: "wrench",
};

const weapons = [candlestick, dagger, pipe, revolver, rope, wrench];

let game = {
  person: "",
  room: "",
  weapon: "",
};

let rounds = 0;

//---FUNCTIONS TO RUN THE GAME---

//eventListeners
document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("submit-guess").addEventListener("click", checkGuess);
document.getElementById("try-again").addEventListener("click", tryAgain);
document.getElementById("play-again").addEventListener("click", playAgain);
document.getElementById("solution").addEventListener("click", giveSolution);

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
  document
    .getElementById("guess-form")
    .setAttribute("class", "guess-form-visible");
}

//to be called on form submit - check that value submitted matched the game solution and display the right/wrong section

function checkGuess() {
  rounds++;
  let guessPerson = document.getElementById("person").value;
  let guessRoom = document.getElementById("room").value;
  let guessWeapon = document.getElementById("weapon").value;
  console.log(guessPerson, guessRoom, guessWeapon);
  let rightGuess = 0;

  if (guessPerson === game.person.value) {
    rightGuess++;
  }

  if (guessRoom === game.room.value) {
    rightGuess++;
  }

  if (guessWeapon === game.weapon.value) {
    rightGuess++;
  }

  if (rightGuess === 3) {
    console.log(rounds);
    document.getElementById("guess-form").removeAttribute("class"); // set form to not display
    document.getElementById("guess-form").setAttribute("class", "invisible");
    document.getElementById(
      "solution-par"
    ).textContent = `Well done Detective, you solved the murder at your ${rounds} accusation!`;
    document.getElementById("right-answer").classList.remove("invisible"); //set right paragraph to show
  } else {
    document.getElementById("guess-form").removeAttribute("class"); // set form to not display
    document.getElementById("guess-form").setAttribute("class", "invisible");
    document.getElementById(
      "right-guess"
    ).innerHTML = `Accusation #${rounds} <br> Right guesses: ${rightGuess}`;
    document.getElementById("wrong-answer").classList.remove("invisible"); // set wrong answer to display
  }
}

//to be called on try again - display the form again
function tryAgain() {
  // set form to display
  document.getElementById("person").value = "";
  document.getElementById("room").value = "";
  document.getElementById("weapon").value = "";

  document.getElementById("guess-form").classList.remove("invisible");

  // set wrong answer not to  display
  document.getElementById("wrong-answer").classList.add("invisible");

  //empty the right guess sentence
  document.getElementById("right-guess").innerHTML = "";
}

//to be called on h. poirot - reveal solutions
function giveSolution() {
  document.getElementById("wrong-answer").setAttribute("class", "invisible"); // set wrong answer to not display
  document.getElementById(
    "solution-par"
  ).innerHTML = `After wrong accusation #${rounds} you decided to call Hercule Poirot to help you. <br>
     Poirot says: <br>"${game.person.name} killed Dr. Black in the ${game.room.name} with the ${game.weapon.name}."`;
  document.getElementById("right-answer").classList.remove("invisible");
}

//to be called on play again - remove the right paragraph and re-start the game
function playAgain() {
  // set right answer not to  display
  document.getElementById("person").value = "";
  document.getElementById("room").value = "";
  document.getElementById("weapon").value = "";
  document.getElementById("solution-par").textContent = "";
  document.getElementById("right-answer").classList.add("invisible");

  startGame();
}

//add round counter
