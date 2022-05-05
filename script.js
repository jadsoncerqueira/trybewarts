// FUNÇÃO QUE VERIFICA DADOS DE EMAIL E SENHA
function login() {
  const email = document.querySelector('#campoEmail');
  const senha = document.querySelector('#campoSenha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login);
