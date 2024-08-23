ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto('txtCadena');
    recorrerCadena(mensaje);
}

ejecutarPrueba2=function(){
    let mensaje;
    let cadenaInvertida;
    mensaje=recuperarTexto('txtCadena');
    cadenaInvertida=invertirCadena(mensaje);
    mostrarTexto("lblResultado",cadenaInvertida);
}

recorrerCadena=function(cadena){
    //0123
    //Juan
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" POSICION "+posicion);
    }
}

invertirCadena=function(cadena){
    let resultado="";
    let letra;
    for(let posicion=cadena.length;posicion>=0;posicion--){
        letra=cadena.charAt(posicion);
        resultado=resultado+letra;
    }
    return resultado;
}