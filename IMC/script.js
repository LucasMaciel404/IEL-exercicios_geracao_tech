function calcularIMC() {
    let nome = document.querySelector('#nome').value;
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);

    let imc = peso/ altura **2 ;
    console.log(imc);
    document.querySelector('#imc').innerHTML = imc.toFixed(2)
}