console.log('hello world');

// grab the display from the DOM
const display = document.querySelector('.displayNumber');

// grab the buttons from the Dom
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

// functions for click events
let value = 0; // must be globally scoped for all functions to use

const increaseFunction = () => {
    value += 1;
    display.textContent = value;
}

const decreaseFunction = () => {
    value -= 1;
    display.textContent = value;
}

const resetFunction = () => {
    value = 0;
    display.textContent = value;
}

// add click events to buttons
incrementBtn.addEventListener('click', increaseFunction);
decrementBtn.addEventListener('click', decreaseFunction);
resetBtn.addEventListener('click', resetFunction);