console.log('refactoring');

const display = document.querySelector('.displayNumber');

const allBtns = document.querySelector('#allButtons');

// console.log(allBtns);

let value = 0;

const counterFunction = (e) => {
    const btn = e.target.id;
    if (btn === 'increment') {
        value += 1;
    } else if (btn === 'decrement') {
        value -= 1;
    } else {
        value = 0;
    }

    display.textContent = value;

    if (value >= 1) {
        display.style.color = 'green'
    }else if (value <= -1) {
        display.style.color = 'red'
    } else {
        display.style.color = 'black'
    }
}


allBtns.addEventListener('click', counterFunction); // adds click event to all three buttons at once.