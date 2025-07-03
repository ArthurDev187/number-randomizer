let palavraSorteado = quantidade > 1 ? 'Numeros sorteados' : 'Numero sorteado';

function sortear () {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    // alert(`quantidade: ${quantidade}`);
    // alert(`Comeca de: ${de}`);
    // alert(`Vai ate: ${ate}`);

    listaSorteados = [];
    while (listaSorteados.length < quantidade) {
    let numSorteado = parseInt(Math.random() * (ate - de + 1)) + 1;
    listaSorteados.push(numSorteado);
    // alert(`Lista sorteados: ${listaSorteados}`);
    }

    mostrarTextoResultado();
}



function mostrarTextoResultado() {
    let labelResultado = document.getElementById('resultado').querySelector('label');
    return labelResultado.textContent = `${palavraSorteado}:  ${listaSorteados}`;
}