let calculator = document.querySelector('.calculator');
const display = document.getElementById('display');
let operators = document.querySelector('.operator');
let button = document.querySelector('button');

// let string = "";
// let arr = Array.from(button);

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculateDisplay() {
  display.value = eval(display.value);
}
