// const clock  = document.getElementById("clock");
// const back = document.getElementsByClassName("back");


// setInterval(function(){
//     let date  = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// },1000);

const clock = document.querySelector(".front");
// const dat = document.getElementsByClassName("back");
const dat = document.querySelector(".back");

setInterval(function(){
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
},1000);

let toggleState = false;

// Define the toggle function
function toggle() {
  toggleState = !toggleState; // Toggle the state between true and false
  return toggleState; // Return the current state
}

// Set up the timer to call the toggle function every 5 seconds
setInterval(function() {
  const currentState = toggle();
  console.log(currentState); // Output the current state to the console (you can use it for your specific purpose)
  flipCard(currentState);
}, 5000);



function flipCard(toggleState) {
    const card = document.querySelector('.card');
    let date = new Date();
    if (toggleState) {
      card.classList.add('flipped');
       dat.innerHTML = date.toLocaleDateString();
    } else {
      card.classList.remove('flipped');
    }
  }
  