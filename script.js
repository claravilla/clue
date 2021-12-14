const people = ["green", "mustard", "peacock", "plum", "scarlett", "white"];

const weapons = ["candlestick", "dagger", "pipe", "revolver", "rope", "wretch"];

const rooms = ["billard","ballroom","conservatory","dining","hall","kitchen","library","lounge","study"];


let game = {
    "person":"",
    "weapon":"",
    "room":""
}

function randomSelection(arr){
    return Math.floor(Math.random()*arr.length);
}

function startGame() {
    game.person = people[randomSelection(people)];
    game.weapon = weapons[randomSelection(weapons)];
    game.room = rooms[randomSelection(rooms)];
}

function resetGame() {
    game = {
        "person":"",
        "weapon":"",
        "room":""
    }

    // set right-answer to not display
    // set form to display
    // call start game
}


//to be called on form submit
function checkGuess(guessPerson,guessWeapon,guessRoom) {
    if ((guessPerson===game.person) && (guessWeapon===game.weapon) && (guessRoom===game.room) ) {
        // set form to not display
        // set right answer to display
    } else {
         // set form to not display
        // set wrong answer to display
    }
}


//to be called on try again
  function tryAgain() {
         // set form to display
        // set wrong answer not to  display
  }

//to be called on play again 
 function playAgain() {
      // set form to display
        // set right answer not to  display
 resetGame(); //---> might not need this if we display the form again
   startGame(); 

 }



 //add round counter