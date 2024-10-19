const seletorDois = document.querySelector(".select2")
const inputVar = document.querySelector(".inputValor")
const botao = document.querySelector(".botao")
const moeda1 = document.querySelector(".moeda1")
const moeda2 = document.querySelector(".moeda2")
const bandeira2 = document.querySelector(".bandeira2")
const valor1 = document.querySelector(".valor1")
const valor2 = document.querySelector(".valor2")

botao.addEventListener("click", converter)
seletorDois.addEventListener("change", () => converter())

async function converter() {
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then( res => {
        return res.json()
    })
    console.log(data)

    let dolar = data.USDBRL.high
    let euro = data.EURBRL.high
    let bitcoin = data.BTCBRL.high
    caixaValor = inputVar.value

    valor1.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(caixaValor)

    switch (seletorDois.value) {
        case 'dolar':
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(caixaValor / dolar)
            bandeira2.src = "assets/dolar.png"
        break
        case 'euro':
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(caixaValor / euro)
            bandeira2.src = "assets/euro.png"
        break
        case 'bitcoin':
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(caixaValor / bitcoin)
            bandeira2.src = "assets/bitcoin.png"
        break
        default:
            console.log('erro')
    }
}