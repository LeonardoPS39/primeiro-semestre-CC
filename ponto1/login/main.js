function logar() {
    var user = document.getElementById("user").value
    var senha = document.getElementById("senha").value
    
    /* Simulação de verificação para liberação do usuário: */
    if (user == "" && senha == "") {
        setTimeout(function () {
            document.getElementById("user").value = null
            document.getElementById("senha").value = null
            location.href = "../food/food.html"
        }, 2000)
    }else {
        document.getElementById("user").value = null
        document.getElementById("senha").value = null
        setTimeout(function () {
            alert("Usuário ou senha incorreto, tente novamente!")
        }, 1000)
    }
}