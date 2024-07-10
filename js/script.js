// Cifrado César con un desplazamiento de 3
function cifrarTexto(texto) {
    const desplazamiento = 3;
    return texto.split('').map(caracter => {
        if (caracter >= 'a' && caracter <= 'z') {
            return String.fromCharCode((caracter.charCodeAt(0) - 97 + desplazamiento) % 26 + 97);
        } else {
            return caracter;
        }
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');

    encryptBtn.addEventListener('click', () => {
        const texto = inputText.value;
        const textoCifrado = cifrarTexto(texto);
        outputText.value = textoCifrado;
    });
});

// Desencriptar texto usando cifrado César con un desplazamiento de 3
function descifrarTexto(texto) {
    const desplazamiento = 3;
    return texto.split('').map(caracter => {
        if (caracter >= 'a' && caracter <= 'z') {
            return String.fromCharCode((caracter.charCodeAt(0) - 97 - desplazamiento + 26) % 26 + 97);
        } else {
            return caracter;
        }
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');

    encryptBtn.addEventListener('click', () => {
        const texto = inputText.value;
        const textoCifrado = cifrarTexto(texto);
        outputText.value = textoCifrado;
    });

    decryptBtn.addEventListener('click', () => {
        const texto = inputText.value;
        const textoDescifrado = descifrarTexto(texto);
        outputText.value = textoDescifrado;
    });
});