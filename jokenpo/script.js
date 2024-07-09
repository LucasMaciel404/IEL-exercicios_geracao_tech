const opcoes = {
    1: {
        nome: 'pedra', img: './img/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU!!'
    },
    2: {
        nome: 'papel', img: './img/papel.png', pedra: 'GANHOU!!', papel: 'EMPATE', tesoura: 'PERDEU'
    },
    3: {
        nome: 'tesoura', img: './img/tesoura.png', pedra: 'PERDEU', papel: 'GANHOU!!', tesoura: 'EMPATE'
    }
};
// imgem e texto referentes a jogada do jogador
let imgJogador = document.getElementById('imgUser');
let pJogador = document.getElementById('escolhaUsuario');

// imgem e texto referentes a jogada do computador
let imgComputador = document.getElementById('imgComput');
let pComputador = document.getElementById('escolhaComputador');

// contagem dos pontos no document
let contagemPontosComputador = document.getElementById('pontosComputador');
let contagemPontosUsuario = document.getElementById('pontosUsuario');

// resultado:
let resultado = document.getElementById('resultado');

let escolha_jogador = {};
let escolha_computador = {};

// variaveis de pontuação
let pontos_jogador = 0;
let pontos_computador = 0;


function escolherJogada(num) {
    return opcoes[num];
}

function montarJogadas(num_jogador) {
    let numero_aleatorio = (Math.random() * 3) + 1;
    let num_computador = Math.floor(numero_aleatorio);

    console.log(num_jogador, num_computador)
    escolha_jogador = escolherJogada(num_jogador);
    escolha_computador = escolherJogada(num_computador);
}
function avaliarGanhador() {
    if (escolha_jogador[escolha_computador.nome] == "GANHOU!!") {
        pontos_jogador += 1;
    } else if (escolha_jogador[escolha_computador.nome] == "PERDEU") {
        pontos_computador += 1;
    }
}

function mostrarNaTela() {
    imgJogador.src = escolha_jogador.img;
    imgComputador.src = escolha_computador.img;

    imgJogador.alt = escolha_jogador.nome;
    imgComputador.alt = escolha_computador.nome;

    pJogador.innerHTML = `Jogador`;
    pComputador.innerHTML = `Computador`;

    contagemPontosComputador.innerHTML = pontos_computador;
    contagemPontosUsuario.innerHTML = pontos_jogador;

    switch (escolha_jogador[escolha_computador.nome]) {
        case "GANHOU!!":
            resultado.classList = 'ganhou';
            resultado.innerHTML = 'GANHOU!!';
            break;
        case "PERDEU":
            resultado.classList = 'perdeu';
            resultado.innerHTML = 'PERDEU';
            break;
        default:
            resultado.classList = 'empatou';
            resultado.innerHTML = 'EMPATE';
            break;
    }
}

function jogar(num) {
    montarJogadas(num)
    avaliarGanhador()
    mostrarNaTela()
}

let btnPedra = document.getElementById('btn_pedra');
let btnPapel = document.getElementById('btn_papel');
let btnTesoura = document.getElementById('btn_tesoura');

btnPedra.addEventListener('click', ()=> jogar(1))
btnPapel.addEventListener('click', ()=> jogar(2))
btnTesoura.addEventListener('click', ()=> jogar(3))