function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de  = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeroSorteado
    let listaSorteados = [];
    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = obterNumeroAleatorio(de, ate);
        while (listaSorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        listaSorteados.push(numeroSorteado);
    }
    let resultado = document.getElementById('resultado').getAttribute('label');
    resultado.textContent = `Números sorteados:  ${listaSorteados}`
    mudarStatusBotao();
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function mudarStatusBotao() {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.classList.remove('container__botao-desabilitado');
    btnReiniciar.classList.add('container__botao')
    if (btnReiniciar.classList.includes('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }

}


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    mudarStatusBotao();
    
}