function displayImagem() {
    var image = document.getElementById("vencedor")
    image.style.display = "block"
}

function iniciarJogo() {
    var container = document.getElementById("container")
    var container2 = document.getElementById("container2")
    container.style.display = 'none'
    container2.style.opacity = '100%'
    

    var nick1 = document.getElementById("nick1").value
    var nick2 = document.getElementById("nick2").value

    document.getElementById("nickJogo1").innerHTML = nick1 + ", insira o seu número"
    document.getElementById("nickJogo2").innerHTML = nick2 + ", insira o seu número"

    document.getElementById("nickParImpar1").innerHTML = nick1 + ', escreva abaixo se quer "Par" ou "Impar"'
    document.getElementById("nickParImpar2").innerHTML = nick2 + ', escreva abaixo se quer "Par" ou "Impar"'

    document.getElementById("contador1").innerHTML = nick1 + " tem 0 pontos!"
    document.getElementById("contador2").innerHTML = nick2 + " tem 0 pontos!"
}

var pontos1 = 0
var pontos2 = 0

function jogando() {
    var valor1 = Number(document.getElementById("jogada1").value)
    var valor2 = Number(document.getElementById("jogada2").value)
    var jogada1 = document.getElementById("selecao1").value
    var jogada2 = document.getElementById("selecao2").value
    var nick1 = document.getElementById("nick1").value
    var nick2 = document.getElementById("nick2").value




    var resultado = valor1 + valor2

    if(resultado % 2 == 0) {
        document.getElementById("resultado").innerHTML = "O resultado foi par!"
    }else{
        document.getElementById("resultado").innerHTML = "O resultado foi ímpar!"
    }

    if(resultado %2 == 0 && (jogada1.toUpperCase() == "PAR")) {
        pontos1++
        document.getElementById("contador1").innerHTML = nick1 + " tem " + pontos1 + " pontos!"
    }else if(resultado %2 != 0 && (jogada1.toUpperCase() == "IMPAR" || jogada1.toUpperCase() == "ÍMPAR")){
        pontos1++
        document.getElementById("contador1").innerHTML = nick1 + " tem " + pontos1 + " pontos!"
    }else if(resultado %2 == 0 && (jogada2.toUpperCase() == "PAR")) {
        pontos2++
        document.getElementById("contador2").innerHTML = nick2 + " tem " + pontos2 + " pontos!"
    }else if(resultado %2 != 0 && (jogada2.toUpperCase() == "IMPAR" || jogada2.toUpperCase() == "ÍMPAR")) {
        pontos2++
        document.getElementById("contador2").innerHTML = nick2 + " tem " + pontos2 + " pontos!"
    } 

    if(pontos1 >= 3 || pontos2 >= 3) {
        if(pontos1 == 3) {
            displayImagem()
            var container2 = document.getElementById("container2")
            var form = document.getElementById("finalForm")
            var tagDoVencedor = document.getElementById("textoVencedor")
            var textoVencedor = document.createTextNode(`O jogador ${nick1} ganhou a partida`)

            container2.style.display = 'none'
            form.style.display = 'block'

            tagDoVencedor.appendChild(textoVencedor)
        }else if(pontos2 == 3) {
            displayImagem()
            var container2 = document.getElementById("container2")
            var form = document.getElementById("finalForm")
            var tagDoVencedor = document.getElementById("textoVencedor")
            var textoVencedor = document.createTextNode(`O jogador ${nick2} ganhou a partida`)

            container2.style.display = 'none'
            form.style.display = 'block'

            tagDoVencedor.appendChild(textoVencedor)
        }
    }
}
