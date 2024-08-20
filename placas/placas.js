validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);

    if(erroresEstructura==null){
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblResultado","ESTRUCTURA INCORRECTA");
    }
    let provincia=obtenerProvincia(placa);
    if (provincia!==null) {
        mostrarTexto("lblProvincia",provincia);
    }else{
        mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
    }
    let vehiculo=obtenerTipoVehiculo(placa);
    if (vehiculo!==null) {
        mostrarTexto("lblVehiculo",vehiculo);
    }else{
        mostrarTexto("lblVehiculo", "VEHICULO INCORRECTO");
    }
    let diaPicoYPlaca=obtenerDiaPicoYPlaca(placa);
    mostrarTexto("lblPicoYPlaca", diaPicoYPlaca);
}

limpiar=function() {
    mostrarTextoEnCaja("txtPlaca","")
    mostrarTexto("lblErrorLongitud", "");
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
    mostrarTexto("lblError4", "");
    mostrarTexto("lblError5", "");
    mostrarTexto("lblError6", "");
    mostrarTexto("lblError7", "");
    mostrarTexto("lblError8", "");
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblVehiculo", "");
    mostrarTexto("lblPicoYPlaca", "");
}