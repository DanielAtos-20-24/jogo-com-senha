var senhaDeAcesso = 1234;
var numeroAleatorio = verificarChute();
var tentativas = 1;


// ENTRAR NO JOGO COM SENHA
alert('BOA TARDE!')
var senhaDoPrograma = prompt('Digite a senha: ')

while(senhaDeAcesso != senhaDoPrograma) {
    if(alert('Senha Incorreta!  Tente novamente!'));
    var senhaDoPrograma = prompt('Digite a senha: ')
} if (senhaDeAcesso == senhaDoPrograma) {
    alert('Senha Correta!')
 }


// JOGO COMPLETO
function exibirTextoNaTela(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemDeTexto() {
exibirTextoNaTela('h1', 'Jogo do Número Secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')};

function numeroSecreto(){
    var chute = document.querySelector('input').value
    var quatidadesTetantivas = tentativas == 1 ? 'tentativa' : 'tentativas' 

    if (numeroAleatorio == chute) {
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${quatidadesTetantivas}!`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(numeroAleatorio > chute) {
            exibirTextoNaTela('h1', 'O numero secreto é maior!')
        } else {
            exibirTextoNaTela('h1', 'O numero secreto é menor!')
        }
    } tentativas++;
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function verificarChute(){
   return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo(){
    numeroAleatorio = verificarChute();
    limparCampo();
    exibirMensagemDeTexto();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

reiniciarJogo();
