
const convertButton = document.querySelector(".convert-button")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real //
    const currencyValueConverted = document.querySelector(".currency-value-converted")// outras moedas convertido//

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

//para  trocar o texto do valor digitado, aparecer no p-valor -1 usar o.innerHTML// 

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",  //documentção para formata e organizar o valor apresentado na coverção//
        currency:" BRL"
    }).format(inputCurrencyValue)
    
    currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US",{
        style:"currency",
        currency:"USD" //documentção para formata e organizar o valor apresentado na convertido//
    }).format(convertedValue)
   
}

convertButton.addEventListener("click", convertValues)