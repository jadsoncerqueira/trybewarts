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


//FUNÇÃO QUE HABILITA BOTÃO DE ENVIAR
const check = document.getElementById('agreement');

function habilitar () {
  const enviar = document.getElementById('submit-btn')
  if(check.checked === true) {
    enviar.disabled = false
  } else {
    enviar.disabled = true
  }
}

check.addEventListener('click', habilitar)

//FUNÇÃO QUE CRIA O CONTADOR
const contador = document.getElementById('counter');
const text = document.getElementById('textarea')

function contar () {
  let sobra = text.maxLength - text.value.length;
  contador.innerText = sobra;
}

contar()
text.addEventListener('keyup', contar)