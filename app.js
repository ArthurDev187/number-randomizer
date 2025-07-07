function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de  = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaSorteados = []
    let numeroSorteado

    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = obterNumeroAleatorio(de, ate);
        while (listaSorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        listaSorteados.push(numeroSorteado);
    }
    exibirMensagemNaTela(listaSorteados)
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirMensagemNaTela(listaNumeros) {
    let mensagemResultado = document.getElementById('resultado').querySelector('label')
    if (mensagemResultado.textContent == 'Números sorteados:  nenhum até agora') {
        mensagemResultado.textContent = `Números sorteados:  ${listaNumeros}`
    } else {
        mensagemResultado.textContent == 'Números sorteados:  nenhum até agora'
    }
    
}