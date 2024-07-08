const card_list = document.querySelector('.cardLista')
let objetos = [
    {
        img: './img/user01.jpg',
        nome: 'Oscar Costa Frontinho',
        idade: 25,
        cargo: 'Dev',
        salario: 3000.00
    }, {
        img: './img/user02.jpg',
        nome: 'Matheus Solto Mourão',
        idade: 28,
        cargo: 'Dev',
        salario: 3000.00
    }, {
        img: './img/user03.jpg',
        nome: 'Bianca Elen Dinar',
        idade: 22,
        cargo: 'Dev',
        salario: 3000.00
    },
]

objetos.forEach((card) => {
    let info = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    info.className = 'info';
    img.src = card.img;
    h2.innerHTML = card.nome;
    p.innerHTML = `<span>idade:</span> ${card.idade}`;
    p2.innerHTML = `<span>cargo:</span> ${card.cargo}`;
    p3.innerHTML = `<span>salario:</span> ${card.salario}`;

    info.appendChild(img)
    info.appendChild(h2)
    info.appendChild(p)
    info.appendChild(p2)
    info.appendChild(p3)

    card_list.appendChild(info)
});

function montarTitulo(listaChildren, pai, tipo) {
    listaChildren.forEach(num => {
        const tituloNum = document.createElement(tipo);
        tituloNum.innerText = num;
        pai.appendChild(tituloNum);
    })
}