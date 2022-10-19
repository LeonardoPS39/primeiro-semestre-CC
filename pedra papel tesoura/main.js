function jogo() {
    //nomes dos jogadores
    var nome1 = document.getElementById("nick1").value
    var nome2 = document.getElementById("nick2").value
    

    //Escolha de opção
    document.getElementById("escolha1").innerText = `${nome1}, pedra papel ou tesoura?`
    document.getElementById("escolha2").innerText = `${nome2}, pedra papel ou tesoura?`

    document.getElementById("contagem1").innerHTML = `O jogador ${nome1} tem 0 pontos`
    document.getElementById("contagem2").innerHTML = `O jogador ${nome2} tem 0 pontos`
}

var ponto1 = 0
var ponto2 = 0
var contagem = 0


function verificar(){

    //nomes dos jogadores
    var nome1 = document.getElementById("nick1").value
    var nome2 = document.getElementById("nick2").value

    //verificação
    var pedraCheck1 = document.getElementById("pedraCheck1")

    var papelCheck1 = document.getElementById("papelCheck1")

    var tesouraCheck1 = document.getElementById("tesouraCheck1")

    var pedraCheck2 = document.getElementById("pedraCheck2")

    var papelCheck2 = document.getElementById("papelCheck2")

    var tesouraCheck2 = document.getElementById("tesouraCheck2")

    var vencedor = ''







    if(pedraCheck1.checked && !pedraCheck2.checked){
        if (papelCheck2.checked) {
            vencedor = nome2
            ponto2 ++

        }else if (tesouraCheck2.checked){
            vencedor = nome1
            ponto1++

        }

    }else if(papelCheck1.checked && !papelCheck2.checked){
        if(tesouraCheck2.checked){
            vencedor = nome2
            ponto2++

        }else if(pedraCheck2.checked){
            vencedor = nome1
            ponto1 ++

        }

    }else if(tesouraCheck1.checked && !tesouraCheck2.checked){
        if(pedraCheck2.checked){
            vencedor = nome2
            ponto2 ++

        }else if(papelCheck2.checked){
            vencedor = nome1
            ponto1++
        }

    }

    if(papelCheck1.checked && papelCheck2.checked || pedraCheck1.checked && pedraCheck2.checked || tesouraCheck1.checked && tesouraCheck2.checked){
        
        document.getElementById("result").innerText = `A rodada Empatou!`

        ponto1 ++
        ponto2 ++

    }else{
        document.getElementById("result").innerText = `O vencedor da rodada é ${vencedor}`

    }

    document.getElementById("contagem1").innerHTML = `O jogador ${nome1} tem ${ponto1} pontos`
    document.getElementById("contagem2").innerHTML = `O jogador ${nome2} tem ${ponto2} pontos`

    
    if(ponto1 == 3 && ponto2 == 3){
        document.getElementById("resultFinal").innerText = `O jogo empatou!`
    }else if(ponto1 == 3){
        document.getElementById("resultFinal").innerText = `O vencedor da partida é ${nome1}`
    }else if(ponto2 == 3){
        document.getElementById("resultFinal").innerText = `O vencedor da partida é ${nome2}`
    }

    if(!pedraCheck1.checked && !papelCheck1.checked && !tesouraCheck1.checked){
        alert(`${nome1}, selecione uma imagem!`)
    }
    
    if(!pedraCheck2.checked && !papelCheck2.checked && !tesouraCheck2.checked){
        alert(`${nome2}, selecione uma imagem!`)
    }

}