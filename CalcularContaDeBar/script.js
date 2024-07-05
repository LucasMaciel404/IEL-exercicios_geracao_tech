let entrada = document.querySelector('#entrada');
let principal = document.querySelector('#principal');
let bebida = document.querySelector('#bebida');
let sobremesa = document.querySelector('#sobremesa');
let sub_total = document.querySelector('#sub-total');
let taxaServico = document.querySelector('#taxaServico');
let valorTotal = document.querySelector('#valorTotal');

function alteracao() {
    mostrarTotal()
}

function mostrarTotal() {
    let retornoCalculo = calcularTotal();
    console.log(retornoCalculo)
    taxaServico.value = retornoCalculo[0];
    sub_total.value = retornoCalculo[1];
    valorTotal.value = retornoCalculo[2];
}

function calcularTotal() {
    let listaInputs = [Number(entrada.value), Number(principal.value), Number(bebida.value), Number(sobremesa.value)];
    let total = 0; 
    let taxa = 0;
    let subTotal = 0;
    
    listaInputs.forEach(value=>{
        total += value;
    })

    console.log(total)

    taxa = total * 0.1;
    subTotal = total;
    total += taxa;

    return [taxa, subTotal, total];
}