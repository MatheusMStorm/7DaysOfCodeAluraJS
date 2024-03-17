function imprimirNaTela(value) {
    document.getElementById("display").value += value
}

function limparTela() {
    document.getElementById("display").value = ' '
}

function imprimirResultado() {
    let valor = document.getElementById("display").value
    let resultado = eval(valor)
    document.getElementById("display").value = resultado
}