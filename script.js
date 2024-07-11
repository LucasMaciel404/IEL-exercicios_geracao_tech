const key = "&appid=cebcd482eda57fa9a6714c1c2ba91885"

// objetos manipulados:
let cidadeh1 = document.querySelector('#cidade');
let btnCidade = document.querySelectorAll('.item>p');
let pesquisa = document.querySelector('.cidade')
let temperatura = document.querySelector('.temperatura>span');

async function buscarCidade(cidade = "São Paulo") {
    const api = "https://api.openweathermap.org/data/2.5/weather?q="
    const linguagem = '&lang=pt-br'
    const unidade = "&units=metric"
    let url = api + cidade + key + linguagem + unidade;

    let retorno = await fetch(url);
    let resposta = retorno.json();

    return resposta;
}

async function exibirNaTela(cidade = "São Paulo") {
    let info = await buscarCidade(cidade);
    cidadeh1.innerHTML = info.name
    temperatura.innerHTML = info.main.temp.toFixed(0)
}

btnCidade.forEach(element => {
    console.log(element)
    element.addEventListener('click', (e) => {
        console.log('minha_cidade');

    })


})