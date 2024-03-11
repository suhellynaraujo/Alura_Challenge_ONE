function TextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

TextoTela('textarea', 'Digite seu texto');
TextoTela('h4', 'Apenas letras minúsculas e sem acento.');
TextoTela('h1', 'Nenhuma mensagem encontrada');
TextoTela('p', 'Digite um texto que você deseja criptografar ou descriptografar.');

const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function Criptografia(){ 
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function Descriptografia(){   
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
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