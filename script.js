const seletorUm = document.querySelector(".select1")
const seletorDois = document.querySelector(".select2")

const inputVar = document.querySelector(".inputValor")

const botao = document.querySelector(".botao")

const moeda1 = document.querySelector(".moeda1")
const moeda2 = document.querySelector(".moeda2")

const bandeira1 = document.querySelector(".bandeira1")
const bandeira2 = document.querySelector(".bandeira2")

const valor1 = document.querySelector(".valor1")
const valor2 = document.querySelector(".valor2")

let valorDolar = 5.58
let valorEuro = 6.09
let valorLibra = 7.12
let valorBitcoin = 332629.99

botao.addEventListener("click", converter)
seletorDois.addEventListener("change", troqueiMoeda)

function converter() {
    caixaValor = inputVar.value

    valor1.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(caixaValor)

    if (seletorDois.value == 'dolar') {
        valor2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(caixaValor/valorDolar)
    }

    if (seletorDois.value == 'euro') {
        valor2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(caixaValor/valorEuro)
    }

    if (seletorDois.value == 'libra') {
        valor2.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(caixaValor/valorLibra)
    }

     if (seletorDois.value == 'bitcoin') {
         valor2.innerHTML = new Intl.NumberFormat("en-US", {
             style: "currency",
             currency: "BTC"
         }).format(caixaValor/valorBitcoin)
     }
}

function troqueiMoeda() { 
    
    let moeda = seletorDois.value

    if (moeda == 'dolar') {
        bandeira2.src = "./assets/dolar.png"
        moeda2.innerHTML = "Dolar Americano"
    }

    if (moeda == 'euro') {
        bandeira2.src = "./assets/euro.png"
        moeda2.innerHTML = "Euro"
    }

    if (moeda == 'libra') {
        bandeira2.src = "./assets/libra.png"
        moeda2.innerHTML = "Libra Esterlina"
    }

    if (moeda == 'bitcoin') {
        bandeira2.src = "./assets/bitcoin.png"
        moeda2.innerHTML = "Bitcoin Cripto"
    }
    
    converter()
}   