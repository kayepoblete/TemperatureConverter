// Developed by Kaye Poblete
// celsius = (fahrenheit - 32)*(5/9);
// fahrenheit = (celsius * (9/5)) + 32;

"use strict"

window.onload = init;

function init(){
    const btnFtoC = document.getElementById("btnFtoC");
    const btnCtoF = document.getElementById("btnCtoF");

    if(btnFtoC != null){
        btnFtoC.onclick = onCelToFah;
    }
    else if (btnCtoF != null){
        btnCtoF.onclick = onFahToCelBtn;
    }
}

function onFahToCelBtn(){
    const fahrenheit1 = Number(document.getElementById("inputFahrenheit").value);
    const celsius1 = (fahrenheit1 - 32)*(5/9);

    document.getElementById("outputCelsius").value = celsius1.toFixed(2);
}

function onCelToFah(){
    const celsius2 = Number(document.getElementById("inputCelsius").value);
    const fahrenheit2 = (celsius2 * (9/5)) + 32;

    document.getElementById("outputFahrenheit").value = fahrenheit2.toFixed(2);
}
