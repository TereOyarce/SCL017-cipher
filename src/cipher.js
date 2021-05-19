const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const cipher = {
    encode: (texto1, offset) => {
        var resultado = "";

        offset = (offset % 26) % 26;
        if (texto1) {
            for (var i = 0; i < texto1.length; i++) {
                if (abc.indexOf(texto1[i] != -1)) {
                    var posicion = (abc.indexOf(texto1[i]) + offset) % 26; /*Traeme del abc,el resultado de la posicion del texto + el offset, y residuo de 26*/
                    resultado += abc[posicion];
                } else {
                    resultado += texto1[i];
                }
            }
        }

        return resultado;
    },

    decode: (texto1, offset) => {
        var resultado = "";

        offset = (offset % 26) % 26;
        /*Esta formula se ocupa para calcular el desplazamiento,
               El 26 es para que al llegar a Z,vuelva a A */


        /* Bucle para que vaya recorriendo el texto y vaya cifrando*/
        if (texto1) {
            for (var i = 0; i < texto1.length; i++) {
                if (abc.indexOf(texto1[i] != -1)) {
                    var posicion = (abc.indexOf(texto1[i]) - offset) % 26;
                    resultado += abc[posicion];
                } else {
                    resultado += texto1[i];
                }
            }
        }

        return resultado;
    },
};
export default cipher;