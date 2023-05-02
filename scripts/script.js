// Developed by Kaye Poblete
// celsius = (fahrenheit - 32)*(5/9);
// fahrenheit = (celsius * (9/5)) + 32;

"use strict";

window.onload = init;

function init(){
    const btnFtoC = document.getElementById("btnFtoC");
    const btnCtoF = document.getElementById("btnCtoF");
    const resetbtnFtoC = document.getElementById("resetbtnFtoC");
    const resetbtnCtoF = document.getElementById("resetbtnCtoF");

    if(btnFtoC != null){
        btnFtoC.onclick = onFahToCelBtn;
        resetbtnFtoC.onclick = onResetFtoC;
    }
    else if (btnCtoF != null){
        btnCtoF.onclick = onCelToFah;
        resetbtnCtoF.onclick = onResetCtoF;
    }
}

function onFahToCelBtn(){
    const fahrenheit1 = Number(document.getElementById("inputFahrenheit").value);
    const celsius1 = (fahrenheit1 - 32)*(5/9);

    if(fahrenheit1 == ""){
        document.getElementById("outputCelsius").value = "";
        document.getElementById("errorFtoCMessage").innerHTML = "ERROR: One or more of your inputs are invalid!";
        return;
    }

    document.getElementById("outputCelsius").value = celsius1.toFixed(2);
    document.getElementById("errorFtoCMessage").innerHTML = "";
}

function onResetFtoC(){
    document.getElementById("inputFahrenheit").value = "";
    document.getElementById("outputCelsius").value = "";
    document.getElementById("errorFtoCMessage").innerHTML = "";
}

function onCelToFah(){
    const celsius2 = Number(document.getElementById("inputCelsius").value);
    const fahrenheit2 = (celsius2 * (9/5)) + 32;

    if(celsius2 == ""){
        document.getElementById("outputFahrenheit").value = "";
        document.getElementById("errorCtoFMessage").innerHTML = "ERROR: One or more of your inputs are invalid!";
        return;
    }

    document.getElementById("outputFahrenheit").value = fahrenheit2.toFixed(2);
    document.getElementById("errorCtoFMessage").innerHTML = "";
}

function onResetCtoF(){
    document.getElementById("inputCelsius").value = "";
    document.getElementById("outputFahrenheit").value = "";
    document.getElementById("errorCtoFMessage").innerHTML = "";
}
