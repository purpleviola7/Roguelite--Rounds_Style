let text = "Hello";
alert(text);
document.body.style.backgroundColor = "green"
const button = document.getElementById('submitBtn');
let input = document.getElementById('userInput');
let display = document.getElementById('display');
button.addEventListener('click', () => {
let number = Number(input.value)
if(number === 0){
display.textContent = "Your number is-- Zero"
}
else if(number > 0){
  if(number % 2 === 0){
display.textContent = "Your number is-- Positive, Even"
  }
  else{
    display.textContent = "Your number is-- Positive, Odd"
  }
}
else if(number < 0){
  if(number % 2 === 0){
    display.textContent = "Your number is-- Negative, Even"
  }
else{
  display.textContent = "Your number is-- Negative, Odd"
}
}
})
