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

// function buttonEntry () {
//   console.log("Entered",this.textContent,"button");
// }
//
// function buttonExit () {
//   console.log("Left",this.textContent,"button");
// }
//
// function parentClick (event) {
//   if (event.target.id!==this.id) {
//     console.log(event.target.textContent);
//   }
// }
//
// var buttonDiv=document.getElementById('controls');
// buttonDiv.addEventListener('click', parentClick);
//
// var button;
// for (var i in buttonDiv.childNodes) {
//   button=buttonDiv.childNodes[i];
//   button.addEventListener('mouseenter', buttonEntry);
//   button.addEventListener('mouseleave', buttonExit);
// }

// #### Challenge Two: Button Toggle
//
// Alter your event listeners to toggle the on/off state of each bulb. All three bulbs can be on or off from now on.

function onOff(stoplight, color) {
    console.log('stoplight is', stoplight, 'with class', stoplight.className);
    if (stoplight.className === 'bulb toggleOff') {
        stoplight.className = 'bulb toggleOn';
        stoplight.style.backgroundColor = color;
    } else if (stoplight.className === 'bulb toggleOn') {
        stoplight.className = 'bulb toggleOff';
        stoplight.removeAttribute('style');
    } else {
        stoplight.className = 'bulb toggleOff';
    }
}

function buttonEntry(event) {
    var who = event.target;
    console.log("Entered", who.textContent, "button");
    var stoplight = who.parentNode.nextElementSibling.childNodes;
    switch (who.textContent) {
        case ('Go'):
            console.log(stoplight[1]);
            stoplight[1].style.backgroundColor = 'green';
            break;
        case ('Slow'):
            console.log(stoplight[3]);
            stoplight[3].style.backgroundColor = 'yellow';
            break;
        case ('Stop'):
            console.log(stoplight[5]);
            stoplight[5].style.backgroundColor = 'red';
            break;
    }
}

function buttonExit(event) {
    var who = event.target;
    console.log("Left", who.textContent, "button");
    var stoplights = who.parentNode.nextElementSibling.childNodes;
    switch (who.textContent) {
        case ('Go'):
            console.log(stoplights[1]);
            if (stoplights[1].class === 'bulb toggleOff') {
                stoplights[1].removeAttribute('style');
            }
            break;
        case ('Slow'):
            console.log(stoplights[3]);
            if (stoplights[1].class === 'bulb toggleOff') {
                stoplights[3].removeAttribute('style');
            }
            break;
        case ('Stop'):
            console.log(stoplights[5]);
            if (stoplights[1].class === 'bulb toggleOff') {
                stoplights[5].removeAttribute('style');
            }
            break;
    }
}

function parentClick(event) {
    var source = event.target;
    var stoplights = event.target.parentElement.nextElementSibling.childNodes;
    if (source !== event.currentTarget) {
        switch (source.textContent) {
            case ('Go'):
                console.log(stoplights[1]);
                onOff(stoplights[1], 'green');
                break;
            case ('Slow'):
                console.log(stoplights[3]);
                onOff(stoplights[3], 'yellow');
                break;
            case ('Stop'):
                console.log(stoplights[5]);
                onOff(stoplights[5], 'red');
                break;
        }
    }
}

var buttonDiv = document.getElementById('controls');
buttonDiv.addEventListener('click', parentClick);

var button;
var buttons = buttonDiv.childNodes;
for (var i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('mouseenter', buttonEntry);
    button.addEventListener('mouseleave', buttonExit);
}
