import cipher from './cipher.js';

cifrar.addEventListener("click", () => {


    var texto1 = document.getElementById("texto1").value;
    var texto2 = document.getElementById("texto2");
    texto2.value = "";
    var offset = document.getElementById("rango").value;




    var mensajecifrado = cipher.encode(texto1, offset);


});

descifrar.addEventListener("click", () => {

    var texto1 = document.getElementById("texto1").value;

    var offset = document.getElementById("rango").value;
    var texto2 = document.getElementById("texto2");
    texto2.value = "";

    var mensajecifrado = cipher.decode(texto1, offset);


});







console.log(cipher);