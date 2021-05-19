import cipher from './cipher.js';

cifrar.addEventListener("click", () => {

    var texto1 = document.getElementById("texto1").value;
    var mayuscula = texto1.toUpperCase();
    var offset = document.getElementById("rango").value;




    var mensajecifrado = cipher.encode(mayuscula, offset);

    document.getElementById("texto2").value = mensajecifrado;
});

descifrar.addEventListener("click", () => {

    var texto1 = document.getElementById("texto1").value;
    var mayuscula = texto1.toUpperCase();
    var offset = document.getElementById("rango").value;

    var mensajecifrado = cipher.decode(mayuscula, offset);

    document.getElementById("texto2").value = mensajecifrado;
});







console.log(cipher);