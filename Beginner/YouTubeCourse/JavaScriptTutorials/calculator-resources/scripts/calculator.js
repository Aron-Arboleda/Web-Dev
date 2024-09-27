let calculation = localStorage.getItem('calculation') ? localStorage.getItem('calculation') : '';
console.log(calculation);

updateText();

function updateCalculation(char){
  calculation += char;
  localStorage.setItem('calculation', calculation);
  console.log(calculation);
  updateText();
}
function resetCalculation(){
  calculation = '';
  console.log(calculation);
  updateText();
}
function updateText() {
  const prompt = document.querySelector('.js-text');
  prompt.innerText = calculation;
}