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


    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}