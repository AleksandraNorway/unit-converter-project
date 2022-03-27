
// metric conversion app
const oneFoot = 3.28084
const oneGallon = 0.264172
const onePound = 2.20462

function calC() {
let userInput = document.getElementById('textbox_id').value
let feetResult = userInput * oneFoot;
let gallonResult = userInput * oneGallon
let poundResult = userInput * onePound
document.getElementById("feet-result").textContent = feetResult.toFixed(3);
document.getElementById("feet-result-2").textContent = feetResult.toFixed(3);
document.getElementById("user-input").textContent = userInput;
document.getElementById("user-input-2").textContent = userInput;
document.getElementById("gallon-result").textContent = gallonResult.toFixed(3);
document.getElementById("gallon-result-2").textContent = gallonResult.toFixed(3);
document.getElementById("user-input-3").textContent = userInput;
document.getElementById("user-input-4").textContent = userInput;
document.getElementById("pound-result").textContent = poundResult.toFixed(3);
document.getElementById("pound-result-2").textContent = poundResult.toFixed(3);
document.getElementById("user-input-5").textContent = userInput;
document.getElementById("user-input-6").textContent = userInput;
}

// light and dark theme setup
var icon = document.getElementById("icon");
icon.onclick = function()   {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "./image/moon.png";
    } else  {
        icon.src = "./image/sun.png";
    }
}