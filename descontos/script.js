let etiqueta = document.getElementsByName('etiqueta');
let quantidade = document.querySelector('#quantidade').value;
let div_retorno_usuario = document.querySelector('.retorno_usuario');
let etiqueta_selecionada = etiqueta.filter((etiquetaColor) => {
    if (etiquetaColor.checked) {
        return etiquetaColor
    }
});

let desconto_cor = 0;
let desconto_quantidade = 0;
let cor = 'Indefinida';

if (etiqueta_selecionada.value == 'vermelho') {
    desconto_cor = 0.5
} else if (etiqueta_selecionada.value == 'verde') {
    desconto_cor = 0.3
} else if (etiqueta_selecionada.value == 'amarelo') {
    desconto_cor = 0.15
}



if (quantidade > 2) {
    desconto_quantidade = 0.1
}

// calcular descontos;....