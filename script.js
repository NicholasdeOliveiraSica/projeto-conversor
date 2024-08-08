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

// REAL //
let realDolar = 5.58
let realEuro = 6.09
let realLibra = 7.12
let realBitcoin = 332629.99

// DOLAR //

let dolarEuro = 0.92
let dolarLibra = 0.78
let dolarBitcoin = 59744.51

// EURO //

let euroDolar = 1.09
let euroLibra = 0.86
let euroBitcoin = 54738.26

botao.addEventListener("click", converter)
seletorDois.addEventListener("change", troqueiMoeda)
seletorUm.addEventListener("change", troqueiMoedaNoSeletorUm)

function converter() {
    caixaValor = inputVar.value



    if(seletorUm.value == 'real'){

        valor1.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(caixaValor)


        if (seletorDois.value == 'dolar') {
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(caixaValor/realDolar)
        }

        if (seletorDois.value == 'euro') {
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(caixaValor/realEuro)
        }

        if (seletorDois.value == 'libra') {
            valor2.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(caixaValor/realLibra)
        }

        if (seletorDois.value == 'bitcoin') {
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(caixaValor/realBitcoin)
            }
    }


    if(seletorUm.value == 'dolar'){
        valor1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(caixaValor)

        if (seletorDois.value == 'dolar') {
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(caixaValor)
        }

        if (seletorDois.value == 'euro') {
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(caixaValor/dolarEuro)
        }

        if (seletorDois.value == 'libra') {
            valor2.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(caixaValor/dolarLibra)
        }

        if (seletorDois.value == 'bitcoin') {
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(caixaValor/dolarBitcoin)
        }
    }


    if(seletorUm.value == 'euro'){
        valor1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(caixaValor)

        if (seletorDois.value == 'dolar') {
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(caixaValor/euroDolar)
        }

        if (seletorDois.value == 'euro') {
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(caixaValor)
        }

        if (seletorDois.value == 'libra') {
            valor2.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(caixaValor/euroLibra)
        }

        if (seletorDois.value == 'bitcoin') {
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(caixaValor/euroBitcoin)
        }
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

function troqueiMoedaNoSeletorUm() {

    select1 = seletorUm.value

    if (select1 == 'dolar') {
        bandeira1.src = "./assets/dolar.png"
        moeda1.innerHTML = "Dolar Americano"
    }

    if (select1 == 'euro') {
        bandeira1.src = "./assets/euro.png"
        moeda1.innerHTML = "Euro"
    }

    if (select1 == 'real') {
        bandeira1.src = "./assets/real.png"
        moeda1.innerHTML = "Real Brasileiro"
    }

    converter()
}