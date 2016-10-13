'use strict';
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
//
// #### Challenge One: Group "Hover" Handler
//
// * Add a event listeners on each of your buttons that log `"Entered <textContent> button"` when a user mouses over a button.
//
// * Add new event listeners on each of your buttons that log `"Left <textContent> button"` when a user mouses out.
//
// * Add a single event listener on all three buttons as a group. In your group event handler, log the `textContent` of each button when a user clicks the button.

function buttonEntry () {
  console.log("Entered",this.textContent,"button");
}

function buttonExit () {
  console.log("Left",this.textContent,"button");
}

function parentClick (event) {
  if (event.target.id!==this.id) {
    console.log(event.target.textContent);
  }
}

var buttonDiv=document.getElementById('controls');
buttonDiv.addEventListener('click', parentClick);

var button;
for (var i in buttonDiv.childNodes) {
  button=buttonDiv.childNodes[i];
  button.addEventListener('mouseenter', buttonEntry);
  button.addEventListener('mouseleave', buttonExit);
}

// #### Challenge Two: Button Toggle
//
// Alter your event listeners to toggle the on/off state of each bulb. All three bulbs can be on or off from now on.
