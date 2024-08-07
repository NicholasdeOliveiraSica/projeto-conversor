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

let valorDolar = 5.66
let valorEuro = 6.23


botao.addEventListener("click", converter)
inputVar.addEventListener("change", function(event) {
})

function converter() {
    caixaValor = inputVar.value

    valor1.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(caixaValor)

    if (seletorDois.value = 'dolar') {
        valor2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(caixaValor/valorDolar)
    }
}
