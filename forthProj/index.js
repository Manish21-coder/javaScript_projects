let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const gussSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHig = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement('p');

let preGuess =[] ;
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);

    })
}

function validateGuess(guess){
 if(guess< 0||guess === " " || isNaN(guess) || guess >100){
     
     alert("Please enter a number between 1 and 99. and ");
 }else{
    preGuess.push(guess);
    if(numGuess ===11){
        displayGuess(guess);
        displayMessage(`game over the random number was ${randomNumber}`);

    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
 }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("you Guessted it right you won the game.");
        endGame();
    }else if(guess<randomNumber){
        displayMessage("your guess is Too low");
    }else if(guess>randomNumber){
        displayMessage("you guess is Too high");
    }

}

function displayGuess(guess){

    userInput = '';
    gussSlot.innerHTML += `${guess } ,`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;


}

function displayMessage (message){
  lowOrHig.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value ='';
  userInput.setAttribute("disabled","");
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame= false;
  newGame();

    
}

function newGame() {
    const StartButton = querySelector("#newGame");
    
    StartButton.addEventListener('click',function(){

     randomNumber = Math.floor(Math.random() * 100 + 1);
      preGuess = [];
      numGuess = 1;
      gussSlot.innerHTML = '';
      remaining.innerHTML = `${11-numGuess}`;
      userInput.removeAttribute("disabled");
      startOver.removeChild(p);

      playGame= true;
    })
}

