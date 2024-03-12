function TextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

TextoTela('textarea', 'Digite seu texto');
TextoTela('h4', 'Apenas letras minúsculas e sem acento.');
TextoTela('h1', 'Nenhuma mensagem encontrada');
TextoTela('p', 'Digite um texto que você deseja criptografar ou descriptografar.');

/*function TextoTelaCript(){
   location.href = '..//html/telaTexto.html';
}
*/
var textoInput = document.querySelector('#conteudo__ladoEsquerdo__texto__digiteTexto');
var resultadoCrip;

function Criptografia(){   
    var texto = textoInput.value;
    resultadoCrip = texto.replace('e', 'enter').replace('i', 'imes').replace('a', 'ai').replace('o', 'ober').replace('u', 'ufat');

    document.getElementById('conteudo__ladoEsquerdo__texto__digiteTexto').value = resultadoCrip;
    //'<textarea name="name" id="conteudo__ladoEsquerdo__texto__digiteTexto">' + resultadoCrip + '</textarea>';

 console.log(resultadoCrip);
}


function Descriptografia(){
    var texto = textoInput.value;
    resultadoCrip = texto.replace( 'enter', 'e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u');

    document.getElementById('conteudo__ladoEsquerdo__texto__digiteTexto').value = resultadoCrip;
    //'<textarea name="name" id="conteudo__ladoEsquerdo__texto__digiteTexto">' + resultadoCrip + '</textarea>';

 console.log(resultadoCrip);
}