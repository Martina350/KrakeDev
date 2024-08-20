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
        existeError=true;
        mostrarTexto("lblError2","EL SEGUNDO CARACTER DEBE SER UNA LETRA MAYUSCULA")
    }else{
        mostrarTexto("lblError2"," ");
    }
    if(!esMayuscula(placa.charAt(2))){
        existeError=true;
        mostrarTexto("lblError3","EL TERCER CARACTER DEBE SER UNA LETRA MAYUSCULA")
    }else{
        mostrarTexto("lblError3"," ");
    }
    if(!esGuion(placa.charAt(3))){
        existeError=true;
        mostrarTexto("lblError4","EL CUARTO CARACTER DEBE SER UN GUION")
    }else{
        mostrarTexto("lblError4"," ");
    }
    if(!esDigito(placa.charAt(4))){
        existeError=true;
        mostrarTexto("lblError5","EL QUINTO CARACTER DEBE SER UN DIGITO")
    }else{
        mostrarTexto("lblError5"," ");
    }
    if(!esDigito(placa.charAt(5))){
        existeError=true;
        mostrarTexto("lblError6","EL SEXTO CARACTER DEBE SER UN DIGITO")
    }else{
        mostrarTexto("lblError6"," ");
    }
    if(!esDigito(placa.charAt(6))){
        existeError=true;
        mostrarTexto("lblError7","EL SEPTIMO CARACTER DEBE SER UN DIGITO")
    }else{
        mostrarTexto("lblError7"," ");
    }
    if(placa.length==8){
        if(!esDigito(placa.charAt(7))){
            existeError=true;
            mostrarTexto("lblError8","EL OCTAVO CARACTER DEBE SER UN DIGITO")
        }else{
            mostrarTexto("lblError8"," ");
        }
    }
    
    if(!existeError){
        mostrarTexto("lblResultado")
        return null;
    }else{
        mostrarTexto("lblResultado")
        return true;
    }
}

obtenerProvincia=function(placa){
    let letra=placa.charAt(0);
    let nombreProvincia;
    let existeError = false;
    if (letra == 'A') {
    nombreProvincia = "AZUAY";
    } else if (letra == 'B') {
    nombreProvincia = "BOLÍVAR";
    } else if (letra == 'U') {
    nombreProvincia = "CAÑAR";
    } else if (letra == 'C') {
    nombreProvincia = "CARCHI";
    } else if (letra == 'X') {
    nombreProvincia = "COTOPAXI";
    } else if (letra == 'H') {
    nombreProvincia = "CHIMBORAZO";
    } else if (letra == 'O') {
    nombreProvincia = "EL ORO";
    } else if (letra == 'E') {
    nombreProvincia = "ESMERALDAS";
    } else if (letra == 'W') {
    nombreProvincia = "GALÁPAGOS";
    } else if (letra == 'G') {
    nombreProvincia = "GUAYAS";
    } else if (letra == 'I') {
    nombreProvincia = "IMBABURA";
    } else if (letra == 'L') {
    nombreProvincia = "LOJA";
    } else if (letra == 'R') {
    nombreProvincia = "LOS RÍOS";
    } else if (letra == 'M') {
    nombreProvincia = "MANABÍ";
    } else if (letra == 'V') {
    nombreProvincia = "MORONA SANTIAGO";
    } else if (letra == 'N') {
    nombreProvincia = "NAPO";
    } else if (letra == 'S') {
    nombreProvincia = "PASTAZA";
    } else if (letra == 'P') {
    nombreProvincia = "PICHINCHA";
    } else if (letra == 'K') {
    nombreProvincia = "SUCUMBÍOS";
    } else if (letra == 'Q') {
    nombreProvincia = "ORELLANA";
    } else if (letra == 'T') {
    nombreProvincia = "TUNGURAHUA";
    } else if (letra == 'Z') {
    nombreProvincia = "ZAMORA CHINCHIPE";
    } else if (letra == 'Y') {
    nombreProvincia = "SANTA ELENA";
    } else {
    nombreProvincia=null;
    existeError=true;
    }
    if (existeError) {
        mostrarTexto("lblProvincia");
        return null;
    } else {
        mostrarTexto("lblProvincia",nombreProvincia);
        return nombreProvincia;
    }
}