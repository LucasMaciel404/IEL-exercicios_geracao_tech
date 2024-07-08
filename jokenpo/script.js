const opcoes = {
    1:{
        nome: 'pedra', img:'./img/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU!!'
    },
    2:{
        nome: 'papel', img:'./img/papel.png', pedra: 'GANHOU!!', papel: 'EMPATE', tesoura: 'PERDEU'
    },
    3:{
        nome: 'tesoura', img:'./img/tesoura.png', pedra: 'PERDEU', papel: 'GANHOU!!', tesoura: 'EMPATE'
    }
}

let numero_aleatorio = (Math.random() * 3) + 1;
let computador = opcoes[Math.floor(numero_aleatorio)];