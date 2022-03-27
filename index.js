let userInput = 30
const oneFoot = 3.28084
const oneGallon = 0.264172
const onePound = 2.20462



let feetResult = userInput * oneFoot
document.getElementById("feet-result").textContent = feetResult;
document.getElementById("feet-result-2").textContent = feetResult;

let gallonResult = userInput * oneGallon
document.getElementById("gallon-result").textContent = gallonResult;
document.getElementById("gallon-result-2").textContent = gallonResult;

let poundResult = userInput * onePound
document.getElementById("pound-result").textContent = poundResult;
document.getElementById("pound-result-2").textContent = poundResult;