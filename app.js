function ajustarTamano(id) {
    document.getElementById(id).style.fontSize = '20px';
}

function validarTexto() {
    let textarea = document.getElementById('textarea-texto-ingresado');
    let texto = textarea.value;

    let textoValido = texto.replace(/[^a-z\s]+/g, '');
    textarea.value = textoValido;
}

function tomarValor(id) {
    return document.getElementById(id).value;
}

function encriptarDesencriptar(operacion) {
    let textarea = tomarValor('textarea-texto-ingresado');
    let resultado = null;

    if (operacion === 'encriptar'){
        // Definir un objeto para mapear las conversiones Encriptar
        let conversiones = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        // aplicar la conversión según corresponda
        resultado = textarea.replace(/[aeiou]/g, function (match) {
            return conversiones[match];
        });
    } else if (operacion === 'desencriptar'){
        // Definir un objeto para mapear las conversiones inversas para desencriptar
        let conversiones = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        const expresionRegular = /(enter|imes|ai|ober|ufat)/g;

        resultado = textarea.replace(expresionRegular, function (match) {
            return conversiones[match];
        });
    }

    ajustarTamano('textarea-texto-resultado');
    document.getElementById('textarea-texto-resultado').value = resultado;
}

function copiarTexto() {
    let textarea = document.getElementById('textarea-texto-resultado');
    textarea.select();
    if (document.execCommand('copy')){
        alert('Texto copiado: \"'+textarea.value+'\"');
    } else {
        alert('No se pudo copiar el texto');
    }
}

function reiniciar() {
    textareaIngresado = document.getElementById('textarea-texto-ingresado');
    textareaResultado = document.getElementById('textarea-texto-resultado');
    textareaIngresado.value = '';
    textareaResultado.value = '';
    textareaIngresado.style.fontSize = '50px';
    textareaResultado.style.fontSize = '50px';
}