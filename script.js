
function loadReport() {
    alert("Loading weather report...");
}

function hideCookieBox() {
    var element = document.querySelector(".cookie-box");
    element.remove();
}

//convert input degrees in farenheit to celsius
function farenheitToCelsius(tempF) {
    return Math.round((tempF - 32) * 5 / 9);
}

//convert input degrees in celsius to farenheit
function celsiusToFarenheit(tempC) {
    return Math.round(tempC * 9 / 5 + 32);
}

//convert text value between degrees celsius and farenheit and
//replace their text values with the new converted value
function changeTempScale(element) {

    var highTemps = document.querySelectorAll(".temp-high");
    var lowTemps = document.querySelectorAll(".temp-low");
    if (element.value == "celsius") {
        for (var i = 0; i < highTemps.length; i++) {
            highTemps[i].innerText = farenheitToCelsius(parseInt(highTemps[i].innerText)) + "°";
        }
        for (var i = 0; i < lowTemps.length; i++) {
            lowTemps[i].innerText = farenheitToCelsius(parseInt(lowTemps[i].innerText)) + "°";
        }
    }
    if (element.value == "farenheit") {
        for (var i = 0; i < highTemps.length; i++) {
            highTemps[i].innerText = celsiusToFarenheit(parseInt(highTemps[i].innerText)) + "°";
        }
        for (var i = 0; i < lowTemps.length; i++) {
            lowTemps[i].innerText = celsiusToFarenheit(parseInt(lowTemps[i].innerText)) + "°";
        }
    }
}