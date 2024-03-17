
function TextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

//TextoTela('textarea', 'Digite seu texto');
TextoTela('h4', 'Apenas letras minúsculas e sem acento.');
TextoTela('h1', 'Nenhuma mensagem encontrada');
TextoTela('p', 'Digite um texto que você deseja criptografar ou descriptografar.');

let textoDeEntrada = document.querySelector('#conteudo__ladoEsquerdo__texto__TextoDeEntrada');
let textoDeSaida = document.querySelector('#conteudo__ladoEsquerdo__texto__TextoDeSaida');
let matrizCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]];

function Criptografia() {
    let resultadoCriptografado = criptografia(textoDeEntrada.value.toLowerCase());
    textoDeSaida.value = resultadoCriptografado;
}

function Descriptografia() {
    let resultadoTraduzido = descriptografia(textoDeEntrada.value.toLowerCase());
    textoDeSaida.value = resultadoTraduzido;
}

function criptografia(textoParaCriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoParaCriptografar.includes(matrizCriptografia[i][0])) {
            textoParaCriptografar = textoParaCriptografar.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1])
        }
    }
    if (textoParaCriptografar !== "") {
        document.querySelector('#mensagem').style.display = 'none';
        document.querySelector('#conteudo__ladoEsquerdo__texto__TextoDeSaida').style.display = 'block';
        document.querySelector('#botaoCopiar').style.display = 'block';
    }
    return textoParaCriptografar;
}

function descriptografia(textoParaDescriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoParaDescriptografar.includes(matrizCriptografia[i][1])) {
            textoParaDescriptografar = textoParaDescriptografar.replaceAll(matrizCriptografia[i][1], matrizCriptografia[i][0])
        }
    }
    if (textoParaDescriptografar !== "") {
        document.querySelector('#mensagem').style.display = 'none';
        document.querySelector('#conteudo__ladoEsquerdo__texto__TextoDeSaida').style.display = 'block';
        document.querySelector('#botaoCopiar').style.display = 'block';
    }
    return textoParaDescriptografar;
}

function copiar() {
    let textoCopiado = document.querySelector('#conteudo__ladoEsquerdo__texto__TextoDeSaida');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
}