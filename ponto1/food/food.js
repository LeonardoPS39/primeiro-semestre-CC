//Preço dos sanduiches:
const S1 = 8
const S2 = 7
const S3 = 9

//Preço dos salgados:
const SG1 = 6
const SG2 = 5
const SG3 = 7

//Preço dos doces:
const D1 = 12
const D2 = 6
const D3 = 11

//Preço das bebebidas:
const B1 = 4
const B2 = 4
const B3 = 2

//Variáveis para coletar os valores dos inputs das quantidades de itens:
var qtdS1
var qtdS2
var qtdS3
var qtdSG1
var qtdSG2
var qtdSG3
var qtdD1
var qtdD2
var qtdD3
var qtdB1
var qtdB2
var qtdB3

//Variáveis para definir os custos de acordo com quantidade
var custosS1
var custosS2
var custosS3

var custosSG1
var custosSG2
var custosSG3

var custosD1
var custosD2
var custosD3

var custosB1
var custosB2
var custosB3

//Valor tota:
var valorTotal
var valorTotalDesconto

function carrinho() {
    //Fazendo o conteúdo da tela desaparecer e aparecer:
    var menuView = document.getElementById("containerMenu")
    var carrinhoView = document.getElementById("containerCarrinho")
    
    menuView.style.display = 'none'
    carrinhoView.style.opacity = '100%'

    
    //Variáveis para coletar os valores dos inputs das quantidades de itens:

    qtdS1 = Number(document.getElementById("qtdS1").value)
    qtdS2 = Number(document.getElementById("qtdS2").value)
    qtdS3 = Number(document.getElementById("qtdS3").value)
    qtdSG1 = Number(document.getElementById("qtdSG1").value)
    qtdSG2 = Number(document.getElementById("qtdSG2").value)
    qtdSG3 = Number(document.getElementById("qtdSG3").value)
    qtdD1 = Number(document.getElementById("qtdD1").value)
    qtdD2 = Number(document.getElementById("qtdD2").value)
    qtdD3 = Number(document.getElementById("qtdD3").value)
    qtdB1 = Number(document.getElementById("qtdB1").value)
    qtdB2 = Number(document.getElementById("qtdB2").value)
    qtdB3 = Number(document.getElementById("qtdB3").value)


    //Verificações de quantidade de custos para que não ocorra erro na hora de informar seus valores

    if (qtdS1 > 0) {
        custosS1 = qtdS1 * S1
    }else {
        custosS1 = 0
    }

    if (qtdS2 > 0) {
        custosS2 = qtdS2 * S2
    }else {
        custosS2 = 0
    }

    if (qtdS3 > 0) {
        custosS3 = qtdS3 * S3
    }else {
        custosS3 = 0
    }

    if (qtdSG1 > 0) {
        custosSG1 = qtdSG1 * SG1
    }else {
        custosSG1 = 0
    }

    if (qtdSG2 > 0) {
        custosSG2 = qtdSG2 * SG2
    }else {
        custosSG2 = 0
    }

    if (qtdSG3 > 0) {
        custosSG3 = qtdSG3 * SG3
    }else {
        custosSG3 = 0
    }

    if (qtdD1 > 0) {
        custosD1 = qtdD1 * D1
    }else {
        custosD1 = 0
    }

    if (qtdD2 > 0) {
        custosD2 = qtdD2 * D2
    }else {
        custosD2 = 0
    }

    if (qtdD3 > 0) {
        custosD3 = qtdD3 * D3
    }else {
        custosD3 = 0
    }

    if (qtdB1 > 0) {
        custosB1 = qtdB1 * B1
    }else {
        custosB1 = 0
    }

    if (qtdB2 > 0) {
        custosB2 = qtdB2 * B2
    }else {
        custosB2 = 0
    }
    
    if (qtdB3 > 0) {
        custosB3 = qtdB3 * B3
    }else {
        custosB3 = 0
    }

    valorTotal = custosS1 + custosS2 + custosS3 + custosSG1 + custosSG2 + custosSG3 + custosD1 + custosD2 + custosD3 + custosB1 + custosB2 + custosB3

    //Escrever a lista de comprar
    document.getElementById("itens").innerHTML = `Big Abraço: R$${custosS1}<br/>Big Saboroso: R$${custosS2}<br/>Big Job: R$${custosS3}<br/>Lanchão: R$${custosSG1}<br/>Croissant: R$${custosSG2}<br/>Coxinha de carne vegana: R$${custosSG3}<br/>Nega Maluca: R$${custosD1}<br/>Brownie: R$${custosD2}<br/>Surpresa de uva: R$${custosD3}<br/>Coca-Cola Zero: R$${custosB1}<br/>Guaraná Antártica Zero: R$${custosB2}<br/>Água: R$${custosB3}`
    
    //Escrever o valor total
    document.getElementById("valorFinal").innerHTML = `Valor Total: R$${valorTotal}`
}

const cupom = 'VOUTIRAR10'
var inputCupom

function cupomCalc() {
    inputCupom = document.getElementById("cupom").value

    if(inputCupom.toUpperCase() == cupom) {
        valorTotalDesconto = valorTotal - (valorTotal*(10/100))
    }else {
        alert("Cupom inválido ou já foi usado.")
    }
    
    document.getElementById("valorFinalDesconto").innerHTML = `Valor total com desconto: R$${valorTotalDesconto}`
}

function voltarLoja() {
    var menuView = document.getElementById("containerMenu")
    var carrinhoView = document.getElementById("containerCarrinho")
    
    menuView.style.display = 'block'
    carrinhoView.style.opacity = '0%'
}

var custosSanduiches
var custosSalgados
var custosDoces
var custosBebidas

function comprar() {
    var menuView = document.getElementById("containerMenu")
    var carrinhoView = document.getElementById("containerCarrinho")
    var boleto = document.getElementById("boleto")
    
    menuView.style.display = 'none'
    carrinhoView.style.display = 'none'
    boleto.style.opacity = '100%'

    custosSanduiches = custosS1 + custosS2 + custosS3
    custosSalgados = custosSG1 + custosSG2 + custosSG3
    custosDoces = custosD1 + custosD2 + custosD3
    custosBebidas = custosB1 + custosB2 + custosB3

    document.getElementById("valorSanduiches").innerHTML = `R$${custosSanduiches}`
    document.getElementById("valorSalgados").innerHTML = `R$${custosSalgados}`
    document.getElementById("valorDoces").innerHTML = `R$${custosDoces}`
    document.getElementById("valorBebidas").innerHTML = `R$${custosBebidas}`
    document.getElementById("valorBebidas").innerHTML = `R$${custosBebidas}`
    
    if (valorTotalDesconto != undefined && valorTotalDesconto > 0) {
        document.getElementById("valorFinalBoleto").innerHTML = `R$${valorTotalDesconto}`
    }else {
        document.getElementById("valorFinalBoleto").innerHTML = `R$${valorTotal}`
    }
    
}
