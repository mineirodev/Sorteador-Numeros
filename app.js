function sortear() { //Função para funcionamento do botão sortear
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value); 
    let numeroSorteado = [];
    let resultado = [];
    let range = ate-de;

    if (de >= ate) {
        alert('Campo "Do numero" dever ser inferior ao campo "Até o numero". Verifique novamente!');
        return
    }

    //Condição para criação de um array sequencial do tamanho do range escolhido
    for (let i = 0; i < range+1; i++){
        numeroSorteado[i] = de++;
    }
  
    let arrayEmbaralhado = embaralhaArray(numeroSorteado); // Embaralha aleatoriamente o array sequencial criado
    
    //atribui o array embaralhado a um array de resultado baseado no quantidada de numeros sorteados escolhidos
    for (i = 0; i < quantidade; i++) {
        resultado[i] = arrayEmbaralhado[i];
    }

    exibirNaTela(resultado); //Exibe na ela o resultadp
    
    //Ativa o botão reiniciar
    document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado");
    document.getElementById("btn-reiniciar").classList.add("container__botao");  
}

function exibirNaTela(campo) { // Funçao que exibe na tela o resultados
    texto = document.getElementById("result");
    texto.innerHTML =  `Números sorteados: ${campo}`;
}

function embaralhaArray (array){ //Função para embaralhar um array
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i)+1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function limpaCampo() { // Funçao que limpa as entradas dos inputs
    quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    de = document.getElementById('de');
    de.value = '';
    ate = document.getElementById('ate');
    ate.value = ''; 
}

function reiniciar() { //Função para funcionamento do botão reiniciar
    
    limpaCampo();
    exibirNaTela("nenhum até agora"); //Reinicia o resultado mostrado na tela
    //Desativa o botão reiniciar
    document.getElementById("btn-reiniciar").classList.remove("container__botao");
    document.getElementById("btn-reiniciar").classList.add("container__botao-desabilitado");  
}