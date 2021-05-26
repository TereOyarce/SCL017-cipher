const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const cipher = {
    encode: (texto1, offset) => {
        var resultado = '';
        offset = (offset % 26) % 26;

        if (texto1) {

            for (var i = 0; i < texto1.length; i++) {
                if (texto1[i] == " ") { resultado += " "; } /*Este If busca si hay un espacio,si es así lo trae*/
                for (var n = 0; n < abc.length; n++) {
                    if (texto1[i].toUpperCase() == abc[n]) { /*El valor de i es = a el valor de n? Si no es así,pasa la siguiente iteración*/
                        var formula = (n + offset) % 26;
                        resultado += abc[formula]; /* Resultado es igual a resultado + el resultado de la formula*/
                    }
                }
            }
        }


        return resultado;

    },

    decode: (texto1, offset) => {
        var resultado = '';

        offset = ((offset % 26) - 26) % 26;
        /*Esta formula se ocupa para calcular el desplazamiento,
               El 26 es para que al llegar a Z,vuelva a A */


        /* Bucle para que vaya recorriendo el texto y vaya cifrando*/
        if (texto1) {
            for (var i = 0; i < texto1.length; i++) {
                if (texto1[i] == " ") { resultado += " "; }
                for (var n = 0; n < abc.length; n++) {
                    if (texto1[i].toUpperCase() == abc[n]) {
                        var formula = (n - offset) % 26;
                        resultado += abc[formula];
                    }
                }
            }
        }

        return resultado;

    },
};
export default cipher;