const try_Easy = 5
const try_Normal = 3
const try_Blood = 1

var tryOuts
var i = 0
var numbers

var button_Easy = document.getElementById('bEasy')
var button_Normal = document.getElementById('bNormal')
var button_Blood = document.getElementById('bBlood')
var button_Randomize = document.getElementById('bRandomize')

function restart() {
    button_Easy.disabled = false
    button_Normal.disabled = false
    button_Blood.disabled = false
    button_Randomize.disabled = false
    numbers = 0
    tryOuts = 0
    i = 0

    console.log('Tentativas do usuário: ' + i, '\t', 'Tentativas da dificuldade: ' + tryOuts, '\t', 'Número sorteado: ' + numbers)
}

function randomize() {
    numbers = 0
    numbers = parseInt(Math.random()*21)
    button_Easy.disabled = false
    button_Normal.disabled = false
    button_Blood.disabled = false
    
    console.log('Número sorteado: ' + numbers);
}

function easy() {
    tryOuts = try_Easy
    button_Easy.disabled = true
    button_Normal.disabled = true
    button_Blood.disabled = true

    console.log('Tentativas da dificuldade: ' + tryOuts)
}

function normal() {
    tryOuts = try_Normal
    button_Easy.disabled = true
    button_Normal.disabled = true
    button_Blood.disabled = true

    console.log('Tentativas da dificuldade: ' + tryOuts)
}

function blood() {
    tryOuts = try_Blood
    button_Easy.disabled = true
    button_Normal.disabled = true
    button_Blood.disabled = true

    console.log('Tentativas da dificuldade: ' + tryOuts)
}

function tryOut() {
    var userTry = document.getElementById("userTry").value

    if(userTry < numbers && i < tryOuts){
        alert("O número que você tentou é menor que o sorteado!")
        i++
    }else if(userTry > numbers && i < tryOuts) {
        alert("O número que você tentou é maior que o sorteado")
        i++
    }else if(userTry == numbers) {
        location.href = '../final/vencedor.html'
    }
    
    if(i == tryOuts) {
        location.href = '../final/perdedor.html'
    }

    console.log('Tentativas do usuário: ' + i, '\t', 'Tentativas da dificuldade: ' + tryOuts, '\t', 'Número sorteado: ' + numbers)
}