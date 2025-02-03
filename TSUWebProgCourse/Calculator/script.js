const resultScreen = document.getElementById("resultScreen");
const firstNumInput = document.getElementById("firstNumInput");
const secondNumInput = document.getElementById("secondNumInput");

function updateResultScreen(number, operation) {
  resultScreen.value = number;
  alert(
    `Calculation: \n${getNum(firstNumInput)} ${operation} ${getNum(
      secondNumInput
    )} = ${number}`
  );
}

function getNum(numInput) {
  if (isNaN(parseInt(numInput.value))) {
    return 0;
  }
  return parseInt(numInput.value);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Can't divide by zero!";
  }
  return x / y;
}
