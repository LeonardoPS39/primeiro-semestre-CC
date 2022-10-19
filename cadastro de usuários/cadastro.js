function cadastrar() {

    var cadastroNome = document.getElementById('nome').value;
    var cadastroEmail = document.getElementById('email').value;
    var cadastroSenha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmSenha').value;

    if(cadastroSenha == confirmarSenha) {
        var senhaConfirmada = cadastroSenha;
    }else {
        alert("As senhas são diferentes!")
        return;
    }
    
    if(cadastroEmail == '' || senhaConfirmada == '' || cadastroNome == '') {
        
        alert('Cadastro não confirmado! Preencha os campos corretamente.');
        return;
    }else {
        var contasCadastradas = JSON.parse(localStorage.getItem('contas') || '[]');
        
        contasCadastradas.push({
            "email": cadastroEmail,
            "senha": senhaConfirmada,
            "nome": cadastroNome
        });
        
        var contasJSON = JSON.stringify(contasCadastradas);
        
        localStorage.setItem('contas', contasJSON);
        
        alert('Cadastrado com sucesso');
        location.href = 'index.html';
    }
    

}