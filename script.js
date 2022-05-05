function login() {
    let email = document.querySelector('#campoEmail');
    let senha = document.querySelector('#campoSenha');
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert('Email ou senha inválidos.')
    }
}

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login);