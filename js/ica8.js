let body = document.querySelector('hamburger');
hamburger.addEventListener('click', giveAlert);

function giveAlert() {
    alert('MM... Delicious');
}

const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// the text that the button is initialized with
const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "Order Submitted";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener(
    "click",
    eventListener,
    {
      passive: true,
      once: true
    }
  );
}

// when the reset button is clicked, the example button is reset,
// and allowed to have its state updated again
resetButton.addEventListener(
  "click",
  () => {
    buttonToBeClicked.textContent = initialText;
    addListener();
  }
);

addListener();