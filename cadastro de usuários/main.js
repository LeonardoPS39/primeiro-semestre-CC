function cadastro() {
    location.href = 'cadastro.html';
}

function logar() {

    var IsInvalido = false;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var contasCadastradas = JSON.parse(localStorage.getItem('contas'));

    if(login == '' || senha == '') {
        return alert('Preencha corretamente os campos de login e/ou senha!');
    }

    if(contasCadastradas == null || contasCadastradas == undefined) {
        return alert('Conta não cadastrada!');
    }

    for(var i = 0; i < contasCadastradas.length; i++) {

        if(contasCadastradas[i].email == login) {

            if(contasCadastradas[i].senha == senha) {

                alert(`Seja bem vindo ${contasCadastradas[i].nome}`);
                IsInvalido = false;
                break;
            } else {
                alert('Senha incorreta!')
                return;
            }

        }else {

            IsInvalido = true;
        }

    }

    if(IsInvalido == true) {
        alert('Não foi possível encontrar uma conta com os dados informados!');
        return;
    }

}