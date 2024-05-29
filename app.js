function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value; 
    let numeroSorteado = [];
    let resultado = [];
    let range = ate-de;

    for (let i = 0; i < range+1; i++){
        numeroSorteado[i] = de++;
    }
    console.log(numeroSorteado);

    let arrayEmbaralhado = embaralhaArray(numeroSorteado);
    console.log(arrayEmbaralhado);

    for (i = 0; i < quantidade; i++) {
        resultado[i] = arrayEmbaralhado[i];
    }
    console.log(resultado);
    exibirNaTela(resultado);

    document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado");
    document.getElementById("btn-reiniciar").classList.add("container__botao");  
}

function exibirNaTela(campo) {
    texto = document.getElementById("result");
    texto.innerHTML =  `Números sorteados: ${campo}`;
}

function embaralhaArray (array){
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i)+1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
