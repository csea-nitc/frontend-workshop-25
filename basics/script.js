
let counterValue = 0;

const counterDisplay = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function updateDisplay() {
    counterDisplay.textContent = counterValue;
}

incrementButton.addEventListener('click', function() {
    counterValue++;
    updateDisplay();
});

decrementButton.addEventListener('click', function() {
    counterValue--;
    updateDisplay();
});

updateDisplay();