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