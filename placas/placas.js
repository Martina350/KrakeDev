validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);

    if(erroresEstructura==null){
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblResultado","ESTRUCTURA INCORRECTA");
    }
}