function TextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
TextoTela('textarea', 'Digite seu texto');
TextoTela('h4', 'Apenas letras minúsculas e sem acento.');

function Criptografia(){
   TextoTela('textarea', 'texto criptografado');
}

function Descriptografia(){   
    TextoTela('textarea', 'texto descriptografado');
    
}
