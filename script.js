const card_list = document.querySelector('.cardLista')
let objetos = { 
    img: {
        src: '',
        alt: ''
    },
    h2: 'Lucas Maciel dos Santos',
    h2: 'Idade',
    h2: 'Cargo',
    h2: 'Salario'
}
objetos.forEach((value, key) => {
    montarTitulo(numeros, card_list, value);

});

function montarTitulo(listaChildren, pai, tipo) {
    listaChildren.forEach(num => {
        const tituloNum = document.createElement(tipo);
        tituloNum.innerText = num;
        pai.appendChild(tituloNum);
    })
}