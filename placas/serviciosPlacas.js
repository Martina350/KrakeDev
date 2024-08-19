validarEstructura=function(placa){
    let existeError = false;

    placa=recuperarTexto("txtPlaca");

    if(placa.length<7 || placa.length>8){
        existeError=true;
        mostrarTexto("lblErrorLongitud","LA PLACA DEBE TENER 7 U 8 CARACTERES");
    }else{
        mostrarTexto("lblErrorLongitud"," ");
    }

    if(!esMayuscula(placa.charAt(0))){
        existeError=true;
        mostrarTexto("lblError1","EL PRIMER CARACTER DEBE SER UNA LETRA MAYUSCULA")
    }else{
        mostrarTexto("lblError1"," ");
    }
    if(!esMayuscula(placa.charAt(1))){
        existeError=true
        mostrarTexto("lblError2","EL SEGUNDO CARACTER DEBE SER UNA LETRA MAYUSCULA")
    }else{
        mostrarTexto("lblError2"," ");
    }
    if(!esMayuscula(placa.charAt(2))){
        existeError=true
        mostrarTexto("lblError3","EL TERCER CARACTER DEBE SER UNA LETRA MAYUSCULA")
    }else{
        mostrarTexto("lblError3"," ");
    }
    if(!esGuion(placa.charAt(3))){
        existeError=true
        mostrarTexto("lblError4","EL CUARTO CARACTER DEBE SER UN GUION")
    }else{
        mostrarTexto("lblError4"," ");
    }
    if(!esDigito(placa.charAt(4))){
        existeError=true
        mostrarTexto("lblError5","EL QUINTO CARACTER DEBE SER UN DIGITO")
    }else{
        mostrarTexto("lblError5"," ");
    }
    if(!esDigito(placa.charAt(5))){
        existeError=true
        mostrarTexto("lblError6","EL SEXTO CARACTER DEBE SER UN DIGITO")
    }else{
        mostrarTexto("lblError6"," ");
    }
    if(!esDigito(placa.charAt(6))){
        existeError=true
        mostrarTexto("lblError6","EL SEPTIMO CARACTER DEBE SER UN DIGITO")
    }else{
        mostrarTexto("lblError6"," ");
    }
    if(placa.lenght==8){
        if(!esDigito(placa.charAt(7))){
            existeError=true
            mostrarTexto("lblError7","EL OCTAVO CARACTER DEBE SER UN DIGITO")
        }else{
            mostrarTexto("lblError7"," ");
        }
    }
    
    if(!existeError){
        mostrarTexto("lblResultado","LA ESTRUCTURA DE LA PLACA ES CORRECTA")
        return null;
    }else{
        mostrarTexto("lblResultado","PLACA NO VALIDA")
        return true;
    }
}