let seletorUm = document.querySelector(".select1")
let seletorDois = document.querySelector(".select2")
let caixaValor = document.querySelector(".inputValor")
let botao = document.querySelector(".botao")
let bandeira1 = document.querySelector(".bandeira1")
let moeda1 = document.querySelector(".moeda1")
let valor1 = document.querySelector(".valor1")
let bandeira2 = document.querySelector(".bandeira2")
let moeda2 = document.querySelector(".moeda2")
let valor2 = document.querySelector(".valor2")
let valorFinal1 = 0.00
let valorFinal2 = 0.00



botao.addEventListener("click", converter)

function converter() {
    valorFinal1 = caixaValor.value
    valorFinal2 = (caixaValor.value / 5.66)
}

for ( x = 1 ; xz = 10; xzy = 10){
valor1.textContent = "R$ " + valorFinal1
valor2.textContent = "US$ " + valorFinal2
}