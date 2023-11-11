let from = document.getElementById('from')
let to = document.getElementById('to')
let convertButton = document.querySelector('.convertButton')
let temperatureAmount = document.getElementById('temperatureAmount')
let calculatedResult;
convertButton.disabled = true
from.addEventListener('change',()=>{
    if(from.value == 'Select-One' || to.value == 'Select-One' || temperatureAmount.value == 0)
        convertButton.disabled = true
    else{
        convertButton.disabled = false
    }
})
to.addEventListener('change',()=>{
    if(from.value == 'Select-One' || to.value == 'Select-One' || temperatureAmount.value == 0){
        convertButton.disabled = true
    }else{
        convertButton.disabled = false
    }
})
temperatureAmount.addEventListener('input', ()=>{
    if(from.value == 'Select-One' || to.value == 'Select-One' || temperatureAmount.value == 0){
        convertButton.disabled = true
    }else{
        convertButton.disabled = false
    }
})
convertButton.addEventListener('click', ()=>{
    let from = document.getElementById('from')
    let to = document.getElementById('to')
    let convertedAnswer = document.querySelector('.convertedAnswer')
    convertedAnswer.classList.add('convertedAnswerDisplayed')
    if(from.value == 'Celsius' && to.value == 'Fahrenheit'){
        calculatedResult = Math.floor((temperatureAmount.value * 9/5) + 32 )
        convertedAnswer.innerHTML = "∴" + ' ' + temperatureAmount.value +"°C" + " "+ '=' + " "+ calculatedResult+'°F'
    }
    else if(from.value == 'Celsius' && to.value == 'Kelvin'){
        calculatedResult = Math.floor((temperatureAmount.value * 1) + 273.15)
        convertedAnswer.innerHTML = "∴" + ' ' + temperatureAmount.value +"°C" + " "+ '=' + " "+ calculatedResult+'K'
    }
    else if(from.value == 'Celsius' && to.value == 'Celsius'){
        calculatedResult = "It's still" + " " +temperatureAmount.value+"°C"
        convertedAnswer.innerHTML = calculatedResult
    }
    else if(from.value == 'Fahrenheit' && to.value == 'Celsius'){
        calculatedResult = Math.floor((temperatureAmount.value - 32) * 5/9)
        convertedAnswer.innerHTML = "∴" + ' ' + temperatureAmount.value +"°F" + " "+ '=' + " "+ calculatedResult+'°C'
    }
    else if(from.value == "Fahrenheit" && to.value == "Kelvin"){
        calculatedResult = Math.floor((temperatureAmount.value - 32) * 5/9 + 273.15)
        convertedAnswer.innerHTML = "∴" + ' ' + temperatureAmount.value +"°F" + " "+ '=' + " "+ calculatedResult+'K'
    }
    else if(from.value == "Fahrenheit" && to.value == "Fahrenheit"){
        calculatedResult = "It's still" + " " +temperatureAmount.value+"°F"
        convertedAnswer.innerHTML = calculatedResult
    }
    else if(from.value == 'Kelvin' && to.value == 'Celsius'){
        calculatedResult = Math.floor((temperatureAmount.value - 273.15))
        convertedAnswer.innerHTML = "∴" + ' ' + temperatureAmount.value +"K" + " "+ '=' + " "+ calculatedResult+'°C'
    }
    else if(from.value == 'Kelvin' && to.value == 'Fahrenheit'){
        calculatedResult = Math.floor((temperatureAmount.value - 273.15) * 9/5 + 32)
        convertedAnswer.innerHTML = calculatedResult
    }
    else if(from.value == "Kelvin" && to.value == "Kelvin"){
        calculatedResult = "It's still" + " " +temperatureAmount.value+"K"
        convertedAnswer.innerHTML = calculatedResult
    }
})