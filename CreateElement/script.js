const card_list = document.querySelector('.cardLista')
const titulo = document.createElement('h1');
const lista = document.createElement('ul');
const idade = document.createElement('li');
const endereco = document.createElement('li');

titulo.innerText = 'Minha Lista';
idade.innerText = 'Idade';
endereco.innerText = 'Endereço';

lista.appendChild(idade)
lista.appendChild(endereco)

card_list.appendChild(titulo)
card_list.appendChild(lista)   


let numeros = [1,2,3,4,5,6,7,8,9,10];

montarTitulo(numeros, lista, 'li');

function montarTitulo(listaChildren, pai, tipo) {
    listaChildren.forEach(num => {
        const tituloNum = document.createElement(tipo);
        tituloNum.innerText = num;
        pai.appendChild(tituloNum);
    })
}