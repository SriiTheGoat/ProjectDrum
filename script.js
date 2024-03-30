// Select all elements with class "drum" and get the total count by using .length inbuilt method.
var buttons = document.querySelectorAll(".drum");
var buttonCount = buttons.length;

// Loop through each button and add a click and cheak event listener
for (var i = 0; i < buttonCount; i++) {
    buttons[i].addEventListener("click", function () {
        // Get the inner HTML (content) of the clicked button
        var buttonInnerHTML = this.innerHTML;

        // Call functions to handle button animation and play sound
        buttonAnimation(buttonInnerHTML);
        possibleCase(buttonInnerHTML);
    });

    // Add keyboard event listener to each drum button
    document.addEventListener("keydown", function (event) {
        // Call functions to handle button animation and play sound
        buttonAnimation(event.key);
        possibleCases(event.key);
    });
}

// Function to handle different cases based on the key pressed
function possibleCases(key) {
    switch (key) {
        case "w":
            playSound("./sounds/tom-1.mp3");
            break;
        case "a":
            playSound("./sounds/tom-2.mp3");
            break;
        case "s":
            playSound("./sounds/tom-3.mp3");
            break;
        case "d":
            playSound("./sounds/tom-4.mp3");
            break;
        case "j":
            playSound("./sounds/snare.mp3");
            break;
        case "k":
            playSound("./sounds/crash.mp3");
            break;
        case "l":
            playSound("./sounds/kick-bass.mp3");
            break;
        default:
            break;
    }
}

// Function to play the specified sound file
function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

// Function to add animation to the pressed button
function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    // Remove the "pressed" class after a short delay
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 200)
}