function textoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
textoTela('textarea', 'Digite seu texto');
textoTela('h4', 'Apenas letras minúsculas e sem acento.')
