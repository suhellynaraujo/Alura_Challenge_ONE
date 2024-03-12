function TextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

TextoTela('textarea', 'Digite seu texto');
TextoTela('h4', 'Apenas letras minúsculas e sem acento.');
TextoTela('h1', 'Nenhuma mensagem encontrada');
TextoTela('p', 'Digite um texto que você deseja criptografar ou descriptografar.');

let textArea = document.querySelector('#conteudo__ladoEsquerdo__texto__digiteTexto');
let mensagem = document.querySelector("#conteudo__ladoDireito__paragrafo");
console.log(textArea);
console.log(mensagem);

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function Criptografia(){
    let textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function Descriptografia(){
    let textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar(){
    let textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    document.execCommand("copy");
    textArea.setSelectionRange(0, 0);
    mensagem.value = "";
}