function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaNumeros = [];
    let textoResultado = document.getElementById('resultado');

    console.log(`quantidade: ${quantidade}`);
    console.log(`de: ${de}`);
    console.log(`ate: ${ate}`);

    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = obterNumeroAleatorio(de, ate);
        while (listaNumeros.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        listaNumeros.push(numeroSorteado);
    }
    
    console.log(`Lista numeros sorteados: ${listaNumeros}`);
    
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaNumeros}</label>`

    mudarStatusBotao('btn-reiniciar');
    
}



function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function mudarStatusBotao(btnId) {
    let botao = document.getElementById(btnId);
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    mudarStatusBotao('btn-reiniciar');
}