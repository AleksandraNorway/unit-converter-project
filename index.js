let userInput = 20
const oneFoot = 3.28084
const oneGallon = 0.264172
const onePound = 2.20462

// feet/meter conversion
let feetResult = userInput * oneFoot
document.getElementById("feet-result").textContent = feetResult.toFixed(3);
document.getElementById("feet-result-2").textContent = feetResult.toFixed(3);
document.getElementById("user-input").textContent = userInput;
document.getElementById("user-input-2").textContent = userInput;


// litre/gallon conversion
let gallonResult = userInput * oneGallon
document.getElementById("gallon-result").textContent = gallonResult.toFixed(3);
document.getElementById("gallon-result-2").textContent = gallonResult.toFixed(3);
document.getElementById("user-input-3").textContent = userInput;
document.getElementById("user-input-4").textContent = userInput;

// pound/kilo conversion
let poundResult = userInput * onePound
document.getElementById("pound-result").textContent = poundResult.toFixed(3);
document.getElementById("pound-result-2").textContent = poundResult.toFixed(3);
document.getElementById("user-input-5").textContent = userInput;
document.getElementById("user-input-6").textContent = userInput;

