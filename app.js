let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagem(){
    exibirNaTela('h1', 'Bem vindo ao jogo do número secreto!');
    exibirNaTela('p', 'Escolha um número de 1 a 10');
}
 

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto ,'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagem();


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto){
        exibirNaTela('h1' , 'Vitória!');
        exibirNaTela('p' , `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirNaTela('p' , 'O número secreto é menor!');
        }
        else{
            exibirNaTela('p' , 'O número secreto é maior!');
        }
        tentativas++
        limparCampo();
    }

}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeelementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeelementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}