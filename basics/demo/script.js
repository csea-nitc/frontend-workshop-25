
let count = 0;

const valueEl = document.querySelector("h3");
const buttons = document.querySelectorAll("button");

const increaseBtn = buttons[0];
const decreaseBtn = buttons[1];
const resetBtn = buttons[2];

function render() {
  valueEl.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count++;
  render();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

render();
